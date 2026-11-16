/* 9º ano · Slides (10), mapas mentais (8) e aulas de emergência (12). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("9"), ob = H.ob, dis = H.dis;

  /* ---------------- SLIDES ---------------- */
  Y.sl("sl-subordinadas", "Slides · Orações subordinadas", "9 slides: substantivas (seis funções), adjetivas e adverbiais.", [
    { capa: true, t: "Orações subordinadas", sub: "Substantivas, adjetivas e adverbiais" },
    { t: "Substantivas", li: ["Funcionam como substantivo", "Introduzidas por **que** ou **se**", "Teste: troque por //isso//"] },
    { t: "As seis funções", li: ["Subjetiva: É preciso **que estude**.", "Objetiva direta: Disse **que viria**.", "Objetiva indireta: Lembrei-me **de que tinha prova**.", "Completiva nominal: Tenho medo **de que falte**.", "Predicativa: O problema é **que faltou**.", "Apositiva: Só quero isto: **que volte**."] },
    { t: "Adjetivas", li: ["Funcionam como adjetivo", "Iniciadas por pronome relativo (que, quem, o qual, cujo, onde)", "Restritiva: sem vírgula · Explicativa: entre vírgulas"] },
    { t: "Adverbiais: causa, consequência, condição, concessão", li: ["Causa: porque, visto que", "Consequência: tão… que", "Condição: se, caso", "Concessão: embora, ainda que"] },
    { t: "Adverbiais: tempo, finalidade, comparação, conformidade, proporção", li: ["Tempo: quando, assim que", "Finalidade: para que", "Comparação: como", "Conformidade: conforme", "Proporção: à medida que"] },
    { t: "Pontuação", li: ["Adverbial antes da principal: vírgula", "Adjetiva explicativa: entre vírgulas", "Nunca entre sujeito e verbo, nem entre verbo e oração substantiva"] },
    { t: "Vamos praticar", li: ["Classifique: “Espero que você venha.” · “Embora estivesse cansado, saiu.” · “O livro de que gosto é ótimo.”"], nota: "Respostas: substantiva objetiva direta; adverbial concessiva; adjetiva restritiva." },
    { t: "Resumo", li: ["Substantiva: função de substantivo", "Adjetiva: caracteriza um nome", "Adverbial: circunstância (causa, tempo, condição…)"] }
  ]);

  Y.sl("sl-reduzidas", "Slides · Orações reduzidas", "6 slides: infinitivo, gerúndio e particípio, com desenvolvimento.", [
    { capa: true, t: "Orações reduzidas", sub: "Sem conjunção, com verbo nominal" },
    { t: "O que são?", li: ["Orações sem conjunção ou pronome relativo", "Verbo no infinitivo, gerúndio ou particípio"] },
    { t: "Reduzida de infinitivo", li: ["**Ao chegar**, saudou todos.", "Desenvolvida: Quando chegou, saudou todos."] },
    { t: "Reduzida de gerúndio", li: ["**Chegando**, saudou todos.", "Desenvolvida: Quando (ou Como) chegou, saudou todos."] },
    { t: "Reduzida de particípio", li: ["**Terminado o trabalho**, saiu.", "Desenvolvida: Quando o trabalho terminou, saiu."] },
    { t: "Vamos praticar", li: ["Reduza: “Quando saiu de casa, encontrou a vizinha.”", "Desenvolva: “Sendo estudioso, passou.”"], nota: "Respostas: Ao sair de casa, encontrou a vizinha; Como era estudioso, passou." }
  ]);

  Y.sl("sl-regencia", "Slides · Regência verbal e nominal", "7 slides: verbos e nomes que exigem preposição.", [
    { capa: true, t: "Regência", sub: "Verbal e nominal" },
    { t: "Regência verbal", li: ["Relação entre o verbo e seu complemento", "Assisti **ao** filme · Obedeço **ao** professor", "Prefiro café **a** chá"] },
    { t: "Aspirar, visar, implicar", li: ["Aspiro **a** uma vaga (almejar)", "Visamos **ao** sucesso (ter como objetivo)", "Isso implica mudanças (sem preposição)"] },
    { t: "Informar, esquecer, lembrar", li: ["Informei o aluno **do** resultado", "Esqueci o livro · Esqueci-me **do** livro"] },
    { t: "Regência nominal", li: ["medo **de** · respeito **a/por**", "favorável **a** · contrário **a**", "necessidade **de** · compatível **com**"] },
    { t: "Erros comuns", li: ["✗ Prefiro mais ler do que escrever", "✓ Prefiro ler a escrever", "✗ Assisti o filme · ✓ Assisti ao filme"] },
    { t: "Vamos praticar", li: ["Corrija: “Aspiro um cargo melhor.” · “Esqueci do livro.” · “Obedeço o professor.”"], nota: "Respostas: Aspiro a; Esqueci o livro / Esqueci-me do; Obedeço ao." }
  ]);

  Y.sl("sl-concordancia", "Slides · Concordância verbal e nominal: casos especiais", "7 slides: impessoais, passiva sintética, mais de um, concordância nominal.", [
    { capa: true, t: "Concordância", sub: "Casos que mais caem" },
    { t: "Verbos impessoais", li: ["Haver (= existir): Houve problemas.", "Fazer (tempo): Faz dois anos.", "Fenômenos da natureza: Choveu muito."] },
    { t: "Verbo + se", li: ["Passiva sintética concorda: Vendem-se casas.", "VTI + se fica no singular: Precisa-se de funcionários."] },
    { t: "Outros casos", li: ["**Mais de um** → singular: Mais de um aluno faltou.", "**Cerca de + numeral** → concorda: Cerca de cem pessoas compareceram.", "Fui eu **quem** fez · Fui eu **que** fiz"] },
    { t: "Concordância nominal", li: ["Bastante (muito) é invariável", "Anexo, incluso, mesmo, próprio concordam", "Meio (= um pouco) e menos não variam"] },
    { t: "É proibido / necessário / bom", li: ["Sem artigo: É proibido entrada.", "Com artigo: É proibida a entrada."] },
    { t: "Vamos praticar", li: ["Corrija: “Houveram erros.” · “Aluga-se casas.” · “Seguem anexo as fotos.”"], nota: "Respostas: Houve; Alugam-se; Seguem anexas." }
  ]);

  Y.sl("sl-colocacao-pronominal", "Slides · Colocação pronominal", "6 slides: próclise, ênclise e mesóclise.", [
    { capa: true, t: "Colocação pronominal", sub: "Onde colocar me, te, se, lhe, o, a" },
    { t: "Ênclise", li: ["Depois do verbo, com hífen", "Início de frase: Diga-me.", "Depois de vírgula: Se puder, avise-me."] },
    { t: "Próclise", li: ["Antes do verbo, com palavra atrativa", "Não me diga · Que te disse? · Já lhe contei"] },
    { t: "Palavras atrativas", li: ["Negação: não, nunca, jamais", "Pronomes relativos e interrogativos: que, quem", "Conjunções subordinativas: se, embora", "Advérbios: já, também, sempre"] },
    { t: "Mesóclise", li: ["Futuro do presente e do pretérito", "Dar-lhe-ei o livro. · Far-se-ia justiça.", "Com atrativo: Não lhe darei o livro."] },
    { t: "Vamos praticar", li: ["Corrija: “Me disseram a verdade.” · “Não conte-me isso.” · “Darei-lhe o livro amanhã.” (mesóclise)"], nota: "Respostas: Disseram-me; Não me conte; Dar-lhe-ei." }
  ]);

  Y.sl("sl-coesao-argumentacao", "Slides · Coesão e estrutura argumentativa", "8 slides: tese, argumentos, conectivos, coesão referencial e sequencial.", [
    { capa: true, t: "Coesão e argumentação", sub: "Como construir um texto convincente" },
    { t: "Estrutura do texto argumentativo", li: ["**Introdução**: contexto + tese", "**Desenvolvimento**: 2 argumentos com repertório", "**Conclusão**: retomada + proposta"] },
    { t: "Tese e argumentos", li: ["Tese: ponto de vista", "Argumento: razão que sustenta a tese", "Repertório: dado, lei, livro, filme"] },
    { t: "Coesão referencial", li: ["Pronomes, sinônimos, hiperônimos", "Anáfora (retoma) e catáfora (antecipa)"] },
    { t: "Coesão sequencial", li: ["Adição: além disso", "Oposição: contudo, no entanto", "Causa: visto que", "Conclusão: portanto"] },
    { t: "Proposta de intervenção", li: ["**Agente**: quem vai agir", "**Ação**: o que será feito", "**Meio**: como", "**Finalidade**: para quê"] },
    { t: "Erros comuns", li: ["Tese vaga", "Repertório sem ligação com o argumento", "Proposta sem agente", "Repetição excessiva de conectivos"] },
    { t: "Atividade", li: ["Escreva uma introdução com tese sobre o tema: desafios do uso da inteligência artificial na escola."], nota: "Peça que algumas duplas leiam suas introduções e a turma aponte tese e contexto." }
  ], ["Redação", "Gramática"]);

  Y.sl("sl-semantica", "Slides · Sentido das palavras", "6 slides: polissemia, ambiguidade, denotação, conotação.", [
    { capa: true, t: "Sentido das palavras", sub: "Polissemia, ambiguidade, denotação e conotação" },
    { t: "Polissemia", li: ["Uma palavra, vários sentidos", "manga da camisa × manga (fruta)", "banco da praça × banco financeiro"] },
    { t: "Denotação e conotação", li: ["Denotação: sentido literal (coração do boi)", "Conotação: sentido figurado (coração de ouro)"] },
    { t: "Ambiguidade", li: ["Frase com duas leituras", "Vi o homem com o binóculo.", "Defeito (confusão) ou recurso (humor)"] },
    { t: "Como desfazer a ambiguidade", li: ["Reorganizar a frase", "Trocar pronomes: dela → da própria mãe", "Usar vírgula ou outro conectivo"] },
    { t: "Atividade", li: ["Desfaça: “A mãe de Ana viu a filha dela chegando.”", "Explique dois sentidos de //pena//."], nota: "Respostas: de Ana ou da mãe; piedade, pluma, castigo." }
  ], ["Gramática", "Interpretação"]);

  Y.sl("sl-variacao-norma", "Slides · Variação linguística e norma-padrão", "7 slides: variedades, registros, adequação e preconceito linguístico.", [
    { capa: true, t: "Variação e norma", sub: "Falar bem é falar adequadamente" },
    { t: "Variedades", li: ["Regional: aipim, macaxeira, mandioca", "Social: gírias e jargões", "Situacional: formal e informal", "Histórica: vosmecê → você"] },
    { t: "Norma-padrão e norma culta", li: ["Norma-padrão: regras da gramática normativa", "Norma culta: uso de falantes escolarizados em contextos formais"] },
    { t: "Adequação", li: ["Interlocutor, gênero e situação definem o registro", "E-mail formal × mensagem entre amigos"] },
    { t: "Preconceito linguístico", li: ["Julgar alguém pelo jeito de falar", "Não existe fala errada: existe adequação"] },
    { t: "Papel da escola", li: ["Ensinar a norma culta sem desvalorizar outras variedades", "Ampliar o repertório linguístico"] },
    { t: "Atividade", li: ["Reescreva em registro formal: “E aí, cara, tô sem tempo pra ir na reunião.”"], nota: "Resposta: Prezado colega, não poderei comparecer à reunião por falta de tempo." }
  ], ["Gramática", "Interpretação"]);

  Y.sl("sl-pontuacao", "Slides · Pontuação no período composto", "6 slides: vírgula, ponto e vírgula, dois-pontos e casos proibidos.", [
    { capa: true, t: "Pontuação", sub: "No período composto" },
    { t: "Orações adverbiais", li: ["Antes da principal: vírgula", "Quando chegou, saímos.", "Depois da principal: em geral, sem vírgula"] },
    { t: "Orações adjetivas", li: ["Explicativa: entre vírgulas", "Restritiva: sem vírgula"] },
    { t: "Coordenadas", li: ["Vírgula antes de mas, porém, contudo", "Ponto e vírgula em orações longas"] },
    { t: "Casos proibidos", li: ["Entre sujeito e verbo", "Entre verbo e complemento", "Entre a principal e a substantiva: Disse que viria."] },
    { t: "Vamos praticar", li: ["Pontue: “se você estudar bastante conseguirá aprovação e todos ficarão felizes”"], nota: "Resposta: Se você estudar bastante, conseguirá aprovação, e todos ficarão felizes." }
  ]);

  Y.sl("sl-modernismo", "Slides · Pré-Modernismo e Modernismo: visão geral", "9 slides: contexto, Semana de 22, três fases, autores e características.", [
    { capa: true, t: "Modernismo no Brasil", sub: "Ruptura, liberdade e identidade (1922 em diante)" },
    { t: "Contexto", li: ["Industrialização e urbanização no início do século XX", "Primeira Guerra Mundial (1914–1918)", "Vanguardas europeias: Cubismo, Futurismo, Dadaísmo, Surrealismo"] },
    { t: "Pré-Modernismo (1902–1922)", li: ["Euclides da Cunha: Os Sertões (1902)", "Lima Barreto, Monteiro Lobato", "Mistura de realismo e crítica social"] },
    { t: "Semana de Arte Moderna", li: ["Fevereiro de 1922, em São Paulo (Theatro Municipal)", "Artistas, escritores e músicos propõem uma arte nova", "Crítica ao academicismo"] },
    { t: "1ª fase (1922–1930)", li: ["Ruptura, liberdade formal, humor", "Mário de Andrade: Pauliceia Desvairada, Macunaíma", "Oswald de Andrade: Manifesto Antropófago", "Manuel Bandeira: “Os sapos”"] },
    { t: "2ª fase (1930–1945)", li: ["Poesia: Drummond, Cecília Meireles, Vinicius, Murilo Mendes", "Romance regionalista: Graciliano Ramos, Rachel de Queiroz, José Lins do Rego, Jorge Amado"] },
    { t: "3ª fase (1945 em diante)", li: ["Guimarães Rosa: Grande Sertão: Veredas", "Clarice Lispector: foco no mundo interior", "João Cabral de Melo Neto: Morte e Vida Severina"] },
    { t: "Características", li: ["Versos livres", "Linguagem coloquial e brasileira", "Humor, paródia e crítica", "Valorização do cotidiano e da cultura popular"] },
    { t: "Para pensar", li: ["Por que os modernistas queriam romper com o passado?", "Que elementos do Modernismo você encontra na música ou na publicidade de hoje?"], nota: "Use como roda de conversa de 10 minutos ou como tarefa em duplas." }
  ], ["Literatura"]);

  /* ---------------- MAPAS MENTAIS ---------------- */
  Y.mp("mp-subordinadas", "Mapa mental · Orações subordinadas", "Substantivas (seis funções), adjetivas e adverbiais.", {
    centro: "Subordinação", ramos: [
      { t: "Substantivas", itens: ["subjetiva, objetiva direta e indireta", "completiva nominal, predicativa, apositiva"] },
      { t: "Adjetivas", itens: ["restritiva: sem vírgula", "explicativa: entre vírgulas"] },
      { t: "Causa e consequência", itens: ["porque, visto que", "tão… que"] },
      { t: "Condição e concessão", itens: ["se, caso, desde que", "embora, ainda que"] },
      { t: "Tempo e finalidade", itens: ["quando, assim que", "para que"] },
      { t: "Comparação, conformidade, proporção", itens: ["como, conforme, à medida que"] },
      { t: "Reduzidas", itens: ["infinitivo, gerúndio, particípio"] }
    ]
  });

  Y.mp("mp-conjuncoes", "Mapa mental · Conjunções coordenativas e subordinativas", "Relações de sentido e exemplos.", {
    centro: "Conjunções", ramos: [
      { t: "Aditivas", itens: ["e, nem"] },
      { t: "Adversativas", itens: ["mas, porém, contudo, todavia"] },
      { t: "Alternativas", itens: ["ou… ou, ora… ora"] },
      { t: "Conclusivas", itens: ["logo, portanto, por isso"] },
      { t: "Explicativas", itens: ["pois, que, porque"] },
      { t: "Subordinativas", itens: ["causa, condição, concessão, tempo, finalidade…"] }
    ]
  });

  Y.mp("mp-regencia", "Mapa mental · Regência verbal e nominal", "Verbos e nomes com preposição.", {
    centro: "Regência", ramos: [
      { t: "Assistir (ver)", itens: ["assistir **a**"] },
      { t: "Obedecer, preferir", itens: ["obedecer **a**; preferir X **a** Y"] },
      { t: "Aspirar, visar", itens: ["aspirar **a**; visar **a**"] },
      { t: "Implicar, informar", itens: ["implicar (sem prep.)", "informar alguém **de/sobre**"] },
      { t: "Esquecer, lembrar", itens: ["esquecer o livro", "esquecer-se **do** livro"] },
      { t: "Regência nominal", itens: ["medo de · respeito a/por", "favorável a · compatível com"] }
    ]
  });

  Y.mp("mp-colocacao-pronominal", "Mapa mental · Colocação pronominal", "Ênclise, próclise e mesóclise.", {
    centro: "Pronome oblíquo átono", ramos: [
      { t: "Ênclise", itens: ["depois do verbo", "início de frase", "Diga-me."] },
      { t: "Próclise", itens: ["antes do verbo", "palavras atrativas", "Não me diga."] },
      { t: "Mesóclise", itens: ["no meio do verbo", "futuro do presente e do pretérito", "Dar-lhe-ei."] },
      { t: "Palavras atrativas", itens: ["não, nunca, que, quem, já, também, se, embora"] }
    ]
  });

  Y.mp("mp-concordancia", "Mapa mental · Concordância verbal e nominal", "Casos especiais e regras gerais.", {
    centro: "Concordância", ramos: [
      { t: "Verbal: regra geral", itens: ["verbo concorda com o núcleo do sujeito"] },
      { t: "Impessoais", itens: ["haver, fazer, fenômenos da natureza", "singular"] },
      { t: "Verbo + se", itens: ["passiva: concorda", "VTI: singular"] },
      { t: "Mais de um / cerca de", itens: ["mais de um: singular", "cerca de + numeral: concorda"] },
      { t: "Nominal: regra geral", itens: ["adjetivo concorda com o substantivo"] },
      { t: "Casos especiais", itens: ["bastante, meio, menos: invariáveis (advérbios)", "anexo, mesmo, próprio: concordam"] }
    ]
  });

  Y.mp("mp-semantica", "Mapa mental · Sentido das palavras", "Polissemia, ambiguidade, denotação e conotação.", {
    centro: "Semântica", ramos: [
      { t: "Polissemia", itens: ["vários sentidos", "manga, banco, pena"] },
      { t: "Ambiguidade", itens: ["duas leituras", "Vi o homem com o binóculo."] },
      { t: "Denotação", itens: ["sentido literal"] },
      { t: "Conotação", itens: ["sentido figurado", "coração de ouro"] },
      { t: "Sinônimos e antônimos", itens: ["bonito, belo · alegre, triste"] },
      { t: "Homônimos e parônimos", itens: ["cela/sela · descrição/discrição"] }
    ]
  }, ["Gramática", "Interpretação"]);

  Y.mp("mp-modernismo", "Mapa mental · Modernismo brasileiro", "Contexto, fases, autores e características.", {
    centro: "Modernismo", ramos: [
      { t: "Contexto", itens: ["Século XX, industrialização", "Vanguardas europeias"] },
      { t: "Semana de 22", itens: ["fevereiro de 1922, São Paulo", "ruptura com o academicismo"] },
      { t: "1ª fase (1922–1930)", itens: ["Mário e Oswald de Andrade", "Manuel Bandeira"] },
      { t: "2ª fase (1930–1945)", itens: ["Drummond, Cecília, Vinicius", "Graciliano, Rachel de Queiroz, Jorge Amado"] },
      { t: "3ª fase (1945–)", itens: ["Guimarães Rosa, Clarice", "João Cabral"] },
      { t: "Características", itens: ["versos livres, coloquialismo, humor, identidade nacional"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-texto-argumentativo", "Mapa mental · Estrutura do texto argumentativo", "Introdução, desenvolvimento e conclusão com proposta.", {
    centro: "Texto argumentativo", ramos: [
      { t: "Introdução", itens: ["contextualização", "tese"] },
      { t: "Desenvolvimento 1", itens: ["tópico frasal", "argumento + repertório"] },
      { t: "Desenvolvimento 2", itens: ["outro argumento", "exemplo ou dado"] },
      { t: "Conclusão", itens: ["retomada da tese", "proposta de intervenção"] },
      { t: "Proposta", itens: ["agente · ação · meio · finalidade"] },
      { t: "Coesão", itens: ["conectivos, pronomes, sinônimos"] }
    ]
  }, ["Redação"]);

  /* ---------------- AULAS DE EMERGÊNCIA ---------------- */
  function E(id, titulo, resumo, blocos, assunto) {
    if (id.indexOf("quiz") === 0) {
      /* distribui a posição da resposta correta (o gabarito é gerado pelo app) */
      var alvo = [2, 0, 3, 1, 3, 0, 1, 2, 3, 1, 0, 2, 1, 3, 0], k = 0;
      blocos.forEach(function (b) {
        if (b.k !== "q") return;
        b.it.forEach(function (q) {
          if (!q.alt) return;
          var t = alvo[k++ % alvo.length] % q.alt.length, tmp = q.alt[t];
          q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
        });
      });
    }
    Y.m("emergencia", "e-" + id, titulo, assunto || ["Gramática"], resumo, blocos, "50 min");
  }
  var pl = H.pl;

  E("stop-conjuncoes", "Aula de 50 minutos: Stop das conjunções", "Jogo de revisão de conjunções e relações de sentido, por letra sorteada.", [
    H.i("**Antes da aula:** imprima a ficha, uma por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Sorteie uma letra a cada rodada. Cada grupo escreve uma conjunção ou locução com a letra e uma frase com ela." },
      { min: "30", t: "5 rodadas", d: "3 minutos por rodada, com correção no quadro. Vale 10 pontos por frase correta e original." },
      { min: "10", t: "Contagem", d: "Some os pontos e discuta frases duvidosas." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com conjunção concessiva." }
    ]),
    H.tab("Ficha", ["Rodada · letra", "Conjunção", "Relação", "Frase", "Pontos"], [["1 · ___", "", "", "", ""], ["2 · ___", "", "", "", ""], ["3 · ___", "", "", "", ""], ["4 · ___", "", "", "", ""], ["5 · ___", "", "", "", ""], [{ t: "Total" }, "", "", "", ""]]),
    H.pf("Letras sugeridas", ["P (porque, porém, portanto, para que), E (e, embora), M (mas, mesmo que), Q (que, quando), C (caso, contudo, conforme), S (se, segundo)."])
  ]);

  E("bingo-conectivos", "Aula de 50 minutos: bingo de conectivos", "O professor lê relações de sentido; os alunos marcam o conectivo correspondente.", [
    H.i("**Antes da aula:** imprima uma cartela por aluno e escreva a lista no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno escolhe 9 conectivos da lista para a cartela." },
      { min: "35", t: "Rodadas", d: "Leia uma relação (ex.: “concessão”). Quem tiver um conectivo dessa relação marca. Linha completa vale 1; cartela cheia, 3." },
      { min: "10", t: "Fechamento", d: "Cada aluno escreve uma frase com dois conectivos da cartela." }
    ]),
    H.tab("Cartela", ["", "", ""], [["", "", ""], ["", "", ""], ["", "", ""]]),
    H.te("Lista no quadro", ["além disso · no entanto · porque · portanto · embora · se · quando · para que · conforme · à medida que · visto que · contudo · ou… ou · logo · assim que · desde que"]),
    H.pf("Relações para ler", ["Adição (além disso). Oposição (no entanto, contudo). Causa (porque, visto que). Conclusão (portanto, logo). Concessão (embora). Condição (se, desde que). Tempo (quando, assim que). Finalidade (para que). Conformidade (conforme). Proporção (à medida que). Alternativa (ou… ou)."])
  ]);

  E("caca-erro", "Aula de 50 minutos: caça ao erro de regência, crase e concordância", "Revisão em duplas de um texto com 12 erros do 9º ano.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise as regras de regência, crase e concordância." },
      { min: "15", t: "Caça aos erros", d: "As duplas sublinham os erros." },
      { min: "15", t: "Correção coletiva", d: "Cada dupla corrige um erro e explica a regra." },
      { min: "10", t: "Reescrita", d: "Cada aluno reescreve o texto corrigido." },
      { min: "5", t: "Fechamento", d: "Cada um anota o erro que mais cometeu." }
    ]),
    H.t("Texto com erros", "Fazem dois anos que a escola implantou um projeto de debates. Os alunos assistem os debates e prefere mais ouvir do que falar. Entregamos a diretora as propostas, as quais foi enviadas a pouco. Houveram muitas discussões, e todos aspiram uma melhora. Segue anexo as fotos do evento. Me disseram que o projeto vai continuar", "Texto original, com erros propositais"),
    H.qs([dis("Reescreva o texto corrigido.", "Faz dois anos que a escola implantou um projeto de debates. Os alunos assistem aos debates e preferem ouvir a falar. Entregamos à diretora as propostas, as quais foram enviadas há pouco. Houve muitas discussões, e todos aspiram a uma melhora. Seguem anexas as fotos do evento. Disseram-me que o projeto vai continuar.", 7)]),
    H.pf("Erros", ["fazem → faz; assistem os → assistem aos; prefere mais… do que → preferem… a; entregamos a diretora → à diretora; foi enviadas → foram enviadas; a pouco → há pouco; houveram → houve; aspiram uma → aspiram a uma; segue anexo as → seguem anexas; me disseram → disseram-me; falta de pontos finais."])
  ], ["Gramática", "Redação"]);

  E("debate-ia", "Aula de 50 minutos: debate sobre inteligência artificial na escola", "Debate regrado com tese, argumentos, contra-argumentos e escrita final.", [
    H.i("**Antes da aula:** divida a turma em dois lados."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Apresente o tema: “A inteligência artificial deve ser usada nas atividades escolares?”. Sorteie os lados." },
      { min: "10", t: "Preparação", d: "Cada lado anota tese, dois argumentos e um contra-argumento." },
      { min: "20", t: "Debate", d: "Duas rodadas. 1 minuto por fala. Cada fala precisa incluir uma concessão." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um parágrafo com sua opinião final." },
      { min: "5", t: "Fechamento", d: "Síntese dos melhores argumentos." }
    ]),
    H.tab("Ficha", ["Lado", "Tese", "Argumento 1", "Argumento 2", "Contra-argumento"], [["A favor", "", "", "", ""], ["Contra", "", "", "", ""]]),
    H.ln("Meu parágrafo final", 8),
    H.pf("Dica", ["Reforce: usar uma ferramenta não dispensa o trabalho de pensar. Peça exemplos concretos (resumir, traduzir, copiar)."])
  ], ["Redação", "Interpretação"]);

  E("juri-alienista", "Aula de 50 minutos: o júri de Simão Bacamarte", "Júri simulado a partir de O Alienista: o médico é culpado?", [
    H.i("**Antes da aula:** imprima o resumo; divida a turma em acusação, defesa e júri."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Quem define o que é normal?”" },
      { min: "10", t: "Leitura", d: "Leia o resumo em voz alta." },
      { min: "10", t: "Preparação", d: "Grupos anotam argumentos com passagens do texto." },
      { min: "20", t: "Julgamento", d: "Acusação e defesa falam; o júri faz perguntas e decide." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com a lição que tirou." }
    ]),
    H.t("Resumo", "O médico Simão Bacamarte constrói a Casa Verde e interna cada vez mais pessoas por sinais de “desequilíbrio”. A vila se revolta. Ele conclui que o equilíbrio perfeito é sinal de doença e acaba se internando.", "Reconto adaptado de “O Alienista”, de Machado de Assis (1882)"),
    H.tab("Ficha", ["Grupo", "Argumento 1", "Argumento 2"], [["Acusação", "", ""], ["Defesa", "", ""], ["Júri (perguntas)", "", ""]]),
    H.pf("Dica", ["Aproveite para trabalhar ironia e crítica à ciência sem limites."])
  ], ["Interpretação", "Literatura"]);

  E("detetive-fake-news", "Aula de 50 minutos: detetive de notícias falsas", "Os alunos analisam manchetes e mensagens para identificar sinais de desinformação.", [
    H.i("**Antes da aula:** imprima a ficha, uma por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise sinais de alerta: título exagerado, pouca informação sobre autoria, apelo emocional, pedido de compartilhamento." },
      { min: "20", t: "Análise", d: "As duplas analisam as mensagens e marcam os sinais." },
      { min: "15", t: "Discussão", d: "Cada dupla apresenta a análise de uma mensagem." },
      { min: "10", t: "Produção", d: "Cada dupla escreve três regras para checar informações antes de compartilhar." }
    ]),
    H.tab("Mensagens para analisar", ["Nº", "Mensagem (fictícia)", "Sinais de alerta"], [["1", "URGENTE!!! Cientistas descobrem que dormir 3 horas por noite aumenta a inteligência! Compartilhe antes que apaguem!", ""], ["2", "Prefeitura anuncia reabertura da biblioteca municipal em março, segundo nota oficial publicada no site do município.", ""], ["3", "Você NÃO vai acreditar no que esse remédio caseiro faz! Médicos odeiam esse truque!", ""]]),
    H.ln("Nossas três regras para checar informações", 5),
    H.pf("Gabarito", ["1: título alarmista, pedido de compartilhamento, ausência de fonte. 2: fonte oficial citada e linguagem objetiva (mais confiável, mas vale conferir no site). 3: apelo emocional, promessa exagerada, ausência de fonte."])
  ], ["Interpretação", "Redação"]);

  E("quiz-9ano", "Aula de 50 minutos: quiz relâmpago do 9º ano", "Quinze questões rápidas, em duplas, com correção coletiva.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada dupla marca uma letra por questão." },
      { min: "20", t: "Quiz", d: "As duplas resolvem as 15 questões." },
      { min: "20", t: "Correção", d: "Corrija no quadro e peça explicações." },
      { min: "5", t: "Fechamento", d: "Cada dupla anota a questão mais difícil." }
    ]),
    H.qs([
      ob("“Espero que você venha.” A oração //que você venha// é:", "subjetiva|objetiva direta|predicativa|adverbial", "B"),
      ob("“É preciso que você estude.” A oração //que você estude// é:", "subjetiva|objetiva direta|predicativa|apositiva", "A"),
      ob("“Embora estivesse cansado, saiu.” A oração //Embora estivesse cansado// é:", "causal|condicional|concessiva|temporal", "C"),
      ob("“Se chover, adiaremos.” A oração //Se chover// é:", "condicional|causal|concessiva|finalidade", "A"),
      ob("“Estudou para que passasse.” A oração //para que passasse// é:", "finalidade|causa|tempo|comparação", "A"),
      ob("“Ao chegar, saudou todos.” A oração //Ao chegar// é reduzida de:", "infinitivo|gerúndio|particípio|desenvolvida", "A"),
      ob("“Os alunos, que estudaram, passaram.” A oração //que estudaram// é:", "restritiva|explicativa|substantiva|adverbial", "B"),
      ob("“Assisti ___ filme.”", "o|ao|no|do", "B"),
      ob("“Aspiro ___ uma vaga.”", "uma|a|de|em", "B"),
      ob("“___ dois anos que me formei.”", "Fazem|Faz|Fizeram|Faziam", "B"),
      ob("“Segundo a norma-padrão, o correto é:”", "Me diga a verdade.|Diga-me a verdade.|Diga me a verdade.|Diga a me verdade.", "B"),
      ob("“Fui ___ Bahia.”", "a|à|há|as", "B"),
      ob("“Fui ___ Paris.”", "a|à|há|as", "A"),
      ob("“Voz doce” é:", "sinestesia|catacrese|elipse|gradação", "A"),
      ob("“Vi o homem com o binóculo” é:", "clara|ambígua|irônica|elíptica", "B")
    ]),
    H.pf("Dica", ["O gabarito completo aparece ao final desta folha na versão do professor. Proponha que a dupla com mais acertos escolha o próximo jogo."])
  ]);

  E("introducao-50min", "Aula de 50 minutos: reescreva a introdução (modelo ENEM)", "Diagnóstico e reescrita de uma introdução fraca com contexto, tese e repertório.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Apresente a fórmula: contexto + tese (+ repertório)." },
      { min: "10", t: "Diagnóstico", d: "As duplas apontam três problemas na introdução fraca." },
      { min: "20", t: "Reescrita", d: "Cada dupla reescreve a introdução." },
      { min: "10", t: "Leitura e troca", d: "Duas duplas leem; a turma avalia com o checklist." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota o que aprendeu." }
    ]),
    H.t("Introdução fraca · tema: desafios do uso de inteligência artificial na escola", "Hoje em dia a tecnologia está em todo lugar. Muita gente usa inteligência artificial. Por isso, ela é um problema na escola.", "Texto original"),
    H.qs([dis("Aponte três problemas da introdução acima.", "(1) Abertura genérica (“Hoje em dia”); (2) generalização sem fundamento (“muita gente”); (3) tese vaga e sem justificativa (“é um problema”); frases curtas e sem conectivos.", 4), dis("Reescreva a introdução.", "Resposta pessoal. Modelo: “Na sociedade digital, ferramentas de inteligência artificial transformam a forma de estudar. Nesse cenário, seu uso na escola representa um desafio, uma vez que a falta de orientação pode levar à cópia e ao enfraquecimento do pensamento crítico.”", 8)]),
    H.tab("Checklist", ["Item", "Sim / Não"], [["Contextualiza o tema sem frase genérica", ""], ["Apresenta tese clara", ""], ["Usa conectivos", ""], ["Evita 1ª pessoa", ""]])
  ], ["Redação"]);

  E("roda-bilac", "Aula de 50 minutos: roda de leitura “Língua Portuguesa”, de Bilac", "Leitura de um soneto parnasiano, análise de imagens e escrita de um quarteto sobre a língua.", [
    H.i("**Antes da aula:** imprima o poema, uma cópia por aluno."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “O que a língua portuguesa tem de bonito?”" },
      { min: "10", t: "Leitura", d: "Leia o poema duas vezes; depois em coro." },
      { min: "15", t: "Questões em duplas", d: "As duplas respondem às questões." },
      { min: "15", t: "Criação", d: "Cada aluno escreve um quarteto sobre a língua, com rima." },
      { min: "5", t: "Fechamento", d: "Voluntários leem os quartetos." }
    ]),
    H.poema("Língua Portuguesa", "Última flor do Lácio, inculta e bela,\nÉs, a um tempo, esplendor e sepultura:\nOuro nativo, que na ganga impura\nA bruta mina entre os cascalhos vela...", "Olavo Bilac (1865–1918), primeira estrofe"),
    H.qs([
      ob("“Esplendor e sepultura” é uma:", "antítese|metonímia|elipse|ironia", "A"),
      ob("“Ouro nativo… a bruta mina” sugere que a língua:", "é bela, mas nasce de uma origem rude|é feia|é inútil|é moderna", "A"),
      dis("O que o poeta valoriza na língua portuguesa?", "Sua beleza, riqueza e origem, comparadas ao ouro encontrado em uma mina.", 3),
      dis("Escreva um quarteto sobre a língua, com rima.", "Resposta pessoal.", 5)
    ])
  ], ["Interpretação", "Literatura"]);

  E("podcast-10min", "Aula de 50 minutos: podcast em dez minutos", "Roteiro e gravação (ou leitura) de um episódio curto sobre um tema da turma.", [
    H.i("**Antes da aula:** se possível, tenha um celular por grupo para gravar; se não, os grupos leem o roteiro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Apresente a estrutura: vinheta, abertura, dois blocos, encerramento." },
      { min: "20", t: "Roteiro", d: "Em grupos de quatro, escrevem o roteiro de um episódio de 2 minutos." },
      { min: "15", t: "Gravação ou leitura", d: "Os grupos gravam (ou leem) o episódio." },
      { min: "10", t: "Audição", d: "A turma ouve dois episódios e comenta clareza, ritmo e conteúdo." }
    ]),
    H.tab("Roteiro", ["Parte", "Tempo", "Fala / efeito sonoro"], [["Vinheta", "5 s", ""], ["Abertura", "20 s", ""], ["Bloco 1", "45 s", ""], ["Bloco 2", "45 s", ""], ["Encerramento", "15 s", ""]]),
    H.te("Sugestões de tema", ["Dica de estudo · Resumo de um livro · Entrevista com um professor · Notícia da escola · Curiosidade da língua portuguesa"])
  ], ["Redação"]);

  E("revisao-pares", "Aula de 50 minutos: revisão de texto em pares", "Cada aluno revisa o texto de um colega com checklist de tese, coesão e norma culta.", [
    H.i("**Antes da aula:** peça que os alunos tragam um texto produzido por eles."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Combine: revisar é ajudar. Comece pelo que funcionou." },
      { min: "10", t: "Leitura do colega", d: "Cada aluno lê o texto do colega, sem marcar." },
      { min: "15", t: "Checklist", d: "Preenchem o checklist, com marcas a lápis." },
      { min: "15", t: "Conversa e reescrita", d: "Devolvem os textos e cada autor reescreve." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota o que aprendeu ao revisar." }
    ]),
    H.tab("Checklist", ["Item", "✓", "Comentário"], [["Tese clara", "", ""], ["Argumentos desenvolvidos", "", ""], ["Repertório pertinente", "", ""], ["Conectivos adequados", "", ""], ["Pontuação, regência, crase e concordância", "", ""], ["Proposta de intervenção completa", "", ""]]),
    H.pf("Dica", ["Incentive comentários concretos (“na linha 4, falta o agente na proposta”)."])
  ], ["Redação"]);

  E("seminario-modernismo", "Aula de 50 minutos: seminário relâmpago sobre o Modernismo", "Grupos preparam e apresentam, em 3 minutos, um autor ou uma fase do Modernismo.", [
    H.i("**Antes da aula:** divida a turma em seis grupos; cada grupo recebe um tema."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise brevemente o contexto (Semana de 22) e distribua os temas." },
      { min: "20", t: "Preparação", d: "Cada grupo prepara 3 minutos de apresentação com um cartaz ou roteiro." },
      { min: "20", t: "Apresentações", d: "Cada grupo apresenta em 3 minutos. A turma anota uma pergunta." },
      { min: "5", t: "Fechamento", d: "Síntese: o que une os autores do Modernismo?" }
    ]),
    H.te("Temas", ["Pré-Modernismo (Euclides da Cunha, Lima Barreto)", "Semana de Arte Moderna (1922)", "Mário e Oswald de Andrade (1ª fase)", "Manuel Bandeira e Drummond (poesia)", "Graciliano Ramos e Rachel de Queiroz (romance de 30)", "Guimarães Rosa e Clarice Lispector (3ª fase)"]),
    H.tab("Roteiro do grupo", ["Item", "Escreva aqui"], [["Tema", ""], ["Contexto", ""], ["Obras e autores", ""], ["Características", ""], ["Exemplo (verso, trecho, título)", ""]]),
    H.pf("Critérios", ["Conteúdo (4) · clareza e tempo (3) · participação do grupo (3)."])
  ], ["Literatura", "Interpretação"]);
})();
