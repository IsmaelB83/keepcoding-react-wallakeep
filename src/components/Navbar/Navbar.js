/* Import node modules */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
/* Import own modules */
import InputSearch from '../inputs/InputSearch/InputSearch';
/* Import assets */
import imgLogo from '../../assets/images/logo.png'
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
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircleOutlineIcon />}
                  >
                  Add Product
                </Button>
            </nav>
        );
    }
}