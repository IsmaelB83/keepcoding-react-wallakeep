// Node imports
import React, { Component } from 'react';
// Own imports
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// CSS imports
import './Error404.css';
// Assets imports
import image404 from '../../assets/images/404.png';

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