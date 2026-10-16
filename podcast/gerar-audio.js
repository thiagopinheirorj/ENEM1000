/*
 * Gera os episódios do podcast em MP3 com voz de IA, a partir dos mesmos roteiros do app.
 *
 * Uso:
 *   npm run audio                       → todos os episódios (1 a 30 + especial)
 *   npm run audio -- --ep 1             → só o episódio 1 (use "especial" para a aposta)
 *   npm run audio -- --ep 1-5           → episódios 1 a 5
 *   npm run audio -- --voz-thiago pt-BR-Neural2-C --voz-isa pt-BR-Neural2-B --velocidade 1.05
 *   npm run audio -- --provedor elevenlabs
 *   npm run audio -- --provedor teste   → sem voz real (bipes), para testar o processo sem custo
 *
 * Chaves (variáveis de ambiente, nunca no código):
 *   Google Cloud Text-to-Speech: GOOGLE_TTS_API_KEY
 *   ElevenLabs: ELEVENLABS_API_KEY, ELEVENLABS_VOICE_THIAGO e ELEVENLABS_VOICE_ISA (IDs das vozes)
 *
 * Precisa do ffmpeg instalado. Os MP3 saem em podcast/audio/ (fora do git).
 * Trechos já gerados ficam em podcast/audio/.cache e não são cobrados de novo.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execFileSync } = require("child_process");
const Podcast = require("../js/podcast.js");

const RAIZ = path.join(__dirname, "..");
const SAIDA = process.env.PODCAST_AUDIO_DIR || path.join(__dirname, "audio");
const CACHE = path.join(SAIDA, ".cache");
const CAPA = path.join(__dirname, "capa.png");
const PAUSA_ENTRE_FALAS = 0.25; // respiro entre uma fala e outra

/* ---------- Opções ---------- */
function opcoes(argv) {
  const o = { provedor: "google", ep: "todos", vozThiago: null, vozIsa: null, velocidade: 1 };
  for (let i = 0; i < argv.length; i++) {
    const [k, v] = argv[i].includes("=") ? argv[i].split("=") : [argv[i], argv[i + 1]];
    const usaProximo = !argv[i].includes("=");
    if (k === "--provedor") { o.provedor = v; if (usaProximo) i++; }
    else if (k === "--ep") { o.ep = v; if (usaProximo) i++; }
    else if (k === "--voz-thiago") { o.vozThiago = v; if (usaProximo) i++; }
    else if (k === "--voz-isa") { o.vozIsa = v; if (usaProximo) i++; }
    else if (k === "--velocidade") { o.velocidade = Number(v); if (usaProximo) i++; }
  }
  return o;
}

/* ---------- Provedores de voz: recebem texto e devolvem um Buffer de áudio ---------- */
const PROVEDORES = {
  google: {
    vozes: { thiago: "pt-BR-Neural2-B", isa: "pt-BR-Neural2-A" }, // masculina (Thiago) e feminina (Isa)
    limite: 4500, // bytes por requisição
    async falar(texto, voz, velocidade) {
      const chave = process.env.GOOGLE_TTS_API_KEY;
      if (!chave) throw new Error("Defina GOOGLE_TTS_API_KEY com a chave da API Cloud Text-to-Speech.");
      const r = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": chave },
        body: JSON.stringify({
          input: { text: texto },
          voice: { languageCode: "pt-BR", name: voz },
          audioConfig: { audioEncoding: "MP3", speakingRate: velocidade, sampleRateHertz: 44100 }
        })
      });
      if (!r.ok) throw new Error("Google TTS respondeu " + r.status + ": " + (await r.text()).slice(0, 300));
      return Buffer.from((await r.json()).audioContent, "base64");
    }
  },
  elevenlabs: {
    vozes: { thiago: process.env.ELEVENLABS_VOICE_THIAGO || null, isa: process.env.ELEVENLABS_VOICE_ISA || null },
    limite: 4500,
    async falar(texto, voz) {
      const chave = process.env.ELEVENLABS_API_KEY;
      if (!chave) throw new Error("Defina ELEVENLABS_API_KEY com a chave da ElevenLabs.");
      if (!voz) throw new Error("Defina ELEVENLABS_VOICE_THIAGO e ELEVENLABS_VOICE_ISA (ou use --voz-thiago e --voz-isa) com os IDs das vozes escolhidas na ElevenLabs.");
      const r = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + encodeURIComponent(voz) + "?output_format=mp3_44100_128", {
        method: "POST",
        headers: { "Content-Type": "application/json", "xi-api-key": chave, Accept: "audio/mpeg" },
        body: JSON.stringify({ text: texto, model_id: "eleven_multilingual_v2" })
      });
      if (!r.ok) throw new Error("ElevenLabs respondeu " + r.status + ": " + (await r.text()).slice(0, 300));
      return Buffer.from(await r.arrayBuffer());
    }
  },
  /* Sem custo e sem internet: um bipe com a duração aproximada da fala. Serve para testar. */
  teste: {
    vozes: { thiago: "bipe-grave", isa: "bipe-agudo" },
    limite: 4500,
    async falar(texto, voz) {
      const segundos = Math.max(0.3, texto.split(/\s+/).length / 2.5 / 4); // encurtado para testes rápidos
      const freq = voz === "bipe-grave" ? 330 : 660;
      return ffmpegBuffer(["-f", "lavfi", "-i", "sine=frequency=" + freq + ":sample_rate=44100:duration=" + segundos.toFixed(2), "-f", "mp3", "pipe:1"]);
    }
  }
};

/* ---------- Áudio ---------- */
function ffmpeg(args) {
  execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y"].concat(args), { stdio: ["ignore", "ignore", "pipe"] });
}
function ffmpegBuffer(args) {
  return execFileSync("ffmpeg", ["-hide_banner", "-loglevel", "error"].concat(args), { stdio: ["ignore", "pipe", "pipe"], maxBuffer: 64 * 1024 * 1024 });
}
function paraWav(origem, destino) {
  ffmpeg(["-i", origem, "-ar", "44100", "-ac", "1", "-c:a", "pcm_s16le", destino]);
}
function silencio(segundos, destino) {
  ffmpeg(["-f", "lavfi", "-i", "anullsrc=r=44100:cl=mono", "-t", segundos.toFixed(2), "-c:a", "pcm_s16le", destino]);
}
function duracao(arquivo) {
  const out = execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", arquivo]).toString();
  return Number(out.trim());
}

/* Divide o texto em pedaços que caibam no limite do provedor, sem quebrar frases. */
function dividir(texto, limite) {
  if (Buffer.byteLength(texto) <= limite) return [texto];
  const frases = texto.match(/[^.!?…]+[.!?…]*\s*/g) || [texto];
  const partes = [];
  let atual = "";
  frases.forEach((f) => {
    if (Buffer.byteLength(atual + f) > limite && atual) { partes.push(atual.trim()); atual = ""; }
    atual += f;
  });
  if (atual.trim()) partes.push(atual.trim());
  return partes;
}

async function trechoEmAudio(prov, nomeProv, voz, velocidade, texto) {
  const id = crypto.createHash("sha1").update([nomeProv, voz, velocidade, texto].join("|")).digest("hex");
  const arq = path.join(CACHE, id + ".mp3");
  if (!fs.existsSync(arq)) {
    let ultimoErro;
    for (let tentativa = 1; tentativa <= 3; tentativa++) {
      try {
        fs.writeFileSync(arq, await prov.falar(texto, voz, velocidade));
        ultimoErro = null;
        break;
      } catch (e) {
        ultimoErro = e;
        if (/ 4\d\d:/.test(e.message) && !/ 429:/.test(e.message)) break; // erro de chave/voz: não adianta repetir
        await new Promise((r) => setTimeout(r, 1000 * tentativa * tentativa));
      }
    }
    if (ultimoErro) throw ultimoErro;
  }
  return arq;
}

async function gerarEpisodio(ep, o) {
  const prov = PROVEDORES[o.provedor];
  const vozes = { thiago: o.vozThiago || prov.vozes.thiago, isa: o.vozIsa || prov.vozes.isa };
  const tmp = fs.mkdtempSync(path.join(CACHE, "ep-"));
  const lista = [];
  try {
    let n = 0;
    for (const tr of ep.trechos) {
      for (const parte of dividir(tr.texto, prov.limite)) {
        const mp3 = await trechoEmAudio(prov, o.provedor, vozes[tr.voz], o.velocidade, parte);
        const wav = path.join(tmp, String(n++).padStart(4, "0") + ".wav");
        paraWav(mp3, wav);
        lista.push(wav);
      }
      const pausa = path.join(tmp, String(n++).padStart(4, "0") + "-pausa.wav");
      silencio(PAUSA_ENTRE_FALAS + (tr.pausa || 0), pausa);
      lista.push(pausa);
    }
    const listaTxt = path.join(tmp, "lista.txt");
    fs.writeFileSync(listaTxt, lista.map((f) => "file '" + f.replace(/'/g, "'\\''") + "'").join("\n"));
    const unido = path.join(tmp, "unido.wav");
    ffmpeg(["-f", "concat", "-safe", "0", "-i", listaTxt, "-c", "copy", unido]);

    const destino = path.join(SAIDA, ep.arquivo);
    const meta = ["-metadata", "title=" + ep.titulo, "-metadata", "artist=Redação 1000", "-metadata", "album=Redação 1000",
      "-metadata", "genre=Podcast", "-metadata", "track=" + ep.faixa, "-metadata", "comment=Podcast independente, sem vínculo com o Inep ou o MEC."];
    const capa = fs.existsSync(CAPA)
      ? ["-i", CAPA, "-map", "0:a", "-map", "1:v", "-c:v", "mjpeg", "-vf", "scale=1400:1400", "-disposition:v", "attached_pic"]
      : [];
    // Volume padrão de podcast (-16 LUFS), mono, 96 kbps.
    ffmpeg(["-i", unido].concat(capa, ["-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "44100", "-ac", "1",
      "-c:a", "libmp3lame", "-b:a", "96k", "-id3v2_version", "3"], meta, [destino]));
    return { arquivo: destino, segundos: duracao(destino) };
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

/* ---------- Episódios ---------- */
function episodios() {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(RAIZ, "js/content.js"), "utf8"), sandbox);
  vm.runInNewContext(fs.readFileSync(path.join(RAIZ, "js/conversa.js"), "utf8"), sandbox);
  const { DEVOCIONAIS, APOSTA, CONVERSAS } = sandbox.window;
  const lista = Array.from(DEVOCIONAIS, (d) => ({
    id: d.id,
    faixa: d.id,
    titulo: "Ep. " + d.id + " · " + d.titulo,
    arquivo: "redacao1000-ep" + String(d.id).padStart(2, "0") + ".mp3",
    trechos: Podcast.roteiroDia(d, CONVERSAS[d.id])
  }));
  lista.push({ id: "especial", faixa: 31, titulo: "Especial · A aposta do tema", arquivo: "redacao1000-ep31-especial.mp3", trechos: Podcast.roteiroAposta(APOSTA) });
  return lista;
}
function filtrar(lista, ep) {
  if (!ep || ep === "todos") return lista;
  if (ep === "especial") return lista.filter((e) => e.id === "especial");
  const m = String(ep).match(/^(\d+)(?:-(\d+))?$/);
  if (!m) throw new Error('Use --ep 5, --ep 1-10 ou --ep especial.');
  const a = Number(m[1]), b = Number(m[2] || m[1]);
  return lista.filter((e) => typeof e.id === "number" && e.id >= a && e.id <= b);
}

async function main(argv) {
  const o = opcoes(argv);
  if (!PROVEDORES[o.provedor]) throw new Error("Provedor desconhecido: " + o.provedor + " (use google, elevenlabs ou teste).");
  if (!(o.velocidade >= 0.5 && o.velocidade <= 2)) throw new Error("--velocidade deve ficar entre 0.5 e 2.");
  fs.mkdirSync(CACHE, { recursive: true });
  const escolhidos = filtrar(episodios(), o.ep);
  if (!escolhidos.length) throw new Error("Nenhum episódio encontrado para --ep " + o.ep);
  const caracteres = escolhidos.reduce((n, e) => n + e.trechos.reduce((m, t) => m + t.texto.length, 0), 0);
  console.log("Gerando " + escolhidos.length + " episódio(s) com " + o.provedor + " (" + caracteres.toLocaleString("pt-BR") + " caracteres)…");
  const feitos = [];
  for (const ep of escolhidos) {
    const r = await gerarEpisodio(ep, o);
    feitos.push(r);
    console.log("  ✓ " + path.basename(r.arquivo) + " (" + Math.floor(r.segundos / 60) + " min " + Math.round(r.segundos % 60) + " s)");
  }
  console.log("Pronto. Arquivos em " + path.relative(process.cwd(), SAIDA) + "/");
  return feitos;
}

if (require.main === module) {
  main(process.argv.slice(2)).catch((e) => { console.error("Erro: " + e.message); process.exit(1); });
}
module.exports = { main, dividir, filtrar, episodios };
