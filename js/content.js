/*
 * Conteúdo dos devocionais diários.
 *
 * Cada devocional segue a mesma estrutura:
 *  - eixo: grande área temática (ajuda a filtrar na Trilha)
 *  - titulo: nome do dia
 *  - chave: ideia-chave do dia (citação literal só quando vier entre aspas)
 *  - fonte: autor/obra/lei de onde vem a ideia
 *  - leitura: 2 ou 3 parágrafos curtos explicando o repertório
 *  - temas: tipos de proposta de redação em que o repertório funciona bem
 *  - exemplo: trecho modelo mostrando o repertório aplicado em uma redação
 *  - dica: técnica de escrita ligada a uma das 5 competências do ENEM
 *  - quiz: exercício rápido de múltipla escolha (correta = índice da opção)
 *  - desafio: exercício de escrita curto, com resposta-modelo
 *  - reflexao: pergunta para fechar o dia
 */
window.DEVOCIONAIS = [
  {
    id: 1,
    eixo: "Tecnologia e sociedade",
    titulo: "Relações que escorrem pelos dedos",
    chave: "Na modernidade líquida, vínculos, empregos e valores se tornam frágeis e provisórios — feitos para durar pouco.",
    fonte: "Zygmunt Bauman, Modernidade Líquida (2000) e Amor Líquido (2003)",
    leitura: [
      "O sociólogo polonês Zygmunt Bauman usou a metáfora da liquidez para descrever o mundo contemporâneo. Diferente dos sólidos, que mantêm a forma, os líquidos se moldam a qualquer recipiente e escapam com facilidade. Assim seriam as relações atuais: rápidas, descartáveis e guiadas pela lógica do consumo.",
      "Para Bauman, a tecnologia facilita conectar e desconectar com um clique, o que transforma pessoas em algo parecido com produtos de prateleira. O resultado é um sujeito mais conectado, porém mais solitário e inseguro.",
      "É um repertório coringa: serve para redes sociais, saúde mental, consumismo, relações de trabalho precarizadas e até solidão de idosos."
    ],
    temas: ["Redes sociais", "Saúde mental", "Consumismo", "Trabalho"],
    exemplo: "Segundo o sociólogo Zygmunt Bauman, a contemporaneidade é marcada pela \"liquidez\" dos laços humanos, frágeis e descartáveis. Essa lógica se manifesta nas redes sociais, onde a quantidade de conexões não se traduz em vínculos sólidos, o que contribui para o isolamento dos usuários.",
    dica: {
      competencia: 2,
      titulo: "Repertório bom é repertório explicado",
      texto: "Não basta citar o autor: explique a ideia em uma frase e ligue-a ao tema. A banca valoriza repertório legitimado, pertinente ao tema e produtivo — ou seja, que ajuda a desenvolver o argumento, e não aparece solto."
    },
    quiz: {
      pergunta: "Qual é o sentido da metáfora \"líquida\" usada por Bauman?",
      opcoes: [
        "A sociedade é fluida porque é mais justa e flexível.",
        "Laços e instituições se tornam frágeis, provisórios e moldados pelo consumo.",
        "A tecnologia tornou a comunicação mais transparente.",
        "A água é um recurso que deve ser preservado."
      ],
      correta: 1,
      explicacao: "A liquidez representa a fragilidade e a transitoriedade dos vínculos e valores na sociedade de consumo."
    },
    desafio: {
      enunciado: "Escreva uma frase ligando Bauman ao tema \"Os impactos das redes sociais na saúde mental dos jovens\".",
      modelo: "Conforme Zygmunt Bauman, as relações contemporâneas são líquidas e descartáveis; nas redes sociais, essa fragilidade gera nos jovens uma busca incessante por aprovação, fator que agrava quadros de ansiedade."
    },
    reflexao: "Quantas das suas conexões de hoje seriam lembradas daqui a um ano?"
  },
  {
    id: 2,
    eixo: "Saúde mental e trabalho",
    titulo: "Exaustos de si mesmos",
    chave: "A sociedade do desempenho produz sujeitos que se exploram voluntariamente — e adoecem de esgotamento.",
    fonte: "Byung-Chul Han, Sociedade do Cansaço (2010)",
    leitura: [
      "O filósofo sul-coreano Byung-Chul Han, radicado na Alemanha, afirma que deixamos de viver em uma sociedade disciplinar (do \"não pode\") para viver em uma sociedade do desempenho (do \"você pode\"). A cobrança não vem mais só de um chefe: o próprio indivíduo se cobra o tempo todo.",
      "Para Han, esse excesso de positividade gera doenças típicas do século XXI, como depressão, ansiedade e síndrome de burnout. O sujeito é ao mesmo tempo explorador e explorado.",
      "Use em temas sobre saúde mental, trabalho, produtividade, estudantes sobrecarregados e uso excessivo de telas."
    ],
    temas: ["Saúde mental", "Trabalho", "Juventude", "Produtividade"],
    exemplo: "De acordo com o filósofo Byung-Chul Han, a sociedade atual é a \"sociedade do cansaço\", na qual o indivíduo se autoexplora em nome do desempenho. Nesse cenário, o adoecimento psíquico deixa de ser exceção e torna-se sintoma de um modelo social baseado na produtividade ininterrupta.",
    dica: {
      competencia: 3,
      titulo: "Causa → consequência",
      texto: "Um argumento forte mostra uma cadeia lógica: apresente a causa do problema, explique como ela age e termine com a consequência. Use o repertório como prova de que essa relação existe."
    },
    quiz: {
      pergunta: "Segundo Byung-Chul Han, a principal característica da sociedade do desempenho é:",
      opcoes: [
        "A proibição rígida imposta por instituições.",
        "A autoexploração do indivíduo em nome da produtividade.",
        "A ausência total de trabalho.",
        "O fim das doenças psicológicas."
      ],
      correta: 1,
      explicacao: "Han destaca que o sujeito passa a explorar a si mesmo, acreditando ser livre, o que leva ao esgotamento."
    },
    desafio: {
      enunciado: "Complete: \"A síndrome de burnout entre estudantes pode ser compreendida à luz de Byung-Chul Han, pois...\"",
      modelo: "...a cultura do desempenho faz o estudante internalizar cobranças excessivas, transformando a rotina de estudos em autoexploração e levando ao esgotamento físico e mental."
    },
    reflexao: "O que você tem cobrado de si que não cobraria de um amigo?"
  },
  {
    id: 3,
    eixo: "Saúde mental e trabalho",
    titulo: "A marca invisível do estigma",
    chave: "O estigma é um atributo profundamente depreciativo que reduz a pessoa a uma marca e a afasta da aceitação social plena.",
    fonte: "Erving Goffman, Estigma (1963)",
    leitura: [
      "O sociólogo canadense Erving Goffman estudou como a sociedade rotula pessoas que fogem do que considera \"normal\". Quem recebe o estigma passa a ser visto apenas por aquela característica — um diagnóstico, uma deficiência, uma origem — e não como pessoa completa.",
      "Esse repertório é perfeito para o tema do ENEM 2020, \"O estigma associado às doenças mentais na sociedade brasileira\". Ele explica por que muitas pessoas evitam procurar ajuda: o medo do rótulo pesa mais que o sofrimento.",
      "Também funciona para preconceito contra pessoas com deficiência, pessoas em situação de rua, ex-detentos e dependentes químicos."
    ],
    temas: ["Doenças mentais", "Preconceito", "Inclusão", "Saúde pública"],
    exemplo: "Erving Goffman, em \"Estigma\", explica que certos atributos são usados para desqualificar indivíduos socialmente. No Brasil, pessoas com transtornos mentais frequentemente são rotuladas como \"loucas\" ou \"fracas\", o que as leva a esconder o sofrimento e a adiar a busca por tratamento.",
    dica: {
      competencia: 2,
      titulo: "Use as palavras-chave do tema",
      texto: "Repita as palavras centrais do tema (ex.: \"estigma\", \"doenças mentais\", \"sociedade brasileira\") na introdução, nos desenvolvimentos e na conclusão. Isso mostra à banca que você não tangenciou."
    },
    quiz: {
      pergunta: "Qual tema do ENEM combina diretamente com o conceito de estigma de Goffman?",
      opcoes: [
        "Democratização do acesso ao cinema no Brasil (2019)",
        "O estigma associado às doenças mentais na sociedade brasileira (2020)",
        "Manipulação do comportamento do usuário pelo controle de dados na internet (2018)",
        "Desafios para a valorização de comunidades e povos tradicionais no Brasil (2022)"
      ],
      correta: 1,
      explicacao: "O tema de 2020 trata justamente do estigma, conceito central da obra de Goffman."
    },
    desafio: {
      enunciado: "Escreva um tópico frasal (primeira frase de um desenvolvimento) sobre o estigma como barreira ao tratamento psicológico.",
      modelo: "Em primeiro lugar, o estigma social em torno dos transtornos mentais constitui uma barreira ao tratamento, uma vez que muitos indivíduos temem ser rotulados e, por isso, silenciam seu sofrimento."
    },
    reflexao: "Que rótulos você já ouviu sobre quem faz terapia? De onde eles vêm?"
  },
  {
    id: 4,
    eixo: "Saúde mental e trabalho",
    titulo: "Cuidar sem aprisionar",
    chave: "A Reforma Psiquiátrica brasileira trocou o modelo de internação manicomial por uma rede de cuidado em liberdade.",
    fonte: "Lei nº 10.216/2001 e a trajetória da psiquiatra Nise da Silveira",
    leitura: [
      "A psiquiatra alagoana Nise da Silveira recusou tratamentos agressivos comuns em sua época, como o eletrochoque, e apostou na arte e no afeto como caminhos terapêuticos. Ela fundou o Museu de Imagens do Inconsciente, no Rio de Janeiro, com obras produzidas por pacientes.",
      "Décadas depois, a Lei nº 10.216/2001 — conhecida como Lei da Reforma Psiquiátrica — garantiu os direitos das pessoas com transtornos mentais e redirecionou o modelo de assistência, priorizando serviços comunitários, como os Centros de Atenção Psicossocial (CAPS).",
      "Juntos, os dois repertórios mostram que o Brasil tem base histórica e legal para um cuidado humanizado — o problema é a efetivação."
    ],
    temas: ["Saúde mental", "Saúde pública", "Direitos humanos"],
    exemplo: "Embora a Lei nº 10.216/2001 assegure tratamento humanizado às pessoas com transtornos mentais, a insuficiência de Centros de Atenção Psicossocial em diversas regiões do país demonstra que esse direito ainda não se concretizou plenamente.",
    dica: {
      competencia: 3,
      titulo: "A estratégia \"lei × realidade\"",
      texto: "Uma estrutura muito eficiente: cite o que a lei garante e, logo em seguida, mostre que a realidade não cumpre. Conectivos úteis: \"embora\", \"apesar de\", \"no entanto\", \"todavia\"."
    },
    quiz: {
      pergunta: "Qual foi a principal mudança promovida pela Lei nº 10.216/2001?",
      opcoes: [
        "Criou o Sistema Único de Saúde.",
        "Tornou obrigatório o eletrochoque.",
        "Redirecionou o tratamento psiquiátrico para serviços comunitários, em vez da internação manicomial.",
        "Proibiu o uso de medicamentos psiquiátricos."
      ],
      correta: 2,
      explicacao: "A lei protege os direitos das pessoas com transtornos mentais e prioriza o cuidado em liberdade, em rede comunitária."
    },
    desafio: {
      enunciado: "Use a estratégia \"lei × realidade\" com a Lei 10.216/2001 em uma frase.",
      modelo: "Apesar de a Lei nº 10.216/2001 prever um cuidado em liberdade, a escassez de profissionais e serviços especializados ainda empurra muitos pacientes para o abandono terapêutico."
    },
    reflexao: "Como a arte já te ajudou a lidar com algo difícil?"
  },
  {
    id: 5,
    eixo: "Tecnologia e sociedade",
    titulo: "Vigiados sem perceber",
    chave: "No panóptico, quem se sabe observado passa a vigiar a si mesmo; hoje, os dados que deixamos são a nova torre de vigilância.",
    fonte: "Michel Foucault, Vigiar e Punir (1975); Shoshana Zuboff, A Era do Capitalismo de Vigilância (2019)",
    leitura: [
      "Michel Foucault usou a imagem do panóptico — prisão em que um vigia central pode observar todas as celas sem ser visto — para explicar como o poder disciplina comportamentos. A simples possibilidade de ser observado faz o indivíduo se controlar.",
      "A pesquisadora Shoshana Zuboff atualiza a ideia: empresas de tecnologia coletam dados de navegação para prever e influenciar comportamentos, transformando a experiência humana em matéria-prima lucrativa. Ela chama isso de \"capitalismo de vigilância\".",
      "Esse par de repertórios encaixa no tema do ENEM 2018, \"Manipulação do comportamento do usuário pelo controle de dados na internet\". Complete com a LGPD (Lei nº 13.709/2018)."
    ],
    temas: ["Dados pessoais", "Internet", "Privacidade", "Publicidade"],
    exemplo: "O conceito de panóptico, de Michel Foucault, ganha nova roupagem na era digital: algoritmos monitoram cada clique e, com base nesses dados, direcionam conteúdos que moldam o comportamento do usuário sem que ele perceba.",
    dica: {
      competencia: 5,
      titulo: "Os 5 elementos da proposta",
      texto: "Uma proposta de intervenção completa tem: AGENTE (quem faz), AÇÃO (o que faz), MODO/MEIO (como faz), FINALIDADE (para quê) e DETALHAMENTO (uma informação extra sobre qualquer um dos elementos)."
    },
    quiz: {
      pergunta: "Qual lei brasileira complementa bem o repertório sobre controle de dados?",
      opcoes: [
        "Lei Maria da Penha (11.340/2006)",
        "Lei Geral de Proteção de Dados (13.709/2018)",
        "Estatuto da Criança e do Adolescente (8.069/1990)",
        "Lei de Cotas (12.711/2012)"
      ],
      correta: 1,
      explicacao: "A LGPD regula o tratamento de dados pessoais e garante direitos aos titulares, como consentimento e transparência."
    },
    desafio: {
      enunciado: "Monte uma proposta de intervenção com os 5 elementos para o tema de controle de dados na internet.",
      modelo: "O Ministério da Educação (agente) deve incluir a educação digital no currículo escolar (ação), por meio de oficinas sobre algoritmos e privacidade (modo) ministradas por professores capacitados em parceria com especialistas em segurança da informação (detalhamento), a fim de formar usuários críticos e menos vulneráveis à manipulação (finalidade)."
    },
    reflexao: "Que anúncio apareceu para você hoje que parecia ter \"lido sua mente\"?"
  },
  {
    id: 6,
    eixo: "Tecnologia e sociedade",
    titulo: "Dentro da bolha",
    chave: "Algoritmos de personalização nos mostram o que já concordamos, criando bolhas que isolam visões de mundo.",
    fonte: "Eli Pariser, O Filtro Invisível (2011)",
    leitura: [
      "O ativista norte-americano Eli Pariser cunhou o termo \"filtro-bolha\" para explicar como plataformas digitais selecionam conteúdos de acordo com nossos gostos anteriores. A experiência parece agradável, mas reduz o contato com opiniões divergentes.",
      "Dentro da bolha, notícias falsas que confirmam crenças circulam mais facilmente, e o debate público se polariza. O cidadão acredita estar bem informado, mas enxerga apenas uma fatia da realidade.",
      "Use em temas sobre desinformação, fake news, polarização política, democracia e educação midiática."
    ],
    temas: ["Fake news", "Democracia", "Polarização", "Educação midiática"],
    exemplo: "Segundo Eli Pariser, os algoritmos criam \"bolhas\" que expõem o usuário apenas a conteúdos alinhados às suas crenças. Esse mecanismo favorece a disseminação de notícias falsas, já que informações que confirmam opiniões prévias são compartilhadas sem verificação.",
    dica: {
      competencia: 4,
      titulo: "Conectivos de explicação",
      texto: "Para explicar uma ideia que acabou de apresentar, use: \"isto é\", \"ou seja\", \"em outras palavras\", \"vale dizer\". Para justificar: \"uma vez que\", \"visto que\", \"já que\", \"porquanto\"."
    },
    quiz: {
      pergunta: "Qual conectivo expressa CAUSA na frase: \"As fake news se espalham ___ confirmam crenças prévias\"?",
      opcoes: ["contudo", "uma vez que", "portanto", "embora"],
      correta: 1,
      explicacao: "\"Uma vez que\" introduz a causa. \"Portanto\" seria conclusão; \"contudo\" e \"embora\", oposição/concessão."
    },
    desafio: {
      enunciado: "Reescreva a frase usando \"ou seja\": \"Os algoritmos criam bolhas informacionais.\"",
      modelo: "Os algoritmos criam bolhas informacionais, ou seja, ambientes digitais em que o usuário só tem contato com ideias que já compartilha."
    },
    reflexao: "Quando foi a última vez que você leu, com atenção, alguém que pensa diferente de você?"
  },
  {
    id: 7,
    eixo: "Tecnologia e sociedade",
    titulo: "A vida como vitrine",
    chave: "O espetáculo não é um conjunto de imagens, mas uma relação social entre pessoas mediada por imagens.",
    fonte: "Guy Debord, A Sociedade do Espetáculo (1967)",
    leitura: [
      "O pensador francês Guy Debord percebeu, ainda nos anos 1960, que a sociedade estava passando a valorizar mais a aparência do que a experiência real. Ter e parecer passavam a valer mais do que ser.",
      "Nas redes sociais, essa ideia ficou ainda mais visível: vidas editadas, filtros e a busca por curtidas transformam o cotidiano em vitrine. A comparação constante com imagens idealizadas afeta autoestima e saúde mental.",
      "Use em temas sobre redes sociais, padrões de beleza, consumismo, influenciadores e espetacularização da violência na mídia."
    ],
    temas: ["Redes sociais", "Padrões de beleza", "Mídia", "Consumismo"],
    exemplo: "Guy Debord, ao descrever a \"sociedade do espetáculo\", antecipou um fenômeno típico das redes sociais: a substituição da experiência real pela imagem dela. Assim, muitos jovens passam a medir seu valor pela aprovação virtual, o que gera frustração diante de padrões inalcançáveis.",
    dica: {
      competencia: 1,
      titulo: "Fuja da 1ª pessoa",
      texto: "A redação do ENEM é dissertativo-argumentativa: prefira a 3ª pessoa e a impessoalidade (\"percebe-se\", \"é fundamental\", \"nota-se\"). Evite \"eu acho\" e \"na minha opinião\" — sua opinião deve aparecer nos argumentos, não no pronome."
    },
    quiz: {
      pergunta: "Qual frase está mais adequada ao registro da redação do ENEM?",
      opcoes: [
        "Eu acho que as redes sociais fazem mal pros jovens.",
        "A gente vê que todo mundo só posta coisa boa.",
        "Nota-se que as redes sociais estimulam a comparação constante entre os jovens.",
        "Tipo, as redes são muito tóxicas, né?"
      ],
      correta: 2,
      explicacao: "A opção C usa construção impessoal e linguagem formal, adequadas à norma-padrão."
    },
    desafio: {
      enunciado: "Reescreva de forma impessoal e formal: \"Eu acho que a gente posta só o que é bonito pra ganhar like.\"",
      modelo: "Observa-se que os usuários tendem a publicar apenas recortes idealizados de suas vidas, em busca de aprovação virtual."
    },
    reflexao: "O que você viveu hoje que não precisou ser postado para ter valor?"
  },
  {
    id: 8,
    eixo: "Educação",
    titulo: "Educar é transformar",
    chave: "\"Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.\"",
    fonte: "Paulo Freire, Pedagogia da Indignação (2000); Constituição Federal de 1988, art. 205",
    leitura: [
      "Paulo Freire, patrono da educação brasileira, defendia uma educação libertadora, que parte da realidade do aluno e o forma para pensar criticamente — em oposição à \"educação bancária\", em que o professor apenas \"deposita\" conteúdos.",
      "A Constituição Federal, no art. 205, define a educação como \"direito de todos e dever do Estado e da família\", visando ao pleno desenvolvimento da pessoa, ao preparo para a cidadania e à qualificação para o trabalho.",
      "Freire + art. 205 é uma dupla clássica: o primeiro mostra o valor transformador da educação; o segundo, que ela é um direito garantido."
    ],
    temas: ["Educação", "Cidadania", "Desigualdade", "Qualquer tema (na proposta)"],
    exemplo: "Como afirmou Paulo Freire, \"se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda\". Por isso, investir em projetos escolares que discutam o tema é um passo indispensável para a mudança de mentalidade das próximas gerações.",
    dica: {
      competencia: 5,
      titulo: "Escola como meio, não como fim",
      texto: "A escola aparece em muitas propostas, mas seja específico: diga QUEM (Ministério da Educação, secretarias), O QUÊ (palestras, disciplinas, projetos) e PARA QUÊ. \"A educação resolve\" é vago e perde pontos."
    },
    quiz: {
      pergunta: "Segundo o art. 205 da Constituição, a educação é:",
      opcoes: [
        "Responsabilidade exclusiva das escolas particulares.",
        "Direito de todos e dever do Estado e da família.",
        "Um privilégio para quem pode pagar.",
        "Opcional após os 10 anos de idade."
      ],
      correta: 1,
      explicacao: "O art. 205 afirma que a educação é direito de todos e dever do Estado e da família, promovida com a colaboração da sociedade."
    },
    desafio: {
      enunciado: "Transforme \"a educação resolve o problema\" em uma proposta específica para o tema \"combate ao bullying nas escolas\".",
      modelo: "As secretarias estaduais de educação devem implementar rodas de conversa mensais sobre respeito e diversidade, mediadas por psicólogos escolares, a fim de prevenir práticas de intimidação entre estudantes."
    },
    reflexao: "Qual professor mudou o jeito como você enxerga o mundo?"
  },
  {
    id: 9,
    eixo: "Educação",
    titulo: "A herança que não se vê",
    chave: "A escola tende a premiar quem já chega com capital cultural herdado da família, reproduzindo desigualdades.",
    fonte: "Pierre Bourdieu, A Reprodução (1970, com Jean-Claude Passeron)",
    leitura: [
      "O sociólogo francês Pierre Bourdieu mostrou que o sucesso escolar não depende só de esforço. Alunos que crescem cercados de livros, museus, viagens e conversas cultas chegam à escola com um \"capital cultural\" que a instituição valoriza.",
      "Quando a escola trata como \"mérito natural\" o que é, na verdade, herança social, ela legitima e reproduz as desigualdades. Quem não teve esse capital tende a ser visto como menos capaz.",
      "Use em temas sobre desigualdade educacional, evasão escolar, acesso à universidade, meritocracia e políticas de cotas."
    ],
    temas: ["Desigualdade", "Educação", "Meritocracia", "Acesso à cultura"],
    exemplo: "Para Pierre Bourdieu, o sistema escolar tende a reproduzir desigualdades ao valorizar o capital cultural das classes privilegiadas. No Brasil, isso se evidencia na diferença de desempenho entre estudantes de escolas públicas e privadas no acesso ao ensino superior.",
    dica: {
      competencia: 3,
      titulo: "Projeto de texto",
      texto: "Antes de escrever, defina: tese (sua posição), argumento 1 e argumento 2 — e anuncie os dois na introdução. Assim, cada desenvolvimento cumpre uma promessa feita no início e o texto ganha unidade."
    },
    quiz: {
      pergunta: "O que Bourdieu chama de \"capital cultural\"?",
      opcoes: [
        "O dinheiro investido em cultura pelo governo.",
        "Conhecimentos, hábitos e referências culturais herdados, que a escola valoriza.",
        "A quantidade de escolas em uma cidade.",
        "O patrimônio histórico de um país."
      ],
      correta: 1,
      explicacao: "Capital cultural é o conjunto de saberes e práticas que o indivíduo acumula, muitas vezes no ambiente familiar."
    },
    desafio: {
      enunciado: "Escreva uma introdução de 2 frases para \"Desafios para o acesso ao ensino superior no Brasil\" anunciando dois argumentos.",
      modelo: "Segundo Pierre Bourdieu, a escola tende a reproduzir as desigualdades sociais ao premiar o capital cultural herdado. No Brasil, essa lógica se expressa no acesso desigual ao ensino superior, problema agravado pela precarização do ensino básico público e pela necessidade de muitos jovens de trabalhar cedo."
    },
    reflexao: "Que vantagem você teve (ou não teve) que ninguém chama de mérito?"
  },
  {
    id: 10,
    eixo: "Inclusão e direitos",
    titulo: "Uma língua que precisa de lugar",
    chave: "A Libras é reconhecida como meio legal de comunicação e expressão no Brasil.",
    fonte: "Lei nº 10.436/2002 (Lei de Libras) e Lei nº 13.146/2015 (Lei Brasileira de Inclusão)",
    leitura: [
      "A Língua Brasileira de Sinais (Libras) foi reconhecida pela Lei nº 10.436/2002 como meio legal de comunicação da comunidade surda. É uma língua completa, com gramática própria — não é \"mímica\" nem português sinalizado.",
      "A Lei Brasileira de Inclusão (Lei nº 13.146/2015), também chamada Estatuto da Pessoa com Deficiência, garante acessibilidade e educação inclusiva em todos os níveis.",
      "O tema do ENEM 2017 foi \"Desafios para a formação educacional de surdos no Brasil\". O argumento central: mesmo com leis, faltam intérpretes, professores bilíngues e escolas preparadas."
    ],
    temas: ["Pessoas com deficiência", "Educação inclusiva", "Acessibilidade"],
    exemplo: "Embora a Lei nº 10.436/2002 reconheça a Libras como meio legal de comunicação, a escassez de intérpretes e de professores bilíngues nas escolas públicas limita o desenvolvimento educacional dos estudantes surdos.",
    dica: {
      competencia: 4,
      titulo: "Retome sem repetir",
      texto: "Para não repetir \"surdos\" cinco vezes, use referenciação: pronomes (\"eles\", \"esses\"), sinônimos e expressões equivalentes (\"a comunidade surda\", \"tais estudantes\", \"esse grupo\"). Isso conta pontos na C4."
    },
    quiz: {
      pergunta: "Qual das afirmações sobre a Libras é correta?",
      opcoes: [
        "É uma forma de mímica sem regras gramaticais.",
        "É o português escrito com as mãos, palavra por palavra.",
        "É uma língua com gramática própria, reconhecida pela Lei nº 10.436/2002.",
        "É universal: igual em todos os países."
      ],
      correta: 2,
      explicacao: "A Libras é uma língua natural, com estrutura própria, e cada país tem sua língua de sinais."
    },
    desafio: {
      enunciado: "Reescreva evitando a repetição: \"Os surdos enfrentam barreiras. Os surdos não têm intérpretes. Os surdos abandonam a escola.\"",
      modelo: "Os surdos enfrentam diversas barreiras no ambiente escolar. Sem intérpretes disponíveis, esses estudantes têm o aprendizado comprometido e, muitas vezes, acabam por abandonar os estudos."
    },
    reflexao: "Você conseguiria se apresentar em Libras? Que tal aprender o seu nome hoje?"
  },
  {
    id: 11,
    eixo: "Cultura e arte",
    titulo: "A tela para poucos",
    chave: "O Estado garantirá a todos o pleno exercício dos direitos culturais e o acesso às fontes da cultura nacional.",
    fonte: "Constituição Federal de 1988, art. 215; Theodor Adorno e Max Horkheimer, Dialética do Esclarecimento (1947)",
    leitura: [
      "O art. 215 da Constituição trata a cultura como direito. Mesmo assim, muitas cidades brasileiras não têm sequer uma sala de cinema, e o preço dos ingressos afasta a população de baixa renda.",
      "Adorno e Horkheimer, da Escola de Frankfurt, criaram o conceito de \"indústria cultural\": a cultura produzida em série, como mercadoria, que tende a padronizar gostos e tornar o público passivo.",
      "Juntos, esses repertórios servem ao tema do ENEM 2019, \"Democratização do acesso ao cinema no Brasil\": o problema não é só o acesso físico, mas também a diversidade do que é exibido."
    ],
    temas: ["Cultura", "Cinema", "Lazer", "Desigualdade regional"],
    exemplo: "Embora o art. 215 da Constituição Federal assegure a todos o exercício dos direitos culturais, a concentração de salas de cinema nos grandes centros urbanos exclui parcela significativa da população brasileira desse direito.",
    dica: {
      competencia: 2,
      titulo: "Estrutura dissertativo-argumentativa",
      texto: "Padrão seguro com 4 parágrafos: Introdução (contexto + tese + anúncio dos argumentos), Desenvolvimento 1, Desenvolvimento 2 e Conclusão (retomada + proposta de intervenção completa)."
    },
    quiz: {
      pergunta: "O conceito de \"indústria cultural\" se refere a:",
      opcoes: [
        "Fábricas que produzem instrumentos musicais.",
        "A produção de cultura em série, como mercadoria, que tende a padronizar gostos.",
        "Investimento público em museus.",
        "A preservação de manifestações folclóricas."
      ],
      correta: 1,
      explicacao: "Adorno e Horkheimer criticam a transformação da cultura em produto de consumo massificado."
    },
    desafio: {
      enunciado: "Escreva uma tese (1 frase) para \"Democratização do acesso ao cinema no Brasil\".",
      modelo: "A democratização do cinema no Brasil é dificultada pela concentração de salas nos grandes centros e pelo alto custo dos ingressos, o que restringe um direito cultural garantido constitucionalmente."
    },
    reflexao: "Qual filme te fez pensar diferente sobre algum assunto?"
  },
  {
    id: 12,
    eixo: "Cidadania e política",
    titulo: "Cidadãos só no papel",
    chave: "Os direitos garantidos na lei nem sempre chegam à vida real: há brasileiros que são cidadãos apenas \"no papel\".",
    fonte: "Gilberto Dimenstein, O Cidadão de Papel (1993)",
    leitura: [
      "O jornalista Gilberto Dimenstein escreveu \"O Cidadão de Papel\" para mostrar a distância entre os direitos previstos na Constituição e a realidade de milhões de brasileiros, especialmente crianças e adolescentes.",
      "O repertório funciona como uma moldura para qualquer tema sobre direitos não efetivados: saúde, educação, moradia, segurança. Ele resume em uma imagem a estratégia \"lei × realidade\".",
      "Ganha ainda mais força no tema do ENEM 2021, \"Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil\" — afinal, quem não tem certidão de nascimento não é cidadão nem no papel."
    ],
    temas: ["Cidadania", "Registro civil", "Direitos sociais", "Desigualdade"],
    exemplo: "Na obra \"O Cidadão de Papel\", Gilberto Dimenstein denuncia a distância entre os direitos assegurados por lei e a realidade brasileira. No caso das pessoas sem registro civil, a situação é ainda mais grave: sem documentos, elas não acessam sequer os serviços públicos mais básicos.",
    dica: {
      competencia: 2,
      titulo: "Repertório na introdução",
      texto: "Abrir a introdução com um repertório (autor, lei, fato histórico, obra) é uma forma eficiente de contextualizar. Depois dele, conecte com o tema e apresente sua tese — nunca deixe o repertório \"solto\"."
    },
    quiz: {
      pergunta: "A expressão \"cidadão de papel\" significa:",
      opcoes: [
        "Pessoa que trabalha com documentos.",
        "Cidadão cujos direitos existem na lei, mas não na prática.",
        "Brasileiro que vota por cédula de papel.",
        "Imigrante sem nacionalidade."
      ],
      correta: 1,
      explicacao: "A obra de Dimenstein denuncia a distância entre direitos formais e direitos efetivados."
    },
    desafio: {
      enunciado: "Use \"cidadão de papel\" em uma frase sobre o acesso à saúde pública.",
      modelo: "Apesar de o art. 196 da Constituição definir a saúde como direito de todos, as longas filas por atendimento revelam que muitos brasileiros ainda são \"cidadãos de papel\", como denunciou Gilberto Dimenstein."
    },
    reflexao: "Que direito seu você só lembra que existe quando ele falta?"
  },
  {
    id: 13,
    eixo: "Cidadania e política",
    titulo: "O longo caminho da cidadania",
    chave: "No Brasil, os direitos sociais vieram antes dos civis e políticos — muitas vezes concedidos de cima, e não conquistados pela população.",
    fonte: "José Murilo de Carvalho, Cidadania no Brasil: o longo caminho (2001)",
    leitura: [
      "O historiador José Murilo de Carvalho comparou a formação da cidadania no Brasil com a da Inglaterra, onde os direitos civis vieram primeiro, depois os políticos e, por fim, os sociais.",
      "No Brasil, a ordem foi diferente: muitos direitos sociais (como os trabalhistas) foram concedidos por governos autoritários, enquanto direitos civis e políticos ficaram frágeis. Isso ajudaria a explicar uma cultura de pouca participação e de dependência do Estado.",
      "Use em temas sobre participação política, voto, desinteresse dos jovens pela política e fragilidade democrática."
    ],
    temas: ["Participação política", "Democracia", "Cidadania", "Juventude"],
    exemplo: "Segundo o historiador José Murilo de Carvalho, a cidadania brasileira foi construída de forma \"invertida\", com direitos concedidos pelo Estado antes de serem conquistados pela sociedade. Esse processo histórico ajuda a explicar a baixa participação popular nos espaços de decisão política.",
    dica: {
      competencia: 3,
      titulo: "Repertório histórico explica a raiz",
      texto: "Repertórios históricos são ótimos no 1º desenvolvimento para explicar a ORIGEM do problema. No 2º desenvolvimento, foque em uma causa ATUAL. Assim o texto mostra passado e presente."
    },
    quiz: {
      pergunta: "Qual é a tese central de José Murilo de Carvalho em \"Cidadania no Brasil\"?",
      opcoes: [
        "O Brasil seguiu exatamente o modelo inglês de cidadania.",
        "A cidadania brasileira se formou em ordem diferente, com direitos sociais muitas vezes concedidos antes dos civis e políticos.",
        "O Brasil nunca teve direitos sociais.",
        "A cidadania brasileira surgiu com a internet."
      ],
      correta: 1,
      explicacao: "O autor destaca a inversão na ordem dos direitos e suas consequências para a participação política."
    },
    desafio: {
      enunciado: "Escreva um tópico frasal histórico para o tema \"O desinteresse dos jovens pela política\".",
      modelo: "Em primeiro lugar, o distanciamento dos jovens em relação à política tem raízes históricas, uma vez que, como aponta José Murilo de Carvalho, a cidadania no Brasil foi construída mais por concessão do Estado do que por participação popular."
    },
    reflexao: "Você sabe quem são os vereadores da sua cidade?"
  },
  {
    id: 14,
    eixo: "Cidadania e política",
    titulo: "O público e o privado",
    chave: "O \"homem cordial\" age pela emoção e pelas relações pessoais, confundindo o espaço público com o privado.",
    fonte: "Sérgio Buarque de Holanda, Raízes do Brasil (1936)",
    leitura: [
      "Cuidado com a armadilha: \"cordial\", para Sérgio Buarque de Holanda, não significa educado ou gentil. Vem de \"cor\" (coração, em latim) — o homem cordial age pelo coração, pelas relações de afeto e amizade, e não por regras impessoais.",
      "Na vida pública, isso gera o patrimonialismo: tratar o que é de todos como se fosse da família. Favorecimentos, \"jeitinho\" e nepotismo seriam heranças dessa formação.",
      "Use em temas sobre corrupção, ética na política, desrespeito às leis de trânsito, desvio de recursos públicos e confiança nas instituições."
    ],
    temas: ["Ética", "Corrupção", "Política", "Respeito às leis"],
    exemplo: "O conceito de \"homem cordial\", de Sérgio Buarque de Holanda, ajuda a compreender a persistência do patrimonialismo no Brasil: ao priorizar relações pessoais em detrimento das regras impessoais, parte da sociedade naturaliza práticas como o favorecimento de parentes em cargos públicos.",
    dica: {
      competencia: 1,
      titulo: "Crase antes de palavra feminina",
      texto: "Use crase quando houver preposição \"a\" + artigo \"a\": \"acesso à saúde\", \"respeito às leis\". Não use antes de verbo (\"a partir\"), de palavra masculina (\"a pé\") ou de pronome como \"esta\" e \"ela\"."
    },
    quiz: {
      pergunta: "Qual frase está correta quanto ao uso da crase?",
      opcoes: [
        "O acesso à educação é um direito.",
        "Os jovens começaram à estudar.",
        "O governo deve dar atenção à esses grupos.",
        "Ele foi à pé até a escola."
      ],
      correta: 0,
      explicacao: "\"Acesso a + a educação\" = \"à educação\". Não há crase antes de verbo, de \"esses\" ou de palavra masculina."
    },
    desafio: {
      enunciado: "Explique, em uma frase, por que \"cordial\" não significa \"gentil\" em Sérgio Buarque.",
      modelo: "Em Sérgio Buarque de Holanda, \"cordial\" deriva de \"coração\" e indica o indivíduo que age movido por afetos e relações pessoais, e não por normas impessoais."
    },
    reflexao: "Onde você já viu o \"jeitinho\" vencer a regra? Quem saiu perdendo?"
  },
  {
    id: 15,
    eixo: "Violência e ética",
    titulo: "O mal que parece normal",
    chave: "O mal pode ser praticado por pessoas comuns que simplesmente deixam de pensar sobre o que fazem.",
    fonte: "Hannah Arendt, Eichmann em Jerusalém (1963)",
    leitura: [
      "Ao acompanhar o julgamento de Adolf Eichmann, oficial nazista responsável pela logística das deportações, a filósofa Hannah Arendt se surpreendeu: ele não parecia um monstro, mas um burocrata comum que \"apenas cumpria ordens\".",
      "Daí surge a ideia de \"banalidade do mal\": grandes violências podem acontecer quando as pessoas abdicam de refletir criticamente e naturalizam a crueldade.",
      "Use em temas sobre discurso de ódio na internet, linchamentos virtuais, violência naturalizada, preconceito e omissão diante de injustiças."
    ],
    temas: ["Discurso de ódio", "Violência", "Ética", "Internet"],
    exemplo: "A \"banalidade do mal\", conceito de Hannah Arendt, manifesta-se nos ataques virtuais: usuários comuns, sem refletir sobre as consequências, compartilham ofensas e participam de linchamentos digitais que causam danos reais às vítimas.",
    dica: {
      competencia: 5,
      titulo: "Respeite os direitos humanos",
      texto: "Propostas como \"pena de morte\", \"castração\" ou \"justiça com as próprias mãos\" ferem os direitos humanos e podem zerar a Competência 5. Proponha ações educativas, fiscalizadoras ou de políticas públicas."
    },
    quiz: {
      pergunta: "Qual proposta de intervenção RESPEITA os direitos humanos?",
      opcoes: [
        "Expor publicamente os agressores virtuais para que sejam punidos pela população.",
        "Criar campanhas educativas sobre ética digital e fortalecer delegacias especializadas em crimes cibernéticos.",
        "Banir da internet todos que já fizeram comentários ofensivos.",
        "Aplicar castigos físicos a quem pratica discurso de ódio."
      ],
      correta: 1,
      explicacao: "A opção B propõe educação e fortalecimento institucional, sem violar direitos."
    },
    desafio: {
      enunciado: "Relacione \"banalidade do mal\" a uma situação atual em uma frase.",
      modelo: "A banalidade do mal, descrita por Hannah Arendt, pode ser observada no compartilhamento irrefletido de vídeos humilhantes, prática que naturaliza a violência e transforma o sofrimento alheio em entretenimento."
    },
    reflexao: "Quando foi a última vez que você parou antes de compartilhar algo?"
  },
  {
    id: 16,
    eixo: "Gênero",
    titulo: "Tornar-se mulher",
    chave: "\"Ninguém nasce mulher: torna-se mulher.\"",
    fonte: "Simone de Beauvoir, O Segundo Sexo (1949)",
    leitura: [
      "Com essa frase, a filósofa francesa Simone de Beauvoir afirma que os papéis atribuídos às mulheres não são naturais, mas construídos socialmente: a cultura ensina o que seria \"coisa de menina\" desde a infância.",
      "Isso inclui a ideia de que cuidar da casa e dos filhos seria vocação feminina, de que mulheres seriam menos aptas para ciência ou liderança e de que deveriam ser submissas.",
      "Use em temas sobre desigualdade de gênero no trabalho, violência contra a mulher, sub-representação feminina na política e na ciência."
    ],
    temas: ["Gênero", "Mercado de trabalho", "Violência contra a mulher", "Educação"],
    exemplo: "Ao afirmar que \"ninguém nasce mulher: torna-se mulher\", Simone de Beauvoir evidencia que os papéis de gênero são construções sociais. Essa construção explica, por exemplo, por que meninas ainda são menos incentivadas a seguir carreiras nas áreas de exatas.",
    dica: {
      competencia: 1,
      titulo: "Citação exige exatidão",
      texto: "Só use aspas se tiver certeza das palavras exatas. Se não lembrar, parafraseie: \"Segundo Beauvoir, os papéis femininos são construídos socialmente\". Uma citação errada entre aspas é pior que uma boa paráfrase."
    },
    quiz: {
      pergunta: "A frase de Beauvoir defende que:",
      opcoes: [
        "As diferenças de gênero são determinadas apenas pela biologia.",
        "Os papéis sociais femininos são construídos pela cultura.",
        "As mulheres devem permanecer no espaço doméstico.",
        "A educação não influencia comportamentos."
      ],
      correta: 1,
      explicacao: "Beauvoir distingue o dado biológico dos papéis sociais, que são aprendidos e impostos culturalmente."
    },
    desafio: {
      enunciado: "Parafraseie a ideia de Beauvoir (sem aspas) em uma frase sobre mulheres na ciência.",
      modelo: "Conforme Simone de Beauvoir, os papéis de gênero são construídos socialmente, o que ajuda a explicar por que as meninas ainda são desestimuladas a seguir carreiras científicas."
    },
    reflexao: "Que brinquedo ou atividade te disseram que \"não era pra você\"?"
  },
  {
    id: 17,
    eixo: "Gênero",
    titulo: "O trabalho que ninguém vê",
    chave: "\"O que eles chamam de amor, nós chamamos de trabalho não pago.\"",
    fonte: "Silvia Federici, O Ponto Zero da Revolução (2012)",
    leitura: [
      "A filósofa ítalo-americana Silvia Federici denuncia que o trabalho doméstico e de cuidado — limpar, cozinhar, cuidar de crianças, idosos e doentes — é tratado como dever \"natural\" das mulheres, e não como trabalho.",
      "Esse trabalho sustenta a economia (sem ele, ninguém iria trabalhar fora), mas não é remunerado nem reconhecido. O resultado é a dupla ou tripla jornada feminina.",
      "Repertório certeiro para o tema do ENEM 2023: \"Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil\"."
    ],
    temas: ["Trabalho de cuidado", "Gênero", "Economia", "Dupla jornada"],
    exemplo: "A filósofa Silvia Federici afirma que o trabalho doméstico é tratado como expressão de afeto, e não como trabalho. No Brasil, essa naturalização sobrecarrega as mulheres, que acumulam jornadas e têm menos tempo para estudar, descansar e se qualificar profissionalmente.",
    dica: {
      competencia: 4,
      titulo: "Conectivos entre parágrafos",
      texto: "Inicie cada parágrafo com um conectivo que mostre a relação com o anterior: \"Em primeiro lugar\", \"Além disso\", \"Paralelamente\", \"Ademais\" e, na conclusão, \"Portanto\", \"Dessa forma\", \"Diante do exposto\"."
    },
    quiz: {
      pergunta: "Qual conectivo é mais adequado para iniciar a CONCLUSÃO?",
      opcoes: ["Em primeiro lugar,", "Ademais,", "Diante do exposto,", "Por exemplo,"],
      correta: 2,
      explicacao: "\"Diante do exposto\" retoma o que foi discutido e anuncia o fechamento do texto."
    },
    desafio: {
      enunciado: "Escreva a primeira frase do 2º desenvolvimento sobre a invisibilidade do trabalho de cuidado, começando com um conectivo de adição.",
      modelo: "Além disso, a ausência de políticas públicas, como creches em período integral, transfere às mulheres a responsabilidade pelo cuidado, perpetuando a invisibilidade desse trabalho."
    },
    reflexao: "Quem cuida de quem na sua casa? Esse cuidado é reconhecido?"
  },
  {
    id: 18,
    eixo: "Gênero",
    titulo: "Uma lei com nome de mulher",
    chave: "A Lei Maria da Penha criou mecanismos para coibir a violência doméstica e familiar contra a mulher.",
    fonte: "Lei nº 11.340/2006 (Lei Maria da Penha)",
    leitura: [
      "A lei leva o nome de Maria da Penha Maia Fernandes, farmacêutica cearense que ficou paraplégica após tentativa de homicídio cometida pelo então marido. Sua luta por justiça levou o caso a organismos internacionais e pressionou o Brasil a criar uma legislação específica.",
      "A lei reconhece diferentes formas de violência — física, psicológica, sexual, patrimonial e moral — e prevê medidas protetivas de urgência.",
      "Mostrar que a violência não é só física é um ótimo argumento: a violência psicológica, por exemplo, muitas vezes não é identificada pela própria vítima."
    ],
    temas: ["Violência contra a mulher", "Gênero", "Direitos humanos", "Segurança pública"],
    exemplo: "A Lei nº 11.340/2006, conhecida como Lei Maria da Penha, representou um marco ao reconhecer não apenas a violência física, mas também as formas psicológica, sexual, patrimonial e moral. Contudo, a falta de informação ainda impede muitas vítimas de identificarem essas agressões.",
    dica: {
      competencia: 5,
      titulo: "Detalhamento faz diferença",
      texto: "O detalhamento é o elemento mais esquecido. Acrescente algo a qualquer elemento: o agente (\"o Ministério das Mulheres, órgão responsável por...\"), o meio (\"por meio de campanhas veiculadas em horário nobre\") etc."
    },
    quiz: {
      pergunta: "Quais formas de violência são reconhecidas pela Lei Maria da Penha?",
      opcoes: [
        "Apenas física.",
        "Física e sexual, somente.",
        "Física, psicológica, sexual, patrimonial e moral.",
        "Apenas a que deixa marcas visíveis."
      ],
      correta: 2,
      explicacao: "O art. 7º da lei lista as cinco formas: física, psicológica, sexual, patrimonial e moral."
    },
    desafio: {
      enunciado: "Acrescente um detalhamento a esta proposta: \"O governo deve fazer campanhas contra a violência doméstica, a fim de informar as vítimas.\"",
      modelo: "O Ministério das Mulheres deve promover campanhas contra a violência doméstica, veiculadas em televisão, rádio e redes sociais e com divulgação do canal Ligue 180, a fim de ajudar as vítimas a reconhecer agressões e buscar proteção."
    },
    reflexao: "Você saberia reconhecer sinais de violência psicológica em um relacionamento?"
  },
  {
    id: 19,
    eixo: "Questões étnico-raciais",
    titulo: "Racismo que está na estrutura",
    chave: "O racismo não é apenas um ato individual: ele é estrutural, parte do modo normal como a sociedade funciona.",
    fonte: "Silvio Almeida, Racismo Estrutural (2019)",
    leitura: [
      "O jurista e filósofo Silvio Almeida distingue três concepções de racismo: individual (atos de pessoas), institucional (práticas de instituições) e estrutural. Na concepção estrutural, o racismo está nas próprias relações econômicas, políticas e jurídicas.",
      "Isso significa que, mesmo sem intenção, a sociedade reproduz desigualdades raciais — no mercado de trabalho, no acesso à universidade, na abordagem policial.",
      "Combine com a frase atribuída a Angela Davis: \"Numa sociedade racista, não basta não ser racista. É necessário ser antirracista.\""
    ],
    temas: ["Racismo", "Desigualdade", "Segurança pública", "Mercado de trabalho"],
    exemplo: "Segundo Silvio Almeida, o racismo é estrutural, pois integra a organização econômica e política da sociedade. Por isso, combatê-lo exige mais que a condenação de atos individuais: requer políticas públicas que enfrentem desigualdades históricas.",
    dica: {
      competencia: 3,
      titulo: "Aprofunde, não liste",
      texto: "Dois argumentos bem desenvolvidos valem mais que cinco citados. Em cada parágrafo: tópico frasal → explicação → repertório → análise → fechamento ligando ao tema."
    },
    quiz: {
      pergunta: "Para Silvio Almeida, o racismo estrutural significa que:",
      opcoes: [
        "O racismo é apenas um problema de pessoas mal-educadas.",
        "O racismo está presente no funcionamento normal das instituições e relações sociais.",
        "O racismo já foi superado no Brasil.",
        "Só existe racismo quando há intenção."
      ],
      correta: 1,
      explicacao: "O racismo estrutural não depende de intenção individual: ele se reproduz pelo próprio modo de organização social."
    },
    desafio: {
      enunciado: "Escreva a frase de fechamento de um desenvolvimento sobre racismo estrutural no mercado de trabalho.",
      modelo: "Dessa forma, enquanto o racismo permanecer enraizado nas estruturas sociais, a população negra continuará sub-representada em cargos de liderança, o que perpetua o ciclo de desigualdade."
    },
    reflexao: "Quantas pessoas negras você vê em posições de liderança nos lugares que frequenta?"
  },
  {
    id: 20,
    eixo: "Questões étnico-raciais",
    titulo: "A África que nos forma",
    chave: "É obrigatório o ensino de história e cultura afro-brasileira e indígena nas escolas de ensino fundamental e médio.",
    fonte: "Lei nº 10.639/2003, ampliada pela Lei nº 11.645/2008; Lélia Gonzalez",
    leitura: [
      "A Lei nº 10.639/2003 tornou obrigatório o ensino de história e cultura afro-brasileira nas escolas; a Lei nº 11.645/2008 incluiu a temática indígena. O objetivo é valorizar contribuições que a história oficial apagou.",
      "A intelectual Lélia Gonzalez criou o conceito de \"amefricanidade\", mostrando que a cultura brasileira — na língua, na música, na religiosidade, na culinária — é profundamente marcada pela herança africana.",
      "Repertório ideal para o tema do ENEM 2024, \"Desafios para a valorização da herança africana no Brasil\". Argumento forte: a lei existe, mas sua aplicação nas escolas ainda é irregular."
    ],
    temas: ["Herança africana", "Educação", "Racismo", "Cultura"],
    exemplo: "Embora a Lei nº 10.639/2003 determine o ensino de história e cultura afro-brasileira, muitas escolas ainda abordam o tema apenas em datas comemorativas, como o 20 de novembro, o que limita a valorização efetiva da herança africana.",
    dica: {
      competencia: 2,
      titulo: "Não fuja do recorte",
      texto: "Leia o tema palavra por palavra. \"Valorização da herança africana\" é diferente de \"racismo no Brasil\" de forma geral. Falar só de racismo pode tangenciar o tema — mantenha o foco no recorte pedido."
    },
    quiz: {
      pergunta: "O que determina a Lei nº 10.639/2003?",
      opcoes: [
        "A criação de cotas raciais em universidades.",
        "O ensino obrigatório de história e cultura afro-brasileira nas escolas.",
        "O feriado de 13 de maio.",
        "A proibição de manifestações culturais africanas."
      ],
      correta: 1,
      explicacao: "A lei alterou a LDB para incluir a obrigatoriedade da temática afro-brasileira no currículo."
    },
    desafio: {
      enunciado: "Cite dois exemplos concretos da herança africana na cultura brasileira e use-os em uma frase.",
      modelo: "A herança africana está presente em elementos centrais da identidade nacional, como o samba e a capoeira, o que torna sua desvalorização uma forma de negar as próprias raízes do país."
    },
    reflexao: "Quais palavras, músicas ou comidas do seu dia a dia têm origem africana?"
  },
  {
    id: 21,
    eixo: "Meio ambiente e povos tradicionais",
    titulo: "Adiar o fim do mundo",
    chave: "A ideia de uma humanidade separada da natureza é a raiz da crise ecológica; povos indígenas mostram outros modos de existir.",
    fonte: "Ailton Krenak, Ideias para Adiar o Fim do Mundo (2019)",
    leitura: [
      "O líder indígena, escritor e imortal da Academia Brasileira de Letras Ailton Krenak critica a noção de que os seres humanos estariam acima da natureza, tratando rios, florestas e montanhas como meros recursos.",
      "Para os povos originários, o rio pode ser um parente e a montanha, um ancestral. Esse modo de existir protege o meio ambiente e oferece alternativas ao consumo predatório.",
      "Use no tema do ENEM 2022, \"Desafios para a valorização de comunidades e povos tradicionais no Brasil\", e em temas ambientais."
    ],
    temas: ["Povos tradicionais", "Meio ambiente", "Sustentabilidade", "Diversidade cultural"],
    exemplo: "Para Ailton Krenak, a crise ambiental decorre da ideia de uma humanidade separada da natureza. Nesse sentido, valorizar os povos tradicionais significa também reconhecer seus saberes como fundamentais para a preservação dos biomas brasileiros.",
    dica: {
      competencia: 2,
      titulo: "Repertório brasileiro conta",
      texto: "Autores brasileiros como Krenak, Carolina Maria de Jesus e Milton Santos mostram domínio da realidade nacional. Combine um repertório internacional com um brasileiro para enriquecer o texto."
    },
    quiz: {
      pergunta: "Qual crítica central Ailton Krenak faz em \"Ideias para Adiar o Fim do Mundo\"?",
      opcoes: [
        "À falta de tecnologia nas aldeias.",
        "À ideia de uma humanidade separada e acima da natureza.",
        "Ao turismo ecológico.",
        "À demarcação de terras indígenas."
      ],
      correta: 1,
      explicacao: "Krenak questiona a separação entre humanidade e natureza que sustenta a exploração predatória."
    },
    desafio: {
      enunciado: "Escreva um argumento que relacione a valorização dos povos tradicionais à preservação ambiental.",
      modelo: "A valorização dos povos tradicionais é essencial à preservação ambiental, visto que seus modos de vida, como defende Ailton Krenak, estabelecem uma relação de pertencimento — e não de exploração — com a natureza."
    },
    reflexao: "Você se sente parte da natureza ou alguém que a usa?"
  },
  {
    id: 22,
    eixo: "Meio ambiente e povos tradicionais",
    titulo: "Responsáveis pelo amanhã",
    chave: "Age de modo que os efeitos da tua ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra.",
    fonte: "Hans Jonas, O Princípio Responsabilidade (1979); Constituição Federal, art. 225",
    leitura: [
      "O filósofo alemão Hans Jonas propôs uma ética para a era tecnológica: como nosso poder de destruição cresceu, nossa responsabilidade precisa alcançar também as gerações futuras.",
      "A Constituição Federal, no art. 225, vai na mesma direção: \"Todos têm direito ao meio ambiente ecologicamente equilibrado\", cabendo ao Poder Público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações.",
      "Dupla poderosa para temas ambientais: queimadas, desmatamento, crise hídrica, lixo eletrônico, descarte de plástico."
    ],
    temas: ["Meio ambiente", "Mudanças climáticas", "Sustentabilidade", "Consumo"],
    exemplo: "O art. 225 da Constituição Federal garante a todos o direito ao meio ambiente ecologicamente equilibrado, inclusive às futuras gerações. Tal princípio dialoga com a ética de Hans Jonas, para quem as ações presentes devem preservar as condições de vida dos que ainda virão.",
    dica: {
      competencia: 4,
      titulo: "Conectivos de conclusão e consequência",
      texto: "Para concluir ou mostrar consequência: \"portanto\", \"logo\", \"dessa forma\", \"consequentemente\", \"por conseguinte\". Atenção: \"portanto\" no meio da frase vem entre vírgulas."
    },
    quiz: {
      pergunta: "Qual frase está corretamente pontuada?",
      opcoes: [
        "É preciso portanto, preservar os rios.",
        "É preciso, portanto, preservar os rios.",
        "É preciso portanto preservar, os rios.",
        "É, preciso portanto preservar os rios."
      ],
      correta: 1,
      explicacao: "Conectivos deslocados para o meio da oração ficam isolados por vírgulas."
    },
    desafio: {
      enunciado: "Escreva uma frase de consequência usando \"consequentemente\" sobre o desmatamento.",
      modelo: "O desmatamento da Amazônia reduz a umidade transportada para outras regiões do país; consequentemente, a agricultura e o abastecimento de água tornam-se mais vulneráveis."
    },
    reflexao: "Que hábito seu as próximas gerações agradeceriam?"
  },
  {
    id: 23,
    eixo: "Meio ambiente e povos tradicionais",
    titulo: "Riscos que nós mesmos criamos",
    chave: "Na sociedade de risco, os maiores perigos são produzidos pela própria modernização — e não respeitam fronteiras.",
    fonte: "Ulrich Beck, Sociedade de Risco (1986)",
    leitura: [
      "O sociólogo alemão Ulrich Beck publicou sua obra no ano do desastre nuclear de Chernobyl. Ele argumenta que o progresso industrial gera riscos globais — poluição, mudanças climáticas, pandemias — que atingem a todos.",
      "Esses riscos, no entanto, não são distribuídos de forma igual: populações pobres moram em áreas de encosta, sem saneamento, e sofrem mais com enchentes e ondas de calor.",
      "Use em temas sobre mudanças climáticas, desastres ambientais, pandemias, crise hídrica e segurança alimentar."
    ],
    temas: ["Mudanças climáticas", "Desastres ambientais", "Pandemias", "Desigualdade"],
    exemplo: "Segundo Ulrich Beck, a modernidade produz riscos globais que ela própria não consegue controlar. As enchentes cada vez mais frequentes nas cidades brasileiras ilustram essa ideia e atingem com mais força as populações que vivem em áreas vulneráveis.",
    dica: {
      competencia: 3,
      titulo: "Exemplo concreto dá força",
      texto: "Depois de um repertório teórico, traga um exemplo concreto da realidade brasileira (um evento, um tipo de situação comum). A teoria explica; o exemplo prova."
    },
    quiz: {
      pergunta: "Para Ulrich Beck, os grandes riscos contemporâneos:",
      opcoes: [
        "São causados apenas por fenômenos naturais.",
        "São produzidos pela própria modernização e têm alcance global.",
        "Atingem só países pobres.",
        "Foram eliminados pela tecnologia."
      ],
      correta: 1,
      explicacao: "Beck destaca que os riscos atuais são fabricados pelo próprio desenvolvimento industrial e tecnológico."
    },
    desafio: {
      enunciado: "Combine Beck com um exemplo concreto em uma frase sobre mudanças climáticas.",
      modelo: "As ondas de calor extremo, cada vez mais comuns no Brasil, exemplificam a \"sociedade de risco\" de Ulrich Beck, na qual o próprio modelo de desenvolvimento gera ameaças à vida humana."
    },
    reflexao: "Que risco ambiental está mais próximo de onde você mora?"
  },
  {
    id: 24,
    eixo: "Desigualdade social",
    titulo: "A fome é política",
    chave: "A fome não é um fenômeno natural, mas um produto de estruturas sociais e econômicas.",
    fonte: "Josué de Castro, Geografia da Fome (1946)",
    leitura: [
      "O médico e geógrafo pernambucano Josué de Castro rompeu um tabu: falar de fome como problema político. Em \"Geografia da Fome\", ele mapeou o Brasil e mostrou que a fome não era causada pela natureza ou pela \"preguiça\" das pessoas, mas pela concentração de terra e renda.",
      "A obra é referência mundial e o autor chegou a presidir o conselho da FAO, órgão da ONU para alimentação e agricultura.",
      "Use em temas sobre insegurança alimentar, desperdício de alimentos, concentração de renda e direitos sociais (a alimentação está no art. 6º da Constituição)."
    ],
    temas: ["Fome", "Desigualdade", "Direitos sociais", "Desperdício"],
    exemplo: "Já em 1946, Josué de Castro demonstrava, em \"Geografia da Fome\", que a escassez de alimentos é resultado de estruturas sociais desiguais, e não da natureza. Essa análise permanece atual em um país que é grande produtor de alimentos, mas ainda convive com a insegurança alimentar.",
    dica: {
      competencia: 1,
      titulo: "Vírgula não separa sujeito e verbo",
      texto: "Erro clássico: \"A fome no Brasil, é um problema.\" Não se separa sujeito e verbo com vírgula. Correto: \"A fome no Brasil é um problema.\""
    },
    quiz: {
      pergunta: "Qual frase NÃO tem erro de vírgula?",
      opcoes: [
        "A insegurança alimentar, atinge milhões de brasileiros.",
        "Os alimentos desperdiçados no país, poderiam alimentar muitas famílias.",
        "A insegurança alimentar atinge milhões de brasileiros.",
        "O direito à alimentação, está na Constituição."
      ],
      correta: 2,
      explicacao: "As demais separam o sujeito do verbo com vírgula, o que é desvio da norma-padrão."
    },
    desafio: {
      enunciado: "Escreva uma frase sobre o paradoxo entre produção e fome no Brasil, usando \"embora\".",
      modelo: "Embora o Brasil seja um dos maiores produtores de alimentos do mundo, parcela da população ainda convive com a fome, o que confirma a tese de Josué de Castro de que esse é um problema de distribuição, e não de produção."
    },
    reflexao: "Quanto alimento é desperdiçado na sua casa em uma semana?"
  },
  {
    id: 25,
    eixo: "Desigualdade social",
    titulo: "Quarto de despejo",
    chave: "A favela é o \"quarto de despejo\" da cidade: o lugar para onde a sociedade empurra quem ela não quer ver.",
    fonte: "Carolina Maria de Jesus, Quarto de Despejo: diário de uma favelada (1960)",
    leitura: [
      "Carolina Maria de Jesus foi catadora de papel na favela do Canindé, em São Paulo. Em cadernos que encontrava no lixo, escreveu o diário que virou um dos livros mais vendidos da literatura brasileira e foi traduzido para diversos idiomas.",
      "Ela descreve a fome, o racismo e a exclusão com voz própria. Ao chamar a favela de \"quarto de despejo\", denuncia uma cidade que separa a \"sala de visitas\" (os bairros ricos) do lugar onde se escondem os pobres.",
      "Use em temas sobre desigualdade, fome, moradia, racismo, invisibilidade social e valorização da literatura periférica."
    ],
    temas: ["Desigualdade", "Moradia", "Fome", "Invisibilidade social"],
    exemplo: "Carolina Maria de Jesus, em \"Quarto de Despejo\", descreve a favela como o lugar onde a cidade esconde aqueles que deseja ignorar. Décadas depois, a falta de saneamento e de serviços públicos em comunidades periféricas mostra que essa invisibilidade persiste.",
    dica: {
      competencia: 2,
      titulo: "Literatura também é repertório",
      texto: "Obras literárias são repertório legitimado. Cite o autor, a obra e o elemento que se relaciona com o tema (personagem, situação, metáfora). Evite resumir o enredo inteiro — use só o que serve ao argumento."
    },
    quiz: {
      pergunta: "Na obra de Carolina Maria de Jesus, o \"quarto de despejo\" representa:",
      opcoes: [
        "Um cômodo da casa da autora.",
        "A favela, como lugar para onde a cidade empurra os excluídos.",
        "Um depósito de livros.",
        "A prisão onde a autora ficou."
      ],
      correta: 1,
      explicacao: "A metáfora contrapõe a favela (quarto de despejo) aos bairros ricos (sala de visitas) da cidade."
    },
    desafio: {
      enunciado: "Use a metáfora do \"quarto de despejo\" em uma frase sobre a população em situação de rua.",
      modelo: "Assim como a favela descrita por Carolina Maria de Jesus, as calçadas das grandes cidades se tornaram um \"quarto de despejo\" para a população em situação de rua, ignorada pelo poder público e pela sociedade."
    },
    reflexao: "Quem é invisível no caminho que você faz todos os dias?"
  },
  {
    id: 26,
    eixo: "Desigualdade social",
    titulo: "Fábula, perversidade e possibilidade",
    chave: "A globalização pode ser vista como fábula (como nos fazem crer), como perversidade (como é) e como possibilidade (como pode ser).",
    fonte: "Milton Santos, Por uma Outra Globalização (2000)",
    leitura: [
      "O geógrafo baiano Milton Santos é um dos intelectuais brasileiros mais reconhecidos no mundo. Ele critica a globalização como \"fábula\": a promessa de um mundo integrado e igual para todos, que não se cumpre.",
      "Na prática, diz ele, a globalização é \"perversa\": concentra riqueza, aumenta o desemprego e a desigualdade. Mas também pode ser \"possibilidade\", se a técnica for usada a favor da maioria.",
      "Use em temas sobre desigualdade, inclusão digital, trabalho por aplicativo, consumo e acesso à tecnologia."
    ],
    temas: ["Globalização", "Desigualdade", "Inclusão digital", "Trabalho por aplicativo"],
    exemplo: "Milton Santos denunciava a globalização como \"fábula\", ao prometer integração universal sem cumpri-la. A exclusão digital comprova essa leitura: enquanto parte da população tem acesso à internet de alta velocidade, outra parcela permanece desconectada e privada de oportunidades.",
    dica: {
      competencia: 5,
      titulo: "Proposta ligada aos argumentos",
      texto: "A proposta deve resolver os problemas que você discutiu. Se o D1 falou de falta de infraestrutura e o D2 de falta de informação, proponha ações para cada um. Proposta desconectada perde pontos."
    },
    quiz: {
      pergunta: "Para Milton Santos, a globalização como \"perversidade\" se refere a:",
      opcoes: [
        "O modo como ela é vendida pela mídia.",
        "Seus efeitos reais, como concentração de riqueza e aumento das desigualdades.",
        "Seu potencial de transformação positiva.",
        "O avanço da internet."
      ],
      correta: 1,
      explicacao: "Fábula = como nos fazem vê-la; perversidade = como ela é de fato; possibilidade = como pode vir a ser."
    },
    desafio: {
      enunciado: "Use a ideia de \"globalização como possibilidade\" em uma frase de proposta.",
      modelo: "Para que a globalização se torne \"possibilidade\", como propunha Milton Santos, o poder público deve ampliar o acesso gratuito à internet em escolas e espaços públicos de regiões periféricas."
    },
    reflexao: "A tecnologia que você usa hoje te aproxima ou te afasta das oportunidades?"
  },
  {
    id: 27,
    eixo: "Desigualdade social",
    titulo: "Desenvolvimento é liberdade",
    chave: "Desenvolvimento é a expansão das liberdades reais das pessoas, e não apenas o crescimento da renda.",
    fonte: "Amartya Sen, Desenvolvimento como Liberdade (1999)",
    leitura: [
      "O economista indiano Amartya Sen, vencedor do Nobel de Economia em 1998, defende que um país não se desenvolve apenas porque o PIB cresce. O que importa é se as pessoas têm condições reais de escolher a vida que desejam.",
      "Fome, falta de educação, ausência de saúde e de direitos políticos são \"privações de liberdade\". Combatê-las é o verdadeiro desenvolvimento.",
      "Use em temas sobre pobreza, educação, saúde, mobilidade urbana e qualquer tema em que crescimento econômico não se traduz em qualidade de vida."
    ],
    temas: ["Desenvolvimento", "Pobreza", "Políticas públicas", "Qualidade de vida"],
    exemplo: "Para o economista Amartya Sen, desenvolvimento significa a ampliação das liberdades reais dos indivíduos. Sob essa ótica, a falta de transporte público de qualidade nas periferias é uma privação de liberdade, pois limita o acesso ao trabalho, ao estudo e ao lazer.",
    dica: {
      competencia: 4,
      titulo: "Conectivos de oposição",
      texto: "Para contrapor ideias: \"contudo\", \"entretanto\", \"todavia\", \"no entanto\" (iniciam oração, seguidos de vírgula); \"embora\", \"ainda que\", \"conquanto\" (exigem verbo no subjuntivo: \"embora seja\")."
    },
    quiz: {
      pergunta: "Qual frase usa \"embora\" corretamente?",
      opcoes: [
        "Embora o PIB cresceu, a pobreza persiste.",
        "Embora o PIB cresça, a pobreza persiste.",
        "Embora o PIB crescendo, a pobreza persiste.",
        "Embora o PIB vai crescer, a pobreza persiste."
      ],
      correta: 1,
      explicacao: "\"Embora\" exige verbo no subjuntivo: \"cresça\" (ou \"tenha crescido\")."
    },
    desafio: {
      enunciado: "Escreva uma frase com \"ainda que\" relacionando crescimento econômico e desigualdade.",
      modelo: "Ainda que a economia brasileira apresente crescimento, as liberdades reais de grande parte da população permanecem limitadas pela falta de acesso a serviços básicos."
    },
    reflexao: "Que liberdade você tem hoje que outra pessoa da sua idade não tem?"
  },
  {
    id: 28,
    eixo: "Inclusão e direitos",
    titulo: "Atrás do véu",
    chave: "Regras justas são aquelas que escolheríamos sem saber qual posição ocuparíamos na sociedade.",
    fonte: "John Rawls, Uma Teoria da Justiça (1971); Lei nº 12.711/2012 (Lei de Cotas)",
    leitura: [
      "O filósofo norte-americano John Rawls propôs um experimento mental: imagine escolher as regras da sociedade sob um \"véu da ignorância\", sem saber se você seria rico ou pobre, homem ou mulher, branco ou negro. Que regras você escolheria?",
      "Para Rawls, desigualdades só são aceitáveis se beneficiarem os menos favorecidos. É a base filosófica para políticas de equidade: tratar desigualmente os desiguais para alcançar a igualdade.",
      "A Lei de Cotas (Lei nº 12.711/2012), que reserva vagas em universidades e institutos federais para estudantes de escolas públicas, com recortes de renda e raça, é um exemplo concreto desse princípio."
    ],
    temas: ["Justiça social", "Cotas", "Políticas públicas", "Equidade"],
    exemplo: "Segundo John Rawls, uma sociedade justa deve organizar suas instituições de modo a beneficiar os menos favorecidos. A Lei de Cotas, ao reservar vagas para estudantes de escolas públicas, materializa essa concepção de equidade no acesso ao ensino superior.",
    dica: {
      competencia: 3,
      titulo: "Antecipe a objeção",
      texto: "Uma técnica sofisticada: apresente o contra-argumento e refute-o. \"Há quem afirme que..., contudo...\". Isso mostra pensamento crítico e domínio do tema."
    },
    quiz: {
      pergunta: "O \"véu da ignorância\" de Rawls propõe que:",
      opcoes: [
        "As pessoas devem ignorar os problemas sociais.",
        "As regras justas seriam escolhidas sem saber que posição social ocuparíamos.",
        "A educação deve ser restrita a poucos.",
        "A ignorância é a causa da pobreza."
      ],
      correta: 1,
      explicacao: "O experimento garante imparcialidade: sem saber sua posição, ninguém criaria regras que favorecessem só um grupo."
    },
    desafio: {
      enunciado: "Escreva uma refutação: \"Há quem afirme que as cotas ferem a meritocracia; contudo, ...\"",
      modelo: "...essa visão ignora que as condições de partida são desiguais, de modo que, como defende John Rawls, tratar desigualmente os desiguais é condição para uma competição verdadeiramente justa."
    },
    reflexao: "Que regra você mudaria na sociedade se não soubesse onde iria nascer?"
  },
  {
    id: 29,
    eixo: "Inclusão e direitos",
    titulo: "Envelhecer com dignidade",
    chave: "É obrigação da família, da comunidade, da sociedade e do Poder Público assegurar à pessoa idosa, com absoluta prioridade, seus direitos fundamentais.",
    fonte: "Estatuto da Pessoa Idosa (Lei nº 10.741/2003)",
    leitura: [
      "O Estatuto da Pessoa Idosa (originalmente Estatuto do Idoso) garante direitos às pessoas com 60 anos ou mais, como prioridade no atendimento, gratuidade no transporte coletivo urbano para maiores de 65 anos e proteção contra abandono e violência.",
      "O Brasil está envelhecendo rapidamente, mas ainda alimenta o etarismo — o preconceito contra pessoas por causa da idade —, que aparece no mercado de trabalho, na exclusão digital e na ideia de que idosos são \"um peso\".",
      "Use em temas sobre envelhecimento populacional, etarismo, solidão, inclusão digital de idosos e previdência."
    ],
    temas: ["Envelhecimento", "Etarismo", "Inclusão digital", "Direitos"],
    exemplo: "Embora o Estatuto da Pessoa Idosa determine que a sociedade assegure aos idosos, com absoluta prioridade, seus direitos fundamentais, o etarismo ainda os exclui do mercado de trabalho e do ambiente digital, cada vez mais necessário para acessar serviços básicos.",
    dica: {
      competencia: 2,
      titulo: "Evite repertórios de bolso genéricos",
      texto: "Um repertório decorado que serve para tudo, mas não se conecta ao tema, é considerado pouco produtivo. Escolha repertórios que você consiga relacionar ao recorte específico da proposta."
    },
    quiz: {
      pergunta: "O que significa \"etarismo\"?",
      opcoes: [
        "Estudo das idades geológicas.",
        "Preconceito ou discriminação com base na idade.",
        "Política de aposentadoria.",
        "Um tipo de doença comum na velhice."
      ],
      correta: 1,
      explicacao: "Etarismo (ou idadismo) é a discriminação de pessoas por causa da idade."
    },
    desafio: {
      enunciado: "Escreva uma proposta de intervenção completa sobre inclusão digital de idosos.",
      modelo: "As prefeituras devem oferecer cursos gratuitos de letramento digital para idosos em centros de convivência, ministrados por estudantes universitários em projetos de extensão, a fim de garantir sua autonomia no acesso a serviços bancários e de saúde on-line."
    },
    reflexao: "O que você aprendeu com uma pessoa idosa que nenhum livro ensinou?"
  },
  {
    id: 30,
    eixo: "Violência e ética",
    titulo: "Quando as regras perdem a força",
    chave: "A anomia é o estado em que as normas sociais perdem a força de orientar os comportamentos, gerando desagregação.",
    fonte: "Émile Durkheim, Da Divisão do Trabalho Social (1893) e O Suicídio (1897)",
    leitura: [
      "Émile Durkheim, um dos fundadores da sociologia, mostrou que a sociedade se mantém unida por normas e valores compartilhados. Quando esses laços enfraquecem — em crises, mudanças bruscas ou isolamento — surge a \"anomia\".",
      "Em estado de anomia, os indivíduos se sentem desorientados e desconectados, o que pode favorecer violência, desrespeito às regras e sofrimento psíquico. Em \"O Suicídio\", Durkheim demonstrou que até um ato aparentemente individual tem causas sociais.",
      "Use em temas sobre violência urbana, violência nas escolas, saúde mental, desrespeito às leis e crise de valores."
    ],
    temas: ["Violência", "Saúde mental", "Coesão social", "Escola"],
    exemplo: "Segundo Émile Durkheim, a anomia surge quando as normas sociais deixam de orientar os indivíduos. O aumento de episódios de violência nas escolas pode ser compreendido sob essa ótica, como reflexo da fragilização dos vínculos entre estudantes, famílias e comunidade escolar.",
    dica: {
      competencia: 5,
      titulo: "Retome a tese na conclusão",
      texto: "Antes da proposta, retome brevemente a tese e os argumentos com um conectivo conclusivo. Depois, apresente a intervenção. Uma conclusão sólida \"fecha o círculo\" aberto na introdução."
    },
    quiz: {
      pergunta: "O conceito de anomia, em Durkheim, refere-se a:",
      opcoes: [
        "Um excesso de leis na sociedade.",
        "O enfraquecimento das normas sociais que orientam o comportamento.",
        "Uma doença mental individual.",
        "A ausência de governo."
      ],
      correta: 1,
      explicacao: "Anomia é a perda da força reguladora das normas, que deixa os indivíduos sem referências coletivas."
    },
    desafio: {
      enunciado: "Escreva a frase de retomada (antes da proposta) para uma redação sobre violência nas escolas.",
      modelo: "Diante do exposto, percebe-se que a violência no ambiente escolar decorre da fragilização dos vínculos comunitários e da ausência de espaços de diálogo, fatores que exigem ação coordenada entre Estado, escola e família."
    },
    reflexao: "O que mantém você ligado(a) às pessoas ao seu redor?"
  }
];

/* Material de consulta rápida (aba "Kit") */
window.KIT = {
  competencias: [
    { n: 1, nome: "Norma-padrão", desc: "Demonstrar domínio da modalidade escrita formal da língua portuguesa: ortografia, acentuação, concordância, regência, pontuação, crase." },
    { n: 2, nome: "Tema e repertório", desc: "Compreender a proposta, desenvolver o tema dentro da estrutura dissertativo-argumentativa e aplicar conceitos de várias áreas do conhecimento." },
    { n: 3, nome: "Argumentação", desc: "Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista." },
    { n: 4, nome: "Coesão", desc: "Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação: conectivos, referenciação, encadeamento." },
    { n: 5, nome: "Proposta de intervenção", desc: "Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos, com agente, ação, modo/meio, finalidade e detalhamento." }
  ],
  estrutura: [
    { parte: "Introdução", itens: ["Contextualização (de preferência com repertório)", "Tese: seu ponto de vista sobre o tema", "Anúncio dos dois argumentos"] },
    { parte: "Desenvolvimento 1", itens: ["Tópico frasal com o 1º argumento", "Explicação + repertório", "Análise ligando ao tema", "Frase de fechamento"] },
    { parte: "Desenvolvimento 2", itens: ["Conectivo de adição + 2º argumento", "Explicação + repertório ou exemplo", "Análise ligando ao tema", "Frase de fechamento"] },
    { parte: "Conclusão", itens: ["Conectivo conclusivo + retomada da tese", "Proposta de intervenção com os 5 elementos", "Respeito aos direitos humanos"] }
  ],
  conectivos: [
    { funcao: "Adição", lista: ["além disso", "ademais", "outrossim", "paralelamente", "soma-se a isso"] },
    { funcao: "Oposição", lista: ["contudo", "entretanto", "todavia", "no entanto", "embora (+ subjuntivo)"] },
    { funcao: "Causa", lista: ["uma vez que", "visto que", "já que", "porquanto", "em virtude de"] },
    { funcao: "Consequência", lista: ["consequentemente", "por conseguinte", "de modo que", "logo", "assim"] },
    { funcao: "Explicação", lista: ["isto é", "ou seja", "em outras palavras", "vale dizer"] },
    { funcao: "Exemplificação", lista: ["por exemplo", "a exemplo de", "como", "é o caso de"] },
    { funcao: "Conclusão", lista: ["portanto", "dessa forma", "diante do exposto", "em suma", "por fim"] }
  ],
  proposta: [
    { elemento: "Agente", pergunta: "Quem vai agir?", ex: "O Ministério da Educação" },
    { elemento: "Ação", pergunta: "O que será feito?", ex: "deve implementar programas de educação digital" },
    { elemento: "Modo/Meio", pergunta: "Como será feito?", ex: "por meio de oficinas nas escolas públicas" },
    { elemento: "Finalidade", pergunta: "Para quê?", ex: "a fim de formar usuários críticos" },
    { elemento: "Detalhamento", pergunta: "Que informação extra enriquece algum elemento?", ex: "ministradas por professores capacitados por especialistas" }
  ],
  temasAnteriores: [
    { ano: 2024, tema: "Desafios para a valorização da herança africana no Brasil" },
    { ano: 2023, tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil" },
    { ano: 2022, tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil" },
    { ano: 2021, tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil" },
    { ano: 2020, tema: "O estigma associado às doenças mentais na sociedade brasileira" },
    { ano: 2019, tema: "Democratização do acesso ao cinema no Brasil" },
    { ano: 2018, tema: "Manipulação do comportamento do usuário pelo controle de dados na internet" },
    { ano: 2017, tema: "Desafios para a formação educacional de surdos no Brasil" }
  ],
  zeram: [
    "Fuga total ao tema",
    "Não obedecer à estrutura dissertativo-argumentativa",
    "Texto com até 7 linhas (insuficiente)",
    "Parte do texto deliberadamente desconectada do tema (ex.: receitas, hinos)",
    "Nome, assinatura ou identificação fora do local permitido",
    "Folha de redação em branco ou texto predominantemente copiado dos textos motivadores"
  ]
};
