import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
// Own modules
import Register from './Register';
import { login } from '../../store/actions';

/**
 * Inyecta props en mmi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        login: (session) => dispatch(login(session)),
    }
}

// Retorno el componente envuelto en el "connect", y en un withSnackBar (para los tags de info de la app)
export default connect(null, mapDispatchToProps)(withSnackbar(Register));