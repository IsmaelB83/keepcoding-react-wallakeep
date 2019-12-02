import { connect } from 'react-redux';
// Own modules
import Profile from './Profile';
import { login, logout } from '../../store/actions';

/**
 * Inyecta props en mmi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        login: (session) => dispatch(login(session)),
        logout: () => dispatch(logout()),
    }
}

/**
 * Envuelvo el App en al función connect para conectar con el store recibido del provider
 */ 
export default connect(null, mapDispatchToProps)(Profile);