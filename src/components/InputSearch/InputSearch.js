/* Import node modules */
import React, { Component } from 'react';
/* Material UI */
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
/* Import own modules */
/* Import assets */
/* Import css */
import './InputSearch.css';

/**
 * Component para el navbar
 */
export default class InputSearch extends Component {

    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            showRemove: false
        }
    }

    /**
     * Render
     */
    render() {
        return (
            <div className='InputSearch'>
                <SearchIcon className='InputSearch__Icon InputSearch__Icon--start'/>
                <input 
                    type='text' 
                    value={this.state.searchTerm}
                    className='InputSearch__Input'
                    placeholder='Buscar productos por nombre'
                    onChange={this.handleInput} 
                />
                { this.state.showRemove &&
                    <HighlightOffIcon className='InputSearch__Icon InputSearch__Icon--end' onClick={this.removeSearch}/>
                }
            </div>

        );
    }

    /**
     * Cambio en un input tipo texto
     */
    handleInput = (event) => {
        this.setState({
            searchTerm: event.target.value,
            showRemove: event.target.value !== '' ? true : false
        });
    }

    /**
     * Removes current search
     */
    removeSearch = () => {
        this.setState({
            searchTerm: '',
            showRemove: false
        })
    }

        /**
     * Removes current search
     */
    performSearch = () => {
        
    }
}