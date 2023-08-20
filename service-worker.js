const cacheName = 'MOVIE_BROWSER';
const version = 'v1';
const currentCache = cacheName + '-' + version;
const filesToCache = [
    '/',
    'index.html',
    'index.js',
    'vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-876625.js'
];

// install
self.addEventListener('install', installSW);

// fetch
self.addEventListener('fetch', fetchRequest);

function installSW(event) {
    event.waitUntil(
        caches.keys()
            // remove existing caches
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.filter(cacheName => cacheName !== currentCache)
                    .map(cacheName => caches.delete(cacheName))
                );
            }).then(() => {
                // cache files
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