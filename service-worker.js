self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/icon.png',
        '/manifest.json', // Assicurati che il manifesto venga aggiunto alla cache
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(fetchResponse) {
        return fetchResponse;
      });
    })
  );
});
