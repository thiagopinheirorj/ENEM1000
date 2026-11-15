/* 6º ano · Slides (10), mapas mentais (8) e aulas de emergência (12). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, ob = H.ob, dis = H.dis;

  /* ---------------- SLIDES ---------------- */
  H.sl6("sl-substantivo", "Slides · Substantivo", "7 slides: o que é, comum e próprio, concreto e abstrato, coletivo, gênero e número.", [
    { capa: true, t: "Substantivo", sub: "A palavra que dá nome às coisas" },
    { t: "O que é substantivo?", li: ["Nomeia pessoas, animais, lugares, objetos, sentimentos e ideias", "Exemplos: menina, cachorro, escola, mesa, alegria", "Costuma vir acompanhado de artigo: //o// menino, //a// escola"], nota: "Pergunte: que palavras vocês veem na sala? Vá anotando no quadro; todas são substantivos." },
    { t: "Comum × Próprio", li: ["**Comum**: nome geral (cidade, rio, menino)", "**Próprio**: nome específico, com inicial maiúscula (Salvador, Rio Amazonas, Pedro)"], ex: "O menino visitou a cidade. → Pedro visitou Salvador." },
    { t: "Concreto × Abstrato", li: ["**Concreto**: existe por si (mesa, vento, fada)", "**Abstrato**: depende de outro ser (alegria, coragem, saudade)"], nota: "Truque: se não dá para “apontar” e a palavra descreve um sentimento ou qualidade, costuma ser abstrato." },
    { t: "Substantivo coletivo", li: ["Indica um conjunto: cardume (peixes), enxame (abelhas), matilha (cães), alcateia (lobos), rebanho (ovelhas)", "Vale também para pessoas e objetos: elenco, orquestra, biblioteca"] },
    { t: "Gênero e número", li: ["Gênero: o menino / a menina", "Número: casa → casas; animal → animais; limão → limões", "O artigo e o adjetivo concordam com o substantivo"] },
    { t: "Vamos praticar", li: ["1. Dê o coletivo de: cães, abelhas, peixes", "2. Passe para o plural: papel, mão, lápis", "3. Escreva três substantivos abstratos"], nota: "Respostas: 1) matilha, enxame, cardume; 2) papéis, mãos, lápis; 3) pessoal." }
  ]);

  H.sl6("sl-adjetivo", "Slides · Adjetivo", "6 slides: função, concordância, locução adjetiva e grau.", [
    { capa: true, t: "Adjetivo", sub: "A palavra que dá qualidade ao substantivo" },
    { t: "O que é adjetivo?", li: ["Caracteriza o substantivo: dá qualidade, estado ou aspecto", "Exemplos: casa **grande**, menino **alegre**, tarde **fria**"], ex: "Que adjetivos descrevem o seu professor?" },
    { t: "Concordância", li: ["O adjetivo concorda em gênero e número com o substantivo", "menino esperto → meninas espertas", "dia lindo → noites lindas"] },
    { t: "Locução adjetiva", li: ["Expressão que funciona como adjetivo", "de criança → infantil", "de mãe → materno", "da chuva → pluvial"] },
    { t: "Grau do adjetivo", li: ["Comparativo: mais alto **que**, tão alto **quanto**, menos alto **que**", "Superlativo: altíssimo, muito alto, o mais alto da turma", "Especiais: bom → melhor; mau → pior; grande → maior"] },
    { t: "Vamos praticar", li: ["Complete: “Esta sopa está ___ (bom) que a de ontem.”", "Escreva o superlativo de //feliz// e de //fácil//", "Descreva o pátio da escola com três adjetivos"], nota: "Respostas: melhor; felicíssimo, facílimo; pessoal." }
  ]);

  H.sl6("sl-verbo", "Slides · Verbo", "7 slides: ação, estado, conjugações, pessoa, número e tempos.", [
    { capa: true, t: "Verbo", sub: "Ação, estado e fenômeno" },
    { t: "O que é verbo?", li: ["Indica **ação** (correr), **estado** (ficar) ou **fenômeno da natureza** (chover)", "É a palavra que varia mais na língua portuguesa"] },
    { t: "Três conjugações", li: ["1ª: terminados em **-ar** (cantar)", "2ª: terminados em **-er** (vender) e //pôr//", "3ª: terminados em **-ir** (partir)"] },
    { t: "Pessoa e número", li: ["1ª pessoa: eu / nós", "2ª pessoa: tu / vós", "3ª pessoa: ele, ela / eles, elas", "O verbo concorda com o sujeito"], ex: "Eu canto · Nós cantamos · Eles cantam" },
    { t: "Tempos: passado, presente, futuro", li: ["Presente: canto", "Pretérito perfeito: cantei · imperfeito: cantava", "Futuro: cantarei"] },
    { t: "Atenção aos irregulares", li: ["ser: sou, fui", "ir: vou, fui", "ter: tenho, tive", "fazer: faço, fiz (e não “fazi”!)"] },
    { t: "Vamos praticar", li: ["Passe para o passado: “Eu acordo, tomo café e saio.”", "Conjugue //jogar// no futuro: eu, tu, ele", "Qual é o infinitivo de //fizemos//?"], nota: "Respostas: Eu acordei, tomei café e saí; jogarei, jogarás, jogará; fazer." }
  ]);

  H.sl6("sl-pronome", "Slides · Pronomes pessoais", "6 slides: retos, oblíquos, pronomes possessivos e demonstrativos.", [
    { capa: true, t: "Pronomes", sub: "Pessoais, possessivos e demonstrativos" },
    { t: "Pronomes pessoais retos", li: ["eu, tu, ele/ela, nós, vós, eles/elas", "Costumam ser o **sujeito** da frase"], ex: "Ela chegou cedo. · Nós estudamos juntos." },
    { t: "Pronomes oblíquos", li: ["me, te, se, o, a, lhe, nos, vos, os, as, lhes", "Costumam ser **complemento**"], ex: "Eu te amo. · Carlos comprou um bolo e deu-o à mãe." },
    { t: "Pronomes possessivos", li: ["meu, teu, seu, nosso, vosso", "Indicam posse e concordam com a coisa possuída"], ex: "Minha mochila é azul. · Nossos livros chegaram." },
    { t: "Pronomes demonstrativos", li: ["**Este, esta, isto**: perto de quem fala", "**Esse, essa, isso**: perto de quem ouve", "**Aquele, aquela, aquilo**: longe de ambos"] },
    { t: "Vamos praticar", li: ["Substitua o sujeito: “Ana e Bia saíram.”", "Complete: “___ (perto de mim) caderno é meu.”", "Escreva uma frase com //nosso//"], nota: "Respostas: Elas saíram; este; pessoal." }
  ]);

  H.sl6("sl-acentuacao", "Slides · Acentuação gráfica", "7 slides: sílaba tônica, oxítona, paroxítona, proparoxítona e regras básicas.", [
    { capa: true, t: "Acentuação", sub: "Quando a palavra pede acento" },
    { t: "Sílaba tônica", li: ["É a sílaba pronunciada com mais força", "ca-**der**-no · sa-bi-**á** · **lâm**-pa-da"] },
    { t: "Classificação", li: ["**Oxítona**: tônica na última sílaba (café, jacaré)", "**Paroxítona**: penúltima (caderno, sapato)", "**Proparoxítona**: antepenúltima (música, lâmpada)"] },
    { t: "Regra 1: proparoxítonas", li: ["**Todas** são acentuadas", "música, pássaro, árvore, lâmpada, médico"], ex: "Não existe proparoxítona sem acento." },
    { t: "Regra 2: oxítonas", li: ["Terminadas em **a, e, o, em** (com ou sem s)", "sofá, café, vovô, também, parabéns"] },
    { t: "Regra 3: paroxítonas e monossílabos", li: ["Paroxítonas terminadas em **l, r, x, i(s), ão(s)**: fácil, açúcar, tórax, táxi, órfão", "Monossílabos tônicos em **a, e, o**: já, pé, nó"] },
    { t: "Vamos praticar", li: ["Acentue: arvore, cafe, facil, voce, lampada", "Classifique: jabuti, caderno, musica"], nota: "Respostas: árvore, café, fácil, você, lâmpada; oxítona, paroxítona, proparoxítona." }
  ]);

  H.sl6("sl-narrativa", "Slides · Elementos da narrativa", "7 slides: personagem, tempo, espaço, enredo, narrador.", [
    { capa: true, t: "Elementos da narrativa", sub: "Como se constrói uma história", nota: "Use uma história que a turma conheça para identificar cada elemento." },
    { t: "Personagens", li: ["Quem vive a história", "**Principal** (protagonista) e **secundários**", "Podem ser pessoas, animais ou seres imaginários"] },
    { t: "Tempo e espaço", li: ["**Tempo**: quando acontece (ontem, no verão, à noite)", "**Espaço**: onde acontece (na escola, na floresta, no sertão)"] },
    { t: "Enredo", li: ["**Situação inicial**: apresenta personagens e lugar", "**Conflito**: o problema", "**Clímax**: o momento de maior tensão", "**Desfecho**: como termina"] },
    { t: "Narrador", li: ["**1ª pessoa**: participa da história (“Eu cheguei cedo…”)", "**3ª pessoa**: apenas conta (“Ele chegou cedo…”)"] },
    { t: "Exemplo: A cigarra e a formiga", li: ["Personagens: cigarra e formiga", "Tempo: verão e inverno", "Conflito: a cigarra não guardou comida", "Desfecho: pede ajuda e ouve “agora dance”"] },
    { t: "Vamos criar", li: ["Em duplas, criem: um personagem, um lugar e um conflito", "Contem a história em 5 frases"], nota: "Peça que algumas duplas leiam suas histórias." }
  ], ["Interpretação", "Redação"]);

  H.sl6("sl-generos-narrativos", "Slides · Fábula, lenda e conto", "6 slides: características, exemplos e comparação entre três gêneros narrativos.", [
    { capa: true, t: "Fábula, lenda e conto", sub: "Três jeitos de contar histórias" },
    { t: "Fábula", li: ["Personagens são animais que agem como pessoas", "Termina com uma **moral**", "Exemplo: A cigarra e a formiga"] },
    { t: "Lenda", li: ["Explica a origem de algo (um lugar, uma planta, um fenômeno)", "Mistura realidade e fantasia", "Exemplo: a lenda da vitória-régia"] },
    { t: "Conto", li: ["Narrativa curta, com poucos personagens", "Um conflito central e desfecho", "Autor conhecido ou anônimo"] },
    { t: "Compare", li: ["Fábula: ensina uma lição", "Lenda: explica a origem de algo", "Conto: entretém e emociona"] },
    { t: "Atividade", li: ["Classifique: “O leão e o ratinho” · “A lenda do Boto” · “O segredo da mochila”", "Invente uma moral para uma fábula sobre um gato preguiçoso"], nota: "Respostas: fábula; lenda; conto." }
  ], ["Literatura", "Interpretação"]);

  H.sl6("sl-pontuacao", "Slides · Pontuação", "7 slides: ponto, interrogação, exclamação, vírgula, dois-pontos, travessão e reticências.", [
    { capa: true, t: "Pontuação", sub: "Os sinais que organizam o texto" },
    { t: "Ponto, interrogação e exclamação", li: ["**.** encerra frases afirmativas", "**?** encerra perguntas", "**!** expressa emoção, ordem ou surpresa"], ex: "Choveu. · Choveu? · Choveu!" },
    { t: "Vírgula", li: ["Separa itens de uma lista: maçã, pera e uva", "Isola o vocativo: Pedro, venha aqui", "Vem antes de //mas//: Estudei, mas não entendi"], nota: "Reforce: a vírgula **não** separa sujeito e verbo." },
    { t: "Dois-pontos", li: ["Anunciam uma lista ou uma fala", "Comprei três coisas: pão, leite e queijo."] },
    { t: "Travessão", li: ["Marca a fala dos personagens nos diálogos", "— Você veio? — perguntou Ana."] },
    { t: "Reticências", li: ["Indicam suspense, dúvida ou frase interrompida", "Ele abriu a porta e…"] },
    { t: "Vamos praticar", li: ["Pontue: “você quer sorvete de chocolate morango ou limão”", "Escreva um diálogo de duas falas com travessão"], nota: "Resposta: Você quer sorvete de chocolate, morango ou limão?" }
  ]);

  H.sl6("sl-ortografia", "Slides · Ortografia: s, z, ss e ç", "6 slides com regras, exemplos e exercício rápido.", [
    { capa: true, t: "Ortografia", sub: "S, Z, SS e Ç" },
    { t: "O S entre vogais", li: ["Soa como **z**: casa, mesa, rosa", "Com som de **s**, usa-se **ss**: passo, massa, osso"] },
    { t: "O Ç", li: ["Só antes de **a, o, u**: maçã, coração, açúcar", "Nunca começa palavra"] },
    { t: "Terminações", li: ["**-oso**: gostoso, perigoso", "**-esa**: portuguesa, princesa", "**-ez** (de adjetivos): rapidez, timidez"] },
    { t: "Cuidado!", li: ["passear (e não pasear)", "exceção (e não excessão)", "excesso (com ss)"] },
    { t: "Vamos praticar", li: ["Complete: mi__ão, pre__o, ro__a, pa__eio", "Forme adjetivos: gosto, perigo, medo"], nota: "Respostas: missão, preço, rosa, passeio; gostoso, perigoso, medroso." }
  ]);

  H.sl6("sl-frase-oracao", "Slides · Frase, oração e período", "6 slides: diferenças e tipos de frase.", [
    { capa: true, t: "Frase, oração e período", sub: "Organizando as ideias" },
    { t: "Frase", li: ["Enunciado com sentido completo", "Pode ter ou não ter verbo", "Que susto! · Bom dia. · Chove."] },
    { t: "Oração", li: ["Frase (ou parte dela) com **verbo**", "Chove muito. · Ele disse que viria."] },
    { t: "Período", li: ["**Simples**: uma oração (“Choveu.”)", "**Composto**: duas ou mais (“Chegamos e jantamos.”)"] },
    { t: "Tipos de frase", li: ["**Declarativa**: afirma ou nega", "**Interrogativa**: pergunta", "**Exclamativa**: expressa emoção", "**Imperativa**: ordem ou pedido"] },
    { t: "Atividade", li: ["Classifique: “Que calor!” · “Abra a janela.” · “Você tem sede?” · “Hoje está quente.”"], nota: "Respostas: exclamativa; imperativa; interrogativa; declarativa." }
  ]);

  /* ---------------- MAPAS MENTAIS ---------------- */
  H.mp6("mp-substantivo", "Mapa mental · Substantivo", "Tipos de substantivo, gênero, número e grau.", {
    centro: "Substantivo", ramos: [
      { t: "Comum", itens: ["Nome geral", "cidade, menino, rio"] },
      { t: "Próprio", itens: ["Nome específico, com maiúscula", "Salvador, Pedro, Rio Amazonas"] },
      { t: "Concreto", itens: ["Existe por si", "mesa, vento, fada"] },
      { t: "Abstrato", itens: ["Depende de outro ser", "coragem, saudade, beleza"] },
      { t: "Coletivo", itens: ["Conjunto de seres", "matilha, cardume, enxame"] },
      { t: "Gênero e número", itens: ["masculino / feminino", "singular / plural", "o menino, as meninas"] },
      { t: "Grau", itens: ["aumentativo: casarão", "diminutivo: casinha"] }
    ]
  });

  H.mp6("mp-verbo", "Mapa mental · Verbo", "Conjugações, pessoa, número e tempos.", {
    centro: "Verbo", ramos: [
      { t: "Ideia", itens: ["Ação: correr", "Estado: ficar", "Fenômeno: chover"] },
      { t: "Conjugações", itens: ["1ª: -ar (cantar)", "2ª: -er (vender)", "3ª: -ir (partir)"] },
      { t: "Pessoa", itens: ["1ª: eu, nós", "2ª: tu, vós", "3ª: ele(s), ela(s)"] },
      { t: "Número", itens: ["singular: eu canto", "plural: nós cantamos"] },
      { t: "Tempos", itens: ["presente: canto", "passado: cantei, cantava", "futuro: cantarei"] },
      { t: "Irregulares", itens: ["ser: sou, fui", "ir: vou, fui", "ter: tenho, tive", "fazer: faço, fiz"] }
    ]
  });

  H.mp6("mp-narrativa", "Mapa mental · Elementos da narrativa", "Personagens, tempo, espaço, enredo e narrador.", {
    centro: "Narrativa", ramos: [
      { t: "Personagens", itens: ["Principal e secundários", "Pessoas, animais, seres imaginários"] },
      { t: "Tempo", itens: ["Quando acontece", "ontem, à noite, no verão"] },
      { t: "Espaço", itens: ["Onde acontece", "escola, floresta, sertão"] },
      { t: "Enredo", itens: ["Situação inicial", "Conflito", "Clímax", "Desfecho"] },
      { t: "Narrador", itens: ["1ª pessoa: participa", "3ª pessoa: observa"] },
      { t: "Gêneros", itens: ["Fábula (com moral)", "Lenda (origem de algo)", "Conto, crônica"] }
    ]
  }, ["Interpretação", "Literatura"]);

  H.mp6("mp-generos", "Mapa mental · Gêneros textuais do 6º ano", "Finalidade e características de seis gêneros do cotidiano.", {
    centro: "Gêneros textuais", ramos: [
      { t: "Notícia", itens: ["Informa um fato recente", "Lide: quem, o quê, quando, onde, por quê"] },
      { t: "Receita", itens: ["Instrui", "Ingredientes e modo de preparo", "Verbos no imperativo"] },
      { t: "Carta", itens: ["Comunica", "Local, data, saudação, despedida"] },
      { t: "Bilhete e convite", itens: ["Recado curto", "Convite: quem, quando, onde"] },
      { t: "Fábula e lenda", itens: ["Narram", "Fábula tem moral", "Lenda explica origens"] },
      { t: "Poema", itens: ["Versos e estrofes", "Rimas, ritmo e emoção"] }
    ]
  }, ["Interpretação", "Redação"]);

  H.mp6("mp-acentuacao", "Mapa mental · Acentuação", "Tônica, classificação e regras básicas de acento.", {
    centro: "Acentuação", ramos: [
      { t: "Oxítona", itens: ["Tônica na última", "Acento se termina em a, e, o, em", "sofá, café, vovô, também"] },
      { t: "Paroxítona", itens: ["Tônica na penúltima", "Acento em l, r, x, i(s), ão(s)", "fácil, açúcar, táxi, órfão"] },
      { t: "Proparoxítona", itens: ["Tônica na antepenúltima", "**Todas** têm acento", "música, árvore, lâmpada"] },
      { t: "Monossílabos tônicos", itens: ["Em a, e, o", "já, pé, nó"] },
      { t: "Sem acento", itens: ["Paroxítonas comuns: casa, caderno", "Oxítonas em -i, -u: jabuti, urubu"] }
    ]
  });

  H.mp6("mp-pontuacao", "Mapa mental · Pontuação", "Ponto, vírgula, dois-pontos, travessão e outros sinais.", {
    centro: "Pontuação", ramos: [
      { t: "Ponto final ( . )", itens: ["Encerra frases afirmativas"] },
      { t: "Interrogação ( ? )", itens: ["Encerra perguntas"] },
      { t: "Exclamação ( ! )", itens: ["Emoção, ordem, surpresa"] },
      { t: "Vírgula ( , )", itens: ["Lista, vocativo, antes de //mas//", "Nunca entre sujeito e verbo"] },
      { t: "Dois-pontos ( : )", itens: ["Anunciam lista ou fala"] },
      { t: "Travessão ( — )", itens: ["Fala dos personagens"] },
      { t: "Reticências ( … )", itens: ["Suspense, dúvida, interrupção"] }
    ]
  });

  H.mp6("mp-pronomes", "Mapa mental · Pronomes", "Pessoais, possessivos e demonstrativos.", {
    centro: "Pronomes", ramos: [
      { t: "Pessoais retos", itens: ["eu, tu, ele/ela", "nós, vós, eles/elas", "Costumam ser sujeito"] },
      { t: "Pessoais oblíquos", itens: ["me, te, se, o, a, lhe", "nos, vos, os, as, lhes", "Costumam ser complemento"] },
      { t: "Possessivos", itens: ["meu, teu, seu", "nosso, vosso", "Indicam posse"] },
      { t: "Demonstrativos", itens: ["este, esta, isto: perto de quem fala", "esse, essa, isso: perto de quem ouve", "aquele, aquela, aquilo: longe"] }
    ]
  });

  H.mp6("mp-encontros-digrafos", "Mapa mental · Encontros vocálicos e dígrafos", "Ditongo, tritongo, hiato e dígrafos.", {
    centro: "Sons e letras", ramos: [
      { t: "Ditongo", itens: ["Vogal + semivogal", "pai, boi, leite"] },
      { t: "Tritongo", itens: ["Três sons numa sílaba", "Uruguai, saguão"] },
      { t: "Hiato", itens: ["Vogais em sílabas diferentes", "sa-ú-de, pa-ís, po-e-ta"] },
      { t: "Dígrafo", itens: ["Duas letras, um som", "ch, lh, nh, rr, ss, qu, gu", "chuva, galho, ninho, carro"] },
      { t: "Separação silábica", itens: ["Dígrafos ch, lh, nh não se separam", "rr e ss se separam: car-ro, pas-so"] }
    ]
  });

  /* ---------------- AULAS DE EMERGÊNCIA ---------------- */
  function E(id, titulo, resumo, blocos, assunto) {
    H.m6("emergencia", "e-" + id, titulo, assunto || ["Gramática"], resumo, blocos, "50 min");
  }
  var pl = H.pl;

  E("stop-classes", "Aula de 50 minutos: Stop das classes de palavras", "Jogo de revisão do 6º ano: substantivo, adjetivo, verbo e advérbio por letra sorteada.", [
    H.i("**Antes da aula:** imprima a ficha, uma por grupo. Não precisa de mais nenhum material."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Explique o jogo, forme grupos de quatro e distribua a ficha." },
      { min: "30", t: "5 rodadas", d: "Sorteie uma letra a cada rodada. Cada grupo tem 3 minutos para preencher as colunas. Corrija no quadro, rodada a rodada." },
      { min: "10", t: "Contagem e discussão", d: "Some os pontos e discuta as palavras que geraram dúvida." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase usando as três palavras de que mais gostou." }
    ]),
    H.te("Regras", ["**10 pontos** por palavra que nenhum outro grupo escreveu; **5 pontos** por palavra repetida; **0** para palavra errada.", "O professor decide as dúvidas de classificação."]),
    H.tab("Ficha", ["Rodada · letra", "Substantivo", "Adjetivo", "Verbo", "Advérbio", "Pontos"], [["1 · ___", "", "", "", "", ""], ["2 · ___", "", "", "", "", ""], ["3 · ___", "", "", "", "", ""], ["4 · ___", "", "", "", "", ""], ["5 · ___", "", "", "", "", ""], [{ t: "Total" }, "", "", "", "", ""]]),
    H.pf("Dicas", ["Letras que costumam render: A, C, M, P, S. Evite K, W, Y, X.", "Variação: troque as colunas por //substantivo próprio, coletivo, palavra com ç//."])
  ]);

  E("bingo-classes", "Aula de 50 minutos: Bingo das classes de palavras", "O professor lê definições; os alunos marcam a palavra correspondente na cartela.", [
    H.i("**Antes da aula:** imprima uma cartela por aluno e tenha em mãos a lista de definições (abaixo, na versão do professor). Vale grãos de milho ou feijão para marcar."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno recebe uma cartela. Você lê uma definição; quem tem a palavra correspondente marca." },
      { min: "35", t: "Rodadas", d: "Leia as definições. Faça pausas para explicar as respostas. A cada rodada, premie quem completar uma linha e, depois, a cartela cheia." },
      { min: "10", t: "Fechamento", d: "Peça que cada aluno escreva uma frase com duas das palavras da cartela." }
    ]),
    H.tab("Cartela (cada aluno preenche com 9 palavras da lista no quadro)", ["", "", ""], [["", "", ""], ["", "", ""], ["", "", ""]]),
    H.te("Palavras para escrever no quadro", ["casa · beleza · rapidamente · correr · bonito · eu · ontem · cardume · alegria · leve · nós · escola · saltar · devagar · coragem"]),
    H.pf("Definições para ler", [
      "Nomeia um conjunto de peixes (cardume). Indica ação de se mover depressa (correr). Dá qualidade ao substantivo (bonito, leve). Substantivo abstrato (beleza, alegria, coragem). Substantivo concreto (casa, escola). Pronome da 1ª pessoa do singular (eu); do plural (nós). Advérbio de tempo (ontem). Advérbio de modo (rapidamente, devagar). Verbo que indica ação (correr, saltar)."
    ])
  ]);

  E("caca-erro", "Aula de 50 minutos: caça ao erro", "Revisão ortográfica e de pontuação: os alunos encontram e corrigem 10 erros propositais.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Quem já enviou mensagem com um erro e se arrependeu?”. Apresente a tarefa." },
      { min: "15", t: "Caça ao erro em duplas", d: "As duplas leem o texto e sublinham todos os erros." },
      { min: "15", t: "Correção coletiva", d: "Cada dupla apresenta uma correção e explica a regra." },
      { min: "10", t: "Reescrita", d: "Individualmente, os alunos reescrevem o texto corrigido." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota a regra que mais errou." }
    ]),
    H.t("Texto com 10 erros", "ontem eu fui na casa do meu amigo pedro. nós jogamos bola no campo e depois nos lanchamos pão com queijo. a minha mãe disse que eu devia ter voltado mais sedo, mas eu me diverti tanto que nem vi a hora passar. hoje eu estou cansado, porem feliz", "Texto original, com erros propositais"),
    H.qs([dis("Reescreva o texto corrigido.", "Ontem fui à casa do meu amigo Pedro. Nós jogamos bola no campo e depois lanchamos pão com queijo. A minha mãe disse que eu devia ter voltado mais cedo, mas me diverti tanto que nem vi a hora passar. Hoje estou cansado, porém feliz.", 6)]),
    H.pf("Os 10 erros", ["Maiúsculas: //Ontem//, //Pedro//, //Nós//, //A//, //Hoje//; //fui na// → //fui à//; //nos lanchamos// → //lanchamos//; //sedo// → //cedo//; //porem// → //porém//; falta do ponto final."])
  ], ["Gramática", "Redação"]);

  E("reconto-cadeia", "Aula de 50 minutos: reconto em cadeia", "Contação oral coletiva seguida de registro por escrito: sequência, conectivos e criatividade.", [
    H.i("**Antes da aula:** nenhum material. Se quiser, escreva no quadro as palavras //era uma vez, de repente, então, por isso, finalmente//."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique: a turma vai criar uma história coletiva, um aluno por vez, com uma frase cada." },
      { min: "20", t: "Reconto em cadeia", d: "Dê o início (veja abaixo). Cada aluno acrescenta uma frase. Use uma bola para marcar quem fala. Retome o fio da história a cada cinco frases." },
      { min: "20", t: "Registro por escrito", d: "Individualmente, cada aluno escreve a história com suas palavras, em até 10 linhas." },
      { min: "5", t: "Leitura", d: "Dois voluntários leem o que escreveram." }
    ]),
    H.te("Inícios possíveis", ["//Numa manhã de chuva, a porta da escola se abriu sozinha…//", "//Quando o sino tocou, Bia percebeu que seu caderno tinha um recado novo…//", "//O gato do pátio sumiu, e só restou um rastro de pegadas azuis…//"]),
    H.ln("Minha versão da história", 10),
    H.pf("Dica", ["Se a turma travar, proponha uma pergunta: “O que acontece a seguir?”. Anote no quadro as palavras de ligação que aparecerem."])
  ], ["Redação", "Interpretação"]);

  E("ditado-duplas", "Aula de 50 minutos: ditado em duplas", "Um aluno dita, o outro escreve; depois trocam os papéis e corrigem juntos.", [
    H.i("**Antes da aula:** imprima a lista de palavras. Cada dupla precisa de uma folha para a lista e uma folha em branco."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "A é o “ditador” e B é o “escritor”. Quem dita lê a palavra devagar, uma vez." },
      { min: "15", t: "Rodada 1", d: "A dita as palavras da coluna 1; B escreve." },
      { min: "15", t: "Rodada 2", d: "Troquem. B dita a coluna 2." },
      { min: "10", t: "Correção", d: "Cada dupla corrige as duas rodadas com a lista, anotando os erros." },
      { min: "5", t: "Fechamento", d: "Cada aluno reescreve três vezes uma palavra que errou." }
    ]),
    H.tab("Lista de palavras", ["Coluna 1", "Coluna 2"], [["viagem", "girafa"], ["caixa", "enxada"], ["chuva", "bolacha"], ["açúcar", "passarinho"], ["exercício", "cidade"], ["pêssego", "música"], ["biblioteca", "campo"], ["embrulho", "jovem"], ["cachorro", "página"], ["responsabilidade", "coração"]]),
    H.pf("Dica", ["Aceite só a grafia correta; acentos contam. Registre no quadro as palavras mais erradas da turma."])
  ]);

  E("forca-ortografica", "Aula de 50 minutos: forca ortográfica", "Jogo da forca com palavras de ortografia difícil do 6º ano, em equipes.", [
    H.i("**Antes da aula:** divida a turma em duas ou quatro equipes e desenhe a forca no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada equipe escolhe uma letra por vez. Quem acerta a palavra inteira ganha 10 pontos. Cada erro desenha uma parte da forca." },
      { min: "35", t: "Rodadas", d: "Use a lista abaixo. A cada palavra, peça que a turma explique a regra (por exemplo, por que //viagem// leva g)." },
      { min: "10", t: "Fechamento", d: "Cada aluno escreve três palavras do jogo em uma frase." }
    ]),
    H.te("Palavras sugeridas (professor)", ["viagem · girafa · enxada · exceção · atenção · passeio · pêssego · bagagem · jiboia · aventura · ferrugem · maçã · feijão · beijo · bolacha · chuveiro · quilo · cozinha · espuma · pássaro"]),
    H.pf("Dica", ["Escreva só os traços das letras e a classe da palavra como pista (substantivo, verbo, adjetivo)."])
  ]);

  E("tribunal-fabula", "Aula de 50 minutos: tribunal da fábula", "Debate guiado: a cigarra foi injustiçada? Os alunos defendem pontos de vista com argumentos.", [
    H.i("**Antes da aula:** imprima o texto (uma cópia por grupo)."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique o formato: um “julgamento” da formiga. Divida a turma em acusação, defesa e júri." },
      { min: "10", t: "Leitura", d: "Leia a fábula em voz alta e destaque as falas das duas personagens." },
      { min: "10", t: "Preparação", d: "Cada grupo anota pelo menos dois argumentos em ficha." },
      { min: "20", t: "Julgamento", d: "Acusação e defesa apresentam seus argumentos; o júri decide." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase dizendo se mudou de opinião." }
    ]),
    H.t("A cigarra e a formiga (resumo)", "Durante o verão, a cigarra cantou enquanto a formiga trabalhava e guardava comida. No inverno, a cigarra, faminta, pediu ajuda e a formiga respondeu: “Cantou no verão? Pois dance agora”.", "Reconto de fábula tradicional"),
    H.tab("Ficha de argumentos", ["Grupo", "Argumento 1", "Argumento 2"], [["Acusação", "", ""], ["Defesa", "", ""], ["Júri", "", ""]]),
    H.pf("Dica", ["Reforce a diferença entre //opinião// e //argumento//: todo argumento precisa de uma justificativa."])
  ], ["Interpretação", "Redação"]);

  E("relato-relampago", "Aula de 50 minutos: relato relâmpago", "Escrita livre guiada, com tempo curto, seguida de leitura em duplas e revisão.", [
    H.i("**Antes da aula:** apenas folhas ou o caderno."),
    pl("Roteiro", [
      { min: "5", t: "Aquecimento", d: "Peça três palavras soltas à turma e escreva no quadro." },
      { min: "15", t: "Escrita livre", d: "Cada aluno escreve, sem parar, um relato usando as três palavras. O professor mede o tempo." },
      { min: "10", t: "Leitura em duplas", d: "As duplas trocam os textos e marcam uma parte de que gostaram." },
      { min: "15", t: "Revisão", d: "Os alunos reescrevem o texto corrigindo ortografia, pontuação e repetições." },
      { min: "5", t: "Fechamento", d: "Dois voluntários leem suas versões." }
    ]),
    H.te("Temas para sortear", ["Um dia em que tudo deu errado…", "O objeto que encontrei na mochila…", "O melhor recreio da minha vida…", "Se eu pudesse ficar invisível por um dia…"]),
    H.ln("Meu relato", 12),
    H.tab("Revisão", ["Item", "✓"], [["Maiúsculas e ponto final", ""], ["Parágrafos", ""], ["Palavras repetidas trocadas", ""], ["Ortografia conferida", ""]])
  ], ["Redação"]);

  E("quiz-gramatica", "Aula de 50 minutos: quiz relâmpago de gramática", "Quinze perguntas rápidas de múltipla escolha, em duplas, com correção coletiva.", [
    H.i("**Antes da aula:** imprima uma folha por dupla. O professor corrige no quadro com o gabarito."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada dupla responde sozinha. Marcar uma letra por questão." },
      { min: "20", t: "Quiz", d: "As duplas resolvem as 15 questões." },
      { min: "20", t: "Correção", d: "Corrija no quadro, pedindo que alunos expliquem as respostas." },
      { min: "5", t: "Fechamento", d: "Cada dupla anota a questão mais difícil." }
    ]),
    H.qs([
      ob("Qual é o substantivo?", "bonito|casa|correr|muito", "B"),
      ob("Qual é o adjetivo?", "feliz|escola|cantar|ontem", "A"),
      ob("Qual é o verbo?", "janela|rápido|brincar|alegre", "C"),
      ob("O plural de //animal// é:", "animals|animaes|animais|animales", "C"),
      ob("O feminino de //professor// é:", "professora|professoresa|professor|professorina", "A"),
      ob("O coletivo de //lobos// é:", "alcateia|cardume|matilha|enxame", "A"),
      ob("Qual palavra é proparoxítona?", "sofá|música|bola|café", "B"),
      ob("Qual palavra tem ditongo?", "saúde|pai|poeta|rua", "B"),
      ob("O sinal que encerra pergunta é:", "ponto final|vírgula|interrogação|exclamação", "C"),
      ob("Qual é a grafia correta?", "viajem|viagen|viagem|viaje", "C"),
      ob("O antônimo de //alegre// é:", "triste|feliz|contente|sorridente", "A"),
      ob("O diminutivo de //casa// é:", "casarão|casinha|casebre|casona", "B"),
      ob("Qual palavra é uma preposição?", "com|casa|bonita|rápido", "A"),
      ob("O verbo //cantei// está no:", "presente|futuro|passado|infinitivo", "C"),
      ob("Qual palavra é advérbio?", "ontem|casa|livro|bonito", "A")
    ]),
    H.pf("Dica", ["Gabarito: B, A, C, C, A, A, B, B, C, C, A, B, A, C, A. Proponha que a dupla com mais acertos escolha o próximo jogo."])
  ]);

  E("poema-voz-alta", "Aula de 50 minutos: poema em voz alta", "Leitura expressiva de um poema, análise de versos e rimas e criação de uma estrofe.", [
    H.i("**Antes da aula:** imprima o poema, uma cópia por aluno."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Que sons a chuva faz?”. Anote no quadro." },
      { min: "10", t: "Leitura", d: "Leia o poema em voz alta duas vezes. Peça que a turma leia em coro." },
      { min: "15", t: "Questões", d: "Os alunos respondem em duplas às questões." },
      { min: "15", t: "Criação", d: "Cada aluno escreve uma quarta estrofe de quatro versos com rima." },
      { min: "5", t: "Leitura final", d: "Voluntários leem suas estrofes." }
    ]),
    H.poema("A chuva", "A chuva bate na janela\ncomo quem pede pra entrar;\nbatuca no telhado velho,\nfaz a poça dançar.\n\nNa rua, o guarda-chuva\nvira uma flor ao contrário;\no menino, de pé no chão,\nfaz da água um aniversário.\n\nE quando o sol aparece,\ntímido, atrás da nuvem,\no mundo fica lavado\ne a gente respira bem."),
    H.qs([
      ob("Em “A chuva bate na janela como quem pede pra entrar”, a chuva é comparada a:", "um animal|alguém batendo à porta|um carro|uma flor", "B", "Há comparação e personificação."),
      ob("O que o guarda-chuva parece, na 2ª estrofe?", "Um sapato|Uma flor ao contrário|Uma ponte|Um balão", "B"),
      ob("Que palavras rimam na 1ª estrofe?", "entrar e dançar|janela e velho|bate e poça|chuva e janela", "A"),
      dis("Que imagem do poema você mais gostou? Explique.", "Resposta pessoal.", 3),
      dis("Escreva uma quarta estrofe de quatro versos, com rima entre o 2º e o 4º.", "Resposta pessoal. Verifique quatro versos e rima entre o 2º e o 4º.", 5)
    ]),
    H.pf("Dica", ["Mostre que, nas três estrofes, rimam o 2º e o 4º verso (entrar/dançar; contrário/aniversário; nuvem/bem). Peça que os alunos usem o mesmo esquema na estrofe que vão criar."])
  ], ["Interpretação", "Literatura"]);

  E("troca-bilhetes", "Aula de 50 minutos: troca de bilhetes", "Os alunos escrevem bilhetes a colegas e respondem, praticando gênero, tom e ortografia.", [
    H.i("**Antes da aula:** folhas de rascunho ou o caderno."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise as características do bilhete: curto, destinatário, assinatura, data." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um bilhete a um colega sorteado: um elogio, um agradecimento ou um convite." },
      { min: "10", t: "Troca", d: "Os bilhetes são entregues. Cada um lê o seu." },
      { min: "15", t: "Resposta", d: "Cada aluno escreve uma resposta e devolve." },
      { min: "10", t: "Revisão", d: "Em duplas, revisem ortografia, pontuação e adequação ao destinatário." }
    ]),
    H.tab("Modelo", ["Parte", "Exemplo"], [["Destinatário", "Para a Bia,"], ["Recado", "Adorei seu desenho! Quer fazer um juntos amanhã?"], ["Assinatura e data", "Léo — 14/03"]]),
    H.ln("Meu bilhete e minha resposta", 10),
    H.pf("Dica", ["Garanta que todos recebam um bilhete. Se necessário, escreva alguns você mesmo."])
  ], ["Redação"]);

  E("mimica-verbos", "Aula de 50 minutos: mímica de verbos", "Jogo de mímica para trabalhar verbos de ação, seguido de conjugação por escrito.", [
    H.i("**Antes da aula:** recorte ou anote no quadro os verbos abaixo."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Dois grupos. Um aluno por vez faz a mímica sem falar; o grupo tem 1 minuto para adivinhar." },
      { min: "20", t: "Mímica", d: "Cada acerto vale 1 ponto, mais 1 se o grupo disser o infinitivo e conjugar no presente." },
      { min: "20", t: "Conjugação por escrito", d: "Cada aluno escolhe três verbos do jogo e conjuga no presente e no passado (eu, ele, nós)." },
      { min: "5", t: "Fechamento", d: "Conte os pontos e anote quais verbos foram mais difíceis." }
    ]),
    H.te("Verbos para a mímica", ["correr · pular · escrever · dormir · cozinhar · nadar · pintar · cantar · escovar os dentes · dirigir · abrir · jogar bola"]),
    H.tab("Conjugação", ["Verbo", "Eu (presente)", "Ele (passado)", "Nós (futuro)"], [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]),
    H.pf("Gabarito exemplo", ["correr: eu corro · ele correu · nós correremos; pular: eu pulo · ele pulou · nós pularemos; escrever: eu escrevo · ele escreveu · nós escreveremos."])
  ]);
})();
