# Redação 1000 · Devocional diário

> App independente, sem vínculo com o Inep ou o MEC. ENEM é um exame do Inep.

**App publicado:** https://thiagopinheirorj.github.io/ENEM1000/ ·
[Política de privacidade](https://thiagopinheirorj.github.io/ENEM1000/privacidade.html)

**Também publicado aqui:** [Vôlei dos Professores](https://thiagopinheirorj.github.io/ENEM1000/volei/) · ranking de jogadores e times equilibrados (`volei/index.html`, arquivo único).

**Também publicado aqui:** [Português Pronto · Biblioteca do Professor](https://thiagopinheirorj.github.io/ENEM1000/biblioteca/) · atividades, provas, slides, mapas mentais, simulados ENEM e aulas de emergência de Português, Redação e Literatura, com 238 materiais (100 do 6º ano e 100 do 7º ano) e filtro por ano, assunto e tipo, versão do professor (gabarito), edição, impressão/PDF e slides para projetar (`biblioteca/index.html` + `biblioteca/dados.js`).

Um app de **5 minutos por dia** para ampliar o repertório da redação do ENEM.
Cada dia traz um "devocional" com:

1. **Ideia-chave** — o repertório do dia (autor, obra, lei ou conceito)
2. **Leitura** — explicação curta e em quais temas o repertório funciona
3. **Na redação, fica assim** — trecho-modelo aplicando o repertório
4. **Dica de ouro** — técnica ligada a uma das 5 competências
5. **Exercício rápido** — questão de múltipla escolha com explicação
6. **Desafio de escrita** — escreva uma frase/parágrafo (ou anexe a foto da sua folha) e compare com a resposta-modelo
7. **Para refletir** — uma pergunta para fechar o dia

Além disso:

- **Contagem regressiva** para a redação do ENEM (padrão: 8/11/2026, 13h30 de Brasília),
  com data editável na aba Progresso
- **Aposta do tema** (dia especial liberado na véspera da prova): o tema mais provável,
  com justificativa, repertórios, roteiro, introdução-modelo e alternativas — conteúdo em
  `window.APOSTA`, em `js/content.js`
- **Podcast em formato de conversa** (Thiago e Isa): botão "🎧 Ouvir episódio" em cada dia (vozes do próprio aparelho) e roteiros
  dos 31 episódios, com geração dos MP3 por voz de IA (`npm run audio`) — veja [`podcast/README.md`](podcast/README.md)
- **Compartilhar** ao concluir o dia: menu nativo do celular (com a foto, se houver),
  WhatsApp ou copiar a mensagem

- **Trilha** com os 30 devocionais, filtráveis por eixo temático e favoritos
- **Kit** de consulta: 5 competências, estrutura em 4 parágrafos, banco de conectivos,
  proposta de intervenção, temas anteriores do ENEM e o que zera a redação
- **Progresso**: sequência de dias (🔥), acertos no quiz, caderno com suas frases,
  repertórios favoritos e botão para copiar o caderno

A trilha é pessoal: o dia 1 é o dia em que você abre o app pela primeira vez.
Todo o progresso fica salvo **apenas no aparelho** (`localStorage`; as fotos em IndexedDB,
reduzidas para no máximo 1600 px).

## Como rodar

Não há build nem dependências. Sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Publicado em HTTPS (GitHub Pages, Netlify, Vercel…), o app pode ser **instalado no celular**
("Adicionar à tela inicial") e funciona **offline** graças ao service worker.

## Estrutura

```
index.html            página única
css/styles.css        estilos (claro/escuro automático, mobile-first)
js/content.js         devocionais e material do Kit  ← edite aqui para adicionar conteúdo
js/app.js             telas, quiz, progresso e roteamento
sw.js                 cache offline
manifest.webmanifest  instalação como app (PWA)
```

## Adicionando novos devocionais

Acrescente um objeto ao array `window.DEVOCIONAIS` em `js/content.js` seguindo o formato
documentado no topo do arquivo (com `id` sequencial). A ordem das alternativas do quiz é
embaralhada automaticamente; `correta` é o índice da opção certa na lista original.
Depois de publicar, preencha `APP_URL` em `js/app.js` para o link do app ir junto nas
mensagens compartilhadas. Para um novo ano, atualize `PROVA_PADRAO`.

Ao publicar uma versão nova, altere `CACHE` em `sw.js` (ex.: `enem1000-v5`).

## Testes automatizados

```bash
npm test
```

São 137 testes (Node `node:test` + Playwright/Chromium) cobrindo conteúdo, fluxo do dia, trilha,
kit, progresso, datas com relógio simulado (sequência, contagem, aposta, virada da meia-noite),
foto, compartilhamento, podcast (roteiros, player e geração de MP3), segurança, offline e visual/acessibilidade. Resultados, casos e bugs
corrigidos estão em [`tests/RELATORIO-DE-TESTES.md`](tests/RELATORIO-DE-TESTES.md).

## Biblioteca do Professor

Para adicionar um material, acrescente um objeto à lista `materiais` em `biblioteca/dados.js`
(o formato está documentado no topo do arquivo). Os materiais do 6º ano ficam em `biblioteca/dados-6a.js` a `dados-6e.js`, e os do 7º ano em `dados-7a.js` a `dados-7e.js` (gramática, interpretação, produção, avaliações e simulados, slides/mapas/aulas de emergência); novos arquivos `dados-*.js` precisam de uma linha `<script>` em `biblioteca/index.html`. Tipos: `atividade`, `prova`, `slides`, `mapa`,
`simulado`, `interpretacao`, `gramatica`, `emergencia`. O nome da marca fica em `marca`, no fim do arquivo.
Os testes (`tests/biblioteca.test.js`) conferem os dados (ids, gabaritos, alternativas) e a tela
(filtros, busca, favoritos, versão do professor, edição, slides, mapa mental e impressão).
