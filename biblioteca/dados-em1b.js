/* 1º ano do Ensino Médio · Interpretação de texto e literatura (20 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("1EM"), ob = H.ob, dis = H.dis;

  function I(id, titulo, resumo, texto, qs, assunto, intro) {
    /* distribui a posição da resposta correta nas objetivas, sem alterar qual alternativa é a certa */
    var hash = id.split("").reduce(function (x, ch) { return x + ch.charCodeAt(0); }, 0);
    var alvo = [2, 0, 3, 1, 3, 1, 0, 2], k = hash % 5;
    qs.forEach(function (q) {
      if (!q.alt) return;
      var t = alvo[k++ % alvo.length] % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    var b = [H.i(intro || "Leia o texto com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("interpretacao", "i-" + id, titulo, assunto || ["Interpretação", "Literatura"], resumo, b);
  }

  I("cantiga-amor", "Cantiga de amor (no estilo trovadoresco)", "Trovadorismo: eu lírico masculino, vassalagem amorosa e coita de amor.", [
    H.poema("Cantiga de amor", "Senhora minha, de formosura tanta,\nque o sol se esconde quando vós passais,\njá não sei viver, nem rir, nem cantar:\nsofro por vós, e sofrer é meu mais.\n\nMandai, senhora, um aceno que me valha,\nque eu vos servirei por toda a vida;\nse é pecado amar-vos, que me valha\nvossa mercê, que é minha única guarida.", "Texto original, composto no estilo das cantigas de amor medievais")
  ], [
    ob("O eu lírico da cantiga é:", "feminino|masculino|coletivo|indefinido", "B"),
    ob("Ele se refere à mulher amada como:", "“senhora”, ser superior e inatingível|“amiga”|“irmã”|“mãe”", "A"),
    ob("A “coita” (sofrimento amoroso) aparece em:", "“sofro por vós”|“o sol se esconde”|“servirei por toda a vida” apenas|“única guarida”", "A"),
    ob("A relação entre eu lírico e amada reproduz a:", "vassalagem feudal|camaradagem|rivalidade|amizade", "A"),
    dis("Que características do Trovadorismo você identifica?", "Eu lírico masculino, idealização da dama, sofrimento amoroso (coita), vassalagem amorosa e linguagem cortês.", 4),
    dis("Que sentido tem a expressão “que o sol se esconde quando vós passais”?", "Hipérbole que exalta a beleza da mulher, mais luminosa que o sol.", 3)
  ]);

  I("cantiga-amigo", "Cantiga de amigo (no estilo trovadoresco)", "Trovadorismo: eu lírico feminino, saudade e elementos da natureza.", [
    H.poema("Cantiga de amigo", "Foi-se meu amigo à guerra, mãe,\ne deixou-me na beira do rio;\ncada onda que passa me diz:\n“Teu amigo ainda não voltou”.\n\nDigo ao rio: “Leva meu recado”,\ndigo ao vento: “Leva meu suspiro”,\ne fico lavando o meu pranto\nnas águas frias do rio.", "Texto original, composto no estilo das cantigas de amigo medievais")
  ], [
    ob("O eu lírico da cantiga é:", "masculino|feminino|neutro|coletivo", "B"),
    ob("A mulher dirige-se à:", "amiga|mãe|rainha|natureza apenas", "B"),
    ob("A natureza (rio, vento) funciona como:", "confidente da saudade|inimiga|cenário de guerra|tema científico", "A"),
    ob("O sentimento predominante é:", "saudade|raiva|alegria|indiferença", "A"),
    dis("Que diferença há entre esta cantiga e a cantiga de amor?", "Aqui o eu lírico é feminino, fala da saudade do amado ausente e usa a natureza; na de amor, o eu lírico é masculino e idealiza uma dama inatingível.", 4),
    dis("Embora o eu lírico seja feminino, as cantigas de amigo eram escritas por homens. O que isso sugere?", "Que se trata de uma voz feminina construída por trovadores, uma convenção do gênero, e não necessariamente de autoria feminina.", 3)
  ]);

  I("auto-barca-inferno", "Auto da Barca do Inferno, de Gil Vicente (resumo)", "Humanismo: teatro de sátira social, tipos sociais e moralidade.", [
    H.t("Auto da Barca do Inferno (resumo)", [
      "Na obra de Gil Vicente, encenada em 1517, as almas dos mortos chegam a um porto onde há duas barcas: a do Inferno, comandada pelo Diabo, e a do Paraíso, conduzida por um Anjo. Cada personagem tenta embarcar.",
      "O Fidalgo, o Onzeneiro (agiota), o Sapateiro, o Frade (acompanhado de sua amante), a alcoviteira Brísida Vaz e o Juiz são condenados à barca do Inferno por seus vícios: orgulho, ganância, fraude, hipocrisia e corrupção. O Parvo, ingênuo, é aceito pelo Anjo. Apenas quatro cavaleiros, mortos pela fé, entram no Paraíso."
    ], "Resumo da peça de Gil Vicente (c. 1465–1536)")
  ], [
    ob("O Auto da Barca do Inferno é característico do:", "Humanismo português|Trovadorismo|Barroco|Arcadismo", "A"),
    ob("Os personagens condenados representam:", "indivíduos particulares|tipos sociais e seus vícios|reis|santos", "B"),
    ob("O Parvo é salvo porque:", "tem poder|é ingênuo e sem malícia|é rico|é nobre", "B"),
    ob("A crítica da peça se dirige principalmente a:", "vícios e hipocrisias de diversos grupos sociais|apenas aos camponeses|ao povo apenas|aos estrangeiros", "A"),
    dis("Por que o Frade é condenado?", "Por hipocrisia: leva consigo a amante e vive em pecado, apesar de sua condição religiosa.", 3),
    dis("Que visão de mundo está por trás do julgamento das almas?", "Uma visão religiosa e moralizante: cada um é julgado por suas ações, independentemente de posição social.", 3)
  ]);

  I("camoes-alma-minha", "Soneto de Camões: Alma minha gentil, que te partiste", "Classicismo: tema da morte da amada, forma do soneto e elegia.", [
    H.poema("Alma minha gentil, que te partiste", "Alma minha gentil, que te partiste\nTão cedo desta vida descontente,\nRepousa lá no Céu eternamente,\nE viva eu cá na terra sempre triste.", "Luís de Camões (c. 1524–1580), primeira estrofe")
  ], [
    ob("O eu lírico dirige-se a:", "uma pessoa que morreu|um rei|uma cidade|a pátria", "A"),
    ob("A expressão “vida descontente” sugere uma vida:", "feliz|de sofrimento|longa|tranquila", "B"),
    ob("O contraste que organiza a estrofe é entre:", "o Céu (alma que repousa) e a terra (eu lírico que sofre)|o dia e a noite|o mar e a terra|o rico e o pobre", "A"),
    ob("A forma do poema é a de um:", "soneto|haicai|trova|cantiga", "A"),
    dis("Que sentimento predomina e como ele se expressa?", "A dor da perda e a saudade; a voz fala diretamente à alma da pessoa morta e deseja que ela repouse, enquanto ele permanece triste.", 3),
    dis("Que característica do Classicismo você nota na forma desse poema?", "O uso do soneto, de origem italiana, com versos decassílabos, equilíbrio e tema universal (a morte e a saudade).", 3)
  ]);

  I("camoes-transforma-se", "Soneto de Camões: Transforma-se o amador na cousa amada", "Classicismo: amor platônico, razão e sentimento, jogo de ideias.", [
    H.poema("Transforma-se o amador na cousa amada", "Transforma-se o amador na cousa amada,\nPor virtude do muito imaginar;\nNão tenho, logo, mais que desejar,\nPois em mim tenho a parte desejada.", "Luís de Camões (c. 1524–1580), primeira estrofe")
  ], [
    ob("A ideia central é que:", "o amante se identifica com o objeto amado|o amor é impossível|o amante odeia|o amor acaba", "A"),
    ob("A expressão “por virtude do muito imaginar” indica que a transformação ocorre:", "na imaginação|na realidade física|por magia|por dinheiro", "A"),
    ob("A conclusão (“logo”) revela:", "o raciocínio lógico do poeta|a ironia do poeta|o desespero|a indiferença", "A"),
    ob("A forma e o tom do poema são:", "reflexivos e racionais|humorísticos|satíricos|populares", "A"),
    dis("Explique com suas palavras a ideia da primeira estrofe.", "O amante, ao imaginar muito a pessoa amada, passa a ter dentro de si essa pessoa; assim, já não precisa desejar nada mais, pois tem em si a parte desejada.", 4),
    dis("Que relação há entre amor e razão nesse poema?", "O amor é tratado de forma racional e filosófica, com encadeamento lógico (“logo”), característica do Classicismo e do neoplatonismo.", 3)
  ]);

  I("lusiadas-canto-1", "Os Lusíadas, Canto I, estrofe 1 (Proposição)", "Épica camoniana: proposição, herói coletivo e linguagem elevada.", [
    H.poema("Os Lusíadas · Canto I, 1", "As armas e os barões assinalados,\nQue da ocidental praia Lusitana,\nPor mares nunca de antes navegados\nPassaram ainda além da Taprobana,", "Luís de Camões, Os Lusíadas (1572), primeira estrofe, quatro primeiros versos")
  ], [
    ob("Esta estrofe pertence à parte do poema chamada:", "Proposição|Invocação|Dedicatória|Narração", "A"),
    ob("Os “barões assinalados” são:", "os portugueses ilustres|os mouros|os deuses|os reis estrangeiros", "A"),
    ob("“Por mares nunca de antes navegados” destaca:", "o pioneirismo dos navegadores|o medo do mar|a pobreza|a simplicidade", "A"),
    ob("A “Taprobana” era uma região:", "do Oriente (Ceilão)|da Europa|da África|da América", "A"),
    dis("O que o poeta se propõe a cantar nesta estrofe?", "Os feitos dos portugueses ilustres que navegaram por mares desconhecidos, indo além da Taprobana.", 3),
    dis("Por que se diz que o herói de Os Lusíadas é coletivo?", "Porque o poema exalta o povo português e seus navegadores, e não apenas Vasco da Gama.", 3)
  ]);

  I("caminha-carta", "Carta de Pero Vaz de Caminha (trecho final)", "Quinhentismo: literatura informativa, visão do colonizador e interesses da Coroa.", [
    H.t("Carta ao rei D. Manuel (1500)", [
      "“Porém o melhor fruto que dela se pode tirar me parece que será salvar esta gente. E esta deve ser a principal semente que Vossa Alteza em ela deve lançar.”"
    ], "Pero Vaz de Caminha (c. 1450–1500), Carta a el-rei D. Manuel, trecho final"),
    H.te("Contexto", ["O texto é considerado o primeiro documento escrito sobre o Brasil. Caminha era escrivão da frota de Pedro Álvares Cabral e escreve ao rei de Portugal."])
  ], [
    ob("A carta pertence à literatura:", "informativa|de catequese|barroca|árcade", "A"),
    ob("O “melhor fruto” para Caminha é:", "ouro|salvar (converter) os indígenas|madeira|terras", "B"),
    ob("A expressão “semente” sugere:", "ideia de plantio e propagação da fé|colheita de alimentos|um presente|um perigo", "A"),
    ob("O destinatário da carta é:", "o rei D. Manuel|o Papa|Cabral|os indígenas", "A"),
    dis("Que visão do indígena o texto revela?", "Uma visão do colonizador: o indígena é visto como alguém a ser “salvo” (convertido), sem reconhecimento de sua cultura.", 3),
    dis("Por que a carta é considerada um documento histórico e literário?", "Porque registra o primeiro contato com a terra e seus habitantes, com descrições e linguagem que revelam o olhar europeu da época.", 3)
  ]);

  I("gregorio-pequei", "Soneto de Gregório de Matos: A Jesus Cristo Nosso Senhor", "Barroco: dualismo entre culpa e fé, antíteses e argumentação.", [
    H.poema("A Jesus Cristo Nosso Senhor", "Pequei, Senhor; mas não porque hei pecado,\nDa vossa alta clemência me despido;\nPorque quanto mais tenho delinquido,\nVos tenho a perdoar mais empenhado.", "Gregório de Matos (1636–1696), primeira estrofe")
  ], [
    ob("O eu lírico admite:", "que cometeu pecados|que é inocente|que não crê|que é santo", "A"),
    ob("O argumento do poeta é que:", "quanto mais peca, mais Deus se compromete a perdoar|o pecado é bom|Deus não perdoa|ele não pecou", "A"),
    ob("O conflito central do poema é entre:", "culpa e confiança na misericórdia divina|riqueza e pobreza|razão e política|campo e cidade", "A"),
    ob("O tom do poema é:", "reflexivo e argumentativo|alegre|cômico|indiferente", "A"),
    dis("Que característica do Barroco é perceptível nesse poema?", "O conflito entre o espiritual e o material (culpa × fé), o raciocínio argumentativo (conceptismo) e o tom dramático.", 4),
    dis("Explique o último verso da estrofe.", "Quanto mais o poeta peca, mais Deus fica “empenhado” em perdoar, pois a graça divina é maior que o pecado.", 3)
  ]);

  I("gregorio-satira", "Poema satírico de Gregório de Matos: Que falta nesta cidade?", "Barroco satírico: crítica social, ironia e estrutura de pergunta e resposta.", [
    H.poema("Que falta nesta cidade?", "Que falta nesta cidade? ... Verdade.\nQue mais por sua desonra? ... Honra.\nFalta mais que se lhe ponha? ... Vergonha.", "Gregório de Matos (1636–1696), trecho")
  ], [
    ob("A estrutura do poema é de:", "pergunta e resposta|narrativa|descrição|oração", "A"),
    ob("As respostas (“Verdade”, “Honra”, “Vergonha”) revelam:", "críticas à moral da cidade|elogios|dados geográficos|medo", "A"),
    ob("O tom do poema é:", "satírico|romântico|religioso|épico", "A"),
    ob("A palavra “desonra” e a resposta “Honra” criam:", "ironia, pois o poeta diz que falta aquilo que seria o oposto|nenhum efeito|uma rima apenas|uma fábula", "A"),
    dis("Que crítica o poeta faz à sociedade de seu tempo?", "Que na cidade faltam verdade, honra e vergonha, isto é, valores morais básicos, devido à corrupção e à hipocrisia.", 3),
    dis("Por que Gregório de Matos recebeu o apelido de “Boca do Inferno”?", "Por suas sátiras ferinas contra autoridades e costumes da Bahia colonial.", 3)
  ]);

  I("vieira-sal-da-terra", "Sermão de Santo Antônio aos Peixes, de Vieira (abertura)", "Barroco: prosa oratória, alegoria, conceptismo e crítica social.", [
    H.t("Sermão de Santo Antônio aos Peixes (1654)", [
      "“Vós, diz Cristo Senhor nosso, falando com os Pregadores, sois o sal da terra: e chama-lhes sal da terra, porque quer que façam na terra o que faz o sal.”"
    ], "Padre Antônio Vieira (1608–1697), trecho de abertura"),
    H.te("Contexto", ["Pregado em São Luís do Maranhão, o sermão usa a alegoria dos peixes para criticar a exploração dos indígenas pelos colonos."])
  ], [
    ob("O sal, na metáfora de Cristo, simboliza:", "o papel dos pregadores de preservar e corrigir a sociedade|a riqueza|o mar|o perigo", "A"),
    ob("O sermão é um exemplo de:", "prosa barroca oratória|poesia árcade|romance realista|teatro", "A"),
    ob("A estratégia de falar aos peixes é uma:", "alegoria para criticar os homens|descrição da pesca|lenda indígena|fábula infantil", "A"),
    ob("O texto adota uma postura:", "didática e crítica|puramente lírica|cômica|neutra", "A"),
    dis("Por que Vieira usa a imagem do sal?", "Porque o sal conserva os alimentos e evita a corrupção: os pregadores devem conservar a moral e combater a corrupção da sociedade.", 3),
    dis("Que traços do estilo barroco aparecem no trecho?", "Argumentação lógica e engenhosa (conceptismo), uso de metáfora e tom de persuasão.", 3)
  ]);

  I("gonzaga-lira-1", "Marília de Dirceu, de Tomás Antônio Gonzaga: Lira I", "Arcadismo: pastor, vida simples, bucolismo e declaração amorosa.", [
    H.poema("Marília de Dirceu · Lira I", "Eu, Marília, não sou algum vaqueiro,\nQue viva de guardar alheio gado;\nDe tosco trato, de expressões grosseiro,\nDos frios gelos, e dos sóis queimado.\nTenho próprio casal, e nele assisto;\nDá-me vinho, legume, fruta, azeite;\nDas brancas ovelhinhas tiro o leite,\nE mais as finas lãs, de que me visto.", "Tomás Antônio Gonzaga (1744–1810), Marília de Dirceu (1792), primeira parte da Lira I")
  ], [
    ob("O eu lírico (Dirceu) apresenta-se como:", "pobre vaqueiro|pastor que tem propriedade própria e vive de forma simples|rei|soldado", "B"),
    ob("A natureza, no poema, é descrita como:", "hostil|generosa e acolhedora|inexistente|perigosa", "B"),
    ob("A figura da amada, Marília, é:", "uma pastora idealizada|uma rainha|uma freira|uma guerreira", "A"),
    ob("O poema reúne traços do Arcadismo como:", "bucolismo e vida simples|exagero emocional|dualismo religioso|crítica social explosiva", "A"),
    dis("Que ideal arcádico aparece na descrição do “casal” de Dirceu?", "A vida simples no campo (“aurea mediocritas”), em que a natureza oferece o necessário.", 3),
    dis("Por que Dirceu faz questão de dizer que não é “algum vaqueiro”?", "Para mostrar à amada que, apesar da vida simples, tem posses e condições de oferecer estabilidade.", 3)
  ]);

  I("charge-enem", "Charge: a biblioteca vazia (leitura no estilo ENEM)", "Leitura de charge: recursos visuais, ironia e posicionamento crítico (descrição).", [
    H.t("Charge (descrição)", [
      "**Cenário:** uma biblioteca com estantes empoeiradas e um único frequentador, um menino, que lê em silêncio. Na porta, um cartaz: “Hoje: aberto das 9h às 11h”.",
      "**Em uma mesa:** um jovem digita no celular e diz ao amigo: “Eu li tudo sobre isso na internet em 3 minutos”.",
      "**Legenda:** “Informação, todo mundo tem. Leitura, nem tanto.”"
    ], "Texto original (descrição de charge fictícia)")
  ], [
    ob("A crítica da charge é sobre:", "a diferença entre ter informação e ler com profundidade|o preço dos livros|a falta de livros|a falta de internet", "A"),
    ob("O cartaz “Hoje: aberto das 9h às 11h” sugere:", "pouco investimento no espaço da leitura|excesso de horários|uma biblioteca moderna|um evento", "A"),
    ob("A fala “Li tudo sobre isso em 3 minutos” é:", "irônica, pois sugere leitura superficial|literal|científica|técnica", "A"),
    ob("A legenda “Informação, todo mundo tem. Leitura, nem tanto.” usa:", "contraste entre informação e leitura|metáfora de viagem|hipérbole científica|elipse", "A"),
    dis("Que ideia a charge defende sobre a leitura?", "Que ler com atenção e profundidade vai além de acessar informações rápidas.", 3),
    dis("Como o cenário contribui para o sentido da charge?", "A biblioteca vazia e pouco acessível reforça a ideia de pouco valor dado à leitura.", 3)
  ], ["Interpretação"]);

  I("noticia-enem", "Notícia: censo de bibliotecas escolares (leitura no estilo ENEM)", "Notícia com dados e fonte: relação entre dados, causas e consequências.", [
    H.t("Bibliotecas escolares ainda são minoria", [
      "Um levantamento fictício realizado em 200 escolas de um estado mostrou que 60 delas têm biblioteca em funcionamento. Entre as que têm, a maioria mantém acervo com mais de dez anos sem renovação.",
      "Para a pesquisadora Lúcia Paiva, a falta de bibliotecários e de verba específica está entre as principais causas. “Sem profissional e sem acervo atualizado, a biblioteca vira um depósito de livros”, afirmou.",
      "O estudo recomenda que as redes de ensino incluam bibliotecas escolares em seus planos de investimento."
    ], "Texto original (dados fictícios, criados para esta atividade)")
  ], [
    ob("Que percentual das escolas pesquisadas tem biblioteca em funcionamento?", "20%|30%|60%|100%", "B"),
    ob("A causa apontada pela pesquisadora é:", "falta de profissionais e de verba|excesso de alunos|desinteresse apenas|falta de livros novos no mercado", "A"),
    ob("A expressão “a biblioteca vira um depósito de livros” é:", "metáfora que critica a falta de uso|descrição técnica|ironia sem sentido|erro", "A"),
    ob("A recomendação final do estudo é:", "incluir bibliotecas nos planos de investimento|fechar bibliotecas|cobrar taxas|eliminar acervos", "A"),
    dis("Calcule o percentual de escolas sem biblioteca em funcionamento.", "140 de 200 escolas = 70%.", 2),
    dis("Que relação o texto estabelece entre acervo desatualizado e função da biblioteca?", "Sem renovação do acervo e profissionais, a biblioteca perde a função de espaço vivo de leitura e vira mero depósito.", 3)
  ], ["Interpretação"]);

  I("artigo-opiniao", "Artigo de opinião: leitura é direito, não luxo", "Texto argumentativo: tese, argumentos, repertório e proposta.", [
    H.t("Leitura é direito, não luxo", [
      "Ler é uma habilidade que ultrapassa a escola: ela permite entender contratos, comparar informações, formar opiniões. Por isso, o acesso ao livro deveria ser tratado como direito, e não como luxo.",
      "Os dados da vida cotidiana mostram o contrário: livros caros, bibliotecas fechadas e escolas sem acervo. Como lembra a Constituição de 1988, a educação é direito de todos e dever do Estado e da família; sem leitura, esse direito se esvazia.",
      "Portanto, é urgente que governos e escolas ampliem bibliotecas, formem mediadores de leitura e incentivem a circulação de livros, para que ler deixe de ser privilégio de poucos."
    ])
  ], [
    ob("A tese do texto é que:", "a leitura deve ser tratada como direito|a leitura é um luxo|a escola deve fechar|os livros devem ser caros", "A"),
    ob("O repertório sociocultural utilizado é:", "a Constituição de 1988|uma música popular|uma piada|um poema", "A"),
    ob("O conectivo “Portanto” introduz:", "uma conclusão e proposta|um exemplo|uma oposição|uma dúvida", "A"),
    ob("O autor propõe que governos e escolas:", "ampliem bibliotecas e formem mediadores|cobrem pelos livros|reduzam o acervo|eliminem a leitura", "A"),
    dis("Que argumento sustenta a tese?", "A leitura é habilidade necessária à vida cotidiana, e o acesso a livros é limitado por preço, bibliotecas fechadas e escolas sem acervo.", 3),
    dis("Que elementos de coesão ligam os parágrafos?", "“Por isso”, “Como lembra…”, “Portanto”: conectivos de causa, referência e conclusão.", 3)
  ], ["Interpretação", "Redação"]);

  I("divulgacao-neuroplasticidade", "Divulgação científica: o cérebro que aprende", "Texto de divulgação científica: conceito, exemplo e consequência para a vida cotidiana.", [
    H.t("O cérebro que aprende", [
      "Durante muito tempo, acreditou-se que o cérebro adulto era incapaz de mudar. Hoje, a ciência mostra que ele é plástico: forma novas conexões entre os neurônios a cada experiência, em um processo chamado neuroplasticidade.",
      "Isso significa que aprender um idioma, tocar um instrumento ou estudar para uma prova modifica fisicamente o cérebro. Quanto mais a pessoa pratica, mais fortes ficam essas conexões; quando deixa de praticar, elas enfraquecem.",
      "Por isso, estudar com constância costuma render mais do que estudar tudo na véspera da prova."
    ], "Texto informativo")
  ], [
    ob("A neuroplasticidade é:", "a capacidade do cérebro de formar novas conexões|uma doença|um tipo de memória fixa|uma técnica de estudo", "A"),
    ob("Segundo o texto, as conexões entre neurônios:", "ficam mais fortes com a prática|nunca mudam|dependem da idade apenas|só existem na infância", "A"),
    ob("A conclusão do texto é:", "estudar com constância costuma render mais|estudar na véspera é melhor|não é preciso estudar|o cérebro adulto não aprende", "A"),
    ob("A expressão “cérebro plástico” significa:", "que se modifica|que é feito de plástico|que é rígido|que é frágil", "A"),
    dis("Explique a mudança de ideia sobre o cérebro adulto, segundo o texto.", "Antes, acreditava-se que o cérebro adulto não mudava; hoje se sabe que ele forma novas conexões ao longo da vida.", 3),
    dis("Que relação há entre a neuroplasticidade e o hábito de estudar?", "A prática constante fortalece as conexões, o que favorece o aprendizado.", 3)
  ], ["Interpretação"]);

  I("cronica-ponto-onibus", "Crônica: o ponto de ônibus", "Crônica urbana: cena cotidiana, humor sutil e reflexão.", [
    H.t("O ponto de ônibus", [
      "Todo dia, às sete da manhã, a mesma cena: o ponto de ônibus se enche de gente com mochilas, olhos pequenos e uma pressa que ainda não acordou. Ninguém se cumprimenta, mas todos sabem quem é quem: o homem do guarda-chuva, a menina do fone, a senhora das sacolas.",
      "Num dia de chuva, o ônibus demorou. Aos poucos, o silêncio foi se dissolvendo: alguém reclamou do trânsito, alguém riu, alguém emprestou o guarda-chuva a quem não tinha. Quando o ônibus chegou, ninguém queria subir.",
      "Percebi que o grupo só existia por causa do atraso. Se tudo funcionasse, seríamos apenas sete da manhã."
    ])
  ], [
    ob("O texto é predominantemente:", "uma crônica|uma notícia|um poema|um artigo científico", "A"),
    ob("“A pressa que ainda não acordou” é:", "uma personificação/metáfora da sonolência|uma ironia|um erro|um exagero científico", "A"),
    ob("O atraso do ônibus provoca:", "interação entre as pessoas|brigas|silêncio|medo", "A"),
    ob("A última frase sugere que:", "o convívio só surge em situações de desconforto|o ônibus é perfeito|todos se conhecem|ninguém se importa", "A"),
    dis("Que crítica social aparece na crônica?", "A indiferença entre pessoas que convivem diariamente e só se aproximam quando algo foge da rotina.", 3),
    dis("Que sentido tem a expressão “seríamos apenas sete da manhã”?", "Sem o imprevisto, as pessoas seriam apenas uma rotina anônima, sem identidade de grupo.", 3)
  ], ["Interpretação"]);

  I("propaganda-vacina", "Propaganda de campanha de saúde: vacinação em dia", "Texto publicitário: função conativa, argumentos e imperativo.", [
    H.t("Campanha", [
      "**Vacina em dia: proteja você e quem você ama.**",
      "Verifique sua caderneta, leve seus filhos ao posto e atualize as doses que faltam. A vacinação protege você e dificulta a circulação de doenças.",
      "**Cuidar é coletivo. Vacine-se.**"
    ], "Texto original (campanha fictícia)")
  ], [
    ob("A função da linguagem predominante é:", "conativa|referencial|metalinguística|poética", "A"),
    ob("O verbo //Verifique// está no:", "imperativo|infinitivo|passado|futuro", "A"),
    ob("A expressão “Cuidar é coletivo” expressa:", "a ideia de que a proteção é uma responsabilidade de todos|uma ordem|uma dúvida|uma piada", "A"),
    ob("O público a que se dirige é:", "toda a população|apenas médicos|apenas crianças|apenas idosos", "A"),
    dis("Que argumentos a campanha utiliza?", "Proteção individual e coletiva, ao dificultar a circulação de doenças.", 3),
    dis("Reescreva o slogan usando outro verbo no imperativo.", "Resposta pessoal. Exemplo: “Proteja-se e proteja o outro.”", 2)
  ], ["Interpretação"]);

  I("infografico-dados", "Leitura de dados: tempo de uso de telas por faixa etária (dados fictícios)", "Interpretação de tabelas e gráficos: leitura, comparação e inferência.", [
    H.tab("Tempo médio diário de uso de telas (dados fictícios)", ["Faixa etária", "Horas por dia", "Principal uso"], [["10 a 12 anos", "3,5", "vídeos e jogos"], ["13 a 15 anos", "5,0", "redes sociais"], ["16 a 18 anos", "6,5", "redes sociais e estudo"], ["Adultos", "4,0", "trabalho e redes"]]),
    H.t("Nota", "Os dados acima são fictícios, criados para esta atividade de leitura de tabelas.", "Texto original")
  ], [
    ob("Qual faixa etária apresenta maior tempo de uso de telas?", "10 a 12 anos|13 a 15 anos|16 a 18 anos|Adultos", "C"),
    ob("A diferença entre o tempo de adultos e o de 13 a 15 anos é de:", "0,5 hora|1,0 hora|1,5 hora|2,5 horas", "B"),
    ob("A tabela permite concluir que:", "o tempo de uso aumenta com a idade até os 18 anos|o tempo de uso diminui com a idade|todos usam o mesmo tempo|não há diferença", "A"),
    ob("O principal uso na faixa de 16 a 18 anos é:", "vídeos e jogos|redes sociais e estudo|trabalho e redes|apenas estudo", "B"),
    dis("Calcule a média de tempo de uso entre as quatro faixas.", "(3,5 + 5,0 + 6,5 + 4,0) ÷ 4 = 4,75 horas por dia.", 3),
    dis("Que cuidado se deve ter ao interpretar uma tabela como essa?", "Verificar a fonte, o período e se os dados são representativos; correlação não é, necessariamente, causa.", 3)
  ], ["Interpretação"]);

  I("poema-contemporaneo", "Poema contemporâneo: cidade, pressa e pausa", "Poema em versos livres: imagens, ritmo, tema da pressa e do silêncio.", [
    H.poema("Pausa", "A cidade corre, a gente corre,\ne a pressa vira calendário.\nNo meio do trânsito,\num pássaro pousa no fio\ne ensina, sem pressa,\no que é demorar-se.", "Poema original")
  ], [
    ob("O poema é composto por versos:", "livres, sem rima obrigatória|rimados em todas as estrofes|decassílabos|de sete sílabas", "A"),
    ob("A imagem do pássaro simboliza:", "a pausa e a calma|a pressa|o perigo|a cidade", "A"),
    ob("A expressão “a pressa vira calendário” sugere que:", "o ritmo apressado organiza a vida|o tempo para|a pressa acabou|o calendário mudou", "A"),
    ob("O tema central é:", "o contraste entre pressa urbana e pausa|a natureza apenas|a infância|o campo", "A"),
    dis("Que efeito produz a quebra dos versos em “e ensina, sem pressa, / o que é demorar-se”?", "A pausa na leitura imita a pausa que o poema propõe: o ritmo desacelera.", 3),
    dis("Que relação há entre o pássaro e o título do poema?", "O pássaro representa a pausa, como momento de contemplação.", 3)
  ], ["Interpretação", "Literatura"]);

  I("carta-aberta", "Carta aberta ao prefeito: por bibliotecas escolares", "Gênero argumentativo: pedido formal, argumentos e proposta.", [
    H.t("Carta aberta", [
      "Ao Senhor Prefeito,",
      "Nós, estudantes do 1º ano do Ensino Médio da Escola Estadual Monteiro Lobato, escrevemos para solicitar a ampliação do acervo e do horário de funcionamento da biblioteca escolar.",
      "Sabemos que a leitura é essencial para a formação de pessoas críticas e que, sem acesso a livros, nosso direito à educação fica comprometido. Além disso, atividades como clubes de leitura dependem de um espaço acolhedor e bem equipado.",
      "Por isso, pedimos que a prefeitura destine verbas para renovar o acervo, contratar um bibliotecário e manter a biblioteca aberta também à tarde.",
      "Certos de sua atenção, subscrevemo-nos,\nOs alunos do 1º ano."
    ], "Texto original (carta fictícia)")
  ], [
    ob("O pedido central da carta é:", "ampliação do acervo e do horário da biblioteca|construção de uma quadra|mais feriados|mais professores", "A"),
    ob("O conectivo “Por isso” introduz:", "uma proposta decorrente dos argumentos|uma oposição|uma dúvida|um exemplo", "A"),
    ob("A linguagem da carta é:", "formal|informal|gíria|poética", "A"),
    ob("A estrutura da carta é composta por:", "saudação, argumentos e pedido|apenas saudação|apenas pedido|apenas argumentos", "A"),
    dis("Que argumentos os estudantes utilizam?", "A leitura é essencial para a formação crítica; sem acesso a livros, o direito à educação fica comprometido; clubes de leitura exigem um espaço adequado.", 3),
    dis("Que proposta concreta aparece na carta?", "Destinar verbas para renovar o acervo, contratar bibliotecário e manter a biblioteca aberta à tarde.", 3)
  ], ["Interpretação", "Redação"]);
})();
