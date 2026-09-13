/* Turriva gallery offline cache — exhibition / low-connectivity floors */
const CACHE = "turriva-gallery-v1";
const PRECACHE = [
  "/",
  "/manifest.webmanifest",
  "/brand/turriva/icon-512.png",
  "/brand/turriva/apple-touch-icon.png",
  "/brand/turriva/favicon-32.png",
  "/brand/turriva/logo-lockup-black.png",
  "/brand/turriva/projects/anan-eskan-gallery.jpg",
  "/brand/turriva/projects/rafal-pavilions.jpg",
  "/docs/turriva-agency-pitch-kit.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
      .catch(() => undefined)
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isGalleryAsset =
    url.pathname.startsWith("/brand/") ||
    url.pathname.startsWith("/docs/") ||
    url.pathname.endsWith(".webmanifest") ||
    url.pathname.endsWith(".mp4") ||
    url.pathname.endsWith(".glb") ||
    url.pathname.endsWith(".gltf");

  if (!isGalleryAsset && url.pathname !== "/") return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req);
      const network = fetch(req)
        .then((res) => {
          if (res.ok) void cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
