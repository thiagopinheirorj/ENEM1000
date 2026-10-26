/* Estatísticas anônimas de uso, enviadas ao GoatCounter (grátis) e/ou ao Supabase.
 * Cada aparelho recebe um código aleatório; nenhum nome, telefone ou texto do aluno é enviado.
 * Sem URL e chave preenchidas, nada é enviado. */
(function () {
  "use strict";
  var GOATCOUNTER = ""; // ex.: "redacao1000" → painel em https://redacao1000.goatcounter.com
  var SUPABASE_URL = "";
  var SUPABASE_KEY = ""; // chave pública (publishable): só permite inserir eventos

  var ID_KEY = "enem1000:dispositivo";
  function dispositivo() {
    var id = null;
    try { id = localStorage.getItem(ID_KEY); } catch (e) {}
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(36).slice(2));
      try { localStorage.setItem(ID_KEY, id); } catch (e) {}
    }
    return id;
  }
  var origem = (function () {
    var m = location.search.match(/[?&]utm_source=([^&]+)/);
    if (m) return decodeURIComponent(m[1]).slice(0, 40);
    try { return document.referrer ? new URL(document.referrer).hostname : "direto"; } catch (e) { return "direto"; }
  })();

  /* GoatCounter: telas viram páginas (/hoje, /treino…) e o resto vira evento. */
  function goat(evento, rota) {
    var p = evento === "tela" ? rota.replace("#", "") : "evento/" + evento;
    var q = "p=" + encodeURIComponent(p) + "&e=" + (evento === "tela" ? "false" : "true") +
      "&r=" + encodeURIComponent(origem === "direto" ? "" : origem) + "&s=" + screen.width + "&rnd=" + Math.random().toString(36).slice(2);
    new Image().src = "https://" + GOATCOUNTER + ".goatcounter.com/count?" + q;
  }

  function track(evento, dados) {
    if (navigator.webdriver) return;
    if (GOATCOUNTER && evento !== "abertura") { try { goat(evento, (location.hash || "#/hoje").replace(/\/\d+$/, "/n")); } catch (e) {} }
    if (!SUPABASE_URL || !SUPABASE_KEY) return;
    var corpo = {
      dispositivo: dispositivo(),
      evento: String(evento).slice(0, 40),
      rota: (location.hash || "#/hoje").replace(/\/\d+$/, "/n").slice(0, 40),
      origem: origem,
      dados: dados || {}
    };
    try {
      fetch(SUPABASE_URL + "/rest/v1/eventos", {
        method: "POST",
        keepalive: true,
        headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify(corpo)
      }).catch(function () {});
    } catch (e) {}
  }

  /* Cliques que interessam: WhatsApp de correção, Spotify e Instagram. */
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest('a[href*="wa.me"], #spotify, #insta');
    if (!el) return;
    track(el.id === "spotify" ? "spotify" : el.id === "insta" ? "instagram" : "whatsapp");
  }, true);

  window.R1000Analytics = { track: track };
  track("abertura");
})();
