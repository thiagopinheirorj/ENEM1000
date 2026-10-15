/* Fluxo do devocional do dia: quiz, conclusão, favoritos, desafio de escrita e navegação. */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const { setup, getState, answerQuiz, order, loadContent } = require("./helpers");

const DEV = loadContent().DEVOCIONAIS;
let env;
before(async () => { env = await setup(); });
after(async () => { await env.teardown(); });

describe("D · Devocional do dia", () => {
  it("D01 · acertar o quiz mostra feedback, marca a certa, desabilita botões e persiste", async () => {
    const { page, errors } = await env.open();
    const r = await answerQuiz(page, true);
    assert.equal(r.id, 1);
    assert.match(await page.textContent("#quiz-fb .feedback.ok"), /Acertou!/);
    assert.equal(await page.locator(".option.correct").count(), 1);
    assert.equal(await page.locator(".option.wrong").count(), 0);
    assert.equal(await page.getAttribute(".option.correct", "data-i"), String(r.dev.quiz.correta));
    assert.equal(await page.locator(".option:not([disabled])").count(), 0);
    assert.equal((await getState(page)).quiz["1"], r.dev.quiz.correta);

    await page.reload();
    await page.waitForSelector(".option");
    assert.equal(await page.locator(".option:not([disabled])").count(), 0);
    assert.equal(await page.locator(".option.correct").count(), 1);
    assert.match(await page.textContent("#quiz-fb"), /Acertou!/);
    assert.deepEqual(errors, []);
  });

  it("D02 · errar o quiz mostra 'Quase', marca a errada e a certa", async () => {
    const { page } = await env.open();
    const r = await answerQuiz(page, false);
    assert.match(await page.textContent("#quiz-fb .feedback.bad"), /Quase\./);
    assert.match(await page.textContent("#quiz-fb"), new RegExp(r.dev.quiz.explicacao.slice(0, 20).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.equal(await page.getAttribute(".option.wrong", "data-i"), String(r.chosen));
    assert.equal(await page.getAttribute(".option.correct", "data-i"), String(r.dev.quiz.correta));
    assert.equal(await page.locator(".option:not([disabled])").count(), 0);
    await page.reload();
    await page.waitForSelector(".option.wrong");
    assert.match(await page.textContent("#quiz-fb"), /Quase\./);
  });

  it("D03 · alternativas aparecem na ordem embaralhada estável (A–D) e data-i guarda o índice original", async () => {
    const { page } = await env.open({ hash: "#/dia/7" });
    const opts = await page.$$eval(".option", (bs) => bs.map((b) => ({ i: +b.dataset.i, t: b.textContent })));
    const exp = order(4, 7);
    assert.deepEqual(opts.map((o) => o.i), exp);
    opts.forEach((o, pos) => {
      assert.ok(o.t.startsWith("ABCD"[pos] + ") "), o.t);
      assert.ok(o.t.endsWith(DEV[6].quiz.opcoes[o.i]));
    });
  });

  it("D04 · concluir fica desabilitado até responder; ao concluir atualiza sequência e banner", async () => {
    const { page } = await env.open();
    assert.ok(await page.isDisabled("#concluir"));
    assert.match(await page.textContent("#finish"), /Responda o exercício rápido/);
    await answerQuiz(page, true);
    assert.ok(!(await page.isDisabled("#concluir")));
    assert.equal(await page.textContent("#streak-count"), "0");
    await page.click("#concluir");
    await page.waitForSelector(".done-banner");
    assert.match(await page.textContent(".done-banner"), /Sequência atual: 1 dia/);
    assert.equal(await page.textContent("#streak-count"), "1");
    const s = await getState(page);
    assert.equal(s.done["1"], "2026-10-15");
    assert.deepEqual(s.dias, ["2026-10-15"]);
    await page.reload();
    await page.waitForSelector(".done-banner");
    assert.match(await page.textContent(".day-meta"), /✓ Concluído/);
    assert.equal(await page.textContent("#streak-count"), "1");
  });

  it("D05 · favoritar e desfavoritar", async () => {
    const { page } = await env.open();
    assert.equal(await page.getAttribute("#fav", "aria-pressed"), "false");
    await page.click("#fav");
    assert.equal(await page.getAttribute("#fav", "aria-pressed"), "true");
    assert.equal(await page.textContent("#fav"), "★ Favorito");
    assert.match(await page.textContent(".toast"), /Salvo nos favoritos/);
    assert.deepEqual((await getState(page)).favoritos, [1]);
    await page.reload();
    await page.waitForSelector("#fav");
    assert.equal(await page.getAttribute("#fav", "aria-pressed"), "true");
    await page.click("#fav");
    assert.equal(await page.getAttribute("#fav", "aria-pressed"), "false");
    assert.equal(await page.textContent("#fav"), "☆ Favoritar");
    assert.deepEqual((await getState(page)).favoritos, []);
  });

  it("D06 · texto do desafio salva sozinho e persiste; apagar remove do caderno", async () => {
    const { page } = await env.open();
    await page.fill("#texto", "Conforme Bauman, os laços são líquidos.");
    await page.waitForFunction(() => document.getElementById("saved").textContent.includes("Salvo no aparelho"));
    assert.equal((await getState(page)).textos["1"], "Conforme Bauman, os laços são líquidos.");
    await page.reload();
    await page.waitForSelector("#texto");
    assert.equal(await page.inputValue("#texto"), "Conforme Bauman, os laços são líquidos.");
    await page.fill("#texto", "   ");
    await page.waitForFunction(() => document.getElementById("saved").textContent.includes("Salvo no aparelho"));
    assert.equal((await getState(page)).textos["1"], undefined);
  });

  it("D07 · resposta-modelo abre ao tocar", async () => {
    const { page } = await env.open();
    assert.ok(!(await page.isVisible("details.model p")));
    await page.click("details.model summary");
    assert.ok(await page.isVisible("details.model p"));
    assert.equal((await page.textContent("details.model p")).trim(), DEV[0].desafio.modelo);
  });

  it("D08 · navegação anterior/próximo, inclusive 1→30 e 30→1", async () => {
    const { page } = await env.open({ hash: "#/dia/1" });
    await page.click("text=← Anterior");
    await page.waitForFunction(() => location.hash === "#/dia/30");
    await page.waitForFunction((t) => document.querySelector("h1") && document.querySelector("h1").textContent === t, DEV[29].titulo);
    await page.click("text=Próximo →");
    await page.waitForFunction(() => location.hash === "#/dia/1");
    await page.waitForFunction((t) => document.querySelector("h1") && document.querySelector("h1").textContent === t, DEV[0].titulo);
    await page.click("text=Próximo →");
    await page.waitForFunction(() => location.hash === "#/dia/2");
    await page.waitForFunction((t) => document.querySelector("h1") && document.querySelector("h1").textContent === t, DEV[1].titulo);
    assert.equal(await page.evaluate(() => window.scrollY), 0);
  });

  it("D09 · dia inexistente volta para Hoje", async () => {
    const { page } = await env.open({ hash: "#/dia/31" });
    await page.waitForFunction(() => location.hash === "#/hoje");
    await page.waitForFunction((t) => document.querySelector("h1") && document.querySelector("h1").textContent === t, DEV[0].titulo);
  });

  it("D10 · Hoje mostra contagem e data; outro dia mostra 'Dia N da trilha' e aba Trilha ativa", async () => {
    const { page } = await env.open();
    assert.match(await page.textContent(".day-head .eyebrow"), /^Hoje · quinta-feira, 15 de outubro/);
    assert.equal(await page.locator(".js-countdown").count(), 1);
    assert.equal(await page.getAttribute('.tabbar a[data-tab="hoje"]', "aria-current"), "page");
    await page.evaluate(() => { location.hash = "#/dia/5"; });
    await page.waitForFunction(() => document.querySelector(".day-head .eyebrow").textContent === "Dia 5 da trilha");
    assert.equal(await page.locator(".js-countdown").count(), 0);
    assert.equal(await page.getAttribute('.tabbar a[data-tab="trilha"]', "aria-current"), "page");
    assert.equal(await page.getAttribute('.tabbar a[data-tab="hoje"]', "aria-current"), null);
  });

  it("D11 · quiz respondido em um dia não afeta os outros dias", async () => {
    const { page } = await env.open();
    await answerQuiz(page, true);
    await page.evaluate(() => { location.hash = "#/dia/2"; });
    await page.waitForFunction((t) => document.querySelector("h1").textContent === t, DEV[1].titulo);
    assert.equal(await page.locator(".option:not([disabled])").count(), 4);
    assert.ok(await page.isDisabled("#concluir"));
  });
});
