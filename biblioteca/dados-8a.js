/* 8º ano · Gramática (26 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("8"), ob = H.ob, dis = H.dis;

  function G(id, titulo, resumo, li, qs, extra) {
    var b = [H.te("Para lembrar", li)];
    if (extra) b.push(extra);
    b.push(H.qs(qs));
    Y.m("gramatica", "g-" + id, titulo, ["Gramática"], resumo, b);
  }
  var SUJ = ["sujeito simples", "sujeito composto", "sujeito oculto (desinencial)", "sujeito indeterminado", "oração sem sujeito"];
  var COORD = ["aditiva", "adversativa", "alternativa", "conclusiva", "explicativa"];

  G("classes-funcoes", "Revisão: classes de palavras e funções sintáticas", "Diferença entre a classe (morfologia) e a função que a palavra exerce na oração (sintaxe).", [
    "**Classe** é o que a palavra //é// (substantivo, adjetivo, verbo…). **Função sintática** é o que ela //faz// na oração (sujeito, objeto, adjunto…).",
    "Uma mesma classe pode ter funções diferentes: o substantivo pode ser **sujeito** (//O menino chegou//) ou **objeto direto** (//Vi o menino//).",
    "O adjetivo pode ser **adjunto adnominal** (//menino esperto//) ou **predicativo do sujeito** (//O menino está esperto//)."
  ], [
    ob("Em “Ana chegou”, //Ana// exerce a função de:", "objeto direto|sujeito|predicativo|adjunto adverbial", "B"),
    ob("Em “Ele chegou cedo”, //cedo// é um advérbio que exerce a função de:", "sujeito|objeto direto|adjunto adverbial|predicativo", "C"),
    ob("Em “Gosto de música”, //de música// é:", "objeto direto|objeto indireto|adjunto adnominal|sujeito", "B"),
    ob("Em “Ela está feliz”, //feliz// é:", "adjunto adnominal|objeto direto|predicativo do sujeito|sujeito", "C"),
    ob("Em “Li o livro”, //livro// é:", "sujeito|objeto direto|predicativo|adjunto adverbial", "B"),
    dis("Explique a diferença entre classe de palavra e função sintática.", "A classe diz o que a palavra é (substantivo, verbo, etc.); a função sintática diz o papel que ela exerce na oração (sujeito, objeto, adjunto…).", 3),
    dis("Dê a classe e a função de //os alunos// em “Os alunos saíram”.", "//Alunos//: substantivo; //os alunos//: sujeito.", 2),
    dis("Escreva uma frase em que um substantivo seja objeto direto.", "Resposta pessoal. Exemplo: “Comprei um caderno.”", 2)
  ]);

  G("sujeito", "Sujeito: simples, composto, oculto, indeterminado e inexistente", "Os cinco tipos de sujeito, com identificação pelo verbo.", [
    "**Simples**: um núcleo (//As crianças brincavam//). **Composto**: dois ou mais núcleos (//Ana e Bia saíram//). **Oculto**: identificado pela terminação do verbo (//Fizemos// = nós).",
    "**Indeterminado**: não se identifica quem pratica a ação — verbo na 3ª pessoa do plural sem referente (//Roubaram a bicicleta//) ou verbo + //se// (//Precisa-se de vendedores//).",
    "**Oração sem sujeito**: verbos de fenômeno da natureza (//Choveu//), //haver// no sentido de existir (//Há flores//) e //fazer, haver, ser// indicando tempo (//Faz dois anos//)."
  ], [
    ob("“As crianças brincavam no parque.”", SUJ, "A"),
    ob("“Choveu a noite toda.”", SUJ, "E"),
    ob("“Precisa-se de vendedores.”", SUJ, "D"),
    ob("“Fizemos a tarefa ontem.”", SUJ, "C"),
    ob("“Ana e Beatriz foram ao cinema.”", SUJ, "B"),
    ob("“Roubaram a bicicleta do vizinho.”", SUJ, "D"),
    ob("“Há muitos livros na biblioteca.”", SUJ, "E"),
    ob("“Faz dois anos que me formei.”", SUJ, "E")
  ]);

  G("predicado-predicativo", "Predicado e predicativos", "Predicado verbal, nominal e verbo-nominal; predicativo do sujeito e do objeto.", [
    "**Predicado verbal**: núcleo no verbo de ação (//O menino correu//). **Nominal**: verbo de ligação + predicativo do sujeito (//O dia estava lindo//). **Verbo-nominal**: tem verbo de ação e predicativo (//A professora chegou cansada//).",
    "**Predicativo do sujeito**: caracteriza o sujeito. **Predicativo do objeto**: caracteriza o objeto direto (//Julgaram o réu **inocente**//; //Acho o filme **ótimo**//).",
    "Verbos de ligação: //ser, estar, ficar, parecer, permanecer, continuar, tornar-se//."
  ], [
    ob("“O dia estava lindo.” Predicado:", "verbal|nominal|verbo-nominal|inexistente", "B"),
    ob("“A professora chegou cansada.” Predicado:", "verbal|nominal|verbo-nominal|inexistente", "C"),
    ob("“Os alunos saíram.” Predicado:", "verbal|nominal|verbo-nominal|inexistente", "A"),
    ob("Em “Ela parece feliz”, //feliz// é predicativo do:", "objeto|sujeito|verbo|adjunto", "B"),
    ob("Em “Acho o filme ótimo”, //ótimo// é predicativo do:", "sujeito|objeto|advérbio|verbo", "B"),
    dis("Sublinhe os predicativos: “Os alunos ficaram ansiosos e chamaram a prova de difícil.”", "ansiosos (do sujeito); difícil (do objeto //a prova//).", 3),
    dis("Classifique os predicados: a) O céu ficou escuro. b) A chuva caiu forte. c) Ela saiu triste.", "a) nominal; b) verbal; c) verbo-nominal.", 3),
    dis("Escreva uma frase com verbo de ligação.", "Resposta pessoal. Exemplo: “O mar está calmo.”", 2)
  ]);

  G("objeto-direto-indireto", "Objeto direto, objeto indireto e pronomes oblíquos", "Transitividade verbal e uso de o/a/os/as (OD) e lhe/lhes (OI).", [
    "**Objeto direto**: complemento sem preposição (//Comprei **um livro**//). **Objeto indireto**: complemento com preposição (//Gosto **de música**//).",
    "Os pronomes **o, a, os, as** substituem o objeto direto (//Vi **o filme** → Vi-**o**//). **Lhe, lhes** substituem o objeto indireto de pessoa (//Entreguei o livro **ao professor** → Entreguei-**lhe** o livro//).",
    "Verbo **transitivo direto e indireto**: tem os dois (//Entreguei **o livro** **ao professor**//)."
  ], [
    ob("Em “Li o livro”, //o livro// é:", "objeto direto|objeto indireto|sujeito|predicativo", "A"),
    ob("Em “Preciso de ajuda”, //de ajuda// é:", "objeto direto|objeto indireto|adjunto adverbial|sujeito", "B"),
    ob("Em “Vi o filme” → “Vi-___”:", "lhe|o|se|me", "B"),
    ob("Em “Entreguei o livro ao professor” → “Entreguei-___ o livro”:", "lhe|o|a|se", "A"),
    ob("Em “Enviei uma carta à avó”, //à avó// é:", "objeto direto|objeto indireto|sujeito|aposto", "B"),
    dis("Substitua o objeto por pronome: “Comprei as flores.”", "Comprei-as.", 2),
    dis("Identifique OD e OI: “Dei um presente à minha irmã.”", "OD: um presente; OI: à minha irmã.", 2),
    dis("Corrija: “Chamei-lhe ontem.” (chamar alguém = OD)", "Chamei-o (ou chamei-a) ontem.", 2)
  ]);

  G("adjunto-adnominal-adverbial", "Adjunto adnominal e adjunto adverbial", "Termos acessórios da oração: o que acompanha o nome e o que acompanha o verbo.", [
    "**Adjunto adnominal**: acompanha um substantivo e o caracteriza ou determina (//o velho livro, o livro da biblioteca, dois livros//). Pode ser adjetivo, artigo, numeral, pronome ou locução adjetiva.",
    "**Adjunto adverbial**: acompanha o verbo, um adjetivo ou outro advérbio e indica circunstância: tempo, lugar, modo, intensidade, causa… (//Chegou **ontem**; Mora **em Recife**; Fala **baixinho**//)."
  ], [
    ob("Em “O livro da biblioteca é novo”, //da biblioteca// é:", "adjunto adnominal|adjunto adverbial|objeto direto|sujeito", "A"),
    ob("Em “Ele chegou ontem”, //ontem// é adjunto adverbial de:", "lugar|tempo|modo|causa", "B"),
    ob("Em “Moramos em Recife”, //em Recife// é adjunto adverbial de:", "tempo|modo|lugar|intensidade", "C"),
    ob("Em “Dois livros caíram”, //dois// é:", "adjunto adnominal|adjunto adverbial|sujeito|objeto", "A"),
    ob("Em “Ela fala baixinho”, //baixinho// é adjunto adverbial de:", "modo|tempo|lugar|causa", "A"),
    dis("Sublinhe os adjuntos adnominais: “Aquela casa antiga fica na rua das Flores.”", "Aquela, antiga, das Flores.", 2),
    dis("Sublinhe os adjuntos adverbiais: “Ontem, o menino correu rapidamente pelo parque.”", "Ontem (tempo), rapidamente (modo), pelo parque (lugar).", 2),
    dis("Escreva uma frase com adjunto adverbial de lugar e outro de tempo.", "Resposta pessoal. Exemplo: “Ontem, estudei na biblioteca.”", 2)
  ]);

  G("aposto-vocativo", "Aposto e vocativo", "Termos independentes ou explicativos, sempre isolados por vírgulas.", [
    "**Aposto**: explica ou especifica outro termo (//Machado de Assis, **autor de Dom Casmurro**, nasceu no Rio//). Vem entre vírgulas, ou depois de dois-pontos.",
    "**Vocativo**: chama ou interpela o interlocutor (//**Pedro**, venha aqui!//). Também vem separado por vírgula.",
    "Nem aposto nem vocativo são sujeito, nem objeto: são termos à parte."
  ], [
    ob("Em “Recife, capital de Pernambuco, é bonita”, //capital de Pernambuco// é:", "vocativo|aposto|sujeito|objeto", "B"),
    ob("Em “Maria, feche a porta”, //Maria// é:", "sujeito|aposto|vocativo|objeto", "C"),
    ob("A vírgula em “Joana, minha prima, mora aqui” isola:", "aposto|vocativo|sujeito|objeto", "A"),
    ob("Qual frase tem vocativo?", "O professor chegou.|Professor, chegou a hora.|Chegou o professor.|O professor disse que viria.", "B"),
    ob("Qual frase tem aposto?", "Meu pai, engenheiro, chegou.|Meu pai chegou.|Chegou meu pai.|Meu pai, venha.", "A"),
    dis("Identifique o aposto: “O Brasil, um país de dimensões continentais, tem muitos biomas.”", "um país de dimensões continentais.", 2),
    dis("Pontue: “Rui meu melhor amigo viajou ontem.”", "Rui, meu melhor amigo, viajou ontem.", 2),
    dis("Escreva uma frase com vocativo.", "Resposta pessoal. Exemplo: “Ana, você vem?”", 2)
  ]);

  G("vozes-verbais", "Vozes verbais: ativa, passiva e reflexiva", "Quem pratica, quem sofre e quem pratica e sofre a ação.", [
    "**Ativa**: o sujeito pratica a ação (//O vento derrubou a árvore//). **Passiva**: o sujeito sofre a ação (//A árvore foi derrubada pelo vento//). **Reflexiva**: o sujeito pratica e sofre a ação (//O menino se feriu//).",
    "**Passiva analítica**: //ser + particípio//. **Passiva sintética**: //verbo + se// (//Vendem-se casas//).",
    "O **agente da passiva** é o termo que pratica a ação na voz passiva (//pelo vento//)."
  ], [
    ob("“O vento derrubou a árvore” está na voz:", "ativa|passiva|reflexiva|neutra", "A"),
    ob("“A árvore foi derrubada pelo vento” está na voz:", "ativa|passiva|reflexiva|neutra", "B"),
    ob("“O menino se feriu” está na voz:", "ativa|passiva|reflexiva|neutra", "C"),
    ob("“Vendem-se casas” é voz passiva:", "analítica|sintética|reflexiva|ativa", "B"),
    ob("Em “O bolo foi feito por minha avó”, o agente da passiva é:", "o bolo|minha avó|feito|foi", "B"),
    dis("Passe para a voz passiva: “A professora corrigiu as provas.”", "As provas foram corrigidas pela professora.", 2),
    dis("Passe para a ativa: “A carta foi escrita por Ana.”", "Ana escreveu a carta.", 2),
    dis("Explique a diferença entre //O menino se feriu// e //Feriram o menino//.", "Na primeira, o menino pratica e sofre a ação (reflexiva); na segunda, há sujeito indeterminado e o menino sofre a ação.", 3)
  ]);

  G("periodo-coordenacao", "Período composto por coordenação", "Orações coordenadas assindéticas e sindéticas; independência sintática.", [
    "**Período composto**: tem duas ou mais orações. Na **coordenação**, as orações são independentes entre si (//Estudei, mas não passei//).",
    "**Assindética**: sem conjunção (//Cheguei, vi, venci//). **Sindética**: ligada por conjunção coordenativa (//Estudei **e** passei//).",
    "Uma oração **coordenada** pode ter sentido completo sozinha."
  ], [
    ob("Em “Cheguei, vi, venci”, as orações são:", "sindéticas|assindéticas|subordinadas|adverbiais", "B"),
    ob("Em “Estudei e passei”, a oração //e passei// é:", "assindética|sindética|subordinada|adjetiva", "B"),
    ob("Quantas orações tem “Chegamos cedo e jantamos juntos”?", "1|2|3|4", "B"),
    ob("Orações coordenadas são:", "dependentes uma da outra|independentes sintaticamente|apenas explicativas|sempre adverbiais", "B"),
    ob("A conjunção //mas// liga orações:", "coordenadas|subordinadas|adjetivas|substantivas", "A"),
    dis("Una em um período composto por coordenação: “Choveu. Fomos ao jogo.”", "Choveu, mas fomos ao jogo.", 2),
    dis("Classifique as orações: “Acordei, tomei café e saí.”", "Três orações coordenadas: a 1ª e a 2ª assindéticas; a 3ª sindética aditiva.", 3),
    dis("Quantas orações há em “Quero que você venha”? Elas são coordenadas?", "Duas; não, a segunda depende da primeira (subordinada).", 3)
  ]);

  G("coordenadas-sindeticas", "Orações coordenadas sindéticas", "Aditiva, adversativa, alternativa, conclusiva e explicativa.", [
    "**Aditivas**: soma (//e, nem//). **Adversativas**: oposição (//mas, porém, contudo, todavia, no entanto//). **Alternativas**: escolha (//ou… ou, ora… ora//). **Conclusivas**: conclusão (//logo, portanto, por isso//). **Explicativas**: explicação (//pois, que, porque//)."
  ], [
    ob("“Estudei muito, ++mas não passei++.”", COORD, "B"),
    ob("“++Ou você estuda++, ou você trabalha.”", COORD, "C"),
    ob("“Penso, ++logo existo++.”", COORD, "D"),
    ob("“Venha logo, ++que o filme vai começar++.”", COORD, "E"),
    ob("“Ela cantou ++e dançou++.”", COORD, "A"),
    dis("Una com conjunção explicativa: “Fique em casa. Está chovendo muito.”", "Fique em casa, pois está chovendo muito. (ou: que/porque)", 2),
    dis("Una com conjunção conclusiva: “Estudou bastante. Passou.”", "Estudou bastante; portanto, passou. (ou: logo, por isso)", 2),
    dis("Classifique //no entanto// em “Treinou muito; no entanto, perdeu.”", "Conjunção coordenativa adversativa.", 2)
  ]);

  G("subordinadas-substantivas", "Orações subordinadas substantivas", "Subjetivas, objetivas diretas e predicativas, introduzidas por que e se.", [
    "A oração **subordinada substantiva** exerce função de substantivo: sujeito, objeto, predicativo… Costuma vir com **que** ou **se** (conjunções integrantes).",
    "**Subjetiva**: sujeito (//É importante **que você estude**//). **Objetiva direta**: objeto direto (//Espero **que você venha**//). **Predicativa**: predicativo (//O problema é **que ele faltou**//).",
    "Teste: troque a oração por //isso//. Se funcionar, é substantiva."
  ], [
    ob("“Espero ++que você venha++.” A oração destacada é:", "subjetiva|objetiva direta|predicativa|adjetiva", "B"),
    ob("“É importante ++que você estude++.” A oração destacada é:", "subjetiva|objetiva direta|predicativa|adverbial", "A"),
    ob("“O problema é ++que ele faltou++.” A oração destacada é:", "subjetiva|objetiva direta|predicativa|adjetiva", "C"),
    ob("A palavra //que//, nessas orações, é:", "pronome relativo|conjunção integrante|advérbio|preposição", "B"),
    ob("Qual frase tem oração substantiva?", "O livro que li é ótimo.|Disse que viria.|Quando chegou, saímos.|Estudou porque queria.", "B"),
    dis("Troque a oração por //isso//: “Quero que você me ajude.”", "Quero isso. (oração objetiva direta)", 2),
    dis("Complete com uma oração substantiva: “Ele disse ___.”", "Resposta pessoal. Exemplo: “que viria amanhã.”", 2),
    dis("Una: “Ele sabe. Você chegou.” (use //que//)", "Ele sabe que você chegou.", 2)
  ]);

  G("subordinadas-adjetivas", "Orações subordinadas adjetivas: restritivas e explicativas", "O pronome relativo e o sentido que a vírgula cria.", [
    "A **subordinada adjetiva** funciona como adjetivo e se liga a um substantivo por meio de **pronome relativo** (//que, quem, o qual, cujo, onde//).",
    "**Restritiva**: restringe o sentido do antecedente; **sem vírgula** (//Os alunos **que estudaram** passaram//: só alguns).",
    "**Explicativa**: acrescenta uma informação; **entre vírgulas** (//Os alunos, **que estudaram**, passaram//: todos)."
  ], [
    ob("“Os alunos ++que estudaram++ passaram.” Oração:", "restritiva|explicativa|substantiva|adverbial", "A"),
    ob("“Os alunos, ++que estudaram++, passaram.” Oração:", "restritiva|explicativa|substantiva|adverbial", "B"),
    ob("Na primeira frase, passaram:", "todos os alunos|apenas os que estudaram|nenhum aluno|a turma inteira sem exceção", "B"),
    ob("A palavra //que//, nas adjetivas, é:", "conjunção integrante|pronome relativo|advérbio|preposição", "B"),
    ob("“O livro ++que li++ é ótimo.” A oração:", "restritiva|explicativa|adverbial|substantiva", "A"),
    dis("Explique a diferença de sentido entre (I) “Os políticos que são honestos merecem respeito” e (II) “Os políticos, que são honestos, merecem respeito”.", "Em (I), só os políticos honestos merecem respeito (restritiva); em (II), todos os políticos são honestos e merecem respeito (explicativa).", 4),
    dis("Una em uma frase com pronome relativo: “Visitei a cidade. A cidade nasci nela.”", "Visitei a cidade em que (ou onde) nasci.", 2),
    dis("Complete com cujo/cuja: a) O aluno ___ mochila sumiu. b) O livro ___ capa é azul.", "a) cuja; b) cuja.", 2)
  ]);

  G("subordinadas-adverbiais", "Orações subordinadas adverbiais", "Causa, tempo, condição, concessão, finalidade, comparação e outras.", [
    "A **subordinada adverbial** exerce função de advérbio e indica circunstância: **causa** (//porque, já que//), **tempo** (//quando, assim que//), **condição** (//se, caso//), **concessão** (//embora, ainda que//), **finalidade** (//para que//), **comparação** (//como//), **conformidade** (//conforme//), **proporção** (//à medida que//).",
    "//Embora// e //apesar de// expressam **concessão**: algo que poderia impedir, mas não impediu."
  ], [
    ob("“++Quando chegou++, todos saíram.” A oração indica:", "causa|tempo|condição|concessão", "B"),
    ob("“Fiquei em casa ++porque estava doente++.” A oração indica:", "causa|tempo|finalidade|comparação", "A"),
    ob("“++Se chover++, o jogo será adiado.” A oração indica:", "tempo|condição|concessão|finalidade", "B"),
    ob("“++Embora estivesse cansado++, ele estudou.” A oração indica:", "condição|concessão|causa|tempo", "B"),
    ob("“Estudei ++para que você passasse++.” A oração indica:", "causa|finalidade|tempo|condição", "B"),
    dis("Una com conjunção de causa: “Faltei. Estava com febre.”", "Faltei porque estava com febre.", 2),
    dis("Una com conjunção de condição: “Você estuda. Você passa.”", "Se você estudar, passará.", 2),
    dis("Una com conjunção de concessão: “Estava cansada. Terminou o trabalho.”", "Embora estivesse cansada, terminou o trabalho.", 2)
  ]);

  G("pronomes-relativos", "Pronomes relativos: que, quem, onde, cujo, o qual", "Retomada do antecedente e uso com preposição.", [
    "O **pronome relativo** retoma um termo anterior (o antecedente) e liga duas orações.",
    "**Que** (pessoas, coisas). **Quem** (pessoas, depois de preposição: //a quem, com quem//). **Onde** (lugar). **Cujo, cuja** (posse). **O qual, a qual, os quais, as quais** (equivalem a //que//, úteis com preposição).",
    "Com preposição: //O filme **a que** assisti//; //A cidade **em que** nasci//; //A pessoa **de quem** falei//."
  ], [
    ob("“A cidade ___ nasci é pequena.”", "que|onde|cujo|quem", "B"),
    ob("“O filme a ___ assisti é longo.”", "que|quem|onde|cujo", "A"),
    ob("“A pessoa de ___ falei chegou.”", "que|quem|onde|cujo", "B"),
    ob("“O aluno ___ pai é médico chegou.”", "cujo|cuja|que|onde", "A"),
    ob("“A sala na ___ estudamos é grande.”", "qual|cujo|onde|quem", "A"),
    dis("Una: “O livro é ótimo. Eu li o livro.”", "O livro que li é ótimo.", 2),
    dis("Una: “A casa é antiga. Nela moraram meus avós.”", "A casa em que (ou onde) moraram meus avós é antiga.", 2),
    dis("Corrija: “O filme que eu assisti ontem era bom.”", "O filme a que (ou a que eu) assisti ontem era bom.", 2)
  ]);

  G("tempos-compostos", "Tempos compostos do indicativo", "Pretérito perfeito composto, mais-que-perfeito composto e futuro do presente composto.", [
    "Formam-se com o verbo **ter** (ou haver) + **particípio**.",
    "**Pretérito perfeito composto**: ação repetida até o presente (//Tenho estudado muito//). **Mais-que-perfeito composto**: ação passada anterior a outra (//Quando cheguei, ele já tinha saído//). **Futuro do presente composto**: ação futura anterior a outra (//Quando você chegar, eu já terei saído//)."
  ], [
    ob("“Tenho estudado muito” indica:", "ação concluída no passado distante|ação repetida até o presente|ação futura|ação futura anterior a outra", "B"),
    ob("“Quando cheguei, ele já tinha saído” tem //tinha saído// no:", "mais-que-perfeito composto|pretérito perfeito simples|futuro composto|presente", "A"),
    ob("“Quando você chegar, eu já terei saído” tem //terei saído// no:", "pretérito perfeito composto|mais-que-perfeito|futuro do presente composto|imperativo", "C"),
    ob("Qual é o particípio de //fazer//?", "fazido|feito|fazendo|fazer", "B"),
    ob("Qual forma é de pretérito perfeito composto?", "tem comprado|comprou|comprará|compraria", "A"),
    dis("Complete: “Quando o professor chegou, os alunos já ___ (sair).”", "tinham saído.", 2),
    dis("Reescreva usando //tenho//: “Estudo muito ultimamente.”", "Tenho estudado muito ultimamente.", 2),
    dis("Explique a diferença entre //comi// e //tinha comido//.", "//Comi//: ação concluída no passado; //tinha comido//: ação passada anterior a outra ação passada.", 3)
  ]);

  G("mais-que-perfeito", "Pretérito mais-que-perfeito", "Forma simples (cantara) e composta (tinha cantado); uso em narrativas.", [
    "Indica um fato passado **anterior a outro** fato passado: //Quando cheguei, ele já **saíra**//.",
    "**Forma simples**: //cantara, vendera, partira//. Hoje é mais comum na escrita literária. **Forma composta**: //tinha cantado, tinha vendido, tinha partido//, usada na fala e na escrita.",
    "Nas narrativas, serve para **voltar no tempo**: //Marta contou o que tinha acontecido//."
  ], [
    ob("O mais-que-perfeito indica:", "fato passado anterior a outro passado|fato presente|fato futuro|ordem", "A"),
    ob("A forma composta de //cantara// é:", "tinha cantado|cantava|cantou|cantaria", "A"),
    ob("A forma simples do mais-que-perfeito de //sair// (ele) é:", "saíra|saiu|saía|sairia", "A"),
    ob("“Quando cheguei, o filme já ___.”", "começava|começara|começará|começa", "B"),
    ob("Em “Marta contou o que tinha acontecido”, //tinha acontecido// indica:", "fato anterior ao momento da fala de Marta|fato futuro|fato simultâneo|fato hipotético", "A"),
    dis("Reescreva com mais-que-perfeito composto: “Eu já fiz o dever quando ele chegou.”", "Eu já tinha feito o dever quando ele chegou.", 2),
    dis("Reescreva com mais-que-perfeito simples: “Quando cheguei, ele já tinha saído.”", "Quando cheguei, ele já saíra.", 2),
    dis("Escreva uma frase com //tinha// + particípio.", "Resposta pessoal. Exemplo: “Eu já tinha lido o livro.”", 2)
  ]);

  G("locucoes-verbais", "Locuções verbais", "Verbo auxiliar + verbo principal (infinitivo, gerúndio ou particípio).", [
    "**Locução verbal**: verbo auxiliar + verbo principal em forma nominal. Os dois formam um só núcleo do predicado.",
    "//Vai chover// (futuro próximo). //Está chovendo// (ação em andamento). //Tinha chovido// (ação anterior). //Foi vencido// (passiva).",
    "O **auxiliar** carrega a flexão (tempo, pessoa, número): //Os alunos **estão** estudando//."
  ], [
    ob("Em “Vai chover”, a locução verbal indica:", "futuro próximo|passado distante|hábito|ordem", "A"),
    ob("Em “Está chovendo”, //chovendo// é:", "infinitivo|gerúndio|particípio|imperativo", "B"),
    ob("Em “Tinha chovido”, o auxiliar é:", "tinha|chovido|chover|nenhum", "A"),
    ob("Em “Os alunos estão estudando”, o verbo principal é:", "estão|estudando|alunos|os", "B"),
    ob("A locução “foi vencido” expressa:", "voz ativa|voz passiva|futuro|imperativo", "B"),
    dis("Sublinhe as locuções verbais: “Devemos ter terminado o trabalho quando eles estiverem chegando.”", "Devemos ter terminado; estiverem chegando.", 2),
    dis("Forme uma locução verbal de tempo futuro com //ir//.", "Exemplo: “Vou estudar amanhã.”", 2),
    dis("Que função tem o verbo auxiliar em uma locução verbal?", "Indicar tempo, modo, pessoa e número, enquanto o verbo principal traz o sentido da ação.", 3)
  ]);

  G("concordancia-verbal", "Concordância verbal: casos especiais", "Haver, fazer, verbo + se, sujeito posposto, expressões partitivas.", [
    "**Haver** (= existir) e **fazer** (indicando tempo) são impessoais: singular (//Houve problemas; Faz dois anos//).",
    "**Verbo + se**: passiva sintética concorda com o sujeito (//Vendem-se casas//); indeterminação com VTI fica no singular (//Precisa-se de funcionários//).",
    "Com **mais de um**, o verbo vai para o singular (//Mais de um aluno faltou//). Com **sujeito posposto**, o verbo concorda com o sujeito (//Chegaram os alunos//)."
  ], [
    ob("“___ dois anos que me formei.”", "Fazem|Faz|Fazia|Fizeram", "B"),
    ob("“___ muitas pessoas na fila.”", "Havia|Haviam|Houveram|Haverão", "A"),
    ob("“___ casas no bairro.”", "Aluga-se|Alugam-se|Alugasse|Alugar", "B"),
    ob("“Precisa-se ___ vendedores.”", "de|a|com|em", "A"),
    ob("“Mais de um aluno ___.”", "faltaram|faltou|faltavam|faltarão", "B"),
    dis("Corrija: “Houveram muitos problemas.”", "Houve muitos problemas.", 2),
    dis("Corrija: “Vende-se casas.”", "Vendem-se casas.", 2),
    dis("Explique por que //haver// no sentido de existir fica no singular.", "Porque é um verbo impessoal: não tem sujeito com que concordar.", 2)
  ]);

  G("concordancia-nominal", "Concordância nominal: casos especiais", "Meio, mesmo, próprio, anexo, obrigado, é bom/proibido/necessário.", [
    "O adjetivo concorda com o substantivo em gênero e número. Casos especiais:",
    "**Mesmo, próprio**: concordam (//Elas mesmas decidiram//). **Anexo, incluso, quite**: concordam (//Seguem anexas as fotos//). **Meio** (= um pouco): invariável (//Ela ficou meio nervosa//). **Obrigado** concorda com quem fala.",
    "**É bom, é necessário, é proibido**: invariáveis quando o sujeito não tem artigo (//É necessário paciência//); concordam se há artigo (//É necessária a paciência//)."
  ], [
    ob("“Elas ___ decidiram.”", "mesmo|mesma|mesmos|mesmas", "D"),
    ob("“Seguem ___ as fotos.”", "anexo|anexas|anexa|anexos", "B"),
    ob("“Ela ficou ___ nervosa.”", "meio|meia|meios|meias", "A"),
    ob("“É ___ paciência para estudar.” (sem artigo)", "necessário|necessária|necessários|necessárias", "A"),
    ob("“É ___ a entrada.” (com artigo)", "proibido|proibida|proibidos|proibidas", "B"),
    dis("Corrija: “Segue anexo as fotos.”", "Seguem anexas as fotos.", 2),
    dis("Corrija: “Ela mesmo fez o trabalho.”", "Ela mesma fez o trabalho.", 2),
    dis("Complete: “Muito ___ (obrigado), disse a menina.”", "obrigada.", 2)
  ]);

  G("regencia-verbal", "Regência verbal: assistir, obedecer, preferir, aspirar, chegar", "Quando o verbo exige preposição e qual.", [
    "**Assistir** (= ver): //a// (//Assisti ao filme//). **Obedecer, desobedecer**: //a// (//Obedeço ao professor//). **Preferir**: //a// (//Prefiro café a chá//). **Aspirar** (= almejar): //a// (//Aspiro a uma vaga//).",
    "**Chegar, ir**: //a// (//Chegamos à escola//). **Namorar**: sem preposição (//Pedro namora Ana//). **Esquecer**: //esqueci o livro//; //esqueci-me do livro//.",
    "**Visar** (= ter como objetivo): //a// (//Visamos ao sucesso//)."
  ], [
    ob("“Assisti ___ filme ontem.” (ver)", "o|ao|do|no", "B"),
    ob("“O aluno obedece ___ professor.”", "o|ao|do|no", "B"),
    ob("“Prefiro café ___ chá.”", "do que|a|que|de", "B"),
    ob("“Aspiro ___ uma vaga.”", "a|de|em|por", "A"),
    ob("“Chegamos ___ escola.”", "à|na|pela|da", "A"),
    dis("Corrija: “Prefiro mais café do que chá.”", "Prefiro café a chá.", 2),
    dis("Corrija: “Pedro namora com Ana.”", "Pedro namora Ana.", 2),
    dis("Corrija: “Obedeço o professor.”", "Obedeço ao professor.", 2)
  ]);

  G("crase", "Crase: regra geral e casos especiais", "Fusão da preposição a com o artigo a, e usos em locuções.", [
    "**Crase** é a fusão da preposição //a// com o artigo //a(s)// (ou com //aquele, aquela, aquilo//): //Fui à feira//.",
    "Teste: troque a palavra feminina por uma masculina; se aparecer //ao//, use crase (//Fui ao mercado → Fui à feira//).",
    "**Há crase** em locuções adverbiais femininas (//à noite, às vezes, à vista//). **Não há crase** antes de masculino, verbos, pronomes pessoais, artigos indefinidos e expressões repetidas (//cara a cara//)."
  ], [
    ob("“Fui ___ feira.”", "a|à|às|há", "B"),
    ob("“Refiro-me ___ pessoas que estudam.”", "a|à|às|as", "C"),
    ob("“Ela começou ___ estudar cedo.”", "a|à|às|há", "A"),
    ob("“Trabalho ___ noite.”", "a|à|às|ao", "B"),
    ob("“Assisti ___ filme.”", "a|à|às|aos", "A"),
    dis("Explique por que há crase em “Obedeço à lei”.", "O verbo obedecer exige a preposição a e //lei// aceita o artigo a: a + a = à.", 3),
    dis("Corrija: “Voltarei a pé à casa de meus avós às dez horas, a tarde.”", "Voltarei a pé à casa de meus avós às dez horas, à tarde.", 2),
    dis("Explique por que não há crase em “Ela fala a todos”.", "Porque //todos// é pronome indefinido e não admite artigo.", 2)
  ]);

  G("virgula-periodo", "Pontuação no período composto: vírgula, ponto e vírgula, dois-pontos", "Quando separar orações e como evitar a vírgula entre sujeito e verbo.", [
    "**Vírgula** separa orações coordenadas (//Estudei, mas não passei//), orações adjetivas explicativas e adverbiais antepostas (//Quando chegou, todos saíram//).",
    "**Ponto e vírgula** separa orações longas ou itens de uma lista com vírgulas internas. **Dois-pontos** introduzem enumeração, citação ou explicação.",
    "**Nunca** use vírgula entre o sujeito e o verbo, nem entre verbo e complemento."
  ], [
    ob("Qual frase está bem pontuada?", "Os alunos, chegaram cedo.|Quando chegou, todos saíram.|Comprei, pão e leite.|Ele disse, que viria.", "B"),
    ob("Em “Estudei, mas não passei”, a vírgula separa:", "sujeito e verbo|orações coordenadas|aposto|vocativo", "B"),
    ob("Os dois-pontos em “Trouxe três coisas: pão, leite e queijo” introduzem:", "uma enumeração|uma pergunta|uma ironia|um erro", "A"),
    ob("O ponto e vírgula costuma ser usado para:", "separar orações longas|encerrar perguntas|marcar falas|indicar vocativos", "A"),
    ob("A vírgula em “A professora, que chegou cedo, saiu” isola uma oração:", "adjetiva explicativa|substantiva|adverbial|coordenada", "A"),
    dis("Pontue: “quando a chuva parou os alunos saíram e foram para casa”", "Quando a chuva parou, os alunos saíram e foram para casa.", 2),
    dis("Explique por que não se usa vírgula em “Os alunos, chegaram”.", "Porque separaria o sujeito do verbo.", 2),
    dis("Pontue: “Pedro meu irmão que mora em Niterói visitou-nos”", "Pedro, meu irmão, que mora em Niterói, visitou-nos.", 2)
  ]);

  G("homonimos-paronimos", "Palavras que confundem: homônimos e parônimos", "Cesta/sexta, ratificar/retificar, tráfego/tráfico, cumprimento/comprimento…", [
    "**Homônimos**: mesma pronúncia ou escrita, sentidos diferentes (//cesta, sexta, sesta//). **Parônimos**: parecidos, mas diferentes (//ratificar/retificar, tráfego/tráfico, descrição/discrição//).",
    "**Ratificar**: confirmar; **retificar**: corrigir. **Tráfego**: movimento de veículos; **tráfico**: comércio ilegal. **Cumprimento**: saudação; **comprimento**: extensão. **Infringir**: violar; **infligir**: aplicar.",
    "**Descriminar**: inocentar; **discriminar**: separar, tratar diferente."
  ], [
    ob("“Preciso ___ a data errada.” (corrigir)", "ratificar|retificar|infringir|infligir", "B"),
    ob("“O ___ na avenida está parado.” (veículos)", "tráfico|tráfego|trafico|trafégo", "B"),
    ob("“O ___ da mesa é de dois metros.” (extensão)", "cumprimento|comprimento|compromento|comprimeto", "B"),
    ob("“Ele recebeu um ___ do diretor.” (saudação)", "comprimento|cumprimento|compromisso|compriemento", "B"),
    ob("“Dirigir em alta velocidade é ___ a lei.” (violar)", "infligir|infringir|infrigir|infigir", "B"),
    dis("Explique a diferença entre //ratificar// e //retificar//.", "//Ratificar// é confirmar; //retificar// é corrigir.", 2),
    dis("Complete: a) A ___ de domingo ficou cheia de pães. (cesta/sexta) b) Na ___-feira, haverá prova.", "a) cesta; b) sexta.", 2),
    dis("Escreva uma frase com //discriminar// no sentido de tratar de forma desigual.", "Resposta pessoal. Exemplo: “Não se deve discriminar ninguém pela cor da pele.”", 2)
  ]);

  G("neologismos-estrangeirismos", "Neologismos, estrangeirismos e empréstimos", "Como a língua se renova: palavras novas, palavras de outras línguas e adaptações.", [
    "**Neologismo**: palavra ou sentido novo criado no idioma (//blogar, tuitar, textão//).",
    "**Estrangeirismo**: palavra de outra língua usada no português, às vezes sem adaptar (//mouse, delivery//). **Empréstimo**: palavra incorporada e adaptada (//futebol, abajur, deletar//).",
    "A língua é viva: o uso, a escola e a mídia ajudam a decidir o que permanece."
  ], [
    ob("“Blogar” é um exemplo de:", "neologismo|arcaísmo|erro|gíria apenas", "A"),
    ob("“Futebol” vem do inglês //football// e foi adaptada; é um:", "estrangeirismo sem adaptação|empréstimo adaptado|neologismo|arcaísmo", "B"),
    ob("“Abajur” vem do francês //abat-jour//. É um:", "empréstimo|neologismo|erro|arcaísmo", "A"),
    ob("“Mouse” é um estrangeirismo porque:", "mantém a forma original de outra língua|é palavra nova criada no Brasil|é uma gíria|é um erro", "A"),
    ob("A existência de neologismos mostra que a língua:", "é fixa|está em constante mudança|é um erro|não permite mudanças", "B"),
    dis("Cite dois estrangeirismos que você usa no dia a dia.", "Resposta pessoal. Exemplos: delivery, wi-fi, mouse, shopping.", 2),
    dis("Crie um neologismo e explique seu sentido.", "Resposta pessoal. Verifique coerência e criatividade.", 3),
    dis("Por que a língua muda ao longo do tempo?", "Porque os falantes criam, adaptam e deixam de usar palavras de acordo com suas necessidades e com o contato entre culturas e tecnologias.", 3)
  ]);

  G("figuras-linguagem", "Figuras de linguagem: metáfora, metonímia, antítese, ironia e outras", "Reconhecer figuras de sentido e entender o efeito que criam.", [
    "**Metáfora**: comparação implícita (//O tempo é um rio//). **Comparação**: com conectivo (//forte como um touro//). **Metonímia**: troca por proximidade (//Li Machado de Assis//). **Personificação**: traços humanos a seres não humanos.",
    "**Antítese**: palavras opostas (//Amor e ódio//). **Paradoxo**: ideias contraditórias (//É um contentamento descontente//). **Ironia**: diz o contrário do que pensa. **Hipérbole**: exagero. **Eufemismo**: suaviza."
  ], [
    ob("“O tempo é um rio” é:", "comparação|metáfora|metonímia|hipérbole", "B"),
    ob("“Li Machado de Assis” é:", "metáfora|metonímia|ironia|antítese", "B"),
    ob("“Meu avô nos deixou” (morreu) é:", "eufemismo|hipérbole|ironia|paradoxo", "A"),
    ob("“Já te disse mil vezes!” é:", "hipérbole|eufemismo|antítese|paradoxo", "A"),
    ob("“O silêncio gritava” é um:", "paradoxo|eufemismo|metonímia|comparação", "A"),
    dis("Classifique: “Vento cantou na janela.” / “Que dia lindo!” (em tempestade) / “Ficou vermelho como um tomate.”", "personificação; ironia; comparação.", 3),
    dis("Crie uma antítese.", "Resposta pessoal. Exemplo: “Era um dia de sol e de chuva no coração.”", 2),
    dis("Que efeito tem a hipérbole em “Morri de rir”?", "Enfatiza o quanto a pessoa riu, dando expressividade ao texto.", 2)
  ]);

  G("variacao-linguistica", "Variação linguística", "Regional, social, situacional e histórica; combate ao preconceito linguístico.", [
    "**Diatópica (regional)**: diferenças entre lugares (//aipim, macaxeira, mandioca//). **Diastrática (social)**: diferenças entre grupos (gírias, jargões). **Diafásica (situacional)**: ajusta-se à situação (formal, informal). **Diacrônica**: mudança no tempo (//vosmecê → você//).",
    "**Preconceito linguístico** é julgar alguém por seu jeito de falar. Não existe fala “errada” em si: existe fala **adequada ou inadequada** a cada situação.",
    "A **norma culta** é a variedade de prestígio, importante em contextos formais e na escrita."
  ], [
    ob("“Aipim”, “macaxeira” e “mandioca” são exemplo de variação:", "regional|social|histórica|situacional", "A"),
    ob("A gíria de um grupo jovem é variação:", "regional|social|histórica|formal", "B"),
    ob("Usar linguagem formal em uma entrevista de emprego é variação:", "regional|situacional|histórica|apenas erro", "B"),
    ob("“Vosmecê” virou “você”. Isso é variação:", "regional|situacional|histórica (diacrônica)|social", "C"),
    ob("O preconceito linguístico consiste em:", "julgar alguém pela forma como fala|corrigir um erro|aprender a norma culta|escrever bem", "A"),
    dis("Cite duas palavras que mudam de nome conforme a região.", "Exemplos: mandioca/aipim/macaxeira; bolacha/biscoito; pipa/papagaio/raia.", 2),
    dis("Por que não é correto dizer que uma variedade é “errada”?", "Porque cada variedade é adequada a um grupo e a uma situação; o que existe é adequação, e não erro.", 3),
    dis("Reescreva em linguagem formal: “E aí, tá ligado que a prova foi suave?”", "Você percebeu que a prova foi fácil? (ou: Você notou que a prova foi tranquila?)", 2)
  ]);

  G("coesao-coerencia", "Coesão e coerência textual", "Conectivos, pronomes, sinônimos e elipse; sentido lógico do texto.", [
    "**Coesão** é a ligação entre as partes do texto, feita por **conectivos** (//mas, porque, portanto//), **pronomes** (//ele, isso//), **sinônimos** e **elipse** (//Chegamos e [nós] saímos//).",
    "**Coerência** é a lógica do sentido: as ideias devem se combinar sem contradição e com relação ao tema.",
    "Um texto pode ter coesão e perder a coerência, ou o contrário."
  ], [
    ob("Em “Ana chegou e ela saiu logo”, //ela// retoma:", "Ana|logo|chegou|saiu", "A"),
    ob("O conectivo //portanto// estabelece relação de:", "oposição|conclusão|causa|tempo", "B"),
    ob("A retomada de “o menino” por “o garoto” é feita por:", "pronome|sinônimo|elipse|conjunção", "B"),
    ob("“Chegamos e saímos” tem a omissão do sujeito //nós// na 2ª oração, o que se chama:", "elipse|eufemismo|antítese|metonímia", "A"),
    ob("Uma frase como “Choveu, portanto o chão ficou seco” é:", "coesa e coerente|coesa, mas incoerente|coerente, mas sem coesão|nem coesa nem coerente", "B"),
    dis("Una as frases com conectivo adequado: “Estudou muito. Passou.”", "Estudou muito, por isso passou. (ou: portanto)", 2),
    dis("Reescreva evitando repetição: “Pedro comprou um livro. Pedro leu o livro.”", "Pedro comprou um livro e o leu.", 2),
    dis("Explique a diferença entre coesão e coerência.", "Coesão é a ligação formal entre as partes (conectivos, pronomes); coerência é a lógica do sentido do texto.", 3)
  ]);
})();
