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
 * Reducer
 * @param {Object} state 
 * @param {Function} action 
 */
export default function ( state = initialState, action ) {
    // Creo el nuevo estado. Nunca se debe modfiicar el estado recibido (función pura)
    const newState = {...state};
    // Switch de la action
    switch (action.type) {
        // Asigna los anuncios al store
        case TYPES.SET_ADVERTS:
            newState.adverts = action.adverts
            break;
        // Reemplaza los datos del anuncio indicado
        case TYPES.EDIT_ADVERT:
            newState.adverts = state.adverts.map(advert => {
                if (advert._id === action.advert._id) {
                    return { ...action.advert }
                }
                return advert;
            });
            break;
        // Setea los filtros del frontal
        case TYPES.SET_FILTERS:
            newState.filters = action.filters;
            break;
        // Edita los datos de sesion actual
        case TYPES.EDIT_SESSION:
            if (state.session.email === action.session.email) {
                newState.session = {...action.session};
            }
            break;
        // Hace logout de session
        case TYPES.LOGOUT_SESSION:
            newState.session = initialState.session;
            newState.filters = initialState.fil;
            break;
        default:
    }
    // Retorno el estado nuevo
    return newState;
}
