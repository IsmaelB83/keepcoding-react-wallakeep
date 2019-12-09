// Node imports
// Own imports
import * as TYPES from './types';
// Models
import { ADVERT_CONSTANTS } from '../models/Advert';
import Session from '../models/Session';

/**
 * Estado inicial
 */
export const initialState = {
    // User session
    session: new Session(),
    // Adverts in the app
    adverts: [],
    // Available tags in the backend
    tags: [],
    // Filters applied (text, tag, type, amounts)
    filters: {
        name: '',
        type: ADVERT_CONSTANTS.TYPE.ALL,
        tag: ADVERT_CONSTANTS.TAG.ALL,
        minPrice: 0,
        maxPrice: 0
    },
    // UI State
    ui: {
        apiConnected: false,
        error: null,
        isFetching: false,
        isUpdatingAdvert: false,
        lastAdvertsUpdated: null,
        totalAdvertsReturned: 0,
        currentPage: 0,
    }
}

/**
 * Reducer para gestionar los tags disponibles en el backend
 * @param {Array} state Tags
 * @param {Object} action Action
 */
export function tags(state = initialState.tags, action) {
    switch (action.type) {
        case TYPES.FETCH_TAGS_SUCCESS:
            return action.tags;
        default:
            return state;
    }
}

/**
 * Reducer para gestionar las acciones sobre los anuncios de la app
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
export function adverts(state = initialState.adverts, action) {
    switch (action.type) {
        case TYPES.FETCH_ADVERTS_REQUEST:
            return initialState.adverts;
        case TYPES.FETCH_ADVERTS_FAILURE:
            return initialState.adverts;
        case TYPES.FETCH_ADVERTS_SUCCESS:
            return action.adverts;
        case TYPES.EDIT_ADVERT_SUCCESS:
            return state.map(advert => {
                if (advert._id === action.advert._id) {
                    return { ...action.advert }
                }
                return advert;
            });
        case TYPES.CREATE_ADVERT_SUCCESS:
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
            const newState = {...action.filters};
            newState.name = action.filters.name.toLowerCase();
            newState.minPrice = parseFloat(action.filters.minPrice);
            newState.maxPrice = parseFloat(action.filters.maxPrice);
            return newState;
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
        case TYPES.SET_SESSION:
            return {...action.session};
        case TYPES.LOGOUT:
            return {...initialState.session};
        default:
            return state;
    }
}

/**
 * Reducer para gestionar el estado de la ui
 * @param {Object} state UI state
 * @param {Object} action Action
 */
export function ui(state = initialState.ui, action) {
    switch (action.type) {
        case TYPES.SET_FILTERS:
            return { ...state, currentPage: 0 }
        case TYPES.FETCH_ADVERTS_REQUEST:
            return { ...state, isFetching: true, error: null }
        case TYPES.FETCH_ADVERTS_FAILURE:
            return { ...state, isFetching: false, error: action.error }
        case TYPES.FETCH_ADVERTS_SUCCESS:
            return { ...state, 
                     isFetching: false, 
                     error: null, 
                     lastAdvertsUpdated: Date.now(), 
                     totalAdvertsReturned: action.adverts.length,
                     currentPage: 0
                    }
        case TYPES.EDIT_ADVERT_REQUEST:
            return { ...state, isUpdatingAdvert: true, error: null }
        case TYPES.EDIT_ADVERT_FAILURE:
            return { ...state, isUpdatingAdvert: false, error: action.error }
        case TYPES.EDIT_ADVERT_SUCCESS:
            return { ...state, isUpdatingAdvert: false, error: null }
        case TYPES.CREATE_ADVERT_REQUEST:
            return { ...state, isUpdatingAdvert: true, error: null }
        case TYPES.CREATE_ADVERT_FAILURE:
            return { ...state, isUpdatingAdvert: false, error: action.error }
        case TYPES.CREATE_ADVERT_SUCCESS:
            return { ...state, isUpdatingAdvert: false, error: null }
        case TYPES.FETCH_TAGS_REQUEST:
            return { ...state, error: null, isFetching: true, apiConnected: false }
        case TYPES.FETCH_TAGS_FAILURE:
            return { ...state, error: action.error, isFetching: false, apiConnected: false }
        case TYPES.FETCH_TAGS_SUCCESS:
            return { ...state, error: null, isFetching: false, apiConnected: true }
        case TYPES.SET_PAGE:
            return { ...state, currentPage: action.pageNumber }
        default:
            return state;
    }
}
