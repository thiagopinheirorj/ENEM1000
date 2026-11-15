/* 7º ano · Provas (8) e simulados (4). Valor das provas: 10 pontos. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("7"), ob = H.ob, dis = H.dis;

  function P(id, titulo, resumo, texto, qs, assunto) {
    /* distribui a posição da resposta correta nas objetivas, sem alterar qual alternativa é a certa */
    var alvo = [1, 3, 0, 2, 3, 0, 2, 1, 0, 3], k = 0, giro = id.length % 4;
    qs.forEach(function (q) {
      if (!q.alt) return;
      var t = (alvo[k++ % alvo.length] + giro) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    var b = [H.i("**Valor: 10,0 pontos** (1,0 por questão). Leia o(s) texto(s) com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("prova", "p-" + id, titulo, assunto || ["Interpretação", "Gramática"], resumo, b);
  }
  function S(id, titulo, resumo, qs) {
    /* distribui a posição da resposta correta (troca a alternativa certa de lugar com a da posição-alvo) */
    var alvo = [1, 3, 0, 2, 3, 0, 2, 1], giro = parseInt(id, 10) || 0;
    qs.forEach(function (q, i) {
      var t = (alvo[i % alvo.length] + giro) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    Y.m("simulado", "s-" + id, titulo, ["Interpretação", "Gramática"], resumo, [
      H.i("Cada questão tem **uma** alternativa correta. Leia o texto de cada questão antes de responder. Tempo sugerido: 45 minutos."),
      H.qs(qs)
    ], "45 min");
  }
  function c(texto, fonte) { return { ctx: texto, fonte: fonte || "Texto original" }; }

  /* ---------------- PROVAS ---------------- */
  P("diagnostica", "Avaliação diagnóstica · início do 7º ano", "Leitura, locução adjetiva, verbos, mal/mau e produção: ponto de partida do ano.", [
    H.t("O caderno de receitas", [
      "Quando a avó Zélia morreu, deixou para Alice um caderno de receitas de capa gasta. Em cada página, além dos ingredientes, havia pequenos bilhetes: “Não tenha pressa”, “Prove sempre antes de servir”.",
      "Alice nunca fora boa na cozinha, mas começou a testar uma receita por semana. Os primeiros bolos desandaram, os pães queimaram, mas o cheiro de canela passou a encher a casa. Num domingo, a família inteira sentou à mesa e elogiou o bolo de laranja. Alice sorriu: sentia a avó ali, entre as páginas."
    ])
  ], [
    ob("O que a avó deixou para Alice?", "Um livro de poemas|Um caderno de receitas|Uma casa|Um forno", "B"),
    ob("Para que serviam os bilhetes entre as páginas?", "Marcar páginas|Dar conselhos|Anotar preços|Fazer listas de compras", "B"),
    ob("A afirmação “Alice nunca fora boa na cozinha” indica que ela:", "era uma ótima cozinheira|tinha pouca habilidade antes de começar|odiava comer|trabalhava em restaurante", "B"),
    ob("A palavra //desandaram// significa:", "deram errado|cresceram|esfriaram|sumiram", "A"),
    ob("A forma //sentou// está no:", "pretérito perfeito|pretérito imperfeito|presente|futuro", "A"),
    ob("Em “bolo de laranja”, //de laranja// é:", "locução adjetiva|locução adverbial|sujeito|verbo", "A"),
    ob("Complete: “Ela se sentiu ___ por não saber cozinhar.”", "mau|mal|mais|mas", "B"),
    ob("“Alice sorriu: sentia a avó ali” mostra que ela:", "estava com raiva|sentia saudade e carinho|queria vender a casa|estava com medo", "B"),
    dis("Qual é a mensagem principal do texto?", "O carinho e a presença de quem amamos ficam em gestos e lembranças, como as receitas.", 3),
    dis("Escreva um parágrafo (cinco linhas) sobre alguém que lhe ensinou algo importante.", "Resposta pessoal. Verifique coerência, pontuação e ortografia.", 6)
  ]);

  P("1bim", "Prova · 1º bimestre · 7º ano", "Conto, formação de palavras e pronomes.", [
    H.t("O faroleiro", [
      "O faroleiro Tomé vivia sozinho numa ilha, cuidando da luz que guiava os barcos. Numa noite de tempestade, a lâmpada queimou. Sem hesitar, ele acendeu todas as lamparinas da casa e as levou ao alto da torre, formando um círculo de luz.",
      "Pela manhã, um capitão bateu à porta e agradeceu: seguira aquela claridade fraca até o porto. Tomé apenas disse:\n— Luz grande é a que não deixa ninguém perdido."
    ])
  ], [
    ob("Qual era o trabalho de Tomé?", "Pescador|Faroleiro|Capitão|Marinheiro", "B"),
    ob("O que Tomé fez quando a lâmpada queimou?", "Foi dormir|Acendeu lamparinas e as levou ao alto da torre|Pediu ajuda por rádio|Fechou a torre", "B"),
    ob("A frase final de Tomé significa que:", "a luz deve ser muito forte|o importante é ajudar para que ninguém se perca|a torre devia ser maior|ele quer ser reconhecido", "B"),
    ob("Em “ele acendeu todas as lamparinas”, //ele// retoma:", "o capitão|Tomé|o porto|o barco", "B"),
    ob("A palavra //faroleiro// vem de //farol// por derivação:", "prefixal|sufixal|parassintética|por aglutinação", "B"),
    ob("A palavra //claridade// é formada por:", "prefixo|sufixo|justaposição|aglutinação", "B"),
    ob("A forma //acendeu// está no:", "pretérito perfeito|futuro|presente|imperfeito", "A"),
    ob("O verbo //formando// está no:", "infinitivo|gerúndio|particípio|imperativo", "B"),
    dis("Que qualidade de Tomé o texto destaca? Justifique.", "Iniciativa e solidariedade: improvisou uma luz para guiar os barcos.", 3),
    dis("Escreva um final diferente para a história (cinco linhas).", "Resposta pessoal. Verifique coerência com o início.", 6)
  ]);

  P("2bim", "Prova · 2º bimestre · 7º ano", "Notícia, voz passiva, sujeito, predicado e objeto.", [
    H.t("Biblioteca itinerante chega a bairros afastados", [
      "Uma biblioteca itinerante, instalada em uma van adaptada, começou a percorrer bairros afastados da cidade na última segunda-feira. O projeto, idealizado por professores da rede municipal, empresta livros gratuitamente e promove rodas de leitura.",
      "“As crianças ficaram encantadas”, disse a bibliotecária Cláudia Nunes. Nos primeiros dias, mais de cem livros foram emprestados. A van passará por quinze bairros ao longo do ano."
    ], "Texto original, criado para esta atividade (fictício)")
  ], [
    ob("Qual é o fato central da notícia?", "A abertura de uma escola|O início de uma biblioteca itinerante em uma van|A compra de livros|A reforma de uma praça", "B"),
    ob("Quem idealizou o projeto?", "Professores da rede municipal|A bibliotecária|Os moradores|Uma empresa", "A"),
    ob("O que a van faz?", "Vende livros|Empresta livros e promove rodas de leitura|Conserta livros|Entrega comida", "B"),
    ob("“Mais de cem livros foram emprestados” está na voz:", "ativa|passiva|reflexiva|neutra", "B"),
    ob("O sujeito de “A van passará por quinze bairros” é:", "simples|composto|oculto|inexistente", "A"),
    ob("O predicado de “As crianças ficaram encantadas” é:", "verbal|nominal|verbo-nominal|inexistente", "B"),
    ob("Em “empresta livros”, //livros// é:", "objeto direto|objeto indireto|sujeito|predicativo", "A"),
    ob("A palavra //gratuitamente// é advérbio de:", "tempo|lugar|modo|negação", "C"),
    dis("Passe para a voz ativa: “Mais de cem livros foram emprestados.”", "Emprestaram mais de cem livros.", 2),
    dis("Escreva um título alternativo para a notícia.", "Resposta pessoal. Exemplo: “Van leva livros a bairros distantes”.", 3)
  ]);

  P("3bim", "Prova · 3º bimestre · 7º ano", "Texto informativo, pronome relativo, acentuação e modos verbais.", [
    H.t("O ciclo da água", [
      "A água dos rios, lagos e mares evapora com o calor do Sol e sobe para a atmosfera. Lá em cima, o vapor esfria e se transforma em pequenas gotas, que formam as nuvens.",
      "Quando as gotas ficam pesadas, caem em forma de chuva. Parte da água volta aos rios e ao mar; outra parte se infiltra no solo, e o ciclo recomeça."
    ], "Texto informativo")
  ], [
    ob("A ideia principal do texto é:", "A chuva é perigosa.|A água circula entre superfície e atmosfera em um ciclo.|Os mares evaporam por completo.|As nuvens nascem no solo.", "B"),
    ob("O que acontece quando as gotas ficam pesadas?", "Evaporam|Caem em forma de chuva|Congelam|Desaparecem", "B"),
    ob("A palavra //Lá//, no texto, é:", "advérbio de lugar|advérbio de tempo|substantivo|adjetivo", "A"),
    ob("Em “gotas, que formam as nuvens”, //que// é:", "conjunção|pronome relativo|artigo|preposição", "B"),
    ob("A palavra //atmosfera// é:", "oxítona|paroxítona|proparoxítona|monossílaba", "B"),
    ob("O verbo //evapora// está no:", "pretérito|presente do indicativo|futuro|imperativo", "B"),
    ob("A palavra //água// é acentuada por ser:", "paroxítona terminada em ditongo|oxítona|monossílaba|proparoxítona", "A"),
    ob("“Espero que a chuva ___ logo.” (cair)", "cai|caia|caiu|cairá", "B"),
    dis("Explique o ciclo da água em três etapas.", "Evaporação (a água sobe como vapor), condensação (o vapor vira gotas e forma nuvens) e precipitação (as gotas caem como chuva); depois a água volta aos rios, ao mar e ao solo.", 5),
    dis("Escreva cinco linhas explicando por que é importante economizar água.", "Resposta pessoal. Considere escassez, uso consciente e preservação de recursos.", 6)
  ]);

  P("4bim", "Prova · 4º bimestre · 7º ano", "Crônica, concordância, vírgula, mal/mau e voz passiva.", [
    H.t("O ônibus das sete", [
      "Todos os dias, às sete da manhã, o ônibus passava lotado. Eu me espremia entre mochilas e cotovelos, olhando pela janela embaçada. Até que, numa quinta-feira, um senhor de chapéu cedeu o lugar a uma criança, e todos começaram a se ajeitar para abrir espaço.",
      "Foi como se alguém tivesse trocado a música ambiente: as pessoas começaram a conversar, uma mulher distribuiu balas, e o motorista aumentou o rádio. Cheguei à escola atrasado, mas de bom humor."
    ])
  ], [
    ob("Onde se passa a cena?", "Na escola|No ônibus|Na rua|Na padaria", "B"),
    ob("O que mudou na quinta-feira?", "O trânsito|Um gesto de gentileza mudou o clima|O motorista|O horário", "B"),
    ob("“Foi como se alguém tivesse trocado a música ambiente” é:", "comparação|ironia|metáfora|exagero", "A"),
    ob("Em “atrasado, mas de bom humor”, //mas// indica:", "oposição|soma|causa|tempo", "A"),
    ob("“As pessoas ___ a conversar.”", "começou|começaram|começamos|começas", "B"),
    ob("As vírgulas em “Todos os dias, às sete da manhã, o ônibus…” isolam:", "o vocativo|um adjunto adverbial deslocado|um aposto|o sujeito", "B"),
    ob("“Ela chegou de ___ humor, pois perdeu o ônibus.”", "mal|mau|mais|mas", "B"),
    ob("A palavra //ônibus// é:", "oxítona|paroxítona|proparoxítona|monossílaba", "C"),
    dis("Passe para a voz passiva: “Um senhor cedeu o lugar a uma criança.”", "O lugar foi cedido a uma criança por um senhor.", 3),
    dis("Escreva um parágrafo sobre um gesto de gentileza que você viu ou fez.", "Resposta pessoal. Verifique coerência, pontuação e ortografia.", 6)
  ]);

  P("final", "Prova final · 7º ano", "Revisão do ano: carta, derivação, verbos, sujeito/predicado, concordância e produção.", [
    H.t("Carta aos alunos do 6º ano", [
      "Queridos alunos do 6º ano,",
      "Há um ano, também chegamos a esta escola cheios de dúvidas. Hoje, sabemos que não há motivo para tanto medo. Vocês vão se perder pelos corredores, errar de sala e esquecer o horário, mas isso faz parte do começo.",
      "Nosso conselho é simples: perguntem sempre, façam amigos e leiam muito. Os professores estão aqui para ajudar, e nós também.",
      "Um abraço dos alunos do 7º ano."
    ])
  ], [
    ob("O objetivo da carta é:", "reclamar da escola|aconselhar e acolher os novos alunos|vender produtos|dar uma notícia", "B"),
    ob("A expressão “Queridos alunos” é:", "despedida|saudação inicial|data|assinatura", "B"),
    ob("A frase “isso faz parte do começo” significa que:", "os erros iniciais são normais|a escola é difícil|os professores faltam|não vale a pena estudar", "A"),
    ob("Em “errar de sala”, a palavra //errar// está no:", "infinitivo|gerúndio|particípio|passado", "A"),
    ob("A palavra //desconhecido// é formada por derivação:", "prefixal|sufixal|parassintética|por aglutinação", "A"),
    ob("O sujeito de “perguntem sempre” é:", "oculto (vocês)|simples|inexistente|indeterminado", "A"),
    ob("Em “Os professores estão aqui”, o predicado é:", "verbal|nominal|verbo-nominal|inexistente", "A"),
    ob("“Nós e vocês ___ (ser) a escola.”", "é|são|somos|sois", "C"),
    dis("Pontue: “nosso conselho é simples perguntem sempre façam amigos e leiam muito”", "Nosso conselho é simples: perguntem sempre, façam amigos e leiam muito.", 3),
    dis("Escreva uma carta de cinco linhas para um aluno novo da sua escola.", "Resposta pessoal. Verifique estrutura da carta, linguagem adequada e ortografia.", 8)
  ]);

  P("recuperacao-1sem", "Prova de recuperação · 1º semestre · 7º ano", "Prova curta com conteúdos essenciais do semestre.", [
    H.t("O medo de falar em público", [
      "Muita gente sente o coração disparar quando precisa falar diante da turma. As mãos suam, a voz treme e as ideias parecem fugir. Isso é normal e acontece até com quem fala bem.",
      "Algumas dicas ajudam: preparar o que vai dizer, treinar em voz alta e respirar fundo antes de começar. Com a prática, o medo diminui e a fala fica mais segura."
    ], "Texto informativo")
  ], [
    ob("A ideia principal do texto é:", "O medo de falar em público é comum e pode ser reduzido com prática.|Só pessoas tímidas sentem medo.|Falar em público é fácil.|Os professores sentem mais medo.", "A"),
    ob("Que sintomas o texto cita?", "Coração disparado, mãos suadas e voz trêmula|Dor de cabeça e febre|Sono e fome|Raiva e tristeza", "A"),
    ob("Qual é uma das dicas?", "Evitar a turma|Respirar fundo antes de começar|Decorar todas as palavras|Falar rápido", "B"),
    ob("A palavra //Isso//, no 1º parágrafo, retoma:", "o medo e seus sintomas|a turma|o professor|o texto", "A"),
    ob("Em “Com a prática, o medo diminui”, //Com a prática// é:", "adjunto adverbial|sujeito|objeto direto|predicativo", "A"),
    ob("A forma //treinar// está no:", "infinitivo|gerúndio|particípio|passado", "A"),
    ob("O sujeito de “O medo diminui” é:", "simples|composto|oculto|inexistente", "A"),
    ob("Complete: “Ela não é uma pessoa ___, só tímida.”", "má|mal|mau|mais", "A"),
    dis("Escreva uma dica sua para vencer o medo de falar em público.", "Resposta pessoal.", 3),
    dis("Passe para o plural: “O aluno nervoso respirou fundo.”", "Os alunos nervosos respiraram fundo.", 2)
  ]);

  P("leitura", "Avaliação de leitura · poema e relato", "Dois textos sobre a casa da avó: gêneros, linguagem e comparação.", [
    H.poema("Texto I · Casa de vó", "Na casa de vó, o tempo anda devagar,\no relógio tem preguiça de bater as horas;\no bolo esfria na janela, a me esperar,\ne a tarde se desmancha em histórias."),
    H.t("Texto II · Domingo na casa da vovó", "Todo domingo, minha família se reúne na casa da vovó. Ela prepara o almoço desde cedo e, quando chegamos, a casa já está cheirando a feijão e a café. Depois da refeição, os adultos conversam e as crianças brincam no quintal até escurecer.")
  ], [
    ob("O Texto I é:", "um relato|um poema|uma notícia|uma carta", "B"),
    ob("O Texto II é:", "um relato pessoal|um poema|uma receita|um convite", "A"),
    ob("Em “o tempo anda devagar”, há:", "personificação|comparação|ironia|exagero", "A"),
    ob("O que os dois textos têm em comum?", "Falam da casa da avó e da convivência familiar.|Ensinam uma receita.|São escritos por um jornalista.|Anunciam uma festa.", "A"),
    ob("Qual texto usa linguagem mais poética?", "O Texto I|O Texto II|Os dois igualmente|Nenhum", "A"),
    ob("No Texto II, os sentidos que aparecem são:", "olfato (cheiro de feijão e café)|audição apenas|tato apenas|visão apenas", "A"),
    ob("A expressão “a tarde se desmancha em histórias” sugere:", "que a tarde passa enquanto se conversa e se contam histórias|que chove|que o frio chegou cedo|que há uma tempestade", "A"),
    ob("O verbo //prepara// está no:", "presente|passado|futuro|imperativo", "A"),
    dis("Que sensação os dois textos transmitem sobre a casa da avó?", "Acolhimento, tranquilidade e carinho.", 3),
    dis("Escolha um verso ou frase de que você gostou e explique por quê.", "Resposta pessoal.", 3)
  ], ["Interpretação", "Literatura"]);

  /* ---------------- SIMULADOS ---------------- */
  S("1", "Simulado de Língua Portuguesa · 7º ano · nº 1", "Oito questões: gêneros, tema, inferência, figuras, modos verbais, voz passiva e conectivos.", [
    ob("O texto é um:", "poema|convite|notícia|receita", "C", "", c("Um grupo de alunos criou, na semana passada, uma horta no pátio da escola. O espaço produzirá verduras para a merenda.")),
    ob("O tema do texto é:", "o desperdício de alimentos|a importância de dormir bem|o uso de celulares|a poluição do ar", "A", "", c("Todos os dias, toneladas de comida vão para o lixo, enquanto muita gente passa fome. Pequenas atitudes, como planejar compras, ajudam a reduzir o desperdício.")),
    ob("Pelo texto, pode-se concluir que a menina:", "adorou o resultado|ficou decepcionada|estava com sono|não ligou", "B", "", c("A menina olhou o boletim, suspirou e guardou o papel no fundo da mochila, sem mostrar a ninguém.")),
    ob("A expressão “a cidade dormia” é um exemplo de:", "personificação|comparação|ironia|hipérbole", "A", "", c("Passava da meia-noite e a cidade dormia, enquanto só a lua ficava de vigia.")),
    ob("O verbo //venha// está no modo:", "indicativo|subjuntivo|imperativo|infinitivo", "B", "", c("Espero que você venha à minha festa.")),
    ob("Passando para a voz passiva, temos:", "A prova foi corrigida pela professora.|A professora foi corrigida pela prova.|A prova corrigiu a professora.|A professora corrige a prova.", "A", "", c("A professora corrigiu a prova.")),
    ob("O conectivo //contudo// indica:", "causa|oposição|conclusão|tempo", "B", "", c("A equipe treinou muito; contudo, não venceu o torneio.")),
    ob("Qual é o sujeito da frase?", "O cachorro da vizinha|latiu|a noite toda|noite", "A", "", c("O cachorro da vizinha latiu a noite toda."))
  ]);

  S("2", "Simulado de Língua Portuguesa · 7º ano · nº 2", "Oito questões: fato e opinião, intenção do autor, locução adjetiva, pronomes e pontuação.", [
    ob("Qual trecho expressa uma opinião?", "A escola tem 20 salas.|O time é o melhor do mundo.|O jogo começou às 15h.|O placar foi 2 a 1.", "B", "", c("A escola tem 20 salas. O jogo começou às 15h e terminou 2 a 1. O time da casa foi o melhor do mundo.")),
    ob("A intenção do autor é:", "informar sobre o funcionamento da biblioteca|vender livros|contar uma piada|criticar os alunos", "A", "", c("A biblioteca funciona de segunda a sexta, das 8h às 17h. Os livros podem ser emprestados por 15 dias.")),
    ob("Em “casa de campo”, //de campo// é uma:", "locução adverbial|locução adjetiva|oração|conjunção", "B", "", c("Nas férias, passamos uma semana na casa de campo dos meus avós.")),
    ob("O pronome //lhe// refere-se a:", "ao professor|à lição|ao aluno|à turma", "A", "", c("Entreguei ao professor a lição e agradeci-lhe a paciência.")),
    ob("Qual é o antônimo de //corajoso//?", "valente|covarde|forte|esperto", "B", "", c("O menino corajoso enfrentou o medo.")),
    ob("As vírgulas isolam:", "o sujeito|um aposto|o verbo|o predicado", "B", "", c("Machado de Assis, autor de Dom Casmurro, nasceu no Rio de Janeiro.")),
    ob("A palavra //saída// é acentuada porque:", "o í é tônico de um hiato|é proparoxítona|é monossílaba|é oxítona terminada em a", "A", "", c("A saída da escola é às 12h.")),
    ob("“Eu ___ (ir) à biblioteca ontem.”", "vou|fui|irei|iria", "B", "", c("Ontem, eu ___ à biblioteca estudar para a prova."))
  ]);

  S("3", "Simulado de Língua Portuguesa · 7º ano · nº 3", "Oito questões: poema, crônica, sinônimos, advérbio, concordância e ortografia.", [
    ob("Que figura aparece em “o dia amanheceu sorrindo”?", "comparação|personificação|ironia|eufemismo", "B", "", c("O dia amanheceu sorrindo, e a rua inteira acordou de bom humor.")),
    ob("O texto revela que o narrador sentiu:", "saudade|raiva|medo|nenhum sentimento", "A", "", c("Olhei a cadeira vazia do vovô à mesa e senti o peito apertar. O café tinha o mesmo cheiro de sempre; faltava só a risada dele.")),
    ob("Um sinônimo de //enorme// é:", "gigantesco|pequeno|lento|simples", "A", "", c("O elefante é um animal enorme.")),
    ob("A palavra //devagar// é advérbio de:", "tempo|lugar|modo|negação", "C", "", c("Ela caminhava devagar pelo corredor.")),
    ob("Qual forma está correta?", "Os alunos chegou cedo.|Os alunos chegaram cedo.|Os aluno chegaram cedo.|Os alunos chegamos cedo.", "B", "", c("Complete corretamente: “Os alunos ___ cedo.”")),
    ob("A grafia correta é:", "mau humorado|mal humorado|mal-humorado|mau-humor", "C", "", c("Ele acordou ___ e não quis conversar.")),
    ob("O texto é predominantemente:", "narrativo|injuntivo (de instruções)|argumentativo|poético", "B", "", c("Misture a farinha e o açúcar. Junte os ovos e mexa até ficar homogêneo. Leve ao forno por 40 minutos.")),
    ob("A palavra //obrigada// concorda com:", "quem agradece (sujeito feminino)|o ouvinte|o verbo|o objeto", "A", "", c("— Muito obrigada pela ajuda, disse a menina."))
  ]);

  S("4", "Simulado de Língua Portuguesa · 7º ano · nº 4", "Oito questões: biografia, divulgação científica, tese, voz verbal, vírgula e coesão.", [
    ob("Santos Dumont nasceu em:", "Paris|Palmira (MG)|São Paulo|Guarujá", "B", "", c("Alberto Santos Dumont nasceu em 1873, em Palmira, Minas Gerais, e se mudou para Paris.", "Texto informativo")),
    ob("A ideia central é que:", "os insetos são perigosos|as abelhas polinizam e são importantes para a natureza|as flores não precisam de abelhas|o mel é caro", "B", "", c("As abelhas visitam as flores e levam o pólen de uma para outra, o que ajuda as plantas a produzirem frutos.", "Texto informativo")),
    ob("A tese do texto é que:", "o recreio deve acabar|o recreio deve ser mais longo|as aulas devem aumentar|o intervalo é inútil", "B", "", c("Defendo que o recreio deve durar mais. Estudantes descansados aprendem melhor, e a convivência no pátio é parte da formação.")),
    ob("“A bola foi chutada pelo goleiro” está na voz:", "ativa|passiva|reflexiva|neutra", "B", "", c("A bola foi chutada pelo goleiro e saiu pela lateral.")),
    ob("Qual frase tem vírgula correta?", "Pedro, venha aqui.|Pedro venha, aqui.|Pedro venha aqui,|Pedro, venha, aqui.", "A", "", c("Escolha a frase corretamente pontuada.")),
    ob("A palavra //portanto// indica:", "oposição|conclusão|exemplo|tempo", "B", "", c("Estudei muito; portanto, estou confiante.")),
    ob("O pronome //que// retoma:", "o livro|a leitura|a escola|o autor", "A", "", c("O livro que li ontem é uma aventura emocionante.")),
    ob("O verbo //choveu// indica:", "ação de alguém|fenômeno da natureza|estado|desejo", "B", "", c("Choveu muito durante o jogo."))
  ]);
})();
