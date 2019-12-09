// Node modules
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
// Own components
import AdvertEdit from './AdvertEdit';
// Own modules
import { 
/*     fetchAdvertFailure,
    fetchAdvertRequest,
    fetchAdvertSuccess, */
    editAdvertFailure,
    editAdvertRequest,
    editAdvertSuccess,
    createAdvertFailure,
    createAdvertRequest,
    createAdvertSuccess
 } from '../../store/actions';
// Models
// API
import { AdvertServices } from '../../services';

/**
 * Inyecta props en mi componente para acceder al state del store
 * @param {Object} state Estado de mi store
 */
const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        adverts: state.adverts,
        ui: state.ui
    }
}

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        /* getAdvert: async (id) => {
            dispatch(fetchAdvertRequest());
            try {
                const advert = await AdvertServices.getAdvert(id);
                dispatch(fetchAdvertSuccess(advert));
            } catch (error) {
                dispatch(fetchAdvertFailure(error.message))
            }
        }, */
        editAdvert: async (advert) => {
            dispatch(editAdvertRequest());
            try {
                const response = await AdvertServices.editAdvert(advert);
                dispatch(editAdvertSuccess(response));
            } catch (error) {
                dispatch(editAdvertFailure(error.message))
            }
        },
        createAdvert: async (advert) => {
            dispatch(createAdvertRequest());
            try {
                const response = await AdvertServices.postAdvert(advert);
                dispatch(createAdvertSuccess(response));
            } catch (error) {
                dispatch(createAdvertFailure(error.message));
            }
        },
    }
}

/**
 * Envuelvo el App en al función connect para conectar con el store recibido del provider
 */ 
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(AdvertEdit));

/*  Lo anterior es equivalente a esto. Porque uso exactamente el mismo nombre de función que en el dispatch.
    Y además uso exactamente los mismos parámetros:
    ----------------------------------------------------
    const mapDispatchToProps = {
        editAdvert,
        createAdvert
    }

    O incluso más reducido aun:
    ----------------------------------------------------
    import * as actions from '../../store/actions';
    const mapDispatchToProps = actions;
*/