/* Tema do app: automático (segue o celular), claro ou escuro. Carrega no <head> para não piscar. */
(function () {
  "use strict";
  var KEY = "enem1000:tema", ORDEM = ["auto", "claro", "escuro"];
  var ROTULO = { auto: "Tema automático", claro: "Tema claro", escuro: "Tema escuro" };
  var ICONE = { auto: "🌓", claro: "☀️", escuro: "🌙" };
  function ler() { try { var t = localStorage.getItem(KEY); return ORDEM.indexOf(t) >= 0 ? t : "auto"; } catch (e) { return "auto"; } }
  function aplicar(t) {
    var r = document.documentElement;
    if (t === "claro") r.setAttribute("data-theme", "light");
    else if (t === "escuro") r.setAttribute("data-theme", "dark");
    else r.removeAttribute("data-theme");
    var b = document.getElementById("tema-btn");
    if (b) { b.textContent = ICONE[t]; b.setAttribute("aria-label", ROTULO[t] + ". Toque para trocar"); b.title = ROTULO[t]; }
  }
  aplicar(ler());
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("tema-btn");
    if (!b) return;
    aplicar(ler());
    b.addEventListener("click", function () {
      var t = ORDEM[(ORDEM.indexOf(ler()) + 1) % ORDEM.length];
      try { localStorage.setItem(KEY, t); } catch (e) {}
      aplicar(t);
      var toast = document.createElement("div");
      toast.className = "toast"; toast.setAttribute("role", "status"); toast.textContent = ROTULO[t];
      document.querySelectorAll(".toast").forEach(function (x) { x.remove(); });
      document.body.appendChild(toast);
      setTimeout(function () { toast.remove(); }, 1800);
    });
  });
})();
