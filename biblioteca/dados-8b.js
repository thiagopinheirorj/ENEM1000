/* 8º ano · Interpretação de texto (18 materiais). Textos originais, fictícios, recontos ou de autores em domínio público. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("8"), ob = H.ob, dis = H.dis;

  function I(id, titulo, resumo, texto, qs, assunto, intro) {
    var b = [H.i(intro || "Leia o texto com atenção e responda às questões.")].concat(texto);
    b.push(H.qs(qs));
    Y.m("interpretacao", "i-" + id, titulo, assunto || ["Interpretação"], resumo, b);
  }

  I("conto-fantastico", "Conto fantástico: o espelho do corredor", "Narrativa fantástica: fato real × inexplicável, ambiguidade e suspense.", [
    H.t("O espelho do corredor", [
      "Desde que se mudou para o apartamento antigo, Lúcia estranhava o espelho do corredor: um espelho oval, de moldura escura, que ela nunca tinha visto antes. Pensou que fosse da antiga moradora e decidiu tirá-lo na semana seguinte.",
      "Na terça, ao passar diante dele, notou que o reflexo atrasava meio segundo em relação a seus movimentos. Riu de si mesma, atribuiu o efeito ao cansaço e foi dormir. Na quarta, o atraso era maior; na quinta, o reflexo já a esperava na porta do corredor, imóvel, de braços cruzados.",
      "Lúcia nunca mais passou por ali. Mas, às vezes, quando acorda de madrugada, ouve passos lentos, de alguém que ainda tenta aprender a andar como ela."
    ])
  ], [
    ob("O que Lúcia estranhava no apartamento?", "O barulho dos vizinhos|O espelho do corredor|A cor das paredes|O tamanho da cozinha", "B"),
    ob("O elemento fantástico do conto é:", "o reflexo que passa a agir por conta própria|a mudança de apartamento|o cansaço de Lúcia|a antiga moradora", "A"),
    ob("A expressão “atribuiu o efeito ao cansaço” mostra que Lúcia:", "acreditou logo no sobrenatural|tentou explicar o fato de modo racional|fugiu do apartamento|contou a todos", "B"),
    ob("O clima do conto é de:", "alegria|humor|suspense e estranheza|nostalgia", "C"),
    dis("Como o atraso do reflexo evolui ao longo da semana? Que efeito isso cria?", "Começa com meio segundo, aumenta e termina com o reflexo agindo sozinho; cria tensão crescente e suspense.", 4),
    dis("O final deixa uma dúvida. Qual?", "Se o reflexo realmente ganhou vida ou se tudo é imaginação de Lúcia; o narrador não confirma.", 3)
  ], ["Interpretação", "Literatura"]);

  I("cronica-feira", "Crônica: sábado de manhã na feira", "Crônica do cotidiano: observação de cenas, humor suave e reflexão.", [
    H.t("Sábado de manhã na feira", [
      "A feira acorda antes do bairro. Às seis, já tem fiscal de tomate, dona de couve e menino de carrinho. O barulho é um concerto sem maestro: “Olha a banana!”, “Leva cinco, paga quatro!”, e o ronco da sanfona do cego que, há trinta anos, toca sempre a mesma música.",
      "Gosto de passar pela barraca do seu Ademar, o das frutas. Ele não tem balança digital, mas tem uma memória de gente: sabe que a Dona Rita gosta de mamão maduro e que o doutor do 502 compra manga mole para fazer vitamina.",
      "Aprendi na feira o que nenhum supermercado me ensinou: que comprar é, antes de tudo, conversar."
    ])
  ], [
    ob("O ambiente descrito é:", "um supermercado|uma feira|uma escola|um banco", "B"),
    ob("A expressão “um concerto sem maestro” é uma:", "comparação ou metáfora do barulho organizado|crítica ao governo|descrição de uma orquestra real|pergunta", "A"),
    ob("O que se destaca em seu Ademar?", "A balança digital|A memória sobre o gosto dos clientes|O preço baixo|A rapidez", "B"),
    ob("O narrador conta a história em:", "1ª pessoa|2ª pessoa|3ª pessoa apenas|não há narrador", "A"),
    dis("Explique a frase final: “comprar é, antes de tudo, conversar”.", "Para o narrador, a feira valoriza o contato humano: comprar envolve conversar, conhecer o freguês, algo que ele não encontra no supermercado.", 4),
    dis("Que sentidos (visão, audição, olfato…) aparecem no texto? Dê exemplos.", "Audição (gritos, sanfona), visão (barracas, frutas) e, indiretamente, olfato e paladar (frutas).", 3)
  ]);

  I("noticia-sensor", "Notícia: estudantes criam sensor para plantas", "Notícia de ciência e tecnologia: fato, fonte, objetivo e resultados.", [
    H.t("Estudantes criam sensor que avisa quando a planta precisa de água", [
      "Alunos do 8º ano da Escola Municipal Cecília Meireles criaram um sensor de umidade para a horta da escola. O aparelho, feito com materiais de baixo custo, acende uma luz vermelha quando o solo está seco.",
      "O projeto foi desenvolvido nas aulas de Ciências e de Tecnologia, com orientação do professor Renato Lima. “O objetivo era evitar o desperdício de água”, explicou o aluno Caio, de 13 anos.",
      "Segundo a escola, o dispositivo será apresentado em uma feira de ciências regional no próximo mês."
    ], "Texto original, criado para esta atividade (fictício)")
  ], [
    ob("O fato central da notícia é:", "a criação de um sensor de umidade|a abertura de uma feira|a reforma da horta|a mudança do professor", "A"),
    ob("Quem orientou o projeto?", "O aluno Caio|O professor Renato Lima|A diretora|Um engenheiro", "B"),
    ob("A luz vermelha acende quando:", "o solo está seco|chove|a planta cresce|é de noite", "A"),
    ob("O objetivo do projeto, segundo Caio, é:", "ganhar um prêmio|evitar o desperdício de água|vender o aparelho|decorar a horta", "B"),
    dis("Quando e onde o sensor será apresentado?", "No mês seguinte, em uma feira de ciências regional.", 2),
    dis("Por que a notícia cita a fala do aluno Caio?", "Para dar voz ao participante do projeto, explicar o objetivo e dar credibilidade ao texto.", 3)
  ]);

  I("reportagem-lixo-eletronico", "Reportagem: lixo eletrônico", "Reportagem informativa: problema, causas e orientações ao leitor.", [
    H.t("O destino dos eletrônicos velhos", [
      "Celulares, computadores e pilhas fazem parte do dia a dia, mas, quando deixam de funcionar, muita gente não sabe o que fazer com eles. Esses aparelhos são chamados de lixo eletrônico.",
      "O problema é que eles contêm substâncias como chumbo e mercúrio, que podem contaminar o solo e a água se forem jogadas no lixo comum. Ao mesmo tempo, guardam materiais valiosos, como o cobre, que podem ser reaproveitados.",
      "Por isso, o ideal é levar os aparelhos a pontos de coleta específicos, oferecidos por lojas, escolas e prefeituras, que enviam o material para reciclagem."
    ], "Texto informativo")
  ], [
    ob("O assunto do texto é:", "o consumo de energia|o descarte de aparelhos eletrônicos|a invenção do celular|a compra de computadores", "B"),
    ob("Por que o lixo eletrônico é um problema?", "Contém substâncias que podem contaminar solo e água.|Ocupa muito espaço nas casas.|É barato.|Não pode ser consertado.", "A"),
    ob("A palavra //reaproveitados// indica que os materiais:", "serão enterrados|podem ser usados de novo|são tóxicos|são raros", "B"),
    ob("A solução proposta pelo texto é:", "jogar no lixo comum|levar a pontos de coleta específicos|queimar os aparelhos|guardar para sempre", "B"),
    dis("Cite duas substâncias perigosas presentes nos eletrônicos.", "Chumbo e mercúrio.", 2),
    dis("Por que o texto diz que o lixo eletrônico também tem valor?", "Porque contém materiais, como o cobre, que podem ser reciclados e reaproveitados.", 3)
  ]);

  I("artigo-leitura", "Artigo de opinião: leitura obrigatória?", "Tese, argumentos, concessão e conclusão; vocabulário argumentativo.", [
    H.t("Leitura obrigatória?", [
      "Muitos jovens torcem o nariz para a leitura obrigatória da escola. Para eles, ler por obrigação tira o prazer do livro. Defendo, porém, que a leitura obrigatória cumpre um papel importante e que o problema está no modo como ela é conduzida.",
      "É verdade que ninguém gosta de ser forçado a nada. Mas o gosto pela leitura também se constrói: quem nunca foi apresentado a um clássico dificilmente saberá se vai gostar dele. A escola, nesse sentido, funciona como uma ponte entre o aluno e livros que ele talvez nunca escolheria sozinho.",
      "Logo, a solução não é eliminar a obrigatoriedade, mas combiná-la com liberdade: um livro obrigatório por bimestre e outro de livre escolha. Assim, o jovem lê o que precisa e o que deseja."
    ])
  ], [
    ob("A tese do autor é que:", "a leitura obrigatória deve acabar|a leitura obrigatória é importante, mas deve ser mais bem conduzida|só se deve ler por prazer|a escola não deve indicar livros", "B"),
    ob("Qual trecho apresenta uma concessão?", "“É verdade que ninguém gosta de ser forçado a nada.”|“Defendo, porém…”|“Logo, a solução…”|“Assim, o jovem lê…”", "A"),
    ob("A palavra //Logo//, no último parágrafo, indica:", "oposição|conclusão|causa|exemplo", "B"),
    ob("A escola é comparada a:", "uma ponte|um muro|uma prisão|um jardim", "A"),
    dis("Que solução o autor propõe?", "Combinar um livro obrigatório por bimestre com outro de livre escolha.", 3),
    dis("Você concorda com a proposta do autor? Justifique em cinco linhas.", "Resposta pessoal, com posicionamento claro e argumento.", 6)
  ], ["Interpretação", "Redação"]);

  I("carta-aberta", "Carta aberta ao prefeito: uma quadra para o bairro", "Carta aberta: remetente coletivo, pedido, argumentos e linguagem formal.", [
    H.t("Carta aberta ao prefeito", [
      "Ao Senhor Prefeito,",
      "Nós, estudantes da Escola Municipal Rio Claro, escrevemos para pedir a construção de uma quadra esportiva coberta em nosso bairro. Hoje, os jovens daqui jogam bola na rua, entre carros e buracos, o que é perigoso e limita as opções de lazer.",
      "Acreditamos que a quadra contribuiria para a saúde, a segurança e a convivência da comunidade, além de abrir espaço para campeonatos e atividades culturais. Pedimos, portanto, que a prefeitura inclua essa obra no orçamento do próximo ano.",
      "Certos de sua atenção, subscrevemo-nos,\nOs alunos do 8º ano."
    ], "Texto original (carta fictícia)")
  ], [
    ob("Quem assina a carta?", "O prefeito|Os alunos do 8º ano|A diretora|Os moradores", "B"),
    ob("O pedido central da carta é:", "reforma da escola|construção de uma quadra esportiva coberta|mais professores|ônibus escolar", "B"),
    ob("A palavra //portanto// introduz:", "um exemplo|uma conclusão que leva ao pedido|uma oposição|uma data", "B"),
    ob("A linguagem da carta é:", "informal, de gírias|formal, adequada a uma autoridade|poética|técnica", "B"),
    dis("Que problemas os alunos apontam na situação atual?", "Jogam bola na rua, entre carros e buracos, o que é perigoso e limita o lazer.", 3),
    dis("Cite dois benefícios que, segundo a carta, a quadra traria.", "Saúde, segurança, convivência e atividades culturais (dois deles).", 2)
  ], ["Interpretação", "Redação"]);

  I("poema-meus-oito-anos", "Poema: Meus oito anos", "Poema romântico: saudade, infância, imagens da natureza e rima.", [
    H.poema("Meus oito anos", "Oh! que saudades que eu tenho\nDa aurora da minha vida,\nDa minha infância querida\nQue os anos não trazem mais!\n\nQue amor, que sonhos, que flores,\nNaquelas tardes fagueiras\nÀ sombra das bananeiras,\nDebaixo dos laranjais!", "Casimiro de Abreu (1839–1860), trecho")
  ], [
    ob("O sentimento predominante no poema é:", "raiva|saudade|medo|ironia", "B"),
    ob("“Aurora da minha vida” é uma metáfora para:", "o amanhecer|a infância|a velhice|o futuro", "B"),
    ob("Que palavras rimam na 1ª estrofe?", "tenho e vida|vida e querida|querida e mais|anos e mais", "B"),
    ob("A natureza no poema aparece por meio de:", "bananeiras e laranjais|montanhas e mares|desertos|cidades", "A"),
    dis("Que ideia o verso “Que os anos não trazem mais!” expressa?", "Que a infância não volta: a passagem do tempo é irreversível, e o eu lírico sente falta dela.", 3),
    dis("Esse poema é do Romantismo. Que características românticas você percebe?", "Subjetivismo, saudade, idealização da infância e exaltação da natureza.", 4)
  ], ["Interpretação", "Literatura"]);

  I("poema-cidade-grande", "Poema: cidade grande", "Poema contemporâneo em versos livres: imagens urbanas e sentido.", [
    H.poema("Cidade grande", "A cidade é um bicho que não dorme:\nrosna de buzina, boceja de neon,\nengole gente na boca do metrô\ne cospe todo mundo de volta, com pressa.\n\nNo meio do barulho,\num menino assobia\nsem saber que, por um instante,\né ele quem manda no silêncio.", "Poema original")
  ], [
    ob("O poema compara a cidade a:", "um bicho|uma máquina|um rio|um jardim", "A"),
    ob("O verso “engole gente na boca do metrô” é:", "uma personificação|uma ironia|um eufemismo|uma comparação", "A"),
    ob("O poema é composto por versos:", "rimados em todas as estrofes|livres, sem rimas obrigatórias|de sete sílabas|apenas em redondilha", "B"),
    ob("Na 2ª estrofe, o menino que assobia representa:", "o caos urbano|um momento de calma no meio do barulho|um problema|uma ameaça", "B"),
    dis("Que sensação o poema transmite sobre a cidade grande?", "Agitação, barulho, pressa e anonimato, mas com um respiro de beleza (o menino que assobia).", 4),
    dis("Explique a imagem “é ele quem manda no silêncio”.", "No meio do barulho, o assobio cria uma pausa; o menino parece “controlar” o silêncio por um instante.", 3)
  ], ["Interpretação", "Literatura"]);

  I("charge-wifi", "Charge: sem sinal", "Leitura de charge: crítica social, humor e intertextualidade (texto descritivo).", [
    H.t("Charge (descrição)", [
      "**Cenário:** uma praça com árvores floridas. Em um banco, três jovens olham para os celulares. Atrás deles, um velho segura um balão colorido.",
      "**Placa na árvore:** “Wi-Fi grátis. Senha: respire fundo”.",
      "**Fala de um jovem, sem tirar os olhos da tela:** “Que praça sem graça! Nem tem sinal.”"
    ], "Texto original (descrição de charge fictícia)")
  ], [
    ob("A crítica da charge se dirige:", "à falta de praças|ao uso excessivo do celular que impede de perceber o que está em volta|à poluição|à violência", "B"),
    ob("A placa com a frase “senha: respire fundo” é:", "uma ironia que sugere aproveitar o presente|uma instrução técnica|um aviso de perigo|uma propaganda", "A"),
    ob("A fala do jovem revela que ele:", "gosta da praça|não percebe a beleza do lugar|quer ir embora|se divertiu", "B"),
    ob("O balão do velho simboliza:", "a simplicidade e a alegria longe das telas|a pressa|o perigo|a tecnologia", "A"),
    dis("Que contraste existe entre os jovens e o velho?", "Os jovens estão presos às telas; o velho, com um balão, aproveita o espaço da praça.", 3),
    dis("Que mensagem a charge transmite?", "Que a tecnologia, em excesso, nos afasta do mundo real e das coisas simples.", 3)
  ]);

  I("apologo-linha-agulha", "Apólogo: a linha e a agulha", "Reconto de um apólogo de Machado de Assis: personificação, moral e crítica social.", [
    H.t("A linha e a agulha", [
      "Uma agulha e uma linha trabalhavam juntas no vestido de uma baronesa. A agulha, vaidosa, dizia que era ela quem abria o caminho no tecido e que a linha só a seguia. A linha, com paciência, respondia que, sem ela, nada seria unido: a agulha furava, mas era a linha que costurava.",
      "Terminado o vestido, a baronesa o vestiu e foi ao baile, onde todos admiraram a roupa, sem lembrar de quem a fizera. Quanto à agulha, foi guardada na caixa de costura; a linha, que ficara no vestido, ainda passeou pelo salão.",
      "A agulha resmungou, mas entendeu: quem abre o caminho nem sempre é quem recebe o aplauso."
    ], "Reconto adaptado do apólogo “Um apólogo” (1885), de Machado de Assis")
  ], [
    ob("Em um apólogo, objetos ou animais:", "agem como pessoas para transmitir uma lição|apenas descrevem a natureza|contam notícias|dão instruções", "A"),
    ob("A agulha representa quem:", "é humilde|é vaidoso e se acha mais importante|é invisível|é ajudante", "B"),
    ob("O final mostra que:", "a linha foi mais valorizada que a agulha|a agulha foi premiada|ninguém foi reconhecido|a baronesa os esqueceu", "A"),
    ob("A lição do texto é:", "o reconhecimento nem sempre vai a quem abre o caminho|a vaidade é sempre premiada|a linha é inútil|o baile é perigoso", "A"),
    dis("Que recurso literário o autor usa ao fazer a agulha e a linha falarem?", "Personificação (ou prosopopeia).", 2),
    dis("A quem você acha que a linha e a agulha representam na vida real?", "Resposta pessoal. Exemplo: quem trabalha nos bastidores × quem recebe os aplausos.", 4)
  ], ["Interpretação", "Literatura"]);

  I("lenda-curupira", "Lenda: o Curupira", "Lenda do folclore brasileiro: protetor da floresta, explicação e simbolismo.", [
    H.t("O Curupira", [
      "Segundo a tradição indígena, o Curupira é um protetor das florestas e dos animais. Tem os cabelos cor de fogo e, para confundir quem o segue, os pés virados para trás: quem tenta seguir suas pegadas acaba andando na direção oposta.",
      "Dizem que o Curupira castiga os caçadores que matam por esporte e os que derrubam árvores além do necessário. Quem se perde na mata, ouvindo assobios estranhos, sabe que ele está por perto.",
      "Por isso, em muitas comunidades, a lenda serve para ensinar respeito à natureza."
    ], "Texto informativo, baseado na tradição do folclore brasileiro")
  ], [
    ob("O Curupira é:", "um caçador|um protetor da floresta|um animal|um pescador", "B"),
    ob("Por que ele tem os pés virados para trás?", "Para confundir quem o segue|Porque nasceu assim|Para correr mais|Para voar", "A"),
    ob("A lenda serve, em muitas comunidades, para:", "ensinar respeito à natureza|ensinar a caçar|vender madeira|assustar crianças apenas", "A"),
    ob("Quem o Curupira castiga?", "Os visitantes|Os caçadores que matam por esporte|As crianças|Os pescadores", "B"),
    dis("Que fenômeno a lenda explica ou ajuda a entender?", "Por que as pessoas se perdem na mata e a importância de respeitar a natureza.", 3),
    dis("Que elementos fantásticos aparecem no texto?", "Cabelos de fogo, pés virados para trás, assobios na mata.", 2)
  ], ["Interpretação", "Literatura"]);

  I("entrevista-cientista", "Entrevista: uma bióloga fala sobre os rios", "Entrevista de divulgação científica: perguntas, respostas e informações.", [
    H.t("Uma conversa com a bióloga Helena", [
      "— Por que os rios são tão importantes?\n— Porque abastecem cidades, alimentam a agricultura e abrigam uma enorme diversidade de seres vivos.",
      "— O que mais ameaça os rios hoje?\n— A poluição e a retirada da mata ciliar, aquela vegetação que protege as margens. Sem ela, a terra desmorona e a água fica turva.",
      "— O que um estudante pode fazer?\n— Descartar o lixo corretamente, economizar água e participar de ações de limpeza. Pequenas atitudes, quando repetidas por muita gente, fazem diferença."
    ], "Texto original (entrevista fictícia)")
  ], [
    ob("O que é a mata ciliar?", "Uma floresta no alto das montanhas|A vegetação que protege as margens dos rios|Um tipo de peixe|Um tipo de poluição", "B"),
    ob("Qual é uma das ameaças aos rios, segundo Helena?", "A poluição|O excesso de peixes|A falta de pesca|O calor", "A"),
    ob("Que ação Helena sugere ao estudante?", "Evitar rios|Descartar o lixo corretamente|Pescar mais|Construir barragens", "B"),
    ob("O travessão no texto indica:", "mudança de quem fala|dúvida|lista|data", "A"),
    dis("Por que a mata ciliar é importante?", "Porque protege as margens: sem ela, a terra desmorona e a água fica turva.", 3),
    dis("Formule uma pergunta que você faria à bióloga.", "Resposta pessoal, coerente com o tema.", 2)
  ]);

  I("ciencia-vacinas", "Divulgação científica: como funcionam as vacinas", "Texto expositivo: causa e consequência, vocabulário científico e comparação.", [
    H.t("Como as vacinas funcionam", [
      "As vacinas “treinam” o sistema imunológico sem causar a doença. Elas apresentam ao corpo uma versão enfraquecida ou inativada do micro-organismo, ou apenas uma parte dele, ou ainda instruções para que o próprio corpo fabrique essa parte.",
      "Ao reconhecer esse “alvo”, o organismo produz anticorpos e células de memória. Assim, quando entra em contato com o micro-organismo verdadeiro, o sistema imunológico responde mais rápido e com mais força, o que reduz o risco de a pessoa adoecer gravemente.",
      "Por isso, a vacinação protege não só quem se vacina, mas também quem está em volta, ao dificultar a circulação de doenças."
    ], "Texto informativo")
  ], [
    ob("As vacinas servem para:", "causar a doença|treinar o sistema imunológico|substituir remédios|aumentar o apetite", "B"),
    ob("As células de memória permitem que o corpo:", "esqueça a doença|responda mais rápido ao micro-organismo verdadeiro|durma melhor|elimine os remédios", "B"),
    ob("A frase “treinam o sistema imunológico” usa:", "personificação ou metáfora (treinar)|ironia|exagero|comparação com conectivo", "A"),
    ob("A vacinação protege também quem está em volta porque:", "dificulta a circulação de doenças|elimina todos os micro-organismos|substitui a higiene|dá imunidade eterna", "A"),
    dis("Explique, com suas palavras, como uma vacina funciona.", "Apresenta ao corpo uma versão inofensiva ou parte do micro-organismo; o sistema imunológico produz anticorpos e células de memória, e responde melhor quando encontra o micro-organismo verdadeiro.", 5),
    dis("Por que a vacinação é importante para a coletividade?", "Porque, ao reduzir o número de pessoas que adoecem, diminui a circulação da doença e protege também quem não pode se vacinar.", 4)
  ]);

  I("campanha-desperdicio", "Campanha: contra o desperdício de alimentos", "Texto publicitário: slogan, argumento, imperativo e público-alvo.", [
    H.t("Campanha", [
      "**Prato vazio, mundo cheio de futuro.**",
      "Todos os dias, toneladas de comida vão parar no lixo, enquanto muita gente passa fome. Planeje as compras, aproveite sobras e doe o que não for usar.",
      "**Cada garfada conta. Não desperdice!**"
    ], "Texto original (campanha fictícia)")
  ], [
    ob("A finalidade do texto é:", "vender comida|convencer o público a evitar o desperdício|contar uma história|informar a data de um evento", "B"),
    ob("O slogan “Prato vazio, mundo cheio de futuro” sugere que:", "comer tudo ajuda a construir um futuro melhor|devemos jejuar|a comida é cara|pratos vazios são sujos", "A"),
    ob("As formas //planeje, aproveite, doe// estão no:", "imperativo|infinitivo|passado|futuro", "A"),
    ob("O contraste usado como argumento é:", "comida no lixo × pessoas com fome|campo × cidade|rico × pobre apenas|dia × noite", "A"),
    dis("A quem o texto se dirige?", "Ao público em geral, especialmente quem compra e prepara alimentos.", 2),
    dis("Crie outro slogan para a mesma campanha.", "Resposta pessoal. Exemplo: “Sobrou? Compartilhe!”", 2)
  ]);

  I("texto-eca", "Texto normativo: direito à educação (ECA)", "Leitura de texto legal: linguagem, direitos e finalidade.", [
    H.t("Direito à educação", [
      "A criança e o adolescente têm direito à educação, visando ao pleno desenvolvimento de sua pessoa, preparo para o exercício da cidadania e qualificação para o trabalho.",
      "São assegurados, entre outros, a igualdade de condições para o acesso e a permanência na escola e o direito de ser respeitado por seus educadores."
    ], "Texto adaptado do Estatuto da Criança e do Adolescente (Lei nº 8.069/1990), art. 53")
  ], [
    ob("O texto trata:", "de um direito de crianças e adolescentes|de um dever dos pais apenas|de um poema|de uma notícia", "A"),
    ob("A finalidade da educação, segundo o texto, inclui:", "o preparo para a cidadania|apenas decorar conteúdos|a venda de livros|a competição", "A"),
    ob("A expressão “igualdade de condições” significa que:", "todos devem ter as mesmas oportunidades de acesso à escola|todos devem ter as mesmas notas|só alguns estudam|a escola é opcional", "A"),
    ob("A linguagem do texto é:", "informal|formal, própria de documentos legais|poética|de gíria", "B"),
    dis("Que direito os estudantes têm em relação aos educadores?", "O direito de ser respeitados.", 2),
    dis("Explique com suas palavras o que é “pleno desenvolvimento”.", "É o desenvolvimento completo da pessoa, em todos os aspectos (intelectual, social, emocional).", 3)
  ]);

  I("biografia-carolina", "Biografia: Carolina Maria de Jesus", "Biografia de escritora brasileira: fatos, contexto e importância.", [
    H.t("Carolina Maria de Jesus", [
      "Carolina Maria de Jesus nasceu em 14 de março de 1914, em Sacramento, Minas Gerais. De família pobre e pouco tempo de escola, aprendeu a ler e a escrever e mudou-se para São Paulo, onde morou na favela do Canindé e sustentou os filhos como catadora de papel.",
      "Mesmo exausta, anotava em cadernos o que via e vivia: fome, desigualdade, esperança. Esses diários foram publicados em 1960 com o título //Quarto de Despejo//, e o livro virou sucesso no Brasil e no exterior.",
      "Carolina morreu em 13 de fevereiro de 1977. Hoje, é reconhecida como uma das vozes mais importantes da literatura brasileira."
    ], "Texto informativo, baseado em dados históricos")
  ], [
    ob("Carolina Maria de Jesus sustentava os filhos como:", "professora|catadora de papel|jornalista|enfermeira", "B"),
    ob("Quarto de Despejo é:", "um romance de aventura|um conjunto de diários|um poema|uma peça de teatro", "B"),
    ob("A publicação do livro ocorreu em:", "1914|1960|1977|1990", "B"),
    ob("O texto sugere que a obra de Carolina é importante porque:", "retrata a realidade social vista por quem a vivia|ensina receitas|conta uma lenda|descreve viagens", "A"),
    dis("Que temas Carolina registrava em seus cadernos?", "Fome, desigualdade e esperança.", 2),
    dis("Por que a trajetória de Carolina é considerada inspiradora?", "Resposta pessoal. Exemplo: apesar das dificuldades, ela escreveu, publicou e deu voz a quem era invisibilizado.", 4)
  ], ["Interpretação", "Literatura"]);

  I("resenha-livro", "Resenha: um livro de aventura", "Resenha crítica: resumo, opinião, argumentos e recomendação.", [
    H.t("Resenha: “O mapa das ilhas esquecidas”", [
      "“O mapa das ilhas esquecidas”, da autora fictícia Marina Duarte, conta a história de três amigos que encontram, no sótão da escola, um mapa antigo. Seguindo as pistas, eles atravessam um arquipélago imaginário e descobrem que o verdadeiro tesouro é a amizade.",
      "A narrativa é ágil e cheia de reviravoltas, mas alguns diálogos soam artificiais. Mesmo assim, as descrições das ilhas são tão vivas que fazem o leitor querer embarcar na viagem.",
      "Recomendo o livro a quem gosta de aventura e mistério e está começando a ler romances mais longos."
    ], "Texto original (resenha de obra fictícia)")
  ], [
    ob("A resenha apresenta:", "o resumo da obra e a opinião do autor da resenha|apenas o resumo|apenas a opinião|uma receita", "A"),
    ob("A resenha critica:", "as descrições das ilhas|alguns diálogos artificiais|o mapa|a amizade", "B"),
    ob("O final da obra, segundo a resenha, é:", "o tesouro é ouro|o tesouro é a amizade|um mapa|uma ilha", "B"),
    ob("A recomendação final é para quem:", "não gosta de ler|gosta de aventura e mistério|só lê poesia|odeia viagens", "B"),
    dis("O que a resenha elogia?", "A agilidade da narrativa, as reviravoltas e as descrições vivas das ilhas.", 3),
    dis("Que livro ou filme você resenharia? Justifique em três linhas.", "Resposta pessoal.", 4)
  ], ["Interpretação", "Redação"]);

  I("fake-news", "Divulgação: como identificar notícias falsas", "Texto informativo e instrucional: critérios para checar informações.", [
    H.t("Como identificar notícias falsas", [
      "Antes de compartilhar uma mensagem, vale desconfiar. Notícias falsas costumam ter títulos exagerados, pouca informação sobre quem escreveu e apelos emocionais, como medo ou raiva.",
      "Para checar, confira se outros veículos confiáveis trazem a mesma informação, procure a data e a fonte do texto e desconfie de imagens fora de contexto. Se a notícia pedir que você a encaminhe “urgentemente”, é sinal de alerta.",
      "Compartilhar apenas o que foi verificado é uma forma de proteger a si mesmo e a quem recebe a mensagem."
    ], "Texto informativo")
  ], [
    ob("Uma característica das notícias falsas, segundo o texto, é:", "títulos exagerados e apelos emocionais|fontes claras|datas precisas|linguagem neutra", "A"),
    ob("Para verificar uma notícia, o leitor deve:", "compartilhar logo|conferir se outros veículos confiáveis trazem a mesma informação|ignorar a data|confiar na imagem", "B"),
    ob("O pedido de encaminhar “urgentemente” é:", "sinal de alerta|prova de veracidade|regra do jornalismo|norma da internet", "A"),
    ob("O texto tem finalidade de:", "narrar uma história|orientar o leitor|vender um produto|emocionar", "B"),
    dis("Por que desconfiar de imagens fora de contexto?", "Porque uma imagem pode ser real, mas usada com outro sentido para enganar.", 3),
    dis("Crie uma regra sua para checar informações antes de compartilhar.", "Resposta pessoal.", 2)
  ], ["Interpretação", "Redação"]);
})();
