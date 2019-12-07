// Node modules
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
// Own modules
import AdvertEdit from './AdvertEdit';
import { editAdvert, createAdvert } from '../../store/actions';

/**
 * Inyecta props en mi componente para acceder al state del store
 * @param {Object} state Estado de mi store
 */
const mapStateToProps = (state) => {
    return {
        adverts: state.adverts,
    }
}

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        editAdvert: (advert) => dispatch(editAdvert(advert)),
        createAdvert: (advert) => dispatch(createAdvert(advert))
    }
}

/**
 * Envuelvo el App en al función connect para conectar con el store recibido del provider
 */ 
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(AdvertEdit));