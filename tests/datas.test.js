/* Lógica dependente de data, com relógio simulado (fuso de Brasília). */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const { setup, getState, answerQuiz, br, loadContent } = require("./helpers");

const DEV = loadContent().DEVOCIONAIS;
let env;
before(async () => { env = await setup(); });
after(async () => { await env.teardown(); });

async function concluirHoje(page) {
  await answerQuiz(page, true);
  await page.click("#concluir");
  await page.waitForSelector(".done-banner");
}
async function irPara(page, date, time, hash) {
  await page.clock.setSystemTime(br(date, time));
  if (hash) await page.evaluate((h) => { location.hash = h; }, hash);
  await page.reload();
  await page.waitForSelector("#app > *");
}
/* Texto da contagem, com espaço entre número e unidade ("24 dias 3 h 30 min ..."). */
const cd = (page) => page.evaluate(() => document.querySelector(".js-countdown").innerText.replace(/\s+/g, " ").trim())
  .then((t) => t.replace(/(\d+)(dias?|h|min)\b/g, "$1 $2"));

describe("DT · Sequência e dia da trilha", () => {
  it("DT01 · sequência cresce em dias seguidos e quebra quando um dia fica sem estudo", async () => {
    const { page } = await env.open({ time: br("2026-10-15", "08:00") });
    await concluirHoje(page);
    assert.equal(await page.textContent("#streak-count"), "1");

    await irPara(page, "2026-10-16", "08:00");
    assert.equal(await page.textContent(".day-meta span:nth-child(2)"), "Dia 2 de 30 · ~5 min");
    assert.equal(await page.textContent("#streak-count"), "1", "ainda vale a sequência de ontem");
    await concluirHoje(page);
    assert.equal(await page.textContent("#streak-count"), "2");

    await irPara(page, "2026-10-17", "21:00");
    await concluirHoje(page);
    assert.match(await page.textContent(".done-banner"), /Sequência atual: 3 dia/);

    // 18/10 sem estudo; em 19/10 a sequência zera
    await irPara(page, "2026-10-19", "09:00");
    assert.equal(await page.textContent("#streak-count"), "0");
    assert.equal(await page.textContent(".day-meta span:nth-child(2)"), "Dia 5 de 30 · ~5 min");
    await concluirHoje(page);
    assert.equal(await page.textContent("#streak-count"), "1");

    await page.evaluate(() => { location.hash = "#/progresso"; });
    await page.waitForSelector(".stat");
    const stats = await page.$$eval(".stat .v", (v) => v.map((x) => x.textContent));
    assert.deepEqual(stats, ["1", "3", "4/30", "100%"]);
    assert.deepEqual((await getState(page)).dias, ["2026-10-15", "2026-10-16", "2026-10-17", "2026-10-19"]);
  });

  it("DT02 · o dia da trilha avança e dá a volta depois de 30 dias", async () => {
    const casos = [
      ["2026-10-15", 1], ["2026-10-14", 2], ["2026-09-16", 30], ["2026-09-15", 1], ["2026-08-16", 1], ["2026-08-17", 30],
      ["2026-12-01", 1] // início no futuro (relógio voltou): fica no dia 1
    ];
    for (const [inicio, esperado] of casos) {
      const { page } = await env.open({ state: { inicio, done: {}, quiz: {}, textos: {}, favoritos: [], dias: [] } });
      assert.equal(await page.textContent("h1"), DEV[esperado - 1].titulo, "início " + inicio);
      assert.equal(await page.getAttribute('.tabbar a[data-tab="hoje"]', "aria-current"), "page");
    }
  });
});

describe("DT · Contagem regressiva", () => {
  it("DT03 · dias, horas e minutos corretos e selo do topo", async () => {
    const { page } = await env.open({ fixed: br("2026-10-15", "10:00") });
    assert.equal(await cd(page), "24 dias 3 h 30 min para a redação do ENEM · 8 de novembro de 2026, 13h30 (Brasília)");
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
    assert.equal(await page.getAttribute("#cd-chip", "title"), "Faltam 24 dias para a redação do ENEM");
  });

  it("DT04 · véspera à tarde: 1 dia no singular; selo com 1d", async () => {
    const { page } = await env.open({ fixed: br("2026-11-07", "13:29"), hash: "#/dia/1" });
    await page.evaluate(() => { location.hash = "#/aposta"; });
    await page.waitForFunction(() => document.querySelector("h1").textContent === "A aposta do tema");
    assert.match(await cd(page), /^1 dia 0 h 01 min/);
    assert.equal(await page.textContent("#cd-chip"), "⏳ 1d");
    assert.ok(await page.isVisible("#cd-chip"));
  });

  it("DT05 · no dia da prova, antes das 13h30, mostra 'É hoje!'", async () => {
    const { page } = await env.open({ fixed: br("2026-11-08", "09:00"), hash: "#/aposta" });
    const t = await cd(page);
    assert.match(t, /^É hoje!/);
    assert.match(t, /4 ?h ?30 ?min/);
    assert.equal(await page.textContent("#cd-chip"), "⏳ hoje");
    assert.equal(await page.getAttribute("#cd-chip", "title"), "A redação do ENEM é hoje");
  });

  it("DT06 · no dia da prova, depois das 13h30, mostra 'É hoje!' e esconde o selo", async () => {
    const { page } = await env.open({ fixed: br("2026-11-08", "14:00"), hash: "#/aposta" });
    assert.match(await cd(page), /^É hoje! Boa prova/);
    assert.ok(await page.isHidden("#cd-chip"));
  });

  it("DT07 · prova passada mostra mensagem para definir nova data", async () => {
    const { page } = await env.open({ fixed: br("2026-11-10", "10:00"), hash: "#/progresso" });
    assert.match(await cd(page), /A prova de 8 de novembro de 2026 já passou\. Defina a data da próxima em Progresso\./);
    assert.ok(await page.isHidden("#cd-chip"));
  });

  it("DT08 · contagem se atualiza sozinha com o app aberto", async () => {
    const { page } = await env.open({ time: br("2026-10-15", "10:00") });
    await page.clock.pauseAt(br("2026-10-15", "10:00").getTime() + 10000);
    assert.match(await cd(page), /^24 dias 3 h 29 min/);
    await page.clock.runFor(31 * 60 * 1000);
    assert.match(await cd(page), /^24 dias 2 h 58 min/);
  });
});

describe("DT · Aposta do tema", () => {
  it("DT09 · bloqueada antes da véspera", async () => {
    const { page } = await env.open({ fixed: br("2026-11-06", "23:59"), hash: "#/aposta" });
    assert.match(await page.textContent("#app"), /🔒 Esta página abre na véspera da prova, em 7 de novembro/);
    assert.equal(await page.getAttribute("#app a.btn", "href"), "#/dia/1"); // trilha começou hoje
    await page.evaluate(() => { location.hash = "#/hoje"; });
    await page.waitForFunction(() => document.querySelector(".options"));
    assert.equal(await page.textContent("h1"), DEV[0].titulo);
  });

  for (const [data, hora] of [["2026-11-07", "00:01"], ["2026-11-08", "18:00"]]) {
    it("DT10 · liberada em " + data + " " + hora + " (Hoje abre a aposta; Trilha mostra liberado)", async () => {
      const { page } = await env.open({ fixed: br(data, hora), hash: "#/hoje" });
      assert.equal(await page.textContent("h1"), "A aposta do tema");
      assert.match(await page.textContent("#app"), /Desafios para a inclusão de pessoas neurodivergentes/);
      assert.equal(await page.getAttribute('.tabbar a[data-tab="hoje"]', "aria-current"), "page");
      await page.evaluate(() => { location.hash = "#/trilha"; });
      await page.waitForSelector('.list a[href="#/aposta"]');
      assert.match(await page.textContent('.list a[href="#/aposta"]'), /★.*Liberado · véspera da prova/s);
    });
  }

  it("DT10b · depois da prova, Hoje volta ao devocional e a aposta segue na Trilha", async () => {
    const { page } = await env.open({ fixed: br("2026-11-09", "09:00"), hash: "#/hoje" });
    await page.waitForSelector(".options");
    assert.equal(await page.textContent("h1"), DEV[0].titulo);
    await page.evaluate(() => { location.hash = "#/trilha"; });
    await page.waitForSelector('.list a[href="#/aposta"]');
    assert.match(await page.textContent('.list a[href="#/aposta"]'), /Liberado/);
    await page.click('.list a[href="#/aposta"]');
    await page.waitForFunction(() => document.querySelector("h1").textContent === "A aposta do tema");
  });

  it("DT11 · mudar a data da prova no Progresso atualiza contagem, selo e liberação", async () => {
    const { page } = await env.open({ fixed: br("2026-10-15", "10:00"), hash: "#/progresso" });
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
    await page.fill("#prova-data", "2026-10-16");
    await page.waitForSelector(".toast");
    assert.equal(await page.textContent(".toast"), "Data da prova atualizada");
    assert.equal((await getState(page)).prova, "2026-10-16");
    assert.equal(await page.textContent("#cd-chip"), "⏳ 1d");
    assert.match(await cd(page), /^1 dia 3 h 30 min para a redação do ENEM · 16 de outubro de 2026/);
    await page.evaluate(() => { location.hash = "#/trilha"; });
    await page.waitForSelector('.list a[href="#/aposta"]');
    assert.match(await page.textContent('.list a[href="#/aposta"]'), /Liberado/);
    await page.evaluate(() => { location.hash = "#/hoje"; });
    await page.waitForFunction(() => document.querySelector("h1").textContent === "A aposta do tema");

    await page.evaluate(() => { location.hash = "#/progresso"; });
    await page.waitForSelector("#prova-padrao");
    await page.click("#prova-padrao");
    assert.equal(await page.inputValue("#prova-data"), "2026-11-08");
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
    assert.equal((await getState(page)).prova, "2026-11-08");
    await page.evaluate(() => { location.hash = "#/trilha"; });
    await page.waitForSelector('.list a[href="#/aposta"]');
    assert.match(await page.textContent('.list a[href="#/aposta"]'), /🔒/);
  });

  it("DT12 · apagar o campo de data não altera a data salva", async () => {
    const { page } = await env.open({ fixed: br("2026-10-15", "10:00"), hash: "#/progresso" });
    await page.fill("#prova-data", "");
    await page.dispatchEvent("#prova-data", "change");
    assert.equal((await getState(page)).prova, "2026-11-08");
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
  });
});

describe("DT · Virada da meia-noite com o app aberto", () => {
  it("DT13 · a tela Hoje passa para o novo dia e a sequência é recalculada", async () => {
    const st = { inicio: "2026-10-14", done: { 1: "2026-10-14" }, quiz: { 1: 0 }, textos: {}, favoritos: [], dias: ["2026-10-14"], fotos: {}, prova: "2026-11-08" };
    const { page } = await env.open({ time: br("2026-10-15", "23:59"), state: st });
    assert.equal(await page.textContent("h1"), DEV[1].titulo);
    assert.equal(await page.textContent("#streak-count"), "1");
    await page.clock.fastForward(90 * 1000);
    await page.waitForFunction((t) => document.querySelector("h1").textContent === t, DEV[2].titulo, { timeout: 3000 });
    assert.match(await page.textContent(".day-head .eyebrow"), /16 de outubro/);
    assert.equal(await page.textContent("#streak-count"), "0");
  });

  it("DT14 · concluir depois da meia-noite registra o novo dia", async () => {
    const { page } = await env.open({ time: br("2026-10-15", "23:59"), hash: "#/dia/1" });
    await answerQuiz(page, true);
    await page.clock.fastForward(70 * 1000);
    await page.click("#concluir");
    await page.waitForSelector(".done-banner");
    const s = await getState(page);
    assert.deepEqual(s.dias, ["2026-10-16"]);
    assert.equal(s.done["1"], "2026-10-16");
    assert.equal(await page.textContent("#streak-count"), "1");
  });
});
