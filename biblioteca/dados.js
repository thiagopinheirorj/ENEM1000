/*
 * Biblioteca do Professor · dados
 *
 * Para adicionar um material, acrescente um objeto à lista `materiais` (no fim deste arquivo).
 * Formato:
 *   id        texto único, sem espaços (aparece na URL: #/m/<id>)
 *   titulo    título exibido
 *   tipo      atividade | prova | slides | mapa | simulado | interpretacao | gramatica | emergencia
 *   serie     lista de anos: "6" "7" "8" "9" "EM"
 *   assunto   lista: "Gramática" | "Interpretação" | "Literatura" | "Redação"
 *   resumo    uma frase
 *   tempo     (opcional) ex.: "1 aula", "50 min"
 *   blocos    folha impressa (todos os tipos, exceto slides e mapa) — veja os tipos de bloco abaixo
 *   slides    (tipo "slides") lista de { capa, t, sub, li, ex, nota }
 *   mapa      (tipo "mapa") { centro, rotulos, ramos: [{ t, itens } ou { t, a, b }] }
 *
 * Blocos da folha:
 *   { k:"instr",  p:"texto" }                               orientação ao aluno
 *   { k:"texto",  t, fonte, p:[parágrafos], poema:true }    texto-base (poema: respeita as quebras de linha)
 *   { k:"teoria", t, li:[itens] }                           quadro de conteúdo
 *   { k:"tabela", t, cab:[…], l:[[…]] }                     célula pode ser { t, prof:true } (só na versão do professor)
 *   { k:"q",      t, it:[questões] }                        questões (numeração contínua)
 *   { k:"plano",  t, et:[{ min, t, d }] }                   roteiro de aula
 *   { k:"linhas", t, n }                                    linhas para escrever
 *   { k:"prof",   t, li:[itens] }                           só aparece na versão do professor
 *
 * Questões: obj(enunciado, alternativas, índiceDaCorreta, comentário, { ctx, fonte })  → múltipla escolha
 *           dis(enunciado, respostaModelo, nLinhas, { ctx, fonte })                    → discursiva
 * Formatação nos textos: **negrito**, //itálico//, ++sublinhado++ e \n para quebra de linha.
 */
(function () {
  "use strict";

  function obj(e, alt, g, c, x) {
    var q = { e: e, alt: alt, g: g };
    if (c) q.c = c;
    if (x) for (var k in x) q[k] = x[k];
    return q;
  }
  function dis(e, r, l, x) {
    var q = { e: e, r: r, l: l || 3 };
    if (x) for (var k in x) q[k] = x[k];
    return q;
  }

  var F = ["6", "7", "8", "9"];
  var SUJ = ["sujeito simples", "sujeito composto", "sujeito desinencial (oculto)", "sujeito indeterminado", "oração sem sujeito"];
  var COORD = ["coordenada aditiva", "coordenada adversativa", "coordenada alternativa", "coordenada conclusiva", "coordenada explicativa"];
  var SUB = ["subordinada substantiva", "subordinada adjetiva", "subordinada adverbial"];
  var FIG = ["metáfora", "comparação", "personificação (prosopopeia)", "metonímia", "hipérbole", "eufemismo", "ironia", "paradoxo"];

  var materiais = [

    /* ===================== INTERPRETAÇÃO ===================== */
    {
      id: "interp-6-cachorro", titulo: "O cachorro que esperava no portão", tipo: "interpretacao", serie: ["6"], assunto: ["Interpretação"],
      resumo: "Leitura de narrativa curta: localizar informações, comparação e inferência.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "Leia o texto com atenção e responda às questões." },
        { k: "texto", t: "O cachorro que esperava no portão", fonte: "Texto original", p: [
          "Todas as tardes, às cinco horas, o cachorro Pipoca sentava no portão da casa de dona Zilda e ficava olhando para a esquina. Ele não latia, não se mexia, só esperava. Os vizinhos já conheciam o costume: quando o relógio da padaria batia cinco horas, lá estava ele, de orelhas em pé.",
          "Era a hora em que Davi voltava da escola. O menino vinha pela calçada, com a mochila pesada nas costas, e o cachorro corria ao seu encontro, rodando em volta dele como se fizesse uma festa só para ele.",
          "Um dia, Davi não apareceu. Estava com febre e ficou de cama. Pipoca esperou até escurecer e só então entrou, de cabeça baixa. Na manhã seguinte, dona Zilda o encontrou deitado debaixo da cama do menino, de olhos abertos, guardando o sono do amigo."
        ] },
        { k: "q", it: [
          obj("Em que horário Pipoca ia esperar no portão?", ["Às quatro horas.", "Às cinco horas.", "Às seis horas.", "Às sete horas."], 1, "A informação está no 1º parágrafo: “às cinco horas”."),
          obj("Por que Pipoca esperava justamente nesse horário?", ["Porque era a hora da comida dele.", "Porque dona Zilda mandava.", "Porque era a hora em que Davi voltava da escola.", "Porque ele gostava de olhar a rua."], 2, "O 2º parágrafo começa explicando: “Era a hora em que Davi voltava da escola”."),
          obj("No trecho “como se fizesse uma festa só para ele”, a comparação mostra que o cachorro…", ["estava com fome.", "demonstrava grande alegria ao ver o menino.", "queria brincar com outros cachorros.", "tinha medo da rua."], 1, "Comparar a recepção a uma festa expressa a alegria de Pipoca."),
          dis("O que aconteceu no dia em que Davi não apareceu?", "Davi estava com febre e ficou de cama. Pipoca esperou até escurecer e entrou de cabeça baixa.", 3),
          dis("Que expressão do texto mostra que Pipoca estava triste ao entrar em casa?", "“de cabeça baixa”.", 2),
          dis("Que sentimento aproxima Pipoca e Davi? Justifique com uma passagem do texto.", "Resposta pessoal. Esperado: amizade, carinho ou lealdade, justificada por passagens como a espera diária no portão ou o fato de o cachorro ter guardado o sono do menino.", 3)
        ] }
      ]
    },
    {
      id: "interp-7-noticia-horta", titulo: "Notícia: a horta da escola", tipo: "interpretacao", serie: ["7"], assunto: ["Interpretação"],
      resumo: "Gênero notícia: fato central, lide, fato × opinião e fontes.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "Leia a notícia e responda às questões." },
        { k: "texto", t: "Alunos transformam pátio em horta e passam a servir verduras na merenda", fonte: "Texto original, criado para esta atividade (fictício)", p: [
          "Alunos do 7º ano da Escola Municipal Ipê Amarelo transformaram, durante o primeiro semestre, o pátio sem uso da escola em uma horta. Desde segunda-feira (12), alface, couve e cenoura colhidas pelos estudantes passaram a fazer parte da merenda.",
          "O projeto surgiu nas aulas de Ciências, quando a turma discutiu o desperdício de alimentos. “Aprendi que a gente pode plantar o que come”, disse a aluna Lívia Prado, de 12 anos. Segundo a diretora, Marta Soares, a horta reduziu o gasto com verduras e aumentou o interesse das crianças por saladas.",
          "Na opinião da diretora, “a melhor aula é aquela que a gente pode comer depois”. A escola pretende ampliar o projeto para o pátio da quadra no próximo ano."
        ] },
        { k: "q", it: [
          obj("Qual é o fato central da notícia?", ["Os alunos ganharam um prêmio de Ciências.", "A escola fechou o pátio.", "Alunos transformaram o pátio em horta e passaram a servir as verduras na merenda.", "A diretora deixou o cargo."], 2, "O fato central está no 1º parágrafo (lide)."),
          dis("Responda às perguntas do lide: **Quem? O quê? Quando? Onde? Por quê?**", "Quem: alunos do 7º ano. O quê: transformaram o pátio em horta e passaram a servir as verduras na merenda. Quando: no primeiro semestre / desde segunda-feira (12). Onde: Escola Municipal Ipê Amarelo. Por quê: o projeto nasceu de uma discussão sobre desperdício de alimentos nas aulas de Ciências.", 6),
          obj("Qual trecho expressa **opinião**, e não fato?", ["“alface, couve e cenoura colhidas pelos estudantes passaram a fazer parte da merenda.”", "“a melhor aula é aquela que a gente pode comer depois”.", "“Desde segunda-feira (12)”.", "“O projeto surgiu nas aulas de Ciências”."], 1, "É a avaliação pessoal da diretora, que não pode ser comprovada como um fato."),
          obj("Em “Segundo a diretora, Marta Soares, a horta reduziu o gasto”, a expressão “Segundo a diretora” indica…", ["a opinião do autor da notícia.", "uma dúvida do leitor.", "a fonte da informação.", "uma ordem."], 2, "Indica quem forneceu a informação, o que dá credibilidade à notícia."),
          dis("Por que as notícias costumam trazer falas entre aspas, como a da aluna Lívia?", "Para dar voz a quem viveu o fato, mostrar de onde vem a informação, dar credibilidade ao texto e aproximar o leitor da situação.", 3)
        ] }
      ]
    },
    {
      id: "interp-8-cronica-fila", titulo: "Crônica: a fila do pão", tipo: "interpretacao", serie: ["8"], assunto: ["Interpretação"],
      resumo: "Crônica de humor: narrador, quebra de expectativa, comparação e crítica implícita.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "Leia a crônica e responda às questões." },
        { k: "texto", t: "A fila do pão", fonte: "Texto original", p: [
          "Domingo cedo, saí para comprar pão e encontrei uma fila de vinte pessoas, todas em silêncio, todas olhando para o celular. Entrei na fila convencido de que seria rápido; afinal, pão é coisa simples.",
          "Quinze minutos depois, percebi o erro: a moça do caixa conversava com cada cliente como se fosse parente. Perguntava do filho, da obra, do joelho. Quando chegou a minha vez, eu já sabia o nome do filho do senhor da frente e tinha opinião sobre a obra da vizinha dele.",
          "Comprei seis pães, por vergonha de ir embora com pouco depois de tanta conversa. Voltei para casa com a sensação incômoda de que a fila só parecia lenta para quem tinha esquecido como era conversar."
        ] },
        { k: "q", it: [
          obj("O narrador da crônica é…", ["narrador-observador, em terceira pessoa.", "o próprio padeiro.", "um narrador onisciente.", "narrador-personagem, em primeira pessoa."], 3, "Os verbos “saí”, “encontrei”, “entrei” estão em 1ª pessoa: o narrador participa dos fatos."),
          obj("Qual é o assunto principal do texto?", ["A qualidade do pão da padaria.", "A demora da fila do pão e o hábito (perdido) de conversar.", "A rotina do caixa da padaria.", "O uso do celular na escola."], 1, "A fila serve de pretexto para a reflexão sobre convivência."),
          obj("O humor do 1º parágrafo nasce de…", ["uma expectativa (“seria rápido”) que será desmentida.", "uma descrição triste.", "um erro de português.", "uma pergunta sem resposta."], 0, "A quebra de expectativa é um recurso clássico do humor."),
          obj("Em “conversava com cada cliente como se fosse parente”, há…", ["uma metáfora.", "uma ironia.", "uma comparação.", "um eufemismo."], 2, "O conectivo “como se” introduz a comparação."),
          dis("Por que o narrador comprou seis pães?", "Por vergonha de ir embora com pouco depois de tanta conversa com a atendente: ele se sentiu constrangido.", 3),
          dis("Explique a crítica social presente na última frase do texto.", "A frase critica a pressa e o isolamento do dia a dia (cada um no seu celular), que fazem as pessoas esquecerem o valor da conversa e da convivência.", 4)
        ] }
      ]
    },
    {
      id: "interp-9-artigo-celular", titulo: "Artigo de opinião: celular na sala de aula", tipo: "interpretacao", serie: ["9"], assunto: ["Interpretação", "Redação"],
      resumo: "Tese, argumentos, concessão e conectivos em um artigo de opinião.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "Leia o artigo de opinião e responda às questões." },
        { k: "texto", t: "Proibir ou educar?", fonte: "Texto original", p: [
          "A discussão sobre o uso do celular na escola costuma ser apresentada como uma disputa entre dois lados: os que querem proibir e os que querem liberar. Defendo, porém, que o problema está mal formulado. O aparelho em si não ensina nem atrapalha; o que decide é o projeto pedagógico em torno dele.",
          "É verdade que o celular dispersa. Quem já tentou explicar um conteúdo para uma turma em que metade dos olhos está abaixada sabe disso. Mas proibir sem discutir apenas empurra o uso para o intervalo, o banheiro, a mochila. Educar é mais trabalhoso: exige combinar regras, definir momentos de uso e ensinar a checar uma informação antes de compartilhá-la.",
          "Além disso, a escola que ignora o celular perde a chance de formar leitores críticos justamente no ambiente em que eles mais circulam. Por isso, mais do que proibir ou liberar, é preciso ensinar a usar. Uma escola que apenas proíbe adia o problema; uma escola que educa enfrenta o problema."
        ] },
        { k: "q", it: [
          obj("A tese defendida pelo autor é que…", ["o celular deve ser proibido em todas as escolas.", "o celular deve ser liberado sem regras.", "o importante não é proibir ou liberar, mas ensinar a usar o celular dentro de um projeto pedagógico.", "o celular não atrapalha em nenhuma situação."], 2, "A tese aparece no 1º parágrafo (“o problema está mal formulado”) e é retomada no 3º."),
          obj("Qual trecho apresenta uma **concessão** (reconhece um ponto do outro lado)?", ["“Defendo, porém, que o problema está mal formulado.”", "“É verdade que o celular dispersa.”", "“Educar é mais trabalhoso.”", "“Por isso, mais do que proibir ou liberar, é preciso ensinar a usar.”"], 1, "O autor admite que o celular dispersa, para depois defender a sua tese."),
          obj("No 3º parágrafo, o conectivo “Por isso” introduz…", ["uma oposição.", "uma causa.", "um exemplo.", "uma conclusão."], 3, "“Por isso” retoma o que foi dito e conclui."),
          obj("A palavra “Mas”, no início de “Mas proibir sem discutir…”, indica…", ["adição.", "explicação.", "oposição.", "tempo."], 2, "Opõe-se à concessão anterior (“É verdade que o celular dispersa”)."),
          dis("Aponte dois argumentos usados pelo autor para sustentar sua tese.", "Por exemplo: (1) proibir sem discutir só empurra o uso para outros lugares; (2) a escola que ignora o celular perde a chance de formar leitores críticos no ambiente em que eles mais circulam.", 4),
          dis("Posicione-se: você concorda com o autor? Responda em cinco linhas, com ao menos um argumento.", "Resposta pessoal. Avalie se há posicionamento claro, um argumento coerente e uso adequado dos conectivos.", 6)
        ] }
      ]
    },
    {
      id: "interp-em-camoes-machado", titulo: "Camões e Machado: contradição e ironia", tipo: "interpretacao", serie: ["EM"], assunto: ["Interpretação", "Literatura"],
      resumo: "Soneto de Camões e dedicatória de Memórias Póstumas: paradoxo, ironia e escolas literárias.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "Leia os textos I e II e responda às questões." },
        { k: "texto", t: "Texto I", fonte: "Luís de Camões (c. 1524–1580)", poema: true, p: [
          "Amor é fogo que arde sem se ver;\nÉ ferida que dói e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer.\n\nÉ um não querer mais que bem querer;\nÉ solitário andar por entre a gente;\nÉ nunca contentar-se de contente;\nÉ um cuidar que ganha em se perder.\n\nÉ querer estar preso por vontade;\nÉ servir a quem vence, o vencedor;\nÉ ter com quem nos mata lealdade.\n\nMas como causar pode seu favor\nNos corações humanos amizade,\nSe tão contrário a si é o mesmo Amor?"
        ] },
        { k: "texto", t: "Texto II", fonte: "Machado de Assis, Memórias Póstumas de Brás Cubas (1881), dedicatória", p: [
          "Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas Memórias Póstumas."
        ] },
        { k: "q", it: [
          obj("No Texto I, a figura de linguagem predominante é…", ["a onomatopeia.", "o eufemismo.", "a hipérbole.", "o paradoxo (união de ideias contraditórias).", "a metonímia."], 3, "“Fogo que arde sem se ver”, “contentamento descontente”, “dor sem doer”: ideias que se contradizem."),
          dis("Explique o sentido de “um contentamento descontente”.", "A expressão une ideias opostas para dizer que o amor traz, ao mesmo tempo, alegria e sofrimento: sente-se prazer em amar, mas há insatisfação por não se ter plenitude.", 3),
          obj("A forma do Texto I é…", ["um soneto: dois quartetos e dois tercetos.", "uma trova: uma estrofe de quatro versos.", "um haicai: três versos.", "um poema em versos livres, sem estrofes.", "uma balada medieval."], 0, "São 14 versos, em dois quartetos e dois tercetos."),
          obj("No Texto II, dedicar a obra ao verme que roeu o cadáver do autor produz um efeito de…", ["solenidade religiosa.", "saudosismo ingênuo.", "ironia e humor ácido sobre a morte.", "exaltação patriótica.", "idealização amorosa."], 2, "A dedicatória inverte a expectativa (obras são dedicadas a pessoas queridas) e zomba da condição humana: marca do Realismo machadiano."),
          obj("O que aproxima os dois textos?", ["Ambos tratam do amor de forma idealizada.", "Ambos exaltam a natureza brasileira.", "Ambos foram escritos no século XX.", "Ambos têm eu lírico feminino.", "Ambos subvertem o esperado, unindo ideias contraditórias ou inesperadas."], 4, "Camões constrói contradições (paradoxos); Machado constrói inversões irônicas."),
          obj("Os autores dos Textos I e II pertencem, respectivamente, ao…", ["Barroco e ao Romantismo.", "Trovadorismo e ao Modernismo.", "Classicismo e ao Realismo.", "Arcadismo e ao Naturalismo.", "Humanismo e ao Simbolismo."], 2, "Camões é o grande nome do Classicismo português; Machado inaugura o Realismo brasileiro com Memórias Póstumas (1881).")
        ] }
      ]
    },

    /* ===================== GRAMÁTICA ===================== */
    {
      id: "gram-6-classes", titulo: "Substantivo, adjetivo e verbo", tipo: "gramatica", serie: ["6"], assunto: ["Gramática"],
      resumo: "Reconhecer e classificar as três classes básicas, com exercícios graduados.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Relembrando", li: [
          "**Substantivo** nomeia seres, lugares, sentimentos e ideias: //menina, escola, alegria//. Pode ser **próprio** (Rio de Janeiro) ou **comum** (cidade), **concreto** (mesa) ou **abstrato** (saudade).",
          "**Adjetivo** caracteriza o substantivo e concorda com ele em gênero e número: //menina esperta, casas grandes//.",
          "**Verbo** indica ação (//correr//), estado (//estar//) ou fenômeno da natureza (//chover//)."
        ] },
        { k: "q", it: [
          dis("Sublinhe os **substantivos**: “A menina esperta guardou o caderno novo na mochila azul.”", "menina, caderno, mochila.", 2),
          dis("Circule os **adjetivos** da mesma frase.", "esperta, novo, azul.", 2),
          obj("Em “Os alunos estudaram para a prova”, o verbo é…", ["alunos", "estudaram", "prova", "para"], 1, "“Estudaram” indica a ação praticada pelos alunos."),
          obj("Assinale o substantivo **próprio**.", ["Rio de Janeiro", "cidade", "rio", "praia"], 0, "Nomes próprios dão nome específico e se escrevem com inicial maiúscula."),
          dis("Passe para o plural: “O menino alegre pulou na poça pequena.”", "Os meninos alegres pularam nas poças pequenas.", 2),
          obj("Assinale o substantivo **abstrato**.", ["mesa", "cachorro", "saudade", "caderno"], 2, "Saudade é um sentimento: não se pode tocar nem ver."),
          obj("Em “Choveu muito ontem”, o verbo indica…", ["ação.", "estado.", "desejo.", "fenômeno da natureza."], 3, "Verbos como chover, ventar e nevar indicam fenômenos da natureza."),
          dis("Complete com um adjetivo e escreva a frase: “Naquela tarde ______, fomos ao parque.”", "Resposta pessoal (por exemplo: ensolarada, fria, tranquila). Verifique a concordância em gênero e número com “tarde”.", 2)
        ] }
      ]
    },
    {
      id: "gram-7-tempos-verbais", titulo: "Verbos: tempos do indicativo", tipo: "gramatica", serie: ["7"], assunto: ["Gramática"],
      resumo: "Presente, pretérito perfeito e imperfeito, futuro do presente e do pretérito.", tempo: "1 aula",
      blocos: [
        { k: "tabela", t: "Tempos do modo indicativo (verbo cantar)", cab: ["Tempo", "Exemplo", "Quando usar"], l: [
          ["Presente", "eu canto", "ação que acontece agora ou é habitual"],
          ["Pretérito perfeito", "eu cantei", "ação passada e terminada"],
          ["Pretérito imperfeito", "eu cantava", "ação passada habitual ou que durava"],
          ["Futuro do presente", "eu cantarei", "ação que ainda vai acontecer"],
          ["Futuro do pretérito", "eu cantaria", "ação possível, dependente de uma condição"]
        ] },
        { k: "q", it: [
          obj("Em “Ontem, Ana estudou até tarde”, o verbo está no…", ["presente", "pretérito perfeito", "pretérito imperfeito", "futuro do presente"], 1, "Ação passada e concluída."),
          obj("Em “Quando era criança, eu brincava na rua”, o verbo “brincava” está no…", ["pretérito perfeito", "presente", "pretérito imperfeito", "futuro do pretérito"], 2, "Indica um hábito no passado."),
          dis("Passe para o futuro do presente: “Nós viajamos para a praia.”", "Nós viajaremos para a praia.", 2),
          dis("Conjugue o verbo **falar** no pretérito perfeito do indicativo.", "eu falei, tu falaste, ele falou, nós falamos, vós falastes, eles falaram.", 3),
          obj("Qual forma está no futuro do pretérito?", ["Eu irei.", "Eu fui.", "Eu vou.", "Eu iria."], 3, "“Iria” indica uma ação possível, condicionada."),
          dis("Reescreva no presente: “Ele chegou, abriu a porta e sorriu.”", "Ele chega, abre a porta e sorri.", 2),
          obj("Complete: “Se eu ______ tempo, viajaria.”", ["tenho", "tivesse", "terei", "teria"], 1, "Depois de “se”, com valor de hipótese, usa-se o pretérito imperfeito do subjuntivo: “tivesse”.")
        ] }
      ]
    },
    {
      id: "gram-8-sujeito-predicado", titulo: "Sujeito e predicado", tipo: "gramatica", serie: ["8"], assunto: ["Gramática"],
      resumo: "Tipos de sujeito (simples, composto, desinencial, indeterminado, inexistente) e de predicado.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Resumo", li: [
          "**Sujeito** é o termo sobre o qual se declara algo e com o qual o verbo concorda.",
          "**Simples**: um só núcleo (//As crianças brincavam//). **Composto**: dois ou mais núcleos (//Ana e Beatriz saíram//). **Desinencial (oculto)**: identificado pela terminação do verbo (//Fizemos// a tarefa = nós).",
          "**Indeterminado**: não se identifica quem pratica a ação (verbo na 3ª pessoa do plural sem referente: //Roubaram a bicicleta//; ou verbo + //se//: //Precisa-se de vendedores//).",
          "**Oração sem sujeito**: verbos de fenômeno da natureza (//Choveu//), //haver// no sentido de existir (//Há flores//) e //fazer/haver// indicando tempo.",
          "**Predicado verbal** tem verbo de ação como núcleo. **Nominal**: verbo de ligação + predicativo (//O dia estava lindo//). **Verbo-nominal**: tem os dois (//A professora chegou cansada//)."
        ] },
        { k: "instr", p: "Classifique o sujeito de cada oração." },
        { k: "q", it: [
          obj("“As crianças brincavam no parque.”", SUJ, 0, "Núcleo: crianças."),
          obj("“Choveu a noite toda.”", SUJ, 4, "Verbo de fenômeno da natureza."),
          obj("“Precisa-se de vendedores.”", SUJ, 3, "Verbo transitivo indireto + se: o sujeito fica indeterminado."),
          obj("“Fizemos a tarefa ontem.”", SUJ, 2, "A terminação -mos indica o sujeito “nós”."),
          obj("“Ana e Beatriz foram ao cinema.”", SUJ, 1, "Dois núcleos: Ana e Beatriz."),
          obj("“Roubaram a bicicleta do vizinho.”", SUJ, 3, "3ª pessoa do plural sem referente."),
          obj("“Há muitos livros na biblioteca.”", SUJ, 4, "“Haver” com sentido de existir é impessoal."),
          obj("Classifique o predicado de “O dia estava lindo.”", ["verbal", "nominal", "verbo-nominal"], 1, "Verbo de ligação (estava) + predicativo (lindo)."),
          obj("Classifique o predicado de “A professora chegou cansada.”", ["verbal", "nominal", "verbo-nominal"], 2, "“Chegou” indica ação e “cansada” é predicativo do sujeito.")
        ] }
      ]
    },
    {
      id: "gram-9-periodo-composto", titulo: "Período composto: coordenação e subordinação", tipo: "gramatica", serie: ["9"], assunto: ["Gramática"],
      resumo: "Orações coordenadas (aditiva, adversativa, alternativa, conclusiva, explicativa) e subordinadas.", tempo: "1 aula",
      blocos: [
        { k: "tabela", t: "Coordenadas: conjunções mais comuns", cab: ["Tipo", "Conjunções", "Ideia"], l: [
          ["Aditiva", "e, nem, não só… mas também", "soma"],
          ["Adversativa", "mas, porém, contudo, todavia", "oposição"],
          ["Alternativa", "ou… ou, ora… ora", "escolha"],
          ["Conclusiva", "logo, portanto, por isso", "conclusão"],
          ["Explicativa", "pois, porque, que", "explicação"]
        ] },
        { k: "teoria", t: "Subordinadas", li: [
          "**Substantiva**: funciona como um substantivo (//Espero que você venha//: a oração é objeto de “espero”).",
          "**Adjetiva**: caracteriza um substantivo, iniciada por pronome relativo (//O livro que li é ótimo//).",
          "**Adverbial**: indica circunstância (tempo, causa, condição…): //Quando chegou, todos saíram//."
        ] },
        { k: "instr", p: "Classifique a oração **destacada** (a segunda, nas coordenadas)." },
        { k: "q", it: [
          obj("“Estudei muito, ++mas não passei++.”", COORD, 1, "“Mas” expressa oposição."),
          obj("“Venha logo, ++que o filme vai começar++.”", COORD, 4, "“Que” equivale a “pois”: explica o pedido."),
          obj("“Penso, ++logo existo++.”", COORD, 3, "“Logo” conclui a ideia anterior."),
          obj("“++Ou você estuda++, ou você trabalha.”", COORD, 2, "Ideia de escolha entre duas possibilidades."),
          obj("“Ela cantou ++e dançou a noite toda++.”", COORD, 0, "“E” soma ações."),
          obj("“Espero ++que você venha++.”", SUB, 0, "Equivale a “Espero sua vinda”: função de substantivo (objeto direto)."),
          obj("“O livro ++que li++ é ótimo.”", SUB, 1, "“Que” é pronome relativo e a oração caracteriza “livro”."),
          obj("“++Quando chegou++, todos saíram.”", SUB, 2, "Indica o tempo da ação principal."),
          dis("Una as orações com um conectivo **adversativo**: “Choveu muito. Fomos à praia.”", "Choveu muito, mas fomos à praia. (Aceitar também: porém, contudo, todavia.)", 2)
        ] }
      ]
    },
    {
      id: "gram-em-crase", titulo: "Crase: quando usar", tipo: "gramatica", serie: ["EM"], assunto: ["Gramática"],
      resumo: "Regra geral, casos proibidos e locuções, com exercícios no estilo ENEM e vestibulares.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Regra de ouro", li: [
          "**Crase** é a fusão da preposição //a// com o artigo //a(s)// (ou com o pronome //aquele(s), aquela(s), aquilo//): //Fui à feira// (a + a).",
          "Teste prático: troque a palavra feminina por uma masculina. Se aparecer //ao//, use crase: //Fui ao mercado → Fui à feira//.",
          "**Há crase** em locuções adverbiais, prepositivas e conjuntivas femininas: //à noite, à vista, às vezes, à medida que//.",
          "**Não há crase** antes de palavras masculinas, verbos, pronomes pessoais e de tratamento (exceto //senhora, senhorita, dona//), artigos indefinidos e expressões repetidas (//cara a cara//)."
        ] },
        { k: "q", it: [
          obj("“Fui ___ feira ontem.”", ["a", "à", "às"], 1, "Ir a + a feira = à feira."),
          obj("“Refiro-me ___ pessoas que estudam.”", ["a", "à", "às"], 2, "Referir-se a + as pessoas = às pessoas."),
          obj("“Ela começou ___ estudar cedo.”", ["a", "à", "às"], 0, "Antes de verbo não há crase."),
          obj("“Chegamos ___ casa de meus avós às dez horas.”", ["a", "à", "às"], 1, "“Casa” está determinada (“de meus avós”), portanto aceita artigo: a + a = à."),
          obj("“Assisti ___ filme ontem.”", ["a", "à", "ao"], 2, "Palavra masculina: usa-se “ao” (preposição + artigo), e nunca crase."),
          obj("“Trabalho ___ noite, por isso durmo de dia.”", ["a", "à", "às"], 1, "Locução adverbial feminina: à noite."),
          obj("“O gerente pediu desculpas ___ todas as pessoas.”", ["a", "à", "às"], 0, "“Todas” é pronome indefinido e não admite artigo antes dele."),
          dis("Explique por que há crase em “Obedeço à lei”.", "O verbo obedecer exige a preposição **a**, e a palavra “lei” aceita o artigo **a** (a lei). A fusão a + a resulta em crase.", 3)
        ] }
      ]
    },
    {
      id: "gram-em-concordancia-verbal", titulo: "Concordância verbal: casos que mais caem", tipo: "gramatica", serie: ["EM"], assunto: ["Gramática"],
      resumo: "Verbos impessoais (haver, fazer), voz passiva sintética e sujeito composto.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Casos frequentes", li: [
          "**Haver** no sentido de existir e **fazer** indicando tempo são impessoais: ficam no singular (//Houve problemas//; //Faz dois anos//).",
          "**Voz passiva sintética** (verbo + se): o verbo concorda com o sujeito (//Vendem-se casas//).",
          "**Verbo transitivo indireto + se** (índice de indeterminação): singular (//Precisa-se de funcionários//).",
          "**Sujeito composto** com 1ª pessoa: verbo na 1ª pessoa do plural (//Eu e você iremos//).",
          "Com **verbo auxiliar** + haver impessoal, o auxiliar também fica no singular (//Deve haver soluções//)."
        ] },
        { k: "q", it: [
          obj("“___ dois anos que me formei.”", ["Faz", "Fazem"], 0, "Fazer indicando tempo decorrido é impessoal."),
          obj("“___ muitos problemas na reunião.”", ["Houveram", "Houve"], 1, "Haver com sentido de existir é impessoal."),
          obj("“___ casas no bairro.”", ["Alugam-se", "Aluga-se"], 0, "Voz passiva sintética: o sujeito é “casas”."),
          obj("“___ de funcionários.”", ["Precisam-se", "Precisa-se"], 1, "Verbo transitivo indireto: não há sujeito com que concordar."),
          obj("“Eu e você ___ à festa.”", ["irá", "irão", "iremos"], 2, "Havendo 1ª pessoa no sujeito composto, o verbo vai para a 1ª pessoa do plural."),
          obj("“Deve ___ soluções para o problema.”", ["haver", "haverem"], 0, "O auxiliar “dever” e o verbo “haver” (impessoal) ficam no singular."),
          dis("Corrija: “Fazem dois anos que não viajo.”", "Faz dois anos que não viajo.", 2),
          dis("Corrija: “Vende-se casas.”", "Vendem-se casas.", 2)
        ] }
      ]
    },
    {
      id: "gram-9-virgula", titulo: "A vírgula: usos e erros comuns", tipo: "gramatica", serie: ["9"], assunto: ["Gramática", "Redação"],
      resumo: "Enumeração, vocativo, aposto, adversativas, e vírgulas que nunca devem aparecer.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Quando usar e quando evitar", li: [
          "**Use** a vírgula para separar elementos de uma enumeração, isolar o vocativo (//Pedro, venha aqui//), o aposto (//Joana, minha prima, mora aqui//) e antes de conjunções adversativas (//Estudei, mas não consegui//).",
          "**Não use** entre sujeito e verbo, entre verbo e complemento, nem entre o nome e seu complemento.",
          "Oração adjetiva **explicativa** vem entre vírgulas; a **restritiva** não."
        ] },
        { k: "q", it: [
          obj("Qual frase tem uma vírgula **incorreta**?", ["“Mariana, minha colega de turma, chegou cedo.”", "“Os candidatos aprovados, receberam o diploma.”", "“Choveu muito, mas fomos ao jogo.”", "“Amanhã, vamos ao cinema.”"], 1, "Há vírgula entre o sujeito (“Os candidatos aprovados”) e o verbo (“receberam”)."),
          dis("Explique a diferença de sentido: (I) “Os alunos que estudaram foram aprovados.” (II) “Os alunos, que estudaram, foram aprovados.”", "Em (I), a oração é restritiva: só os alunos que estudaram foram aprovados. Em (II), é explicativa: todos os alunos estudaram e todos foram aprovados.", 4),
          dis("Pontue: “Pedro venha aqui agora.”", "Pedro, venha aqui agora. (vocativo)", 2),
          dis("Pontue: “Comprei maçã pera uva e banana.”", "Comprei maçã, pera, uva e banana.", 2),
          dis("Pontue: “Estudei muito mas não consegui.”", "Estudei muito, mas não consegui.", 2),
          dis("Pontue: “Machado de Assis autor de Dom Casmurro nasceu no Rio de Janeiro.”", "Machado de Assis, autor de Dom Casmurro, nasceu no Rio de Janeiro. (aposto)", 2),
          obj("A vírgula é **obrigatória** em qual caso?", ["Entre o sujeito e o verbo.", "Entre o verbo e o objeto.", "Antes de “mas”, ligando duas orações.", "Entre o substantivo e o adjetivo."], 2, "As conjunções adversativas são antecedidas por vírgula.")
        ] }
      ]
    },
    {
      id: "gram-7-ortografia", titulo: "Mas/mais, há/a e os quatro “porquês”", tipo: "gramatica", serie: ["7"], assunto: ["Gramática"],
      resumo: "Pares que mais causam erro de escrita, com tabela de consulta e exercícios.", tempo: "1 aula",
      blocos: [
        { k: "tabela", t: "Tabela de consulta", cab: ["Forma", "Uso", "Exemplo"], l: [
          ["mas", "oposição", "Queria sair, mas chovia."],
          ["mais", "quantidade (oposto de menos)", "Preciso de mais tempo."],
          ["há", "verbo haver: tempo decorrido ou existência", "Moro aqui há dois anos."],
          ["a", "tempo futuro ou distância", "Daqui a pouco ele chega."],
          ["por que", "pergunta (início ou meio da frase) ou “pelo qual”", "Por que você faltou? Não sei por que ele saiu."],
          ["por quê", "pergunta no fim da frase", "Você faltou por quê?"],
          ["porque", "resposta, explicação", "Faltei porque estava doente."],
          ["porquê", "substantivo (“o motivo”)", "Não entendi o porquê da briga."]
        ] },
        { k: "instr", p: "Complete as frases com a forma correta." },
        { k: "q", it: [
          obj("“Queria sair, ___ estava chovendo.”", ["mas", "mais"], 0, "Ideia de oposição."),
          obj("“Preciso de ___ tempo para terminar.”", ["mas", "mais"], 1, "Ideia de quantidade."),
          obj("“Ele chegou ___ dez minutos.”", ["há", "a"], 0, "Tempo já decorrido: verbo haver."),
          obj("“Daqui ___ pouco ele chega.”", ["há", "a"], 1, "Tempo futuro."),
          obj("“___ você não veio ontem?”", ["Porque", "Por que", "Porquê"], 1, "Pergunta no início da frase."),
          obj("“Não sei ___ ele saiu tão cedo.”", ["porque", "por que", "porquê"], 1, "Pergunta indireta: “por que” separado."),
          obj("“Ele saiu cedo ___ estava cansado.”", ["porque", "por que", "por quê"], 0, "Explicação."),
          obj("“Não entendi o ___ da discussão.”", ["porque", "por que", "porquê"], 2, "Substantivo (o motivo), vem precedido de artigo.")
        ] }
      ]
    },

    /* ===================== PROVAS ===================== */
    {
      id: "prova-6-bimestral", titulo: "Prova bimestral · 6º ano", tipo: "prova", serie: ["6"], assunto: ["Interpretação", "Gramática"],
      resumo: "Texto narrativo, 10 questões (8 objetivas, 2 discursivas) e gabarito. Valor: 10 pontos.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "**Valor: 10,0 pontos** (1,0 por questão). Leia o texto e responda às questões com letra legível." },
        { k: "texto", t: "A biblioteca do bairro", fonte: "Texto original", p: [
          "A biblioteca do bairro ficava no fim da rua das Acácias, entre uma padaria e uma oficina. Por fora, parecia uma casa comum, com janelas azuis e um jardim pequeno. Por dentro, guardava mais de mil livros.",
          "A bibliotecária, dona Lúcia, conhecia todos os leitores pelo nome e sabia de cor o gosto de cada um. Quando Tiago, de dez anos, entrava, ela já separava um livro de aventura. Quando entrava seu Osvaldo, aposentado, ela deixava na mesa um livro de histórias do mar.",
          "Um dia, a prefeitura avisou que a casa seria vendida. Os moradores se reuniram, fizeram cartazes e recolheram assinaturas. Dois meses depois, veio a boa notícia: a biblioteca ficaria."
        ] },
        { k: "q", it: [
          obj("Onde ficava a biblioteca?", ["Entre uma escola e uma praça.", "Entre uma padaria e uma oficina.", "Ao lado da prefeitura.", "No centro da cidade."], 1, "1º parágrafo."),
          obj("Quem é dona Lúcia?", ["Uma leitora aposentada.", "A mãe de Tiago.", "A bibliotecária.", "A moradora que vendeu a casa."], 2, "2º parágrafo."),
          obj("No trecho “Por fora, parecia uma casa comum”, a expressão “Por fora” se opõe a…", ["Por cima.", "Por trás.", "Por perto.", "Por dentro."], 3, "O texto contrapõe a aparência (por fora) ao conteúdo (por dentro)."),
          dis("Por que a bibliotecária separava livros diferentes para Tiago e para seu Osvaldo?", "Porque ela conhecia o gosto de cada leitor.", 3),
          obj("Assinale a alternativa em que **todas** as palavras são substantivos próprios.", ["Tiago, Lúcia, Osvaldo", "biblioteca, Tiago, padaria", "Lúcia, livros, rua", "Osvaldo, jardim, janelas"], 0, "Os nomes de pessoas são próprios e iniciam com maiúscula."),
          obj("Em “janelas azuis”, a palavra “azuis” é…", ["um verbo.", "um substantivo.", "um adjetivo.", "um artigo."], 2, "Caracteriza o substantivo “janelas”."),
          obj("A forma verbal “fizeram” está no…", ["presente do indicativo.", "pretérito perfeito do indicativo.", "futuro do presente.", "pretérito imperfeito do indicativo."], 1, "Ação passada e concluída."),
          obj("O plural de “jardim” é…", ["jardins.", "jardims.", "jardines.", "jardiões."], 0, "Palavras terminadas em -m trocam o -m por -ns."),
          obj("Complete: “A casa seria vendida, ___ os moradores reagiram.”", ["mais", "há", "mas", "a"], 2, "Ideia de oposição."),
          dis("Em cinco linhas, escreva por que as bibliotecas são importantes para uma comunidade.", "Resposta pessoal. Considere: texto coerente, com ao menos uma razão (acesso à leitura, espaço de convivência, estudo), ortografia e pontuação adequadas à série.", 6)
        ] }
      ]
    },
    {
      id: "prova-7-bimestral", titulo: "Prova bimestral · 7º ano", tipo: "prova", serie: ["7"], assunto: ["Interpretação", "Gramática"],
      resumo: "Crônica, 10 questões (8 objetivas, 2 discursivas) com verbos, ortografia e produção. Valor: 10 pontos.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "**Valor: 10,0 pontos** (1,0 por questão). Leia a crônica e responda às questões." },
        { k: "texto", t: "O dia em que a internet caiu", fonte: "Texto original", p: [
          "Na sexta-feira, a internet do bairro caiu às oito da manhã e só voltou à noite. No começo, houve desespero: ninguém sabia o horário do ônibus, o resultado do jogo ou o nome daquele ator que está em todos os filmes.",
          "Aos poucos, porém, a rua mudou. Seu Júlio abriu o portão e puxou conversa com a vizinha, que não via fazia meses. As crianças desceram para a calçada com uma bola velha. Na padaria, as pessoas discutiram o jogo olhando umas para as outras, sem telas no meio.",
          "À noite, quando o sinal voltou, os celulares se acenderam em todas as janelas. Mas o assunto, em muitas casas, continuou sendo o dia estranho em que a rua tinha sido, de novo, uma rua."
        ] },
        { k: "q", it: [
          obj("Qual é o fato que desencadeia a história?", ["A chegada de um novo vizinho.", "A queda da internet no bairro.", "Uma partida de futebol.", "O fechamento da padaria."], 1, "1º parágrafo."),
          obj("Qual foi a reação inicial das pessoas?", ["Alegria.", "Indiferença.", "Desespero.", "Raiva dos vizinhos."], 2, "“No começo, houve desespero”."),
          obj("No 2º parágrafo, o conectivo “porém” indica…", ["adição.", "conclusão.", "explicação.", "oposição à reação anterior."], 3, "Mostra que a situação mudou em relação ao desespero inicial."),
          obj("Com a internet fora do ar, o que as pessoas passaram a fazer?", ["Conviver e conversar mais.", "Mudar de bairro.", "Reclamar à prefeitura.", "Estudar para a prova."], 0, "Conversas no portão, crianças na calçada e debate na padaria."),
          dis("Explique o sentido da expressão final “a rua tinha sido, de novo, uma rua”.", "A rua voltou a ser um lugar de convivência, de encontro entre as pessoas, como era antes de todos ficarem presos às telas.", 4),
          obj("O gênero textual predominante é…", ["notícia.", "crônica.", "receita.", "bula de remédio."], 1, "Parte de um fato do cotidiano, com linguagem simples e toque de reflexão."),
          obj("Passando “a internet caiu” para o futuro do presente, temos…", ["a internet cairia.", "a internet caía.", "a internet cairá.", "a internet cai."], 2, "Futuro do presente: cairá."),
          obj("Complete: “Moro neste bairro ___ dois anos.”", ["há", "a"], 0, "Tempo decorrido: verbo haver."),
          obj("Qual dos verbos abaixo está no pretérito imperfeito?", ["caiu", "voltou", "continuou", "via"], 3, "“Via” (não via fazia meses) indica ação passada que durava; os demais estão no perfeito."),
          dis("Escreva um parágrafo (cinco a oito linhas) contando como seria o seu dia sem celular.", "Resposta pessoal. Verifique: verbos no futuro do pretérito ou pretérito, coerência, pontuação e ortografia.", 8)
        ] }
      ]
    },
    {
      id: "prova-8-bimestral", titulo: "Prova bimestral · 8º ano", tipo: "prova", serie: ["8"], assunto: ["Interpretação", "Gramática"],
      resumo: "Texto de opinião, sujeito e predicado, pontuação e carta ao diretor. Valor: 10 pontos.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "**Valor: 10,0 pontos** (1,0 por questão). Leia o texto e responda às questões." },
        { k: "texto", t: "Quinze minutos", fonte: "Texto original", p: [
          "O recreio dura quinze minutos. Quinze! É tempo de pegar a merenda, correr até a quadra e ouvir o sinal tocar. Para muita gente, o recreio é a única parte do dia em que se pode conversar sem pedir licença.",
          "Os professores dizem que o tempo de aula não pode diminuir, e têm razão. Mas ninguém aprende bem quando está cansado, e o corpo de um adolescente não foi feito para ficar sentado por cinco horas seguidas.",
          "Por isso, proponho que o recreio passe de quinze para vinte e cinco minutos, com a aula terminando dez minutos mais tarde. A escola perderia pouco; os alunos ganhariam fôlego."
        ] },
        { k: "q", it: [
          obj("A tese do texto é que…", ["o recreio deve ser extinto.", "as aulas deveriam ter menos conteúdo.", "o recreio deveria ser mais longo.", "os professores não têm razão."], 2, "A proposta aparece no 3º parágrafo."),
          obj("Em “e têm razão”, o autor…", ["concorda, em parte, com os professores.", "ironiza os professores.", "discorda totalmente.", "desconhece a opinião deles."], 0, "É uma concessão, seguida de “Mas”."),
          obj("O conectivo “Por isso” introduz…", ["uma contradição.", "uma dúvida.", "um exemplo.", "uma conclusão."], 3, "Retoma o argumento anterior e propõe uma solução."),
          obj("Em “Os professores dizem que…”, o sujeito é…", SUJ, 0, "Núcleo: professores."),
          obj("Em “ninguém aprende bem quando está cansado”, o sujeito é…", SUJ, 0, "Núcleo: “ninguém” (pronome indefinido)."),
          obj("Em “Choveu muito na hora do recreio”, a oração é…", SUJ, 4, "Verbo de fenômeno da natureza."),
          obj("O predicado de “o recreio é a única parte do dia em que se pode conversar” é…", ["verbal", "nominal", "verbo-nominal"], 1, "Verbo de ligação (é) + predicativo (a única parte do dia…)."),
          obj("O ponto de exclamação em “Quinze!” serve para…", ["indicar surpresa e ênfase.", "fazer uma pergunta.", "encerrar o texto.", "indicar dúvida."], 0, "Marca o espanto do autor com o tempo tão curto."),
          dis("Escreva dois argumentos usados pelo autor para defender a sua proposta.", "Por exemplo: ninguém aprende bem cansado; o corpo do adolescente não foi feito para ficar sentado por tanto tempo; a escola perderia pouco, e os alunos ganhariam fôlego.", 4),
          dis("Escreva uma carta (oito linhas) ao diretor defendendo ou criticando a proposta de ampliar o recreio.", "Resposta pessoal. Critérios: formato de carta (local, data, saudação, despedida), posicionamento claro, um argumento e linguagem adequada a um destinatário formal.", 9)
        ] }
      ]
    },
    {
      id: "prova-9-bimestral", titulo: "Prova bimestral · 9º ano", tipo: "prova", serie: ["9"], assunto: ["Interpretação", "Gramática"],
      resumo: "Texto opinativo, figuras de linguagem, orações subordinadas e produção. Valor: 10 pontos.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "**Valor: 10,0 pontos** (1,0 por questão). Leia o texto e responda às questões." },
        { k: "texto", t: "A pressa que nos roubou o silêncio", fonte: "Texto original", p: [
          "Nunca se falou tanto e se ouviu tão pouco. Em cada mensagem de áudio acelerada, em cada vídeo de quinze segundos, há um pedido silencioso: seja rápido, porque o próximo assunto já está na fila.",
          "Não se trata de negar a tecnologia, que aproximou famílias e abriu portas profissionais. Trata-se de perceber que a atenção é um recurso limitado e que, quando a entregamos a tudo, não sobra nada para o que importa.",
          "O silêncio, hoje, virou artigo de luxo. Quem consegue passar uma hora lendo um livro, sem notificações, descobre que a mente também precisa de espaço, como um jardim precisa de terra livre para brotar."
        ] },
        { k: "q", it: [
          obj("A ideia central do texto é que…", ["a tecnologia deve ser abandonada.", "as mensagens de áudio são inúteis.", "o excesso de estímulos digitais consome a atenção e o silêncio de que precisamos.", "a leitura de livros é ultrapassada."], 2, "O texto não condena a tecnologia: critica o excesso."),
          obj("“Nunca se falou tanto e se ouviu tão pouco” apresenta…", ["antítese (contraste entre falar e ouvir).", "eufemismo.", "prosopopeia.", "metonímia."], 0, "Opõe “falar tanto” a “ouvir pouco”."),
          obj("“O silêncio virou artigo de luxo” é um exemplo de…", ["comparação.", "ironia.", "hipérbole.", "metáfora."], 3, "Relação de semelhança sem conectivo comparativo."),
          obj("“como um jardim precisa de terra livre para brotar” é…", ["uma comparação.", "uma metáfora.", "uma personificação.", "um eufemismo."], 0, "Há o conectivo comparativo “como”."),
          obj("Em “a tecnologia, que aproximou famílias”, a oração destacada é…", ["subordinada substantiva.", "subordinada adjetiva restritiva.", "subordinada adjetiva explicativa.", "subordinada adverbial causal."], 2, "Está entre vírgulas e acrescenta uma informação sobre a tecnologia em geral."),
          obj("Em “descobre que a mente também precisa de espaço”, a oração iniciada por “que” é…", ["subordinada substantiva subjetiva.", "subordinada substantiva objetiva direta.", "subordinada substantiva predicativa.", "subordinada adverbial."], 1, "Funciona como objeto direto de “descobre” (descobre o quê?)."),
          dis("Aponte no texto uma concessão feita pelo autor e explique a que ela serve.", "“Não se trata de negar a tecnologia, que aproximou famílias e abriu portas profissionais.” Ela reconhece as vantagens da tecnologia antes de criticar o excesso, o que torna o argumento mais equilibrado e persuasivo.", 4),
          dis("Una as orações com conectivo de oposição: “A tecnologia aproximou famílias. Ela dispersa a nossa atenção.”", "A tecnologia aproximou famílias, mas dispersa a nossa atenção. (Aceitar também: porém, contudo, todavia.)", 3),
          dis("Escreva um parágrafo argumentativo (oito a dez linhas) sobre como equilibrar o uso da tecnologia e a necessidade de silêncio.", "Resposta pessoal. Critérios: tópico frasal, argumento, exemplo ou repertório, fechamento e uso adequado de conectivos.", 10),
          obj("Em “seja rápido, porque o próximo assunto já está na fila”, o conectivo “porque” introduz uma ideia de…", ["oposição.", "conclusão.", "finalidade.", "explicação (causa)."], 3, "A oração seguinte explica o motivo do pedido de rapidez.")
        ] }
      ]
    },
    {
      id: "prova-em1-literatura", titulo: "Prova de Literatura · 1º ano (Trovadorismo ao Barroco)", tipo: "prova", serie: ["EM"], assunto: ["Literatura"],
      resumo: "Trovadorismo, Humanismo, Classicismo e Barroco: 9 objetivas e 1 discursiva. Valor: 10 pontos.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "**Valor: 10,0 pontos** (1,0 por questão). Assinale uma única alternativa nas questões objetivas." },
        { k: "q", it: [
          obj("Nas cantigas de **amor** do Trovadorismo, o eu lírico…", ["é feminino e fala do amado ausente.", "é satírico e critica os costumes.", "é masculino e se dirige a uma dama inatingível, em tom de vassalagem.", "é filosófico e discute a morte."], 2, "A relação imita a vassalagem feudal: o trovador “serve” à senhora."),
          obj("Nas cantigas de **amigo**, quem fala é…", ["um cavaleiro a serviço do rei.", "um frade que prega sermões.", "um narrador de batalhas.", "uma mulher que lamenta a ausência do amado."], 3, "Eu lírico feminino, embora escritas por homens."),
          obj("A “Cantiga da Ribeirinha”, de Paio Soares de Taveirós, é considerada…", ["o primeiro documento do Humanismo.", "o marco inicial do Trovadorismo em Portugal.", "uma obra do Barroco brasileiro.", "o primeiro soneto de Camões."], 1, "Costuma-se datá-la de 1198 (há quem indique 1189)."),
          obj("O “Auto da Barca do Inferno”, de Gil Vicente, caracteriza-se por…", ["exaltar os feitos heroicos do povo português.", "narrar a viagem de Vasco da Gama.", "satirizar tipos sociais, como o fidalgo, o onzeneiro e o frade.", "idealizar a mulher amada."], 2, "Gil Vicente é o grande nome do teatro do Humanismo e satiriza a sociedade."),
          obj("O marco inicial do Classicismo em Portugal (1527) é…", ["a publicação de Os Lusíadas.", "o retorno de Sá de Miranda da Itália, trazendo a “medida nova”.", "a morte de Camões.", "a Restauração portuguesa."], 1, "Sá de Miranda introduziu o soneto e o verso decassílabo."),
          obj("Os Lusíadas, de Camões, é um poema épico dividido em…", ["cinco cantos.", "doze cantos.", "vinte cantos.", "dez cantos."], 3, "São dez cantos, em oitava-rima, em versos decassílabos."),
          obj("O dualismo barroco expressa principalmente…", ["a certeza absoluta da fé e da razão.", "a valorização da simplicidade.", "o conflito entre o espiritual e o material, a fé e o prazer.", "a indiferença diante da morte."], 2, "A tensão entre Deus e o mundo, culpa e prazer, atravessa o Barroco."),
          obj("No “Sermão de Santo Antônio aos Peixes”, Padre Antônio Vieira…", ["exalta a escravidão como destino divino.", "critica a exploração dos indígenas pelos colonos, por meio da alegoria dos peixes.", "celebra a conquista do Maranhão.", "escreve poesia amorosa."], 1, "O sermão (1654) usa os peixes como alegoria dos homens."),
          obj("Gregório de Matos, o “Boca do Inferno”, destacou-se…", ["pela poesia indianista.", "pela prosa regionalista.", "pela poesia concreta.", "pela sátira dos costumes da Bahia colonial."], 3, "Sua poesia satírica criticava autoridades e a sociedade baiana do século XVII."),
          dis("Explique a diferença de visão de mundo entre o Trovadorismo (teocentrismo) e o Classicismo (antropocentrismo).", "No Trovadorismo, Deus é o centro do mundo (teocentrismo), e a arte e a vida se organizam em torno da fé e da ordem feudal. No Classicismo, o ser humano passa a ocupar o centro (antropocentrismo): valorizam-se a razão, a harmonia e os modelos da Antiguidade greco-latina.", 5)
        ] }
      ]
    },
    {
      id: "prova-em2-romantismo-realismo", titulo: "Prova de Literatura · 2º ano (Romantismo e Realismo)", tipo: "prova", serie: ["EM"], assunto: ["Literatura"],
      resumo: "Gerações românticas, prosa romântica, Realismo e Naturalismo: 9 objetivas e 1 discursiva. Valor: 10 pontos.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "**Valor: 10,0 pontos** (1,0 por questão). Assinale uma única alternativa nas questões objetivas." },
        { k: "q", it: [
          obj("O marco inicial do Romantismo no Brasil (1836) é…", ["Memórias Póstumas de Brás Cubas.", "Suspiros Poéticos e Saudades, de Gonçalves de Magalhães.", "O Guarani, de José de Alencar.", "O Cortiço, de Aluísio Azevedo."], 1, "A obra de Gonçalves de Magalhães abre o movimento."),
          obj("A primeira geração romântica é marcada por…", ["pessimismo, tédio e morte.", "nacionalismo, indianismo e exaltação da natureza.", "abolicionismo e poesia social.", "cientificismo e determinismo."], 1, "Gonçalves Dias é seu grande nome (“Canção do Exílio”, “I-Juca-Pirama”)."),
          obj("Álvares de Azevedo é um dos principais poetas da…", ["primeira geração romântica.", "geração condoreira.", "segunda geração romântica (ultrarromântica).", "geração realista."], 2, "Temas: morte, tédio, amor impossível (“mal do século”)."),
          obj("Castro Alves, autor de “O Navio Negreiro”, representa…", ["a poesia social e abolicionista da terceira geração romântica.", "o nacionalismo indianista da primeira geração.", "o Naturalismo.", "o Parnasianismo."], 0, "Sua poesia é de denúncia e de defesa da liberdade."),
          obj("José de Alencar é autor de…", ["Memórias Póstumas de Brás Cubas.", "O Cortiço.", "Iracema e O Guarani.", "Vidas Secas."], 2, "Alencar escreveu romances indianistas, urbanos e regionalistas."),
          obj("Qual obra marca o início do Realismo no Brasil (1881)?", ["Memórias Póstumas de Brás Cubas.", "A Moreninha.", "Iracema.", "O Guarani."], 0, "Machado de Assis rompe com o idealismo romântico."),
          obj("Uma diferença central entre Romantismo e Realismo é que…", ["o Romantismo critica a sociedade, e o Realismo a idealiza.", "o Romantismo idealiza a realidade, e o Realismo a observa e a critica.", "ambos usam linguagem direta e científica.", "ambos valorizam o escapismo."], 1, "Idealização × objetividade e crítica social."),
          obj("O Naturalismo, de que “O Cortiço” é exemplo, caracteriza-se por…", ["idealização do herói.", "determinismo: o meio, a raça e o momento explicam o comportamento humano.", "culto à natureza e à fantasia.", "linguagem simbólica e mística."], 1, "Influência da ciência do século XIX na ficção."),
          obj("O narrador de Memórias Póstumas de Brás Cubas é…", ["um personagem vivo que escreve um diário.", "um narrador onisciente em terceira pessoa.", "um defunto-autor que conta a própria vida com ironia.", "um poeta romântico."], 2, "O “defunto-autor” é uma das grandes invenções de Machado."),
          dis("Explique por que Dom Casmurro é considerado um romance de ambiguidade.", "O narrador, Bentinho, conta a história em 1ª pessoa e acusa Capitu de traição, mas o leitor só conhece a versão dele, que é parcial e movida pelo ciúme. Como não há provas definitivas, a dúvida sobre a traição permanece.", 5)
        ] }
      ]
    },

    /* ===================== SIMULADOS ENEM ===================== */
    {
      id: "sim-em-linguagens-1", titulo: "Simulado ENEM · Linguagens (8 questões)", tipo: "simulado", serie: ["EM"], assunto: ["Interpretação", "Literatura", "Gramática"],
      resumo: "Funções da linguagem, variação, Romantismo, ironia, paródia, coesão e linguagem digital.", tempo: "40 min",
      blocos: [
        { k: "instr", p: "Cada questão tem uma única alternativa correta. Tempo sugerido: 5 minutos por questão." },
        { k: "q", it: [
          obj("Observe o texto publicitário. A função da linguagem predominante é…", ["emotiva, pois expressa sentimentos do emissor.", "metalinguística, pois fala sobre o próprio código.", "conativa (apelativa), pois busca convencer o leitor a agir.", "poética, pois valoriza a forma da mensagem.", "referencial, pois apenas informa dados."], 2, "Os verbos no imperativo (“Doe”, “Procure”) revelam o apelo ao leitor.", { ctx: "DOE SANGUE. DOE VIDA.\nSeu gesto de hoje pode salvar vidas amanhã. Procure o hemocentro mais próximo.", fonte: "Texto original (campanha fictícia)" }),
          obj("Sobre a linguagem usada no diálogo, é correto afirmar que…", ["é adequada à situação informal entre amigos, e sua avaliação depende do contexto.", "é inadequada em qualquer situação.", "representa erro que deve ser corrigido sempre.", "revela desconhecimento da língua portuguesa.", "só pode ser usada na escrita."], 0, "A variação linguística não é erro: avalia-se a adequação ao contexto de uso.", { ctx: "— Ô, mano, tá ligado que a prova foi suave?\n— Tô sabendo, véio. Mas na minha cabeça foi um bagulho enorme.", fonte: "Texto original" }),
          obj("No verso “Da aurora da minha vida”, o eu lírico emprega uma metáfora para se referir…", ["a uma manhã de verão.", "à velhice.", "à vida escolar.", "à infância.", "à morte."], 3, "A “aurora” (início do dia) representa o começo da vida. Predomina o saudosismo, típico do Romantismo.", { ctx: "Oh! que saudades que eu tenho\nDa aurora da minha vida,\nDa minha infância querida\nQue os anos não trazem mais!", fonte: "Casimiro de Abreu, “Meus oito anos”" }),
          obj("O poema expressa traços do Romantismo, como…", ["a rejeição da pátria.", "o desprezo pela natureza.", "o cientificismo.", "a linguagem objetiva e distanciada.", "a exaltação da natureza e a saudade da terra natal."], 4, "Nacionalismo, natureza e saudade (“Canção do Exílio”, 1843).", { ctx: "Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.", fonte: "Gonçalves Dias, “Canção do Exílio”" }),
          obj("No fragmento, o narrador…", ["lamenta não ter deixado herdeiros.", "expressa visão pessimista e irônica sobre a condição humana.", "comemora a riqueza que acumulou.", "pede perdão aos familiares.", "elogia a vida em sociedade."], 1, "Não transmitir “o legado da nossa miséria” é um balanço amargo da existência: pessimismo e ironia realistas.", { ctx: "Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.", fonte: "Machado de Assis, Memórias Póstumas de Brás Cubas (fim do romance)" }),
          obj("O Texto II dialoga com o Texto I por meio de…", ["paráfrase, que repete a ideia sem mudar o sentido.", "epígrafe, que antecipa o tema.", "paródia, que retoma a forma do poema romântico e a transforma para tratar do cotidiano urbano.", "citação, que reproduz o poema integralmente.", "resumo, que condensa o poema."], 2, "A paródia aproveita o texto original, mas muda seu sentido, em geral com crítica ou humor.", { ctx: "Texto I\nMinha terra tem palmeiras,\nOnde canta o Sabiá.\n\nTexto II\nMinha terra tem palmeiras,\nonde canta o sabiá,\nmas no ponto de ônibus\nsó canta o celular de quem espera.", fonte: "Texto I: Gonçalves Dias. Texto II: original" }),
          obj("O conectivo “Contudo” estabelece, entre as orações, relação de…", ["oposição.", "causa.", "conclusão.", "finalidade.", "tempo."], 0, "“Contudo” é conjunção adversativa.", { ctx: "A leitura diária melhora o vocabulário. Contudo, muitos estudantes não a incluem na rotina.", fonte: "Texto original" }),
          obj("No texto, os emojis têm a função de…", ["ornamentar a mensagem sem alterar o sentido.", "substituir totalmente a escrita.", "tornar a mensagem mais formal.", "compensar a ausência de entonação e de expressão facial.", "dificultar a leitura."], 3, "O texto afirma que, sem voz e rosto, eles ajudam a indicar a intenção da frase.", { ctx: "Nas mensagens de texto, não há voz nem rosto. Por isso, os usuários recorrem a emojis, que ajudam a indicar se uma frase é uma brincadeira, um elogio ou uma crítica.", fonte: "Texto original" })
        ] },
        { k: "tabela", t: "Folha de respostas", cab: ["Questão", "1", "2", "3", "4", "5", "6", "7", "8"], l: [
          ["Marque", "", "", "", "", "", "", "", ""]
        ] }
      ]
    },
    {
      id: "sim-em-redacao-1", titulo: "Simulado de redação ENEM · valorização da leitura", tipo: "simulado", serie: ["EM"], assunto: ["Redação"],
      resumo: "Proposta no formato ENEM com textos motivadores, instruções, grade de correção e orientações ao professor.", tempo: "2 aulas",
      blocos: [
        { k: "instr", p: "A partir da leitura dos textos motivadores e com base nos seus conhecimentos, redija um **texto dissertativo-argumentativo** em modalidade escrita formal da língua portuguesa sobre o tema **“Desafios para a valorização da leitura no Brasil contemporâneo”**, apresentando proposta de intervenção que respeite os direitos humanos. Selecione, organize e relacione argumentos e fatos para defender seu ponto de vista." },
        { k: "texto", t: "Texto motivador I", fonte: "Texto original", p: [
          "Lemos mais do que nunca: mensagens, legendas, manchetes, avisos. Mas ler muito não significa ler bem. A leitura de um livro exige tempo, atenção e silêncio, três recursos que as telas disputam o dia inteiro."
        ] },
        { k: "texto", t: "Texto motivador II", fonte: "Texto original", p: [
          "Bibliotecas públicas, onde existem, nem sempre contam com acervo atualizado, horário amplo de funcionamento e profissionais em número suficiente. Para muitas famílias, o livro ainda é um bem caro, e a escola é o principal ou o único lugar de contato com ele."
        ] },
        { k: "texto", t: "Texto motivador III", fonte: "Monteiro Lobato (1882–1948), frase atribuída", p: [
          "“Um país se faz com homens e livros.”"
        ] },
        { k: "instr", p: "**Instruções:** (1) escreva de 8 a 30 linhas; (2) o texto deve ter introdução, desenvolvimento e conclusão; (3) não copie trechos dos textos motivadores; (4) a proposta de intervenção deve conter **agente, ação, modo/meio de execução, finalidade e detalhamento**; (5) textos que fujam do tema, com 7 linhas ou menos, ou com desrespeito aos direitos humanos na proposta, serão penalizados." },
        { k: "linhas", t: "Rascunho / Texto definitivo", n: 30 },
        { k: "tabela", t: "Grade de correção (preencha a cada competência de 0 a 200)", cab: ["Competência", "O que observar", "Nota"], l: [
          ["C1", "Domínio da modalidade escrita formal (ortografia, concordância, regência, pontuação)", ""],
          ["C2", "Compreensão do tema e do tipo textual; uso de repertório sociocultural pertinente", ""],
          ["C3", "Seleção e organização de argumentos em defesa de um ponto de vista", ""],
          ["C4", "Coesão: conectivos, retomadas, paragrafação", ""],
          ["C5", "Proposta de intervenção completa, respeitando os direitos humanos", ""],
          [{ t: "Total", }, "Soma das cinco competências (0 a 1000)", ""]
        ] },
        { k: "prof", t: "Orientações ao professor", li: [
          "**Possível tese:** a valorização da leitura esbarra no acesso desigual a livros e bibliotecas e na competição por atenção imposta pelas telas.",
          "**Repertórios úteis:** Monteiro Lobato (frase do Texto III); Paulo Freire (“A leitura do mundo precede a leitura da palavra”); Constituição Federal, art. 205 (a educação como direito de todos e dever do Estado e da família); Lei nº 13.696/2018 (Política Nacional de Leitura e Escrita).",
          "**Proposta modelo:** o **Ministério da Educação**, em parceria com estados e municípios (**agente**), deve **ampliar o acervo e o horário das bibliotecas escolares e públicas** (**ação**), por meio de **verbas específicas e do trabalho de bibliotecários em cada escola** (**meio**), a fim de **garantir acesso a livros a todos os estudantes** (**finalidade**). Além disso, **clubes de leitura mensais** nas escolas podem **estimular o hábito da leitura e reduzir a dispersão causada pelas telas** (**detalhamento**).",
          "**Dica de correção:** leia primeiro apenas a introdução e a conclusão; se a tese e a proposta estiverem claras e conectadas, a redação costuma estar bem estruturada."
        ] }
      ]
    },

    /* ===================== ATIVIDADES (Redação, Literatura, Produção) ===================== */
    {
      id: "ativ-9-paragrafo", titulo: "O parágrafo argumentativo em 4 passos", tipo: "atividade", serie: ["9", "EM"], assunto: ["Redação"],
      resumo: "Tópico frasal, argumento, repertório e fechamento: análise de um modelo e produção guiada.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Os 4 passos", li: [
          "**1. Tópico frasal:** a ideia central do parágrafo, em uma frase.",
          "**2. Argumento:** explica por que a ideia é válida (//isso ocorre porque…//).",
          "**3. Repertório ou exemplo:** dado, lei, obra, fato histórico ou citação que sustenta o argumento.",
          "**4. Fechamento:** retoma a ideia e liga ao tema (//dessa forma…//)."
        ] },
        { k: "texto", t: "Parágrafo modelo", fonte: "Texto original", p: [
          "Em primeiro lugar, a falta de acesso a livros limita a formação de leitores. Isso ocorre porque, em muitas cidades, as bibliotecas públicas têm acervo reduzido e horários restritos, o que afasta os jovens do hábito da leitura. Como afirmou Monteiro Lobato, “um país se faz com homens e livros”; sem acesso a eles, a construção desse país fica comprometida. Dessa forma, ampliar o acesso aos livros é condição para formar cidadãos críticos."
        ] },
        { k: "q", it: [
          dis("Qual é o tópico frasal do parágrafo modelo?", "“Em primeiro lugar, a falta de acesso a livros limita a formação de leitores.”", 2),
          dis("Que expressão introduz o argumento? E qual introduz o fechamento?", "Argumento: “Isso ocorre porque”. Fechamento: “Dessa forma”.", 2),
          dis("Qual é o repertório sociocultural usado?", "A frase de Monteiro Lobato: “um país se faz com homens e livros”.", 2),
          dis("Reescreva este parágrafo fraco usando os 4 passos: “A educação é importante. Todo mundo sabe disso. Tem que melhorar.”", "Resposta pessoal. Exemplo: “A educação é o principal instrumento de redução das desigualdades no Brasil. Isso ocorre porque o acesso à escola de qualidade amplia as oportunidades de trabalho e de participação social. De acordo com a Constituição Federal de 1988, a educação é direito de todos e dever do Estado e da família. Portanto, investir em educação é investir no futuro do país.”", 8),
          dis("Escreva um parágrafo completo a partir do tópico frasal: “A desinformação nas redes sociais prejudica o debate público.”", "Resposta pessoal. Verifique: argumento introduzido por conector causal, um repertório ou exemplo concreto e fechamento que retome o tópico frasal.", 9)
        ] }
      ]
    },
    {
      id: "ativ-em-ficha-correcao", titulo: "Ficha de correção das 5 competências do ENEM", tipo: "atividade", serie: ["EM"], assunto: ["Redação"],
      resumo: "Ficha para o professor corrigir e devolver a redação, com perguntas-guia por competência.", tempo: "uso contínuo",
      blocos: [
        { k: "instr", p: "Preencha uma ficha por redação. Cada competência vale de 0 a 200 pontos, em faixas de 40 (0, 40, 80, 120, 160 ou 200). Consulte a Cartilha do Participante do ano para as descrições oficiais de cada nível." },
        { k: "tabela", t: "Perguntas-guia", cab: ["Competência", "O que observar", "Perguntas-guia"], l: [
          ["C1 · Norma culta", "Ortografia, acentuação, pontuação, concordância, regência, crase; registro formal", "Há desvios que atrapalham a leitura? Há marcas de oralidade ou gírias?"],
          ["C2 · Tema e tipo textual", "Compreensão da proposta, tipo dissertativo-argumentativo, repertório sociocultural", "O texto trata do tema recortado, e não de um tema genérico? O repertório é legítimo, pertinente e bem usado?"],
          ["C3 · Argumentação", "Seleção, relação e organização de informações em defesa de um ponto de vista", "Há tese clara? Os argumentos são desenvolvidos, e não só enunciados? Há autoria?"],
          ["C4 · Coesão", "Conectivos, referenciação, paragrafação, progressão das ideias", "Os parágrafos se ligam? Há repetição excessiva de conectivos? Os pronomes têm referente claro?"],
          ["C5 · Proposta de intervenção", "Agente, ação, meio/modo, finalidade e detalhamento; respeito aos direitos humanos", "Estão presentes os cinco elementos? A proposta se liga ao problema discutido? Respeita os direitos humanos?"]
        ] },
        { k: "tabela", t: "Ficha do aluno", cab: ["Competência", "Nota (0–200)", "Comentário"], l: [
          ["C1", "", ""], ["C2", "", ""], ["C3", "", ""], ["C4", "", ""], ["C5", "", ""],
          [{ t: "Total" }, "", ""]
        ] },
        { k: "linhas", t: "Orientação para a reescrita", n: 4 },
        { k: "prof", t: "Atenção: casos que podem zerar a redação", li: [
          "Fuga total ao tema; não atendimento ao tipo dissertativo-argumentativo; texto com extensão insuficiente (7 linhas ou menos); cópia dos textos motivadores sem autoria; impropérios, desenhos ou outras formas propositais de anulação; parte desconectada do tema; texto em língua estrangeira.",
          "Desrespeito aos direitos humanos na proposta zera apenas a C5, e não o texto todo.",
          "As regras mudam de edição para edição: confirme sempre na Cartilha do Participante do ano da prova."
        ] }
      ]
    },
    {
      id: "ativ-em-repertorios", titulo: "Banco de repertórios por eixo temático", tipo: "atividade", serie: ["EM"], assunto: ["Redação"],
      resumo: "Autores, obras, leis e filmes para usar na redação, com a ideia de cada um e quando aplicar.", tempo: "consulta",
      blocos: [
        { k: "instr", p: "Repertório bom é o que se **liga ao argumento**. Use a coluna “Quando usar” para decidir se a referência combina com o seu tema." },
        { k: "tabela", t: "Educação, cultura e leitura", cab: ["Repertório", "Ideia central", "Quando usar"], l: [
          ["Paulo Freire, Pedagogia do Oprimido", "Crítica à “educação bancária”; educar é libertar", "Educação, desigualdade, leitura"],
          ["Pierre Bourdieu", "“Capital cultural”: bens culturais reproduzem desigualdades", "Acesso à cultura, escola, desigualdade"],
          ["Constituição Federal, art. 205", "Educação como direito de todos e dever do Estado e da família", "Qualquer tema de educação"],
          ["Monteiro Lobato", "“Um país se faz com homens e livros”", "Leitura, desenvolvimento nacional"]
        ] },
        { k: "tabela", t: "Tecnologia, mídia e sociedade", cab: ["Repertório", "Ideia central", "Quando usar"], l: [
          ["Zygmunt Bauman, Modernidade líquida", "Relações e valores frágeis, instáveis", "Redes sociais, consumo, relações"],
          ["Guy Debord, A sociedade do espetáculo", "A vida mediada por imagens e aparências", "Redes sociais, cultura de massa"],
          ["Michel Foucault, Vigiar e Punir", "Sociedade disciplinar, vigilância (panóptico)", "Privacidade, vigilância digital"],
          ["Marco Civil da Internet (Lei nº 12.965/2014)", "Direitos e deveres no uso da internet", "Internet, liberdade de expressão, dados"],
          ["Série Black Mirror", "Efeitos sociais da tecnologia", "Dependência tecnológica, ética"]
        ] },
        { k: "tabela", t: "Trabalho, desigualdade e cidadania", cab: ["Repertório", "Ideia central", "Quando usar"], l: [
          ["Karl Marx", "Alienação do trabalhador", "Trabalho, exploração"],
          ["Filme Tempos Modernos (Chaplin, 1936)", "Trabalhador reduzido à máquina", "Trabalho, industrialização"],
          ["Carolina Maria de Jesus, Quarto de Despejo", "Fome e vida na favela, vistas por quem as viveu", "Desigualdade, fome, moradia"],
          ["Graciliano Ramos, Vidas Secas", "Miséria e abandono no sertão", "Desigualdade, seca, exclusão"],
          ["Filme Ilha das Flores (1989)", "Lixo, desigualdade e ordem econômica", "Lixo, desigualdade, consumo"],
          ["Milton Santos, O Espaço do Cidadão", "Cidadania incompleta quando o consumo vale mais que direitos", "Cidadania, consumo, desigualdade"],
          ["Hannah Arendt, banalidade do mal", "Maldade que nasce da obediência irrefletida", "Violência, omissão, ética"]
        ] },
        { k: "tabela", t: "Leis e direitos", cab: ["Repertório", "Ideia central", "Quando usar"], l: [
          ["Declaração Universal dos Direitos Humanos (1948)", "Direitos básicos de toda pessoa", "Qualquer tema de direitos"],
          ["Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)", "Proteção integral a crianças e jovens", "Infância, trabalho infantil, educação"],
          ["Lei Maria da Penha (Lei nº 11.340/2006)", "Combate à violência doméstica", "Violência contra a mulher"],
          ["Estatuto do Idoso (Lei nº 10.741/2003)", "Direitos das pessoas idosas", "Envelhecimento, saúde"],
          ["Lei Brasileira de Inclusão (Lei nº 13.146/2015)", "Direitos das pessoas com deficiência", "Inclusão, acessibilidade"]
        ] },
        { k: "prof", t: "Para a aula", li: [
          "Peça que o aluno escolha três repertórios e escreva, para cada um, uma frase que o ligue ao tema da próxima redação.",
          "Alerte: a citação sem conexão com o argumento (“repertório de bolso”) rende pouco na C2."
        ] }
      ]
    },
    {
      id: "ativ-em-escolas-literarias", titulo: "Ligue autor, obra e escola literária", tipo: "atividade", serie: ["EM"], assunto: ["Literatura"],
      resumo: "Relacionar 9 autores/obras a 8 escolas e estilos, do Classicismo ao Naturalismo.", tempo: "1 aula",
      blocos: [
        { k: "instr", p: "Escreva, ao lado de cada autor e obra, a **letra** da escola literária correspondente. Cada letra pode ser usada mais de uma vez." },
        { k: "tabela", t: "Escolas e estilos", cab: ["Letra", "Escola"], l: [
          ["a", "Classicismo"], ["b", "Barroco"], ["c", "Romantismo · 1ª geração (indianismo, nacionalismo)"], ["d", "Romantismo · 2ª geração (ultrarromantismo)"],
          ["e", "Romantismo · 3ª geração (condoreirismo)"], ["f", "Romantismo · prosa"], ["g", "Realismo"], ["h", "Naturalismo"]
        ] },
        { k: "tabela", t: "Associe", cab: ["Autor e obra", "Letra", { t: "Gabarito", prof: true }], l: [
          ["Camões · Os Lusíadas", "", { t: "a", prof: true }],
          ["Gregório de Matos · poesia satírica", "", { t: "b", prof: true }],
          ["Padre Antônio Vieira · Sermão de Santo Antônio aos Peixes", "", { t: "b", prof: true }],
          ["Gonçalves Dias · I-Juca-Pirama", "", { t: "c", prof: true }],
          ["Álvares de Azevedo · Lira dos Vinte Anos", "", { t: "d", prof: true }],
          ["Castro Alves · O Navio Negreiro", "", { t: "e", prof: true }],
          ["José de Alencar · Iracema", "", { t: "f", prof: true }],
          ["Machado de Assis · Dom Casmurro", "", { t: "g", prof: true }],
          ["Aluísio Azevedo · O Cortiço", "", { t: "h", prof: true }]
        ] },
        { k: "q", it: [
          dis("Escolha duas escolas da lista e explique, em três linhas cada, o que as diferencia na visão de mundo.", "Resposta pessoal. Exemplo: o Romantismo idealiza o amor e o herói e valoriza a subjetividade; o Realismo observa a sociedade com objetividade e ironia, criticando hipocrisias e interesses.", 7)
        ] }
      ]
    },
    {
      id: "ativ-89-figuras", titulo: "Figuras de linguagem: identifique", tipo: "atividade", serie: ["9", "EM"], assunto: ["Gramática", "Literatura"],
      resumo: "Metáfora, comparação, personificação, metonímia, hipérbole, eufemismo, ironia e paradoxo.", tempo: "1 aula",
      blocos: [
        { k: "teoria", t: "Resumo", li: [
          "**Metáfora**: comparação implícita (//seus olhos são duas estrelas//). **Comparação**: com conectivo (//forte como um touro//).",
          "**Personificação**: dá traços humanos a seres não humanos (//o vento sussurrava//). **Metonímia**: troca de um termo por outro próximo (//li Machado// = a obra).",
          "**Hipérbole**: exagero. **Eufemismo**: suaviza uma ideia (//ele nos deixou//). **Ironia**: diz o contrário do que se pensa. **Paradoxo**: ideias contraditórias reunidas."
        ] },
        { k: "instr", p: "Identifique a figura de linguagem predominante em cada frase." },
        { k: "q", it: [
          obj("“Seus olhos são duas estrelas.”", FIG, 0, "Relação de semelhança sem conectivo."),
          obj("“Ele é forte como um touro.”", FIG, 1, "O conectivo “como” indica comparação."),
          obj("“O vento sussurrava segredos.”", FIG, 2, "O vento recebe uma ação humana."),
          obj("“Li Machado de Assis na adolescência.”", FIG, 3, "O autor é usado no lugar da obra."),
          obj("“Já te disse mil vezes!”", FIG, 4, "Exagero para dar ênfase."),
          obj("“Meu avô nos deixou na semana passada.”", FIG, 5, "“Deixou” suaviza a ideia de morte."),
          obj("“Que bela atitude, hein? Chegar atrasado outra vez...”", FIG, 6, "O elogio aparente esconde a crítica."),
          obj("“É ferida que dói e não se sente.”", FIG, 7, "Ideias contraditórias: dói e não se sente."),
          dis("Crie uma frase com **antítese** (palavras ou ideias opostas).", "Resposta pessoal. Exemplo: “Na festa, a alegria dos convidados contrastava com a tristeza do anfitrião.”", 3)
        ] }
      ]
    },
    {
      id: "ativ-67-conto", titulo: "Escreva um conto em 5 passos", tipo: "atividade", serie: ["6", "7"], assunto: ["Redação"],
      resumo: "Planejar e escrever uma narrativa: personagem, lugar, conflito, clímax e desfecho.", tempo: "2 aulas",
      blocos: [
        { k: "teoria", t: "Elementos da narrativa", li: [
          "**Personagem**: quem vive a história. **Tempo** e **espaço**: quando e onde.",
          "**Enredo**: situação inicial → **conflito** (o problema) → **clímax** (o momento de maior tensão) → **desfecho**.",
          "**Narrador**: em 1ª pessoa (participa) ou em 3ª pessoa (observa)."
        ] },
        { k: "tabela", t: "Planejamento", cab: ["Passo", "Escreva aqui"], l: [
          ["1. Quem é o personagem?", ""], ["2. Onde e quando acontece?", ""], ["3. Qual é o conflito (o problema)?", ""], ["4. O que acontece no clímax?", ""], ["5. Como termina?", ""]
        ] },
        { k: "linhas", t: "Meu conto (título: ____________________)", n: 20 },
        { k: "tabela", t: "Revisão: marque ✓", cab: ["Item", "✓"], l: [
          ["Tem começo, meio e fim", ""], ["O conflito está claro", ""], ["Usei parágrafos", ""], ["Usei pontuação nas falas (travessão ou aspas)", ""], ["Reli e corrigi a ortografia", ""]
        ] },
        { k: "prof", t: "Critérios de avaliação (sugestão)", li: [
          "Estrutura narrativa (3 pontos) · Coerência e criatividade (3 pontos) · Pontuação e paragrafação (2 pontos) · Ortografia (2 pontos).",
          "Para as turmas de 6º ano, considere permitir a escrita em duplas e a leitura em voz alta dos melhores contos."
        ] }
      ]
    },

    /* ===================== SLIDES ===================== */
    {
      id: "slides-em-romantismo", titulo: "Slides · Romantismo no Brasil", tipo: "slides", serie: ["EM"], assunto: ["Literatura"],
      resumo: "9 slides: contexto, características, três gerações poéticas e prosa romântica.", tempo: "1 aula",
      slides: [
        { capa: true, t: "Romantismo no Brasil", sub: "Contexto, características e gerações (1836–1881)", nota: "Abra perguntando: o que vocês imaginam quando ouvem “romântico”? Mostre que, na literatura, a palavra tem um sentido histórico mais amplo." },
        { t: "Contexto histórico", li: ["Independência do Brasil (1822) e necessidade de construir uma identidade nacional", "Origem europeia: reação ao racionalismo, influenciada pela Revolução Francesa e pela Revolução Industrial", "Ascensão da burguesia e das cidades", "Marco inicial: Suspiros Poéticos e Saudades (1836), de Gonçalves de Magalhães"], nota: "Conecte: um país novo precisava de heróis, língua e paisagem próprios." },
        { t: "Características", li: ["Subjetivismo e sentimentalismo", "Idealização da mulher, do amor e do herói", "Escapismo: infância, natureza, passado e morte", "Nacionalismo e exaltação da natureza", "Culto à liberdade"] },
        { t: "1ª geração: nacionalista e indianista", li: ["Gonçalves Dias, Gonçalves de Magalhães", "O índio como herói nacional", "Natureza exaltada e saudade da pátria"], ex: "“Minha terra tem palmeiras, / Onde canta o Sabiá…” (Canção do Exílio, 1843)", nota: "Peça a leitura em voz alta e pergunte onde estava o eu lírico quando escreveu o poema (em Coimbra, Portugal)." },
        { t: "2ª geração: ultrarromântica", li: ["Álvares de Azevedo, Casimiro de Abreu, Fagundes Varela", "“Mal do século”: tédio, morte, amor impossível", "Subjetivismo extremo e escapismo"], ex: "“Oh! que saudades que eu tenho / Da aurora da minha vida…” (Casimiro de Abreu)" },
        { t: "3ª geração: condoreira", li: ["Castro Alves, Sousândrade", "Poesia social e abolicionista", "Linguagem grandiosa, de tom épico e declamatório"], ex: "“O Navio Negreiro”: denúncia do tráfico de escravizados" },
        { t: "A prosa romântica", li: ["José de Alencar: O Guarani, Iracema, Senhora", "Joaquim Manuel de Macedo: A Moreninha", "Manuel Antônio de Almeida: Memórias de um Sargento de Milícias", "Bernardo Guimarães: A Escrava Isaura", "Romances urbanos, indianistas e regionalistas"] },
        { t: "Para pensar", li: ["Qual geração mais se aproxima do mundo atual? Por quê?", "O que mudou na ideia de “herói” entre o Romantismo e hoje?", "Como a Canção do Exílio é retomada em paródias modernas?"], nota: "Use como roda de conversa de 10 minutos ou como tarefa em duplas." },
        { t: "Resumo", li: ["Romantismo: emoção, nação e liberdade", "1ª geração: pátria e índio · 2ª: dor e morte · 3ª: justiça social", "Prosa: Alencar é o nome central", "Próxima aula: Realismo, a reação ao idealismo"] }
      ]
    },
    {
      id: "slides-em-estrutura-redacao", titulo: "Slides · Estrutura da redação ENEM", tipo: "slides", serie: ["EM"], assunto: ["Redação"],
      resumo: "8 slides: tipo textual, introdução, desenvolvimento, conclusão, conectivos e erros que custam pontos.", tempo: "1 aula",
      slides: [
        { capa: true, t: "Estrutura da redação do ENEM", sub: "Introdução, desenvolvimento e conclusão com proposta de intervenção" },
        { t: "O texto dissertativo-argumentativo", li: ["Defende um ponto de vista (tese) com argumentos", "De 8 a 30 linhas", "Norma culta, impessoalidade e linguagem formal", "Quatro a cinco parágrafos"], nota: "Reforce: texto com 7 linhas ou menos é anulado." },
        { t: "Introdução", li: ["Contextualização do tema", "Tese: o seu ponto de vista", "Apresentação dos argumentos que virão"], ex: "“Na era digital, a informação circula com velocidade inédita, mas nem sempre com veracidade…”" },
        { t: "Desenvolvimento (2 parágrafos)", li: ["Tópico frasal", "Argumento e explicação", "Repertório sociocultural", "Fechamento do parágrafo"], nota: "Mostre o parágrafo modelo da atividade “O parágrafo argumentativo em 4 passos”." },
        { t: "Conclusão e proposta de intervenção", li: ["**Agente**: quem vai agir", "**Ação**: o que será feito", "**Meio/modo**: como será feito", "**Finalidade**: para quê", "**Detalhamento**: um complemento a qualquer elemento"], nota: "A C5 exige os cinco elementos. Respeitar os direitos humanos é obrigatório." },
        { t: "Conectivos por função", li: ["Adição: além disso, ademais", "Oposição: contudo, entretanto, no entanto", "Causa: visto que, uma vez que", "Conclusão: portanto, dessa forma, logo", "Exemplificação: por exemplo, como"] },
        { t: "Erros que custam pontos", li: ["Fugir do tema ou tratar de forma genérica", "Copiar os textos motivadores", "Proposta vaga ou sem agente", "Repertório que não se liga ao argumento", "Violar os direitos humanos"] },
        { t: "Checklist final", li: ["A tese está clara?", "Cada parágrafo tem uma ideia central?", "Há ao menos um repertório pertinente?", "A proposta tem os cinco elementos?", "Reli e corrigi?"] }
      ]
    },
    {
      id: "slides-fund-generos", titulo: "Slides · Gêneros textuais: notícia, reportagem, artigo e crônica", tipo: "slides", serie: ["7", "8", "9"], assunto: ["Interpretação", "Redação"],
      resumo: "7 slides com finalidade, características e atividade de classificação de manchetes.", tempo: "1 aula",
      slides: [
        { capa: true, t: "Gêneros textuais", sub: "Notícia, reportagem, artigo de opinião e crônica" },
        { t: "Notícia", li: ["Objetivo: informar sobre um fato recente", "Lide: quem, o quê, quando, onde, por quê", "Linguagem objetiva, 3ª pessoa", "Fontes citadas"] },
        { t: "Reportagem", li: ["Aprofunda um assunto", "Várias fontes, dados e contextos", "Mais longa e investigativa", "Pode ter fotos, gráficos e boxes"] },
        { t: "Artigo de opinião", li: ["Objetivo: defender um ponto de vista", "Tese, argumentos e conclusão", "Assinado por quem opina", "Usa concessão e conectivos argumentativos"] },
        { t: "Crônica", li: ["Parte de um fato do cotidiano", "Humor, lirismo ou crítica", "Linguagem simples, próxima da fala", "Autor muitas vezes aparece como narrador"] },
        { t: "Compare", li: ["Notícia informa", "Reportagem aprofunda", "Artigo convence", "Crônica faz pensar (e sorrir)"] },
        { t: "Atividade: classifique a manchete", li: ["“Prefeitura abre inscrições para curso de informática”", "“Por que o recreio precisa ser maior”", "“O dia em que a rua virou um grande quintal”", "“Como a falta de sono afeta o desempenho escolar: o que dizem especialistas”"], nota: "Gabarito: notícia; artigo de opinião; crônica; reportagem." }
      ]
    },
    {
      id: "slides-89-figuras", titulo: "Slides · Figuras de linguagem", tipo: "slides", serie: ["9", "EM"], assunto: ["Gramática", "Literatura"],
      resumo: "8 slides com definição, exemplo e atividade rápida: metáfora, comparação, metonímia, antítese e mais.", tempo: "1 aula",
      slides: [
        { capa: true, t: "Figuras de linguagem", sub: "Como as palavras ganham novos sentidos" },
        { t: "Metáfora × Comparação", li: ["Metáfora: semelhança sem conectivo", "Comparação: semelhança com “como”, “tal qual”…"], ex: "“A vida é uma estrada.” × “A vida é como uma estrada.”" },
        { t: "Metonímia", li: ["Troca um termo por outro com o qual tem relação", "Autor pela obra · parte pelo todo · lugar pelas pessoas"], ex: "“Li Machado de Assis.” · “O Planalto decidiu.”" },
        { t: "Antítese × Paradoxo", li: ["Antítese: palavras ou ideias opostas", "Paradoxo: ideias contraditórias que coexistem"], ex: "“Amor é fogo que arde sem se ver.” (Camões)" },
        { t: "Hipérbole × Eufemismo", li: ["Hipérbole: exagera", "Eufemismo: suaviza"], ex: "“Morri de rir.” × “Ele partiu.”" },
        { t: "Ironia", li: ["Diz o contrário do que pensa", "Depende do contexto e do tom"], ex: "“Que ótimo, perdi o ônibus de novo.”" },
        { t: "Personificação", li: ["Dá ações e sentimentos humanos a seres não humanos"], ex: "“As ruas estavam sonolentas.”" },
        { t: "Atividade rápida", li: ["Identifique a figura em cada frase:", "1. “O tempo voa.”", "2. “Estou morrendo de fome.”", "3. “Ele é rápido como um raio.”", "4. “Bebi um copo de suco.” (o copo pelo conteúdo)"], nota: "Gabarito: personificação (ou metáfora), hipérbole, comparação, metonímia." }
      ]
    },

    /* ===================== MAPAS MENTAIS ===================== */
    {
      id: "mapa-em-romantismo-realismo", titulo: "Mapa mental · Romantismo × Realismo", tipo: "mapa", serie: ["EM"], assunto: ["Literatura"],
      resumo: "Comparativo em seis eixos: contexto, visão de mundo, linguagem, temas, personagens, autores.", tempo: "revisão",
      mapa: {
        centro: "Romantismo × Realismo", rotulos: ["Romantismo", "Realismo"], ramos: [
          { t: "Contexto histórico", a: ["1836 a 1881", "Independência (1822) e Império", "Busca de identidade nacional"], b: ["1881 a 1893", "Abolição (1888) e República (1889)", "Cientificismo e positivismo"] },
          { t: "Visão de mundo", a: ["Idealização", "Subjetivismo", "Escapismo"], b: ["Objetividade", "Observação da realidade", "Crítica social"] },
          { t: "Linguagem", a: ["Emotiva e metafórica", "Culto à imaginação"], b: ["Direta e analítica", "Irônica (Machado)", "Descritiva (Aluísio)"] },
          { t: "Temas", a: ["Amor idealizado", "Natureza e pátria", "Mal do século"], b: ["Adultério e hipocrisia", "Ambição e interesse", "Pobreza e doença"] },
          { t: "Personagens", a: ["Heróis e mocinhas", "Vilão claro", "Planos e tipos"], b: ["Pessoas comuns", "Ambíguas e psicológicas", "Movidas por interesse"] },
          { t: "Autores e obras", a: ["G. Dias · I-Juca-Pirama", "Castro Alves · O Navio Negreiro", "Alencar · Iracema"], b: ["Machado · Dom Casmurro", "Aluísio · O Cortiço", "Raul Pompeia · O Ateneu"] }
        ]
      }
    },
    {
      id: "mapa-9-classes-palavras", titulo: "Mapa mental · Classes de palavras", tipo: "mapa", serie: ["8", "9"], assunto: ["Gramática"],
      resumo: "As dez classes, divididas em variáveis e invariáveis, com função e exemplos.", tempo: "revisão",
      mapa: {
        centro: "Classes de palavras", ramos: [
          { t: "Substantivo (variável)", itens: ["Nomeia seres, lugares, sentimentos", "menina, escola, saudade"] },
          { t: "Adjetivo (variável)", itens: ["Caracteriza o substantivo", "casa grande, aluno esforçado"] },
          { t: "Artigo (variável)", itens: ["Define ou indefine", "o, a, os, as · um, uma"] },
          { t: "Numeral (variável)", itens: ["Quantidade ou ordem", "dois, metade · segundo, terceiro"] },
          { t: "Pronome (variável)", itens: ["Substitui ou acompanha o nome", "ele, meu, este, quem"] },
          { t: "Verbo (variável)", itens: ["Ação, estado ou fenômeno", "correr, estar, chover"] },
          { t: "Advérbio (invariável)", itens: ["Modifica verbo, adjetivo ou advérbio", "muito, ontem, aqui, não"] },
          { t: "Preposição (invariável)", itens: ["Liga termos", "de, para, com, em, por"] },
          { t: "Conjunção (invariável)", itens: ["Liga orações ou termos", "e, mas, porque, se"] },
          { t: "Interjeição (invariável)", itens: ["Expressa emoção", "Ufa! Oh! Nossa!"] }
        ]
      }
    },
    {
      id: "mapa-em-competencias-enem", titulo: "Mapa mental · As 5 competências da redação do ENEM", tipo: "mapa", serie: ["EM"], assunto: ["Redação"],
      resumo: "O que cada competência avalia e uma dica prática para cada uma.", tempo: "revisão",
      mapa: {
        centro: "Redação ENEM · 1000 pontos", ramos: [
          { t: "C1 · Norma culta", itens: ["Ortografia, acentuação, pontuação", "Concordância e regência", "Dica: evite gírias e oralidade"] },
          { t: "C2 · Tema e tipo textual", itens: ["Não fugir do tema", "Dissertativo-argumentativo", "Dica: repertório ligado ao argumento"] },
          { t: "C3 · Argumentação", itens: ["Tese clara", "Argumentos desenvolvidos", "Dica: explique, não apenas afirme"] },
          { t: "C4 · Coesão", itens: ["Conectivos variados", "Retomada por pronomes e sinônimos", "Dica: um conectivo por início de parágrafo"] },
          { t: "C5 · Intervenção", itens: ["Agente, ação, meio, finalidade, detalhamento", "Respeito aos direitos humanos", "Dica: ligue a proposta à tese"] }
        ]
      }
    },
    {
      id: "mapa-8-sujeito-predicado", titulo: "Mapa mental · Sujeito e predicado", tipo: "mapa", serie: ["8"], assunto: ["Gramática"],
      resumo: "Tipos de sujeito e de predicado em um só mapa, com exemplos.", tempo: "revisão",
      mapa: {
        centro: "Sujeito e predicado", ramos: [
          { t: "Sujeito simples", itens: ["Um núcleo", "As crianças brincavam."] },
          { t: "Sujeito composto", itens: ["Dois ou mais núcleos", "Ana e Beatriz saíram."] },
          { t: "Sujeito desinencial (oculto)", itens: ["Pela terminação do verbo", "Fizemos a tarefa. (nós)"] },
          { t: "Sujeito indeterminado", itens: ["Não se sabe quem", "Roubaram a bicicleta."] },
          { t: "Oração sem sujeito", itens: ["Fenômeno da natureza, haver", "Choveu. · Há flores."] },
          { t: "Predicado verbal", itens: ["Verbo de ação", "O menino correu."] },
          { t: "Predicado nominal", itens: ["Verbo de ligação + predicativo", "O dia estava lindo."] },
          { t: "Predicado verbo-nominal", itens: ["Verbo de ação + predicativo", "Ela chegou cansada."] }
        ]
      }
    },

    /* ===================== AULA DE EMERGÊNCIA ===================== */
    {
      id: "emerg-fund-cronica-debate", titulo: "Aula de 50 minutos: crônica e roda de conversa", tipo: "emergencia", serie: F, assunto: ["Interpretação"],
      resumo: "Para quando faltou tempo de preparar: leitura, três questões em duplas e debate. Sem recursos extras.", tempo: "50 min",
      blocos: [
        { k: "instr", p: "**Antes da aula:** imprima uma cópia do texto por dupla. Nenhum outro material é necessário." },
        { k: "plano", t: "Roteiro", et: [
          { min: "5", t: "Abertura", d: "Pergunte: “Vocês já foram zoados por se preparar demais para algo?” Ouça duas ou três respostas." },
          { min: "10", t: "Leitura em voz alta", d: "Leia o texto para a turma ou peça a um aluno. Peça que sublinhem uma frase de que gostaram." },
          { min: "15", t: "Questões em duplas", d: "As duplas respondem às três questões. Circule pela sala." },
          { min: "15", t: "Roda de conversa", d: "Use as perguntas de debate (abaixo). Registre no quadro as ideias mais fortes." },
          { min: "5", t: "Bilhete de saída", d: "Cada aluno escreve uma frase: “Hoje percebi que…”. Recolha na saída." }
        ] },
        { k: "texto", t: "O guarda-chuva do seu Aurélio", fonte: "Texto original", p: [
          "Seu Aurélio nunca saía sem o guarda-chuva, nem no sol mais forte de janeiro. A vizinhança ria: “Vai chover onde, seu Aurélio?”. Ele respondia, sério: “Em algum lugar do mundo, sempre.”",
          "Numa tarde de céu limpo, a pequena Rute esperava o ônibus sem proteção alguma quando começou uma chuva repentina, dessas que chegam sem aviso. Seu Aurélio, que vinha pela calçada, abriu o guarda-chuva e o estendeu sobre a menina e, por tabela, sobre mais três pessoas que corriam para o ponto.",
          "No dia seguinte, ninguém riu quando ele passou. Na padaria, dois vizinhos comentavam que também iam comprar um guarda-chuva. Seu Aurélio apenas sorriu, ajeitou o dele debaixo do braço e seguiu caminho."
        ] },
        { k: "q", it: [
          dis("Por que os vizinhos riam de seu Aurélio?", "Porque ele andava sempre com guarda-chuva, até em dias de sol forte.", 3),
          dis("O que a resposta “Em algum lugar do mundo, sempre” revela sobre a personalidade dele?", "Que ele é precavido e bem-humorado: prefere estar preparado e responde com leveza às brincadeiras.", 3),
          dis("Qual é a mensagem da crônica? Justifique com uma passagem do texto.", "Resposta pessoal. Esperado: vale a pena se prevenir, mesmo quando os outros acham exagero, e quem se prepara pode ajudar os demais (ele protegeu Rute e outras três pessoas).", 4)
        ] },
        { k: "prof", t: "Perguntas para a roda de conversa", li: [
          "Quando prevenir parece exagero? Quando se prova necessário?",
          "Vocês conhecem alguém como seu Aurélio? O que essa pessoa ensina?",
          "A chuva é uma metáfora para quê? Que “chuvas” aparecem na vida de vocês?",
          "Variação: peça a cada dupla que reescreva o final com um novo desfecho."
        ] }
      ]
    },
    {
      id: "emerg-em-reescrever-introducao", titulo: "Aula de 50 minutos: reescreva a introdução", tipo: "emergencia", serie: ["EM"], assunto: ["Redação"],
      resumo: "Diagnóstico de uma introdução fraca e reescrita guiada em duplas, com modelo e lista de checagem.", tempo: "50 min",
      blocos: [
        { k: "plano", t: "Roteiro", et: [
          { min: "5", t: "Abertura", d: "Escreva no quadro: “Hoje a introdução vale 200 pontos?” Explique que ela define a C2 e a C3." },
          { min: "10", t: "Diagnóstico", d: "Leia a introdução fraca e peça que apontem, em duplas, três problemas." },
          { min: "5", t: "Fórmula", d: "Apresente: contextualização + tese + (opcional) anúncio dos argumentos." },
          { min: "20", t: "Reescrita", d: "Cada dupla reescreve a introdução com uma tese clara e um repertório." },
          { min: "10", t: "Leitura e troca", d: "Duas duplas leem; a turma avalia pela lista de checagem." }
        ] },
        { k: "texto", t: "Introdução fraca", fonte: "Texto original · tema: desafios para combater a desinformação no Brasil", p: [
          "Hoje em dia a internet é muito usada. As pessoas acreditam em tudo que veem. Por isso a desinformação é um problema no Brasil."
        ] },
        { k: "q", it: [
          dis("Aponte três problemas da introdução acima.", "(1) Abertura genérica (“Hoje em dia”); (2) generalização sem fundamento (“acreditam em tudo”); (3) falta de tese clara sobre as causas; (4) ausência de repertório e frases curtas, sem conectivos.", 4),
          dis("Reescreva a introdução com contextualização e tese.", "Resposta pessoal. Modelo: “Na era digital, a informação circula com velocidade inédita, mas nem sempre com veracidade. Nesse cenário, a desinformação se consolida como desafio no Brasil, uma vez que a falta de educação midiática e a lógica de engajamento das redes sociais favorecem a propagação de conteúdos falsos.”", 8)
        ] },
        { k: "tabela", t: "Lista de checagem", cab: ["Item", "Sim / Não"], l: [
          ["Contextualiza o tema sem frases genéricas", ""], ["Apresenta tese clara", ""], ["Usa conectivos entre as ideias", ""], ["Evita primeira pessoa e linguagem informal", ""], ["Tem repertório ou dado, se couber", ""]
        ] },
        { k: "prof", t: "Dica", li: ["Se sobrar tempo, peça que a dupla troque de introdução com outra e escreva uma pergunta que a introdução do colega ainda não responde."] }
      ]
    },
    {
      id: "emerg-fund-stop-gramatical", titulo: "Aula de 50 minutos: Stop gramatical", tipo: "emergencia", serie: F, assunto: ["Gramática"],
      resumo: "Jogo de revisão de classes de palavras e ortografia: sorteio de letra, categorias e pontuação.", tempo: "50 min",
      blocos: [
        { k: "plano", t: "Roteiro", et: [
          { min: "5", t: "Regras", d: "Explique o jogo e distribua a ficha. Forme grupos de quatro." },
          { min: "30", t: "5 rodadas", d: "Sorteie uma letra por rodada. Cada grupo tem 3 minutos para preencher as colunas. Corrija na hora, no quadro." },
          { min: "10", t: "Contagem e discussão", d: "Some os pontos. Discuta as palavras discutíveis (por exemplo: “Sim” é advérbio?)." },
          { min: "5", t: "Fechamento", d: "Peça a cada aluno que escreva uma frase usando as três palavras de que mais gostou." }
        ] },
        { k: "teoria", t: "Regras e pontuação", li: [
          "Em cada rodada, escreva uma palavra por coluna, começando pela letra sorteada.",
          "**10 pontos** por palavra que nenhum outro grupo escreveu; **5 pontos** por palavra repetida; **0** se estiver errada.",
          "Vale a classificação gramatical: o professor dá a palavra final."
        ] },
        { k: "tabela", t: "Ficha", cab: ["Rodada / letra", "Substantivo próprio", "Adjetivo", "Verbo no passado", "Palavra com ‘ão’", "Advérbio", "Pontos"], l: [
          ["1 · ___", "", "", "", "", "", ""], ["2 · ___", "", "", "", "", "", ""], ["3 · ___", "", "", "", "", "", ""], ["4 · ___", "", "", "", "", "", ""], ["5 · ___", "", "", "", "", "", ""],
          [{ t: "Total" }, "", "", "", "", "", ""]
        ] },
        { k: "prof", t: "Variações", li: [
          "Troque as colunas conforme o conteúdo: sujeito, conjunção, figura de linguagem, escritor brasileiro, palavra com “ç”.",
          "Para turmas muito agitadas, jogue em duplas e dê 2 minutos por rodada.",
          "Letras que costumam render: A, C, M, P, S. Evite K, W, Y, X, Z."
        ] }
      ]
    }
  ];

  window.BIBLIOTECA = {
    marca: "Português Pronto",
    slogan: "Atividades, provas, slides e mapas mentais de Português, Redação e Literatura.",
    materiais: materiais
  };
})();
