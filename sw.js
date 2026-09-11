const CACHE_NAME = 'diploma-campus-cache-v3';
const STATIC_ASSETS = [
  './',
  './index.html',
  './resources.html',
  './tools.html',
  './colleges.html',
  './d2d.html',
  './syllabus.html',
  './assets/css/main.css',
  './assets/js/shared-nav.js',
  './assets/js/global-data.js',
  './assets/js/global-search.js',
  './assets/js/toast.js',
  './assets/images/logo.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline pages');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Cache addAll warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  // Network-first for HTML, JS, CSS to ensure immediate updates
  const isCodeAsset = event.request.destination === 'document' || 
                      event.request.destination === 'script' || 
                      event.request.destination === 'style' ||
                      event.request.url.includes('.js') ||
                      event.request.url.includes('.css') ||
                      event.request.url.includes('.html');

  if (isCodeAsset) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') return caches.match('./index.html');
        });
      })
    );
    return;
  }

  // Cache-first for images / fonts
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      });
    })
  );
});
