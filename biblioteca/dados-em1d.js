/* 1º ano do Ensino Médio · Provas (8) e simulados (4). Valor das provas: 10 pontos. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("1EM"), ob = H.ob, dis = H.dis;

  function distribui(qs, hash, alvo, inicio) {
    var k = inicio;
    qs.forEach(function (q) {
      if (!q.alt) return;
      var t = (alvo[k++ % alvo.length] + hash) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
  }
  function hashDe(id) { return id.split("").reduce(function (a, ch) { return a + ch.charCodeAt(0); }, 0); }

  function P(id, titulo, resumo, texto, qs, assunto) {
    var h = hashDe(id);
    distribui(qs, h % 4, [2, 0, 3, 1, 3, 0, 2, 1, 0, 3], h % 7);
    var b = [H.i("**Valor: 10,0 pontos** (1,0 por questão). Leia o(s) texto(s) com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("prova", "p-" + id, titulo, assunto || ["Literatura", "Interpretação"], resumo, b);
  }
  function S(id, titulo, resumo, qs) {
    distribui(qs, parseInt(id, 10) || 0, [3, 1, 0, 2, 1, 3, 2, 0], 0);
    Y.m("simulado", "s-" + id, titulo, ["Interpretação", "Literatura", "Gramática"], resumo, [
      H.i("Cada questão tem **uma** alternativa correta. Leia o texto de cada questão antes de responder. Tempo sugerido: 60 minutos."),
      H.qs(qs)
    ], "60 min");
  }
  function c(texto, fonte) { return { ctx: texto, fonte: fonte || "Texto original" }; }

  /* ---------------- PROVAS ---------------- */
  P("diagnostica", "Avaliação diagnóstica · início do 1º ano do Ensino Médio", "Leitura, funções da linguagem, figuras, gramática e produção: ponto de partida do ano.", [
    H.t("O quarto dos livros", [
      "Na casa da minha avó havia um quarto onde os livros dormiam em pé, em fileiras apertadas, sob um cheiro de papel antigo. Eu entrava lá sem pedir licença, como quem entra em uma floresta, e voltava com a certeza de ter viajado sem sair do lugar.",
      "Hoje, quando ouço dizer que ninguém mais lê, lembro daquele quarto. Os livros não eram apenas objetos: eram o meio de ligar gerações, de dar voz aos que já partiram e de ensinar, sem pressa, que cada pessoa guarda dentro de si muitas outras vidas."
    ])
  ], [
    ob("A relação entre os livros e a floresta, no primeiro parágrafo, é uma:", "comparação|metáfora sem conectivo|antítese|ironia", "A"),
    ob("A expressão “viajado sem sair do lugar” é:", "uma metáfora para a leitura|um erro de lógica|um dado histórico|uma comparação científica", "A"),
    ob("No segundo parágrafo, predomina a função da linguagem:", "emotiva e poética|conativa apenas|fática|metalinguística", "A"),
    ob("O sentido de “dar voz aos que já partiram” é:", "a leitura mantém vivas as ideias de quem já morreu|os livros falam|os mortos escrevem|o quarto é assombrado", "A"),
    ob("“Ninguém mais lê” é um exemplo de:", "generalização que o narrador contesta|dado estatístico|verdade absoluta|ordem", "A"),
    ob("A forma //ligar// no último parágrafo está no:", "infinitivo|gerúndio|particípio|imperativo", "A"),
    ob("A palavra //apertadas//, em “fileiras apertadas”, concorda com:", "fileiras|livros|quarto|cheiro", "A"),
    ob("A oração “como quem entra em uma floresta” expressa:", "comparação|causa|condição|finalidade", "A"),
    dis("Que visão de leitura o texto defende?", "A de que ler é uma experiência de ampliação de vida e de ligação entre gerações.", 3),
    dis("Escreva um parágrafo (6 linhas) sobre um lugar que marcou sua relação com a leitura.", "Resposta pessoal. Verifique coerência, figuras de linguagem e norma culta.", 7)
  ], ["Interpretação", "Gramática"]);

  P("1bim", "Prova · 1º bimestre · 1º ano do Ensino Médio", "Trovadorismo e Humanismo: cantigas, Gil Vicente e linguagem.", [
    H.poema("Cantiga (no estilo trovadoresco)", "Senhora minha, de formosura tanta,\nque o sol se esconde quando vós passais,\njá não sei viver, nem rir, nem cantar:\nsofro por vós, e sofrer é meu mais.", "Texto original"),
    H.t("Auto da Barca do Inferno (resumo)", "Na peça de Gil Vicente, encenada em 1517, as almas chegam a um porto com duas barcas: a do Inferno e a do Paraíso. O Fidalgo, o Onzeneiro, o Frade, o Juiz e outros são condenados por seus vícios; o Parvo, ingênuo, é aceito pelo Anjo.", "Resumo da peça")
  ], [
    ob("O eu lírico da cantiga é:", "feminino|masculino|coletivo|indefinido", "B"),
    ob("A relação com a amada reproduz a:", "vassalagem feudal|amizade|rivalidade|camaradagem", "A"),
    ob("A expressão “sofro por vós” remete à:", "coita amorosa|sátira|épica|religiosidade", "A"),
    ob("A cantiga em que o eu lírico é feminino e lamenta a ausência do amado é a cantiga de:", "amor|amigo|escárnio|maldizer", "B"),
    ob("O marco inicial do Trovadorismo em Portugal é:", "a Cantiga da Ribeirinha|Os Lusíadas|o Auto da Barca do Inferno|a Carta de Caminha", "A"),
    ob("O Auto da Barca do Inferno é característico do:", "Humanismo|Barroco|Arcadismo|Romantismo", "A"),
    ob("No Auto, os personagens condenados representam:", "tipos sociais e seus vícios|reis|heróis|santos", "A"),
    ob("O Parvo é salvo porque:", "é ingênuo e sem malícia|é rico|é nobre|é padre", "A"),
    dis("Explique a diferença entre cantigas líricas e satíricas.", "As líricas (amor e amigo) tratam do sentimento amoroso; as satíricas (escárnio e maldizer) criticam pessoas e costumes.", 3),
    dis("Por que se diz que a peça de Gil Vicente critica a sociedade?", "Porque mostra, por meio de tipos sociais, vícios como orgulho, ganância, hipocrisia e corrupção.", 3)
  ]);

  P("2bim", "Prova · 2º bimestre · 1º ano do Ensino Médio", "Classicismo: Camões, soneto, épica e visão de mundo.", [
    H.poema("Texto I · Alma minha gentil, que te partiste", "Alma minha gentil, que te partiste\nTão cedo desta vida descontente,\nRepousa lá no Céu eternamente,\nE viva eu cá na terra sempre triste.", "Luís de Camões, primeira estrofe"),
    H.poema("Texto II · Os Lusíadas, Canto I, 1", "As armas e os barões assinalados,\nQue da ocidental praia Lusitana,\nPor mares nunca de antes navegados\nPassaram ainda além da Taprobana,", "Luís de Camões, Os Lusíadas (1572)")
  ], [
    ob("O marco do Classicismo em Portugal é:", "1198|1527|1601|1756", "B"),
    ob("O Texto I é:", "uma epopeia|um soneto|uma cantiga|um sermão", "B"),
    ob("O Texto II corresponde à parte do poema chamada:", "Invocação|Proposição|Dedicatória|Epílogo", "B"),
    ob("Os Lusíadas é composto de:", "dez cantos|cinco cantos|doze cantos|vinte cantos", "A"),
    ob("A estrofe de Os Lusíadas é:", "oitava rima, em decassílabos|quadra em redondilha|soneto|haicai", "A"),
    ob("O Classicismo valoriza:", "razão, equilíbrio e imitação da Antiguidade|exagero emocional|sátira social|cantigas medievais", "A"),
    ob("A expressão “mares nunca de antes navegados” destaca:", "o pioneirismo dos navegadores|a pobreza|a rotina|o medo", "A"),
    ob("O Texto I expressa:", "dor e saudade|ironia|ódio|humor", "A"),
    dis("Explique a oposição entre “Céu” e “terra” no Texto I.", "O Céu é o lugar de repouso da alma amada; a terra é onde o eu lírico permanece sofrendo.", 3),
    dis("Por que se diz que o herói de Os Lusíadas é coletivo?", "Porque o poema exalta o povo português e seus navegadores, e não apenas Vasco da Gama.", 3)
  ]);

  P("3bim", "Prova · 3º bimestre · 1º ano do Ensino Médio", "Quinhentismo e Barroco: informação, catequese, Vieira e Gregório de Matos.", [
    H.t("Texto I · Carta de Caminha", "“Porém o melhor fruto que dela se pode tirar me parece que será salvar esta gente. E esta deve ser a principal semente que Vossa Alteza em ela deve lançar.”", "Pero Vaz de Caminha, Carta a D. Manuel (1500), trecho final"),
    H.poema("Texto II · A Jesus Cristo Nosso Senhor", "Pequei, Senhor; mas não porque hei pecado,\nDa vossa alta clemência me despido;\nPorque quanto mais tenho delinquido,\nVos tenho a perdoar mais empenhado.", "Gregório de Matos, primeira estrofe")
  ], [
    ob("A Carta de Caminha pertence à literatura:", "informativa|de catequese|barroca|árcade", "A"),
    ob("O interesse expresso no Texto I é:", "converter os indígenas|explorar ouro|criar escolas|abolir a escravidão", "A"),
    ob("A literatura de catequese tem como nome mais importante:", "José de Anchieta|Camões|Gil Vicente|Bocage", "A"),
    ob("O Texto II é característico do:", "Barroco|Arcadismo|Quinhentismo|Realismo", "A"),
    ob("O conflito central do Texto II é entre:", "culpa e confiança na misericórdia divina|razão e política|campo e cidade|amor e guerra", "A"),
    ob("O Barroco brasileiro tem como marco:", "Prosopopeia (1601)|Marília de Dirceu|Os Lusíadas|Carta de Caminha", "A"),
    ob("O conceptismo se caracteriza por:", "jogo de ideias e raciocínio lógico|exagero formal|simplicidade|sátira política", "A"),
    ob("Padre Antônio Vieira se destacou na:", "prosa oratória (sermões)|poesia lírica|poesia épica|crônica de viagem", "A"),
    dis("Que visão do indígena o Texto I revela?", "A de colonizador: o indígena é visto como alguém a ser convertido, sem reconhecimento de sua cultura.", 3),
    dis("Que característica do Barroco aparece no Texto II?", "O dualismo (culpa × fé), o raciocínio argumentativo (conceptismo) e o tom dramático.", 3)
  ]);

  P("4bim", "Prova · 4º bimestre · 1º ano do Ensino Médio", "Arcadismo: Gonzaga, bucolismo, ideais árcades e comparação com o Barroco.", [
    H.poema("Marília de Dirceu · Lira I", "Eu, Marília, não sou algum vaqueiro,\nQue viva de guardar alheio gado;\nDe tosco trato, de expressões grosseiro,\nDos frios gelos, e dos sóis queimado.\nTenho próprio casal, e nele assisto;\nDá-me vinho, legume, fruta, azeite;\nDas brancas ovelhinhas tiro o leite,\nE mais as finas lãs, de que me visto.", "Tomás Antônio Gonzaga, Marília de Dirceu (1792), parte da Lira I")
  ], [
    ob("O Arcadismo brasileiro tem como marco:", "1768, Obras Poéticas de Cláudio Manuel da Costa|1500|1601|1836", "A"),
    ob("O ideal “fugere urbem” significa:", "fuga da cidade|aproveite o dia|vida moderada|imitação da natureza", "A"),
    ob("“Carpe diem” significa:", "aproveite o dia|fuja da cidade|imite os clássicos|corte o inútil", "A"),
    ob("O eu lírico apresenta-se como:", "pastor com propriedade própria e vida simples|rei|soldado|poeta infeliz", "A"),
    ob("A natureza no poema é:", "acolhedora e fonte de vida simples|hostil|ausente|perigosa", "A"),
    ob("Gonzaga participou da:", "Inconfidência Mineira (1789)|Independência|Proclamação da República|Abolição", "A"),
    ob("Uma diferença entre Barroco e Arcadismo é que o Arcadismo:", "valoriza simplicidade e equilíbrio|valoriza o exagero|é teocêntrico|valoriza a culpa", "A"),
    ob("“O Uraguai” e “Caramuru” são:", "poemas épicos árcades|sermões barrocos|cartas informativas|autos medievais", "A"),
    dis("Explique o ideal da “aurea mediocritas” no poema.", "A valorização da vida simples e moderada, em que o eu lírico tem o suficiente (vinho, legume, fruta, lã).", 3),
    dis("Compare, em duas frases, a visão de mundo do Barroco e a do Arcadismo.", "O Barroco é marcado por conflito e dualismo (fé × prazer); o Arcadismo busca equilíbrio, razão e vida simples junto à natureza.", 4)
  ]);

  P("final", "Prova final · 1º ano do Ensino Médio", "Revisão do ano: movimentos literários, funções da linguagem, gramática e produção.", [
    H.t("Texto I", "Nos mercados de Lisboa, no século XVI, falava-se de especiarias, rotas e riquezas do Oriente. Nos versos de Camões, essa aventura ganhou forma de epopeia: a viagem de Vasco da Gama é narrada com deuses, tempestades e glória, e o heroísmo é do povo português.", "Texto original"),
    H.t("Texto II", "Anos depois, nos salões de Vila Rica, poetas como Cláudio Manuel da Costa e Tomás Antônio Gonzaga adotavam pseudônimos de pastores e cantavam a vida simples, enquanto a elite da região discutia política e sonhava com liberdade.", "Texto original")
  ], [
    ob("O Texto I refere-se ao movimento:", "Classicismo|Barroco|Trovadorismo|Arcadismo", "A"),
    ob("O Texto II refere-se ao movimento:", "Arcadismo|Classicismo|Quinhentismo|Humanismo", "A"),
    ob("“Epopeia” é um poema:", "narrativo e heroico|lírico e curto|satírico|religioso", "A"),
    ob("O uso de pseudônimos pastoris pelos poetas árcades revela:", "convenção literária que idealiza a vida no campo|vergonha dos próprios nomes|uma lei da época|um castigo", "A"),
    ob("A oposição entre os dois textos está em:", "heroísmo e navegações × vida simples e pastoral|campo × deserto|guerra × paz|fé × ciência", "A"),
    ob("Na frase “falava-se de especiarias”, a partícula //se// indica:", "voz passiva sintética ou indeterminação|reflexivo|conjunção|advérbio", "A"),
    ob("Qual função da linguagem predomina em “Participe da campanha!”?", "conativa|referencial|poética|fática", "A"),
    ob("A forma “adotavam” está no:", "pretérito imperfeito|pretérito perfeito|futuro|presente", "A"),
    dis("Que traços do Classicismo e do Arcadismo aparecem nos textos?", "Classicismo: epopeia, heroísmo, imitação dos clássicos; Arcadismo: pseudônimos pastoris, bucolismo e vida simples.", 4),
    dis("Escreva um parágrafo (7 linhas) comparando a visão de mundo dos dois textos.", "Resposta pessoal. Verifique comparação clara e norma culta.", 8)
  ]);

  P("recuperacao-1sem", "Prova de recuperação · 1º semestre · 1º ano do Ensino Médio", "Prova curta: Trovadorismo, Humanismo, Classicismo e linguagem.", [
    H.t("Texto", "Nas cantigas de amor, o trovador se dirige a uma dama inatingível, a quem serve como um vassalo serve ao senhor. Já nas cantigas de amigo, é uma mulher quem fala, lamentando a ausência do amado. Séculos depois, o Classicismo trouxe de volta os modelos da Antiguidade e valorizou a razão, o equilíbrio e a forma do soneto.", "Texto original")
  ], [
    ob("Nas cantigas de amor, o eu lírico é:", "masculino|feminino|coletivo|neutro", "A"),
    ob("A relação entre trovador e dama lembra a de:", "vassalo e senhor|irmão e irmã|amigo e amigo|professor e aluno", "A"),
    ob("Nas cantigas de amigo, quem fala é:", "uma mulher|um rei|um frade|um soldado", "A"),
    ob("O Classicismo valoriza:", "razão e equilíbrio|exagero|religiosidade medieval|sátira", "A"),
    ob("O soneto tem:", "14 versos|10 versos|8 versos|3 versos", "A"),
    ob("O marco do Classicismo em Portugal é:", "1527|1198|1601|1756", "A"),
    ob("A obra mais importante de Camões é:", "Os Lusíadas|Auto da Barca do Inferno|Marília de Dirceu|Prosopopeia", "A"),
    ob("A palavra //inatingível// significa:", "que não se pode alcançar|que está distante apenas|muito perto|feliz", "A"),
    dis("Explique a expressão “vassalagem amorosa”.", "O trovador se coloca como servidor da dama, como o vassalo ao senhor feudal.", 3),
    dis("Cite duas características do Classicismo.", "Razão, equilíbrio, imitação dos clássicos, soneto e decassílabo, neoplatonismo (duas).", 2)
  ]);

  P("leitura", "Avaliação de leitura · Camões e Gonzaga lado a lado", "Comparação de dois poemas: Classicismo e Arcadismo.", [
    H.poema("Texto I · Transforma-se o amador na cousa amada", "Transforma-se o amador na cousa amada,\nPor virtude do muito imaginar;\nNão tenho, logo, mais que desejar,\nPois em mim tenho a parte desejada.", "Luís de Camões, primeira estrofe"),
    H.poema("Texto II · Lira I", "Eu, Marília, não sou algum vaqueiro,\nQue viva de guardar alheio gado;\nDe tosco trato, de expressões grosseiro,\nDos frios gelos, e dos sóis queimado.", "Tomás Antônio Gonzaga, primeira estrofe")
  ], [
    ob("O Texto I é característico do:", "Classicismo|Arcadismo|Barroco|Quinhentismo", "A"),
    ob("O Texto II é característico do:", "Arcadismo|Classicismo|Humanismo|Trovadorismo", "A"),
    ob("O tom do Texto I é:", "filosófico e racional|bucólico|humorístico|satírico", "A"),
    ob("O Texto II apresenta:", "um pastor que se dirige a uma amada|um poeta que critica a cidade|uma epopeia|uma cantiga medieval", "A"),
    ob("O que há em comum entre os dois poemas?", "tema amoroso|a mesma época|a mesma forma de rimas|a mesma linguagem", "A"),
    ob("“Cousa” no Texto I é:", "forma antiga de “coisa”|erro de ortografia|gíria|estrangeirismo", "A"),
    ob("Que figura aparece em “Dos frios gelos, e dos sóis queimado”?", "antítese|ironia|catacrese|elipse", "A"),
    ob("O Texto I valoriza:", "o raciocínio e a imaginação|a vida no campo|a sátira|o heroísmo", "A"),
    dis("Que diferença há no modo como cada poema trata o amor?", "O Texto I trata o amor de forma filosófica e abstrata; o Texto II, de forma bucólica, ligada à vida simples e à natureza.", 4),
    dis("Que características árcades aparecem no Texto II?", "Bucolismo, pastoralismo, a vida simples (“aurea mediocritas”) e o uso de um pseudônimo pastoril (Dirceu).", 3)
  ]);

  /* ---------------- SIMULADOS ---------------- */
  S("1", "Simulado de Linguagens · 1º ano do Ensino Médio · nº 1", "Oito questões de interpretação, literatura (até o Arcadismo), funções da linguagem e gramática.", [
    ob("A função da linguagem predominante é:", "conativa|referencial|metalinguística|poética", "A", "", c("Participe da campanha. Doe agasalhos até sexta-feira.")),
    ob("O eu lírico é:", "feminino|masculino|coletivo|neutro", "B", "", c("Senhora minha, de formosura tanta, / que o sol se esconde quando vós passais.", "Texto original, no estilo trovadoresco")),
    ob("A estrofe pertence à parte de Os Lusíadas chamada:", "Proposição|Invocação|Dedicatória|Epílogo", "A", "", c("As armas e os barões assinalados, / Que da ocidental praia Lusitana, / Por mares nunca de antes navegados / Passaram ainda além da Taprobana,", "Camões, Os Lusíadas, Canto I, 1")),
    ob("O texto é característico da literatura:", "informativa|de catequese|árcade|barroca", "A", "", c("“Esta terra, Senhor, parece-me que, da ponta que mais contra o sul vimos, até outra ponta que contra o norte vem… é toda praia, palma, muito chã e formosa.”", "Pero Vaz de Caminha, Carta (1500), paráfrase")),
    ob("O ideal árcade expresso é:", "bucolismo e vida simples|exagero emocional|dualismo religioso|crítica à cidade apenas", "A", "", c("Tenho próprio casal, e nele assisto; / Dá-me vinho, legume, fruta, azeite;", "Gonzaga, Marília de Dirceu")),
    ob("A figura de linguagem é:", "antítese|catacrese|hipérbole|elipse", "A", "", c("Era um dia de sol e de chuva no coração.")),
    ob("Que formas estão no imperativo?", "Participe, Doe|Participar, Doar|Participando, Doando|Participou, Doou", "A", "", c("Participe da campanha. Doe agasalhos.")),
    ob("A grafia correta é:", "a fim de|afim de|a fim|afim", "A", "", c("Estudamos ___ entender a matéria."))
  ]);

  S("2", "Simulado de Linguagens · 1º ano do Ensino Médio · nº 2", "Oito questões: Barroco, Quinhentismo, variação linguística, coesão e concordância.", [
    ob("O dualismo barroco aparece em:", "culpa e perdão|campo e cidade|sol e lua|dia e noite", "A", "", c("Pequei, Senhor; mas não porque hei pecado, / Da vossa alta clemência me despido;", "Gregório de Matos")),
    ob("A estrutura é de:", "pergunta e resposta, com crítica|narrativa|descrição|oração", "A", "", c("Que falta nesta cidade? ... Verdade. / Que mais por sua desonra? ... Honra.", "Gregório de Matos")),
    ob("A metáfora do sal representa:", "o papel moral dos pregadores|a riqueza|o mar|a doença", "A", "", c("“Vós sois o sal da terra: e chama-lhes sal da terra, porque quer que façam na terra o que faz o sal.”", "Padre Antônio Vieira, Sermão de Santo Antônio aos Peixes")),
    ob("A variação linguística presente é:", "regional|histórica|formal|técnica", "A", "", c("Na minha terra, a gente chama de aipim; no Nordeste, de macaxeira; no Sul, de mandioca.")),
    ob("O pronome //ela// retoma:", "Maria|a escola|a prova|a diretora", "A", "", c("Maria chegou cedo porque ela queria revisar a matéria.")),
    ob("A concordância correta é:", "Seguem anexas as fotos.|Segue anexo as fotos.|Segue anexas as fotos.|Seguem anexo as fotos.", "A", "", c("Complete corretamente: “___ as fotos do evento.”")),
    ob("O conectivo //no entanto// indica:", "oposição|conclusão|causa|tempo", "A", "", c("O projeto é ousado; no entanto, pode ser realizado.")),
    ob("A forma correta é:", "Assisti ao filme.|Assisti o filme.|Assisti no filme.|Assisti do filme.", "A", "", c("Ontem, ___ um filme interessante."))
  ]);

  S("3", "Simulado de Linguagens · 1º ano do Ensino Médio · nº 3", "Oito questões: poemas, charge, textos informativos, figuras e regência.", [
    ob("O tema do poema é:", "saudade e perda|humor|crítica política|heroísmo", "A", "", c("Alma minha gentil, que te partiste / Tão cedo desta vida descontente, / Repousa lá no Céu eternamente, / E viva eu cá na terra sempre triste.", "Camões")),
    ob("A crítica da charge é sobre:", "o uso excessivo do celular que isola as pessoas|a falta de praças|a poluição|o preço do ingresso", "A", "", c("Charge (descrição): três jovens em um banco de praça olham para seus celulares; um velho, ao lado, segura um balão. Placa: “Wi-Fi grátis. Senha: respire fundo”.", "Texto original")),
    ob("A ideia central é que:", "o cérebro forma novas conexões ao aprender|o cérebro adulto não aprende|aprender é inútil|a memória não existe", "A", "", c("Hoje se sabe que o cérebro forma novas conexões entre os neurônios a cada experiência, processo chamado neuroplasticidade.", "Texto informativo")),
    ob("A figura de linguagem é:", "sinestesia|catacrese|ironia|elipse", "A", "", c("O cheiro doce da manhã entrou pela janela.")),
    ob("A regência correta é:", "Prefiro cinema a teatro.|Prefiro cinema do que teatro.|Prefiro mais cinema que teatro.|Prefiro cinema ao que teatro.", "A", "", c("Escolha a frase com a regência correta.")),
    ob("A oração destacada é:", "concessiva|causal|condicional|temporal", "A", "", c("Embora estivesse cansado, ele terminou o trabalho.")),
    ob("O sentido de //pena// é:", "piedade ou castigo, conforme o contexto|apenas pluma|apenas tristeza|apenas castigo", "A", "", c("Senti pena do cachorro abandonado; o juiz aplicou a pena máxima.")),
    ob("A crase em “à noite” se explica por:", "locução adverbial feminina|artigo definido apenas|preposição apenas|pronome", "A", "", c("Estudo à noite para trabalhar de dia."))
  ]);

  S("4", "Simulado de Linguagens · 1º ano do Ensino Médio · nº 4", "Oito questões: Auto da Barca, Arcadismo, argumentação, coesão e pontuação.", [
    ob("O condenado representa o vício da:", "avareza e da usura|preguiça|vaidade apenas|inveja", "A", "", c("O Onzeneiro, agiota, é condenado por explorar o próximo com juros abusivos.", "Resumo de passagem do Auto da Barca do Inferno")),
    ob("A característica árcade predominante é:", "bucolismo e simplicidade|dualismo|exagero|sátira", "A", "", c("Vivo na roça, tenho um pomar e um rio; só quero a paz dos campos e a tua companhia, Marília.", "Texto original, no estilo árcade")),
    ob("A tese do texto é que:", "a leitura deve ser tratada como direito|a leitura é um luxo|a escola deve fechar|os livros devem ser caros", "A", "", c("Ler é uma habilidade que ultrapassa a escola; por isso, o acesso ao livro deveria ser tratado como direito, e não como luxo.", "Texto original")),
    ob("O conectivo //Portanto// indica:", "conclusão|oposição|causa|exemplo", "A", "", c("Os estudos mostram que dormir bem melhora a memória. Portanto, convém respeitar o sono.")),
    ob("A pontuação correta é:", "Quando chegou, saímos.|Quando chegou saímos.|Quando, chegou saímos.|Quando chegou saímos,", "A", "", c("Escolha a frase corretamente pontuada.")),
    ob("A função da linguagem predominante é:", "emotiva|referencial|conativa|metalinguística", "A", "", c("Que saudade eu sinto de casa, meu Deus!")),
    ob("A forma correta é:", "Houve problemas.|Houveram problemas.|Houvemos problemas.|Houverão problemas.", "A", "", c("Complete: “___ problemas na reunião.”")),
    ob("A palavra //onde// é usada quando há:", "ideia de lugar em que se está|movimento|tempo|causa", "A", "", c("A cidade onde nasci fica no interior."))
  ]);
})();
