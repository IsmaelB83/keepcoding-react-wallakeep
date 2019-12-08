import {
    FETCH_TAGS_REQUEST,
    FETCH_TAGS_FAILURE,
    FETCH_TAGS_SUCCESS,
    FETCH_ADVERTS_REQUEST,
    FETCH_ADVERTS_FAILURE,
    FETCH_ADVERTS_SUCCESS,
    EDIT_ADVERT,
    CREATE_ADVERT,
    SET_FILTERS,
    EDIT_SESSION,
    SET_SESSION,
    LOGOUT,
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

export const editAdvert = advert => ({
    type: EDIT_ADVERT,
    advert,
});

export const createAdvert = advert => ({
    type: CREATE_ADVERT,
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