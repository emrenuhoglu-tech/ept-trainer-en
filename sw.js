// Minimal offline service worker. Caches the app shell and its assets.
// API (/api) and TTS are never cached (they go to the proxy).
const CACHE = "ept-en-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", (e) => {
  // Precache the shell → a fresh install opens offline
  e.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  ),
);

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
      // Navigation: network-first (to pick up new asset references), fall back to cache/shell
      if (req.mode === "navigate")
        return (
          (await network) || cached || (await cache.match("./")) || (await cache.match("./index.html"))
        );
      // Assets: stale-while-revalidate (serve cache first, refresh from network in background)
      return cached || (await network) || Response.error();
    })(),
  );
});
