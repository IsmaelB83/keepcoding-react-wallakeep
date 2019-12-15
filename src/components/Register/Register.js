// NPM Modules
import React, { Component } from 'react';
// Material UI
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
// Own components
import InputForm from '../Forms/InputForm';
import CheckForm from '../Forms/CheckForm';
import Form from '../Forms/Form';
import withForm from '../Forms/Form/withForm';
// Models
import Session from '../../models/Session';
// Own modules
import LocalStorage from '../../utils/Storage';
// Assets
import imageLogo from '../../assets/images/logo2.png';
// CSS
import './styles.css';

/**
 * Register Form
 */
class Register extends Component {

  /**
   * Render
   */
  render() {
    return (
      <div className='Register'>
        <div className='Register__Wrapper'>
          <Form className='Register__Form' onSubmit={this.login}>
            <img src={imageLogo} className='Register__Logo' alt='nodepop-logo' />
            <InputForm name='name' type='text' placeholder='type your name' required icon={<AccountCircleIcon/>}/>
            <InputForm name='surname' type='text' placeholder='type your surname' required icon={<AccountCircleIcon/>}/>
            <InputForm name='email' type='email' placeholder='type your email' required icon={<MailOutlineIcon/>}/>
            <CheckForm name='isRemember' label='remember me' color='primary'/>
            <Button className='button' type='submit' variant='contained' color='primary'> Login </Button>
          </Form>
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
      this.props.enqueueSnackbar('Error conectando con la API', { variant: 'error', });
    }
  }

  /**
   * Handle onSubmit event
   */
  login = (inputs) => {
    // Sólo si no hay errores de conexión
    if (this.props.apiConnected) {
      // Campos relevantes para generar el objeto sesión
      const { email, name, surname, isRemember } = {...inputs};
      // Son todos obligatorios, en caso de no estar no permito continuar
      if (!email || !name || !surname) {
        this.props.enqueueSnackbar('Rellene todos los campos del formulario', { variant: 'error', });
        return;
      }
      // Genero sesión y la guardo en LS si ha seleccionado "remember"
      debugger;
      const session = new Session (email, name, surname, this.props.session.maxAdverts);
      if (isRemember) {
        LocalStorage.saveLocalStorage(session);
      }
      // Actualizo el contexto y redijo el home
      this.props.setSession(session);
      this.props.history.push('/');
    } else {
      // Sin API no continuamos
      this.props.enqueueSnackbar('Error conectando con la API', { variant: 'error', });
    }
  }
}

export default withForm(Register);