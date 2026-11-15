/* 6º ano · Atividades de produção de texto e ortografia (14 materiais). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, ob = H.ob, dis = H.dis;

  function A(id, titulo, resumo, blocos, assunto, tempo) {
    H.m6("atividade", "a-" + id, titulo, assunto || ["Redação"], resumo, blocos, tempo || "1 aula");
  }
  var CHECK = H.tab("Revise: marque ✓", ["Item", "✓"], [
    ["O texto tem começo, meio e fim", ""], ["Usei letra maiúscula e ponto final", ""], ["Reli e corrigi a ortografia", ""], ["A letra está legível", ""]
  ]);

  A("bilhete", "Escreva um bilhete", "Gênero bilhete: destinatário, assunto, linguagem curta e assinatura.", [
    H.te("O bilhete", ["Texto **curto**, de linguagem simples, usado para dar um recado.", "Tem **destinatário** (para quem), **recado**, **assinatura** e, em geral, **data**.", "Exemplo: //Mãe, fui à casa da Bia estudar para a prova. Volto às 18h. Beijos, Lia. 14/03//"]),
    H.i("Escreva um bilhete para cada situação."),
    H.qs([
      dis("Você vai chegar atrasado e precisa avisar sua mãe.", "Resposta pessoal. Verifique destinatário, recado claro, assinatura e data.", 4),
      dis("Você pede um livro emprestado a um colega e promete devolvê-lo na sexta.", "Resposta pessoal. Verifique pedido educado e prazo.", 4),
      dis("Você agradece a professora por ajudá-lo na prova.", "Resposta pessoal. Verifique agradecimento e assinatura.", 4)
    ]),
    CHECK,
    H.pf("Critérios", ["Destinatário e assinatura (2) · recado claro e curto (4) · linguagem adequada (2) · ortografia (2)."])
  ]);

  A("carta-pessoal", "Escreva uma carta pessoal", "Partes da carta: local e data, saudação, corpo, despedida e assinatura.", [
    H.te("Partes da carta", ["**Local e data** (//Recife, 12 de março//). **Saudação** (//Querida vovó,//). **Corpo** da carta, com o assunto. **Despedida** (//Um abraço//). **Assinatura**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Para quem vou escrever?", ""], ["Qual é o motivo da carta?", ""], ["Que novidades vou contar?", ""], ["Como vou me despedir?", ""]]),
    H.ln("Minha carta", 16),
    CHECK,
    H.pf("Critérios", ["Estrutura da carta (3) · coerência (3) · linguagem (2) · ortografia e pontuação (2). Sugira trocar as cartas entre colegas."])
  ]);

  A("convite", "Escreva um convite", "Quem convida, o quê, quando, onde e como confirmar presença.", [
    H.te("Um bom convite responde:", ["**Quem** convida e **quem** é convidado?", "**O quê** (aniversário, festa, reunião)?", "**Quando** (dia e horário) e **onde**?", "O que **levar** ou como **confirmar** a presença?"]),
    H.tab("Planejamento", ["Pergunta", "Escreva aqui"], [["Quem convida?", ""], ["Para quê?", ""], ["Quando?", ""], ["Onde?", ""], ["Como confirmar?", ""]]),
    H.ln("Meu convite (invente uma ocasião: aniversário, sarau, campeonato)", 10),
    CHECK
  ]);

  A("descricao-pessoa", "Descreva uma pessoa", "Descrição física e de personalidade com adjetivos e comparações.", [
    H.te("Como descrever", ["Comece pelo **geral** (idade, altura) e depois pelos **detalhes** (cabelo, olhos, jeito de falar).", "Use **adjetivos** (//alto, sorridente, tímido//) e **comparações** (//rápido como um raio//).", "Descreva também a **personalidade**: o que a pessoa gosta, como age."]),
    H.tab("Ficha da pessoa", ["Característica", "Escreva aqui"], [["Quem é?", ""], ["Aparência (cabelo, olhos, altura)", ""], ["Jeito de ser", ""], ["Algo especial (hobby, frase que sempre diz)", ""]]),
    H.ln("Minha descrição", 10),
    CHECK,
    H.pf("Sugestão", ["Peça que os alunos leiam as descrições sem dizer o nome; os colegas adivinham quem é."])
  ]);

  A("descricao-lugar", "Descreva um lugar", "Descrição de lugar: pontos de referência, sentidos e adjetivos.", [
    H.te("Como descrever um lugar", ["Pense nos **cinco sentidos**: o que se vê, ouve, cheira, toca e saboreia.", "Organize: de **perto para longe**, de **cima para baixo** ou da **esquerda para a direita**.", "Use **adjetivos** e **advérbios de lugar** (//aqui, ao lado, ao fundo//)."]),
    H.tab("Planejamento", ["O que percebo", "Escreva aqui"], [["Vejo", ""], ["Ouço", ""], ["Cheiro", ""], ["Sinto (tato ou sensação)", ""]]),
    H.ln("Descreva o seu lugar preferido (quarto, pátio, praça, casa de parente)", 10),
    CHECK
  ]);

  A("receita", "Escreva uma receita", "Gênero instrucional: lista de ingredientes e modo de preparo com verbos no imperativo.", [
    H.te("A receita", ["Tem **título**, **ingredientes** (com quantidades) e **modo de preparo** em passos, na ordem.", "Os verbos ficam no **imperativo** (//misture, leve ao forno//) ou no **infinitivo** (//misturar, levar ao forno//)."]),
    H.i("Escolha uma receita simples (sanduíche, vitamina, brigadeiro, salada de frutas) e escreva no caderno ou nas linhas abaixo."),
    H.tab("Ingredientes", ["Ingrediente", "Quantidade"], [["", ""], ["", ""], ["", ""], ["", ""]]),
    H.ln("Modo de preparo (numere os passos)", 8),
    CHECK,
    H.pf("Critérios", ["Ingredientes e quantidades (3) · passos em ordem (3) · verbos no imperativo ou infinitivo (2) · ortografia (2)."])
  ]);

  A("diario", "Escreva uma página de diário", "Relato em 1ª pessoa: data, sentimentos e fatos do dia.", [
    H.te("O diário", ["Escrito em **1ª pessoa**, com **data** e saudação (//Querido diário,//).", "Conta **o que aconteceu** e **o que você sentiu**, em ordem. Os verbos ficam, em geral, no passado.", "Termina com uma despedida ou uma reflexão."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Que dia foi?", ""], ["O que aconteceu de mais importante?", ""], ["Como me senti?", ""], ["O que quero lembrar?", ""]]),
    H.ln("Meu diário", 14),
    CHECK
  ]);

  A("noticia", "Escreva uma notícia", "Lide (quem, o quê, quando, onde, por quê), título e linguagem objetiva.", [
    H.te("A notícia", ["O **título** resume o fato. O **lide** (1º parágrafo) responde: **quem? o quê? quando? onde? por quê?**", "Linguagem **objetiva**, em 3ª pessoa. Pode trazer falas de testemunhas entre aspas."]),
    H.i("Invente (ou escolha) um acontecimento da escola: feira de ciências, campeonato, doação de livros, visita ao zoológico… e preencha o quadro."),
    H.tab("Lide", ["Pergunta", "Resposta"], [["Quem?", ""], ["O quê?", ""], ["Quando?", ""], ["Onde?", ""], ["Por quê?", ""]]),
    H.ln("Título e texto da notícia", 12),
    CHECK
  ]);

  A("continue-historia", "Continue a história", "Narrativa: conflito, clímax e desfecho a partir de um começo dado.", [
    H.te("Elementos da narrativa", ["**Personagens**, **tempo**, **lugar**, **conflito** (o problema), **clímax** (momento de maior tensão) e **desfecho**."]),
    H.t("Começo da história", "A porta do porão estava entreaberta, e de lá vinha uma luz azulada. Clara parou no meio do corredor. Tinha certeza de que o porão estava trancado desde o verão. Respirou fundo, segurou a lanterna e deu o primeiro passo.", "Texto original"),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["O que Clara encontra?", ""], ["Qual é o problema?", ""], ["Como Clara resolve?", ""], ["Como termina?", ""]]),
    H.ln("Continue a história", 16),
    CHECK,
    H.pf("Sugestão", ["Peça a alguns alunos que leiam as continuações em voz alta e comparem os desfechos."])
  ]);

  A("acrostico-quadrinha", "Poema: acróstico e quadrinha", "Brincar com rimas e versos: acróstico com o próprio nome e quadrinha rimada.", [
    H.te("Dois jeitos de fazer poesia", ["**Acróstico**: a primeira letra de cada verso forma uma palavra (por exemplo, o seu nome).", "**Quadrinha**: estrofe de quatro versos, em que rimam o 2º e o 4º (//Eu plantei uma semente / num cantinho do jardim; / ela cresceu bem depressa / e virou uma flor pra mim//)."]),
    H.qs([
      dis("Escreva um acróstico com o seu nome.", "Resposta pessoal. Cada verso deve começar com uma letra do nome, na ordem.", 8),
      dis("Escreva uma quadrinha sobre o recreio ou sobre um animal.", "Resposta pessoal. Verifique quatro versos e rima entre o 2º e o 4º.", 5)
    ]),
    H.pf("Critérios", ["Acróstico completo e coerente (4) · quadrinha com rima (4) · criatividade (2)."])
  ], ["Redação", "Literatura"]);

  A("cartaz", "Crie um cartaz de campanha", "Slogan, imagem, informações essenciais e verbos no imperativo.", [
    H.te("O cartaz", ["Deve chamar a atenção: **título** grande, **slogan** curto, **imagem** e **informações** (o que fazer, quando, onde).", "Usa verbos no **imperativo** (//Participe! Economize água!//) e frases **curtas**."]),
    H.tab("Planejamento", ["Passo", "Escreva aqui"], [["Qual é a campanha? (água, lixo, leitura, trânsito…)", ""], ["Slogan", ""], ["Imagem que vou desenhar", ""], ["Informações importantes", ""]]),
    H.i("No caderno ou em uma folha avulsa, faça o cartaz. Capriche nas cores e na letra."),
    CHECK
  ]);

  A("resumo", "Aprenda a resumir", "Passo a passo para resumir: ideias principais, cortes e reescrita com as próprias palavras.", [
    H.te("Como resumir", ["1. Leia tudo. 2. **Sublinhe** as ideias principais. 3. **Corte** exemplos e detalhes. 4. **Reescreva** com as suas palavras, em poucas linhas."]),
    H.t("As formigas", "As formigas vivem em grupos chamados colônias, que podem ter milhares de indivíduos. Cada formiga tem uma função: a rainha põe ovos, as operárias buscam alimento e cuidam das larvas, e os soldados defendem o formigueiro. Para se comunicar, elas deixam no chão um cheiro especial, que serve de trilha para as outras. Por trabalharem juntas, são capazes de carregar pesos muito maiores do que o seu próprio tamanho."),
    H.qs([
      dis("Escreva a ideia principal do texto em uma frase.", "As formigas vivem em colônias, em que cada uma tem uma função e todas trabalham juntas.", 3),
      dis("Resuma o texto em até 3 linhas.", "Resposta pessoal. Modelo: “As formigas vivem em colônias, nas quais rainha, operárias e soldados têm funções diferentes. Elas se comunicam por cheiro e, juntas, carregam pesos enormes.”", 4)
    ]),
    CHECK
  ], ["Redação", "Interpretação"]);

  A("reescrita", "Revise e reescreva o texto", "Identificar e corrigir erros de ortografia, pontuação e repetição.", [
    H.i("Leia o texto abaixo. Ele tem erros de ortografia, pontuação e repetições. Reescreva-o corrigido."),
    H.t("Texto para revisar", "ontem eu fui na casa da minha vó. la tinha um cachorro muito fofo e o cachorro brincou comigo e o cachorro correu muito. a minha vó fez bolo de cenoura e eu comi dois pedaços. foi um dia muito legal e eu gostei muito do dia", "Texto original, com erros propositais"),
    H.te("Lista de revisão", ["Maiúsculas no começo das frases e nos nomes próprios.", "Pontuação: ponto final, vírgulas.", "//Fui na casa// → //Fui à casa// (uso de //ir a//).", "Evitar repetições: use pronomes e sinônimos."]),
    H.qs([dis("Reescreva o texto corrigido.", "Ontem fui à casa da minha avó. Lá havia um cachorro muito fofo, que brincou comigo e correu bastante. Minha avó fez bolo de cenoura, e eu comi dois pedaços. Foi um dia muito legal!", 8)]),
    H.pf("Pontos para observar", ["Maiúsculas e pontuação; //à casa//; troca de //vó// por //avó// (escrita formal); eliminação das repetições de //cachorro// e //muito//."])
  ]);

  A("ditado", "Ditado de palavras e frases", "Lista de 20 palavras e 5 frases para ditar, com foco em ortografia do 6º ano.", [
    H.i("O professor dita as palavras e as frases. Escreva nas linhas e confira depois com a lista."),
    H.tab("Palavras", ["Nº", "Palavra", "Nº", "Palavra"], [["1", "", "11", ""], ["2", "", "12", ""], ["3", "", "13", ""], ["4", "", "14", ""], ["5", "", "15", ""], ["6", "", "16", ""], ["7", "", "17", ""], ["8", "", "18", ""], ["9", "", "19", ""], ["10", "", "20", ""]]),
    H.ln("Frases", 5),
    H.pf("Lista para ditar", [
      "**Palavras:** 1. viagem; 2. girafa; 3. caixa; 4. enxada; 5. chuva; 6. bolacha; 7. açúcar; 8. passarinho; 9. exercício; 10. cidade; 11. pêssego; 12. música; 13. biblioteca; 14. campo; 15. embrulho; 16. jovem; 17. cachorro; 18. responsabilidade; 19. página; 20. coração.",
      "**Frases:** 1. A viagem à fazenda foi muito divertida. 2. Preciso de mais açúcar para fazer o bolo. 3. Os passarinhos cantam na árvore do jardim. 4. Ontem, a professora leu um livro de aventuras. 5. Há muitos cachorros brincando no campo.",
      "Para a correção, vale um ponto por palavra certa. Peça que cada aluno reescreva três vezes as palavras erradas."
    ])
  ], ["Gramática"]);
})();
