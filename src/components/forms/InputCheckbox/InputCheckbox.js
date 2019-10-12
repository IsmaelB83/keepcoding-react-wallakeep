// NPM modules
import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// Own modules
// Assets
// CSS styles

/**
 * Login Form
 */
export default class InputIcon extends Component {
  /**
   * Render
   */
  render() {   
    return (
        <FormControlLabel
            control={
            <Checkbox
                checked={this.props.checked}
                onChange={this.props.onChange}
                color='primary'
                inputProps={{
                'aria-label': 'secondary checkbox',
                }}
            />
            }
            label='Remember me'
        />
    );
  }
}

