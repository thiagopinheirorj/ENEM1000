/* 2º ano do Ensino Médio · Slides (12), mapas mentais (10) e aulas de emergência (12). */
(function () {
  "use strict";
  var H = window.BIBLIOTECA.h, Y = H.para("2EM"), ob = H.ob, dis = H.dis;

  /* ---------------- SLIDES ---------------- */
  Y.sl("sl-romantismo", "Slides · Romantismo: contexto e características", "8 slides: contexto, ideais e características gerais.", [
    { capa: true, t: "Romantismo no Brasil", sub: "1836 a 1881" },
    { t: "Contexto", li: ["Independência do Brasil (1822) e necessidade de identidade nacional", "Influência europeia: reação ao racionalismo", "Ascensão da burguesia e das cidades"] },
    { t: "Marco inicial", li: ["Suspiros Poéticos e Saudades (1836), de Gonçalves de Magalhães", "Fim: 1881 (Realismo)"] },
    { t: "Características", li: ["Subjetivismo e sentimentalismo", "Idealização da mulher, do amor e do herói", "Escapismo: infância, natureza, morte, passado", "Nacionalismo e exaltação da natureza", "Culto à liberdade"] },
    { t: "Linguagem", li: ["Emotiva, metafórica, musical", "Liberdade formal (menos rígida que o Classicismo)"] },
    { t: "Temas", li: ["Amor idealizado, natureza, pátria, indígena", "Morte e melancolia", "Liberdade e abolição (3ª geração)"] },
    { t: "Dois grandes campos", li: ["Poesia: três gerações", "Prosa: romances indianista, urbano, regionalista e histórico"] },
    { t: "Vamos praticar", li: ["Cite três características do Romantismo e um autor."], nota: "Resposta possível: subjetivismo, idealização, nacionalismo; Gonçalves Dias." }
  ], ["Literatura"]);

  Y.sl("sl-poesia-romantica", "Slides · Poesia romântica: as três gerações", "8 slides: nacionalista, ultrarromântica e condoreira.", [
    { capa: true, t: "Poesia romântica", sub: "As três gerações" },
    { t: "1ª geração (1836–1850): nacionalista e indianista", li: ["Gonçalves Dias, Gonçalves de Magalhães", "O indígena como herói nacional", "Exaltação da natureza e da pátria"], ex: "“Minha terra tem palmeiras, / Onde canta o Sabiá…” (Canção do Exílio, 1843)" },
    { t: "Gonçalves Dias", li: ["Canção do Exílio, I-Juca-Pirama, Os Timbiras", "Linguagem clássica e musical"] },
    { t: "2ª geração (1850–1860): ultrarromântica", li: ["Álvares de Azevedo, Casimiro de Abreu, Fagundes Varela, Junqueira Freire", "“Mal do século”: tédio, morte, amor impossível"], ex: "“Quando em meu peito rebentar-se a fibra…” (Álvares de Azevedo)" },
    { t: "Característica da 2ª geração", li: ["Subjetivismo extremo", "Escapismo (morte, infância)", "Pessimismo e dor"] },
    { t: "3ª geração (1860–1870): condoreira", li: ["Castro Alves, Sousândrade", "Poesia social e abolicionista", "Linguagem grandiosa; símbolo do condor"] },
    { t: "Castro Alves", li: ["O Navio Negreiro, Vozes d’África", "Denúncia da escravidão e defesa da liberdade"] },
    { t: "Comparando", li: ["1ª: pátria e herói · 2ª: dor e morte · 3ª: justiça social"] }
  ], ["Literatura"]);

  Y.sl("sl-prosa-romantica", "Slides · Prosa romântica", "7 slides: romance indianista, urbano, regionalista e histórico.", [
    { capa: true, t: "Prosa romântica", sub: "O romance no século XIX" },
    { t: "Contexto", li: ["Romances em folhetim, publicados em jornais", "Público leitor urbano e feminino em crescimento"] },
    { t: "José de Alencar: indianista", li: ["O Guarani (1857), Iracema (1865), Ubirajara (1874)", "Idealização do indígena e da natureza"] },
    { t: "Alencar: urbano, regionalista e histórico", li: ["Urbano: Lucíola (1862), Senhora (1875)", "Regionalista: O Gaúcho (1870), O Sertanejo (1875)", "Histórico: As Minas de Prata (1865)"] },
    { t: "Outros autores", li: ["Joaquim Manuel de Macedo: A Moreninha (1844)", "Manuel Antônio de Almeida: Memórias de um Sargento de Milícias (1852)", "Bernardo Guimarães: A Escrava Isaura (1875)", "Visconde de Taunay: Inocência (1872)"] },
    { t: "Linguagem", li: ["Alencar: poética e lírica", "Almeida: coloquial e humorística"] },
    { t: "Vamos praticar", li: ["Classifique: Iracema · Senhora · O Sertanejo · A Moreninha"], nota: "Respostas: indianista; urbano; regionalista; romance urbano de costumes." }
  ], ["Literatura"]);

  Y.sl("sl-realismo", "Slides · Realismo: contexto e características", "8 slides: contexto, objetividade, crítica social e comparação com o Romantismo.", [
    { capa: true, t: "Realismo no Brasil", sub: "1881 em diante" },
    { t: "Contexto", li: ["Abolição (1888) e República (1889)", "Positivismo, cientificismo e determinismo", "Industrialização e urbanização na Europa e no Brasil"] },
    { t: "Marco inicial", li: ["Memórias Póstumas de Brás Cubas (1881), de Machado de Assis", "O Mulato (1881), de Aluísio Azevedo (Naturalismo)"] },
    { t: "Características", li: ["Objetividade e observação da realidade", "Análise psicológica", "Crítica social e ao casamento por interesse", "Linguagem direta, irônica e analítica"] },
    { t: "Temas", li: ["Adultério, hipocrisia, ambição, interesse, doença", "Vida urbana e burguesa"] },
    { t: "Personagens", li: ["Pessoas comuns, ambíguas, movidas por interesse", "Narrador crítico ou pouco confiável"] },
    { t: "Romantismo × Realismo", li: ["Idealização × objetividade", "Emoção × análise", "Herói × anti-herói"] },
    { t: "Vamos praticar", li: ["Cite duas diferenças entre Romantismo e Realismo."], nota: "Resposta possível: idealização × objetividade; emoção × análise crítica." }
  ], ["Literatura"]);

  Y.sl("sl-machado", "Slides · Machado de Assis", "8 slides: fases, romances, contos, ironia e narradores.", [
    { capa: true, t: "Machado de Assis", sub: "1839–1908" },
    { t: "Vida", li: ["Rio de Janeiro; origem humilde, autodidata", "Fundador e 1º presidente da Academia Brasileira de Letras (1897)"] },
    { t: "Fase romântica", li: ["Ressurreição (1872), A Mão e a Luva (1874), Helena (1876), Iaiá Garcia (1878)"] },
    { t: "Fase realista", li: ["Memórias Póstumas de Brás Cubas (1881)", "Quincas Borba (1891)", "Dom Casmurro (1899)", "Esaú e Jacó (1904) · Memorial de Aires (1908)"] },
    { t: "Contos", li: ["O Alienista · A Cartomante · Missa do Galo · Pai contra Mãe"] },
    { t: "Ironia e narradores", li: ["Defunto-autor (Brás Cubas)", "Narrador pouco confiável (Bentinho)", "Ironia como crítica social"] },
    { t: "Temas", li: ["Vaidade, interesse, ciúme, loucura, acaso", "Crítica às elites e à escravidão (em contos e crônicas)"] },
    { t: "Vamos praticar", li: ["Explique a ambiguidade de Dom Casmurro."], nota: "Resposta: não se sabe se Capitu traiu, pois só conhecemos a versão de Bentinho." }
  ], ["Literatura"]);

  Y.sl("sl-naturalismo", "Slides · Naturalismo", "7 slides: determinismo, cientificismo e principais obras.", [
    { capa: true, t: "Naturalismo", sub: "O romance como experimento científico" },
    { t: "Contexto", li: ["Influência de Darwin, Comte e Taine", "Ciência e determinismo", "Modelo: Émile Zola (França)"] },
    { t: "Determinismo", li: ["O comportamento humano é determinado por: **meio**, **raça**, **momento histórico**", "Linguagem e personagens vistos como casos"] },
    { t: "Características", li: ["Cientificismo e observação", "Descrição minuciosa", "Foco em doença, instintos, miséria, sexualidade", "Personagem coletivo (cortiço)"] },
    { t: "Aluísio Azevedo", li: ["O Mulato (1881) · Casa de Pensão (1884)", "O Cortiço (1890)"] },
    { t: "Outros autores", li: ["Raul Pompeia: O Ateneu (1888, de caráter impressionista)", "Adolfo Caminha: Bom-Crioulo (1895)", "Inglês de Sousa: O Missionário (1891)"] },
    { t: "Vamos praticar", li: ["O que significa determinismo?"], nota: "Resposta: o comportamento é determinado pelo meio, pela raça e pelo momento." }
  ], ["Literatura"]);

  Y.sl("sl-parnasianismo", "Slides · Parnasianismo", "7 slides: arte pela arte, forma e tríade parnasiana.", [
    { capa: true, t: "Parnasianismo", sub: "A poesia como arte da forma" },
    { t: "Contexto", li: ["Marco: Fanfarras (1882), de Teófilo Dias", "Reação ao sentimentalismo romântico", "Influência francesa"] },
    { t: "Princípios", li: ["**Arte pela arte**", "Culto à forma, rigor métrico e rima", "Vocabulário rebuscado", "Objetividade e impessoalidade"] },
    { t: "Temas", li: ["Mitologia, natureza, objetos de arte, o próprio fazer poético"] },
    { t: "Tríade parnasiana", li: ["Olavo Bilac", "Alberto de Oliveira", "Raimundo Correia"] },
    { t: "Bilac", li: ["Poesias (1888)", "Via Láctea · Profissão de Fé", "Soneto com chave de ouro"] },
    { t: "Vamos praticar", li: ["Explique “arte pela arte”."], nota: "Resposta: a arte vale por si mesma, pela perfeição da forma, e não por servir a causas." }
  ], ["Literatura"]);

  Y.sl("sl-simbolismo", "Slides · Simbolismo", "7 slides: musicalidade, sugestão, Cruz e Sousa e Alphonsus de Guimaraens.", [
    { capa: true, t: "Simbolismo", sub: "A poesia da sugestão" },
    { t: "Contexto", li: ["Marco: Broquéis (1893), de Cruz e Sousa", "Reação ao cientificismo e ao Parnasianismo", "Influência francesa (Baudelaire, Mallarmé)"] },
    { t: "Características", li: ["Subjetivismo e misticismo", "Musicalidade (aliteração, assonância)", "Sinestesia e sugestão", "Imagens vagas, brancas, noturnas"] },
    { t: "Cruz e Sousa", li: ["Broquéis, Missal (1893), Faróis, Últimos Sonetos", "Temas: sofrimento, transcendência, negritude e preconceito"] },
    { t: "Alphonsus de Guimaraens", li: ["Setenário das Dores de Nossa Senhora (1899), Kyriale", "Misticismo, morte e amor ideal", "“Ismália”"] },
    { t: "Parnasianismo × Simbolismo", li: ["Forma objetiva × sugestão", "Clareza × vagueza", "Razão × espiritualidade"] },
    { t: "Vamos praticar", li: ["Qual figura aparece em “voz doce”?"], nota: "Resposta: sinestesia." }
  ], ["Literatura"]);

  Y.sl("sl-eca-realismo-portugues", "Slides · Realismo português e Eça de Queirós", "7 slides: Questão Coimbrã, conferências do Cassino e obras de Eça.", [
    { capa: true, t: "Realismo português", sub: "Eça de Queirós e a geração de 70" },
    { t: "Contexto", li: ["Questão Coimbrã (1865): polêmica entre românticos e jovens", "Conferências do Cassino (1871)", "Crítica à sociedade e à Igreja"] },
    { t: "Eça de Queirós", li: ["O Crime do Padre Amaro (1875)", "O Primo Basílio (1878)", "Os Maias (1888)", "A Cidade e as Serras (1901)"] },
    { t: "O Primo Basílio", li: ["Adultério, hipocrisia e educação romântica das mulheres", "Críticas à burguesia lisboeta"] },
    { t: "Antero de Quental", li: ["Poeta e ensaísta", "Sonetos filosóficos e pessimismo"] },
    { t: "Características", li: ["Objetividade, ironia e crítica social", "Descrição detalhada", "Personagens verossímeis"] },
    { t: "Vamos praticar", li: ["Que crítica Eça faz em O Primo Basílio?"], nota: "Resposta: hipocrisia da burguesia e educação romântica das mulheres." }
  ], ["Literatura"]);

  Y.sl("sl-tipos-argumento", "Slides · Tipos de argumento", "7 slides: exemplificação, autoridade, causa-consequência, comparação e repertório.", [
    { capa: true, t: "Tipos de argumento", sub: "Como sustentar uma tese" },
    { t: "Exemplificação", li: ["Caso concreto que ilustra a ideia", "“Notícias falsas sobre saúde circulam em grupos de família.”"] },
    { t: "Autoridade", li: ["Especialista, lei, obra, pesquisa", "“Segundo a Constituição, a saúde é direito de todos.”"] },
    { t: "Causa e consequência", li: ["Explica por que ocorre e o que decorre", "“Como os algoritmos priorizam engajamento, boatos se espalham.”"] },
    { t: "Comparação", li: ["Relaciona dois fatos para esclarecer um deles", "“A desinformação é como um vírus…”"] },
    { t: "Repertório produtivo", li: ["Apresentar · explicar · relacionar ao tema", "Evite a citação “solta”"] },
    { t: "Atividade", li: ["Escreva um argumento de causa-consequência sobre o uso de telas."], nota: "Peça que algumas duplas leiam e a turma identifique a relação de causa e efeito." }
  ], ["Redação"]);

  Y.sl("sl-coesao-progressao", "Slides · Coesão e progressão textual", "7 slides: conectivos, retomadas e articulação entre parágrafos.", [
    { capa: true, t: "Coesão e progressão", sub: "Como o texto avança" },
    { t: "Coesão referencial", li: ["Pronomes, sinônimos, hiperônimos", "Anáfora (retoma) e catáfora (antecipa)"] },
    { t: "Coesão sequencial", li: ["Adição: além disso, ademais", "Oposição: contudo, no entanto", "Causa: visto que, uma vez que", "Conclusão: portanto, dessa forma"] },
    { t: "Articulação entre parágrafos", li: ["Cada parágrafo começa por conectivo ou retomada", "Evitar repetir o mesmo conectivo"] },
    { t: "Progressão", li: ["Cada parágrafo acrescenta informação nova", "Evite circularidade"] },
    { t: "Coerência", li: ["Sentido lógico", "Sem contradições"] },
    { t: "Atividade", li: ["Una os parágrafos: “A leitura é essencial. A escola dispõe de poucos livros.”"], nota: "Resposta possível: A leitura é essencial; no entanto, a escola dispõe de poucos livros." }
  ], ["Redação", "Gramática"]);

  Y.sl("sl-subordinacao-revisao", "Slides · Revisão: orações subordinadas", "7 slides: substantivas, adjetivas, adverbiais e reduzidas.", [
    { capa: true, t: "Subordinação", sub: "Revisão" },
    { t: "Substantivas", li: ["Subjetiva, objetiva direta e indireta", "Completiva nominal, predicativa, apositiva", "Com **que** ou **se**"] },
    { t: "Adjetivas", li: ["Restritiva: sem vírgula", "Explicativa: entre vírgulas", "Pronome relativo (que, quem, cujo, onde, o qual)"] },
    { t: "Adverbiais", li: ["Causa, consequência, condição, concessão", "Tempo, finalidade, comparação, conformidade, proporção"] },
    { t: "Reduzidas", li: ["Infinitivo: Ao chegar, saudou todos.", "Gerúndio: Chegando, saudou todos.", "Particípio: Terminado o trabalho, saiu."] },
    { t: "Pontuação", li: ["Adverbial antes da principal: vírgula", "Nunca entre sujeito e verbo"] },
    { t: "Vamos praticar", li: ["Classifique: “Embora estivesse cansado, saiu.” · “O livro de que gosto é ótimo.” · “É preciso que você estude.”"], nota: "Respostas: adverbial concessiva; adjetiva restritiva; substantiva subjetiva." }
  ], ["Gramática"]);

  /* ---------------- MAPAS MENTAIS ---------------- */
  Y.mp("mp-romantismo", "Mapa mental · Romantismo", "Contexto, características, poesia e prosa.", {
    centro: "Romantismo", ramos: [
      { t: "Contexto", itens: ["1836 a 1881", "Independência, Império"] },
      { t: "Características", itens: ["subjetivismo, idealização", "escapismo, nacionalismo"] },
      { t: "Poesia", itens: ["3 gerações", "Gonçalves Dias, Álvares, Castro Alves"] },
      { t: "Prosa", itens: ["indianista, urbano, regionalista, histórico", "Alencar, Macedo, Almeida"] },
      { t: "Temas", itens: ["amor, natureza, pátria, morte, liberdade"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-geracoes-romanticas", "Mapa mental · As três gerações da poesia romântica", "Nacionalista, ultrarromântica e condoreira.", {
    centro: "Poesia romântica", ramos: [
      { t: "1ª geração", itens: ["nacionalista e indianista", "Gonçalves Dias"] },
      { t: "2ª geração", itens: ["ultrarromântica", "Álvares de Azevedo, Casimiro de Abreu", "mal do século"] },
      { t: "3ª geração", itens: ["condoreira, social", "Castro Alves", "abolicionismo"] },
      { t: "Marco", itens: ["1836: Suspiros Poéticos e Saudades"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-prosa-romantica", "Mapa mental · Prosa romântica", "Romances de Alencar, Macedo, Almeida, Guimarães e Taunay.", {
    centro: "Prosa romântica", ramos: [
      { t: "Indianista", itens: ["O Guarani, Iracema", "Alencar"] },
      { t: "Urbano", itens: ["Lucíola, Senhora", "A Moreninha (Macedo)"] },
      { t: "Regionalista", itens: ["O Sertanejo, O Gaúcho", "Inocência (Taunay)"] },
      { t: "Histórico", itens: ["As Minas de Prata"] },
      { t: "Costumes", itens: ["Memórias de um Sargento de Milícias", "A Escrava Isaura"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-realismo", "Mapa mental · Realismo", "Contexto, características, autores e comparação com o Romantismo.", {
    centro: "Realismo", ramos: [
      { t: "Contexto", itens: ["Abolição, República", "positivismo e cientificismo"] },
      { t: "Marco", itens: ["Memórias Póstumas (1881)"] },
      { t: "Características", itens: ["objetividade, análise psicológica", "crítica social, ironia"] },
      { t: "Autores", itens: ["Machado de Assis", "Eça de Queirós (Portugal)"] },
      { t: "× Romantismo", itens: ["idealização × crítica", "emoção × análise"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-machado", "Mapa mental · Machado de Assis", "Fases, obras, narradores e temas.", {
    centro: "Machado de Assis", ramos: [
      { t: "Fase romântica", itens: ["Ressurreição, Helena, Iaiá Garcia"] },
      { t: "Fase realista", itens: ["Memórias Póstumas, Quincas Borba", "Dom Casmurro, Esaú e Jacó"] },
      { t: "Contos", itens: ["O Alienista, A Cartomante", "Missa do Galo"] },
      { t: "Narradores", itens: ["defunto-autor", "narrador pouco confiável"] },
      { t: "Temas", itens: ["vaidade, interesse, ciúme, acaso", "ironia e crítica social"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-naturalismo", "Mapa mental · Naturalismo", "Determinismo, obras e autores.", {
    centro: "Naturalismo", ramos: [
      { t: "Influências", itens: ["Darwin, Comte, Taine", "Zola"] },
      { t: "Determinismo", itens: ["meio, raça, momento"] },
      { t: "Características", itens: ["cientificismo, descrição minuciosa", "instintos, miséria, doença"] },
      { t: "Aluísio Azevedo", itens: ["O Mulato, Casa de Pensão", "O Cortiço"] },
      { t: "Outros", itens: ["Raul Pompeia (O Ateneu)", "Adolfo Caminha (Bom-Crioulo)"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-parnasianismo", "Mapa mental · Parnasianismo", "Princípios, autores e características formais.", {
    centro: "Parnasianismo", ramos: [
      { t: "Marco", itens: ["Fanfarras (1882)", "Teófilo Dias"] },
      { t: "Princípios", itens: ["arte pela arte", "objetividade, impessoalidade"] },
      { t: "Forma", itens: ["rigor métrico e rima", "soneto com chave de ouro"] },
      { t: "Tríade", itens: ["Olavo Bilac", "Alberto de Oliveira", "Raimundo Correia"] },
      { t: "Temas", itens: ["mitologia, natureza, arte"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-simbolismo", "Mapa mental · Simbolismo", "Características, autores e contraste com o Parnasianismo.", {
    centro: "Simbolismo", ramos: [
      { t: "Marco", itens: ["Broquéis (1893)", "Cruz e Sousa"] },
      { t: "Características", itens: ["musicalidade, sugestão", "sinestesia, misticismo"] },
      { t: "Cruz e Sousa", itens: ["Broquéis, Missal, Faróis", "sofrimento e transcendência"] },
      { t: "Alphonsus de Guimaraens", itens: ["Setenário das Dores", "Ismália"] },
      { t: "× Parnasianismo", itens: ["sugestão × forma objetiva"] }
    ]
  }, ["Literatura"]);

  Y.mp("mp-tipos-argumento", "Mapa mental · Tipos de argumento", "Estratégias para sustentar uma tese.", {
    centro: "Argumentos", ramos: [
      { t: "Exemplificação", itens: ["caso concreto"] },
      { t: "Autoridade", itens: ["especialista, lei, obra"] },
      { t: "Causa e consequência", itens: ["por que ocorre e o que decorre"] },
      { t: "Comparação", itens: ["relaciona dois fatos"] },
      { t: "Repertório", itens: ["apresentar, explicar, relacionar"] }
    ]
  }, ["Redação"]);

  Y.mp("mp-subordinacao", "Mapa mental · Orações subordinadas", "Substantivas, adjetivas, adverbiais e reduzidas.", {
    centro: "Subordinação", ramos: [
      { t: "Substantivas", itens: ["seis funções", "que, se"] },
      { t: "Adjetivas", itens: ["restritiva, explicativa", "que, quem, cujo, onde, o qual"] },
      { t: "Adverbiais", itens: ["causa, consequência, condição, concessão", "tempo, finalidade, comparação, conformidade, proporção"] },
      { t: "Reduzidas", itens: ["infinitivo, gerúndio, particípio"] }
    ]
  }, ["Gramática"]);

  /* ---------------- AULAS DE EMERGÊNCIA ---------------- */
  function E(id, titulo, resumo, blocos, assunto) {
    if (id.indexOf("quiz") === 0) {
      var alvo = [2, 0, 3, 1, 3, 0, 1, 2, 3, 1, 0, 2, 1, 3, 0], k = 0;
      blocos.forEach(function (b) {
        if (b.k !== "q") return;
        b.it.forEach(function (q) {
          if (!q.alt) return;
          var t = alvo[k++ % alvo.length] % q.alt.length, tmp = q.alt[t];
          q.alt[t] = q.alt[q.g]; q.alt[q.g] = tmp; q.g = t;
        });
      });
    }
    Y.m("emergencia", "e-" + id, titulo, assunto || ["Literatura"], resumo, blocos, "50 min");
  }
  var pl = H.pl;

  E("stop-literatura", "Aula de 50 minutos: Stop de literatura do século XIX", "Jogo de revisão: autor, obra, movimento e característica por letra sorteada.", [
    H.i("**Antes da aula:** imprima a ficha, uma por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Sorteie uma letra. Cada grupo escreve um autor, uma obra, o movimento e uma característica que comecem pela letra ou a ela se relacionem." },
      { min: "30", t: "5 rodadas", d: "4 minutos por rodada, com correção no quadro." },
      { min: "10", t: "Contagem", d: "Cada item correto vale 2 pontos." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase ligando um autor ao movimento." }
    ]),
    H.tab("Ficha", ["Rodada · letra", "Autor", "Obra", "Movimento", "Característica", "Pontos"], [["1 · ___", "", "", "", "", ""], ["2 · ___", "", "", "", "", ""], ["3 · ___", "", "", "", "", ""], ["4 · ___", "", "", "", "", ""], ["5 · ___", "", "", "", "", ""], [{ t: "Total" }, "", "", "", "", ""]]),
    H.pf("Letras sugeridas", ["A (Alencar, Azevedo), C (Castro Alves, Cruz e Sousa), M (Machado), B (Bilac), I (Iracema), O (O Cortiço)."])
  ], ["Literatura"]);

  E("bingo-obras", "Aula de 50 minutos: bingo de obras e autores", "O professor lê dicas; os alunos marcam a obra ou o autor correspondente.", [
    H.i("**Antes da aula:** imprima uma cartela por aluno e escreva a lista no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno preenche a cartela com 9 itens da lista." },
      { min: "35", t: "Rodadas", d: "Leia uma dica. Linha = 1 ponto; cartela cheia = 3." },
      { min: "10", t: "Fechamento", d: "Cada aluno escreve uma dica sobre um item que não saiu." }
    ]),
    H.tab("Cartela", ["", "", ""], [["", "", ""], ["", "", ""], ["", "", ""]]),
    H.te("Lista no quadro", ["Iracema · O Cortiço · Dom Casmurro · Memórias Póstumas · O Navio Negreiro · Broquéis · Ismália · Via Láctea · O Ateneu · A Moreninha · Senhora · O Primo Basílio · Gonçalves Dias · Castro Alves · Cruz e Sousa"]),
    H.pf("Dicas para ler", ["Romance indianista de Alencar (Iracema). Romance naturalista sobre habitação coletiva (O Cortiço). Narrador Bentinho (Dom Casmurro). Defunto-autor (Memórias Póstumas). Poesia condoreira abolicionista (Navio Negreiro, Castro Alves). Marco do Simbolismo (Broquéis). Poema sobre duas luas (Ismália). Soneto sobre ouvir estrelas (Via Láctea). Romance sobre a vida no colégio (O Ateneu). Romance urbano de Alencar (Senhora). Obra de Eça sobre adultério (O Primo Basílio)."])
  ], ["Literatura"]);

  E("caca-erro-redacao", "Aula de 50 minutos: caça ao erro em uma redação", "Revisão em duplas de um parágrafo com problemas de argumentação, coesão e norma culta.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise: tese, argumento, repertório e conectivos." },
      { min: "15", t: "Caça aos erros", d: "As duplas sublinham os problemas." },
      { min: "15", t: "Correção coletiva", d: "Cada dupla corrige um problema e explica a regra." },
      { min: "10", t: "Reescrita", d: "Cada aluno reescreve o parágrafo." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota o erro que mais cometeu." }
    ]),
    H.t("Parágrafo com problemas", "A saúde mental dos jovens é um tema muito importante hoje em dia. Fazem muitos anos que ela é esquecida e os governos tem que ajudar. Pois muita gente sofre e não procura ajuda porque tem vergonha. Então, é necessário que as escolas façam alguma coisa pra resolver isso.", "Texto original, com problemas propositais"),
    H.qs([dis("Reescreva o parágrafo corrigido, com argumento e repertório.", "Resposta pessoal. Modelo: “A saúde mental dos jovens é, historicamente, negligenciada no Brasil. Como estabelece a Constituição, a saúde é direito de todos e dever do Estado; contudo, muitos estudantes não procuram ajuda por vergonha ou por falta de acolhimento. Nesse sentido, é necessário que as escolas ofereçam espaços de escuta…”", 8)]),
    H.pf("Problemas", ["abertura genérica; //fazem muitos anos//; //os governos tem//; //pois// no início; falta de argumento e repertório; //pra//; proposta vaga."])
  ], ["Redação", "Gramática"]);

  E("debate-capitu", "Aula de 50 minutos: debate “Capitu traiu Bentinho?”", "Debate literário regrado com argumentos baseados em trechos de Dom Casmurro.", [
    H.i("**Antes da aula:** divida a turma em dois lados."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise: Bentinho é narrador em primeira pessoa; só conhecemos sua versão." },
      { min: "10", t: "Preparação", d: "Cada lado anota dois argumentos com trechos do romance." },
      { min: "20", t: "Debate", d: "Duas rodadas, 1 minuto por fala. Cada fala traz um trecho." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um parágrafo com sua posição." },
      { min: "5", t: "Fechamento", d: "Síntese: o que a ambiguidade revela sobre o narrador?" }
    ]),
    H.tab("Ficha", ["Lado", "Tese", "Trecho + interpretação", "Contra-argumento"], [["Traiu", "", "", ""], ["Há dúvida / não traiu", "", "", ""]]),
    H.ln("Meu parágrafo", 8)
  ], ["Literatura", "Redação"]);

  E("juri-joao-romao", "Aula de 50 minutos: júri de João Romão", "Júri simulado a partir de O Cortiço: quem é responsável pela miséria do cortiço?", [
    H.i("**Antes da aula:** imprima o resumo; divida a turma em acusação, defesa e júri."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “Quem é responsável pelas condições de vida de quem mora em um cortiço?”" },
      { min: "10", t: "Leitura", d: "Leia o resumo em voz alta." },
      { min: "10", t: "Preparação", d: "Grupos anotam argumentos com base no texto e no contexto." },
      { min: "20", t: "Julgamento", d: "Acusação e defesa falam; o júri decide." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve uma frase relacionando o Naturalismo à crítica social." }
    ]),
    H.t("Resumo", "O português João Romão enriquece explorando o trabalho de Bertoleza e construindo um cortiço, que cresce e se torna um organismo vivo. Ao final, já rico, tenta se aproximar da elite, enquanto Bertoleza, abandonada, se mata.", "Resumo de O Cortiço, de Aluísio Azevedo"),
    H.tab("Ficha", ["Grupo", "Argumento 1", "Argumento 2"], [["Acusação", "", ""], ["Defesa", "", ""], ["Júri (perguntas)", "", ""]]),
    H.pf("Dica", ["Aproveite para discutir determinismo × responsabilidade individual."])
  ], ["Literatura", "Interpretação"]);

  E("quiz-literatura", "Aula de 50 minutos: quiz relâmpago de literatura do 2º ano", "Quinze questões rápidas do Romantismo ao Simbolismo, em duplas, com correção coletiva.", [
    H.i("**Antes da aula:** imprima uma folha por dupla."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada dupla marca uma letra por questão." },
      { min: "20", t: "Quiz", d: "As duplas resolvem as 15 questões." },
      { min: "20", t: "Correção", d: "Corrija no quadro e peça explicações." },
      { min: "5", t: "Fechamento", d: "Cada dupla anota a questão mais difícil." }
    ]),
    H.qs([
      ob("O marco do Romantismo no Brasil é:", "Suspiros Poéticos e Saudades (1836)|Memórias Póstumas (1881)|Broquéis (1893)|Iracema", "A"),
      ob("A 1ª geração romântica é:", "nacionalista e indianista|ultrarromântica|condoreira|simbolista", "A"),
      ob("A 2ª geração romântica é:", "nacionalista e indianista|ultrarromântica|condoreira|parnasiana", "B"),
      ob("Castro Alves pertence à geração:", "nacionalista|ultrarromântica|condoreira|simbolista", "C"),
      ob("Iracema é de:", "José de Alencar|Machado de Assis|Aluísio Azevedo|Raul Pompeia", "A"),
      ob("O marco do Realismo no Brasil é:", "Memórias Póstumas de Brás Cubas|Iracema|Broquéis|O Cortiço", "A"),
      ob("O narrador de Memórias Póstumas é:", "um defunto-autor|Bentinho|Capitu|um menino", "A"),
      ob("O Cortiço pertence ao:", "Naturalismo|Romantismo|Simbolismo|Arcadismo", "A"),
      ob("O determinismo considera que o comportamento é determinado por:", "meio, raça e momento|apenas pela vontade|apenas pela religião|apenas pelo acaso", "A"),
      ob("O Parnasianismo valoriza:", "a forma e a objetividade|a sugestão|o nacionalismo|o mal do século", "A"),
      ob("A tríade parnasiana é:", "Bilac, Alberto de Oliveira e Raimundo Correia|Camões, Bocage e Gonzaga|Cruz e Sousa, Alphonsus e Pessanha|Alencar, Macedo e Taunay", "A"),
      ob("O marco do Simbolismo no Brasil é:", "Broquéis (1893)|Fanfarras (1882)|Iracema|Memórias Póstumas", "A"),
      ob("Cruz e Sousa é poeta:", "simbolista|parnasiano|romântico|árcade", "A"),
      ob("“Voz doce” é uma:", "sinestesia|catacrese|ironia|elipse", "A"),
      ob("Dom Casmurro é narrado por:", "Bentinho|Capitu|Escobar|José Dias", "A")
    ]),
    H.pf("Dica", ["O gabarito completo aparece ao final desta folha na versão do professor. Proponha que a dupla com mais acertos escolha o próximo jogo."])
  ], ["Literatura"]);

  E("tese-relampago", "Aula de 50 minutos: tese relâmpago com argumentos", "Os alunos escrevem teses e argumentos em minutos e avaliam em pares.", [
    H.i("**Antes da aula:** escreva os temas no quadro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Revise: tese + dois argumentos de tipos diferentes." },
      { min: "15", t: "Escrita", d: "Para três temas, cada aluno escreve tese e dois argumentos (um de causa-consequência e um de autoridade)." },
      { min: "15", t: "Troca", d: "Em duplas, avaliam com o checklist." },
      { min: "10", t: "Seleção", d: "A turma escolhe as melhores e justifica." },
      { min: "5", t: "Fechamento", d: "Cada aluno reescreve a sua pior tese." }
    ]),
    H.te("Temas", ["Saúde mental dos jovens", "Mobilidade urbana", "Inclusão de pessoas com deficiência", "Desinformação nas redes"]),
    H.tab("Checklist", ["Critério", "Sim / Não"], [["Tese específica e defensável", ""], ["Argumento 1 desenvolvido", ""], ["Argumento 2 de tipo diferente", ""], ["Repertório pertinente", ""]]),
    H.ln("Minhas teses e argumentos", 10)
  ], ["Redação"]);

  E("roda-simbolismo", "Aula de 50 minutos: roda de leitura de poemas simbolistas", "Leitura expressiva de Cruz e Sousa e Alphonsus de Guimaraens, análise e escrita.", [
    H.i("**Antes da aula:** imprima os poemas, uma cópia por aluno."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Pergunte: “O que a lua evoca em vocês?”" },
      { min: "10", t: "Leitura", d: "Leia os poemas em voz alta; depois em coro." },
      { min: "15", t: "Questões em duplas", d: "As duplas respondem às questões." },
      { min: "15", t: "Criação", d: "Cada aluno escreve um quarteto simbolista sobre a lua ou a noite." },
      { min: "5", t: "Fechamento", d: "Voluntários leem." }
    ]),
    H.poema("Ismália (trecho)", "Quando Ismália enlouqueceu,\nPôs-se na torre a sonhar...\nViu uma lua no céu,\nViu outra lua no mar.", "Alphonsus de Guimaraens"),
    H.poema("Antífona (abertura)", "Ó Formas alvas, brancas, Formas claras\nDe luares, de neves, de neblinas!...\nÓ Formas vagas, fluidas, cristalinas...\nIncensos dos turíbulos das aras", "Cruz e Sousa"),
    H.qs([
      ob("A repetição de “Ó Formas” em Antífona é:", "anáfora|elipse|zeugma|ironia", "A"),
      ob("As duas luas de Ismália simbolizam:", "o ideal e o reflexo|duas cidades|dois dias|dois amantes", "A"),
      dis("Escreva um quarteto simbolista, com sinestesia e musicalidade.", "Resposta pessoal.", 5)
    ])
  ], ["Literatura", "Interpretação"]);

  E("cartas-repertorio", "Aula de 50 minutos: cartas de repertório", "Os alunos usam cartões de repertório para construir teses e argumentos.", [
    H.i("**Antes da aula:** recorte cartões; cada aluno recebe 3."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada cartão traz um repertório e sua ideia central." },
      { min: "20", t: "Criação", d: "Em duplas, escolhem um tema e usam dois cartões para montar tese e argumento." },
      { min: "15", t: "Apresentação", d: "A turma avalia a pertinência." },
      { min: "10", t: "Escrita", d: "Cada aluno escreve um parágrafo com repertório." }
    ]),
    H.tab("Modelo de cartão", ["Repertório", "Ideia central", "Temas"], [["Machado de Assis, Dom Casmurro", "Ambiguidade e subjetividade da memória", "verdade, versões, desinformação"], ["Aluísio Azevedo, O Cortiço", "O meio social molda o comportamento", "desigualdade, moradia"], ["Constituição, art. 196", "Saúde, direito de todos", "saúde pública"], ["", "", ""], ["", "", ""]]),
    H.ln("Meu parágrafo com repertório", 8)
  ], ["Redação"]);

  E("linha-tempo-humana", "Aula de 50 minutos: linha do tempo humana do século XIX", "Os alunos se organizam em ordem cronológica segundo cartões de obras e movimentos.", [
    H.i("**Antes da aula:** imprima cartões; espaço livre na sala."),
    pl("Roteiro", [
      { min: "5", t: "Regras", d: "Cada aluno recebe um cartão e se organiza em silêncio, em ordem cronológica." },
      { min: "15", t: "Montagem", d: "Depois, cada um lê seu cartão." },
      { min: "20", t: "Conexões", d: "Cada aluno explica a relação com o vizinho (influência, oposição, continuidade)." },
      { min: "10", t: "Registro", d: "Cada aluno escreve três ligações que descobriu." }
    ]),
    H.te("Cartões", ["Suspiros Poéticos e Saudades (1836) · Canção do Exílio (1843) · A Moreninha (1844) · Iracema (1865) · Memórias Póstumas (1881) · Fanfarras (1882) · O Ateneu (1888) · O Cortiço (1890) · Broquéis (1893) · Dom Casmurro (1899)"]),
    H.ln("Ligações que descobri", 6)
  ], ["Literatura"]);

  E("revisao-pares", "Aula de 50 minutos: revisão de redação em pares", "Cada aluno revisa a redação de um colega pelas cinco competências.", [
    H.i("**Antes da aula:** peça que tragam uma redação ou parágrafo."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Combine: revisar é ajudar." },
      { min: "10", t: "Leitura do colega", d: "Cada aluno lê o texto do colega." },
      { min: "15", t: "Checklist", d: "Preenchem com marcas a lápis." },
      { min: "15", t: "Conversa e reescrita", d: "Devolvem e cada autor reescreve." },
      { min: "5", t: "Fechamento", d: "Cada aluno anota o que aprendeu." }
    ]),
    H.tab("Checklist das competências", ["Item", "✓", "Comentário"], [["C1: norma culta", "", ""], ["C2: tema e repertório", "", ""], ["C3: argumentação", "", ""], ["C4: coesão", "", ""], ["C5: proposta de intervenção", "", ""]])
  ], ["Redação"]);

  E("teatro-casmurro", "Aula de 50 minutos: teatro de leitura de uma cena de Dom Casmurro", "Leitura dramatizada de uma cena adaptada, com atenção à ambiguidade.", [
    H.i("**Antes da aula:** imprima o roteiro, uma cópia por grupo de quatro."),
    pl("Roteiro", [
      { min: "5", t: "Abertura", d: "Explique: a ambiguidade se constrói pelo tom das falas." },
      { min: "10", t: "Leitura silenciosa", d: "Cada grupo lê e distribui os papéis." },
      { min: "20", t: "Ensaio", d: "Ensaiam com atenção às rubricas." },
      { min: "10", t: "Apresentação", d: "Dois grupos apresentam." },
      { min: "5", t: "Fechamento", d: "Cada aluno escreve como a entonação mudou o sentido de uma fala." }
    ]),
    H.t("Cena adaptada: o olhar", [
      "**Personagens:** BENTINHO, CAPITU, NARRADOR.",
      "NARRADOR: Na varanda, Bentinho observa Capitu, que olha para o mar.",
      "BENTINHO (desconfiado): Em que pensas, Capitu?",
      "CAPITU (suave, sem desviar o olhar): Em nada, Bentinho. Só no mar.",
      "BENTINHO (para si): Os olhos dela têm um mar dentro. Mas o que há no fundo?",
      "NARRADOR: E a dúvida, desde aquele instante, passou a morar na casa."
    ], "Texto original, inspirado em Dom Casmurro, de Machado de Assis")
  ], ["Literatura", "Interpretação"]);
})();
