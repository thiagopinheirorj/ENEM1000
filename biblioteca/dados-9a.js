/* 9º ano · Gramática (26 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("9"), ob = H.ob, dis = H.dis;

  function G(id, titulo, resumo, li, qs, extra) {
    var b = [H.te("Para lembrar", li)];
    if (extra) b.push(extra);
    b.push(H.qs(qs));
    Y.m("gramatica", "g-" + id, titulo, ["Gramática"], resumo, b);
  }
  var COORD = ["aditiva", "adversativa", "alternativa", "conclusiva", "explicativa"];

  G("revisao-termos", "Revisão: termos essenciais, integrantes e acessórios da oração", "Sujeito, predicado, objetos, adjuntos, agente da passiva, aposto e vocativo em um só quadro.", [
    "**Essenciais**: sujeito e predicado. **Integrantes**: complementam o sentido do verbo ou do nome (objeto direto, objeto indireto, complemento nominal, agente da passiva, predicativo).",
    "**Acessórios**: adjunto adnominal, adjunto adverbial e aposto. **Vocativo**: termo independente.",
    "Para analisar, encontre primeiro o **verbo** e pergunte: //quem? o quê? a quem? onde? quando?//"
  ], [
    ob("Em “Os alunos entregaram o trabalho ao professor ontem”, //ao professor// é:", "objeto direto|objeto indireto|adjunto adverbial|agente da passiva", "B"),
    ob("Em “O trabalho foi entregue pelos alunos”, //pelos alunos// é:", "sujeito|objeto direto|agente da passiva|adjunto adnominal", "C"),
    ob("Em “Carlos, meu irmão, chegou”, //meu irmão// é:", "vocativo|aposto|sujeito|predicativo", "B"),
    ob("Em “A leitura do livro agradou”, //do livro// é:", "complemento nominal|adjunto adnominal|objeto direto|aposto", "A"),
    ob("Em “Ela está ansiosa”, //ansiosa// é:", "adjunto adnominal|predicativo do sujeito|objeto direto|aposto", "B"),
    dis("Analise: “Ontem, entreguei o livro ao professor.”", "Ontem: adjunto adverbial de tempo; entreguei: verbo transitivo direto e indireto; o livro: objeto direto; ao professor: objeto indireto; sujeito oculto: eu.", 4),
    dis("Explique a diferença entre termos essenciais e acessórios.", "Os essenciais (sujeito e predicado) formam a oração; os acessórios (adjuntos, aposto) acrescentam informações e podem ser retirados sem destruir a oração.", 3),
    dis("Escreva uma frase com objeto indireto e adjunto adverbial de lugar.", "Resposta pessoal. Exemplo: “Contei a verdade ao meu irmão na cozinha.”", 2)
  ]);

  G("coordenadas-revisao", "Revisão: orações coordenadas sindéticas e assindéticas", "Reconhecer as cinco relações da coordenação e a pontuação que as acompanha.", [
    "**Aditivas** (e, nem), **adversativas** (mas, porém, contudo, todavia, entretanto), **alternativas** (ou… ou, ora… ora), **conclusivas** (logo, portanto, por isso, assim), **explicativas** (pois, que, porque, porquanto).",
    "As coordenadas são **independentes** sintaticamente. Costumam ser separadas por **vírgula** (ou ponto e vírgula)."
  ], [
    ob("“Estudou muito, ++mas não passou++.”", COORD, "B"),
    ob("“++Ou você estuda++, ou você trabalha.”", COORD, "C"),
    ob("“Estava cansado, ++portanto dormiu cedo++.”", COORD, "D"),
    ob("“Fique em casa, ++pois está chovendo++.”", COORD, "E"),
    ob("“Ele leu o livro ++e fez o resumo++.”", COORD, "A"),
    dis("Una com conjunção conclusiva: “Não ouvi o despertador. Cheguei atrasado.”", "Não ouvi o despertador; por isso (ou portanto), cheguei atrasado.", 2),
    dis("Una com conjunção adversativa: “A ideia é boa. É cara.”", "A ideia é boa, mas (ou porém, contudo) é cara.", 2),
    dis("Diferencie //pois// conclusivo de //pois// explicativo.", "Explicativo vem antes (ou no início): “Saia, pois chove”; conclusivo vem depois do verbo, entre vírgulas: “Chove; ficaremos, pois, em casa”.", 3)
  ]);

  G("subordinadas-substantivas", "Orações subordinadas substantivas: seis funções", "Subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa e apositiva.", [
    "A oração **substantiva** equivale a um substantivo e vem, em geral, com **que** ou **se** (conjunções integrantes).",
    "**Subjetiva**: sujeito (//É preciso **que você estude**//). **Objetiva direta**: objeto direto (//Disse **que viria**//). **Objetiva indireta**: objeto indireto (//Lembrei-me **de que tinha prova**//). **Completiva nominal**: complemento de nome (//Tenho medo **de que ele falte**//). **Predicativa**: predicativo (//O problema é **que ele faltou**//). **Apositiva**: aposto (//Só desejo isto: **que você volte**//).",
    "Teste: troque a oração por //isso// ou //tal coisa//."
  ], [
    ob("“É preciso ++que você estude++.” Função:", "objetiva direta|subjetiva|predicativa|apositiva", "B"),
    ob("“Disse ++que viria++.” Função:", "subjetiva|objetiva direta|completiva nominal|apositiva", "B"),
    ob("“Lembrei-me ++de que tinha prova++.” Função:", "objetiva direta|objetiva indireta|predicativa|subjetiva", "B"),
    ob("“Tenho medo ++de que ele falte++.” Função:", "completiva nominal|objetiva direta|subjetiva|adverbial", "A"),
    ob("“O problema é ++que ele faltou++.” Função:", "subjetiva|predicativa|apositiva|objetiva direta", "B"),
    dis("Una com oração substantiva objetiva direta: “Ele disse. Chegaria cedo.”", "Ele disse que chegaria cedo.", 2),
    dis("Reescreva transformando em subjetiva: “Sua presença é importante.” (use //que//)", "É importante que você esteja presente.", 2),
    dis("Identifique a apositiva: “Só quero uma coisa: que você me escute.”", "que você me escute (aposto de //uma coisa//).", 2)
  ]);

  G("subordinadas-adjetivas", "Orações subordinadas adjetivas e pronomes relativos com preposição", "Restritivas e explicativas; o livro de que gosto, a casa em que moro.", [
    "A **adjetiva** caracteriza um substantivo e inicia por **pronome relativo** (//que, quem, o qual, cujo, onde//).",
    "**Restritiva**: sem vírgula, restringe (//Os alunos **que estudaram** passaram//). **Explicativa**: entre vírgulas, explica (//Os alunos, **que estudaram**, passaram//).",
    "Com **preposição**: //O livro **de que** gosto//; //A casa **em que** moro//; //A pessoa **a quem** me refiro//; //O filme **a que** assisti//."
  ], [
    ob("“Os candidatos ++que fizeram boa prova++ foram aprovados.” Oração:", "explicativa|restritiva|substantiva|adverbial", "B"),
    ob("“Os candidatos, ++que fizeram boa prova++, foram aprovados.” Oração:", "restritiva|substantiva|explicativa|adverbial", "C"),
    ob("“O livro ___ gosto é de aventura.”", "que|de que|cujo|em que", "B"),
    ob("“A cidade ___ moro é tranquila.”", "que|em que|a que|de que", "B"),
    ob("“O filme ___ assisti era longo.”", "que|a que|de que|em que", "B"),
    dis("Explique a diferença de sentido entre (I) “Os candidatos que fizeram boa prova foram aprovados.” e (II) “Os candidatos, que fizeram boa prova, foram aprovados.”", "Em (I), só os candidatos que fizeram boa prova foram aprovados (restritiva); em (II), todos fizeram boa prova e todos foram aprovados (explicativa).", 4),
    dis("Una: “Este é o livro. Falei do livro ontem.”", "Este é o livro de que falei ontem.", 2),
    dis("Corrija: “A pessoa que eu me refiro chegou.”", "A pessoa a quem (ou a que) me refiro chegou.", 2)
  ]);

  G("adverbiais-1", "Orações subordinadas adverbiais I: causa, consequência, condição, concessão", "Conjunções e sentidos das quatro relações mais cobradas.", [
    "**Causa**: //porque, visto que, já que, uma vez que// (//Faltou **porque estava doente**//). **Consequência**: //tão… que, tanto… que// (//Estudou tanto **que passou**//).",
    "**Condição**: //se, caso, desde que, a menos que// (//**Se chover**, adiaremos//). **Concessão**: //embora, ainda que, mesmo que, apesar de que// (//**Embora estivesse cansado**, terminou//).",
    "Cuidado: **embora** não indica oposição de ideia como //mas//; ela admite um fato que não impede o outro."
  ], [
    ob("“++Visto que o ônibus atrasou++, perdemos a aula.” Relação:", "causa|consequência|condição|concessão", "A"),
    ob("“Estudou tanto ++que passou++.” Relação:", "causa|consequência|condição|concessão", "B"),
    ob("“++Caso chova++, o jogo será adiado.” Relação:", "causa|concessão|condição|finalidade", "C"),
    ob("“++Ainda que estivesse cansado++, ele terminou.” Relação:", "causa|consequência|condição|concessão", "D"),
    ob("Qual conjunção expressa concessão?", "porque|embora|se|logo", "B"),
    dis("Reescreva com concessão: “Estava cansada, mas terminou o trabalho.”", "Embora estivesse cansada, terminou o trabalho.", 2),
    dis("Reescreva com condição: “Estude e você passará.”", "Se você estudar, passará.", 2),
    dis("Una com consequência: “Choveu muito. O rio transbordou.”", "Choveu tanto que o rio transbordou.", 2)
  ]);

  G("adverbiais-2", "Orações subordinadas adverbiais II: tempo, finalidade, comparação, conformidade, proporção", "Conjunções e sentidos das demais relações adverbiais.", [
    "**Tempo**: //quando, enquanto, assim que, logo que, depois que//. **Finalidade**: //para que, a fim de que//. **Comparação**: //como, tal qual, mais… do que//. **Conformidade**: //conforme, segundo, consoante//. **Proporção**: //à medida que, quanto mais… mais//.",
    "A **subordinada adverbial** pode vir antes, depois ou no meio da principal; quando antecede, costuma ser separada por **vírgula**."
  ], [
    ob("“++Quando chegou++, todos saíram.” Relação:", "tempo|finalidade|conformidade|proporção", "A"),
    ob("“Estudou ++para que passasse++.” Relação:", "tempo|finalidade|comparação|causa", "B"),
    ob("“Fiz ++conforme você mandou++.” Relação:", "tempo|comparação|conformidade|proporção", "C"),
    ob("“++À medida que lia++, entendia mais.” Relação:", "tempo|proporção|causa|concessão", "B"),
    ob("“Ele é forte ++como um touro++.” Relação:", "comparação|conformidade|finalidade|tempo", "A"),
    dis("Una com finalidade: “Falou alto. Todos o ouviram.”", "Falou alto para que todos o ouvissem.", 2),
    dis("Una com conformidade: “Segui as instruções. Elas estavam no manual.”", "Segui as instruções conforme estavam no manual.", 2),
    dis("Escreva uma frase com oração de tempo antecipada, usando vírgula.", "Resposta pessoal. Exemplo: “Assim que a aula acabou, saímos.”", 2)
  ]);

  G("reduzidas", "Orações reduzidas: infinitivo, gerúndio e particípio", "Orações sem conjunção, com verbo em forma nominal.", [
    "A **oração reduzida** não tem conjunção nem pronome relativo, e seu verbo está no **infinitivo, gerúndio ou particípio**.",
    "**De infinitivo**: //Ao chegar, saudou todos.// (= Quando chegou). **De gerúndio**: //Chegando, saudou todos.// **De particípio**: //Terminado o trabalho, saiu.//",
    "Para identificar a relação (tempo, causa, condição…), **desenvolva** a oração com a conjunção adequada."
  ], [
    ob("“++Ao chegar++, saudou todos.” A oração reduzida é:", "de infinitivo|de gerúndio|de particípio|coordenada", "A"),
    ob("“++Chegando++, saudou todos.” A oração reduzida é:", "de infinitivo|de gerúndio|de particípio|adjetiva", "B"),
    ob("“++Terminado o trabalho++, saiu.” A oração reduzida é:", "de infinitivo|de gerúndio|de particípio|coordenada", "C"),
    ob("Desenvolvendo “Ao chegar, saudou todos”, temos:", "Embora chegasse, saudou.|Quando chegou, saudou todos.|Porque chegou, saudou.|Se chegasse, saudou.", "B"),
    ob("A oração reduzida de “Terminado o trabalho” equivale a:", "Quando o trabalho terminou|Embora terminasse|Para terminar|Porque não terminou", "A"),
    dis("Reescreva em oração reduzida: “Quando saiu de casa, encontrou a vizinha.”", "Ao sair de casa, encontrou a vizinha.", 2),
    dis("Desenvolva: “Estando cansado, dormiu cedo.”", "Como (ou porque) estava cansado, dormiu cedo.", 2),
    dis("Classifique a reduzida: “Feitas as contas, pagamos.”", "Oração reduzida de particípio (valor temporal).", 2)
  ]);

  G("pontuacao-periodo", "Pontuação no período composto", "Vírgula com orações adverbiais, adjetivas explicativas, apostos e coordenadas.", [
    "**Adverbial antes da principal**: vírgula (//Quando chegou, saímos//). Depois da principal: em geral, sem vírgula (//Saímos quando chegou//).",
    "**Adjetiva explicativa**: entre vírgulas. **Restritiva**: sem vírgula. **Coordenadas**: vírgula (//Estudou, mas não passou//).",
    "**Nunca** separe **sujeito e verbo** nem **verbo e complemento**, nem a **oração substantiva** de sua principal (//Disse que viria//)."
  ], [
    ob("Qual está bem pontuada?", "Quando chegou, saímos.|Quando chegou saímos.|Quando, chegou saímos.|Quando chegou saímos,", "A"),
    ob("Qual está bem pontuada?", "Os alunos que estudaram, passaram.|Os alunos que estudaram passaram.|Os alunos, que estudaram passaram.|Os alunos que, estudaram passaram.", "B"),
    ob("Qual está bem pontuada?", "Disse, que viria.|Disse que, viria.|Disse que viria.|Disse que viria,", "C"),
    ob("A vírgula em “Estudou, mas não passou” separa:", "sujeito e verbo|orações coordenadas|verbo e complemento|aposto", "B"),
    ob("A vírgula em “A cidade, que é pequena, é tranquila” isola oração:", "adjetiva explicativa|substantiva|adverbial|coordenada", "A"),
    dis("Pontue: “se você estudar bastante conseguirá aprovação e todos ficarão felizes”", "Se você estudar bastante, conseguirá aprovação, e todos ficarão felizes.", 2),
    dis("Pontue: “Os livros que li neste ano mudaram minha forma de pensar”", "Os livros que li neste ano mudaram minha forma de pensar. (restritiva, sem vírgulas)", 2),
    dis("Explique por que não se usa vírgula em “Espero que você venha”.", "Porque separaria a oração substantiva (objeto) do verbo da principal.", 2)
  ]);

  G("regencia-verbal", "Regência verbal: verbos que mais confundem", "Assistir, preferir, aspirar, visar, implicar, informar, esquecer, custar.", [
    "**Assistir** (ver): //a// (//Assisti ao filme//). **Preferir**: //preferir X a Y//. **Aspirar** (almejar): //a//; (respirar): sem preposição.",
    "**Visar** (objetivo): //a//; (mirar, pôr visto): sem preposição. **Implicar** (acarretar): sem preposição (//Isso implica mudanças//). **Informar**: //informar alguém de/sobre algo// ou //informar algo a alguém//.",
    "**Esquecer/lembrar**: sem pronome, OD (//Esqueci o livro//); com pronome, //de// (//Esqueci-me do livro//). **Custar** (ser difícil): //custa a alguém//."
  ], [
    ob("“Assisti ___ filme.” (ver)", "o|ao|do|no", "B"),
    ob("“Prefiro cinema ___ teatro.”", "do que|ao|que|de", "B"),
    ob("“Aspiro ___ cargo de diretor.”", "o|ao|do|no", "B"),
    ob("“A decisão implica ___ mudanças.”", "em|a|de|(sem preposição)", "D"),
    ob("“Informei ___ aluno do resultado.”", "ao|o|do|no", "A"),
    dis("Corrija: “Esqueci do livro em casa.”", "Esqueci o livro em casa. (ou: Esqueci-me do livro em casa.)", 2),
    dis("Corrija: “Prefiro mais ler do que escrever.”", "Prefiro ler a escrever.", 2),
    dis("Corrija: “Aspiro um cargo melhor.”", "Aspiro a um cargo melhor.", 2)
  ]);

  G("regencia-nominal", "Regência nominal", "Nomes (substantivos, adjetivos e advérbios) que exigem preposição.", [
    "**Regência nominal**: relação entre um **nome** e seu complemento (complemento nominal).",
    "//Medo **de**; respeito **a/por**; favorável **a**; contrário **a**; apto **a/para**; necessidade **de**; compatível **com**; ansioso **por/para**; residente **em**; acostumado **a**//.",
    "//Prefira//: //É favorável **a** mudanças//; //Tenho respeito **por** (ou **a**) todos//; //É contrário **a** isso//."
  ], [
    ob("“Ele é favorável ___ mudança.”", "à|de|em|por", "A"),
    ob("“Tenho medo ___ altura.”", "da|à|na|pela", "A"),
    ob("“É um filme compatível ___ sua idade.”", "a|com|em|de", "B"),
    ob("“Estou ansioso ___ ver você.”", "a|de|para|em", "C"),
    ob("“Ela é contrária ___ proposta.”", "à|da|na|pela", "A"),
    dis("Corrija: “Tenho respeito de todos.”", "Tenho respeito a (ou por) todos.", 2),
    dis("Corrija: “Ele é apto de dirigir.”", "Ele é apto a (ou para) dirigir.", 2),
    dis("Complete: “Há necessidade ___ mais professores.”", "de.", 2)
  ]);

  G("crase-casos", "Crase: casos especiais", "Nomes de lugar, horas, pronomes demonstrativos, locuções e proibições.", [
    "**Nomes de lugar**: teste: //Vou a/volto de//: se aparecer //da//, há crase (//Vou à Bahia// – //Volto da Bahia//; //Vou a Paris// – //Volto de Paris//).",
    "**Horas**: //às oito horas//, //à uma hora//. **Pronomes demonstrativos**: //àquele, àquela, àquilo//. **Locuções**: //à tarde, à vista, às pressas, à medida que//.",
    "**Proibido**: antes de masculino, verbo, pronome pessoal, //cada//, //todos// (//a todos//), expressões repetidas (//dia a dia//)."
  ], [
    ob("“Vou ___ Bahia.”", "a|à|há|as", "B"),
    ob("“Vou ___ Paris.”", "a|à|há|as", "A"),
    ob("“Chegarei ___ oito horas.”", "a|à|às|há", "C"),
    ob("“Referi-me ___ aquele aluno.”", "a|à|àquele|há", "C"),
    ob("“Ela fala ___ todos com educação.”", "a|à|às|há", "A"),
    dis("Explique o teste “volto da” para os nomes de lugar.", "Se na frase “Volto da…” aparece //da//, o nome aceita artigo, e há crase com //a//: “Vou à Bahia”. Se aparece //de//, não há crase: “Vou a Paris”.", 3),
    dis("Corrija: “Entregue o relatório a diretora às pressas.”", "Entregue o relatório à diretora às pressas.", 2),
    dis("Corrija: “Ele começou a estudar a tarde.”", "Ele começou a estudar à tarde.", 2)
  ]);

  G("concordancia-verbal", "Concordância verbal: casos especiais", "Verbos impessoais, voz passiva sintética, pronome relativo, mais de um, quem e que.", [
    "**Haver** (existir) e **fazer** (tempo) ficam no singular (//Houve problemas; Faz dois anos//). **Verbo + se** (passiva) concorda com o sujeito (//Vendem-se casas//); (VTI) fica no singular (//Precisa-se de vendedores//).",
    "**Mais de um** → singular (//Mais de um aluno faltou//). **Cerca de, perto de** + numeral → verbo concorda com o numeral (//Cerca de cem pessoas compareceram//).",
    "**Fui eu quem fez** / **Fui eu que fiz**: com //quem//, 3ª pessoa; com //que//, concorda com o antecedente."
  ], [
    ob("“___ dois anos que me formei.”", "Fazem|Faz|Fizeram|Fazia", "B"),
    ob("“Vendem-se casas” é:", "voz passiva sintética|voz ativa|sujeito indeterminado|oração sem sujeito", "A"),
    ob("Em “Precisa-se de vendedores”, o verbo //precisa// fica no singular porque:", "é VTI com índice de indeterminação|o sujeito é composto|é impessoal pelo sentido de haver|é passiva", "A"),
    ob("“Cerca de cem pessoas ___.”", "compareceu|compareceram|comparecera|comparecerá", "B"),
    ob("“Fui eu quem ___ a pergunta.”", "fiz|fez|fizemos|fizeram", "B"),
    dis("Corrija: “Houveram erros na prova.”", "Houve erros na prova.", 2),
    dis("Corrija: “Aluga-se casas.”", "Alugam-se casas.", 2),
    dis("Complete: “Mais de um aluno ___ (faltar).”", "faltou.", 2)
  ]);

  G("concordancia-nominal", "Concordância nominal: revisão avançada", "Bastante, possível, anexo, meio, só, menos, é bom/necessário/proibido.", [
    "**Bastante** (= suficiente, adjetivo) varia (//bastantes razões//); (= muito, advérbio) não varia (//Elas estudam bastante//). **Possível** concorda com o artigo anterior (//o mais possível; as menores falhas possíveis//).",
    "**Anexo, incluso, mesmo, próprio, quite** concordam com o nome (//Seguem anexas as fotos//). **Meio** (= um pouco) e **menos** não variam.",
    "**É proibido, é necessário, é bom** + substantivo sem artigo: invariável (//É proibido entrada//); com artigo, concorda (//É proibida a entrada//)."
  ], [
    ob("“Elas estudam ___.” (muito)", "bastante|bastantes|bastanta|bastantas", "A"),
    ob("“Seguem ___ as fotos.”", "anexo|anexa|anexas|anexos", "C"),
    ob("“Ela ficou ___ nervosa.”", "meio|meia|meios|meias", "A"),
    ob("“É ___ a entrada.” (com artigo)", "proibido|proibida|proibidos|proibidas", "B"),
    ob("“Elas ___ decidiram.”", "mesmo|mesma|mesmos|mesmas", "D"),
    dis("Corrija: “Seguem anexo as fotos.”", "Seguem anexas as fotos.", 2),
    dis("Corrija: “Elas estudam bastantes.” (= muito)", "Elas estudam bastante. (//Bastante//, como advérbio, é invariável.)", 2),
    dis("Explique a diferença entre //É necessário paciência// e //É necessária a paciência//.", "Sem artigo, //necessário// fica invariável; com artigo, concorda com o substantivo.", 3)
  ]);

  G("colocacao-pronominal", "Colocação pronominal: próclise, ênclise e mesóclise", "Onde colocar me, te, se, lhe, o, a em relação ao verbo.", [
    "**Ênclise** (depois do verbo): início de frase, após vírgula (//Diga-me//). **Próclise** (antes do verbo): palavras atrativas, como **não, que, já, nunca, também, advérbios, pronomes relativos** (//Não me diga//; //Quem te chamou?//).",
    "**Mesóclise** (no meio do verbo): futuro do presente e do pretérito, sem palavra atrativa (//Dar-lhe-ei o livro; far-se-ia//). Com atrativo: próclise (//Não lhe darei//).",
    "Em locuções verbais, o pronome vem após o auxiliar ou o principal, com hífen (//Vou-lhe dizer; Vou dizer-lhe//)."
  ], [
    ob("Segundo a norma-padrão, qual está correta?", "Me diga a verdade.|Diga-me a verdade.|Diga me a verdade.|Diga a me verdade.", "B"),
    ob("Qual está correta?", "Não diga-me nada.|Não me diga nada.|Não diga me nada.|Não-me diga nada.", "B"),
    ob("Qual está correta?", "Dar-lhe-ei o livro.|Darei-lhe o livro.|Lhe darei o livro.|Daria-lhe-ei o livro.", "A"),
    ob("“Quem ___ chamou?”", "chamou-te|te chamou|chamou te|chamou-te-ia", "B"),
    ob("Depois de vírgula, no início da oração, usa-se:", "próclise|ênclise|mesóclise|nenhuma", "B"),
    dis("Corrija: “Me disseram que o jogo foi adiado.”", "Disseram-me que o jogo foi adiado.", 2),
    dis("Corrija: “Não conte-me o final!”", "Não me conte o final!", 2),
    dis("Reescreva usando mesóclise: “Darei a você o livro amanhã.”", "Dar-lhe-ei o livro amanhã.", 2)
  ]);

  G("modos-subjuntivo-imperativo", "Subjuntivo e imperativo: formas e usos", "Presente, pretérito imperfeito e futuro do subjuntivo; imperativo afirmativo e negativo.", [
    "**Presente do subjuntivo**: //que eu faça, que tu faças, que ele faça//. **Imperfeito**: //se eu fizesse//. **Futuro**: //quando eu fizer, se ele vier//.",
    "**Imperativo afirmativo** (tu, você, nós, vós, vocês): //faze (tu), faça (você), façamos, fazei, façam//. **Negativo**: //não faças, não faça, não façamos, não façais, não façam//.",
    "O subjuntivo expressa **dúvida, desejo, hipótese**: //Espero que ele venha; se eu tivesse tempo; quando ele vier//."
  ], [
    ob("“Espero que ele ___ (vir).”", "vem|venha|vier|vinha", "B"),
    ob("“Quando ele ___ (vir), avise-me.”", "vem|venha|vier|veio", "C"),
    ob("“Se eu ___ (ter) tempo, viajaria.”", "tenho|tivesse|tiver|terei", "B"),
    ob("O imperativo negativo de //fazer// (você) é:", "não faz|não faça|não faze|não fará", "B"),
    ob("O imperativo afirmativo de //cantar// (tu) é:", "cantas|canta|cante|cantes", "B"),
    dis("Complete: “Se você ___ (ver) o professor, avise-o.”", "vir (futuro do subjuntivo de //ver//).", 2),
    dis("Passe para o imperativo negativo (você): “Faça barulho.”", "Não faça barulho.", 2),
    dis("Corrija: “Se você ver o resultado, me avise.”", "Se você vir o resultado, me avise.", 2)
  ]);

  G("verbos-derivados", "Verbos derivados de ter, vir, ver e pôr: acentos e formas", "Têm/vêm, mantém/mantêm, vir/vier, interveio, pôr/por.", [
    "**Ter, vir** e derivados: 3ª pessoa do singular **sem acento** em //tem//, //vem//; no plural, **com acento circunflexo** em //têm//, //vêm//; derivados: //ele mantém, eles mantêm; ele detém, eles detêm; ele intervém, eles intervêm//.",
    "**Ver**: //Se eu vir//, //quando ele vir//; **vir**: //quando ele vier, se eles vierem//. //Intervir//: //ele interveio, se ele intervier//.",
    "**Pôr** (verbo, com acento) × **por** (preposição). //Pôde// (pretérito) × //pode// (presente)."
  ], [
    ob("“Eles ___ (ter) razão.”", "tem|têm|teem|tém", "B"),
    ob("“Ele ___ (manter) a calma.”", "mantém|mantêm|mantem|mantein", "A"),
    ob("“Quando você ___ (vir), avise.” (verbo vir)", "vir|vier|vem|venha", "B"),
    ob("“Se eu ___ (ver) o professor, aviso.” (verbo ver)", "ver|vir|vejo|vi", "B"),
    ob("“Ontem ele não ___ (poder) chegar.”", "pode|pôde|podem|poderá", "B"),
    dis("Corrija: “Os alunos tem dúvidas.”", "Os alunos têm dúvidas.", 2),
    dis("Corrija: “Ele interviu na discussão.”", "Ele interveio na discussão.", 2),
    dis("Explique a diferença entre //por// e //pôr//.", "//Por// é preposição; //pôr// é o verbo (colocar) e leva acento circunflexo.", 2)
  ]);

  G("complemento-nominal", "Complemento nominal × adjunto adnominal", "Quando o termo ligado a um nome completa o sentido e quando só o caracteriza.", [
    "**Complemento nominal**: completa o sentido de um **substantivo abstrato, adjetivo ou advérbio**; recebe a ação ou o alvo (//A leitura **do livro**; Tenho medo **de altura**//).",
    "**Adjunto adnominal**: caracteriza ou determina um substantivo (//A casa **do vizinho**; livro **de aventura**//).",
    "Teste: se o nome é **abstrato** (leitura, amor, medo) e o termo é o **alvo**, é complemento nominal; se é **posse ou característica**, é adjunto."
  ], [
    ob("Em “A leitura do livro agradou”, //do livro// é:", "adjunto adnominal|complemento nominal|objeto direto|aposto", "B"),
    ob("Em “A casa do vizinho é azul”, //do vizinho// é:", "adjunto adnominal|complemento nominal|objeto direto|agente da passiva", "A"),
    ob("Em “Tenho medo de altura”, //de altura// é:", "adjunto adnominal|complemento nominal|objeto indireto|aposto", "B"),
    ob("Em “Livro de aventura”, //de aventura// é:", "complemento nominal|adjunto adnominal|objeto direto|predicativo", "B"),
    ob("Em “Estou ansioso pela resposta”, //pela resposta// é:", "complemento nominal|adjunto adnominal|objeto direto|agente da passiva", "A"),
    dis("Classifique o termo destacado: “A construção **da ponte** demorou.”", "Complemento nominal (//construção// é substantivo abstrato de ação; //da ponte// recebe a ação).", 3),
    dis("Classifique: “A ponte **de madeira** caiu.”", "Adjunto adnominal (característica).", 2),
    dis("Escreva uma frase com complemento nominal.", "Resposta pessoal. Exemplo: “Tenho respeito pelos professores.”", 2)
  ]);

  G("agente-passiva-predicativo", "Agente da passiva, predicativo do objeto e termos integrantes", "Revisão dos termos que completam verbos e nomes.", [
    "**Agente da passiva**: quem pratica a ação na voz passiva (//O vento derrubou a árvore → A árvore foi derrubada **pelo vento**//).",
    "**Predicativo do objeto**: caracteriza o objeto direto (//Julgaram o réu **inocente**//). **Predicativo do sujeito**: caracteriza o sujeito (//Ela está **feliz**//).",
    "O **objeto** na voz ativa vira **sujeito** na passiva; o **sujeito** da ativa vira **agente da passiva**."
  ], [
    ob("“O trabalho foi corrigido pela professora.” O agente da passiva é:", "o trabalho|pela professora|corrigido|foi", "B"),
    ob("Em “Acho o filme ótimo”, //ótimo// é:", "predicativo do sujeito|predicativo do objeto|adjunto adnominal|objeto indireto", "B"),
    ob("Em “Ela parece cansada”, //cansada// é:", "predicativo do objeto|predicativo do sujeito|adjunto adnominal|aposto", "B"),
    ob("A passiva de “Os alunos fizeram o trabalho” é:", "O trabalho foi feito pelos alunos.|Os alunos foram feitos pelo trabalho.|O trabalho fez os alunos.|Os alunos fazem o trabalho.", "A"),
    ob("Em “Chamaram-no de gênio”, //de gênio// é:", "predicativo do objeto|agente da passiva|adjunto adverbial|aposto", "A"),
    dis("Passe para a voz passiva: “A diretora recebeu os pais.”", "Os pais foram recebidos pela diretora.", 2),
    dis("Identifique o predicativo do objeto: “O professor considerou a prova difícil.”", "difícil.", 2),
    dis("Explique o que acontece com o sujeito da ativa na voz passiva.", "Ele passa a ser agente da passiva (introduzido por //por// ou //de//).", 2)
  ]);

  G("pronomes-emprego", "Emprego de pronomes: onde/aonde, o qual, cujo, a gente", "Escolhas que a norma-padrão exige e os erros mais comuns.", [
    "**Onde** (lugar onde se está): //A cidade onde moro//; **aonde** (a + onde, movimento): //Aonde você vai?//; **donde** (de + onde): //Donde vêm?//.",
    "**O qual, a qual** equivalem a //que// e são úteis com preposições ou para evitar ambiguidade (//O filme ao qual assisti//). **Cujo** concorda com a coisa possuída e não leva artigo depois (//A casa cuja porta//).",
    "**A gente** (= nós) é informal; leva verbo na 3ª pessoa do singular (//A gente foi//). Evite //cujo o//, //onde// para tempo, //mim fazer//."
  ], [
    ob("“___ você vai?”", "Onde|Aonde|Donde|Cujo", "B"),
    ob("“A cidade ___ nasci.”", "aonde|onde|cujo|a qual", "B"),
    ob("“O aluno ___ mochila sumiu chorou.”", "cujo|cuja|que|onde", "B"),
    ob("Qual frase está correta?", "Este é o livro cujo o autor conheço.|Este é o livro cujo autor conheço.|Este é o livro que o autor conheço.|Este é o livro onde autor conheço.", "B"),
    ob("“Isso é para ___ fazer.”", "mim|eu|me|nós", "B"),
    dis("Corrija: “Onde você vai nas férias?”", "Aonde você vai nas férias?", 2),
    dis("Corrija: “O livro que eu gosto é de aventura.”", "O livro de que gosto é de aventura.", 2),
    dis("Una: “Conheci a escritora. Os livros dela são ótimos.” (use //cujo//)", "Conheci a escritora cujos livros são ótimos.", 2)
  ]);

  G("coesao-referencial", "Coesão referencial e sequencial", "Anáfora, catáfora, conectivos e progressão textual.", [
    "**Coesão referencial**: retomada ou antecipação de termos por **pronomes, sinônimos, hiperônimos** (//Ana… ela… a jovem//). **Anáfora**: retoma o que já foi dito. **Catáfora**: antecipa o que vem.",
    "**Coesão sequencial**: **conectivos** que organizam as ideias (//além disso, no entanto, portanto, por exemplo//).",
    "A **repetição** de um termo pode ser proposital, mas o excesso empobrece o texto."
  ], [
    ob("Em “Ana chegou e ela sorriu”, //ela// é:", "anáfora|catáfora|elipse|metáfora", "A"),
    ob("Em “Só quero isto: paz.”, //isto// é:", "anáfora|catáfora|elipse|ironia", "B"),
    ob("A expressão //Além disso// indica:", "oposição|adição de argumento|conclusão|exemplo", "B"),
    ob("A retomada de “o menino” por “o garoto” é:", "pronome|sinônimo|elipse|conectivo", "B"),
    ob("O conectivo //no entanto// indica:", "adição|oposição|conclusão|tempo", "B"),
    dis("Reescreva evitando repetições: “A escola abriu a biblioteca. A escola quer que a biblioteca seja usada.”", "A escola abriu a biblioteca e quer que ela seja usada.", 3),
    dis("Que função tem //Por exemplo// em um texto argumentativo?", "Introduz exemplo que ilustra e sustenta o argumento.", 2),
    dis("Una com conectivo adequado: “O projeto é ousado. Pode ser realizado.” (oposição)", "O projeto é ousado; no entanto (ou contudo), pode ser realizado.", 2)
  ]);

  G("figuras-linguagem", "Figuras de linguagem: revisão ampliada", "Metáfora, metonímia, sinestesia, catacrese, antítese, paradoxo, ironia, gradação e elipse.", [
    "**Metáfora**, **comparação**, **metonímia**, **personificação**, **antítese**, **paradoxo**, **ironia**, **hipérbole**, **eufemismo**.",
    "**Sinestesia**: mistura de sentidos (//voz doce, cheiro verde, silêncio cortante//). **Catacrese**: metáfora já incorporada à língua (//pé da mesa, braço da cadeira//). **Gradação**: sequência crescente ou decrescente (//Chegou, viu, venceu//). **Elipse**: omissão de termo facilmente identificável (//Eu comprei pão; ela, leite//).",
    "Pergunte sempre: que **efeito de sentido** a figura cria?"
  ], [
    ob("“Voz doce” é um exemplo de:", "sinestesia|catacrese|ironia|elipse", "A"),
    ob("“O pé da mesa” é um exemplo de:", "sinestesia|catacrese|metonímia|paradoxo", "B"),
    ob("“Contentamento descontente” é:", "paradoxo|catacrese|gradação|elipse", "A"),
    ob("“Li Machado de Assis” é:", "metonímia|metáfora|ironia|eufemismo", "A"),
    ob("“Eu comprei pão; ela, leite” apresenta:", "elipse|catacrese|sinestesia|gradação", "A"),
    dis("Identifique a figura: a) “Silêncio cortante”; b) “Que dia lindo!” (em plena tempestade); c) “Morri de rir”.", "a) sinestesia (ou metáfora); b) ironia; c) hipérbole.", 3),
    dis("Crie uma antítese.", "Resposta pessoal. Exemplo: “Era uma noite clara e escura ao mesmo tempo.”", 2),
    dis("Que efeito tem a ironia em um texto de crítica?", "Critica sem declarar diretamente, criando humor e levando o leitor a perceber o contraste.", 3)
  ]);

  G("variacao-norma", "Variação linguística e norma-padrão", "Norma culta, norma-padrão, registros e adequação nos gêneros.", [
    "**Norma-padrão**: conjunto de regras da gramática normativa. **Norma culta**: uso real de falantes escolarizados em situações formais. **Variedades**: regionais, sociais, situacionais e históricas.",
    "**Adequação**: a escolha da variedade e do **registro** (formal ou informal) depende do **interlocutor**, do **gênero** e da **situação**.",
    "**Preconceito linguístico** é julgar alguém pela sua fala; a escola deve ensinar a norma culta sem desvalorizar outras variedades."
  ], [
    ob("Uma entrevista de emprego exige registro:", "informal|formal|regional apenas|gírias", "B"),
    ob("A fala “nóis vai” em uma conversa informal é:", "um erro absoluto|variação adequada a certos contextos, mas não à norma culta escrita|ofensa|proibida sempre", "B"),
    ob("A norma-padrão é:", "o conjunto de regras prescritas pela gramática normativa|a fala de todos|a gíria|um dialeto regional", "A"),
    ob("O preconceito linguístico ocorre quando:", "se julga alguém pelo seu jeito de falar|se aprende a norma culta|se escreve bem|se lê muito", "A"),
    ob("A escolha de “Prezado senhor” em um e-mail mostra:", "adequação ao registro formal|erro de concordância|gíria|variação regional", "A"),
    dis("Reescreva em linguagem formal: “E aí, cara, tô sem tempo pra ir na reunião.”", "Prezado colega, não poderei comparecer à reunião por falta de tempo.", 2),
    dis("Por que se diz que não existe “fala errada”, e sim fala inadequada?", "Porque cada variedade é válida em seu grupo; o que varia é a adequação à situação.", 3),
    dis("Dê um exemplo de variação regional.", "Exemplos: mandioca/aipim/macaxeira; pipa/papagaio/raia.", 2)
  ]);

  G("semantica", "Polissemia, ambiguidade, denotação e conotação", "Sentidos das palavras e das frases: como o contexto os define.", [
    "**Polissemia**: uma palavra com vários sentidos (//manga// da camisa, //manga// fruta; //banco//). **Denotação**: sentido literal. **Conotação**: sentido figurado.",
    "**Ambiguidade**: frase que permite duas leituras (//Vi o homem com o binóculo//: quem tem o binóculo?). Pode ser **defeito** (confusão) ou **recurso** (humor, poesia).",
    "O **contexto** define o sentido."
  ], [
    ob("“Manga” nas frases “comi uma manga” e “a manga da camisa” é exemplo de:", "polissemia|sinonímia|antonímia|elipse", "A"),
    ob("“Ele tem um coração de ouro” usa a palavra //ouro// em sentido:", "denotativo|conotativo|literal|técnico", "B"),
    ob("“Vi o homem com o binóculo” é:", "ambígua|clara|elíptica|irônica", "A"),
    ob("Em “O banco está lotado”, o sentido de //banco// depende:", "do contexto|da pontuação|do tamanho|de nada", "A"),
    ob("A ambiguidade pode ser usada como recurso em:", "piadas e poemas|bulas de remédio|manuais técnicos|leis", "A"),
    dis("Desfaça a ambiguidade de duas maneiras: “A mãe de Ana viu a filha dela chegando.”", "A mãe viu a própria filha chegar. / A mãe de Ana viu a filha de outra pessoa chegando. (O pronome //dela// pode se referir a //Ana// ou à //mãe//.)", 3),
    dis("Explique dois sentidos da palavra //pena//.", "Penas das aves; sentimento de piedade; castigo (outros são aceitos).", 2),
    dis("Reescreva em sentido denotativo: “O professor é uma fera.”", "O professor é muito exigente (ou severo).", 2)
  ]);

  G("ortografia-hifen-acento", "Ortografia: hífen e acento diferencial", "Regras básicas do hífen no novo acordo e palavras com acento diferencial.", [
    "**Hífen** em prefixos: antes de **h** (//anti-higiênico, super-homem//) e quando o prefixo termina na mesma vogal que a palavra inicia (//micro-ondas, anti-inflamatório//). **Sem hífen** com prefixo terminado em vogal e palavra começando por consoante ou vogal diferente (//autoescola, extraordinário, infraestrutura, semiaberto//).",
    "Com **r** ou **s**, dobra-se a letra (//antissocial, ultrassom, minissaia//).",
    "**Acento diferencial**: //pôr (verbo) × por (preposição)//, //pôde (pretérito) × pode (presente)//, //têm × tem//, //vêm × vem//."
  ], [
    ob("Qual está correta?", "autoescola|auto-escola|autoécola|auto escola", "A"),
    ob("Qual está correta?", "anti-higiênico|antihigiênico|anti higiênico|antiiigiênico", "A"),
    ob("Qual está correta?", "anti-social|antissocial|antisocial|anti social", "B"),
    ob("Qual está correta?", "micro-ondas|microondas|micro ondas|microonda", "A"),
    ob("Qual frase está correta?", "Ela pode ir ontem.|Ela pôde ir ontem.|Ela póde ir ontem.|Ela pôde ir ontém.", "B"),
    dis("Corrija: “infra-estrutura”, “semi-aberto”, “auto-escola”.", "infraestrutura, semiaberto, autoescola.", 2),
    dis("Explique a regra do hífen em //micro-ondas//.", "O prefixo //micro-// termina em //o// e a palavra seguinte começa por //o//: vogais iguais, usa-se hífen.", 3),
    dis("Escreva duas palavras com //super// e hífen.", "super-homem; super-resistente.", 2)
  ]);

  G("ortografia-parecidas", "Palavras que confundem: onde/aonde, demais/de mais, ao encontro/de encontro e outros pares", "Pares que aparecem em redações e vestibulares.", [
    "**Demais** (advérbio, muito): //Ela fala demais//. **De mais** (oposto de //de menos//): //Não há nada de mais//. **Ao encontro de** (favorável): //O projeto vai ao encontro dos interesses//. **De encontro a** (contra): //A decisão foi de encontro à lei//.",
    "**Traz** (verbo trazer), **trás** (atrás), **atrás**. **A fim de** (finalidade) × **afim** (semelhante). **Se não** × **senão**. **Mal** × **mau**. **Há** × **a**. **Acerca de** × **há cerca de**.",
    "**Porque** (resposta), **por que** (pergunta), **por quê** (fim), **porquê** (substantivo)."
  ], [
    ob("“Ela fala ___.” (muito)", "demais|de mais|demaiz|de maz", "A"),
    ob("“O projeto vai ___ dos interesses da escola.” (a favor)", "ao encontro|de encontro|ao encontro de|de encontro a", "C"),
    ob("“A medida foi ___ à lei.” (contra)", "ao encontro|de encontro|ao encontro de|a encontro", "B"),
    ob("“Estudo ___ passar.” (finalidade)", "afim de|a fim de|afim|a fim", "B"),
    ob("“Ele ___ o livro.” (verbo trazer)", "traz|trás|atraz|trais", "A"),
    dis("Explique a diferença entre //demais// e //de mais//.", "//Demais//: advérbio (muito) ou pronome (outros); //de mais//: oposto de //de menos// (“Não há nada de mais”).", 3),
    dis("Corrija: “Chegou afim de ajudar.”", "Chegou a fim de ajudar.", 2),
    dis("Corrija: “A proposta foi ao encontro da lei” (se for contra).", "A proposta foi de encontro à lei.", 2)
  ]);

  G("siglas-abreviaturas", "Siglas, abreviaturas, símbolos e empréstimos", "Como escrever Sr., IBGE, km, kg e estrangeirismos de forma adequada.", [
    "**Abreviatura**: forma reduzida de palavra, com ponto (//Sr., Dra., pág., etc.//). **Sigla**: formada pelas iniciais, sem pontos (//ONU, IBGE, SUS//). **Acrônimo**: sigla lida como palavra (//Anvisa, Unesco//).",
    "**Símbolos**: sem ponto e sem plural: //10 km, 5 kg, 3 m²//. Maiúsculas e minúsculas seguem a convenção (//km, kg, W//).",
    "**Empréstimos e estrangeirismos**: preferir o termo em português quando houver equivalente claro (//apresentação// em vez de //presentation//); registrar como estrangeirismo quando mantidos (//delivery//)."
  ], [
    ob("Qual é uma sigla?", "Sr.|IBGE|etc.|pág.", "B"),
    ob("A grafia correta do símbolo é:", "10 kms|10 km|10 Km.|10 kM", "B"),
    ob("“Dra.” é:", "sigla|abreviatura|símbolo|acrônimo", "B"),
    ob("“Anvisa” é:", "abreviatura|símbolo|acrônimo|estrangeirismo", "C"),
    ob("O plural correto é:", "5 kgs|5 kg|5 Kg.|5 kilos.", "B"),
    dis("Escreva por extenso: “IBGE”, “ONU”, “SUS”.", "Instituto Brasileiro de Geografia e Estatística; Organização das Nações Unidas; Sistema Único de Saúde.", 3),
    dis("Corrija: “O trajeto tem 12 kms.”", "O trajeto tem 12 km.", 2),
    dis("Cite dois estrangeirismos usados no dia a dia e seus equivalentes em português, se houver.", "Exemplos: delivery (entrega), e-mail (correio eletrônico), shopping (centro comercial).", 3)
  ]);
})();
