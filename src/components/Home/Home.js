/* NPM modules */
import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
/* Material UI */
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
/* Own modules */
import SearchPanel from '../SearchPanel/SearchPanel';
import UserConsumer from '../../context/UserContext';
import NodepopAPI from '../../services/NodepopAPI';
import AdvertCard from '../AdvertCard/AdvertCard';
import Config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
/* Assets */
import imageError from '../../assets/images/error.png';
import imageSpinner from '../../assets/images/spinner.gif';
/* CSS */
import './Home.css';

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
      api: new NodepopAPI(),
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <React.Fragment>
        <Header name={this.context.session.name}/>
        <Container className='Container__Fill'>
          <main className='Home'>
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
                <section className='Home__Grid'>
                  { this.state.adverts.length > 0 &&
                    this.state.adverts.slice(0, Config.MAX_ADVERTS_GRID).map((advert, index) => 
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

  test = () => {
    return 
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    // Chequeo sesion del contexto, si no existe redirijo a register
    const session = this.context.session
    if (!session) {
      return this.props.history.push('/register');
    }
    // Obtengo los tags y los paso al estado para que re-renderice el panel de busquedas
    this.state.api.getTags().then(res => this.setState({tags: res}));
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
    this.state.api.getAdverts()
    .then(res => {
      this.setState({
        error: false,
        loading: false,
        adverts: res
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
    this.state.api.searchAdvert(filters)
    .then(res => {
      this.setState({
        error: false,
        loading: false,
        adverts: res
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

}

export default withSnackbar(Home);