/*
 * Roteiros do podcast "Redação 1000", gerados a partir do conteúdo dos devocionais.
 * Usado pelo app (botão "Ouvir") e pelo script podcast/gerar-roteiros.js (arquivos .md).
 *
 * Cada roteiro é uma lista de trechos { bloco, texto, pausa } em linguagem falada:
 * números de lei, anos entre parênteses e abreviações são reescritos para soar natural.
 */
(function (root) {
  "use strict";

  var NOMES_COMP = { 1: "Norma-padrão", 2: "Tema e repertório", 3: "Argumentação", 4: "Coesão", 5: "Proposta de intervenção" };

  /* Embaralha as alternativas de forma estável por dia (a mesma ordem do app). */
  function ordemAlternativas(n, seed) {
    var idx = [];
    for (var i = 0; i < n; i++) idx.push(i);
    var x = seed >>> 0;
    function rand() { // mulberry32
      x = (x + 0x6d2b79f5) >>> 0;
      var t = Math.imul(x ^ (x >>> 15), 1 | x);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    for (var j = n - 1; j > 0; j--) {
      var k = Math.floor(rand() * (j + 1));
      var tmp = idx[j]; idx[j] = idx[k]; idx[k] = tmp;
    }
    return idx;
  }

  /* Texto escrito → texto para ouvir. */
  function falado(s) {
    return String(s)
      .replace(/\bnº\s*/g, "número ")
      .replace(/\bart\.\s*(\d+)º?/g, "artigo $1")
      .replace(/(\d[\d.]*)\/(\d{4})\b(?=\s+[a-zà-ú])/g, "$1, de $2,") // no meio da frase, fecha com vírgula
      .replace(/(\d[\d.]*)\/(\d{4})\b/g, "$1, de $2")      // 10.216/2001 → 10.216, de 2001
      .replace(/\s*\((\d{4})\)(?=\s+[a-zà-ú])/g, ", de $1,")
      .replace(/\s*\((\d{4})\)/g, ", de $1")               // Obra (2000) → Obra, de 2000
      .replace(/\bprof\.\s/g, "professor ")
      .replace(/\s*\((\d{4}), com ([^)]+)\)/g, ", de $1, com $2")
      .replace(/\s×\s/g, " versus ")
      .replace(/~\s*(\d+)\s*min/g, "cerca de $1 minutos")
      .replace(/\s+—\s+/g, ", ")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function lista(itens) {
    if (itens.length < 2) return itens.join("");
    return itens.slice(0, -1).join(", ") + " e " + itens[itens.length - 1];
  }
  function semPonto(s) { return String(s).replace(/[.!?…]+$/, ""); }

  function trecho(bloco, texto, pausa) {
    return { bloco: bloco, texto: falado(texto), pausa: pausa || 0 };
  }

  /* Roteiro de um devocional (objeto de window.DEVOCIONAIS). */
  function roteiroDia(d) {
    var ordem = ordemAlternativas(d.quiz.opcoes.length, d.id);
    var letra = function (pos) { return String.fromCharCode(65 + pos); };
    var posCorreta = ordem.indexOf(d.quiz.correta);
    var t = [];
    t.push(trecho("Abertura", "Redação 1000, episódio " + d.id + ": " + d.titulo + ". Poucos minutos por dia para ampliar o seu repertório para a redação do ENEM. O eixo de hoje é " + d.eixo + ".", 1));
    t.push(trecho("Ideia-chave", "A ideia-chave de hoje: " + d.chave + " A referência é " + semPonto(d.fonte) + ".", 1));
    d.leitura.forEach(function (p, i) { t.push(trecho(i === 0 ? "Leitura" : "", p)); });
    t.push(trecho("", "Esse repertório funciona bem em temas sobre " + lista(d.temas.map(function (x) { return x.toLowerCase(); })) + ".", 1));
    t.push(trecho("Na redação", "Agora, veja como ele aparece numa redação. " + d.exemplo, 1));
    t.push(trecho("Dica de ouro", "Dica de ouro, ligada à competência " + d.dica.competencia + ", " + NOMES_COMP[d.dica.competencia] + ". " + semPonto(d.dica.titulo) + ". " + d.dica.texto, 1));
    t.push(trecho("Exercício rápido", "Hora do exercício rápido. " + d.quiz.pergunta));
    ordem.forEach(function (i, pos) {
      t.push(trecho("", "Alternativa " + letra(pos) + ": " + semPonto(d.quiz.opcoes[i]) + "."));
    });
    t.push(trecho("", "Pense um pouco antes de ouvir a resposta.", 5));
    t.push(trecho("", "A resposta certa é a alternativa " + letra(posCorreta) + ": " + semPonto(d.quiz.opcoes[d.quiz.correta]) + ". " + d.quiz.explicacao, 1));
    t.push(trecho("Desafio de escrita", "Seu desafio de escrita de hoje, para fazer no app: " + d.desafio.enunciado + " Pause o episódio e tente antes de ouvir uma resposta possível.", 3));
    t.push(trecho("", "Uma resposta possível seria: " + d.desafio.modelo, 1));
    t.push(trecho("Para refletir", "Para fechar, uma pergunta para refletir: " + d.reflexao, 2));
    t.push(trecho("Encerramento", "Isso foi o Redação 1000. Abra o app, responda o exercício e mantenha a sua sequência de dias. Até amanhã!"));
    return t;
  }

  /* Roteiro do episódio especial da aposta (window.APOSTA). */
  function roteiroAposta(a) {
    var t = [];
    t.push(trecho("Abertura", "Redação 1000, episódio especial: a aposta do tema. Estamos na véspera da prova, e este episódio reúne a aposta mais bem fundamentada que encontramos para a redação do ENEM.", 1));
    t.push(trecho("A aposta", "O tema mais provável, na nossa pesquisa, é: " + a.tema + ". " + a.resumo, 1));
    t.push(trecho("Por que essa aposta", "São quatro motivos."));
    a.porQue.forEach(function (r, i) {
      // Listas de anos ("registro civil (2021)") soam melhor com "em".
      t.push(trecho("", (i + 1) + ". " + semPonto(r.titulo) + ". " + r.texto.replace(/\s*\((\d{4})\)/g, " em $1")));
    });
    t.push(trecho("", a.porQueNaoIA, 1));
    t.push(trecho("Repertórios", "Agora, os repertórios para levar na memória."));
    a.repertorios.forEach(function (r) { t.push(trecho("", semPonto(r.nome) + ". " + r.uso)); });
    t.push(trecho("Roteiro", "Um roteiro possível para a redação.", 1));
    a.roteiro.forEach(function (r) { t.push(trecho("", semPonto(r.parte) + ". " + r.texto)); });
    t.push(trecho("", "E uma introdução-modelo: " + a.introducaoModelo, 1));
    t.push(trecho("Alternativas", "Se o tema não for esse, estes são os próximos da fila."));
    a.alternativas.forEach(function (r) { t.push(trecho("", semPonto(r.tema) + ". " + r.porque)); });
    t.push(trecho("Encerramento", "Lembre-se: o tema é segredo até a prova, e isto é uma aposta, não uma garantia. Leia a proposta com calma e escreva sobre o tema que estiver na folha. Boa prova, e até a próxima!"));
    return t;
  }

  /* Versão em Markdown, para gravar ou mandar para um serviço de voz. */
  function markdown(titulo, trechos) {
    var linhas = ["# " + titulo, ""];
    trechos.forEach(function (tr) {
      if (tr.bloco) linhas.push("## " + tr.bloco, "");
      linhas.push(tr.texto, "");
      if (tr.pausa >= 3) linhas.push("_[pausa de " + tr.pausa + " segundos]_", "");
    });
    return linhas.join("\n");
  }

  function palavras(trechos) {
    return trechos.reduce(function (n, tr) { return n + tr.texto.split(/\s+/).length; }, 0);
  }

  var api = {
    ordemAlternativas: ordemAlternativas,
    falado: falado,
    roteiroDia: roteiroDia,
    roteiroAposta: roteiroAposta,
    markdown: markdown,
    palavras: palavras
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Podcast = api;
})(typeof window !== "undefined" ? window : this);
