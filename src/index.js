import { createRoot } from 'react-dom/client'
import App from "./App";
import { registerServiceWorker } from './serviceWorkerRegister';
import { Provider } from "react-redux";
import store from "./store/store";
import './index.css';

const rootDom = document.getElementById('movie-browser');

const root = createRoot(rootDom);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// registerServiceWorker();