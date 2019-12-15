// Node imports
// Own imports
import { AdvertServices } from '../services';
import * as actions from './actions';
import * as types from './types';
import { ADVERT_CONSTANTS } from '../models/Advert';

jest.mock('../services/AdvertServices');

describe('ACTION TESTS', () => {
 
    // Tests relacionados con el action creator FETCH_TAGS
    describe('FETCH_TAGS', () => {
        const dispatch = jest.fn();

        beforeEach(() => {
            dispatch.mockClear();
        });

        describe('when getTags resolves', () => {
            const tags = [1, 2, 3];
            AdvertServices.getTags.mockResolvedValueOnce(tags);
    
            it('should dispatch a FETCH_TAGS_REQUEST and then a FETCH_TAGS_SUCCESS action', async () => {
                await actions.fetchTags()(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.FETCH_TAGS_REQUEST,
                });
                expect(AdvertServices.getTags).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.FETCH_TAGS_SUCCESS,
                    tags,
                });
            });
        });

        describe('when getTags rejectes', () => {
            const error = {message: 'error fetching advert'};
            AdvertServices.getTags.mockRejectedValueOnce(error);
    
            it('should dispatch a FETCH_TAGS_REQUEST and then a FETCH_TAGS_FAILURE action', async () => {
                await actions.fetchTags()(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.FETCH_TAGS_REQUEST,
                });
                expect(AdvertServices.getTags).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.FETCH_TAGS_FAILURE,
                    error: error.message
                });
            });
        });

    });

    // Tests relacionados con el action creator FETCH_ADVERT
    describe('FETCH_ADVERT', () => {
        const id = '0123456789';
        const dispatch = jest.fn();

        beforeEach(() => {
            dispatch.mockClear();
        });
        
        describe('when getAdvert resolves', () => {
            const advert = {}
            AdvertServices.getAdvert.mockResolvedValueOnce(advert);

            it('should dispatch a FETCH_ADVERT_REQUEST and then a FETCH_ADVERT_SUCCESS action', async () => {
                await actions.fetchAdvert(id)(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.FETCH_ADVERT_REQUEST,
                });
                expect(AdvertServices.getAdvert).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.FETCH_ADVERT_SUCCESS,
                    advert,
                });
            });
        });

        describe('when getAdvert rejectes', () => {
            const error = {message: 'error fetching advert'};
            AdvertServices.getAdvert.mockRejectedValueOnce(error);

            it('should dispatch a FETCH_ADVERT_REQUEST and then a FETCH_ADVERT_FAILURE action', async () => {
                await actions.fetchAdvert(id)(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.FETCH_ADVERT_REQUEST,
                });
                expect(AdvertServices.getAdvert).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.FETCH_ADVERT_FAILURE,
                    error: error.message
                });
            });
        });

    });

    // Tests relacionados con el action creator FETCH_ADVERTS
    describe('FETCH_ADVERTS', () => {
        const dispatch = jest.fn();

        beforeEach(() => {
            dispatch.mockClear();
        });

        describe('when getAdverts resolves', () => {
            const adverts = [1, 2, 3];
            AdvertServices.getAdverts.mockResolvedValueOnce(adverts);
    
            it('should dispatch a FETCH_ADVERTS_REQUEST and then a FETCH_ADVERTS_SUCCESS action', async () => {
                await actions.fetchAdverts()(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.FETCH_ADVERTS_REQUEST,
                });
                expect(AdvertServices.getAdverts).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.FETCH_ADVERTS_SUCCESS,
                    adverts,
                });
            });
        });

        describe('when getAdverts rejectes', () => {
            const error = {message: 'error fetching advert'};
            AdvertServices.getAdverts.mockRejectedValueOnce(error);
    
            it('should dispatch a FETCH_ADVERTS_REQUEST and then a FETCH_ADVERTS_FAILURE action', async () => {
                await actions.fetchAdverts()(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.FETCH_ADVERTS_REQUEST,
                });
                expect(AdvertServices.getAdverts).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.FETCH_ADVERTS_FAILURE,
                    error: error.message
                });
            });
        });

    });
    
    // Tests relacionados con el action creator EDIT_ADVERT
    describe('EDIT_ADVERT', () => {
        const advert = {};
        const dispatch = jest.fn();

        beforeEach(() => {
            dispatch.mockClear();
        });
        
        describe('when editAdvert resolves', () => {
            AdvertServices.editAdvert.mockResolvedValueOnce(advert);

            it('should dispatch a EDIT_ADVERT_REQUEST and then a EDIT_ADVERT_SUCCESS action', async () => {
                await actions.editAdvert(advert)(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.EDIT_ADVERT_REQUEST,
                });
                expect(AdvertServices.editAdvert).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.EDIT_ADVERT_SUCCESS,
                    advert,
                });
            });
        });

        describe('when editAdvert rejectes', () => {
            const error = {message: 'error fetching advert'};
            AdvertServices.editAdvert.mockRejectedValueOnce(error);

            it('should dispatch a EDIT_ADVERT_REQUEST and then a EDIT_ADVERT_FAILURE action', async () => {
                await actions.editAdvert(advert)(dispatch, undefined);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                    type: types.EDIT_ADVERT_REQUEST,
                });
                expect(AdvertServices.editAdvert).toHaveBeenCalled();
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                    type: types.EDIT_ADVERT_FAILURE,
                    error: error.message
                });
            });
        });

    });

    // Tests relacionados con el action creator CLEAR_ADVERT
    describe('CLEAR_ADVERT', () => {
        
        it('should create a CLEAR_ADVERT action', () => {
            // Respuesta esperada por el action creator
            const expectedAction = {
                type: types.CLEAR_ADVERT,
            };
            expect(actions.clearAdvert()).toEqual(expectedAction);
        });

    });

    // Tests relacionados con el action creator SET_FILTERS
    describe('SET_FILTERS', () => {
        
        it('should create a SET_FILTERS action', () => {
            // Filtros pasadoa al action creator
            const filters = {
                name: 'cr',
                type: ADVERT_CONSTANTS.TYPE.BUY,
                tag: ADVERT_CONSTANTS.TAG.LIFESTYLE
            };
            // Respuesta esperada por el action creator
            const expectedAction = {
                type: types.SET_FILTERS,
                filters,
            };
            expect(actions.setFilters(filters)).toEqual(expectedAction);
        });

    });

    // Tests relacionados con el action creator EDIT_SESSION
    describe('EDIT_SESSION', () => {
        
        it('should create a EDIT_SESSION action', () => {
            // Filtros pasadoa al action creator
            const session = {
                name: 'Ismael',
                surname: 'Bernal',
                email: 'ismaelbernal83@gmail.com',
                maxAdverts: 3
            };
            // Respuesta esperada por el action creator
            const expectedAction = {
                type: types.EDIT_SESSION,
                session,
            };
            expect(actions.editSession(session)).toEqual(expectedAction);
        });

    });

    // Tests relacionados con el action creator SET_SESSION
    describe('SET_SESSION', () => {
    
        it('should create a SET_SESSION action', () => {
            // Filtros pasadoa al action creator
            const session = {
                name: 'Ismael',
                surname: 'Bernal',
                email: 'ismaelbernal83@gmail.com',
                maxAdverts: 3
            };
            // Respuesta esperada por el action creator
            const expectedAction = {
                type: types.SET_SESSION,
                session,
            };
            expect(actions.setSession(session)).toEqual(expectedAction);
        });

    });

    // Tests relacionados con el action creator LOGOUT
    describe('LOGOUT', () => {

        it('should create a LOGOUT action', () => {
            // Respuesta esperada por el action creator
            const expectedAction = {
                type: types.LOGOUT,
            };
            expect(actions.logout()).toEqual(expectedAction);
        });

    });

    // Tests relacionados con el action creator SET_PAGE
    describe('SET_PAGE', () => {

        it('should create a SET_PAGE action', () => {
            // Pagina
            const pageNumber = 1;
            // Respuesta esperada por el action creator
            const expectedAction = {
                type: types.SET_PAGE,
                pageNumber
            };
            expect(actions.setPage(pageNumber)).toEqual(expectedAction);
        });

    });

});