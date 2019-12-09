// NPM modules
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
// Own components
import Register from './Register';
// Own modules
import { 
    setSession
 } from '../../store/actions';

 
/**
 * Inyecta props en mi componente para acceder al state del store
 * @param {Object} state Estado de mi store
 */
const mapStateToProps = (state) => {
    return {
        session: state.session,
        isFetching: state.ui.isFetching,
        apiConnected: state.ui.apiConnected,
    }
}

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setSession: (session) => dispatch(setSession(session))
    }
}

// Retorno el componente envuelto en el "connect", y en un withSnackBar (para los tags de info de la app)
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Register));