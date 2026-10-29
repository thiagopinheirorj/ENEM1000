(function () {
  "use strict";

  var DEV = window.DEVOCIONAIS;
  var APOSTA = window.APOSTA;
  var Podcast = window.Podcast;
  var KIT = window.KIT;
  var TREINO = window.TREINO;
  var CONN_EX = window.CONECTIVOS_EX;
  var SIM_TEMAS = window.SIMULADO_TEMAS || [];
  var RED = window.REDACOES1000;
  var N = DEV.length;
  var STORE_KEY = "enem1000:v1";
  var app = document.getElementById("app");

  /* ---------- Datas (sempre no fuso local) ---------- */
  function isoDate(d) {
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }
  function parseIso(s) {
    var p = s.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function daysBetween(a, b) {
    return Math.round((parseIso(b) - parseIso(a)) / 86400000);
  }
  function addDays(s, n) {
    var d = parseIso(s);
    d.setDate(d.getDate() + n);
    return isoDate(d);
  }
  var today = isoDate(new Date());
  /* Atualiza "hoje" quando o app fica aberto na virada da meia-noite. */
  function atualizarHoje() {
    var t = isoDate(new Date());
    if (t === today) return false;
    today = t;
    return true;
  }

  /* Link público do app, incluído nas mensagens compartilhadas. Preencha após publicar. */
  var APP_URL = "https://thiagopinheirorj.github.io/ENEM1000/";

  /* Redação do ENEM 2026: 1º dia de prova, domingo 8/11, às 13h30 de Brasília (Edital Inep nº 64/2026). */
  var PROVA_PADRAO = "2026-11-08";
  var HORA_PROVA = "T13:30:00-03:00";

  /* Estatísticas anônimas de uso (js/analytics.js). Sem configuração, não faz nada. */
  function track(evento, dados) {
    try { if (window.R1000Analytics) window.R1000Analytics.track(evento, dados); } catch (e) {}
  }

  /* ---------- Armazenamento local ---------- */
  function emptyState() {
    return { inicio: today, done: {}, quiz: {}, textos: {}, treino: {}, favoritos: [], dias: [], fotos: {}, prova: PROVA_PADRAO, simulados: [], sim: {}, lembrete: {}, envios: [], correcoes: 0 };
  }
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return emptyState();
      var s = JSON.parse(raw);
      var base = emptyState();
      if (!s || typeof s !== "object" || Array.isArray(s)) return base;
      /* Campo ausente ou de tipo errado (dado antigo ou corrompido) volta ao padrão. */
      for (var k in base) {
        var v = s[k];
        var ok = v !== null && typeof v === typeof base[k] && Array.isArray(v) === Array.isArray(base[k]);
        if (ok && typeof v === "string") ok = /^\d{4}-\d{2}-\d{2}$/.test(v);
        if (!ok) s[k] = base[k];
      }
      return s;
    } catch (e) {
      return emptyState();
    }
  }
  var state = load();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* modo privado */ }
  }
  save();

  /* A trilha é pessoal: o dia 1 é o dia em que a pessoa abriu o app pela primeira vez. */
  function todayId() {
    var offset = Math.max(0, daysBetween(state.inicio, today));
    return (offset % N) + 1;
  }
  function byId(id) {
    for (var i = 0; i < N; i++) if (DEV[i].id === id) return DEV[i];
    return null;
  }

  function streak() {
    var set = {};
    state.dias.forEach(function (d) { set[d] = true; });
    var cursor = set[today] ? today : addDays(today, -1);
    var count = 0;
    while (set[cursor]) { count++; cursor = addDays(cursor, -1); }
    return count;
  }
  function bestStreak() {
    var days = state.dias.slice().sort();
    var best = 0, cur = 0, prev = null;
    days.forEach(function (d) {
      cur = prev && daysBetween(prev, d) === 1 ? cur + 1 : 1;
      if (cur > best) best = cur;
      prev = d;
    });
    return best;
  }
  function updateStreakBadge() {
    document.getElementById("streak-count").textContent = streak();
  }

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Embaralha as alternativas de forma estável por dia (a mesma ordem a cada visita). */
  function order(n, seed) {
    var idx = [];
    for (var i = 0; i < n; i++) idx.push(i);
    var x = seed >>> 0;
    function rand() { // mulberry32
      x = (x + 0x6d2b79f5) >>> 0;
      var t = Math.imul(x ^ (x >>> 15), 1 | x);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    for (var j = n - 1; j > 0; j--) {
      var k = Math.floor(rand() * (j + 1));
      var t = idx[j]; idx[j] = idx[k]; idx[k] = t;
    }
    return idx;
  }
  /* ---------- Modo podcast: lê o episódio com a voz do aparelho (Web Speech API) ---------- */
  var temVoz = !!(Podcast && window.speechSynthesis && typeof window.SpeechSynthesisUtterance === "function");
  var VELOCIDADES = [1, 1.25, 1.5, 0.85];
  var player = (function () {
    var trechos = [], i = 0, tocando = false, vel = 0, timer = null, aoMudar = null, geracao = 0;
    /* Duas vozes para a conversa: se o aparelho tiver só uma em português, muda o tom. */
    function vozes() {
      var vs = [];
      try { vs = window.speechSynthesis.getVoices() || []; } catch (e) { /* sem vozes */ }
      var pt = vs.filter(function (v) { return /^pt[-_]BR/i.test(v.lang); });
      if (!pt.length) pt = vs.filter(function (v) { return /^pt/i.test(v.lang); });
      return { thiago: pt[0] || null, isa: pt[1] || pt[0] || null, mesmaVoz: pt.length < 2 };
    }
    /* Frases curtas: alguns navegadores cortam falas longas no meio. */
    function partes(texto) {
      var frases = texto.match(/[^.!?…:]+[.!?…:]*["”]?\s*/g) || [texto];
      var out = [], atual = "";
      frases.forEach(function (f) {
        if ((atual + f).length > 220 && atual) { out.push(atual.trim()); atual = ""; }
        atual += f;
      });
      if (atual.trim()) out.push(atual.trim());
      return out;
    }
    function avisar() { if (aoMudar) aoMudar(estado()); }
    function falar() {
      if (!tocando) return;
      if (i >= trechos.length) { tocando = false; avisar(); return; }
      var tr = trechos[i], pedacos = partes(tr.texto), k = 0, g = geracao;
      function proximo() {
        if (g !== geracao || !tocando) return;
        if (k >= pedacos.length) {
          timer = setTimeout(function () {
            if (g !== geracao) return;
            i++;
            avisar();
            falar();
          }, (tr.pausa || 0) * 1000 + 150);
          return;
        }
        var u = new window.SpeechSynthesisUtterance(pedacos[k++]);
        u.lang = "pt-BR";
        u.rate = VELOCIDADES[vel];
        var vz = vozes(), quem = tr.voz === "isa" ? "isa" : "thiago";
        if (vz[quem]) u.voice = vz[quem];
        u.pitch = vz.mesmaVoz ? (quem === "isa" ? 1.2 : 0.8) : 1;
        u.onend = proximo;
        u.onerror = function () { if (g === geracao) proximo(); };
        window.speechSynthesis.speak(u);
      }
      proximo();
    }
    function silenciar() {
      geracao++;
      clearTimeout(timer);
      try { window.speechSynthesis.cancel(); } catch (e) { /* nada tocando */ }
    }
    function estado() {
      var bloco = "";
      for (var j = Math.min(i, trechos.length - 1); j >= 0; j--) if (trechos[j].bloco) { bloco = trechos[j].bloco; break; }
      return { tocando: tocando, ativo: trechos.length > 0, i: i, total: trechos.length, bloco: bloco, fim: i >= trechos.length, vel: VELOCIDADES[vel], fala: trechos[i] || null };
    }
    return {
      tocar: function (lista, cb) { silenciar(); trechos = lista; i = 0; tocando = true; aoMudar = cb; avisar(); falar(); },
      pausar: function () { silenciar(); tocando = false; avisar(); },
      continuar: function () { if (i >= trechos.length) i = 0; silenciar(); tocando = true; avisar(); falar(); }, // retoma do início do trecho
      parar: function () { silenciar(); var cb = aoMudar; tocando = false; trechos = []; i = 0; aoMudar = null; if (cb) cb(estado()); },
      velocidade: function () { vel = (vel + 1) % VELOCIDADES.length; if (tocando) { silenciar(); falar(); } avisar(); return VELOCIDADES[vel]; },
      estado: estado
    };
  })();

  function playerHtml() {
    return '<div class="card player" id="player" hidden aria-live="polite">' +
      '<div class="player-info"><strong id="pl-titulo"></strong><span id="pl-status"></span></div>' +
      '<p class="player-fala" id="pl-fala"></p>' +
      '<div class="player-actions">' +
        '<button class="btn small" id="pl-toggle">Pausar</button>' +
        '<button class="btn small ghost" id="pl-vel" aria-label="Velocidade da leitura">1x</button>' +
        '<button class="btn small ghost" id="pl-stop">Parar</button>' +
      "</div></div>";
  }
  /* Link do podcast no Spotify. Cole aqui o endereço do programa depois de publicar (open.spotify.com/show/...). */
  var SPOTIFY_URL = "";
  function spotifyHref() { return SPOTIFY_URL || "https://open.spotify.com/search/" + encodeURIComponent("Redação 1000"); }
  function spotifyBtn(rotulo) {
    return '<a class="icon-btn" id="spotify" href="' + esc(spotifyHref()) + '" target="_blank" rel="noopener">' + rotulo + "</a>";
  }

  /* Gera a imagem 1080x1920 (formato de stories) com a ideia-chave do dia. */
  function imagemIdeia(d) {
    var W = 1080, H = 1920, c = document.createElement("canvas");
    c.width = W; c.height = H;
    var x = c.getContext("2d");
    var g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#1f3a5f"); g.addColorStop(1, "#12223a");
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    function quebrar(texto, fonte, largura) {
      x.font = fonte;
      var linhas = [], atual = "";
      texto.split(/\s+/).forEach(function (w) {
        var t = atual ? atual + " " + w : w;
        if (x.measureText(t).width > largura && atual) { linhas.push(atual); atual = w; } else atual = t;
      });
      if (atual) linhas.push(atual);
      return linhas;
    }
    x.textAlign = "left"; x.textBaseline = "alphabetic";
    x.fillStyle = "#e3a956"; x.font = "600 44px system-ui, sans-serif";
    x.fillText("REDAÇÃO 1000 · DIA " + d.id, 90, 220);
    x.fillStyle = "#ffffff";
    var corpo = '"' + d.chave + '"';
    var tam = 76, linhas;
    do { tam -= 4; linhas = quebrar(corpo, "700 " + tam + 'px Georgia, "Times New Roman", serif', W - 180); } while (linhas.length * tam * 1.3 > 1000 && tam > 40);
    x.font = "700 " + tam + 'px Georgia, "Times New Roman", serif';
    var y = 560;
    linhas.forEach(function (l) { x.fillText(l, 90, y); y += tam * 1.3; });
    x.fillStyle = "#e3a956"; x.font = "italic 46px Georgia, serif";
    quebrar("— " + d.fonte, "italic 46px Georgia, serif", W - 180).forEach(function (l) { y += 30; x.fillText(l, 90, y); y += 30; });
    x.fillStyle = "#ffffff"; x.font = "500 40px system-ui, sans-serif";
    x.fillText("Repertório para o ENEM, todo dia", 90, H - 190);
    x.fillStyle = "#e3a956"; x.font = "600 38px system-ui, sans-serif";
    x.fillText(APP_URL.replace("https://", ""), 90, H - 130);
    return new Promise(function (res, rej) {
      c.toBlob(function (b) { if (b) res(b); else rej(new Error("toBlob")); }, "image/png");
    });
  }
  /* Compartilha a ideia-chave como imagem: no celular abre a folha de compartilhamento (Instagram incluso). */
  function ligarInstagram(d) {
    var b = document.getElementById("insta");
    if (!b) return;
    b.addEventListener("click", function () {
      b.disabled = true;
      imagemIdeia(d).then(function (blob) {
        var arq;
        try { arq = new File([blob], "redacao1000-dia" + d.id + ".png", { type: "image/png" }); } catch (e) { arq = null; }
        if (arq && navigator.canShare && navigator.canShare({ files: [arq] }) && navigator.share) {
          return navigator.share({ files: [arq], title: d.titulo, text: "Ideia-chave do dia: " + d.titulo + " " + APP_URL }).catch(function (e) {
            if (e && e.name === "AbortError") return;
            throw e;
          });
        }
        var url = URL.createObjectURL(blob), a = document.createElement("a");
        a.href = url; a.download = "redacao1000-dia" + d.id + ".png";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
        toast("Imagem salva. Abra o Instagram e poste nos stories ou no feed.");
      }).catch(function () { toast("Não foi possível gerar a imagem"); })
        .then(function () { b.disabled = false; });
    });
  }

  /* Liga o botão "Ouvir" ao player da tela. */
  function ligarPlayer(titulo, gerarTrechos) {
    var btn = document.getElementById("ouvir");
    if (!btn) return;
    var box = document.getElementById("player");
    var toggle = document.getElementById("pl-toggle");
    var velBtn = document.getElementById("pl-vel");
    function fmtVel(v) { return String(v).replace(".", ",") + "x"; }
    function mostrar(e) {
      if (!document.body.contains(box)) return;
      box.hidden = !e.ativo;
      btn.hidden = e.ativo;
      document.getElementById("pl-titulo").textContent = "🎧 " + titulo;
      document.getElementById("pl-status").textContent = e.fim
        ? "Episódio concluído"
        : (e.tocando ? "Tocando" : "Pausado") + " · " + (e.bloco || "") + " · " + (e.i + 1) + " de " + e.total;
      document.getElementById("pl-fala").textContent = e.fim || !e.fala ? "" : (Podcast.NOMES[e.fala.voz] || "") + ": " + e.fala.texto;
      toggle.textContent = e.tocando ? "Pausar" : (e.fim ? "Ouvir de novo" : "Continuar");
      velBtn.textContent = fmtVel(e.vel);
    }
    btn.addEventListener("click", function () { player.tocar(gerarTrechos(), mostrar); });
    toggle.addEventListener("click", function () { if (player.estado().tocando) player.pausar(); else player.continuar(); });
    velBtn.addEventListener("click", function () { player.velocidade(); });
    document.getElementById("pl-stop").addEventListener("click", function () { player.parar(); });
  }

  /* ---------- Fotos do texto (IndexedDB: imagens são grandes demais para o localStorage) ---------- */
  var fotos = (function () {
    var dbp;
    function db() {
      if (!dbp) {
        dbp = new Promise(function (res, rej) {
          try {
            var r = indexedDB.open("enem1000-fotos", 1);
            r.onupgradeneeded = function () { r.result.createObjectStore("fotos"); };
            r.onsuccess = function () { res(r.result); };
            r.onerror = function () { rej(r.error); };
          } catch (e) { rej(e); }
        });
      }
      return dbp;
    }
    function run(mode, fn) {
      return db().then(function (d) {
        return new Promise(function (res, rej) {
          var t = d.transaction("fotos", mode);
          var req = fn(t.objectStore("fotos"));
          t.oncomplete = function () { res(req && req.result); };
          t.onerror = function () { rej(t.error); };
        });
      });
    }
    return {
      get: function (id) { return run("readonly", function (st) { return st.get(id); }); },
      set: function (id, blob) { return run("readwrite", function (st) { return st.put(blob, id); }); },
      del: function (id) { return run("readwrite", function (st) { return st.delete(id); }); },
      clear: function () { return run("readwrite", function (st) { return st.clear(); }); }
    };
  })();

  /* Reduz a foto (máx. 1600 px, JPEG) para caber bem no aparelho. */
  function comprimir(file) {
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var w = img.naturalWidth, h = img.naturalHeight;
        var k = Math.min(1, 1600 / Math.max(w, h));
        var c = document.createElement("canvas");
        c.width = Math.round(w * k);
        c.height = Math.round(h * k);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        c.toBlob(function (b) { if (b) res(b); else rej(new Error("toBlob")); }, "image/jpeg", 0.82);
      };
      img.onerror = function () { URL.revokeObjectURL(url); rej(new Error("imagem inválida")); };
      img.src = url;
    });
  }

  /* ---------- Contagem regressiva ---------- */
  function horaProva() { return Date.parse((state.prova || PROVA_PADRAO) + HORA_PROVA); }
  function diasParaProva() {
    var diff = horaProva() - Date.now();
    return diff > 0 ? Math.floor(diff / 86400000) : 0;
  }
  /* A aposta do tema abre na véspera da prova (e continua disponível depois). */
  function dataLiberaAposta() { return addDays(state.prova || PROVA_PADRAO, -1); }
  function apostaLiberada() { return today >= dataLiberaAposta(); }

  function countdownHtml() {
    var diff = horaProva() - Date.now();
    var dataTxt = new Date(horaProva()).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Sao_Paulo" });
    if (diff <= 0) {
      if (diff > -6 * 3600000) return '<div class="cd-big">É hoje!</div><div class="cd-sub">Boa prova. Você treinou para isso. ✨</div>';
      return '<div class="cd-sub">A prova de ' + esc(dataTxt) + ' já passou. Defina a data da próxima em <a href="#/progresso">Progresso</a>.</div>';
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    if (isoDate(new Date()) === (state.prova || PROVA_PADRAO)) {
      return '<div class="cd-big">É hoje!</div><div class="cd-sub">A redação começa às 13h30 (Brasília). Faltam ' + h + "h" + String(m).padStart(2, "0") + "min.</div>";
    }
    return '<div class="cd-units">' +
        '<span><b>' + d + '</b>' + (d === 1 ? "dia" : "dias") + '</span>' +
        '<span><b>' + h + '</b>h</span>' +
        '<span><b>' + String(m).padStart(2, "0") + '</b>min</span>' +
      '</div>' +
      '<div class="cd-sub">para a redação do ENEM · ' + esc(dataTxt) + ', 13h30 (Brasília)</div>';
  }
  function updateCountdowns() {
    document.querySelectorAll(".js-countdown").forEach(function (el) { el.innerHTML = countdownHtml(); });
    var chip = document.getElementById("cd-chip");
    var n = diasParaProva();
    var eHoje = isoDate(new Date()) === (state.prova || PROVA_PADRAO);
    chip.hidden = horaProva() - Date.now() <= 0;
    chip.textContent = eHoje ? "⏳ hoje" : "⏳ " + n + "d";
    chip.title = eHoje ? "A redação do ENEM é hoje" : (n === 1 ? "Falta 1 dia" : "Faltam " + n + " dias") + " para a redação do ENEM";
  }
  setInterval(function () {
    if (atualizarHoje()) {
      updateStreakBadge();
      if ((location.hash || "#/hoje") === "#/hoje") route(); // a tela Hoje passa para o novo dia
    }
    updateCountdowns();
  }, 30000);

  /* Copia texto; se o navegador recusar, mostra o texto selecionado na caixa indicada. */
  function copiar(texto, caixaId, okMsg) {
    function fallback() {
      var box = document.getElementById(caixaId);
      box.hidden = false;
      box.value = texto;
      box.select();
      toast("Selecione o texto e copie");
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(function () { toast(okMsg); }, fallback);
    } else {
      fallback();
    }
  }

  /* Contato do professor Thiago para correção de redação. */
  var WHATSAPP_CORRECAO = "https://wa.me/5521972032275?text=" +
    encodeURIComponent("Olá, professor Thiago! Vim pelo app Redação 1000 e quero a correção comentada da minha redação.");
  var CARD_CORRECAO =
    '<article class="card correcao">' +
      "<h2>Quer subir sua nota de verdade?</h2>" +
      "<p>O professor Thiago corrige sua redação com comentários detalhados e dicas para você evoluir.</p>" +
      '<a class="btn" id="corrigir" href="' + WHATSAPP_CORRECAO + '" target="_blank" rel="noopener">✍️ Corrigir minha redação</a>' +
      '<p class="empty" style="margin-top:8px">WhatsApp (21) 97203-2275</p>' +
    "</article>";

  var AVISO =
    '<p class="disclaimer">App independente, sem vínculo com o Inep ou o MEC. ENEM é um exame do Inep.<br>' +
    '<a href="privacidade.html">Política de privacidade</a> · <a href="' + WHATSAPP_CORRECAO + '" target="_blank" rel="noopener">Correção de redação</a></p>';

  var NOMES_COMP = { 1: "Norma-padrão", 2: "Tema e repertório", 3: "Argumentação", 4: "Coesão", 5: "Proposta de intervenção" };

  var toastTimer;
  function toast(msg) {
    var old = document.querySelector(".toast");
    if (old) old.remove();
    var el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.textContent = msg;
    document.body.appendChild(el);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.remove(); }, 2600);
  }

  function formatDate(s) {
    return parseIso(s).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  }

  /* ---------- Tela: devocional do dia ---------- */
  function renderDay(id, isToday) {
    var d = byId(id);
    if (!d) { location.hash = "#/hoje"; return; }
    var done = !!state.done[id];
    var answered = id in state.quiz;
    var fav = state.favoritos.indexOf(id) >= 0;

    var leitura = d.leitura.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var tags = d.temas.map(function (t) { return '<span class="chip outline">' + esc(t) + "</span>"; }).join("");
    var options = order(d.quiz.opcoes.length, id).map(function (i, pos) {
      return '<button class="option" data-i="' + i + '">' + String.fromCharCode(65 + pos) + ") " + esc(d.quiz.opcoes[i]) + "</button>";
    }).join("");

    app.innerHTML =
      (isToday ? '<a class="countdown js-countdown" href="#/progresso" aria-label="Contagem regressiva para a redação do ENEM">' + countdownHtml() + "</a>" : "") +
      '<section class="day-head">' +
        '<p class="eyebrow">' + (isToday ? "Hoje · " + esc(formatDate(today)) : "Dia " + id + " da trilha") + "</p>" +
        "<h1>" + esc(d.titulo) + "</h1>" +
        '<div class="day-meta">' +
          '<span class="chip">' + esc(d.eixo) + "</span>" +
          "<span>Dia " + id + " de " + N + " · ~5 min</span>" +
          (done ? '<span class="chip ok">✓ Concluído</span>' : "") +
          '<button class="icon-btn" id="fav" aria-pressed="' + fav + '">' + (fav ? "★ Favorito" : "☆ Favoritar") + "</button>" +
          spotifyBtn("🎧 Ouvir no Spotify") +
        "</div>" +
      "</section>" +

      '<article class="card key">' +
        '<p class="eyebrow" style="color:inherit;opacity:.75">Ideia-chave</p>' +
        "<blockquote>" + esc(d.chave) + "</blockquote>" +
        '<div class="source">— ' + esc(d.fonte) + "</div>" +
        '<button class="btn insta" id="insta">📸 Compartilhar no Instagram</button>' +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">1</span><h2>Leitura</h2></div>' +
        leitura +
        '<div class="tags">' + tags + "</div>" +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">2</span><h2>Na redação, fica assim</h2></div>' +
        '<p class="example">' + esc(d.exemplo) + "</p>" +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">3</span><h2>Dica de ouro</h2></div>' +
        '<p class="tip-comp">Competência ' + d.dica.competencia + " · " + NOMES_COMP[d.dica.competencia] + "</p>" +
        "<h3>" + esc(d.dica.titulo) + "</h3>" +
        "<p>" + esc(d.dica.texto) + "</p>" +
      "</article>" +

      '<article class="card" id="quiz">' +
        '<div class="step"><span class="step-n">4</span><h2>Exercício rápido</h2></div>' +
        "<p><strong>" + esc(d.quiz.pergunta) + "</strong></p>" +
        '<div class="options">' + options + "</div>" +
        '<div id="quiz-fb" aria-live="polite"></div>' +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">5</span><h2>Desafio de escrita</h2></div>' +
        "<p>" + esc(d.desafio.enunciado) + "</p>" +
        '<label for="texto" class="eyebrow" style="display:block;margin-top:8px">Sua resposta</label>' +
        '<textarea id="texto" placeholder="Escreva aqui. Fica salvo só no seu aparelho."></textarea>' +
        '<div class="saved" id="saved" aria-live="polite"></div>' +
        '<div class="photo">' +
          '<p class="photo-hint">Escreveu no papel? Anexe uma foto da sua folha.</p>' +
          '<img id="foto-img" hidden alt="Foto do texto escrito à mão">' +
          '<div class="photo-actions">' +
            '<label class="btn ghost small" for="foto-input" id="foto-label">📷 Anexar foto</label>' +
            '<input type="file" id="foto-input" class="sr-only" accept="image/*">' +
            '<button class="btn danger small" id="foto-del" hidden>Remover foto</button>' +
          "</div>" +
        "</div>" +
        '<details class="model"><summary>Ver resposta-modelo</summary><p class="example">' + esc(d.desafio.modelo) + "</p></details>" +
      "</article>" +

      '<article class="card">' +
        '<p class="eyebrow" style="text-align:center">Para refletir</p>' +
        '<p class="reflection">' + esc(d.reflexao) + "</p>" +
      "</article>" +
      CARD_CORRECAO +

      '<div id="finish"></div>' +

      '<div class="row pager">' +
        '<a class="btn ghost" style="text-align:center;text-decoration:none" href="#/dia/' + (id === 1 ? N : id - 1) + '">← Anterior</a>' +
        '<a class="btn ghost" style="text-align:center;text-decoration:none" href="#/dia/' + (id === N ? 1 : id + 1) + '">Próximo →</a>' +
      "</div>";

    ligarInstagram(d);

    // Favorito
    document.getElementById("fav").addEventListener("click", function () {
      var i = state.favoritos.indexOf(id);
      if (i >= 0) state.favoritos.splice(i, 1); else state.favoritos.push(id);
      save();
      var on = i < 0;
      this.setAttribute("aria-pressed", on);
      this.textContent = on ? "★ Favorito" : "☆ Favoritar";
      toast(on ? "Salvo nos favoritos" : "Removido dos favoritos");
    });

    // Quiz
    var buttons = app.querySelectorAll(".option");
    function showQuiz(chosen) {
      var correct = d.quiz.correta;
      buttons.forEach(function (b) {
        var i = +b.getAttribute("data-i");
        b.disabled = true;
        if (i === correct) b.classList.add("correct");
        else if (i === chosen) b.classList.add("wrong");
      });
      var ok = chosen === correct;
      document.getElementById("quiz-fb").innerHTML =
        '<div class="feedback ' + (ok ? "ok" : "bad") + '"><strong>' + (ok ? "Acertou! " : "Quase. ") + "</strong>" + esc(d.quiz.explicacao) + "</div>";
    }
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var i = +b.getAttribute("data-i");
        state.quiz[id] = i;
        save();
        showQuiz(i);
        renderFinish();
      });
    });
    if (answered) showQuiz(state.quiz[id]);

    // Desafio (salvamento automático)
    var ta = document.getElementById("texto");
    var savedEl = document.getElementById("saved");
    ta.value = state.textos[id] || "";
    var saveTimer;
    ta.addEventListener("input", function () {
      clearTimeout(saveTimer);
      savedEl.textContent = "Salvando…";
      saveTimer = setTimeout(function () {
        var v = ta.value.trim();
        if (v) state.textos[id] = ta.value; else delete state.textos[id];
        save();
        savedEl.textContent = "Salvo no aparelho ✓";
      }, 400);
    });

    // Foto do texto
    var fotoImg = document.getElementById("foto-img");
    var fotoInput = document.getElementById("foto-input");
    var fotoDel = document.getElementById("foto-del");
    var fotoLabel = document.getElementById("foto-label");
    var fotoBlob = null;
    function mostrarFoto(blob) {
      fotoBlob = blob || null;
      if (fotoImg.src) URL.revokeObjectURL(fotoImg.src);
      fotoImg.hidden = !blob;
      fotoImg.src = blob ? URL.createObjectURL(blob) : "";
      fotoDel.hidden = !blob;
      fotoLabel.textContent = blob ? "📷 Trocar foto" : "📷 Anexar foto";
    }
    if (state.fotos[id]) fotos.get(id).then(mostrarFoto).catch(function () {});
    fotoInput.addEventListener("change", function () {
      var file = fotoInput.files && fotoInput.files[0];
      fotoInput.value = "";
      if (!file) return;
      savedEl.textContent = "Salvando foto…";
      comprimir(file)
        .then(function (blob) { return fotos.set(id, blob).then(function () { return blob; }); })
        .then(function (blob) {
          state.fotos[id] = true;
          save();
          mostrarFoto(blob);
          savedEl.textContent = "Foto salva no aparelho ✓";
        })
        .catch(function () {
          savedEl.textContent = "";
          toast("Não foi possível salvar a foto. Tente outra imagem.");
        });
    });
    fotoDel.addEventListener("click", function () {
      fotos.del(id).catch(function () {});
      delete state.fotos[id];
      save();
      mostrarFoto(null);
      toast("Foto removida");
    });

    // Conclusão
    function textoCompartilhar() {
      var n = diasParaProva();
      return "🔥 " + streak() + (streak() === 1 ? " dia seguido" : " dias seguidos") + " no Redação 1000!\n\n" +
        "📚 Repertório de hoje: " + d.fonte + "\n" +
        "💡 " + d.chave +
        (n > 0 ? "\n\n⏳ " + (n === 1 ? "Falta 1 dia" : "Faltam " + n + " dias") + " para a redação do ENEM." : "") +
        (APP_URL ? "\n\n" + APP_URL : "");
    }
    function renderFinish() {
      var box = document.getElementById("finish");
      if (state.done[id]) {
        var podeNativo = typeof navigator.share === "function";
        box.innerHTML =
          '<div class="card done-banner"><div class="big" aria-hidden="true">🌱</div>' +
          "<h2>Devocional concluído</h2>" +
          "<p>Sequência atual: <strong>" + streak() + " dia(s)</strong>. Volte amanhã para manter o ritmo.</p>" +
          '<div class="share">' +
            '<p class="eyebrow">Compartilhe sua conquista</p>' +
            '<div class="share-actions">' +
              (podeNativo ? '<button class="btn small" id="sh-nativo">Compartilhar</button>' : "") +
              '<a class="btn small ghost" id="sh-whats" target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(textoCompartilhar()) + '">WhatsApp</a>' +
              '<button class="btn small ghost" id="sh-copiar">Copiar mensagem</button>' +
            "</div>" +
            '<textarea id="sh-texto" hidden readonly aria-label="Mensagem para compartilhar"></textarea>' +
          "</div></div>";
        document.getElementById("sh-copiar").addEventListener("click", function () {
          copiar(textoCompartilhar(), "sh-texto", "Mensagem copiada ✓");
        });
        if (podeNativo) {
          document.getElementById("sh-nativo").addEventListener("click", function () {
            var dados = { title: "Redação 1000", text: textoCompartilhar() };
            if (fotoBlob && typeof File === "function") {
              var arq = new File([fotoBlob], "redacao1000-dia-" + id + ".jpg", { type: "image/jpeg" });
              if (navigator.canShare && navigator.canShare({ files: [arq] })) dados.files = [arq];
            }
            navigator.share(dados).catch(function (e) {
              if (e && e.name === "AbortError") return; // a pessoa fechou a janela
              copiar(textoCompartilhar(), "sh-texto", "Mensagem copiada ✓ Cole onde quiser.");
            });
          });
        }
        return;
      }
      var can = id in state.quiz;
      box.innerHTML =
        '<button class="btn" id="concluir" ' + (can ? "" : "disabled") + ">Concluir o devocional de hoje</button>" +
        (can ? "" : '<p class="saved" style="text-align:center">Responda o exercício rápido para concluir.</p>');
      var btn = document.getElementById("concluir");
      btn.addEventListener("click", function () {
        atualizarHoje();
        state.done[id] = today;
        track("dia_concluido", { dia: id });
        if (state.dias.indexOf(today) < 0) state.dias.push(today);
        save();
        updateStreakBadge();
        renderFinish();
        toast("Mais um dia de repertório! 🔥");
      });
    }
    renderFinish();
  }

  /* ---------- Tela: aposta do tema (véspera da prova) ---------- */
  function renderAposta() {
    if (!apostaLiberada()) {
      app.innerHTML =
        '<p class="eyebrow">Dia especial</p><h1>A aposta do tema</h1>' +
        '<div class="card"><p>🔒 Esta página abre na véspera da prova, em <strong>' +
        esc(parseIso(dataLiberaAposta()).toLocaleDateString("pt-BR", { day: "numeric", month: "long" })) +
        '</strong>. Até lá, siga a trilha diária.</p></div>' +
        '<a class="btn" style="display:block;text-align:center;text-decoration:none" href="#/dia/' + todayId() + '">Ir para o devocional de hoje</a>';
      return;
    }
    var a = APOSTA;
    app.innerHTML =
      '<a class="countdown js-countdown" href="#/progresso" aria-label="Contagem regressiva para a redação do ENEM">' + countdownHtml() + "</a>" +
      '<section class="day-head">' +
        '<p class="eyebrow">Véspera da prova · dia especial</p>' +
        "<h1>A aposta do tema</h1>" +
        '<div class="day-meta"><span>Pesquisa feita em ' + esc(a.pesquisaEm) + " com cursinhos, professores e o histórico do Inep</span>" +
          spotifyBtn("🎧 Ouvir no Spotify") +
        "</div>" +
      "</section>" +

      '<article class="card key">' +
        '<p class="eyebrow" style="color:inherit;opacity:.75">Tema mais provável</p>' +
        "<blockquote>" + esc(a.tema) + "</blockquote>" +
        '<div class="source">' + esc(a.resumo) + "</div>" +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">1</span><h2>Por que essa aposta</h2></div>' +
        a.porQue.map(function (r) {
          return '<div class="kit-item"><strong>' + esc(r.titulo) + '</strong><span class="muted">' + esc(r.texto) + "</span></div>";
        }).join("") +
        '<p class="empty" style="margin-top:10px">' + esc(a.porQueNaoIA) + "</p>" +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">2</span><h2>Repertórios para levar</h2></div>' +
        a.repertorios.map(function (r) {
          return '<div class="kit-item"><strong>' + esc(r.nome) + '</strong><span class="muted">' + esc(r.uso) + "</span></div>";
        }).join("") +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">3</span><h2>Roteiro da redação</h2></div>' +
        a.roteiro.map(function (r) {
          return '<div class="kit-item"><strong>' + esc(r.parte) + '</strong><span class="muted">' + esc(r.texto) + "</span></div>";
        }).join("") +
        '<h3 style="margin-top:14px">Introdução-modelo</h3>' +
        '<p class="example">' + esc(a.introducaoModelo) + "</p>" +
      "</article>" +

      '<article class="card">' +
        '<div class="step"><span class="step-n">4</span><h2>Se não for esse, os próximos da fila</h2></div>' +
        a.alternativas.map(function (r) {
          return '<div class="kit-item"><strong>' + esc(r.tema) + '</strong><span class="muted">' + esc(r.porque) + '</span><span class="muted" style="display:block;margin-top:4px"><em>Repertórios:</em> ' + esc(r.repertorios) + "</span></div>";
        }).join("") +
      "</article>" +

      '<article class="card">' +
        '<p class="eyebrow" style="text-align:center">Lembre-se</p>' +
        '<p class="reflection">O tema é segredo até a prova. Esta é uma aposta, não uma garantia. Leia a proposta com calma e escreva sobre o tema que estiver na folha.</p>' +
      "</article>" +

      '<details class="card"><summary style="cursor:pointer;font-weight:600">Fontes da pesquisa</summary><ul style="margin:10px 0 0;padding-left:20px">' +
        a.fontes.map(function (f) {
          return '<li><a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + esc(f.nome) + "</a></li>";
        }).join("") +
      "</ul></details>" +

      '<a class="btn ghost" style="display:block;text-align:center;text-decoration:none" href="#/dia/' + todayId() + '">Ver também o devocional de hoje</a>';
  }

  /* ---------- Tela: trilha ---------- */
  var filtroEixo = "Todos";
  function renderTrilha() {
    var eixos = ["Todos", "Favoritos"];
    DEV.forEach(function (d) { if (eixos.indexOf(d.eixo) < 0) eixos.push(d.eixo); });
    var tId = todayId();
    var concluidos = Object.keys(state.done).length;

    var lista = DEV.filter(function (d) {
      if (filtroEixo === "Todos") return true;
      if (filtroEixo === "Favoritos") return state.favoritos.indexOf(d.id) >= 0;
      return d.eixo === filtroEixo;
    });

    app.innerHTML =
      '<p class="eyebrow">Trilha de ' + N + " dias</p>" +
      "<h1>Todos os devocionais</h1>" +
      '<p style="color:var(--muted);margin:0">' + concluidos + " de " + N + " concluídos. Revise quando quiser.</p>" +
      '<div class="bar" aria-hidden="true"><span style="width:' + Math.round((concluidos / N) * 100) + '%"></span></div>' +
      '<div class="filters" role="group" aria-label="Filtrar por eixo">' +
        eixos.map(function (e) {
          return '<button class="filter" aria-pressed="' + (e === filtroEixo) + '" data-e="' + esc(e) + '">' + esc(e) + "</button>";
        }).join("") +
      "</div>" +
      (lista.length ? '<ul class="list">' + lista.map(function (d) {
        var cls = state.done[d.id] ? "done" : d.id === tId ? "today" : "";
        var mark = state.done[d.id] ? "✓" : d.id;
        return '<li><a href="#/dia/' + d.id + '">' +
          '<span class="num ' + cls + '">' + mark + "</span>" +
          '<span><span class="t">' + esc(d.titulo) + (state.favoritos.indexOf(d.id) >= 0 ? " ★" : "") + "</span><br>" +
          '<span class="s">Dia ' + d.id + " · " + esc(d.fonte.split(",")[0]) + (d.id === tId ? " · hoje" : "") + "</span></span>" +
          "</a></li>";
      }).join("") + "</ul>" : '<p class="empty">Nada por aqui ainda. Toque em ☆ em um devocional para salvá-lo.</p>') +
      (filtroEixo === "Todos" ? '<ul class="list" style="margin-top:8px"><li><a href="#/aposta">' +
        '<span class="num' + (apostaLiberada() ? " today" : "") + '">' + (apostaLiberada() ? "★" : "🔒") + "</span>" +
        '<span><span class="t">Dia especial: a aposta do tema</span><br>' +
        '<span class="s">' + (apostaLiberada() ? "Liberado · véspera da prova" : "Abre em " + esc(parseIso(dataLiberaAposta()).toLocaleDateString("pt-BR")) + ", véspera da prova") + "</span></span>" +
        "</a></li></ul>" : "");

    app.querySelectorAll(".filter").forEach(function (b) {
      b.addEventListener("click", function () {
        filtroEixo = b.getAttribute("data-e");
        renderTrilha();
      });
    });
  }

  /* ---------- Tela: kit de consulta ---------- */
  function renderKit() {
    app.innerHTML =
      '<p class="eyebrow">Consulta rápida</p>' +
      "<h1>Kit da redação nota 1000</h1>" +
      '<div class="kit-nav">' +
        ["competencias:Competências", "estrutura:Estrutura", "conectivos:Conectivos", "proposta:Proposta", "temas:Temas anteriores", "redacoes:Redações 1000", "zeram:O que zera"]
          .map(function (p) { var s = p.split(":"); return '<a class="chip outline" href="#kit-' + s[0] + '">' + s[1] + "</a>"; }).join("") +
      "</div>" +

      '<section class="card" id="kit-competencias"><h2>As 5 competências</h2>' +
        '<p class="empty">Cada uma vale até 200 pontos, somando 1000.</p>' +
        KIT.competencias.map(function (c) {
          return '<div class="kit-item"><strong>C' + c.n + " · " + esc(c.nome) + '</strong><span class="muted">' + esc(c.desc) + "</span></div>";
        }).join("") +
      "</section>" +

      '<section class="card" id="kit-estrutura"><h2>Estrutura em 4 parágrafos</h2>' +
        KIT.estrutura.map(function (e) {
          return '<div class="kit-item"><strong>' + esc(e.parte) + "</strong><ul>" +
            e.itens.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
        }).join("") +
      "</section>" +

      '<section class="card" id="kit-conectivos"><h2>Banco de conectivos</h2>' +
        KIT.conectivos.map(function (c) {
          return '<div class="kit-item"><strong>' + esc(c.funcao) + '</strong><div class="pill-list">' +
            c.lista.map(function (l) { return '<button type="button" class="conn" aria-expanded="false" data-c="' + esc(l) + '">' + esc(l) + "</button>"; }).join("") + '</div><p class="conn-ex example" hidden></p></div>';
        }).join("") +
        '<p class="empty">Toque em um conectivo para ver um exemplo em frase real.</p>' +
      "</section>" +

      '<section class="card" id="kit-proposta"><h2>Proposta de intervenção</h2>' +
        KIT.proposta.map(function (p) {
          return '<div class="kit-item"><strong>' + esc(p.elemento) + ' <span class="muted" style="font-weight:400">— ' + esc(p.pergunta) + '</span></strong><span class="example" style="display:block;margin-top:4px">' + esc(p.ex) + "</span></div>";
        }).join("") +
      "</section>" +

      '<section class="card" id="kit-temas"><h2>Temas anteriores do ENEM</h2>' +
        KIT.temasAnteriores.map(function (t) {
          return '<div class="kit-item"><strong>' + t.ano + '</strong><span class="muted">' + esc(t.tema) + "</span></div>";
        }).join("") +
      "</section>" +

      '<section class="card" id="kit-redacoes"><h2>Redações nota 1000 de cada ano</h2>' +
        '<p class="empty">Temas das provas e o que cada ano ensina. Os textos nota 1000 pertencem aos autores e ao Inep: leia-os no material oficial.</p>' +
        '<a class="btn ghost small" href="' + RED.link + '" target="_blank" rel="noopener">Abrir o site do Inep</a>' +
        '<div class="kit-item"><strong>O que as redações 1000 têm em comum</strong><ul>' +
          RED.padroes.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
        RED.anos.map(function (a) {
          return '<div class="kit-item"><strong>' + a.ano + '</strong><span class="muted">' + esc(a.tema) + '</span><span class="muted" style="display:block">Para treinar: ' + esc(a.foco) + "</span></div>";
        }).join("") +
      "</section>" +

      '<section class="card" id="kit-zeram"><h2>O que zera a redação</h2><ul style="margin:0;padding-left:20px">' +
        KIT.zeram.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") +
      '</ul><p class="empty" style="margin-top:10px">Desrespeitar os direitos humanos na proposta pode zerar a Competência 5.</p></section>' +
      AVISO;
  }

  /* ---------- Tela: treino ---------- */
  function treinoFeitas(id) {
    var t = state.treino[id];
    return t && typeof t === "object" ? Object.keys(t).length : 0;
  }
  function renderTreino() {
    app.innerHTML =
      '<p class="eyebrow">Pratique</p><h1>Treino</h1>' +
      '<p class="empty">Oficinas rápidas para as dúvidas mais comuns da redação. Leia, responda e escreva.</p>' +
      TREINO.map(function (o) {
        var f = treinoFeitas(o.id);
        return '<a class="card oficina" href="#/treino/' + o.id + '"><span class="oficina-ico" aria-hidden="true">' + o.icone + "</span><span><strong>" +
          esc(o.titulo) + '</strong><span class="muted" style="display:block">' + esc(o.resumo) + "</span>" +
          '<span class="chip ' + (f >= o.questoes.length ? "ok" : "outline") + '">' + f + "/" + o.questoes.length + " questões</span></span></a>";
      }).join("") +
      '<a class="card oficina" href="#/correcao"><span class="oficina-ico" aria-hidden="true">⚡</span><span><strong>Correção rápida</strong>' +
        '<span class="muted" style="display:block">Cole sua introdução ou proposta e veja na hora o que falta pelas competências.</span></span></a>' +
      '<a class="card oficina" href="#/enviar"><span class="oficina-ico" aria-hidden="true">📷</span><span><strong>Enviar redação por foto</strong>' +
        '<span class="muted" style="display:block">Fotografe sua redação escrita à mão e mande para a correção do professor Thiago.</span></span></a>' +
      '<a class="card oficina" href="#/simulado"><span class="oficina-ico" aria-hidden="true">⏱️</span><span><strong>Simulado</strong>' +
        '<span class="muted" style="display:block">Tema surpresa, 60 minutos e folha de 30 linhas, como na prova.</span>' +
        '<span class="chip outline">' + state.simulados.length + " feitos</span></span></a>" + AVISO;
  }

  /* ---------- Tela: simulado (tema surpresa, 60 min, 30 linhas) ---------- */
  var SIM_MS = 60 * 60 * 1000, simTimer = null;
  function simLinhas(txt) {
    /* Estimativa: ~70 caracteres por linha manuscrita da folha oficial. */
    return (txt || "").split("\n").reduce(function (n, l) { return n + Math.max(1, Math.ceil(l.length / 70)); }, 0) - (txt ? 0 : 1);
  }
  function renderSimulado() {
    clearInterval(simTimer);
    var s = state.sim;
    if (!s.tema) {
      var feitos = state.simulados.slice().reverse();
      app.innerHTML =
        '<a class="back" href="#/treino">‹ Treino</a><p class="eyebrow">Treino de prova</p><h1>Simulado</h1>' +
        '<section class="card"><p>Você recebe um tema surpresa e tem <strong>60 minutos</strong> para escrever um texto dissertativo-argumentativo de até <strong>30 linhas</strong>.</p>' +
        '<ol class="passos"><li>Leia o tema e planeje em 10 minutos.</li><li>Escreva a introdução com tese.</li><li>Dois parágrafos de desenvolvimento com repertório.</li><li>Conclusão com proposta completa: agente, ação, meio, finalidade e detalhamento.</li></ol>' +
        '<button class="btn" id="sim-start">Sortear tema e começar</button></section>' +
        (feitos.length ? '<section class="card"><h2>Seus simulados</h2>' + feitos.map(function (f, i) {
          return '<details class="kit-item"><summary><strong>' + esc(f.tema) + '</strong> <span class="muted">' + esc(f.data) + " · " + Math.round(f.seg / 60) + " min · " + simLinhas(f.texto) + " linhas</span></summary><p style=\"white-space:pre-wrap\">" + esc(f.texto) + "</p></details>";
        }).join("") + "</section>" : "") +
        '<a class="btn ghost" href="#/enviar">📷 Enviar foto do simulado para correção</a>' + AVISO;
      document.getElementById("sim-start").addEventListener("click", function () {
        var usados = state.simulados.map(function (f) { return f.tema; });
        var livres = SIM_TEMAS.filter(function (t) { return usados.indexOf(t) < 0; });
        var pool = livres.length ? livres : SIM_TEMAS;
        state.sim = { tema: pool[Math.floor(Math.random() * pool.length)], inicio: Date.now(), texto: "" };
        save();
        track("simulado_inicio");
        renderSimulado();
      });
      return;
    }
    app.innerHTML =
      '<p class="eyebrow">Simulado em andamento</p><h1>Tema surpresa</h1>' +
      '<section class="card"><blockquote>' + esc(s.tema) + '</blockquote>' +
        '<p class="sim-tempo" id="sim-tempo" aria-live="off">60:00</p></section>' +
      '<section class="card"><textarea id="sim-txt" class="folha" rows="30" placeholder="Escreva sua redação aqui. Fica salva no seu aparelho."></textarea>' +
        '<p class="empty" id="sim-lin">0 / 30 linhas</p>' +
        '<button class="btn" id="sim-fim">Entregar redação</button>' +
        '<button class="btn ghost" id="sim-sair" style="margin-top:8px">Desistir deste tema</button></section>';
    var ta = document.getElementById("sim-txt"), lin = document.getElementById("sim-lin"), tempo = document.getElementById("sim-tempo");
    ta.value = s.texto || "";
    function contar() {
      var n = simLinhas(ta.value);
      lin.textContent = n + " / 30 linhas" + (n > 30 ? " · passou do limite!" : n < 7 && ta.value ? " · menos de 7 linhas zera" : "");
      lin.className = n > 30 ? "feedback bad" : "empty";
    }
    function tick() {
      var resta = SIM_MS - (Date.now() - s.inicio);
      if (resta <= 0) { tempo.textContent = "00:00 · tempo esgotado"; tempo.classList.add("fim"); clearInterval(simTimer); return; }
      var m = Math.floor(resta / 60000), sg = Math.floor((resta % 60000) / 1000);
      tempo.textContent = (m < 10 ? "0" : "") + m + ":" + (sg < 10 ? "0" : "") + sg;
      tempo.classList.toggle("alerta", resta < 10 * 60000);
    }
    ta.addEventListener("input", function () { s.texto = ta.value; save(); contar(); });
    contar(); tick();
    simTimer = setInterval(function () { if (!document.getElementById("sim-tempo")) { clearInterval(simTimer); return; } tick(); }, 1000);
    document.getElementById("sim-fim").addEventListener("click", function () {
      if (!ta.value.trim()) { toast("Escreva antes de entregar"); return; }
      state.simulados.push({ tema: s.tema, texto: ta.value, data: today, seg: Math.min(SIM_MS, Date.now() - s.inicio) / 1000 | 0 });
      state.sim = {};
      save();
      track("simulado_entregue", { linhas: simLinhas(ta.value) });
      toast("Simulado entregue!");
      renderSimulado();
    });
    document.getElementById("sim-sair").addEventListener("click", function () {
      state.sim = {}; save(); renderSimulado();
    });
  }

  /* ---------- Tela: enviar redação por foto para correção ---------- */
  var WHATS_PROF = "5521972032275";
  function renderEnviar() {
    var fotosSel = [];
    var ult = state.simulados.length ? state.simulados[state.simulados.length - 1].tema : "";
    app.innerHTML =
      '<a class="back" href="#/treino">‹ Treino</a><p class="eyebrow">Correção com o professor</p><h1>Enviar redação por foto</h1>' +
      '<section class="card"><ol class="passos"><li>Escreva à mão, de preferência na folha de 30 linhas.</li>' +
        "<li>Fotografe de cima, com boa luz e a folha inteira aparecendo.</li><li>Envie pelo WhatsApp. O professor Thiago responde com a correção comentada.</li></ol></section>" +
      '<section class="card"><label for="env-tema"><strong>Tema da redação</strong></label>' +
        '<input type="text" id="env-tema" maxlength="160" placeholder="Ex.: Desafios para a doação de órgãos no Brasil" value="' + esc(ult) + '" style="width:100%;margin-top:6px">' +
        '<label class="btn ghost" for="env-foto" style="margin-top:12px">📷 Tirar ou escolher foto (até 3 páginas)</label>' +
        '<input type="file" id="env-foto" class="sr-only" accept="image/*" multiple>' +
        '<div class="env-thumbs" id="env-thumbs"></div>' +
        '<button class="btn" id="env-enviar" disabled style="margin-top:12px">Enviar pelo WhatsApp</button>' +
        '<p class="empty" id="env-info" style="margin-top:8px">A foto só sai do seu aparelho quando você envia.</p></section>' +
      (state.envios.length ? '<section class="card"><h2>Redações enviadas</h2>' + state.envios.slice().reverse().map(function (e) {
        return '<div class="kit-item"><strong>' + esc(e.tema || "Sem tema") + '</strong><span class="muted">' + esc(parseIso(e.data).toLocaleDateString("pt-BR")) + " · " + e.paginas + " foto(s)</span></div>";
      }).join("") + "</section>" : "") + AVISO;
    var input = document.getElementById("env-foto"), thumbs = document.getElementById("env-thumbs"), btn = document.getElementById("env-enviar");
    function texto() {
      var tema = document.getElementById("env-tema").value.trim();
      return "Oi, professor Thiago! Vim pelo app Redação 1000 (" + contextoAluno() + ") e quero a correção comentada da minha redação." +
        (tema ? " Tema: " + tema + "." : "");
    }
    input.addEventListener("change", function () {
      var arqs = Array.prototype.slice.call(input.files || [], 0, 3);
      input.value = "";
      if (!arqs.length) return;
      Promise.all(arqs.map(comprimir)).then(function (bs) {
        fotosSel = bs;
        thumbs.innerHTML = bs.map(function (b, i) { return '<img alt="Página ' + (i + 1) + '" src="' + URL.createObjectURL(b) + '">'; }).join("");
        btn.disabled = false;
      }).catch(function () { toast("Não consegui abrir a foto. Tente outra."); });
    });
    function registrar() {
      state.envios.push({ data: today, tema: document.getElementById("env-tema").value.trim().slice(0, 160), paginas: fotosSel.length });
      save();
      track("redacao_enviada", { paginas: fotosSel.length });
    }
    btn.addEventListener("click", function () {
      var arqs = typeof File === "function" ? fotosSel.map(function (b, i) { return new File([b], "redacao-pagina-" + (i + 1) + ".jpg", { type: "image/jpeg" }); }) : [];
      if (arqs.length && navigator.canShare && navigator.canShare({ files: arqs }) && navigator.share) {
        navigator.share({ files: arqs, text: texto() }).then(function () { registrar(); renderEnviar(); toast("Enviado! Escolha o contato do professor."); })
          .catch(function (e) { if (!e || e.name !== "AbortError") enviarSemArquivo(); });
        return;
      }
      enviarSemArquivo();
    });
    /* Sem compartilhar arquivo: baixa as fotos e abre o WhatsApp com a mensagem; o aluno anexa. */
    function enviarSemArquivo() {
      fotosSel.forEach(function (b, i) {
        var a = document.createElement("a");
        a.href = URL.createObjectURL(b); a.download = "redacao-pagina-" + (i + 1) + ".jpg";
        document.body.appendChild(a); a.click(); a.remove();
      });
      registrar();
      window.open("https://wa.me/" + WHATS_PROF + "?text=" + encodeURIComponent(texto() + " Vou anexar a foto aqui."), "_blank", "noopener");
      document.getElementById("env-info").textContent = "Fotos salvas no aparelho. No WhatsApp, toque no clipe 📎 e anexe a foto.";
    }
  }

  /* ---------- Tela: correção rápida (introdução ou proposta) ---------- */
  function renderCorrecao() {
    app.innerHTML =
      '<a class="back" href="#/treino">‹ Treino</a><p class="eyebrow">Retorno na hora</p><h1>Correção rápida</h1>' +
      '<section class="card"><p>Cole sua <strong>introdução</strong> ou sua <strong>proposta de intervenção</strong> e veja o que já está bom e o que falta, pelas competências do ENEM.</p>' +
        '<div class="row" role="radiogroup" aria-label="O que você vai corrigir" style="margin-top:10px;flex-wrap:wrap">' +
          '<button class="chip on" data-tipo="introducao" role="radio" aria-checked="true">Introdução</button>' +
          '<button class="chip" data-tipo="proposta" role="radio" aria-checked="false">Proposta de intervenção</button></div>' +
        '<textarea id="cr-txt" rows="7" style="margin-top:10px" aria-label="Seu texto" placeholder="Cole ou escreva aqui. O texto não sai do seu aparelho."></textarea>' +
        '<button class="btn" id="cr-ok" style="margin-top:8px">Corrigir</button></section>' +
      '<div id="cr-res"></div>' + AVISO;
    var tipo = "introducao";
    app.querySelectorAll("[data-tipo]").forEach(function (b) {
      b.addEventListener("click", function () {
        tipo = b.getAttribute("data-tipo");
        app.querySelectorAll("[data-tipo]").forEach(function (x) { var on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-checked", on ? "true" : "false"); });
      });
    });
    document.getElementById("cr-ok").addEventListener("click", function () {
      var txt = document.getElementById("cr-txt").value;
      var res = document.getElementById("cr-res");
      if (txt.trim().length < 20) { toast("Escreva pelo menos uma frase completa"); return; }
      var r = window.CORRECAO.analisar(tipo, txt);
      state.correcoes = (state.correcoes || 0) + 1; save();
      track("correcao_rapida", { tipo: tipo, ok: r.ok, total: r.total });
      res.innerHTML = '<section class="card"><h2>' + r.ok + " de " + r.total + " pontos atendidos</h2>" +
        r.itens.map(function (i) {
          return '<div class="feedback ' + (i.ok ? "ok" : "bad") + '" style="margin-top:6px"><strong>' + i.c + (i.ok ? " ✓ " : " ✗ ") + "</strong>" + esc(i.msg) + "</div>";
        }).join("") +
        '<p class="empty" id="cr-ia" style="margin-top:8px">Correção automática por regras: é um guia, não uma nota oficial.</p>' +
        '<a class="btn ghost" href="#/enviar" style="margin-top:8px">📷 Quer a correção completa? Envie para o professor</a></section>';
      window.CORRECAO.pedirIA(tipo, "", txt).then(function (c) {
        var box = document.getElementById("cr-ia");
        if (c && box) box.textContent = "Comentário da IA: " + c;
      });
    });
  }

  function renderOficina(id) {
    var o = TREINO.filter(function (x) { return x.id === id; })[0];
    if (!o) { renderTreino(); return; }
    var prog = state.treino[id] && typeof state.treino[id] === "object" ? state.treino[id] : {};
    app.innerHTML =
      '<a class="back" href="#/treino">‹ Treino</a>' +
      '<p class="eyebrow">Oficina ' + o.id + " de " + TREINO.length + "</p><h1>" + esc(o.titulo) + "</h1>" +
      '<section class="card"><p>' + esc(o.ideia) + '</p><ol class="passos">' +
        o.passos.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol></section>" +
      '<section class="card"><h2>Compare</h2>' +
        '<div class="feedback bad"><strong>Fraco: </strong>' + esc(o.fraco) + "</div>" +
        '<div class="feedback ok" style="margin-top:8px"><strong>Melhor: </strong>' + esc(o.forte) + "</div>" +
        '<p class="empty" style="margin-top:8px">' + esc(o.porque) + "</p></section>" +
      o.questoes.map(function (q, qi) {
        var resp = prog[qi];
        return '<section class="card quest" data-q="' + qi + '"><h2>Questão ' + (qi + 1) + "</h2><p>" + esc(q.p) + '</p><div class="options">' +
          q.o.map(function (txt, i) {
            var cls = resp === undefined ? "" : (i === q.c ? " correct" : (i === resp ? " wrong" : ""));
            return '<button class="option' + cls + '" data-i="' + i + '"' + (resp === undefined ? "" : " disabled") + ">" + String.fromCharCode(65 + i) + ") " + esc(txt) + "</button>";
          }).join("") + "</div>" +
          '<div class="fb">' + (resp === undefined ? "" : '<div class="feedback ' + (resp === q.c ? "ok" : "bad") + '"><strong>' + (resp === q.c ? "Acertou! " : "Quase. ") + "</strong>" + esc(q.e) + "</div>") + "</div></section>";
      }).join("") +
      '<section class="card"><h2>Escreva</h2><p>' + esc(o.escreva) + '</p><textarea id="t-resp" rows="4" placeholder="Escreva aqui. Nada sai do seu aparelho."></textarea>' +
        '<button class="btn ghost" id="t-ver" style="margin-top:8px">Ver uma resposta possível</button>' +
        '<div class="example" id="t-modelo" hidden>' + esc(o.modelo) + "</div></section>" +
      (id < TREINO.length ? '<a class="btn" href="#/treino/' + (id + 1) + '">Próxima oficina ›</a>' : '<a class="btn" href="#/treino">Voltar ao Treino</a>') +
      AVISO;
    app.querySelectorAll(".quest").forEach(function (box) {
      var qi = +box.getAttribute("data-q"), q = o.questoes[qi];
      box.querySelectorAll(".option").forEach(function (b) {
        b.addEventListener("click", function () {
          var i = +b.getAttribute("data-i");
          if (!state.treino[id] || typeof state.treino[id] !== "object") state.treino[id] = {};
          state.treino[id][qi] = i;
          save();
          box.querySelectorAll(".option").forEach(function (x) {
            var xi = +x.getAttribute("data-i");
            x.disabled = true;
            if (xi === q.c) x.classList.add("correct"); else if (xi === i) x.classList.add("wrong");
          });
          box.querySelector(".fb").innerHTML = '<div class="feedback ' + (i === q.c ? "ok" : "bad") + '"><strong>' + (i === q.c ? "Acertou! " : "Quase. ") + "</strong>" + esc(q.e) + "</div>";
        });
      });
    });
    document.getElementById("t-ver").addEventListener("click", function () {
      var m = document.getElementById("t-modelo");
      m.hidden = !m.hidden;
      this.textContent = m.hidden ? "Ver uma resposta possível" : "Esconder a resposta";
    });
  }

  /* Exemplos dos conectivos: toque para ver a frase */
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".conn");
    if (!b) return;
    var item = b.closest(".kit-item");
    var box = item.querySelector(".conn-ex");
    var aberto = b.getAttribute("aria-expanded") === "true";
    item.querySelectorAll(".conn").forEach(function (x) { x.setAttribute("aria-expanded", "false"); x.classList.remove("on"); });
    if (aberto) { box.hidden = true; return; }
    b.setAttribute("aria-expanded", "true");
    b.classList.add("on");
    box.hidden = false;
    box.textContent = CONN_EX[b.getAttribute("data-c")] || "";
  });

  /* ---------- Tela: progresso ---------- */
  function renderProgresso() {
    var concluidos = Object.keys(state.done).length;
    var respondidas = Object.keys(state.quiz);
    var acertos = respondidas.filter(function (id) { var d = byId(+id); return d && d.quiz.correta === state.quiz[id]; }).length;
    var taxa = respondidas.length ? Math.round((acertos / respondidas.length) * 100) + "%" : "—";

    var week = [];
    for (var i = 6; i >= 0; i--) {
      var day = addDays(today, -i);
      var label = parseIso(day).toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
      week.push('<div>' + esc(label) + '<div class="dot ' + (state.dias.indexOf(day) >= 0 ? "on" : "") + '">' + (state.dias.indexOf(day) >= 0 ? "✓" : "") + "</div></div>");
    }

    var textos = Object.keys(state.textos).map(Number).sort(function (a, b) { return a - b; });
    var cadernoIds = Object.keys(state.textos).concat(Object.keys(state.fotos))
      .map(Number).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(function (a, b) { return a - b; });
    var favs = state.favoritos.slice().sort(function (a, b) { return a - b; });

    app.innerHTML =
      '<p class="eyebrow">Seu caminho</p>' +
      "<h1>Progresso</h1>" +
      '<div class="stats">' +
        '<div class="stat"><div class="v">' + streak() + '</div><div class="l">dias seguidos</div></div>' +
        '<div class="stat"><div class="v">' + bestStreak() + '</div><div class="l">melhor sequência</div></div>' +
        '<div class="stat"><div class="v">' + concluidos + "/" + N + '</div><div class="l">devocionais</div></div>' +
        '<div class="stat"><div class="v">' + taxa + '</div><div class="l">acertos no quiz</div></div>' +
      "</div>" +

      '<section class="card"><h2>Contagem para o ENEM</h2>' +
        '<div class="countdown js-countdown inline">' + countdownHtml() + "</div>" +
        '<label for="prova-data" class="eyebrow" style="display:block;margin-top:14px">Data da prova de redação</label>' +
        '<div class="row" style="flex-wrap:wrap">' +
          '<input type="date" id="prova-data" value="' + esc(state.prova) + '">' +
          '<button class="btn ghost small" id="prova-padrao" style="flex:none">Usar data oficial</button>' +
        "</div>" +
        '<p class="empty" style="margin-top:8px">Data oficial: 8 de novembro de 2026, às 13h30 (Brasília). Confirme sempre em enem.inep.gov.br.</p>' +
      "</section>" +

      '<section class="card"><h2>Últimos 7 dias</h2><div class="week">' + week.join("") + "</div></section>" +

      '<section class="card"><h2>Meu caderno de frases</h2>' +
        (cadernoIds.length ? cadernoIds.map(function (id) {
          var d = byId(id);
          return d ? '<div class="note"><a href="#/dia/' + id + '">Dia ' + id + " · " + esc(d.titulo) + (state.fotos[id] ? " 📷" : "") + "</a>" +
            (state.textos[id] ? "<p>" + esc(state.textos[id]) + "</p>" : "") +
            (state.fotos[id] ? '<img class="note-photo" data-foto="' + id + '" alt="Foto do texto do dia ' + id + '" hidden>' : "") +
            "</div>" : "";
        }).join("") : '<p class="empty">Suas respostas dos desafios de escrita aparecem aqui — um caderno de repertório escrito por você.</p>') +
      "</section>" +

      '<section class="card"><h2>Repertórios favoritos</h2>' +
        (favs.length ? favs.map(function (id) {
          var d = byId(id);
          return d ? '<div class="note"><a href="#/dia/' + id + '">' + esc(d.fonte) + "</a><p>" + esc(d.chave) + "</p></div>" : "";
        }).join("") : '<p class="empty">Toque em ☆ Favoritar em um devocional para montar seu banco de repertórios.</p>') +
      "</section>" +

      '<section class="card" id="lembrete"><h2>Lembrete diário</h2>' +
        '<p class="empty">Escolha um horário para lembrar do devocional de 5 minutos.</p>' +
        '<div class="row" style="margin-top:10px;flex-wrap:wrap">' +
          '<input type="time" id="lem-hora" aria-label="Horário do lembrete" value="' + esc(state.lembrete.hora || "19:00") + '">' +
          '<button class="btn small" id="lem-cal" style="flex:none">📅 Pôr na agenda do celular</button>' +
          '<button class="btn ghost small" id="lem-notif" style="flex:none">' + (state.lembrete.notif ? "🔔 Notificação ativa" : "🔔 Ativar notificação") + "</button>" +
        "</div>" +
        '<p class="empty" style="margin-top:8px">A agenda avisa todo dia, mesmo com o app fechado. A notificação aparece quando o app estiver aberto ou em segundo plano.</p>' +
      "</section>" +

      '<section class="card"><h2>Dados</h2>' +
        '<p class="empty">Seus textos e respostas ficam salvos apenas neste aparelho. O app conta acessos de forma anônima, sem nome nem telefone, para melhorar o conteúdo. Você começou a trilha em ' + esc(parseIso(state.inicio).toLocaleDateString("pt-BR")) + ".</p>" +
        '<div class="row" style="margin-top:10px;flex-wrap:wrap">' +
          '<button class="btn ghost small" id="exportar">Copiar caderno</button>' +
          '<button class="btn danger small" id="zerar">Recomeçar do zero</button>' +
        "</div>" +
        '<textarea id="caderno-texto" hidden readonly aria-label="Texto do caderno"></textarea>' +
      "</section>" +
      AVISO;

    document.getElementById("exportar").addEventListener("click", function () {
      var linhas = ["Redação 1000 — Meu caderno de repertório", ""];
      favs.forEach(function (id) {
        var d = byId(id);
        if (d) linhas.push("★ " + d.fonte, "  " + d.chave, "");
      });
      textos.forEach(function (id) {
        var d = byId(id);
        if (d) linhas.push("Dia " + id + " · " + d.titulo, d.desafio.enunciado, "> " + state.textos[id], "");
      });
      copiar(linhas.join("\n"), "caderno-texto", "Caderno copiado ✓");
    });

    app.querySelectorAll("img[data-foto]").forEach(function (img) {
      fotos.get(+img.getAttribute("data-foto")).then(function (b) {
        if (!b) return;
        img.src = URL.createObjectURL(b);
        img.hidden = false;
      }).catch(function () {});
    });

    var lemHora = document.getElementById("lem-hora");
    lemHora.addEventListener("change", function () {
      if (!/^\d{2}:\d{2}$/.test(lemHora.value)) return;
      state.lembrete.hora = lemHora.value; save(); toast("Horário salvo");
    });
    document.getElementById("lem-cal").addEventListener("click", function () {
      var hora = /^\d{2}:\d{2}$/.test(lemHora.value) ? lemHora.value : "19:00";
      state.lembrete.hora = hora; save();
      var ini = today.replace(/-/g, "") + "T" + hora.replace(":", "") + "00";
      var fim = today.replace(/-/g, "") + "T" + hora.replace(":", "") + "00";
      var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Redacao1000//PT", "BEGIN:VEVENT",
        "UID:redacao1000-lembrete@thiagopinheirorj", "DTSTAMP:" + ini + "Z",
        "DTSTART;TZID=America/Sao_Paulo:" + ini, "DTEND;TZID=America/Sao_Paulo:" + fim,
        "RRULE:FREQ=DAILY", "SUMMARY:✦ Redação 1000: devocional de 5 minutos",
        "DESCRIPTION:Seu repertório de hoje está pronto: " + APP_URL, "URL:" + APP_URL,
        "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:Hora do devocional de redação", "END:VALARM",
        "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      var a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
      a.download = "lembrete-redacao1000.ics";
      document.body.appendChild(a); a.click(); a.remove();
      track("lembrete_agenda");
      toast("Abra o arquivo para salvar na agenda");
    });
    document.getElementById("lem-notif").addEventListener("click", function () {
      var b = this;
      if (!("Notification" in window)) { toast("Este navegador não tem notificações. Use a agenda."); return; }
      Notification.requestPermission().then(function (p) {
        if (p !== "granted") { toast("Permissão negada. Use a agenda."); return; }
        state.lembrete.notif = true; state.lembrete.hora = lemHora.value || "19:00"; save();
        b.textContent = "🔔 Notificação ativa";
        track("lembrete_notif");
        toast("Notificação ativada");
      });
    });

    var provaInput = document.getElementById("prova-data");
    provaInput.addEventListener("change", function () {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(provaInput.value)) return;
      state.prova = provaInput.value;
      save();
      updateCountdowns();
      toast("Data da prova atualizada");
    });
    document.getElementById("prova-padrao").addEventListener("click", function () {
      state.prova = PROVA_PADRAO;
      provaInput.value = PROVA_PADRAO;
      save();
      updateCountdowns();
      toast("Data oficial restaurada");
    });

    var zerar = document.getElementById("zerar");
    var armado = false;
    zerar.addEventListener("click", function () {
      if (!armado) {
        armado = true;
        zerar.textContent = "Toque de novo para apagar tudo";
        setTimeout(function () {
          armado = false;
          if (document.body.contains(zerar)) zerar.textContent = "Recomeçar do zero";
        }, 4000);
        return;
      }
      state = emptyState();
      fotos.clear().catch(function () {});
      save();
      updateStreakBadge();
      updateCountdowns();
      renderProgresso();
      toast("Trilha reiniciada");
    });
  }

  /* ---------- Roteamento ---------- */
  function route() {
    var h = location.hash || "#/hoje";
    var tab = "hoje";
    var m;
    if (h.indexOf("#kit-") === 0) return; // âncoras internas do Kit
    if (temVoz) player.parar(); // trocar de tela encerra o episódio
    if (atualizarHoje()) updateStreakBadge();
    var t = document.querySelector(".toast");
    if (t) t.remove();
    var ps = document.getElementById("prof-sheet");
    if (ps) ps.remove();
    if ((m = h.match(/^#\/dia\/(\d+)$/))) {
      var id = +m[1];
      tab = id === todayId() ? "hoje" : "trilha";
      renderDay(id, id === todayId());
    } else if (h === "#/aposta") { tab = apostaLiberada() ? "hoje" : "trilha"; renderAposta(); }
    else if (h === "#/trilha") { tab = "trilha"; renderTrilha(); }
    else if (h === "#/treino") { tab = "treino"; renderTreino(); }
    else if ((m = h.match(/^#\/treino\/(\d+)$/))) { tab = "treino"; renderOficina(+m[1]); }
    else if (h === "#/correcao") { tab = "treino"; renderCorrecao(); }
    else if (h === "#/enviar") { tab = "treino"; renderEnviar(); }
    else if (h === "#/simulado") { tab = "treino"; renderSimulado(); }
    else if (h === "#/kit") { tab = "kit"; renderKit(); }
    else if (h === "#/progresso") { tab = "progresso"; renderProgresso(); }
    else if (apostaLiberada() && today <= (state.prova || PROVA_PADRAO)) { renderAposta(); } // Hoje mostra a aposta só na véspera e no dia da prova
    else { renderDay(todayId(), true); }

    document.querySelectorAll(".tabbar a").forEach(function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    track("tela", { rota: h.replace(/\/\d+$/, "/n") });
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  // Âncoras do Kit rolam sem trocar de tela
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#kit-"]');
    if (!a) return;
    e.preventDefault();
    var el = document.getElementById(a.getAttribute("href").slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* Lembrete: com o app aberto ou em segundo plano, avisa no horário se o dia ainda não foi feito. */
  function checarLembrete() {
    var L = state.lembrete;
    if (!L.notif || !L.hora || L.ultimo === today || !("Notification" in window) || Notification.permission !== "granted") return;
    var agora = new Date(), hm = (agora.getHours() < 10 ? "0" : "") + agora.getHours() + ":" + (agora.getMinutes() < 10 ? "0" : "") + agora.getMinutes();
    if (hm < L.hora || state.done[todayId()]) return;
    L.ultimo = today; save();
    var d = byId(todayId());
    var corpo = d ? "Hoje: " + d.titulo + ". São só 5 minutos." : "Seu devocional de hoje está pronto.";
    var opc = { body: corpo, icon: "icons/icon.svg", tag: "redacao1000" };
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then(function (r) { r.showNotification("✦ Redação 1000", opc); }).catch(function () {});
    } else { try { new Notification("✦ Redação 1000", opc); } catch (e) {} }
  }
  setInterval(checarLembrete, 60000);
  checarLembrete();

  /* ---------- Fale com o professor: WhatsApp com o contexto do aluno ---------- */
  var MOTIVOS = [
    ["duvida", "❓ Tirar uma dúvida", "Tenho uma dúvida sobre redação: "],
    ["correcao", "✍️ Corrigir uma redação", "Quero a correção comentada de uma redação."],
    ["simulado", "⏱️ Corrigir meu simulado", "Fiz um simulado no app e quero a correção."],
    ["plano", "🎯 Montar um plano até a prova", "Quero ajuda para montar um plano de estudos até a prova."]
  ];
  function contextoAluno() {
    var partes = ["dia " + todayId() + " da trilha", Object.keys(state.done).length + " dias concluídos"];
    var st = streak();
    if (st > 1) partes.push(st + " dias seguidos");
    if (state.simulados.length) partes.push(state.simulados.length + " simulado(s) feito(s)");
    return partes.join(", ");
  }
  function mensagemProfessor(motivo) {
    var m = MOTIVOS.filter(function (x) { return x[0] === motivo; })[0] || MOTIVOS[0];
    var txt = "Oi, professor Thiago! Vim pelo app Redação 1000 (" + contextoAluno() + "). " + m[2];
    if (motivo === "simulado" && state.simulados.length) txt += " Tema: " + state.simulados[state.simulados.length - 1].tema + ".";
    return txt;
  }
  var fab = document.createElement("button");
  fab.className = "fab-prof";
  fab.id = "fab-prof";
  fab.setAttribute("aria-label", "Fale com o professor");
  fab.innerHTML = '<span aria-hidden="true">💬</span><span class="fab-txt">Fale com o professor</span>';
  document.body.appendChild(fab);
  fab.addEventListener("click", function () {
    var velho = document.getElementById("prof-sheet");
    if (velho) { velho.remove(); return; }
    var sh = document.createElement("div");
    sh.className = "prof-sheet card";
    sh.id = "prof-sheet";
    sh.setAttribute("role", "dialog");
    sh.setAttribute("aria-label", "Fale com o professor Thiago");
    sh.innerHTML = '<h2>Fale com o professor Thiago</h2><p class="empty">Escolha o assunto. A mensagem já vai com o seu progresso no app.</p>' +
      MOTIVOS.map(function (m) {
        return '<a class="btn ghost" data-motivo="' + m[0] + '" target="_blank" rel="noopener" href="https://wa.me/5521972032275?text=' +
          encodeURIComponent(mensagemProfessor(m[0])) + '">' + m[1] + "</a>";
      }).join("") +
      '<a class="btn" href="#/enviar" id="prof-foto">📷 Enviar foto da redação</a>' +
      '<button class="btn small ghost" id="prof-fechar">Fechar</button>';
    document.body.appendChild(sh);
    track("professor_abriu");
    sh.addEventListener("click", function (e) {
      if (e.target.id === "prof-fechar") sh.remove();
      else if (e.target.closest && e.target.closest("a[data-motivo]")) setTimeout(function () { sh.remove(); }, 0);
    });
  });

  window.addEventListener("hashchange", route);
  updateStreakBadge();
  updateCountdowns();
  route();

  /* ---------- Funcionamento offline ---------- */
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
