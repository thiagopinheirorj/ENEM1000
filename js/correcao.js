/* Correção rápida da introdução e da proposta de intervenção.
 * Roda no aparelho, com regras inspiradas na grade do ENEM: aponta o que falta,
 * não dá nota oficial. Se CORRECAO_IA_URL for preenchida (servidor com IA),
 * o app também pede um comentário escrito pela IA. */
(function () {
  "use strict";
  var CORRECAO_IA_URL = "";

  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function tem(t, lista) { return lista.some(function (r) { return r.test(t); }); }

  var INFORMAL = [/\b(eu acho|na minha opiniao|eu penso|a gente|pra|pro|ne|tipo assim|vc|tb|mto|coisa)\b/];
  var REPERTORIO = [/\b(segundo|de acordo com|conforme|consoante|para o (filosofo|sociologo|pensador|escritor|autor)|para a (filosofa|sociologa|pensadora|escritora|autora))\b/, /\b(1[5-9]\d\d|20[0-2]\d)\b/, /["“«].{6,}["”»]/, /\b(constituicao|lei|artigo|ibge|oms|onu|unesco|ipea|datafolha|declaracao universal)\b/];
  var TESE = [/\b(e necessario|e preciso|e fundamental|e imprescindivel|deve-se|devido a|decorre|em virtude|por causa|consequencia|tal (problema|cenario|realidade|quadro)|esse (problema|cenario)|nesse (sentido|contexto)|isso (se deve|ocorre)|persiste|configura)\b/];
  var DOIS_ARG = [/\b(nao (so|apenas)\b.+\bmas tambem)\b/, /\btanto\b.+\bquanto\b/, /\bseja\b.+\bseja\b/, /\b(pela?|pelo|da|do)\b[^.]{3,80}\be (pela?|pelo|da|do)\b/, /\b(primeiramente|em primeiro lugar)\b/];
  var AGENTE = [/\b(governo|estado|poder publico|ministerio|secretaria|congresso|escolas?|instituicoes de ensino|midia|meios de comunicacao|imprensa|ongs?|organizacoes nao governamentais|familias?|sociedade civil|empresas|municipios|prefeituras|universidades|plataformas digitais|big techs)\b/];
  var ACAO = [/\b(deve|devem|cabe|precisa|precisam|necessita|e dever|compete)\b/, /\b(criar|promover|ampliar|implementar|desenvolver|fiscalizar|investir|garantir|realizar|criacao|promocao|ampliacao|implementacao|investimento)\b/];
  var MEIO = [/\b(por meio d|atraves d|por intermedio d|com o auxilio d)/, /\b(mediante|via)\b/];
  var FINALIDADE = [/\b(a fim de|para que|com o intuito|com o objetivo|com a finalidade|de modo a|de forma a|visando)\b/];
  var DETALHE = [/, (que|a qual|o qual|os quais|as quais|como|isto e|ou seja) /, /\b(por exemplo|como ocorre|a exemplo d)/];
  var DIREITOS = [/\b(pena de morte|castracao|tortura|matar|linchamento|justica com as proprias maos|prender todos|eliminar os)\b/];

  function analisar(tipo, texto) {
    var t = norm(texto), itens = [];
    var palavras = (texto.trim().match(/\S+/g) || []).length;
    function add(c, ok, bom, ruim) { itens.push({ c: c, ok: !!ok, msg: ok ? bom : ruim }); }
    add("C1", !tem(t, INFORMAL), "Linguagem formal, sem marcas de oralidade.", "Evite 1ª pessoa e oralidade (\"eu acho\", \"pra\", \"a gente\"). Use a norma-padrão.");
    if (tipo === "introducao") {
      add("C2", palavras >= 30 && palavras <= 110, "Tamanho bom para uma introdução (3 a 6 linhas).", palavras < 30 ? "Está curta. Desenvolva em 3 a 6 linhas: contexto, tese e os dois argumentos." : "Está longa para uma introdução. Corte detalhes e guarde-os para o desenvolvimento.");
      add("C2", tem(t, REPERTORIO), "Tem repertório (autor, lei, dado ou fato histórico).", "Abra com um repertório legitimado: um pensador, uma lei, um dado ou um fato histórico ligado ao tema.");
      add("C3", tem(t, TESE), "Há um ponto de vista (tese) claro.", "Deixe a tese explícita: diga qual é o problema e por que ele persiste.");
      add("C3", tem(t, DOIS_ARG), "Anuncia os dois argumentos do texto.", "Anuncie os dois argumentos que você vai desenvolver (ex.: \"seja pela X, seja pela Y\").");
    } else {
      var el = [["agente", AGENTE, "Quem vai agir? (governo, escola, mídia, família…)"], ["ação", ACAO, "O que deve ser feito? Use um verbo de ação claro."],
        ["meio", MEIO, "Como? Use \"por meio de…\"."], ["finalidade", FINALIDADE, "Para quê? Use \"a fim de…\"."], ["detalhamento", DETALHE, "Detalhe um dos elementos (\", que…\", \"por exemplo…\")."]];
      el.forEach(function (e) { add("C5", tem(t, e[1]), "Tem " + e[0] + ".", "Falta " + e[0] + ". " + e[2]); });
      add("C5", !tem(t, DIREITOS), "Respeita os direitos humanos.", "Atenção: propostas que ferem os direitos humanos são penalizadas. Reveja a ação proposta.");
    }
    add("C4", (t.match(/\b(alem disso|ademais|portanto|logo|assim|dessa forma|desse modo|nesse sentido|entretanto|contudo|no entanto|por conseguinte|outrossim|todavia|consequentemente|uma vez que|visto que|haja vista)\b/g) || []).length >= 1,
      "Usa conectivos para ligar as ideias.", "Use conectivos (\"nesse sentido\", \"dessa forma\", \"uma vez que\") para ligar as ideias.");
    var ok = itens.filter(function (i) { return i.ok; }).length;
    return { itens: itens, ok: ok, total: itens.length };
  }

  function pedirIA(tipo, tema, texto) {
    if (!CORRECAO_IA_URL) return Promise.resolve(null);
    return fetch(CORRECAO_IA_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tipo: tipo, tema: tema, texto: texto }) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { return j && typeof j.comentario === "string" ? j.comentario : null; })
      .catch(function () { return null; });
  }

  window.CORRECAO = { analisar: analisar, pedirIA: pedirIA };
})();
