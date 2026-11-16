/* Biblioteca do Professor: integridade dos dados e fluxos principais da tela. */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadPlaywright, startServer } = require("./helpers");

const ctx = { window: {} };
/* dados.js primeiro; depois os arquivos dados-*.js em ordem alfabética (mesma ordem do index.html) */
const ARQUIVOS = ["dados.js"].concat(fs.readdirSync(path.join(ROOT, "biblioteca")).filter((f) => /^dados-.*\.js$/.test(f)).sort());
ARQUIVOS.forEach((f) => vm.runInNewContext(fs.readFileSync(path.join(ROOT, "biblioteca", f), "utf8"), ctx));
const DB = JSON.parse(JSON.stringify(ctx.window.BIBLIOTECA));
const MAT = DB.materiais;

const TIPOS = ["atividade", "prova", "slides", "mapa", "simulado", "interpretacao", "gramatica", "emergencia"];
const SERIES = ["6", "7", "8", "9", "EM", "1EM", "2EM", "3EM"];
const ASSUNTOS = ["Gramática", "Interpretação", "Literatura", "Redação"];
const cheio = (v) => typeof v === "string" && v.trim().length > 0;
const questoes = (m) => (m.blocos || []).filter((b) => b.k === "q").flatMap((b) => b.it);

describe("B · Dados da biblioteca", () => {
  it("B01 · ids únicos, só com letras, números e hífen", () => {
    const ids = MAT.map((m) => m.id);
    assert.equal(new Set(ids).size, ids.length);
    ids.forEach((id) => assert.match(id, /^[\w-]+$/));
  });

  it("B02 · campos obrigatórios, tipos, anos e assuntos válidos", () => {
    for (const m of MAT) {
      assert.ok(cheio(m.titulo) && cheio(m.resumo), m.id + ": título/resumo");
      assert.ok(TIPOS.includes(m.tipo), m.id + ": tipo");
      assert.ok(Array.isArray(m.serie) && m.serie.length && m.serie.every((s) => SERIES.includes(s)), m.id + ": serie");
      assert.ok(Array.isArray(m.assunto) && m.assunto.length && m.assunto.every((a) => ASSUNTOS.includes(a)), m.id + ": assunto");
    }
  });

  it("B03 · cada tipo de pasta tem ao menos um material, e cada ano também", () => {
    TIPOS.forEach((t) => assert.ok(MAT.some((m) => m.tipo === t), "tipo sem material: " + t));
    SERIES.filter((s) => !["2EM", "3EM"].includes(s)).forEach((s) => assert.ok(MAT.some((m) => m.serie.includes(s)), "ano sem material: " + s));
    ASSUNTOS.forEach((a) => assert.ok(MAT.some((m) => m.assunto.includes(a)), "assunto sem material: " + a));
  });

  it("B04 · slides, mapas e folhas têm o conteúdo do seu tipo", () => {
    for (const m of MAT) {
      if (m.tipo === "slides") {
        assert.ok(Array.isArray(m.slides) && m.slides.length >= 5, m.id);
        assert.ok(m.slides[0].capa, m.id + ": primeiro slide deve ser capa");
        m.slides.forEach((s) => assert.ok(cheio(s.t), m.id + ": slide sem título"));
      } else if (m.tipo === "mapa") {
        assert.ok(cheio(m.mapa.centro) && m.mapa.ramos.length >= 4, m.id);
        m.mapa.ramos.forEach((r) => {
          assert.ok(cheio(r.t), m.id);
          assert.ok((r.itens && r.itens.length) || (r.a && r.a.length && r.b && r.b.length && m.mapa.rotulos), m.id + ": ramo " + r.t);
        });
      } else {
        assert.ok(Array.isArray(m.blocos) && m.blocos.length, m.id + ": sem blocos");
      }
    }
  });

  it("B05 · questões objetivas: 2 a 8 alternativas, gabarito dentro do intervalo, sem alternativas repetidas", () => {
    for (const m of MAT) {
      for (const q of questoes(m)) {
        assert.ok(cheio(q.e), m.id + ": enunciado vazio");
        if (q.alt) {
          assert.ok(q.alt.length >= 2 && q.alt.length <= 8, m.id + ": nº de alternativas em “" + q.e.slice(0, 40) + "”");
          assert.ok(Number.isInteger(q.g) && q.g >= 0 && q.g < q.alt.length, m.id + ": gabarito fora do intervalo");
          assert.ok(q.alt.every(cheio), m.id + ": alternativa vazia");
          assert.equal(new Set(q.alt).size, q.alt.length, m.id + ": alternativas repetidas em “" + q.e.slice(0, 40) + "”");
        } else {
          assert.ok(cheio(q.r), m.id + ": discursiva sem resposta-modelo");
        }
      }
    }
  });

  it("B06 · o gabarito não fica sempre na mesma posição nos simulados e provas", () => {
    for (const m of MAT.filter((x) => x.tipo === "simulado" || x.tipo === "prova")) {
      const gs = questoes(m).filter((q) => q.alt).map((q) => q.g);
      if (gs.length >= 5) assert.ok(new Set(gs).size >= 3, m.id + ": gabaritos pouco variados " + gs);
    }
  });

  it("B08 · há 100 materiais por ano, com ids começando pelo ano e a distribuição esperada por tipo", () => {
    const FUND = { gramatica: 26, interpretacao: 18, atividade: 14, prova: 8, simulado: 4, slides: 10, mapa: 8, emergencia: 12 };
    const MEDIO = { gramatica: 18, interpretacao: 20, atividade: 16, prova: 8, simulado: 4, slides: 12, mapa: 10, emergencia: 12 };
    const anos = [["6", FUND], ["7", FUND], ["8", FUND], ["9", FUND], ["1EM", MEDIO]];
    for (const [ano, esperado] of anos) {
      const lista = MAT.filter((m) => m.id.startsWith(ano + "-"));
      assert.equal(lista.length, 100, "ano " + ano);
      lista.forEach((m) => assert.deepEqual(m.serie, [ano], m.id));
      const porTipo = {};
      lista.forEach((m) => { porTipo[m.tipo] = (porTipo[m.tipo] || 0) + 1; });
      assert.deepEqual(porTipo, esperado, "distribuição do ano " + ano);
    }
  });

  it("B07 · materiais com questões e textos citados trazem fonte; blocos conhecidos", () => {
    const conhecidos = ["instr", "texto", "teoria", "tabela", "q", "plano", "linhas", "prof"];
    for (const m of MAT) for (const b of m.blocos || []) {
      assert.ok(conhecidos.includes(b.k), m.id + ": bloco " + b.k);
      if (b.k === "texto") assert.ok(cheio(b.fonte), m.id + ": texto sem fonte");
    }
  });
});

describe("T · Tela da biblioteca", () => {
  let srv, browser;
  before(async () => { srv = await startServer(); browser = await loadPlaywright().chromium.launch(); });
  after(async () => { await browser.close(); await srv.close(); });

  async function abrir(hash, opts) {
    opts = opts || {};
    const context = await browser.newContext({
      viewport: opts.desktop ? { width: 1280, height: 800 } : { width: 390, height: 844 },
      isMobile: !opts.desktop, hasTouch: !opts.desktop, locale: "pt-BR", colorScheme: opts.escuro ? "dark" : "light"
    });
    const page = await context.newPage();
    const erros = [], externos = [];
    page.on("pageerror", (e) => erros.push(e.message));
    page.on("console", (m) => m.type() === "error" && erros.push(m.text()));
    page.on("request", (r) => { const u = r.url(); if (!u.startsWith(srv.base) && !u.startsWith("data:")) externos.push(u); });
    await page.goto(srv.base + "biblioteca/index.html" + (hash || ""));
    await page.waitForSelector("#titulo");
    return { page, context, erros, externos };
  }
  const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

  it("T01 · a vitrine lista todos os materiais, sem erros, sem rede externa e sem rolagem horizontal", async () => {
    for (const desktop of [false, true]) {
      const { page, context, erros, externos } = await abrir("", { desktop });
      assert.equal(await page.locator(".card").count(), MAT.length);
      assert.match(await page.textContent("#cont"), new RegExp(MAT.length + " materiais"));
      assert.equal(await overflow(page), 0);
      assert.deepEqual(erros, []);
      assert.deepEqual(externos, []);
      await context.close();
    }
  });

  it("T02 · filtros por pasta, ano e assunto combinam e batem com os dados", async () => {
    const { page, context } = await abrir("");
    await page.click('[data-tipo="prova"]');
    assert.equal(await page.locator(".card").count(), MAT.filter((m) => m.tipo === "prova").length);
    await page.click('[data-serie="EM"]');
    const doEM = (m) => m.serie.some((s) => s === "EM" || /^\dEM$/.test(s)); // o filtro “Ensino Médio” abrange o EM geral e os três anos
    assert.equal(await page.locator(".card").count(), MAT.filter((m) => m.tipo === "prova" && doEM(m)).length);
    await page.selectOption("#assunto", "Literatura");
    assert.equal(await page.locator(".card").count(), MAT.filter((m) => m.tipo === "prova" && doEM(m) && m.assunto.includes("Literatura")).length);
    assert.equal(await page.getAttribute('[data-tipo="prova"]', "aria-pressed"), "true");
    await page.click("#limpar");
    assert.equal(await page.locator(".card").count(), MAT.length);
    await context.close();
  });

  it("T03 · a busca ignora acentos e procura dentro do conteúdo", async () => {
    const { page, context } = await abrir("");
    await page.fill("#q", "crase");
    assert.ok((await page.locator(".card").count()) >= 1);
    assert.match(await page.textContent("#lista"), /Crase/);
    await page.fill("#q", "REDACAO enem");
    const n = await page.locator(".card").count();
    assert.ok(n >= 2, "redacao + enem: " + n);
    await page.fill("#q", "zzzxxyy");
    assert.equal(await page.locator(".card").count(), 0);
    assert.match(await page.textContent("#lista"), /Nenhum material/);
    await context.close();
  });

  it("T04 · favoritos são salvos e filtráveis", async () => {
    const { page, context } = await abrir("");
    await page.locator(".fav").first().click();
    await page.locator(".fav").nth(2).click();
    await page.click("#soFav");
    assert.equal(await page.locator(".card").count(), 2);
    await page.reload();
    await page.click("#soFav");
    assert.equal(await page.locator(".card").count(), 2);
    await context.close();
  });

  it("T05 · toda folha abre sem erro, com a versão do aluno sem gabarito e a do professor com gabarito", async () => {
    const { page, context, erros } = await abrir("");
    for (const m of MAT.filter((x) => x.blocos)) {
      await page.evaluate((id) => { location.hash = "#/m/" + id; }, m.id);
      await page.waitForFunction((t) => document.querySelector("#titulo") && document.querySelector("#titulo").textContent === t, m.titulo);
      const obj = questoes(m).filter((q) => q.alt);
      const tem = obj.length > 0;
      const modoProf = m.tipo === "emergencia";
      if (tem && !modoProf) assert.equal(await page.locator(".gab").first().isVisible(), false, m.id + ": gabarito visível para o aluno");
      if (temProf(m) && !modoProf) await page.check("#profChk");
      if (tem) assert.equal(await page.locator(".gab").first().isVisible(), true, m.id + ": sem gabarito para o professor");
      if (tem) assert.equal(await page.locator(".alts li.certa").count(), obj.length, m.id);
      if (!modoProf && temProf(m)) await page.uncheck("#profChk");
    }
    assert.deepEqual(erros, []);
    await context.close();
    function temProf(m) { return !!(m.blocos || []).some((b) => b.k === "q" || b.k === "prof" || b.k === "plano" || JSON.stringify(b).includes('"prof":true')); }
  });

  it("T06 · aula de emergência abre com o roteiro; versão do aluno esconde o roteiro", async () => {
    const { page, context } = await abrir("#/m/emerg-fund-cronica-debate");
    assert.equal(await page.locator(".plano").isVisible(), true);
    await page.uncheck("#profChk");
    assert.equal(await page.locator(".plano").isVisible(), false);
    await context.close();
  });

  it("T07 · escola e professor digitados ficam salvos para os outros materiais", async () => {
    const { page, context } = await abrir("#/m/prova-6-bimestral");
    await page.fill("#inEscola", "Escola Municipal Ipê Amarelo");
    await page.fill("#inProf", "Profa. Ana");
    await page.evaluate(() => { location.hash = "#/m/gram-6-classes"; });
    await page.waitForFunction(() => document.querySelector("#titulo").textContent.includes("Substantivo"));
    assert.equal(await page.inputValue("#inEscola"), "Escola Municipal Ipê Amarelo");
    assert.equal(await page.inputValue("#inProf"), "Profa. Ana");
    await context.close();
  });

  it("T08 · editar, copiar e restaurar", async () => {
    const { page, context } = await abrir("#/m/interp-6-cachorro", { desktop: true });
    await page.addInitScript(() => {});
    await page.evaluate(() => { window.__c = []; Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: (t) => { window.__c.push(t); return Promise.resolve(); } } }); });
    await page.click("#btnEditar");
    assert.equal(await page.getAttribute("#folha", "contenteditable"), "true");
    await page.evaluate(() => { document.querySelector(".enun").lastChild.textContent = " TEXTO EDITADO"; });
    await page.click("#btnCopiar");
    await page.waitForFunction(() => window.__c.length === 1);
    assert.match(await page.evaluate(() => window.__c[0]), /TEXTO EDITADO/);
    await page.click("#btnRestaurar");
    assert.doesNotMatch(await page.textContent("#folha"), /TEXTO EDITADO/);
    assert.equal(await page.getAttribute("#btnEditar", "aria-pressed"), "false");
    await context.close();
  });

  it("T09 · slides: navegação por botões e teclado, notas só para o professor", async () => {
    const { page, context } = await abrir("#/m/slides-em-romantismo", { desktop: true });
    assert.match(await page.textContent("#pos"), /1 \/ 9/);
    assert.equal(await page.isDisabled("#ant"), true);
    await page.click("#prox");
    assert.match(await page.textContent("#pos"), /2 \/ 9/);
    await page.keyboard.press("ArrowRight");
    assert.match(await page.textContent("#pos"), /3 \/ 9/);
    await page.keyboard.press("End");
    assert.equal(await page.isDisabled("#prox"), true);
    await page.keyboard.press("Home");
    assert.match(await page.textContent("#pos"), /1 \/ 9/);
    assert.equal(await page.locator("#nota").isVisible(), false);
    await page.check("#profChk");
    assert.equal(await page.locator("#nota").isVisible(), true);
    await context.close();
  });

  it("T10 · mapa mental: sem vazamento de texto para fora dos cartões e sem rolagem horizontal", async () => {
    for (const desktop of [false, true]) {
      const { page, context } = await abrir("#/m/mapa-em-romantismo-realismo", { desktop });
      assert.equal(await overflow(page), 0);
      const vazou = await page.evaluate(() => [...document.querySelectorAll(".ramo")].filter((r) => r.scrollWidth > r.clientWidth + 1).length);
      assert.equal(vazou, 0);
      await context.close();
    }
  });

  it("T11 · impressão: só a folha aparece (sem barra, sem cabeçalho do site)", async () => {
    const { page, context } = await abrir("#/m/prova-9-bimestral", { desktop: true });
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".barra").isVisible(), false);
    assert.equal(await page.locator("#folha").isVisible(), true);
    await context.close();
  });

  it("T12 · slides na impressão: todos os slides, um por página", async () => {
    const { page, context } = await abrir("#/m/slides-em-estrutura-redacao", { desktop: true });
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".stage").isVisible(), false);
    assert.equal(await page.locator(".slide-box").count(), 8);
    assert.equal(await page.locator(".slide-box").first().isVisible(), true);
    await context.close();
  });

  it("T13 · modo escuro: a folha continua branca e legível", async () => {
    const { page, context } = await abrir("#/m/gram-em-crase", { desktop: true, escuro: true });
    const cor = await page.evaluate(() => { const c = getComputedStyle(document.getElementById("folha")); return [c.backgroundColor, c.color]; });
    assert.equal(cor[0], "rgb(255, 255, 255)");
    assert.equal(cor[1], "rgb(27, 27, 27)");
    await context.close();
  });

  it("T14 · HTML nos campos de escola/professor não é interpretado", async () => {
    const { page, context } = await abrir("#/m/gram-6-classes");
    await page.fill("#inEscola", '<img src=x onerror="window.__x=1">');
    await page.reload();
    await page.waitForSelector("#inEscola");
    assert.equal(await page.evaluate(() => window.__x), undefined);
    assert.match(await page.inputValue("#inEscola"), /<img/);
    await context.close();
  });

  it("T15 · rota inexistente volta para a vitrine", async () => {
    const { page, context } = await abrir("#/m/nao-existe");
    await page.waitForSelector(".card");
    assert.equal(await page.locator(".card").count(), MAT.length);
    await context.close();
  });
});
