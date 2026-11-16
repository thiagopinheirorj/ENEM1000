/* 8º ano · Provas (8) e simulados (4). Valor das provas: 10 pontos. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("8"), ob = H.ob, dis = H.dis;

  function P(id, titulo, resumo, texto, qs, assunto) {
    /* distribui a posição da resposta correta nas objetivas, sem alterar qual alternativa é a certa */
    var hash = id.split("").reduce(function (a, ch) { return a + ch.charCodeAt(0); }, 0);
    var alvo = [2, 0, 3, 1, 3, 0, 2, 1, 0, 3], k = hash % 7, giro = hash % 4;
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
    var alvo = [3, 1, 0, 2, 1, 3, 2, 0], giro = parseInt(id, 10) || 0;
    qs.forEach(function (q, i) {
      var t = (alvo[i % alvo.length] + giro) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    Y.m("simulado", "s-" + id, titulo, ["Interpretação", "Gramática"], resumo, [
      H.i("Cada questão tem **uma** alternativa correta. Leia o texto de cada questão antes de responder. Tempo sugerido: 50 minutos."),
      H.qs(qs)
    ], "50 min");
  }
  function c(texto, fonte) { return { ctx: texto, fonte: fonte || "Texto original" }; }

  /* ---------------- PROVAS ---------------- */
  P("diagnostica", "Avaliação diagnóstica · início do 8º ano", "Leitura, sujeito, adjunto, superlativo e produção.", [
    H.t("O peão", [
      "Antes de cada partida de xadrez, vovô Nilo fazia a mesma pergunta: “Qual peça é a mais importante?”. Eu, impaciente, sempre respondia: “A rainha”. Ele sorria e dizia que, no tabuleiro, o peão tem o poder de se transformar em qualquer outra peça.",
      "Hoje, percebo que ele não falava de xadrez: falava de paciência, de começo humilde e de chegar longe devagar."
    ])
  ], [
    ob("Qual pergunta o avô fazia antes das partidas?", "Quem vai ganhar?|Qual peça é a mais importante?|Quanto tempo vamos jogar?|Você está pronto?", "B"),
    ob("Segundo o avô, o peão pode:", "se transformar em qualquer outra peça|nunca avançar|ser capturado sempre|dar ordens", "A"),
    ob("Para o narrador, a frase do avô falava de:", "xadrez apenas|paciência e de começos humildes|rainhas|regras de torneio", "B"),
    ob("O sujeito de “Ele sorria” é:", "oculto|simples (Ele)|composto|inexistente", "B"),
    ob("Em “Hoje, percebo…”, //Hoje// é adjunto adverbial de:", "lugar|tempo|modo|causa", "B"),
    ob("A expressão “a mais importante” indica:", "comparativo de igualdade|superlativo relativo|diminutivo|aumentativo", "B"),
    ob("O predicado de “o peão tem o poder” é:", "verbal|nominal|verbo-nominal|inexistente", "A"),
    ob("As aspas no texto marcam:", "falas citadas|ironia|títulos|palavras estrangeiras", "A"),
    dis("Explique o que o peão representa na fala do avô.", "Representa quem começa de forma humilde, mas pode chegar longe com paciência e perseverança.", 4),
    dis("Escreva um parágrafo sobre um conselho que você recebeu e que mudou sua forma de ver algo.", "Resposta pessoal. Verifique coerência, pontuação e ortografia.", 6)
  ]);

  P("1bim", "Prova · 1º bimestre · 8º ano", "Sujeito, predicado, objetos e adjuntos em um conto curto.", [
    H.t("A caixa de costura", [
      "No porão da casa de praia, Teo encontrou uma caixa de costura cheia de botões de todas as formas. Cada botão guardava uma história: o azul, do casaco do pai; o dourado, do uniforme do avô marinheiro; o de madrepérola, do vestido de casamento da bisavó.",
      "Teo passou a tarde ouvindo a avó contar as histórias e percebeu que cada objeto antigo era, na verdade, uma pequena biblioteca de memórias."
    ])
  ], [
    ob("O que Teo encontrou no porão?", "Uma caixa de costura|Um livro|Um mapa|Um casaco", "A"),
    ob("De quem era o botão dourado?", "Do pai|Do avô marinheiro|Da bisavó|Da avó", "B"),
    ob("A expressão “pequena biblioteca de memórias” é:", "uma comparação com conectivo|uma metáfora|uma ironia|um exagero", "B"),
    ob("O sujeito de “Teo encontrou” é:", "simples|composto|oculto|inexistente", "A"),
    ob("O predicado de “Cada botão guardava uma história” é:", "verbal|nominal|verbo-nominal|inexistente", "A"),
    ob("Em “guardava uma história”, //uma história// é:", "objeto direto|objeto indireto|sujeito|predicativo", "A"),
    ob("Em “No porão da casa de praia”, //No porão// é adjunto adverbial de:", "tempo|lugar|modo|intensidade", "B"),
    ob("A expressão “de madrepérola” é:", "locução adjetiva|locução adverbial|sujeito|objeto", "A"),
    dis("Passe para a voz passiva: “A avó contou as histórias.”", "As histórias foram contadas pela avó.", 2),
    dis("Escreva um parágrafo sobre um objeto que guarda memórias para você.", "Resposta pessoal. Verifique coerência, descrição e ortografia.", 6)
  ]);

  P("2bim", "Prova · 2º bimestre · 8º ano", "Reportagem curta, coordenação (adversativa, conclusiva, alternativa) e concordância.", [
    H.t("Praças em debate", [
      "As praças da cidade estão mudando. Algumas ganharam academias ao ar livre, mas muitas continuam sem bancos ou iluminação. Segundo moradores, falta manutenção; portanto, o uso diminui à noite.",
      "Ou a prefeitura investe mais, ou os espaços públicos perderão a função de convivência."
    ], "Texto original, criado para esta atividade (fictício)")
  ], [
    ob("O tema do texto é:", "o estado de conservação das praças|a falta de escolas|o comércio local|o trânsito", "A"),
    ob("A conjunção //mas// introduz oração coordenada:", "aditiva|adversativa|alternativa|conclusiva", "B"),
    ob("A conjunção //portanto// introduz oração coordenada:", "adversativa|aditiva|conclusiva|explicativa", "C"),
    ob("A estrutura “Ou… ou…” indica:", "escolha entre duas possibilidades|soma|oposição|explicação", "A"),
    ob("“Segundo moradores” indica:", "a fonte da informação|a opinião do autor|uma ordem|um erro", "A"),
    ob("Em “Algumas ganharam academias”, //academias// é:", "objeto direto|objeto indireto|sujeito|predicativo", "A"),
    ob("Qual frase está correta?", "Houveram muitas praças sem iluminação.|Houve muitas praças sem iluminação.|Houveram muita praça sem iluminação.|Houvemos muitas praças sem iluminação.", "B"),
    ob("A palavra //iluminação// é:", "oxítona|paroxítona|proparoxítona|monossílaba", "A"),
    dis("Una em um período coordenado: “A praça é bonita. Falta manutenção.” (oposição)", "A praça é bonita, mas falta manutenção.", 2),
    dis("Escreva um parágrafo sugerindo duas soluções para as praças do seu bairro.", "Resposta pessoal. Verifique propostas claras e conectivos.", 6)
  ]);

  P("3bim", "Prova · 3º bimestre · 8º ano", "Artigo de opinião: tese, concessão e orações subordinadas.", [
    H.t("Esporte na escola", [
      "Defendo que o esporte deveria ocupar mais espaço na escola. Embora as provas e os conteúdos sejam importantes, o corpo também precisa aprender.",
      "Quando a escola oferece atividades esportivas, os alunos que têm dificuldade de atenção costumam melhorar a concentração. Além disso, o esporte ensina a perder, a ganhar e a trabalhar em equipe. Por isso, a escola que valoriza o movimento forma pessoas mais completas."
    ])
  ], [
    ob("A tese do autor é que:", "o esporte deve ocupar mais espaço na escola|as provas devem acabar|o corpo não precisa aprender|o esporte é perigoso", "A"),
    ob("A palavra //Embora// introduz oração subordinada adverbial:", "causal|concessiva|temporal|final", "B"),
    ob("“Quando a escola oferece atividades esportivas” é oração adverbial:", "temporal|condicional|causal|concessiva", "A"),
    ob("Em “os alunos que têm dificuldade de atenção”, a oração destacada é:", "adjetiva restritiva|adjetiva explicativa|substantiva|adverbial", "A"),
    ob("Em “Defendo que o esporte deveria ocupar…”, a oração iniciada por //que// é:", "substantiva objetiva direta|adjetiva|adverbial|coordenada", "A"),
    ob("A expressão //Por isso// indica:", "oposição|conclusão|exemplo|dúvida", "B"),
    ob("O verbo //têm// (de “que têm”) está na:", "3ª pessoa do plural, com acento|3ª pessoa do singular|1ª pessoa do plural|2ª pessoa", "A"),
    ob("A expressão //Além disso// indica:", "adição de argumento|oposição|conclusão|tempo", "A"),
    dis("Una com conjunção de condição: “Você pratica esporte. Você ganha disposição.”", "Se você praticar esporte, ganhará disposição.", 2),
    dis("Escreva um parágrafo defendendo mais tempo de educação física na escola.", "Resposta pessoal. Verifique tese, argumento e conectivos.", 6)
  ]);

  P("4bim", "Prova · 4º bimestre · 8º ano", "Poema romântico, figuras de linguagem, regência e crase.", [
    H.poema("Canção do exílio", "Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.\n\nNosso céu tem mais estrelas,\nNossas várzeas têm mais flores,\nNossos bosques têm mais vida,\nNossa vida mais amores.", "Gonçalves Dias (1823–1864), 1843, trecho")
  ], [
    ob("O sentimento do eu lírico é de:", "ódio|saudade e orgulho da pátria|medo|indiferença", "B"),
    ob("“Nosso céu tem mais estrelas” estabelece uma:", "comparação com outro lugar|oposição sem sentido|pergunta|ordem", "A"),
    ob("O poema pertence ao:", "Barroco|Romantismo|Realismo|Modernismo", "B"),
    ob("O verso “Nossa vida mais amores” apresenta:", "elipse do verbo //tem//|erro de concordância|ironia|antítese", "A"),
    ob("“Assisti ___ jogo.” (ver)", "o|ao|do|no", "B"),
    ob("“Fui ___ biblioteca.”", "a|à|ao|há", "B"),
    ob("“Prefiro poesia ___ prosa.”", "que|a|do que|ao", "B"),
    ob("“Aspiro ___ uma vaga.”", "a|de|em|por", "A"),
    dis("O que a oposição entre “lá” e “aqui” sugere sobre o eu lírico?", "Que ele está longe de sua terra e valoriza o que tem “aqui” em comparação com o “lá”.", 3),
    dis("Escreva dois versos de paródia a partir de “Minha terra tem palmeiras”, sobre a escola.", "Resposta pessoal. Exemplo: “Minha escola tem recreio, / onde canta o sinal.”", 4)
  ], ["Interpretação", "Literatura"]);

  P("final", "Prova final · 8º ano", "Revisão do ano: texto argumentativo, sujeito, predicado, orações e produção.", [
    H.t("A escola que eu quero", [
      "Quando penso na escola ideal, imagino um lugar onde se aprende com prazer. Não que as provas sejam inúteis, mas gostaria de ver mais projetos, mais conversas e mais espaço para a criatividade.",
      "Os alunos, que passam boa parte do dia na escola, precisam ser ouvidos. Portanto, os professores e a direção deveriam abrir mais canais de diálogo."
    ])
  ], [
    ob("A ideia central do texto é:", "o autor quer abolir as provas|o autor defende uma escola com mais projetos e diálogo|o autor critica professores|o autor prefere estudar sozinho", "B"),
    ob("A expressão “Não que as provas sejam inúteis” é:", "uma concessão|uma ordem|uma pergunta|um erro", "A"),
    ob("Em “Os alunos, que passam boa parte do dia na escola, precisam ser ouvidos”, a oração destacada é:", "adjetiva explicativa|adjetiva restritiva|substantiva|adverbial", "A"),
    ob("O conectivo //Portanto// indica:", "oposição|conclusão|causa|exemplo", "B"),
    ob("O sujeito de “deveriam abrir” é:", "os professores e a direção (composto)|oculto|inexistente|indeterminado", "A"),
    ob("Em “Quando penso na escola ideal”, a oração é:", "adverbial temporal|adverbial causal|substantiva|adjetiva", "A"),
    ob("O predicado de “Os alunos precisam ser ouvidos” é:", "verbal|nominal|verbo-nominal|inexistente", "A"),
    ob("A forma //ser ouvidos// indica voz:", "ativa|passiva|reflexiva|neutra", "B"),
    dis("Pontue: “os alunos que estudam bastante merecem reconhecimento mas ninguém lembra”", "Os alunos que estudam bastante merecem reconhecimento, mas ninguém se lembra deles (ou: mas ninguém lembra).", 3),
    dis("Escreva uma carta de cinco linhas à direção da escola, com uma sugestão.", "Resposta pessoal. Verifique estrutura da carta, linguagem formal e argumento.", 8)
  ]);

  P("recuperacao-1sem", "Prova de recuperação · 1º semestre · 8º ano", "Prova curta com conteúdos essenciais: sujeito, predicado, objeto e crase.", [
    H.t("A feira de ciências", [
      "Os alunos do 8º ano organizaram uma feira de ciências na quadra da escola. Cada grupo apresentou um experimento. A professora Lúcia e os monitores acompanharam todo o trabalho.",
      "À tarde, as famílias visitaram os estandes e elogiaram os alunos. Foi um dia de muito aprendizado."
    ])
  ], [
    ob("O sujeito de “organizaram” é:", "Os alunos do 8º ano|a quadra|uma feira|o experimento", "A"),
    ob("“A professora Lúcia e os monitores acompanharam” tem sujeito:", "simples|composto|oculto|inexistente", "B"),
    ob("Em “apresentou um experimento”, //um experimento// é:", "objeto direto|objeto indireto|sujeito|predicativo", "A"),
    ob("Em “elogiaram os alunos”, o verbo //elogiaram// é:", "transitivo direto|transitivo indireto|intransitivo|de ligação", "A"),
    ob("O predicado de “Foi um dia de muito aprendizado” é:", "nominal|verbal|verbo-nominal|inexistente", "A"),
    ob("“À tarde” é adjunto adverbial de:", "tempo|lugar|modo|causa", "A"),
    ob("A crase em “À tarde” deve-se a:", "locução adverbial feminina|verbo|pronome|masculino", "A"),
    ob("Em “na quadra da escola”, //da escola// é:", "adjunto adnominal|sujeito|objeto|aposto", "A"),
    dis("Passe para a voz passiva: “Os monitores acompanharam o trabalho.”", "O trabalho foi acompanhado pelos monitores.", 2),
    dis("Escreva uma frase com crase e explique o porquê.", "Resposta pessoal. Exemplo: “Fui à feira.” (a preposição //a// + o artigo //a//).", 3)
  ]);

  P("leitura", "Avaliação de leitura · poema e notícia", "Dois textos sobre o mesmo tema: leitura crítica, comparação e linguagem.", [
    H.poema("Texto I · Praça", "Na praça, o velho joga dominó\ncom a pressa de quem tem todo o tempo;\nas crianças correm atrás do sol\ne a tarde se desmancha em vento."),
    H.t("Texto II · Notícia", "Moradores da Vila Esperança inauguraram, no sábado, uma praça com quadra, bancos e brinquedos. O espaço, construído em mutirão, ocupa um terreno antes abandonado. “Agora temos um lugar para nos encontrar”, disse a moradora Celina Duarte.", "Texto original (fictício)")
  ], [
    ob("O Texto I é:", "uma notícia|um poema|uma receita|um artigo", "B"),
    ob("O Texto II é:", "uma notícia|um poema|uma carta|um conto", "A"),
    ob("Em “com a pressa de quem tem todo o tempo”, há:", "paradoxo (pressa e tempo)|ironia apenas|comparação com como|elipse", "A"),
    ob("Em “a tarde se desmancha em vento”, há:", "personificação|hipérbole|ironia|eufemismo", "A"),
    ob("O que os dois textos têm em comum?", "Falam de uma praça e da convivência nela|São escritos em versos|Trazem dados numéricos|Falam de esportes apenas", "A"),
    ob("A fala de Celina Duarte mostra:", "satisfação dos moradores com o espaço|crítica à prefeitura|dúvida|raiva", "A"),
    ob("O Texto II foi construído em:", "mutirão|uma escola|uma fábrica|um parque nacional", "A"),
    ob("Qual texto usa linguagem mais figurada?", "O Texto I|O Texto II|Os dois igualmente|Nenhum", "A"),
    dis("Que diferença há entre a finalidade do Texto I e a do Texto II?", "O Texto I expressa uma imagem poética; o Texto II informa um fato recente.", 3),
    dis("Explique a imagem “a tarde se desmancha em vento”.", "A tarde passa de forma leve e rápida, como se se dissolvesse no vento.", 3)
  ], ["Interpretação", "Literatura"]);

  /* ---------------- SIMULADOS ---------------- */
  S("1", "Simulado de Língua Portuguesa · 8º ano · nº 1", "Oito questões: variação linguística, figuras, coesão, orações e regência.", [
    ob("O texto apresenta variação:", "regional|histórica|formal apenas|nenhuma", "A", "", c("Na minha terra, a gente chama de aipim; no Nordeste, de macaxeira; no Sul, de mandioca.")),
    ob("A figura de linguagem predominante é:", "metonímia|metáfora|hipérbole|eufemismo", "B", "", c("O tempo é um rio que leva tudo sem pedir licença.")),
    ob("O pronome //ela// retoma:", "Maria|a escola|a prova|a diretora", "A", "", c("Maria chegou cedo porque ela queria revisar a matéria.")),
    ob("A oração destacada é:", "causal|concessiva|temporal|condicional", "B", "", c("Embora estivesse cansado, ele terminou o trabalho.")),
    ob("A forma correta é:", "Assisti o filme.|Assisti ao filme.|Assisti no filme.|Assisti do filme.", "B", "", c("Complete corretamente: “Ontem, ___ um filme interessante.”")),
    ob("Em “a mais importante”, há:", "superlativo relativo|comparativo de igualdade|diminutivo|aumentativo", "A", "", c("Entre todas as peças, a rainha é a mais importante.")),
    ob("A oração //que li// é:", "adjetiva restritiva|substantiva|adverbial|coordenada", "A", "", c("O livro que li ontem é de aventura.")),
    ob("O conectivo //portanto// expressa:", "oposição|conclusão|exemplo|tempo", "B", "", c("Estudei muito; portanto, estou confiante."))
  ]);

  S("2", "Simulado de Língua Portuguesa · 8º ano · nº 2", "Oito questões: leitura de gêneros, tese, ironia, crase, voz verbal e concordância.", [
    ob("A finalidade do texto é:", "convencer o leitor|contar uma história|instruir|informar com neutralidade", "A", "", c("Defendo que a escola deve ter mais aulas de artes. Quem aprende a criar aprende também a resolver problemas.")),
    ob("A fala do personagem é:", "irônica|literal|exagerada|triste", "A", "", c("— Que dia lindo para um piquenique! — disse Rui, enquanto a chuva encharcava a roupa.")),
    ob("A forma correta é:", "à noite|a noite|há noite|as noite", "A", "", c("Estudo ___ para não perder as aulas.")),
    ob("O verbo está na voz:", "ativa|passiva|reflexiva|neutra", "B", "", c("O trabalho foi corrigido pela professora.")),
    ob("A forma correta é:", "Fazem dois anos|Faz dois anos|Fazia dois anos|Fizeram dois anos", "B", "", c("Complete: “___ que não nos vemos.”")),
    ob("O sujeito é:", "simples|composto|oculto|inexistente", "C", "", c("Chegamos tarde à festa.")),
    ob("O texto é:", "uma notícia|uma crônica|uma receita|uma biografia", "B", "", c("Na fila do banco, ouvi dois senhores discutirem o futebol como quem discute política. Saí de lá concluindo que o gol é a única unanimidade do país.")),
    ob("Em “Seguem anexas as fotos”, a concordância é:", "correta, //anexas// concorda com //fotos//|errada|correta, //seguem// está no singular|errada, deveria ser //anexo//", "A", "", c("Seguem anexas as fotos."))
  ]);

  S("3", "Simulado de Língua Portuguesa · 8º ano · nº 3", "Oito questões: poema, comparação, sujeito, predicativo, regência e coesão.", [
    ob("O eu lírico expressa:", "saudade|raiva|medo|vaidade", "A", "", c("Oh! que saudades que eu tenho / Da aurora da minha vida, / Da minha infância querida / Que os anos não trazem mais!", "Casimiro de Abreu")),
    ob("Em “O silêncio gritava”, há:", "paradoxo|eufemismo|comparação|metonímia", "A", "", c("No salão vazio, o silêncio gritava.")),
    ob("O sujeito é:", "simples|composto|oculto|inexistente", "D", "", c("Choveu muito durante a viagem.")),
    ob("O termo //feliz// é:", "predicativo do sujeito|objeto direto|adjunto adverbial|vocativo", "A", "", c("Ela voltou feliz da viagem.")),
    ob("A forma correta é:", "Obedeço ao professor.|Obedeço o professor.|Obedeço no professor.|Obedeço do professor.", "A", "", c("Complete: “Eu ___.”")),
    ob("O conectivo //porém// expressa:", "adição|oposição|conclusão|causa", "B", "", c("A ideia é boa; porém, difícil de realizar.")),
    ob("A palavra //que// retoma:", "o livro|o autor|a biblioteca|o leitor", "A", "", c("O livro que o autor escreveu fala de amizade.")),
    ob("A palavra //Portanto// estabelece relação de:", "conclusão|oposição|explicação|tempo", "A", "", c("Não havia ninguém na sala. Portanto, fechamos a porta."))
  ]);

  S("4", "Simulado de Língua Portuguesa · 8º ano · nº 4", "Oito questões: texto informativo, linguagem, orações adverbiais, adjuntos e figuras.", [
    ob("A ideia principal do texto é:", "as vacinas treinam o sistema imunológico|as vacinas causam a doença|a água é cara|o sono é inútil", "A", "", c("As vacinas treinam o sistema imunológico: o corpo reconhece o alvo e responde melhor quando encontra o micro-organismo.", "Texto informativo")),
    ob("A oração destacada indica:", "condição|finalidade|causa|concessão", "A", "", c("Se estudarmos juntos, aprenderemos mais.")),
    ob("O termo //na quadra// é:", "adjunto adverbial de lugar|objeto direto|sujeito|predicativo", "A", "", c("Os alunos jogaram na quadra.")),
    ob("A forma correta é:", "à vista|a vista|há vista|as vista", "A", "", c("Comprei o computador ___.")),
    ob("A figura de linguagem é:", "hipérbole|eufemismo|ironia|metáfora", "A", "", c("Já te disse mil vezes para não esquecer o caderno!")),
    ob("O verbo //choveu// indica:", "fenômeno da natureza e oração sem sujeito|ação de alguém|estado|desejo", "A", "", c("Choveu a noite toda.")),
    ob("A variação linguística está relacionada à:", "situação e ao grupo social|apenas ao lugar|apenas à idade|a nenhuma", "A", "", c("O jovem conversou com o diretor de forma mais cuidadosa do que com os amigos.")),
    ob("O termo //que// introduz oração:", "substantiva objetiva direta|adjetiva|adverbial|coordenada", "A", "", c("Espero que você venha amanhã."))
  ]);
})();
