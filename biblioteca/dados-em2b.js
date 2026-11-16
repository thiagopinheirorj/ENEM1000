/* 2º ano do Ensino Médio · Interpretação de texto e literatura (20 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("2EM"), ob = H.ob, dis = H.dis;

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

  I("alvares-lembranca", "Lembrança de morrer, de Álvares de Azevedo", "Romantismo (2ª geração): mal do século, morte, subjetivismo.", [
    H.poema("Lembrança de morrer", "Quando em meu peito rebentar-se a fibra,\nQue o espírito enlaça à dor vivente,\nNão derramem por mim nenhuma lágrima\nEm pálpebra demente.", "Álvares de Azevedo (1831–1852), primeira estrofe")
  ], [
    ob("O tema do poema é:", "a morte do próprio eu lírico|a pátria|o amor feliz|a natureza", "A"),
    ob("O eu lírico pede que:", "não chorem por ele|chorem muito|o enterrem no campo|o esqueçam", "A"),
    ob("A expressão “fibra que o espírito enlaça à dor vivente” remete à:", "vida como sofrimento|alegria|infância|riqueza", "A"),
    ob("O sentimento dominante é:", "pessimismo e desencanto|euforia|humor|ódio", "A"),
    dis("Que características da 2ª geração romântica aparecem nesse poema?", "Subjetivismo, pessimismo, tema da morte, “mal do século” e desejo de escapar da dor.", 4),
    dis("Que sentido tem a expressão “pálpebra demente”?", "A pálpebra de quem chora desesperadamente; a dor leva ao descontrole (demência).", 3)
  ]);

  I("i-juca-pirama", "I-Juca-Pirama, de Gonçalves Dias (Canto IV)", "Romantismo (1ª geração): indianismo, heroísmo e identidade nacional.", [
    H.poema("I-Juca-Pirama · Canto IV (abertura)", "Meu canto de morte,\nGuerreiros, ouvi:\nSou filho das selvas,\nNas selvas cresci;\nGuerreiros, descendo\nDa tribo tupi.", "Gonçalves Dias (1823–1864), I-Juca-Pirama (1851)")
  ], [
    ob("O eu lírico é:", "um guerreiro tupi que se apresenta|um colonizador|um poeta urbano|um padre", "A"),
    ob("A expressão “canto de morte” indica:", "o discurso antes do sacrifício|uma festa|um cântico religioso europeu|uma canção infantil", "A"),
    ob("O indígena é apresentado como:", "herói nacional|inimigo|vilão|figura cômica", "A"),
    ob("O verso curto e o ritmo marcado evocam:", "cantos de guerra indígenas|sermões|cantigas medievais|diálogos teatrais", "A"),
    dis("Como o poema constrói o indígena como símbolo nacional?", "Apresentando-o como guerreiro corajoso e identificado com a terra (“filho das selvas”), valores exaltados pelo nacionalismo romântico.", 4),
    dis("Que relação há entre natureza e identidade nesse trecho?", "A natureza (“selvas”) é a origem e o lar do guerreiro: ele se define por ela.", 3)
  ]);

  I("castro-alves-senhor-deus", "O Navio Negreiro, de Castro Alves (trecho)", "Romantismo (3ª geração): poesia condoreira, denúncia social e abolicionismo.", [
    H.poema("O Navio Negreiro (trecho)", "Senhor Deus dos desgraçados!\nDizei-me vós, Senhor Deus!\nSe é loucura... se é verdade\nTanto horror perante os céus?!", "Castro Alves (1847–1871), O Navio Negreiro, trecho")
  ], [
    ob("O eu lírico dirige-se:", "a Deus|ao rei|aos colonos|a um escravizador", "A"),
    ob("O tom do poema é:", "de indignação e denúncia|de humor|de saudade|de louvor ao tráfico", "A"),
    ob("A pergunta retórica “Se é loucura... se é verdade” expressa:", "perplexidade diante do horror da escravidão|dúvida científica|ironia|resignação", "A"),
    ob("Esse trecho pertence à poesia:", "condoreira, social e abolicionista|ultrarromântica|parnasiana|simbolista", "A"),
    dis("Que recursos o poeta utiliza para provocar o leitor?", "Invocação a Deus, perguntas retóricas, exclamações e linguagem emotiva, que despertam indignação.", 3),
    dis("Por que Castro Alves é chamado “poeta dos escravos”?", "Porque sua poesia denunciou a escravidão e defendeu a abolição.", 3)
  ]);

  I("iracema-abertura", "Iracema, de José de Alencar (abertura)", "Prosa romântica: linguagem poética, natureza e lenda do Ceará.", [
    H.t("Iracema (1865) · abertura", [
      "“Verdes mares bravios de minha terra natal, onde canta a jandaia nas frondes da carnaúba;",
      "Verdes mares, que brilhais como líquida esmeralda aos raios do Sol nascente, perlongando as alvas praias ensombradas de coqueiros;”"
    ], "José de Alencar (1829–1877), Iracema")
  ], [
    ob("A linguagem do trecho é:", "poética e lírica|técnica|jornalística|informal", "A"),
    ob("A natureza é descrita de forma:", "idealizada e exaltada|realista e crua|científica|irônica", "A"),
    ob("A expressão “líquida esmeralda” é:", "uma metáfora|uma comparação com conectivo|uma ironia|uma hipérbole técnica", "A"),
    ob("O texto evidencia características do:", "Romantismo (indianismo)|Realismo|Naturalismo|Parnasianismo", "A"),
    dis("Que sentimento o narrador demonstra pela “terra natal”?", "Amor, saudade e orgulho, com a natureza idealizada.", 3),
    dis("Por que a prosa de Alencar é descrita como “poética”?", "Pelo uso de imagens, ritmo e metáforas, próprias da poesia.", 3)
  ]);

  I("memorias-sargento", "Memórias de um Sargento de Milícias: abertura e contexto", "Prosa romântica urbana: humor, malandragem e crônica de costumes.", [
    H.t("Abertura", "“Era no tempo do rei.”", "Manuel Antônio de Almeida (1831–1861), Memórias de um Sargento de Milícias (1852–53)"),
    H.te("Contexto", ["O romance retrata o Rio de Janeiro no tempo de D. João VI (início do século XIX), com humor e personagens populares. Leonardo, o protagonista, é um “malandro” envolvido em intrigas, e a obra é considerada precursora do romance realista."])
  ], [
    ob("O romance se passa:", "no Rio de Janeiro do tempo do rei|no sertão|em Portugal|no Nordeste canavieiro", "A"),
    ob("O protagonista Leonardo é:", "um malandro envolvido em confusões|um herói idealizado|um índio guerreiro|um nobre", "A"),
    ob("A abertura “Era no tempo do rei” sugere:", "tom de narrativa popular e distanciamento temporal|um tom técnico|um poema|uma lei", "A"),
    ob("A obra se destaca por:", "retratar costumes populares com humor|exaltar o indígena|criticar a escravidão com violência|descrever batalhas", "A"),
    dis("Por que se diz que o romance antecipa o Realismo?", "Porque retrata a sociedade com personagens comuns, humor e ironia, sem idealização romântica.", 3),
    dis("O que é “malandragem” nesse contexto?", "Esperteza para driblar regras e se dar bem, comum nas figuras populares do romance.", 3)
  ]);

  I("machado-memorias-posstumas", "Memórias Póstumas de Brás Cubas: abertura", "Realismo: defunto-autor, ironia e inversão de convenções.", [
    H.t("Capítulo I · Óbito do autor (abertura)", "“Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte.”", "Machado de Assis (1839–1908), Memórias Póstumas de Brás Cubas (1881)")
  ], [
    ob("O narrador é:", "um defunto que conta sua vida|um jovem|um padre|uma criança", "A"),
    ob("A hesitação “nascimento ou morte” é:", "uma inversão irônica das convenções narrativas|um erro|uma dúvida técnica|uma ameaça", "A"),
    ob("O tom é:", "irônico e debochado|solene|ingênuo|pedagógico", "A"),
    ob("O romance inaugura o:", "Realismo no Brasil|Romantismo|Naturalismo|Parnasianismo", "A"),
    dis("Que efeito tem narrar a vida depois da morte?", "O narrador, livre de convenções, pode analisar a sociedade e a si mesmo com ironia e distanciamento.", 3),
    dis("Como esse trecho rompe com a narrativa romântica?", "Dispensa a ordem cronológica e a idealização, adotando um narrador cínico e metalinguístico.", 3)
  ]);

  I("dom-casmurro-abertura", "Dom Casmurro: abertura e o narrador pouco confiável", "Realismo: narrador em primeira pessoa, ambiguidade e ponto de vista.", [
    H.t("Capítulo I · Do título", "“Uma noite destas, vindo da cidade para o Engenho Novo, encontrei num trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu.”", "Machado de Assis, Dom Casmurro (1899)"),
    H.te("Contexto", ["Narrado por Bentinho (Dom Casmurro), o romance conta o amor de infância por Capitu e a suspeita de traição. Como só conhecemos a versão de Bentinho, o leitor fica na dúvida: Capitu traiu?"])
  ], [
    ob("O narrador é:", "Bentinho (Dom Casmurro)|Capitu|Escobar|um narrador onisciente", "A"),
    ob("A ambiguidade da obra reside em:", "não sabermos se Capitu traiu de fato|não sabermos quem é o narrador|ausência de personagens|falta de enredo", "A"),
    ob("O fato de o narrador ser personagem implica que:", "sua versão pode ser parcial|ele sabe tudo|ele é neutro|ele é confiável por definição", "A"),
    ob("O trecho de abertura é característico por:", "linguagem coloquial e tom de causerie|linguagem épica|linguagem científica|linguagem poética", "A"),
    dis("Por que Bentinho é considerado um narrador pouco confiável?", "Porque narra em primeira pessoa, movido por ciúme e mágoa, de modo parcial e carregado de suspeitas.", 4),
    dis("Que relação há entre a forma do narrador e a ambiguidade da obra?", "A narração em primeira pessoa impede o acesso à versão dos outros personagens, mantendo a dúvida sobre a traição.", 3)
  ]);

  I("cartomante-reconto", "A Cartomante, de Machado de Assis (reconto)", "Realismo: acaso, determinismo e ironia em um conto.", [
    H.t("A Cartomante (reconto)", [
      "O conto abre com uma epígrafe de Hamlet sobre “mais coisas no céu e na terra” do que sonha a filosofia. Camilo, funcionário público, tem um caso com Rita, mulher de seu amigo Vilela. Um dia, recebe um bilhete urgente de Vilela e, receoso de ter sido descoberto, consulta uma cartomante, que o tranquiliza.",
      "Confiante, Camilo vai à casa de Vilela e, para sua surpresa, encontra o amigo, que o mata, assim como Rita. A previsão tranquilizadora da cartomante falhou, e o conto ironiza a crença no sobrenatural."
    ], "Reconto adaptado do conto de Machado de Assis (1884)")
  ], [
    ob("O conto discute:", "o acaso e a superstição diante do destino|a escravidão|a pátria|a natureza", "A"),
    ob("A previsão da cartomante:", "falha, e Camilo é morto|se cumpre integralmente|é ignorada por todos|é falsa mas inofensiva", "A"),
    ob("A ironia do conto está em:", "o homem acreditar na previsão e morrer|a cartomante ser rica|o final feliz|o amor correspondido", "A"),
    ob("O conto apresenta traços do:", "Realismo, com crítica à sociedade e ao comportamento humano|Romantismo|Barroco|Arcadismo", "A"),
    dis("Que crítica o conto faz à superstição?", "Mostra que a confiança cega em previsões pode levar à morte, ironizando a crença no sobrenatural.", 3),
    dis("Por que o conto é considerado realista?", "Pela análise psicológica, pelo retrato de relações sociais e pela ausência de idealização.", 3)
  ]);

  I("cortico-resumo", "O Cortiço, de Aluísio Azevedo (resumo)", "Naturalismo: determinismo, coletividade e crítica social.", [
    H.t("O Cortiço (1890): resumo", [
      "O português João Romão enriquece explorando a escrava Bertoleza e construindo um cortiço. Ao lado, o comerciante Miranda, que sonha com ascensão social, vive em um sobrado. O cortiço cresce e vira personagem principal: um organismo vivo, com seus moradores, rixas, festas e lutas.",
      "A obra mostra como o meio social e econômico determina o comportamento humano. Ao final, João Romão, já rico, tenta se aproximar da elite, e Bertoleza, abandonada, se mata."
    ], "Resumo da obra de Aluísio Azevedo (1857–1913)")
  ], [
    ob("O cortiço é:", "uma coletividade que funciona como personagem|apenas cenário|um castelo|um engenho", "A"),
    ob("O Naturalismo aplica ao romance:", "o determinismo (meio, raça, momento)|a idealização romântica|a sátira política|a poesia simbolista", "A"),
    ob("João Romão é movido por:", "ambição e exploração|generosidade|amor|religiosidade", "A"),
    ob("O desfecho de Bertoleza revela:", "a crueldade de um sistema que descarta os explorados|um final feliz|uma vitória|uma reconciliação", "A"),
    dis("Que crítica social o romance faz?", "Denuncia a exploração do trabalho, a ambição e as condições precárias de moradia, em um sistema que favorece quem já tem poder.", 4),
    dis("Explique a ideia de que o ambiente determina o comportamento.", "Segundo o Naturalismo, o meio e as condições sociais moldam as ações das pessoas, como no cortiço.", 3)
  ]);

  I("ateneu-abertura", "O Ateneu, de Raul Pompeia: abertura", "Realismo/impressionismo: memória, escola como microcosmo e crítica social.", [
    H.t("Abertura", "“‘Vais encontrar o mundo’, disse-me meu pai, à porta do Ateneu. ‘Coragem para a luta.’”", "Raul Pompeia (1863–1895), O Ateneu (1888)")
  ], [
    ob("O Ateneu é descrito como:", "um microcosmo da sociedade|um hospital|uma igreja|um quartel", "A"),
    ob("A frase do pai sugere:", "que a escola será um lugar de lutas|que a escola é um paraíso|que o menino deve fugir|que a vida é fácil", "A"),
    ob("O romance é narrado por:", "Sérgio, em tom memorialista|um narrador onisciente|o pai|o diretor", "A"),
    ob("A obra critica:", "a hipocrisia e a competição do ambiente escolar|a vida no campo|a política imperial apenas|a religião apenas", "A"),
    dis("O que significa dizer que a escola é um “mundo”?", "Que reproduz os conflitos, as hierarquias e as injustiças da sociedade, em escala menor.", 3),
    dis("Que relação há entre a frase do pai e a visão realista?", "A vida é apresentada como luta e a escola como espaço de competição e dureza, sem idealização.", 3)
  ]);

  I("bilac-via-lactea", "Via Láctea (Olavo Bilac): ouvir estrelas", "Parnasianismo: soneto, forma e tema do olhar para o céu.", [
    H.poema("Via Láctea (trecho)", "“Ora (direis) ouvir estrelas! Certo\nPerdeste o senso!” E eu vos direi, no entanto,\nQue, para ouvi-las, muita vez desperto\nE abro as janelas, pálido de espanto...", "Olavo Bilac (1865–1918), primeira estrofe")
  ], [
    ob("O eu lírico responde a quem:", "duvida de que se possa “ouvir estrelas”|ao rei|ao pai|à amada", "A"),
    ob("“Ouvir estrelas” é uma:", "sinestesia/metáfora|comparação|ironia|catacrese", "A"),
    ob("O tom do poema é:", "dialogado e delicado|violento|satírico|religioso", "A"),
    ob("O soneto é característico do:", "Parnasianismo (e do Classicismo)|Barroco|Trovadorismo|Realismo", "A"),
    dis("Que sentido tem “pálido de espanto”?", "Reação intensa de admiração e emoção diante do espetáculo do céu.", 3),
    dis("Que característica parnasiana aparece na forma do poema?", "O soneto, o vocabulário elaborado e o cuidado com a métrica e a rima.", 3)
  ]);

  I("cruz-e-sousa-antifona", "Antífona, de Cruz e Sousa (abertura)", "Simbolismo: sinestesia, musicalidade, espiritualidade e imagens vagas.", [
    H.poema("Antífona (abertura)", "Ó Formas alvas, brancas, Formas claras\nDe luares, de neves, de neblinas!...\nÓ Formas vagas, fluidas, cristalinas...\nIncensos dos turíbulos das aras", "Cruz e Sousa (1861–1898), Broquéis (1893)")
  ], [
    ob("Predominam, no trecho, imagens:", "brancas, vagas e fluidas|violentas e urbanas|políticas|técnicas", "A"),
    ob("A repetição de “Ó Formas” é uma:", "anáfora|elipse|zeugma|ironia", "A"),
    ob("O poema apresenta traços do:", "Simbolismo|Realismo|Naturalismo|Arcadismo", "A"),
    ob("A sugestão em vez da descrição direta é característica:", "simbolista|parnasiana|realista|naturalista", "A"),
    dis("Que efeitos produzem a aliteração e as imagens vagas?", "Criam musicalidade e atmosfera onírica, sugerindo a transcendência e o mistério.", 3),
    dis("Que diferença há entre o Parnasianismo e o Simbolismo, a partir dos dois poemas (Bilac e Cruz e Sousa)?", "O Parnasianismo valoriza a forma objetiva e clara; o Simbolismo prefere a sugestão, a musicalidade e a espiritualidade.", 4)
  ]);

  I("alphonsus-ismalia", "Ismália, de Alphonsus de Guimaraens", "Simbolismo: loucura, lua, sonho e morte, com sonoridade.", [
    H.poema("Ismália (trecho)", "Quando Ismália enlouqueceu,\nPôs-se na torre a sonhar...\nViu uma lua no céu,\nViu outra lua no mar.", "Alphonsus de Guimaraens (1870–1921), primeira estrofe")
  ], [
    ob("Ismália, ao ver “duas luas”, simboliza:", "o desejo de alcançar o ideal|um erro de visão científica|a infância|a pátria", "A"),
    ob("A “torre” sugere:", "isolamento e elevação|uma prisão política|uma escola|uma igreja", "A"),
    ob("O tom do poema é:", "melancólico e onírico|jocoso|épico|satírico", "A"),
    ob("A estrofe apresenta:", "musicalidade e repetição de sons|linguagem técnica|descrição científica|diálogo", "A"),
    dis("O que representam a lua no céu e a lua no mar?", "O ideal e o reflexo (o sonho e a realidade); a personagem se perde entre os dois.", 4),
    dis("Que traços simbolistas você identifica?", "Imagens vagas, musicalidade, tema da morte, loucura e espiritualidade.", 3)
  ]);

  I("eca-queiros-basilio", "O Primo Basílio, de Eça de Queirós (resumo)", "Realismo português: crítica à burguesia e ao adultério romântico.", [
    H.t("O Primo Basílio (1878): resumo", [
      "Luísa, jovem casada com o engenheiro Jorge, entedia-se em Lisboa e se deixa seduzir pelo primo Basílio, que volta do estrangeiro. A empregada, Juliana, descobre as cartas do casal e passa a chantagear Luísa.",
      "Pressionada, Luísa adoece e morre, e a empregada também morre. Eça de Queirós critica, por meio da história, a hipocrisia da burguesia, a educação sentimental das mulheres e a influência do romantismo."
    ], "Resumo da obra de Eça de Queirós (1845–1900)")
  ], [
    ob("A obra é característica do:", "Realismo português|Romantismo|Barroco|Simbolismo", "A"),
    ob("A crítica de Eça se dirige a:", "hipocrisia da burguesia e a uma educação romântica das mulheres|ao clero apenas|aos militares|à monarquia apenas", "A"),
    ob("Juliana, a empregada, é:", "quem chantageia Luísa|a amiga|a mãe|a vizinha", "A"),
    ob("O romance se passa em:", "Lisboa|Rio de Janeiro|Paris|Coimbra", "A"),
    dis("Por que o adultério é um tema recorrente no Realismo?", "Porque permite criticar a hipocrisia e as convenções da sociedade burguesa, mostrando a distância entre aparência e realidade.", 3),
    dis("Compare o tratamento do amor no Romantismo e nessa obra.", "No Romantismo, o amor é idealizado; em O Primo Basílio, é analisado criticamente, mostrando suas consequências sociais.", 3)
  ]);

  I("charge-realismo-atual", "Charge: o espelho da sociedade (leitura no estilo ENEM)", "Leitura de charge: crítica social, intertextualidade e recursos visuais (descrição).", [
    H.t("Charge (descrição)", [
      "**Cenário:** uma exposição de arte. Em uma parede, um quadro mostra um espelho grande; na legenda: “Retrato da sociedade”. Os visitantes, ao olhar, veem apenas seus rostos concentrados nos celulares.",
      "**Fala de um guia:** “Observem como o artista foi fiel à realidade.”",
      "**Legenda:** “A arte que reflete o tempo.”"
    ], "Texto original (descrição de charge fictícia)")
  ], [
    ob("A crítica da charge se dirige:", "ao uso excessivo do celular que absorve a atenção das pessoas|à falta de museus|ao preço dos ingressos|à arte contemporânea apenas", "A"),
    ob("O espelho funciona como:", "metáfora do reflexo da própria sociedade|objeto decorativo|ferramenta de maquiagem|símbolo de beleza", "A"),
    ob("A fala do guia é:", "irônica, pois a “fidelidade” revela o retrato da distração|literal|técnica|poética", "A"),
    ob("A relação com o Realismo está em:", "o objetivo de refletir a realidade social|a idealização do passado|a fuga da realidade|o culto à natureza", "A"),
    dis("Que ideia de “realidade” a charge apresenta?", "Uma realidade em que as pessoas, absorvidas por telas, passam a ser o próprio retrato da sociedade.", 3),
    dis("Que relação há entre a charge e o objetivo do Realismo?", "Ambos buscam retratar criticamente a sociedade de seu tempo.", 3)
  ], ["Interpretação"]);

  I("noticia-mobilidade", "Notícia com dados: mobilidade urbana (estilo ENEM)", "Notícia com dados e fontes: causas, consequências e propostas.", [
    H.t("Cidades enfrentam lentidão no trânsito", [
      "Segundo um levantamento fictício feito em cinco capitais, o tempo médio de deslocamento diário de casa ao trabalho passou de 40 para 52 minutos em cinco anos. Entre as principais causas estão o aumento do número de carros e a falta de investimentos no transporte coletivo.",
      "Para o urbanista Marcos Teles, “cidades que priorizam o carro tendem a ficar mais lentas”. Ele defende a ampliação de corredores de ônibus e de ciclovias, além de políticas de integração entre modais."
    ], "Texto original (dados fictícios, criados para esta atividade)")
  ], [
    ob("O aumento do tempo médio de deslocamento foi de:", "12 minutos|10 minutos|15 minutos|20 minutos", "A"),
    ob("A causa apontada é:", "aumento de carros e falta de investimento no transporte coletivo|crise energética|chuvas|feriados", "A"),
    ob("A proposta do urbanista é:", "ampliar corredores de ônibus e ciclovias|proibir carros|reduzir ônibus|fechar ruas", "A"),
    ob("A citação do especialista tem a função de:", "dar credibilidade e argumento de autoridade|enfeitar|fazer humor|encerrar a notícia", "A"),
    dis("Calcule o aumento percentual do tempo de deslocamento.", "De 40 para 52 minutos: aumento de 12 minutos, ou 30%.", 3),
    dis("Que relação o texto estabelece entre priorizar o carro e a lentidão?", "Afirma que cidades que priorizam o carro tendem a ficar mais lentas, pois sobrecarregam as vias.", 3)
  ], ["Interpretação"]);

  I("artigo-saude-mental", "Artigo de opinião: saúde mental também se aprende", "Texto argumentativo: tese, causa e consequência, repertório e proposta.", [
    H.t("Saúde mental também se aprende", [
      "A saúde mental, durante muito tempo, foi tratada como assunto privado, quase um tabu. Hoje, porém, a ciência e a experiência cotidiana mostram que o sofrimento psíquico atinge pessoas de todas as idades e exige atenção coletiva.",
      "Como estabelece a Constituição de 1988, a saúde é direito de todos e dever do Estado. Isso significa que a escola, o posto de saúde e os serviços públicos devem oferecer acolhimento, e não apenas tratamento. Quando jovens aprendem a identificar emoções e a pedir ajuda, o risco de agravamento diminui.",
      "Portanto, é necessário incluir a educação socioemocional no currículo e ampliar o acesso a profissionais da área. Cuidar da mente é parte de cuidar da vida."
    ])
  ], [
    ob("A tese do texto é que:", "a saúde mental exige atenção coletiva e educação|a saúde mental é problema individual|o Estado não tem papel|a escola deve ignorar o tema", "A"),
    ob("O repertório utilizado é:", "a Constituição de 1988|uma letra de música|um filme|um poema", "A"),
    ob("A expressão “quase um tabu” sugere:", "assunto evitado|assunto banal|assunto agradável|assunto científico", "A"),
    ob("A proposta final é:", "incluir educação socioemocional e ampliar o acesso a profissionais|fechar serviços|cobrar por consultas|eliminar a escola", "A"),
    dis("Que argumento sustenta a tese?", "A saúde é direito e dever do Estado; a escola e os serviços devem acolher; jovens que aprendem a identificar emoções e a pedir ajuda têm menor risco de agravamento.", 4),
    dis("Que conectivos organizam o texto?", "“Hoje, porém”, “Como estabelece…”, “Quando…”, “Portanto”: marcam contraste, referência, condição e conclusão.", 3)
  ], ["Interpretação", "Redação"]);

  I("divulgacao-efeito-estufa", "Divulgação científica: o efeito estufa", "Texto expositivo: causa, consequência e vocabulário científico.", [
    H.t("O efeito estufa", [
      "O efeito estufa é um fenômeno natural: alguns gases da atmosfera, como o gás carbônico e o metano, retêm parte do calor emitido pela Terra e mantêm o planeta aquecido. Sem ele, a temperatura média seria muito mais baixa e a vida, como a conhecemos, seria difícil.",
      "O problema é que atividades humanas, como a queima de combustíveis fósseis e o desmatamento, aumentam a concentração desses gases. Com mais calor retido, a temperatura média global sobe, o que contribui para eventos climáticos extremos e para a elevação do nível do mar.",
      "Por isso, reduzir emissões e preservar florestas são medidas centrais no combate ao aquecimento global."
    ], "Texto informativo")
  ], [
    ob("O efeito estufa, em si, é:", "um fenômeno natural que mantém o planeta aquecido|uma doença|uma invenção humana|um erro científico", "A"),
    ob("O problema apontado é:", "o aumento de gases por atividades humanas|a falta de sol|o excesso de chuva|a ausência de gases", "A"),
    ob("Uma consequência citada é:", "elevação do nível do mar|queda de temperatura|ausência de chuvas|mais florestas", "A"),
    ob("As medidas centrais indicadas são:", "reduzir emissões e preservar florestas|queimar mais combustível|desmatar|ignorar", "A"),
    dis("Explique a diferença entre efeito estufa natural e agravado.", "O natural mantém a Terra aquecida; o agravado ocorre quando atividades humanas aumentam a concentração de gases, retendo mais calor.", 3),
    dis("Que papel têm as florestas no combate ao aquecimento global?", "Absorvem gás carbônico, ajudando a reduzir sua concentração na atmosfera.", 3)
  ], ["Interpretação"]);

  I("constituicao-saude", "Texto normativo: o direito à saúde (Constituição, art. 196)", "Leitura de texto jurídico: direito, dever do Estado e políticas públicas.", [
    H.t("Art. 196", "“A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.”", "Constituição Federal de 1988, art. 196")
  ], [
    ob("O artigo estabelece a saúde como:", "direito de todos e dever do Estado|privilégio de quem paga|dever individual|dever apenas da família", "A"),
    ob("A expressão “acesso universal e igualitário” significa:", "para todos, sem discriminação|apenas para ricos|apenas para idosos|apenas para cidades grandes", "A"),
    ob("O texto prevê ações de:", "promoção, proteção e recuperação|apenas tratamento|apenas punição|apenas pesquisa", "A"),
    ob("A linguagem do texto é:", "formal e jurídica|informal|poética|publicitária", "A"),
    dis("Cite dois verbos que indicam o alcance das ações em saúde.", "Promoção, proteção e recuperação (ou redução do risco).", 2),
    dis("Como o artigo pode ser usado como repertório em uma redação sobre saúde pública?", "Para fundamentar que o acesso à saúde é um direito garantido por lei e que o Estado deve assegurá-lo por meio de políticas públicas.", 3)
  ], ["Interpretação", "Redação"]);

  I("coletanea-inclusao", "Coletânea de redação: inclusão de pessoas com deficiência", "Leitura de textos motivadores: dados, lei e opinião, no formato ENEM.", [
    H.i("Leia os textos motivadores e responda às questões. Eles servem de base para uma redação sobre **“Desafios para a inclusão de pessoas com deficiência no Brasil”**."),
    H.t("Texto I", "A Lei Brasileira de Inclusão da Pessoa com Deficiência (Lei nº 13.146/2015) assegura direitos como acessibilidade, educação inclusiva e trabalho em igualdade de condições, e prevê punição a atos de discriminação.", "Texto informativo"),
    H.t("Texto II", "Ainda é comum encontrar escolas sem rampas, calçadas esburacadas e sites que não podem ser lidos por leitores de tela. Nesses casos, o direito existe no papel, mas esbarra na falta de acessibilidade.", "Texto original"),
    H.t("Texto III", "“Inclusão não é favor: é o reconhecimento de que todos têm direito a participar da vida em sociedade.” (frase fictícia, criada para esta atividade)", "Texto original")
  ], [
    ob("O Texto I apresenta:", "a base legal da inclusão|um dado estatístico|uma opinião pessoal|uma piada", "A"),
    ob("O Texto II aponta o problema:", "distância entre o direito e sua prática|falta de leis|excesso de rampas|ausência de escolas", "A"),
    ob("O Texto III defende que a inclusão é:", "um direito, e não um favor|um favor|uma obrigação religiosa|um luxo", "A"),
    ob("Um possível eixo de tese a partir dos textos é:", "a lei existe, mas a acessibilidade ainda é insuficiente|a lei é inútil|não há problemas|a lei deve ser extinta", "A"),
    dis("Redija uma tese a partir da coletânea (2 linhas).", "Resposta pessoal. Exemplo: “Apesar de amparada por lei, a inclusão de pessoas com deficiência esbarra na falta de acessibilidade e de conscientização.”", 3),
    dis("Que proposta de intervenção você faria? Inclua agente, ação, meio e finalidade.", "Resposta pessoal. Exemplo: “O Ministério da Educação deve garantir acessibilidade nas escolas, por meio de verbas específicas, para assegurar o direito à educação.”", 5)
  ], ["Redação", "Interpretação"]);
})();
