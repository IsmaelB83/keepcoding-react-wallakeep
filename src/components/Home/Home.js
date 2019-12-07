/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
/* Components */
import SearchPanel from '../SearchPanel';
import AdvertCard from '../AdvertCard';
import Paginator from '../Paginator';
import NavBar from '../NavBar';
import Footer from '../Footer/';
/* Own modules */
import NodepopAPI from '../../services/NodepopAPI';
/* Assets */
import imageSpinner from '../../assets/images/spinner.gif';
import imageError from '../../assets/images/error.png';
/* CSS */
import './styles.css';

/**
 * Main App
 */
export default class Home extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      currentPage: 0,
    }
  }

  /**
   * Render
   */
  render() {   
    // Variables para el paginado
    const { currentPage } = this.state;
    const numPages = Math.ceil(this.props.adverts.length/this.props.session.maxAdverts);
    const minAdvert = this.state.currentPage * this.props.session.maxAdverts;
    const maxAdvert = this.state.currentPage * parseInt(this.props.session.maxAdverts) + parseInt(this.props.session.maxAdverts)
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
              this.props.adverts && 
              <div className='Home__Results'>
                <SearchPanel tags={this.state.tags} tag={this.state.tag}/>
                <Paginator numPages={numPages} currentPage={currentPage} handleMovePaginator={this.handleMovePaginator}/>
                <p className='Home__Count'>{this.props.adverts.length} resultados encontrados</p>
                <section className='Home__Grid'>
                  { this.props.adverts.length > 0 &&
                    this.props.adverts.slice(minAdvert, maxAdvert).map((advert, index) => 
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
                  { this.props.adverts.length === 0 &&
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
    // Obtengo los tags y los paso al estado para que re-renderice el panel de busquedas
    const { getTags } = NodepopAPI();
    getTags().then(res => this.setState({tags: res}));
    // Obtengo los anuncios
    if (this.props.session.tag) {
      this.setState({tag: this.props.session.tag})
      this.handleSearch({tag: this.props.session.tag});
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
      this.props.setAdverts(res);
      this.setState({
        error: false,
        loading: false,
        currentPage: 0,
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
    // Filtro los anuncios del store de redux
    const { searchAdvert } = NodepopAPI();
    searchAdvert(filters)
    .then(res => {
      this.props.setAdverts(res);
      this.setState({       
        error: false,
        loading: false,
        currentPage: 0,
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
    let { currentPage } = this.state;
    const numPages = Math.ceil(this.props.adverts.length/this.props.session.maxAdverts);
    currentPage += increment;
    // Actualizo el state sólo si sigue dentro de los limites (realmente este chequeo también lo hace el componete paginator)
    if (increment !== 0 && currentPage >= 0 && currentPage < numPages) {
        this.setState({
          currentPage: currentPage
        });   
    }
  }
}