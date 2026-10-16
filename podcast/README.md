# Podcast Redação 1000

O podcast transforma cada devocional do app num bate-papo de 4 a 5 minutos entre dois
apresentadores: **Thiago**, professor de redação, e **Isa**, vestibulanda curiosa
e bem-humorado. Inclui também um episódio especial com a aposta do tema. Os roteiros saem direto do conteúdo do
app (`js/content.js`), então app e podcast nunca ficam diferentes. As falas próprias de cada
episódio (a história que abre o papo, a dúvida da Isa e as respostas da reflexão) ficam em
`js/conversa.js`.

## O que já está pronto

| Arquivo | O que é |
| --- | --- |
| [`roteiros/INDICE.md`](roteiros/INDICE.md) | Lista dos 31 episódios, com duração estimada |
| `roteiros/ep01-…md` a `ep30-…md` | Roteiro de cada dia, pronto para ler ou gravar |
| `roteiros/ep31-especial-a-aposta-do-tema.md` | Episódio especial da véspera da prova |
| [`capa.png`](capa.png) | Capa 3000 × 3000 px (o tamanho pedido por Spotify e Apple) |
| `capa.html` | Fonte da capa, para editar e gerar de novo |
| `gerar-roteiros.js` | Gera os roteiros de novo: `npm run podcast` |

**No app:** cada devocional tem o botão **🎧 Ouvir episódio**, que lê o roteiro com a voz
do próprio celular. Funciona sem internet e não envia nada para fora.

## Estrutura de cada episódio

1. Abertura: Isa e Thiago se apresentam, e a Isa conta uma situação do dia a dia ligada ao tema
2. Ideia-chave: o Thiago apresenta o repertório e a Isa reage
3. Leitura: o Thiago explica, e a Isa interrompe com a dúvida que o ouvinte teria
4. Temas em que o repertório funciona e exemplo de uso numa redação
5. Dica de ouro (com a competência do ENEM)
6. Exercício rápido: a Isa desafia quem está ouvindo, **pausa de 5 segundos** e resposta
7. Desafio de escrita, pausa e uma resposta possível
8. Pergunta para refletir, com a resposta de cada um
9. Encerramento chamando para o app

No roteiro, cada fala aparece com o nome de quem fala (**Thiago:** ou **Isa:**). No app, o botão
"Ouvir" usa duas vozes do aparelho; se só houver uma em português, muda o tom de cada um.

As pausas aparecem no roteiro como _[pausa de N segundos]_.

## Como gravar

- **Com a sua voz (recomendado):** soa mais próximo e cria vínculo com quem ouve. Um celular
  num lugar silencioso já serve. O app gratuito Spotify for Creators grava e edita direto
  no celular.
- **Com voz de IA (pronto para usar):** `npm run audio` gera os MP3 dos 31 episódios. Veja a
  seção abaixo.

## Gerar os episódios com voz de IA

`podcast/gerar-audio.js` transforma os roteiros em MP3 prontos para publicar, com uma voz
para o Thiago e outra para a Isa: mono, 44,1 kHz,
96 kbps, volume padrão de podcast (−16 LUFS), capa e título embutidos, e as pausas do
exercício. Os arquivos saem em `podcast/audio/` (fora do git). Precisa do **ffmpeg**.

**Google Cloud Text-to-Speech (padrão).** O volume total é de cerca de 95 mil caracteres, o que
costuma caber na cota gratuita mensal. Confira os preços atuais no console do Google Cloud.

1. No [Google Cloud Console](https://console.cloud.google.com/), crie um projeto e ative a
   **Cloud Text-to-Speech API** (pede cadastro de cartão, mesmo no uso gratuito).
2. Em **APIs e serviços → Credenciais**, crie uma **chave de API** e restrinja-a à
   Text-to-Speech API.
3. Guarde a chave na variável `GOOGLE_TTS_API_KEY` e rode:

```bash
npm run audio -- --ep 1                     # ouça o primeiro e ajuste a voz
npm run audio -- --ep 1 --voz-thiago pt-BR-Neural2-C --voz-isa pt-BR-Wavenet-B --velocidade 1.05
npm run audio                               # todos os episódios
```

Por padrão, o Thiago usa `pt-BR-Neural2-B` (masculina) e a Isa, `pt-BR-Neural2-A` (feminina).
Outras vozes em português do Brasil para testar com `--voz-thiago` e `--voz-isa`:
`pt-BR-Neural2-C`, `pt-BR-Wavenet-A` a `pt-BR-Wavenet-E`. A lista completa está na
documentação do Google Cloud Text-to-Speech.

**ElevenLabs (voz mais natural, plano pago para este volume).** Defina `ELEVENLABS_API_KEY`,
`ELEVENLABS_VOICE_THIAGO` e `ELEVENLABS_VOICE_ISA` (os IDs das duas vozes escolhidas na
biblioteca da ElevenLabs) e rode
`npm run audio -- --provedor elevenlabs`.

**Dicas**
- Trechos já gerados ficam em cache: refazer um episódio não cobra de novo o que não mudou.
- `npm run audio -- --provedor teste` roda todo o processo sem voz real e sem custo.
- Confira a licença de uso comercial do serviço e se a plataforma de podcast pede para
  informar que a voz é gerada por IA. Uma frase na descrição resolve: "Narração com voz
  sintética."

## Como publicar (grátis)

1. Crie uma conta no **Spotify for Creators** (creators.spotify.com). Ele hospeda o
   podcast de graça e gera o feed RSS.
2. Cadastre o programa com a capa (`capa.png`) e a descrição abaixo. Categoria: Educação.
3. Suba os episódios com título "Ep. N · Título do dia" e a descrição-modelo abaixo.
4. Use o feed RSS gerado para publicar também no Apple Podcasts, no YouTube Music e em
   outros apps.

### Descrição do programa

> Poucos minutos por dia para ampliar o seu repertório para a redação do ENEM. Em cada
> episódio: uma ideia-chave de um autor, lei ou obra, como usá-la na redação, uma dica de
> escrita, um exercício rápido e um desafio para praticar no app Redação 1000
> (https://thiagopinheirorj.github.io/ENEM1000/).
> Podcast independente, sem vínculo com o Inep ou o MEC.

### Descrição-modelo de episódio

> Repertório do dia: {fonte}. Eixo: {eixo}. Ouça, responda o exercício e faça o desafio
> de escrita no app: https://thiagopinheirorj.github.io/ENEM1000/

## Calendário sugerido até a prova (8/11/2026)

Faltam cerca de três semanas, menos que os 30 episódios. Uma forma de encaixar:

- **17/10:** lançar os episódios 1 a 9 juntos, para quem quiser maratonar.
- **18/10 a 7/11:** um episódio por dia, do 10 ao 30.
- **7/11, de manhã:** episódio especial com a aposta do tema.

## Ao mudar o conteúdo

Editou ou acrescentou devocionais em `js/content.js`? Rode `npm run podcast` para gerar os
roteiros de novo e `npm test` para conferir.
