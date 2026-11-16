/* 2º ano do Ensino Médio · Provas (8) e simulados (4). Valor das provas: 10 pontos. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("2EM"), ob = H.ob, dis = H.dis;

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
  P("diagnostica", "Avaliação diagnóstica · início do 2º ano do Ensino Médio", "Revisão do Arcadismo, orações, figuras e produção: ponto de partida do ano.", [
    H.t("A pressa e o tempo", [
      "Vivemos uma época de pressa: mensagens que exigem resposta imediata, vídeos de quinze segundos, prazos que se encurtam. Nesse cenário, parar para pensar tornou-se quase um ato de rebeldia.",
      "Embora a rapidez traga ganhos, ela cobra um preço: a atenção se fragmenta e o aprofundamento se torna raro. Por isso, é importante que a escola ensine a desacelerar, a ler com calma e a escrever com cuidado."
    ])
  ], [
    ob("A tese do texto é que:", "a escola deve ensinar a desacelerar, a ler e a escrever com cuidado|a rapidez é sempre ruim|a escola deve acelerar|ninguém precisa pensar", "A"),
    ob("A expressão “ato de rebeldia” é:", "uma metáfora que valoriza o ato de pensar|uma ironia sem sentido|um erro|um dado técnico", "A"),
    ob("“Embora a rapidez traga ganhos” é oração adverbial:", "concessiva|causal|condicional|temporal", "A"),
    ob("“Por isso” indica:", "conclusão|oposição|exemplo|tempo", "A"),
    ob("“Que exigem resposta imediata” é oração:", "adjetiva restritiva|adjetiva explicativa|substantiva|adverbial", "A"),
    ob("O Arcadismo, estudado no ano anterior, valorizava:", "a simplicidade e o equilíbrio|o exagero emocional|a crítica social explosiva|o misticismo", "A"),
    ob("A forma //desacelerar// é um verbo no:", "infinitivo|gerúndio|particípio|imperativo", "A"),
    ob("A função da linguagem predominante é:", "referencial e conativa|apenas emotiva|apenas poética|fática", "A"),
    dis("Que argumento sustenta a proposta final do texto?", "A rapidez fragmenta a atenção e dificulta o aprofundamento; por isso a escola deve ensinar a desacelerar.", 3),
    dis("Escreva uma conclusão (4 linhas) com proposta de intervenção, completando o texto.", "Resposta pessoal. Verifique agente, ação, meio e finalidade.", 5)
  ], ["Interpretação", "Redação"]);

  P("1bim", "Prova · 1º bimestre · 2º ano do Ensino Médio", "Romantismo (poesia): gerações, indianismo, ultrarromantismo e poesia social.", [
    H.poema("Texto I · I-Juca-Pirama, Canto IV", "Meu canto de morte,\nGuerreiros, ouvi:\nSou filho das selvas,\nNas selvas cresci;\nGuerreiros, descendo\nDa tribo tupi.", "Gonçalves Dias"),
    H.poema("Texto II · Lembrança de morrer", "Quando em meu peito rebentar-se a fibra,\nQue o espírito enlaça à dor vivente,\nNão derramem por mim nenhuma lágrima\nEm pálpebra demente.", "Álvares de Azevedo")
  ], [
    ob("O marco do Romantismo no Brasil é:", "Suspiros Poéticos e Saudades (1836)|Memórias Póstumas (1881)|Broquéis (1893)|Marília de Dirceu", "A"),
    ob("O Texto I pertence à:", "1ª geração (indianista e nacionalista)|2ª geração|3ª geração|geração parnasiana", "A"),
    ob("O Texto II pertence à:", "1ª geração|2ª geração (ultrarromântica)|3ª geração|geração simbolista", "B"),
    ob("A 3ª geração romântica, de Castro Alves, é marcada pela:", "poesia social e abolicionista|temática da morte|exaltação do indígena|poesia puramente formal", "A"),
    ob("O “mal do século” é caracterizado por:", "pessimismo e tédio|otimismo|nacionalismo|humor", "A"),
    ob("No Texto I, o indígena é visto como:", "herói nacional|inimigo|vítima apenas|figura cômica", "A"),
    ob("No Texto II, o tema central é:", "a morte|a pátria|o amor realizado|a natureza", "A"),
    ob("O nacionalismo romântico busca:", "criar uma identidade nacional com natureza e indígena|imitar a Europa|criticar a república|exaltar a razão", "A"),
    dis("Compare a visão de mundo dos Textos I e II.", "O Texto I exalta a identidade e o heroísmo (nacionalismo); o II expressa desencanto e pessimismo diante da vida (ultrarromantismo).", 4),
    dis("Por que Castro Alves é chamado “poeta dos escravos”?", "Porque sua poesia denunciou a escravidão e defendeu a abolição.", 3)
  ]);

  P("2bim", "Prova · 2º bimestre · 2º ano do Ensino Médio", "Romantismo (prosa): romance indianista, urbano, regionalista e histórico.", [
    H.t("Texto I · Iracema (abertura)", "“Verdes mares bravios de minha terra natal, onde canta a jandaia nas frondes da carnaúba;”", "José de Alencar"),
    H.t("Texto II · Memórias de um Sargento de Milícias", "“Era no tempo do rei.”", "Manuel Antônio de Almeida")
  ], [
    ob("O romance indianista de Alencar é:", "Iracema|Senhora|Dom Casmurro|O Cortiço", "A"),
    ob("O romance urbano de Alencar é:", "Senhora|O Guarani|Iracema|O Ateneu", "A"),
    ob("A Moreninha (1844) é de:", "Joaquim Manuel de Macedo|Alencar|Machado|Aluísio Azevedo", "A"),
    ob("A Escrava Isaura é de:", "Bernardo Guimarães|Alencar|Taunay|Macedo", "A"),
    ob("O Texto I destaca a natureza:", "de forma idealizada e poética|de forma científica|de forma cruel|de forma irônica", "A"),
    ob("O Texto II inicia o romance com:", "tom popular e humorístico|tom solene|tom científico|tom épico", "A"),
    ob("Memórias de um Sargento de Milícias é considerado:", "precursor do Realismo, por retratar costumes com humor|romance histórico|romance indianista|poema épico", "A"),
    ob("A linguagem de Alencar em Iracema é:", "poética e lírica|jornalística|técnica|coloquial", "A"),
    dis("Que diferença há entre o romance indianista e o urbano de Alencar?", "O indianista idealiza o indígena e a natureza; o urbano retrata a sociedade da corte, com críticas ao casamento por interesse.", 4),
    dis("Por que o romance de Manuel Antônio de Almeida difere dos românticos tradicionais?", "Porque retrata personagens populares e costumes com humor e sem idealização.", 3)
  ]);

  P("3bim", "Prova · 3º bimestre · 2º ano do Ensino Médio", "Realismo: Machado de Assis, narrador e crítica social.", [
    H.t("Texto I · Memórias Póstumas de Brás Cubas", "“Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte.”", "Machado de Assis (1881)"),
    H.t("Texto II · Dom Casmurro", "“Uma noite destas, vindo da cidade para o Engenho Novo, encontrei num trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu.”", "Machado de Assis (1899)")
  ], [
    ob("O marco do Realismo no Brasil é:", "Memórias Póstumas de Brás Cubas (1881)|Iracema (1865)|Broquéis (1893)|O Cortiço (1890)", "A"),
    ob("O narrador do Texto I é:", "um defunto-autor|um jovem|uma criança|um padre", "A"),
    ob("O narrador do Texto II é:", "Bentinho|Capitu|Escobar|José Dias", "A"),
    ob("O Realismo se caracteriza por:", "objetividade, análise psicológica e crítica social|idealização|subjetivismo extremo|escapismo", "A"),
    ob("A ambiguidade de Dom Casmurro está em:", "não sabermos se Capitu traiu de fato|não haver narrador|ausência de personagens|falta de enredo", "A"),
    ob("A ironia, em Machado, serve a:", "criticar comportamentos e convenções sociais|enfeitar o texto|encerrar capítulos|descrever paisagens", "A"),
    ob("A forma de narrar nos Textos I e II é:", "em primeira pessoa|em terceira pessoa|apenas diálogo|em segunda pessoa", "A"),
    ob("O defunto-autor representa:", "a liberdade de narrar sem convenções sociais|um fantasma|um monge|uma lenda", "A"),
    dis("Por que Bentinho é considerado narrador pouco confiável?", "Porque, ao narrar em primeira pessoa e movido por ciúme, oferece uma versão parcial dos fatos.", 4),
    dis("Que traço do Realismo aparece na abertura de Memórias Póstumas?", "A ironia e a desconstrução das convenções românticas, com um narrador cínico e metalinguístico.", 3)
  ]);

  P("4bim", "Prova · 4º bimestre · 2º ano do Ensino Médio", "Naturalismo, Parnasianismo e Simbolismo: características e textos.", [
    H.t("Texto I · O Cortiço (resumo)", "João Romão enriquece explorando a escrava Bertoleza e construindo um cortiço. O cortiço cresce e se torna personagem coletivo; a obra mostra como o meio social e econômico determina o comportamento humano.", "Aluísio Azevedo (1890)"),
    H.poema("Texto II · Via Láctea (trecho)", "“Ora (direis) ouvir estrelas! Certo\nPerdeste o senso!” E eu vos direi, no entanto,\nQue, para ouvi-las, muita vez desperto\nE abro as janelas, pálido de espanto...", "Olavo Bilac"),
    H.poema("Texto III · Antífona (abertura)", "Ó Formas alvas, brancas, Formas claras\nDe luares, de neves, de neblinas!...\nÓ Formas vagas, fluidas, cristalinas...\nIncensos dos turíbulos das aras", "Cruz e Sousa")
  ], [
    ob("O Naturalismo aplica ao romance:", "o determinismo (meio, raça, momento)|a idealização|a sátira política|a poesia mística", "A"),
    ob("O cortiço, no Texto I, é:", "um personagem coletivo|um simples cenário|um engenho|um castelo", "A"),
    ob("O Parnasianismo valoriza:", "a forma e o rigor técnico|a emoção descontrolada|a sugestão vaga|o nacionalismo", "A"),
    ob("O Texto II é um:", "soneto parnasiano|poema simbolista|cantiga|haicai", "A"),
    ob("O Simbolismo (Texto III) valoriza:", "a sugestão, a musicalidade e a espiritualidade|a objetividade|a ciência|a crítica social", "A"),
    ob("A repetição de “Ó Formas” é:", "anáfora|elipse|zeugma|ironia", "A"),
    ob("Uma diferença entre Parnasianismo e Simbolismo é:", "clareza e forma × sugestão e musicalidade|campo × cidade|guerra × paz|razão × fé", "A"),
    ob("O Simbolismo brasileiro tem como marco:", "Broquéis (1893), de Cruz e Sousa|Fanfarras|Iracema|Dom Casmurro", "A"),
    dis("Que crítica social aparece em O Cortiço?", "A exploração do trabalho, a ambição e a miséria em um sistema que favorece quem já tem poder.", 3),
    dis("Compare o Texto II e o Texto III quanto à linguagem.", "O II é objetivo, claro e formal; o III é vago, musical e sugestivo.", 4)
  ]);

  P("final", "Prova final · 2º ano do Ensino Médio", "Revisão do ano: movimentos do século XIX, gramática, argumentação e produção.", [
    H.t("Texto I", "No século XIX, o Brasil passou por mudanças profundas: da Independência à Abolição e à República. A literatura acompanhou esse processo: o Romantismo ajudou a construir uma imagem do país, e o Realismo passou a analisar criticamente a sociedade e seus conflitos.", "Texto original"),
    H.t("Texto II", "Machado de Assis, em Memórias Póstumas de Brás Cubas, usa a ironia para criticar a vaidade e os interesses das elites. Já Aluísio Azevedo, em O Cortiço, mostra como o meio social molda os comportamentos, em uma abordagem naturalista.", "Texto original")
  ], [
    ob("A literatura romântica contribuiu para:", "construir uma identidade nacional|criticar a monarquia apenas|abolir a escravidão|criar o Realismo", "A"),
    ob("O Realismo se distingue do Romantismo por:", "analisar criticamente a sociedade|idealizar o amor|exaltar a natureza|valorizar o escapismo", "A"),
    ob("A obra de Machado no Texto II é marcada por:", "ironia|idealização|determinismo|cientificismo", "A"),
    ob("A abordagem de Aluísio Azevedo é:", "naturalista|romântica|simbolista|arcádica", "A"),
    ob("A palavra “molda”, no Texto II, indica:", "determina|enfeita|esconde|nega", "A"),
    ob("O conectivo “Já”, no Texto II, indica:", "contraste entre dois autores|causa|conclusão|tempo", "A"),
    ob("“Da Independência à Abolição e à República” apresenta:", "uma sequência cronológica de mudanças|um erro|uma ironia|uma elipse", "A"),
    ob("Em “molda os comportamentos”, o verbo //molda// é:", "transitivo direto|intransitivo|de ligação|transitivo indireto", "A"),
    dis("Explique a relação entre o contexto histórico e a literatura, segundo o Texto I.", "A literatura acompanha as mudanças: o Romantismo ajuda a construir o país; o Realismo analisa criticamente os conflitos.", 4),
    dis("Escreva um parágrafo (7 linhas) comparando Machado de Assis e Aluísio Azevedo.", "Resposta pessoal. Verifique comparação, uso de repertório e norma culta.", 8)
  ]);

  P("recuperacao-1sem", "Prova de recuperação · 1º semestre · 2º ano do Ensino Médio", "Prova curta: Romantismo (poesia e prosa) e gramática essencial.", [
    H.t("Texto", "O Romantismo brasileiro divide-se em três gerações poéticas: a primeira, nacionalista e indianista (Gonçalves Dias); a segunda, ultrarromântica, marcada pelo “mal do século” (Álvares de Azevedo); e a terceira, condoreira, de poesia social e abolicionista (Castro Alves). Na prosa, destacam-se os romances de José de Alencar.", "Texto original")
  ], [
    ob("A 1ª geração romântica é:", "nacionalista e indianista|ultrarromântica|condoreira|simbolista", "A"),
    ob("A 2ª geração é marcada por:", "pessimismo e tema da morte|nacionalismo|poesia social|rigor formal", "A"),
    ob("A 3ª geração é:", "condoreira e social|nacionalista|ultrarromântica|parnasiana", "A"),
    ob("Alencar é autor de:", "Iracema e O Guarani|Dom Casmurro|O Cortiço|Broquéis", "A"),
    ob("“Mal do século” significa:", "pessimismo e tédio|otimismo|alegria|nacionalismo", "A"),
    ob("A palavra “condoreira” vem de:", "condor, ave dos Andes, símbolo de liberdade|cônsul|condão|conde", "A"),
    ob("A palavra //ultrarromântica// é formada por derivação:", "prefixal|sufixal|parassintética|por aglutinação", "A"),
    ob("Em “nacionalista e indianista”, as palavras são:", "adjetivos|verbos|advérbios|preposições", "A"),
    dis("Cite um autor de cada geração romântica.", "1ª: Gonçalves Dias; 2ª: Álvares de Azevedo; 3ª: Castro Alves.", 2),
    dis("Explique o que é “mal do século”.", "Sentimento de tédio, pessimismo e desencanto diante da vida, típico da 2ª geração romântica.", 3)
  ]);

  P("leitura", "Avaliação de leitura · Parnasianismo e Simbolismo lado a lado", "Comparação de dois poemas: Bilac e Alphonsus de Guimaraens.", [
    H.poema("Texto I · Via Láctea (trecho)", "“Ora (direis) ouvir estrelas! Certo\nPerdeste o senso!” E eu vos direi, no entanto,\nQue, para ouvi-las, muita vez desperto\nE abro as janelas, pálido de espanto...", "Olavo Bilac"),
    H.poema("Texto II · Ismália (trecho)", "Quando Ismália enlouqueceu,\nPôs-se na torre a sonhar...\nViu uma lua no céu,\nViu outra lua no mar.", "Alphonsus de Guimaraens")
  ], [
    ob("O Texto I é característico do:", "Parnasianismo|Simbolismo|Realismo|Romantismo", "A"),
    ob("O Texto II é característico do:", "Simbolismo|Parnasianismo|Naturalismo|Arcadismo", "A"),
    ob("O Texto I é um:", "soneto, com forma rigorosa|poema em versos livres|haicai|cantiga", "A"),
    ob("O Texto II explora:", "sonho, loucura e musicalidade|descrição objetiva|crítica social|heroísmo", "A"),
    ob("A “lua no céu” e a “lua no mar” no Texto II representam:", "o ideal e seu reflexo|duas cidades|duas pessoas|dois dias", "A"),
    ob("O tom do Texto I é:", "claro e dialogado|obscuro e onírico|satírico|épico", "A"),
    ob("Uma semelhança entre os textos é:", "a presença de elementos do céu (estrelas, lua)|a forma|a época de escrita|o autor", "A"),
    ob("A sonoridade no Texto II se deve a:", "repetições e versos curtos|rimas ausentes|prosa|linguagem técnica", "A"),
    dis("Compare o modo como cada poeta trata o céu.", "Bilac olha para o céu com admiração objetiva e clareza; Alphonsus o transforma em símbolo do ideal e da loucura, de forma vaga e musical.", 4),
    dis("Que característica parnasiana e que característica simbolista você identifica?", "Parnasiana: soneto e clareza formal; simbolista: imagens oníricas e musicalidade.", 3)
  ], ["Interpretação", "Literatura"]);

  /* ---------------- SIMULADOS ---------------- */
  S("1", "Simulado de Linguagens · 2º ano do Ensino Médio · nº 1", "Oito questões de Romantismo, Realismo, interpretação, funções da linguagem e gramática.", [
    ob("O eu lírico expressa:", "pessimismo e desejo de escapar da dor|exaltação da pátria|humor|ironia social", "A", "", c("Quando em meu peito rebentar-se a fibra, / Que o espírito enlaça à dor vivente, / Não derramem por mim nenhuma lágrima / Em pálpebra demente.", "Álvares de Azevedo")),
    ob("A geração romântica é:", "a 3ª, condoreira e social|a 1ª, indianista|a 2ª, ultrarromântica|a simbolista", "A", "", c("Senhor Deus dos desgraçados! / Dizei-me vós, Senhor Deus! / Se é loucura... se é verdade / Tanto horror perante os céus?!", "Castro Alves")),
    ob("O narrador desse romance é:", "um defunto-autor|um jovem|uma criança|um monge", "A", "", c("Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte.", "Machado de Assis")),
    ob("O determinismo, característica do Naturalismo, significa:", "que o meio e as condições sociais moldam o comportamento|que cada um é livre de tudo|que a natureza é perfeita|que o destino é divino", "A", "", c("O cortiço cresce e se torna um organismo vivo; os moradores são moldados pelas condições de vida e de trabalho.", "Resumo de O Cortiço")),
    ob("A função da linguagem predominante é:", "conativa|referencial|metalinguística|poética", "A", "", c("Matricule-se hoje e garanta seu futuro!")),
    ob("A figura de linguagem é:", "antítese|catacrese|hipérbole|elipse", "A", "", c("É um contentamento descontente / É dor que desatina sem doer.", "Camões (para identificação da figura)")),
    ob("A oração destacada é:", "concessiva|causal|condicional|temporal", "A", "", c("Embora estivesse cansado, ele terminou o trabalho.")),
    ob("A concordância correta é:", "Houve muitos problemas.|Houveram muitos problemas.|Houvemos muitos problemas.|Houverão muitos problemas.", "A", "", c("Complete: “___ muitos problemas na reunião.”"))
  ]);

  S("2", "Simulado de Linguagens · 2º ano do Ensino Médio · nº 2", "Oito questões: Realismo, Parnasianismo, Simbolismo, regência e coesão.", [
    ob("O narrador é:", "pouco confiável, pois conta a história de sua perspectiva|neutro|onisciente|coletivo", "A", "", c("Uma noite destas, vindo da cidade para o Engenho Novo, encontrei num trem da Central um rapaz aqui do bairro, que eu conheço de vista e de chapéu.", "Machado de Assis, Dom Casmurro")),
    ob("A característica parnasiana predominante é:", "rigor formal e clareza|musicalidade vaga|crítica social|misticismo", "A", "", c("Ora (direis) ouvir estrelas! Certo / Perdeste o senso! E eu vos direi, no entanto, / Que, para ouvi-las, muita vez desperto / E abro as janelas, pálido de espanto...", "Olavo Bilac")),
    ob("A característica simbolista predominante é:", "musicalidade e sugestão|clareza objetiva|crítica social|determinismo", "A", "", c("Ó Formas alvas, brancas, Formas claras / De luares, de neves, de neblinas!...", "Cruz e Sousa")),
    ob("A regência correta é:", "Assisti ao filme.|Assisti o filme.|Assisti no filme.|Assisti do filme.", "A", "", c("Ontem, ___ um filme interessante.")),
    ob("O conectivo //no entanto// indica:", "oposição|conclusão|causa|tempo", "A", "", c("O projeto é ousado; no entanto, pode ser realizado.")),
    ob("A crítica de Eça em O Primo Basílio se dirige à:", "hipocrisia da burguesia|monarquia apenas|Igreja apenas|natureza", "A", "", c("Luísa, entediada, deixa-se seduzir pelo primo Basílio; a empregada descobre as cartas e a chantageia.", "Resumo de O Primo Basílio")),
    ob("A forma correta é:", "à noite|a noite|há noite|as noite", "A", "", c("Estudo ___ para trabalhar de dia.")),
    ob("A oração destacada é:", "adjetiva explicativa|adjetiva restritiva|substantiva|adverbial", "A", "", c("Os alunos, que estudaram, passaram."))
  ]);

  S("3", "Simulado de Linguagens · 2º ano do Ensino Médio · nº 3", "Oito questões: leitura de textos contemporâneos, argumentação e gramática.", [
    ob("A tese do texto é que:", "a saúde mental exige atenção coletiva|a saúde mental é problema individual|o Estado não tem papel|a escola deve ignorar o tema", "A", "", c("A saúde mental, durante muito tempo, foi tratada como assunto privado. Hoje se sabe que o sofrimento psíquico exige atenção coletiva, com apoio de escola e serviços públicos.", "Texto original")),
    ob("O repertório citado é:", "a Constituição Federal|um filme|uma música|um poema", "A", "", c("Como estabelece a Constituição de 1988, a saúde é direito de todos e dever do Estado.", "Texto adaptado")),
    ob("A figura de linguagem é:", "personificação|ironia|catacrese|elipse", "A", "", c("A cidade dormia, enquanto a lua vigiava as ruas.")),
    ob("O texto apresenta:", "um dado numérico e uma conclusão|apenas opinião|apenas poesia|uma piada", "A", "", c("Entre 2018 e 2023, o tempo médio de deslocamento diário passou de 40 para 52 minutos. Portanto, é urgente ampliar o transporte coletivo.", "Dados fictícios")),
    ob("A concordância correta é:", "Seguem anexas as fotos.|Segue anexo as fotos.|Seguem anexo as fotos.|Segue anexas as fotos.", "A", "", c("Complete: “___ as fotos do evento.”")),
    ob("O pronome //lhe// refere-se a:", "ao professor|à lição|ao aluno|à turma", "A", "", c("Entreguei ao professor a lição e agradeci-lhe a paciência.")),
    ob("A pontuação correta é:", "Quando chegou, saímos.|Quando chegou saímos.|Quando, chegou saímos.|Quando chegou saímos,", "A", "", c("Escolha a frase corretamente pontuada.")),
    ob("A variação linguística presente é:", "regional|histórica|formal|técnica", "A", "", c("Na minha terra, a gente chama de aipim; no Nordeste, de macaxeira; no Sul, de mandioca."))
  ]);

  S("4", "Simulado de Linguagens · 2º ano do Ensino Médio · nº 4", "Oito questões: argumentação, coletânea, coesão, regência e figuras de linguagem.", [
    ob("O argumento utilizado é de:", "causa e consequência|comparação|autoridade|exemplificação", "A", "", c("As redes priorizam conteúdos de forte engajamento; por isso, boatos se espalham mais rápido do que informações verificadas.", "Texto original")),
    ob("O argumento utilizado é de:", "autoridade|causa e consequência|comparação|exemplificação", "A", "", c("De acordo com a Lei Brasileira de Inclusão (Lei nº 13.146/2015), a acessibilidade é direito das pessoas com deficiência.", "Texto adaptado")),
    ob("O conectivo //Portanto// introduz:", "conclusão|oposição|causa|exemplo", "A", "", c("O acesso à leitura é desigual. Portanto, é necessário ampliar bibliotecas.")),
    ob("A regência correta é:", "Aspiro a uma vaga.|Aspiro uma vaga.|Aspiro de uma vaga.|Aspiro em uma vaga.", "A", "", c("Escolha a frase com a regência correta.")),
    ob("A figura de linguagem é:", "sinestesia|catacrese|ironia|elipse", "A", "", c("O cheiro doce da manhã entrou pela janela.")),
    ob("A oração destacada é:", "reduzida de infinitivo|reduzida de gerúndio|reduzida de particípio|desenvolvida", "A", "", c("Ao chegar, saudou todos.")),
    ob("O sentido de //pena// é:", "piedade ou castigo, conforme o contexto|apenas pluma|apenas tristeza|apenas castigo", "A", "", c("Senti pena do cachorro abandonado; o juiz aplicou a pena máxima.")),
    ob("A forma correta é:", "a fim de|afim de|a fim|afim", "A", "", c("Estudamos ___ entender a matéria."))
  ]);
})();
