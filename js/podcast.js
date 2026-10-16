/*
 * Roteiros do podcast "Redação 1000", gerados a partir do conteúdo dos devocionais.
 * Usado pelo app (botão "Ouvir") e pelo script podcast/gerar-roteiros.js (arquivos .md).
 *
 * Formato de conversa entre dois apresentadores, Thiago e Isa.
 * Cada roteiro é uma lista de falas { voz, bloco, texto, pausa } em linguagem falada:
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
      .replace(/\b(\w+)o\(a\)/g, "$1o")                       // ligado(a) → ligado
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  function lista(itens) {
    if (itens.length < 2) return itens.join("");
    return itens.slice(0, -1).join(", ") + " e " + itens[itens.length - 1];
  }
  function semPonto(s) { return String(s).replace(/[.!?…]+$/, ""); }

  /* Um trecho é uma fala: quem fala (thiago ou isa), em que bloco do episódio e quanto silêncio vem depois. */
  function trecho(voz, bloco, texto, pausa) {
    return { voz: voz, bloco: bloco, texto: falado(texto), pausa: pausa || 0 };
  }
  var NOMES = { thiago: "Thiago", isa: "Isa" };

  /* Falas de apoio: variam por episódio para a conversa não soar repetida. */
  var POOL = {
    abertura: [
      "Fala, galera! Começando mais um Redação 1000.",
      "E aí, pessoal! Tá no ar mais um Redação 1000.",
      "Salve, salve! Bem-vindos a mais um Redação 1000.",
      "Fala, meu povo! Mais um Redação 1000 saindo do forno."
    ],
    apresenta: [
      "Eu sou a Isa, tô na luta pro ENEM igual a você. E aqui do lado está ele...",
      "Aqui é a Isa, vestibulanda oficial do programa. E comigo, como sempre...",
      "Eu sou a Isa, a aluna da casa. E quem segura a parte inteligente é ele..."
    ],
    thiago: [
      "O Thiago! Professor de redação e responsável por fazer a Isa parar de escrever nos dias de hoje.",
      "O Thiago, professor de redação. Bom dia, boa tarde ou boa noite, onde quer que você esteja ouvindo.",
      "O Thiago! E hoje o papo está bom, viu?",
      "O Thiago, professor de redação. Pega o caderno, que hoje tem coisa boa."
    ],
    reacaoChave: ["Pesado, hein.", "Faz sentido demais.", "Caramba. Anotei.", "Uau. Isso explica muita coisa.", "Essa doeu um pouquinho."],
    interjeicao: ["Faz sentido.", "Nossa, nunca tinha pensado assim.", "Tá, isso abre a mente.", "Entendi. E isso é muito atual.", "Olha, isso é bom demais pra redação."],
    pedeTemas: ["E em que tipo de tema eu uso isso na prova?", "Beleza. Mas quando é que isso cai na redação?", "E isso serve pra quais temas?"],
    pedeExemplo: ["Me mostra como fica escrito, na prática.", "Lê um exemplo pra gente? Quero ver isso numa redação.", "Tá, e como isso aparece num parágrafo de verdade?"],
    elogiaExemplo: ["Ficou elegante demais. Copiei a estrutura.", "Olha que coisa linda. Corretor nenhum resiste.", "Isso é texto de nota mil, hein.", "Gostei. Curto e certeiro."],
    pedeDica: ["Manda a dica de ouro.", "E a dica de ouro de hoje?", "Agora a parte que eu mais gosto: a dica de ouro."],
    resultado: ["Acertei! Juro.", "Errei. Mas agora não erro mais.", "Acertei, mas foi no chute. Vale?", "Essa eu sabia, essa eu sabia!"],
    encerraIsa: [
      "E é isso, galera! Abre o app, faz o exercício e mantém a sequência.",
      "Acabou por hoje! Bora pro app fazer o desafio e manter o foguinho aceso.",
      "Fechou! Corre pro app, que o desafio de escrita tá te esperando."
    ],
    encerraThiago: [
      "Até amanhã! E escreve um pouquinho hoje, tá?",
      "Um beijo, e até o próximo episódio!",
      "Valeu, gente. Até amanhã, com mais repertório!"
    ]
  };
  function escolhe(lista, n, salto) { return lista[(n * (salto || 1)) % lista.length]; }

  /* Roteiro de um devocional como conversa entre Thiago e Isa. */
  function roteiroDia(d, c) {
    c = c || {};
    var n = d.id;
    var ordem = ordemAlternativas(d.quiz.opcoes.length, d.id);
    var letra = function (pos) { return String.fromCharCode(65 + pos); };
    var posCorreta = ordem.indexOf(d.quiz.correta);
    var t = [];
    t.push(trecho("isa", "Abertura", escolhe(POOL.abertura, n) + " " + escolhe(POOL.apresenta, n, 2)));
    t.push(trecho("thiago", "", escolhe(POOL.thiago, n, 3)));
    t.push(trecho("isa", "", "Episódio " + d.id + ": " + d.titulo + ". O assunto de hoje é " + d.eixo.toLowerCase() + "."));
    (c.gancho || []).forEach(function (f) { t.push(trecho(f[0], "", f[1])); });

    t.push(trecho("thiago", "Ideia-chave", "A ideia-chave de hoje é esta: " + d.chave + " Isso vem de " + semPonto(d.fonte) + "."));
    t.push(trecho("isa", "", escolhe(POOL.reacaoChave, n)));

    t.push(trecho("thiago", "Leitura", d.leitura[0]));
    t.push(trecho("isa", "", c.duvida || escolhe(POOL.interjeicao, n)));
    d.leitura.slice(1).forEach(function (p, i) {
      if (i > 0) t.push(trecho("isa", "", escolhe(POOL.interjeicao, n + i, 3)));
      t.push(trecho("thiago", "", p));
    });

    t.push(trecho("isa", "", escolhe(POOL.pedeTemas, n)));
    t.push(trecho("thiago", "", "Funciona bem em temas sobre " + lista(d.temas.map(function (x) { return x.toLowerCase(); })) + "."));
    t.push(trecho("isa", "Na redação", escolhe(POOL.pedeExemplo, n)));
    t.push(trecho("thiago", "", "Olha só: " + d.exemplo));
    t.push(trecho("isa", "", escolhe(POOL.elogiaExemplo, n)));

    t.push(trecho("isa", "Dica de ouro", escolhe(POOL.pedeDica, n)));
    t.push(trecho("thiago", "", "Essa é da competência " + d.dica.competencia + ", " + NOMES_COMP[d.dica.competencia] + ". " + semPonto(d.dica.titulo) + ". " + d.dica.texto));

    t.push(trecho("isa", "Exercício rápido", "Bora pro exercício! Quem tá ouvindo, joga junto com a gente. " + d.quiz.pergunta));
    t.push(trecho("thiago", "", ordem.map(function (i, pos) { return "Alternativa " + letra(pos) + ": " + semPonto(d.quiz.opcoes[i]) + "."; }).join(" ")));
    t.push(trecho("isa", "", "Pensa aí. Vou dar uns segundinhos.", 5));
    t.push(trecho("thiago", "", "A resposta certa é a alternativa " + letra(posCorreta) + ": " + semPonto(d.quiz.opcoes[d.quiz.correta]) + ". " + d.quiz.explicacao));
    t.push(trecho("isa", "", escolhe(POOL.resultado, n)));

    t.push(trecho("thiago", "Desafio de escrita", "E o desafio de escrita de hoje é este: " + d.desafio.enunciado + " Pausa o episódio e tenta antes de ouvir uma resposta possível.", 3));
    t.push(trecho("isa", "", "Eu tentei aqui, mas vou deixar o Thiago mostrar como fica."));
    t.push(trecho("thiago", "", "Uma resposta possível: " + d.desafio.modelo));

    t.push(trecho("isa", "Para refletir", "Pra fechar, a pergunta pra refletir: " + d.reflexao));
    if (c.reflexao) {
      t.push(trecho("thiago", "", c.reflexao.thiago));
      t.push(trecho("isa", "", c.reflexao.isa, 1));
    }
    t.push(trecho("isa", "Encerramento", escolhe(POOL.encerraIsa, n)));
    t.push(trecho("thiago", "", escolhe(POOL.encerraThiago, n, 2)));
    return t;
  }

  /* Roteiro do episódio especial da aposta (window.APOSTA), também em conversa. */
  function roteiroAposta(a) {
    var t = [];
    t.push(trecho("isa", "Abertura", "Fala, galera! Episódio especial do Redação 1000. Véspera da prova! Thiago, eu tô tremendo."));
    t.push(trecho("thiago", "", "Respira, Isa. Hoje é dia de revisar com calma. E de contar a nossa aposta pro tema da redação."));
    t.push(trecho("isa", "", "Então fala logo. Qual é?"));
    t.push(trecho("thiago", "A aposta", "O tema mais provável, na nossa pesquisa, é: " + a.tema + "."));
    t.push(trecho("isa", "", "E por que esse?"));
    t.push(trecho("thiago", "", a.resumo));
    t.push(trecho("isa", "Por que essa aposta", "Me convence. Quais são os motivos?"));
    a.porQue.forEach(function (r, i) {
      t.push(trecho("thiago", "", (i === 0 ? "Primeiro: " : i === 1 ? "Segundo: " : i === 2 ? "Terceiro: " : "E quarto: ") + semPonto(r.titulo) + ". " + r.texto.replace(/\s*\((\d{4})\)/g, " em $1")));
      if (i === 1) t.push(trecho("isa", "", "Quando todo mundo concorda, eu já fico mais tranquilo."));
    });
    t.push(trecho("isa", "", "E inteligência artificial? Todo mundo fala disso."));
    t.push(trecho("thiago", "", a.porQueNaoIA));
    t.push(trecho("isa", "Repertórios", "Beleza. Que repertórios eu levo na cabeça?"));
    a.repertorios.forEach(function (r, i) {
      t.push(trecho("thiago", "", semPonto(r.nome) + ". " + r.uso));
      if (i === 3) t.push(trecho("isa", "", "Tô anotando tudo. Continua."));
    });
    t.push(trecho("isa", "Roteiro", "E como eu monto a redação?"));
    a.roteiro.forEach(function (r) { t.push(trecho("thiago", "", semPonto(r.parte) + ". " + r.texto)); });
    t.push(trecho("isa", "", "Lê uma introdução pra eu ter de modelo?"));
    t.push(trecho("thiago", "", a.introducaoModelo));
    t.push(trecho("isa", "Alternativas", "E se não for esse tema?"));
    a.alternativas.forEach(function (r) { t.push(trecho("thiago", "", semPonto(r.tema) + ". " + r.porque)); });
    t.push(trecho("isa", "Encerramento", "Thiago, e se cair um tema nada a ver com tudo isso?"));
    t.push(trecho("thiago", "", "Aí você faz o que treinou: lê a proposta com calma, acha o problema, escolhe dois argumentos, usa o repertório que encaixar e fecha com uma proposta completa. A aposta é só uma aposta. O seu treino é que vale."));
    t.push(trecho("isa", "", "Então é isso, galera. Boa prova pra todo mundo!"));
    t.push(trecho("thiago", "", "Boa prova! A gente torce por você."));
    return t;
  }

  /* Versão em Markdown, com o nome de quem fala, para gravar ou mandar para um serviço de voz. */
  function markdown(titulo, trechos) {
    var linhas = ["# " + titulo, ""];
    trechos.forEach(function (tr) {
      if (tr.bloco) linhas.push("## " + tr.bloco, "");
      linhas.push("**" + NOMES[tr.voz] + ":** " + tr.texto, "");
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
    NOMES: NOMES,
    palavras: palavras
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Podcast = api;
})(typeof window !== "undefined" ? window : this);
