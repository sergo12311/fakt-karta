// Факт-карта переехала на https://fakt-karta.pages.dev/ — this worker removes the old offline copy and switches itself off.
// The maps stored in this browser are NOT touched.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => /^fakt-karta-/.test(k)).map(k => caches.delete(k))))
    .then(() => self.registration.unregister()));
});
