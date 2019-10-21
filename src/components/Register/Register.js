// Node modules
import React, { Component } from 'react';
import { withSnackbar } from 'notistack';
// Material-UI
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
// Own modules
import UserConsumer from '../../context/UserContext';
import NodepopAPI from '../../services/NodepopAPI';
import LocalStorage from '../../utils/Storage';
// Assets
import imageLogo from '../../assets/images/logo2.png';
// CSS styles
import './Register.css';

/**
 * Register Form
 */
class Register extends Component {
  
  /**
   * Uso del contexto en el cualquier metodo del componente 
   */ 
  static contextType = UserConsumer;

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      isRemember: false,
      name: '',
      surname: '',
      tag: '',
      tags: null
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
                value={this.state.name}
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
                required={this.props.required}
              />
            </FormControl>
            <FormControl>
              <Input
                name='surname'
                value={this.state.surname}
                onChange={this.handleInput('surname')}
                type='text' 
                placeholder='type your surname'
                startAdornment={
                  <InputAdornment position='start' className='InputIcon__Icon'>
                    <AccountCircleIcon/>
                  </InputAdornment>
                }
                endAdornment={this.props.endAdornment}
                required={this.props.required}
              />
            </FormControl>
            <FormControl>
              <Select
                value={this.state.tag || ''}
                onChange={this.handleInput('tag')}
                name='tag'
                displayEmpty
              >
                <MenuItem value='' disabled>Filter by tag</MenuItem>
                {
                  this.state.tags && 
                  this.state.tags.map((value, key) => {
                    return <MenuItem key={key} value={key}>{value}</MenuItem>
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
    // Restaurar datos de sesion del contexto
    const session = this.context.session;
    if (session) {
      this.setState({
        name: session.name,
        surname: session.surname,
        tag: session.tag,
      });
    }
    // Recuperar tags de la API
  }

  /**
   * Handle onSubmit event
   */
  handleOnSubmit = (event) => {
    event.preventDefault();
    // Creo el objeto session desde el formulario
    const { name, surname, tag} = {...this.state};
    const session = { name, surname, tag};
    // Guardo en local storage en caso de haberlo seleccionado "remember"
    if (this.state.isRemember) {
      LocalStorage.saveLocalStorage(session);
    }
    // Actualizo el contexto y redijo el home
    this.context.session = session;
    this.props.history.push('/');
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

export default withSnackbar(Register);