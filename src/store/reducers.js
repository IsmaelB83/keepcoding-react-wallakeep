// Node imports
import { combineReducers } from 'redux';
// Own imports
import * as TYPES from './types';
import { ADVERT_CONSTANTS } from '../models/Advert';

/**
 * Estado inicial
 */
export const initialState = {
    // User session
    session: {
        name: null,
        surname: null,
        tag: null,
        advertsPerPage: null
    },
    // Adverts in the app
    adverts: [],
    // Filters applied (text, tag, type, amounts)
    filters: {
        name: null,
        type: ADVERT_CONSTANTS.TYPE.ALL,
        tag: ADVERT_CONSTANTS.TAG.ALL,
        minPrice: null,
        maxPrice: null
    }
}

/**
 * Reducer para gestionar las acciones sobre los anuncios de la app
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
const adverts = (state = initialState.adverts, action) => {
    switch (action.type) {
        case TYPES.SET_ADVERTS:
            return action.adverts;
        case TYPES.EDIT_ADVERT:
            return state.map(advert => {
                if (advert._id === action.advert._id) {
                    return { ...action.advert }
                }
                return advert;
            });
        default:
            return state;
    }
}

/**
 * Reducer para gestionar las acciones sobre los filtros de la app
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
const filters = (state = initialState.filters, action) => {
    switch (action.type) {
        case TYPES.SET_FILTERS:
            return action.filters;
        default:
            return state;
    }
}

/**
 * Reducer para gestionar las acciones sobre la sesion de usuario
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
const session = (state = initialState.session, action) => {
    switch (action.type) {
        case TYPES.EDIT_SESSION:
            if (state.email === action.session.email) {
                state = {...action.session};
            }
            return state;
        case TYPES.LOGOUT_SESSION:
            return initialState.session;
        default:
            return state;
    }
}

const reducer = combineReducers({
    adverts,
    filters,
    session
});

export default reducer;