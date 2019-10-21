// NPM modules
import React, { Component } from 'react';
// Material UI
import Container from '@material-ui/core/Container';
// Own modules
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// CSS styles
import './Home.css';

/**
 * Main App
 */
export default class Home extends Component {
  /**
   * Render
   */
  render() {   
    return (
      <React.Fragment>
        <Header/>
        <Container>
          <main className='Home__Grid'>
            <h1>Listado de anuncios</h1>

          </main>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }
}