/* Import node modules */
import React, { Component } from 'react';
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
     * Render
     */
    render() {
        return (
            <div className='InputSearch'>
                <SearchIcon className='InputSearch__Icon InputSearch__Icon--start'/>
                <input type='text' className='InputSearch__Input' placeholder='Buscar productos por nombre' />
                <HighlightOffIcon className='InputSearch__Icon InputSearch__Icon--end'/>
            </div>

        );
    }
}