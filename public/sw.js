// Minimal offline service worker. Caches the app shell and its assets.
// API (/api) and TTS are never cached (they go to the proxy).
const CACHE = "ept-en-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith("/api")) return;

  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      // Navigation: network-first (to pick up new asset references), fall back to cache
      if (req.mode === "navigate") return (await network) || cached || cache.match("./index.html");
      // Assets: cache-first
      return cached || (await network) || Response.error();
    })(),
  );
});
