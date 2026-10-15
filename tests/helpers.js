/*
 * Utilitários compartilhados pelos testes do Redação 1000.
 * - servidor estático em porta aleatória servindo a pasta do repositório
 * - carregamento do Playwright (local ou global, sem instalar nada)
 * - criação de páginas já com relógio simulado, fuso de Brasília e estado pré-carregado
 */
"use strict";

const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");
const zlib = require("zlib");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const STORE_KEY = "enem1000:v1";

function loadPlaywright() {
  try {
    return require("playwright");
  } catch (e) {
    const root = require("child_process").execSync("npm root -g").toString().trim();
    return require(path.join(root, "playwright"));
  }
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
  ".json": "application/json",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8"
};

/* Servidor estático simples (sem dependências). */
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
      if (p.endsWith("/")) p += "index.html";
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); return res.end("not found"); }
        res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
        res.end(data);
      });
    });
    server.listen(0, "127.0.0.1", () => {
      const base = "http://127.0.0.1:" + server.address().port + "/";
      resolve({ server, base, close: () => new Promise((r) => server.close(r)) });
    });
  });
}

/* Carrega content.js num contexto isolado (para testes de dados sem navegador). */
function loadContent() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "js/content.js"), "utf8"), ctx);
  return JSON.parse(JSON.stringify(ctx.window)); // objetos do próprio contexto (deepEqual estrito)
}

/* Mesma função de embaralhamento do app (js/app.js → order). */
function order(n, seed) {
  const idx = [];
  for (let i = 0; i < n; i++) idx.push(i);
  let x = seed >>> 0;
  function rand() {
    x = (x + 0x6d2b79f5) >>> 0;
    let t = Math.imul(x ^ (x >>> 15), 1 | x);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  for (let j = n - 1; j > 0; j--) {
    const k = Math.floor(rand() * (j + 1));
    const t = idx[j]; idx[j] = idx[k]; idx[k] = t;
  }
  return idx;
}

/* ---------- PNG válido gerado em memória ---------- */
const CRC_TABLE = (() => {
  const t = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function makePng(w, h, rgb) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc((w * 3 + 1) * h);
  for (let y = 0; y < h; y++) {
    const o = y * (w * 3 + 1);
    raw[o] = 0;
    for (let x = 0; x < w; x++) {
      raw[o + 1 + x * 3] = rgb[0]; raw[o + 2 + x * 3] = rgb[1]; raw[o + 3 + x * 3] = rgb[2];
    }
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0))
  ]);
}
let tmpDir;
function tmpFile(name, data) {
  if (!tmpDir) tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "enem1000-testes-"));
  const p = path.join(tmpDir, name);
  fs.writeFileSync(p, data);
  return p;
}

/* Instante em Brasília: br("2026-10-15", "10:00") */
function br(date, time) {
  return new Date(date + "T" + (time || "10:00") + ":00-03:00");
}

/*
 * Ambiente de teste: um navegador por arquivo de teste e um servidor estático.
 * env.open(opts) cria contexto+página com:
 *   time        Date — instala relógio simulado (o tempo continua correndo);
 *               padrão: 15/10/2026 10h00 de Brasília
 *   fixed       Date — Date congelado (timers continuam reais)
 *   state       objeto salvo em localStorage antes do primeiro carregamento
 *   rawStore    string bruta para localStorage (para simular corrupção)
 *   init        função/script extra para addInitScript
 *   hash        rota inicial (padrão "#/hoje")
 *   mobile      true (390x844, padrão) ou false (1280x800)
 *   colorScheme "light" | "dark"
 */
async function setup() {
  const pw = loadPlaywright();
  const srv = await startServer();
  const browser = await pw.chromium.launch();
  const contexts = [];

  async function open(opts) {
    opts = opts || {};
    const context = await browser.newContext({
      viewport: opts.mobile === false ? { width: 1280, height: 800 } : { width: 390, height: 844 },
      isMobile: opts.mobile !== false,
      hasTouch: opts.mobile !== false,
      colorScheme: opts.colorScheme || "light",
      locale: "pt-BR",
      timezoneId: "America/Sao_Paulo",
      serviceWorkers: opts.serviceWorkers || "block"
    });
    contexts.push(context);
    const page = await context.newPage();
    const errors = [];
    const external = [];
    page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
    page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
    page.on("request", (r) => {
      const u = r.url();
      if (!u.startsWith(srv.base) && !u.startsWith("blob:") && !u.startsWith("data:")) external.push(u);
    });

    if (opts.time || !opts.fixed) await page.clock.install({ time: opts.time || br("2026-10-15", "10:00") });
    if (opts.fixed) await page.clock.setFixedTime(opts.fixed);

    if (opts.state !== undefined || opts.rawStore !== undefined) {
      const raw = opts.rawStore !== undefined ? opts.rawStore : JSON.stringify(opts.state);
      await page.addInitScript(({ key, raw }) => {
        try {
          if (!sessionStorage.getItem("__seeded")) {
            localStorage.setItem(key, raw);
            sessionStorage.setItem("__seeded", "1");
          }
        } catch (e) { /* armazenamento indisponível */ }
      }, { key: STORE_KEY, raw });
    }
    /* Captura o que for copiado para a área de transferência. */
    if (opts.clipboard !== false) {
      await page.addInitScript(() => {
        window.__copiado = [];
        try {
          Object.defineProperty(navigator, "clipboard", {
            configurable: true,
            value: { writeText: (t) => { window.__copiado.push(t); return Promise.resolve(); } }
          });
        } catch (e) {}
      });
    }
    if (opts.init) await page.addInitScript(opts.init, opts.initArg);

    await page.goto(srv.base + "index.html" + (opts.hash || "#/hoje"));
    await page.waitForSelector("#app > *");
    return { page, context, errors, external };
  }

  async function teardown() {
    for (const c of contexts) await c.close().catch(() => {});
    await browser.close();
    await srv.close();
  }

  return { open, teardown, base: srv.base, browser };
}

/* Lê o estado salvo pelo app. */
async function getState(page) {
  return page.evaluate((k) => JSON.parse(localStorage.getItem(k)), STORE_KEY);
}

/* Responde o quiz da tela atual; correct=true escolhe a certa. Retorna o índice original. */
async function answerQuiz(page, correct) {
  const id = await page.evaluate(() => {
    const m = document.querySelector(".day-meta span:nth-child(2)").textContent.match(/Dia (\d+)/);
    return +m[1];
  });
  const d = await page.evaluate((id) => window.DEVOCIONAIS.find((x) => x.id === id), id);
  const target = correct ? d.quiz.correta : (d.quiz.correta + 1) % d.quiz.opcoes.length;
  await page.click('.option[data-i="' + target + '"]');
  return { id, chosen: target, dev: d };
}

/* Mede rolagem horizontal da página. */
async function horizontalOverflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

module.exports = {
  ROOT, STORE_KEY, loadPlaywright, startServer, loadContent, order, makePng, tmpFile, br,
  setup, getState, answerQuiz, horizontalOverflow
};
