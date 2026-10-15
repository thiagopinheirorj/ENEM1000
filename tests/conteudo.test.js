/* Testes de conteúdo e dados (sem navegador). */
"use strict";

const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadContent, order } = require("./helpers");

const W = loadContent();
const DEV = W.DEVOCIONAIS;

function filled(v) {
  return typeof v === "string" ? v.trim().length > 0 : v !== undefined && v !== null;
}

describe("C · Conteúdo dos devocionais", () => {
  it("C01 · há 30 devocionais com ids 1..30 sequenciais", () => {
    assert.equal(DEV.length, 30);
    DEV.forEach((d, i) => assert.equal(d.id, i + 1, "posição " + i));
  });

  it("C02 · todos os campos obrigatórios estão preenchidos", () => {
    for (const d of DEV) {
      for (const k of ["eixo", "titulo", "chave", "fonte", "exemplo", "reflexao"]) {
        assert.ok(filled(d[k]), "dia " + d.id + ": campo " + k);
      }
      assert.ok(Array.isArray(d.leitura) && d.leitura.length >= 1 && d.leitura.every(filled), "dia " + d.id + ": leitura");
      assert.ok(Array.isArray(d.temas) && d.temas.length >= 1 && d.temas.every(filled), "dia " + d.id + ": temas");
      assert.ok(filled(d.dica.titulo) && filled(d.dica.texto), "dia " + d.id + ": dica");
      assert.ok(filled(d.quiz.pergunta) && filled(d.quiz.explicacao), "dia " + d.id + ": quiz");
      assert.ok(Array.isArray(d.quiz.opcoes) && d.quiz.opcoes.length >= 2 && d.quiz.opcoes.every(filled), "dia " + d.id + ": opções");
      assert.ok(filled(d.desafio.enunciado) && filled(d.desafio.modelo), "dia " + d.id + ": desafio");
    }
  });

  it("C03 · índice da resposta correta está dentro do intervalo", () => {
    for (const d of DEV) {
      assert.ok(Number.isInteger(d.quiz.correta), "dia " + d.id);
      assert.ok(d.quiz.correta >= 0 && d.quiz.correta < d.quiz.opcoes.length, "dia " + d.id);
    }
  });

  it("C04 · competência da dica é um inteiro de 1 a 5", () => {
    for (const d of DEV) {
      assert.ok(Number.isInteger(d.dica.competencia) && d.dica.competencia >= 1 && d.dica.competencia <= 5, "dia " + d.id);
    }
  });

  it("C05 · nenhuma alternativa duplicada dentro de um quiz", () => {
    for (const d of DEV) {
      const norm = d.quiz.opcoes.map((o) => o.trim().toLowerCase());
      assert.equal(new Set(norm).size, norm.length, "dia " + d.id);
    }
  });

  it("C06 · títulos dos dias não se repetem", () => {
    const t = DEV.map((d) => d.titulo);
    assert.equal(new Set(t).size, t.length);
  });

  it("C07 · após o embaralhamento, a posição da resposta certa fica equilibrada", () => {
    const pos = [0, 0, 0, 0];
    for (const d of DEV) {
      const o = order(d.quiz.opcoes.length, d.id);
      assert.deepEqual([...o].sort(), [...Array(d.quiz.opcoes.length).keys()], "permutação válida no dia " + d.id);
      pos[o.indexOf(d.quiz.correta)]++;
    }
    // 30 questões em 4 posições: nenhuma letra com mais de 40% nem com menos de 3 respostas certas.
    for (let i = 0; i < 4; i++) {
      assert.ok(pos[i] >= 3 && pos[i] <= 12, "letra " + "ABCD"[i] + " = " + pos[i] + " (" + pos.join("/") + ")");
    }
  });

  it("C08 · a função de embaralhamento de teste é idêntica à do app", () => {
    const src = fs.readFileSync(path.join(ROOT, "js/app.js"), "utf8");
    const m = src.match(/function order\(n, seed\) \{[\s\S]*?\n  \}\n/);
    assert.ok(m, "função order encontrada em app.js");
    const appOrder = vm.runInNewContext("(" + m[0].trim() + ")");
    for (let s = 1; s <= 30; s++) assert.deepEqual(Array.from(appOrder(4, s)), order(4, s));
  });
});

describe("C · Kit e aposta", () => {
  const KIT = W.KIT;
  const A = W.APOSTA;

  it("C09 · KIT tem 5 competências numeradas de 1 a 5", () => {
    assert.deepEqual(KIT.competencias.map((c) => c.n), [1, 2, 3, 4, 5]);
    KIT.competencias.forEach((c) => assert.ok(filled(c.nome) && filled(c.desc)));
  });

  it("C10 · KIT: estrutura, conectivos, proposta e o que zera bem formados", () => {
    assert.equal(KIT.estrutura.length, 4);
    KIT.estrutura.forEach((e) => assert.ok(filled(e.parte) && e.itens.length && e.itens.every(filled)));
    assert.ok(KIT.conectivos.length >= 5);
    KIT.conectivos.forEach((c) => assert.ok(filled(c.funcao) && c.lista.length && c.lista.every(filled)));
    assert.deepEqual(KIT.proposta.map((p) => p.elemento), ["Agente", "Ação", "Modo/Meio", "Finalidade", "Detalhamento"]);
    KIT.proposta.forEach((p) => assert.ok(filled(p.pergunta) && filled(p.ex)));
    assert.ok(KIT.zeram.length >= 3 && KIT.zeram.every(filled));
  });

  it("C11 · temas anteriores incluem 2025, em ordem decrescente e sem anos repetidos", () => {
    const anos = KIT.temasAnteriores.map((t) => t.ano);
    assert.ok(anos.includes(2025));
    assert.deepEqual(anos, [...anos].sort((a, b) => b - a));
    assert.equal(new Set(anos).size, anos.length);
    KIT.temasAnteriores.forEach((t) => assert.ok(filled(t.tema)));
  });

  it("C12 · APOSTA tem todos os blocos preenchidos e fontes com URL https", () => {
    for (const k of ["pesquisaEm", "tema", "resumo", "porQueNaoIA", "introducaoModelo"]) assert.ok(filled(A[k]), k);
    assert.ok(A.porQue.length && A.porQue.every((r) => filled(r.titulo) && filled(r.texto)));
    assert.ok(A.repertorios.length && A.repertorios.every((r) => filled(r.nome) && filled(r.uso)));
    assert.ok(A.roteiro.length && A.roteiro.every((r) => filled(r.parte) && filled(r.texto)));
    assert.ok(A.alternativas.length && A.alternativas.every((r) => filled(r.tema) && filled(r.porque) && filled(r.repertorios)));
    assert.ok(A.fontes.length && A.fontes.every((f) => filled(f.nome) && /^https:\/\/[^\s"<>]+$/.test(f.url)));
  });

  it("C13 · referência interna da aposta ao dia da trilha é coerente (Goffman = dia 3)", () => {
    const ref = A.repertorios.find((r) => /dia (\d+) da trilha/.test(r.nome));
    assert.ok(ref);
    const n = +ref.nome.match(/dia (\d+) da trilha/)[1];
    const autor = ref.nome.split(",")[0].trim().split(" ").pop(); // "Goffman"
    assert.ok(DEV[n - 1].fonte.includes(autor), "dia " + n + " fala de " + DEV[n - 1].fonte);
  });
});

describe("C · Arquivos do PWA", () => {
  const sw = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8");

  it("C14 · todo arquivo listado em ASSETS do sw.js existe", () => {
    const m = sw.match(/var ASSETS = (\[[\s\S]*?\]);/);
    assert.ok(m);
    const assets = JSON.parse(JSON.stringify(vm.runInNewContext(m[1])));
    assert.ok(assets.length >= 5);
    for (const a of assets) {
      const f = a === "./" ? "index.html" : a;
      assert.ok(fs.existsSync(path.join(ROOT, f)), "falta " + a);
    }
  });

  it("C15 · arquivos referenciados no index.html estão no cache offline", () => {
    const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
    const assets = vm.runInNewContext(sw.match(/var ASSETS = (\[[\s\S]*?\]);/)[1]);
    const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]);
    assert.ok(refs.length >= 4);
    for (const r of refs) assert.ok(assets.includes(r), r + " fora do ASSETS");
  });

  it("C16 · versão do cache segue o padrão enem1000-vN", () => {
    assert.match(sw, /var CACHE = "enem1000-v\d+";/);
  });

  it("C17 · manifest é JSON válido, com campos de PWA e ícone existente", () => {
    const man = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.webmanifest"), "utf8"));
    for (const k of ["name", "short_name", "start_url", "display", "icons"]) assert.ok(man[k], k);
    assert.equal(man.lang, "pt-BR");
    assert.ok(man.icons.length);
    for (const ic of man.icons) {
      const f = path.join(ROOT, ic.src);
      assert.ok(fs.existsSync(f), ic.src);
      if (ic.src.endsWith(".svg")) assert.match(fs.readFileSync(f, "utf8"), /<svg[\s>]/);
    }
  });

  it("C18 · app.js e content.js não têm erro de sintaxe", () => {
    for (const f of ["js/app.js", "js/content.js", "sw.js"]) {
      assert.doesNotThrow(() => new vm.Script(fs.readFileSync(path.join(ROOT, f), "utf8"), { filename: f }));
    }
  });
});
