/* eslint-disable no-restricted-globals */
self.addEventListener('install', () => {
  console.log('service worker installed');
});

self.addEventListener('activate', () => {
  console.log('service worker activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).then(async (response) => {
    console.log('Fetched succesfully!');
    const cache = await caches.open('backup');
    cache.put(e.request, response.clone());
    return response;
  }).catch(() => {
    console.log('fetch failed, using backup');
    return caches.match(e.request);
  }));
});
