/*
 * Falas próprias de cada episódio do podcast em formato de conversa.
 * Apresentadores: Thiago (professor de redação) e Isa (vestibulanda, quem pergunta).
 *
 * gancho:   abertura do papo com uma situação do dia a dia (falas alternadas)
 * duvida:   pergunta da Isa entre o 1º e o 2º parágrafo da leitura
 * reflexao: respostas do Thiago e da Isa à pergunta para refletir do dia
 *
 * Só comentários e situações do cotidiano: os fatos do episódio vêm de content.js.
 */
window.CONVERSAS = {
  1: {
    gancho: [
      ["isa", "Thiago, ontem eu fiz uma limpa nos meus seguidores. Uns duzentos foram embora num clique, sem dó."],
      ["thiago", "E você sentiu falta de algum?"],
      ["isa", "Sinceramente? Nem lembro quem era."],
      ["thiago", "Então você acabou de ilustrar o repertório de hoje."]
    ],
    duvida: "Mas o que a tecnologia tem a ver com isso? Relação descartável sempre existiu, né?",
    reflexao: { thiago: "Eu diria que poucas. Talvez umas cinco. E são essas que importam.", isa: "Eu vou mandar mensagem pra um amigo antigo hoje. Sério." }
  },
  2: {
    gancho: [
      ["isa", "Confissão: eu montei um cronograma de estudo de dezesseis horas por dia."],
      ["thiago", "Dezesseis?!"],
      ["isa", "Com dez minutos pra almoçar."],
      ["thiago", "Isa, isso tem nome. E hoje a gente vai falar dele."]
    ],
    duvida: "Mas se ninguém tá me obrigando, como isso vira problema?",
    reflexao: { thiago: "Eu cobro perfeição de mim em tudo. De um amigo, eu só cobraria que ele estivesse bem.", isa: "Vou refazer o cronograma. Com almoço de verdade." }
  },
  3: {
    gancho: [
      ["isa", "Thiago, um amigo meu começou terapia e pediu pra eu não contar pra ninguém."],
      ["thiago", "Por quê?"],
      ["isa", "Medo de acharem que ele é fraco."],
      ["thiago", "Pois é. Esse medo tem nome na sociologia."]
    ],
    duvida: "E isso já caiu no ENEM?",
    reflexao: { thiago: "Já ouvi que terapia é coisa de doido. Isso vem de pura desinformação.", isa: "E de medo. Mas cuidar da cabeça é igual cuidar do dente, né?" }
  },
  4: {
    gancho: [
      ["isa", "Sabia que teve uma psiquiatra que trocou choque elétrico por pincel e tinta?"],
      ["thiago", "Sabia! E ela é brasileira."],
      ["isa", "Sério? Achei que era história de filme."],
      ["thiago", "Virou filme também. Mas hoje a gente vai usar ela na redação."]
    ],
    duvida: "Tá, mas e a lei? O que mudou na prática?",
    reflexao: { thiago: "Escrever sempre me ajudou. Acho que por isso virei professor de redação.", isa: "Pra mim é música. Fone no ouvido e o mundo fica mais leve." }
  },
  5: {
    gancho: [
      ["isa", "Thiago, eu comentei sobre tênis com um amigo e no outro dia só me aparecia anúncio de tênis."],
      ["thiago", "E você acha que o celular te ouviu?"],
      ["isa", "Sei lá. Mas que é estranho, é."],
      ["thiago", "Estranho ou não, os dados que você deixa por aí já contam muita coisa. Bora entender."]
    ],
    duvida: "E onde entram as empresas de tecnologia nessa história?",
    reflexao: { thiago: "Hoje me apareceu anúncio de caneta. Coincidência? Duvido.", isa: "Pra mim, anúncio de cursinho. Aí já é perseguição." }
  },
  6: {
    gancho: [
      ["isa", "Meu tio jura que todo mundo pensa igual a ele. Diz que na internet só vê gente concordando."],
      ["thiago", "E ele está certo?"],
      ["isa", "Na timeline dele, está."],
      ["thiago", "Então a gente achou o tema de hoje."]
    ],
    duvida: "Mas qual é o problema de ver só o que eu gosto?",
    reflexao: { thiago: "Eu leio toda semana uma coluna de alguém de quem eu discordo. Dói, mas ajuda.", isa: "Vou tentar. Começando pelo meu tio." }
  },
  7: {
    gancho: [
      ["isa", "Fui à praia, tava nublado, e eu esperei dez minutos o sol aparecer só pra tirar a foto."],
      ["thiago", "E aproveitou a praia?"],
      ["isa", "Aproveitei a foto."],
      ["thiago", "Isso, minha cara, é a sociedade do espetáculo."]
    ],
    duvida: "Mas esse cara é dos anos sessenta! Como ele previu o Instagram?",
    reflexao: { thiago: "Hoje eu tomei um café sem fotografar. Foi quase revolucionário.", isa: "Eu estudei duas horas e não postei. Mas contei aqui, então será que vale?" }
  },
  8: {
    gancho: [
      ["isa", "Thiago, tem gente que diz que educação não resolve nada. Que é discurso bonito."],
      ["thiago", "E tem gente que acha que a educação resolve tudo sozinha."],
      ["isa", "E aí, quem tá certo?"],
      ["thiago", "O Paulo Freire tem uma frase perfeita pra isso."]
    ],
    duvida: "E isso tá garantido em lei ou é só ideia bonita?",
    reflexao: { thiago: "A minha professora do ensino médio. Ela me fez gostar de ler.", isa: "Meu professor de história. Ele contava tudo como se fosse série." }
  },
  9: {
    gancho: [
      ["isa", "Tem um colega meu que já leu Machado de Assis inteiro. Com quinze anos."],
      ["thiago", "E na casa dele tem muito livro?"],
      ["isa", "Uma biblioteca. O pai é professor."],
      ["thiago", "Pois então. Hoje a gente fala de herança. Mas não de dinheiro."]
    ],
    duvida: "Mas aí ele não tem mérito nenhum?",
    reflexao: { thiago: "Eu estudei numa escola pública muito boa. Nem todo mundo teve isso.", isa: "Eu tive internet em casa. Parece pouco, mas não é." }
  },
  10: {
    gancho: [
      ["isa", "Thiago, aprendi a dar bom-dia em Libras essa semana."],
      ["thiago", "Olha só! E você sabia que Libras não é mímica?"],
      ["isa", "Descobri tentando. Tem regra pra tudo."],
      ["thiago", "Porque é uma língua completa. E é o assunto de hoje."]
    ],
    duvida: "E além dessa lei, tem outra que ajuda?",
    reflexao: { thiago: "Eu sei me apresentar. Aprendi com uma aluna surda.", isa: "Vou aprender o meu nome hoje. Prometido." }
  },
  11: {
    gancho: [
      ["isa", "Na minha cidade não tem cinema. Pra ver filme na tela grande, é uma hora de ônibus."],
      ["thiago", "E isso acontece em muita cidade brasileira."],
      ["isa", "Mas cultura não é direito?"],
      ["thiago", "É. Tá até na Constituição. Bora falar disso."]
    ],
    duvida: "E quem tem cinema perto de casa? Aí tá tudo resolvido?",
    reflexao: { thiago: "Teve um filme de escola que me fez repensar o jeito como eu dou aula.", isa: "Eu chorei num desenho animado. Não vou dizer qual." }
  },
  12: {
    gancho: [
      ["isa", "Thiago, sabia que tem brasileiro que não tem nem certidão de nascimento?"],
      ["thiago", "Sabia. E sem documento, até matricular na escola fica difícil."],
      ["isa", "Nossa. A pessoa meio que não existe pro Estado."],
      ["thiago", "Exatamente. E tem um livro que resume isso numa expressão só."]
    ],
    duvida: "E esse repertório só serve pra esse tema?",
    reflexao: { thiago: "O transporte público. A gente só lembra que é direito quando ele falta.", isa: "A internet da escola. Só lembro que existe quando cai." }
  },
  13: {
    gancho: [
      ["isa", "Vou votar pela primeira vez e confesso: nem sei quem são os vereadores da minha cidade."],
      ["thiago", "Você não está sozinho."],
      ["isa", "Consolo meio triste, né?"],
      ["thiago", "Mas tem explicação histórica. Bora lá."]
    ],
    duvida: "E como foi no Brasil?",
    reflexao: { thiago: "Eu sei. Mas só porque fui atrás depois de uma eleição.", isa: "Vou pesquisar hoje. E vou acompanhar o que eles fazem." }
  },
  14: {
    gancho: [
      ["isa", "Thiago, eu sou uma pessoa cordial."],
      ["thiago", "E você acha que isso é elogio?"],
      ["isa", "Claro! Cordial é educado, gentil..."],
      ["thiago", "Então senta, que hoje a gente vai desfazer essa confusão."]
    ],
    duvida: "E onde isso aparece na política?",
    reflexao: { thiago: "Gente furando fila no banco. Quem perdeu foi a senhora que estava atrás.", isa: "Carteirinha de estudante emprestada. No fim, quem perde é todo mundo que paga certo." }
  },
  15: {
    gancho: [
      ["isa", "Vi um vídeo humilhando um cara, e todo mundo compartilhando e rindo."],
      ["thiago", "Você compartilhou?"],
      ["isa", "Quase. Aí parei pra pensar."],
      ["thiago", "Esse parar pra pensar é exatamente o assunto de hoje."]
    ],
    duvida: "Mas gente comum fazendo o mal? Isso não é coisa de vilão de filme?",
    reflexao: { thiago: "Hoje mesmo. Uma notícia que parecia ótima, mas era falsa.", isa: "Eu parei antes. Graças ao Thiago, inclusive." }
  },
  16: {
    gancho: [
      ["isa", "Quando eu era pequena, ganhei panelinha de brinquedo e meu irmão ganhou carrinho. Ninguém perguntou o que a gente queria."],
      ["thiago", "E você queria o quê?"],
      ["isa", "Um kit de química."],
      ["thiago", "Pois é. Hoje vem uma das frases mais famosas da filosofia."]
    ],
    duvida: "E quais papéis são esses, na prática?",
    reflexao: { thiago: "Me disseram que menino não chora. Chorei no fim de muito filme, e tá tudo bem.", isa: "Me disseram que exatas não era pra mim. Agora vou prestar engenharia química." }
  },
  17: {
    gancho: [
      ["isa", "Thiago, minha mãe trabalha fora, chega em casa e ainda faz janta, lava louça, confere meu dever..."],
      ["thiago", "E isso tem nome."],
      ["isa", "Supermãe?"],
      ["thiago", "Trabalho não pago. E esse assunto caiu no ENEM de 2023."]
    ],
    duvida: "Mas por que chamar isso de trabalho? É cuidado, é amor.",
    reflexao: { thiago: "Lá em casa a gente dividiu as tarefas numa lista na geladeira. Mudou tudo.", isa: "Hoje a louça é minha. Anotado e gravado." }
  },
  18: {
    gancho: [
      ["isa", "Thiago, eu achava que Maria da Penha era só o nome de uma lei."],
      ["thiago", "É o nome de uma mulher real, com uma história muito forte."],
      ["isa", "Conta."],
      ["thiago", "Conto. E depois a gente vê como usar isso na redação."]
    ],
    duvida: "E a lei fala só de agressão física?",
    reflexao: { thiago: "Controlar o celular, ciúme excessivo, humilhar. Isso também é violência.", isa: "Muita coisa que eu achava normal tá nessa lista. Dá o que pensar." }
  },
  19: {
    gancho: [
      ["isa", "Ouvi alguém dizer: eu não sou racista, então o problema não é comigo."],
      ["thiago", "E o que você achou?"],
      ["isa", "Fiquei na dúvida."],
      ["thiago", "Hoje a gente tira essa dúvida."]
    ],
    duvida: "Mas se ninguém tem a intenção, como continua acontecendo?",
    reflexao: { thiago: "No meu antigo trabalho, quase nenhuma. E ninguém comentava.", isa: "Vou reparar mais. Às vezes a resposta tá no que a gente não vê." }
  },
  20: {
    gancho: [
      ["isa", "Thiago, sabia que a palavra cafuné vem de uma língua africana?"],
      ["thiago", "Sabia. E tem muito mais: samba, capoeira, acarajé..."],
      ["isa", "Então a África tá no meu dia inteiro."],
      ["thiago", "Tá. E esse assunto caiu no ENEM de 2024."]
    ],
    duvida: "E quem estudou isso a fundo?",
    reflexao: { thiago: "A feijoada de sábado e o samba de domingo.", isa: "Cafuné. Que agora eu sei de onde vem." }
  },
  21: {
    gancho: [
      ["isa", "Thiago, pra você, um rio é o quê?"],
      ["thiago", "Água, natureza, paisagem..."],
      ["isa", "Pois tem povo que chama o rio de avô."],
      ["thiago", "E é por aí que começa o episódio de hoje."]
    ],
    duvida: "E o que esse jeito de ver o mundo muda na prática?",
    reflexao: { thiago: "Eu me sinto parte quando estou perto do mar.", isa: "Eu? Me sinto usando. Mas tô repensando." }
  },
  22: {
    gancho: [
      ["isa", "Tem gente que fala: quando o planeta esquentar de vez, eu nem vou estar aqui."],
      ["thiago", "Mas alguém vai."],
      ["isa", "Os netos dessa pessoa, no caso."],
      ["thiago", "Exatamente. Hoje o papo é responsabilidade com quem ainda nem nasceu."]
    ],
    duvida: "E a lei brasileira diz alguma coisa sobre isso?",
    reflexao: { thiago: "Garrafa reutilizável. Já são anos com a mesma.", isa: "Banho mais curto. Minha mãe agradece antes das próximas gerações." }
  },
  23: {
    gancho: [
      ["isa", "Thiago, choveu forte ontem e alagou a rua da minha avó. De novo."],
      ["thiago", "E nos bairros mais ricos?"],
      ["isa", "Lá, provavelmente, tudo seco."],
      ["thiago", "Então temos o tema: os riscos que a gente mesmo cria."]
    ],
    duvida: "Mas se o risco é global, ele não atinge todo mundo igual?",
    reflexao: { thiago: "O calor extremo. A sala de aula vira um forno.", isa: "Alagamento, como eu falei. Já virou rotina." }
  },
  24: {
    gancho: [
      ["isa", "Thiago, o Brasil não é um dos maiores produtores de comida do mundo?"],
      ["thiago", "É."],
      ["isa", "Então como ainda tem gente passando fome?"],
      ["thiago", "Essa pergunta tem quase oitenta anos de resposta. Bora."]
    ],
    duvida: "E esse pesquisador foi reconhecido?",
    reflexao: { thiago: "Muito pão amanhecido, confesso. Agora virou torrada.", isa: "Arroz que sobra. Minha mãe transforma em bolinho. Gênio." }
  },
  25: {
    gancho: [
      ["isa", "Thiago, sabia que um dos livros mais vendidos do Brasil foi escrito em cadernos achados no lixo?"],
      ["thiago", "Sabia. E é um dos mais importantes da nossa literatura."],
      ["isa", "Que história é essa?"],
      ["thiago", "A história de Carolina Maria de Jesus."]
    ],
    duvida: "E por que quarto de despejo?",
    reflexao: { thiago: "As pessoas que limpam a rua bem cedo. Quase ninguém olha pra elas.", isa: "O senhor que vende água no sinal. Amanhã eu dou bom-dia." }
  },
  26: {
    gancho: [
      ["isa", "Thiago, a globalização não era pra deixar todo mundo conectado e igual?"],
      ["thiago", "Era a promessa."],
      ["isa", "E cadê?"],
      ["thiago", "O Milton Santos tem uma resposta em três palavras."]
    ],
    duvida: "Então a globalização é só coisa ruim?",
    reflexao: { thiago: "Me aproxima. Eu dou aula on-line pra alunos do Brasil inteiro.", isa: "Às vezes me afasta. O sinal da minha rua é um mistério." }
  },
  27: {
    gancho: [
      ["isa", "Thiago, se o PIB cresce, o país tá melhor, certo?"],
      ["thiago", "Depende: melhor pra quem?"],
      ["isa", "Como assim?"],
      ["thiago", "Um vencedor do Nobel tem uma ideia ótima sobre isso."]
    ],
    duvida: "E o que conta como falta de liberdade?",
    reflexao: { thiago: "A liberdade de escolher a minha profissão. Nem todo mundo teve.", isa: "Ter tempo pra estudar. Tem gente da minha idade que precisa trabalhar." }
  },
  28: {
    gancho: [
      ["isa", "Thiago, imagina que você vai nascer de novo, mas não sabe onde."],
      ["thiago", "Nem em que família, nem em que cidade?"],
      ["isa", "Nada. Que regras você ia querer pro mundo?"],
      ["thiago", "Isa, você acabou de explicar o John Rawls sem saber."]
    ],
    duvida: "E isso justifica tratar as pessoas de forma diferente?",
    reflexao: { thiago: "Escola boa pra todo mundo, sem depender do bairro onde a pessoa nasceu.", isa: "Eu mudaria o preço da passagem de ônibus. Tem mês que pesa." }
  },
  29: {
    gancho: [
      ["isa", "Minha avó tentou pedir um remédio pelo aplicativo e desistiu."],
      ["thiago", "E pediu ajuda?"],
      ["isa", "Pediu pra mim. E eu demorei três dias pra ajudar."],
      ["thiago", "Hoje é dia de falar de envelhecer com dignidade. Aliás, esse assunto caiu no ENEM de 2025."]
    ],
    duvida: "E o que é esse tal de etarismo?",
    reflexao: { thiago: "Minha avó me ensinou a ter paciência. Nenhum livro conseguiu.", isa: "A minha me ensinou a fazer bolo. E agora eu ensino ela a usar o aplicativo." }
  },
  30: {
    gancho: [
      ["isa", "Thiago, por que parece que tem tanta briga na escola ultimamente?"],
      ["thiago", "É uma pergunta grande. Mas um dos fundadores da sociologia ajuda a pensar."],
      ["isa", "Lá vem coisa do século dezenove."],
      ["thiago", "Que continua atual. Você vai ver."]
    ],
    duvida: "E o que acontece quando essas regras perdem a força?",
    reflexao: { thiago: "Meus alunos. E a ideia de que o texto deles pode mudar alguma coisa.", isa: "Meus amigos. E, agora, esse podcast." }
  }
};
