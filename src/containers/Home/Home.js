// NPM modules
import React, { Component } from 'react';
// Own modules
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/nav/Navbar/Navbar';
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
      <div className='Home__Wrapper'>
        <header>
          <Navbar/>
        </header>
        <main className='Home__Container'>
          <section className='Home__Carousel'>
            <h1>¿Qué estas buscando hoy?</h1>
          </section>
          <section className='Home__Summary'>
            <h2>Resumen por categorías</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </main>
        <Footer/>
      </div>
    );
  }
}