/* 1º ano do Ensino Médio · Slides (12), mapas mentais (10) e aulas de emergência (12). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("1EM"), ob = H.ob, dis = H.dis;

  /* ---------------- SLIDES ---------------- */
  Y.sl("sl-generos-versificacao", "Slides · Gêneros literários e versificação", "8 slides: lírico, épico e dramático; verso, estrofe, métrica e rima.", [
    { capa: true, t: "Gêneros literários e versificação", sub: "Lírico, épico e dramático" },
    { t: "Gênero lírico", li: ["Expressa **sentimentos** e visões subjetivas", "Predomina o eu lírico: poemas, sonetos, cantigas"] },
    { t: "Gênero épico (narrativo)", li: ["Conta **feitos** de um herói ou de um povo", "Exemplo: Os Lusíadas, de Camões"] },
    { t: "Gênero dramático", li: ["Feito para a **encenação**", "Falas, rubricas, cenas", "Exemplo: Auto da Barca do Inferno, de Gil Vicente"] },
    { t: "Verso, estrofe e rima", li: ["**Verso**: linha do poema", "**Estrofe**: grupo de versos (quadra, terceto, oitava)", "**Rima**: semelhança de sons finais (soante, toante)"] },
    { t: "Métrica", li: ["Conta-se até a **última sílaba tônica**", "Redondilha menor (5 sílabas) e maior (7)", "Decassílabo (10): heroico e sáfico"] },
    { t: "Soneto", li: ["14 versos: 2 quartetos + 2 tercetos", "Esquema comum: ABBA ABBA CDC DCD", "Popularizado no Classicismo"] },
    { t: "Vamos praticar", li: ["Classifique: soneto de Camões · Os Lusíadas · Auto da Barca do Inferno"], nota: "Respostas: lírico; épico; dramático." }
  ], ["Literatura"]);

  Y.sl("sl-trovadorismo", "Slides · Trovadorismo", "8 slides: contexto, cantigas líricas e satíricas, novelas de cavalaria.", [
    { capa: true, t: "Trovadorismo", sub: "Séculos XII a XIV · Portugal" },
    { t: "Contexto", li: ["Idade Média: teocentrismo e feudalismo", "Poesia cantada, acompanhada de música", "**Trovadores** (autores) e **jograis** (intérpretes)"] },
    { t: "Marco inicial", li: ["Cantiga da Ribeirinha (1198), de Paio Soares de Taveirós", "Alguns estudiosos indicam 1189"] },
    { t: "Cantigas líricas", li: ["**Cantiga de amor**: eu lírico masculino; dama inatingível; vassalagem; coita", "**Cantiga de amigo**: eu lírico feminino; saudade do amado"] },
    { t: "Cantigas satíricas", li: ["**Escárnio**: crítica indireta, com ironia", "**Maldizer**: crítica direta, ofensiva"] },
    { t: "Prosa", li: ["**Novelas de cavalaria**: Ciclo Arturiano, Demanda do Santo Graal", "Valores: honra, fé, coragem"] },
    { t: "Cancioneiros", li: ["Reúnem as cantigas: da Ajuda, da Vaticana, da Biblioteca Nacional (Colocci-Brancuti)"] },
    { t: "Vamos praticar", li: ["Em qual cantiga a voz é feminina?", "O que é vassalagem amorosa?"], nota: "Respostas: cantiga de amigo; o trovador se coloca como servidor da dama, como o vassalo ao senhor." }
  ], ["Literatura"]);

  Y.sl("sl-humanismo", "Slides · Humanismo", "7 slides: contexto, Fernão Lopes, Gil Vicente e poesia palaciana.", [
    { capa: true, t: "Humanismo", sub: "1418 a 1527 · Portugal" },
    { t: "Contexto", li: ["Transição da Idade Média para a Moderna", "Expansão marítima, comércio e valorização do ser humano", "Antropocentrismo em crescimento"] },
    { t: "Fernão Lopes", li: ["Cronista-mor do reino (1418, marco do Humanismo)", "Escreve crônicas históricas com valorização do povo"] },
    { t: "Gil Vicente", li: ["Pai do teatro português", "Primeira peça: Auto da Visitação (1502)", "Auto da Barca do Inferno (1517)"] },
    { t: "Auto da Barca do Inferno", li: ["Duas barcas: Inferno e Paraíso", "Personagens são tipos sociais e seus vícios", "Sátira de costumes e moralidade religiosa"] },
    { t: "Poesia palaciana", li: ["Reunida no Cancioneiro Geral (1516), de Garcia de Resende", "Poesia de corte, mais elaborada e menos musical"] },
    { t: "Vamos praticar", li: ["Quem é condenado na barca do Inferno? Por quê?"], nota: "Resposta: o Fidalgo, o Onzeneiro, o Frade, o Juiz etc., por vícios como orgulho, ganância, hipocrisia e corrupção." }
  ], ["Literatura"]);

  Y.sl("sl-classicismo", "Slides · Classicismo e Camões", "8 slides: contexto, características, lírica e épica de Camões.", [
    { capa: true, t: "Classicismo", sub: "1527 a 1580 · Portugal" },
    { t: "Contexto", li: ["Renascimento: antropocentrismo e retorno à Antiguidade", "Marco: 1527, Sá de Miranda traz da Itália a “medida nova”", "Fim: 1580, morte de Camões e domínio espanhol"] },
    { t: "Características", li: ["Razão, equilíbrio e perfeição formal", "Imitação dos modelos greco-latinos", "Neoplatonismo e petrarquismo"] },
    { t: "Medida nova", li: ["Soneto, ode, écloga, elegia", "Verso **decassílabo**"] },
    { t: "Camões: lírica", li: ["Sonetos de tema amoroso e filosófico", "Contradições do amor: “Amor é fogo que arde sem se ver”", "Desconcerto do mundo"] },
    { t: "Camões: épica", li: ["**Os Lusíadas** (1572)", "10 cantos, 1.102 estrofes, oitava rima (ABABABCC)", "Herói coletivo: o povo português"] },
    { t: "Partes de Os Lusíadas", li: ["Proposição · Invocação · Dedicatória · Narração · Epílogo"] },
    { t: "Vamos praticar", li: ["Qual é o marco do Classicismo?", "Quais as características da estrofe de Os Lusíadas?"], nota: "Respostas: 1527; oitava rima, decassílabos heroicos." }
  ], ["Literatura"]);

  Y.sl("sl-lusiadas", "Slides · Os Lusíadas", "7 slides: estrutura, enredo e planos narrativos.", [
    { capa: true, t: "Os Lusíadas", sub: "A epopeia portuguesa (1572)" },
    { t: "Estrutura", li: ["Poema épico em **10 cantos**", "1.102 estrofes de oito versos", "Decassílabos heroicos, rima ABABABCC"] },
    { t: "Proposição e Invocação", li: ["**Proposição**: cantar os feitos dos portugueses", "**Invocação**: pedido às Tágides (ninfas do Tejo)"] },
    { t: "Os planos da narrativa", li: ["**Viagem**: Vasco da Gama rumo à Índia", "**História de Portugal**: reis e batalhas", "**Mitologia**: deuses (Vênus protege os portugueses; Baco os combate)", "**Reflexões** do poeta"] },
    { t: "Episódios famosos", li: ["Inês de Castro", "O Velho do Restelo", "O Gigante Adamastor", "A Ilha dos Amores"] },
    { t: "Sentido do poema", li: ["Exaltação dos feitos portugueses", "Mas também crítica à ambição e aos males do reino"] },
    { t: "Vamos praticar", li: ["O que é o herói coletivo?", "Quem é o Velho do Restelo?"], nota: "Respostas: o povo português; personagem que critica a aventura marítima." }
  ], ["Literatura"]);

  Y.sl("sl-quinhentismo", "Slides · Quinhentismo", "7 slides: literatura informativa e de catequese no Brasil do século XVI.", [
    { capa: true, t: "Quinhentismo", sub: "Século XVI · Brasil" },
    { t: "Contexto", li: ["Chegada dos portugueses (1500)", "Não é literatura brasileira, mas literatura **sobre** o Brasil", "Dois grupos: informativa e de catequese"] },
    { t: "Literatura informativa", li: ["Relatos de viajantes e cronistas", "Pero Vaz de Caminha: Carta a D. Manuel (1500)", "Pero de Magalhães Gândavo, Gabriel Soares de Sousa"] },
    { t: "Literatura de catequese", li: ["Jesuítas: José de Anchieta e Manuel da Nóbrega", "Autos, poesia e gramática do tupi", "Objetivo: converter os indígenas"] },
    { t: "Visão do colonizador", li: ["O indígena é visto com curiosidade e superioridade", "A terra é descrita como rica e fértil"] },
    { t: "Anchieta", li: ["Poeta e dramaturgo; “Arte de gramática da língua mais usada na costa do Brasil” (1595)", "Autos em tupi, espanhol e português"] },
    { t: "Vamos praticar", li: ["Qual a diferença entre literatura informativa e de catequese?"], nota: "Resposta: a informativa descreve a terra e o povo; a de catequese busca converter os indígenas." }
  ], ["Literatura"]);

  Y.sl("sl-barroco", "Slides · Barroco", "8 slides: contexto, características, Vieira e Gregório de Matos.", [
    { capa: true, t: "Barroco", sub: "Séculos XVII e XVIII" },
    { t: "Contexto", li: ["Contrarreforma católica", "Conflito entre fé e razão, espírito e matéria", "Portugal: 1580 a 1756 · Brasil: 1601 (Prosopopeia)"] },
    { t: "Características", li: ["**Dualismo**: culpa × prazer, céu × terra", "Antítese, paradoxo e hipérbole", "Exagero formal e emoção"] },
    { t: "Cultismo e conceptismo", li: ["**Cultismo**: jogo de palavras, exagero formal (Góngora)", "**Conceptismo**: jogo de ideias, raciocínio (Quevedo, Vieira)"] },
    { t: "Gregório de Matos", li: ["“Boca do Inferno” (1636–1696)", "Lírica, religiosa e satírica", "Crítica à sociedade baiana"] },
    { t: "Padre Antônio Vieira", li: ["Sermões, cartas e profecias (1608–1697)", "Sermão de Santo Antônio aos Peixes (1654)", "Defesa dos indígenas contra a escravidão"] },
    { t: "Comparando os dois", li: ["Gregório: poesia, sátira, dualismo", "Vieira: prosa oratória, alegoria, conceptismo"] },
    { t: "Vamos praticar", li: ["Qual a diferença entre cultismo e conceptismo?"], nota: "Resposta: cultismo = forma e linguagem rebuscada; conceptismo = jogo de ideias e argumentos." }
  ], ["Literatura"]);

  Y.sl("sl-arcadismo", "Slides · Arcadismo", "8 slides: contexto, ideais, autores e obras.", [
    { capa: true, t: "Arcadismo", sub: "1756 (Portugal) e 1768 (Brasil) a 1836" },
    { t: "Contexto", li: ["Iluminismo: razão e crítica ao absolutismo", "Burguesia em ascensão", "Inconfidência Mineira (1789)"] },
    { t: "Ideais árcades", li: ["**Bucolismo**: vida no campo", "**Fugere urbem**: fuga da cidade", "**Locus amoenus**: lugar aprazível", "**Carpe diem**: aproveite o dia", "**Aurea mediocritas**: equilíbrio e moderação", "**Inutilia truncat**: corte o inútil"] },
    { t: "Pseudônimos pastoris", li: ["Cláudio Manuel da Costa: Glauceste Satúrnio", "Tomás Antônio Gonzaga: Dirceu", "Amada: Marília"] },
    { t: "Obras e autores", li: ["Cláudio Manuel da Costa: Obras Poéticas (1768, marco)", "Gonzaga: Marília de Dirceu (1792); Cartas Chilenas", "Basílio da Gama: O Uraguai (1769)", "Santa Rita Durão: Caramuru (1781)"] },
    { t: "Barroco × Arcadismo", li: ["Barroco: dualismo, exagero, emoção", "Arcadismo: equilíbrio, simplicidade, razão"] },
    { t: "Poesia épica árcade", li: ["O Uraguai: crítica aos jesuítas e valorização do indígena como herói", "Caramuru: lenda de Diogo Álvares Correia"] },
    { t: "Vamos praticar", li: ["Explique “fugere urbem” e “carpe diem”."], nota: "Respostas: fuga da cidade para o campo; aproveitar o presente." }
  ], ["Literatura"]);

  Y.sl("sl-funcoes-linguagem", "Slides · Funções da linguagem", "7 slides: as seis funções de Jakobson com exemplos.", [
    { capa: true, t: "Funções da linguagem", sub: "Roman Jakobson" },
    { t: "Referencial", li: ["Foco no contexto (informar)", "3ª pessoa, linguagem objetiva", "“O dólar fechou em alta.”"] },
    { t: "Emotiva e conativa", li: ["**Emotiva**: foco no emissor (1ª pessoa, exclamações)", "**Conativa**: foco no receptor (imperativo, vocativo)"] },
    { t: "Poética", li: ["Foco na **mensagem**: sons, imagens, ritmo", "Poemas, slogans, letras de música"] },
    { t: "Fática", li: ["Foco no **canal**: manter o contato", "“Alô? Está me ouvindo?”"] },
    { t: "Metalinguística", li: ["A língua fala dela mesma", "Dicionário, poema sobre poesia, gramática"] },
    { t: "Vamos praticar", li: ["“Doe sangue. Salve vidas.” · “Ontem choveu muito.” · “Que saudade!”"], nota: "Respostas: conativa; referencial; emotiva." }
  ], ["Gramática", "Interpretação"]);

  Y.sl("sl-figuras", "Slides · Figuras de linguagem", "8 slides: palavra, pensamento e sintaxe, com exemplos.", [
    { capa: true, t: "Figuras de linguagem", sub: "Palavra, pensamento e sintaxe" },
    { t: "De palavra", li: ["**Metáfora**, **comparação**, **metonímia**", "**Catacrese**: pé da mesa", "**Sinestesia**: voz doce"] },
    { t: "De pensamento: oposição", li: ["**Antítese**: amor e ódio", "**Paradoxo**: contentamento descontente", "**Ironia**: diz o contrário do que pensa"] },
    { t: "De pensamento: intensidade", li: ["**Hipérbole**: exagero", "**Eufemismo**: suaviza", "**Gradação**: sequência crescente ou decrescente"] },
    { t: "Personificação", li: ["Traços humanos a seres não humanos", "“O vento sussurrava.”"] },
    { t: "De sintaxe", li: ["**Elipse**: omissão", "**Hipérbato**: inversão", "**Zeugma**: omissão de termo já citado"] },
    { t: "Efeitos de sentido", li: ["Expressividade, humor, crítica, emoção"] },
    { t: "Vamos praticar", li: ["Classifique: “Pé da mesa” · “Contentamento descontente” · “Li Camões”"], nota: "Respostas: catacrese; paradoxo; metonímia." }
  ], ["Gramática", "Literatura"]);

  Y.sl("sl-variacao", "Slides · Variação linguística e norma culta", "7 slides: tipos de variação, norma-padrão, adequação e preconceito linguístico.", [
    { capa: true, t: "Variação linguística", sub: "A língua muda com o lugar, o grupo e a situação" },
    { t: "Tipos de variação", li: ["Regional (diatópica)", "Social (diastrática)", "Situacional (diafásica)", "Histórica (diacrônica)"] },
    { t: "Norma-padrão e norma culta", li: ["Norma-padrão: regras da gramática normativa", "Norma culta: uso de falantes escolarizados em contextos formais"] },
    { t: "Adequação", li: ["O registro depende de interlocutor, gênero e situação", "E-mail formal × mensagem entre amigos"] },
    { t: "Preconceito linguístico", li: ["Julgar pela forma de falar", "Não existe fala errada: existe adequação"] },
    { t: "Papel da escola", li: ["Ensinar a norma culta sem desvalorizar outras variedades"] },
    { t: "Atividade", li: ["Reescreva em registro formal: “E aí, cara, tô sem tempo pra ir na reunião.”"], nota: "Resposta: Prezado colega, não poderei comparecer à reunião por falta de tempo." }
  ], ["Gramática", "Interpretação"]);

  Y.sl("sl-dissertacao", "Slides · A dissertação-argumentativa (modelo ENEM)", "9 slides: tese, argumentos, repertório, coesão e proposta de intervenção.", [
    { capa: true, t: "A dissertação-argumentativa", sub: "Modelo ENEM: estrutura e competências" },
    { t: "Estrutura em quatro parágrafos", li: ["Introdução: contexto + tese", "Desenvolvimento 1: argumento + repertório", "Desenvolvimento 2: argumento + repertório", "Conclusão: retomada + proposta de intervenção"] },
    { t: "Introdução", li: ["Contextualização do tema", "Tese: o ponto de vista", "Anúncio dos argumentos (opcional)"] },
    { t: "Desenvolvimento", li: ["Tópico frasal", "Argumento e explicação", "Repertório sociocultural (lei, obra, dado)", "Fechamento"] },
    { t: "Conclusão e proposta", li: ["**Agente**: quem", "**Ação**: o quê", "**Meio**: como", "**Finalidade**: para quê", "**Detalhamento**"] },
    { t: "Coesão", li: ["Adição: além disso · Oposição: contudo · Causa: visto que · Conclusão: portanto"] },
    { t: "Erros que custam pontos", li: ["Fuga do tema", "Tese vaga", "Repertório sem ligação com o argumento", "Proposta sem agente", "Desrespeito aos direitos humanos"] },
    { t: "As cinco competências", li: ["C1 norma culta · C2 tema e repertório · C3 argumentação · C4 coesão · C5 proposta"] },
    { t: "Atividade", li: ["Escreva uma introdução (contexto + tese) sobre: desafios do uso de telas na adolescência."], nota: "Peça que algumas duplas leiam suas introduções e que a turma aponte contexto e tese." }
  ], ["Redação"]);

  /* ---------------- MAPAS MENTAIS ---------------- */
  Y.mp("mp-trovadorismo", "Mapa mental · Trovadorismo", "Contexto, cantigas, prosa e marcos.", {
    centro: "Trovadorismo", ramos: [
      { t: "Contexto", itens: ["séculos XII a XIV", "Idade Média, teocentrismo, feudalismo"] },
      { t: "Marco", itens: ["Cantiga da Ribeirinha (1198)", "Paio Soares de Taveirós"] },
      { t: "Cantigas de amor", itens: ["eu lírico masculino", "dama inatingível", "vassalagem e coita"] },
      { t: "Cantigas de amigo", itens: ["eu lírico feminino", "saudade do amado", "natureza"] },
      { t: "Cantigas satíricas", itens: ["escárnio: crítica indireta", "maldizer: crítica direta"] },
      { t: "Prosa", itens: ["novelas de cavalaria", "Ciclo Arturiano"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-humanismo", "Mapa mental · Humanismo", "Fernão Lopes, Gil Vicente e poesia palaciana.", {
    centro: "Humanismo", ramos: [
      { t: "Período", itens: ["1418 a 1527", "transição Idade Média → Moderna"] },
      { t: "Fernão Lopes", itens: ["cronista-mor (1418)", "crônicas históricas"] },
      { t: "Gil Vicente", itens: ["teatro popular e satírico", "Auto da Barca do Inferno (1517)"] },
      { t: "Poesia palaciana", itens: ["Cancioneiro Geral (1516)", "Garcia de Resende"] },
      { t: "Visão de mundo", itens: ["antropocentrismo em crescimento", "crítica a vícios sociais"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-classicismo", "Mapa mental · Classicismo", "Características, formas e autores.", {
    centro: "Classicismo", ramos: [
      { t: "Período", itens: ["1527 a 1580", "marco: Sá de Miranda"] },
      { t: "Ideais", itens: ["razão, equilíbrio, perfeição", "imitação greco-latina"] },
      { t: "Formas", itens: ["soneto, ode, écloga, elegia", "decassílabo (medida nova)"] },
      { t: "Camões: lírica", itens: ["amor, desconcerto do mundo", "neoplatonismo"] },
      { t: "Camões: épica", itens: ["Os Lusíadas (1572)", "herói coletivo"] },
      { t: "Outros autores", itens: ["Sá de Miranda, Antônio Ferreira"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-lusiadas", "Mapa mental · Os Lusíadas", "Estrutura, planos e episódios.", {
    centro: "Os Lusíadas", ramos: [
      { t: "Estrutura", itens: ["10 cantos", "1.102 estrofes", "oitava rima ABABABCC"] },
      { t: "Partes", itens: ["Proposição, Invocação", "Dedicatória, Narração, Epílogo"] },
      { t: "Planos", itens: ["viagem", "história de Portugal", "mitologia", "reflexões do poeta"] },
      { t: "Episódios", itens: ["Inês de Castro", "Velho do Restelo", "Adamastor", "Ilha dos Amores"] },
      { t: "Herói", itens: ["coletivo: o povo português", "Vasco da Gama (condutor)"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-quinhentismo", "Mapa mental · Quinhentismo", "Literatura informativa e de catequese.", {
    centro: "Quinhentismo", ramos: [
      { t: "Contexto", itens: ["século XVI", "chegada dos portugueses (1500)"] },
      { t: "Literatura informativa", itens: ["Carta de Caminha", "Gândavo, Gabriel Soares de Sousa"] },
      { t: "Literatura de catequese", itens: ["Anchieta, Nóbrega", "autos e poesia em tupi"] },
      { t: "Visão do colonizador", itens: ["terra rica", "indígena a ser convertido"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-barroco", "Mapa mental · Barroco", "Contexto, características, cultismo, conceptismo e autores.", {
    centro: "Barroco", ramos: [
      { t: "Contexto", itens: ["Contrarreforma", "1601 (Brasil)"] },
      { t: "Dualismo", itens: ["fé × razão", "culpa × prazer"] },
      { t: "Cultismo", itens: ["jogo de palavras", "Góngora"] },
      { t: "Conceptismo", itens: ["jogo de ideias", "Quevedo, Vieira"] },
      { t: "Gregório de Matos", itens: ["lírica, religiosa, satírica", "Boca do Inferno"] },
      { t: "Vieira", itens: ["sermões", "Sermão de Santo Antônio aos Peixes"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-arcadismo", "Mapa mental · Arcadismo", "Ideais, autores, obras e comparação com o Barroco.", {
    centro: "Arcadismo", ramos: [
      { t: "Contexto", itens: ["Iluminismo", "Inconfidência Mineira (1789)"] },
      { t: "Ideais", itens: ["bucolismo, fugere urbem", "locus amoenus, carpe diem", "aurea mediocritas"] },
      { t: "Autores", itens: ["Cláudio Manuel da Costa", "Gonzaga, Alvarenga Peixoto"] },
      { t: "Obras", itens: ["Marília de Dirceu", "O Uraguai, Caramuru"] },
      { t: "Barroco × Arcadismo", itens: ["exagero × equilíbrio", "dualismo × simplicidade"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-funcoes-linguagem", "Mapa mental · Funções da linguagem", "As seis funções e seus sinais.", {
    centro: "Funções da linguagem", ramos: [
      { t: "Referencial", itens: ["contexto", "3ª pessoa, informar"] },
      { t: "Emotiva", itens: ["emissor", "1ª pessoa, exclamação"] },
      { t: "Conativa", itens: ["receptor", "imperativo, vocativo"] },
      { t: "Poética", itens: ["mensagem", "som, imagem, ritmo"] },
      { t: "Fática", itens: ["canal", "Alô? Está me ouvindo?"] },
      { t: "Metalinguística", itens: ["código", "dicionário, poema sobre poesia"] }
    ]
  }, ["Gramática", "Interpretação"]);

  Y.mp("mp-dissertacao", "Mapa mental · Dissertação-argumentativa", "Estrutura, competências e proposta de intervenção.", {
    centro: "Dissertação-argumentativa", ramos: [
      { t: "Introdução", itens: ["contexto", "tese"] },
      { t: "Desenvolvimento 1", itens: ["argumento + repertório"] },
      { t: "Desenvolvimento 2", itens: ["argumento + repertório"] },
      { t: "Conclusão", itens: ["retomada", "proposta de intervenção"] },
      { t: "Proposta", itens: ["agente · ação · meio · finalidade · detalhamento"] },
      { t: "Competências", itens: ["C1 norma · C2 tema · C3 argumentos", "C4 coesão · C5 proposta"] }
    ]
  }, ["Redação"]);

  Y.mp("mp-figuras", "Mapa mental · Figuras de linguagem", "Figuras de palavra, de pensamento e de sintaxe.", {
    centro: "Figuras de linguagem", ramos: [
      { t: "De palavra", itens: ["metáfora, comparação, metonímia", "catacrese, sinestesia"] },
      { t: "Oposição", itens: ["antítese, paradoxo", "ironia"] },
      { t: "Intensidade", itens: ["hipérbole, eufemismo", "gradação"] },
      { t: "Personificação", itens: ["traços humanos a seres não humanos"] },
      { t: "De sintaxe", itens: ["elipse, hipérbato, zeugma"] },
      { t: "Efeitos", itens: ["expressividade, humor, crítica"] }
    ]
  }, ["Gramática", "Literatura"]);

  /* ---------------- AULAS DE EMERGÊNCIA ---------------- */
  function E(id, titulo, resumo, blocos, assunto) {
    if (id.indexOf("quiz") === 0) {
      var alvo = [2, 0, 3, 1, 3, 0, 1, 2, 3, 1, 0, 2, 1, 3, 0], k = 0;
      blocos.forEach(function (b) {
        if (b.k !== "q") return;
        b.it.forEach(function (q) {
          if (!q.alt) return;
          var t = alvo[k++ % alvo.length] % q.alt.length, tmp = q.alt[t];
          q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
        });
      });
    }
    Y.m("emergencia", "e-" + id, titulo, assunto || ["Literatura"], resumo, blocos, "50 min");
  }
  var pl = H.pl;

  E("stop-figuras", "Aula de 50 minutos: Stop das figuras de linguagem", "Jogo de revisão: cada grupo cria frases com figuras por letra sorteada.", [
    H.i("**Antes da aula:** imprima a ficha, uma por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Sorteie uma letra a cada rodada. O grupo escreve uma frase que contenha palavra iniciada pela letra, em cada figura." },
      { min: "30", t: "5 rodadas", d: "4 minutos por rodada, com correção no quadro." },
      { min: "10", t: "Contagem", d: "Cada figura correta e criativa vale 2 pontos." },
      { min: "5", t: "Fechamento", d: "Cada aluno cria uma metáfora original." }
    ]),
    H.tab("Ficha", ["Rodada · letra", "Metáfora", "Antítese", "Ironia", "Hipérbole", "Pontos"], [["1 · ___", "", "", "", "", ""], ["2 · ___", "", "", "", "", ""], ["3 · ___", "", "", "", "", ""], ["4 · ___", "", "", "", "", ""], ["5 · ___", "", "", "", "", ""], [{ t: "Total" }, "", "", "", "", ""]]),
    H.pf("Dica", ["Aceite variações que respeitem a ideia da figura; peça que a turma justifique."])
  ], ["Gramática", "Literatura"]);

  E("bingo-escolas", "Aula de 50 minutos: bingo de escolas literárias", "O professor lê características; os alunos marcam o movimento correspondente.", [
    H.i("**Antes da aula:** imprima uma cartela por aluno e escreva a lista de movimentos no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno escolhe 9 itens da lista para a cartela." },
      { min: "35", t: "Rodadas", d: "Leia uma característica. Quem tiver o movimento, marca. Linha = 1 ponto; cartela cheia = 3." },
      { min: "10", t: "Fechamento", d: "Cada aluno escreve uma frase ligando um autor a um movimento." }
    ]),
    H.tab("Cartela", ["", "", ""], [["", "", ""], ["", "", ""], ["", "", ""]]),
    H.te("Lista no quadro", ["Trovadorismo · Humanismo · Classicismo · Quinhentismo · Barroco · Arcadismo · Camões · Gil Vicente · Gregório de Matos · Vieira · Gonzaga · Anchieta · Caminha · Fernão Lopes · Cláudio Manuel da Costa"]),
    H.pf("Dicas para ler", ["Cantigas de amor e de amigo (Trovadorismo). Auto da Barca do Inferno (Gil Vicente, Humanismo). Os Lusíadas (Camões, Classicismo). Carta ao rei D. Manuel (Caminha, Quinhentismo). Boca do Inferno (Gregório, Barroco). Marília de Dirceu (Gonzaga, Arcadismo). Autos em tupi (Anchieta). Cronista-mor do reino (Fernão Lopes). Sermões (Vieira)."])
  ]);

  E("caca-erro-enem", "Aula de 50 minutos: caça ao erro em uma redação de aluno", "Revisão em duplas de um parágrafo com erros de norma culta, coesão e argumentação.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise: tese, argumento, repertório e conectivos." },
      { min: "15", t: "Caça aos erros", d: "As duplas sublinham erros de norma culta e de argumentação." },
      { min: "15", t: "Correção coletiva", d: "Cada dupla corrige um problema e explica a regra." },
      { min: "10", t: "Reescrita", d: "Cada aluno reescreve o parágrafo." },
      { min: "5", t: "Fechamento", d: "Cada um anota o erro que mais cometeu." }
    ]),
    H.t("Parágrafo com problemas", "Hoje em dia a internet é muito usada e tem muita notícia falsa. Muita gente acredita e compartilha sem pensar. Fazem anos que isso acontece e os governos tem que resolver. Pois as pessoas assistem muitos vídeos e não checa as fontes. Então, isso é um grave problema pra sociedade.", "Texto original, com problemas propositais"),
    H.qs([dis("Reescreva o parágrafo corrigido, com tese e argumento claros.", "Resposta pessoal. Modelo: “A desinformação se espalha com facilidade nas redes sociais. Isso ocorre porque muitos usuários compartilham conteúdos sem checar as fontes. Há anos esse fenômeno se repete, e cabe aos governos agir. Portanto, é urgente promover educação midiática…”", 8)]),
    H.pf("Problemas", ["abertura genérica (“Hoje em dia”); generalização; //fazem anos//; //os governos tem//; //assistem muitos vídeos// (regência); //não checa//; //pois// no início; //pra//; repetição do problema sem argumento."])
  ], ["Redação", "Gramática"]);

  E("debate-leitura", "Aula de 50 minutos: debate sobre leitura obrigatória", "Debate regrado com tese, argumentos e escrita final.", [
    H.i("**Antes da aula:** divida a turma em dois lados."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Tema: “A leitura de obras literárias deve ser obrigatória na escola?”." },
      { min: "10", t: "Preparação", d: "Cada lado anota tese, dois argumentos e um contra-argumento." },
      { min: "20", t: "Debate", d: "Duas rodadas; cada fala inclui uma concessão." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um parágrafo com a sua posição." },
      { min: "5", t: "Fechamento", d: "Síntese dos melhores argumentos." }
    ]),
    H.tab("Ficha", ["Lado", "Tese", "Argumento 1", "Argumento 2", "Contra-argumento"], [["A favor", "", "", "", ""], ["Contra", "", "", "", ""]]),
    H.ln("Meu parágrafo", 8)
  ], ["Redação", "Interpretação"]);

  E("juri-barca", "Aula de 50 minutos: júri da Barca do Inferno", "Júri simulado: quem merece o Paraíso? Os alunos defendem os personagens com argumentos.", [
    H.i("**Antes da aula:** imprima o resumo; divida a turma em acusação, defesa e júri."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Quem merece o Paraíso?”" },
      { min: "10", t: "Leitura", d: "Leia o resumo em voz alta." },
      { min: "10", t: "Preparação", d: "Grupos escolhem um personagem e anotam argumentos." },
      { min: "20", t: "Julgamento", d: "Defesa e acusação falam; o júri decide." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com a lição moral." }
    ]),
    H.t("Resumo", "Na obra de Gil Vicente (1517), as almas chegam a um porto com duas barcas. O Fidalgo (orgulho), o Onzeneiro (usura), o Frade (hipocrisia) e o Juiz (corrupção) são condenados; o Parvo (ingenuidade) é aceito; apenas os cavaleiros mortos pela fé vão ao Paraíso.", "Resumo do Auto da Barca do Inferno"),
    H.tab("Ficha", ["Grupo", "Argumento 1", "Argumento 2"], [["Acusação", "", ""], ["Defesa", "", ""], ["Júri (perguntas)", "", ""]]),
    H.pf("Dica", ["Relacione a moral da peça com a sociedade atual: quais “barcas” existem hoje?"])
  ], ["Literatura", "Interpretação"]);

  E("quiz-literatura", "Aula de 50 minutos: quiz relâmpago de literatura do 1º ano", "Quinze questões rápidas de Trovadorismo ao Arcadismo, em duplas, com correção coletiva.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada dupla marca uma letra por questão." },
      { min: "20", t: "Quiz", d: "As duplas resolvem as 15 questões." },
      { min: "20", t: "Correção", d: "Corrija no quadro e peça explicações." },
      { min: "5", t: "Fechamento", d: "Cada dupla anota a questão mais difícil." }
    ]),
    H.qs([
      ob("O marco do Trovadorismo é:", "Cantiga da Ribeirinha|Os Lusíadas|Auto da Barca do Inferno|Carta de Caminha", "A"),
      ob("Nas cantigas de amor, o eu lírico é:", "masculino|feminino|coletivo|neutro", "A"),
      ob("Nas cantigas de amigo, o eu lírico é:", "masculino|feminino|coletivo|neutro", "B"),
      ob("O Auto da Barca do Inferno é de:", "Camões|Gil Vicente|Vieira|Gonzaga", "B"),
      ob("O marco do Classicismo é:", "1198|1527|1601|1768", "B"),
      ob("Os Lusíadas têm:", "dez cantos|cinco cantos|doze cantos|vinte cantos", "A"),
      ob("A Carta de Caminha pertence à literatura:", "informativa|de catequese|barroca|árcade", "A"),
      ob("José de Anchieta pertence à literatura:", "informativa|de catequese|barroca|árcade", "B"),
      ob("O marco do Barroco no Brasil é:", "Prosopopeia (1601)|Marília de Dirceu|Os Lusíadas|O Uraguai", "A"),
      ob("“Boca do Inferno” é apelido de:", "Gregório de Matos|Vieira|Gonzaga|Camões", "A"),
      ob("Sermão de Santo Antônio aos Peixes é de:", "Vieira|Gregório de Matos|Anchieta|Camões", "A"),
      ob("O Arcadismo brasileiro tem como marco:", "1768|1500|1601|1836", "A"),
      ob("“Marília de Dirceu” é de:", "Gonzaga|Camões|Cláudio Manuel da Costa|Basílio da Gama", "A"),
      ob("“Fugere urbem” significa:", "fuga da cidade|aproveite o dia|corte o inútil|vida moderada", "A"),
      ob("O cultismo se caracteriza por:", "jogo de palavras e exagero formal|jogo de ideias|simplicidade|sátira política", "A")
    ]),
    H.pf("Dica", ["O gabarito completo aparece ao final desta folha na versão do professor. Proponha que a dupla com mais acertos escolha o próximo jogo."])
  ]);

  E("tese-relampago", "Aula de 50 minutos: tese relâmpago", "Os alunos escrevem teses em minutos, avaliam em pares e escolhem as mais claras.", [
    H.i("**Antes da aula:** escreva os temas no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise: tese = ponto de vista claro, defensável e específico." },
      { min: "15", t: "Escrita", d: "Para três temas sorteados, cada aluno escreve uma tese (1 a 2 linhas)." },
      { min: "15", t: "Troca", d: "Em duplas, avaliam as teses com o checklist." },
      { min: "10", t: "Seleção", d: "A turma escolhe as melhores teses e justifica." },
      { min: "5", t: "Fechamento", d: "Cada aluno reescreve a sua pior tese." }
    ]),
    H.te("Temas", ["Desafios do uso de telas na adolescência", "Importância da leitura na formação cidadã", "Desperdício de alimentos no Brasil", "Mobilidade urbana nas grandes cidades"]),
    H.tab("Checklist da tese", ["Critério", "Sim / Não"], [["É um ponto de vista (e não um fato)?", ""], ["É específica?", ""], ["É defensável com argumentos?", ""], ["Está clara e bem escrita?", ""]]),
    H.ln("Minhas teses", 9)
  ], ["Redação"]);

  E("roda-camoes", "Aula de 50 minutos: roda de leitura de Camões", "Leitura expressiva de sonetos, análise de forma e sentido, e escrita de uma paráfrase.", [
    H.i("**Antes da aula:** imprima os poemas, uma cópia por aluno."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “O que é amar, segundo vocês?”" },
      { min: "10", t: "Leitura", d: "Leia os poemas em voz alta; depois em coro." },
      { min: "15", t: "Questões em duplas", d: "As duplas respondem às questões." },
      { min: "15", t: "Paráfrase", d: "Cada aluno escreve uma paráfrase de uma das estrofes." },
      { min: "5", t: "Fechamento", d: "Voluntários leem suas paráfrases." }
    ]),
    H.poema("Transforma-se o amador na cousa amada", "Transforma-se o amador na cousa amada,\nPor virtude do muito imaginar;\nNão tenho, logo, mais que desejar,\nPois em mim tenho a parte desejada.", "Luís de Camões, primeira estrofe"),
    H.poema("Alma minha gentil, que te partiste", "Alma minha gentil, que te partiste\nTão cedo desta vida descontente,\nRepousa lá no Céu eternamente,\nE viva eu cá na terra sempre triste.", "Luís de Camões, primeira estrofe"),
    H.qs([
      ob("O primeiro poema trata de:", "identificação entre o amante e o ser amado|morte|guerra|natureza", "A"),
      ob("O segundo poema expressa:", "dor pela perda e saudade|ironia|raiva|alegria", "A"),
      dis("Escreva uma paráfrase de uma das estrofes, com suas palavras.", "Resposta pessoal. Deve manter o sentido do original em linguagem atual.", 5)
    ])
  ], ["Literatura", "Interpretação"]);

  E("cartas-repertorio", "Aula de 50 minutos: cartas de repertório", "Os alunos criam cartas com repertórios e as usam em teses e parágrafos.", [
    H.i("**Antes da aula:** recorte cartões; cada aluno recebe 3."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada cartão traz um repertório (obra, lei, pensador) e uma ideia central." },
      { min: "20", t: "Criação", d: "Em duplas, os alunos escolhem um tema e usam dois cartões para montar uma tese e um argumento." },
      { min: "15", t: "Apresentação", d: "As duplas apresentam o uso do repertório; a turma avalia a pertinência." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um parágrafo com repertório." }
    ]),
    H.tab("Modelo de cartão", ["Repertório", "Ideia central", "Temas"], [["Paulo Freire, Pedagogia do Oprimido", "Educação bancária × libertadora", "educação, desigualdade"], ["Constituição de 1988, art. 205", "Educação, direito de todos", "educação"], ["Guy Debord, A sociedade do espetáculo", "A aparência prevalece sobre a realidade", "redes sociais, consumo"], ["", "", ""], ["", "", ""]]),
    H.ln("Meu parágrafo com repertório", 8)
  ], ["Redação"]);

  E("linha-tempo-humana", "Aula de 50 minutos: linha do tempo humana", "Os alunos se organizam em ordem cronológica segundo cartões de autores e obras.", [
    H.i("**Antes da aula:** imprima cartões com autores/obras; espaço livre na sala."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno recebe um cartão. Sem falar, devem se organizar em linha, em ordem cronológica." },
      { min: "15", t: "Montagem", d: "A turma monta a linha. Depois, cada um lê seu cartão." },
      { min: "20", t: "Conexões", d: "Em grupos, cada um explica a relação entre seu cartão e o vizinho (influência, oposição, continuidade)." },
      { min: "10", t: "Registro", d: "Cada aluno escreve três ligações que descobriu." }
    ]),
    H.te("Cartões", ["Cantiga da Ribeirinha (1198) · Fernão Lopes (1418) · Auto da Barca do Inferno (1517) · Sá de Miranda (1527) · Carta de Caminha (1500) · Os Lusíadas (1572) · Prosopopeia (1601) · Sermão aos Peixes (1654) · Obras Poéticas (1768) · Marília de Dirceu (1792)"]),
    H.ln("Ligações que descobri", 6)
  ], ["Literatura"]);

  E("revisao-pares", "Aula de 50 minutos: revisão de texto em pares", "Cada aluno revisa a redação de um colega com checklist das competências.", [
    H.i("**Antes da aula:** peça que tragam uma redação ou parágrafo."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Combine: revisar é ajudar. Comece pelo que funcionou." },
      { min: "10", t: "Leitura do colega", d: "Cada aluno lê o texto do colega, sem marcar." },
      { min: "15", t: "Checklist", d: "Preenchem o checklist, com marcas a lápis." },
      { min: "15", t: "Conversa e reescrita", d: "Devolvem os textos e cada autor reescreve." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota o que aprendeu." }
    ]),
    H.tab("Checklist das competências", ["Item", "✓", "Comentário"], [["C1: norma culta", "", ""], ["C2: tema e repertório", "", ""], ["C3: argumentação", "", ""], ["C4: coesão", "", ""], ["C5: proposta de intervenção", "", ""]]),
    H.pf("Dica", ["Incentive comentários concretos (“na linha 4, falta o agente na proposta”)."])
  ], ["Redação"]);

  E("teatro-barca", "Aula de 50 minutos: teatro de leitura do Auto da Barca", "Leitura dramatizada de uma cena adaptada, com atenção às rubricas e à entonação.", [
    H.i("**Antes da aula:** imprima o roteiro, uma cópia por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique: não se decora, mas se interpreta com a voz." },
      { min: "10", t: "Leitura silenciosa", d: "Cada grupo lê e distribui os papéis." },
      { min: "20", t: "Ensaio", d: "Os grupos ensaiam com atenção às rubricas." },
      { min: "10", t: "Apresentação", d: "Dois grupos apresentam; a turma comenta." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve como a entonação mudou o sentido de uma fala." }
    ]),
    H.t("Cena: a barca (adaptação livre)", [
      "**Personagens:** DIABO, ANJO, FIDALGO, PARVO.",
      "DIABO (com ironia): Entra, entra, meu senhor! Tens aqui um lugar de honra.",
      "FIDALGO (soberbo): E ouso saber para onde me leva essa barca?",
      "DIABO (rindo): Para onde vão os que só pensam em si.",
      "PARVO (ingênuo, ao Anjo): Posso entrar? Prometo não incomodar ninguém.",
      "ANJO (sorrindo): Entra, amigo. Tua simplicidade é passagem."
    ], "Texto original, inspirado no Auto da Barca do Inferno, de Gil Vicente")
  ], ["Literatura", "Interpretação"]);
})();
