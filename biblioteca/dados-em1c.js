/* 1º ano do Ensino Médio · Atividades de redação, literatura e ortografia (16 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("1EM"), ob = H.ob, dis = H.dis;

  function A(id, titulo, resumo, blocos, assunto, tempo) {
    Y.m("atividade", "a-" + id, titulo, assunto || ["Redação"], resumo, blocos, tempo || "1 aula");
  }
  var REV = H.tab("Revisão: marque ✓", ["Item", "✓"], [
    ["Há tese clara", ""], ["Os argumentos são desenvolvidos (não só enunciados)", ""], ["Há repertório pertinente", ""], ["Há conectivos entre ideias e parágrafos", ""], ["Conferi norma culta (concordância, regência, crase, pontuação)", ""]
  ]);

  A("paragrafo-abertura", "Introdução com tese: três modelos", "Escrever introduções com contexto, tese e anúncio dos argumentos, a partir de temas diferentes.", [
    H.te("Como abrir uma dissertação", ["**Contexto**: situe o tema (fato, dado, referência histórica ou cultural).", "**Tese**: seu ponto de vista, em frase clara e defensável.", "**Anúncio** (opcional): os dois argumentos que virão.", "Evite aberturas genéricas (//Desde os primórdios…//, //Hoje em dia…//)."]),
    H.t("Modelo", "No Brasil, a educação é garantida pela Constituição como direito de todos; contudo, o acesso a bibliotecas ainda é desigual. Nesse cenário, a valorização da leitura esbarra na falta de investimento e na pouca formação de mediadores, o que exige ação conjunta do poder público e da escola.", "Texto original"),
    H.tab("Treino: escolha um tema e planeje", ["Tema", "Contexto", "Tese"], [["Desinformação nas redes", "", ""], ["Desperdício de alimentos", "", ""], ["Saúde mental dos jovens", "", ""]]),
    H.ln("Escreva uma introdução completa (5 a 7 linhas)", 7),
    REV,
    H.pf("Critérios", ["Contexto específico (2) · tese clara (3) · anúncio dos argumentos (2) · norma culta (2) · coesão (1)."])
  ]);

  A("paragrafo-desenvolvimento", "Parágrafo de desenvolvimento: tópico frasal, argumento e repertório", "Construir um parágrafo argumentativo completo, com repertório sociocultural.", [
    H.te("Estrutura do parágrafo", ["**Tópico frasal**: ideia central do parágrafo.", "**Argumento**: explicação (//isso ocorre porque…//).", "**Repertório**: lei, obra, dado ou fato que sustenta o argumento.", "**Fechamento**: retoma a ideia e liga ao tema."]),
    H.t("Modelo", "Em primeiro lugar, a desinformação prospera devido à lógica de engajamento das redes sociais. Isso ocorre porque conteúdos sensacionalistas geram mais interação e, por isso, são priorizados pelos algoritmos. Como aponta Guy Debord, na sociedade do espetáculo, a aparência tende a prevalecer sobre a realidade. Dessa forma, informações falsas se espalham com mais rapidez do que as verdadeiras.", "Texto original"),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Tópico frasal", ""], ["Argumento", ""], ["Repertório", ""], ["Fechamento", ""]]),
    H.ln("Meu parágrafo", 9),
    REV
  ]);

  A("paragrafo-conclusao", "Conclusão com proposta de intervenção", "Agente, ação, meio, finalidade e detalhamento: treinar a proposta completa.", [
    H.te("Proposta de intervenção", ["**Agente**: quem vai agir. **Ação**: o quê. **Meio/modo**: como. **Finalidade**: para quê. **Detalhamento**: complementa qualquer elemento.", "Respeite os **direitos humanos**; seja **específico** (evite //é preciso que todos…//)."]),
    H.t("Modelo", "Portanto, o Ministério da Educação (agente) deve incluir educação midiática na Base Curricular (ação), por meio de oficinas e de formação de professores (meio), a fim de que os estudantes aprendam a checar fontes (finalidade). Assim, será possível reduzir a circulação de informações falsas.", "Texto original"),
    H.tab("Planejamento (tema: desafios para ampliar o acesso à leitura)", ["Elemento", "Escreva aqui"], [["Agente", ""], ["Ação", ""], ["Meio/modo", ""], ["Finalidade", ""], ["Detalhamento", ""]]),
    H.ln("Minha conclusão", 8),
    REV
  ]);

  A("dissertacao-desinformacao", "Redação completa: desafios para combater a desinformação", "Proposta completa de dissertação-argumentativa, com textos de apoio e grade de correção.", [
    H.i("A partir dos textos de apoio e de seus conhecimentos, redija um texto dissertativo-argumentativo sobre o tema **“Desafios para combater a desinformação no Brasil”**. Apresente proposta de intervenção que respeite os direitos humanos."),
    H.t("Texto de apoio I", "A informação circula hoje com velocidade inédita, mas nem sempre com veracidade. Mensagens com apelo emocional, imagens fora de contexto e manchetes alarmistas se espalham com facilidade, especialmente quando confirmam crenças prévias do leitor.", "Texto original"),
    H.t("Texto de apoio II", "Checar a origem de uma informação, comparar fontes e desconfiar de pedidos urgentes de compartilhamento são hábitos simples que reduzem a circulação de boatos. Para isso, a escola e as plataformas digitais têm papel importante.", "Texto original"),
    H.ln("Rascunho / texto definitivo (8 a 30 linhas)", 30),
    H.tab("Grade de correção (0 a 200 por competência)", ["Competência", "Nota"], [["C1 · Norma culta", ""], ["C2 · Tema e repertório", ""], ["C3 · Argumentação", ""], ["C4 · Coesão", ""], ["C5 · Proposta de intervenção", ""], [{ t: "Total" }, ""]]),
    H.pf("Possível tese e repertórios", ["**Tese**: a desinformação se explica pela lógica das redes e pela falta de educação midiática. **Repertórios**: Guy Debord (sociedade do espetáculo), Marco Civil da Internet (Lei nº 12.965/2014), Zygmunt Bauman (modernidade líquida).", "**Proposta**: o Ministério da Educação deve incluir educação midiática no currículo, por meio de oficinas e formação docente, para que os estudantes aprendam a checar fontes."])
  ], ["Redação"], "2 aulas");

  A("dissertacao-desperdicio", "Redação completa: caminhos para reduzir o desperdício de alimentos", "Proposta de dissertação com textos de apoio, indicações de repertório e critérios.", [
    H.i("Redija um texto dissertativo-argumentativo sobre **“Caminhos para reduzir o desperdício de alimentos no Brasil”**, com proposta de intervenção que respeite os direitos humanos."),
    H.t("Texto de apoio I", "Enquanto toneladas de alimentos são descartadas em feiras, mercados e residências, milhões de pessoas ainda convivem com a insegurança alimentar. Esse paradoxo mostra que o problema não é apenas de produção, mas de distribuição e de consumo.", "Texto original"),
    H.t("Texto de apoio II", "Pequenas ações, como planejar compras, aproveitar sobras e doar o que não será usado, ajudam a reduzir o desperdício. Políticas públicas, como bancos de alimentos, também podem encaminhar comida que seria jogada fora.", "Texto original"),
    H.ln("Rascunho / texto definitivo (8 a 30 linhas)", 30),
    H.pf("Sugestões", ["**Repertórios**: Josué de Castro (Geografia da Fome), Constituição Federal (art. 6º: direito social à alimentação), filme Ilha das Flores (1989).", "**Proposta**: prefeituras e supermercados devem ampliar parcerias com bancos de alimentos, por meio de incentivos fiscais, para que alimentos próprios ao consumo cheguem a quem precisa."])
  ], ["Redação"], "2 aulas");

  A("fichamento", "Fichamento de um texto: resumo e citação", "Registrar ideias principais, citações e comentários pessoais.", [
    H.te("Como fichar", ["**Referência**: autor, título, ano. **Resumo**: ideias principais com suas palavras. **Citações**: trechos entre aspas, com página. **Comentário**: sua análise ou dúvida."]),
    H.tab("Ficha", ["Campo", "Escreva aqui"], [["Referência", ""], ["Resumo (3 a 5 linhas)", ""], ["Citação 1 (com página)", ""], ["Citação 2", ""], ["Meu comentário", ""]]),
    H.pf("Dica", ["Peça que os alunos fichem um capítulo da obra de leitura obrigatória do bimestre."])
  ], ["Redação", "Interpretação"]);

  A("resenha-literaria", "Resenha de uma obra literária", "Apresentar uma obra de leitura obrigatória, contextualizar e avaliar com argumentos.", [
    H.te("A resenha literária", ["Traz **dados da obra**, **contexto** (época, movimento), **resumo** (sem spoiler), **análise** (linguagem, personagens, temas) e **avaliação**.", "A opinião exige **argumentos** e **trechos** como evidência."]),
    H.tab("Ficha da obra", ["Item", "Escreva aqui"], [["Título, autor, ano", ""], ["Movimento literário", ""], ["Resumo em quatro frases", ""], ["Tema central", ""], ["Trecho marcante", ""], ["Avaliação e recomendação", ""]]),
    H.ln("Minha resenha", 18),
    REV
  ], ["Redação", "Literatura"]);

  A("carta-argumentativa", "Carta argumentativa a uma autoridade", "Carta com problema, argumentos e proposta, em linguagem formal.", [
    H.te("A carta argumentativa", ["**Destinatário**, **apresentação do problema**, **argumentos**, **proposta** e **despedida formal** (//Atenciosamente//).", "Linguagem **formal**, sem agressões."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Para quem escrevo?", ""], ["Qual o problema?", ""], ["Argumento 1", ""], ["Argumento 2", ""], ["Proposta", ""]]),
    H.ln("Minha carta", 18),
    REV
  ]);

  A("quadro-trovadorismo-classicismo", "Quadro comparativo: Trovadorismo × Classicismo", "Organizar características, contexto e autores de dois movimentos.", [
    H.te("Como comparar", ["Compare em **contexto histórico**, **visão de mundo**, **forma**, **temas** e **autores**."]),
    H.tab("Complete o quadro", ["Critério", "Trovadorismo", "Classicismo"], [["Período", "", ""], ["Visão de mundo (teocêntrica/antropocêntrica)", "", ""], ["Forma poética", "", ""], ["Temas principais", "", ""], ["Autores e obras", "", ""]]),
    H.pf("Gabarito resumido", ["**Período**: Trovadorismo (séc. XII–XIV; marco 1198); Classicismo (1527–1580). **Visão de mundo**: teocentrismo × antropocentrismo. **Forma**: cantigas × soneto e decassílabo. **Temas**: amor cortês, sátira × amor platônico, razão, feitos épicos. **Autores**: Paio Soares de Taveirós, Dom Dinis × Sá de Miranda, Camões."])
  ], ["Literatura"]);

  A("linha-tempo", "Linha do tempo: do Trovadorismo ao Arcadismo", "Organizar movimentos, datas e autores em ordem cronológica.", [
    H.te("Marcos", ["Trovadorismo (1198) · Humanismo (1418) · Classicismo (1527) · Quinhentismo (1500, Brasil) · Barroco (1580 em Portugal; 1601 no Brasil) · Arcadismo (1756 em Portugal; 1768 no Brasil)."]),
    H.tab("Complete", ["Movimento", "Período", "Autor ou obra marcante"], [["Trovadorismo", "", ""], ["Humanismo", "", ""], ["Classicismo", "", ""], ["Quinhentismo", "", ""], ["Barroco", "", ""], ["Arcadismo", "", ""]]),
    H.pf("Gabarito", ["Trovadorismo: Cantiga da Ribeirinha (1198). Humanismo: Fernão Lopes, Gil Vicente. Classicismo: Camões, Os Lusíadas (1572). Quinhentismo: Carta de Caminha (1500), Anchieta. Barroco: Gregório de Matos, Vieira. Arcadismo: Cláudio Manuel da Costa, Gonzaga."])
  ], ["Literatura"]);

  A("analise-soneto", "Roteiro de análise de um soneto de Camões", "Passo a passo para analisar forma, tema, figuras e sentido de um soneto.", [
    H.poema("Soneto para análise", "Transforma-se o amador na cousa amada,\nPor virtude do muito imaginar;\nNão tenho, logo, mais que desejar,\nPois em mim tenho a parte desejada.", "Luís de Camões, primeira estrofe"),
    H.tab("Roteiro", ["Passo", "Escreva aqui"], [["Forma (nº de versos, estrofes, rimas)", ""], ["Tema", ""], ["Palavras-chave", ""], ["Figuras de linguagem", ""], ["Interpretação em 3 linhas", ""]]),
    H.pf("Dica", ["Peça que escrevam um parágrafo final relacionando o poema ao ideal neoplatônico do Classicismo."])
  ], ["Literatura", "Interpretação"]);

  A("poema-arcade", "Escreva um poema arcádico contemporâneo", "Recriar o ideal bucólico em um cenário atual: campo, praia, rua ou escola.", [
    H.te("Elementos do Arcadismo", ["**Bucolismo**: natureza, vida simples. **Fugere urbem**: fuga da cidade. **Locus amoenus**: lugar agradável. **Carpe diem**: aproveite o dia. **Aurea mediocritas**: equilíbrio e moderação."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Cenário do meu poema", ""], ["Imagens da natureza", ""], ["Mensagem (carpe diem?)", ""]]),
    H.ln("Meu poema", 12),
    H.pf("Critérios", ["Presença de elementos arcádicos (4) · imagens e linguagem (3) · criatividade (3)."])
  ], ["Redação", "Literatura"]);

  A("banco-repertorios", "Meu banco de repertórios socioculturais", "Ficha para registrar dez repertórios e o tema a que servem.", [
    H.te("Como usar", ["Cada repertório deve ter: **fonte**, **ideia central**, **temas em que funciona**. Prefira referências que você conhece de verdade."]),
    H.tab("Ficha", ["Repertório", "Ideia central", "Temas em que funciona"], [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]]),
    H.pf("Sugestões", ["Constituição de 1988; Declaração Universal dos Direitos Humanos; Paulo Freire; Zygmunt Bauman; Guy Debord; Hannah Arendt; Machado de Assis; Carolina Maria de Jesus; filme Tempos Modernos; Lei Maria da Penha."])
  ], ["Redação"]);

  A("pesquisa-variacao", "Pesquisa de campo: variação linguística na minha comunidade", "Coletar palavras e expressões regionais e sociais e analisá-las.", [
    H.te("Como pesquisar", ["Entreviste **três pessoas** de idades ou origens diferentes. Registre palavras, gírias ou expressões. Compare e classifique: **regional**, **social**, **histórica**, **situacional**."]),
    H.tab("Registro", ["Entrevistado (idade/origem)", "Palavra ou expressão", "Significado", "Tipo de variação"], [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]),
    H.ln("Conclusões (5 linhas)", 5),
    H.pf("Critérios", ["Coleta (3) · classificação (3) · análise (4)."])
  ], ["Redação", "Gramática"]);

  A("reescrita", "Revise e reescreva um texto dissertativo", "Corrigir tese, coesão, repertório e norma culta em um texto com problemas.", [
    H.i("O texto abaixo tem problemas de tese, coesão, repertório e norma culta. Reescreva-o, melhorando-o."),
    H.t("Texto para revisar", "Hoje em dia a internet é muito usada e tem muita noticia falsa. Muita gente acredita e compartilha sem pensar. Isso é um problema muito sério pra sociedade. Então, as pessoas deveriam parar de compartilhar coisa falsa e o governo tem que fazer alguma coisa.", "Texto original, com problemas propositais"),
    H.te("Dicas", ["Troque a abertura genérica por **contexto específico**; apresente **tese clara**; desenvolva **argumento com repertório**; use **conectivos** variados; proponha **agente, ação, meio e finalidade**."]),
    H.qs([dis("Reescreva o texto (introdução, um desenvolvimento e conclusão).", "Resposta pessoal. Modelo: “Na era digital, a velocidade da circulação de informações facilita a propagação de notícias falsas. Isso ocorre porque as redes priorizam conteúdos de forte apelo emocional… Portanto, o Ministério da Educação deve incluir educação midiática no currículo, por meio de oficinas…”", 10)]),
    REV
  ]);

  A("ditado-enem", "Ditado de palavras: ortografia e acentuação para o ENEM", "Trinta palavras que mais geram erro em redações, com frases de apoio.", [
    H.i("O professor dita as palavras e as frases. Escreva nas linhas e confira depois."),
    H.tab("Palavras", ["Nº", "Palavra", "Nº", "Palavra", "Nº", "Palavra"], [["1", "", "11", "", "21", ""], ["2", "", "12", "", "22", ""], ["3", "", "13", "", "23", ""], ["4", "", "14", "", "24", ""], ["5", "", "15", "", "25", ""], ["6", "", "16", "", "26", ""], ["7", "", "17", "", "27", ""], ["8", "", "18", "", "28", ""], ["9", "", "19", "", "29", ""], ["10", "", "20", "", "30", ""]]),
    H.ln("Frases", 5),
    H.pf("Lista para ditar", [
      "**Palavras:** 1. a fim de; 2. acerca de; 3. há cerca de; 4. ao encontro de; 5. de encontro a; 6. por que; 7. porque; 8. porquê; 9. mal; 10. mau; 11. mas; 12. mais; 13. afim; 14. senão; 15. se não; 16. onde; 17. aonde; 18. exceção; 19. excesso; 20. ascensão; 21. cidadania; 22. consciência; 23. coincidência; 24. paralisia; 25. privilégio; 26. beneficência; 27. maquiagem; 28. frequência; 29. subsídio; 30. obsessão.",
      "**Frases:** 1. Estudamos a fim de entender o tema acerca do qual ele falou. 2. A medida vai ao encontro dos interesses da população. 3. A decisão foi de encontro à lei. 4. Por que ele saiu? Porque estava cansado; não sei o porquê. 5. Se não chover, iremos; senão, ficaremos."
    ])
  ], ["Gramática"]);
})();
