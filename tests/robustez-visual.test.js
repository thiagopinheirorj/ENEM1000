/* Segurança, robustez do armazenamento, visual, acessibilidade e modo offline. */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { setup, getState, answerQuiz, horizontalOverflow, br, loadContent, ROOT } = require("./helpers");

const DEV = loadContent().DEVOCIONAIS;
const XSS = '<img src=x onerror="window.__xss=1">"\'&<script>window.__xss=2</script>';
let env;
before(async () => { env = await setup(); });
after(async () => { await env.teardown(); });

/* Estado “cheio” para exercitar todas as partes das telas. */
const cheio = {
  inicio: "2026-10-01",
  done: { 1: "2026-10-01", 2: "2026-10-02", 15: "2026-10-15" },
  quiz: { 1: 0, 2: 1, 15: 2 },
  textos: { 1: "Um texto bem comprido " + "palavragrandesemespaco".repeat(12), 2: XSS },
  favoritos: [1, 2, 15, 30],
  dias: ["2026-10-01", "2026-10-02", "2026-10-15"],
  fotos: {},
  prova: "2026-11-08"
};

async function visitarTudo(page, fn) {
  const rotas = ["#/hoje", "#/trilha", "#/kit", "#/progresso", "#/aposta"];
  for (let i = 1; i <= 30; i++) rotas.push("#/dia/" + i);
  for (const r of rotas) {
    // marcador removido quando a tela é redesenhada (evita ler a tela anterior)
    await page.evaluate((h) => {
      if (location.hash === h) return; // já está na tela
      const m = document.createElement("i"); m.id = "__marca"; document.getElementById("app").appendChild(m);
      location.hash = h;
    }, r);
    await page.waitForFunction(() => !document.getElementById("__marca") && document.querySelector("#app h1"));
    await fn(r);
  }
}

describe("R · Segurança e robustez", () => {
  it("R01 · HTML digitado no desafio é escapado no caderno e na tela do dia", async () => {
    const { page } = await env.open({ hash: "#/dia/3" });
    await page.fill("#texto", XSS);
    await page.waitForFunction(() => document.getElementById("saved").textContent.includes("Salvo"));
    await page.evaluate(() => { location.hash = "#/progresso"; });
    await page.waitForSelector(".note");
    assert.equal(await page.locator('.note img[src="x"], .note script').count(), 0);
    assert.equal((await page.textContent(".note p")), XSS);
    await page.waitForTimeout(200);
    assert.equal(await page.evaluate(() => window.__xss), undefined);
    await page.evaluate(() => { location.hash = "#/dia/3"; });
    await page.waitForSelector("#texto");
    assert.equal(await page.inputValue("#texto"), XSS);
  });

  it("R02 · HTML em estado salvo também não executa (Progresso e Trilha)", async () => {
    const { page, errors } = await env.open({ hash: "#/progresso", state: cheio });
    assert.equal(await page.locator('img[src="x"]').count(), 0);
    await page.waitForTimeout(200);
    assert.equal(await page.evaluate(() => window.__xss), undefined);
    assert.deepEqual(errors, []);
  });

  for (const [nome, raw] of [["JSON inválido", "{{{não é json"], ["null", "null"], ["número", "42"], ["texto", '"oi"'], ["lista", "[1,2]"]]) {
    it("R03 · localStorage corrompido (" + nome + ") não quebra o app", async () => {
      const { page, errors } = await env.open({ rawStore: raw });
      assert.equal(await page.textContent("h1"), DEV[0].titulo);
      await answerQuiz(page, true);
      await page.click("#concluir");
      await page.waitForSelector(".done-banner");
      const s = await getState(page);
      assert.equal(s.done["1"], "2026-10-15");
      assert.deepEqual(errors, []);
    });
  }

  it("R04 · JSON válido com campos de tipo errado não quebra nenhuma tela", async () => {
    const raw = JSON.stringify({ inicio: "ontem", done: null, quiz: "x", textos: 5, favoritos: {}, dias: "2026-10-14", fotos: null, prova: 20261108 });
    const { page, errors } = await env.open({ rawStore: raw });
    assert.equal(await page.textContent("h1"), DEV[0].titulo);
    for (const [h, t] of [["#/trilha", "Todos os devocionais"], ["#/progresso", "Progresso"], ["#/kit", "Kit da redação nota 1000"], ["#/hoje", DEV[0].titulo]]) {
      await page.evaluate((h) => { location.hash = h; }, h);
      await page.waitForFunction((t) => document.querySelector("#app h1").textContent === t, t);
    }
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
    assert.deepEqual(errors, []);
  });

  it("R05 · localStorage indisponível (bloqueado) não quebra o app", async () => {
    const init = () => {
      Object.defineProperty(window, "localStorage", { configurable: true, get() { throw new DOMException("bloqueado", "SecurityError"); } });
    };
    const { page, errors } = await env.open({ init });
    assert.equal(await page.textContent("h1"), DEV[0].titulo);
    await answerQuiz(page, true);
    await page.click("#concluir");
    await page.waitForSelector(".done-banner");
    assert.equal(await page.textContent("#streak-count"), "1");
    await page.click("#fav");
    await page.evaluate(() => { location.hash = "#/progresso"; });
    await page.waitForSelector(".stat");
    assert.deepEqual(errors, []);
  });

  it("R06 · estado antigo sem 'fotos' e 'prova' carrega e é completado", async () => {
    const antigo = { inicio: "2026-10-13", done: { 1: "2026-10-13" }, quiz: { 1: 1 }, textos: { 1: "antigo" }, favoritos: [1], dias: ["2026-10-13", "2026-10-14"] };
    const { page, errors } = await env.open({ hash: "#/progresso", state: antigo });
    assert.equal(await page.inputValue("#prova-data"), "2026-11-08");
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
    const s = await getState(page);
    assert.deepEqual(s.fotos, {});
    assert.equal(s.prova, "2026-11-08");
    assert.equal(s.textos["1"], "antigo");
    const stats = await page.$$eval(".stat .v", (v) => v.map((x) => x.textContent));
    assert.deepEqual(stats, ["2", "2", "1/30", "100%"]);
    assert.deepEqual(errors, []);
  });

  it("R07 · links externos da aposta abrem em nova aba com rel=noopener", async () => {
    const { page } = await env.open({ fixed: br("2026-11-07", "10:00"), hash: "#/aposta" });
    const links = await page.$$eval('#app a[href^="http"]', (as) => as.map((a) => [a.target, a.rel]));
    assert.ok(links.length >= 5);
    links.forEach(([t, r]) => { assert.equal(t, "_blank"); assert.match(r, /noopener/); });
  });
});

describe("V · Visual e acessibilidade", () => {
  it("V01 · sem rolagem horizontal em 390 px em todas as telas (claro e escuro)", async () => {
    for (const colorScheme of ["light", "dark"]) {
      const { page } = await env.open({ state: cheio, colorScheme, fixed: br("2026-11-07", "10:00") });
      const ruins = [];
      await visitarTudo(page, async (r) => { const o = await horizontalOverflow(page); if (o > 0) ruins.push(r + " (+" + o + "px)"); });
      // tela do dia concluído com banner de compartilhar
      await page.evaluate(() => { location.hash = "#/dia/15"; });
      await page.waitForSelector(".done-banner");
      if (await horizontalOverflow(page) > 0) ruins.push("banner de conclusão");
      assert.deepEqual(ruins, [], colorScheme);
    }
  });

  it("V02 · privacidade.html sem rolagem horizontal, em português e com tema", async () => {
    const { page, errors, external } = await env.open();
    await page.goto(env.base + "privacidade.html");
    assert.equal(await horizontalOverflow(page), 0);
    assert.equal(await page.getAttribute("html", "lang"), "pt-BR");
    assert.match(await page.textContent("h1"), /Política de Privacidade/);
    assert.deepEqual(errors, []);
    assert.deepEqual(external, []);
  });

  it("V03 · nenhuma requisição externa nem erro de console em todas as telas (celular e desktop)", async () => {
    for (const mobile of [true, false]) {
      const { page, errors, external } = await env.open({ state: cheio, mobile, fixed: br("2026-11-07", "10:00") });
      await visitarTudo(page, async () => {});
      await page.evaluate(() => { location.hash = "#/dia/15"; });
      await page.waitForSelector(".done-banner");
      assert.deepEqual(errors, [], mobile ? "celular" : "desktop");
      assert.deepEqual(external, [], mobile ? "celular" : "desktop");
    }
  });

  it("V04 · tema escuro aplicado pela preferência do sistema e respeitando data-theme", async () => {
    const cor = (page, sel) => page.$eval(sel, (e) => getComputedStyle(e).backgroundColor);
    const claro = await env.open({ colorScheme: "light" });
    assert.equal(await cor(claro.page, "body"), "rgb(247, 243, 236)");
    const escuro = await env.open({ colorScheme: "dark" });
    assert.equal(await cor(escuro.page, "body"), "rgb(18, 22, 31)");
    assert.equal(await escuro.page.$eval("body", (e) => getComputedStyle(e).color), "rgb(233, 230, 223)");
    await escuro.page.evaluate(() => document.documentElement.setAttribute("data-theme", "light"));
    assert.equal(await cor(escuro.page, "body"), "rgb(247, 243, 236)");
    await claro.page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
    assert.equal(await cor(claro.page, "body"), "rgb(18, 22, 31)");
    // elementos com [hidden] continuam escondidos mesmo com display definido no CSS
    assert.ok(await escuro.page.isHidden("#foto-del"));
  });

  it("V05 · botões, campos, imagens e links têm nome acessível; aba ativa com aria-current", async () => {
    const { page } = await env.open({ state: cheio, fixed: br("2026-10-15", "10:00") });
    const problemas = [];
    await visitarTudo(page, async (r) => {
      const p = await page.evaluate(() => {
        const out = [];
        const nome = (el) => (el.getAttribute("aria-label") || el.textContent || el.getAttribute("title") || "").trim();
        document.querySelectorAll("button, a").forEach((el) => { if (!nome(el)) out.push(el.outerHTML.slice(0, 80)); });
        document.querySelectorAll("input, textarea, select").forEach((el) => {
          if (!(el.labels && el.labels.length) && !el.getAttribute("aria-label")) out.push(el.outerHTML.slice(0, 80));
        });
        document.querySelectorAll("img").forEach((el) => { if (!el.hasAttribute("alt")) out.push(el.outerHTML.slice(0, 80)); });
        if (document.querySelectorAll(".tabbar a[aria-current='page']").length !== 1) out.push("aria-current");
        return out;
      });
      p.forEach((x) => problemas.push(r + ": " + x));
    });
    assert.deepEqual(problemas, []);
    assert.equal(await page.getAttribute("html", "lang"), "pt-BR");
    assert.equal(await page.getAttribute("nav.tabbar", "aria-label"), "Navegação principal");
  });

  it("V06 · cada aba marca a si mesma com aria-current", async () => {
    const { page } = await env.open();
    for (const tab of ["trilha", "kit", "progresso", "hoje"]) {
      await page.click('.tabbar a[data-tab="' + tab + '"]');
      await page.waitForFunction((t) => document.querySelector('.tabbar a[aria-current="page"]').dataset.tab === t, tab);
      assert.equal(await page.locator(".tabbar a[aria-current]").count(), 1);
    }
  });
});

describe("O · Offline (service worker)", () => {
  it("O01 · service worker guarda os arquivos e o app abre sem internet", async () => {
    const { page, context, errors } = await env.open({ serviceWorkers: "allow" });
    await page.evaluate(() => navigator.serviceWorker.ready);
    const sw = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8");
    const cache = sw.match(/var CACHE = "([^"]+)"/)[1];
    const assets = JSON.parse(JSON.stringify(vm.runInNewContext(sw.match(/var ASSETS = (\[[\s\S]*?\]);/)[1])));
    await page.waitForFunction(async ({ cache, n }) => {
      const c = await caches.open(cache);
      return (await c.keys()).length >= n;
    }, { cache, n: assets.length });
    await context.setOffline(true);
    await page.reload();
    await page.waitForSelector("#app h1");
    assert.equal(await page.textContent("h1"), DEV[0].titulo);
    await page.goto(env.base + "privacidade.html");
    assert.match(await page.textContent("h1"), /Política de Privacidade/);
    await context.setOffline(false);
    assert.deepEqual(errors.filter((e) => e.startsWith("pageerror")), []);
  });
});
