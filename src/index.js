import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";
import { registerServiceWorker } from './serviceWorkerRegister';

const rootDom = document.getElementById('movie-browser');

const root = createRoot(rootDom);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

registerServiceWorker();