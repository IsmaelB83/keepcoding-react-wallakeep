// NPM modules
import React, { Component } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
// Own modules
// Assets
// CSS styles
import './InputIcon.css';

/**
 * Login Form
 */
export default class InputIcon extends Component {
  /**
   * Render
   */
  render() {   
    return (
        <FormControl>
          <Input
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            type={this.props.type}
            autoComplete='username'
            startAdornment={
              <InputAdornment position='start' className='InputIcon-icon'>
                { this.props.adornment }
              </InputAdornment>
            }
            endAdornment={this.props.endAdornment}
          />
        </FormControl>
    );
  }
}

InputIcon.defaultProps = {
  type: 'text',
}
