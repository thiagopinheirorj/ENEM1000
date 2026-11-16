/* 7º ano · Slides (10), mapas mentais (8) e aulas de emergência (12). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("7"), ob = H.ob, dis = H.dis;

  /* ---------------- SLIDES ---------------- */
  Y.sl("sl-formacao-palavras", "Slides · Formação de palavras", "8 slides: derivação prefixal, sufixal, parassintética, composição por justaposição e aglutinação.", [
    { capa: true, t: "Formação de palavras", sub: "Como novas palavras nascem" },
    { t: "Radical e família", li: ["Radical: base do sentido (//pedr-//)", "Família: pedra, pedreiro, pedregulho, empedrar"] },
    { t: "Derivação prefixal", li: ["Prefixo + palavra: **in**feliz, **des**fazer, **re**ler", "Prefixos: in-, im-, des-, re-, anti-, super-, inter-"] },
    { t: "Derivação sufixal", li: ["Palavra + sufixo: feliz**mente**, pedr**eiro**, belez**a**", "Sufixos: -eza, -dade, -ção, -oso, -mente, -inho"] },
    { t: "Derivação parassintética", li: ["Prefixo e sufixo ao mesmo tempo", "**en**tard**ecer**, **em**pobr**ecer**, **a**manh**ecer**", "Sem o prefixo ou o sufixo, a palavra não existe"] },
    { t: "Composição por justaposição", li: ["Duas palavras unidas, sem mudança", "guarda-chuva, girassol, passatempo, pontapé"] },
    { t: "Composição por aglutinação", li: ["Elementos se fundem e um perde sons", "plano + alto = planalto", "água + ardente = aguardente", "vinho + acre = vinagre"] },
    { t: "Vamos praticar", li: ["Classifique: infeliz, felizmente, entardecer, guarda-roupa, planalto", "Forme uma família de palavras com //leite//"], nota: "Respostas: prefixal, sufixal, parassintética, justaposição, aglutinação; leiteiro, leiteria, aleitar…" }
  ]);

  Y.sl("sl-modos-verbais", "Slides · Modos verbais", "7 slides: indicativo, subjuntivo e imperativo; tempos do indicativo.", [
    { capa: true, t: "Modos verbais", sub: "Certeza, dúvida e ordem" },
    { t: "Indicativo", li: ["Fatos e certezas", "Presente: eu estudo", "Pretérito: estudei, estudava", "Futuro: estudarei, estudaria"] },
    { t: "Subjuntivo", li: ["Dúvida, desejo, hipótese", "Talvez eu estude…", "Espero que você venha.", "Se eu tivesse tempo…"], nota: "Mostre o contraste: “Eu sei que ele vem” (indicativo) × “Espero que ele venha” (subjuntivo)." },
    { t: "Imperativo", li: ["Ordem, pedido, conselho", "Estude! · Venha cá. · Façam silêncio."] },
    { t: "Perfeito × imperfeito", li: ["Perfeito: ação concluída (estudei)", "Imperfeito: ação habitual ou em andamento (estudava)"] },
    { t: "Futuro do presente × do pretérito", li: ["Presente: viajarei", "Pretérito: viajaria (condição ou cortesia)", "“Você poderia me ajudar?”"] },
    { t: "Vamos praticar", li: ["Passe para o imperativo: “Você fecha a porta.”", "Complete: “Talvez ele ___ (chegar) cedo.”", "Classifique o modo: “Espero que chova.”"], nota: "Respostas: Feche a porta; chegue; subjuntivo." }
  ]);

  Y.sl("sl-voz", "Slides · Voz ativa e voz passiva", "6 slides: quem pratica e quem sofre a ação.", [
    { capa: true, t: "Voz ativa e voz passiva", sub: "Quem faz e quem sofre a ação" },
    { t: "Voz ativa", li: ["O sujeito **pratica** a ação", "O menino chutou a bola."] },
    { t: "Voz passiva analítica", li: ["O sujeito **sofre** a ação", "Verbo //ser// + particípio + (por…)", "A bola foi chutada pelo menino."] },
    { t: "Voz passiva sintética", li: ["Verbo + //se//", "Vendem-se casas. = Casas são vendidas."] },
    { t: "Por que usar a passiva?", li: ["Quando o agente é desconhecido ou menos importante", "“Os livros foram doados.” (não importa por quem)"] },
    { t: "Vamos praticar", li: ["Passe para a passiva: “A professora corrigiu a prova.”", "Passe para a ativa: “O bolo foi feito por vovó.”"], nota: "Respostas: A prova foi corrigida pela professora; Vovó fez o bolo." }
  ]);

  Y.sl("sl-sujeito-predicado", "Slides · Sujeito e predicado", "7 slides: tipos de sujeito e de predicado.", [
    { capa: true, t: "Sujeito e predicado", sub: "A estrutura da oração" },
    { t: "O que é sujeito?", li: ["Termo sobre o qual se declara algo", "Pergunte ao verbo: **quem** pratica a ação?", "Núcleo: substantivo ou pronome"] },
    { t: "Tipos de sujeito", li: ["**Simples**: um núcleo (O menino chegou)", "**Composto**: dois ou mais (Ana e Bia saíram)", "**Oculto**: pela terminação do verbo (Chegamos cedo)"] },
    { t: "Predicado", li: ["O que se diz do sujeito", "Núcleo: um verbo ou um nome (predicativo)"] },
    { t: "Predicado verbal e nominal", li: ["**Verbal**: verbo de ação (O menino correu)", "**Nominal**: verbo de ligação + predicativo (O dia estava lindo)"] },
    { t: "Verbo-nominal", li: ["Tem ação e qualidade do sujeito", "A professora chegou cansada."] },
    { t: "Vamos praticar", li: ["Classifique: “Os alunos saíram.” · “Ela parece feliz.” · “Ele saiu triste.”"], nota: "Respostas: verbal; nominal; verbo-nominal." }
  ]);

  Y.sl("sl-transitividade", "Slides · Transitividade verbal", "6 slides: objeto direto, indireto, verbos intransitivos e de ligação.", [
    { capa: true, t: "Transitividade verbal", sub: "O que o verbo pede" },
    { t: "Verbo transitivo direto", li: ["Pede objeto **sem preposição**", "Comprei **um livro**.", "Ela abriu **a porta**."] },
    { t: "Verbo transitivo indireto", li: ["Pede objeto **com preposição**", "Gosto **de música**.", "Preciso **de ajuda**."] },
    { t: "Verbo intransitivo", li: ["Não precisa de complemento", "O sol nasceu.", "Os alunos chegaram."] },
    { t: "Verbo de ligação", li: ["Liga o sujeito ao predicativo", "ser, estar, ficar, parecer, permanecer", "Ela ficou **feliz**."] },
    { t: "Vamos praticar", li: ["Classifique: “Maria comprou pão.” · “Maria precisa de descanso.” · “Maria chorou.”"], nota: "Respostas: VTD; VTI; VI." }
  ]);

  Y.sl("sl-concordancia", "Slides · Concordância verbal e nominal", "7 slides: regras básicas e casos que mais geram dúvida.", [
    { capa: true, t: "Concordância", sub: "Verbal e nominal" },
    { t: "Concordância verbal", li: ["O verbo concorda com o núcleo do sujeito", "Os alunos chegaram.", "Eu e meus amigos fomos."] },
    { t: "Sujeito posposto", li: ["Chegaram **os alunos**.", "O verbo continua concordando com o sujeito"] },
    { t: "Concordância nominal", li: ["Adjetivo, artigo e numeral concordam com o substantivo", "As casas antigas · Os dois livros novos"] },
    { t: "Casos especiais", li: ["**Meio** (= um pouco) não varia: ela ficou meio cansada", "**Menos** nunca varia", "**Obrigado/obrigada** concorda com quem agradece"] },
    { t: "Anexo e proibido", li: ["Seguem **anexas** as fotos.", "É **proibida** a entrada. (com artigo)", "É **proibido** entrada. (sem artigo)"] },
    { t: "Vamos praticar", li: ["Corrija: “Os alunos chegou.” · “Elas estão meias nervosas.” · “Segue anexo as fotos.”"], nota: "Respostas: chegaram; meio nervosas; seguem anexas." }
  ]);

  Y.sl("sl-virgula", "Slides · A vírgula", "7 slides: usos principais, casos proibidos e prática.", [
    { capa: true, t: "A vírgula", sub: "Pausa que muda sentidos" },
    { t: "Enumeração e vocativo", li: ["Comprei maçã, pera e uva.", "Pedro, venha aqui."] },
    { t: "Aposto", li: ["Explica um termo anterior", "Carlos, meu irmão, mora em Niterói."] },
    { t: "Adjunto adverbial deslocado", li: ["Amanhã, viajarei.", "Com o tempo, a dor passa."], nota: "Se for curto, a vírgula é opcional; se for longo, é recomendada." },
    { t: "Antes de conjunções", li: ["Antes de **mas, porém, contudo, todavia**", "Depois de **portanto, no entanto**"] },
    { t: "Quando NÃO usar", li: ["Entre sujeito e verbo: ✗ Os alunos, chegaram.", "Entre verbo e complemento: ✗ Comprei, um livro."] },
    { t: "Vamos praticar", li: ["Pontue: “Maria minha prima mora longe mas visita a gente”", "Pontue: “Comprei pão leite queijo e manteiga”"], nota: "Respostas: Maria, minha prima, mora longe, mas visita a gente. · Comprei pão, leite, queijo e manteiga." }
  ]);

  Y.sl("sl-generos-jornalisticos", "Slides · Gêneros jornalísticos", "7 slides: notícia, reportagem, entrevista, artigo de opinião e carta do leitor.", [
    { capa: true, t: "Gêneros jornalísticos", sub: "Informar, explicar e opinar" },
    { t: "Notícia", li: ["Informa um fato recente", "Lide: quem, o quê, quando, onde, por quê", "Linguagem objetiva"] },
    { t: "Reportagem", li: ["Aprofunda um assunto", "Várias fontes e dados", "Pode ter fotos, gráficos e boxes"] },
    { t: "Entrevista", li: ["Perguntas e respostas", "Dá voz ao entrevistado", "Introdução apresenta a pessoa"] },
    { t: "Artigo de opinião", li: ["Defende um ponto de vista", "Tese + argumentos + conclusão", "Assinado por quem opina"] },
    { t: "Carta do leitor", li: ["O leitor comenta ou reclama", "Linguagem formal", "Saudação e despedida"] },
    { t: "Atividade", li: ["Identifique o gênero: “Prefeitura abre inscrições” · “Por que o recreio deve ser maior” · “Sr. Editor, escrevo para reclamar…”"], nota: "Respostas: notícia; artigo de opinião; carta do leitor." }
  ], ["Interpretação", "Redação"]);

  Y.sl("sl-argumentacao", "Slides · Como argumentar", "7 slides: tese, argumentos, concessão, conclusão e conectivos.", [
    { capa: true, t: "Como argumentar", sub: "Defender uma ideia com razões" },
    { t: "Tese", li: ["Ponto de vista que vamos defender", "Defendo que…, Acredito que…"] },
    { t: "Argumentos", li: ["Razões que sustentam a tese", "Exemplos, dados, fatos", "Cada argumento precisa de explicação"] },
    { t: "Concessão", li: ["Reconhecer um ponto do outro lado", "É verdade que… **mas**…", "Torna o texto mais convincente"] },
    { t: "Conclusão", li: ["Retoma a tese", "Propõe uma solução", "**Portanto**, **assim**, **por isso**"] },
    { t: "Conectivos argumentativos", li: ["Adição: além disso", "Oposição: mas, porém, contudo", "Causa: porque, já que", "Conclusão: portanto, logo"] },
    { t: "Vamos praticar", li: ["Escreva uma tese sobre o uso do celular na escola e dois argumentos."], nota: "Peça que algumas duplas leiam suas teses e que a turma aponte se os argumentos sustentam a tese." }
  ], ["Redação", "Interpretação"]);

  Y.sl("sl-denotacao-conotacao", "Slides · Denotação e conotação", "6 slides: sentido literal e figurado, com exemplos.", [
    { capa: true, t: "Denotação e conotação", sub: "Sentido literal e sentido figurado" },
    { t: "Denotação", li: ["Sentido literal, do dicionário", "“Ele pegou o coração do boi.”"] },
    { t: "Conotação", li: ["Sentido figurado, que depende do contexto", "“Ela tem um coração de ouro.”"] },
    { t: "Exemplos", li: ["Cabeça: parte do corpo × líder da turma", "Pé de moleque: doce × expressão", "“Está uma geladeira aqui!” (muito frio)"] },
    { t: "Onde aparece", li: ["Poemas, músicas, propagandas, piadas, linguagem do dia a dia"] },
    { t: "Atividade", li: ["Classifique: “Comprei uma manga.” · “Meu pai é uma fera.” · “A sala é uma geladeira.”"], nota: "Respostas: denotativo; conotativo; conotativo." }
  ], ["Interpretação", "Gramática"]);

  /* ---------------- MAPAS MENTAIS ---------------- */
  Y.mp("mp-formacao-palavras", "Mapa mental · Formação de palavras", "Derivação, composição e radical.", {
    centro: "Formação de palavras", ramos: [
      { t: "Radical e família", itens: ["pedr-: pedra, pedreiro, pedregulho"] },
      { t: "Derivação prefixal", itens: ["prefixo + palavra", "infeliz, desfazer, reler"] },
      { t: "Derivação sufixal", itens: ["palavra + sufixo", "felizmente, pedreiro, beleza"] },
      { t: "Parassintética", itens: ["prefixo + sufixo juntos", "entardecer, empobrecer"] },
      { t: "Justaposição", itens: ["sem alteração", "guarda-chuva, girassol"] },
      { t: "Aglutinação", itens: ["com perda de sons", "planalto, aguardente, vinagre"] }
    ]
  });

  Y.mp("mp-verbos", "Mapa mental · Modos e tempos verbais", "Indicativo, subjuntivo, imperativo e formas nominais.", {
    centro: "Verbo", ramos: [
      { t: "Indicativo", itens: ["certeza", "presente, perfeito, imperfeito, futuro"] },
      { t: "Subjuntivo", itens: ["dúvida, desejo, hipótese", "Talvez eu estude"] },
      { t: "Imperativo", itens: ["ordem, pedido, conselho", "Estude!"] },
      { t: "Formas nominais", itens: ["infinitivo: cantar", "gerúndio: cantando", "particípio: cantado"] },
      { t: "Voz", itens: ["ativa: O menino chutou", "passiva: A bola foi chutada"] },
      { t: "Transitividade", itens: ["VTD, VTI, VI, VL"] }
    ]
  });

  Y.mp("mp-sujeito-predicado", "Mapa mental · Sujeito, predicado e objetos", "Organização da oração.", {
    centro: "A oração", ramos: [
      { t: "Sujeito simples", itens: ["um núcleo", "O menino chegou."] },
      { t: "Sujeito composto", itens: ["dois núcleos", "Ana e Bia saíram."] },
      { t: "Sujeito oculto", itens: ["pela terminação verbal", "Chegamos cedo. (nós)"] },
      { t: "Predicado verbal", itens: ["verbo de ação", "O menino correu."] },
      { t: "Predicado nominal", itens: ["verbo de ligação + predicativo", "O dia estava lindo."] },
      { t: "Objetos", itens: ["direto: sem preposição", "indireto: com preposição"] }
    ]
  });

  Y.mp("mp-transitividade", "Mapa mental · Transitividade verbal", "Os quatro tipos de verbo quanto ao complemento.", {
    centro: "Transitividade", ramos: [
      { t: "Transitivo direto", itens: ["objeto direto, sem preposição", "Comprei um livro."] },
      { t: "Transitivo indireto", itens: ["objeto indireto, com preposição", "Gosto de música."] },
      { t: "Transitivo direto e indireto", itens: ["Entreguei o livro ao professor."] },
      { t: "Intransitivo", itens: ["sem complemento", "O sol nasceu."] },
      { t: "De ligação", itens: ["liga sujeito e predicativo", "ser, estar, ficar, parecer"] }
    ]
  });

  Y.mp("mp-pontuacao", "Mapa mental · Pontuação", "Vírgula e demais sinais.", {
    centro: "Pontuação", ramos: [
      { t: "Vírgula", itens: ["enumeração, vocativo, aposto", "antes de mas e porém", "nunca entre sujeito e verbo"] },
      { t: "Ponto e vírgula", itens: ["separa partes longas ou itens"] },
      { t: "Dois-pontos", itens: ["lista, fala, explicação"] },
      { t: "Aspas", itens: ["citação, ironia, estrangeirismo"] },
      { t: "Parênteses", itens: ["informação extra"] },
      { t: "Reticências", itens: ["suspense, hesitação, interrupção"] }
    ]
  });

  Y.mp("mp-pronomes", "Mapa mental · Pronomes", "Pessoais, indefinidos, interrogativos e relativos.", {
    centro: "Pronomes", ramos: [
      { t: "Pessoais retos", itens: ["eu, tu, ele, nós, vós, eles"] },
      { t: "Pessoais oblíquos", itens: ["me, te, se, o, a, lhe, nos"] },
      { t: "Indefinidos", itens: ["alguém, ninguém, tudo, nada, cada"] },
      { t: "Interrogativos", itens: ["quem, que, qual, quanto"] },
      { t: "Relativos", itens: ["que, quem, onde, cujo, o qual", "O livro que li é ótimo."] },
      { t: "Demonstrativos e possessivos", itens: ["este, esse, aquele", "meu, teu, nosso"] }
    ]
  });

  Y.mp("mp-generos-jornalisticos", "Mapa mental · Gêneros jornalísticos", "Notícia, reportagem, entrevista, artigo e carta do leitor.", {
    centro: "Gêneros jornalísticos", ramos: [
      { t: "Notícia", itens: ["informa", "lide: quem, o quê, quando, onde, por quê"] },
      { t: "Reportagem", itens: ["aprofunda", "várias fontes e dados"] },
      { t: "Entrevista", itens: ["perguntas e respostas", "voz do entrevistado"] },
      { t: "Artigo de opinião", itens: ["defende ponto de vista", "tese e argumentos"] },
      { t: "Carta do leitor", itens: ["comenta ou reclama", "linguagem formal"] }
    ]
  }, ["Interpretação", "Redação"]);

  Y.mp("mp-sentido-palavras", "Mapa mental · Relações de sentido", "Sinônimos, antônimos, homônimos, parônimos, denotação e conotação.", {
    centro: "Sentido das palavras", ramos: [
      { t: "Sinônimos", itens: ["sentido semelhante", "bonito, belo"] },
      { t: "Antônimos", itens: ["sentido oposto", "alegre, triste"] },
      { t: "Homônimos", itens: ["mesma forma ou som", "cela / sela"] },
      { t: "Parônimos", itens: ["forma parecida", "descrição / discrição"] },
      { t: "Denotação", itens: ["sentido literal"] },
      { t: "Conotação", itens: ["sentido figurado", "coração de ouro"] }
    ]
  }, ["Interpretação", "Gramática"]);

  /* ---------------- AULAS DE EMERGÊNCIA ---------------- */
  function E(id, titulo, resumo, blocos, assunto) {
    Y.m("emergencia", "e-" + id, titulo, assunto || ["Gramática"], resumo, blocos, "50 min");
  }
  var pl = H.pl;

  E("stop-formacao", "Aula de 50 minutos: Stop da formação de palavras", "Jogo de revisão: palavras derivadas, compostas e da mesma família, por letra sorteada.", [
    H.i("**Antes da aula:** imprima a ficha, uma por grupo."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Grupos de quatro. Sorteie uma letra a cada rodada." },
      { min: "30", t: "5 rodadas", d: "Em 3 minutos, cada grupo preenche as colunas. Corrija no quadro." },
      { min: "10", t: "Contagem e discussão", d: "10 pontos por palavra única, 5 por repetida, 0 por errada. Discuta dúvidas." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com a palavra mais criativa do jogo." }
    ]),
    H.tab("Ficha", ["Rodada · letra", "Palavra com prefixo", "Palavra com sufixo", "Palavra composta", "Pontos"], [["1 · ___", "", "", "", ""], ["2 · ___", "", "", "", ""], ["3 · ___", "", "", "", ""], ["4 · ___", "", "", "", ""], ["5 · ___", "", "", "", ""], [{ t: "Total" }, "", "", "", ""]]),
    H.pf("Dica", ["A palavra deve começar pela letra sorteada. Aceite só as formas que você confirmar no dicionário."])
  ]);

  E("bingo-prefixos", "Aula de 50 minutos: bingo de prefixos e sufixos", "O professor lê significados; os alunos marcam a palavra correspondente.", [
    H.i("**Antes da aula:** imprima uma cartela por aluno e escreva a lista de palavras no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno preenche a cartela com 9 palavras da lista no quadro." },
      { min: "35", t: "Rodadas", d: "Leia as dicas. Quem completar uma linha ganha um ponto; a cartela cheia vale três." },
      { min: "10", t: "Fechamento", d: "Cada aluno cria uma palavra nova com um prefixo e um sufixo e explica o sentido." }
    ]),
    H.tab("Cartela", ["", "", ""], [["", "", ""], ["", "", ""], ["", "", ""]]),
    H.te("Lista no quadro", ["infeliz · refazer · desleal · felizmente · beleza · pobreza · entardecer · empobrecer · pedreiro · livraria · antibiótico · superfácil · interurbano · cantor · tolice"]),
    H.pf("Dicas para ler", ["Palavra que indica o oposto de feliz (infeliz). Fazer de novo (refazer). Qualidade de belo (beleza). Verbo que significa tornar pobre (empobrecer). Quem trabalha com pedras (pedreiro). Lugar onde se vendem livros (livraria). Contra bactérias (antibiótico). Entre cidades (interurbano)."])
  ]);

  E("caca-erro-concordancia", "Aula de 50 minutos: caça ao erro de concordância", "Revisão em duplas de um texto com 10 erros de concordância verbal e nominal.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise rapidamente: verbo concorda com o sujeito; adjetivo com o substantivo." },
      { min: "15", t: "Caça aos erros", d: "As duplas sublinham os erros." },
      { min: "15", t: "Correção coletiva", d: "Cada dupla corrige um erro e explica a regra." },
      { min: "10", t: "Reescrita", d: "Individualmente, reescrevem o texto." },
      { min: "5", t: "Fechamento", d: "Anotam a regra que mais erraram." }
    ]),
    H.t("Texto com erros", "Os alunos do sétimo ano organizou uma feira de ciências. Cada grupo apresentaram experimentos interessante. A professora e os monitores acompanhou tudo. Havia muitas pessoas na sala, e as famílias elogiaram os trabalhos. Seguem anexo as fotos do evento. Foi meia confuso no começo, mas tudo deu certo.", "Texto original, com erros propositais"),
    H.qs([dis("Reescreva o texto corrigido.", "Os alunos do sétimo ano organizaram uma feira de ciências. Cada grupo apresentou experimentos interessantes. A professora e os monitores acompanharam tudo. Havia muitas pessoas na sala, e as famílias elogiaram os trabalhos. Seguem anexas as fotos do evento. Foi meio confuso no começo, mas tudo deu certo.", 6)]),
    H.pf("Os erros", ["organizou → organizaram; apresentaram → apresentou (cada grupo); interessante → interessantes; acompanhou → acompanharam; seguem anexo → seguem anexas; meia → meio."])
  ], ["Gramática", "Redação"]);

  E("debate-celular", "Aula de 50 minutos: debate sobre o celular na escola", "Debate regrado com tese, argumentos e concessão, seguido de registro por escrito.", [
    H.i("**Antes da aula:** divida a turma em dois lados. Organize a sala em duas filas frente a frente."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Apresente o tema: “O celular deve ser permitido na escola?”. Sorteie os lados." },
      { min: "10", t: "Preparação", d: "Cada lado anota duas teses e três argumentos na ficha." },
      { min: "20", t: "Debate", d: "Duas rodadas. Cada aluno tem 1 minuto; ninguém interrompe. Peça que cada fala faça uma concessão." },
      { min: "10", t: "Registro", d: "Individualmente, cada aluno escreve um parágrafo com sua opinião." },
      { min: "5", t: "Fechamento", d: "Votação simbólica e comentário final." }
    ]),
    H.tab("Ficha de argumentos", ["Lado", "Tese", "Argumento 1", "Argumento 2", "Concessão"], [["A favor", "", "", "", ""], ["Contra", "", "", "", ""]]),
    H.ln("Meu parágrafo de opinião", 8),
    H.pf("Regras", ["Respeito acima de tudo: critique ideias, não pessoas.", "Dê um sinal a cada 30 segundos para controlar o tempo."])
  ], ["Redação", "Interpretação"]);

  E("tribunal-literario", "Aula de 50 minutos: tribunal do mito (Eco e Narciso)", "Julgamento simbólico para trabalhar mitos, argumentos e leitura crítica.", [
    H.i("**Antes da aula:** imprima o resumo do mito. Divida a turma em acusação, defesa e júri."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Narciso é culpado de quê?”." },
      { min: "10", t: "Leitura", d: "Leia o mito em voz alta." },
      { min: "10", t: "Preparação", d: "Cada grupo anota argumentos com base no texto." },
      { min: "20", t: "Julgamento", d: "Acusação e defesa falam; o júri pergunta e decide." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase com a sua decisão e a razão." }
    ]),
    H.t("Resumo do mito", "A ninfa Eco, castigada por Hera, só podia repetir as últimas palavras que ouvia. Apaixonada por Narciso, tentou falar com ele, mas foi rejeitada e se escondeu até restar só a voz. Narciso, vaidoso, apaixonou-se pelo próprio reflexo em um lago e morreu à beira dele; no lugar nasceu uma flor.", "Reconto de mito da mitologia grega"),
    H.tab("Ficha de argumentos", ["Grupo", "Argumento 1", "Argumento 2"], [["Acusação", "", ""], ["Defesa", "", ""], ["Júri (perguntas)", "", ""]]),
    H.pf("Dica", ["Peça que todo argumento tenha uma passagem do texto como evidência."])
  ], ["Interpretação", "Literatura"]);

  E("noticia-relampago", "Aula de 50 minutos: notícia relâmpago", "Os alunos escrevem uma notícia a partir de uma manchete sorteada, com lide completo.", [
    H.i("**Antes da aula:** recorte as manchetes abaixo ou escreva-as no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise: lide, título, fonte, linguagem objetiva." },
      { min: "20", t: "Escrita", d: "Cada dupla sorteia uma manchete e escreve a notícia (inventando os dados)." },
      { min: "15", t: "Troca e revisão", d: "As duplas trocam as notícias e verificam se o lide responde às cinco perguntas." },
      { min: "10", t: "Leitura", d: "Duas notícias são lidas em voz alta." }
    ]),
    H.te("Manchetes", ["Alunos criam rádio na escola", "Chuva forte alaga quadra e adia jogos", "Biblioteca ganha mil livros em campanha", "Turma do 7º ano vence campeonato de xadrez", "Escola troca copos plásticos por canecas"]),
    H.tab("Checklist do lide", ["Pergunta", "✓"], [["Quem?", ""], ["O quê?", ""], ["Quando?", ""], ["Onde?", ""], ["Por quê?", ""]]),
    H.ln("Minha notícia", 10)
  ], ["Redação"]);

  E("quiz-7ano", "Aula de 50 minutos: quiz relâmpago do 7º ano", "Quinze questões rápidas, em duplas, com correção coletiva.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada dupla marca uma letra por questão." },
      { min: "20", t: "Quiz", d: "As duplas resolvem as 15 questões." },
      { min: "20", t: "Correção", d: "Corrija no quadro e peça que alunos expliquem." },
      { min: "5", t: "Fechamento", d: "Cada dupla anota a questão mais difícil." }
    ]),
    H.qs([
      ob("A palavra //infeliz// é formada por derivação:", "prefixal|sufixal|parassintética|aglutinação", "A"),
      ob("A palavra //guarda-chuva// é formada por:", "aglutinação|justaposição|prefixação|sufixação", "B"),
      ob("A palavra //planalto// é formada por:", "justaposição|prefixação|aglutinação|sufixação", "C"),
      ob("Qual está correta?", "meio cansada|meia cansada|meios cansada|meias cansada", "A"),
      ob("“Espero que você ___ (vir).”", "vem|vai|venha|virá", "C"),
      ob("“A bola foi chutada” está na voz:", "ativa|passiva|reflexiva|neutra", "B"),
      ob("O sujeito de “Fomos ao cinema” é:", "simples|composto|oculto (nós)|inexistente", "C"),
      ob("O predicado de “O céu ficou escuro” é:", "verbal|nominal|verbo-nominal|inexistente", "B"),
      ob("“Comprei um livro.” O verbo //comprei// é:", "transitivo direto|transitivo indireto|intransitivo|de ligação", "A"),
      ob("“Preciso de ajuda.” O verbo //preciso// é:", "transitivo direto|intransitivo|transitivo indireto|de ligação", "C"),
      ob("“Ele é um aluno ___.”", "mal|mau|mais|mas", "B"),
      ob("“Estudo ___ passar.”", "afim de|afim|a fim|a fim de", "D"),
      ob("“O livro ___ li é ótimo.”", "que|onde|cujo|quem", "A"),
      ob("Um sinônimo de //feliz// é:", "triste|contente|cansado|bravo", "B"),
      ob("A palavra //chapéu// é acentuada porque:", "é proparoxítona|é paroxítona|tem ditongo aberto //éu// em oxítona|é monossílaba", "C")
    ]),
    H.pf("Gabarito", ["A, B, C, A, C, B, C, B, A, C, B, D, A, B, C."])
  ]);

  E("roda-cronica", "Aula de 50 minutos: roda de leitura de crônica", "Leitura compartilhada de uma crônica curta, perguntas guiadas e escrita de um parágrafo.", [
    H.i("**Antes da aula:** imprima o texto, uma cópia por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Já aconteceu algo engraçado a caminho da escola?”." },
      { min: "10", t: "Leitura em voz alta", d: "Leia o texto ou peça a um aluno. Peça que sublinhem uma frase de que gostaram." },
      { min: "15", t: "Questões em duplas", d: "As duplas respondem às questões." },
      { min: "15", t: "Roda de conversa e escrita", d: "Discutam as respostas e escrevam um parágrafo contando uma situação parecida." },
      { min: "5", t: "Fechamento", d: "Voluntários leem seus parágrafos." }
    ]),
    H.t("O guarda-chuva esquecido", [
      "Toda vez que eu esqueço o guarda-chuva, o céu fica azul e orgulhoso, como quem diz: “Eu avisei que não ia chover”. Mas, no dia em que o levo, nuvem nenhuma tem coragem de aparecer. É como se a chuva e eu tivéssemos um acordo antigo: eu não tenho guarda-chuva, ela passa direto.",
      "Ontem, resolvi desafiar o acordo e saí sem nada. Chegou a chuva, e eu, encharcado, entendi que os acordos são frágeis."
    ]),
    H.qs([
      ob("O texto é uma:", "notícia|crônica|receita|biografia", "B"),
      ob("O humor do texto vem de:", "a chuva depender de o narrador levar ou não o guarda-chuva|uma briga|um erro de português|uma pergunta de adivinhação", "A"),
      dis("O que significa “os acordos são frágeis” no final?", "Que o “acordo” com a chuva não se sustenta: ela chove justamente quando ele resolve não levar o guarda-chuva (humor).", 3),
      dis("Escreva um parágrafo contando uma situação parecida, em que o azar foi engraçado.", "Resposta pessoal.", 6)
    ]),
    H.pf("Dica", ["Aproveite para trabalhar a comparação (“como quem diz”) e o tom bem-humorado."])
  ], ["Interpretação", "Redação"]);

  E("detetive-fato-opiniao", "Aula de 50 minutos: detetive de fato e opinião", "Jogo em equipes para separar fatos de opiniões em frases e pequenos textos.", [
    H.i("**Antes da aula:** divida a turma em equipes de quatro. Cada equipe recebe a ficha."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada frase é lida em voz alta. As equipes levantam a plaquinha F (fato) ou O (opinião)." },
      { min: "25", t: "Rodadas", d: "Leia as frases. Peça que a equipe justifique a resposta antes de revelar o gabarito." },
      { min: "15", t: "Produção", d: "Cada equipe escreve três frases de fato e três de opinião sobre a escola." },
      { min: "5", t: "Fechamento", d: "Duas equipes leem suas frases; a turma classifica." }
    ]),
    H.tab("Frases", ["Nº", "Frase", "F ou O?"], [["1", "O recreio dura quinze minutos.", ""], ["2", "O recreio é curto demais.", ""], ["3", "A biblioteca abre às 8h.", ""], ["4", "A biblioteca é o melhor lugar da escola.", ""], ["5", "Chove forte hoje.", ""], ["6", "A chuva estragou o dia.", ""]]),
    H.pf("Gabarito", ["1 F; 2 O; 3 F; 4 O; 5 F; 6 O. Discuta: “forte” pode ser medido? Aceite justificativas razoáveis."])
  ], ["Interpretação"]);

  E("cadeia-misterio", "Aula de 50 minutos: mistério em cadeia", "Texto coletivo: cada dupla acrescenta um parágrafo ao mistério, seguindo pistas e mantendo a coerência.", [
    H.i("**Antes da aula:** folhas de papel. Cada dupla receberá o texto de uma colega e continuará."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Escreva no quadro o começo do mistério (veja abaixo)." },
      { min: "30", t: "Cadeia", d: "Cada dupla escreve um parágrafo em 5 minutos e passa à próxima dupla, que lê tudo e continua. Siga por cinco rodadas." },
      { min: "10", t: "Leitura", d: "O último grupo lê o conto completo." },
      { min: "5", t: "Fechamento", d: "A turma avalia: o mistério ficou coerente? Que pista mais surpreendeu?" }
    ]),
    H.te("Começo do mistério", ["//Na manhã de segunda-feira, o relógio da biblioteca amanheceu parado às 3h17, e um livro azul sumiu da prateleira…//"]),
    H.ln("Meu parágrafo", 8),
    H.pf("Dica", ["Estabeleça uma regra: cada parágrafo deve incluir uma pista nova e não pode explicar o mistério antes da 5ª rodada."])
  ], ["Redação", "Literatura"]);

  E("teatro-leitura", "Aula de 50 minutos: teatro de leitura", "Leitura dramatizada de uma cena curta, com atenção às rubricas e à entonação.", [
    H.i("**Antes da aula:** imprima o roteiro, uma cópia por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique o que é teatro de leitura: não se decora, mas se interpreta com a voz." },
      { min: "10", t: "Leitura silenciosa", d: "Cada grupo lê a cena e distribui os papéis." },
      { min: "20", t: "Ensaio", d: "Os grupos ensaiam prestando atenção às rubricas." },
      { min: "10", t: "Apresentação", d: "Dois grupos apresentam; a turma comenta." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve como a entonação mudou o sentido de uma fala." }
    ]),
    H.t("Cena: a caixa misteriosa", [
      "**Personagens:** LÉO, BIA, DONA CLARA (a diretora), NARRADOR.",
      "NARRADOR: Sexta-feira, recreio. Léo e Bia encontram uma caixa no pátio.",
      "LÉO (curioso): De quem será essa caixa?",
      "BIA (desconfiada): Não mexa! Pode ser perigoso.",
      "DONA CLARA (aproximando-se, sorrindo): Vocês acharam o presente do campeonato! É a taça do time de vôlei.",
      "LÉO e BIA (juntos, aliviados): Ufa!"
    ], "Texto original")
  ], ["Literatura", "Interpretação"]);

  E("revisao-em-pares", "Aula de 50 minutos: revisão de texto em pares", "Cada aluno revisa o texto de um colega com uma lista de verificação.", [
    H.i("**Antes da aula:** peça que os alunos tragam um texto produzido por eles (ou use um texto já escrito em aula anterior)."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique a regra: revisão é ajuda, não crítica. Comece pelo que funcionou." },
      { min: "10", t: "Leitura do colega", d: "Cada aluno lê o texto do colega, sem marcar." },
      { min: "15", t: "Checklist", d: "Cada aluno preenche o checklist e faz marcas a lápis." },
      { min: "15", t: "Conversa e reescrita", d: "Devolvem os textos, explicam os comentários e cada autor reescreve." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota uma coisa que aprendeu revisando." }
    ]),
    H.tab("Checklist", ["Item", "✓", "Comentário"], [["Há introdução, desenvolvimento e conclusão", "", ""], ["As ideias estão claras", "", ""], ["Há pontuação adequada", "", ""], ["Há concordância (verbo e adjetivo)", "", ""], ["Há palavras repetidas", "", ""], ["A ortografia foi conferida", "", ""]]),
    H.pf("Dica", ["Circule pela sala e incentive comentários concretos (“na linha 3 faltou vírgula”), e não gerais (“está ruim”)."])
  ], ["Redação"]);
})();
