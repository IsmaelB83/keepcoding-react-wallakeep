/* NPM modules */
import React, { useState } from 'react';
/* Material UI */
/* Own modules */
/* Models */
import { ADVERT_CONSTANTS } from '../../models/Advert';
/* Assets */
/* CSS */
import './styles.css';

// Initial state del componente
const initialState = {
    name: '',
    type: ADVERT_CONSTANTS.TYPE.ALL,
    tag: ADVERT_CONSTANTS.TAG.ALL,
    priceFrom: 0,
    priceTo: 0
}


/**
* Component para el footer (functional component)
*/
export default function Form(props) {
    
    // Uso del hook useState
    const [inputs, setInputs] = useState(initialState);
    
    // Cambio en alguno de los campo del formulario
    const handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        const formInputs = {...inputs, [name]: value};
        setInputs(formInputs);
        // Los campos numérico NO lanzan busqueda automática (salvo que estén en blanco). El resto de campos lanzan búsqueda en tiempo real
        if (!name.startsWith('price') || (name.startsWith('price') && inputs[name] === '')) {
            props.handleSearch(formInputs);
        }
    }
    
    /**
    * Reseteo el estado a los valores originales de búsqueda
    */
    const handleSubmit = (ev) => {
        ev.preventDefault();
        props.handleSubmit(inputs);
    }
}