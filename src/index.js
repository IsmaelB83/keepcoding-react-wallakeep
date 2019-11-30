/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
/* Own modules */
import App from './components/App/App';
import { configureStore } from './store';
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

// Store de redux
const store = configureStore();
window.store = store;
console.log(window.store);

// Forzar el modo producción
const app = <SnackbarProvider maxSnack={2}>
                <App/>
            </SnackbarProvider>

ReactDOM.render(app, document.getElementById('root'));