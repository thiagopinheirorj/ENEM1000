/* Telas Trilha, Treino, Kit e Progresso. */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const { setup, getState, loadContent, br } = require("./helpers");

const { DEVOCIONAIS: DEV, KIT } = loadContent();
let env;
before(async () => { env = await setup(); });
after(async () => { await env.teardown(); });

/* Estado de exemplo: começou em 11/10 (hoje, 15/10, é o dia 5). */
function estadoExemplo() {
  return {
    inicio: "2026-10-11",
    done: { 1: "2026-10-10", 2: "2026-10-11", 3: "2026-10-12", 4: "2026-10-14", 5: "2026-10-15" },
    quiz: { 1: DEV[0].quiz.correta, 2: DEV[1].quiz.correta, 3: DEV[2].quiz.correta, 4: (DEV[3].quiz.correta + 1) % 4 },
    textos: { 3: "Goffman e o estigma <b>forte</b>", 1: "Bauman e a liquidez" },
    favoritos: [4, 2],
    dias: ["2026-10-10", "2026-10-11", "2026-10-12", "2026-10-14", "2026-10-15"],
    fotos: {},
    prova: "2026-11-08"
  };
}

describe("T · Trilha", () => {
  it("T01 · lista os 30 dias e o card da aposta (bloqueado antes da véspera)", async () => {
    const { page } = await env.open({ hash: "#/trilha" });
    assert.equal(await page.locator('.list a[href^="#/dia/"]').count(), 30);
    const aposta = page.locator('.list a[href="#/aposta"]');
    assert.equal(await aposta.count(), 1);
    assert.match(await aposta.textContent(), /🔒/);
    assert.match(await aposta.textContent(), /Abre em 07\/11\/2026, véspera da prova/);
    assert.match(await page.textContent("#app"), /0 de 30 concluídos/);
    assert.equal(await page.getAttribute('.tabbar a[data-tab="trilha"]', "aria-current"), "page");
  });

  it("T02 · filtro por eixo mostra só aquele eixo e esconde a aposta", async () => {
    const { page } = await env.open({ hash: "#/trilha" });
    const eixos = [...new Set(DEV.map((d) => d.eixo))];
    const botoes = await page.$$eval(".filter", (bs) => bs.map((b) => b.textContent));
    assert.deepEqual(botoes, ["Todos", "Favoritos", ...eixos]);
    for (const e of eixos.slice(0, 3)) {
      await page.click('.filter[data-e="' + e + '"]');
      assert.equal(await page.getAttribute('.filter[data-e="' + e + '"]', "aria-pressed"), "true");
      assert.equal(await page.getAttribute('.filter[data-e="Todos"]', "aria-pressed"), "false");
      const ids = await page.$$eval('.list a[href^="#/dia/"]', (as) => as.map((a) => +a.getAttribute("href").split("/")[2]));
      assert.deepEqual(ids, DEV.filter((d) => d.eixo === e).map((d) => d.id));
      assert.equal(await page.locator('a[href="#/aposta"]').count(), 0);
    }
    await page.click('.filter[data-e="Todos"]');
    assert.equal(await page.locator('.list a[href^="#/dia/"]').count(), 30);
  });

  it("T03 · filtro Favoritos: estado vazio e depois com favoritos", async () => {
    const { page } = await env.open({ hash: "#/trilha" });
    await page.click('.filter[data-e="Favoritos"]');
    assert.equal(await page.locator(".list").count(), 0);
    assert.match(await page.textContent(".empty"), /Nada por aqui ainda/);

    const ctx = await env.open({ hash: "#/trilha", state: estadoExemplo() });
    await ctx.page.click('.filter[data-e="Favoritos"]');
    const ids = await ctx.page.$$eval('.list a[href^="#/dia/"]', (as) => as.map((a) => a.getAttribute("href")));
    assert.deepEqual(ids, ["#/dia/2", "#/dia/4"]);
    assert.match(await ctx.page.textContent('.list a[href="#/dia/2"] .t'), /★$/);
  });

  it("T04 · marca concluídos (✓) e o dia de hoje", async () => {
    const st = estadoExemplo();
    delete st.done[5];
    const { page } = await env.open({ hash: "#/trilha", state: st });
    assert.match(await page.textContent("#app"), /4 de 30 concluídos/);
    for (const id of [1, 2, 3, 4]) {
      assert.equal(await page.textContent('.list a[href="#/dia/' + id + '"] .num.done'), "✓");
    }
    assert.equal(await page.textContent('.list a[href="#/dia/5"] .num.today'), "5");
    assert.match(await page.textContent('.list a[href="#/dia/5"] .s'), /· hoje$/);
    assert.equal(await page.locator(".list .num.today").count(), 1);
    assert.equal(await page.getAttribute(".bar span", "style"), "width:13%");
  });
});

describe("K · Kit", () => {
  it("K01 · seções presentes, 5 competências, temas anteriores com 2025 e aviso com privacidade", async () => {
    const { page } = await env.open({ hash: "#/kit" });
    for (const s of ["competencias", "estrutura", "conectivos", "proposta", "temas", "redacoes", "zeram"]) {
      assert.equal(await page.locator("#kit-" + s).count(), 1, s);
      assert.equal(await page.locator('.kit-nav a[href="#kit-' + s + '"]').count(), 1, s);
    }
    assert.equal(await page.locator("#kit-competencias .kit-item").count(), 5);
    const temas = await page.textContent("#kit-temas");
    assert.match(temas, /2025/);
    assert.match(temas, new RegExp(KIT.temasAnteriores[0].tema));
    assert.equal(await page.getAttribute(".disclaimer a", "href"), "privacidade.html");
    assert.equal(await page.getAttribute('.tabbar a[data-tab="kit"]', "aria-current"), "page");
  });

  it("K02 · âncoras do Kit rolam até a seção sem trocar de tela", async () => {
    const { page } = await env.open({ hash: "#/kit" });
    await page.click('.kit-nav a[href="#kit-zeram"]');
    await page.waitForFunction(() => {
      const r = document.getElementById("kit-zeram").getBoundingClientRect();
      return window.scrollY > 200 && Math.abs(r.top) < 150 || r.bottom <= window.innerHeight;
    });
    assert.equal(await page.evaluate(() => location.hash), "#/kit");
    assert.equal(await page.textContent("h1"), "Kit da redação nota 1000");
    assert.ok(await page.evaluate(() => window.scrollY) > 200);
  });
});

describe("P · Progresso", () => {
  it("P01 · estatísticas: sequência, melhor sequência, x/30 e % de acertos", async () => {
    const { page } = await env.open({ hash: "#/progresso", state: estadoExemplo() });
    const stats = await page.$$eval(".stat .v", (v) => v.map((x) => x.textContent));
    assert.deepEqual(stats, ["2", "3", "5/30", "75%"]);
    assert.equal(await page.textContent("#streak-count"), "2");
    assert.match(await page.textContent("#app"), /Você começou a trilha em 11\/10\/2026/);
  });

  it("P02 · sem respostas, % de acertos mostra travessão", async () => {
    const { page } = await env.open({ hash: "#/progresso" });
    const stats = await page.$$eval(".stat .v", (v) => v.map((x) => x.textContent));
    assert.deepEqual(stats, ["0", "0", "0/30", "—"]);
  });

  it("P03 · últimos 7 dias marcam os dias estudados", async () => {
    const { page } = await env.open({ hash: "#/progresso", state: estadoExemplo() });
    const dots = await page.$$eval(".week .dot", (d) => d.map((x) => x.classList.contains("on")));
    // 09/10 a 15/10: estudou 10, 11, 12, 14, 15
    assert.deepEqual(dots, [false, true, true, true, false, true, true]);
    const labels = await page.$$eval(".week > div", (d) => d.map((x) => x.firstChild.textContent));
    assert.equal(labels[6], "qui");
  });

  it("P04 · caderno lista textos em ordem e favoritos mostram o repertório", async () => {
    const { page } = await env.open({ hash: "#/progresso", state: estadoExemplo() });
    const notas = await page.$$eval("section:nth-of-type(3) .note a", (a) => a.map((x) => x.getAttribute("href")));
    assert.deepEqual(notas, ["#/dia/1", "#/dia/3"]);
    assert.match(await page.textContent("#app"), /Goffman e o estigma <b>forte<\/b>/);
    const favs = await page.$$eval("section:nth-of-type(4) .note a", (a) => a.map((x) => x.textContent));
    assert.deepEqual(favs, [DEV[1].fonte, DEV[3].fonte]);
  });

  it("P05 · caderno vazio e favoritos vazios mostram mensagens de estado vazio", async () => {
    const { page } = await env.open({ hash: "#/progresso" });
    assert.match(await page.textContent("#app"), /Suas respostas dos desafios de escrita aparecem aqui/);
    assert.match(await page.textContent("#app"), /Toque em ☆ Favoritar/);
  });

  it("P06 · Copiar caderno usa a área de transferência", async () => {
    const { page } = await env.open({ hash: "#/progresso", state: estadoExemplo() });
    await page.click("#exportar");
    await page.waitForSelector(".toast");
    assert.equal(await page.textContent(".toast"), "Caderno copiado ✓");
    const txt = (await page.evaluate(() => window.__copiado))[0];
    assert.ok(txt.startsWith("Redação 1000 — Meu caderno de repertório\n"));
    assert.ok(txt.includes("★ " + DEV[1].fonte + "\n  " + DEV[1].chave));
    assert.ok(txt.indexOf("★ " + DEV[1].fonte) < txt.indexOf("★ " + DEV[3].fonte));
    assert.ok(txt.includes("Dia 1 · " + DEV[0].titulo + "\n" + DEV[0].desafio.enunciado + "\n> Bauman e a liquidez"));
    assert.ok(txt.indexOf("Dia 1 ·") < txt.indexOf("Dia 3 ·"));
    assert.ok(await page.isHidden("#caderno-texto"));
  });

  it("P07 · Copiar caderno sem área de transferência mostra o texto selecionado (fallback)", async () => {
    for (const init of [
      () => { Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined }); },
      () => { Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: () => Promise.reject(new Error("negado")) } }); }
    ]) {
      const { page } = await env.open({ hash: "#/progresso", state: estadoExemplo(), clipboard: false, init });
      await page.click("#exportar");
      await page.waitForSelector("#caderno-texto:not([hidden])");
      assert.match(await page.inputValue("#caderno-texto"), /Meu caderno de repertório/);
      assert.equal(await page.textContent(".toast"), "Selecione o texto e copie");
      const sel = await page.evaluate(() => { const t = document.getElementById("caderno-texto"); return t.selectionEnd - t.selectionStart; });
      assert.ok(sel > 50);
    }
  });

  it("P08 · Recomeçar exige 2 toques, desarma após 4 s e apaga localStorage e fotos", async () => {
    const { page } = await env.open({ hash: "#/progresso", state: Object.assign(estadoExemplo(), { fotos: { 1: true } }) });
    // grava uma foto no IndexedDB do app
    await page.evaluate(() => new Promise((res, rej) => {
      const r = indexedDB.open("enem1000-fotos", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("fotos");
      r.onsuccess = () => { const t = r.result.transaction("fotos", "readwrite"); t.objectStore("fotos").put(new Blob(["x"]), 1); t.oncomplete = () => { r.result.close(); res(); }; t.onerror = rej; };
    }));
    await page.click("#zerar");
    assert.equal(await page.textContent("#zerar"), "Toque de novo para apagar tudo");
    assert.equal((await getState(page)).dias.length, 5);
    await page.clock.fastForward(4100);
    assert.equal(await page.textContent("#zerar"), "Recomeçar do zero");
    await page.click("#zerar");
    assert.equal((await getState(page)).dias.length, 5, "um toque depois de desarmar não apaga");
    await page.click("#zerar");
    await page.waitForSelector(".toast");
    assert.equal(await page.textContent(".toast"), "Trilha reiniciada");
    const s = await getState(page);
    assert.deepEqual(s, { inicio: "2026-10-15", done: {}, quiz: {}, textos: {}, treino: {}, favoritos: [], dias: [], fotos: {}, prova: "2026-11-08", simulados: [], sim: {}, lembrete: {}, envios: [], correcoes: 0, turma: {} });
    assert.equal(await page.textContent("#streak-count"), "0");
    const stats = await page.$$eval(".stat .v", (v) => v.map((x) => x.textContent));
    assert.deepEqual(stats, ["0", "0", "0/30", "—"]);
    const n = await page.evaluate(() => new Promise((res) => {
      const r = indexedDB.open("enem1000-fotos", 1);
      r.onsuccess = () => { const q = r.result.transaction("fotos").objectStore("fotos").count(); q.onsuccess = () => res(q.result); };
    }));
    assert.equal(n, 0);
  });

  it("P09 · Recomeçar com data de prova personalizada atualiza o selo de contagem na hora", async () => {
    const st = Object.assign(estadoExemplo(), { prova: "2026-12-06" });
    const { page } = await env.open({ hash: "#/progresso", state: st });
    assert.equal(await page.textContent("#cd-chip"), "⏳ 52d");
    await page.click("#zerar");
    await page.click("#zerar");
    await page.waitForSelector(".toast");
    assert.equal(await page.inputValue("#prova-data"), "2026-11-08");
    assert.equal(await page.textContent("#cd-chip"), "⏳ 24d");
  });

  it("P10 · aba Progresso fica marcada com aria-current", async () => {
    const { page } = await env.open({ hash: "#/progresso" });
    assert.equal(await page.getAttribute('.tabbar a[data-tab="progresso"]', "aria-current"), "page");
    assert.equal(await page.locator(".tabbar a[aria-current]").count(), 1);
  });
});


describe("TR · Treino, exemplos de conectivos e redações 1000", () => {
  it("TR01 · aba Treino lista as oficinas e abre uma", async () => {
    const { page } = await env.open({ hash: "#/treino" });
    assert.equal(await page.getAttribute('.tabbar a[data-tab="treino"]', "aria-current"), "page");
    assert.ok((await page.locator("a.oficina").count()) >= 6);
    await page.click("a.oficina >> nth=0");
    await page.waitForFunction(() => /tese/i.test(document.querySelector("h1").textContent));
    assert.match(await page.textContent("h1"), /tese/i);
    assert.equal(await page.locator(".quest").count(), 3);
  });

  it("TR02 · responder uma questão mostra o gabarito e guarda o progresso", async () => {
    const { page } = await env.open({ hash: "#/treino/1" });
    await page.click(".quest >> nth=0 >> .option >> nth=0");
    assert.equal(await page.locator(".quest >> nth=0 >> .option.correct").count(), 1);
    assert.equal(await page.locator(".quest >> nth=0 >> .option:not([disabled])").count(), 0);
    assert.ok(await page.locator(".quest >> nth=0 >> .feedback").count());
    const salvo = await page.evaluate(() => JSON.parse(localStorage.getItem("enem1000:v1")).treino);
    assert.equal(salvo[1][0], 0);
    await page.reload();
    assert.equal(await page.locator(".quest >> nth=0 >> .option:not([disabled])").count(), 0);
  });

  it("TR03 · resposta possível aparece e some; oficina inexistente volta à lista", async () => {
    const { page } = await env.open({ hash: "#/treino/2" });
    assert.equal(await page.isVisible("#t-modelo"), false);
    await page.click("#t-ver");
    assert.equal(await page.isVisible("#t-modelo"), true);
    await page.click("#t-ver");
    assert.equal(await page.isVisible("#t-modelo"), false);
    await page.goto(page.url().split("#")[0] + "#/treino/99");
    assert.equal(await page.textContent("h1"), "Treino");
  });

  it("TR04 · tocar num conectivo mostra frase de exemplo", async () => {
    const { page } = await env.open({ hash: "#/kit" });
    await page.click('.conn[data-c="contudo"]');
    assert.match(await page.textContent("#kit-conectivos .conn-ex:not([hidden])"), /contudo/i);
    await page.click('.conn[data-c="contudo"]');
    assert.equal(await page.locator("#kit-conectivos .conn-ex:not([hidden])").count(), 0);
  });

  it("TR05 · todo conectivo do Kit tem exemplo com o próprio conectivo", async () => {
    const { page } = await env.open({ hash: "#/kit" });
    const falhas = await page.evaluate(() => {
      const out = [];
      document.querySelectorAll(".conn").forEach((b) => {
        const c = b.dataset.c.replace(/ \(.*\)/, "").toLowerCase();
        const ex = (window.CONECTIVOS_EX[b.dataset.c] || "").toLowerCase();
        if (!ex || ex.indexOf(c) < 0) out.push(c);
      });
      return out;
    });
    assert.deepEqual(falhas, []);
  });

  it("TR06 · Kit traz as redações de cada ano de 2009 a 2025 com link oficial", async () => {
    const { page } = await env.open({ hash: "#/kit" });
    const t = await page.textContent("#kit-redacoes");
    for (let a = 2009; a <= 2025; a++) assert.match(t, new RegExp(String(a)));
    assert.match(await page.getAttribute("#kit-redacoes a.btn", "href"), /^https:\/\/www\.gov\.br\/inep/);
  });
});

describe("S · Simulado e lembrete", () => {
  it("S01 · Treino tem o card do simulado e sorteia um tema com 60 minutos", async () => {
    const { page } = await env.open({ hash: "#/treino" });
    await page.click('a[href="#/simulado"]');
    await page.waitForSelector("#sim-start");
    await page.click("#sim-start");
    await page.waitForSelector("#sim-tempo");
    assert.match(await page.textContent("#sim-tempo"), /^(60:00|59:5\d)$/);
    const s = await getState(page);
    assert.ok(s.sim.tema && s.sim.inicio);
    assert.equal(await page.getAttribute('.tabbar a[data-tab="treino"]', "aria-current"), "page");
  });

  it("S02 · conta linhas, avisa acima de 30 e entrega para o histórico", async () => {
    const { page } = await env.open({ hash: "#/simulado" });
    await page.click("#sim-start");
    await page.fill("#sim-txt", Array(31).fill("linha").join("\n"));
    assert.match(await page.textContent("#sim-lin"), /31 \/ 30 linhas · passou do limite/);
    await page.fill("#sim-txt", "Introdução com tese.\nDesenvolvimento.\nConclusão.");
    assert.match(await page.textContent("#sim-lin"), /^3 \/ 30 linhas/);
    await page.click("#sim-fim");
    await page.waitForSelector("#sim-start");
    const s = await getState(page);
    assert.equal(s.simulados.length, 1);
    assert.deepEqual(s.sim, {});
    assert.match(await page.textContent("#app"), /Seus simulados/);
  });

  it("S03 · tempo continua contando depois de recarregar", async () => {
    const inicio = br("2026-10-15", "09:10").getTime(); // relógio simulado: 10h → faltam 10 min
    const { page } = await env.open({ hash: "#/simulado", state: { sim: { tema: "Tema X", inicio, texto: "rascunho" } } });
    await page.waitForSelector("#sim-tempo");
    assert.match(await page.textContent("#sim-tempo"), /^(0\d):\d\d$/);
    assert.equal(await page.inputValue("#sim-txt"), "rascunho");
  });

  it("S04 · lembrete gera arquivo de agenda diário com o horário escolhido", async () => {
    const { page } = await env.open({ hash: "#/progresso" });
    await page.fill("#lem-hora", "07:30");
    const [dl] = await Promise.all([page.waitForEvent("download"), page.click("#lem-cal")]);
    assert.equal(dl.suggestedFilename(), "lembrete-redacao1000.ics");
    const txt = require("fs").readFileSync(await dl.path(), "utf8");
    assert.match(txt, /RRULE:FREQ=DAILY/);
    assert.match(txt, /T073000/);
    assert.equal((await getState(page)).lembrete.hora, "07:30");
  });
});

describe("F · Fale com o professor", () => {
  it("F01 · botão em todas as telas abre os assuntos com o progresso do aluno na mensagem", async () => {
    const st = { inicio: "2026-10-11", done: { 1: "2026-10-11", 2: "2026-10-12" }, dias: ["2026-10-14", "2026-10-15"],
      simulados: [{ tema: "Tema Y", texto: "x", data: "2026-10-14", seg: 3000 }] };
    const { page } = await env.open({ hash: "#/kit", state: st });
    await page.click("#fab-prof");
    await page.waitForSelector("#prof-sheet");
    assert.equal(await page.locator("#prof-sheet a[data-motivo]").count(), 4);
    const href = decodeURIComponent(await page.getAttribute('#prof-sheet a[data-motivo="simulado"]', "href"));
    assert.match(href, /^https:\/\/wa\.me\/5521972032275\?text=/);
    assert.match(href, /dia 5 da trilha, 2 dias concluídos, 2 dias seguidos, 1 simulado\(s\) feito\(s\)/);
    assert.match(href, /Tema: Tema Y\./);
    await page.click("#prof-fechar");
    assert.equal(await page.locator("#prof-sheet").count(), 0);
  });

  it("F02 · trocar de tela fecha a janela", async () => {
    const { page } = await env.open({ hash: "#/hoje" });
    await page.click("#fab-prof");
    await page.evaluate(() => { location.hash = "#/trilha"; });
    await page.waitForFunction(() => !document.getElementById("prof-sheet"));
  });
});

describe("C · Correção rápida", () => {
  const BOA_INTRO = "Segundo o sociólogo Zygmunt Bauman, as relações na modernidade tornaram-se líquidas. Nesse sentido, " +
    "é preciso reconhecer que a desinformação em saúde persiste no Brasil, seja pela falta de educação midiática, seja pela omissão das plataformas digitais.";
  const FRACA = "Eu acho que a desinformação é ruim pra todo mundo e tem que acabar logo.";
  const BOA_PROPOSTA = "Portanto, cabe ao Ministério da Educação criar oficinas de educação midiática nas escolas, por meio de parcerias com universidades, " +
    "que formem professores, a fim de que os jovens identifiquem notícias falsas.";

  it("C01 · introdução completa atende todos os pontos", async () => {
    const { page } = await env.open({ hash: "#/correcao" });
    await page.fill("#cr-txt", BOA_INTRO);
    await page.click("#cr-ok");
    assert.match(await page.textContent("#cr-res h2"), /^6 de 6 pontos atendidos$/);
    assert.equal((await getState(page)).correcoes, 1);
  });

  it("C02 · texto informal e curto aponta o que falta", async () => {
    const { page } = await env.open({ hash: "#/correcao" });
    await page.fill("#cr-txt", FRACA);
    await page.click("#cr-ok");
    const t = await page.textContent("#cr-res");
    assert.match(t, /C1 ✗ Evite 1ª pessoa/);
    assert.match(t, /C2 ✗ Está curta/);
    assert.match(t, /C2 ✗ Abra com um repertório/);
    assert.match(t, /C3 ✗ Anuncie os dois argumentos/);
  });

  it("C03 · proposta checa os 5 elementos e direitos humanos", async () => {
    const { page } = await env.open({ hash: "#/correcao" });
    await page.click('[data-tipo="proposta"]');
    await page.fill("#cr-txt", BOA_PROPOSTA);
    await page.click("#cr-ok");
    assert.match(await page.textContent("#cr-res h2"), /^8 de 8 pontos atendidos$/);
    await page.fill("#cr-txt", "O governo deve aplicar a pena de morte para resolver o problema da violência no país inteiro.");
    await page.click("#cr-ok");
    const t = await page.textContent("#cr-res");
    assert.match(t, /C5 ✗ Atenção: propostas que ferem os direitos humanos/);
    assert.match(t, /C5 ✗ Falta meio/);
    assert.match(t, /C5 ✗ Falta finalidade/);
  });

  it("C04 · Treino tem o card da correção rápida", async () => {
    const { page } = await env.open({ hash: "#/treino" });
    assert.equal(await page.locator('#app a[href="#/correcao"]').count(), 1);
  });
});

describe("R · Semana e conquistas", () => {
  it("R01 · pontos da semana somam devocionais, simulados e envios; compara com a anterior", async () => {
    // hoje 15/10/2026 é quinta; semana começa na segunda 12/10
    const st = { inicio: "2026-10-05", done: { 1: "2026-10-05", 2: "2026-10-12", 3: "2026-10-13", 4: "2026-10-15" },
      dias: ["2026-10-05", "2026-10-12", "2026-10-13", "2026-10-15"],
      simulados: [{ tema: "T", texto: "x", data: "2026-10-14", seg: 3000 }], envios: [{ data: "2026-10-15", tema: "T", paginas: 1 }] };
    const { page } = await env.open({ hash: "#/progresso", state: st });
    assert.equal(await page.textContent("#pts-semana"), "80");
    assert.match(await page.textContent("#ranking"), /▲ 70 a mais que a semana passada.*🏆 Sua melhor semana!/);
    assert.equal(await page.locator("#ranking .bar").count(), 4);
  });

  it("R02 · conquistas desbloqueiam conforme o progresso", async () => {
    const st = { inicio: "2026-10-15", done: { 1: "2026-10-15" }, dias: ["2026-10-15"], simulados: [{ tema: "T", texto: "x", data: "2026-10-15", seg: 10 }] };
    const { page } = await env.open({ hash: "#/progresso", state: st });
    assert.match(await page.textContent("#conquistas h2"), /2\/10/);
    const on = await page.$$eval("#conquistas .badge.on strong", (b) => b.map((x) => x.textContent));
    assert.deepEqual(on, ["Primeiro passo", "Prova de fogo"]);
  });

  it("R03 · desafiar um amigo compartilha os pontos", async () => {
    const { page } = await env.open({ hash: "#/progresso", init: () => { window.__t = []; navigator.share = (d) => { window.__t.push(d.text); return Promise.resolve(); }; } });
    await page.click("#pts-desafiar");
    assert.match(await page.evaluate(() => window.__t[0]), /^🏁 Fiz 0 pontos esta semana no Redação 1000.*github\.io\/ENEM1000\//);
  });
});

describe("TU · Turmas", () => {
  it("TU01 · professor gera convite; aluno entra com o nome e manda o progresso", async () => {
    const { page } = await env.open({ hash: "#/professor", init: () => { window.__t = []; navigator.share = (d) => { window.__t.push(d.text); return Promise.resolve(); }; } });
    await page.fill("#pf-escola", "Colégio Ação");
    await page.fill("#pf-turma", "3º ano B");
    await page.click("#pf-gerar");
    const link = await page.textContent("#pf-link");
    assert.match(link, /^https:\/\/thiagopinheirorj\.github\.io\/ENEM1000\/#\/turma\/[A-Za-z0-9_-]+$/);
    assert.match(decodeURIComponent(await page.getAttribute("#pf-whats", "href")), /Turma 3º ano B \(Colégio Ação\)/);
    await page.evaluate((h) => { location.hash = h; }, link.slice(link.indexOf("#")));
    await page.waitForSelector("#tm-nome");
    assert.match(await page.textContent("#app h1"), /3º ano B/);
    await page.fill("#tm-nome", "Ana");
    await page.click("#tm-entrar");
    await page.waitForSelector("#tm-relatorio");
    assert.deepEqual((await getState(page)).turma, { escola: "Colégio Ação", nome: "3º ano B", aluno: "Ana" });
    await page.click("#tm-relatorio");
    const rel = await page.evaluate(() => window.__t[0]);
    assert.match(rel, /Colégio Ação · 3º ano B\nAluno\(a\): Ana\nDevocionais concluídos: 0\/30/);
    await page.click("#tm-sair");
    assert.deepEqual((await getState(page)).turma, {});
  });

  it("TU02 · convite inválido mostra aviso", async () => {
    const { page } = await env.open({ hash: "#/turma/abcdef" });
    assert.match(await page.textContent("#app"), /Convite inválido/);
  });
});
