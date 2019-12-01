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

/*  NOTA :
    ------
    Primera aproximación al uso de redux con react. Paso el store como una prop.
    No es buena idea porque tendría que seguir pasandolo a los niveles anidados de nuestra jerarquía de componentes.
*/

// Forzar el modo producción
const app = <SnackbarProvider maxSnack={2}>
                <App store={store}/> 
            </SnackbarProvider>


ReactDOM.render(app, document.getElementById('root'));