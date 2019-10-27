/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
/* Own modules */
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
/* Assets */
import image404 from '../../assets/images/404.png';
/* CSS */
import './Error404.css';

export default class Error404 extends Component {

  /**
   * Render
   */
  render() {
    return (
      <React.Fragment>
        <header>
          <NavBar/>
        </header>
        <section className="Error404">
          <img src={image404} alt="404 not found..." />
          <h1>Oooppps! The page you are looking for was not found!</h1>
        </section>
        <Footer/>
      </React.Fragment>
      
    );
  }
}