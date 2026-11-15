/* 8º ano · Atividades de produção de texto, oralidade e ortografia (14 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("8"), ob = H.ob, dis = H.dis;

  function A(id, titulo, resumo, blocos, assunto, tempo) {
    Y.m("atividade", "a-" + id, titulo, assunto || ["Redação"], resumo, blocos, tempo || "1 aula");
  }
  var REV = H.tab("Revisão: marque ✓", ["Item", "✓"], [
    ["O texto tem introdução, desenvolvimento e conclusão", ""], ["Há coesão entre os parágrafos (conectivos)", ""], ["Conferi a pontuação, a concordância e a ortografia", ""], ["Evitei repetições e linguagem informal demais", ""]
  ]);

  A("conto-fantastico", "Escreva um conto fantástico", "Narrativa com um elemento sobrenatural que convive com o cotidiano.", [
    H.te("O conto fantástico", ["Mistura o **cotidiano** com um fato **inexplicável** (um objeto que age sozinho, um reflexo, um sonho que se repete).", "Mantém a **dúvida**: é real ou imaginação? O final costuma ser **aberto** ou **surpreendente**.", "Use **verbos no passado** e uma linguagem que crie atmosfera."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Quem é o personagem e onde está?", ""], ["Que fato fantástico acontece?", ""], ["Como o personagem reage (explicação racional × medo)?", ""], ["Como termina? Deixa dúvida?", ""]]),
    H.ln("Meu conto fantástico (título: ____________________)", 24),
    REV,
    H.pf("Critérios", ["Estrutura narrativa (3) · elemento fantástico e atmosfera (3) · coesão e linguagem (2) · ortografia e pontuação (2)."])
  ], ["Redação", "Literatura"], "2 aulas");

  A("cronica", "Escreva uma crônica", "Crônica a partir de uma cena observada: humor, lirismo e reflexão.", [
    H.te("A crônica", ["Parte de um **fato do cotidiano** e o transforma em reflexão, humor ou lirismo.", "Pode ser em **1ª pessoa**, com linguagem próxima da fala e um **fecho** que faz pensar.", "Observe: o que há de **inesperado** ou **significativo** na cena?"]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Que cena observei?", ""], ["O que ela me fez pensar ou sentir?", ""], ["Que recurso uso (humor, comparação, ironia)?", ""], ["Como fecho o texto?", ""]]),
    H.ln("Minha crônica", 20),
    REV
  ], ["Redação"], "2 aulas");

  A("reportagem", "Escreva uma reportagem", "Pesquisa, fontes, estrutura e linguagem de uma reportagem curta.", [
    H.te("A reportagem", ["Aprofunda um **tema** com **dados**, **fontes** (pessoas e documentos) e **contexto**.", "Tem **título**, **linha fina** (subtítulo), **introdução**, **desenvolvimento** e **fechamento**.", "Linguagem **objetiva**, com falas entre aspas."]),
    H.tab("Plano da reportagem", ["Item", "Escreva aqui"], [["Tema (ex.: lixo na escola, tempo de tela)", ""], ["Pergunta central", ""], ["Fonte 1 (pessoa ou documento)", ""], ["Fonte 2", ""], ["Dado ou fato importante", ""]]),
    H.ln("Minha reportagem", 20),
    REV
  ], ["Redação"], "2 aulas");

  A("carta-aberta", "Escreva uma carta aberta", "Pedido coletivo a uma autoridade: contexto, argumentos e solicitação.", [
    H.te("A carta aberta", ["Dirigida a uma **autoridade** (prefeito, diretor, empresa), mas **tornada pública**.", "Estrutura: **destinatário**, **apresentação de quem escreve**, **problema**, **argumentos** e **pedido**.", "Linguagem **formal** e **respeitosa**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Para quem escrevo?", ""], ["Qual é o problema?", ""], ["Argumento 1", ""], ["Argumento 2", ""], ["O que peço?", ""]]),
    H.ln("Minha carta aberta", 16),
    REV
  ]);

  A("artigo-opiniao", "Escreva um artigo de opinião", "Tese, argumentos com dados ou exemplos, concessão e conclusão.", [
    H.te("O artigo de opinião", ["**Tese**: o seu ponto de vista. **Argumentos**: razões, exemplos e dados. **Concessão**: reconhecer um ponto do outro lado. **Conclusão**: retomar a tese e propor algo.", "Use conectivos: //além disso, porém, portanto, por exemplo//."]),
    H.tab("Planejamento (escolha: tempo de tela? lição de casa? uniforme?)", ["Passo", "Escreva aqui"], [["Tema e tese", ""], ["Argumento 1 (com exemplo)", ""], ["Argumento 2 (com dado ou fato)", ""], ["Concessão", ""], ["Conclusão", ""]]),
    H.ln("Meu artigo de opinião", 24),
    REV,
    H.pf("Critérios", ["Tese clara (2) · argumentos desenvolvidos (3) · concessão e conectivos (2) · conclusão (1) · norma culta (2)."])
  ], ["Redação"], "2 aulas");

  A("resenha-critica", "Escreva uma resenha crítica", "Apresentar a obra, resumir sem spoilers e opinar com argumentos.", [
    H.te("A resenha crítica", ["Traz **dados da obra**, **resumo** curto (sem contar o final), **análise** (o que funciona e o que não funciona) e **recomendação**.", "A opinião precisa de **argumentos**: //Gostei da trama porque…//"]),
    H.tab("Ficha da obra", ["Item", "Escreva aqui"], [["Título, autor e gênero", ""], ["Resumo em duas frases", ""], ["Ponto forte (e por quê)", ""], ["Ponto fraco (e por quê)", ""], ["Para quem indico", ""]]),
    H.ln("Minha resenha crítica", 16),
    REV
  ], ["Redação", "Interpretação"]);

  A("roteiro-debate", "Prepare um debate regrado", "Roteiro de argumentos, contra-argumentos e regras de fala para um debate em sala.", [
    H.te("O debate regrado", ["Tem **tema**, **dois lados**, **moderador** e **tempo** para cada fala.", "Cada debatedor apresenta **tese** e **argumentos**, ouve o outro lado e faz **contra-argumentos** com respeito.", "Evite **ataques pessoais**: critique a ideia, não a pessoa."]),
    H.tab("Ficha do debatedor", ["Item", "Escreva aqui"], [["Tema do debate", ""], ["Minha tese", ""], ["Argumento 1", ""], ["Argumento 2", ""], ["Contra-argumento que posso ouvir", ""], ["Como vou responder", ""]]),
    H.pf("Sugestões de tema", ["Celular na escola; lição de casa; voto aos 16 anos; recreio mais longo; uso de uniforme."])
  ], ["Redação", "Interpretação"]);

  A("roteiro-seminario", "Prepare um seminário", "Roteiro para pesquisar, organizar e apresentar um tema em grupo.", [
    H.te("O seminário", ["**Pesquisa** em duas ou mais fontes confiáveis.", "**Roteiro**: introdução, três tópicos e conclusão; cada integrante fala em um bloco.", "**Apoio visual**: slides ou cartaz com poucas palavras e imagens."]),
    H.tab("Roteiro", ["Parte", "Quem fala", "Resumo do conteúdo"], [["Introdução", "", ""], ["Tópico 1", "", ""], ["Tópico 2", "", ""], ["Tópico 3", "", ""], ["Conclusão", "", ""]]),
    H.tab("Fontes", ["Fonte", "O que aprendi"], [["", ""], ["", ""]]),
    H.pf("Critérios de avaliação", ["Conteúdo e pesquisa (3) · organização (2) · oralidade: voz, postura, clareza (3) · apoio visual (2)."])
  ], ["Redação", "Interpretação"], "2 aulas");

  A("parodia", "Crie uma paródia de poema", "Paródia a partir da Canção do Exílio: manter a forma, mudar o sentido.", [
    H.te("A paródia", ["**Paródia** retoma um texto conhecido e o transforma, em geral com humor ou crítica.", "Mantém a **forma** (versos, rimas, estrutura) e muda o **assunto**."]),
    H.poema("Texto-base · Canção do exílio (Gonçalves Dias, 1843)", "Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.", "Gonçalves Dias, trecho"),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Qual será o novo assunto? (escola, cidade, internet…)", ""], ["Que elementos vou trocar?", ""], ["Que efeito quero causar (humor, crítica)?", ""]]),
    H.ln("Minha paródia", 8),
    H.pf("Exemplo", ["“Minha escola tem recreio, / onde canta o sinal; / os alunos, que aqui brincam, / não brincam como no quintal.”"])
  ], ["Redação", "Literatura"]);

  A("poema-versos-livres", "Escreva um poema em versos livres", "Poema sem rimas obrigatórias: imagens, ritmo e escolhas de palavras.", [
    H.te("Versos livres", ["Não têm **rima** nem **métrica** fixas. O que importa são as **imagens** (metáforas, comparações), o **ritmo** e o **sentido**.", "Cuidado com as **quebras de linha**: cada verso deve ter um motivo."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Tema (cidade, infância, chuva, silêncio…)", ""], ["Três imagens (metáforas ou comparações)", ""], ["Sentimento principal", ""]]),
    H.ln("Meu poema", 10),
    H.pf("Critérios", ["Imagens poéticas (4) · ritmo e escolha de palavras (3) · coerência com o tema (3)."])
  ], ["Redação", "Literatura"]);

  A("entrevista", "Planeje e escreva uma entrevista com um profissional", "Pesquisar, elaborar perguntas, entrevistar e redigir o texto final.", [
    H.te("A entrevista", ["Escolha um **profissional** (professor, enfermeiro, comerciante, atleta).", "Prepare **perguntas abertas** e uma de **abertura** e uma de **fechamento**.", "Registre as respostas e escreva em **perguntas e respostas** ou em **reportagem**."]),
    H.tab("Roteiro", ["Nº", "Pergunta"], [["1", ""], ["2", ""], ["3", ""], ["4", ""], ["5", ""], ["6", ""]]),
    H.ln("Registro das respostas e texto final", 16),
    REV
  ]);

  A("resumo-esquema", "Resumo, esquema e mapa de ideias", "Reduzir um texto às ideias principais e organizá-las em esquema.", [
    H.te("Como resumir", ["1. Leia e **sublinhe** as ideias principais. 2. Faça um **esquema** (título e tópicos). 3. Reescreva com **suas palavras**, sem copiar, em até **um terço** do tamanho."]),
    H.t("Texto para resumir", "Os rios são fundamentais para a vida: abastecem cidades, irrigam plantações e abrigam uma grande variedade de seres vivos. Contudo, a poluição e o desmatamento das margens ameaçam esses ecossistemas. A mata ciliar, vegetação que protege as margens, evita que a terra desmorone e que a água fique turva. Por isso, proteger os rios exige ações coletivas, como descartar o lixo corretamente e economizar água.", "Texto informativo"),
    H.tab("Esquema", ["Tópico", "Subtópicos"], [["Importância dos rios", ""], ["Ameaças", ""], ["O que fazer", ""]]),
    H.qs([dis("Escreva um resumo de até quatro linhas.", "Os rios abastecem cidades, irrigam plantações e abrigam seres vivos, mas sofrem com poluição e desmatamento. A mata ciliar os protege. É preciso agir coletivamente: descartar o lixo e economizar água.", 5)]),
    REV
  ], ["Redação", "Interpretação"]);

  A("reescrita", "Revise e reescreva o texto", "Corrigir ortografia, pontuação, concordância, regência e repetições.", [
    H.i("O texto abaixo tem erros de ortografia, pontuação, concordância e regência. Reescreva-o corrigido."),
    H.t("Texto para revisar", "Fazem dois anos que a escola implantou um projeto de leitura. Os alunos assisti filmes, e discutem os livros que foi lido. A professora e os monitores acompanha o trabalho. Eu prefiro mais ler do que assistir, porem todos concorda que o projeto é interessante. Seguem anexo as fotos da exposição que aconteceu na semana passada", "Texto original, com erros propositais"),
    H.te("Dicas", ["//Fazem// → //Faz//. Concordância verbal (sujeito composto). Regência: //assistir a//, //preferir… a//. Pontuação e acento. //Anexo// concorda."]),
    H.qs([dis("Reescreva o texto corrigido.", "Faz dois anos que a escola implantou um projeto de leitura. Os alunos assistem a filmes e discutem os livros que foram lidos. A professora e os monitores acompanham o trabalho. Eu prefiro ler a assistir, porém todos concordam que o projeto é interessante. Seguem anexas as fotos da exposição que aconteceu na semana passada.", 8)]),
    H.pf("Erros plantados", ["//Fazem// (impessoal), //assisti// (concordância e regência), //filmes e discutem// (vírgula), //foi lido//, //acompanha//, //prefiro mais ler do que assistir//, //porem// (acento), //concorda//, //seguem anexo//, falta de ponto final."])
  ]);

  A("ditado", "Ditado de palavras e frases: 8º ano", "Trinta palavras e cinco frases para ortografia, acentuação e homônimos.", [
    H.i("O professor dita as palavras e as frases. Escreva nas linhas e confira depois."),
    H.tab("Palavras", ["Nº", "Palavra", "Nº", "Palavra", "Nº", "Palavra"], [["1", "", "11", "", "21", ""], ["2", "", "12", "", "22", ""], ["3", "", "13", "", "23", ""], ["4", "", "14", "", "24", ""], ["5", "", "15", "", "25", ""], ["6", "", "16", "", "26", ""], ["7", "", "17", "", "27", ""], ["8", "", "18", "", "28", ""], ["9", "", "19", "", "29", ""], ["10", "", "20", "", "30", ""]]),
    H.ln("Frases", 5),
    H.pf("Lista para ditar", [
      "**Palavras:** 1. ratificar; 2. retificar; 3. tráfego; 4. tráfico; 5. cumprimento; 6. comprimento; 7. infringir; 8. discriminar; 9. descrição; 10. discrição; 11. mal-humorado; 12. concessão; 13. convicção; 14. exceção; 15. paralisação; 16. pretensão; 17. subsídio; 18. ascensão; 19. obsessão; 20. extensão; 21. suscetível; 22. aterrissagem; 23. necessário; 24. privilégio; 25. beneficente; 26. maquiagem; 27. imprescindível; 28. proeminente; 29. exagero; 30. jovialidade.",
      "**Frases:** 1. O juiz vai ratificar a sentença e retificar o erro de digitação. 2. O tráfego estava intenso quando o carro infringiu a lei. 3. Na ascensão profissional, não se deve discriminar ninguém. 4. A descrição do local foi feita com discrição. 5. O comprimento da mesa e o cumprimento do prazo foram conferidos.",
      "Atenção às pares parônimas: peça que os alunos expliquem a diferença de cada par depois do ditado."
    ])
  ], ["Gramática"]);
})();
