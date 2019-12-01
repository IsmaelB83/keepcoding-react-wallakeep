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

// Uso del store forzando acciones
const session = {
    name: 'Ismael',
    surname: 'Bernal',
    email: 'ismaelbernal83@gmail.com',
    tag: 'lifestyle',
    advertsPerPage: 8
}
store.dispatch ({type: 'LOGIN_SESSION', session});
const adverts = [
    { name:"PS4Pro", description: "Compro PS4 Pro con menos de 1 año de uso", price:200.99 },
    { name:"XBOX OneX", description: "Vendo XBOX One X como nueva. No tengo tiempo para jugar.", price:170.05 },
    { name:"Raton Gaming Razer Mamba", description: "El mejor ratón gamer del mercado. Como nuevo (1 año)", price:35.50 },
]
store.dispatch ({type: 'SET_ADVERTS', adverts});


// Forzar el modo producción
const app = <SnackbarProvider maxSnack={2}>
                <App/>
            </SnackbarProvider>

ReactDOM.render(app, document.getElementById('root'));