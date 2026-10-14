(function () {
  "use strict";

  var DEV = window.DEVOCIONAIS;
  var APOSTA = window.APOSTA;
  var KIT = window.KIT;
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

  /* Link público do app, incluído nas mensagens compartilhadas. Preencha após publicar. */
  var APP_URL = "";

  /* Redação do ENEM 2026: 1º dia de prova, domingo 8/11, às 13h30 de Brasília (Edital Inep nº 64/2026). */
  var PROVA_PADRAO = "2026-11-08";
  var HORA_PROVA = "T13:30:00-03:00";

  /* ---------- Armazenamento local ---------- */
  function emptyState() {
    return { inicio: today, done: {}, quiz: {}, textos: {}, favoritos: [], dias: [], fotos: {}, prova: PROVA_PADRAO };
  }
  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return emptyState();
      var s = JSON.parse(raw);
      var base = emptyState();
      for (var k in base) if (!(k in s)) s[k] = base[k];
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
    chip.hidden = horaProva() - Date.now() <= 0;
    chip.textContent = "⏳ " + n + "d";
    chip.title = "Faltam " + n + " dias para a redação do ENEM";
  }
  setInterval(updateCountdowns, 30000);

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
        "</div>" +
      "</section>" +

      '<article class="card key">' +
        '<p class="eyebrow" style="color:inherit;opacity:.75">Ideia-chave</p>' +
        "<blockquote>" + esc(d.chave) + "</blockquote>" +
        '<div class="source">— ' + esc(d.fonte) + "</div>" +
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

      '<div id="finish"></div>' +

      '<div class="row pager">' +
        '<a class="btn ghost" style="text-align:center;text-decoration:none" href="#/dia/' + (id === 1 ? N : id - 1) + '">← Anterior</a>' +
        '<a class="btn ghost" style="text-align:center;text-decoration:none" href="#/dia/' + (id === N ? 1 : id + 1) + '">Próximo →</a>' +
      "</div>";

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
      return "🔥 " + streak() + (streak() === 1 ? " dia" : " dias") + " seguidos no ENEM 1000!\n\n" +
        "📚 Repertório de hoje: " + d.fonte + "\n" +
        "💡 " + d.chave +
        (n > 0 ? "\n\n⏳ Faltam " + n + " dias para a redação do ENEM." : "") +
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
            var dados = { title: "ENEM 1000", text: textoCompartilhar() };
            if (fotoBlob && typeof File === "function") {
              var arq = new File([fotoBlob], "enem1000-dia-" + id + ".jpg", { type: "image/jpeg" });
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
        state.done[id] = today;
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
        '<div class="day-meta"><span>Pesquisa feita em ' + esc(a.pesquisaEm) + " com cursinhos, professores e o histórico do Inep</span></div>" +
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
        ["competencias:Competências", "estrutura:Estrutura", "conectivos:Conectivos", "proposta:Proposta", "temas:Temas anteriores", "zeram:O que zera"]
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
            c.lista.map(function (l) { return "<span>" + esc(l) + "</span>"; }).join("") + "</div></div>";
        }).join("") +
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

      '<section class="card" id="kit-zeram"><h2>O que zera a redação</h2><ul style="margin:0;padding-left:20px">' +
        KIT.zeram.map(function (z) { return "<li>" + esc(z) + "</li>"; }).join("") +
      '</ul><p class="empty" style="margin-top:10px">Desrespeitar os direitos humanos na proposta pode zerar a Competência 5.</p></section>';
  }

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

      '<section class="card"><h2>Dados</h2>' +
        '<p class="empty">Tudo fica salvo apenas neste aparelho. Você começou a trilha em ' + esc(parseIso(state.inicio).toLocaleDateString("pt-BR")) + ".</p>" +
        '<div class="row" style="margin-top:10px;flex-wrap:wrap">' +
          '<button class="btn ghost small" id="exportar">Copiar caderno</button>' +
          '<button class="btn danger small" id="zerar">Recomeçar do zero</button>' +
        "</div>" +
        '<textarea id="caderno-texto" hidden readonly aria-label="Texto do caderno"></textarea>' +
      "</section>";

    document.getElementById("exportar").addEventListener("click", function () {
      var linhas = ["ENEM 1000 — Meu caderno de repertório", ""];
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
    var t = document.querySelector(".toast");
    if (t) t.remove();
    if ((m = h.match(/^#\/dia\/(\d+)$/))) {
      var id = +m[1];
      tab = id === todayId() ? "hoje" : "trilha";
      renderDay(id, id === todayId());
    } else if (h === "#/aposta") { tab = apostaLiberada() ? "hoje" : "trilha"; renderAposta(); }
    else if (h === "#/trilha") { tab = "trilha"; renderTrilha(); }
    else if (h === "#/kit") { tab = "kit"; renderKit(); }
    else if (h === "#/progresso") { tab = "progresso"; renderProgresso(); }
    else if (apostaLiberada()) { renderAposta(); }
    else { renderDay(todayId(), true); }

    document.querySelectorAll(".tabbar a").forEach(function (a) {
      if (a.getAttribute("data-tab") === tab) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
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
