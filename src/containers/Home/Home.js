/* NPM modules */
import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
/* Material UI */
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
/* Components */
import SearchPanel from '../../components/SearchPanel';
import AdvertCard from '../../components/AdvertCard';
import Paginator from '../../components/Paginator';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer/';
/* Own modules */
import UserConsumer from '../../context/UserContext';
import NodepopAPI from '../../services/NodepopAPI';
/* Assets */
import imageSpinner from '../../assets/images/spinner.gif';
import imageError from '../../assets/images/error.png';
/* CSS */
import './styles.css';

/**
 * Main App
 */
class Home extends Component {

  /**
   * Utilizar el contexto en cualquier metodo del ciclo de vida del component
   */
  static contextType = UserConsumer;

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      numPages: 0,
      currentPage: 0,
    }
  }

  /**
   * Render
   */
  render() {   
    // Variables para el paginado
    const { numPages, currentPage } = this.state;
    const minAdvert = this.state.currentPage * this.context.session.maxAdverts;
    const maxAdvert = this.state.currentPage * this.context.session.maxAdverts + this.context.session.maxAdverts
    // Render
    return (
      <React.Fragment>
        <NavBar/>
        <Container className='Container__Fill'>
          <main className='Main__Section'>
            {
              this.state.loading &&
              <div className='Home__Loading'>
                <img src={imageSpinner} className='Home__Spinner' alt='spinner'/>
                <h2 className='Home__Subtitle'>Fetching data from API</h2>
              </div>
            }
            {
              !this.state.loading &&
              this.state.adverts && 
              <div className='Home__Results'>
                <SearchPanel handleSearch={this.handleSearch} tags={this.state.tags} tag={this.state.tag}/>
                <Paginator numPages={numPages} currentPage={currentPage} handleMovePaginator={this.handleMovePaginator}/>
                <section className='Home__Grid'>
                  { this.state.adverts.length > 0 &&
                    this.state.adverts.slice(minAdvert, maxAdvert).map((advert, index) => 
                      <AdvertCard key={advert._id} 
                                  id={advert._id} 
                                  name={advert.name} 
                                  description={advert.description}
                                  price={advert.price}
                                  type={advert.type} 
                                  photo={advert.photo} 
                                  tags={advert.tags} 
                                  createdAt={advert.createdAt}
                      />
                    )
                  }
                  { this.state.adverts.length === 0 &&
                    <h2 className='Home__Subtitle'>No hay anuncios que cumplan con los criterios de búsqueda</h2>
                  }
                </section>
                <Paginator numPages={numPages} currentPage={currentPage} handleMovePaginator={this.handleMovePaginator}/>
              </div>
            }
            {
              this.state.error && 
              <div className='Home__Error'>
                <img src={imageError} className='Home__Spinner' alt='spinner'/>
                <h2 className='Home__Subtitle'>Failed to connect</h2>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<SettingsInputHdmiIcon />}
                  className='Home__Reconnect'
                  onClick={this.getAdverts}
                >
                  Reconnect
                </Button>
              </div>
            }
          </main>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    // Chequeo sesion del contexto, si no existe redirijo a register
    const session = this.context.session
    // Obtengo los tags y los paso al estado para que re-renderice el panel de busquedas
    const { getTags } = NodepopAPI();
    getTags().then(res => this.setState({tags: res}));
    // Obtengo los anuncios
    if (session.tag) {
      this.setState({tag: session.tag})
      this.handleSearch({tag: session.tag});
    } else {
      this.getAdverts(); 
    }
  }

  /**
   * Try to connect to the backend API
   */
  getAdverts = () => {
    const { getAdverts } = NodepopAPI();
    getAdverts()
    .then(res => {
      const numPages = Math.ceil(res.length/this.context.session.maxAdverts);
      this.setState({
        error: false,
        loading: false,
        adverts: res,
        currentPage: 0,
        numPages: numPages,
      })
    })
    .catch(() => {
      this.props.enqueueSnackbar('Error conectando con la API', { variant: 'error', });
      this.setState({
        error: true,
        loading: false
      });
    });
  }

  /**
   * Gestiona el evento de búsqueda de anuncios
   */
  handleSearch = (filters) => {
    // Llamo a la API con los filtros recibido
    const { searchAdvert } = NodepopAPI();
    searchAdvert(filters)
    .then(res => {
      const numPages = Math.ceil(res.length/this.context.session.maxAdverts);
      this.setState({       
        error: false,
        loading: false,
        adverts: res,
        currentPage: 0,
        numPages: numPages,
      })
    })
    .catch(() => {
      this.props.enqueueSnackbar('Error conectando con la API', { variant: 'error' });
      this.setState({
        error: true,
        loading: false
      });
    });
  }

  /**
   * Retrocede una página
   */
  handleMovePaginator = increment => {
    // Actualizo la pagina actual
    let { currentPage, numPages } = this.state;
    currentPage += increment;
    // Actualizo el state sólo si sigue dentro de los limites (realmente este chequeo también lo hace el componete paginator)
    if (currentPage >= 0 && currentPage < numPages) {
        this.setState({
          currentPage: currentPage
        });   
    }
  }
}

export default withSnackbar(Home);