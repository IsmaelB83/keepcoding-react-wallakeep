// NPM modules
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockOpenIcon from '@material-ui/icons/LockOpen';
// Own modules
import InputIcon from '../InputIcon/InputIcon'
// Assets
// CSS styles

/**
 * Login Form
 */
export default class InputPassword extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <InputIcon 
        autoComplete="current-password"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder='type your password'
        type={this.state.showPassword ? 'text' : 'password'}
        adornment={<LockOpenIcon />}
        endAdornment={<InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                      }
      />
    );
  }

  /**
   * Show/Hide input content
   */
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword 
    });
  };
}