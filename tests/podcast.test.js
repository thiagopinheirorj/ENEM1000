/* Podcast: roteiros gerados do conteúdo e player "Ouvir" do app (voz simulada). */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { ROOT, setup, loadContent, order, br } = require("./helpers");
const Podcast = require("../js/podcast.js");

const W = loadContent();
const vm = require("vm");
const CONVERSAS = (() => {
  const sb = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, "js", "conversa.js"), "utf8"), sb);
  return sb.window.CONVERSAS;
})();

describe("PC · Roteiros do podcast", () => {
  it("PC01 · a ordem das alternativas é a mesma do app", () => {
    for (let s = 1; s <= 30; s++) assert.deepEqual(Podcast.ordemAlternativas(4, s), order(4, s));
  });

  it("PC02 · cada episódio tem os blocos do devocional e a resposta certa com a letra do app", () => {
    W.DEVOCIONAIS.forEach((d) => {
      const t = Podcast.roteiroDia(d);
      const blocos = t.map((x) => x.bloco).filter(Boolean);
      assert.deepEqual(blocos, ["Abertura", "Ideia-chave", "Leitura", "Na redação", "Dica de ouro", "Exercício rápido", "Desafio de escrita", "Para refletir", "Encerramento"], "ep " + d.id);
      const letra = String.fromCharCode(65 + order(4, d.id).indexOf(d.quiz.correta));
      assert.ok(t.some((x) => x.texto.startsWith("A resposta certa é a alternativa " + letra + ":")), "ep " + d.id);
      t.forEach((x) => assert.ok(x.texto.length > 0));
    });
  });

  it("PC03 · o texto falado não tem formas escritas (nº, 10.216/2001, (2000), ×, prof.)", () => {
    const todos = W.DEVOCIONAIS.map((d) => Podcast.roteiroDia(d)).concat([Podcast.roteiroAposta(W.APOSTA)]);
    todos.forEach((t) => t.forEach((x) => {
      assert.doesNotMatch(x.texto, /nº|\d\/\d{4}|\(\d{4}\)| × |\bprof\.|~\s*\d/, x.texto.slice(0, 80));
    }));
    assert.equal(Podcast.falado("Lei nº 10.216/2001 assegure"), "Lei número 10.216, de 2001, assegure");
    assert.equal(Podcast.falado("Modernidade Líquida (2000) e Amor Líquido (2003)"), "Modernidade Líquida, de 2000, e Amor Líquido, de 2003");
  });

  it("PC10 · todo episódio é uma conversa entre Thiago e Isa, com falas próprias", () => {
    W.DEVOCIONAIS.forEach((d) => {
      const c = CONVERSAS[d.id];
      assert.ok(c, "falas do episódio " + d.id);
      assert.ok(c.gancho.length >= 3 && c.duvida && c.reflexao.thiago && c.reflexao.isa, "ep " + d.id);
      c.gancho.forEach((f) => assert.ok(["thiago", "isa"].includes(f[0]) && f[1], "ep " + d.id));
      const t = Podcast.roteiroDia(d, c);
      t.forEach((x) => assert.ok(x.voz === "thiago" || x.voz === "isa"));
      assert.ok(t.filter((x) => x.voz === "isa").length >= 8 && t.filter((x) => x.voz === "thiago").length >= 8, "ep " + d.id);
      assert.ok(t.some((x) => x.texto === Podcast.falado(c.duvida)), "dúvida no ep " + d.id);
      const md = Podcast.markdown("x", t);
      assert.match(md, /\*\*Thiago:\*\* /);
      assert.match(md, /\*\*Isa:\*\* /);
    });
    const esp = Podcast.roteiroAposta(W.APOSTA);
    assert.ok(esp.some((x) => x.voz === "isa") && esp.some((x) => x.voz === "thiago"));
  });

  it("PC04 · npm run podcast gera 31 roteiros e o índice", () => {
    const pasta = path.join(ROOT, "podcast", "roteiros");
    execFileSync(process.execPath, [path.join(ROOT, "podcast", "gerar-roteiros.js")], { stdio: "pipe" });
    const arquivos = fs.readdirSync(pasta).filter((f) => /^ep\d\d-.+\.md$/.test(f));
    assert.equal(arquivos.length, 31);
    const indice = fs.readFileSync(path.join(pasta, "INDICE.md"), "utf8");
    arquivos.forEach((f) => assert.ok(indice.includes("(" + f + ")"), f));
    const ep1 = fs.readFileSync(path.join(pasta, arquivos.find((f) => f.startsWith("ep01"))), "utf8");
    assert.match(ep1, /^# Episódio 1 · Relações que escorrem pelos dedos/);
    assert.match(ep1, /\*\*Isa:\*\* Thiago, ontem eu fiz uma limpa nos meus seguidores/);
    assert.match(ep1, /_\[pausa de 5 segundos\]_/);
  });
});

/* Voz simulada: registra o que seria falado e termina cada fala logo em seguida. */
function vozFalsaInit(vozes) {
  if (vozes) window.__vozes = vozes;
  window.__falas = [];
  window.__canceladas = 0;
  function U(texto) { this.text = texto; }
  window.SpeechSynthesisUtterance = U;
  const synth = {
    speak(u) {
      window.__falas.push({ text: u.text, lang: u.lang, rate: u.rate, pitch: u.pitch, voz: u.voice && u.voice.name });
      setTimeout(() => u.onend && u.onend(), 5);
    },
    cancel() { window.__canceladas++; },
    getVoices() { return window.__vozes || [{ lang: "pt-BR", name: "Ana" }, { lang: "pt-BR", name: "Caio" }, { lang: "en-US", name: "Eng" }]; }
  };
  Object.defineProperty(window, "speechSynthesis", { configurable: true, value: synth });
}

const vozFalsa = vozFalsaInit;

describe("PC · Player Ouvir no app", () => {
  let env;
  before(async () => { env = await setup(); });
  after(async () => { await env.teardown(); });

  it("PC05 · Ouvir lê o episódio em pt-BR, mostra o andamento e termina", async () => {
    const { page, errors } = await env.open({ init: vozFalsa });
    await page.click("#ouvir");
    assert.ok(await page.isVisible("#player"));
    assert.ok(await page.isHidden("#ouvir"));
    await page.waitForFunction(() => window.__falas.length >= 3);
    const primeira = await page.evaluate(() => window.__falas[0]);
    assert.match(primeira.text, /Redação 1000\./);
    assert.equal(primeira.lang, "pt-BR");
    assert.equal(primeira.voz, "Caio", "a Isa abre o episódio com a segunda voz");
    await page.waitForFunction(() => window.__falas.some((f) => f.voz === "Ana"));
    assert.match(await page.textContent("#pl-fala"), /^(Thiago|Isa): /);
    assert.match(await page.textContent("#pl-status"), /Tocando · .+ · \d+ de \d+/);
    // Avança o tempo das pausas até o fim do episódio.
    for (let n = 0; n < 40 && !(await page.textContent("#pl-status")).includes("concluído"); n++) {
      await page.clock.runFor(6000);
    }
    assert.equal(await page.textContent("#pl-status"), "Episódio concluído");
    assert.equal(await page.textContent("#pl-toggle"), "Ouvir de novo");
    const falas = await page.evaluate(() => window.__falas.map((f) => f.text).join(" "));
    assert.match(falas, /(tá\?|episódio!|repertório!)$/, "termina com a despedida do Thiago");
    assert.deepEqual(errors, []);
  });

  it("PC06 · pausar, continuar, mudar velocidade e parar", async () => {
    const { page } = await env.open({ init: vozFalsa });
    await page.click("#ouvir");
    await page.waitForFunction(() => window.__falas.length >= 1);
    await page.click("#pl-toggle");
    assert.match(await page.textContent("#pl-status"), /^Pausado/);
    assert.equal(await page.textContent("#pl-toggle"), "Continuar");
    const antes = await page.evaluate(() => window.__falas.length);
    await page.clock.runFor(10000);
    assert.equal(await page.evaluate(() => window.__falas.length), antes, "nada é falado pausado");
    await page.click("#pl-vel");
    assert.equal(await page.textContent("#pl-vel"), "1,25x");
    await page.click("#pl-toggle");
    await page.waitForFunction((n) => window.__falas.length > n, antes);
    assert.equal(await page.evaluate(() => window.__falas[window.__falas.length - 1].rate), 1.25);
    await page.click("#pl-stop");
    assert.ok(await page.isHidden("#player"));
    assert.ok(await page.isVisible("#ouvir"));
  });

  it("PC07 · trocar de tela para o episódio", async () => {
    const { page } = await env.open({ init: vozFalsa });
    await page.click("#ouvir");
    await page.waitForFunction(() => window.__falas.length >= 1);
    await page.evaluate(() => { location.hash = "#/kit"; });
    await page.waitForSelector("#kit-competencias");
    const n = await page.evaluate(() => window.__falas.length);
    await page.clock.runFor(10000);
    assert.equal(await page.evaluate(() => window.__falas.length), n);
    assert.ok(await page.evaluate(() => window.__canceladas) > 0);
  });

  it("PC08 · episódio especial na página da aposta", async () => {
    const { page } = await env.open({ init: vozFalsa, fixed: br("2026-11-07", "10:00"), hash: "#/aposta" });
    await page.click("#ouvir");
    await page.waitForFunction(() => window.__falas.length >= 1);
    assert.match(await page.evaluate(() => window.__falas[0].text), /Episódio especial do Redação 1000/);
  });

  it("PC11 · com uma só voz em português, Thiago e Isa falam em tons diferentes", async () => {
    const { page } = await env.open({ init: vozFalsaInit, initArg: [{ lang: "pt-BR", name: "Unica" }] });
    await page.click("#ouvir");
    await page.waitForFunction(() => window.__falas.length >= 3);
    const tons = await page.evaluate(() => Array.from(new Set(window.__falas.map((f) => f.pitch))).sort());
    assert.deepEqual(tons, [0.8, 1.2]);
  });

  it("PC09 · sem voz no navegador, o botão Ouvir não aparece", async () => {
    const { page, errors } = await env.open({
      init: () => { Object.defineProperty(window, "speechSynthesis", { configurable: true, value: undefined }); }
    });
    assert.equal(await page.$("#ouvir"), null);
    assert.equal(await page.$("#player"), null);
    assert.deepEqual(errors, []);
  });
});
