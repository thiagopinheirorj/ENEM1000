/* 9º ano · Provas (8) e simulados (4). Valor das provas: 10 pontos. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("9"), ob = H.ob, dis = H.dis;

  function distribui(qs, hash, alvo, inicio) {
    var k = inicio;
    qs.forEach(function (q) {
      if (!q.alt) return;
      var t = (alvo[k++ % alvo.length] + hash) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
  }
  function hashDe(id) { return id.split("").reduce(function (a, ch) { return a + ch.charCodeAt(0); }, 0); }

  function P(id, titulo, resumo, texto, qs, assunto) {
    var h = hashDe(id);
    distribui(qs, h % 4, [2, 0, 3, 1, 3, 0, 2, 1, 0, 3], h % 7);
    var b = [H.i("**Valor: 10,0 pontos** (1,0 por questão). Leia o(s) texto(s) com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("prova", "p-" + id, titulo, assunto || ["Interpretação", "Gramática"], resumo, b);
  }
  function S(id, titulo, resumo, qs) {
    distribui(qs, parseInt(id, 10) || 0, [3, 1, 0, 2, 1, 3, 2, 0], 0);
    Y.m("simulado", "s-" + id, titulo, ["Interpretação", "Gramática"], resumo, [
      H.i("Cada questão tem **uma** alternativa correta. Leia o texto de cada questão antes de responder. Tempo sugerido: 50 minutos."),
      H.qs(qs)
    ], "50 min");
  }
  function c(texto, fonte) { return { ctx: texto, fonte: fonte || "Texto original" }; }

  /* ---------------- PROVAS ---------------- */
  P("diagnostica", "Avaliação diagnóstica · início do 9º ano", "Leitura de crônica, orações, regência e produção.", [
    H.t("O banco da praça", [
      "Todas as manhãs, seu Arlindo se sentava no banco da praça com um caderno e uma caneta. Os passantes achavam que ele era escritor; outros, que fosse espião.",
      "Quando uma menina, curiosa, perguntou o que ele anotava, o velho sorriu: “Anoto o que as pessoas não percebem que dizem com os pés”. E mostrou páginas de desenhos de sapatos: apressados, cansados, alegres, hesitantes, cada um contando uma história."
    ])
  ], [
    ob("O que seu Arlindo fazia todas as manhãs?", "Lia jornais|Sentava no banco com um caderno e uma caneta|Vendia caderninhos|Fotografava as pessoas", "B"),
    ob("Que hipóteses os passantes levantavam?", "Que era escritor ou espião|Que era professor|Que era policial|Que era pintor", "A"),
    ob("A frase “o que as pessoas dizem com os pés” sugere que:", "os passos revelam estados e histórias|ele só olhava sapatos|os pés falam de verdade|as pessoas dançam", "A"),
    ob("Em “achavam que ele era escritor”, a oração destacada é:", "substantiva objetiva direta|adjetiva|adverbial|coordenada", "A"),
    ob("“Todas as manhãs” é adjunto adverbial de:", "tempo|lugar|modo|causa", "A"),
    ob("“Quando uma menina… perguntou” é oração:", "adverbial temporal|adjetiva|substantiva|coordenada", "A"),
    ob("“Assistiam ___ cena com curiosidade.”", "a|à|o|na", "B"),
    ob("A palavra //hesitantes// significa:", "indecisos|apressados|alegres|cansados", "A"),
    dis("Por que o texto pode ser classificado como crônica?", "Porque parte de uma cena do cotidiano e produz reflexão, com linguagem simples e um olhar sensível.", 3),
    dis("Escreva um parágrafo contando o que você anotaria, como seu Arlindo, sobre as pessoas ao seu redor.", "Resposta pessoal. Verifique coerência, pontuação e ortografia.", 6)
  ]);

  P("1bim", "Prova · 1º bimestre · 9º ano", "Texto argumentativo curto: coordenação, subordinação substantiva e reduzidas.", [
    H.t("Uma coisa de cada vez", [
      "Muita gente acredita que fazer várias coisas ao mesmo tempo aumenta a produtividade. Os estudos mostram, porém, que o cérebro não executa tarefas complexas simultaneamente: ele alterna entre elas, e cada troca custa tempo e atenção.",
      "É por isso que, ao estudar com o celular ao lado, aprendemos menos. Portanto, para render mais, convém fazer uma coisa de cada vez."
    ])
  ], [
    ob("A tese do texto é que:", "fazer várias coisas juntas é mais produtivo|é melhor fazer uma coisa de cada vez|o celular ajuda a estudar|o cérebro nunca se cansa", "B"),
    ob("A palavra //porém// introduz oração coordenada:", "aditiva|adversativa|conclusiva|explicativa", "B"),
    ob("A palavra //Portanto// introduz oração:", "adversativa|explicativa|conclusiva|aditiva", "C"),
    ob("Em “Muita gente acredita que fazer várias coisas… aumenta…”, a oração iniciada por //que// é:", "substantiva objetiva direta|subjetiva|adjetiva|adverbial", "A"),
    ob("Em “Os estudos mostram que o cérebro não executa…”, a oração é:", "adjetiva|substantiva objetiva direta|adverbial|coordenada", "B"),
    ob("“Ao estudar” é oração reduzida de:", "infinitivo, de valor temporal|gerúndio|particípio|adjetiva", "A"),
    ob("A forma desenvolvida de “Ao estudar com o celular ao lado” é:", "Embora estude|Quando estudamos|Porque estudamos|Se estudássemos", "B"),
    ob("A expressão //É por isso que// estabelece relação de:", "conclusão ou consequência|oposição|exemplo|tempo", "A"),
    dis("Una em um período com conjunção conclusiva: “O cérebro alterna entre tarefas. Cada troca custa tempo.”", "O cérebro alterna entre tarefas; por isso, cada troca custa tempo.", 3),
    dis("Escreva um parágrafo argumentativo (seis linhas) sobre o uso do celular enquanto se estuda.", "Resposta pessoal. Verifique tese, argumento e conectivos.", 7)
  ]);

  P("2bim", "Prova · 2º bimestre · 9º ano", "Texto expositivo: adjetivas, adverbiais, vírgula e coesão.", [
    H.t("Rios que desaparecem", [
      "Muitos rios urbanos, que antes serviam de caminho e de fonte de água, foram escondidos sob o asfalto. Embora estejam invisíveis, continuam correndo sob as ruas; por isso, quando chove forte, a água volta a aparecer, causando alagamentos.",
      "Se as cidades respeitassem o curso natural dos rios, o problema seria menor."
    ], "Texto informativo")
  ], [
    ob("A ideia central do texto é:", "os rios urbanos foram escondidos e podem causar alagamentos|os rios secaram|as cidades não têm rios|a chuva é rara", "A"),
    ob("Em “rios urbanos, que antes serviam de caminho”, a oração destacada é:", "adjetiva restritiva|adjetiva explicativa|substantiva|adverbial", "B"),
    ob("“Embora estejam invisíveis” é oração adverbial:", "causal|concessiva|temporal|final", "B"),
    ob("“Se as cidades respeitassem o curso” é oração adverbial:", "concessiva|condicional|causal|temporal", "B"),
    ob("“por isso” estabelece relação de:", "oposição|conclusão|condição|tempo", "B"),
    ob("A forma //respeitassem// está no:", "pretérito imperfeito do subjuntivo|futuro do subjuntivo|presente do indicativo|imperativo", "A"),
    ob("“Causando alagamentos” é oração reduzida de:", "infinitivo|gerúndio|particípio|coordenada", "B"),
    ob("A vírgula em “Muitos rios urbanos, que… serviam…, foram escondidos” isola uma oração:", "adverbial|adjetiva explicativa|substantiva|coordenada", "B"),
    dis("Explique a ideia de “rios escondidos sob o asfalto”.", "Rios foram cobertos por ruas e construções, ficando invisíveis, embora continuem a correr abaixo da superfície.", 3),
    dis("Una com conjunção concessiva: “A cidade é moderna. Ainda sofre com enchentes.”", "Embora a cidade seja moderna, ainda sofre com enchentes.", 2)
  ]);

  P("3bim", "Prova · 3º bimestre · 9º ano", "Carta do leitor: regência, crase, concordância e colocação pronominal.", [
    H.t("Carta do leitor", [
      "Sr. Editor,",
      "Escrevo para lamentar o fechamento da biblioteca do meu bairro. Fazem dois anos que os moradores aspiram a uma reabertura, mas a prefeitura não nos dá resposta. Os estudantes, que dependiam daquele espaço, agora precisam deslocar-se até o centro.",
      "Peço que o jornal dê visibilidade ao tema e que as autoridades informem aos moradores o prazo para a reabertura.",
      "Atenciosamente,\nBruno Matos"
    ], "Texto original (carta fictícia)")
  ], [
    ob("O objetivo do leitor é:", "elogiar a prefeitura|lamentar o fechamento e pedir visibilidade|vender livros|convidar para um evento", "B"),
    ob("“Fazem dois anos” apresenta:", "concordância correta|erro: deveria ser //Faz//|erro de crase|erro de regência", "B"),
    ob("“Aspiram a uma reabertura” está correta porque //aspirar// (almejar) pede:", "preposição //a//|artigo //a//|nenhuma preposição|preposição //de//", "A"),
    ob("“Nos dá” exemplifica:", "próclise, com palavra atrativa //não//|ênclise|mesóclise|erro de colocação", "A"),
    ob("“Daquele espaço” é contração de:", "de + aquele|de + o|em + aquele|a + aquele", "A"),
    ob("“Informem aos moradores” apresenta regência:", "transitivo direto e indireto|intransitivo|de ligação|nominal", "A"),
    ob("A forma “deslocar-se” é:", "ênclise|próclise|mesóclise|erro", "A"),
    ob("A crase em “dar à biblioteca” seria correta se:", "o verbo exigisse a preposição //a// e //biblioteca// aceitasse o artigo|houvesse verbo no infinitivo|o termo fosse masculino|houvesse pronome pessoal", "A"),
    dis("Corrija: “Fazem dois anos que os alunos aspiram uma vaga.”", "Faz dois anos que os alunos aspiram a uma vaga.", 2),
    dis("Passe para a forma com ênclise, segundo a norma-padrão: “Me conte a verdade.”", "Conte-me a verdade.", 2)
  ]);

  P("4bim", "Prova · 4º bimestre · 9º ano", "Poema parnasiano e Machado: figuras de linguagem, sentido e forma.", [
    H.poema("Texto I · Língua Portuguesa", "Última flor do Lácio, inculta e bela,\nÉs, a um tempo, esplendor e sepultura:\nOuro nativo, que na ganga impura\nA bruta mina entre os cascalhos vela...", "Olavo Bilac (1865–1918), primeira estrofe"),
    H.poema("Texto II · A Carolina", "Querida, ao pé do leito derradeiro\nEm que descansas desta longa vida,\nAqui venho e virei, pobre querida,\nTrazer-te o coração do companheiro.", "Machado de Assis (1839–1908), primeira estrofe")
  ], [
    ob("O assunto do Texto I é:", "a língua portuguesa|a morte|o amor|a natureza", "A"),
    ob("“Esplendor e sepultura” é uma:", "antítese|comparação|metonímia|elipse", "A"),
    ob("O Texto II dirige-se:", "à esposa falecida|à língua|a um amigo|à pátria", "A"),
    ob("A expressão “leito derradeiro” indica:", "o último repouso|uma cama nova|um hospital|um sono", "A"),
    ob("O sentimento predominante no Texto II é:", "saudade e amor|ironia|ódio|medo", "A"),
    ob("Os dois poemas têm em comum:", "a forma de soneto|o tema da língua|o assunto da morte apenas|o autor", "A"),
    ob("“Ouro nativo… a bruta mina” é uma:", "metáfora|ironia|hipérbole|catacrese", "A"),
    ob("A linguagem dos dois poemas é:", "formal e elaborada|informal|de gíria|técnica", "A"),
    dis("Compare o tema dos dois poemas.", "O Texto I exalta a língua portuguesa, vista como ouro em meio às impurezas; o Texto II expressa saudade e fidelidade ao amor da esposa falecida.", 4),
    dis("O que o Texto I sugere sobre a origem da língua portuguesa?", "Que ela nasce de uma origem rude (o latim vulgar), mas é rica e bela, como o ouro na mina.", 3)
  ], ["Interpretação", "Literatura"]);

  P("final", "Prova final · 9º ano", "Revisão do ano: texto opinativo, orações, regência, crase e produção.", [
    H.t("A escrita na era das telas", [
      "Embora vivamos cercados de mensagens, escrever bem tornou-se um desafio. A rapidez da comunicação digital nos acostumou a frases curtas e a abreviações, o que, às vezes, dificulta a organização de textos mais longos.",
      "Isso não significa que a escrita digital seja inferior, mas que cada situação exige uma linguagem adequada. Portanto, é importante que a escola ensine os alunos a escolher o registro apropriado."
    ])
  ], [
    ob("A tese do texto é que:", "a escrita digital é inferior|cada situação exige uma linguagem adequada, e a escola deve ensinar isso|abreviações devem ser proibidas|ninguém escreve mais", "B"),
    ob("“Embora vivamos cercados de mensagens” é oração adverbial:", "concessiva|causal|temporal|condicional", "A"),
    ob("“o que dificulta a organização de textos” é oração:", "adjetiva (com //o que// referindo-se à oração anterior)|adverbial|substantiva predicativa|coordenada", "A"),
    ob("“Isso não significa que a escrita digital seja inferior”: a oração em //que// é:", "substantiva objetiva direta|adjetiva|adverbial|coordenada", "A"),
    ob("A palavra //Portanto// indica:", "conclusão|oposição|causa|tempo", "A"),
    ob("“Escolher o registro apropriado”: //apropriado// concorda com:", "registro|escola|alunos|situação", "A"),
    ob("Em “a escola ensine os alunos a escolher”, o verbo //ensinar// é:", "transitivo direto e indireto|intransitivo|de ligação|nominal", "A"),
    ob("A forma //vivamos// está no:", "presente do subjuntivo|futuro do indicativo|imperativo|pretérito perfeito", "A"),
    dis("Pontue: “embora estude muito ele nunca se sente preparado e por isso pede ajuda”", "Embora estude muito, ele nunca se sente preparado e, por isso, pede ajuda.", 3),
    dis("Escreva uma introdução e uma conclusão (de três linhas cada) sobre o tema “Desafios da escrita na era digital”.", "Resposta pessoal. A introdução deve contextualizar e trazer tese; a conclusão, retomar e propor ação.", 7)
  ]);

  P("recuperacao-1sem", "Prova de recuperação · 1º semestre · 9º ano", "Prova curta: orações, regência, pontuação e interpretação.", [
    H.t("Dormir ou estudar?", [
      "Quando a prova se aproxima, muitos estudantes trocam o sono pelos livros. Embora pareça uma boa estratégia, ela costuma prejudicar o desempenho, pois o cérebro precisa do descanso para fixar o que aprendeu.",
      "Por isso, os especialistas recomendam estudar em blocos curtos e dormir bem na véspera."
    ], "Texto informativo")
  ], [
    ob("A ideia central do texto é:", "trocar sono por estudo prejudica o desempenho|estudar é inútil|dormir não é importante|provas são injustas", "A"),
    ob("“Quando a prova se aproxima” é oração adverbial:", "temporal|causal|concessiva|condicional", "A"),
    ob("“Embora pareça uma boa estratégia” expressa:", "concessão|causa|condição|finalidade", "A"),
    ob("“pois o cérebro precisa do descanso” é oração:", "coordenada explicativa|coordenada adversativa|subordinada substantiva|subordinada adjetiva", "A"),
    ob("A expressão //Por isso// indica:", "conclusão|oposição|exemplo|tempo", "A"),
    ob("“Precisa do descanso” apresenta verbo:", "transitivo indireto|transitivo direto|intransitivo|de ligação", "A"),
    ob("A forma //pareça// está no:", "presente do subjuntivo|futuro|imperativo|pretérito imperfeito", "A"),
    ob("A vírgula após “Embora pareça uma boa estratégia” separa:", "oração adverbial anteposta da principal|sujeito e verbo|verbo e objeto|aposto", "A"),
    dis("Una em um único período: “O cérebro descansa. Ele fixa o que aprendeu.” (finalidade)", "O cérebro descansa para fixar o que aprendeu.", 2),
    dis("Escreva uma dica de estudo sua em três linhas.", "Resposta pessoal.", 3)
  ]);

  P("leitura", "Avaliação de leitura · poema e texto informativo sobre a língua", "Dois textos sobre a língua: variação, mudança e linguagem poética.", [
    H.poema("Texto I · Língua viva", "A língua é um rio que não pede licença:\nleva palavras novas, deixa as velhas na margem;\ncada geração muda o curso,\ne o povo, sem saber, escreve a gramática."),
    H.t("Texto II · A língua muda", "Toda língua muda ao longo do tempo. Palavras surgem, outras deixam de ser usadas, e a pronúncia se transforma. Isso não significa degeneração, mas adaptação: os falantes criam novos termos para novas necessidades. O que a gramática normativa registra é, em geral, uma fotografia de um momento da língua.", "Texto informativo")
  ], [
    ob("No Texto I, a língua é comparada a:", "um rio|uma árvore|uma casa|uma estrada", "A"),
    ob("O Texto II tem finalidade de:", "informar e explicar|emocionar apenas|vender|ordenar", "A"),
    ob("Em “o povo… escreve a gramática”, o Texto I sugere que:", "as regras nascem do uso dos falantes|a gramática é imutável|o povo é analfabeto|a gramática é inútil", "A"),
    ob("O Texto II afirma que a mudança da língua é:", "adaptação, e não degeneração|degeneração|um erro|um defeito dos jovens", "A"),
    ob("Os dois textos concordam que a língua:", "muda ao longo do tempo|é fixa|é igual para todos|não admite novas palavras", "A"),
    ob("A expressão “fotografia de um momento” no Texto II indica que a gramática normativa:", "registra um recorte da língua|cria a língua|é o único modelo|é inútil", "A"),
    ob("A linguagem do Texto I é:", "figurada e poética|técnica|jurídica|publicitária", "A"),
    ob("O verbo //leva// no Texto I está no:", "presente do indicativo|futuro|imperativo|infinitivo", "A"),
    dis("Que semelhanças e diferenças há entre a forma de abordar a língua nos dois textos?", "Ambos tratam da mudança da língua; o Texto I usa imagens poéticas (rio), e o Texto II usa explicação objetiva.", 4),
    dis("Por que não se pode dizer que uma língua “degenera”?", "Porque as mudanças refletem adaptações às necessidades dos falantes, e não perda de qualidade.", 3)
  ], ["Interpretação", "Gramática"]);

  /* ---------------- SIMULADOS ---------------- */
  S("1", "Simulado de Língua Portuguesa · 9º ano · nº 1", "Oito questões: tese, concessão, orações, regência, crase e figuras de linguagem.", [
    ob("A tese do texto é que:", "o celular deve ser banido|o celular deve ser usado com regras|o celular é indispensável|a escola deve fechar", "B", "", c("Defendo que o uso do celular na escola deve ser regulamentado, e não proibido: o aparelho pode ajudar a aprender, desde que haja regras claras.")),
    ob("A oração destacada expressa:", "causa|concessão|condição|finalidade", "B", "", c("Embora fosse um dia de chuva, o campeonato foi mantido.")),
    ob("A oração destacada é:", "adjetiva restritiva|adjetiva explicativa|substantiva|adverbial", "B", "", c("A cidade, que é cercada de montanhas, tem clima ameno.")),
    ob("A forma correta é:", "Assisti o jogo.|Assisti ao jogo.|Assisti no jogo.|Assisti do jogo.", "B", "", c("Ontem, ___ jogo da final.")),
    ob("A forma correta é:", "à tarde|a tarde|há tarde|à tardes", "A", "", c("Estudo ___ para não perder as aulas da manhã.")),
    ob("A figura de linguagem é:", "sinestesia|catacrese|elipse|gradação", "A", "", c("A voz doce da professora acalmou a turma.")),
    ob("O verbo //aspiram// exige:", "preposição //a//|nenhuma preposição|preposição //de//|preposição //em//", "A", "", c("Os alunos aspiram a uma vaga na universidade.")),
    ob("A forma correta é:", "Fazem dois anos|Faz dois anos|Faziam dois anos|Fizeram dois anos", "B", "", c("Complete: “___ que nos formamos.”"))
  ]);

  S("2", "Simulado de Língua Portuguesa · 9º ano · nº 2", "Oito questões: interpretação de gêneros, ironia, coesão e colocação pronominal.", [
    ob("A finalidade do texto é:", "convencer o leitor a doar livros|vender livros|contar uma história|informar uma data", "A", "", c("Seu livro parado na estante pode virar aventura para alguém. Doe livros. Distribua histórias.")),
    ob("A fala do personagem é:", "irônica|literal|triste|científica", "A", "", c("— Que ótimo, perdi o ônibus de novo! — disse, enquanto ele se afastava.")),
    ob("O pronome //ela// retoma:", "Marina|a escola|a professora|a prova", "A", "", c("Marina chegou cedo porque ela queria revisar a matéria.")),
    ob("Segundo a norma-padrão, a forma correta é:", "Diga-me a verdade.|Me diga a verdade.|Diga me a verdade.|Diga a me verdade.", "A", "", c("Complete: “___ a verdade.”")),
    ob("O conectivo //portanto// indica:", "conclusão|oposição|causa|tempo", "A", "", c("Estudou muito; portanto, estava confiante.")),
    ob("O texto é:", "uma notícia|uma crônica|uma receita|uma biografia", "B", "", c("Na fila do banco, ouvi dois senhores discutirem o futebol como quem discute política. Saí de lá concluindo que o gol é a única unanimidade do país.")),
    ob("A oração destacada é:", "reduzida de infinitivo|reduzida de gerúndio|reduzida de particípio|desenvolvida", "C", "", c("Terminado o trabalho, saímos.")),
    ob("O verbo //preferir// exige:", "preposição //a// no segundo termo|preposição //de//|nenhuma preposição|preposição //em//", "A", "", c("Prefiro estudar de manhã a estudar à noite."))
  ]);

  S("3", "Simulado de Língua Portuguesa · 9º ano · nº 3", "Oito questões: poema, ambiguidade, variação, pontuação e concordância.", [
    ob("O sentimento do eu lírico é:", "saudade e amor|ódio|medo|ironia", "A", "", c("Querida, ao pé do leito derradeiro / Em que descansas desta longa vida, / Aqui venho e virei, pobre querida, / Trazer-te o coração do companheiro.", "Machado de Assis")),
    ob("A frase é ambígua porque:", "não se sabe quem tem o binóculo|há erro de ortografia|falta vírgula|não há verbo", "A", "", c("Vi o homem com o binóculo.")),
    ob("A fala é:", "informal e adequada a uma conversa entre amigos|inadequada em qualquer situação|erro absoluto|formal", "A", "", c("— E aí, tá ligado que a prova foi suave?")),
    ob("A pontuação correta é:", "Quando chegou, saímos.|Quando chegou saímos.|Quando, chegou saímos.|Quando chegou, saímos,", "A", "", c("Escolha a frase corretamente pontuada.")),
    ob("A concordância correta é:", "Seguem anexas as fotos.|Segue anexo as fotos.|Seguem anexo as fotos.|Segue anexas as fotos.", "A", "", c("Complete: “___ as fotos do evento.”")),
    ob("A figura de linguagem é:", "ironia|eufemismo|catacrese|hipérbole", "A", "", c("— Que bela atitude, hein? Chegar atrasado de novo...")),
    ob("A forma correta é:", "Eles têm razão.|Eles tem razão.|Eles teem razão.|Eles têem razão.", "A", "", c("Complete: “Eles ___ razão.”")),
    ob("A palavra //aonde// é usada quando:", "há ideia de movimento|há ideia de lugar fixo|há ideia de tempo|há ideia de causa", "A", "", c("Aonde você vai depois da aula?"))
  ]);

  S("4", "Simulado de Língua Portuguesa · 9º ano · nº 4", "Oito questões: divulgação científica, comparação de textos, hífen, regência nominal e semântica.", [
    ob("A ideia central é que:", "a IA aprende com dados e deve ser usada com senso crítico|a IA é perfeita|a IA não existe|a IA substitui todos os empregos", "A", "", c("A inteligência artificial aprende a partir de grandes quantidades de dados. Por isso, é importante usá-la com senso crítico e conferir as informações.", "Texto informativo")),
    ob("Os textos se complementam porque:", "um aponta um problema e o outro, uma de suas causas|ambos são poemas|ambos são receitas|ambos são notícias", "A", "", c("Texto I: O lixo no mar prejudica os peixes.\nTexto II: Os plásticos levam centenas de anos para se decompor.", "Textos originais")),
    ob("A grafia correta é:", "autoescola|auto-escola|autoécola|auto escola", "A", "", c("Fiz a prova na ___.")),
    ob("A regência correta é:", "É favorável à proposta.|É favorável da proposta.|É favorável na proposta.|É favorável pela proposta.", "A", "", c("Complete: “Ele ___.”")),
    ob("A palavra //manga// em “a manga da camisa” e “comi uma manga” exemplifica:", "polissemia|sinonímia|antonímia|elipse", "A", "", c("A manga da camisa rasgou; depois comi uma manga.")),
    ob("A forma correta é:", "demais|de mais|demaiz|de maz", "A", "", c("Ela fala ___ nas reuniões.")),
    ob("O texto é predominantemente:", "argumentativo|narrativo|injuntivo|descritivo", "A", "", c("Defendo que a escola deva ensinar a pesquisar, pois isso prepara melhor do que apenas decorar.")),
    ob("O sentido de //pena// é:", "piedade ou castigo, conforme o contexto|apenas pluma|apenas tristeza|apenas castigo", "A", "", c("Senti pena do cachorro abandonado; o juiz aplicou a pena máxima."))
  ]);
})();
