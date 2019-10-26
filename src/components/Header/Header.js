/* NPM modules */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
/* Material UI */
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from '@material-ui/core/Typography'
/* Own modules */
/* Assets */
import imageLogo from '../../assets/images/logo2.png';
import imageAvatar from '../../assets/images/user.jpg';
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
        showUserActions: false,
        focus: false,
    }
  }
  
  /**
   * Render del componente
   */
  render() {
    return (
        <React.Fragment>
          <header>
              {/* 
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
                  <span>{this.props.name}</span>
                </Link>
              </Container> 
              </nav>
              */}
              <AppBar title="Wallakeep" position="static" className='AppBar'>
                <Container>
                <Toolbar className='AppBar__Toolbar'>
                  <Link to='/' className='AppBar__Brand'>
                    <img src={imageLogo} alt='logo' className='AppBar__Brand'/>
                  </Link>
                  <Button className='AppBar__Avatar' aria-label="menu" onClick={()=>this.setState({showUserActions: !this.state.showUserActions})}>
                    <img src={imageAvatar} alt='logo'/>
                    <span className='AppBar__Avatar--hiddenXS'>{this.props.name}</span>
                    <KeyboardArrowDownIcon/>
                    { this.state.showUserActions &&
                      <div className='UserActions'>
                        <ul>
                          <li>
                            Crear anuncio
                          </li>
                          <li>Perfil</li>
                          <li>Desconectar</li>
                        </ul>
                      </div>  
                    }
                  </Button>
                </Toolbar>
               
                </Container>
              </AppBar>

          </header>
        </React.Fragment>
    );
  }
}