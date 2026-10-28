/* Foto do texto escrito à mão e compartilhamento da conquista. */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const { setup, getState, answerQuiz, makePng, tmpFile, br, loadContent } = require("./helpers");

const DEV = loadContent().DEVOCIONAIS;
const APP_URL = "https://thiagopinheirorj.github.io/ENEM1000/";
let env, pngGrande, pngPequeno, falso;
before(async () => {
  env = await setup();
  pngGrande = tmpFile("folha-grande.png", makePng(2400, 1200, [240, 230, 210]));
  pngPequeno = tmpFile("folha-pequena.png", makePng(300, 200, [20, 40, 90]));
  falso = tmpFile("nao-e-imagem.png", Buffer.from("isto não é uma imagem"));
});
after(async () => { await env.teardown(); });

const fotoNoBanco = (page, id) => page.evaluate((id) => new Promise((res) => {
  const r = indexedDB.open("enem1000-fotos", 1);
  r.onupgradeneeded = () => r.result.createObjectStore("fotos");
  r.onsuccess = () => {
    const q = r.result.transaction("fotos").objectStore("fotos").get(id);
    q.onsuccess = () => { const b = q.result; r.result.close(); res(b ? { type: b.type, size: b.size } : null); };
  };
}), id);
const imgSize = (page, sel) => page.$eval(sel, (i) => ({ w: i.naturalWidth, h: i.naturalHeight, src: i.src }));

describe("F · Foto do texto", () => {
  it("F01 · anexar foto: aparece reduzida (máx. 1600 px, JPEG) e persiste após recarregar", async () => {
    const { page, errors } = await env.open();
    await page.setInputFiles("#foto-input", pngGrande);
    await page.waitForSelector("#foto-img:not([hidden])");
    await page.waitForFunction(() => document.getElementById("foto-img").naturalWidth > 0);
    const s1 = await imgSize(page, "#foto-img");
    assert.deepEqual([s1.w, s1.h], [1600, 800]);
    assert.ok(s1.src.startsWith("blob:"));
    assert.equal(await page.textContent("#foto-label"), "📷 Trocar foto");
    assert.ok(await page.isVisible("#foto-del"));
    assert.equal(await page.textContent("#saved"), "Foto salva no aparelho ✓");
    assert.equal((await getState(page)).fotos["1"], true);
    assert.equal((await fotoNoBanco(page, 1)).type, "image/jpeg");

    await page.reload();
    await page.waitForSelector("#foto-img:not([hidden])");
    await page.waitForFunction(() => document.getElementById("foto-img").naturalWidth === 1600);
    assert.deepEqual(errors, []);
  });

  it("F02 · trocar a foto substitui a anterior", async () => {
    const { page } = await env.open();
    await page.setInputFiles("#foto-input", pngGrande);
    await page.waitForFunction(() => document.getElementById("foto-img").naturalWidth === 1600);
    await page.setInputFiles("#foto-input", pngPequeno);
    await page.waitForFunction(() => document.getElementById("foto-img").naturalWidth === 300);
    assert.equal((await imgSize(page, "#foto-img")).h, 200);
    await page.reload();
    await page.waitForFunction(() => document.getElementById("foto-img").naturalWidth === 300);
  });

  it("F03 · remover a foto apaga do aparelho", async () => {
    const { page } = await env.open();
    await page.setInputFiles("#foto-input", pngPequeno);
    await page.waitForSelector("#foto-img:not([hidden])");
    await page.click("#foto-del");
    assert.equal(await page.textContent(".toast"), "Foto removida");
    assert.ok(await page.isHidden("#foto-img"));
    assert.ok(await page.isHidden("#foto-del"));
    assert.equal(await page.textContent("#foto-label"), "📷 Anexar foto");
    assert.equal((await getState(page)).fotos["1"], undefined);
    await page.waitForFunction(() => true);
    assert.equal(await fotoNoBanco(page, 1), null);
    await page.reload();
    await page.waitForSelector("#foto-input", { state: "attached" });
    assert.ok(await page.isHidden("#foto-img"));
  });

  it("F04 · arquivo que não é imagem mostra aviso sem quebrar o app", async () => {
    const { page, errors } = await env.open();
    await page.setInputFiles("#foto-input", falso);
    await page.waitForSelector(".toast");
    assert.equal(await page.textContent(".toast"), "Não foi possível salvar a foto. Tente outra imagem.");
    assert.equal(await page.textContent("#saved"), "");
    assert.ok(await page.isHidden("#foto-img"));
    assert.deepEqual((await getState(page)).fotos, {});
    // o app continua funcionando
    await answerQuiz(page, true);
    assert.ok(!(await page.isDisabled("#concluir")));
    assert.deepEqual(errors.filter((e) => e.startsWith("pageerror")), []);
    // mesmo arquivo de novo também dispara (o campo é limpo após cada escolha)
    await page.evaluate(() => document.querySelector(".toast").remove());
    await page.setInputFiles("#foto-input", falso);
    await page.waitForSelector(".toast");
  });

  it("F05 · foto aparece no caderno do Progresso com 📷", async () => {
    const { page } = await env.open();
    await page.setInputFiles("#foto-input", pngPequeno);
    await page.waitForSelector("#foto-img:not([hidden])");
    await page.evaluate(() => { location.hash = "#/progresso"; });
    await page.waitForSelector("img.note-photo:not([hidden])");
    assert.match(await page.textContent(".note a"), /Dia 1 · .* 📷$/);
    assert.equal(await page.getAttribute("img.note-photo", "alt"), "Foto do texto do dia 1");
    await page.waitForFunction(() => document.querySelector("img.note-photo").naturalWidth === 300);
  });
});

const semShare = () => { try { delete Navigator.prototype.share; delete Navigator.prototype.canShare; } catch (e) {} };
const comShare = (modo) => {
  window.__shared = [];
  navigator.share = (d) => {
    window.__shared.push({ title: d.title, text: d.text, files: (d.files || []).map((f) => f.name + "|" + f.type) });
    if (modo === "abort") return Promise.reject(new DOMException("fechou", "AbortError"));
    if (modo === "erro") return Promise.reject(new DOMException("negado", "NotAllowedError"));
    return Promise.resolve();
  };
  navigator.canShare = () => true;
};

async function concluir(page) {
  await answerQuiz(page, true);
  await page.click("#concluir");
  await page.waitForSelector(".done-banner");
}

describe("S · Compartilhar", () => {
  it("S01 · mensagem tem sequência, repertório, contagem e o link do app", async () => {
    const { page } = await env.open({ init: semShare });
    await concluir(page);
    assert.equal(await page.locator("#sh-nativo").count(), 0, "sem navigator.share não há botão nativo");
    await page.click("#sh-copiar");
    await page.waitForSelector(".toast");
    assert.equal(await page.textContent(".toast"), "Mensagem copiada ✓");
    const txt = (await page.evaluate(() => window.__copiado))[0];
    assert.equal(txt,
      "🔥 1 dia seguido no Redação 1000!\n\n" +
      "📚 Repertório de hoje: " + DEV[0].fonte + "\n" +
      "💡 " + DEV[0].chave + "\n\n" +
      "⏳ Faltam 24 dias para a redação do ENEM.\n\n" +
      APP_URL);
  });

  it("S02 · com 2 dias de sequência usa o plural", async () => {
    const st = { inicio: "2026-10-14", done: { 1: "2026-10-14" }, quiz: { 1: 0 }, textos: {}, favoritos: [], dias: ["2026-10-14"], fotos: {}, prova: "2026-11-08" };
    const { page } = await env.open({ init: semShare, state: st });
    await concluir(page);
    await page.click("#sh-copiar");
    await page.waitForSelector(".toast");
    assert.ok((await page.evaluate(() => window.__copiado))[0].startsWith("🔥 2 dias seguidos no Redação 1000!"));
  });

  it("S03 · link do WhatsApp é wa.me com o texto inteiro codificado", async () => {
    const { page } = await env.open({ init: semShare });
    await concluir(page);
    const href = await page.getAttribute("#sh-whats", "href");
    assert.ok(href.startsWith("https://wa.me/?text="));
    const q = href.slice("https://wa.me/?text=".length);
    assert.ok(!/[\s#&?]/.test(q), "texto sem caracteres crus que quebrem a URL");
    const txt = decodeURIComponent(q);
    assert.ok(txt.includes("Repertório de hoje: " + DEV[0].fonte));
    assert.ok(txt.endsWith(APP_URL));
    assert.equal(new URL(href).searchParams.get("text"), txt);
    assert.equal(await page.getAttribute("#sh-whats", "target"), "_blank");
    assert.match(await page.getAttribute("#sh-whats", "rel"), /noopener/);
  });

  it("S04 · com navigator.share o botão aparece e envia título, texto e a foto", async () => {
    const { page } = await env.open({ init: comShare, initArg: "ok" });
    await page.setInputFiles("#foto-input", pngPequeno);
    await page.waitForSelector("#foto-img:not([hidden])");
    await concluir(page);
    await page.click("#sh-nativo");
    await page.waitForFunction(() => window.__shared.length === 1);
    const sh = (await page.evaluate(() => window.__shared))[0];
    assert.equal(sh.title, "Redação 1000");
    assert.ok(sh.text.includes(APP_URL));
    assert.deepEqual(sh.files, ["redacao1000-dia-1.jpg|image/jpeg"]);
    assert.deepEqual(await page.evaluate(() => window.__copiado), []);
  });

  it("S05 · se a pessoa fecha a janela (AbortError) nada é copiado", async () => {
    const { page } = await env.open({ init: comShare, initArg: "abort" });
    await concluir(page);
    await page.evaluate(() => document.querySelector(".toast") && document.querySelector(".toast").remove());
    await page.click("#sh-nativo");
    await page.waitForFunction(() => window.__shared.length === 1);
    await page.waitForTimeout(200);
    assert.deepEqual(await page.evaluate(() => window.__copiado), []);
    assert.equal(await page.locator(".toast").count(), 0);
  });

  it("S06 · se o compartilhamento falha por outro motivo, cai no copiar", async () => {
    const { page } = await env.open({ init: comShare, initArg: "erro" });
    await concluir(page);
    await page.click("#sh-nativo");
    await page.waitForFunction(() => window.__copiado.length === 1);
    assert.ok((await page.evaluate(() => window.__copiado))[0].includes(APP_URL));
    await page.waitForFunction(() => document.querySelector(".toast") && document.querySelector(".toast").textContent === "Mensagem copiada ✓ Cole onde quiser.");
  });

  it("S07 · sem área de transferência, mostra a mensagem para copiar à mão", async () => {
    const init = () => { Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined }); try { delete Navigator.prototype.share; } catch (e) {} };
    const { page } = await env.open({ init, clipboard: false });
    await concluir(page);
    await page.click("#sh-copiar");
    await page.waitForSelector("#sh-texto:not([hidden])");
    assert.ok((await page.inputValue("#sh-texto")).includes("Repertório de hoje"));
  });

  it("S09 · na véspera a mensagem e o selo usam o singular (Falta 1 dia)", async () => {
    const { page } = await env.open({ init: semShare, fixed: br("2026-11-07", "10:00"), hash: "#/dia/1" });
    assert.equal(await page.getAttribute("#cd-chip", "title"), "Falta 1 dia para a redação do ENEM");
    await concluir(page);
    await page.click("#sh-copiar");
    await page.waitForSelector(".toast");
    assert.ok((await page.evaluate(() => window.__copiado))[0].includes("⏳ Falta 1 dia para a redação do ENEM."));
  });

  it("S08 · depois da prova a mensagem não fala em dias restantes", async () => {
    const { page } = await env.open({ init: semShare, fixed: br("2026-11-10", "10:00"), hash: "#/dia/1" });
    await concluir(page);
    await page.click("#sh-copiar");
    await page.waitForSelector(".toast");
    const txt = (await page.evaluate(() => window.__copiado))[0];
    assert.ok(!txt.includes("Faltam"));
    assert.ok(txt.endsWith("\n\n" + APP_URL));
  });
});

describe("E · Enviar redação por foto", () => {
  it("E01 · com compartilhamento de arquivo, envia as fotos e a mensagem com tema e progresso", async () => {
    const { page } = await env.open({ hash: "#/enviar", init: comShare });
    assert.equal(await page.isDisabled("#env-enviar"), true);
    await page.fill("#env-tema", "Tema Z");
    await page.setInputFiles("#env-foto", [pngGrande, pngPequeno]);
    await page.waitForSelector("#env-thumbs img:nth-child(2)");
    await page.click("#env-enviar");
    await page.waitForFunction(() => window.__shared.length === 1);
    const sh = await page.evaluate(() => window.__shared[0]);
    assert.deepEqual(sh.files, ["redacao-pagina-1.jpg|image/jpeg", "redacao-pagina-2.jpg|image/jpeg"]);
    assert.match(sh.text, /professor Thiago.*dia 1 da trilha.*Tema: Tema Z\./);
    await page.waitForSelector("text=Redações enviadas");
    const s = await getState(page);
    assert.deepEqual(s.envios, [{ data: "2026-10-15", tema: "Tema Z", paginas: 2 }]);
  });

  it("E02 · sem compartilhamento, baixa a foto e abre o WhatsApp do professor", async () => {
    const { page } = await env.open({ hash: "#/enviar", init: semShare });
    await page.evaluate(() => { window.__abriu = []; window.open = (u) => { window.__abriu.push(u); }; });
    await page.setInputFiles("#env-foto", pngPequeno);
    await page.waitForSelector("#env-thumbs img");
    const [dl] = await Promise.all([page.waitForEvent("download"), page.click("#env-enviar")]);
    assert.equal(dl.suggestedFilename(), "redacao-pagina-1.jpg");
    const url = await page.evaluate(() => window.__abriu[0]);
    assert.match(decodeURIComponent(url), /^https:\/\/wa\.me\/5521972032275\?text=.*Vou anexar a foto aqui\./);
    assert.match(await page.textContent("#env-info"), /anexe a foto/);
  });

  it("E03 · Treino, simulado e o botão do professor levam à tela de envio", async () => {
    const { page } = await env.open({ hash: "#/treino" });
    assert.equal(await page.locator('#app a[href="#/enviar"]').count(), 1);
    await page.click("#fab-prof");
    await page.click("#prof-foto");
    await page.waitForSelector("#env-foto", { state: "attached" });
    assert.equal(await page.locator("#prof-sheet").count(), 0);
  });
});
