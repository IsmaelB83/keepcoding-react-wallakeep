// Node imports
import React, { Component } from 'react';
// Material UI
import Container from '@material-ui/core/Container';
// Import own
import InputSearch from '../InputSearch/InputSearch';
import ButtonFill from '../ButtonFill/ButtonFill';
// Assets
import imageLogo from '../../assets/images/logo2.png';
import imageAvatar from '../../assets/images/user.png';
// CSS imports
import './Header.css';

/**
 * Componente home
 */
export default class Home extends Component {

  /**
   * Render del componente
   */
  render() {
    return (
        <React.Fragment>
          <header className='Header'>
            <nav>
              <Container className='Header__Container'>
                <a href='/' className='Header__Brand'>
                  <img src={imageLogo} alt='logo' className='Header__Brand'/>
                </a>
                <InputSearch/>
                <ButtonFill/>
                <a href='/profile' className='Header__Avatar'>
                  <img src={imageAvatar} className='Header__Avatar' alt='logo'/>
                </a>
              </Container>
            </nav>
          </header>
        </React.Fragment>
    );
  }
}