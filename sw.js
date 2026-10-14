/* Service worker: guarda os arquivos do app para uso offline. */
var CACHE = "enem1000-v3";
var ASSETS = [
  "./",
  "index.html",
  "css/styles.css",
  "js/content.js",
  "js/app.js",
  "manifest.webmanifest",
  "icons/icon.svg"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

/* Rede primeiro (para receber conteúdo novo); cache se estiver offline. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        return res;
      })
      .catch(function () {
        return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match("index.html"); });
      })
  );
});
