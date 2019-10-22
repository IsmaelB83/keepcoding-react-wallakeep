/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
/* Own modules */
/* Assets */
/* CSS */
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
            showRemove: false,
            focus: false,
        }
    }

    /**
     * Render
     */
    render() {
        return (
            <div className='InputSearch'>
                <SearchIcon 
                    className={`InputSearch__Icon InputSearch__Icon--start ${this.state.focus?'InputSearch__Icon--focus':''}`}
                    onClick={this.props.handleSearch}
                />
                <input 
                    type='text' 
                    value={this.state.searchTerm}
                    className={`InputSearch__Input ${this.state.focus?'InputSearch__Input--focus':''}`}
                    placeholder='Buscar productos por nombre'
                    onChange={this.handleInput}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            this.props.handleSearch();
                        }
                    }}
                />
                { this.state.showRemove &&
                    <HighlightOffIcon 
                        className={`InputSearch__Icon InputSearch__Icon--end ${this.state.focus?'InputSearch__Icon--focus':''}`}
                        onClick={this.handleClear}
                    />
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
     * Vacia el input de búsqueda
     */
    handleClear = () => {
        this.setState({
            searchTerm: '',
            showRemove: false,
            focus: false
        });
    }
    
    /**
     * Gestiona el estado de focus del input
     */
    handleFocus = (ev) => {
        // Focus activo estilo - Blur desactivo estilo
        let state = ev.type==='focus'?true:false;
        if (this.state.searchTerm) {
            // En caso de que el searchterm esté relleno no "quito focus"
            state = true;
        }
        // Actualizo el estado para lanzar el render
        this.setState({focus: state})
    }    
}