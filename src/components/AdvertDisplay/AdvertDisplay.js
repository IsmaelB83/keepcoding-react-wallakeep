/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import Container from '@material-ui/core/Container';
/* Own modules */
import AdvertCard from '../AdvertCard/AdvertCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
/* Assets */
/* CSS */
import './AdvertDisplay.css';

/**
 * Main App
 */
export default class AdvertDisplay extends Component {
  /**
   * Render
   */
  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch}/>
        <Container>
          <main className='Home__Grid'>
            <h1>Detalle de anuncio</h1>
            <AdvertCard
              type='buy'
              name='PS4PRO'
              description='Compro PS4 Pro con menos de 1 año de uso'
              price='200.99'
              createdAt={Date.now()}
            />
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