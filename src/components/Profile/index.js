import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
// Own modules
import Profile from './Profile';
import { editSession, logout } from '../../store/actions';

/**
 * Inyecta props en mmi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        editSession: (session) => dispatch(editSession(session)),
        logout: () => dispatch(logout()),
    }
}

// Retorno el componente envuelto en el "connect", y en un withSnackBar (para los tags de info de la app)
export default connect(null, mapDispatchToProps)(withSnackbar(Profile));