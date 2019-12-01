import {
    SET_ADVERTS,
    EDIT_ADVERT,
    SET_FILTERS,
    EDIT_SESSION,
    LOGOUT_SESSION
} from './types';

export const setAdverts = adverts => ({
    type: SET_ADVERTS,
    adverts,
});

export const editAdvert = advert => ({
    type: EDIT_ADVERT,
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

export const loginSession = session => ({
    type: LOGOUT_SESSION,
    session
});

export const logoutSession = () => ({
    type: LOGOUT_SESSION,
});