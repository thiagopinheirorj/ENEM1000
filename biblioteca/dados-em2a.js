/* 2º ano do Ensino Médio · Gramática (18 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("2EM"), ob = H.ob, dis = H.dis;

  function G(id, titulo, resumo, li, qs, extra) {
    /* distribui a posição da resposta correta nas objetivas, sem alterar qual alternativa é a certa */
    var hash = id.split("").reduce(function (x, ch) { return x + ch.charCodeAt(0); }, 0);
    var alvo = [2, 0, 3, 1, 3, 0, 1, 2], k = hash % 6;
    qs.forEach(function (q) {
      if (!q.alt) return;
      var t = alvo[k++ % alvo.length] % q.alt.length, tmp = q.alt[t];
      q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
    });
    var b = [H.te("Para lembrar", li)];
    if (extra) b.push(extra);
    b.push(H.qs(qs));
    Y.m("gramatica", "g-" + id, titulo, ["Gramática"], resumo, b);
  }

  G("coordenacao", "Período composto por coordenação: revisão aprofundada", "Orações assindéticas e sindéticas, valores das conjunções e pontuação.", [
    "**Assindética**: sem conjunção. **Sindética**: aditiva (//e, nem//), adversativa (//mas, porém, contudo, todavia, entretanto//), alternativa (//ou… ou, ora… ora//), conclusiva (//logo, portanto, pois (posposto)//), explicativa (//pois, que, porquanto//).",
    "//Pois// é **conclusivo** quando vem depois do verbo, entre vírgulas (//Estudou; passou, pois//), e **explicativo** quando vem antes (//Saia, pois chove//).",
    "A **vírgula** costuma preceder //mas, porém, contudo//; antes do //e// aditivo, só quando os sujeitos são diferentes."
  ], [
    ob("“Estudou muito, ++mas não passou++.” Oração:", "aditiva|adversativa|conclusiva|explicativa", "B"),
    ob("“Penso, ++logo existo++.” Oração:", "adversativa|conclusiva|explicativa|alternativa", "B"),
    ob("“Saia, ++pois chove++.” Oração:", "conclusiva|explicativa|adversativa|aditiva", "B"),
    ob("“Estudou muito; passou, ++pois++, no concurso.” Valor de //pois//:", "explicativo|conclusivo|adversativo|aditivo", "B"),
    ob("“++Ora chora++, ora ri.” Oração:", "aditiva|alternativa|conclusiva|adversativa", "B"),
    dis("Una com conjunção conclusiva: “O trânsito parou. Cheguei atrasado.”", "O trânsito parou; por isso (portanto), cheguei atrasado.", 2),
    dis("Explique a diferença de sentido do //pois// em “Saia, pois chove” e em “Chove; ficaremos, pois, em casa”.", "No primeiro, explicativo (explica o motivo); no segundo, conclusivo (indica conclusão).", 3)
  ]);

  G("subordinadas-substantivas", "Orações subordinadas substantivas", "Subjetiva, objetiva direta e indireta, completiva nominal, predicativa e apositiva.", [
    "Equivalem a um substantivo e vêm com **que** ou **se** (conjunções integrantes). **Subjetiva** (sujeito): //É preciso que estude//. **Objetiva direta**: //Disse que viria//. **Objetiva indireta**: //Lembrei-me de que tinha prova//. **Completiva nominal**: //Tenho medo de que falte//. **Predicativa**: //O problema é que faltou//. **Apositiva**: //Só quero isto: que volte//.",
    "Teste: troque por //isso//. Verifique se há **preposição** (indireta, completiva nominal) ou não."
  ], [
    ob("“É preciso ++que você estude++.” Função:", "objetiva direta|subjetiva|predicativa|apositiva", "B"),
    ob("“Disse ++que viria++.” Função:", "subjetiva|objetiva direta|completiva nominal|predicativa", "B"),
    ob("“Lembrei-me ++de que tinha prova++.” Função:", "objetiva direta|objetiva indireta|predicativa|subjetiva", "B"),
    ob("“Tenho certeza ++de que ele virá++.” Função:", "completiva nominal|objetiva direta|subjetiva|adverbial", "A"),
    ob("“O problema é ++que ele faltou++.” Função:", "subjetiva|predicativa|apositiva|objetiva direta", "B"),
    dis("Una com objetiva direta: “Ele afirmou. A reunião acabou.”", "Ele afirmou que a reunião acabou.", 2),
    dis("Identifique a apositiva: “Só desejo uma coisa: que você esteja bem.”", "que você esteja bem.", 2)
  ]);

  G("subordinadas-adjetivas", "Orações subordinadas adjetivas", "Restritivas e explicativas; pronomes relativos com preposição; cujo.", [
    "Iniciadas por **pronome relativo** (//que, quem, o qual, cujo, onde, quanto//). **Restritiva**: sem vírgula, restringe (//Os alunos que estudaram passaram//). **Explicativa**: entre vírgulas, explica (//Os alunos, que estudaram, passaram//).",
    "Com **preposição**: //O livro de que gosto//; //A casa em que moro//; //A pessoa a quem me refiro//; //O filme a que assisti//.",
    "**Cujo** concorda com o que é possuído e não leva artigo depois: //A escritora cujos livros li//."
  ], [
    ob("“Os candidatos ++que fizeram boa prova++ foram aprovados.” Oração:", "explicativa|restritiva|substantiva|adverbial", "B"),
    ob("“Os candidatos, ++que fizeram boa prova++, foram aprovados.” Oração:", "restritiva|substantiva|explicativa|adverbial", "C"),
    ob("“O filme ___ assisti era longo.”", "que|a que|de que|em que", "B"),
    ob("“A escritora ___ livros li visitou a escola.”", "cujo|cuja|cujos|cujas", "C"),
    ob("“A cidade ___ nasci é pequena.”", "que|em que|a que|de que", "B"),
    dis("Una: “Este é o livro. Falei do livro ontem.”", "Este é o livro de que falei ontem.", 2),
    dis("Explique a diferença de sentido entre as duas primeiras frases.", "Na restritiva, só os candidatos que fizeram boa prova foram aprovados; na explicativa, todos fizeram boa prova e foram aprovados.", 3)
  ]);

  G("subordinadas-adverbiais", "Orações subordinadas adverbiais", "Causa, consequência, condição, concessão, tempo, finalidade, comparação, conformidade e proporção.", [
    "**Causa**: //porque, visto que, já que//. **Consequência**: //tão… que//. **Condição**: //se, caso, desde que//. **Concessão**: //embora, ainda que, mesmo que//. **Tempo**: //quando, assim que, enquanto//. **Finalidade**: //para que//. **Comparação**: //como//. **Conformidade**: //conforme, segundo//. **Proporção**: //à medida que//.",
    "A subordinada antecedente leva **vírgula**: //Quando chegou, saímos//."
  ], [
    ob("“++Visto que o ônibus atrasou++, perdemos a aula.” Relação:", "causa|consequência|condição|concessão", "A"),
    ob("“++Embora estivesse cansado++, ele terminou.” Relação:", "causa|consequência|condição|concessão", "D"),
    ob("“++Caso chova++, o jogo será adiado.” Relação:", "causa|concessão|condição|finalidade", "C"),
    ob("“Estudou ++para que passasse++.” Relação:", "finalidade|causa|tempo|comparação", "A"),
    ob("“++À medida que lia++, entendia mais.” Relação:", "tempo|proporção|causa|concessão", "B"),
    dis("Reescreva com concessão: “Estava cansada, mas terminou o trabalho.”", "Embora estivesse cansada, terminou o trabalho.", 2),
    dis("Una com consequência: “Choveu muito. O rio transbordou.”", "Choveu tanto que o rio transbordou.", 2)
  ]);

  G("reduzidas", "Orações reduzidas e desenvolvimento", "Infinitivo, gerúndio e particípio; como desenvolver e qual relação expressam.", [
    "A **oração reduzida** não tem conjunção e seu verbo está em forma nominal. **De infinitivo**: //Ao chegar, saudou todos// (= Quando chegou). **De gerúndio**: //Chegando, saudou todos//. **De particípio**: //Terminado o trabalho, saiu//.",
    "Para descobrir a relação (tempo, causa, condição, concessão…), **desenvolva** a oração com conjunção."
  ], [
    ob("“++Ao chegar++, saudou todos.” Oração reduzida de:", "infinitivo|gerúndio|particípio|desenvolvida", "A"),
    ob("“++Terminado o trabalho++, saiu.” Oração reduzida de:", "infinitivo|gerúndio|particípio|desenvolvida", "C"),
    ob("“++Chegando cedo++, pegará lugar.” Relação (condição):", "tempo|condição|causa|concessão", "B"),
    ob("A forma desenvolvida de “Ao sair de casa” é:", "Embora saísse|Quando saiu|Porque saiu|Se saísse", "B"),
    dis("Reduza: “Quando saiu de casa, encontrou a vizinha.”", "Ao sair de casa, encontrou a vizinha.", 2),
    dis("Desenvolva: “Sendo estudioso, passou.”", "Como (ou porque) era estudioso, passou.", 2)
  ]);

  G("concordancia-verbal", "Concordância verbal: casos especiais", "Sujeito composto, impessoais, voz passiva, expressões partitivas e pronomes relativos.", [
    "**Haver** (existir) e **fazer** (tempo): singular. **Verbo + se**: passiva concorda; VTI no singular. **Mais de um**: singular. **Cerca de + numeral**: concorda com o numeral.",
    "**Sujeito composto** posposto: pode concordar com o mais próximo ou com todos (//Chegou o pai e a mãe// / //Chegaram o pai e a mãe//). **Fui eu quem fez** / **Fui eu que fiz**.",
    "**Ligado por //ou//**: se exclui, singular (//Ana ou Bia será presidente//); se soma, plural."
  ], [
    ob("“___ dois anos que me formei.”", "Fazem|Faz|Fizeram|Faziam", "B"),
    ob("“Vendem-se casas” é:", "passiva sintética|ativa|indeterminação|sem sujeito", "A"),
    ob("“Cerca de cem pessoas ___.”", "compareceu|compareceram|comparecera|comparecerá", "B"),
    ob("“Fui eu quem ___ a pergunta.”", "fiz|fez|fizemos|fizeram", "B"),
    ob("“Mais de um aluno ___.”", "faltaram|faltou|faltavam|faltarão", "B"),
    dis("Corrija: “Houveram erros na prova.”", "Houve erros na prova.", 2),
    dis("Corrija: “Aluga-se casas.”", "Alugam-se casas.", 2)
  ]);

  G("concordancia-nominal", "Concordância nominal: casos especiais", "Meio, bastante, anexo, mesmo, possível, é proibido/necessário.", [
    "**Bastante** (= muito) e **meio** (= um pouco) como advérbios: **invariáveis**. **Anexo, incluso, mesmo, próprio, quite**: concordam. **Possível** com //o mais, o menos, as menores//: concorda com o artigo (//as menores falhas possíveis//).",
    "**É proibido / necessário / bom** + substantivo sem artigo: invariável (//É necessário paciência//); com artigo, concorda (//É necessária a paciência//)."
  ], [
    ob("“Elas estudam ___.” (muito)", "bastante|bastantes|bastanta|bastantas", "A"),
    ob("“Seguem ___ as fotos.”", "anexo|anexa|anexas|anexos", "C"),
    ob("“Ela ficou ___ nervosa.”", "meio|meia|meios|meias", "A"),
    ob("“É ___ a entrada.” (com artigo)", "proibido|proibida|proibidos|proibidas", "B"),
    ob("“Elas ___ decidiram.”", "mesmo|mesma|mesmos|mesmas", "D"),
    dis("Corrija: “Segue anexo as fotos.”", "Seguem anexas as fotos.", 2),
    dis("Explique a diferença entre //É necessário paciência// e //É necessária a paciência//.", "Sem artigo, o adjetivo fica invariável; com artigo, concorda com o substantivo.", 3)
  ]);

  G("regencia-verbal", "Regência verbal: casos frequentes", "Assistir, preferir, aspirar, visar, implicar, informar, esquecer, custar e outros.", [
    "**Assistir** (ver): //a//. **Preferir**: //X a Y//. **Aspirar** (almejar): //a//. **Visar** (objetivo): //a//. **Implicar** (acarretar): sem preposição. **Informar**: //alguém de/sobre algo// ou //algo a alguém//.",
    "**Esquecer/lembrar**: sem pronome, OD; com pronome, //de//. **Custar** (ser difícil): //custa a alguém//. **Chegar, ir**: //a//."
  ], [
    ob("“Assisti ___ filme.”", "o|ao|do|no", "B"),
    ob("“Prefiro cinema ___ teatro.”", "do que|ao|que|de", "B"),
    ob("“Aspiro ___ cargo de diretor.”", "o|ao|do|no", "B"),
    ob("“A decisão implica ___ mudanças.”", "em|a|de|(sem preposição)", "D"),
    ob("“Esqueci-___ do livro.”", "se|me|te|lhe", "B"),
    dis("Corrija: “Prefiro mais ler do que escrever.”", "Prefiro ler a escrever.", 2),
    dis("Corrija: “Aquele cargo todos aspiram.”", "Todos aspiram àquele cargo.", 2)
  ]);

  G("regencia-nominal", "Regência nominal", "Nomes que exigem preposição: medo de, respeito a, favorável a, compatível com.", [
    "**Regência nominal**: relação entre um nome e seu complemento. //Medo **de**; respeito **a/por**; favorável **a**; contrário **a**; apto **a/para**; necessidade **de**; compatível **com**; ansioso **por/para**; residente **em**; acostumado **a**//."
  ], [
    ob("“Ele é favorável ___ mudança.”", "à|de|em|por", "A"),
    ob("“Tenho medo ___ altura.”", "da|à|na|pela", "A"),
    ob("“É um filme compatível ___ sua idade.”", "a|com|em|de", "B"),
    ob("“Estou ansioso ___ ver você.”", "a|de|para|em", "C"),
    dis("Corrija: “Tenho respeito de todos.”", "Tenho respeito a (ou por) todos.", 2),
    dis("Corrija: “Ele é apto de dirigir.”", "Ele é apto a (ou para) dirigir.", 2)
  ]);

  G("crase", "Crase: regra geral e casos especiais", "Nomes de lugar, horas, pronomes demonstrativos, locuções e proibições.", [
    "**Crase** = a + a. **Teste**: troque por masculino; se aparecer //ao//, há crase. **Nomes de lugar**: //Vou à Bahia// (volto **da**) × //Vou a Paris// (volto **de**).",
    "**Horas**: //às oito horas//. **Demonstrativos**: //àquele, àquela, àquilo//. **Locuções**: //à noite, às vezes, à vista//. **Proibido**: masculino, verbos, pronomes pessoais, //todos//, //cada//."
  ], [
    ob("“Vou ___ Bahia.”", "a|à|há|as", "B"),
    ob("“Vou ___ Paris.”", "a|à|há|as", "A"),
    ob("“Chegarei ___ oito horas.”", "a|à|às|há", "C"),
    ob("“Referi-me ___ aquele aluno.”", "a|à|àquele|há", "C"),
    ob("“Ela fala ___ todos com educação.”", "a|à|às|há", "A"),
    dis("Corrija: “Entregue o relatório a diretora às pressas.”", "Entregue o relatório à diretora às pressas.", 2),
    dis("Explique o teste do “volto da” para nomes de lugar.", "Se aparece //da//, o nome aceita artigo, e há crase; se aparece //de//, não há crase.", 3)
  ]);

  G("colocacao-pronominal", "Colocação pronominal: próclise, ênclise e mesóclise", "Posição dos pronomes oblíquos átonos.", [
    "**Ênclise**: início de frase, depois de vírgula: //Diga-me//. **Próclise**: palavras atrativas (não, que, já, nunca, também, advérbios, pronomes relativos): //Não me diga//. **Mesóclise**: futuro do presente e do pretérito sem atrativo: //Dar-lhe-ei//.",
    "Em locuções verbais: //Vou-lhe dizer//, //Vou dizer-lhe//."
  ], [
    ob("Segundo a norma-padrão, está correta:", "Me diga a verdade.|Diga-me a verdade.|Diga me a verdade.|Diga a me verdade.", "B"),
    ob("Está correta:", "Não diga-me nada.|Não me diga nada.|Não-me diga nada.|Não diga me nada.", "B"),
    ob("Está correta:", "Dar-lhe-ei o livro.|Darei-lhe o livro.|Lhe darei o livro.|Daria-lhe-ei o livro.", "A"),
    ob("“Quem ___ chamou?”", "chamou-te|te chamou|chamou te|chamou-te-ia", "B"),
    dis("Corrija: “Me disseram que o jogo foi adiado.”", "Disseram-me que o jogo foi adiado.", 2),
    dis("Reescreva com mesóclise: “Darei a você o livro amanhã.”", "Dar-lhe-ei o livro amanhã.", 2)
  ]);

  G("pontuacao", "Pontuação no período composto e no texto argumentativo", "Vírgula, ponto e vírgula, dois-pontos, aspas e travessão; efeito de sentido.", [
    "**Vírgula**: adverbial antes da principal, adjetiva explicativa, aposto, vocativo, coordenadas. **Nunca**: sujeito e verbo, verbo e complemento, oração substantiva e principal.",
    "**Ponto e vírgula**: separa orações longas. **Dois-pontos**: enumeração, citação, explicação. **Aspas**: citação, ironia, termo estrangeiro. A pontuação **muda o sentido** (//Os alunos que estudaram passaram// × //Os alunos, que estudaram, passaram//)."
  ], [
    ob("Qual está bem pontuada?", "Os alunos, chegaram.|Quando chegou, saímos.|Comprei, pão e leite.|Ele disse, que viria.", "B"),
    ob("A vírgula em “Carlos, meu irmão, chegou” isola:", "vocativo|aposto|enumeração|sujeito", "B"),
    ob("Os dois-pontos em “Trouxe três coisas: pão, leite e queijo” introduzem:", "uma enumeração|uma pergunta|uma ironia|um erro", "A"),
    ob("As aspas em O “gênio” esqueceu a mochila indicam:", "ironia|citação literal|título|estrangeirismo", "A"),
    dis("Pontue: “se você estudar bastante conseguirá aprovação e todos ficarão felizes”", "Se você estudar bastante, conseguirá aprovação, e todos ficarão felizes.", 2),
    dis("Explique a diferença de sentido entre as duas frases do quadro “Para lembrar”.", "Sem vírgulas, só os alunos que estudaram passaram; com vírgulas, todos estudaram e passaram.", 3)
  ]);

  G("porques-paronimos", "Emprego dos porquês e palavras parônimas", "Porque, por que, por quê, porquê; mal/mau; a fim/afim; demais/de mais; ao encontro/de encontro.", [
    "**Porque** (explicação), **por que** (pergunta ou “pelo qual”), **por quê** (fim de frase), **porquê** (substantivo).",
    "**Mal** × **mau**; **a fim de** (finalidade) × **afim** (semelhante); **demais** (muito) × **de mais** (oposto de //de menos//); **ao encontro de** (a favor) × **de encontro a** (contra); **onde** × **aonde**; **senão** × **se não**; **acerca de** × **há cerca de**."
  ], [
    ob("“___ você faltou?”", "Porque|Por que|Porquê|Por quê", "B"),
    ob("“Faltei ___ estava doente.”", "porque|por que|porquê|por quê", "A"),
    ob("“Não entendi o ___ da briga.”", "porque|por que|porquê|por quê", "C"),
    ob("“A medida foi ___ à lei.” (contra)", "ao encontro|de encontro|ao encontro de|a encontro", "B"),
    ob("“Ela fala ___.” (muito)", "demais|de mais|demaiz|de maz", "A"),
    dis("Corrija: “Estudo afim de passar.”", "Estudo a fim de passar.", 2),
    dis("Explique a diferença entre //ao encontro de// e //de encontro a//.", "//Ao encontro de//: a favor, em direção a; //de encontro a//: contra, em oposição.", 3)
  ]);

  G("vozes-agente", "Vozes verbais, agente da passiva e predicativos", "Ativa, passiva (analítica e sintética), reflexiva e termos ligados ao verbo.", [
    "**Ativa**: sujeito pratica. **Passiva analítica**: //ser + particípio// (//A bola foi chutada pelo menino//). **Passiva sintética**: //verbo + se// (//Vendem-se casas//). **Reflexiva**: sujeito pratica e sofre (//O menino se feriu//).",
    "**Agente da passiva**: quem pratica a ação na passiva (//pelo menino//). **Predicativo do sujeito** (//Ela está feliz//) e **do objeto** (//Julgaram o réu inocente//)."
  ], [
    ob("“O trabalho foi corrigido pela professora.” O agente da passiva é:", "o trabalho|pela professora|corrigido|foi", "B"),
    ob("“Vendem-se casas” é voz passiva:", "analítica|sintética|reflexiva|ativa", "B"),
    ob("“O menino se feriu” está na voz:", "ativa|passiva|reflexiva|neutra", "C"),
    ob("Em “Julgaram o réu inocente”, //inocente// é predicativo do:", "sujeito|objeto|vocativo|adjunto", "B"),
    dis("Passe para a voz passiva: “A diretora recebeu os pais.”", "Os pais foram recebidos pela diretora.", 2),
    dis("Identifique o agente da passiva: “O texto foi revisado pelos alunos.”", "pelos alunos.", 2)
  ]);

  G("coesao-coerencia", "Coesão e coerência: referenciação e sequenciação", "Anáfora, catáfora, elipse, sinonímia, conectivos e progressão textual.", [
    "**Referenciação**: pronomes, sinônimos, hiperônimos, elipse; **anáfora** (retoma) e **catáfora** (antecipa). **Sequenciação**: conectivos (//além disso, no entanto, portanto//).",
    "**Coerência**: sentido lógico do texto, sem contradição. Um texto pode ter coesão e **perder** a coerência."
  ], [
    ob("Em “Ana chegou e ela sorriu”, //ela// é:", "anáfora|catáfora|elipse|metáfora", "A"),
    ob("Em “Só quero isto: paz”, //isto// é:", "anáfora|catáfora|elipse|ironia", "B"),
    ob("O conectivo //no entanto// indica:", "adição|oposição|conclusão|tempo", "B"),
    ob("“Choveu, portanto o chão ficou seco”:", "é coesa, mas incoerente|é coesa e coerente|é coerente, mas sem coesão|não tem verbo", "A"),
    dis("Reescreva evitando repetições: “A escola abriu a biblioteca. A escola quer que a biblioteca seja usada.”", "A escola abriu a biblioteca e quer que ela seja usada.", 3),
    dis("Explique a diferença entre coesão e coerência.", "Coesão é a ligação formal entre as partes do texto; coerência é a lógica de seu sentido.", 3)
  ]);

  G("tipos-generos", "Tipos e gêneros textuais", "Narrar, descrever, argumentar, expor e instruir; gêneros e suas esferas.", [
    "**Tipos textuais**: narração, descrição, argumentação, exposição, injunção. **Gêneros**: notícia, crônica, artigo de opinião, carta, receita, resenha, entre outros.",
    "Um **gênero** pode combinar **tipos**: um artigo de opinião é predominantemente argumentativo, mas pode ter trechos narrativos ou expositivos."
  ], [
    ob("Uma receita é predominantemente:", "narrativa|descritiva|injuntiva|argumentativa", "C"),
    ob("Um artigo de opinião é predominantemente:", "narrativo|argumentativo|injuntivo|descritivo", "B"),
    ob("A notícia é, sobretudo:", "expositiva e narrativa|poética|argumentativa|injuntiva", "A"),
    ob("A crônica pode ser:", "narrativa, lírica ou humorística|apenas técnica|apenas legal|apenas científica", "A"),
    dis("Cite um gênero textual predominantemente narrativo e outro predominantemente argumentativo.", "Narrativo: conto, crônica, notícia; argumentativo: artigo de opinião, editorial, carta argumentativa.", 2),
    dis("Explique a diferença entre tipo e gênero textual.", "Tipo é a estrutura predominante (narrar, argumentar…); gênero é o formato social do texto (notícia, carta…), que pode combinar tipos.", 3)
  ]);

  G("pronomes-relativos-integrantes", "Que e se: pronome relativo, conjunção integrante e outras funções", "Distinguir o //que// relativo, integrante, comparativo, e o //se// reflexivo, apassivador e integrante.", [
    "**Que relativo** (substitui antecedente): //O livro que li//. **Que integrante** (liga oração substantiva): //Disse que viria//. **Que comparativo**: //Mais alto que ele//.",
    "**Se**: reflexivo (//Feriu-se//), apassivador (//Vendem-se casas//), índice de indeterminação (//Precisa-se de vendedores//), conjunção integrante (//Não sei se virá//) e condicional (//Se chover, adiamos//)."
  ], [
    ob("Em “O livro que li é ótimo”, //que// é:", "pronome relativo|conjunção integrante|comparativo|advérbio", "A"),
    ob("Em “Disse que viria”, //que// é:", "pronome relativo|conjunção integrante|comparativo|advérbio", "B"),
    ob("Em “Vendem-se casas”, //se// é:", "reflexivo|apassivador|indeterminação|integrante", "B"),
    ob("Em “Não sei se ele virá”, //se// é:", "reflexivo|apassivador|conjunção integrante|condicional", "C"),
    dis("Classifique o //se//: a) Precisa-se de vendedores. b) Se chover, adiamos. c) Ela se feriu.", "a) índice de indeterminação; b) conjunção condicional; c) pronome reflexivo.", 3),
    dis("Troque o //que// por //o qual//, quando possível: “O livro que li é ótimo.”", "O livro o qual li é ótimo (aceitável apenas em registro formal; prefere-se //que//).", 2)
  ]);

  G("figuras-avancadas", "Figuras de linguagem: sinestesia, catacrese, anáfora, polissíndeto, assíndeto", "Figuras de sintaxe e de construção em poemas e prosa dos séculos XIX e XX.", [
    "**Anáfora**: repetição de palavra no início de versos/frases. **Polissíndeto**: repetição de conjunção (//e… e… e…//). **Assíndeto**: omissão de conjunção (//Cheguei, vi, venci//). **Hipérbato**: inversão da ordem. **Zeugma**: omissão de termo já citado.",
    "**Sinestesia**: mistura de sentidos (//voz doce//). **Catacrese**: metáfora esquecida (//pé da mesa//). **Prosopopeia**: personificação. **Gradação**: sequência crescente/decrescente."
  ], [
    ob("“Cheguei, vi, venci” é:", "assíndeto|polissíndeto|anáfora|hipérbato", "A"),
    ob("“E corri, e gritei, e chorei” é:", "assíndeto|polissíndeto|catacrese|zeugma", "B"),
    ob("“Voz doce” é:", "sinestesia|catacrese|anáfora|hipérbato", "A"),
    ob("“Pé da mesa” é:", "catacrese|sinestesia|polissíndeto|ironia", "A"),
    dis("Identifique: “Ele comprou pão; ela, leite.”", "Zeugma (omissão do verbo //comprou//, já citado).", 2),
    dis("Que efeito produz a anáfora em “Ó formas alvas, ó formas claras, ó formas…”?", "Cria ritmo e ênfase, dando musicalidade e intensidade ao verso.", 3)
  ]);
})();
