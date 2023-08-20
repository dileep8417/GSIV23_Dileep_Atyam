const cacheName = 'MOVIE_BROWSER';
const version = 'v1';
const currentCache = cacheName + '-' + version;
const filesToCache = [
    '/',
    'index.html',
    'index.js',
    'vendors-node_modules_react-dom_client_js-node_modules_webpack-dev-server_client_index_js_prot-485449.js' // for dev purpose
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
                cacheNames.forEach(cacheName => cacheName !== currentCache && caches.delete(cacheName));
            }).then(() => {
                // cache files
                caches.open(currentCache).then(cache => cache.addAll(filesToCache));
            })
    );
}

function fetchRequest(event) {
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request).then(resp => resp))
    );
}