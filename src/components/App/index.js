// NPM modules
import { connect } from 'react-redux';
// Own components
import App from './App';
// Own modules
import { 
    fetchTagsFailure,
    fetchTagsRequest,
    fetchTagsSuccess,
 } from '../../store/actions';
 // API
import { AdvertServices } from '../../services';

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
    }
}

// Retorno el componente envuelto en el "connect", y en un withSnackBar (para los tags de info de la app)
export default connect(null, mapDispatchToProps)(App);