// Node imports
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// Own imports
import * as reducers from './reducers';

/**
 * Configura el store
 */
export function configureStore(preloadedState) {
    const reducer = combineReducers(reducers);
    const store = createStore(reducer, preloadedState, composeWithDevTools());
    return store;
}

/**
 * OPCION 2: para crear el reducer combinado.
 * 
 * Crear nuestor propia función, en vez de utilizar el combineReducers de react. De esta forma,
 * podemos pasar partes del estado a cualquiera de los reducers, que de la forma estandar
 * no tendrían acceso a ellas.
 *
 * const reducer = (state = initialState, action) => {
 *     return {
 *         adverts: adverts(state.adverts, action, {session: state.session}),
 *         filters: filters(state.filters, action),
 *         session: session(state.session, action)
 *     }
 * }
 */