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
      api: new NodepopAPI()
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch}/>
        <Container className='Container__Fill'>
          <main className='Home'>
            {
              this.state.error && 
              <div className='Home__Error'>
                <img src={imageError} className='Home__Spinner' alt='spinner'/>
                <h2>Failed to connect</h2>
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
            {
              !this.state.loading &&
              this.state.adverts && 
              <React.Fragment>
                <SearchPanel />
                <section className='Home__Grid'>
                  {
                    this.state.adverts.slice(0, Config.MAX_ADVERTS_GRID).map((advert, index) => 
                      <AdvertCard key={advert.id} 
                                  id={advert.id} 
                                  name={advert.name} 
                                  description={advert.description}
                                  price={advert.price}
                                  type={advert.type} 
                                  photo={advert.photo} 
                                  tags={advert.tags} 
                      />
                    )
                  }
                </section>
              </React.Fragment>
            }
            {
              this.state.loading &&
              <div className='Home__Loading'>
                <img src={imageSpinner} className='Home__Spinner' alt='spinner'/>
                <h2>Fetching data from API</h2>
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
    // En caso de OK conecto a la API
    this.getAdverts();
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
   * Ejecuta una busqueda sobre los anuncios
   */
  searchAdverts = (name, query) => {
    if (!name) {
      return this.getAdverts();
    }

    this.state.api.searchAdvert(`name=${name}`)
    .then(res => {
      this.setState({
        error: false,
        loading: false,
        adverts: res
      })
    })
    .catch(error => {
      this.props.enqueueSnackbar('Error conectando con la API', { variant: 'error', });
      this.setState({
        error: true,
        loading: false
      });
    });
  }

  /**
   * Ejecuta la busqueda
   */
  handleSearch = (name) => {
    this.searchAdverts(name)
  }
}

export default withSnackbar(Home);