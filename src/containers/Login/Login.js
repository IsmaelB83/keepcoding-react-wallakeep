// NPM modules
import React, { Component } from 'react';
// Own modules
import InputPassword from '../../components/forms/InputPassword/InputPassword';
import InputCheckbox from '../../components/forms/InputCheckbox/InputCheckbox';
import InputIcon from '../../components/forms/InputIcon/InputIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
// Assets
import imageLogo from '../../assets/images/logo2.png';
// CSS styles
import './Login.css';

/**
 * Login Form
 */
export default class Login extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
      checkbox: false
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <div className='Login'>
        <div className='Login-wrapper'>
          <form className='Login-form' onSubmit={this.handleOnSubmit}>
            <img src={imageLogo} className='Login-logo' alt='nodepop-logo' />
            <InputIcon 
              name='email'
              value={this.state.email}
              onChange={this.handleInput('email')}
              type='email' placeholder='type your email'
              adornment={<AccountCircleIcon/>} 
            />
            <InputPassword 
              name='password'
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder='type your password' 
            />
            <InputCheckbox 
              name='remember'
              label='remember me'
              onChange={this.handleCheckbox('checkbox')} 
            />
            <Button className='button' type='submit' variant='contained' color='primary'> Login </Button>
          </form>
        </div>
    </div>
    );
  }

  /**
   * Handle onSubmit event
   */
  handleOnSubmit = (event) => {
    // Por ahora no hay autenticación (nodepop api no lo proporciona). La autenticación a futuro será con JWT
    event.preventDefault();
    console.log(this.state);
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