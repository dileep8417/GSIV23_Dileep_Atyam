const cacheName = 'MOVIE_BROWSER_APP';
const version = 'v1';
const currentCache = cacheName + '-' + version;
const filesToCache = [
    '/',
    'index.html',
    'index.js',
    'index.css'
];

// install
self.addEventListener('install', installSW);

// fetch
self.addEventListener('fetch', fetchRequest);

function installSW(event) {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.filter(cacheName => cacheName !== currentCache)
                    .map(cacheName => caches.delete(cacheName))
                );
            }).then(() => {
                return caches.open(currentCache).then(cache => cache.addAll(filesToCache));
            }).catch(e => console.log(e))
    );
}

function fetchRequest(event) {
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request).then(resp => resp))
    );
}
