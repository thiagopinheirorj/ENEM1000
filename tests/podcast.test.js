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

  it("PC04 · npm run podcast gera 31 roteiros e o índice", () => {
    const pasta = path.join(ROOT, "podcast", "roteiros");
    execFileSync(process.execPath, [path.join(ROOT, "podcast", "gerar-roteiros.js")], { stdio: "pipe" });
    const arquivos = fs.readdirSync(pasta).filter((f) => /^ep\d\d-.+\.md$/.test(f));
    assert.equal(arquivos.length, 31);
    const indice = fs.readFileSync(path.join(pasta, "INDICE.md"), "utf8");
    arquivos.forEach((f) => assert.ok(indice.includes("(" + f + ")"), f));
    const ep1 = fs.readFileSync(path.join(pasta, arquivos.find((f) => f.startsWith("ep01"))), "utf8");
    assert.match(ep1, /^# Episódio 1 · Relações que escorrem pelos dedos/);
    assert.match(ep1, /_\[pausa de 5 segundos\]_/);
  });
});

/* Voz simulada: registra o que seria falado e termina cada fala logo em seguida. */
function vozFalsa() {
  window.__falas = [];
  window.__canceladas = 0;
  function U(texto) { this.text = texto; }
  window.SpeechSynthesisUtterance = U;
  const synth = {
    speak(u) {
      window.__falas.push({ text: u.text, lang: u.lang, rate: u.rate });
      setTimeout(() => u.onend && u.onend(), 5);
    },
    cancel() { window.__canceladas++; },
    getVoices() { return [{ lang: "pt-BR", name: "Teste" }]; }
  };
  Object.defineProperty(window, "speechSynthesis", { configurable: true, value: synth });
}

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
    assert.match(primeira.text, /^Redação 1000, episódio 1: Relações que escorrem pelos dedos\./);
    assert.equal(primeira.lang, "pt-BR");
    assert.match(await page.textContent("#pl-status"), /Tocando · .+ · \d+ de \d+/);
    // Avança o tempo das pausas até o fim do episódio.
    for (let n = 0; n < 40 && !(await page.textContent("#pl-status")).includes("concluído"); n++) {
      await page.clock.runFor(6000);
    }
    assert.equal(await page.textContent("#pl-status"), "Episódio concluído");
    assert.equal(await page.textContent("#pl-toggle"), "Ouvir de novo");
    const falas = await page.evaluate(() => window.__falas.map((f) => f.text).join(" "));
    assert.match(falas, /Até amanhã!$/);
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
    assert.match(await page.evaluate(() => window.__falas[0].text), /^Redação 1000, episódio especial: a aposta do tema\./);
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
