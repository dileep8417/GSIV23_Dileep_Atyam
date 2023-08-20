export const registerServiceWorker = () => {
    if (navigator.serviceWorker === 'undefined') {
        return;
    }

    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    })
}