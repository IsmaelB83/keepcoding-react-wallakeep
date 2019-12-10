// NPM modules
import { connect } from 'react-redux';
// Own components
import App from './App';
// Own modules
import { fetchTags } from '../../store/actions';

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        loadTags: () => dispatch(fetchTags()),
    }
}

// Retorno el componente envuelto en el "connect", y en un withSnackBar (para los tags de info de la app)
export default connect(null, mapDispatchToProps)(App);