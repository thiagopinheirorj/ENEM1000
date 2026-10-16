/*
 * Gera os roteiros do podcast em podcast/roteiros/ a partir de js/content.js.
 * Uso: npm run podcast
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const Podcast = require("../js/podcast.js");

const raiz = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(raiz, "js/content.js"), "utf8"), sandbox);
vm.runInNewContext(fs.readFileSync(path.join(raiz, "js/conversa.js"), "utf8"), sandbox);
const { DEVOCIONAIS, APOSTA, CONVERSAS } = sandbox.window;

const PALAVRAS_POR_MINUTO = 150;
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const minutos = (t) => Math.max(1, Math.round(Podcast.palavras(t) / PALAVRAS_POR_MINUTO));

const pasta = path.join(__dirname, "roteiros");
fs.rmSync(pasta, { recursive: true, force: true });
fs.mkdirSync(pasta, { recursive: true });

const indice = ["# Episódios do podcast Redação 1000", "",
  "Gerado automaticamente por `npm run podcast` a partir do conteúdo do app (`js/content.js`) e das falas de cada episódio (`js/conversa.js`). Não edite à mão.", "",
  "Formato: conversa entre Thiago (professor de redação) e Isa (vestibulanda), apresentadores.", "",
  "| Ep. | Título | Eixo | Duração estimada | Roteiro |", "| --- | --- | --- | --- | --- |"];

DEVOCIONAIS.forEach((d) => {
  const trechos = Podcast.roteiroDia(d, CONVERSAS[d.id]);
  const nome = "ep" + String(d.id).padStart(2, "0") + "-" + slug(d.titulo) + ".md";
  const titulo = "Episódio " + d.id + " · " + d.titulo;
  const cabecalho = "> Eixo: " + d.eixo + " · Repertório: " + d.fonte + " · Duração estimada: " + minutos(trechos) + " min\n\n";
  fs.writeFileSync(path.join(pasta, nome), Podcast.markdown(titulo, trechos).replace("\n\n", "\n\n" + cabecalho));
  indice.push("| " + d.id + " | " + d.titulo + " | " + d.eixo + " | ~" + minutos(trechos) + " min | [" + nome + "](" + nome + ") |");
});

const especial = Podcast.roteiroAposta(APOSTA);
fs.writeFileSync(path.join(pasta, "ep31-especial-a-aposta-do-tema.md"),
  Podcast.markdown("Episódio especial · A aposta do tema", especial));
indice.push("| Especial | A aposta do tema (publicar na véspera da prova) | — | ~" + minutos(especial) + " min | [ep31-especial-a-aposta-do-tema.md](ep31-especial-a-aposta-do-tema.md) |");

fs.writeFileSync(path.join(pasta, "INDICE.md"), indice.join("\n") + "\n");
console.log("Roteiros gerados: " + (DEVOCIONAIS.length + 1) + " episódios em " + path.relative(raiz, pasta) + "/");
