/* 6º ano · Provas (8) e simulados (4). Valor das provas: 10 pontos. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, ob = H.ob, dis = H.dis;

  function P(id, titulo, resumo, texto, qs, assunto) {
    var b = [H.i("**Valor: 10,0 pontos** (1,0 por questão). Leia o(s) texto(s) com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    H.m6("prova", "p-" + id, titulo, assunto || ["Interpretação", "Gramática"], resumo, b);
  }
  /* Simulado: cada questão traz seu texto de apoio. */
  function S(id, titulo, resumo, qs) {
    /* distribui a posição da resposta correta (troca a alternativa certa de lugar com a da posição-alvo) */
    var alvo = [2, 0, 3, 1, 3, 2, 0, 1], giro = parseInt(id, 10) || 0;
    qs.forEach(function (q, i) {
      var t = (alvo[i % alvo.length] + giro) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    H.m6("simulado", "s-" + id, titulo, ["Interpretação", "Gramática"], resumo, [
      H.i("Cada questão tem **uma** alternativa correta. Leia o texto de cada questão antes de responder. Tempo sugerido: 40 minutos."),
      H.qs(qs)
    ], "40 min");
  }
  function c(texto, fonte) { return { ctx: texto, fonte: fonte || "Texto original" }; }

  /* ---------------- PROVAS ---------------- */
  P("diagnostica", "Avaliação diagnóstica · início do 6º ano", "Leitura, substantivo, advérbio, verbo, plural e produção: ponto de partida do ano.", [
    H.t("O menino e o rio", [
      "Caio morava perto de um rio e passava as tardes olhando a água correr. Um dia, viu uma folha grande descendo devagar, como se fosse um barquinho. Teve uma ideia: fez uma pequena vela com um palito e um pedaço de papel, e a folha virou navio.",
      "Cada tarde, Caio soltava um novo barco, imaginando por onde ele iria passar: pelas pedras, pela ponte, pelo mar. Nunca soube se algum chegou lá, mas aprendeu que, para sonhar, não é preciso sair do lugar."
    ])
  ], [
    ob("Onde Caio passava as tardes?", "No mar|Na escola|Perto de um rio|Na ponte", "C"),
    ob("O que Caio transformou em barco?", "Uma folha|Uma garrafa|Um chinelo|Um balão", "A"),
    ob("Em “como se fosse um barquinho”, há uma:", "metáfora|comparação|ironia|exagero", "B"),
    ob("A lição final do texto é:", "É preciso viajar para sonhar.|Barcos não flutuam.|O rio é perigoso.|Dá para sonhar sem sair do lugar.", "D"),
    ob("O nome de personagem (substantivo próprio) no texto é:", "rio|ponte|Caio|mar", "C"),
    ob("A palavra //devagar// é:", "adjetivo|verbo|substantivo|advérbio", "D"),
    ob("O plural de //navio// é:", "navios|navioes|navis|naviões", "A"),
    ob("A forma //soltava// está no:", "presente|futuro|passado|infinitivo", "C"),
    dis("Por que Caio fez uma vela para a folha?", "Para transformar a folha em um barco e brincar de imaginar viagens.", 3),
    dis("Escreva um parágrafo (cinco linhas) sobre uma brincadeira que você inventou.", "Resposta pessoal. Verifique começo, meio e fim, ortografia e pontuação.", 6)
  ]);

  P("1bim", "Prova · 1º bimestre · 6º ano", "Fábula, substantivo, adjetivo, artigo e gênero.", [
    H.t("O leão e o ratinho", [
      "Um leão faminto dormia debaixo de uma árvore quando um ratinho passou correndo sobre ele. O leão acordou furioso e o prendeu entre as garras. — Por favor, me solte! Um dia eu ajudo o senhor — implorou o ratinho. O leão achou graça da promessa e o soltou.",
      "Algum tempo depois, o leão caiu em uma rede armada por caçadores. Ouvindo seus rugidos, o ratinho correu até lá e roeu as cordas, uma por uma, até libertá-lo.",
      "**Moral:** ninguém é pequeno demais para ajudar."
    ], "Reconto de fábula tradicional")
  ], [
    ob("Quem prendeu o leão na rede?", "O ratinho|Os caçadores|Um pastor|Outro leão", "B"),
    ob("Por que o leão soltou o ratinho?", "Achou graça na promessa dele.|Teve medo.|Foi obrigado.|Estava com sono.", "A"),
    ob("Como o ratinho ajudou o leão?", "Chamou outros animais.|Enganou os caçadores.|Roeu as cordas da rede.|Levou comida.", "C"),
    ob("A moral da fábula é:", "Os fortes sempre vencem.|Ninguém é pequeno demais para ajudar.|Ratos são perigosos.|Leões são fracos.", "B"),
    ob("Em “um leão faminto”, o adjetivo é:", "um|leão|um leão|faminto", "D"),
    ob("Em “o ratinho”, a palavra //o// é:", "pronome|numeral|artigo definido|preposição", "C"),
    ob("O feminino de //leão// é:", "leoa|leã|leona|leã fêmea", "A"),
    ob("O diminutivo de //rato// é:", "ratão|ratinho|ratazana|ratoeira", "B"),
    dis("Reconte a fábula em cinco linhas.", "Resposta pessoal. Deve conter os fatos principais, em ordem: o leão prende o ratinho, solta-o, cai na rede e é salvo.", 6),
    dis("Que outra moral você daria a essa história?", "Resposta pessoal. Exemplo: “Uma boa ação sempre volta.”", 3)
  ]);

  P("2bim", "Prova · 2º bimestre · 6º ano", "Texto informativo, coletivos, tempos verbais, sílabas e acentuação.", [
    H.t("As abelhas", [
      "As abelhas vivem em colmeias, em grupos organizados. Em cada colmeia há uma rainha, que põe ovos, e milhares de operárias, que produzem o mel e cuidam das larvas.",
      "Ao visitar as flores em busca de néctar, as abelhas transportam o pólen de uma flor para outra, o que ajuda as plantas a produzirem frutos. Por isso, elas são muito importantes para a natureza e para a nossa alimentação."
    ])
  ], [
    ob("A ideia principal do texto é:", "As abelhas só fazem mel.|As abelhas vivem organizadas e são importantes para a natureza.|As flores precisam de mel.|A rainha é perigosa.", "B"),
    ob("Quem põe os ovos na colmeia?", "As operárias|As larvas|Os zangões|A rainha", "D"),
    ob("Por que as abelhas ajudam as plantas?", "Comem as folhas.|Transportam o pólen entre as flores.|Fazem sombra.|Plantam sementes.", "B"),
    ob("O coletivo de //abelhas// é:", "cardume|rebanho|enxame|matilha", "C"),
    ob("A forma //ajuda// está no:", "passado|presente|futuro|infinitivo", "B"),
    ob("A separação silábica de //colmeia// é:", "col-mei-a|colm-ei-a|col-me-ia|co-lmei-a", "A"),
    ob("A palavra //néctar// recebe acento por ser:", "oxítona|paroxítona terminada em r|proparoxítona|monossílaba", "B"),
    ob("Em “elas são muito importantes”, //elas// substitui:", "as abelhas|as flores|as plantas|as larvas", "A"),
    dis("Escreva um parágrafo explicando por que devemos proteger as abelhas.", "Resposta pessoal. Considere polinização, produção de frutos e importância para a alimentação.", 6),
    dis("Passe para o plural: “A abelha visita a flor.”", "As abelhas visitam as flores.", 2)
  ]);

  P("3bim", "Prova · 3º bimestre · 6º ano", "Narrativa pessoal, preposição, conjugação, sílabas e frases.", [
    H.t("A bicicleta nova", [
      "Ganhei uma bicicleta no meu aniversário e, no mesmo dia, resolvi aprender a andar sozinho. Meu pai segurou o banco por um tempo, mas, quando percebi, ele já havia me soltado. Pedalei com todas as forças, perdi o equilíbrio e caí em um canteiro de flores. Os vizinhos riram, e eu também.",
      "Naquela tarde, caí quatro vezes. No dia seguinte, consegui dar a volta no quarteirão sem tocar os pés no chão. Descobri que cair é parte de aprender."
    ])
  ], [
    ob("Qual foi o presente de aniversário?", "Um skate|Uma bicicleta|Um patinete|Uma bola", "B"),
    ob("Onde o narrador caiu?", "Na rua|Na calçada|Num rio|Num canteiro de flores", "D"),
    ob("Quantas vezes ele caiu naquela tarde?", "Duas|Três|Quatro|Cinco", "C"),
    ob("A frase final “cair é parte de aprender” significa que:", "errar faz parte do aprendizado|cair é perigoso|aprender é fácil|ninguém cai", "A"),
    ob("Em “Pedalei com todas as forças”, a palavra //com// é:", "preposição|conjunção|advérbio|artigo", "A"),
    ob("O verbo //pedalei// pertence à:", "1ª conjugação|2ª conjugação|3ª conjugação|nenhuma conjugação", "A"),
    ob("A separação silábica de //bicicleta// é:", "bic-i-cle-ta|bi-cic-le-ta|bi-ci-cle-ta|bici-cle-ta", "C"),
    ob("Em “Ganhei uma bicicleta”, o verbo está no:", "presente|futuro|passado|infinitivo", "C"),
    dis("Reescreva no presente: “Pedalei com todas as forças e caí.”", "Pedalo com todas as forças e caio.", 2),
    dis("Conte, em cinco linhas, algo que você aprendeu “caindo e levantando”.", "Resposta pessoal. Verifique coerência, pontuação e ortografia.", 6)
  ]);

  P("4bim", "Prova · 4º bimestre · 6º ano", "Conto, onomatopeia, tipos de frase, conjunção, plural e produção.", [
    H.t("O relógio do vovô", [
      "O relógio da sala estava parado havia anos, e ninguém tinha coragem de mexer nele, porque ele era do vovô Tito. Um dia, Marina, de onze anos, decidiu abri-lo com a ajuda do relojoeiro da rua de baixo.",
      "— Será que ele ainda funciona? — perguntou ela.\n— Só há um jeito de saber — respondeu o relojoeiro, sorrindo.",
      "Trocaram uma pequena peça e, de repente, o tique-taque voltou a encher a casa. Naquela noite, a família inteira se reuniu na sala para ouvir o som, e vovó contou histórias do tempo em que o relógio marcava as horas das festas."
    ])
  ], [
    ob("Por que ninguém mexia no relógio?", "Era muito caro.|Era do vovô Tito, e ninguém tinha coragem.|Estava quebrado de vez.|Ficava no alto.", "B"),
    ob("Quem ajudou Marina?", "A vovó|O pai|Uma vizinha|O relojoeiro", "D"),
    ob("A palavra //tique-taque// é:", "onomatopeia|interjeição|adjetivo|conjunção", "A"),
    ob("O travessão nas falas serve para:", "encerrar o texto|marcar a fala dos personagens|indicar dúvida|fazer uma lista", "B"),
    ob("“Será que ele ainda funciona?” é uma frase:", "exclamativa|declarativa|interrogativa|imperativa", "C"),
    ob("Em “porque ele era do vovô Tito”, a palavra //porque// indica:", "oposição|escolha|tempo|causa", "D"),
    ob("Complete: “Marina decidiu abrir o relógio, ___ não sabia se funcionava.”", "mas|mais|há|a", "A"),
    ob("O plural de //relógio// é:", "relogios|relógios|relógioes|relojios", "B"),
    dis("O que mudou na casa depois que o relógio voltou a funcionar?", "O tique-taque voltou a encher a casa, e a família se reuniu para ouvir o som e as histórias da vovó.", 3),
    dis("Escreva um final diferente para a história (cinco linhas).", "Resposta pessoal. Verifique coerência com o início, pontuação e ortografia.", 6)
  ]);

  P("final", "Prova final · 6º ano", "Revisão do ano: leitura, numeral, acentuação, verbos, concordância e produção.", [
    H.t("A escola nova", [
      "No primeiro dia, a escola parecia enorme. Os corredores longos, as escadas e as salas numeradas confundiram Luísa, que andou em círculos até encontrar a turma do 6º A.",
      "Com o passar das semanas, porém, ela aprendeu os caminhos, fez amizades e descobriu a biblioteca, onde passava os intervalos lendo histórias de aventura. No fim do ano, quando um aluno novo chegou perdido, Luísa sorriu e disse:\n— Vem comigo. Eu te mostro."
    ])
  ], [
    ob("Como a escola parecia a Luísa no primeiro dia?", "Pequena|Enorme|Vazia|Barulhenta", "B"),
    ob("O que Luísa descobriu na escola?", "A quadra|A cantina|O laboratório|A biblioteca", "D"),
    ob("A palavra //porém// indica:", "adição|explicação|oposição|tempo", "C"),
    ob("Qual foi a mudança de Luísa ao longo do texto?", "De perdida a alguém que ajuda os outros|De feliz a triste|De aluna a professora|Não houve mudança", "A"),
    ob("Em “6º A”, o numeral //6º// é:", "cardinal|ordinal|fracionário|multiplicativo", "B"),
    ob("A palavra //biblioteca// é:", "oxítona|paroxítona|proparoxítona|monossílaba", "B"),
    ob("O verbo //aprendeu// está no:", "presente|futuro|passado|infinitivo", "C"),
    ob("Em “corredores longos”, o adjetivo concorda com o substantivo em:", "gênero e número|só gênero|só número|nada", "A"),
    dis("Pontue: “luísa foi à biblioteca e pegou três livros de aventura mistério e poesia”", "Luísa foi à biblioteca e pegou três livros de aventura, mistério e poesia. (aceitar também: livros: aventura, mistério e poesia.)", 3),
    dis("Escreva um parágrafo contando como foi o seu ano no 6º ano.", "Resposta pessoal. Verifique coerência, tempo verbal no passado, pontuação e ortografia.", 8)
  ]);

  P("recuperacao-1sem", "Prova de recuperação · 1º semestre · 6º ano", "Prova mais curta e direta, com a lebre e a tartaruga: leitura e conteúdos essenciais.", [
    H.t("A lebre e a tartaruga", [
      "A lebre vivia dizendo que era a mais veloz da floresta e zombava da tartaruga, que andava devagar. Cansada das piadas, a tartaruga a desafiou para uma corrida. A lebre aceitou, rindo.",
      "No começo, correu tanto que deixou a tartaruga para trás e resolveu tirar uma soneca. A tartaruga, sem parar, passou pela lebre adormecida e cruzou a linha de chegada. Quando a lebre acordou, já era tarde."
    ], "Reconto de fábula tradicional")
  ], [
    ob("Quem desafiou quem para a corrida?", "A lebre desafiou a tartaruga.|A tartaruga desafiou a lebre.|Um cachorro desafiou os dois.|Ninguém desafiou.", "B"),
    ob("Por que a lebre perdeu a corrida?", "Era lenta.|Tropeçou.|Dormiu durante a corrida.|Desistiu.", "C"),
    ob("Uma moral possível para a fábula é:", "Quem corre sempre vence.|Dormir é bom.|Animais não correm.|Quem não desiste pode vencer.", "D"),
    ob("Qual é um substantivo comum?", "lebre|Brasil|Ana|Rio de Janeiro", "A"),
    ob("Em “a lebre veloz”, o adjetivo é:", "lebre|a|veloz|corrida", "C"),
    ob("O plural de //lebre// é:", "lebris|lebres|lebrees|lebre", "B"),
    ob("A palavra //devagar// é:", "adjetivo|verbo|advérbio|artigo", "C"),
    ob("A forma //corria// está no:", "presente|futuro|infinitivo|passado", "D"),
    dis("Escreva o que aconteceu no final da história.", "A tartaruga cruzou a linha de chegada primeiro, enquanto a lebre dormia; quando a lebre acordou, já era tarde.", 3),
    dis("Complete com //mas// ou //mais//: a) A lebre era rápida, ___ foi derrotada. b) A tartaruga teve ___ paciência.", "a) mas; b) mais.", 2)
  ]);

  P("leitura", "Avaliação de leitura · poema e texto informativo", "Dois textos sobre o mesmo assunto: finalidade, linguagem e comparação.", [
    H.poema("Texto I · Meu cachorro", "Quando chego da escola,\nele corre pro portão,\nbalança o rabo inteiro\ne me enche de emoção.\n\nNão pergunta como foi,\nnão pede explicação:\nsó me ensina que o amor\ncabe num latido e numa mão."),
    H.t("Texto II · Os cães", "Os cães foram os primeiros animais domesticados pelo ser humano e são conhecidos pela lealdade. Têm olfato muito apurado, por isso ajudam a encontrar pessoas e a farejar objetos. Também se comunicam por meio de latidos, posturas do corpo e movimentos do rabo.")
  ], [
    ob("O Texto I é:", "uma notícia|um poema|uma receita|um convite", "B"),
    ob("Que palavras rimam na 1ª estrofe?", "escola e portão|portão e emoção|rabo e inteiro|chego e corre", "B"),
    ob("O sentimento do eu lírico pelo cachorro é:", "medo|raiva|carinho|indiferença", "C"),
    ob("A finalidade do Texto II é:", "emocionar|informar|convidar|vender", "B"),
    ob("O que os dois textos têm em comum?", "Tratam de cachorros.|Foram escritos pelo mesmo autor.|São receitas.|São cartas.", "A"),
    ob("Que característica dos cães aparece no Texto II?", "Voo|Hibernação|Visão noturna|Olfato muito apurado", "D"),
    ob("No Texto I, “o amor cabe num latido” é:", "uma imagem poética|uma receita|uma pergunta|uma lista", "A"),
    ob("Qual palavra do Texto I é um substantivo?", "balança|rabo|inteiro|ele", "B"),
    dis("Que diferença há entre a linguagem do Texto I e a do Texto II?", "O Texto I usa linguagem emotiva e figurada, com rimas; o Texto II usa linguagem objetiva, para informar.", 4),
    dis("Qual é a mensagem do poema?", "O amor e a amizade do cachorro se expressam em gestos simples, sem palavras.", 3)
  ], ["Interpretação"]);

  /* ---------------- SIMULADOS ---------------- */
  S("1", "Simulado de Língua Portuguesa · 6º ano · nº 1", "Oito questões de leitura e gramática, com um texto curto em cada uma.", [
    ob("Em qual horário a biblioteca funciona aos sábados?", "Das 8h às 17h|Das 8h às 12h|Das 13h às 17h|Não abre aos sábados", "B", "A informação está no próprio texto.", c("A biblioteca abre de segunda a sexta, das 8h às 17h, e aos sábados, das 8h às 12h.")),
    ob("O tema central do texto é:", "o consumo de energia|a coleta seletiva e a reciclagem|a criação de animais|o uso de celulares", "B", "", c("Separar papel, plástico, vidro e metal permite que esses materiais sejam reaproveitados. Assim, menos lixo vai para os aterros e menos recursos naturais são retirados da natureza.")),
    ob("A finalidade do texto é:", "contar uma história|dar instruções|vender um produto|divulgar uma notícia", "B", "Os verbos no imperativo orientam o leitor.", c("Misture as claras com o açúcar até formar picos firmes. Junte as gemas e mexa devagar.")),
    ob("Na frase, a palavra //tímido// significa:", "que fala muito|envergonhado|barulhento|corajoso", "B", "", c("O menino era tímido: raramente falava em público.")),
    ob("Pode-se concluir que Lia:", "ia sair e chuva era provável|ficaria em casa|estava doente|estava com calor", "A", "O céu cinzento e o guarda-chuva sugerem chuva.", c("Lia olhou para o céu cinzento, pegou o guarda-chuva e saiu.")),
    ob("O travessão, no trecho, indica:", "uma lista|a fala de uma personagem|uma pergunta|uma data", "B", "", c("— Você veio? — perguntou Ana.")),
    ob("O texto é um:", "convite|bilhete|receita|notícia", "A", "Traz quem convida, data, horário e local.", c("Você está convidado para o aniversário de Pedro! Dia 15 de maio, às 16h, na Rua das Flores, 120. Confirme sua presença.")),
    ob("Os dois textos se complementam porque:", "tratam de problemas diferentes|um mostra o problema e o outro, uma de suas causas|ambos são poemas|ambos são receitas", "B", "", c("Texto I: O lixo no mar prejudica os peixes.\nTexto II: Os plásticos levam centenas de anos para se decompor.", "Textos originais"))
  ]);

  S("2", "Simulado de Língua Portuguesa · 6º ano · nº 2", "Oito questões com notícia, poema, sinônimos, tempos verbais, conectivos e inferência.", [
    ob("O fato principal da notícia é:", "Um aluno ganhou um campeonato de xadrez.|Uma escola foi fechada.|Um aluno se mudou.|Um torneio foi cancelado.", "A", "", c("Aluno de 11 anos vence campeonato de xadrez escolar", "Manchete original")),
    ob("Em “A lua vai passeando”, a lua é descrita como se fosse:", "um objeto|uma pessoa|um animal|uma flor", "B", "É uma personificação.", c("A lua vai passeando\npelos telhados da rua,\ne a cidade adormecida\nfica prateada de lua.", "Poema original")),
    ob("Na frase, um sinônimo de //exausto// é:", "cansado|animado|distante|calmo", "A", "", c("Depois da corrida, o atleta estava exausto.")),
    ob("O verbo //estudarei// está no:", "passado|presente|futuro|infinitivo", "C", "", c("Amanhã estudarei para a prova.")),
    ob("A palavra //mas// indica ideia de:", "soma|causa|oposição|tempo", "C", "", c("Eu queria brincar, mas estava chovendo.")),
    ob("Pelo texto, é possível concluir que Rui:", "adorou o filme|não gostou do filme|nunca foi ao cinema|dormiu no filme", "B", "Bocejos e olhar no relógio sugerem tédio.", c("Rui bocejou duas vezes e olhou o relógio. Ainda faltava meia hora para o filme acabar.")),
    ob("O que causou o atraso do ônibus?", "Um acidente|A chuva forte|Uma greve|Um defeito", "B", "", c("Por causa da chuva forte, o ônibus atrasou e os alunos chegaram depois do sinal.")),
    ob("A ideia principal do texto é:", "A água é importante e deve ser economizada.|A água é perigosa.|Banhos devem ser longos.|Ninguém precisa de água.", "A", "", c("A água é essencial para a vida. Por isso, é importante fechar a torneira ao escovar os dentes e tomar banhos rápidos."))
  ]);

  S("3", "Simulado de Língua Portuguesa · 6º ano · nº 3", "Oito questões: biografia, receita, adjetivos, substantivos, pontuação, ortografia e gêneros.", [
    ob("Santos Dumont nasceu em:", "Palmira, em Minas Gerais|Paris|São Paulo|Rio de Janeiro", "A", "", c("Alberto Santos Dumont nasceu em 1873, na cidade de Palmira, em Minas Gerais, e se mudou para Paris.", "Texto informativo")),
    ob("Qual é o último passo da receita?", "Bater os ovos|Untar a forma|Misturar o açúcar|Levar ao forno", "D", "", c("1. Misture o açúcar e a farinha. 2. Junte os ovos e bata. 3. Unte a forma. 4. Despeje a massa. 5. Leve ao forno por 40 minutos.", "Receita original")),
    ob("Na frase, o adjetivo é:", "menina|esperta|ontem|chegou", "B", "", c("A menina esperta chegou ontem.")),
    ob("Qual palavra é substantivo próprio?", "cidade|Manaus|longe|bonita", "B", "", c("Viajamos até Manaus de barco.")),
    ob("Qual sinal completa a frase corretamente?", "Ponto final|Interrogação|Exclamação|Vírgula", "B", "", c("Você quer vir com a gente___")),
    ob("Qual é a grafia correta?", "viajem|viagem|viajen|viaje", "B", "", c("A ___ de trem foi longa e tranquila.")),
    ob("O gênero textual do trecho é:", "carta|notícia|poema|receita", "A", "", c("Fortaleza, 3 de abril de 2026.\nQuerida tia Rita,\nEstou com saudade! Venha nos visitar.\nBeijos, Pedro.", "Texto original")),
    ob("O coletivo de //peixes// é:", "enxame|cardume|matilha|rebanho", "B", "", c("Os pescadores avistaram um grande ___ de peixes perto da costa."))
  ]);

  S("4", "Simulado de Língua Portuguesa · 6º ano · nº 4", "Oito questões: fábula, informação, inferência, acentuação, plural, advérbio e tipos de frase.", [
    ob("A moral da fábula é:", "Devemos desconfiar de quem nos elogia demais.|Raposas são bondosas.|Corvos cantam mal.|Queijo é saboroso.", "A", "", c("A raposa elogiou o canto do corvo, que, vaidoso, abriu o bico para cantar. O queijo caiu, e a raposa o abocanhou.", "Reconto de fábula tradicional")),
    ob("Qual é a informação principal do texto?", "Os golfinhos são mamíferos marinhos.|Os golfinhos são répteis.|Os golfinhos não respiram.|Os golfinhos vivem em rios secos.", "A", "", c("Os golfinhos respiram por pulmões e amamentam os filhotes: por isso, são mamíferos, e não peixes.", "Texto informativo")),
    ob("A atitude de Paulo permite concluir que ele:", "está feliz com o resultado|ficou frustrado|não tem interesse|está com sono", "B", "", c("Paulo olhou a nota, amassou o papel e saiu da sala batendo a porta.")),
    ob("Qual palavra deve ser acentuada?", "janela|cafe|casa|bola", "B", "Oxítona terminada em //e//: café.", c("Quero tomar um ___ com leite.")),
    ob("O plural de //cidadão// é:", "cidadões|cidadãos|cidadães|cidadãoes", "B", "", c("Os ___ votaram na eleição do grêmio.")),
    ob("Em “Ela cantou lindamente”, //lindamente// é advérbio de:", "tempo|lugar|modo|negação", "C", "", c("Ela cantou lindamente na festa.")),
    ob("A frase “Feche a janela, por favor.” é:", "interrogativa|imperativa|exclamativa|declarativa", "B", "", c("Feche a janela, por favor.")),
    ob("A palavra //saudade// tem quantas sílabas?", "2|3|4|5", "B", "sau-da-de.", c("Senti muita saudade de você."))
  ]);
})();
