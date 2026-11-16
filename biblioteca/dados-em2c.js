/* 2º ano do Ensino Médio · Atividades de redação, literatura e ortografia (16 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("2EM"), ob = H.ob, dis = H.dis;

  function A(id, titulo, resumo, blocos, assunto, tempo) {
    Y.m("atividade", "a-" + id, titulo, assunto || ["Redação"], resumo, blocos, tempo || "1 aula");
  }
  var REV = H.tab("Revisão: marque ✓", ["Item", "✓"], [
    ["Há tese clara", ""], ["Os argumentos são desenvolvidos, não só enunciados", ""], ["O repertório é pertinente e produtivo", ""], ["Há conectivos variados entre ideias e parágrafos", ""], ["A proposta tem agente, ação, meio e finalidade", ""], ["Conferi norma culta", ""]
  ]);

  A("tipos-argumento", "Tipos de argumento: exemplificação, autoridade, causa-consequência e comparação", "Reconhecer e produzir quatro estratégias argumentativas.", [
    H.te("Quatro estratégias", ["**Exemplificação**: um caso concreto que ilustra a ideia. **Autoridade**: citação de especialista, lei ou obra. **Causa-consequência**: explica por que algo ocorre e o que decorre. **Comparação**: relaciona dois fatos para esclarecer um deles."]),
    H.tab("Complete com um argumento de cada tipo (tema: desinformação)", ["Tipo", "Argumento"], [["Exemplificação", ""], ["Autoridade", ""], ["Causa-consequência", ""], ["Comparação", ""]]),
    H.pf("Gabarito possível", ["**Exemplificação**: notícias falsas sobre saúde circulam em grupos de família. **Autoridade**: Marco Civil da Internet (Lei nº 12.965/2014). **Causa-consequência**: algoritmos priorizam conteúdo de engajamento, o que amplia boatos. **Comparação**: a informação falsa é como um vírus, que se espalha mais rápido em ambientes sem proteção."])
  ]);

  A("uso-repertorio", "Como usar repertório sem “citação solta”", "Conectar a referência ao argumento, em três passos: apresentar, explicar, relacionar ao tema.", [
    H.te("Três passos", ["**1. Apresentar** (quem/o quê). **2. Explicar** a ideia central. **3. Relacionar** ao tema e à tese, mostrando o ponto de contato.", "Evite repertório decorativo (que poderia sair do texto sem prejuízo)."]),
    H.t("Modelo", "Como apontou Zygmunt Bauman, em “Modernidade líquida”, as relações contemporâneas tendem à fragilidade. No contexto das redes sociais, esse diagnóstico se confirma: vínculos rápidos e substituíveis dificultam o diálogo e favorecem a intolerância.", "Texto original"),
    H.tab("Treino: monte um parágrafo com um repertório à sua escolha", ["Passo", "Escreva aqui"], [["Repertório (apresente)", ""], ["Ideia central (explique)", ""], ["Relação com o tema (conecte)", ""]]),
    H.ln("Meu parágrafo", 8),
    REV
  ]);

  A("redacao-saude-mental", "Redação completa: desafios para a saúde mental dos jovens", "Proposta de dissertação com textos de apoio, indicações e grade de correção.", [
    H.i("Redija um texto dissertativo-argumentativo sobre **“Desafios para a promoção da saúde mental entre os jovens no Brasil”**, com proposta de intervenção que respeite os direitos humanos."),
    H.t("Texto de apoio I", "Pressão por desempenho, uso intenso de telas e falta de espaços de escuta são fatores que podem agravar o sofrimento psíquico na adolescência. Ao mesmo tempo, ainda há pouco acesso a profissionais de saúde mental em escolas e unidades públicas.", "Texto original"),
    H.t("Texto de apoio II", "A Constituição Federal estabelece a saúde como direito de todos e dever do Estado. Isso inclui ações de promoção e prevenção, e não apenas de tratamento.", "Texto adaptado"),
    H.ln("Rascunho / texto definitivo (8 a 30 linhas)", 30),
    H.tab("Grade de correção (0 a 200)", ["Competência", "Nota"], [["C1 · Norma culta", ""], ["C2 · Tema e repertório", ""], ["C3 · Argumentação", ""], ["C4 · Coesão", ""], ["C5 · Proposta de intervenção", ""], [{ t: "Total" }, ""]]),
    H.pf("Sugestões", ["**Repertórios**: Constituição (art. 196), Lei nº 10.216/2001 (reforma psiquiátrica), Zygmunt Bauman (modernidade líquida), Émile Durkheim (anomia).", "**Proposta**: o Ministério da Educação, em parceria com o Sistema Único de Saúde, deve ampliar a presença de psicólogos nas escolas, por meio de concursos e convênios, a fim de acolher os estudantes e prevenir agravamentos."])
  ], ["Redação"], "2 aulas");

  A("redacao-mobilidade", "Redação completa: caminhos para a mobilidade urbana", "Proposta com textos de apoio sobre trânsito, transporte coletivo e qualidade de vida.", [
    H.i("Redija um texto dissertativo-argumentativo sobre **“Caminhos para melhorar a mobilidade urbana no Brasil”**, com proposta de intervenção que respeite os direitos humanos."),
    H.t("Texto de apoio I", "Em muitas cidades brasileiras, o tempo gasto no deslocamento diário aumenta ano após ano. A priorização do transporte individual e a insuficiência de alternativas coletivas estão entre as causas desse problema.", "Texto original"),
    H.t("Texto de apoio II", "Corredores de ônibus, ciclovias seguras e calçadas acessíveis ajudam a reduzir a dependência do carro e tornam a cidade mais inclusiva.", "Texto original"),
    H.ln("Rascunho / texto definitivo (8 a 30 linhas)", 30),
    H.pf("Sugestões", ["**Repertórios**: Política Nacional de Mobilidade Urbana (Lei nº 12.587/2012), Milton Santos (cidadania), Jane Jacobs (vida urbana).", "**Proposta**: as prefeituras devem ampliar corredores de ônibus e ciclovias, por meio de investimentos do orçamento municipal, para garantir deslocamentos mais rápidos e acessíveis."])
  ], ["Redação"], "2 aulas");

  A("redacao-inclusao", "Redação completa: inclusão de pessoas com deficiência", "Redação a partir da coletânea trabalhada na leitura: tese, argumentos e proposta.", [
    H.i("A partir da coletânea “Inclusão de pessoas com deficiência” (atividade de leitura), redija um texto dissertativo-argumentativo sobre **“Desafios para a inclusão de pessoas com deficiência no Brasil”**."),
    H.te("Dicas", ["Use a Lei Brasileira de Inclusão (Lei nº 13.146/2015) como repertório.", "Aponte a **distância entre o direito e a prática** (acessibilidade, educação, trabalho).", "Proponha **agente, ação, meio e finalidade**."]),
    H.ln("Rascunho / texto definitivo (8 a 30 linhas)", 30),
    REV
  ], ["Redação"], "2 aulas");

  A("analise-poema-romantico", "Roteiro de análise de um poema romântico", "Passo a passo para analisar eu lírico, tema, geração e linguagem.", [
    H.poema("Poema para análise", "Senhor Deus dos desgraçados!\nDizei-me vós, Senhor Deus!\nSe é loucura... se é verdade\nTanto horror perante os céus?!", "Castro Alves, O Navio Negreiro, trecho"),
    H.tab("Roteiro", ["Passo", "Escreva aqui"], [["Eu lírico (quem fala? a quem?)", ""], ["Tema", ""], ["Geração romântica e justificativa", ""], ["Figuras e recursos (anáfora, pergunta retórica…)", ""], ["Efeito no leitor", ""]]),
    H.pf("Gabarito", ["Eu lírico indignado dirige-se a Deus; tema: denúncia da escravidão; 3ª geração (condoreira, social); recursos: invocação, pergunta retórica, exclamação; efeito: indignação e comoção."])
  ], ["Literatura", "Interpretação"]);

  A("quadro-romantismo-realismo", "Quadro comparativo: Romantismo × Realismo", "Organizar características, temas, linguagem e autores.", [
    H.tab("Complete o quadro", ["Critério", "Romantismo", "Realismo"], [["Contexto histórico", "", ""], ["Visão de mundo", "", ""], ["Linguagem", "", ""], ["Temas", "", ""], ["Personagens", "", ""], ["Autores e obras", "", ""]]),
    H.pf("Gabarito resumido", ["**Contexto**: Independência e Império × Abolição e República. **Visão de mundo**: idealização × objetividade e crítica. **Linguagem**: emotiva e metafórica × direta e irônica. **Temas**: amor idealizado, natureza, pátria × adultério, hipocrisia, interesse. **Personagens**: heróis e mocinhas × pessoas comuns e ambíguas. **Autores**: Gonçalves Dias, Alencar, Castro Alves × Machado, Aluísio Azevedo, Pompeia, Eça."])
  ], ["Literatura"]);

  A("ficha-leitura-romance", "Ficha de leitura de romance", "Registro de leitura: enredo, personagens, tempo, espaço, narrador e crítica social.", [
    H.te("Como preencher", ["Preencha durante a leitura. **Evite copiar** o resumo da internet: escreva com suas palavras e cite **trechos** (com página)."]),
    H.tab("Ficha", ["Campo", "Escreva aqui"], [["Título, autor e ano", ""], ["Movimento literário", ""], ["Enredo (5 linhas)", ""], ["Personagens principais", ""], ["Tempo e espaço", ""], ["Tipo de narrador", ""], ["Tema e crítica social", ""], ["Trecho marcante (com página)", ""]]),
    H.pf("Sugestões de obras", ["Iracema; Memórias de um Sargento de Milícias; Memórias Póstumas de Brás Cubas; Dom Casmurro; O Cortiço; O Ateneu."])
  ], ["Literatura", "Interpretação"]);

  A("resenha-romance", "Resenha de um romance realista ou naturalista", "Apresentar a obra, relacioná-la ao movimento e avaliar com argumentos.", [
    H.te("Estrutura", ["**Dados da obra**, **contexto**, **resumo** sem spoiler, **análise** (narrador, linguagem, crítica social) e **avaliação**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Obra, autor e movimento", ""], ["Resumo em 4 frases", ""], ["Traços do movimento na obra", ""], ["Avaliação (pontos fortes e fracos)", ""], ["Recomendação", ""]]),
    H.ln("Minha resenha", 18),
    REV
  ], ["Literatura", "Redação"]);

  A("soneto-parnasiano", "Escreva um soneto parnasiano", "Rigor formal: 14 versos, métrica, rima e tema objetivo.", [
    H.te("Parnasianismo", ["**Arte pela arte**, culto à forma, vocabulário preciso, temas objetivos (mitologia, natureza, arte).", "**Soneto**: quartetos ABBA ABBA; tercetos CDC DCD. **Decassílabos**. **Chave de ouro** no último verso."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Tema objetivo (uma paisagem, um objeto, uma obra)", ""], ["Rimas A/B/C/D", ""], ["Chave de ouro", ""]]),
    H.ln("Meu soneto", 15),
    H.pf("Critérios", ["Estrutura do soneto (3) · métrica e rima (3) · vocabulário e imagens (2) · chave de ouro (2)."])
  ], ["Redação", "Literatura"]);

  A("carta-leitor", "Escreva uma carta do leitor (argumentativa)", "Posicionar-se sobre uma matéria ou fato com tese e argumentos, em linguagem formal.", [
    H.te("A carta do leitor", ["Retoma a **matéria** a que responde, apresenta **tese** e **argumentos**, e fecha com **pedido ou proposta**. Linguagem **formal**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Matéria a que respondo", ""], ["Minha tese", ""], ["Argumento 1", ""], ["Argumento 2", ""], ["Fecho", ""]]),
    H.ln("Minha carta", 16),
    REV
  ]);

  A("linha-tempo", "Linha do tempo: do Romantismo ao Simbolismo", "Organizar movimentos, datas e obras do século XIX brasileiro.", [
    H.te("Marcos", ["Romantismo (1836) · Realismo e Naturalismo (1881) · Parnasianismo (1882) · Simbolismo (1893)."]),
    H.tab("Complete", ["Movimento", "Período", "Obras e autores marcantes"], [["Romantismo", "", ""], ["Realismo", "", ""], ["Naturalismo", "", ""], ["Parnasianismo", "", ""], ["Simbolismo", "", ""]]),
    H.pf("Gabarito", ["Romantismo (1836 a 1881): Gonçalves Dias, Alencar, Castro Alves. Realismo (1881): Machado de Assis, Memórias Póstumas. Naturalismo (1881): Aluísio Azevedo, O Cortiço; Raul Pompeia. Parnasianismo (1882): Bilac, Alberto de Oliveira, Raimundo Correia. Simbolismo (1893): Cruz e Sousa, Broquéis; Alphonsus de Guimaraens."])
  ], ["Literatura"]);

  A("pesquisa-seculo-xix", "Pesquisa: o Brasil do século XIX e a literatura", "Relacionar contexto histórico e produção literária: escravidão, Império, urbanização.", [
    H.te("Roteiro de pesquisa", ["Pesquise um fato do século XIX (Independência, Lei do Ventre Livre, Abolição, República) e relacione com um texto literário lido."]),
    H.tab("Ficha", ["Campo", "Escreva aqui"], [["Fato histórico e data", ""], ["Obra literária relacionada", ""], ["Como a obra reflete o contexto?", ""], ["Fontes consultadas", ""]]),
    H.ln("Texto-síntese (10 linhas)", 10)
  ], ["Literatura", "Redação"]);

  A("roteiro-debate-capitu", "Roteiro de debate: Capitu traiu Bentinho?", "Debate literário regrado com argumentos baseados em trechos do romance.", [
    H.te("Regras", ["Dois lados: **“sim, traiu”** e **“não, há dúvida”**. Cada argumento deve ser sustentado por **trecho** do livro. **Moderador** controla o tempo."]),
    H.tab("Ficha do debatedor", ["Item", "Escreva aqui"], [["Meu lado", ""], ["Tese", ""], ["Trecho 1 + interpretação", ""], ["Trecho 2 + interpretação", ""], ["Contra-argumento esperado", ""]]),
    H.pf("Dica", ["Reforce o conceito de narrador pouco confiável: só conhecemos a versão de Bentinho."])
  ], ["Literatura", "Redação"]);

  A("reescrita", "Revise e reescreva um texto dissertativo", "Reescrever com tese, argumentos desenvolvidos, repertório e proposta.", [
    H.i("O texto abaixo tem problemas de tese, repertório, coesão e proposta. Reescreva-o."),
    H.t("Texto para revisar", "Nos dias de hoje, o trânsito nas cidades é um problema muito grande. Tem muito carro e pouco ônibus. Isso faz as pessoas perderem tempo. Então, o governo deveria fazer alguma coisa para resolver isso.", "Texto original, com problemas propositais"),
    H.qs([dis("Reescreva em dois parágrafos (introdução e conclusão com proposta).", "Resposta pessoal. Modelo: “A priorização do transporte individual nas cidades brasileiras tem aumentado o tempo de deslocamento e reduzido a qualidade de vida. Nesse cenário… Portanto, as prefeituras devem ampliar corredores de ônibus e ciclovias, por meio de investimentos do orçamento municipal, a fim de garantir deslocamentos rápidos e acessíveis.”", 9)]),
    REV
  ]);

  A("ditado", "Ditado de palavras e frases: 2º ano do Ensino Médio", "Trinta palavras que mais geram erro em redações e provas.", [
    H.i("O professor dita as palavras e as frases. Escreva nas linhas e confira depois."),
    H.tab("Palavras", ["Nº", "Palavra", "Nº", "Palavra", "Nº", "Palavra"], [["1", "", "11", "", "21", ""], ["2", "", "12", "", "22", ""], ["3", "", "13", "", "23", ""], ["4", "", "14", "", "24", ""], ["5", "", "15", "", "25", ""], ["6", "", "16", "", "26", ""], ["7", "", "17", "", "27", ""], ["8", "", "18", "", "28", ""], ["9", "", "19", "", "29", ""], ["10", "", "20", "", "30", ""]]),
    H.ln("Frases", 5),
    H.pf("Lista para ditar", [
      "**Palavras:** 1. ascensão; 2. conscientização; 3. discriminação; 4. exceção; 5. obsessão; 6. subsídio; 7. paralisação; 8. maquiagem; 9. frequência; 10. beneficência; 11. perspicácia; 12. suscetível; 13. privilégio; 14. contraditório; 15. responsabilidade; 16. aprendizagem; 17. tecnologia; 18. mecanismo; 19. necessário; 20. imprescindível; 21. ratificar; 22. retificar; 23. infringir; 24. infligir; 25. flagrante; 26. fragrante; 27. emergir; 28. imergir; 29. eminente; 30. iminente.",
      "**Frases:** 1. O juiz vai ratificar a sentença e retificar o erro de digitação. 2. A atitude foi um flagrante de desrespeito à lei. 3. A decisão foi de encontro aos interesses da população. 4. Um perigo iminente ameaça o eminente professor. 5. Infringir a lei pode infligir punições severas.",
      "Observação: peça que os alunos expliquem a diferença de cada par parônimo após o ditado."
    ])
  ], ["Gramática"]);
})();
