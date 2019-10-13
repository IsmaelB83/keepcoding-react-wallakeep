/* Import node modules */
import React, { Component } from 'react';
/* Import own modules */
import InputSearch from '../../inputs/InputSearch/InputSearch';
import Toolbar from '../Toolbar/Toolbar';
/* Import assets */
import imgLogo from '../../../assets/images/logo.png';
/* Import css */
import './Navbar.css';

/**
 * Component para el navbar
 */
export default class Navbar extends Component {
    /**
     * Render
     */
    render() {
        return (
            <nav className='Navbar'>
                <a href='/'>
                  <img src={imgLogo} className='Navbar__Logo' alt='logo' />
                </a>
                <InputSearch/>
                <Toolbar/>
            </nav>
        );
    }
}