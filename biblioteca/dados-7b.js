/* 7º ano · Interpretação de texto (18 materiais). Textos originais, fictícios ou de autores em domínio público. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("7"), ob = H.ob, dis = H.dis;

  function I(id, titulo, resumo, texto, qs, assunto, intro) {
    var b = [H.i(intro || "Leia o texto com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("interpretacao", "i-" + id, titulo, assunto || ["Interpretação"], resumo, b);
  }

  I("conto-misterio", "Conto de mistério: a carta sem selo", "Narrativa de suspense: clima, pistas, ordem dos fatos e inferência.", [
    H.t("A carta sem selo", [
      "Na manhã de segunda-feira, Marta encontrou uma carta debaixo da porta. Não tinha selo, remetente nem endereço: apenas o nome dela, escrito com letra tremida. Dentro, uma única frase: “Olhe atrás do relógio da sala”.",
      "Marta riu, mas, por via das dúvidas, afastou o relógio da parede. Lá estava uma chave pequena e enferrujada. À noite, enquanto o irmão dormia, ela experimentou a chave em todas as gavetas da casa, até que uma, a do velho armário do avô, se abriu. Dentro havia um caderno com o desenho de um mapa e uma inscrição: “Para quem tiver coragem de procurar”."
    ])
  ], [
    ob("O que havia atrás do relógio?", "Uma carta|Uma chave|Um mapa|Um caderno", "B"),
    ob("A carta não tinha:", "o nome de Marta|uma frase|selo, remetente nem endereço|letra", "C"),
    ob("Por que Marta afastou o relógio, mesmo rindo?", "Por via das dúvidas|Por ordem do avô|Porque tinha medo do irmão|Porque queria limpar", "A"),
    ob("O que Marta encontrou no armário do avô?", "Uma chave|Um caderno com mapa|Uma foto|Dinheiro", "B"),
    dis("Que elementos criam clima de mistério no texto?", "A carta anônima com letra tremida, a frase enigmática, a chave enferrujada e a inscrição final.", 3),
    dis("Que hipótese você levanta sobre quem enviou a carta? Justifique.", "Resposta pessoal. Aceitar hipóteses coerentes com os indícios do texto (por exemplo, alguém ligado ao avô).", 4)
  ], ["Interpretação", "Literatura"]);

  I("cronica-vizinho", "Crônica: o vizinho do 302", "Crônica urbana: narrador, humor, mudança de sentimento e linguagem.", [
    H.t("O vizinho do 302", [
      "Durante um ano, ouvi o vizinho do 302 estudar violino às sete da noite. As notas saíam arranhadas, como gato preso em portão. Cheguei a fantasiar bilhetes anônimos, todos educados, todos furiosos.",
      "Numa terça-feira, o silêncio chegou. Às sete, nada. Às oito, nada. Na quarta, uma placa de “aluga-se” no prédio: ele havia se mudado. Fiquei olhando para a parede, esperando o violino que nunca mais viria.",
      "Descobri que a gente se acostuma até com o que reclama. E que o silêncio, às vezes, é só uma forma elegante de saudade."
    ])
  ], [
    ob("O narrador conta a história em:", "1ª pessoa|2ª pessoa|3ª pessoa|não há narrador", "A"),
    ob("A expressão “como gato preso em portão” é uma:", "comparação|metáfora|personificação|ironia", "A"),
    ob("No final, o narrador sente:", "alívio|raiva|saudade|medo", "C"),
    ob("A placa de “aluga-se” indica que:", "o vizinho se mudou|o prédio fechou|o narrador se mudou|havia uma festa", "A"),
    dis("Explique a frase final: “o silêncio, às vezes, é só uma forma elegante de saudade”.", "O silêncio deixado pelo vizinho passou a ser sentido como falta (saudade), mostrando que o narrador se afeiçoou ao que antes o incomodava.", 4),
    dis("O que mudou no sentimento do narrador entre o começo e o fim do texto?", "No começo, irritação com o barulho; no fim, saudade do violino.", 3)
  ]);

  I("noticia-compostagem", "Notícia: escola reduz lixo com compostagem", "Notícia: lide, fonte, fato e opinião; leitura de dados e de citações.", [
    H.t("Escola cria composteira e reduz o lixo orgânico", [
      "A Escola Municipal Vale Verde instalou, em março, uma composteira no pátio para transformar restos de frutas e legumes da merenda em adubo. O projeto foi proposto pelos alunos do 7º ano durante as aulas de Ciências.",
      "“No começo, ninguém acreditava que ia dar certo”, disse a aluna Júlia Prado, de 12 anos. Segundo a coordenadora, Helena Matos, o volume de lixo que a escola enviava para coleta diminuiu depois da iniciativa.",
      "O adubo produzido será usado na horta escolar, onde já crescem alface e cebolinha. A escola pretende ensinar o método a famílias do bairro no segundo semestre."
    ], "Texto original, criado para esta atividade (fictício)")
  ], [
    ob("Qual é o fato central da notícia?", "A escola instalou uma composteira.|A escola abriu uma horta.|Os alunos viajaram.|A coordenadora mudou de escola.", "A"),
    ob("Quem propôs o projeto?", "A coordenadora|Alunos do 7º ano|A prefeitura|Os moradores", "B"),
    ob("O que será feito com o adubo?", "Será vendido.|Será usado na horta escolar.|Será descartado.|Será doado ao bairro apenas.", "B"),
    ob("Em “Segundo a coordenadora…”, a expressão indica:", "a opinião do jornalista|a fonte da informação|uma dúvida|uma ordem", "B"),
    dis("Que trecho expressa a opinião de uma pessoa, e não um fato? Explique.", "“No começo, ninguém acreditava que ia dar certo”: é a impressão da aluna, não um fato verificável.", 3),
    dis("Que outro título você daria à notícia?", "Resposta pessoal. Exemplo: “Restos da merenda viram adubo em escola municipal”.", 2)
  ]);

  I("reportagem-morcegos", "Reportagem: os morcegos", "Texto expositivo: informações, sequência e divulgação científica.", [
    H.t("Os morcegos não são vilões", [
      "Os morcegos são os únicos mamíferos capazes de voar de verdade. Existem mais de mil espécies, e a maioria é ativa à noite.",
      "Muitas usam a ecolocalização: emitem sons, ouvem o eco e, assim, descobrem onde estão os obstáculos e as presas. Boa parte das espécies se alimenta de insetos e de frutos. Por isso, ajudam a controlar insetos e a espalhar sementes, o que contribui para a regeneração de florestas.",
      "Poucas espécies se alimentam de sangue, e quase nunca de humanos. Ainda assim, os morcegos são vítimas de muito medo e de lendas."
    ], "Texto informativo, baseado em dados da biologia")
  ], [
    ob("Os morcegos são:", "aves|mamíferos voadores|insetos|répteis", "B"),
    ob("A ecolocalização serve para:", "dormir|se orientar e localizar presas pelo eco|atrair frutas|se esconder", "B"),
    ob("Por que os morcegos são importantes para as florestas?", "Produzem luz.|Espalham sementes.|Comem árvores.|Mudam o clima.", "B"),
    ob("A palavra //vilões//, no título, sugere que:", "os morcegos são perigosos|eles costumam ser vistos de forma injusta|eles são raros|eles dormem de dia", "B"),
    dis("Que ideia o texto quer combater?", "A de que os morcegos são perigosos ou maus.", 2),
    dis("Cite duas funções dos morcegos na natureza.", "Controlam insetos e espalham sementes (e, em algumas espécies, polinizam).", 2)
  ]);

  I("artigo-intervalo", "Artigo de opinião: intervalo sem telas?", "Tese, argumentos e contra-argumentos em um texto opinativo.", [
    H.t("Intervalo sem telas?", [
      "Há quem queira proibir os celulares durante o intervalo. Defendo, porém, que a escola deveria apenas organizar seu uso, sem proibi-lo por completo.",
      "É verdade que o recreio é o único momento em que muitos estudantes conversam pessoalmente e se movimentam. Mas proibir sem explicar apenas leva o uso para o banheiro e para a mochila. Se a escola combinar regras com os alunos, como áreas livres de telas e horários definidos, a convivência melhora e o celular deixa de ser o centro da atenção.",
      "Portanto, mais importante que proibir é educar para o uso equilibrado."
    ])
  ], [
    ob("A tese do autor é que:", "o celular deve ser proibido no intervalo|o uso deve ser organizado, e não proibido|o celular deve ser liberado sem regras|o recreio deve acabar", "B"),
    ob("Qual trecho faz uma concessão (reconhece o outro lado)?", "“É verdade que o recreio é o único momento…”|“Defendo, porém…”|“Portanto…”|“Há quem queira…”", "A"),
    ob("A palavra //Portanto//, no último parágrafo, introduz:", "uma oposição|uma conclusão|um exemplo|uma dúvida", "B"),
    ob("Que solução o autor propõe?", "Regras combinadas com os alunos|Proibição total|Liberação total|Dar mais tempo de aula", "A"),
    dis("Cite um argumento do autor contra a proibição total.", "A proibição sem explicação apenas leva o uso para o banheiro e para a mochila.", 3),
    dis("Você concorda com o autor? Justifique em até cinco linhas.", "Resposta pessoal, com posicionamento claro e ao menos um argumento.", 6)
  ], ["Interpretação", "Redação"]);

  I("carta-leitor", "Carta do leitor: lixeiras na praça", "Carta do leitor: reclamação, argumentação e linguagem formal.", [
    H.t("Carta do leitor", [
      "Sr. Editor,",
      "Moro há dez anos próximo à Praça das Palmeiras e escrevo para registrar um problema: não há lixeiras suficientes no local. Aos fins de semana, com a praça cheia de famílias, o lixo se acumula no chão e se espalha pelas ruas.",
      "Solicito que a prefeitura instale mais lixeiras e organize a coleta, para manter limpo um espaço tão querido pela comunidade.",
      "Atenciosamente,\nCarlos Almeida"
    ], "Texto original (carta fictícia)")
  ], [
    ob("O objetivo do autor é:", "elogiar a prefeitura|reclamar de um problema e pedir uma solução|contar uma história|convidar para um evento", "B"),
    ob("A saudação inicial “Sr. Editor” indica:", "linguagem formal|linguagem de gíria|um poema|uma receita", "A"),
    ob("Qual é o problema apontado?", "Falta de lixeiras na praça|Falta de luz|Barulho|Falta de bancos", "A"),
    ob("A expressão “Atenciosamente” é:", "saudação|despedida formal|assinatura|data", "B"),
    dis("Que pedido o autor faz?", "Que a prefeitura instale mais lixeiras e organize a coleta.", 2),
    dis("Por que a linguagem da carta é formal?", "Porque ela se dirige a um jornal e a uma autoridade, e não a um amigo.", 3)
  ]);

  I("poema-cancao-exilio", "Poema: Canção do Exílio", "Poema romântico: eu lírico, saudade, comparação e rima.", [
    H.poema("Canção do exílio", "Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.\n\nNosso céu tem mais estrelas,\nNossas várzeas têm mais flores,\nNossos bosques têm mais vida,\nNossa vida mais amores.", "Gonçalves Dias (1823–1864), 1843, trecho")
  ], [
    ob("O eu lírico fala de sua terra com:", "desprezo|saudade e orgulho|medo|indiferença", "B"),
    ob("No verso “Não gorjeiam como lá”, //lá// refere-se a:", "terra distante|a pátria do eu lírico, de onde ele sente falta|um bosque|uma cidade", "B"),
    ob("A 2ª estrofe compara:", "o céu e a vida da terra natal com os de outro lugar|o dia e a noite|o campo e a cidade|a escola e a casa", "A"),
    ob("A estrofe 1 é composta por:", "uma quadra (4 versos)|uma sextilha (6 versos)|um terceto|um dístico", "A"),
    dis("Que elementos da natureza o poema exalta?", "Palmeiras, sabiá, aves, céu, estrelas, várzeas, flores e bosques.", 3),
    dis("O que sugere a ideia de “exílio” no título?", "Que o eu lírico está longe da pátria e sente falta dela.", 3)
  ], ["Interpretação", "Literatura"]);

  I("teatro-julgamento-lapis", "Texto teatral: o julgamento do lápis", "Texto teatral: falas, rubricas, personagens e cena.", [
    H.t("O julgamento do lápis", [
      "**Personagens:** JUIZ (a Régua); LÁPIS (réu); BORRACHA (acusadora); CADERNO (testemunha).",
      "**Cena:** a mesa de uma sala de aula, à noite. As personagens conversam em voz baixa.",
      "BORRACHA (apontando): Este lápis escreve tanta coisa errada que eu vivo cansada de apagar!",
      "LÁPIS (indignado): Errar faz parte de aprender. Sem erro, ninguém usaria a borracha.",
      "CADERNO (tímido): Eu sou testemunha: ele também escreve poemas lindos. Só que ninguém os vê.",
      "JUIZ (batendo o martelo): Sentença: o lápis continua escrevendo, e a borracha, apagando. Cada um com o seu ofício."
    ], "Texto original")
  ], [
    ob("O texto é:", "uma notícia|um texto teatral|um poema|uma carta", "B"),
    ob("As indicações entre parênteses (apontando, indignado) são:", "falas|rubricas|títulos|rimas", "B"),
    ob("O que a Borracha reclama?", "Do lápis escrever errado|Do juiz|Da mesa|Do caderno", "A"),
    ob("A sentença do Juiz significa:", "o lápis é culpado|cada um tem sua função e todos são necessários|a borracha vai embora|o caderno decide", "B"),
    dis("Que lição o texto transmite?", "Errar faz parte de aprender; apagar e escrever são tarefas complementares.", 3),
    dis("Escreva mais uma fala para o Caderno, no mesmo estilo.", "Resposta pessoal. Verifique rubrica e coerência com a cena.", 3)
  ], ["Interpretação", "Literatura"]);

  I("tirinha-sem-sinal", "Tirinha em texto: sem sinal", "Leitura de HQ descrita: quadros, balões e humor.", [
    H.t("Tirinha (descrição dos quadros)", [
      "**Quadro 1:** Dois amigos estão sentados no banco da praça, cada um olhando para o próprio celular.",
      "**Quadro 2:** Um deles ergue o aparelho e diz: “Estou sem sinal!”.",
      "**Quadro 3:** O outro responde: “Que azar! Vamos andar até achar sinal?”.",
      "**Quadro 4:** Os dois, de pé, caminham lado a lado; o primeiro pensa: “Foi a melhor conversa da semana”."
    ], "Texto original (descrição de tirinha fictícia)")
  ], [
    ob("O humor da tirinha nasce de:", "uma briga|a falta de sinal ter provocado uma conversa|um erro de português|uma piada de adivinhação", "B"),
    ob("A fala em pensamento, no quadro 4, aparece em:", "balão de fala|balão de pensamento|legenda|título", "B"),
    ob("Os dois amigos, no início, estão:", "conversando|cada um no seu celular|jogando bola|dormindo", "B"),
    ob("A crítica da tirinha é dirigida a:", "o uso excessivo de celular que isola as pessoas|a falta de praças|a internet|o clima", "A"),
    dis("Por que “Foi a melhor conversa da semana” é um desfecho irônico?", "Porque a falta de sinal, que seria um problema, levou os amigos a conversar pessoalmente.", 3),
    dis("Crie um quinto quadro para a tirinha.", "Resposta pessoal, coerente com o desfecho.", 3)
  ]);

  I("entrevista-atleta", "Entrevista: uma jovem atleta de vôlei", "Entrevista: perguntas e respostas, voz do entrevistado e informações.", [
    H.t("Entrevista com a levantadora Bia", [
      "— Como começou sua história no vôlei?\n— Aos nove anos, quando minha escola abriu uma turma de iniciação. Eu era a menor da quadra.",
      "— Qual é o maior desafio?\n— Conciliar treino e estudo. Eu só treino se estiver com a lição em dia. Foi um combinado com meus pais.",
      "— Que conselho você dá para quem sonha com o esporte?\n— Comece pelo prazer de jogar. Resultados vêm com o tempo, mas a diversão tem que estar presente desde o primeiro dia."
    ], "Texto original (entrevista fictícia)")
  ], [
    ob("Com que idade Bia começou no vôlei?", "Seis anos|Nove anos|Doze anos|Quinze anos", "B"),
    ob("O combinado com os pais é:", "treinar só com a lição em dia|treinar todos os dias|não estudar à noite|jogar só aos domingos", "A"),
    ob("O conselho de Bia é:", "treinar mais que todos|começar pelo prazer de jogar|desistir se perder|evitar o estudo", "B"),
    ob("O travessão no texto serve para:", "marcar a mudança de quem fala|indicar dúvida|encerrar o texto|listar", "A"),
    dis("Que dificuldade Bia enfrenta?", "Conciliar o treino com o estudo.", 2),
    dis("Que pergunta você acrescentaria à entrevista?", "Resposta pessoal, adequada ao tema.", 2)
  ]);

  I("blog-viagem", "Blog de viagem: um dia em Paraty", "Relato de viagem: 1ª pessoa, descrição de lugar e opinião.", [
    H.t("Diário de bordo: um dia em Paraty", [
      "Acordei cedo e fui direto ao centro histórico. As ruas de pedra, irregulares, davam a impressão de que o tempo tinha parado. Os casarões brancos, com portas e janelas coloridas, pareciam postais.",
      "Almocei peixe fresco perto do cais e, à tarde, fiz um passeio de barco por ilhas de águas verdes. Voltei com o rosto queimado de sol e a certeza de que um dia é pouco para tanta beleza.",
      "Dica do blog: leve calçados confortáveis. A pedra é bonita, mas escorregadia."
    ], "Texto original")
  ], [
    ob("O texto está escrito em:", "1ª pessoa|3ª pessoa|2ª pessoa do plural|não há pessoa definida", "A"),
    ob("A expressão “pareciam postais” é:", "uma comparação|uma metáfora|uma ironia|um exagero", "A"),
    ob("Qual é a dica do blog?", "Levar calçados confortáveis|Viajar de barco|Almoçar cedo|Evitar o centro", "A"),
    ob("A finalidade do texto é:", "relatar a experiência e orientar o leitor|vender passagens|ensinar a pescar|dar uma notícia", "A"),
    dis("Que impressões do lugar o autor transmite?", "Beleza, sensação de tempo parado, cores, águas verdes, tranquilidade.", 3),
    dis("Por que o autor diz que “um dia é pouco para tanta beleza”?", "Porque gostou tanto do lugar que gostaria de ficar mais tempo.", 2)
  ]);

  I("ciencia-ceu-azul", "Divulgação científica: por que o céu é azul?", "Texto de divulgação científica: pergunta-título, explicação e vocabulário.", [
    H.t("Por que o céu é azul?", [
      "A luz do Sol parece branca, mas é formada por todas as cores do arco-íris. Ao entrar na atmosfera, ela encontra moléculas de gases que a espalham em várias direções.",
      "As cores de menor comprimento de onda, como o azul, são espalhadas com muito mais intensidade do que as de maior comprimento, como o vermelho. Por isso, quando olhamos para o céu durante o dia, vemos azul vindo de todas as direções.",
      "No fim da tarde, a luz percorre um caminho maior na atmosfera, e boa parte do azul se perde pelo caminho. Sobram os tons alaranjados e avermelhados do pôr do sol."
    ], "Texto informativo")
  ], [
    ob("A luz do Sol é formada por:", "só azul|todas as cores do arco-íris|só branco|só vermelho", "B"),
    ob("O céu parece azul porque:", "o azul é espalhado com mais intensidade na atmosfera|o céu é pintado|o mar o reflete|o vermelho é mais forte", "A"),
    ob("No pôr do sol, o céu fica avermelhado porque:", "a luz percorre um caminho maior e perde o azul|o Sol muda de cor|há mais nuvens|o mar esquenta", "A"),
    ob("A pergunta no título tem a função de:", "enfeitar|despertar a curiosidade do leitor|encerrar o texto|ensinar uma receita", "B"),
    dis("Explique em uma frase por que vemos o céu azul.", "Porque a atmosfera espalha mais a luz azul do que as outras cores.", 3),
    dis("Que outra pergunta de ciência você gostaria de ver respondida em um texto como esse?", "Resposta pessoal.", 2)
  ]);

  I("propaganda-agua", "Propaganda: economize água", "Texto publicitário: slogan, recursos de persuasão e público.", [
    H.t("Campanha", [
      "**Água é vida. Cuide de cada gota.**",
      "Uma torneira pingando pode desperdiçar muitos litros em um dia. Feche a torneira ao escovar os dentes, tome banhos curtos e conserte vazamentos.",
      "**Pequenos gestos, um grande futuro.**"
    ], "Texto original (campanha fictícia)")
  ], [
    ob("A finalidade do texto é:", "vender um produto|convencer o público a economizar água|contar uma história|ensinar uma receita", "B"),
    ob("Que recurso a frase “Água é vida” utiliza?", "metáfora|comparação|ironia|rima", "A"),
    ob("As palavras //feche, tome, conserte// estão no:", "imperativo|infinitivo|passado|futuro", "A"),
    ob("O slogan “Pequenos gestos, um grande futuro” sugere que:", "ações simples somadas têm grande efeito|o futuro é pequeno|só grandes ações importam|não há solução", "A"),
    dis("A quem a propaganda é dirigida?", "A todas as pessoas, em especial aos moradores e usuários de água.", 2),
    dis("Crie um slogan para uma campanha sobre economia de energia.", "Resposta pessoal. Exemplo: “Apague a luz e acenda o futuro.”", 2)
  ]);

  I("mito-eco-narciso", "Mito grego: Eco e Narciso", "Mito: explicação de fenômenos, enredo e valor simbólico.", [
    H.t("Eco e Narciso", [
      "Segundo a mitologia grega, Eco era uma ninfa que falava sem parar. A deusa Hera, irritada, castigou-a: dali em diante, ela só poderia repetir as últimas palavras que ouvisse.",
      "Um dia, Eco se apaixonou por Narciso, um jovem belíssimo e vaidoso. Quando tentou falar com ele, só conseguiu repetir o que ele dizia. Narciso a rejeitou e Eco, com o coração partido, se escondeu nas montanhas até restar apenas sua voz, que ainda hoje responde aos gritos: o eco.",
      "Narciso foi castigado: ao se inclinar sobre um lago, apaixonou-se pela própria imagem. Preso à beleza do reflexo, deixou-se definhar e, no lugar onde morreu, nasceu uma flor, o narciso."
    ], "Reconto de mito da mitologia grega")
  ], [
    ob("O mito explica a origem de:", "do eco e da flor narciso|das estrelas|do mar|das montanhas", "A"),
    ob("Eco foi castigada por:", "Zeus|Hera|Narciso|Apolo", "B"),
    ob("Que característica de Narciso o texto destaca?", "A coragem|A vaidade|A generosidade|A timidez", "B"),
    ob("A palavra //definhar// significa:", "crescer|enfraquecer aos poucos|dançar|viajar", "B"),
    dis("Por que Eco só repete as últimas palavras que ouve?", "Por causa do castigo de Hera, que a proibiu de falar por conta própria.", 2),
    dis("Que lição simbólica o mito de Narciso deixa?", "Resposta pessoal. Exemplo: o perigo de ser tão vaidoso a ponto de não enxergar mais ninguém.", 3)
  ], ["Interpretação", "Literatura"]);

  I("biografia-machado", "Biografia: Machado de Assis", "Biografia: datas, ordem cronológica e informações de um autor brasileiro.", [
    H.t("Machado de Assis", [
      "Joaquim Maria Machado de Assis nasceu em 21 de junho de 1839, no Rio de Janeiro. De origem humilde, estudou pouco em escolas formais e aprendeu muito sozinho, lendo e trabalhando como tipógrafo e revisor.",
      "Foi jornalista, contista, poeta, cronista e romancista. Entre suas obras mais conhecidas estão //Memórias Póstumas de Brás Cubas// (1881) e //Dom Casmurro// (1899). Em 1897, foi um dos fundadores e o primeiro presidente da Academia Brasileira de Letras.",
      "Faleceu em 29 de setembro de 1908, no Rio de Janeiro. Hoje, é considerado um dos maiores escritores da língua portuguesa."
    ], "Texto informativo, baseado em dados históricos")
  ], [
    ob("Machado de Assis nasceu:", "em 1839, no Rio de Janeiro|em 1908, em São Paulo|em 1881, em Lisboa|em 1897, em Minas", "A"),
    ob("Qual obra de Machado é citada, de 1881?", "Dom Casmurro|Memórias Póstumas de Brás Cubas|O Cortiço|Iracema", "B"),
    ob("Machado foi:", "presidente da Academia Brasileira de Letras (primeiro)|presidente da República|médico|cantor", "A"),
    ob("A biografia está organizada em ordem:", "cronológica|alfabética|aleatória|do fim para o começo", "A"),
    dis("Como Machado se formou como escritor?", "Aprendeu muito sozinho, lendo e trabalhando como tipógrafo e revisor.", 3),
    dis("Que informação do texto mais chamou sua atenção? Por quê?", "Resposta pessoal.", 3)
  ], ["Interpretação", "Literatura"]);

  I("regras-volei", "Texto instrucional: regras do torneio de vôlei", "Texto injuntivo: verbos, ordem, numeração e linguagem objetiva.", [
    H.t("Regras do torneio de vôlei da escola", [
      "1. Cada equipe terá seis jogadores em quadra e dois reservas.",
      "2. Os jogos terão dois sets de 15 pontos. Em caso de empate, haverá um set de desempate com 10 pontos.",
      "3. Cada equipe deve apresentar a lista de jogadores à comissão até uma hora antes do primeiro jogo.",
      "4. É proibido usar celular durante as partidas.",
      "5. Os casos omissos serão decididos pela comissão organizadora."
    ], "Texto original (regulamento fictício)")
  ], [
    ob("O texto é um:", "poema|regulamento|conto|diário", "B"),
    ob("Quantos jogadores ficam em quadra por equipe?", "Quatro|Cinco|Seis|Oito", "C"),
    ob("A regra 4 expressa:", "uma permissão|uma proibição|uma sugestão|um elogio", "B"),
    ob("Por que o texto usa numeração?", "Para organizar as regras e facilitar a consulta|Para enfeitar|Para contar uma história|Para dar uma notícia", "A"),
    dis("O que acontece em caso de empate?", "Haverá um set de desempate com 10 pontos.", 2),
    dis("Crie uma sexta regra para o regulamento.", "Resposta pessoal, no mesmo estilo e com verbo adequado (deve, é proibido, haverá).", 2)
  ]);

  I("verbete-dicionario", "Verbete de dicionário: como ler", "Gênero verbete: abreviações, acepções, exemplos e classe gramatical.", [
    H.t("Verbete", [
      "**biblioteca** //s.f.// 1. Coleção organizada de livros e outros documentos. 2. Local onde essa coleção é guardada e consultada: //A biblioteca da escola abre às 8h.// 3. Móvel onde se guardam livros. [//Sinôn.//: //livraria//, no sentido 3.]",
      "**emprestar** //v.t.d. e v.t.d.i.// Entregar algo a alguém por tempo determinado, com a obrigação de devolver: //Emprestei o livro ao colega.//"
    ], "Texto original (verbetes elaborados para esta atividade)")
  ], [
    ob("A abreviação //s.f.// significa:", "substantivo feminino|substantivo familiar|verbo final|sufixo final", "A"),
    ob("Quantos significados (acepções) o verbete //biblioteca// traz?", "Um|Dois|Três|Quatro", "C"),
    ob("A abreviação //v.t.d.// indica:", "verbo transitivo direto|verbo transitivo duplo|verbo terminal direto|verbo tônico duplo", "A"),
    ob("O exemplo em itálico serve para:", "mostrar o uso da palavra em uma frase|enfeitar|corrigir erros|indicar a origem da palavra", "A"),
    dis("Para que serve um verbete de dicionário?", "Para informar o significado, a classe gramatical e o uso de uma palavra.", 2),
    dis("Escreva um verbete (definição e exemplo) para a palavra //recreio//.", "Resposta pessoal. Exemplo: “recreio s.m. intervalo entre as aulas: O recreio começa às 10h.”", 3)
  ], ["Interpretação", "Gramática"]);

  I("fato-opiniao", "Fato × opinião", "Distinguir informação verificável de ponto de vista em um texto curto.", [
    H.t("Texto", [
      "A escola Alfa tem 30 salas de aula e 900 alunos. É, sem dúvida, a melhor escola da cidade, porque seus professores são incríveis. Neste ano, a escola ganhou o campeonato municipal de futebol. Na minha opinião, o time é o mais talentoso que já passou por ali."
    ], "Texto original (fictício)")
  ], [
    ob("Qual trecho é um fato?", "“É a melhor escola da cidade.”|“Tem 30 salas de aula e 900 alunos.”|“Seus professores são incríveis.”|“O time é o mais talentoso.”", "B"),
    ob("Qual trecho é opinião?", "“A escola ganhou o campeonato.”|“Tem 900 alunos.”|“Seus professores são incríveis.”|“Tem 30 salas.”", "C"),
    ob("A expressão “na minha opinião” serve para:", "marcar que se trata de ponto de vista|dar uma informação exata|encerrar o texto|citar uma fonte", "A"),
    ob("A expressão “sem dúvida” aqui:", "reforça uma opinião como se fosse fato|indica dúvida|apresenta uma data|corrige um erro", "A"),
    dis("Por que “a melhor escola” é uma opinião?", "Porque depende de critérios e de ponto de vista; não pode ser verificada objetivamente.", 3),
    dis("Reescreva uma opinião do texto de forma que pareça um fato verificável.", "Exemplo: “A escola ganhou o campeonato municipal de futebol deste ano.”", 3)
  ]);
})();
