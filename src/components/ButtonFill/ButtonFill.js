/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
/* Own modules */
/* Assets */
/* CSS */
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
        return (
            <Button
                className='ButtonFill'
                variant="contained"
                startIcon={
                    this.state.onHover ? 
                        <AddCircleIcon className='ButtonFill__icon'/> : 
                        <AddCircleOutlineIcon className='ButtonFill__icon'/>
                }
                onMouseEnter={()=>this.setState({onHover: true})}
                onMouseLeave={()=>this.setState({onHover: false})}
            >
                Add Product
            </Button>
        );
    }   
}