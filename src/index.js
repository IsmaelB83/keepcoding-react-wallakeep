/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
/* Own modules */
import App from './containers/App';
import { configureStore } from './store';
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

// Store de redux
const store = configureStore();

// Render
ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={2}>
            <App /> 
        </SnackbarProvider>
    </Provider>, document.getElementById('root'));