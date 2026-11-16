/* 1º ano do Ensino Médio · Gramática (18 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("1EM"), ob = H.ob, dis = H.dis;

  function G(id, titulo, resumo, li, qs, extra) {
    /* distribui a posição da resposta correta nas objetivas, sem alterar qual alternativa é a certa */
    var hash = id.split("").reduce(function (x, ch) { return x + ch.charCodeAt(0); }, 0);
    var alvo = [1, 3, 0, 2, 3, 0, 2, 1], k = hash % 5;
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

  G("fonologia", "Fonologia: fonemas, letras, sílabas e encontros", "Diferença entre letra e fonema, encontros vocálicos e consonantais, dígrafos e divisão silábica.", [
    "**Fonema** é a menor unidade sonora; **letra** é a representação escrita. //Táxi// tem 4 letras e 5 fonemas (t-a-k-s-i); //chuva// tem 5 letras e 4 fonemas (o //ch// é dígrafo).",
    "**Encontros vocálicos**: ditongo (//pai, céu//), tritongo (//Uruguai//), hiato (//sa-ú-de//). **Encontros consonantais**: //pra-to, a-tlas//. **Dígrafos**: //ch, lh, nh, rr, ss, sc, sç, xc, qu, gu//.",
    "**Tonicidade**: oxítona, paroxítona e proparoxítona."
  ], [
    ob("A palavra //táxi// tem:", "4 letras e 4 fonemas|4 letras e 5 fonemas|5 letras e 4 fonemas|5 letras e 5 fonemas", "B"),
    ob("A palavra //chuva// tem:", "5 letras e 5 fonemas|5 letras e 4 fonemas|4 letras e 4 fonemas|4 letras e 5 fonemas", "B"),
    ob("Qual palavra tem hiato?", "pai|céu|saúde|rei", "C"),
    ob("Qual palavra tem tritongo?", "Paraguai|saída|poeta|ideia", "A"),
    dis("Separe em sílabas e classifique pela tonicidade: óculos, rubrica, ruim, caráter.", "ó-cu-los (proparoxítona); ru-bri-ca (paroxítona); ru-im (oxítona); ca-rá-ter (paroxítona).", 3),
    dis("Explique por que //quilo// tem 5 letras e 4 fonemas.", "O //qu// é dígrafo: representa um único fonema (/k/).", 2)
  ]);

  G("ortografia-acentuacao", "Ortografia e acentuação gráfica: revisão", "Regras de acentuação (proparoxítonas, oxítonas, paroxítonas, hiatos) e acento diferencial.", [
    "**Proparoxítonas**: sempre acentuadas (//lâmpada, médico//). **Oxítonas** em a(s), e(s), o(s), em/ens: //sofá, café, avô, também//. **Paroxítonas** em l, n, r, x, i(s), us, um(ns), ão(s), ã(s), ps: //fácil, hífen, açúcar, tórax, táxi, ônibus, álbum, órfão//.",
    "**Hiatos** com i/u tônicos: //saída, baú, juízo//. **Ditongos abertos** éi, éu, ói em oxítonas: //papéis, chapéu, herói//.",
    "Após o Acordo de 2009: sem trema (//linguiça//), sem acento em //ideia, heroico, voo, enjoo//, nem em //para//, //pelo//, //polo//."
  ], [
    ob("Qual está corretamente grafada?", "lampada|lâmpada|lámpada|lampáda", "B"),
    ob("Qual leva acento?", "ideia|assembleia|herói|jiboia", "C"),
    ob("Qual está correta?", "voo|vôo|vóo|vo-o", "A"),
    ob("A palavra //álbum// recebe acento por ser:", "oxítona|paroxítona terminada em um|proparoxítona|monossílaba", "B"),
    dis("Acentue quando necessário: heroi, papeis, juizo, ideia, baú, voo, tambem.", "herói, papéis, juízo, ideia, baú, voo, também.", 3),
    dis("Por que //saúde// tem acento e //feiura// não?", "Em //saúde//, o //u// é tônico de um hiato, sozinho na sílaba; em //feiura//, o //u// vem depois de ditongo.", 3)
  ]);

  G("estrutura-palavras", "Estrutura e formação das palavras", "Radical, afixos, desinências; derivação, composição, hibridismo, sigla e abreviação.", [
    "**Radical** (base do sentido), **afixos** (prefixos e sufixos), **desinências** (gênero, número, modo-tempo, pessoa).",
    "**Derivação**: prefixal, sufixal, parassintética (//entardecer//), imprópria (//o jantar//) e regressiva (//ajuda// de //ajudar//). **Composição**: justaposição (//guarda-chuva//) e aglutinação (//planalto//).",
    "Há ainda **hibridismo** (//automóvel//: grego + latim), **onomatopeia**, **sigla** e **abreviação**."
  ], [
    ob("//Entardecer// é formada por derivação:", "prefixal|sufixal|parassintética|regressiva", "C"),
    ob("//Ajuda//, de //ajudar//, é formada por derivação:", "prefixal|sufixal|regressiva|imprópria", "C"),
    ob("//Planalto// é formada por:", "justaposição|aglutinação|prefixação|sufixação", "B"),
    ob("//Automóvel// (grego + latim) é exemplo de:", "hibridismo|onomatopeia|sigla|abreviação", "A"),
    dis("Classifique: infelizmente, guarda-roupa, o jantar, desleal.", "infelizmente: prefixal e sufixal; guarda-roupa: composição por justaposição; o jantar: derivação imprópria; desleal: prefixal.", 3),
    dis("Separe radical, prefixo e sufixo de //deslealdade//.", "des- (prefixo) + leal (radical) + -dade (sufixo).", 2)
  ]);

  G("substantivo-adjetivo", "Substantivo e adjetivo: flexão, grau e emprego", "Gênero, número e grau; locuções adjetivas; função textual dos adjetivos.", [
    "**Substantivo**: nomeia; flexiona em gênero, número e grau. **Adjetivo**: caracteriza o substantivo; concorda com ele; pode ter **locução** (//de ouro → áureo//).",
    "**Plural**: //-ão → -ões, -ães, -ãos//; //-al → -ais//; //-m → -ns//. **Grau** do adjetivo: comparativo (//mais… que//) e superlativo (//belíssimo, o mais belo//).",
    "No texto, o adjetivo **qualifica** e pode revelar **opinião** (//uma péssima ideia//)."
  ], [
    ob("O plural de //cidadão// é:", "cidadões|cidadãos|cidadães|cidadãoes", "B"),
    ob("O superlativo absoluto sintético de //pobre// é:", "pobríssimo|paupérrimo|pobrésimo|muito pobre mesmo", "B"),
    ob("A locução adjetiva “de boca” equivale a:", "bucal|bocal|boqueiro|bocudo", "A"),
    ob("Em “um péssimo exemplo”, o adjetivo expressa:", "opinião|dado numérico|lugar|tempo", "A"),
    dis("Passe para o plural: “O cidadão alemão comprou um anzol.”", "Os cidadãos alemães compraram anzóis.", 2),
    dis("Dê o adjetivo correspondente à locução: de ouro, de prata, de ferro, de boi.", "áureo, argênteo, férreo, bovino.", 2)
  ]);

  G("pronomes", "Pronomes: tipos e emprego", "Pessoais, possessivos, demonstrativos, indefinidos, interrogativos e relativos; cuidados de emprego.", [
    "**Pessoais**: retos (eu, tu, ele…) e oblíquos (me, te, o, lhe…). **Possessivos** (meu, teu), **demonstrativos** (este, esse, aquele), **indefinidos** (alguém, nenhum), **interrogativos** (quem, qual) e **relativos** (que, cujo, onde).",
    "**Emprego**: //para eu fazer// (não //para mim fazer//); //entre mim e você//; //aonde// (movimento) × //onde// (lugar); //cujo// não leva artigo depois.",
    "Pronomes têm função de **retomada** (coesão): //Ana chegou. **Ela** sorriu//."
  ], [
    ob("Qual frase está correta?", "Isso é para mim fazer.|Isso é para eu fazer.|Isso é para mim fazê.|Isso é pra mim fazer.", "B"),
    ob("“Entre ___ e você, não há segredos.”", "eu|mim|me|comigo", "B"),
    ob("“___ você vai depois da escola?”", "Onde|Aonde|Cujo|Quem", "B"),
    ob("“Este é o livro ___ autor conheço.”", "cujo|cujo o|que o|onde o", "A"),
    dis("Reescreva evitando repetição: “Ana comprou um livro. Ana leu o livro.”", "Ana comprou um livro e o leu. (ou: Ana comprou um livro. Leu-o.)", 2),
    dis("Explique a diferença entre //onde// e //aonde//.", "//Onde// indica lugar em que se está; //aonde// (a + onde) indica movimento em direção a um lugar.", 3)
  ]);

  G("verbos", "Verbos: flexão, modos, tempos e vozes (revisão)", "Modos indicativo, subjuntivo e imperativo; formas nominais; vozes ativa, passiva e reflexiva.", [
    "**Indicativo**: certeza. **Subjuntivo**: dúvida, desejo, hipótese. **Imperativo**: ordem, pedido. **Formas nominais**: infinitivo, gerúndio e particípio.",
    "**Voz ativa** (O menino chutou a bola), **passiva** (A bola foi chutada pelo menino) e **reflexiva** (O menino se feriu).",
    "Verbos derivados de **ter, vir, ver, pôr**: //eles têm//, //eles vêm//, //se eu vir//, //quando ele vier//, //ele interveio//."
  ], [
    ob("“Espero que ele ___ (vir) cedo.”", "vem|venha|vier|vinha", "B"),
    ob("“Quando você ___ (ver) o professor, avise.”", "ver|vir|vê|vira", "B"),
    ob("“Eles ___ (ter) razão.”", "tem|têm|teem|tém", "B"),
    ob("A forma //feriu-se// indica voz:", "ativa|passiva|reflexiva|neutra", "C"),
    dis("Passe para a voz passiva: “A professora corrigiu as provas.”", "As provas foram corrigidas pela professora.", 2),
    dis("Corrija: “Se ele ver o resultado, vai se alegrar.”", "Se ele vir o resultado, vai se alegrar.", 2)
  ]);

  G("invariaveis", "Classes invariáveis: advérbio, preposição, conjunção e interjeição", "Valores semânticos e função de ligação das palavras que não variam.", [
    "**Advérbio** (tempo, lugar, modo, intensidade…), **preposição** (liga termos e cria relações: finalidade, origem, posse), **conjunção** (liga orações) e **interjeição** (emoção).",
    "**Preposições essenciais**: a, ante, até, após, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás.",
    "Cuidado com **contrações** (//no, da, pelo//) e com **crase**."
  ], [
    ob("Em “Chegou tarde”, //tarde// é:", "adjetivo|advérbio de tempo|substantivo|preposição", "B"),
    ob("Em “Vim de ônibus”, //de// indica:", "meio|posse|tempo|lugar", "A"),
    ob("A conjunção //embora// é:", "coordenativa aditiva|subordinativa concessiva|coordenativa conclusiva|subordinativa causal", "B"),
    ob("A palavra //Ufa!// é:", "advérbio|interjeição|conjunção|pronome", "B"),
    dis("Classifique as palavras em itálico: “Saí //de// casa, //mas// voltei //cedo//.”", "de: preposição; mas: conjunção (adversativa); cedo: advérbio de tempo.", 3),
    dis("Troque a conjunção sem mudar o sentido: “Estudou, mas não passou.”", "Estudou, porém (contudo, todavia) não passou.", 2)
  ]);

  G("termos-oracao", "Termos da oração: essenciais, integrantes e acessórios", "Sujeito, predicado, complementos verbais e nominais, adjuntos, aposto e vocativo.", [
    "**Essenciais**: sujeito e predicado. **Integrantes**: objeto direto, objeto indireto, complemento nominal, agente da passiva, predicativos. **Acessórios**: adjunto adnominal, adjunto adverbial, aposto. **Vocativo**: independente.",
    "**Tipos de sujeito**: simples, composto, oculto, indeterminado, oração sem sujeito. **Predicado**: verbal, nominal, verbo-nominal."
  ], [
    ob("“Choveu muito ontem.” O sujeito é:", "simples|composto|oculto|inexistente", "D"),
    ob("“Roubaram a bolsa.” O sujeito é:", "simples|indeterminado|oculto|inexistente", "B"),
    ob("Em “A leitura do livro agradou”, //do livro// é:", "adjunto adnominal|complemento nominal|objeto direto|aposto", "B"),
    ob("Em “Julgaram o réu inocente”, //inocente// é predicativo do:", "sujeito|objeto|vocativo|adjunto", "B"),
    dis("Analise: “Ontem, entreguei o relatório à diretora.”", "Ontem: adjunto adverbial de tempo; entreguei: verbo transitivo direto e indireto; o relatório: objeto direto; à diretora: objeto indireto; sujeito oculto: eu.", 4),
    dis("Explique a diferença entre sujeito indeterminado e oração sem sujeito.", "No indeterminado, há sujeito, mas não se identifica quem é; na oração sem sujeito, o verbo é impessoal e não há sujeito.", 3)
  ]);

  G("coordenacao", "Período composto por coordenação", "Orações coordenadas assindéticas e sindéticas, com seus valores.", [
    "**Assindética**: sem conjunção (//Cheguei, vi, venci//). **Sindética**: com conjunção: **aditiva** (//e, nem//), **adversativa** (//mas, porém//), **alternativa** (//ou… ou//), **conclusiva** (//logo, portanto//), **explicativa** (//pois, que//)."
  ], [
    ob("“Estudou, ++mas não passou++.” A oração é:", "aditiva|adversativa|conclusiva|explicativa", "B"),
    ob("“Penso, ++logo existo++.” A oração é:", "adversativa|conclusiva|explicativa|alternativa", "B"),
    ob("“Venha logo, ++que o filme vai começar++.” A oração é:", "explicativa|aditiva|adversativa|alternativa", "A"),
    ob("“++Ou você estuda++, ou trabalha.” A oração é:", "alternativa|aditiva|conclusiva|explicativa", "A"),
    dis("Una com conjunção conclusiva: “O trânsito parou. Cheguei atrasado.”", "O trânsito parou; por isso (portanto), cheguei atrasado.", 2),
    dis("Una com conjunção adversativa: “A ideia é boa. É cara.”", "A ideia é boa, mas (porém, contudo) é cara.", 2)
  ]);

  G("subordinacao", "Período composto por subordinação: visão geral", "Substantivas, adjetivas e adverbiais, reconhecidas pela função e pela conjunção.", [
    "**Substantivas** (função de substantivo; //que, se//): //Espero que você venha//. **Adjetivas** (pronome relativo): //O livro que li//. **Adverbiais** (circunstâncias): causa, tempo, condição, concessão, finalidade, comparação, conformidade, proporção, consequência.",
    "A **oração reduzida** tem verbo no infinitivo, gerúndio ou particípio: //Ao chegar, saudou todos//."
  ], [
    ob("“Espero ++que você venha++.” Oração:", "substantiva objetiva direta|adjetiva|adverbial|coordenada", "A"),
    ob("“O livro ++que li++ é ótimo.” Oração:", "substantiva|adjetiva restritiva|adverbial|coordenada", "B"),
    ob("“++Embora estivesse cansado++, saiu.” Oração:", "causal|concessiva|temporal|final", "B"),
    ob("“++Ao chegar++, saudou todos.” Oração:", "reduzida de infinitivo|reduzida de gerúndio|desenvolvida|coordenada", "A"),
    dis("Una com oração de causa: “Faltou à aula. Estava doente.”", "Faltou à aula porque estava doente.", 2),
    dis("Explique a diferença entre oração adjetiva restritiva e explicativa.", "A restritiva (sem vírgula) restringe o antecedente; a explicativa (entre vírgulas) acrescenta informação sobre ele.", 3)
  ]);

  G("concordancia", "Concordância verbal e nominal", "Regras gerais e casos especiais: haver, fazer, verbo + se, meio, anexo, bastante.", [
    "**Verbal**: o verbo concorda com o núcleo do sujeito. **Impessoais**: //haver// (existir), //fazer// (tempo): singular. **Verbo + se**: passiva concorda (//Vendem-se casas//); VTI fica no singular (//Precisa-se de funcionários//).",
    "**Nominal**: adjetivo concorda com o substantivo. **Meio, menos, bastante** (advérbios) não variam; **anexo, mesmo, próprio** concordam.",
    "//É proibido entrada// (sem artigo) × //É proibida a entrada// (com artigo)."
  ], [
    ob("“___ dois anos que me formei.”", "Fazem|Faz|Fizeram|Faziam", "B"),
    ob("“___ casas no bairro.”", "Aluga-se|Alugam-se|Alugasse|Alugar", "B"),
    ob("“Seguem ___ as fotos.”", "anexo|anexa|anexas|anexos", "C"),
    ob("“Ela ficou ___ nervosa.”", "meio|meia|meios|meias", "A"),
    dis("Corrija: “Houveram muitos problemas na reunião.”", "Houve muitos problemas na reunião.", 2),
    dis("Corrija: “Elas estudam bastantes.”", "Elas estudam bastante.", 2)
  ]);

  G("regencia-crase", "Regência e crase", "Verbos com preposição e uso da crase em casos frequentes.", [
    "**Regência verbal**: //assistir a//, //obedecer a//, //preferir X a Y//, //aspirar a//, //visar a//, //chegar a//; //implicar// e //namorar// sem preposição.",
    "**Crase** = a + a: //Fui à feira//. Teste: troque por masculino; se aparecer //ao//, há crase. **Locuções**: //à noite, às vezes, à vista//.",
    "**Não há crase** antes de masculino, verbos, pronomes pessoais, //todos//."
  ], [
    ob("“Assisti ___ filme.”", "o|ao|do|no", "B"),
    ob("“Prefiro cinema ___ teatro.”", "do que|ao|que|de", "B"),
    ob("“Fui ___ escola.”", "a|à|há|as", "B"),
    ob("“Ela fala ___ todos.”", "a|à|às|há", "A"),
    dis("Corrija: “Prefiro mais ler do que escrever.”", "Prefiro ler a escrever.", 2),
    dis("Explique por que há crase em “Obedeço à lei”.", "O verbo obedecer exige //a// e //lei// aceita o artigo //a//: a + a = à.", 3)
  ]);

  G("pontuacao", "Pontuação: vírgula, ponto e vírgula, dois-pontos e travessão", "Usos obrigatórios e proibidos; efeitos de sentido.", [
    "**Vírgula**: enumeração, vocativo, aposto, adjunto adverbial deslocado, orações coordenadas e adverbiais antepostas. **Nunca** entre sujeito e verbo, nem entre verbo e complemento.",
    "**Ponto e vírgula**: separa itens longos ou orações. **Dois-pontos**: enumeração, citação, explicação. **Travessão**: falas, aposto enfático.",
    "A vírgula pode **mudar o sentido**: //Os alunos que estudaram passaram// × //Os alunos, que estudaram, passaram//."
  ], [
    ob("Qual está bem pontuada?", "Os alunos, chegaram.|Quando chegou, saímos.|Comprei, pão e leite.|Ele disse, que viria.", "B"),
    ob("A vírgula em “Carlos, meu irmão, chegou” isola:", "vocativo|aposto|enumeração|sujeito", "B"),
    ob("A vírgula em “Pedro, venha aqui” isola:", "aposto|vocativo|adjunto|sujeito", "B"),
    ob("Os dois-pontos em “Trouxe três coisas: pão, leite e queijo” introduzem:", "uma enumeração|uma pergunta|uma ironia|um erro", "A"),
    dis("Pontue: “se você estudar bastante conseguirá aprovação e todos ficarão felizes”", "Se você estudar bastante, conseguirá aprovação, e todos ficarão felizes.", 2),
    dis("Explique a diferença de sentido entre as duas frases do quadro “Para lembrar”.", "Sem vírgulas, só os alunos que estudaram passaram (restritiva); com vírgulas, todos estudaram e passaram (explicativa).", 3)
  ]);

  G("colocacao-pronominal", "Colocação pronominal: próclise, ênclise e mesóclise", "Posição dos pronomes oblíquos átonos em relação ao verbo.", [
    "**Ênclise**: depois do verbo (início de frase, depois de vírgula): //Diga-me//. **Próclise**: antes do verbo, com palavra atrativa (não, que, já, nunca, também, advérbios): //Não me diga//.",
    "**Mesóclise**: no futuro do presente e do pretérito, sem atrativo: //Dar-lhe-ei o livro//."
  ], [
    ob("Segundo a norma-padrão, está correta:", "Me diga a verdade.|Diga-me a verdade.|Diga me a verdade.|Diga a me verdade.", "B"),
    ob("Está correta:", "Não diga-me nada.|Não me diga nada.|Não-me diga nada.|Não diga me nada.", "B"),
    ob("Está correta:", "Dar-lhe-ei o livro.|Darei-lhe o livro.|Lhe darei o livro.|Daria-lhe-ei o livro.", "A"),
    ob("“Quem ___ chamou?”", "chamou-te|te chamou|chamou te|chamou-te-ia", "B"),
    dis("Corrija: “Me disseram que o jogo foi adiado.”", "Disseram-me que o jogo foi adiado.", 2),
    dis("Reescreva com mesóclise: “Darei a você o livro amanhã.”", "Dar-lhe-ei o livro amanhã.", 2)
  ]);

  G("semantica", "Semântica: sinônimos, polissemia, ambiguidade e denotação", "Sentido das palavras e das frases; efeitos de sentido.", [
    "**Sinônimos**, **antônimos**, **homônimos** (cela/sela), **parônimos** (descrição/discrição). **Polissemia**: várias acepções (//banco//, //manga//). **Ambiguidade**: duas leituras.",
    "**Denotação**: sentido literal. **Conotação**: sentido figurado. O **contexto** define o sentido."
  ], [
    ob("“Cela” e “sela” são:", "sinônimos|antônimos|homônimos|parônimos", "C"),
    ob("“Eminente” e “iminente” são:", "sinônimos|homônimos|parônimos|antônimos", "C"),
    ob("“Vi o homem com o binóculo” é:", "ambígua|clara|elíptica|irônica", "A"),
    ob("“Ele tem um coração de ouro” usa //ouro// em sentido:", "denotativo|conotativo|literal|técnico", "B"),
    dis("Desfaça a ambiguidade: “A mãe de Ana viu a filha dela chegando.”", "A mãe viu a própria filha chegando. / A mãe de Ana viu a filha de outra pessoa chegando.", 3),
    dis("Explique dois sentidos da palavra //pena//.", "Pluma; piedade; castigo (dois).", 2)
  ]);

  G("figuras-linguagem", "Figuras de linguagem", "Metáfora, metonímia, antítese, paradoxo, ironia, hipérbole, eufemismo, sinestesia, catacrese, personificação.", [
    "**De palavra**: metáfora, comparação, metonímia, catacrese, sinestesia. **De pensamento**: antítese, paradoxo, ironia, hipérbole, eufemismo, personificação, gradação. **De sintaxe**: elipse, hipérbato, zeugma.",
    "Pergunte: que **efeito** a figura cria?"
  ], [
    ob("“Voz doce” é:", "sinestesia|catacrese|ironia|elipse", "A"),
    ob("“Li Machado” é:", "metonímia|metáfora|catacrese|gradação", "A"),
    ob("“Contentamento descontente” é:", "paradoxo|catacrese|metonímia|elipse", "A"),
    ob("“Pé da mesa” é:", "catacrese|metonímia|ironia|antítese", "A"),
    dis("Classifique: “O vento sussurrava.” / “Morri de rir.” / “Que dia lindo!” (em tempestade).", "personificação; hipérbole; ironia.", 3),
    dis("Que efeito tem a hipérbole em “Morri de rir”?", "Enfatiza a intensidade do riso e dá expressividade.", 2)
  ]);

  G("funcoes-linguagem", "Funções da linguagem (Jakobson)", "Referencial, emotiva, conativa, poética, fática e metalinguística.", [
    "**Referencial**: informa sobre o contexto (3ª pessoa, objetividade). **Emotiva**: foca o emissor (1ª pessoa, exclamações). **Conativa**: foca o receptor (imperativo, vocativo).",
    "**Poética**: foca a mensagem em si (sons, imagens, ritmo). **Fática**: mantém o canal (//Alô? Está me ouvindo?//). **Metalinguística**: usa a língua para falar da língua (dicionário, poema sobre poesia)."
  ], [
    ob("“Alô? Está me ouvindo?” predomina a função:", "referencial|fática|poética|conativa", "B"),
    ob("“Doe sangue. Salve vidas.” predomina a função:", "emotiva|conativa|metalinguística|fática", "B"),
    ob("Um verbete de dicionário apresenta função:", "metalinguística|emotiva|fática|poética", "A"),
    ob("“Eu me sinto tão só…” predomina a função:", "referencial|emotiva|conativa|fática", "B"),
    dis("Identifique a função predominante: “Ontem, o dólar fechou em alta de 1%.”", "Referencial (informa dados objetivos).", 2),
    dis("Escreva uma frase com função conativa.", "Resposta pessoal. Exemplo: “Participe da campanha!”", 2)
  ]);

  G("variacao-niveis", "Variação linguística, níveis de linguagem e norma culta", "Variedades regionais, sociais e situacionais; adequação; preconceito linguístico.", [
    "**Variação regional, social, situacional e histórica.** **Norma-padrão**: regras da gramática normativa. **Norma culta**: uso em contextos formais por falantes escolarizados.",
    "**Adequação**: escolha da variedade conforme o interlocutor, o gênero e a situação. **Preconceito linguístico**: julgar pelo jeito de falar. Não há fala “errada”, e sim fala **adequada ou inadequada**."
  ], [
    ob("“Aipim”, “macaxeira” e “mandioca” ilustram variação:", "regional|social|histórica|situacional", "A"),
    ob("A gíria de um grupo jovem é variação:", "regional|social|histórica|formal", "B"),
    ob("Um e-mail formal a um diretor exige registro:", "informal|formal|gírias|regional", "B"),
    ob("Preconceito linguístico é:", "julgar alguém pelo jeito de falar|aprender norma culta|escrever bem|ler muito", "A"),
    dis("Reescreva em registro formal: “E aí, cara, tô sem tempo pra ir na reunião.”", "Prezado colega, não poderei comparecer à reunião por falta de tempo.", 2),
    dis("Por que não existe “fala errada”?", "Porque cada variedade é válida em seu grupo; o que existe é maior ou menor adequação à situação.", 3)
  ]);
})();
