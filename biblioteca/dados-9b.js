/* 9º ano · Interpretação de texto (18 materiais). Textos originais, fictícios, recontos ou de autores em domínio público. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("9"), ob = H.ob, dis = H.dis;

  function I(id, titulo, resumo, texto, qs, assunto, intro) {
    /* distribui a posição da resposta correta nas objetivas, sem alterar qual alternativa é a certa */
    var hash = id.split("").reduce(function (a, ch) { return a + ch.charCodeAt(0); }, 0);
    var alvo = [1, 3, 0, 2, 3, 1, 0, 2], k = hash % 5;
    qs.forEach(function (q) {
      if (!q.alt) return;
      var t = (alvo[k++ % alvo.length]) % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    var b = [H.i(intro || "Leia o texto com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("interpretacao", "i-" + id, titulo, assunto || ["Interpretação"], resumo, b);
  }

  I("ficcao-cientifica", "Conto de ficção científica: o último e-mail", "Narrativa de ficção científica: mundo futuro, crítica e final aberto.", [
    H.t("O último e-mail", [
      "No ano de 2087, as cartas desapareceram dos museus, e as pessoas se comunicavam por pensamento, sem teclados nem telas. Por isso, Elisa estranhou quando uma mensagem em letras brilhantes surgiu na parede da cozinha: “Você ainda se lembra de escrever?”.",
      "Curiosa, ela vasculhou o sótão do avô e encontrou um notebook antigo, ainda com bateria. Ligou-o. A caixa de entrada mostrava uma única mensagem, não lida, enviada trinta anos antes por alguém chamado “Futuro”: “Se você está lendo, é porque alguém ainda sabe apertar as teclas. Guarde isto: a escrita é a memória que não precisa de ninguém para existir”.",
      "Elisa leu duas vezes. Depois, pela primeira vez na vida, escreveu a própria resposta."
    ])
  ], [
    ob("O mundo descrito no texto é caracterizado por:", "comunicação por pensamento, sem teclados nem telas|uso intenso de cartas|guerra entre cidades|ausência de tecnologia", "A"),
    ob("A mensagem encontrada no notebook foi enviada:", "naquele mesmo dia|trinta anos antes|por Elisa|pelo avô", "B"),
    ob("A frase “a escrita é a memória que não precisa de ninguém para existir” sugere que:", "a escrita registra e guarda lembranças|a escrita é inútil|ninguém pode escrever|só a tecnologia guarda memória", "A"),
    ob("O final do conto é:", "fechado, com explicação completa|aberto, mostrando uma mudança em Elisa|trágico|cômico", "B"),
    dis("Que crítica o conto faz à sociedade do futuro?", "Que a facilidade da comunicação por pensamento pode levar ao abandono da escrita e da memória registrada.", 4),
    dis("Por que o conto é de ficção científica?", "Porque ambienta a história em um futuro com tecnologia diferente da atual (comunicação por pensamento).", 3)
  ], ["Interpretação", "Literatura"]);

  I("cronica-cidade", "Crônica: o Rio às seis da tarde", "Crônica urbana: observação, imagens e reflexão sobre o cotidiano.", [
    H.t("Seis da tarde", [
      "Às seis, a cidade respira diferente. O sol baixa, o engarrafamento sobe e o povo se amontoa nos pontos de ônibus com a cara de quem já foi embora por dentro. Uma mulher segura sacolas de feira; um rapaz, de fones, dança sozinho; um senhor, sentado no meio-fio, assiste a tudo como quem vê um filme de que já sabe o final.",
      "Dizem que a cidade grande é impessoal. Mas basta o ônibus demorar cinco minutos a mais para que as pessoas comecem a se olhar, a reclamar juntas, a rir da mesma piada que ninguém contou. É como se o atraso fosse um pequeno milagre: transforma gente em vizinhos.",
      "Quando o ônibus chega, todos entram, e a cidade volta a ser feita de desconhecidos."
    ])
  ], [
    ob("O texto descreve:", "uma cena urbana no fim da tarde|uma viagem de férias|uma festa|uma reunião de trabalho", "A"),
    ob("A expressão “com a cara de quem já foi embora por dentro” sugere:", "cansaço e desejo de chegar em casa|alegria|medo|raiva", "A"),
    ob("A frase “o atraso é um pequeno milagre” é:", "uma metáfora irônica que valoriza o contato entre as pessoas|uma crítica ao ônibus|um erro|uma ordem", "A"),
    ob("A crônica afirma que o atraso do ônibus:", "separa as pessoas|aproxima as pessoas|não muda nada|ajuda o trânsito", "B"),
    dis("Explique a oposição entre “vizinhos” e “desconhecidos” no texto.", "Durante o atraso, as pessoas interagem e viram quase vizinhas; quando o ônibus chega, voltam a ser desconhecidas.", 4),
    dis("Que visão da cidade grande o autor apresenta?", "Uma visão ambígua: ela parece impessoal, mas pode criar breves laços entre as pessoas.", 3)
  ]);

  I("noticia-onibus-eletricos", "Notícia: cidade testa ônibus elétricos", "Notícia de mobilidade: fato, fontes, dados e posicionamentos.", [
    H.t("Cidade testa ônibus elétricos em linha urbana", [
      "A prefeitura de Vale Verde iniciou, na segunda-feira, um teste com três ônibus elétricos em uma linha que liga o centro ao hospital regional. Os veículos circularão por 60 dias, e a administração vai avaliar custos, autonomia da bateria e opinião dos passageiros.",
      "Segundo o secretário de Transportes, Paulo Aragão, o objetivo é reduzir ruído e emissões de poluentes. “Se os resultados forem bons, ampliaremos a frota nos próximos anos”, disse. Já representantes dos motoristas pedem que o plano inclua treinamento específico.",
      "Os passageiros poderão responder a uma pesquisa de satisfação dentro dos ônibus."
    ], "Texto original, criado para esta atividade (fictício)")
  ], [
    ob("O fato central da notícia é:", "o início de um teste com ônibus elétricos|a compra de 100 ônibus|a greve dos motoristas|a abertura de um hospital", "A"),
    ob("Por quanto tempo os veículos serão testados?", "30 dias|60 dias|90 dias|um ano", "B"),
    ob("O objetivo da prefeitura, segundo o secretário, é:", "aumentar tarifas|reduzir ruído e emissões|trocar motoristas|fechar linhas", "B"),
    ob("A posição dos representantes dos motoristas é:", "pedir treinamento específico|rejeitar o projeto|exigir mais folgas apenas|ignorar a proposta", "A"),
    dis("Que critérios serão avaliados durante o teste?", "Custos, autonomia da bateria e opinião dos passageiros.", 2),
    dis("Que recursos de linguagem tornam o texto uma notícia?", "Lide, data, fontes citadas, falas entre aspas e linguagem objetiva.", 3)
  ]);

  I("reportagem-sono", "Reportagem: sono e adolescência", "Reportagem de divulgação científica: causa, consequência e orientação.", [
    H.t("Por que os adolescentes dormem tarde?", [
      "Na adolescência, o corpo passa por uma mudança no chamado relógio biológico: o sono tende a chegar mais tarde, e acordar cedo fica mais difícil. Isso não é preguiça, e sim um processo natural ligado a hormônios e ao desenvolvimento.",
      "Mesmo assim, as rotinas escolares costumam exigir que o jovem acorde cedo. O resultado é um acúmulo de sono atrasado, com consequências como cansaço, irritação e dificuldade de concentração. Especialistas recomendam, em geral, de 8 a 10 horas de sono por noite nessa fase.",
      "Para melhorar o descanso, ajudam a manter horários regulares, diminuir o uso de telas à noite e evitar cafeína no fim do dia."
    ], "Texto informativo")
  ], [
    ob("Segundo o texto, a dificuldade de acordar cedo na adolescência é:", "preguiça|um processo natural ligado a hormônios e ao desenvolvimento|um defeito da escola|falta de disciplina", "B"),
    ob("Que problema decorre do conflito entre o relógio biológico e a rotina escolar?", "Acúmulo de sono atrasado|Excesso de energia|Perda de memória permanente|Sede", "A"),
    ob("O que ajuda a melhorar o descanso?", "Telas à noite|Horários regulares|Cafeína à noite|Dormir tarde", "B"),
    ob("O texto é predominantemente:", "informativo|narrativo|poético|publicitário", "A"),
    dis("Explique o título “Por que os adolescentes dormem tarde?” com suas palavras.", "Porque o relógio biológico muda na adolescência, e o sono chega mais tarde por motivos naturais.", 3),
    dis("Que mudança de rotina você faria para melhorar seu sono?", "Resposta pessoal.", 2)
  ]);

  I("artigo-voto-16", "Artigo de opinião: voto aos 16 anos", "Argumentação: tese, argumentos, contra-argumento e proposta.", [
    H.t("Aos 16, já se pode votar?", [
      "No Brasil, o voto é facultativo para quem tem 16 e 17 anos. Há quem defenda que a idade mínima seja ampliada, e quem argumente que ela deveria ser mantida. Defendo a manutenção do voto facultativo aos 16, desde que acompanhado de educação cívica na escola.",
      "É verdade que muitos jovens dessa idade ainda não têm experiência política. Mas a experiência se constrói no exercício: quem vota cedo se informa, discute e passa a acompanhar as decisões públicas. Além disso, os adolescentes são diretamente afetados por temas como educação e transporte, e merecem ter voz.",
      "Portanto, o caminho não é restringir o voto, mas oferecer formação para que ele seja consciente."
    ])
  ], [
    ob("A tese do autor é que:", "o voto deve ser obrigatório aos 16|o voto facultativo aos 16 deve ser mantido, com educação cívica|só maiores de 18 devem votar|o voto deve ser eliminado", "B"),
    ob("Qual trecho apresenta concessão?", "“É verdade que muitos jovens dessa idade ainda não têm experiência política.”|“Defendo a manutenção…”|“Portanto, o caminho…”|“Além disso…”", "A"),
    ob("A expressão “Além disso” introduz:", "oposição|argumento adicional|conclusão|exemplo", "B"),
    ob("A proposta final do autor é:", "restringir o voto|oferecer formação para que o voto seja consciente|aumentar a idade mínima|abolir o voto", "B"),
    dis("Cite um argumento usado pelo autor.", "A experiência política se constrói no exercício do voto; os adolescentes são afetados por temas públicos e merecem voz.", 3),
    dis("Você concorda com o autor? Responda em seis linhas, com um argumento e uma concessão.", "Resposta pessoal, com posicionamento claro, argumento e concessão.", 8)
  ], ["Interpretação", "Redação"]);

  I("editorial-bibliotecas", "Editorial: bibliotecas públicas merecem atenção", "Editorial: posicionamento institucional, argumentação e linguagem formal.", [
    H.t("Bibliotecas: um investimento que rende", [
      "Em muitas cidades, as bibliotecas públicas funcionam com acervo desatualizado, horário reduzido e poucos profissionais. Esse cenário revela uma escolha: tratar a leitura como supérfluo, e não como direito.",
      "A biblioteca é mais do que um depósito de livros: é espaço de estudo, de acesso gratuito à informação e de encontro entre gerações. Ao abandoná-la, o poder público perde uma das ferramentas mais baratas de formação de cidadãos.",
      "Este jornal defende que as prefeituras destinem verbas específicas às bibliotecas, ampliem seu horário e invistam em programas de leitura. Trata-se de um investimento que rende, ao longo dos anos, em educação, cultura e cidadania."
    ], "Texto original (editorial fictício)")
  ], [
    ob("O editorial expressa:", "a posição de um veículo de comunicação|a opinião pessoal de um leitor|um fato neutro|uma receita", "A"),
    ob("Segundo o texto, tratar a leitura como supérfluo é:", "uma escolha|uma obrigação|um acidente|uma lei", "A"),
    ob("A biblioteca é descrita como:", "apenas um depósito|espaço de estudo, informação e encontro|um local barulhento|um lugar vazio", "B"),
    ob("O que o jornal propõe?", "Fechar bibliotecas|Verbas específicas, mais horários e programas de leitura|Cobrar entrada|Vender livros", "B"),
    dis("Que argumento sustenta a tese do editorial?", "A biblioteca é um espaço de estudo, acesso gratuito à informação e encontro, e é uma ferramenta barata de formação de cidadãos.", 4),
    dis("Que expressão marca o posicionamento do jornal no último parágrafo?", "“Este jornal defende…”", 2)
  ], ["Interpretação", "Redação"]);

  I("poema-bilac-lingua", "Poema: Língua Portuguesa, de Olavo Bilac", "Soneto parnasiano: imagens, antítese, linguagem e sentido.", [
    H.poema("Língua Portuguesa", "Última flor do Lácio, inculta e bela,\nÉs, a um tempo, esplendor e sepultura:\nOuro nativo, que na ganga impura\nA bruta mina entre os cascalhos vela...", "Olavo Bilac (1865–1918), primeira estrofe")
  ], [
    ob("O poema é uma homenagem à:", "língua portuguesa|língua latina|cidade de Roma|natureza", "A"),
    ob("“Última flor do Lácio” refere-se à origem da língua no:", "latim, falado no Lácio|grego|árabe|francês", "A"),
    ob("A expressão “esplendor e sepultura” é uma:", "antítese|comparação|metonímia|ironia", "A"),
    ob("“Ouro nativo, que na ganga impura” é uma metáfora para:", "a beleza da língua, escondida em sua origem rude|um tesouro de pirata|uma mina real|uma pedra", "A"),
    dis("Que ideia o poema transmite sobre a língua portuguesa?", "Que ela é bela e rica, mas nasce de uma origem simples e rude (o latim vulgar), como ouro entre as impurezas.", 4),
    dis("O poema pertence ao Parnasianismo. Que características você percebe?", "Valorização da forma, vocabulário elaborado, imagens cuidadosas e tema nobre (a língua).", 3)
  ], ["Interpretação", "Literatura"]);

  I("soneto-machado-carolina", "Soneto: A Carolina, de Machado de Assis", "Poema de homenagem: eu lírico, sentimento, forma de soneto.", [
    H.poema("A Carolina", "Querida, ao pé do leito derradeiro\nEm que descansas desta longa vida,\nAqui venho e virei, pobre querida,\nTrazer-te o coração do companheiro.", "Machado de Assis (1839–1908), primeira estrofe")
  ], [
    ob("O eu lírico dirige-se:", "a um amigo|à esposa falecida|a um filho|à pátria", "B"),
    ob("O sentimento dominante é:", "saudade e amor|raiva|medo|ironia", "A"),
    ob("A expressão “leito derradeiro” significa:", "o último leito (a sepultura)|a primeira cama|uma cama nova|uma cama de hospital", "A"),
    ob("A forma do poema, completo, é a de um:", "soneto|haicai|cordel|trova", "A"),
    dis("Que gesto o eu lírico promete repetir? Que valor tem esse gesto?", "Visitar o túmulo, trazendo o seu coração: expressa fidelidade e amor duradouro.", 3),
    dis("Que diferença você percebe entre esse tom de Machado e o tom irônico de seus romances?", "Resposta pessoal. Aqui o tom é afetivo e solene, sem a ironia característica de Memórias Póstumas ou Dom Casmurro.", 4)
  ], ["Interpretação", "Literatura"]);

  I("charge-consumo", "Charge: o carrinho cheio", "Leitura de charge: crítica ao consumismo, elementos visuais e ironia (descrição).", [
    H.t("Charge (descrição)", [
      "**Cenário:** um shopping center. No centro, um homem empurra um carrinho de compras lotado de sacolas, enquanto, ao fundo, um globo terrestre aparece murcho e pendurado em uma sacola de promoção.",
      "**Placa na vitrine:** “Tudo com 70% de desconto — o planeta não está incluído”.",
      "**Fala do homem, sorrindo:** “Vale a pena: eu economizei bastante!”."
    ], "Texto original (descrição de charge fictícia)")
  ], [
    ob("A crítica da charge se dirige:", "ao consumismo e ao seu custo ambiental|às liquidações|ao desemprego|à violência", "A"),
    ob("O globo murcho na sacola simboliza:", "o planeta desgastado pelo consumo|uma promoção|um brinquedo|um mapa", "A"),
    ob("A fala do homem é:", "irônica, pois ele se vê economizando enquanto o planeta perde|literal|triste|científica", "A"),
    ob("A frase “o planeta não está incluído” provoca:", "humor e crítica|uma informação técnica|uma instrução|uma pergunta", "A"),
    dis("Explique a ironia da charge.", "O homem acredita que economizou com os descontos, mas o custo ambiental do consumo excessivo recai sobre o planeta, que “não está incluído”.", 4),
    dis("Que atitude de consumo consciente você proporia?", "Resposta pessoal. Exemplos: comprar apenas o necessário, reutilizar, reparar, doar.", 3)
  ]);

  I("alienista-reconto", "Reconto: O Alienista, de Machado de Assis", "Reconto de conto clássico: sátira da ciência e do poder, ironia e final.", [
    H.t("O Alienista (reconto)", [
      "O doutor Simão Bacamarte, médico respeitado, decidiu estudar a loucura na pequena vila de Itaguaí. Para isso, mandou construir a Casa Verde, onde passou a internar quem apresentasse qualquer sinal de comportamento fora do comum.",
      "No início, internou os “loucos” óbvios; depois, passou a recolher gente que apenas exagerava na vaidade, na generosidade ou no humor. Em pouco tempo, a maior parte da vila estava na Casa Verde, e a população, revoltada, se levantou contra o médico.",
      "Depois de muitas reviravoltas, Bacamarte concluiu que o equilíbrio perfeito era a verdadeira doença. O único “são” da vila era ele próprio. O final é irônico: o médico se interna na Casa Verde, onde morre."
    ], "Reconto adaptado do conto “O Alienista” (1882), de Machado de Assis")
  ], [
    ob("O conto critica principalmente:", "a ciência usada sem limites e o poder de quem define a “normalidade”|a vida no campo|a amizade|a escola", "A"),
    ob("A Casa Verde era:", "um hospital psiquiátrico|uma escola|um mercado|uma igreja", "A"),
    ob("A ironia do final está em:", "o médico internar-se, concluindo que era o único “são”|a vila ser fechada|a Casa Verde ser vendida|todos serem curados", "A"),
    ob("A conclusão de Bacamarte sobre o “equilíbrio perfeito” demonstra:", "o exagero de seu critério científico|seu conhecimento|sua humildade|sua generosidade", "A"),
    dis("Por que a população se revolta contra o médico?", "Porque ele interna cada vez mais pessoas por razões banais, aprisionando grande parte da vila.", 3),
    dis("Que relação você vê entre o conto e a ideia de “quem define o que é normal”?", "Resposta pessoal. O conto sugere que o critério de normalidade pode ser arbitrário e usado como poder.", 4)
  ], ["Interpretação", "Literatura"]);

  I("origem-lingua-portuguesa", "Texto informativo: origem da língua portuguesa", "Texto histórico-linguístico: origem, evolução e variações.", [
    H.t("De onde vem o português?", [
      "A língua portuguesa vem do latim, falado pelos romanos que dominaram a Península Ibérica a partir do século III a.C. O latim das pessoas comuns, chamado latim vulgar, foi se transformando ao longo dos séculos e deu origem, entre outras, às línguas românicas: português, espanhol, francês, italiano e romeno.",
      "Na região onde hoje fica Portugal, a variedade desenvolveu-se de forma própria e foi levada ao Brasil a partir do século XVI. Aqui, passou a receber influências das línguas indígenas e africanas, além de outras, o que explica muitas diferenças de vocabulário, de sotaque e de uso entre o português brasileiro e o europeu.",
      "Hoje, o português é falado em diferentes continentes e continua mudando: novas palavras surgem, e outras deixam de ser usadas."
    ], "Texto informativo")
  ], [
    ob("O português vem do:", "latim|grego|árabe|inglês", "A"),
    ob("O latim que originou as línguas românicas foi o:", "clássico|vulgar|grego|bárbaro", "B"),
    ob("O português levado ao Brasil recebeu influências de:", "línguas indígenas e africanas, entre outras|só do inglês|só do francês|nenhuma língua", "A"),
    ob("A conclusão do texto sugere que a língua:", "é imutável|está em constante mudança|é igual em todos os países|já está completa", "B"),
    dis("Cite três línguas que, como o português, vêm do latim.", "Espanhol, francês, italiano e romeno (três delas).", 2),
    dis("Por que existem diferenças entre o português do Brasil e o de Portugal?", "Porque a língua evoluiu em lugares diferentes, recebendo influências próprias (indígenas, africanas) no Brasil.", 3)
  ], ["Interpretação", "Gramática"]);

  I("entrevista-escritora", "Entrevista: uma escritora fala sobre ler e escrever", "Entrevista: perguntas e respostas, opiniões e conselhos.", [
    H.t("Conversa com a escritora Beatriz Lemos", [
      "— Como você começou a escrever?\n— Copiando as histórias de que gostava. Depois comecei a mudar o final delas. Foi assim que descobri que eu também podia inventar.",
      "— Que conselho você dá a quem quer escrever melhor?\n— Leia muito, escreva todo dia, mesmo que pouco, e reescreva. O texto bom raramente nasce na primeira versão.",
      "— Qual a importância da leitura na adolescência?\n— É um espaço de liberdade. Ler permite viver outras vidas e, ao mesmo tempo, entender melhor a própria."
    ], "Texto original (entrevista fictícia)")
  ], [
    ob("Como a escritora começou a escrever?", "Copiando e depois mudando finais de histórias|Estudando gramática|Traduzindo livros|Fazendo críticas", "A"),
    ob("O conselho central dela é:", "ler muito, escrever e reescrever|escrever só uma vez|evitar ler|copiar textos prontos", "A"),
    ob("Para a escritora, o texto bom:", "nasce na primeira versão|raramente nasce na primeira versão|não precisa de revisão|é sempre curto", "B"),
    ob("A leitura, segundo ela, é:", "um espaço de liberdade|uma obrigação|uma perda de tempo|um castigo", "A"),
    dis("O que significa “viver outras vidas” por meio da leitura?", "Entrar em contato, pela imaginação, com experiências, lugares e pontos de vista diferentes dos seus.", 3),
    dis("Formule uma pergunta que você faria à escritora.", "Resposta pessoal.", 2)
  ]);

  I("divulgacao-ia", "Divulgação científica: o que é inteligência artificial?", "Texto expositivo: definição, exemplos, benefícios e cuidados.", [
    H.t("O que é inteligência artificial?", [
      "Inteligência artificial (IA) é o nome dado a sistemas de computador capazes de executar tarefas que normalmente exigiriam inteligência humana, como reconhecer imagens, traduzir textos, recomendar músicas ou conversar por escrito.",
      "Esses sistemas aprendem a partir de grandes quantidades de dados, buscando padrões. Por isso, podem ajudar em áreas como saúde, educação e transporte. Mas também têm limites: podem reproduzir erros e preconceitos presentes nos dados e nem sempre explicam como chegaram a um resultado.",
      "Por isso, é importante usá-los com senso crítico: conferir informações, saber de onde elas vêm e lembrar que a responsabilidade final é sempre de quem decide."
    ], "Texto informativo")
  ], [
    ob("A IA aprende:", "a partir de grandes quantidades de dados, buscando padrões|por instinto|sem dados|apenas copiando humanos", "A"),
    ob("Um exemplo de uso citado é:", "recomendar músicas|plantar árvores|cozinhar|construir pontes", "A"),
    ob("Um limite apontado pelo texto é:", "poder reproduzir erros e preconceitos dos dados|ser lenta|ser cara|ser inútil", "A"),
    ob("A conclusão do texto é:", "usar com senso crítico|evitar toda tecnologia|confiar cegamente|abolir a IA", "A"),
    dis("Por que a responsabilidade final é “de quem decide”?", "Porque a IA apenas sugere ou executa; as decisões e consequências cabem às pessoas que a utilizam.", 3),
    dis("Que cuidado você tomaria ao usar uma ferramenta de IA para estudar?", "Resposta pessoal. Exemplos: conferir fontes, não copiar sem entender, checar informações.", 3)
  ]);

  I("campanha-consumo-consciente", "Campanha: consumo consciente", "Texto publicitário: slogan, argumentos, apelo e imperativo.", [
    H.t("Campanha", [
      "**Compre menos. Viva mais.**",
      "Antes de comprar, pergunte: eu preciso? Vai durar? Posso consertar, trocar ou doar? Pequenas perguntas reduzem o lixo, economizam recursos e aliviam o bolso.",
      "**Consumo consciente: o planeta agradece.**"
    ], "Texto original (campanha fictícia)")
  ], [
    ob("A finalidade do texto é:", "vender produtos|convencer o público a consumir de forma consciente|contar uma história|informar uma data", "B"),
    ob("A estrutura do slogan “Compre menos. Viva mais.” se baseia em:", "antítese (menos × mais)|metáfora|elipse|hipérbole", "A"),
    ob("As formas verbais //pergunte// e //compre// estão no:", "imperativo|infinitivo|passado|futuro", "A"),
    ob("A pergunta “Posso consertar, trocar ou doar?” sugere:", "alternativas ao descarte imediato|um erro|uma ordem|uma dúvida sobre o preço", "A"),
    dis("Que argumentos o texto apresenta a favor do consumo consciente?", "Reduz o lixo, economiza recursos e alivia o bolso.", 3),
    dis("Crie um slogan para uma campanha de doação de roupas.", "Resposta pessoal. Exemplo: “O que sobra no seu armário falta em outro.”", 2)
  ]);

  I("constituicao-art5", "Texto normativo: direitos e garantias (Constituição Federal)", "Leitura de texto jurídico: linguagem, princípios e aplicação ao cotidiano.", [
    H.t("Art. 5º (adaptado)", [
      "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.",
      "É livre a manifestação do pensamento, sendo vedado o anonimato."
    ], "Texto adaptado da Constituição Federal de 1988, art. 5º, caput e inciso IV")
  ], [
    ob("O texto afirma que:", "todos são iguais perante a lei|apenas adultos têm direitos|os estrangeiros não têm direitos|a lei não vale para todos", "A"),
    ob("“Sem distinção de qualquer natureza” significa:", "sem diferenciar por critérios como origem, cor ou sexo|apenas entre iguais|só para brasileiros|apenas para adultos", "A"),
    ob("A expressão “vedado o anonimato” indica que:", "é proibido o anonimato na manifestação do pensamento|todos devem ser anônimos|o anonimato é obrigatório|o anonimato é incentivado", "A"),
    ob("A linguagem do texto é:", "formal, própria de documentos legais|informal|poética|publicitária", "A"),
    dis("Que direitos o texto garante?", "Vida, liberdade, igualdade, segurança e propriedade.", 2),
    dis("Dê um exemplo de como o direito à livre manifestação do pensamento aparece no dia a dia.", "Resposta pessoal. Exemplos: escrever um artigo de opinião, participar de debates, publicar com identificação.", 3)
  ]);

  I("biografia-cora-coralina", "Biografia: Cora Coralina", "Biografia: trajetória, obra e reconhecimento tardio.", [
    H.t("Cora Coralina", [
      "Ana Lins dos Guimarães Peixoto Bretas, conhecida como Cora Coralina, nasceu em 20 de agosto de 1889, na cidade de Goiás, então chamada Vila Boa de Goiás. Desde jovem escrevia versos e contos, mas só publicou o primeiro livro, //Poemas dos Becos de Goiás e Estórias Mais//, em 1965, aos 75 anos.",
      "Depois de viver em São Paulo por muitos anos, voltou à sua cidade natal, onde se dedicou à escrita e à produção de doces caseiros. Seus poemas falam do cotidiano, da memória e de gente simples, com linguagem acessível e muita sensibilidade.",
      "Cora Coralina morreu em 10 de abril de 1985. Seu exemplo mostra que nunca é tarde para realizar um sonho."
    ], "Texto informativo, baseado em dados históricos")
  ], [
    ob("Cora Coralina nasceu em:", "Goiás, em 1889|São Paulo, em 1965|Rio, em 1985|Minas, em 1900", "A"),
    ob("O primeiro livro foi publicado:", "aos 25 anos|aos 50 anos|aos 75 anos|aos 90 anos", "C"),
    ob("A obra de Cora Coralina valoriza:", "o cotidiano, a memória e gente simples|apenas a política|os reis|a guerra", "A"),
    ob("A mensagem final do texto é:", "nunca é tarde para realizar um sonho|é preciso nascer escritor|só jovens publicam|a escrita é difícil", "A"),
    dis("Por que a trajetória de Cora é considerada inspiradora?", "Porque publicou seu primeiro livro aos 75 anos, mostrando que é possível realizar sonhos em qualquer idade.", 3),
    dis("Que relação há entre a vida da autora e os temas de seus poemas?", "Ela viveu em uma cidade pequena e retrata em seus poemas o cotidiano, as memórias e as pessoas simples que conheceu.", 3)
  ], ["Interpretação", "Literatura"]);

  I("resenha-filme", "Resenha: um filme de ficção científica", "Resenha crítica: resumo, avaliação, argumentos e recomendação.", [
    H.t("Resenha: “A última estação”", [
      "“A última estação” (filme fictício) acompanha uma adolescente que descobre que sua cidade será submersa por uma barragem e decide reunir os vizinhos para registrar, em vídeo, as histórias do lugar antes que ele desapareça.",
      "A direção acerta ao alternar a luz quente das lembranças com a tonalidade fria do presente, e as atuações são naturais. Já o roteiro tropeça em um desfecho apressado que não aproveita o potencial dos personagens secundários.",
      "Mesmo com esse deslize, o filme emociona e provoca reflexão sobre memória e progresso. Recomendo a quem gosta de dramas com sensibilidade social."
    ], "Texto original (resenha de filme fictício)")
  ], [
    ob("O filme trata de:", "uma adolescente que tenta registrar as histórias de uma cidade antes que seja submersa|uma guerra|um campeonato|uma viagem à Lua", "A"),
    ob("A resenha elogia:", "a direção e as atuações|o desfecho|a trilha musical apenas|nada", "A"),
    ob("A crítica se dirige:", "ao roteiro, por um desfecho apressado|à direção|às atuações|à fotografia", "A"),
    ob("A resenha termina:", "com uma recomendação|com um resumo do final|com uma pergunta|com uma ordem", "A"),
    dis("O que significa o contraste entre a “luz quente” e a “tonalidade fria”?", "A luz quente remete às lembranças acolhedoras; a tonalidade fria, ao presente em que a cidade está ameaçada.", 3),
    dis("Escreva dois argumentos usados para avaliar o filme.", "Direção e atuações elogiadas; roteiro com desfecho apressado criticado.", 3)
  ], ["Interpretação", "Redação"]);

  I("bolhas-redes", "Texto de opinião: bolhas nas redes sociais", "Texto argumentativo: tese, causa, consequências e proposta.", [
    H.t("Dentro da bolha", [
      "Nas redes sociais, os conteúdos que aparecem para nós são escolhidos por algoritmos que aprendem o que gostamos de ver. Com o tempo, isso pode criar uma bolha: encontramos mais opiniões parecidas com as nossas e menos pontos de vista diferentes.",
      "O risco é confundir o que vemos com o que todos pensam. Quem só ouve quem concorda tende a achar que está sempre certo e a ver o diferente como inimigo, o que enfraquece o diálogo e a convivência.",
      "Escapar da bolha exige esforço: seguir fontes variadas, conferir informações e conversar com quem pensa diferente. Não é fácil, mas é a única forma de formar uma opinião realmente própria."
    ])
  ], [
    ob("O texto afirma que a “bolha” surge porque:", "algoritmos escolhem conteúdos de acordo com nossas preferências|todos pensam igual|as redes são proibidas|há censura", "A"),
    ob("Uma consequência apontada é:", "enfraquecimento do diálogo e da convivência|aumento da leitura|melhora das notas|mais amizades", "A"),
    ob("Para sair da bolha, o autor sugere:", "seguir fontes variadas e conversar com quem pensa diferente|abandonar a internet|ler uma única fonte|evitar debates", "A"),
    ob("A tese do texto é que:", "as bolhas podem empobrecer o diálogo, e é preciso esforço para sair delas|as redes são sempre ruins|os algoritmos são perfeitos|não há bolhas", "A"),
    dis("Explique a frase “confundir o que vemos com o que todos pensam”.", "Quem só vê opiniões parecidas com as suas pode achar que a maioria pensa como ele, ignorando outros pontos de vista.", 3),
    dis("Você já percebeu uma “bolha” em suas redes? Comente em cinco linhas.", "Resposta pessoal.", 6)
  ], ["Interpretação", "Redação"]);
})();
