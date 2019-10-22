/* NPM modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
/* Own modules */
import App from './components/App/App';
/* Material UI */
/* Assets */
/* CSS */
import './index.css';

const app = <SnackbarProvider maxSnack={3}>
                <App/>
            </SnackbarProvider>

ReactDOM.render(app, document.getElementById('root'));
