/* Import node modules */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
/* Import own modules */
/* Import assets */
/* Import css */
import './ButtonFill.css';

/**
 * Component para el navbar
 */
export default class ButtonFill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onHover: false
        }
    }
    /**
     * Render
     */
    render() {
        const icon = this.state.onHover ? 
                        <AddCircleIcon className='ButtonFill__icon'/> :
                        <AddCircleOutlineIcon className='ButtonFill__icon'/>
        return (
            <Button
                className='ButtonFill__button'
                variant="contained"
                startIcon={icon}
                onMouseEnter={()=>this.setState({onHover: true})}
                onMouseLeave={()=>this.setState({onHover: false})}
            >
                Add Product
            </Button>
        );
    }   
}