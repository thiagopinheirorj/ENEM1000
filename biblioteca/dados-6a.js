/* 6º ano · Gramática (26 materiais). Usa os atalhos de BIBLIOTECA.h. */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, ob = H.ob, dis = H.dis;

  function G(id, titulo, resumo, li, qs, extra) {
    var b = [H.te("Para lembrar", li)];
    if (extra) b.push(extra);
    b.push(H.qs(qs));
    H.m6("gramatica", "g-" + id, titulo, ["Gramática"], resumo, b);
  }

  G("substantivo-comum-proprio", "Substantivo: comum, próprio e coletivo", "Nomear seres e conjuntos: quando usar maiúscula e os coletivos mais comuns.", [
    "**Substantivo** é a palavra que dá nome a pessoas, animais, lugares, objetos, sentimentos e ideias.",
    "**Comum**: nomeia qualquer ser da espécie (//cidade, menino, rio//). **Próprio**: nomeia um ser específico e se escreve com inicial maiúscula (//Manaus, Pedro, Rio Amazonas//).",
    "**Coletivo**: indica um conjunto de seres da mesma espécie (//matilha de cães, cardume de peixes, enxame de abelhas//)."
  ], [
    ob("Em qual alternativa há apenas substantivos próprios?", "mesa, Bahia, Lúcia|Bahia, Lúcia, Brasil|cidade, Brasil, menino|rio, Pedro, escola", "B", "Nomes de lugares e pessoas específicos são próprios."),
    ob("O coletivo de //peixes// é:", "matilha|enxame|cardume|alcateia", "C"),
    ob("O coletivo de //abelhas// é:", "enxame|rebanho|cardume|bando", "A"),
    ob("O coletivo de //lobos// é:", "matilha|cardume|alcateia|enxame", "C", "Matilha é o coletivo de cães."),
    ob("Qual frase tem um substantivo próprio?", "Carlos visitou a escola.|O menino comprou pão.|A cidade estava vazia.|O rio é fundo.", "A"),
    dis("Escreva um substantivo comum e um próprio que designem lugares.", "Exemplos: cidade e São Paulo; país e Brasil; rio e Rio Tietê.", 2),
    dis("Escreva o coletivo: a) de cães; b) de ovelhas; c) de estrelas.", "a) matilha; b) rebanho; c) constelação.", 3),
    dis("Reescreva com maiúsculas onde necessário: “ontem fui a curitiba com a minha prima marina.”", "Ontem fui a Curitiba com a minha prima Marina.", 2)
  ]);

  G("substantivo-concreto-abstrato", "Substantivo concreto e abstrato", "Diferenciar o que existe por si (mesa, vento) do que depende de outro ser (coragem, saudade).", [
    "**Concreto**: nomeia seres que existem por si mesmos, reais ou imaginários (//mesa, vento, cavalo, fada//).",
    "**Abstrato**: nomeia sentimentos, qualidades, ações e estados que dependem de outro ser (//alegria, coragem, saudade, beleza//).",
    "Muitos abstratos vêm de adjetivos ou verbos: //triste → tristeza//; //corajoso → coragem//."
  ], [
    ob("Qual é um substantivo abstrato?", "coragem|pedra|mochila|cavalo", "A"),
    ob("Qual é um substantivo concreto?", "tristeza|honestidade|vento|liberdade", "C", "O vento é um ser da natureza."),
    ob("Em “A saudade apertou o peito de Lia”, o substantivo abstrato é:", "Lia|peito|apertou|saudade", "D"),
    ob("Qual par tem apenas substantivos abstratos?", "mesa e cadeira|amizade e carinho|menina e alegria|bola e sonho", "B"),
    ob("De qual adjetivo vem o substantivo //tristeza//?", "tristemente|triste|entristecer|tristonho", "B"),
    dis("Classifique em concreto ou abstrato: livro, esperança, chuva, medo, professor.", "livro: concreto; esperança: abstrato; chuva: concreto; medo: abstrato; professor: concreto.", 3),
    dis("Escreva uma frase com o substantivo abstrato //coragem//.", "Resposta pessoal. Verifique se “coragem” está empregada como substantivo.", 2),
    dis("Transforme em substantivos abstratos: belo, feliz, forte, justo.", "beleza, felicidade, força, justiça.", 2)
  ]);

  G("genero-substantivos", "Gênero dos substantivos: masculino e feminino", "Formação do feminino e substantivos de uma só forma (o/a estudante).", [
    "Os substantivos são **masculinos** (o menino) ou **femininos** (a menina). O artigo ajuda a identificar o gênero.",
    "**Biformes**: têm uma forma para cada gênero (//menino/menina, professor/professora, rei/rainha//).",
    "**Uniformes**: têm uma só forma. Alguns mudam só o artigo (//o/a estudante, o/a dentista//); outros têm gênero fixo (//a criança, a testemunha//)."
  ], [
    ob("O feminino de //leão// é:", "leoa|leã|leona|leoazinha", "A"),
    ob("O feminino de //ator// é:", "atora|atriz|atriza|atoria", "B"),
    ob("Qual substantivo tem a mesma forma para os dois gêneros?", "cantor|menino|estudante|rei", "C"),
    ob("O feminino de //cavalo// é:", "cavala|cavaleira|cavalona|égua", "D"),
    ob("O feminino de //professor// é:", "professoresa|professora|professorina|professor", "B"),
    dis("Passe para o masculino: a bruxa, a prima, a leitora, a gata.", "o bruxo, o primo, o leitor, o gato.", 2),
    dis("Complete: o rei – a ___; o homem – a ___; o avô – a ___; o poeta – a ___.", "rainha; mulher; avó; poetisa.", 2),
    dis("Escreva duas frases com //estudante//, uma no masculino e outra no feminino.", "Exemplo: “O estudante chegou cedo.” / “A estudante chegou cedo.”", 3)
  ]);

  G("numero-plural", "Número dos substantivos: o plural", "Regras de formação do plural: -s, -ns, -res, -ais, -ões, -ães, -ãos.", [
    "Regra geral: acrescenta-se **-s** (//casa → casas//). Terminados em **-m**: //-ns// (//jardim → jardins//). Em **-r** e **-z**: //-es// (//mar → mares, luz → luzes//).",
    "Terminados em **-al, -el, -ol, -ul**: //-ais, -éis, -óis, -uis// (//animal → animais, papel → papéis, anzol → anzóis, azul → azuis//).",
    "Terminados em **-ão**: //-ões// (//limão → limões//), //-ães// (//pão → pães//) ou //-ãos// (//mão → mãos//).",
    "Paroxítonas terminadas em **-s** não mudam (//o lápis, os lápis//); oxítonas recebem **-es** (//mês → meses//)."
  ], [
    ob("O plural de //animal// é:", "animals|animais|animales|animaes", "B"),
    ob("O plural de //limão// é:", "limãos|limães|limões|limãoes", "C"),
    ob("O plural de //mão// é:", "mãos|mões|mães|mãoes", "A"),
    ob("O plural de //papel// é:", "papels|papeis|papeles|papéis", "D"),
    ob("O plural de //lápis// é:", "lápises|lápis|lápies|lápizes", "B"),
    dis("Passe para o plural: “O jardim da escola tem uma flor bonita.”", "Os jardins das escolas têm flores bonitas.", 2),
    dis("Passe para o singular: “Os cidadãos compraram pães e anzóis.”", "O cidadão comprou pão e anzol.", 2),
    dis("Por que o plural de //mês// é //meses//, mas o de //lápis// é //lápis//?", "//Mês// é oxítona terminada em -s e recebe -es; //lápis// é paroxítona terminada em -s e fica invariável.", 3)
  ]);

  G("grau-substantivo", "Grau do substantivo: aumentativo e diminutivo", "Sufixos -inho/-zinho e -ão/-zão e os sentidos de carinho, desprezo ou exagero.", [
    "**Diminutivo**: indica tamanho menor (//casinha, passarinho, papelzinho//). **Aumentativo**: indica tamanho maior (//casarão, carrão, pezão//).",
    "Os sufixos também expressam sentimentos: **carinho** (//cãozinho fofo//), **desprezo** ou **exagero** (//narigão, gentinha//).",
    "Terminadas em consoante, as palavras costumam receber **-zinho** (//papel → papelzinho//); com vogal final, **-inho** (//gato → gatinho//)."
  ], [
    ob("O diminutivo de //pássaro// é:", "passarinho|passarão|pássaro grande|pássaros", "A"),
    ob("O aumentativo de //casa// é:", "casinha|casebre|casarão|casota", "C"),
    ob("Em “Que cãozinho fofo!”, o sufixo -zinho expressa:", "tamanho pequeno|carinho|desprezo|ordem", "B"),
    ob("Em “Ele tem um narigão!”, o aumentativo expressa:", "exagero ou desprezo|carinho|dúvida|ordem", "A"),
    ob("O diminutivo de //papel// é:", "papelinho|papeleta|papelzinho|papelão", "C"),
    dis("Passe para o diminutivo: flor, mão, cão, animal.", "florzinha, mãozinha, cãozinho, animalzinho.", 2),
    dis("Passe para o aumentativo: casa, carro, bola, nariz.", "casarão, carrão, bolão, narigão.", 2),
    dis("Escreva uma frase em que o diminutivo expresse carinho.", "Resposta pessoal. Exemplo: “Que gatinho fofo!”", 2)
  ]);

  G("adjetivo", "Adjetivo e locução adjetiva", "Caracterizar seres, concordar com o substantivo e reconhecer locuções (dente de cachorro = canino).", [
    "**Adjetivo** é a palavra que caracteriza o substantivo e concorda com ele em gênero e número (//menina esperta, casas grandes//).",
    "**Locução adjetiva** é um grupo de palavras que funciona como adjetivo (//de mãe → materno; de pai → paterno; de criança → infantil; da chuva → pluvial//).",
    "**Adjetivo pátrio** indica a origem (//brasileiro, paulista, carioca//)."
  ], [
    ob("Qual palavra é um adjetivo?", "correr|rapidez|bonita|ontem", "C"),
    ob("Em “meninas alegres”, o adjetivo concorda com o substantivo em:", "gênero e número|apenas número|apenas gênero|tempo e modo", "A"),
    ob("A locução adjetiva “de mãe” equivale ao adjetivo:", "paterno|fraterno|materno|infantil", "C"),
    ob("A água “da chuva” é a água:", "marinha|pluvial|potável|mineral", "B"),
    ob("O adjetivo pátrio de //Brasil// é:", "brasileiro|brasiliano|brasilense|brasilês", "A"),
    dis("Sublinhe os adjetivos: “O gato preto dorme no sofá macio da sala silenciosa.”", "preto, macio, silenciosa.", 2),
    dis("Escreva um adjetivo para cada substantivo: noite, mar, professora.", "Resposta pessoal. Exemplos: noite escura; mar azul; professora paciente.", 2),
    dis("Passe para o feminino plural: “o menino esperto”.", "as meninas espertas.", 2)
  ]);

  G("grau-adjetivo", "Grau do adjetivo: comparativo e superlativo", "Comparar qualidades (mais… que, tão… quanto) e intensificá-las (altíssimo, o mais alto).", [
    "**Comparativo de superioridade**: //mais… (do) que//; de **inferioridade**: //menos… (do) que//; de **igualdade**: //tão… quanto//.",
    "**Superlativo absoluto**: qualidade em grau máximo, sem comparação (//muito alto, altíssimo//). **Relativo**: com comparação (//o mais alto da turma//).",
    "Formas especiais: //bom → melhor//; //mau → pior//; //grande → maior//; //pequeno → menor//."
  ], [
    ob("“Lia é mais alta que Ana” expressa comparativo de:", "igualdade|superioridade|inferioridade|superlativo", "B"),
    ob("O superlativo absoluto sintético de //belo// é:", "belíssimo|melhor|mais belo|belo demais", "A"),
    ob("O comparativo de superioridade de //bom// é:", "mais bom|melhor|bom do que|ótimo", "B"),
    ob("“Rui é tão rápido quanto Davi” expressa comparativo de:", "inferioridade|superioridade|igualdade|superlativo", "C"),
    ob("O comparativo de superioridade de //grande// é:", "maior|mais grande|grandíssimo|mais maior", "A"),
    dis("Reescreva com comparativo de igualdade: “O cachorro é rápido. O gato é rápido.”", "O cachorro é tão rápido quanto o gato.", 2),
    dis("Escreva o superlativo: alto, feio, fácil, simples.", "altíssimo, feíssimo, facílimo, simplicíssimo.", 2),
    dis("Complete: “Este lanche está ___ (bom) que aquele.”", "melhor.", 2)
  ]);

  G("artigo", "Artigo definido e indefinido", "Quando o artigo indica um ser específico (o, a) e quando indica um qualquer (um, uma).", [
    "**Artigos definidos**: //o, a, os, as//. Indicam um ser específico, já conhecido (//O livro que você indicou//).",
    "**Artigos indefinidos**: //um, uma, uns, umas//. Indicam um ser qualquer, não identificado (//Comprei um livro//).",
    "O artigo concorda com o substantivo em gênero e número. Pode se juntar a preposições (//em + o = no; de + a = da//)."
  ], [
    ob("Qual é um artigo indefinido?", "o|a|um|as", "C"),
    ob("Em “Uma menina entrou na sala”, o artigo //uma// é:", "definido|indefinido|possessivo|pronome pessoal", "B", "Não se sabe qual menina: é uma qualquer."),
    ob("Complete com artigo definido: “___ livros estão na mesa.”", "Os|Um|Uns|Uma", "A"),
    ob("O artigo indefinido feminino plural é:", "uns|umas|as|uma", "B"),
    ob("Em “Comprei o livro que você indicou”, o artigo //o// indica um ser:", "específico, já conhecido|qualquer|em quantidade|em dúvida", "A"),
    dis("Sublinhe os artigos: “Uma menina viu os pássaros.”", "Uma (indefinido) e os (definido).", 2),
    dis("Complete: a) Vi ___ filme ótimo (um qualquer). b) ___ filme que vi era ótimo (um específico).", "a) um; b) O.", 2),
    dis("Explique a diferença: “Um aluno chegou.” × “O aluno chegou.”", "“Um aluno” é qualquer aluno, não identificado; “o aluno” é um aluno específico, conhecido de quem fala e de quem ouve.", 3)
  ]);

  G("numeral", "Numeral: cardinal, ordinal, multiplicativo e fracionário", "Quatro tipos de numeral com exemplos e exercícios.", [
    "**Cardinal**: indica quantidade (//um, dois, vinte//). **Ordinal**: indica ordem (//primeiro, segundo, vigésimo//).",
    "**Multiplicativo**: indica multiplicação (//dobro, triplo//). **Fracionário**: indica parte (//meio, metade, um terço//)."
  ], [
    ob("Qual é um numeral ordinal?", "quinto|cinco|quíntuplo|um quinto", "A"),
    ob("Qual é um numeral multiplicativo?", "metade|dobro|segundo|três", "B"),
    ob("Qual é um numeral fracionário?", "terço|triplo|terceiro|três", "A"),
    ob("O ordinal de 20 é:", "vintésimo|décimo|vigésimo|vinte", "C"),
    ob("Em “Comi metade da pizza”, //metade// é numeral:", "cardinal|fracionário|ordinal|multiplicativo", "B"),
    dis("Escreva por extenso: 1º, 12, 3/4, o dobro de 5.", "primeiro, doze, três quartos, dez.", 2),
    dis("Sublinhe os numerais: “No segundo dia, três alunos comeram dois lanches.”", "segundo (ordinal), três (cardinal), dois (cardinal).", 2),
    dis("Que tipo de numeral é //triplo//? Escreva uma frase com ele.", "Multiplicativo. Exemplo: “O preço está o triplo do ano passado.”", 2)
  ]);

  G("pronome-pessoal", "Pronomes pessoais", "Eu, tu, ele… e me, te, o, a: quem fala, com quem se fala e de quem se fala.", [
    "**Pronomes pessoais retos**: //eu, tu, ele/ela, nós, vós, eles/elas//. Costumam ser sujeito.",
    "**Oblíquos**: //me, te, se, o, a, lhe, nos, vos, os, as, lhes//. Costumam ser complemento (//Eu te amo//).",
    "Os pronomes evitam repetições: //Carlos comprou um bolo e deu-o à mãe// (o = o bolo)."
  ], [
    ob("Qual é um pronome pessoal reto?", "me|eu|lhe|nos", "B"),
    ob("“Ana e Rui foram ao cinema” → “___ foram ao cinema.”", "Eles|Elas|Nós|Eu", "A"),
    ob("Em “Maria viu João e cumprimentou-o”, //o// substitui:", "Maria|a rua|João|cumprimentou", "C"),
    ob("O pronome da 1ª pessoa do plural é:", "eles|nós|vós|tu", "B"),
    ob("Em “Eu te amo”, //te// é pronome:", "reto|oblíquo|possessivo|demonstrativo", "B"),
    dis("Substitua o sujeito por um pronome: a) Paulo chegou. b) Lia e Bia saíram. c) Eu e você ficamos.", "a) Ele chegou. b) Elas saíram. c) Nós ficamos.", 3),
    dis("Reescreva evitando a repetição: “Carlos comprou um bolo. Carlos deu o bolo à mãe.”", "Carlos comprou um bolo e deu-o à mãe. (ou: Ele deu o bolo à mãe.)", 3),
    dis("Complete: a) ___ (tu) sabes a resposta? b) ___ (nós) vamos embora.", "a) Tu; b) Nós.", 2)
  ]);

  G("pronome-possessivo-demonstrativo", "Pronomes possessivos e demonstrativos", "Meu, teu, nosso… e este, esse, aquele: posse e posição no espaço.", [
    "**Possessivos**: indicam posse (//meu, teu, seu, nosso, vosso//): //Minha mãe chegou//.",
    "**Demonstrativos** indicam posição: //este, esta, isto// (perto de quem fala); //esse, essa, isso// (perto de quem ouve); //aquele, aquela, aquilo// (longe de ambos).",
    "Eles concordam em gênero e número com o substantivo (//aquelas casas//)."
  ], [
    ob("Em “Este caderno é meu”, //este// indica objeto:", "perto de quem fala|perto de quem ouve|longe de ambos|sem lugar", "A"),
    ob("Qual é um pronome possessivo?", "aquele|nosso|isso|este", "B"),
    ob("Em “Dê-me esse livro, que está aí com você”, //esse// indica objeto:", "perto de quem fala|perto de quem ouve|longe de ambos|sem lugar", "B"),
    ob("O pronome //aquilo// indica algo:", "perto de quem fala|perto de quem ouve|longe de quem fala e de quem ouve|sem lugar", "C"),
    ob("Em “Minha mãe chegou”, //minha// indica:", "lugar|posse|tempo|quantidade", "B"),
    dis("Classifique: “Aquela bolsa é minha e esta é do meu irmão.”", "Aquela: demonstrativo; minha: possessivo; esta: demonstrativo; meu: possessivo.", 3),
    dis("Complete com este, esse ou aquele: a) (aqui comigo) ___ livro; b) (aí com você) ___ casaco; c) (lá longe) ___ prédio.", "a) este; b) esse; c) aquele.", 2),
    dis("Escreva uma frase com o possessivo //nosso//.", "Resposta pessoal. Exemplo: “Nosso time venceu.”", 2)
  ]);

  G("verbo-conjugacoes", "Verbo: infinitivo, conjugações, pessoa e número", "As três conjugações (-ar, -er, -ir) e a flexão em pessoa e número.", [
    "**Verbo** indica ação, estado ou fenômeno da natureza. A forma //infinitiva// termina em **-ar, -er** ou **-ir** (//cantar, vender, partir//).",
    "**1ª conjugação**: -ar. **2ª conjugação**: -er (e //pôr//). **3ª conjugação**: -ir.",
    "O verbo varia em **pessoa** (1ª, 2ª, 3ª) e **número** (singular, plural): //eu canto; nós cantamos; eles cantam//."
  ], [
    ob("Qual verbo é da 1ª conjugação?", "correr|sorrir|cantar|pôr", "C"),
    ob("O infinitivo de //comemos// é:", "comer|comir|comar|comeu", "A"),
    ob("A conjugação do verbo //partir// é a:", "primeira|segunda|terceira|quarta", "C"),
    ob("Qual verbo está na 3ª pessoa do plural?", "falamos|falam|fala|falo", "B"),
    ob("Em “Nós estudamos”, a pessoa e o número são:", "1ª pessoa do singular|1ª pessoa do plural|2ª pessoa do plural|3ª pessoa do plural", "B"),
    dis("Classifique a conjugação: vender, dormir, brincar, ler.", "vender: 2ª; dormir: 3ª; brincar: 1ª; ler: 2ª.", 2),
    dis("Conjugue //brincar// no presente do indicativo.", "eu brinco, tu brincas, ele brinca, nós brincamos, vós brincais, eles brincam.", 3),
    dis("Escreva o infinitivo: jogou, bebemos, abrirão, falei.", "jogar, beber, abrir, falar.", 2)
  ]);

  G("verbo-tempos", "Verbo: presente, passado e futuro", "Reconhecer e mudar o tempo verbal de frases e pequenos textos.", [
    "**Presente**: o fato acontece agora ou é habitual (//Eu estudo//). **Pretérito (passado)**: já aconteceu (//Eu estudei; eu estudava//). **Futuro**: vai acontecer (//Eu estudarei//).",
    "O **pretérito imperfeito** indica hábito ou ação que durava no passado (//Eu brincava na rua todo dia//). O **perfeito**, ação concluída (//Ontem brinquei//)."
  ], [
    ob("“Amanhã visitarei meus avós” está no:", "passado|presente|futuro|infinitivo", "C"),
    ob("“Ontem choveu muito” está no:", "passado|presente|futuro|infinitivo", "A"),
    ob("Qual verbo está no presente?", "cantei|cantarei|canta|cantava", "C"),
    ob("Passando “Eu estudo à noite” para o passado, temos:", "Eu estudarei à noite.|Eu estudo à noite.|Eu estudei à noite.|Eu estudar à noite.", "C"),
    ob("Qual frase indica um hábito no passado?", "Eu brinquei ontem.|Eu brincava na rua todo dia.|Eu brincarei amanhã.|Eu brinco agora.", "B"),
    dis("Passe para o futuro: “Eles jogam bola.”", "Eles jogarão bola.", 2),
    dis("Reescreva no passado: “Maria acorda, toma café e vai à escola.”", "Maria acordou, tomou café e foi à escola.", 2),
    dis("Complete: a) Ontem eu ___ (comer) pizza. b) Amanhã nós ___ (viajar).", "a) comi; b) viajaremos.", 2)
  ]);

  G("verbos-irregulares", "Verbos irregulares: ser, ir, ter, fazer, estar, vir", "Conjugação de verbos que mudam o radical e erros comuns como “fazi”.", [
    "Verbos **irregulares** mudam o radical ao serem conjugados: //ser → sou, fui; ir → vou, fui; ter → tenho, tive; fazer → faço, fiz; estar → estou, estive; vir → venho, vim//.",
    "Cuidado: //eu fiz// (e não //fazi//); //eu tive// (e não //tinha-ei//); //eles têm// (com acento) e //ele tem//."
  ], [
    ob("“Eu ___ (ser) feliz.” (presente)", "sou|é|era|fui", "A"),
    ob("“Ontem, ele ___ (ir) ao parque e voltou cedo.”", "vai|foi|irá|ir", "B"),
    ob("“Nós ___ (ter) um cachorro.” (presente)", "tem|temos|teremos|tivemos", "B"),
    ob("“Eles ___ (fazer) o trabalho.” (presente)", "fazem|fizeram|farão|fazam", "A"),
    ob("A forma //fui// pode ser do verbo:", "só ser|só ir|ser e ir|nenhum", "C"),
    dis("Conjugue //ter// no presente do indicativo.", "eu tenho, tu tens, ele tem, nós temos, vós tendes, eles têm.", 3),
    dis("Corrija: “Eu fazi o dever ontem.”", "Eu fiz o dever ontem.", 2),
    dis("Complete: a) Ela ___ (estar) cansada hoje. b) Eles ___ (vir) à festa amanhã.", "a) está; b) virão.", 2)
  ]);

  G("adverbio", "Advérbio e suas circunstâncias", "Tempo, lugar, modo, intensidade, negação, afirmação e dúvida.", [
    "**Advérbio** modifica um verbo, um adjetivo ou outro advérbio e indica uma circunstância.",
    "**Tempo**: //hoje, ontem, nunca//. **Lugar**: //aqui, lá, longe//. **Modo**: //bem, mal, devagar, rapidamente//. **Intensidade**: //muito, pouco, bastante//. **Negação**: //não//. **Afirmação**: //sim//. **Dúvida**: //talvez//.",
    "É invariável: não muda em gênero nem número."
  ], [
    ob("Qual é um advérbio de tempo?", "aqui|ontem|bem|muito", "B"),
    ob("Em “Ela canta muito bem”, //bem// indica:", "tempo|lugar|modo|negação", "C"),
    ob("Qual é um advérbio de lugar?", "lá|jamais|talvez|devagar", "A"),
    ob("Em “Talvez eu vá”, //talvez// indica:", "afirmação|dúvida|tempo|lugar", "B"),
    ob("Qual é um advérbio de intensidade?", "pouco|ontem|aqui|nunca", "A"),
    dis("Sublinhe os advérbios: “Ontem, o menino correu rapidamente até lá.”", "Ontem (tempo), rapidamente (modo), lá (lugar).", 2),
    dis("Forme advérbios de modo a partir de: lento, claro, feliz, rápido.", "lentamente, claramente, felizmente, rapidamente.", 2),
    dis("Escreva uma frase com advérbio de negação.", "Resposta pessoal. Exemplo: “Não gosto de acordar tarde.”", 2)
  ]);

  G("preposicao", "Preposição e contrações", "Palavras que ligam termos (de, em, com, para) e suas junções com artigos (do, na, pelo).", [
    "**Preposição** liga duas palavras e indica relação entre elas: //a, até, com, de, em, para, por, sem, sobre//.",
    "A preposição pode se unir ao artigo, formando **contrações**: //de + o = do; em + a = na; a + a = à; por + o = pelo; em + aquele = naquele//."
  ], [
    ob("Qual é uma preposição?", "casa|com|bonito|rapidamente", "B"),
    ob("Em “Fui à escola”, //à// é a união de:", "a + a|a + o|em + a|de + a", "A"),
    ob("Em “Moro na rua”, //na// é a união de:", "de + a|em + a|a + a|por + a", "B"),
    ob("A contração de //de + o// é:", "do|no|ao|pelo", "A"),
    ob("Em “Vim da praia”, //da// é a união de:", "em + a|de + a|a + a|por + a", "B"),
    dis("Complete com preposição: a) Carlos gosta ___ chocolate. b) Fui ___ praia ___ meu pai. c) O livro está ___ a mesa.", "a) de; b) à e com; c) sobre.", 3),
    dis("Una: de + o, em + os, por + a, a + aquele.", "do, nos, pela, àquele.", 2),
    dis("Sublinhe as preposições: “Saí de casa com meu irmão e fomos até a feira.”", "de, com, até, a.", 2)
  ]);

  G("conjuncao", "Conjunção: e, mas, ou, porque", "Palavras que ligam orações e indicam soma, oposição, escolha ou causa.", [
    "**Conjunção** liga orações ou palavras e indica uma relação entre elas.",
    "//e// (soma): //Choveu e saímos//. //mas// (oposição): //Estudei, mas não entendi//. //ou// (escolha): //Quer chá ou café?//. //porque// (causa): //Não fui porque estava doente//."
  ], [
    ob("Em “Estudei, mas não entendi”, //mas// indica:", "soma|oposição|explicação|escolha", "B"),
    ob("Em “Quer chá ou café?”, //ou// indica:", "soma|oposição|escolha|causa", "C"),
    ob("Em “Choveu e saímos”, //e// indica:", "soma|oposição|escolha|conclusão", "A"),
    ob("Em “Não fui porque estava doente”, //porque// indica:", "oposição|causa|tempo|escolha", "B"),
    ob("Qual é uma conjunção?", "quando|bonito|andar|fome", "A"),
    dis("Una com uma conjunção de oposição: “Quero sair. Está chovendo.”", "Quero sair, mas está chovendo.", 2),
    dis("Una com uma conjunção de causa: “Fiquei em casa. Estava doente.”", "Fiquei em casa porque estava doente.", 2),
    dis("Escreva uma frase com a conjunção //ou//.", "Resposta pessoal. Exemplo: “Vamos ao parque ou ao cinema?”", 2)
  ]);

  G("interjeicao-onomatopeia", "Interjeição e onomatopeia", "Palavras que exprimem emoção (Ufa!, Oba!) e que imitam sons (tic-tac, miau).", [
    "**Interjeição** exprime emoção de forma súbita: //Ufa!// (alívio), //Oba!// (alegria), //Ai!// (dor), //Nossa!// (surpresa), //Psiu!// (pedido de silêncio), //Credo!// (susto ou repulsa).",
    "**Onomatopeia** é a palavra que imita um som: //tic-tac, miau, au-au, plaft, boom//."
  ], [
    ob("Qual é uma interjeição de alívio?", "Ufa!|Ai!|Oba!|Psiu!", "A"),
    ob("A interjeição //Psiu!// pede:", "dor|silêncio|alegria|medo", "B"),
    ob("Qual é uma onomatopeia?", "casa|bonito|tic-tac|correr", "C"),
    ob("Qual é uma interjeição de dor?", "Oba!|Ai!|Ufa!|Hum!", "B"),
    ob("A palavra //miau// é:", "interjeição|verbo|onomatopeia|adjetivo", "C"),
    dis("Que emoção exprime: Oba! / Nossa! / Credo! / Ufa!", "alegria / surpresa / susto ou repulsa / alívio.", 2),
    dis("Crie uma frase com interjeição de surpresa.", "Resposta pessoal. Exemplo: “Nossa! Que bolo enorme!”", 2),
    dis("Escreva a onomatopeia que imita o som de: relógio, cachorro, sino, chuva.", "tic-tac; au-au; dim-dom (ou blém); plic-plic (ou chuá).", 2)
  ]);

  G("silabas-tonicidade", "Sílabas e sílaba tônica", "Separar sílabas, contar e classificar as palavras em oxítonas, paroxítonas e proparoxítonas.", [
    "**Sílaba** é um grupo de sons pronunciado de uma só vez. Quanto ao número: //monossílaba// (1), //dissílaba// (2), //trissílaba// (3), //polissílaba// (4 ou mais).",
    "**Sílaba tônica** é a pronunciada com mais força. **Oxítona**: última sílaba (//sa-bi-á//). **Paroxítona**: penúltima (//ca-der-no//). **Proparoxítona**: antepenúltima (//lâm-pa-da//).",
    "Não se separam os dígrafos //ch, lh, nh// (//ba-ra-lho//); separam-se //rr, ss// (//car-ro, pas-so//)."
  ], [
    ob("A separação silábica correta de //professor// é:", "pro-fe-ssor|pro-fes-sor|prof-es-sor|pro-fess-or", "B"),
    ob("A palavra //escola// tem quantas sílabas?", "2|3|4|5", "B"),
    ob("Qual palavra é oxítona?", "sofá|casa|lâmpada|bola", "A"),
    ob("Qual palavra é paroxítona?", "café|sapato|música|pássaro", "B"),
    ob("Qual palavra é proparoxítona?", "lâmpada|panela|gato|bonito", "A"),
    dis("Separe em sílabas e diga quantas são: a) borboleta; b) quilo; c) leite; d) sol.", "a) bor-bo-le-ta (4); b) qui-lo (2); c) lei-te (2); d) sol (1).", 3),
    dis("Classifique quanto à tônica: jacaré, caderno, árvore, jabuti.", "jacaré: oxítona; caderno: paroxítona; árvore: proparoxítona; jabuti: oxítona.", 2),
    dis("Classifique quanto ao número de sílabas: pé, bola, janela, borboleta.", "pé: monossílaba; bola: dissílaba; janela: trissílaba; borboleta: polissílaba.", 2)
  ]);

  G("acentuacao", "Acentuação gráfica: regras básicas", "Proparoxítonas, oxítonas em a/e/o/em e monossílabos tônicos; paroxítonas em l, r, x, i(s), ão(s).", [
    "**Todas as proparoxítonas** são acentuadas (//música, pássaro, lâmpada, árvore//).",
    "**Oxítonas** terminadas em **a, e, o, em** (seguidas ou não de //s//) são acentuadas (//sofá, café, vovô, também//).",
    "**Monossílabos tônicos** terminados em a, e, o (//já, pé, nó//) são acentuados.",
    "**Paroxítonas** terminadas em //l, r, x, i(s), ão(s)// são acentuadas (//fácil, açúcar, tórax, táxi, órfão//)."
  ], [
    ob("Qual palavra recebe acento por ser proparoxítona?", "música|cadeira|janela|sapato", "A"),
    ob("Qual palavra é oxítona e deve ser acentuada?", "canal|jacaré|jabuti|papel", "B"),
    ob("Qual monossílabo tônico recebe acento?", "sol|pé|mar|luz", "B"),
    ob("A grafia correta é:", "açucar|açúcar|assucar|açúcár", "B"),
    ob("Qual palavra está acentuada corretamente?", "ônibus|onibus|ónibus|onibús", "A"),
    dis("Acentue: lampada, arvore, cafe, facil, voce.", "lâmpada, árvore, café, fácil, você.", 2),
    dis("Explique por que //música// e //pássaro// têm acento.", "Porque são proparoxítonas, e todas as proparoxítonas são acentuadas.", 2),
    dis("Por que //jacaré// tem acento e //jabuti// não?", "//Jacaré// é oxítona terminada em -e, que é acentuada; //jabuti// é oxítona terminada em -i, que não recebe acento.", 3)
  ]);

  G("encontros-digrafos", "Ditongo, tritongo, hiato e dígrafos", "Encontros de vogais e letras que juntas representam um só som.", [
    "**Ditongo**: vogal + semivogal na mesma sílaba (//pai, boi, leite//). **Tritongo**: três sons na mesma sílaba (//Uruguai, saguão//). **Hiato**: vogais em sílabas diferentes (//sa-ú-de, pa-ís, po-e-ta//).",
    "**Dígrafo**: duas letras que representam um único som: //ch, lh, nh, rr, ss, qu, gu// (//chuva, galho, ninho, carro, passo//)."
  ], [
    ob("Qual palavra tem ditongo?", "saúde|pai|poeta|rua", "B"),
    ob("Qual palavra tem hiato?", "leite|boi|saída|pai", "C"),
    ob("Qual palavra tem dígrafo?", "chuva|casa|bola|vaca", "A", "ch = um único som."),
    ob("Qual palavra tem o dígrafo //lh//?", "galho|gato|mala|bola", "A"),
    ob("Qual palavra tem tritongo?", "Uruguai|pai|boi|rei", "A"),
    dis("Classifique como ditongo ou hiato: leite, saúde, boi, país, cuidado.", "leite: ditongo; saúde: hiato; boi: ditongo; país: hiato; cuidado: ditongo.", 3),
    dis("Sublinhe os dígrafos: chuva, galho, ninho, carro, passo.", "ch, lh, nh, rr, ss.", 2),
    dis("Quantas letras e quantos sons tem a palavra //chuva//? Explique.", "5 letras e 4 sons, porque //ch// é um dígrafo (duas letras, um som).", 3)
  ]);

  G("ortografia-s-z", "Ortografia: s, z, ss e ç", "Quando usar cada uma dessas letras para o som de /s/ e de /z/.", [
    "**s entre vogais** tem som de //z// (//casa, mesa, rosa//). **ss entre vogais** tem som de //s// (//passo, massa//).",
    "**ç** vem antes de //a, o, u// e nunca começa palavra (//maçã, coração, açúcar//).",
    "Escrevem-se com **-oso** os adjetivos (//gostoso, perigoso//) e com **-esa** os femininos de títulos e pátrios (//portuguesa, duquesa//)."
  ], [
    ob("Qual é a escrita correta?", "caza|casa|cassa|kasa", "B"),
    ob("Complete: “pa__ear” (andar sem pressa).", "pasear|passear|paçear|pazear", "B"),
    ob("Complete: “cora__ão”.", "coração|corasão|corassão|corazão", "A"),
    ob("Qual é a escrita correta do adjetivo?", "gostozo|gostoço|gostoso|gostosso", "C"),
    ob("O feminino de //português// é:", "portuguesa|portugueza|portuguessa|portugueça", "A"),
    dis("Complete com s, ss, z ou ç: mi__ão, ro__a, pre__o, cabe__a.", "missão, rosa, preço, cabeça.", 2),
    dis("Por que //casa// tem som de z e //passo// tem som de s?", "O //s// entre vogais soa como //z//; o //ss// entre vogais soa como //s//.", 3),
    dis("Forme adjetivos com -oso: gosto, perigo, medo, cheiro.", "gostoso, perigoso, medroso, cheiroso.", 2)
  ]);

  G("ortografia-g-j-x-ch", "Ortografia: g/j e x/ch", "Regras e exemplos para não errar viagem, janela, caixa, enxada.", [
    "**g** antes de //e, i// soa //j// (//gelo, girafa, gente//). **j** vem antes de //a, o, u// (//janela, jovem, juiz//) e em palavras de origem indígena ou africana (//jiboia, canjica//).",
    "Palavras terminadas em **-agem, -igem, -ugem** levam g (//viagem, vertigem, ferrugem//). //Viajem// é forma do verbo //viajar//.",
    "Usa-se **x** depois de ditongo (//caixa, peixe//), depois de //en// (//enxada//) e depois de //me// (//mexer//). **ch** em //chuva, cheiro, chave//."
  ], [
    ob("Qual é a escrita correta?", "jirafa|girafa|gerafa|jerafa", "B"),
    ob("“A ___ foi longa.” (substantivo)", "viajem|viagem|viaje|viajeem", "B"),
    ob("Complete: “cai__a”.", "caixa|caicha|caiza|caisa", "A"),
    ob("Complete: “en__ada” (ferramenta).", "enxada|enchada|enjada|enssada", "A"),
    ob("Qual é a escrita correta?", "xave|chavi|chave|xavi", "C"),
    dis("Complete com g ou j: __anela, __elo, __ente, __ovem, via__em.", "janela, gelo, gente, jovem, viagem.", 2),
    dis("Complete com x ou ch: __uva, pei__e, me__er, __ícara.", "chuva, peixe, mexer, xícara.", 2),
    dis("Que sufixo têm as palavras //garagem, passagem, ferrugem//? Qual letra usam?", "-agem / -ugem, escritos com g.", 2)
  ]);

  G("ortografia-r-rr-m-n", "Ortografia: r/rr, m/n e lh/nh", "Quando usar r e rr, m antes de p e b, e dígrafos lh e nh.", [
    "**r** no começo da palavra e depois de //n, l, s// tem som forte (//rato, honra, Israel//). **rr** só entre vogais, com som forte (//carro, terra//). Entre vogais, **r** é brando (//cara, hora//).",
    "Antes de **p** e **b** usa-se **m** (//campo, bomba, embora//). Antes das outras consoantes, **n** (//canto, mundo, conta//).",
    "**lh** e **nh** são dígrafos: //galho, filho, ninho, manhã//."
  ], [
    ob("Complete: “ca__o” (veículo).", "caro|carro|karro|carrro", "B"),
    ob("Complete: “ca__po”.", "campo|canpo|camppo|cãpo", "A"),
    ob("Complete: “e__bora”.", "embora|enbora|ebora|ennbora", "A"),
    ob("Antes de //b// usa-se:", "n|m|ã|nm", "B"),
    ob("Qual é a escrita correta?", "ninho|nilho|nijo|nhino", "A"),
    dis("Complete com r ou rr: __oupa, ca__o, pa__ede, ho__a, ma__.", "roupa, carro, parede, hora, mar.", 2),
    dis("Complete com m ou n: ca__po, co__ta, ba__bu, co__versa, i__portante.", "campo, conta, bambu, conversa, importante.", 2),
    dis("Por que escrevemos //campo// com m e //canto// com n?", "Antes de p e b usa-se m; antes das outras consoantes usa-se n.", 2)
  ]);

  G("pontuacao", "Pontuação: ponto, vírgula, interrogação, exclamação, dois-pontos e travessão", "Para que serve cada sinal e como pontuar diálogos e listas.", [
    "**Ponto final** encerra frases declarativas. **Interrogação** (?) encerra perguntas. **Exclamação** (!) expressa emoção ou ordem.",
    "**Vírgula** separa itens de uma lista (//maçã, pera e uva//), o vocativo (//Pedro, venha aqui//) e vem antes de //mas//.",
    "**Dois-pontos** introduzem uma lista ou uma fala. **Travessão** (—) marca a fala dos personagens em diálogos."
  ], [
    ob("Qual sinal encerra uma pergunta?", "ponto final|interrogação|vírgula|dois-pontos", "B"),
    ob("Os dois-pontos podem anunciar:", "uma lista ou uma fala|o fim do texto|uma pergunta|uma negação", "A"),
    ob("O travessão, nos diálogos, indica:", "a fala de um personagem|uma pergunta|uma dúvida|o fim do texto", "A"),
    ob("Qual frase expressa admiração?", "Que dia lindo?|Que dia lindo!|Que dia lindo,|Que dia lindo:", "B"),
    ob("Qual é a pontuação correta?", "Comprei maçã, pera e uva.|Comprei maçã pera, e uva.|Comprei maçã pera e, uva.|Comprei, maçã pera e uva.", "A"),
    dis("Pontue: “você vai ao parque amanhã”", "Você vai ao parque amanhã?", 2),
    dis("Pontue: “Pedro Lucas e Ana foram ao mercado e compraram arroz feijão e carne”", "Pedro, Lucas e Ana foram ao mercado e compraram arroz, feijão e carne.", 2),
    dis("Reescreva em forma de diálogo, com travessão: Ana perguntou se Rui queria sorvete. Rui disse que sim.", "— Rui, você quer sorvete? — perguntou Ana.\n— Quero, sim! — respondeu Rui.", 4)
  ]);

  G("frase-oracao-periodo", "Frase, oração e período", "Diferença entre frase, oração e período; tipos de frase (declarativa, interrogativa, exclamativa, imperativa).", [
    "**Frase** é um enunciado com sentido completo; pode ou não ter verbo (//Que susto!//). **Oração** é a frase ou parte da frase que tem verbo (//Chove muito.//). **Período** é a frase organizada em uma ou mais orações.",
    "**Período simples**: uma só oração (//Choveu.//). **Período composto**: duas ou mais (//Chegamos cedo e jantamos juntos.//).",
    "Tipos de frase: **declarativa** (afirma), **interrogativa** (pergunta), **exclamativa** (emoção) e **imperativa** (ordem ou pedido)."
  ], [
    ob("Qual é uma frase sem verbo?", "Chove muito.|Eu fui.|Que susto!|Ele canta.", "C"),
    ob("Qual é um período simples?", "Estudei e passei.|Choveu.|Cheguei quando saiu.|Quero que venha.", "B"),
    ob("Quantas orações tem “Chegamos cedo e jantamos juntos”?", "1|2|3|4", "B"),
    ob("Qual é uma frase interrogativa?", "Vamos ao parque?|Vá ao parque.|Que parque lindo!|Fui ao parque.", "A"),
    ob("Qual é uma frase imperativa?", "A porta fechou.|Fechou a porta?|Que porta!|Feche a porta.", "D"),
    dis("Classifique: a) Que calor! b) Abra a janela. c) Você tem sede? d) Hoje está quente.", "a) exclamativa; b) imperativa; c) interrogativa; d) declarativa.", 3),
    dis("Quantas orações tem “Quando cheguei, ela já tinha saído”? Identifique os verbos.", "Duas orações; verbos: cheguei e tinha saído.", 3),
    dis("Transforme em interrogativa: “Você gosta de ler.”", "Você gosta de ler?", 2)
  ]);
})();
