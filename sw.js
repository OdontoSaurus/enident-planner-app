// Enident Planner 0.9.0: service worker minimo (installazione e pagina offline)
const CACHE = "enident-0.9.0";
self.addEventListener("install", (evento) => {
  evento.waitUntil(caches.open(CACHE).then((cache) => cache.add("./")).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((chiavi) => Promise.all(chiavi.filter((c) => c !== CACHE).map((c) => caches.delete(c))))
      .then(() => self.clients.claim()),
  );
});
self.addEventListener("fetch", (evento) => {
  if (evento.request.mode !== "navigate") return;
  evento.respondWith(fetch(evento.request).catch(() => caches.match("./")));
});
