/*
 * Falas próprias de cada episódio do podcast em formato de conversa.
 * Apresentadores fictícios: Bia (professora de redação) e Téo (vestibulando).
 *
 * gancho:   abertura do papo com uma situação do dia a dia (falas alternadas)
 * duvida:   pergunta do Téo entre o 1º e o 2º parágrafo da leitura
 * reflexao: respostas da Bia e do Téo à pergunta para refletir do dia
 *
 * Só comentários e situações do cotidiano: os fatos do episódio vêm de content.js.
 */
window.CONVERSAS = {
  1: {
    gancho: [
      ["teo", "Bia, ontem eu fiz uma limpa nos meus seguidores. Uns duzentos foram embora num clique, sem dó."],
      ["bia", "E você sentiu falta de algum?"],
      ["teo", "Sinceramente? Nem lembro quem era."],
      ["bia", "Então você acabou de ilustrar o repertório de hoje."]
    ],
    duvida: "Mas o que a tecnologia tem a ver com isso? Relação descartável sempre existiu, né?",
    reflexao: { bia: "Eu diria que poucas. Talvez umas cinco. E são essas que importam.", teo: "Eu vou mandar mensagem pra um amigo antigo hoje. Sério." }
  },
  2: {
    gancho: [
      ["teo", "Confissão: eu montei um cronograma de estudo de dezesseis horas por dia."],
      ["bia", "Dezesseis?!"],
      ["teo", "Com dez minutos pra almoçar."],
      ["bia", "Téo, isso tem nome. E hoje a gente vai falar dele."]
    ],
    duvida: "Mas se ninguém tá me obrigando, como isso vira problema?",
    reflexao: { bia: "Eu cobro perfeição de mim em tudo. De um amigo, eu só cobraria que ele estivesse bem.", teo: "Vou refazer o cronograma. Com almoço de verdade." }
  },
  3: {
    gancho: [
      ["teo", "Bia, um amigo meu começou terapia e pediu pra eu não contar pra ninguém."],
      ["bia", "Por quê?"],
      ["teo", "Medo de acharem que ele é fraco."],
      ["bia", "Pois é. Esse medo tem nome na sociologia."]
    ],
    duvida: "E isso já caiu no ENEM?",
    reflexao: { bia: "Já ouvi que terapia é coisa de doido. Isso vem de pura desinformação.", teo: "E de medo. Mas cuidar da cabeça é igual cuidar do dente, né?" }
  },
  4: {
    gancho: [
      ["teo", "Sabia que teve uma psiquiatra que trocou choque elétrico por pincel e tinta?"],
      ["bia", "Sabia! E ela é brasileira."],
      ["teo", "Sério? Achei que era história de filme."],
      ["bia", "Virou filme também. Mas hoje a gente vai usar ela na redação."]
    ],
    duvida: "Tá, mas e a lei? O que mudou na prática?",
    reflexao: { bia: "Escrever sempre me ajudou. Acho que por isso virei professora de redação.", teo: "Pra mim é música. Fone no ouvido e o mundo fica mais leve." }
  },
  5: {
    gancho: [
      ["teo", "Bia, eu comentei sobre tênis com um amigo e no outro dia só me aparecia anúncio de tênis."],
      ["bia", "E você acha que o celular te ouviu?"],
      ["teo", "Sei lá. Mas que é estranho, é."],
      ["bia", "Estranho ou não, os dados que você deixa por aí já contam muita coisa. Bora entender."]
    ],
    duvida: "E onde entram as empresas de tecnologia nessa história?",
    reflexao: { bia: "Hoje me apareceu anúncio de caneta. Coincidência? Duvido.", teo: "Pra mim, anúncio de cursinho. Aí já é perseguição." }
  },
  6: {
    gancho: [
      ["teo", "Meu tio jura que todo mundo pensa igual a ele. Diz que na internet só vê gente concordando."],
      ["bia", "E ele está certo?"],
      ["teo", "Na timeline dele, está."],
      ["bia", "Então a gente achou o tema de hoje."]
    ],
    duvida: "Mas qual é o problema de ver só o que eu gosto?",
    reflexao: { bia: "Eu leio toda semana uma coluna de alguém de quem eu discordo. Dói, mas ajuda.", teo: "Vou tentar. Começando pelo meu tio." }
  },
  7: {
    gancho: [
      ["teo", "Fui à praia, tava nublado, e eu esperei dez minutos o sol aparecer só pra tirar a foto."],
      ["bia", "E aproveitou a praia?"],
      ["teo", "Aproveitei a foto."],
      ["bia", "Isso, meu caro, é a sociedade do espetáculo."]
    ],
    duvida: "Mas esse cara é dos anos sessenta! Como ele previu o Instagram?",
    reflexao: { bia: "Hoje eu tomei um café sem fotografar. Foi quase revolucionário.", teo: "Eu estudei duas horas e não postei. Mas contei aqui, então será que vale?" }
  },
  8: {
    gancho: [
      ["teo", "Bia, tem gente que diz que educação não resolve nada. Que é discurso bonito."],
      ["bia", "E tem gente que acha que a educação resolve tudo sozinha."],
      ["teo", "E aí, quem tá certo?"],
      ["bia", "O Paulo Freire tem uma frase perfeita pra isso."]
    ],
    duvida: "E isso tá garantido em lei ou é só ideia bonita?",
    reflexao: { bia: "A minha professora do ensino médio. Ela me fez gostar de ler.", teo: "Meu professor de história. Ele contava tudo como se fosse série." }
  },
  9: {
    gancho: [
      ["teo", "Tem um colega meu que já leu Machado de Assis inteiro. Com quinze anos."],
      ["bia", "E na casa dele tem muito livro?"],
      ["teo", "Uma biblioteca. O pai é professor."],
      ["bia", "Pois então. Hoje a gente fala de herança. Mas não de dinheiro."]
    ],
    duvida: "Mas aí ele não tem mérito nenhum?",
    reflexao: { bia: "Eu estudei numa escola pública muito boa. Nem todo mundo teve isso.", teo: "Eu tive internet em casa. Parece pouco, mas não é." }
  },
  10: {
    gancho: [
      ["teo", "Bia, aprendi a dar bom-dia em Libras essa semana."],
      ["bia", "Olha só! E você sabia que Libras não é mímica?"],
      ["teo", "Descobri tentando. Tem regra pra tudo."],
      ["bia", "Porque é uma língua completa. E é o assunto de hoje."]
    ],
    duvida: "E além dessa lei, tem outra que ajuda?",
    reflexao: { bia: "Eu sei me apresentar. Aprendi com uma aluna surda.", teo: "Vou aprender o meu nome hoje. Prometido." }
  },
  11: {
    gancho: [
      ["teo", "Na minha cidade não tem cinema. Pra ver filme na tela grande, é uma hora de ônibus."],
      ["bia", "E isso acontece em muita cidade brasileira."],
      ["teo", "Mas cultura não é direito?"],
      ["bia", "É. Tá até na Constituição. Bora falar disso."]
    ],
    duvida: "E quem tem cinema perto de casa? Aí tá tudo resolvido?",
    reflexao: { bia: "Teve um filme de escola que me fez repensar o jeito como eu dou aula.", teo: "Eu chorei num desenho animado. Não vou dizer qual." }
  },
  12: {
    gancho: [
      ["teo", "Bia, sabia que tem brasileiro que não tem nem certidão de nascimento?"],
      ["bia", "Sabia. E sem documento, até matricular na escola fica difícil."],
      ["teo", "Nossa. A pessoa meio que não existe pro Estado."],
      ["bia", "Exatamente. E tem um livro que resume isso numa expressão só."]
    ],
    duvida: "E esse repertório só serve pra esse tema?",
    reflexao: { bia: "O transporte público. A gente só lembra que é direito quando ele falta.", teo: "A internet da escola. Só lembro que existe quando cai." }
  },
  13: {
    gancho: [
      ["teo", "Vou votar pela primeira vez e confesso: nem sei quem são os vereadores da minha cidade."],
      ["bia", "Você não está sozinho."],
      ["teo", "Consolo meio triste, né?"],
      ["bia", "Mas tem explicação histórica. Bora lá."]
    ],
    duvida: "E como foi no Brasil?",
    reflexao: { bia: "Eu sei. Mas só porque fui atrás depois de uma eleição.", teo: "Vou pesquisar hoje. E vou acompanhar o que eles fazem." }
  },
  14: {
    gancho: [
      ["teo", "Bia, eu sou um homem cordial."],
      ["bia", "E você acha que isso é elogio?"],
      ["teo", "Claro! Cordial é educado, gentil..."],
      ["bia", "Então senta, que hoje a gente vai desfazer essa confusão."]
    ],
    duvida: "E onde isso aparece na política?",
    reflexao: { bia: "Gente furando fila no banco. Quem perdeu foi a senhora que estava atrás.", teo: "Carteirinha de estudante emprestada. No fim, quem perde é todo mundo que paga certo." }
  },
  15: {
    gancho: [
      ["teo", "Vi um vídeo humilhando um cara, e todo mundo compartilhando e rindo."],
      ["bia", "Você compartilhou?"],
      ["teo", "Quase. Aí parei pra pensar."],
      ["bia", "Esse parar pra pensar é exatamente o assunto de hoje."]
    ],
    duvida: "Mas gente comum fazendo o mal? Isso não é coisa de vilão de filme?",
    reflexao: { bia: "Hoje mesmo. Uma notícia que parecia ótima, mas era falsa.", teo: "Eu parei antes. Graças à Bia, inclusive." }
  },
  16: {
    gancho: [
      ["teo", "Minha irmã ganhou panelinha de brinquedo e eu ganhei carrinho. Ninguém perguntou o que a gente queria."],
      ["bia", "E ela queria o quê?"],
      ["teo", "Um kit de química."],
      ["bia", "Pois é. Hoje vem uma das frases mais famosas da filosofia."]
    ],
    duvida: "E quais papéis são esses, na prática?",
    reflexao: { bia: "Me disseram que matemática não era coisa de menina. Hoje eu faço planilha de nota de olhos fechados.", teo: "Me disseram que menino não chora. E eu chorei no desenho, já confessei." }
  },
  17: {
    gancho: [
      ["teo", "Bia, minha mãe trabalha fora, chega em casa e ainda faz janta, lava louça, confere meu dever..."],
      ["bia", "E isso tem nome."],
      ["teo", "Supermãe?"],
      ["bia", "Trabalho não pago. E esse assunto caiu no ENEM de 2023."]
    ],
    duvida: "Mas por que chamar isso de trabalho? É cuidado, é amor.",
    reflexao: { bia: "Lá em casa a gente dividiu as tarefas numa lista na geladeira. Mudou tudo.", teo: "Hoje a louça é minha. Anotado e gravado." }
  },
  18: {
    gancho: [
      ["teo", "Bia, eu achava que Maria da Penha era só o nome de uma lei."],
      ["bia", "É o nome de uma mulher real, com uma história muito forte."],
      ["teo", "Conta."],
      ["bia", "Conto. E depois a gente vê como usar isso na redação."]
    ],
    duvida: "E a lei fala só de agressão física?",
    reflexao: { bia: "Controlar o celular, ciúme excessivo, humilhar. Isso também é violência.", teo: "Muita coisa que eu achava normal tá nessa lista. Dá o que pensar." }
  },
  19: {
    gancho: [
      ["teo", "Ouvi alguém dizer: eu não sou racista, então o problema não é comigo."],
      ["bia", "E o que você achou?"],
      ["teo", "Fiquei na dúvida."],
      ["bia", "Hoje a gente tira essa dúvida."]
    ],
    duvida: "Mas se ninguém tem a intenção, como continua acontecendo?",
    reflexao: { bia: "No meu antigo trabalho, quase nenhuma. E ninguém comentava.", teo: "Vou reparar mais. Às vezes a resposta tá no que a gente não vê." }
  },
  20: {
    gancho: [
      ["teo", "Bia, sabia que a palavra cafuné vem de uma língua africana?"],
      ["bia", "Sabia. E tem muito mais: samba, capoeira, acarajé..."],
      ["teo", "Então a África tá no meu dia inteiro."],
      ["bia", "Tá. E esse assunto caiu no ENEM de 2024."]
    ],
    duvida: "E quem estudou isso a fundo?",
    reflexao: { bia: "A feijoada de sábado e o samba de domingo.", teo: "Cafuné. Que agora eu sei de onde vem." }
  },
  21: {
    gancho: [
      ["teo", "Bia, pra você, um rio é o quê?"],
      ["bia", "Água, natureza, paisagem..."],
      ["teo", "Pois tem povo que chama o rio de avô."],
      ["bia", "E é por aí que começa o episódio de hoje."]
    ],
    duvida: "E o que esse jeito de ver o mundo muda na prática?",
    reflexao: { bia: "Eu me sinto parte quando estou perto do mar.", teo: "Eu? Me sinto usando. Mas tô repensando." }
  },
  22: {
    gancho: [
      ["teo", "Tem gente que fala: quando o planeta esquentar de vez, eu nem vou estar aqui."],
      ["bia", "Mas alguém vai."],
      ["teo", "Os netos dessa pessoa, no caso."],
      ["bia", "Exatamente. Hoje o papo é responsabilidade com quem ainda nem nasceu."]
    ],
    duvida: "E a lei brasileira diz alguma coisa sobre isso?",
    reflexao: { bia: "Garrafa reutilizável. Já são anos com a mesma.", teo: "Banho mais curto. Minha mãe agradece antes das próximas gerações." }
  },
  23: {
    gancho: [
      ["teo", "Bia, choveu forte ontem e alagou a rua da minha avó. De novo."],
      ["bia", "E nos bairros mais ricos?"],
      ["teo", "Lá, provavelmente, tudo seco."],
      ["bia", "Então temos o tema: os riscos que a gente mesmo cria."]
    ],
    duvida: "Mas se o risco é global, ele não atinge todo mundo igual?",
    reflexao: { bia: "O calor extremo. A sala de aula vira um forno.", teo: "Alagamento, como eu falei. Já virou rotina." }
  },
  24: {
    gancho: [
      ["teo", "Bia, o Brasil não é um dos maiores produtores de comida do mundo?"],
      ["bia", "É."],
      ["teo", "Então como ainda tem gente passando fome?"],
      ["bia", "Essa pergunta tem quase oitenta anos de resposta. Bora."]
    ],
    duvida: "E esse pesquisador foi reconhecido?",
    reflexao: { bia: "Muito pão amanhecido, confesso. Agora virou torrada.", teo: "Arroz que sobra. Minha mãe transforma em bolinho. Gênio." }
  },
  25: {
    gancho: [
      ["teo", "Bia, sabia que um dos livros mais vendidos do Brasil foi escrito em cadernos achados no lixo?"],
      ["bia", "Sabia. E é um dos mais importantes da nossa literatura."],
      ["teo", "Que história é essa?"],
      ["bia", "A história de Carolina Maria de Jesus."]
    ],
    duvida: "E por que quarto de despejo?",
    reflexao: { bia: "As pessoas que limpam a rua bem cedo. Quase ninguém olha pra elas.", teo: "O senhor que vende água no sinal. Amanhã eu dou bom-dia." }
  },
  26: {
    gancho: [
      ["teo", "Bia, a globalização não era pra deixar todo mundo conectado e igual?"],
      ["bia", "Era a promessa."],
      ["teo", "E cadê?"],
      ["bia", "O Milton Santos tem uma resposta em três palavras."]
    ],
    duvida: "Então a globalização é só coisa ruim?",
    reflexao: { bia: "Me aproxima. Eu dou aula on-line pra alunos do Brasil inteiro.", teo: "Às vezes me afasta. O sinal da minha rua é um mistério." }
  },
  27: {
    gancho: [
      ["teo", "Bia, se o PIB cresce, o país tá melhor, certo?"],
      ["bia", "Depende: melhor pra quem?"],
      ["teo", "Como assim?"],
      ["bia", "Um vencedor do Nobel tem uma ideia ótima sobre isso."]
    ],
    duvida: "E o que conta como falta de liberdade?",
    reflexao: { bia: "A liberdade de escolher a minha profissão. Nem todo mundo teve.", teo: "Ter tempo pra estudar. Tem gente da minha idade que precisa trabalhar." }
  },
  28: {
    gancho: [
      ["teo", "Bia, imagina que você vai nascer de novo, mas não sabe onde."],
      ["bia", "Nem em que família, nem em que cidade?"],
      ["teo", "Nada. Que regras você ia querer pro mundo?"],
      ["bia", "Téo, você acabou de explicar o John Rawls sem saber."]
    ],
    duvida: "E isso justifica tratar as pessoas de forma diferente?",
    reflexao: { bia: "Escola boa pra todo mundo, sem depender do bairro onde a pessoa nasceu.", teo: "Eu mudaria o preço da passagem de ônibus. Tem mês que pesa." }
  },
  29: {
    gancho: [
      ["teo", "Minha avó tentou pedir um remédio pelo aplicativo e desistiu."],
      ["bia", "E pediu ajuda?"],
      ["teo", "Pediu pra mim. E eu demorei três dias pra ajudar."],
      ["bia", "Hoje é dia de falar de envelhecer com dignidade. Aliás, esse assunto caiu no ENEM de 2025."]
    ],
    duvida: "E o que é esse tal de etarismo?",
    reflexao: { bia: "Minha avó me ensinou a ter paciência. Nenhum livro conseguiu.", teo: "A minha me ensinou a fazer bolo. E agora eu ensino ela a usar o aplicativo." }
  },
  30: {
    gancho: [
      ["teo", "Bia, por que parece que tem tanta briga na escola ultimamente?"],
      ["bia", "É uma pergunta grande. Mas um dos fundadores da sociologia ajuda a pensar."],
      ["teo", "Lá vem coisa do século dezenove."],
      ["bia", "Que continua atual. Você vai ver."]
    ],
    duvida: "E o que acontece quando essas regras perdem a força?",
    reflexao: { bia: "Meus alunos. E a ideia de que o texto deles pode mudar alguma coisa.", teo: "Meus amigos. E, agora, esse podcast." }
  }
};
