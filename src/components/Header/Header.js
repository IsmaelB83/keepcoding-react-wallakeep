/* NPM modules */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
/* Material UI */
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
/* Own modules */
/* Assets */
import imageLogo from '../../assets/images/logo2.png';
import imageAvatar from '../../assets/images/user.png';
/* CSS */
import './Header.css';

/**
 * Componente home
 */
export default class Home extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
        focus: false,
    }
  }
  
  /**
   * Render del componente
   */
  render() {
    return (
        <React.Fragment>
          <header className='Header'>
            <nav>
              <Container className='Header__Container'>
                <Link to='/' className='Header__Brand'>
                  <img src={imageLogo} alt='logo' className='Header__Brand'/>
                </Link>
                <Link to='/advert/create'>
                  <Button
                    className='ButtonFill'
                    variant="contained"
                    startIcon={
                        this.state.onHover ? 
                            <AddCircleIcon className='ButtonFill__icon'/> : 
                            <AddCircleOutlineIcon className='ButtonFill__icon'/>
                    }
                    onMouseEnter={()=>this.setState({onHover: true})}
                    onMouseLeave={()=>this.setState({onHover: false})}
                    onClick={this.handleAddProduct}
                  >
                    Add Product
                  </Button>
                </Link>
                <Link to='/profile' className='Header__Avatar'>
                  <img src={imageAvatar} className='Header__Avatar' alt='logo'/>
                </Link>
              </Container>
            </nav>
          </header>
        </React.Fragment>
    );
  }
}