// Node modules
import { connect } from 'react-redux';
// Own modules
import App from './App';
import { setAdverts, login } from '../../store/actions';

/**
 * Inyecta props en mmi componente para acceder al state del store
 * @param {Object} state Estado de mi store
 */
const mapStateToProps = (state) => {
    return {
        session: state.session,
        adverts: state.adverts,
    }
}

/**
 * Inyecta props en mmi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        login: (session) => dispatch(login(session)),
        setAdverts: (adverts) => dispatch(setAdverts(adverts))
    }
}

/**
 * Envuelvo el App en al función connect para conectar con el store recibido del provider
 */ 
export default connect(mapStateToProps, mapDispatchToProps)(App);