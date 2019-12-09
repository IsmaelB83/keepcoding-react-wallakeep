// NPM Modules
import React, { Component } from 'react';
// Material UI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
// Models
import Session from '../../models/Session';
/* Own modules */
import LocalStorage from '../../utils/Storage';
// Models
import { ADVERT_CONSTANTS } from '../../models/Advert';
// Assets
import imageLogo from '../../assets/images/logo2.png';
// CSS
import './styles.css';

/**
 * Register Form
 */
export default class Register extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      isRemember: true,
      email: this.props.session.email,
      name: this.props.session.name,
      surname: this.props.session.surname,
      tag: this.props.session.tag,
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <div className='Register'>
        <div className='Register__Wrapper'>
          <form className='Register__Form' onSubmit={this.handleOnSubmit}>
            <img src={imageLogo} className='Register__Logo' alt='nodepop-logo' />
            <FormControl>
              <Input
                name='name'
                value={this.state.name || ''}
                onChange={this.handleInput('name')}
                type='text' 
                placeholder='type your name'
                autoComplete='username'
                startAdornment={
                  <InputAdornment position='start' className='InputIcon__Icon'>
                    <AccountCircleIcon/>
                  </InputAdornment>
                }
                endAdornment={this.props.endAdornment}
                required
              />
            </FormControl>
            <FormControl>
              <Input
                name='surname'
                value={this.state.surname || ''}
                onChange={this.handleInput('surname')}
                type='text' 
                placeholder='type your surname'
                startAdornment={
                  <InputAdornment position='start' className='InputIcon__Icon'>
                    <AccountCircleIcon/>
                  </InputAdornment>
                }
                endAdornment={this.props.endAdornment}
                required
              />
            </FormControl>
            <FormControl>
              <Input
                name='email'
                value={this.state.email || ''}
                onChange={this.handleInput('email')}
                type='email' 
                placeholder='type your email'
                autoComplete='username'
                startAdornment={
                  <InputAdornment position='start' className='InputIcon__Icon'>
                    <MailOutlineIcon/>
                  </InputAdornment>
                }
                endAdornment={this.props.endAdornment}
                required
              />
            </FormControl>
            <FormControl>
              <Select
                value={this.state.tag || ''}
                onChange={this.handleInput('tag')}
                name='tag'
                displayEmpty
                required
              >
                <MenuItem value='' disabled>Filter by tag</MenuItem>
                <MenuItem key={ADVERT_CONSTANTS.TAG.ALL} value={ADVERT_CONSTANTS.TAG.ALL}>
                  <Chip key={ADVERT_CONSTANTS.TAG.ALL}
                        label={ADVERT_CONSTANTS.TAG.ALL}
                        size='small'
                        className='Ad__Tag Ad__Tag--small'
                  />
                </MenuItem>
                {
                  this.props.tags && 
                  this.props.tags.map((value) => {
                    return  <MenuItem key={value} value={value}>
                              <Chip size='small'
                                    label={value}
                                    className={`Ad__Tag Ad__Tag--small Ad__Tag--${value}`}
                              />
                            </MenuItem>
                  })
                }
              </Select>
              <FormHelperText>Select a tag as the initial filter</FormHelperText>
            </FormControl>
            <FormControlLabel
              name='isRemember'
              label='remember me'
              control={
                <Checkbox
                    color='primary'
                    checked={this.state.isRemember}
                    onChange={this.handleCheckbox('isRemember')}
                />
              }
            />
            <Button className='button' type='submit' variant='contained' color='primary'> Login </Button>
          </form>
        </div>
      </div>
    );
  }

  /**
   * Did mount
   */
  componentDidMount() {
    if (!this.props.isFetching && this.props.apiConnected) {
      this.props.enqueueSnackbar('Conectado con éxito a la API', { variant: 'success', });
    } else if (!this.props.isFetching && !this.props.apiConnected) {
      this.props.enqueueSnackbar('Error conectando con la API. Revise la URL.', { variant: 'error', });
    }
  }

  /**
   * Handle onSubmit event
   */
  handleOnSubmit = async (event) => {
    event.preventDefault();
    // Sólo si no hay errores de conexión
    if (!this.state.error) {
      // Campos relevantes para generar el objeto sesión
      const { email, name, surname, tag } = {...this.state};
      // Son todos obligatorios, en caso de no estar no permito continuar
      if (!email || !name || !surname || !tag) {
        this.props.enqueueSnackbar('Rellene todos los campos del formulario', { variant: 'error', });
        return;
      }
      // Genero sesión y la guardo en LS si ha seleccionado "remember"
      const session = new Session (email, name, surname, tag, this.props.session.maxAdverts);
      if (this.state.isRemember) {
        LocalStorage.saveLocalStorage(session);
      }
      // Actualizo el contexto y redijo el home
      this.props.setSession(session);
      this.props.history.push('/');
    } else {
      // Sin API no continuamos
      this.props.enqueueSnackbar('Error conectando con la API. Revise la URL.', { variant: 'error', });
    }
  }

  /**
   * Cambio en un input tipo check
   */
  handleCheckbox = (field) => (event) => {
    this.setState({
      [field]: event.target.checked
    });
  };

  /**
   * Cambio en un input tipo texto
   */
  handleInput = (field) => (event) => {
    this.setState({
      [field]: event.target.value 
    });
  }
}
