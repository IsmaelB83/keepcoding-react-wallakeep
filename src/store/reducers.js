// Node imports
// Own imports
import * as TYPES from './types';
import { ADVERT_CONSTANTS } from '../models/Advert';

/**
 * Estado inicial
 */
export const initialState = {
    // User session
    session: {
        name: '',
        surname: '',
        email: '',
        tag: ADVERT_CONSTANTS.TAG.ALL,
        maxAdverts: process.env.REACT_APP_MAX_ADVERTS_GRID
    },
    // Adverts in the app
    adverts: [],
    // Filters applied (text, tag, type, amounts)
    filters: {
        name: '',
        type: ADVERT_CONSTANTS.TYPE.ALL,
        tag: ADVERT_CONSTANTS.TAG.ALL,
        minPrice: 0,
        maxPrice: ADVERT_CONSTANTS.MAX_PRICE
    }
}

/**
 * Reducer para gestionar las acciones sobre los anuncios de la app
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
export function adverts(state = initialState.adverts, action) {
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
        case TYPES.CREATE_ADVERT:
            return state.concat(action.advert);
        default:
            return state;
    }
}

/**
 * Reducer para gestionar las acciones sobre los filtros de la app
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
export function filters (state = initialState.filters, action) {
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
export function session (state = initialState.session, action) {
    switch (action.type) {
        case TYPES.EDIT_SESSION:
            return {...action.session};
        case TYPES.LOGIN:
            return {...action.session};
        case TYPES.LOGOUT:
            return {...initialState.session};
        default:
            return state;
    }
}