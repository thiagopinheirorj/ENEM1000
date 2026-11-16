/* 9º ano · Atividades de produção de texto, oralidade e ortografia (14 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("9"), ob = H.ob, dis = H.dis;

  function A(id, titulo, resumo, blocos, assunto, tempo) {
    Y.m("atividade", "a-" + id, titulo, assunto || ["Redação"], resumo, blocos, tempo || "1 aula");
  }
  var REV = H.tab("Revisão: marque ✓", ["Item", "✓"], [
    ["Há introdução, desenvolvimento e conclusão", ""], ["Os parágrafos se ligam por conectivos", ""], ["Conferi pontuação, concordância, regência e crase", ""], ["Evitei repetições e linguagem informal inadequada", ""]
  ]);

  A("ficcao-cientifica", "Escreva um conto de ficção científica", "Imaginar um futuro, criar tecnologias plausíveis e problematizar uma questão atual.", [
    H.te("Ficção científica", ["Ambienta a história em um **futuro** (ou em outro mundo) com **tecnologia** diferente da atual.", "Costuma **problematizar** algo do presente: dependência de telas, meio ambiente, privacidade.", "Mantenha **coerência interna**: as regras do seu mundo precisam funcionar."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Ano e lugar", ""], ["Tecnologia ou mudança principal", ""], ["Personagem e seu conflito", ""], ["Que questão do presente o conto discute?", ""], ["Final (fechado ou aberto)", ""]]),
    H.ln("Meu conto de ficção científica (título: ____________________)", 26),
    REV,
    H.pf("Critérios", ["Mundo criado e coerência (3) · enredo e conflito (3) · linguagem e coesão (2) · ortografia e pontuação (2)."])
  ], ["Redação", "Literatura"], "2 aulas");

  A("cronica", "Escreva uma crônica", "Crônica com ponto de vista claro, linguagem expressiva e fecho reflexivo.", [
    H.te("A crônica", ["Transforma um **fato banal** em reflexão, humor ou lirismo. Tem **ponto de vista** pessoal.", "Use **imagens** (metáforas, comparações) e um **fecho** que provoque o leitor.", "Evite explicar demais: **sugira**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Cena ou fato escolhido", ""], ["O que ele revela?", ""], ["Imagens que posso usar", ""], ["Fecho", ""]]),
    H.ln("Minha crônica", 22),
    REV
  ], ["Redação"], "2 aulas");

  A("reportagem", "Escreva uma reportagem investigativa curta", "Pesquisa, entrevista e apresentação de dados sobre um tema da comunidade.", [
    H.te("A reportagem", ["**Título**, **linha fina**, **introdução** com o foco, **desenvolvimento** com dados e vozes, **fechamento**.", "Cite **fontes** e diferencie **fato** de **opinião**.", "Possíveis temas: transporte, lixo, saúde, tempo de tela, merenda."]),
    H.tab("Plano", ["Item", "Escreva aqui"], [["Tema e pergunta central", ""], ["Fonte 1 (pessoa ou documento)", ""], ["Fonte 2", ""], ["Dado ou fato principal", ""], ["Quem pode ser entrevistado?", ""]]),
    H.ln("Minha reportagem", 24),
    REV
  ], ["Redação"], "2 aulas");

  A("editorial", "Escreva um editorial", "Posicionamento institucional: tese, argumentos e proposta em linguagem formal.", [
    H.te("O editorial", ["Expressa a **posição do veículo** (jornal, revista, rádio da escola) sobre um fato relevante.", "Linguagem **formal**, em 3ª pessoa ou 1ª do plural; **argumentos** claros e **proposta** final.", "Estrutura: **fato**, **posição**, **argumentos**, **proposta**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Fato ou problema", ""], ["Posição do veículo", ""], ["Argumento 1", ""], ["Argumento 2", ""], ["Proposta", ""]]),
    H.ln("Meu editorial", 18),
    REV
  ]);

  A("artigo-opiniao", "Escreva um artigo de opinião", "Tese, concessão, argumentos com repertório e conclusão com proposta.", [
    H.te("O artigo de opinião", ["**Tese**; **argumentos** com exemplos, dados ou repertório (lei, livro, filme); **concessão**; **conclusão** com proposta.", "Use **conectivos**: //em primeiro lugar, além disso, embora, portanto//."]),
    H.tab("Planejamento (sugestões: voto aos 16, tempo de tela, uniforme, lição de casa)", ["Passo", "Escreva aqui"], [["Tema e tese", ""], ["Argumento 1 + repertório", ""], ["Argumento 2 + exemplo", ""], ["Concessão", ""], ["Conclusão e proposta", ""]]),
    H.ln("Meu artigo de opinião", 28),
    REV,
    H.pf("Critérios", ["Tese (2) · argumentos e repertório (3) · concessão e coesão (2) · proposta (1) · norma culta (2)."])
  ], ["Redação"], "2 aulas");

  A("carta-curriculo", "Escreva uma carta de apresentação e um currículo", "Textos formais para o primeiro estágio ou curso: objetivo, linguagem e organização.", [
    H.te("Carta de apresentação e currículo", ["**Carta de apresentação**: breve, formal, apresenta quem escreve, o interesse e a disponibilidade.", "**Currículo**: dados pessoais, objetivo, formação, cursos, experiências e habilidades, em **listas curtas**.", "Linguagem **objetiva** e **sem erros**."]),
    H.tab("Currículo (rascunho)", ["Seção", "Escreva aqui"], [["Dados pessoais", ""], ["Objetivo", ""], ["Formação", ""], ["Cursos e atividades", ""], ["Habilidades", ""]]),
    H.ln("Carta de apresentação", 10),
    REV
  ]);

  A("resenha-critica", "Escreva uma resenha crítica", "Resumo, análise e avaliação com argumentos de uma obra de sua escolha.", [
    H.te("A resenha crítica", ["Traz **dados da obra**, **resumo** (sem entregar o final), **análise** (o que funciona e o que não) e **recomendação**.", "A opinião exige **argumentos**: //Achei a trama envolvente porque…//"]),
    H.tab("Ficha da obra", ["Item", "Escreva aqui"], [["Título, autor e gênero", ""], ["Resumo em três frases", ""], ["Ponto forte e por quê", ""], ["Ponto fraco e por quê", ""], ["Para quem indico", ""]]),
    H.ln("Minha resenha crítica", 18),
    REV
  ], ["Redação", "Interpretação"]);

  A("divulgacao-cientifica", "Escreva um texto de divulgação científica", "Explicar um conceito ao público leigo, com exemplos e linguagem clara.", [
    H.te("Divulgação científica", ["Explica um **conceito** de forma **clara**, com **exemplos** e **comparações**.", "Estrutura: **pergunta ou problema**, **explicação**, **exemplo**, **conclusão**.", "Evite **jargão** sem explicar."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Conceito escolhido (ex.: vacinas, ciclo da água, energia solar)", ""], ["Pergunta-título", ""], ["Explicação em duas frases", ""], ["Exemplo ou comparação", ""]]),
    H.ln("Meu texto", 16),
    REV
  ]);

  A("roteiro-podcast", "Escreva um roteiro de podcast", "Roteiro de um episódio curto: abertura, blocos e encerramento.", [
    H.te("O roteiro de podcast", ["Tem **vinheta**, **abertura** (apresentação do tema), **blocos** (falas, entrevistas, trilha) e **encerramento**.", "Linguagem **oral**, com frases curtas.", "Planeje **tempo**: um episódio de 5 minutos tem cerca de 3 blocos."]),
    H.tab("Roteiro", ["Parte", "Tempo", "O que dizer / efeito sonoro"], [["Vinheta", "10 s", ""], ["Abertura", "30 s", ""], ["Bloco 1", "1 min", ""], ["Bloco 2", "1 min", ""], ["Bloco 3", "1 min", ""], ["Encerramento", "30 s", ""]])
  ], ["Redação"]);

  A("roteiro-debate", "Prepare um debate regrado", "Tese, argumentos, contra-argumentos e regras de fala.", [
    H.te("O debate regrado", ["Tem **tema**, **lados**, **moderador** e **tempo** para cada fala.", "Apresente **tese** e **argumentos**; ouça; faça **contra-argumentos** com respeito.", "Critique a **ideia**, não a **pessoa**."]),
    H.tab("Ficha do debatedor", ["Item", "Escreva aqui"], [["Tema", ""], ["Minha tese", ""], ["Argumento 1 + dado", ""], ["Argumento 2 + exemplo", ""], ["Contra-argumento esperado", ""], ["Minha resposta", ""]]),
    H.pf("Sugestões de tema", ["Voto aos 16 anos; inteligência artificial na escola; fim da lição de casa; uso de celular em sala; cotas."])
  ], ["Redação", "Interpretação"]);

  A("soneto", "Escreva um soneto", "Estrutura do soneto: dois quartetos e dois tercetos, rimas e tema.", [
    H.te("O soneto", ["Poema de **14 versos**: **dois quartetos** (4 versos) e **dois tercetos** (3 versos).", "Rimas comuns: quartetos **ABBA ABBA**; tercetos **CDC DCD**.", "O **último terceto** costuma trazer a conclusão (**chave de ouro**)."]),
    H.poema("Exemplo: estrutura (esquema de rimas)", "Verso 1 (A)\nVerso 2 (B)\nVerso 3 (B)\nVerso 4 (A)\n\nVerso 5 (A)\nVerso 6 (B)\nVerso 7 (B)\nVerso 8 (A)\n\nVerso 9 (C)\nVerso 10 (D)\nVerso 11 (C)\n\nVerso 12 (D)\nVerso 13 (C)\nVerso 14 (D)"),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Tema (amor, tempo, cidade, memória)", ""], ["Rimas que posso usar (A, B, C, D)", ""], ["Ideia da chave de ouro", ""]]),
    H.ln("Meu soneto", 15)
  ], ["Redação", "Literatura"]);

  A("introducao-conclusao", "Treino: introdução e conclusão de textos argumentativos", "Escrever introduções com tese e conclusões com proposta de intervenção, com agente, ação, meio e finalidade.", [
    H.te("Introdução e conclusão", ["**Introdução**: contextualiza o tema e apresenta a **tese**.", "**Conclusão**: retoma a tese e traz uma **proposta de intervenção** com **agente** (quem), **ação** (o quê), **meio** (como) e **finalidade** (para quê).", "Respeite os **direitos humanos** na proposta."]),
    H.tab("Planejamento (tema: desafios para reduzir o desperdício de alimentos)", ["Passo", "Escreva aqui"], [["Contexto", ""], ["Tese", ""], ["Agente", ""], ["Ação", ""], ["Meio", ""], ["Finalidade", ""]]),
    H.ln("Minha introdução", 6),
    H.ln("Minha conclusão", 8),
    H.pf("Modelo", ["**Introdução:** “No Brasil, toneladas de alimentos são desperdiçadas diariamente, apesar de milhões de pessoas passarem fome. Esse paradoxo se explica pela falta de educação para o consumo e pela deficiência na logística de distribuição.”", "**Conclusão:** “Portanto, o Ministério da Educação (agente) deve incluir educação alimentar no currículo escolar (ação), por meio de projetos e oficinas (meio), a fim de reduzir o desperdício e valorizar o alimento (finalidade).”"])
  ], ["Redação"]);

  A("reescrita", "Revise e reescreva o texto", "Corrigir regência, crase, concordância, pontuação e coesão em um texto longo.", [
    H.i("O texto abaixo tem erros de regência, crase, concordância, pontuação e coesão. Reescreva-o corrigido."),
    H.t("Texto para revisar", "Fazem quase dois anos que os alunos do nono ano assistem os debates da escola. Cada debate são organizado pelos professores, que prefere mais ouvir as opiniões do que impor regras. Os estudantes aspiram uma melhora na qualidade do ensino, porem nem sempre conseguem se expressar. Segue anexo as propostas apresentadas na ultima reunião, as quais foi enviadas a direção. Houveram muitas discussões e todos concordam que o diálogo deve continuar", "Texto original, com erros propositais"),
    H.te("Dicas", ["Regência: //assistir a//, //preferir… a//, //aspirar a//. Concordância: //Faz//, //Houve//, //Seguem anexas//. Crase: //enviadas à direção//. Pontuação e acento."]),
    H.qs([dis("Reescreva o texto corrigido.", "Faz quase dois anos que os alunos do nono ano assistem aos debates da escola. Cada debate é organizado pelos professores, que preferem ouvir as opiniões a impor regras. Os estudantes aspiram a uma melhora na qualidade do ensino, porém nem sempre conseguem se expressar. Seguem anexas as propostas apresentadas na última reunião, as quais foram enviadas à direção. Houve muitas discussões, e todos concordam que o diálogo deve continuar.", 9)]),
    H.pf("Erros plantados", ["//fazem//, //assistem os//, //são organizado//, //prefere mais… do que//, //aspiram uma//, //porem//, //segue anexo as//, //ultima//, //foi enviadas a direção//, //houveram//, falta de vírgula e de ponto final."])
  ]);

  A("ditado", "Ditado de palavras e frases: 9º ano", "Trinta palavras e cinco frases para ortografia, hífen, acentuação e parônimos.", [
    H.i("O professor dita as palavras e as frases. Escreva nas linhas e confira depois."),
    H.tab("Palavras", ["Nº", "Palavra", "Nº", "Palavra", "Nº", "Palavra"], [["1", "", "11", "", "21", ""], ["2", "", "12", "", "22", ""], ["3", "", "13", "", "23", ""], ["4", "", "14", "", "24", ""], ["5", "", "15", "", "25", ""], ["6", "", "16", "", "26", ""], ["7", "", "17", "", "27", ""], ["8", "", "18", "", "28", ""], ["9", "", "19", "", "29", ""], ["10", "", "20", "", "30", ""]]),
    H.ln("Frases", 5),
    H.pf("Lista para ditar", [
      "**Palavras:** 1. autoescola; 2. antissocial; 3. micro-ondas; 4. infraestrutura; 5. semiaberto; 6. extraordinário; 7. anti-inflamatório; 8. super-homem; 9. mantêm; 10. intervêm; 11. têm; 12. vêm; 13. pôr; 14. pôde; 15. aonde; 16. demais; 17. ao encontro; 18. de encontro a; 19. a fim de; 20. acerca; 21. aspiração; 22. prescrição; 23. proscrição; 24. persistência; 25. paralisia; 26. beneficência; 27. coincidência; 28. consciência; 29. exceção; 30. excesso.",
      "**Frases:** 1. As propostas vão ao encontro dos interesses dos alunos. 2. A decisão foi de encontro à lei. 3. Eles têm razão, e todos vêm à reunião. 4. Aonde você vai depois da autoescola? 5. Ela não pôde pôr o micro-ondas na infraestrutura nova."
    ])
  ], ["Gramática"]);
})();
