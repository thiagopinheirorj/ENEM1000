/* 7º ano · Atividades de produção de texto e ortografia (14 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("7"), ob = H.ob, dis = H.dis;

  function A(id, titulo, resumo, blocos, assunto, tempo) {
    Y.m("atividade", "a-" + id, titulo, assunto || ["Redação"], resumo, blocos, tempo || "1 aula");
  }
  var REV = H.tab("Revisão: marque ✓", ["Item", "✓"], [
    ["O texto tem introdução, desenvolvimento e conclusão", ""], ["Usei parágrafos e pontuação", ""], ["Conferi a ortografia e a concordância", ""], ["Evitei repetir as mesmas palavras", ""]
  ]);

  A("conto-misterio", "Escreva um conto de mistério", "Planejar e escrever um conto com pistas, tensão e final surpreendente.", [
    H.te("Como construir um mistério", ["**Situação inicial**: um fato estranho (um barulho, um objeto sumido, um bilhete).", "**Pistas**: detalhes que vão guiando o leitor (e às vezes enganando).", "**Clímax**: o momento de revelação. **Desfecho**: a explicação ou a surpresa.", "Use **verbos no passado** e uma linguagem que cria suspense."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Quem é o personagem principal?", ""], ["Que fato estranho acontece?", ""], ["Quais são as pistas (duas ou três)?", ""], ["Qual é a revelação?", ""], ["Como termina?", ""]]),
    H.ln("Meu conto de mistério (título: ____________________)", 22),
    REV,
    H.pf("Critérios (sugestão)", ["Estrutura (3) · pistas e suspense (3) · linguagem e verbos (2) · ortografia e pontuação (2). Leia alguns finais em voz alta e peça que a turma adivinhe a solução."])
  ], ["Redação", "Literatura"], "2 aulas");

  A("cronica", "Escreva uma crônica", "Crônica a partir de um fato do cotidiano: observação, humor e reflexão.", [
    H.te("A crônica", ["Parte de um **fato do cotidiano** e o transforma em reflexão, humor ou lirismo.", "Linguagem **simples**, em geral em 1ª pessoa, com um final que faz pensar (ou sorrir).", "Exemplo de ponto de partida: //a fila do ônibus, o primeiro dia de aula, o vizinho barulhento//."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Qual fato do cotidiano vou contar?", ""], ["O que vi ou senti?", ""], ["Que reflexão ou humor posso tirar?", ""], ["Como termino?", ""]]),
    H.ln("Minha crônica", 18),
    REV
  ], ["Redação"], "2 aulas");

  A("noticia", "Escreva uma notícia a partir dos fatos", "Transformar dados em uma notícia com título, lide e citação.", [
    H.te("A notícia", ["**Título** resume o fato. **Lide** (1º parágrafo) responde: quem? o quê? quando? onde? por quê?", "O **corpo** traz detalhes, dados e **falas** entre aspas.", "Linguagem **objetiva**, em 3ª pessoa, sem opinião do autor."]),
    H.t("Dados do acontecimento", ["Local: Escola Municipal Ipê Azul, em Vila Nova. Data: sexta-feira, 10 de maio. Fato: alunos do 7º ano organizaram uma feira de ciências com 25 experimentos. Participaram cerca de 200 visitantes, entre famílias e vizinhos. Fala da aluna Rita, 12 anos: “Foi o dia em que mais aprendi!”."], "Dados fictícios, criados para a atividade"),
    H.tab("Lide", ["Pergunta", "Resposta"], [["Quem?", ""], ["O quê?", ""], ["Quando?", ""], ["Onde?", ""], ["Por quê?", ""]]),
    H.ln("Título e texto da notícia", 12),
    REV
  ]);

  A("artigo-opiniao", "Escreva um artigo de opinião", "Tese, argumentos, concessão e conclusão sobre um tema do cotidiano escolar.", [
    H.te("O artigo de opinião", ["**Tese**: o seu ponto de vista (//Defendo que…//).", "**Argumentos**: razões e exemplos que sustentam a tese.", "**Concessão**: reconhece um ponto do outro lado (//É verdade que… mas…//).", "**Conclusão**: retoma a tese e propõe algo (//Portanto…//)."]),
    H.tab("Escolha um tema e planeje", ["Passo", "Escreva aqui"], [["Tema (uniforme escolar? recreio mais longo? aulas de dia inteiro?)", ""], ["Minha tese", ""], ["Argumento 1", ""], ["Argumento 2", ""], ["Concessão", ""]]),
    H.ln("Meu artigo de opinião", 20),
    REV,
    H.pf("Critérios", ["Tese clara (2) · argumentos desenvolvidos (3) · concessão e conectivos (2) · conclusão (1) · ortografia e pontuação (2)."])
  ], ["Redação"], "2 aulas");

  A("carta-reclamacao", "Escreva uma carta de reclamação", "Carta formal com problema, pedido e despedida adequada.", [
    H.te("A carta de reclamação", ["**Linguagem formal**: //Prezado(a) Senhor(a),// … //Atenciosamente,//", "Estrutura: **problema**, **consequências** e **pedido** de solução.", "Evite agressões; use **argumentos** e **dados**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Para quem escrevo?", ""], ["Qual é o problema?", ""], ["Que consequências ele traz?", ""], ["O que peço?", ""]]),
    H.ln("Minha carta", 16),
    REV
  ]);

  A("resenha", "Escreva uma resenha de livro ou filme", "Resumo e opinião: apresentar a obra sem contar o final e recomendar.", [
    H.te("A resenha", ["Apresenta **dados da obra** (título, autor ou diretor, gênero), um **resumo curto** (sem contar o final) e uma **opinião** justificada.", "Termina com uma **recomendação** (//Indico para quem gosta de…//)."]),
    H.tab("Ficha da obra", ["Item", "Escreva aqui"], [["Título e autor/diretor", ""], ["Gênero", ""], ["Resumo em duas frases", ""], ["O que gostei", ""], ["O que não gostei", ""], ["Para quem indico", ""]]),
    H.ln("Minha resenha", 14),
    REV
  ], ["Redação", "Interpretação"]);

  A("entrevista", "Planeje e escreva uma entrevista", "Roteiro de perguntas, entrevista com um colega e texto final.", [
    H.te("A entrevista", ["Prepare **perguntas abertas** (que não se respondem só com sim ou não).", "Registre as respostas e, depois, escreva o texto em **perguntas e respostas** ou em formato de **reportagem**."]),
    H.tab("Roteiro de perguntas", ["Nº", "Pergunta"], [["1", ""], ["2", ""], ["3", ""], ["4", ""], ["5", ""]]),
    H.ln("Registro das respostas e texto final", 14),
    REV,
    H.pf("Dinâmica", ["Em duplas, um entrevista o outro por cinco minutos; depois trocam. Peça que o entrevistado seja sempre o assunto principal do texto."])
  ]);

  A("relato-experiencia", "Escreva um relato de experiência", "Relato pessoal: 1ª pessoa, ordem cronológica e reflexão.", [
    H.te("O relato", ["Em **1ª pessoa**, conta uma experiência real, em **ordem cronológica**.", "Inclua **onde e quando**, **o que aconteceu**, **o que sentiu** e **o que aprendeu**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Qual experiência vou contar?", ""], ["Onde e quando?", ""], ["O que aconteceu, na ordem?", ""], ["O que aprendi?", ""]]),
    H.ln("Meu relato", 16),
    REV
  ]);

  A("roteiro-video", "Escreva um roteiro de vídeo curto", "Roteiro com cenas, falas e indicações: planejamento antes de gravar.", [
    H.te("O roteiro", ["Divide o vídeo em **cenas**. Cada cena traz **local**, **personagens**, **falas** e **ações** (entre parênteses).", "Pense em um vídeo de **1 minuto**: começo, meio e fim."]),
    H.tab("Modelo de cena", ["Cena", "Local", "O que acontece / falas"], [["1", "", ""], ["2", "", ""], ["3", "", ""], ["4", "", ""]]),
    H.pf("Ideias de tema", ["Uma dica de estudo; o dia na escola; como fazer uma receita; um conselho aos novos alunos."])
  ]);

  A("cena-teatral", "Escreva uma cena de teatro", "Texto teatral: personagens, falas, rubricas e cenário.", [
    H.te("O texto teatral", ["Tem **lista de personagens**, **cenário** e **falas** precedidas do nome do personagem.", "As **rubricas** (entre parênteses) indicam gestos, tom e ações: //(sussurrando)//, //(abrindo a porta)//."]),
    H.t("Modelo", "MARIA (assustada): Você ouviu isso?\nPAULO (rindo): É só o vento.\n(Uma porta bate ao fundo. Os dois se olham.)", "Texto original"),
    H.ln("Minha cena (com três personagens)", 16),
    REV
  ], ["Redação", "Literatura"]);

  A("haicai-poema", "Poesia: haicai e poema de rimas", "Brincar com a concisão do haicai e a musicalidade das rimas.", [
    H.te("Dois formatos", ["**Haicai**: poema de três versos curtos, que captura um instante da natureza (5, 7 e 5 sílabas poéticas, na forma clássica).", "**Poema rimado**: versos com rimas e ritmo (//rima emparelhada: AABB; alternada: ABAB//)."]),
    H.qs([
      dis("Escreva um haicai sobre uma estação do ano.", "Resposta pessoal. Verifique três versos curtos e a imagem da natureza.", 4),
      dis("Escreva uma quadra rimada (4 versos) sobre a escola.", "Resposta pessoal. Verifique rimas e ritmo.", 5)
    ]),
    H.pf("Critérios", ["Concisão e imagem poética (4) · rima ou ritmo (3) · criatividade (3)."])
  ], ["Redação", "Literatura"]);

  A("resumo-esquema", "Resumo e esquema de um texto", "Passo a passo para esquematizar ideias principais e resumir.", [
    H.te("Esquema e resumo", ["**Esquema**: título, tópicos e subtópicos (ideias principais e secundárias).", "**Resumo**: texto curto, com suas palavras, que mantém as ideias principais e corta os detalhes."]),
    H.t("As formigas", "As formigas vivem em colônias, que podem ter milhares de indivíduos. Cada uma tem uma função: a rainha põe ovos, as operárias buscam alimento e cuidam das larvas, e os soldados defendem o formigueiro. Elas se comunicam deixando no chão um cheiro especial, que serve de trilha para as outras.", "Texto informativo"),
    H.tab("Esquema", ["Tópico", "Subtópicos"], [["Organização", ""], ["Funções", ""], ["Comunicação", ""]]),
    H.qs([dis("Escreva um resumo de até 3 linhas.", "As formigas vivem em colônias, em que rainha, operárias e soldados têm funções diferentes, e se comunicam por cheiro.", 4)]),
    REV
  ], ["Redação", "Interpretação"]);

  A("reescrita", "Revise e reescreva um texto", "Corrigir ortografia, pontuação, concordância e repetições.", [
    H.i("O texto abaixo tem erros de ortografia, pontuação, concordância e repetição. Reescreva-o corrigido."),
    H.t("Texto para revisar", "ontem os alunos do setimo ano foi a biblioteca. la tinha muitos livros, e os livros eram muito bonitos e os alunos pegou os livros pra ler. a professora disse que cada um deve escolher um livro e todos escolheu rapido. Foi muito bom e nós gostamos muito de la", "Texto original, com erros propositais"),
    H.te("Dicas de revisão", ["Maiúsculas (início de frase, nomes) e acentos.", "Concordância: //os alunos foram//, //cada um deve//.", "Evite repetições: use pronomes e sinônimos.", "//Fui à biblioteca//; //lá// (advérbio) leva acento."]),
    H.qs([dis("Reescreva o texto corrigido.", "Ontem os alunos do sétimo ano foram à biblioteca. Lá havia muitos livros bonitos, e cada aluno escolheu um para ler. A professora disse que todos deviam escolher um, e todos escolheram rapidamente. Foi muito bom, e nós gostamos muito de lá.", 8)]),
    H.pf("Erros plantados", ["//setimo//, //foi a biblioteca// (à), //la// (lá), //os alunos foi// (foram), //pegou// (pegaram), //pra//, //escolheu// (escolheram), //rapido//, repetições de //livros// e //muito//, maiúscula inicial, pontuação."])
  ]);

  A("ditado", "Ditado de palavras e frases: 7º ano", "Lista de 30 palavras e 5 frases para treino de ortografia.", [
    H.i("O professor dita as palavras e as frases. Escreva nas linhas e confira depois."),
    H.tab("Palavras", ["Nº", "Palavra", "Nº", "Palavra", "Nº", "Palavra"], [["1", "", "11", "", "21", ""], ["2", "", "12", "", "22", ""], ["3", "", "13", "", "23", ""], ["4", "", "14", "", "24", ""], ["5", "", "15", "", "25", ""], ["6", "", "16", "", "26", ""], ["7", "", "17", "", "27", ""], ["8", "", "18", "", "28", ""], ["9", "", "19", "", "29", ""], ["10", "", "20", "", "30", ""]]),
    H.ln("Frases", 5),
    H.pf("Lista para ditar", [
      "**Palavras:** 1. analisar; 2. pesquisa; 3. beleza; 4. princesa; 5. tolice; 6. acerca; 7. afim; 8. mau; 9. vilão; 10. herói; 11. chapéu; 12. papéis; 13. saída; 14. juízo; 15. exceção; 16. necessário; 17. obsessão; 18. cidadania; 19. exagero; 20. execução; 21. interesse; 22. humano; 23. hábito; 24. descrição; 25. consciência; 26. bagagem; 27. ferrugem; 28. frequência; 29. privilégio; 30. responsável.",
      "**Frases:** 1. Ele é um mau jogador, mas passou mal ontem. 2. A pesquisa mostrou que a análise estava correta. 3. Nós estudamos a fim de passar na prova. 4. O herói perdeu o chapéu e os papéis. 5. Há cerca de dez anos, a viagem custava menos."
    ])
  ], ["Gramática"]);
})();
