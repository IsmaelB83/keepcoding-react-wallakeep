// NPM Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
// Material UI
// Components
import App from './components/App';
/* Own modules */
import { configureStore } from './store';
import LocalStorage from './utils/Storage';
import { setSession } from './store/actions';
// Models
import Session from './models/Session';
// Assets
// CSS
import './index.css';

// Intento recuperar la sesión del storage, y si no existe creo una sesión vacia
let session = LocalStorage.readLocalStorage();
if (!session) {
    session = new Session ();
}

// Store de redux e inicio sesión
const store = configureStore();
store.dispatch(setSession(session));

// Render
ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={2}>
            <App /> 
        </SnackbarProvider>
    </Provider>, document.getElementById('root')
);