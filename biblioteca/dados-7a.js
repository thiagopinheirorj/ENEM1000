/* 7º ano · Gramática (26 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("7"), ob = H.ob, dis = H.dis;

  function G(id, titulo, resumo, li, qs, extra) {
    var b = [H.te("Para lembrar", li)];
    if (extra) b.push(extra);
    b.push(H.qs(qs));
    Y.m("gramatica", "g-" + id, titulo, ["Gramática"], resumo, b);
  }

  var FRASE_REV = H.t("Frase de apoio", "Ontem, a menina esperta comprou dois livros e leu-os com prazer.");
  G("revisao-classes", "Revisão: as dez classes de palavras", "Reconhecer a classe de cada palavra em frases e identificar a função no texto.", [
    "**Variáveis**: substantivo, adjetivo, artigo, numeral, pronome e verbo. **Invariáveis**: advérbio, preposição, conjunção e interjeição.",
    "A classe de uma palavra depende da **função** que ela exerce na frase (//O jantar estava ótimo// × //Eu jantar com você//)."
  ], [
    ob("Na frase de apoio, //esperta// é:", "substantivo|adjetivo|advérbio|verbo", "B"),
    ob("Na frase de apoio, //dois// é:", "artigo|numeral|adjetivo|pronome", "B"),
    ob("A palavra //e// é:", "conjunção|preposição|advérbio|artigo", "A"),
    ob("A palavra //com// é:", "advérbio|conjunção|preposição|artigo", "C"),
    ob("A palavra //Ontem// é:", "substantivo|advérbio|adjetivo|interjeição", "B"),
    dis("Classifique //a// e //menina// em “a menina esperta”.", "a: artigo definido; menina: substantivo.", 2),
    dis("Escreva uma frase com a palavra //nós// e classifique-a.", "Resposta pessoal. “Nós” é pronome pessoal.", 2),
    dis("Identifique a classe da palavra //jantar// em: “O jantar estava ótimo.”", "Substantivo (vem precedida de artigo e é o núcleo do sujeito).", 2)
  ], FRASE_REV);

  G("substantivo-formacao", "Substantivos: primitivos, derivados, simples e compostos", "Classificar substantivos quanto à formação.", [
    "**Primitivo**: não vem de outra palavra (//pedra, ferro//). **Derivado**: vem de outra palavra (//pedreiro, ferreiro//).",
    "**Simples**: um só radical (//couve, chuva//). **Composto**: dois ou mais radicais (//couve-flor, guarda-chuva//)."
  ], [
    ob("Qual substantivo é primitivo?", "pedreiro|pedra|pedregulho|empedrado", "B"),
    ob("Qual substantivo é derivado?", "ferro|sol|ferreiro|mar", "C"),
    ob("Qual substantivo é composto?", "chuva|guarda-chuva|chuvarada|chuveiro", "B"),
    ob("Qual substantivo é simples?", "couve-flor|beija-flor|couve|pé de moleque", "C"),
    ob("A palavra //papelaria// é:", "primitiva e simples|derivada e simples|composta|primitiva e composta", "B"),
    dis("Classifique quanto à formação: sol, girassol, solzinho, mar.", "sol: primitivo e simples; girassol: composto; solzinho: derivado e simples; mar: primitivo e simples.", 3),
    dis("Escreva dois substantivos derivados de //livro//.", "livraria, livreiro, livrinho, livreto (outros são aceitos).", 2),
    dis("Escreva dois substantivos compostos.", "Exemplos: guarda-roupa, arco-íris, couve-flor, beija-flor.", 2)
  ]);

  G("derivacao", "Formação de palavras: derivação", "Prefixos, sufixos e derivação parassintética.", [
    "**Derivação prefixal**: acrescenta prefixo (//in-feliz, des-fazer, re-ler//). **Sufixal**: acrescenta sufixo (//feliz-mente, pedr-eiro, belez-a//).",
    "**Parassintética**: acrescenta prefixo e sufixo ao mesmo tempo, e a palavra não existe só com um deles (//en-tard-ecer, em-pobr-ecer//).",
    "Prefixos comuns: //in-, im-, des-, re-, anti-, super-, inter-//. Sufixos: //-eza, -dade, -ção, -oso, -mente, -inho//."
  ], [
    ob("A palavra //infeliz// é formada por derivação:", "prefixal|sufixal|parassintética|por composição", "A"),
    ob("A palavra //felizmente// é formada por derivação:", "prefixal|sufixal|parassintética|por composição", "B"),
    ob("A palavra //entardecer// é formada por derivação:", "prefixal|sufixal|parassintética|por composição", "C"),
    ob("Qual palavra tem o prefixo //re-//?", "refazer|real|rápido|rede", "A"),
    ob("Qual palavra é parassintética?", "refazer|empobrecer|pobreza|pobremente", "B"),
    dis("Forme palavras com o prefixo //des-//: fazer, leal, confiança.", "desfazer, desleal, desconfiança.", 2),
    dis("Forme substantivos com -eza: belo, grande, pobre.", "beleza, grandeza, pobreza.", 2),
    dis("Separe prefixo, radical e sufixo: infelizmente.", "in- (prefixo) + feliz (radical) + -mente (sufixo).", 2)
  ]);

  G("composicao", "Formação de palavras: composição", "Composição por justaposição e por aglutinação.", [
    "**Justaposição**: as palavras se unem sem alterar sua pronúncia (//guarda-chuva, girassol, passatempo, pontapé//).",
    "**Aglutinação**: as palavras se fundem e uma delas perde elementos (//planalto = plano + alto; aguardente = água + ardente; vinagre = vinho + acre//)."
  ], [
    ob("Qual palavra foi formada por justaposição?", "planalto|aguardente|girassol|vinagre", "C"),
    ob("Qual palavra foi formada por aglutinação?", "guarda-chuva|passatempo|planalto|pontapé", "C"),
    ob("A palavra //aguardente// é formada por:", "justaposição|aglutinação|prefixação|sufixação", "B"),
    ob("A palavra //passatempo// é formada por:", "aglutinação|justaposição|prefixação|sufixação", "B"),
    ob("A palavra //vinagre// vem de:", "vinho + acre|vento + agre|vim + agre|vinha + acre", "A"),
    dis("Classifique como justaposição ou aglutinação: pontapé, planalto, guarda-roupa, fidalgo.", "pontapé: justaposição; planalto: aglutinação; guarda-roupa: justaposição; fidalgo: aglutinação.", 3),
    dis("Escreva duas palavras compostas por justaposição.", "Exemplos: couve-flor, arco-íris, beija-flor, passatempo.", 2),
    dis("Explique a diferença entre justaposição e aglutinação.", "Na justaposição, os elementos mantêm a forma; na aglutinação, um deles perde sons ou letras.", 3)
  ]);

  G("radical-familia", "Radical e família de palavras", "Identificar o radical e agrupar palavras da mesma família.", [
    "**Radical** é o elemento que carrega o sentido básico da palavra (//pedr-//, em //pedra, pedreiro, pedregulho//).",
    "**Família de palavras** é o conjunto de palavras com o mesmo radical (//terra, terreno, terrestre, enterrar//)."
  ], [
    ob("Qual palavra é da família de //pedra//?", "pedreiro|pedir|perda|pente", "A"),
    ob("Qual palavra é da família de //mar//?", "marco|marítimo|mala|marfim", "B"),
    ob("Qual palavra NÃO é da família de //terra//?", "terreno|terrestre|enterrar|ferro", "D"),
    ob("O radical de //florzinha// é:", "flor|zinha|flo|florz", "A"),
    ob("A família de //feliz// inclui:", "felicidade|ferrugem|festa|fervor", "A"),
    dis("Escreva três palavras da família de //leite//.", "leiteiro, leiteria, leitoso, aleitar, leitada (outras são aceitas).", 2),
    dis("Separe o radical: infelizmente, terreno, folhagem.", "feliz; terr-; folh-.", 2),
    dis("Que palavra do grupo é “intrusa”: rua, ruela, ruim, rueiro?", "“Ruim”: não é da família de //rua//.", 2)
  ]);

  G("pronomes-uso", "Pronomes pessoais: eu/mim, comigo, conosco", "Usos corretos do pronome reto e do oblíquo tônico.", [
    "Usa-se **eu** como sujeito de verbo no infinitivo: //Este livro é para eu ler// (e não //para mim ler//).",
    "Depois de preposição, usa-se **mim**: //Entre mim e você; para mim//. Mas: //Entre eu e você// é incorreto.",
    "Formas especiais: //comigo, contigo, consigo, conosco, convosco//."
  ], [
    ob("“Este livro é para ___ ler.”", "mim|eu|me|comigo", "B"),
    ob("“Entre ___ e você, não há segredo.”", "eu|mim|me|comigo", "B"),
    ob("“Ela saiu ___ (com eu).”", "com mim|com eu|comigo|conmigo", "C"),
    ob("“Ele pediu para ___ esperar.”", "mim|eu|me|comigo", "B"),
    ob("“Isso é para ___.”", "eu|mim|me|comigo", "B"),
    dis("Corrija: “Trouxeram um presente para mim abrir.”", "Trouxeram um presente para eu abrir.", 2),
    dis("Complete: “Você vai ___ (com nós) ao cinema?”", "conosco.", 2),
    dis("Escreva uma frase com //entre mim e você//.", "Resposta pessoal.", 2)
  ]);

  G("pronomes-indefinidos", "Pronomes indefinidos e interrogativos", "Algum, ninguém, tudo, cada, qualquer… e quem, que, qual, quanto.", [
    "**Indefinidos**: referem-se a seres de forma vaga (//alguém, ninguém, tudo, nada, algum, nenhum, todo, cada, qualquer, vários//).",
    "**Interrogativos**: aparecem em perguntas (//Quem chegou? Qual é o seu nome? Quanto custa?//)."
  ], [
    ob("Qual é um pronome indefinido?", "ninguém|ele|meu|aquele", "A"),
    ob("Qual é um pronome interrogativo?", "algum|quem|nosso|este", "B"),
    ob("Em “Todos chegaram”, //todos// é pronome:", "possessivo|demonstrativo|indefinido|pessoal", "C"),
    ob("Em “Qual é o seu nome?”, //qual// é pronome:", "interrogativo|indefinido|possessivo|relativo", "A"),
    ob("Em “Ninguém me viu”, //ninguém// indica:", "ausência de pessoas|quantidade exata|posse|lugar", "A"),
    dis("Sublinhe os indefinidos: “Alguns alunos fizeram tudo, mas ninguém terminou.”", "Alguns, tudo, ninguém.", 2),
    dis("Escreva uma pergunta com //quanto// e outra com //quem//.", "Resposta pessoal. Exemplos: “Quanto custa?” e “Quem chegou?”", 2),
    dis("Troque o indefinido por outro de sentido oposto: “Alguém ligou.”", "Ninguém ligou.", 2)
  ]);

  G("pronomes-relativos", "Pronomes relativos: que, quem, onde, cujo", "Ligar orações e retomar um termo anterior.", [
    "O **pronome relativo** liga duas orações e retoma um termo já dito (o antecedente): //O livro **que** li é ótimo//.",
    "**Que**: coisas e pessoas. **Quem**: pessoas (com preposição). **Onde**: lugar. **Cujo, cuja**: posse, concorda com o que vem depois (//A menina **cuja** mochila sumiu//). **O qual, a qual**."
  ], [
    ob("“O livro ___ li é ótimo.”", "onde|que|cuja|quem", "B"),
    ob("“A cidade ___ nasci é pequena.”", "onde|cujo|que|a qual", "A"),
    ob("“A menina ___ mochila sumiu chorou.”", "cujo|cuja|onde|quem", "B"),
    ob("“O aluno a ___ me refiro é Pedro.”", "que|onde|quem|cujo", "C"),
    ob("Em “O filme que vimos é longo”, //que// retoma:", "filme|vimos|longo|é", "A"),
    dis("Una as frases com um pronome relativo: “Conheci uma moça. A moça fala inglês.”", "Conheci uma moça que fala inglês.", 2),
    dis("Una: “Visitamos a casa. Nela moraram meus avós.”", "Visitamos a casa onde moraram meus avós. (ou em que moraram)", 2),
    dis("Complete com cujo ou cuja: a) O livro ___ capa é azul. b) O aluno ___ pai é médico.", "a) cuja; b) cujo.", 2)
  ]);

  G("adverbio-locucao", "Advérbio e locução adverbial", "Circunstâncias de tempo, lugar, modo, intensidade, dúvida, afirmação e negação.", [
    "**Advérbio** modifica verbo, adjetivo ou outro advérbio. **Locução adverbial**: grupo de palavras com valor de advérbio (//de repente, às vezes, à noite, de propósito, em breve//).",
    "Muitos advérbios de modo terminam em **-mente** (//rapidamente, felizmente//). Alguns aceitam grau (//muito cedo, mais perto//)."
  ], [
    ob("“De repente, a luz apagou.” //De repente// é locução adverbial de:", "modo|tempo|lugar|negação", "B"),
    ob("“Fiz de propósito.” //De propósito// indica:", "modo|tempo|lugar|dúvida", "A"),
    ob("“Ela chegou muito cedo.” //Muito// intensifica:", "o verbo|o advérbio //cedo//|o substantivo|o artigo", "B"),
    ob("Qual é um advérbio de modo?", "ontem|felizmente|lá|jamais", "B"),
    ob("Qual locução adverbial indica tempo?", "à noite|de cor|às pressas|em vão", "A"),
    dis("Sublinhe as locuções adverbiais: “Às vezes, vou à escola a pé e volto de ônibus.”", "Às vezes, a pé, de ônibus.", 2),
    dis("Troque a locução por um advérbio: “Ele fez o trabalho com cuidado.”", "Ele fez o trabalho cuidadosamente.", 2),
    dis("Escreva uma frase com advérbio de dúvida.", "Resposta pessoal. Exemplo: “Talvez eu chegue atrasado.”", 2)
  ]);

  G("modos-verbais", "Modos verbais: indicativo, subjuntivo e imperativo", "Certeza, dúvida/desejo e ordem.", [
    "**Indicativo**: certeza, fato (//Eu estudo. Eu estudei. Eu estudarei.//).",
    "**Subjuntivo**: dúvida, desejo, hipótese (//Talvez eu estude. Espero que você venha. Se eu tivesse tempo…//).",
    "**Imperativo**: ordem, pedido, conselho (//Estude! Venha cá. Façam silêncio.//)."
  ], [
    ob("“Eu estudo todos os dias” está no modo:", "indicativo|subjuntivo|imperativo|infinitivo", "A"),
    ob("“Espero que você venha” tem o verbo //venha// no modo:", "indicativo|subjuntivo|imperativo|nominal", "B"),
    ob("“Feche a porta.” está no modo:", "indicativo|subjuntivo|imperativo|gerúndio", "C"),
    ob("“Talvez ela ___ (chegar) cedo.”", "chega|chegue|chegou|chegará", "B"),
    ob("“Se eu ___ (ter) tempo, viajaria.”", "tenho|tive|tivesse|terei", "C"),
    dis("Passe para o imperativo: “Você faz silêncio.”", "Faça silêncio.", 2),
    dis("Classifique o modo: a) Ela canta. b) Que ela cante! c) Cante!", "a) indicativo; b) subjuntivo; c) imperativo.", 2),
    dis("Escreva uma frase com verbo no subjuntivo.", "Resposta pessoal. Exemplo: “Espero que você goste.”", 2)
  ]);

  G("preterito-perfeito-imperfeito", "Pretérito perfeito × pretérito imperfeito", "Ação concluída × ação habitual ou em andamento no passado.", [
    "**Perfeito**: ação passada e concluída (//Ontem estudei. Ela saiu.//).",
    "**Imperfeito**: ação habitual, repetida ou em andamento no passado (//Quando criança, eu estudava à tarde. Chovia quando cheguei.//).",
    "Nas narrativas, o imperfeito descreve o cenário e o perfeito conta os fatos."
  ], [
    ob("“Ontem estudei até tarde” está no:", "pretérito perfeito|pretérito imperfeito|presente|futuro", "A"),
    ob("“Todo verão, viajávamos para a praia” indica:", "ação concluída|ação habitual no passado|ação futura|ação presente", "B"),
    ob("Qual forma indica ação concluída?", "cantava|cantei|cantaria|cantasse", "B"),
    ob("Em “Chovia quando cheguei”, //chovia// e //cheguei// são, respectivamente:", "perfeito e perfeito|imperfeito e perfeito|imperfeito e imperfeito|perfeito e imperfeito", "B"),
    ob("“Quando eu ___ criança, brincava na rua.”", "fui|era|serei|seria", "B"),
    dis("Passe para o pretérito perfeito: “Eu como e saio.”", "Eu comi e saí.", 2),
    dis("Passe para o imperfeito: “Eles jogam bola todo dia.”", "Eles jogavam bola todo dia.", 2),
    dis("Complete: “Enquanto ela ___ (dormir), a chuva ___ (cair).”", "dormia; caía (pretérito imperfeito: ações em andamento ao mesmo tempo).", 2)
  ]);

  G("futuros", "Futuro do presente e futuro do pretérito", "Ação que ainda vai acontecer e ação dependente de condição.", [
    "**Futuro do presente**: fato que ainda vai ocorrer (//Viajarei amanhã.//). **Futuro do pretérito**: fato possível, dependente de condição, ou cortesia (//Eu viajaria, se pudesse. Você poderia me ajudar?//).",
    "Na fala, usa-se muito //vou + infinitivo//: //Vou viajar amanhã//."
  ], [
    ob("“Viajarei amanhã” está no:", "futuro do pretérito|futuro do presente|pretérito perfeito|presente", "B"),
    ob("“Eu viajaria, se pudesse” está no:", "futuro do presente|futuro do pretérito|presente|pretérito imperfeito", "B"),
    ob("“Você poderia me ajudar?” expressa:", "ordem|cortesia, pedido educado|certeza|passado", "B"),
    ob("Qual forma está no futuro do presente?", "faria|fará|fez|fazia", "B"),
    ob("“Se eu ganhasse na loteria, ___ (comprar) uma casa.”", "compraria|comprarei|comprei|comprava", "A"),
    dis("Passe para o futuro do presente: “Nós estudamos.”", "Nós estudaremos.", 2),
    dis("Passe para o futuro do pretérito: “Eu vou à praia.”", "Eu iria à praia.", 2),
    dis("Reescreva de forma mais educada: “Me empresta o lápis.”", "Você poderia me emprestar o lápis? (ou: Você emprestaria o lápis?)", 2)
  ]);

  G("formas-nominais", "Formas nominais do verbo: infinitivo, gerúndio e particípio", "Reconhecer e usar as formas nominais em frases e locuções verbais.", [
    "**Infinitivo**: termina em -ar, -er, -ir (//cantar//). **Gerúndio**: termina em -ndo (//cantando//). **Particípio**: termina em -ado, -ido (//cantado, vendido//).",
    "Formam **locuções verbais** com auxiliares: //estou estudando//, //tenho estudado//, //quero estudar//."
  ], [
    ob("Qual é o gerúndio de //correr//?", "corrido|correndo|correr|corria", "B"),
    ob("Qual é o particípio de //vender//?", "vendendo|vendido|vender|vendeu", "B"),
    ob("Em “Estou estudando”, //estudando// é:", "infinitivo|gerúndio|particípio|imperativo", "B"),
    ob("Em “Tenho estudado muito”, //estudado// é:", "infinitivo|gerúndio|particípio|futuro", "C"),
    ob("Em “Quero estudar”, //estudar// é:", "infinitivo|gerúndio|particípio|passado", "A"),
    dis("Dê as três formas nominais de //partir//.", "partir; partindo; partido.", 2),
    dis("Forme uma locução verbal com //ter + comprar//.", "tenho comprado (ou: tem comprado, tínhamos comprado, etc.).", 2),
    dis("Sublinhe as formas nominais: “Cansado de esperar, saiu andando.”", "Cansado (particípio), esperar (infinitivo), andando (gerúndio).", 2)
  ]);

  G("voz-ativa-passiva", "Voz ativa e voz passiva", "Quem pratica e quem sofre a ação: transformar de uma voz para a outra.", [
    "**Voz ativa**: o sujeito pratica a ação (//O menino chutou a bola//). **Voz passiva analítica**: o sujeito sofre a ação; verbo //ser// + particípio (//A bola foi chutada pelo menino//).",
    "**Passiva sintética**: verbo + //se// (//Vendem-se casas//), que equivale a //Casas são vendidas//."
  ], [
    ob("“A bola foi chutada pelo menino” está na voz:", "ativa|passiva|reflexiva|neutra", "B"),
    ob("“O professor corrigiu as provas” está na voz:", "ativa|passiva|reflexiva|neutra", "A"),
    ob("A passiva de “O vento derrubou a árvore” é:", "A árvore derrubou o vento.|A árvore foi derrubada pelo vento.|O vento foi derrubado.|A árvore derruba o vento.", "B"),
    ob("“Vendem-se casas” equivale a:", "Casas vendem.|Casas são vendidas.|Casas vendiam.|Vende casas.", "B"),
    ob("Na passiva analítica, o verbo auxiliar é:", "ter|haver|ser|ir", "C"),
    dis("Passe para a voz passiva: “A professora leu o livro.”", "O livro foi lido pela professora.", 2),
    dis("Passe para a voz ativa: “O bolo foi feito por minha avó.”", "Minha avó fez o bolo.", 2),
    dis("Passe para a voz passiva analítica: “Alugam-se salas.”", "Salas são alugadas.", 2)
  ]);

  G("sujeito-predicado", "Sujeito e predicado: introdução", "Identificar o sujeito, o predicado e os núcleos.", [
    "**Sujeito** é o termo sobre o qual se diz algo. **Predicado** é o que se diz do sujeito.",
    "O **núcleo do sujeito** é um substantivo ou pronome; o **núcleo do predicado** é o verbo (ou o predicativo, quando há verbo de ligação)."
  ], [
    ob("Em “As crianças brincavam no parque”, o sujeito é:", "brincavam|As crianças|no parque|parque", "B"),
    ob("O núcleo do sujeito em “Os alunos novos chegaram” é:", "novos|alunos|chegaram|Os", "B"),
    ob("O núcleo do predicado em “A professora explicou a lição” é:", "professora|explicou|lição|a", "B"),
    ob("Em “Choveu muito”, o verbo //choveu// indica:", "ação de alguém|fenômeno da natureza e não há sujeito|estado|posse", "B"),
    ob("Qual frase tem sujeito //Ela//?", "Ela cantou ontem.|Cantou-se ontem.|Choveu ontem.|Cantem ontem.", "A"),
    dis("Separe sujeito e predicado: “O cachorro da vizinha latiu a noite toda.”", "Sujeito: O cachorro da vizinha. Predicado: latiu a noite toda.", 2),
    dis("Qual é o núcleo do sujeito em “Meus primos viajaram ontem”?", "primos.", 2),
    dis("Crie uma frase com sujeito composto.", "Resposta pessoal. Exemplo: “Ana e Bia saíram.”", 2)
  ]);

  G("tipos-sujeito", "Tipos de sujeito: simples, composto e oculto", "Classificar o sujeito e identificar o núcleo.", [
    "**Simples**: um só núcleo (//O menino chegou//). **Composto**: dois ou mais núcleos (//Ana e Bia saíram//). **Oculto (desinencial)**: não aparece, mas se identifica pela terminação do verbo (//Chegamos cedo// = nós).",
    "Para achar o sujeito, pergunte ao verbo: **quem** (ou **o quê**) //pratica a ação?//"
  ], [
    ob("“Os alunos chegaram cedo.” Sujeito:", "simples|composto|oculto|inexistente", "A"),
    ob("“Ana e Bia saíram juntas.” Sujeito:", "simples|composto|oculto|inexistente", "B"),
    ob("“Fomos ao cinema ontem.” Sujeito:", "simples|composto|oculto (nós)|inexistente", "C"),
    ob("Em “Pedro e eu estudamos”, o sujeito é:", "simples|composto|oculto|inexistente", "B"),
    ob("“Cheguei cedo hoje.” O sujeito oculto é:", "tu|eu|ele|nós", "B"),
    dis("Classifique: a) O gato dorme. b) Comemos pão. c) O pai e o filho viajaram.", "a) simples; b) oculto (nós); c) composto.", 3),
    dis("Reescreva fazendo o sujeito oculto aparecer: “Estudamos muito.”", "Nós estudamos muito.", 2),
    dis("Crie uma frase com sujeito oculto.", "Resposta pessoal. Exemplo: “Cheguei atrasada.”", 2)
  ]);

  G("predicado", "Predicado verbal, nominal e verbo-nominal", "Verbos de ligação e predicativo do sujeito.", [
    "**Predicado verbal**: o núcleo é um verbo de ação (//O menino correu//). **Predicado nominal**: verbo de ligação + predicativo do sujeito (//O dia estava lindo//).",
    "**Verbo-nominal**: tem os dois (//A professora chegou cansada//).",
    "Verbos de ligação comuns: //ser, estar, ficar, parecer, permanecer, continuar//."
  ], [
    ob("“O dia estava lindo” tem predicado:", "verbal|nominal|verbo-nominal|inexistente", "B"),
    ob("“A professora chegou cansada” tem predicado:", "verbal|nominal|verbo-nominal|inexistente", "C"),
    ob("“O menino correu” tem predicado:", "verbal|nominal|verbo-nominal|inexistente", "A"),
    ob("Qual é um verbo de ligação?", "correr|estar|escrever|abrir", "B"),
    ob("Em “Ela parece feliz”, //feliz// é:", "sujeito|predicativo do sujeito|objeto|adjunto", "B"),
    dis("Classifique o predicado: a) O céu ficou escuro. b) A chuva caiu. c) O aluno saiu triste.", "a) nominal; b) verbal; c) verbo-nominal.", 3),
    dis("Sublinhe o predicativo: “Os alunos permaneceram calmos.”", "calmos.", 2),
    dis("Escreva uma frase com verbo de ligação.", "Resposta pessoal. Exemplo: “O mar está calmo.”", 2)
  ]);

  G("transitividade", "Transitividade verbal: objeto direto e indireto", "Verbos transitivos diretos, indiretos, intransitivos e de ligação.", [
    "**Transitivo direto (VTD)**: pede complemento sem preposição (//Comprei **um livro**//). **Transitivo indireto (VTI)**: com preposição (//Gosto **de música**//).",
    "**Intransitivo (VI)**: não precisa de complemento (//O sol nasceu//). **De ligação (VL)**: liga o sujeito ao predicativo (//Ele ficou feliz//).",
    "**Transitivo direto e indireto**: //Entreguei **o livro** (OD) **ao professor** (OI)//."
  ], [
    ob("“Ela abriu a porta.” O verbo //abriu// é:", "intransitivo|transitivo direto|transitivo indireto|de ligação", "B"),
    ob("“Preciso de ajuda.” O verbo //preciso// é:", "transitivo direto|transitivo indireto|intransitivo|de ligação", "B"),
    ob("“O sol nasceu.” O verbo é:", "intransitivo|transitivo direto|transitivo indireto|de ligação", "A"),
    ob("“Ele ficou feliz.” O verbo //ficou// é:", "transitivo direto|transitivo indireto|intransitivo|de ligação", "D"),
    ob("“Entreguei o livro ao professor.” Há:", "só objeto direto|só objeto indireto|objeto direto e objeto indireto|nenhum objeto", "C"),
    dis("Identifique o objeto direto: “Os alunos leram o texto.”", "o texto.", 2),
    dis("Identifique o objeto indireto: “Gosto de chocolate.”", "de chocolate.", 2),
    dis("Classifique os verbos: a) Maria chorou. b) Maria comprou pão. c) Maria precisa de descanso.", "a) intransitivo; b) transitivo direto; c) transitivo indireto.", 3)
  ]);

  G("concordancia-verbal", "Concordância verbal: sujeito simples e composto", "O verbo concorda em número e pessoa com o sujeito.", [
    "O verbo concorda com o **núcleo do sujeito** em número e pessoa: //Os alunos chegaram//.",
    "Sujeito **composto**, em geral, leva o verbo ao plural: //Ana e Bia chegaram//. Se houver 1ª pessoa, o verbo vai para a 1ª do plural: //Eu e meus amigos vamos//.",
    "Sujeito **posposto** também exige concordância: //Chegaram os alunos//."
  ], [
    ob("“Ana e Bia ___ (chegar) cedo.”", "chegou|chegaram|chegamos|chegam", "B"),
    ob("“Os livros ___ (estar) na mesa.”", "está|estão|estamos|estás", "B"),
    ob("“Eu e meus amigos ___ (ir) ao parque.”", "vai|vão|vamos|vais", "C"),
    ob("“Chegaram os alunos.” O sujeito está:", "anteposto|posposto|oculto|indeterminado", "B"),
    ob("“Tu ___ (saber) a resposta.”", "sabe|sabes|sabem|sabemos", "B"),
    dis("Corrija: “Os alunos chegou atrasados.”", "Os alunos chegaram atrasados.", 2),
    dis("Corrija: “Eu e você vai ao cinema.”", "Eu e você vamos ao cinema.", 2),
    dis("Complete: “Chegaram ___ (os alunos / o aluno)”: qual é a forma correta?", "Chegaram os alunos (verbo no plural, concordando com o sujeito posposto).", 2)
  ]);

  G("concordancia-nominal", "Concordância nominal: adjetivo, meio, obrigado, anexo", "Casos que mais geram dúvida na concordância dos nomes.", [
    "O adjetivo, o artigo, o numeral e o pronome concordam com o substantivo em gênero e número (//as casas antigas//).",
    "//Meio//, como advérbio (= um pouco), é **invariável**: //Ela ficou meio cansada//. //Menos// é sempre invariável.",
    "//Obrigado// concorda com quem agradece (//Obrigada//, disse Ana). //Anexo// concorda com o substantivo (//Seguem anexas as fotos//)."
  ], [
    ob("“Ela ficou ___ cansada.”", "meio|meia|meios|meias", "A"),
    ob("“Obrigada”, disse a menina. O adjetivo concorda com:", "o ouvinte|quem agradece|o objeto|o verbo", "B"),
    ob("“Seguem ___ as fotos.”", "anexo|anexas|anexos|anexa", "B"),
    ob("“Há ___ pessoas aqui.” (menos)", "menos|menas|meno|meníssimas", "A"),
    ob("“É proibida a entrada” está correta porque:", "o adjetivo concorda com o substantivo determinado pelo artigo|proibida é sempre feminino|entrada é verbo|não há regra", "A"),
    dis("Corrija: “Elas estão meias nervosas.”", "Elas estão meio nervosas.", 2),
    dis("Corrija: “Segue anexo as fotos.”", "Seguem anexas as fotos.", 2),
    dis("Complete: “Muito ___ (obrigado), disse o menino. Muito ___ (obrigado), disse a menina.”", "obrigado; obrigada.", 2)
  ]);

  G("virgula", "A vírgula: principais usos", "Enumeração, vocativo, aposto, adjunto deslocado, conectivos e data.", [
    "**Use a vírgula**: em enumerações; para isolar vocativo, aposto e adjunto adverbial deslocado; antes de //mas, porém, contudo//; após //portanto, no entanto//; em datas e locais (//Recife, 12 de maio//).",
    "**Não use**: entre sujeito e verbo, nem entre verbo e complemento."
  ], [
    ob("Qual frase está bem pontuada?", "Os alunos, chegaram cedo.|Pedro, venha aqui.|Comprei, pão e leite.|Ele, saiu.", "B"),
    ob("Em “Maria, minha amiga, chegou”, a vírgula isola:", "vocativo|aposto|enumeração|data", "B"),
    ob("Em “Amanhã, viajarei”, a vírgula separa:", "adjunto adverbial deslocado|vocativo|aposto|sujeito do verbo", "A"),
    ob("Qual frase está correta?", "Estudei mas não passei.|Estudei, mas não passei.|Estudei mas, não passei.|Estudei mas não, passei.", "B"),
    ob("Qual data está bem pontuada?", "Recife 12 de maio|Recife, 12 de maio|Recife 12, de maio|Recife, 12, de maio", "B"),
    dis("Pontue: “Comprei maçã pera uva e banana.”", "Comprei maçã, pera, uva e banana.", 2),
    dis("Pontue: “Carlos meu irmão mora em Niterói.”", "Carlos, meu irmão, mora em Niterói.", 2),
    dis("Explique por que não se usa vírgula em “Os alunos, chegaram”.", "Porque ela separa o sujeito do verbo.", 2)
  ]);

  G("outros-sinais", "Ponto e vírgula, dois-pontos, aspas, parênteses e reticências", "Usos e efeitos de sentido dos demais sinais de pontuação.", [
    "**Ponto e vírgula (;)** separa partes longas de uma frase ou itens de uma lista. **Dois-pontos (:)** anunciam fala, lista ou explicação.",
    "**Aspas (“ ”)** marcam citação, ironia, estrangeirismo. **Parênteses ( )** acrescentam informação. **Reticências (…)** indicam suspense, hesitação ou interrupção."
  ], [
    ob("As aspas em “Ele disse: ‘vou embora’” marcam:", "uma fala citada|um erro|uma data|uma lista", "A"),
    ob("Os dois-pontos em “Comprei três coisas: pão, leite e queijo” anunciam:", "uma lista|uma pergunta|uma ironia|o fim do texto", "A"),
    ob("As reticências em “Eu queria, mas…” indicam:", "fim definitivo|frase interrompida|pergunta|lista", "B"),
    ob("Os parênteses em “A cidade (a capital) é bonita” trazem:", "uma informação extra|uma pergunta|uma ordem|um erro", "A"),
    ob("O ponto e vírgula costuma ser usado para:", "separar partes longas ou itens de uma lista|encerrar perguntas|marcar falas|abreviar palavras", "A"),
    dis("Pontue com dois-pontos: “Comprei frutas maçã pera e uva”.", "Comprei frutas: maçã, pera e uva.", 2),
    dis("Escreva uma frase com reticências que crie suspense.", "Resposta pessoal. Exemplo: “A porta se abriu devagar…”", 2),
    dis("Explique o efeito das aspas em: O “gênio” esqueceu a mochila.", "Ironia: as aspas indicam que a palavra não deve ser entendida literalmente.", 3)
  ]);

  G("acentuacao-ditongos-hiatos", "Acentuação: ditongos abertos e hiatos", "Éi, éu, ói e os hiatos com i e u tônicos.", [
    "Acentuam-se os **ditongos abertos** //éi, éu, ói// em oxítonas e monossílabos tônicos: //papéis, chapéu, herói, céu, troféu//.",
    "Acentua-se o **i** ou **u tônico** de um hiato, quando está sozinho na sílaba ou com //s//: //sa-í-da, ju-í-zo, ba-ú, pa-ís, sa-ú-de//.",
    "Não se acentua o **i/u** quando vem depois de ditongo (//fei-u-ra//) ou antes de //nh// (//ra-i-nha//)."
  ], [
    ob("Qual palavra é acentuada por ter ditongo aberto em oxítona?", "herói|feiura|ideia|boia", "A"),
    ob("Qual palavra tem hiato acentuado?", "saída|saiu|baia|paiol", "A"),
    ob("A grafia correta é:", "papeis|papéis|papeiz|papeís", "B"),
    ob("Qual palavra não leva acento?", "baú|país|feiura|saúde", "C"),
    ob("A palavra //céu// é acentuada porque:", "é monossílabo tônico terminado em éu|é proparoxítona|é paroxítona|é oxítona terminada em a", "A"),
    dis("Acentue quando necessário: chapeu, heroi, pais, juizo, feiura.", "chapéu, herói, país, juízo, feiura (sem acento).", 2),
    dis("Separe em sílabas: saída, baú, rainha, feiura.", "sa-í-da; ba-ú; ra-i-nha; fei-u-ra.", 2),
    dis("Explique por que //saúde// tem acento e //feiura// não.", "Em //saúde//, o u é tônico de um hiato, sozinho na sílaba; em //feiura//, o u vem depois de ditongo.", 3)
  ]);

  G("ortografia-mal-mau", "Ortografia: mal/mau, afim/a fim, acerca de, há cerca de, senão/se não", "Pares que mais confundem na escrita.", [
    "**Mal** (advérbio, substantivo): oposto de //bem//: //Passei mal; o mal do século//. **Mau** (adjetivo): oposto de //bom//: //um mau aluno//.",
    "**Afim**: semelhante (//ideias afins//). **A fim de**: para (//Estudo a fim de passar//).",
    "**Acerca de**: sobre. **Há cerca de**: faz aproximadamente. **A cerca de**: a uma distância de. **Senão**: caso contrário. **Se não**: condicional."
  ], [
    ob("“Ele é um aluno ___.”", "mal|mau|maú|mao", "B"),
    ob("“Passei ___ ontem.”", "mal|mau|maus|mais", "A"),
    ob("“Estudei ___ de passar.”", "afim|a fim|a fi|afin", "B"),
    ob("“Conversamos ___ do projeto.”", "acerca|há cerca|a cerca|afim", "A"),
    ob("“___ chover, vamos à praia.”", "Senão|Se não|Sé não|Senao", "B"),
    dis("Escreva o antônimo de //bem// e de //bom// (como em mal/mau).", "mal e mau.", 2),
    dis("Complete: “Chegou ___ (a fim de / afim) de ajudar.”", "a fim de.", 2),
    dis("Explique a diferença entre //senão// e //se não//.", "//Senão// = caso contrário (“Corra, senão perde”); //se não// = condição negativa (“Se não chover…”).", 3)
  ]);

  G("ortografia-eza-ice-izar", "Ortografia: -eza/-esa, -ice, -izar/-isar e o h", "Terminações e letra h para evitar erros comuns.", [
    "**-eza**: substantivos abstratos derivados de adjetivos (//beleza, pobreza, certeza//). **-esa**: feminino de títulos e de nomes pátrios (//princesa, duquesa, portuguesa//).",
    "**-ice**: indica qualidade ou ação (//tolice, meninice, velhice//).",
    "**-izar**: usa-se em verbos derivados de palavras sem //s// (//civilizar, organizar//). **-isar**: se a palavra de origem tem //s// (//pesquisar, analisar//).",
    "Escrevem-se com **h inicial**: //hoje, hora, homem, humano, hábito//."
  ], [
    ob("O substantivo abstrato de //belo// é:", "beleza|belesa|belleza|beleiza", "A"),
    ob("O feminino de //duque// é:", "duqueza|duquesa|duquessa|duquisa", "B"),
    ob("A grafia correta é:", "analizar|analisar|analissar|análizar", "B"),
    ob("A grafia correta é:", "organisar|organizar|orgazar|orgenizar", "B"),
    ob("A grafia correta é:", "oje|hoje|ôje|hôje", "B"),
    dis("Forme substantivos com -eza: grande, pobre, certo.", "grandeza, pobreza, certeza.", 2),
    dis("Complete com -eza ou -esa: a) princ__; b) portugu__; c) bel__.", "a) princesa; b) portuguesa; c) beleza.", 2),
    dis("Escreva o verbo derivado: pesquisa → ___; civilização → ___.", "pesquisar; civilizar.", 2)
  ]);

  G("sinonimos-homonimos", "Sinônimos, antônimos, homônimos e parônimos", "Relações de sentido e de forma entre as palavras.", [
    "**Sinônimos**: sentido semelhante (//bonito, belo//). **Antônimos**: sentido oposto (//alegre, triste//).",
    "**Homônimos**: mesma forma ou mesmo som, sentido diferente (//cela/sela, conserto/concerto, manga fruta/manga da camisa//).",
    "**Parônimos**: forma ou som parecidos, sentido diferente (//descrição/discrição, eminente/iminente//)."
  ], [
    ob("Qual é um sinônimo de //feliz//?", "triste|contente|bravo|cansado", "B"),
    ob("O antônimo de //claro// é:", "luminoso|escuro|limpo|branco", "B"),
    ob("//Conserto// e //concerto// são:", "sinônimos|antônimos|homônimos|iguais", "C"),
    ob("//Iminente// e //eminente// são:", "sinônimos|parônimos|antônimos|iguais", "B"),
    ob("“O mecânico fez o ___ do carro.”", "concerto|conserto|consêrto|conçerto", "B"),
    dis("Escreva um sinônimo e um antônimo de //alegre//.", "Sinônimo: contente; antônimo: triste.", 2),
    dis("Explique o sentido de //cela// e de //sela//.", "//Cela//: quarto pequeno (de prisão ou de convento); //sela//: peça que se coloca no cavalo.", 2),
    dis("Complete: “A ___ da cena foi cuidadosa” (descrição / discrição).", "descrição.", 2)
  ]);
})();
