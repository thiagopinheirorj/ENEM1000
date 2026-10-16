# Relatório de testes · Redação 1000

**Data:** 15/10/2026
**Escopo:** conteúdo, fluxo do dia, Trilha, Kit, Progresso, datas, foto, compartilhar, segurança/robustez, visual/acessibilidade e modo offline.

## Ambiente

| Item | Versão / configuração |
|---|---|
| Sistema | Linux (contêiner) |
| Node.js | 22.22.0, com o test runner nativo (`node:test`) |
| Navegador | Chromium headless do Playwright 1.56 (`/opt/pw-browsers`), usando a instalação global do Playwright |
| Servidor | servidor estático próprio (`http.createServer`), em porta aleatória, criado dentro dos testes |
| Telas | celular 390×844 (`isMobile`, toque) e desktop 1280×800 |
| Tema | `colorScheme` claro e escuro |
| Fuso / idioma | `America/Sao_Paulo`, `pt-BR` |
| Relógio | `page.clock` (`install`, `setFixedTime`, `setSystemTime`, `fastForward`, `runFor`); padrão: 15/10/2026 10h00 (Brasília) |
| Service worker | bloqueado por padrão, para os testes serem determinísticos; liberado só no teste offline (O01) |

Nenhuma dependência foi instalada. O `tests/helpers.js` tenta `require("playwright")` e, se não achar, usa o pacote global (`npm root -g`).

## Como rodar

```bash
npm test
```

O script é `node --test "tests/**/*.test.js"`. No Node 22, `node --test tests/` trata a pasta como se fosse um arquivo e falha, por isso o script usa o glob.

Arquivos:

| Arquivo | Conteúdo |
|---|---|
| `tests/helpers.js` | servidor estático, carregamento do Playwright, criação de páginas (relógio, estado pré-carregado, captura da área de transferência, erros de console e requisições externas), gerador de PNG válido, cópia da função `order` |
| `tests/conteudo.test.js` | dados de `content.js`, `sw.js` e `manifest` (sem navegador) |
| `tests/dia.test.js` | fluxo do devocional do dia |
| `tests/telas.test.js` | Trilha, Kit e Progresso |
| `tests/datas.test.js` | sequência, dia da trilha, contagem, aposta e virada da meia-noite |
| `tests/foto-compartilhar.test.js` | foto do texto e compartilhamento |
| `tests/robustez-visual.test.js` | XSS, localStorage corrompido ou indisponível, rolagem horizontal, console, rede, tema, acessibilidade e modo offline |

As imagens de teste (PNG 2400×1200, PNG 300×200 e um arquivo falso `.png`) são criadas na hora numa pasta temporária do sistema (`os.tmpdir()/enem1000-testes-*`).

## Casos de teste

Legenda: ✅ passou na execução final. **🐞** indica um teste que falhou no código original e ajudou a encontrar um bug, já corrigido.

| ID | Área | O que verifica | Resultado |
|---|---|---|---|
| C01 | Conteúdo | 30 devocionais, ids de 1 a 30 em sequência | ✅ |
| C02 | Conteúdo | todos os campos obrigatórios preenchidos (leitura, temas, dica, quiz, desafio, reflexão…) | ✅ |
| C03 | Conteúdo | `quiz.correta` é um inteiro dentro do intervalo de opções | ✅ |
| C04 | Conteúdo | `dica.competencia` é um inteiro de 1 a 5 | ✅ |
| C05 | Conteúdo | nenhuma alternativa repetida no mesmo quiz | ✅ |
| C06 | Conteúdo | títulos dos dias não se repetem | ✅ |
| C07 | Conteúdo | depois do embaralhamento, a resposta certa fica bem distribuída entre as letras (A/B/C/D = 10/8/6/6; limite de 3 a 12 por letra) | ✅ |
| C08 | Conteúdo | a função `order` usada nos testes é idêntica à de `app.js` | ✅ |
| C09 | Kit | 5 competências numeradas de 1 a 5 | ✅ |
| C10 | Kit | estrutura (4 partes), conectivos, os 5 elementos da proposta e o que zera a redação estão bem formados | ✅ |
| C11 | Kit | temas anteriores incluem 2025, em ordem decrescente e sem ano repetido | ✅ |
| C12 | Aposta | todos os blocos preenchidos; fontes com URL https válida | ✅ |
| C13 | Aposta | a citação “dia 3 da trilha” (Goffman) aponta para o dia certo | ✅ |
| C14 | PWA | todos os arquivos de `ASSETS` (sw.js) existem | ✅ |
| C15 | PWA | todo arquivo local referenciado no `index.html` está no cache offline | ✅ |
| C16 | PWA | versão do cache no formato `enem1000-vN` | ✅ |
| C17 | PWA | manifest é JSON válido, tem os campos de PWA e o ícone SVG existe | ✅ |
| C18 | PWA | `app.js`, `content.js` e `sw.js` sem erro de sintaxe | ✅ |
| D01 | Dia | acerto: feedback “Acertou!”, marca a certa, desabilita os botões e mantém tudo após recarregar | ✅ |
| D02 | Dia | erro: feedback “Quase.” com a explicação, marca a errada e a certa, e mantém após recarregar | ✅ |
| D03 | Dia | ordem estável das alternativas, letras A–D e `data-i` com o índice original | ✅ |
| D04 | Dia | Concluir desabilitado antes do quiz; ao concluir, aparece o banner, a sequência vai a 1, o estado é salvo e o “✓ Concluído” aparece após recarregar | ✅ |
| D05 | Dia | favoritar e desfavoritar (aria-pressed, texto, aviso, persistência) | ✅ |
| D06 | Dia | o texto do desafio salva sozinho e persiste; texto vazio sai do caderno | ✅ |
| D07 | Dia | a resposta-modelo abre ao tocar | ✅ |
| D08 | Dia | Anterior/Próximo, incluindo 1→30 e 30→1 | ✅ |
| D09 | Dia | um dia inexistente (`#/dia/31`) volta para Hoje | ✅ |
| D10 | Dia | Hoje mostra a data e a contagem; outro dia mostra “Dia N da trilha” e marca a aba Trilha | ✅ |
| D11 | Dia | o quiz de um dia não afeta os outros dias | ✅ |
| T01 | Trilha | 30 itens e o card da aposta (🔒, “Abre em 07/11/2026”) | ✅ |
| T02 | Trilha | botões de filtro (Todos, Favoritos e os eixos); cada eixo filtra certo e esconde a aposta | ✅ |
| T03 | Trilha | Favoritos vazio mostra mensagem; com favoritos lista em ordem e com ★ | ✅ |
| T04 | Trilha | concluídos com ✓, hoje destacado com “· hoje”, barra de progresso | ✅ |
| K01 | Kit | 6 seções e âncoras, 5 competências, temas com 2025, aviso com link para a privacidade | ✅ |
| K02 | Kit | a âncora rola até a seção sem trocar de tela (o hash continua `#/kit`) | ✅ |
| P01 | Progresso | sequência 2, melhor sequência 3, 5/30, 75% de acertos e data de início | ✅ |
| P02 | Progresso | sem respostas no quiz, os acertos mostram “—” | ✅ |
| P03 | Progresso | os últimos 7 dias marcam os dias estudados, com rótulo do dia da semana | ✅ |
| P04 | Progresso | caderno em ordem de dia; favoritos mostram a fonte | ✅ |
| P05 | Progresso | mensagens quando o caderno e os favoritos estão vazios | ✅ |
| P06 | Progresso | Copiar caderno: texto completo na área de transferência e aviso de sucesso | ✅ |
| P07 | Progresso | Copiar caderno sem `navigator.clipboard` ou com `writeText` rejeitado mostra a caixa com o texto selecionado | ✅ |
| P08 | Progresso | Recomeçar exige 2 toques, desarma depois de 4 s e apaga o localStorage e as fotos do IndexedDB | ✅ |
| P09 | Progresso | Recomeçar com uma data de prova personalizada atualiza o selo do topo na hora | ✅ 🐞 |
| P10 | Progresso | aba Progresso com aria-current | ✅ |
| DT01 | Datas | sequência por 3 dias seguidos, quebra depois de um dia sem estudo; melhor sequência 3 | ✅ |
| DT02 | Datas | `todayId`: dia 1, 2 e 30, volta ao dia 1 depois de 30 e 60 dias; início no futuro fica no dia 1 | ✅ |
| DT03 | Datas | contagem “24 dias 3 h 30 min”, selo “⏳ 24d” e title | ✅ |
| DT04 | Datas | véspera às 13h29: “1 dia 0 h 01 min” e selo “⏳ 1d” | ✅ |
| DT05 | Datas | no dia da prova, antes das 13h30: “É hoje!” e o selo “⏳ hoje” | ✅ 🐞 |
| DT06 | Datas | no dia da prova, depois das 13h30: “É hoje! Boa prova” e o selo escondido | ✅ |
| DT07 | Datas | prova passada: mensagem para definir nova data e selo escondido | ✅ |
| DT08 | Datas | a contagem se atualiza sozinha com o app aberto (timer de 30 s) | ✅ |
| DT09 | Aposta | bloqueada em 06/11 às 23h59; Hoje continua no devocional | ✅ |
| DT10 | Aposta | liberada na véspera (07/11 00h01) e no dia (08/11): Hoje abre a aposta e a Trilha mostra “Liberado” | ✅ |
| DT10b | Aposta | depois da prova (09/11), Hoje volta ao devocional do dia e a aposta continua aberta pela Trilha | ✅ |
| PC01 | Podcast | ordem das alternativas no podcast é igual à do app | ✅ |
| PC02 | Podcast | os 30 episódios têm todos os blocos e a letra certa do quiz | ✅ |
| PC03 | Podcast | texto falado sem formas escritas (nº, 10.216/2001, (2000), ×, prof.) | ✅ |
| PC04 | Podcast | `npm run podcast` gera 31 roteiros e o índice | ✅ |
| PC05 | Podcast | Ouvir lê o episódio em pt-BR, mostra o andamento e termina | ✅ |
| PC06 | Podcast | pausar, continuar, velocidade e parar | ✅ |
| PC07 | Podcast | trocar de tela encerra o episódio | ✅ |
| PC08 | Podcast | episódio especial na página da aposta | ✅ |
| PC09 | Podcast | sem voz no navegador, o botão Ouvir não aparece | ✅ |
| PA01 | Podcast (áudio) | MP3 mono com capa, título, faixa e volume de podcast (−16 LUFS) | ✅ |
| PA02 | Podcast (áudio) | trechos já gerados vêm do cache, sem nova cobrança | ✅ |
| PA03 | Podcast (áudio) | episódio especial e intervalo de episódios (`--ep 2-4`) | ✅ |
| PA04 | Podcast (áudio) | sem chave, explica a variável a definir e não cria arquivo | ✅ |
| PA05 | Podcast (áudio) | textos longos divididos no limite do serviço sem quebrar frases | ✅ |
| DT11 | Datas | mudar a data no Progresso atualiza a contagem, o selo, a Trilha e Hoje; “Usar data oficial” restaura tudo | ✅ |
| DT12 | Datas | apagar o campo de data não altera a data salva | ✅ |
| DT13 | Datas | virada da meia-noite com Hoje aberto: a tela passa para o novo dia e a sequência é recalculada | ✅ 🐞 |
| DT14 | Datas | concluir logo depois da meia-noite registra o dia novo | ✅ 🐞 |
| F01 | Foto | anexar um PNG 2400×1200: fica JPEG de 1600×800, aparece, salva no IndexedDB e persiste após recarregar | ✅ |
| F02 | Foto | trocar a foto substitui a anterior, também após recarregar | ✅ |
| F03 | Foto | remover apaga do estado e do IndexedDB e volta o botão “Anexar” | ✅ |
| F04 | Foto | arquivo que não é imagem mostra o aviso, não quebra o app e pode ser escolhido de novo | ✅ |
| F05 | Foto | a foto aparece no caderno do Progresso, com 📷 e texto alternativo | ✅ |
| S01 | Compartilhar | texto exato: sequência, repertório, ideia-chave, contagem e link do app; sem `navigator.share` não há botão nativo | ✅ 🐞 |
| S02 | Compartilhar | plural “2 dias seguidos” | ✅ |
| S03 | Compartilhar | o link `wa.me` tem o texto todo codificado, `target=_blank` e `rel=noopener` | ✅ |
| S04 | Compartilhar | com `navigator.share` simulado, o botão aparece e envia título, texto e a foto (`redacao1000-dia-1.jpg`) | ✅ |
| S05 | Compartilhar | `AbortError` (a pessoa fechou a janela) não copia nada | ✅ |
| S06 | Compartilhar | outro erro no `share` cai no copiar, com o aviso “Cole onde quiser” | ✅ |
| S07 | Compartilhar | sem área de transferência, a mensagem aparece na caixa para copiar à mão | ✅ |
| S08 | Compartilhar | depois da prova, a mensagem não fala em dias restantes | ✅ |
| S09 | Compartilhar | na véspera, a mensagem e o selo usam o singular “Falta 1 dia” | ✅ 🐞 |
| R01 | Segurança | `<img onerror>` e `<script>` digitados no desafio são escapados no caderno e não executam | ✅ |
| R02 | Segurança | HTML já salvo no estado não executa | ✅ |
| R03 | Robustez | localStorage com JSON inválido, `null`, número, texto ou lista: o app funciona e salva (5 casos) | ✅ 🐞 (caso “lista”) |
| R04 | Robustez | JSON válido com campos de tipo errado não quebra nenhuma tela | ✅ 🐞 |
| R05 | Robustez | localStorage bloqueado (a leitura lança SecurityError): o app funciona na memória | ✅ |
| R06 | Robustez | estado antigo sem `fotos` e `prova` carrega e é completado | ✅ |
| R07 | Segurança | links externos da aposta abrem com `target=_blank` e `rel=noopener` | ✅ |
| V01 | Visual | sem rolagem horizontal em 390 px em todas as 35 telas e no banner de conclusão, no tema claro e no escuro | ✅ 🐞 |
| V02 | Visual | privacidade.html sem rolagem horizontal, `lang=pt-BR`, sem erros nem requisições externas | ✅ |
| V03 | Visual | nenhum erro de console, nenhum pageerror e nenhuma requisição externa em todas as telas (celular e desktop) | ✅ |
| V04 | Visual | tema escuro pela preferência do sistema; `data-theme` força claro ou escuro; `[hidden]` continua escondido | ✅ |
| V05 | A11y | botões e links com nome, campos com label ou aria-label, imagens com alt, exatamente uma aba com aria-current, `lang` e nav com rótulo | ✅ |
| V06 | A11y | cada aba clicada recebe aria-current | ✅ |
| O01 | Offline | o service worker guarda todos os ASSETS e o app e a privacidade abrem sem internet | ✅ |

**Total: 107 testes** em 16 grupos. Os casos com mais de uma variante (DT10 ×2 e R03 ×5) contam como testes separados.

## Bugs encontrados e corrigidos

Com o código original, 9 testes falharam (P09, DT05, DT13, DT14, S01, S09, R03-lista, R04 e V01). Os 7 bugs abaixo explicam essas falhas. Todas as correções são mínimas e seguem o estilo do código. A versão do cache em `sw.js` subiu uma vez (`enem1000-v4` → `enem1000-v5`).

### 1. A virada da meia-noite com o app aberto não era percebida (DT13, DT14)
- **Como reproduzir:** abra o app às 23h59, responda o quiz e conclua depois da meia-noite.
- **Sintoma:** o dia concluído era gravado com a data de ontem, o que estraga a sequência do dia seguinte. A tela Hoje continuava no devocional e na data de ontem, e o selo 🔥 não era recalculado.
- **Causa:** `today` era calculado uma única vez, quando o script carregava.
- **Correção (`js/app.js`):** nova função `atualizarHoje()`, chamada:
  - no início de `route()`;
  - no clique de Concluir, antes de gravar `state.done[id] = today`;
  - no timer de 30 s, que agora atualiza o selo e redesenha a tela se ela for Hoje (`#/hoje`).
  ```js
  function atualizarHoje() {
    var t = isoDate(new Date());
    if (t === today) return false;
    today = t;
    return true;
  }
  ...
  setInterval(function () {
    if (atualizarHoje()) {
      updateStreakBadge();
      if ((location.hash || "#/hoje") === "#/hoje") route(); // a tela Hoje passa para o novo dia
    }
    updateCountdowns();
  }, 30000);
  ```

### 2. No dia da prova, antes das 13h30, a contagem mostrava “0 dias 4h 30min” e o selo “⏳ 0d” (DT05)
- **Como reproduzir:** com o relógio em 08/11/2026 às 09h00, abra o app.
- **Causa:** `countdownHtml()` só mostrava “É hoje!” depois do horário da prova (`diff <= 0`).
- **Correção (`js/app.js`):**
  - em `countdownHtml()`, se a data local for a da prova, aparece “É hoje!” com “A redação começa às 13h30 (Brasília). Faltam XhYYmin.”;
  - em `updateCountdowns()`, o selo mostra “⏳ hoje” e o title “A redação do ENEM é hoje”.

  Depois das 13h30, o comportamento (“É hoje! Boa prova”, selo escondido) não mudou.

### 3. Erros de concordância nas mensagens: “1 dia seguidos” e “Faltam 1 dias” (S01, S09)
- **Como reproduzir:** conclua o primeiro dia e toque em “Copiar mensagem”. Ou, na véspera da prova, veja a mensagem e o title do selo.
- **Causa:** só “dia/dias” variava; “seguidos” e “Faltam” eram fixos.
- **Correção (`js/app.js`):**
  - em `textoCompartilhar()`: `" dia seguido" : " dias seguidos"` e `(n === 1 ? "Falta 1 dia" : "Faltam " + n + " dias")`;
  - a mesma regra no `title` do `#cd-chip`.

### 4. Recomeçar do zero não atualizava o selo de contagem (P09)
- **Como reproduzir:** no Progresso, mude a data da prova para 06/12/2026 (o selo mostra “⏳ 52d”) e toque duas vezes em “Recomeçar do zero”. O campo volta para 08/11, mas o selo continua em 52d por até 30 s.
- **Causa:** o handler de `#zerar` não chamava `updateCountdowns()`.
- **Correção (`js/app.js`):** a linha `updateCountdowns();` foi adicionada logo depois de `updateStreakBadge();` no handler.

### 5. Estado salvo como lista fazia o app perder todo o progresso (R03, caso “lista”)
- **Como reproduzir:** grave `[1,2]` em `enem1000:v1`, abra o app e conclua um dia, depois recarregue.
- **Causa:** `load()` aceitava uma lista como estado. `JSON.stringify` de uma lista descarta as chaves `done`, `dias` etc., e nada era salvo de verdade.
- **Correção (`js/app.js`, `load()`):** se o JSON não for um objeto comum, o app usa `emptyState()`.

### 6. JSON válido com campos de tipo errado deixava a tela em branco (R04)
- **Como reproduzir:** grave `{"inicio":"ontem","done":null,"dias":"2026-10-14",...}` e abra o app.
- **Sintoma:** página vazia, com TypeError em `state.dias.forEach` e `Object.keys(null)`, ou `todayId()` virando NaN.
- **Causa:** `load()` só completava os campos ausentes; não verificava o tipo.
- **Correção (`js/app.js`, `load()`):** um campo ausente, nulo ou de tipo diferente do padrão volta ao padrão. Os campos de data (`inicio`, `prova`) também precisam estar no formato `AAAA-MM-DD`.
  ```js
  if (!s || typeof s !== "object" || Array.isArray(s)) return base;
  for (var k in base) {
    var v = s[k];
    var ok = v !== null && typeof v === typeof base[k] && Array.isArray(v) === Array.isArray(base[k]);
    if (ok && typeof v === "string") ok = /^\d{4}-\d{2}-\d{2}$/.test(v);
    if (!ok) s[k] = base[k];
  }
  ```

### 7. Palavra ou link longo no caderno criava rolagem horizontal no celular (V01)
- **Como reproduzir:** no desafio, cole um link ou uma palavra muito longa e abra o Progresso em 390 px. A página ficava com cerca de 1850 px de rolagem lateral.
- **Causa:** `.note p` usa `white-space: pre-wrap`, mas não quebrava palavras longas.
- **Correção (`css/styles.css`):** `overflow-wrap: anywhere;` em `.note p`, igual ao que `.policy` já usa.

### 8. Depois da prova, a aba Hoje ficava presa na aposta (DT10b)
- **Como reproduzir:** com a data da prova em 08/11, abra o app em 09/11 ou depois. A aba Hoje mostrava sempre a aposta, e o devocional do dia só abria pela Trilha.
- **Causa:** `route()` abria a aposta sempre que `apostaLiberada()` fosse verdadeiro, e essa condição não tem data final.
- **Correção (`js/app.js`, `route()`):** a aba Hoje mostra a aposta só na véspera e no dia da prova (`today <= state.prova`). Depois disso, a aposta continua disponível pela Trilha. Este item foi relatado pelo agente de testes como observação e corrigido na revisão.

### Outro arquivo alterado
- `sw.js`: `CACHE` mudou de `"enem1000-v4"` para `"enem1000-v5"`, porque `app.js` e `styles.css` mudaram.

## Observações (não corrigidas)

- **Abrir o endereço direto em `#kit-...` mostra a tela vazia.** `route()` ignora essas âncoras. Pelo app isso não acontece, porque o clique é interceptado com `preventDefault`. Só aconteceria com um link colado de fora.
- **Virada da meia-noite em outras telas.** Em Trilha, Kit, Progresso ou num dia específico, a tela não é redesenhada sozinha, para não atrapalhar quem está lendo ou escrevendo. O dia novo vale na próxima navegação e ao concluir.
- **Conteúdo:** não achei inconsistência interna. Ids, índices, competências, anos dos temas e a referência “Goffman = dia 3” estão coerentes. Não verifiquei fatos externos (leis, datas e autores).
- **O que ficou de fora:** o menu de compartilhar real do celular (foi simulado), a câmera e a galeria reais, o Safari do iOS e o Firefox (só Chromium), a instalação como PWA na tela inicial e a comparação visual por captura de tela.

## Resultado final da execução

Execução final de `npm test` (depois da correção 8 e dos testes do podcast e do áudio, 16/10/2026):

```
> redacao-1000@1.0.0 test
> node --test "tests/**/*.test.js"

ok 1 - C · Conteúdo dos devocionais
ok 2 - C · Kit e aposta
ok 3 - C · Arquivos do PWA
ok 4 - DT · Sequência e dia da trilha
ok 5 - DT · Contagem regressiva
ok 6 - DT · Aposta do tema
ok 7 - DT · Virada da meia-noite com o app aberto
ok 8 - D · Devocional do dia
ok 9 - F · Foto do texto
ok 10 - S · Compartilhar
ok 11 - R · Segurança e robustez
ok 12 - V · Visual e acessibilidade
ok 13 - O · Offline (service worker)
ok 14 - T · Trilha
ok 15 - K · Kit
ok 16 - P · Progresso
1..16
# tests 107
# suites 16
# pass 107
# fail 0
# cancelled 0
# skipped 0
# todo 0
```

**107 passaram, 0 falharam.** Com o código original, o mesmo conjunto dava 83 passaram e 9 falharam.
