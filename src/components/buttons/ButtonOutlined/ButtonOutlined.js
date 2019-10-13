/* Import node modules */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
/* Import own modules */
/* Import assets */
/* Import css */
import './ButtonOutlined.css';

/**
 * Component para el navbar
 */
export default class ButtonOutlined extends Component {
    /**
     * Render
     */
    render() {
        return (
            <Button
                className='ButtonOutlined__button'
                variant="outlined"
            >
                Registrate o inicia sesión
            </Button>
        );
    }
}