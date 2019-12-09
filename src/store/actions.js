import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_FAILURE,
    FETCH_TAGS_SUCCESS,
    FETCH_ADVERT_REQUEST,
    FETCH_ADVERT_FAILURE,
    FETCH_ADVERT_SUCCESS,
    FETCH_ADVERTS_REQUEST,
    FETCH_ADVERTS_FAILURE,
    FETCH_ADVERTS_SUCCESS,
    EDIT_ADVERT_REQUEST,
    EDIT_ADVERT_FAILURE,
    EDIT_ADVERT_SUCCESS,
    CREATE_ADVERT_REQUEST,
    CREATE_ADVERT_FAILURE,
    CREATE_ADVERT_SUCCESS,
    SET_FILTERS,
    EDIT_SESSION,
    SET_SESSION,
    LOGOUT,
    SET_PAGE
} from './types';

export const fetchTagsRequest = () => ({
    type: FETCH_TAGS_REQUEST
});

export const fetchTagsFailure = error => ({
    type: FETCH_TAGS_FAILURE,
    error,
});

export const fetchTagsSuccess = tags => ({
    type: FETCH_TAGS_SUCCESS,
    tags,
});

export const fetchAdvertRequest = () => ({
    type: FETCH_ADVERT_REQUEST
});

export const fetchAdvertFailure = error => ({
    type: FETCH_ADVERT_FAILURE,
    error,
});

export const fetchAdvertSuccess = advert => ({
    type: FETCH_ADVERT_SUCCESS,
    advert,
});

export const fetchAdvertsRequest = () => ({
    type: FETCH_ADVERTS_REQUEST
});

export const fetchAdvertsFailure = error => ({
    type: FETCH_ADVERTS_FAILURE,
    error,
});

export const fetchAdvertsSuccess = adverts => ({
    type: FETCH_ADVERTS_SUCCESS,
    adverts,
});

export const editAdvertRequest = () => ({
    type: EDIT_ADVERT_REQUEST
});

export const editAdvertFailure = error => ({
    type: EDIT_ADVERT_FAILURE,
    error,
});

export const editAdvertSuccess = advert => ({
    type: EDIT_ADVERT_SUCCESS,
    advert,
});

export const createAdvertRequest = () => ({
    type: CREATE_ADVERT_REQUEST
});

export const createAdvertFailure = error => ({
    type: CREATE_ADVERT_FAILURE,
    error,
});

export const createAdvertSuccess = advert => ({
    type: CREATE_ADVERT_SUCCESS,
    advert,
});

export const setFilters = filters => ({
    type: SET_FILTERS,
    filters,
});

export const editSession = session => ({
    type: EDIT_SESSION,
    session,
});

export const setSession = session => ({
    type: SET_SESSION,
    session
});

export const logout = () => ({
    type: LOGOUT,
});

export const setPage = pageNumber => ({
    type: SET_PAGE,
    pageNumber
});