/* NPM modules */
import React, { Component } from 'react';
import Moment from 'react-moment';
/* Material UI */
import Container from '@material-ui/core/Container';
/* Own modules */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
/* Assets */
import imageBuy from '../../assets/images/buy.png';
import imageSell from '../../assets/images/sell.png';
/* CSS */
import './AdvertDetail.css';

/**
 * Main App
 */
export default class AdvertDetail extends Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      type: 'buy',
      name: 'PS4PRO',
      description: 'Compro PS4 Pro con menos de 1 año de uso',
      price: '200.99',
      createdAt: Date.now(),
    }
  }
  
  /**
   * Render
   */
  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch}/>
        <Container>
          <main className='AdvertDisplay'>
            <div className='AdvertDisplay__Header'>
              <img src='https://media.wired.com/photos/5a99f809b4bf6c3e4d405abc/2:1/w_2500,c_limit/PS4-Pro-SOURCE-Sony.jpg' alt='caption'/>
            </div>
            <div className='AdvertDisplay__Middle'>
              <p className='AdvertDisplay__Price'>{this.state.price}
                <span className='AdvertDisplay__Currency'>€</span>
              </p>
              <div className='AdvertDisplay__Title'>
                <img src={`${this.state.type==='buy'?imageBuy:imageSell}`} alt='icon' /> 
                <h1>{this.state.name}</h1>
              </div>
            </div>
            <div className='AdvertDisplay__Content'>
              <Moment className='AdvertDisplayCard__Date' fromNow>{this.state.createdAt}</Moment>            
              <p>
                {this.state.description}
              </p>
            </div>
          </main>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }

  /**
   * Ejecuta la busqueda
   */
  handleSearch = () => {
    this.props.enqueueSnackbar('Realizando búsqueda');
  }
}