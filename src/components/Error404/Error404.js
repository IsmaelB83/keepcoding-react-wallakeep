/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
/* Own modules */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
/* Assets */
import image404 from '../../assets/images/404.png';
/* CSS */
import './Error404.css';

export default class Error404 extends Component {

    render() {
      return (
        <React.Fragment>
          <Header/>
          <section className="Error404">
            <img src={image404} alt="404 not found..." />
            <h1>Oooppps! The page you are looking for was not found!</h1>
          </section>
          <Footer/>
        </React.Fragment>
        
      );
    }
  }