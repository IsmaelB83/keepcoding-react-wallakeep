/* NPM modules */
import React, { Component } from 'react';
import Moment from 'react-moment';
/* Material UI */
import Container from '@material-ui/core/Container';
/* Own modules */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UserConsumer from '../../context/UserContext';
import NodepopAPI from '../../services/NodepopAPI';
/* Assets */
import imageBuy from '../../assets/images/buy.png';
import imageSell from '../../assets/images/sell.png';
import imageSpinner from '../../assets/images/spinner.gif';
/* CSS */
import './AdvertDetail.css';

/**
 * Main App
 */
export default class AdvertDetail extends Component {
  
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
      api: new NodepopAPI(),
      advert: null
    }
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
    // Call API to get advert detail
    const id = this.props.match.params.id;
    this.state.api.getAdvert(id)
      .then( res => {
        this.setState({
          advert: res,
          loading: false
        });
      })
  }

  /**
   * Render
   */
  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch}/>
        <Container>
          <main className='AdvertEdit'>
            <div className='SectionTitle'>
              <h2>Detalle del anuncio</h2>
            </div>
            { !this.state.loading && 
              <main className='AdvertDisplay'>
                <div className='AdvertDisplay__Header'>
                  <div className='AdvertDisplay__Title'>
                    <img src={`${this.state.advert.type==='buy'?imageBuy:imageSell}`} alt='icon' /> 
                    <h1>{this.state.advert.name}</h1>
                  </div>
                  <img className='Caption' src={this.state.advert.photo} alt='caption'/>
                </div>
                <div className='AdvertDisplay__Middle'>
                  <p className='Price'>{this.state.advert.price} €</p>
                  <Moment className='Date' fromNow>{this.state.advert.createdAt}</Moment>            
                </div>
                <div className='AdvertDisplay__Footer'>
                  <p>{this.state.advert.description}</p>
                </div>
              </main>
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
}