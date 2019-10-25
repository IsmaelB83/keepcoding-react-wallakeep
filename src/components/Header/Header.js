/* NPM modules */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
/* Material UI */
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
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
        searchTerm: '',
        showRemove: false,
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
                <div className='InputSearch'>
                    <SearchIcon 
                        className={`InputSearch__Icon InputSearch__Icon--start ${this.state.focus?'InputSearch__Icon--focus':''}`}
                        onClick={this.handleSearch}
                    />
                    <input 
                        type='text' 
                        value={this.state.searchTerm}
                        className={`InputSearch__Input ${this.state.focus?'InputSearch__Input--focus':''}`}
                        placeholder='Buscar productos por nombre'
                        onChange={this.handleInput}
                        onFocus={this.handleFocus}
                        onBlur={this.handleFocus}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                this.handleSearch();
                            }
                        }}
                    />
                    { this.state.showRemove &&
                        <HighlightOffIcon 
                            className={`InputSearch__Icon InputSearch__Icon--end ${this.state.focus?'InputSearch__Icon--focus':''}`}
                            onClick={this.handleClear}
                        />
                    }
                </div>               
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
                >
                  Add Product
                </Button>
                <Link to='/profile' className='Header__Avatar'>
                  <img src={imageAvatar} className='Header__Avatar' alt='logo'/>
                </Link>
              </Container>
            </nav>
          </header>
        </React.Fragment>
    );
  }

  /**
   * Cambio en un input tipo texto
   */
  handleInput = (event) => {
    this.setState({
        searchTerm: event.target.value,
        showRemove: event.target.value !== '' ? true : false
    });
  }

  /**
   * Vacia el input de búsqueda
   */
  handleClear = () => {
      this.setState({
          searchTerm: '',
          showRemove: false,
          focus: false
      });
  }
  
  /**
   * Gestiona el estado de focus del input
   */
  handleFocus = (ev) => {
      // Focus activo estilo - Blur desactivo estilo
      let state = ev.type==='focus'?true:false;
      if (this.state.searchTerm) {
          // En caso de que el searchterm esté relleno no "quito focus"
          state = true;
      }
      // Actualizo el estado para lanzar el render
      this.setState({focus: state})
  }    

  /**
   * Manejador de busqueda por nombre
   */
  handleSearch = () => {
    this.props.handleSearch(this.state.searchTerm);
  }
}