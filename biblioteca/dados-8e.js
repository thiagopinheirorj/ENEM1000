/* 8º ano · Slides (10), mapas mentais (8) e aulas de emergência (12). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("8"), ob = H.ob, dis = H.dis;

  /* ---------------- SLIDES ---------------- */
  Y.sl("sl-sujeito-predicado", "Slides · Sujeito e predicado", "8 slides: tipos de sujeito, predicado verbal, nominal, verbo-nominal e predicativos.", [
    { capa: true, t: "Sujeito e predicado", sub: "A estrutura da oração" },
    { t: "Sujeito", li: ["Termo sobre o qual se declara algo", "Pergunta: **quem** pratica a ação?", "Concorda com o verbo"] },
    { t: "Tipos de sujeito", li: ["**Simples**: um núcleo", "**Composto**: dois ou mais núcleos", "**Oculto**: pela terminação do verbo", "**Indeterminado**: não se sabe quem", "**Inexistente**: oração sem sujeito"] },
    { t: "Oração sem sujeito", li: ["Fenômeno da natureza: Choveu.", "Haver = existir: Há flores.", "Tempo: Faz dois anos."], nota: "Reforce: verbos impessoais ficam no singular." },
    { t: "Predicado verbal e nominal", li: ["**Verbal**: verbo de ação (O menino correu)", "**Nominal**: verbo de ligação + predicativo (O dia estava lindo)"] },
    { t: "Verbo-nominal", li: ["Ação + qualidade do sujeito", "A professora chegou cansada."] },
    { t: "Predicativo do sujeito e do objeto", li: ["Do sujeito: Ela parece **feliz**.", "Do objeto: Acho o filme **ótimo**."] },
    { t: "Vamos praticar", li: ["Classifique o sujeito: “Choveu.” · “Fomos ao cinema.” · “Roubaram a bolsa.”", "Classifique o predicado: “Ela saiu triste.”"], nota: "Respostas: inexistente; oculto; indeterminado; verbo-nominal." }
  ]);

  Y.sl("sl-objetos-adjuntos", "Slides · Objetos e adjuntos", "7 slides: objeto direto e indireto, adjunto adnominal e adverbial, aposto e vocativo.", [
    { capa: true, t: "Objetos e adjuntos", sub: "Complementos e termos acessórios" },
    { t: "Objeto direto", li: ["Sem preposição", "Comprei **um livro**.", "Substituível por o, a, os, as: Comprei-**o**."] },
    { t: "Objeto indireto", li: ["Com preposição", "Gosto **de música**.", "Substituível por lhe, lhes: Entreguei-**lhe** o livro."] },
    { t: "Adjunto adnominal", li: ["Acompanha o substantivo", "o **velho** livro · o livro **da biblioteca** · **dois** livros"] },
    { t: "Adjunto adverbial", li: ["Acompanha o verbo", "tempo: ontem · lugar: em Recife · modo: baixinho"] },
    { t: "Aposto e vocativo", li: ["**Aposto**: explica (Recife, capital de Pernambuco, é bonita.)", "**Vocativo**: chama (Pedro, venha aqui.)"] },
    { t: "Vamos praticar", li: ["Identifique: “Ontem, entreguei o livro ao professor.”", "Complete: “Prefiro café ___ chá.”"], nota: "Respostas: ontem (adjunto adverbial); o livro (OD); ao professor (OI); a." }
  ]);

  Y.sl("sl-coordenacao-subordinacao", "Slides · Coordenação e subordinação", "8 slides: período composto e tipos de orações coordenadas.", [
    { capa: true, t: "Coordenação e subordinação", sub: "Como as orações se ligam" },
    { t: "Período simples e composto", li: ["Simples: uma oração (Choveu.)", "Composto: duas ou mais orações"] },
    { t: "Coordenação", li: ["Orações independentes entre si", "Estudei **e** passei."] },
    { t: "Subordinação", li: ["Uma oração depende da outra", "Espero **que você venha**."] },
    { t: "Coordenadas sindéticas", li: ["Aditiva: e, nem", "Adversativa: mas, porém", "Alternativa: ou… ou", "Conclusiva: logo, portanto", "Explicativa: pois, que"] },
    { t: "Coordenadas assindéticas", li: ["Sem conjunção", "Cheguei, vi, venci."] },
    { t: "Subordinadas: os três grupos", li: ["**Substantivas**: função de substantivo", "**Adjetivas**: função de adjetivo", "**Adverbiais**: função de advérbio"] },
    { t: "Vamos praticar", li: ["Classifique: “Estudou muito, mas não passou.”", "Classifique: “Espero que ele venha.”"], nota: "Respostas: coordenada adversativa; subordinada substantiva objetiva direta." }
  ]);

  Y.sl("sl-subordinadas", "Slides · Orações subordinadas", "8 slides: substantivas, adjetivas e adverbiais com exemplos.", [
    { capa: true, t: "Orações subordinadas", sub: "Substantivas, adjetivas e adverbiais" },
    { t: "Substantivas", li: ["Função de substantivo", "Com **que** ou **se**", "É importante **que você estude**. · Espero **que venha**."] },
    { t: "Adjetivas restritivas", li: ["Sem vírgula; restringem o antecedente", "Os alunos **que estudaram** passaram. (só alguns)"] },
    { t: "Adjetivas explicativas", li: ["Entre vírgulas; explicam", "Os alunos, **que estudaram**, passaram. (todos)"] },
    { t: "Adverbiais: causa e tempo", li: ["Causa: porque, já que", "Tempo: quando, assim que, enquanto"] },
    { t: "Adverbiais: condição, concessão e finalidade", li: ["Condição: se, caso", "Concessão: embora, ainda que", "Finalidade: para que"] },
    { t: "Teste da substituição", li: ["Substantiva: troque por //isso//", "Adjetiva: troque por um adjetivo", "Adverbial: troque por um advérbio"] },
    { t: "Vamos praticar", li: ["Classifique a oração destacada: “++Embora estivesse cansada++, ela terminou.”", "“O livro ++que li++ é ótimo.”"], nota: "Respostas: adverbial concessiva; adjetiva restritiva." }
  ]);

  Y.sl("sl-regencia", "Slides · Regência verbal", "6 slides: verbos que pedem preposição e erros comuns.", [
    { capa: true, t: "Regência verbal", sub: "Quando o verbo pede preposição" },
    { t: "O que é regência?", li: ["Relação entre o verbo e seu complemento", "Alguns verbos exigem preposição; outros, não"] },
    { t: "Assistir, obedecer, preferir", li: ["Assisti **ao** filme.", "Obedeço **ao** professor.", "Prefiro café **a** chá."] },
    { t: "Aspirar, visar, chegar, ir", li: ["Aspiro **a** uma vaga.", "Visamos **ao** sucesso.", "Chegamos **à** escola. · Fui **a** São Paulo."] },
    { t: "Sem preposição", li: ["Namorar: Pedro namora Ana.", "Esquecer: Esqueci o livro. / Esqueci-me **do** livro."] },
    { t: "Vamos praticar", li: ["Corrija: “Assisti o jogo.” · “Prefiro mais café do que chá.” · “Pedro namora com Ana.”"], nota: "Respostas: ao jogo; café a chá; namora Ana." }
  ]);

  Y.sl("sl-crase", "Slides · Crase", "7 slides: regra geral, teste prático, casos proibidos e locuções.", [
    { capa: true, t: "Crase", sub: "A + A = À" },
    { t: "O que é crase?", li: ["Fusão da preposição **a** com o artigo **a(s)**", "Fui **à** feira. (a + a)"] },
    { t: "Teste do masculino", li: ["Troque a palavra feminina por uma masculina", "Se aparecer **ao**, há crase", "Fui à feira → Fui ao mercado"] },
    { t: "Locuções com crase", li: ["à noite, à tarde, às vezes", "à vista, às pressas, à medida que"] },
    { t: "Sem crase", li: ["Antes de verbos: começou a estudar", "Antes de masculino: assisti a um filme", "Antes de pronomes pessoais: falei a ela"] },
    { t: "Casos especiais", li: ["Antes de //casa//: fui **a** casa (sem determinante) × fui **à** casa de meus avós", "Antes de //terra//: voltou **à** terra natal"] },
    { t: "Vamos praticar", li: ["Complete: “Fui ___ biblioteca ___ tarde.” · “Obedeço ___ lei.”"], nota: "Respostas: à; à; à." }
  ]);

  Y.sl("sl-figuras", "Slides · Figuras de linguagem", "8 slides: metáfora, metonímia, antítese, paradoxo, ironia, hipérbole, eufemismo e personificação.", [
    { capa: true, t: "Figuras de linguagem", sub: "Como as palavras criam efeitos" },
    { t: "Metáfora e comparação", li: ["Metáfora: “O tempo é um rio.”", "Comparação: “Forte como um touro.”"] },
    { t: "Metonímia", li: ["Troca de um termo por outro próximo", "“Li Machado de Assis.” (a obra)", "“Bebi um copo.” (o conteúdo)"] },
    { t: "Antítese e paradoxo", li: ["Antítese: palavras opostas (amor e ódio)", "Paradoxo: ideias contraditórias (“contentamento descontente”)"] },
    { t: "Ironia", li: ["Diz o contrário do que pensa", "“Que dia lindo!” (em plena tempestade)"] },
    { t: "Hipérbole e eufemismo", li: ["Hipérbole: exagero (“Já disse mil vezes!”)", "Eufemismo: suaviza (“Ele nos deixou.”)"] },
    { t: "Personificação", li: ["Traços humanos a seres não humanos", "“O vento sussurrava segredos.”"] },
    { t: "Vamos praticar", li: ["Identifique: “O silêncio gritava.” · “Morri de rir.” · “Li Camões.” · “O tempo voa.”"], nota: "Respostas: paradoxo; hipérbole; metonímia; metáfora (ou personificação)." }
  ], ["Gramática", "Literatura"]);

  Y.sl("sl-variacao", "Slides · Variação linguística", "7 slides: tipos de variação e preconceito linguístico.", [
    { capa: true, t: "Variação linguística", sub: "Por que falamos diferente?" },
    { t: "A língua varia", li: ["No espaço (regional)", "Entre grupos sociais", "Conforme a situação", "Ao longo do tempo"] },
    { t: "Variação regional", li: ["aipim, macaxeira, mandioca", "pipa, papagaio, raia", "bolacha, biscoito"] },
    { t: "Variação social e situacional", li: ["Gírias e jargões de grupos", "Linguagem formal × informal", "Adequação à situação"] },
    { t: "Variação histórica", li: ["vosmecê → você", "Palavras que mudam de sentido com o tempo"] },
    { t: "Preconceito linguístico", li: ["Julgar alguém pelo jeito de falar", "Não existe fala “errada”: existe fala adequada ou inadequada"] },
    { t: "Atividade", li: ["Reescreva em linguagem formal: “E aí, tá ligado que a prova foi suave?”"], nota: "Resposta: Você percebeu que a prova foi fácil?" }
  ], ["Gramática", "Interpretação"]);

  Y.sl("sl-coesao", "Slides · Coesão e coerência", "7 slides: conectivos, pronomes, elipse, sinônimos e sentido lógico.", [
    { capa: true, t: "Coesão e coerência", sub: "Textos que se costuram" },
    { t: "Coesão", li: ["Ligação entre as partes do texto", "Conectivos, pronomes, sinônimos, elipse"] },
    { t: "Conectivos", li: ["Adição: além disso", "Oposição: mas, porém", "Causa: porque", "Conclusão: portanto", "Exemplo: por exemplo"] },
    { t: "Retomadas", li: ["Pronome: Ana chegou e **ela** saiu.", "Sinônimo: o menino → o garoto", "Elipse: Chegamos e [nós] saímos."] },
    { t: "Coerência", li: ["Sentido lógico, sem contradição", "As ideias combinam com o tema"] },
    { t: "Quando falta coerência", li: ["“Choveu, portanto o chão ficou seco.”", "Coesão sem coerência"] },
    { t: "Vamos praticar", li: ["Una: “Estudou muito. Passou.”", "Reescreva sem repetir: “Pedro comprou um livro. Pedro leu o livro.”"], nota: "Respostas: …, por isso passou; Pedro comprou um livro e o leu." }
  ], ["Redação", "Gramática"]);

  Y.sl("sl-textos-argumentativos", "Slides · Textos argumentativos", "7 slides: carta aberta, artigo de opinião e debate regrado.", [
    { capa: true, t: "Textos argumentativos", sub: "Defender ideias com razões" },
    { t: "O que é argumentar?", li: ["Apresentar uma **tese**", "Sustentá-la com **argumentos**", "Considerar o outro lado (**concessão**)"] },
    { t: "Artigo de opinião", li: ["Tese + argumentos + conclusão", "Assinado por quem opina", "Linguagem formal"] },
    { t: "Carta aberta", li: ["Dirigida a uma autoridade, mas pública", "Apresenta o problema, argumentos e um pedido"] },
    { t: "Debate regrado", li: ["Tema, dois lados e moderador", "Tempo para cada fala", "Respeito: critica-se a ideia, não a pessoa"] },
    { t: "Conectivos argumentativos", li: ["Além disso · porém · portanto · por exemplo · embora"] },
    { t: "Atividade", li: ["Escolha um tema e escreva uma tese e dois argumentos: uniforme escolar? lição de casa?"], nota: "Peça que algumas duplas leiam e que a turma aponte se os argumentos sustentam a tese." }
  ], ["Redação", "Interpretação"]);

  /* ---------------- MAPAS MENTAIS ---------------- */
  Y.mp("mp-sujeito-predicado", "Mapa mental · Sujeito e predicado (8º ano)", "Tipos de sujeito, predicado e predicativos.", {
    centro: "Oração", ramos: [
      { t: "Sujeito simples", itens: ["um núcleo", "O menino chegou."] },
      { t: "Sujeito composto", itens: ["dois núcleos", "Ana e Bia saíram."] },
      { t: "Sujeito oculto", itens: ["pela terminação do verbo", "Chegamos cedo."] },
      { t: "Sujeito indeterminado", itens: ["3ª pessoa do plural sem referente", "Roubaram a bolsa."] },
      { t: "Oração sem sujeito", itens: ["Choveu. · Há flores. · Faz dois anos."] },
      { t: "Predicado verbal", itens: ["verbo de ação"] },
      { t: "Predicado nominal", itens: ["verbo de ligação + predicativo"] },
      { t: "Predicado verbo-nominal", itens: ["ação + predicativo"] }
    ]
  });

  Y.mp("mp-objetos-adjuntos", "Mapa mental · Objetos, adjuntos, aposto e vocativo", "Termos da oração.", {
    centro: "Termos da oração", ramos: [
      { t: "Objeto direto", itens: ["sem preposição", "Comprei um livro."] },
      { t: "Objeto indireto", itens: ["com preposição", "Gosto de música."] },
      { t: "Adjunto adnominal", itens: ["acompanha o substantivo", "o livro da biblioteca"] },
      { t: "Adjunto adverbial", itens: ["acompanha o verbo", "tempo, lugar, modo…"] },
      { t: "Aposto", itens: ["explica um termo", "Recife, capital de Pernambuco"] },
      { t: "Vocativo", itens: ["chama o interlocutor", "Pedro, venha aqui!"] }
    ]
  });

  Y.mp("mp-coordenadas", "Mapa mental · Orações coordenadas", "Assindéticas e sindéticas com suas conjunções.", {
    centro: "Coordenação", ramos: [
      { t: "Assindéticas", itens: ["sem conjunção", "Cheguei, vi, venci."] },
      { t: "Aditivas", itens: ["e, nem", "Estudei e passei."] },
      { t: "Adversativas", itens: ["mas, porém, contudo, todavia", "Estudei, mas não passei."] },
      { t: "Alternativas", itens: ["ou… ou, ora… ora", "Ou estuda, ou trabalha."] },
      { t: "Conclusivas", itens: ["logo, portanto, por isso", "Penso, logo existo."] },
      { t: "Explicativas", itens: ["pois, que, porque", "Venha logo, que o filme vai começar."] }
    ]
  });

  Y.mp("mp-subordinadas", "Mapa mental · Orações subordinadas", "Substantivas, adjetivas e adverbiais.", {
    centro: "Subordinação", ramos: [
      { t: "Substantivas", itens: ["função de substantivo", "que, se: Espero que venha."] },
      { t: "Adjetivas restritivas", itens: ["sem vírgula", "Os alunos que estudaram passaram."] },
      { t: "Adjetivas explicativas", itens: ["entre vírgulas", "Os alunos, que estudaram, passaram."] },
      { t: "Adverbiais de causa e tempo", itens: ["porque, já que", "quando, assim que"] },
      { t: "Adverbiais de condição e concessão", itens: ["se, caso", "embora, ainda que"] },
      { t: "Adverbiais de finalidade", itens: ["para que", "Estudei para que passasse."] }
    ]
  });

  Y.mp("mp-regencia-crase", "Mapa mental · Regência e crase", "Verbos com preposição e uso da crase.", {
    centro: "Regência e crase", ramos: [
      { t: "Assistir (ver)", itens: ["assistir **a**", "Assisti ao filme."] },
      { t: "Obedecer, preferir", itens: ["obedecer **a**; preferir X **a** Y"] },
      { t: "Aspirar, visar", itens: ["aspirar **a**; visar **a**"] },
      { t: "Chegar, ir", itens: ["chegar **a**; ir **a**", "Fui à escola."] },
      { t: "Sem preposição", itens: ["namorar; esquecer"] },
      { t: "Crase", itens: ["a + a = à", "teste do masculino", "à noite, às vezes, à vista"] }
    ]
  });

  Y.mp("mp-figuras", "Mapa mental · Figuras de linguagem", "Figuras de sentido e efeito expressivo.", {
    centro: "Figuras de linguagem", ramos: [
      { t: "Metáfora e comparação", itens: ["O tempo é um rio.", "forte como um touro"] },
      { t: "Metonímia", itens: ["troca por proximidade", "Li Machado."] },
      { t: "Antítese e paradoxo", itens: ["opostos × contradição"] },
      { t: "Ironia", itens: ["diz o contrário do que pensa"] },
      { t: "Hipérbole e eufemismo", itens: ["exagero × suavização"] },
      { t: "Personificação", itens: ["traços humanos a não humanos"] }
    ]
  }, ["Gramática", "Literatura"]);

  Y.mp("mp-variacao", "Mapa mental · Variação linguística", "Regional, social, situacional e histórica.", {
    centro: "Variação linguística", ramos: [
      { t: "Regional", itens: ["aipim / macaxeira / mandioca"] },
      { t: "Social", itens: ["gírias e jargões de grupos"] },
      { t: "Situacional", itens: ["formal × informal"] },
      { t: "Histórica", itens: ["vosmecê → você"] },
      { t: "Norma culta", itens: ["importante em contextos formais e na escrita"] },
      { t: "Preconceito linguístico", itens: ["não existe fala errada, existe adequação"] }
    ]
  }, ["Gramática", "Interpretação"]);

  Y.mp("mp-coesao", "Mapa mental · Coesão e coerência", "Recursos de ligação e sentido lógico.", {
    centro: "Texto", ramos: [
      { t: "Conectivos", itens: ["adição, oposição, causa, conclusão"] },
      { t: "Pronomes", itens: ["retomam termos: Ana… ela"] },
      { t: "Sinônimos", itens: ["o menino → o garoto"] },
      { t: "Elipse", itens: ["omissão de termo: Chegamos e saímos."] },
      { t: "Coerência", itens: ["sentido lógico", "sem contradições"] }
    ]
  }, ["Redação", "Gramática"]);

  /* ---------------- AULAS DE EMERGÊNCIA ---------------- */
  function E(id, titulo, resumo, blocos, assunto) {
    Y.m("emergencia", "e-" + id, titulo, assunto || ["Gramática"], resumo, blocos, "50 min");
  }
  var pl = H.pl;

  E("stop-oracoes", "Aula de 50 minutos: Stop das funções sintáticas", "Jogo de revisão: sujeito, verbo, objeto, adjunto e aposto por letra sorteada.", [
    H.i("**Antes da aula:** imprima a ficha, uma por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada rodada tem uma letra. Os grupos escrevem uma frase com a letra e identificam as funções." },
      { min: "30", t: "5 rodadas", d: "Em 4 minutos cada grupo escreve uma frase com sujeito, verbo, objeto direto e um adjunto adverbial iniciando com a letra sorteada." },
      { min: "10", t: "Contagem", d: "Cada elemento correto vale 2 pontos; frase original vale 2 extras." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com sujeito composto." }
    ]),
    H.tab("Ficha", ["Rodada · letra", "Frase", "Sujeito", "OD", "Adjunto adverbial", "Pontos"], [["1 · ___", "", "", "", "", ""], ["2 · ___", "", "", "", "", ""], ["3 · ___", "", "", "", "", ""], ["4 · ___", "", "", "", "", ""], ["5 · ___", "", "", "", "", ""], [{ t: "Total" }, "", "", "", "", ""]]),
    H.pf("Dica", ["Se necessário, aceite palavras que comecem com a letra em qualquer termo da frase."])
  ]);

  E("bingo-figuras", "Aula de 50 minutos: bingo das figuras de linguagem", "O professor lê exemplos; os alunos marcam o nome da figura na cartela.", [
    H.i("**Antes da aula:** imprima uma cartela por aluno; o professor tem a lista de frases."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno preenche a cartela com 9 nomes de figuras do quadro." },
      { min: "35", t: "Rodadas", d: "Leia as frases. Quem tiver a figura correspondente marca. Linha completa = 1 ponto; cartela cheia = 3." },
      { min: "10", t: "Fechamento", d: "Cada aluno cria uma frase com uma das figuras do jogo." }
    ]),
    H.tab("Cartela", ["", "", ""], [["", "", ""], ["", "", ""], ["", "", ""]]),
    H.te("Figuras no quadro", ["metáfora · comparação · metonímia · antítese · paradoxo · ironia · hipérbole · eufemismo · personificação"]),
    H.pf("Frases para ler", ["“O tempo é um rio.” (metáfora) · “Forte como um touro.” (comparação) · “Li Machado.” (metonímia) · “Amor e ódio.” (antítese) · “Contentamento descontente.” (paradoxo) · “Que dia lindo!” em tempestade (ironia) · “Já disse mil vezes!” (hipérbole) · “Ele nos deixou.” (eufemismo) · “O vento sussurrava.” (personificação)."])
  ], ["Gramática", "Literatura"]);

  E("caca-erro-regencia", "Aula de 50 minutos: caça ao erro de regência e crase", "Revisão em duplas de um texto com 10 erros de regência, crase e concordância.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise rapidamente: assistir a, obedecer a, preferir a, aspirar a e o teste da crase." },
      { min: "15", t: "Caça aos erros", d: "As duplas sublinham os erros." },
      { min: "15", t: "Correção coletiva", d: "Cada dupla corrige um erro e explica a regra." },
      { min: "10", t: "Reescrita", d: "Cada aluno reescreve o texto." },
      { min: "5", t: "Fechamento", d: "Cada um anota o erro que mais cometeu." }
    ]),
    H.t("Texto com erros", "Ontem assisti o jogo da escola e fiquei animado. Eu prefiro mais futebol do que vôlei. Voltei a casa de meus avós a noite e obedeci o horário combinado. Segue anexo as fotos do jogo. Fazem dois anos que a quadra foi reformada, e todos aspiram uma vitória.", "Texto original, com erros propositais"),
    H.qs([dis("Reescreva o texto corrigido.", "Ontem assisti ao jogo da escola e fiquei animado. Eu prefiro futebol a vôlei. Voltei à casa de meus avós à noite e obedeci ao horário combinado. Seguem anexas as fotos do jogo. Faz dois anos que a quadra foi reformada, e todos aspiram a uma vitória.", 6)]),
    H.pf("Os erros", ["assisti o → assisti ao; prefiro mais… do que → prefiro… a; voltei a casa → à casa; a noite → à noite; obedeci o → obedeci ao; segue anexo as fotos → seguem anexas; fazem → faz; aspiram uma → aspiram a uma."])
  ], ["Gramática", "Redação"]);

  E("debate-uniforme", "Aula de 50 minutos: debate sobre o uniforme escolar", "Debate regrado com tese, argumentos, contra-argumentos e escrita final.", [
    H.i("**Antes da aula:** divida a turma em dois lados; organize duas filas frente a frente."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Apresente o tema: “O uniforme escolar deve ser obrigatório?”. Sorteie os lados." },
      { min: "10", t: "Preparação", d: "Cada lado anota tese, dois argumentos e um contra-argumento." },
      { min: "20", t: "Debate", d: "Duas rodadas. 1 minuto por fala; sem interrupções. Peça concessão: “É verdade que…”." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um parágrafo com a sua opinião final." },
      { min: "5", t: "Fechamento", d: "Votação simbólica e síntese dos melhores argumentos." }
    ]),
    H.tab("Ficha", ["Lado", "Tese", "Argumento 1", "Argumento 2", "Contra-argumento"], [["A favor", "", "", "", ""], ["Contra", "", "", "", ""]]),
    H.ln("Meu parágrafo final", 8),
    H.pf("Regras", ["Critique ideias, não pessoas. Dê um sinal a cada 30 segundos."])
  ], ["Redação", "Interpretação"]);

  E("juri-apologo", "Aula de 50 minutos: o júri da linha e da agulha", "Júri simulado a partir do apólogo: quem merece o aplauso?", [
    H.i("**Antes da aula:** imprima o resumo; divida a turma em defesa da agulha, defesa da linha e júri."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Quem merece o aplauso: quem abre o caminho ou quem une?”" },
      { min: "10", t: "Leitura", d: "Leia o resumo do apólogo em voz alta." },
      { min: "10", t: "Preparação", d: "Cada grupo anota argumentos com passagens do texto." },
      { min: "20", t: "Julgamento", d: "Defesas falam; o júri faz perguntas e decide." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com a lição que tirou." }
    ]),
    H.t("Resumo do apólogo", "Uma agulha e uma linha costuravam o vestido de uma baronesa. A agulha dizia que abria o caminho; a linha, que unia o tecido. No baile, o vestido foi admirado, e a linha foi com ele; a agulha foi guardada na caixa de costura.", "Reconto adaptado de “Um apólogo”, de Machado de Assis (1885)"),
    H.tab("Ficha de argumentos", ["Grupo", "Argumento 1", "Argumento 2"], [["Defesa da agulha", "", ""], ["Defesa da linha", "", ""], ["Júri (perguntas)", "", ""]]),
    H.pf("Dica", ["Aproveite para trabalhar personificação e a crítica social na narrativa."])
  ], ["Interpretação", "Literatura"]);

  E("reportagem-relampago", "Aula de 50 minutos: reportagem relâmpago", "Pesquisa rápida em fontes disponíveis e redação de um texto jornalístico curto.", [
    H.i("**Antes da aula:** se possível, leve revistas ou jornais; se não, use a internet com orientação. Cada dupla recebe um tema."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise a estrutura: título, linha fina, introdução, desenvolvimento e fechamento." },
      { min: "15", t: "Pesquisa", d: "As duplas buscam dois dados ou fatos confiáveis sobre o tema." },
      { min: "20", t: "Escrita", d: "Redação da reportagem (10 a 12 linhas)." },
      { min: "10", t: "Leitura e troca", d: "Duas duplas leem; a turma identifica as fontes." }
    ]),
    H.te("Temas", ["Lixo eletrônico · Tempo de tela · Energia solar · Reciclagem na escola · Sono dos adolescentes"]),
    H.tab("Plano", ["Item", "Escreva aqui"], [["Tema", ""], ["Fonte 1", ""], ["Fonte 2", ""], ["Dado principal", ""]]),
    H.ln("Minha reportagem", 12)
  ], ["Redação"]);

  E("quiz-8ano", "Aula de 50 minutos: quiz relâmpago do 8º ano", "Quinze questões rápidas, em duplas, com correção coletiva.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada dupla marca uma letra por questão." },
      { min: "20", t: "Quiz", d: "As duplas resolvem as 15 questões." },
      { min: "20", t: "Correção", d: "Corrija no quadro e peça explicações." },
      { min: "5", t: "Fechamento", d: "Cada dupla anota a questão mais difícil." }
    ]),
    H.qs([
      ob("“Choveu muito.” O sujeito é:", "simples|composto|oculto|inexistente", "D"),
      ob("“Fomos ao cinema.” O sujeito é:", "simples|composto|oculto|inexistente", "C"),
      ob("“Roubaram a bolsa.” O sujeito é:", "simples|indeterminado|oculto|inexistente", "B"),
      ob("O predicado de “O dia estava lindo” é:", "verbal|nominal|verbo-nominal|inexistente", "B"),
      ob("Em “Li o livro”, //o livro// é:", "sujeito|objeto indireto|objeto direto|predicativo", "C"),
      ob("Em “Gosto de música”, //de música// é:", "objeto direto|objeto indireto|adjunto adnominal|sujeito", "B"),
      ob("“Estudei muito, mas não passei.” A oração //mas não passei// é:", "aditiva|adversativa|alternativa|conclusiva", "B"),
      ob("“Penso, logo existo.” A oração //logo existo// é:", "adversativa|explicativa|conclusiva|aditiva", "C"),
      ob("Em “Espero que você venha”, a oração //que você venha// é:", "substantiva objetiva direta|adjetiva|adverbial|coordenada", "A"),
      ob("“Os alunos, que estudaram, passaram.” A oração //que estudaram// é:", "restritiva|explicativa|substantiva|adverbial", "B"),
      ob("“Assisti ___ filme.”", "o|ao|no|do", "B"),
      ob("“Fui ___ escola.”", "a|à|há|as", "B"),
      ob("“Prefiro café ___ chá.”", "que|do que|a|ao que", "C"),
      ob("“O silêncio gritava” é:", "paradoxo|ironia|hipérbole|metonímia", "A"),
      ob("“Aipim”, “macaxeira” e “mandioca” são exemplos de variação:", "social|regional|histórica|situacional", "B")
    ]),
    H.pf("Gabarito", ["D, C, B, B, C, B, B, C, A, B, B, B, C, A, B."])
  ]);

  E("roda-meus-oito-anos", "Aula de 50 minutos: roda de leitura de “Meus oito anos”", "Leitura expressiva, análise de imagens e escrita de uma estrofe sobre a infância.", [
    H.i("**Antes da aula:** imprima o poema, uma cópia por aluno."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “O que vocês mais lembram da infância?”" },
      { min: "10", t: "Leitura", d: "Leia o poema em voz alta duas vezes; depois leitura em coro." },
      { min: "15", t: "Questões em duplas", d: "As duplas respondem às questões." },
      { min: "15", t: "Criação", d: "Cada aluno escreve uma estrofe de quatro versos sobre sua infância." },
      { min: "5", t: "Fechamento", d: "Voluntários leem suas estrofes." }
    ]),
    H.poema("Meus oito anos", "Oh! que saudades que eu tenho\nDa aurora da minha vida,\nDa minha infância querida\nQue os anos não trazem mais!\n\nQue amor, que sonhos, que flores,\nNaquelas tardes fagueiras\nÀ sombra das bananeiras,\nDebaixo dos laranjais!", "Casimiro de Abreu (1839–1860), trecho"),
    H.qs([
      ob("“Aurora da minha vida” é uma metáfora para:", "a infância|a velhice|o dia|a escola", "A"),
      ob("Que palavras rimam na 2ª estrofe?", "flores e fagueiras|fagueiras e bananeiras|sonhos e laranjais|amor e flores", "B"),
      dis("Que sentimentos o poema expressa?", "Saudade da infância e idealização desse tempo.", 3),
      dis("Escreva uma estrofe de quatro versos sobre sua infância.", "Resposta pessoal. Verifique rimas ou ritmo e coerência.", 5)
    ])
  ], ["Interpretação", "Literatura"]);

  E("tradutores-giria", "Aula de 50 minutos: tradutores de gíria", "Atividade de variação linguística: traduzir falas entre registros informal e formal.", [
    H.i("**Antes da aula:** imprima a ficha, uma por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Vocês falam do mesmo jeito com os amigos e com a diretora?”" },
      { min: "15", t: "Tradução", d: "As duplas traduzem as frases informais para a linguagem formal e vice-versa." },
      { min: "15", t: "Discussão", d: "Cada dupla explica a escolha. Discuta adequação e preconceito linguístico." },
      { min: "10", t: "Criação", d: "Cada dupla cria uma situação em que o registro formal é necessário." },
      { min: "5", t: "Fechamento", d: "Registro individual: “Hoje aprendi que…”" }
    ]),
    H.tab("Ficha", ["Informal", "Formal"], [["E aí, tá ligado que a prova foi suave?", ""], ["Cara, não rola de eu ir hoje, tô sem tempo.", ""], ["", "Prezado professor, gostaria de saber o horário da recuperação."], ["", "Poderia me emprestar o caderno, por favor?"]]),
    H.pf("Respostas possíveis", ["1. Você percebeu que a prova foi fácil? 2. Não poderei ir hoje, pois estou sem tempo. 3. Professor, qual é o horário da recuperação? 4. Me empresta o caderno?"])
  ], ["Gramática", "Interpretação"]);

  E("parodia-relampago", "Aula de 50 minutos: paródia relâmpago", "Os alunos criam uma paródia de um texto curto e apresentam à turma.", [
    H.i("**Antes da aula:** escreva o texto-base no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique: paródia mantém a forma e muda o sentido, com humor ou crítica." },
      { min: "20", t: "Criação", d: "Em duplas, os alunos criam a paródia." },
      { min: "15", t: "Apresentação", d: "Cada dupla lê (ou canta) a sua paródia." },
      { min: "10", t: "Conversa", d: "O que a paródia critica ou satiriza? O que mudou em relação ao original?" }
    ]),
    H.poema("Texto-base · Canção do exílio", "Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.", "Gonçalves Dias, trecho"),
    H.ln("Nossa paródia", 8),
    H.pf("Exemplo", ["“Minha escola tem recreio, / onde toca o sinal; / os alunos, que aqui brincam, / brincam como no quintal.”"])
  ], ["Redação", "Literatura"]);

  E("revisao-pares", "Aula de 50 minutos: revisão de texto em pares", "Cada aluno revisa o texto de um colega com checklist de coesão, pontuação e regência.", [
    H.i("**Antes da aula:** peça que os alunos tragam um texto produzido por eles."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Combine: revisar é ajudar. Comece pelo que funcionou." },
      { min: "10", t: "Leitura do colega", d: "Cada aluno lê o texto do colega, sem marcar." },
      { min: "15", t: "Checklist", d: "Preenchimento do checklist, com marcas a lápis." },
      { min: "15", t: "Conversa e reescrita", d: "Devolvem os textos, explicam os comentários e cada autor reescreve." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota o que aprendeu ao revisar." }
    ]),
    H.tab("Checklist", ["Item", "✓", "Comentário"], [["Tese ou ideia central clara", "", ""], ["Parágrafos organizados", "", ""], ["Conectivos adequados", "", ""], ["Pontuação (vírgula, ponto)", "", ""], ["Concordância e regência", "", ""], ["Ortografia conferida", "", ""]]),
    H.pf("Dica", ["Incentive comentários concretos (“na linha 3, falta vírgula antes do //mas//”)."])
  ], ["Redação"]);

  E("cadeia-argumentos", "Aula de 50 minutos: cadeia de argumentos", "Dinâmica oral em roda: cada aluno acrescenta um argumento ou contra-argumento.", [
    H.i("**Antes da aula:** organize a turma em roda."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Apresente o tema (sorteie ou escolha): lição de casa, voto aos 16 anos, tela na escola." },
      { min: "25", t: "Cadeia", d: "Cada aluno diz uma frase que acrescenta um argumento ou responde ao anterior, começando por “Concordo, porque…” ou “É verdade que… mas…”." },
      { min: "15", t: "Registro", d: "Individualmente, escrevem um parágrafo com a tese e dois argumentos que ouviram." },
      { min: "5", t: "Fechamento", d: "Votação simbólica e comentário final." }
    ]),
    H.te("Temas", ["A lição de casa deveria acabar?", "O voto deveria ser facultativo aos 16 anos?", "O celular deve ficar fora da sala?", "O recreio deve ser mais longo?"]),
    H.ln("Meu parágrafo", 8),
    H.pf("Dica", ["Anote no quadro os conectivos usados: porém, além disso, portanto, por exemplo."])
  ], ["Redação", "Interpretação"]);
})();
