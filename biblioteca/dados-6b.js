/* 6º ano · Interpretação de texto (18 materiais). Textos originais, fictícios ou reconto de narrativas tradicionais. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, ob = H.ob, dis = H.dis;

  function I(id, titulo, resumo, texto, qs, assunto, intro) {
    var b = [H.i(intro || "Leia o texto com atenção e responda às questões.")];
    b = b.concat(texto);
    b.push(H.qs(qs));
    H.m6("interpretacao", "i-" + id, titulo, assunto || ["Interpretação"], resumo, b);
  }

  I("fabula-cigarra", "Fábula: a cigarra e a formiga", "Reconto de fábula: personagens, enredo, moral e personificação.", [
    H.t("A cigarra e a formiga", [
      "Durante todo o verão, a cigarra cantou debaixo de uma árvore, enquanto a formiga carregava folhas e grãos para o formigueiro.",
      "— Por que você não descansa e canta comigo? — perguntou a cigarra.\n— Estou guardando comida para o inverno — respondeu a formiga.",
      "Quando o frio chegou, a cigarra não tinha o que comer. Faminta, bateu à porta da formiga e pediu ajuda.\n— E o que você fez durante o verão? — perguntou a formiga.\n— Eu cantei — disse a cigarra.\n— Pois agora dance — respondeu a formiga, fechando a porta.",
      "**Moral:** quem não se prepara hoje pode passar necessidade amanhã."
    ], "Reconto de fábula tradicional")
  ], [
    ob("O que a formiga fazia durante o verão?", "Cantava.|Guardava comida.|Dormia.|Passeava.", "B"),
    ob("Por que a cigarra pediu ajuda no inverno?", "Perdeu a casa.|Estava doente.|Não tinha comida.|Queria cantar.", "C"),
    ob("Nas fábulas, os animais agem como pessoas. Esse recurso se chama:", "comparação|personificação|ironia|hipérbole", "B"),
    ob("A moral da fábula é:", "Cantar é perda de tempo.|Quem se prepara hoje evita problemas amanhã.|A formiga é egoísta.|O inverno é perigoso.", "B"),
    dis("Você concorda com a atitude da formiga? Justifique.", "Resposta pessoal. Aceite posições diferentes, desde que justificadas.", 4),
    dis("Que outra solução a formiga poderia ter dado à cigarra?", "Resposta pessoal. Exemplo: dividir um pouco da comida e pedir que a cigarra ajudasse no verão seguinte.", 3)
  ], ["Interpretação", "Literatura"]);

  I("lenda-vitoria-regia", "Lenda: a vitória-régia", "Reconto de lenda indígena: origem de um elemento da natureza.", [
    H.t("A lenda da vitória-régia", [
      "Contam os indígenas que a Lua, chamada Jaci, tinha o costume de se esconder atrás das montanhas e levar as moças mais belas para viver com ela no céu, transformadas em estrelas.",
      "Uma jovem chamada Naiá sonhava ser escolhida. Todas as noites, olhava para a Lua e suspirava. Certa noite, viu o reflexo prateado de Jaci nas águas de um lago e, achando que a Lua havia descido, mergulhou para alcançá-la. Naiá não voltou.",
      "Comovida, a Lua não pôde devolver a vida à moça, mas a transformou em uma estrela diferente: uma planta de folhas enormes e flores perfumadas, que flutua sobre as águas e só abre as flores à noite. Era a vitória-régia."
    ], "Reconto de lenda do folclore brasileiro")
  ], [
    ob("Quem é Jaci na lenda?", "Uma jovem indígena.|A Lua.|Uma planta.|O lago.", "B"),
    ob("O que a lenda explica?", "A origem da vitória-régia.|A origem do lago.|Por que a Lua tem fases.|Como se plantam flores.", "A"),
    ob("Por que Naiá mergulhou no lago?", "Queria nadar.|Fugiu de casa.|Achou que alcançaria a Lua.|Tinha medo.", "C"),
    ob("Uma característica da vitória-régia, segundo o texto, é:", "só abrir as flores à noite|crescer em montanhas|ter folhas pequenas|não ter perfume", "A"),
    dis("As lendas explicam fatos da natureza por meio de elementos fantásticos. Que elemento fantástico aparece nesta lenda?", "A Lua que leva as moças e transforma Naiá em planta (ou em estrela).", 3),
    dis("Qual é o sentimento de Naiá no texto? Retire uma passagem que o comprove.", "Desejo ou encanto pela Lua: “olhava para a Lua e suspirava”.", 3)
  ], ["Interpretação", "Literatura"]);

  I("conto-mochila", "Conto: o segredo da mochila", "Narrativa curta: personagens, conflito, desfecho e inferência.", [
    H.t("O segredo da mochila", [
      "Todo dia, Bruno chegava à escola com a mochila mais pesada da turma. Os colegas riam: “Você carrega pedras?”. Bruno só sorria.",
      "No recreio, ele ia ao fundo do pátio, abria o zíper e tirava um pote com comida. Do outro lado do muro, aparecia um gato magro de olhos verdes. Bruno o encontrara num dia de chuva e, escondido, dividia o lanche com ele.",
      "Quando a professora Rita descobriu, em vez de brigar, propôs que a turma inteira cuidasse do bichinho. No dia seguinte, a mochila de Bruno estava leve, e o pátio, cheio de gente com potes de ração."
    ])
  ], [
    ob("O que Bruno guardava na mochila?", "Pedras.|Livros extras.|Comida para um gato.|Brinquedos.", "C"),
    ob("Qual é o conflito da história?", "Bruno guardava um segredo e era alvo de risos.|Bruno perdeu a mochila.|O gato fugiu.|Bruno brigou com a professora.", "A"),
    ob("Como a professora reagiu ao descobrir o segredo?", "Brigou com Bruno.|Chamou os pais.|Propôs que todos cuidassem do gato.|Expulsou o gato.", "C"),
    ob("A frase “a mochila de Bruno estava leve” indica que:", "Bruno estava sem lanche|a turma passou a ajudar|o gato foi embora|Bruno trocou de mochila", "B"),
    dis("Que qualidade de Bruno o texto revela? Justifique.", "Bondade ou solidariedade: ele dividia seu lanche com um gato abandonado.", 3),
    dis("Dê outro título para o conto e explique sua escolha.", "Resposta pessoal. Exemplo: “O gato do pátio”, por ser o centro da história.", 3)
  ]);

  I("poema-recreio", "Poema: recreio", "Leitura de poema: estrofes, versos, rimas e sentimentos.", [
    H.poema("Recreio", "O sino toca, é festa!\nA turma sai correndo,\no pátio fica pequeno\npra tanta gente crescendo.\n\nUns pulam corda no canto,\noutros jogam pelo chão;\nhá quem só queira um cantinho\npra conversar com o coração.\n\nMas quando o sino chama\na gente volta à lição,\ncom o peito cheio de sol\ne a cabeça em animação.")
  ], [
    ob("Quantas estrofes tem o poema?", "2|3|4|12", "B"),
    ob("Quantos versos tem cada estrofe?", "3|4|5|6", "B"),
    ob("Qual par de palavras rima na 1ª estrofe?", "festa e pátio|correndo e crescendo|turma e gente|sino e pátio", "B"),
    ob("O verso “o pátio fica pequeno pra tanta gente” sugere que:", "o pátio encolheu|havia muitos alunos brincando|o pátio estava vazio|a escola fechou", "B"),
    dis("Que sentimento predomina no poema?", "Alegria e animação com o recreio.", 2),
    dis("Copie dois versos que rimam na 2ª estrofe.", "“outros jogam pelo chão” e “pra conversar com o coração”.", 2)
  ], ["Interpretação", "Literatura"]);

  I("receita-bolo", "Receita: bolo de cenoura", "Gênero instrucional: ingredientes, modo de preparo, ordem e verbos no imperativo.", [
    H.t("Bolo de cenoura", [
      "**Ingredientes:** 3 cenouras médias; 4 ovos; 1 xícara de óleo; 2 xícaras de açúcar; 2 e 1/2 xícaras de farinha de trigo; 1 colher (de sopa) de fermento em pó.",
      "**Modo de preparo:** 1. Descasque e corte as cenouras. 2. Bata no liquidificador as cenouras, os ovos e o óleo. 3. Em uma tigela, misture o açúcar e a farinha. 4. Junte a mistura do liquidificador e mexa bem. 5. Acrescente o fermento. 6. Despeje em forma untada e leve ao forno médio por cerca de 40 minutos.",
      "//Atenção: peça sempre a ajuda de um adulto para usar o liquidificador e o forno.//"
    ])
  ], [
    ob("A finalidade do texto é:", "contar uma história|ensinar a preparar um bolo|vender um produto|dar uma notícia", "B"),
    ob("Quantas xícaras de açúcar são necessárias?", "1|2|3|4", "B"),
    ob("Qual é a ordem correta dos passos?", "Bater, descascar, juntar, assar|Descascar, bater, misturar, juntar, assar|Assar, bater, descascar|Misturar, assar, descascar", "B"),
    ob("As palavras //descasque, bata, misture// estão em qual forma verbal?", "imperativo|infinitivo|passado|futuro", "A", "O imperativo dá instruções."),
    dis("Por que o texto traz um aviso no final?", "Para alertar que o liquidificador e o forno exigem cuidado e a presença de um adulto.", 3),
    dis("Que ingredientes são usados em maior quantidade (em xícaras)?", "Farinha de trigo (2 e 1/2 xícaras) e açúcar (2 xícaras).", 2)
  ], ["Interpretação"]);

  I("carta-avo", "Carta pessoal: de Ana para a vovó", "Gênero carta: remetente, destinatário, local, data, saudação e despedida.", [
    H.t("Carta de Ana", [
      "Recife, 12 de março de 2026.",
      "Querida vovó Lúcia,",
      "Estou escrevendo para contar as novidades. Comecei o 6º ano e já fiz três amigas novas. Na semana passada, ganhei um prêmio por ter lido cinco livros no mês!",
      "Estou com muita saudade de você e do seu bolo de milho. No meu aniversário, em abril, a mamãe disse que a senhora virá nos visitar. Não perca o trem!",
      "Um abraço apertado da sua neta,\nAna."
    ])
  ], [
    ob("Quem escreve a carta?", "Lúcia|Ana|a mamãe|uma amiga", "B"),
    ob("Para quem a carta é escrita?", "Para a mãe de Ana.|Para uma amiga.|Para a avó de Ana.|Para a professora.", "C"),
    ob("O trecho “Querida vovó Lúcia,” é:", "a despedida|a saudação inicial|a data|o assunto", "B"),
    ob("Qual é o motivo da carta?", "Contar novidades e matar a saudade.|Pedir dinheiro.|Reclamar de algo.|Convidar para uma festa na escola.", "A"),
    dis("Que novidades Ana conta à avó?", "Começou o 6º ano, fez três amigas novas e ganhou um prêmio por ler cinco livros.", 3),
    dis("Que expressão mostra o carinho de Ana pela avó?", "“Estou com muita saudade de você”, “Querida vovó” ou “Um abraço apertado”.", 2)
  ]);

  I("noticia-cantinho", "Notícia: cantinho de leitura", "Lide, fato, fontes e linguagem objetiva em uma notícia.", [
    H.t("Escola ganha cantinho de leitura", [
      "A Escola Municipal Rosa dos Ventos inaugurou na última sexta-feira (8) um cantinho de leitura com mais de 300 livros doados por moradores do bairro. O espaço fica na antiga sala de materiais e tem almofadas, tapetes e estantes coloridas.",
      "A ideia surgiu de uma turma do 6º ano, que fez uma campanha de doação durante um mês. “Quase não acreditamos quando vimos tantos livros chegando”, contou o aluno Enzo, de 11 anos.",
      "De acordo com a diretora, o espaço ficará aberto no recreio e depois das aulas."
    ], "Texto original, criado para esta atividade (fictício)")
  ], [
    ob("Qual é o fato principal da notícia?", "A escola ganhou um cantinho de leitura.|A escola trocou de nome.|Os alunos viajaram.|Uma biblioteca fechou.", "A"),
    ob("Quem teve a ideia do cantinho?", "A diretora|Uma turma do 6º ano|Os moradores|O prefeito", "B"),
    ob("Quando o espaço foi inaugurado?", "Na última sexta-feira (8)|No mês passado|Em abril|Ontem à noite", "A"),
    ob("A fala do aluno Enzo aparece entre aspas para:", "dar voz a quem participou do fato|enfeitar o texto|mostrar uma dúvida|encerrar a notícia", "A"),
    dis("Onde fica o cantinho de leitura e o que ele tem?", "Na antiga sala de materiais; tem almofadas, tapetes, estantes coloridas e mais de 300 livros.", 3),
    dis("Que título alternativo você daria para a notícia?", "Resposta pessoal. Exemplo: “Alunos criam espaço de leitura com livros doados”.", 2)
  ]);

  I("cartaz-reciclagem", "Cartaz: campanha de reciclagem", "Gênero cartaz: finalidade, público, linguagem apelativa e informações.", [
    H.t("Cartaz", [
      "**ESCOLA LIMPA, PLANETA FELIZ!**",
      "Separe o lixo: papel no **azul**, plástico no **vermelho**, vidro no **verde**, metal no **amarelo** e restos de comida no **marrom**.",
      "Coleta seletiva toda **sexta-feira**, no pátio. Participe!"
    ], "Texto original (campanha fictícia)")
  ], [
    ob("A finalidade do cartaz é:", "informar e convencer os alunos a separar o lixo|vender produtos|contar uma história|dar uma notícia", "A"),
    ob("De que cor é o recipiente do plástico?", "Azul|Vermelho|Verde|Amarelo", "B"),
    ob("Em qual dia ocorre a coleta?", "Segunda-feira|Quarta-feira|Sexta-feira|Sábado", "C"),
    ob("A palavra //Participe!// está no:", "imperativo, para convidar o leitor|passado|futuro|infinitivo", "A"),
    dis("Para quem o cartaz foi feito?", "Para os alunos e funcionários da escola.", 2),
    dis("Por que o cartaz usa cores em negrito?", "Para destacar a cor de cada recipiente e facilitar a leitura rápida.", 2)
  ]);

  I("convite-junina", "Convite: arraial da escola", "Gênero convite: quem convida, para quê, quando, onde e o que levar.", [
    H.t("Convite", [
      "**Arraial da Escola**",
      "A Escola Municipal Rosa dos Ventos tem o prazer de convidar você e sua família para o nosso arraial.",
      "**Quando:** sábado, 20 de junho, às 15 horas.\n**Onde:** quadra da escola.\n**Atrações:** quadrilha dos alunos, brincadeiras e comidas típicas.",
      "Traga um prato doce ou salgado para dividir. Venha vestido a caráter!",
      "Confirme sua presença com a secretaria."
    ], "Texto original (convite fictício)")
  ], [
    ob("Quem faz o convite?", "Uma família|A Escola Municipal Rosa dos Ventos|A prefeitura|Um aluno", "B"),
    ob("Em que dia será a festa?", "Domingo, 21 de junho|Sábado, 20 de junho|Sexta, 19 de junho|Sábado, 27 de junho", "B"),
    ob("O que os convidados devem levar?", "Um brinquedo|Um prato doce ou salgado|Dinheiro|Nada", "B"),
    ob("A expressão “vestido a caráter” significa:", "usando roupas típicas da festa|usando uniforme|com roupa de gala|sem roupa especial", "A"),
    dis("Que informações não podem faltar em um convite?", "Quem convida, a ocasião, data, horário e local.", 3),
    dis("Como o texto pede que o convidado confirme presença?", "Com a secretaria da escola.", 2)
  ]);

  I("informativo-golfinhos", "Texto informativo: os golfinhos", "Texto de divulgação científica: ideias principais, vocabulário e informações.", [
    H.t("Os golfinhos", [
      "Os golfinhos são mamíferos marinhos: respiram ar pelos pulmões, por um orifício no alto da cabeça, e amamentam os filhotes.",
      "Eles vivem em grupos e se comunicam por meio de sons. Também usam sons para se orientar: emitem estalidos, ouvem o eco que volta e, assim, descobrem onde estão os obstáculos e o alimento. Esse recurso se chama ecolocalização.",
      "Os golfinhos são conhecidos por sua inteligência e por brincarem com as ondas dos barcos."
    ])
  ], [
    ob("Os golfinhos são:", "peixes|mamíferos marinhos|répteis|anfíbios", "B"),
    ob("Por onde os golfinhos respiram?", "Pelas guelras|Pela boca|Por um orifício no alto da cabeça|Pelas nadadeiras", "C"),
    ob("O que é a ecolocalização?", "Um tipo de brincadeira|O uso de sons e ecos para se orientar|Uma dança|Um tipo de alimento", "B"),
    ob("Qual é o assunto do 1º parágrafo?", "A inteligência dos golfinhos|As características físicas dos golfinhos|As brincadeiras dos golfinhos|O alimento dos golfinhos", "B"),
    dis("Por que golfinhos não são peixes?", "Porque respiram ar com pulmões e amamentam os filhotes, características dos mamíferos.", 3),
    dis("Como os golfinhos se comunicam?", "Por meio de sons.", 2)
  ], ["Interpretação"]);

  I("entrevista-bibliotecaria", "Entrevista: com a bibliotecária", "Gênero entrevista: perguntas, respostas, entrevistador e entrevistado.", [
    H.t("Uma conversa na biblioteca", [
      "— Há quanto tempo a senhora trabalha na biblioteca?\n— Há doze anos. Entrei logo depois de me formar.",
      "— O que a senhora mais gosta de fazer aqui?\n— Indicar livros. Quando um aluno volta dizendo que adorou a leitura, o meu dia fica completo.",
      "— Qual é o livro mais emprestado?\n— Os de aventura e mistério são os campeões, principalmente entre os alunos do 6º ano.",
      "— Que conselho a senhora dá a quem não gosta de ler?\n— Comece por um assunto de que você goste. Há livro sobre futebol, bichos, ciência… O primeiro passo é achar o livro certo."
    ], "Texto original (entrevista fictícia)")
  ], [
    ob("Quem é a entrevistada?", "Uma professora|Uma bibliotecária|Uma aluna|A diretora", "B"),
    ob("O travessão no texto indica:", "a mudança de quem fala|uma dúvida|uma lista|o fim do texto", "A"),
    ob("Quais livros são os mais emprestados?", "Poesia e teatro|Aventura e mistério|Ciência e história|Dicionários", "B"),
    ob("O conselho dado a quem não gosta de ler é:", "Parar de ler|Começar por um assunto de que goste|Ler só livros longos|Ler apenas na escola", "B"),
    dis("Há quanto tempo a bibliotecária trabalha ali?", "Há doze anos.", 2),
    dis("Que pergunta você faria a ela se pudesse?", "Resposta pessoal. Deve ser uma pergunta adequada ao tema da entrevista.", 2)
  ]);

  I("diario-primeiro-dia", "Diário: o primeiro dia no 6º ano", "Gênero diário: 1ª pessoa, marcas de tempo e sentimentos do narrador.", [
    H.t("Querido diário", [
      "Segunda-feira, 3 de fevereiro",
      "Querido diário,",
      "Hoje foi o meu primeiro dia no 6º ano e confesso que estava com o coração disparado. Na escola nova são muitos professores e as aulas mudam a cada hora. Cheguei a me perder no corredor e entrei na sala errada, mas uma menina chamada Sofia me levou até a certa.",
      "No recreio, dividimos o lanche e descobrimos que nós dois adoramos desenho. Amanhã vamos nos sentar juntos!",
      "Acho que o medo era maior do que o motivo.\nAté amanhã,\nLeo"
    ])
  ], [
    ob("O diário é escrito em qual pessoa?", "1ª pessoa|2ª pessoa|3ª pessoa|não há marca de pessoa", "A"),
    ob("Que sentimento Leo tinha no início do dia?", "Raiva|Nervosismo|Tédio|Orgulho", "B"),
    ob("Quem ajudou Leo a achar a sala?", "A professora|O diretor|Sofia|Um colega do 5º ano", "C"),
    ob("Que gosto Leo e Sofia têm em comum?", "Futebol|Música|Desenho|Leitura", "C"),
    dis("O que significa a frase “o medo era maior do que o motivo”?", "Que ele sentiu mais medo do que a situação justificava; no fim, foi tudo bem.", 3),
    dis("Por que o diário começa com data e a expressão “Querido diário”?", "Porque o diário registra o dia a dia e se dirige a um “amigo” imaginário.", 2)
  ]);

  I("cordel-jegue", "Cordel: o jegue cantador", "Literatura de cordel: sextilha, rimas, cenário e linguagem.", [
    H.poema("O jegue cantador", "No sertão vivia um jegue\nque adorava cantar,\ntinha voz de trovoada\ne fazia o povo dançar;\nmas se a sanfona falhava,\nele parava de zurrar.", "Texto original em sextilha, no estilo do cordel"),
    H.te("Para saber mais", ["O **cordel** é um tipo de poesia popular nordestina, vendida em folhetos pendurados em cordões. Costuma ter versos rimados e ilustrações de xilogravura.", "A **sextilha** é a estrofe de seis versos; rimam o 2º, o 4º e o 6º."])
  ], [
    ob("Onde se passa a história?", "No litoral|No sertão|Na cidade|Na floresta", "B"),
    ob("Que palavras rimam no poema?", "cantar, dançar e zurrar|jegue, sanfona e povo|trovoada, sertão e jegue|voz, povo e ele", "A"),
    ob("A estrofe tem seis versos. Ela é uma:", "quadra|sextilha|décima|trova", "B"),
    ob("O que o jegue fazia quando a sanfona falhava?", "Cantava mais alto|Parava de zurrar|Saía correndo|Dançava", "B"),
    dis("A voz do jegue é comparada a quê? O que isso sugere?", "A uma trovoada; sugere uma voz forte e alta.", 3),
    dis("Que característica do cordel você percebe neste poema?", "Rimas, ambientação no sertão e linguagem simples e popular.", 3)
  ], ["Interpretação", "Literatura"]);

  I("cronica-primeiro-dia", "Crônica: a cadeira errada", "Crônica de humor: narrador, cenas do cotidiano e final surpreendente.", [
    H.t("A cadeira errada", [
      "No primeiro dia do 6º ano, cheguei cedo, escolhi uma cadeira no fundo e me sentei, orgulhoso de ter conseguido o melhor lugar da sala. Aos poucos, os colegas foram chegando e olhando para mim de um jeito estranho.",
      "Só quando a professora entrou foi que percebi: eu estava na sala do 7º ano. Saí com a mochila abraçada ao peito e as orelhas ardendo, enquanto a turma inteira ria. Mas a professora me acompanhou até a minha sala, piscou e disse: “Todo mundo erra no primeiro dia. Eu errei no meu”.",
      "Hoje, quando vejo um aluno novo perdido no corredor, lembro da minha cadeira errada e lhe mostro o caminho."
    ])
  ], [
    ob("O narrador do texto é:", "uma professora|um aluno do 6º ano|um aluno do 7º ano|a diretora", "B"),
    ob("Qual foi o erro do narrador?", "Esqueceu a mochila.|Entrou na sala errada.|Chegou atrasado.|Perdeu a aula.", "B"),
    ob("A expressão “as orelhas ardendo” indica:", "frio|vergonha|raiva|fome", "B"),
    ob("Qual é a atitude do narrador ao final?", "Ajuda alunos novos perdidos.|Tem medo do corredor.|Conta a todos o erro.|Evita a escola.", "A"),
    dis("O que a professora quis dizer com “Eu errei no meu”?", "Que ela também errou no primeiro dia: ela quis tranquilizar o aluno.", 3),
    dis("Que lição a crônica deixa?", "Resposta pessoal. Exemplo: errar é normal e ajudar o outro torna a experiência melhor.", 3)
  ]);

  I("biografia-santos-dumont", "Biografia: Santos Dumont", "Biografia: datas, ordem dos fatos e informações principais.", [
    H.t("Santos Dumont, o aviador brasileiro", [
      "Alberto Santos Dumont nasceu em 20 de julho de 1873, em Palmira, hoje cidade de Santos Dumont, em Minas Gerais. Filho de um fazendeiro de café, desde menino gostava de mecânica e de inventar.",
      "Mudou-se para Paris, onde construiu balões e dirigíveis. Em 23 de outubro de 1906, o seu avião, o 14-Bis, voou cerca de 60 metros diante do público, e o feito ficou famoso no mundo.",
      "Santos Dumont morreu em 23 de julho de 1932, em Guarujá, São Paulo. Muitos brasileiros o consideram o “pai da aviação”."
    ], "Texto informativo, baseado em dados históricos")
  ], [
    ob("Santos Dumont nasceu em:", "Paris|Palmira (MG)|Guarujá (SP)|Rio de Janeiro", "B"),
    ob("O 14-Bis é:", "um balão|um avião|um dirigível|um livro", "B"),
    ob("Em que ano ocorreu o voo do 14-Bis?", "1873|1906|1932|1903", "B"),
    ob("O texto está organizado em ordem:", "alfabética|cronológica (do nascimento à morte)|do fim para o início|aleatória", "B"),
    dis("Que gosto Santos Dumont tinha desde menino?", "Gostava de mecânica e de inventar.", 2),
    dis("Por que ele é chamado de “pai da aviação” por muitos brasileiros?", "Porque seu avião, o 14-Bis, voou diante do público em 1906, um feito de grande repercussão.", 3)
  ], ["Interpretação"]);

  I("informativo-sono", "Texto informativo: por que dormir bem?", "Texto expositivo sobre saúde: ideia principal, causa e consequência.", [
    H.t("Dormir bem faz bem", [
      "Durante o sono, o corpo descansa e o cérebro organiza o que aprendemos durante o dia. Por isso, quem dorme bem consegue prestar mais atenção e lembrar melhor das aulas.",
      "Crianças em idade escolar precisam dormir, em geral, entre 9 e 11 horas por noite, segundo recomendações de entidades de saúde. Para dormir melhor, é bom ter horários regulares e evitar telas antes de deitar.",
      "Já quem dorme pouco costuma ficar cansado, irritado e distraído."
    ])
  ], [
    ob("Qual é a ideia principal do texto?", "O sono é importante para o corpo e para o aprendizado.|Crianças não precisam dormir.|Telas são o melhor remédio.|O sono é só para adultos.", "A"),
    ob("Quanto tempo uma criança em idade escolar deve dormir?", "De 5 a 6 horas|De 7 a 8 horas|De 9 a 11 horas|Mais de 14 horas", "C"),
    ob("O que ajuda a dormir melhor?", "Ficar com o celular na cama|Ter horários regulares|Comer muito à noite|Dormir tarde", "B"),
    ob("Qual é a consequência de dormir pouco?", "Mais atenção|Cansaço, irritação e distração|Mais memória|Mais energia", "B"),
    dis("Como o sono ajuda no aprendizado?", "O cérebro organiza o que foi aprendido, e quem dorme bem presta mais atenção e lembra melhor.", 3),
    dis("Escreva uma dica sua para dormir melhor.", "Resposta pessoal. Exemplo: desligar o celular uma hora antes de dormir.", 2)
  ]);

  I("vocabulario-sinonimos", "Vocabulário: sinônimos e antônimos no texto", "Sentido das palavras no contexto: sinônimos, antônimos e inferência de significado.", [
    H.t("Manhã de inverno", [
      "A manhã estava gelada, mas a cozinha era aconchegante. O pai preparava o café enquanto a menina, ainda sonolenta, abraçava a xícara quente. Do lado de fora, a rua silenciosa parecia dormir; dentro de casa, o rádio tocava baixinho uma canção alegre."
    ])
  ], [
    ob("Um sinônimo de //gelada// no texto é:", "fria|quente|alegre|silenciosa", "A"),
    ob("O antônimo de //quente// é:", "morno|fervendo|frio|alegre", "C"),
    ob("A palavra //aconchegante// significa:", "confortável e acolhedora|barulhenta|escura|vazia", "A"),
    ob("A palavra //sonolenta// indica que a menina estava:", "com sono|com fome|com medo|com raiva", "A"),
    dis("Escreva um antônimo para: alegre, baixinho, silenciosa.", "triste; alto (ou em voz alta); barulhenta.", 2),
    dis("Reescreva a frase trocando //aconchegante// por um sinônimo: “A cozinha era aconchegante.”", "A cozinha era acolhedora (ou confortável).", 2)
  ], ["Interpretação"]);

  I("anuncio-doe-livros", "Anúncio: doe livros", "Texto publicitário: público-alvo, argumentos e verbos no imperativo.", [
    H.t("Anúncio", [
      "**Seu livro parado na estante pode virar aventura para alguém.**",
      "Já leu? Passe adiante! Leve seus livros de histórias, poemas ou ciências até a caixa de doações da biblioteca e ajude a formar novos leitores.",
      "**Doe livros. Distribua histórias.**"
    ], "Texto original (campanha fictícia)")
  ], [
    ob("A finalidade do anúncio é:", "vender livros|convencer o leitor a doar livros|ensinar a ler|contar uma história", "B"),
    ob("A frase “Seu livro parado na estante pode virar aventura” usa:", "uma comparação com //como//|uma metáfora|uma pergunta|uma lista", "B"),
    ob("Qual palavra do texto está no imperativo?", "formar|Passe|parado|leitores", "B"),
    ob("Onde o leitor deve deixar os livros?", "Na escola|Na caixa de doações da biblioteca|No correio|Na padaria", "B"),
    dis("Para quem o anúncio é dirigido?", "Para quem tem livros já lidos em casa e pode doá-los.", 2),
    dis("Crie um slogan curto para uma campanha de doação de brinquedos.", "Resposta pessoal. Exemplo: “Brinquedo parado é alegria esperando para brilhar.”", 2)
  ], ["Interpretação"]);
})();
