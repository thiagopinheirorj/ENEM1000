/* Geração dos MP3 do podcast (provedor "teste": sem voz real, sem internet, sem custo). */
"use strict";

const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync, spawnSync } = require("child_process");
const { ROOT } = require("./helpers");

const temFfmpeg = spawnSync("ffmpeg", ["-version"]).status === 0;
const SCRIPT = path.join(ROOT, "podcast", "gerar-audio.js");
let pasta;

function rodar(args, env) {
  return spawnSync(process.execPath, [SCRIPT].concat(args), {
    env: Object.assign({}, process.env, { PODCAST_AUDIO_DIR: pasta, GOOGLE_TTS_API_KEY: "" }, env || {}),
    encoding: "utf8"
  });
}

describe("PA · Áudio do podcast", { skip: !temFfmpeg && "ffmpeg não instalado" }, () => {
  before(() => { pasta = fs.mkdtempSync(path.join(os.tmpdir(), "redacao1000-audio-")); });
  after(() => { fs.rmSync(pasta, { recursive: true, force: true }); });

  it("PA01 · gera o MP3 com capa, título, faixa e volume de podcast", () => {
    const r = rodar(["--provedor", "teste", "--ep", "3"]);
    assert.equal(r.status, 0, r.stderr);
    const mp3 = path.join(pasta, "redacao1000-ep03.mp3");
    assert.ok(fs.existsSync(mp3));
    const info = JSON.parse(execFileSync("ffprobe", ["-v", "error", "-show_format", "-show_streams", "-of", "json", mp3]).toString());
    const audio = info.streams.find((s) => s.codec_type === "audio");
    assert.equal(audio.codec_name, "mp3");
    assert.equal(audio.channels, 1);
    assert.ok(info.streams.some((s) => s.disposition && s.disposition.attached_pic === 1), "capa embutida");
    assert.equal(info.format.tags.title, "Ep. 3 · A marca invisível do estigma");
    assert.equal(info.format.tags.track, "3");
    assert.ok(Number(info.format.duration) > 20);
    const loud = spawnSync("ffmpeg", ["-hide_banner", "-i", mp3, "-af", "ebur128", "-f", "null", "-"], { encoding: "utf8" }).stderr;
    const lufs = Number(loud.match(/I:\s+(-?\d+(\.\d+)?) LUFS\s*\n\s*Threshold[\s\S]*$/)[1]);
    assert.ok(lufs > -18 && lufs < -14, "volume integrado " + lufs + " LUFS");
  });

  it("PA02 · trechos já gerados vêm do cache (não são cobrados de novo)", () => {
    const cache = path.join(pasta, ".cache");
    const antes = fs.readdirSync(cache).filter((f) => f.endsWith(".mp3")).length;
    const r = rodar(["--provedor", "teste", "--ep", "3"]);
    assert.equal(r.status, 0, r.stderr);
    assert.equal(fs.readdirSync(cache).filter((f) => f.endsWith(".mp3")).length, antes);
  });

  it("PA03 · episódio especial e intervalo de episódios", () => {
    const r = rodar(["--provedor", "teste", "--ep", "especial"]);
    assert.equal(r.status, 0, r.stderr);
    assert.ok(fs.existsSync(path.join(pasta, "redacao1000-ep31-especial.mp3")));
    const { filtrar, episodios } = require(SCRIPT);
    assert.deepEqual(filtrar(episodios(), "2-4").map((e) => e.id), [2, 3, 4]);
    assert.equal(filtrar(episodios(), "todos").length, 31);
    assert.throws(() => filtrar(episodios(), "abc"), /--ep/);
  });

  it("PA04 · sem chave, explica qual variável definir e não cria arquivo", () => {
    const r = rodar(["--ep", "5"]);
    assert.equal(r.status, 1);
    assert.match(r.stderr, /GOOGLE_TTS_API_KEY/);
    assert.ok(!fs.existsSync(path.join(pasta, "redacao1000-ep05.mp3")));
    const e = rodar(["--provedor", "elevenlabs", "--ep", "5"]);
    assert.match(e.stderr, /ELEVENLABS_API_KEY/);
  });

  it("PA05 · textos longos são divididos sem quebrar frases", () => {
    const { dividir } = require(SCRIPT);
    const frase = "Esta é uma frase de teste com acentuação. ";
    const partes = dividir(frase.repeat(300), 4500);
    assert.ok(partes.length > 1);
    partes.forEach((p) => { assert.ok(Buffer.byteLength(p) <= 4500); assert.match(p, /\.$/); });
  });
});
