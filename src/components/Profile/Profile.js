/* NPM modules */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* Material UI */
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
/* Components */
import NavBar from '../NavBar';
import Footer from '../Footer';
/* Models */
import Session from '../../models/Session';
/* Own modules */
import { AdvertServices } from '../../services';
import LocalStorage from '../../utils/Storage';
/* Assets */
import imagePhoto from '../../assets/images/user.png'
/* CSS */
import './styles.css';

/**
 * Main App
 */
export default class Profile extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      surname: '',
      tag: '',
      maxAdverts: 0,
      tags: []
    }
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    // Actualizo la sesión (excepto el tags que dependo de cargar primero los tags)
    this.setState({
      email: this.props.session.email,
      name: this.props.session.name,
      surname: this.props.session.surname, 
      maxAdverts: this.props.session.maxAdverts
    }, () => {
      // Obtengo los tags y los paso al estado para que re-renderice el panel de busquedas
      AdvertServices.getTags().then(res => {
        this.setState({
          tag: this.props.session.tag,
          tags: res
        })
      });
    })
  }

  /**
   * Render
   */
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Container>
          <main className='Main__Section'>
            <div className='Section__Title'>
              <h2>Perfil de usuario</h2>
            </div>
            <form onSubmit={this.handleSubmit} noValidate autoComplete='off' className='Profile__Form'>
              <div className='Profile_Picture'>
                <img src={imagePhoto} alt='user_avatar'/>
              </div>
              <FormControl fullWidth className='Profile__FormControl'>
                <InputLabel shrink htmlFor='type'>Nombre</InputLabel>
                <Input
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  type='text' 
                  required
                />
              </FormControl>
              <FormControl fullWidth className='Profile__FormControl'>
                <InputLabel shrink htmlFor='type'>Apellido</InputLabel>
                <Input
                  name='surname'
                  value={this.state.surname}
                  onChange={this.handleChange('surname')}
                  type='text' 
                  required
                />
              </FormControl>
              <FormControl fullWidth className='Profile__FormControl'>
                <InputLabel shrink htmlFor='type'>Email</InputLabel>
                <Input
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  type='email' 
                  required
                />
              </FormControl>
              <FormControl fullWidth className='Profile__FormControl'>
                <InputLabel shrink htmlFor='tag'>Tag</InputLabel>
                <Select
                  value={this.state.tag}
                  onChange={this.handleChange('tag')}
                  name='tag'
                  displayEmpty
                  required
                >
                  {
                    this.state.tags && 
                    this.state.tags.map((value) => {
                      return  <MenuItem key={value} value={value}>
                                <Chip size='small'
                                      label={value}
                                      className={`Ad__Tag Ad__Tag--small Ad__Tag--${value}`}
                                />
                              </MenuItem>
                    })
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth className='Profile__FormControl'>
                <InputLabel htmlFor='maxAdverts'>Anuncios por página (Home)</InputLabel>
                <Input
                  name='maxAdverts'
                  type='number'
                  value={this.state.maxAdverts}
                  onChange={this.handleChange('maxAdverts')}
                  min={1}
                  max={20}
                />
              </FormControl>
              <div className='Profile__Footer'>
                <Button type='submit' variant='contained' color='primary' startIcon={<SaveIcon />} className='ButtonWallakeep ButtonWallakeep__Green'>
                  Guardar
                </Button>
                <Button type='button' variant='contained' color='secondary' onClick={this.handleReset} startIcon={<DeleteIcon />} to='/register' component={Link}>
                  Borrar
                </Button>
              </div>            
            </form>
          </main>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }

  /**
   * Cambio en un input tipo texto
   */
  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  }

  /**
   * Manejador del submit del formulario
   */
  handleSubmit = (ev) => {
    ev.preventDefault();
    // Genero sesión y la guardo en LS
    const { email, name, surname, tag, maxAdverts } = this.state;
    const session = new Session (email, name, surname, tag, maxAdverts);
    LocalStorage.saveLocalStorage(session);
    this.props.enqueueSnackbar('Local storage actualizado correctamente.', { variant: 'success' });
    this.props.history.push('/');
    this.props.editSession(session);
  }

  /**
   * Borra datos de sesión y desconecta
   */
  handleReset = () => {
    // Borro el local storage y la sesión del contexto
    LocalStorage.cleanLocalStorage();
    this.props.logout();
  }
}