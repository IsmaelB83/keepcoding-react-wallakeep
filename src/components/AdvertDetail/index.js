// Node modules
import { connect } from 'react-redux';
// Own components
import AdvertDetail from './AdvertDetail';
// Own modules
import { 
    fetchAdvertFailure,
    fetchAdvertRequest,
    fetchAdvertSuccess,
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
        advert: state.advert,
        isFetching: state.ui.isFetching,
        error: state.ui.error
    }
}

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        loadAdvert: async (id) => {
            dispatch(fetchAdvertRequest());
            try {
                const advert = await AdvertServices.getAdvert(id);
                setTimeout(()=>dispatch(fetchAdvertSuccess(advert)),500);
            } catch (error) {
                dispatch(fetchAdvertFailure(error.message))
            }
        },
    }
}

/**
 * Envuelvo el App en al función connect para conectar con el store recibido del provider
 */ 
export default connect(mapStateToProps, mapDispatchToProps)(AdvertDetail);