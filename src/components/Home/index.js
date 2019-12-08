// Node modules
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
// Own Components
import Home from './Home';
// Own modules
import { 
    fetchAdvertsFailure,
    fetchAdvertsRequest,
    fetchAdvertsSuccess,
    fetchTagsFailure,
    fetchTagsRequest,
    fetchTagsSuccess
 } from '../../store/actions';
import { getVisibleAdverts } from '../../store/selectors';
// Models
// API
import { AdvertServices } from '../../services';

/**
 * Inyecta props en mi componente para acceder al state del store
 * @param {Object} state Estado de mi store
 */
const mapStateToProps = (state) => {
    return {
        session: state.session,
        tags: state.tags,
        adverts: getVisibleAdverts(state.adverts, state.filters),
        ui: state.ui,
    }
}

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        loadTags: async () => {
            dispatch(fetchTagsRequest());
            try {
                const tags = await AdvertServices.getTags();
                dispatch(fetchTagsSuccess(tags))
            } catch (error) {
                dispatch(fetchTagsFailure(error.message))
            }
        },
        loadAdverts: async () => {
            dispatch(fetchAdvertsRequest());
            try {
                const adverts = await AdvertServices.getAdverts();
                setTimeout(() => dispatch(fetchAdvertsSuccess(adverts)), 1000);                
            } catch (error) {
                dispatch(fetchAdvertsFailure(error.message))
            }
        },
        searchAdverts: async (filters) => {
            dispatch(fetchAdvertsRequest());
            try {
                const adverts = await AdvertServices.searchAdverts(filters);
                setTimeout(() => dispatch(fetchAdvertsSuccess(adverts)), 1000);                
            } catch (error) {
                dispatch(fetchAdvertsFailure(error.message))
            }
        }
    }
}

/**
 * Envuelvo el App en al función connect para conectar con el store recibido del provider
 */ 
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Home));