/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
/* Own modules */
/* Assets */
/* CSS */
import './SearchPanel.css';

/**
 * Main App
 */
export default class SearchPanel extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: 'all',
      tag: props.tag,
      priceFrom: null,
      priceTo: null,  
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <form className='SearchPanel' onSubmit={this.handleSubmit}>
        <h2>Criterios de búsqueda</h2>
        <div className='InputSearch'>
            <SearchIcon className={`InputSearch__Icon InputSearch__Icon--start ${this.state.focus?'InputSearch__Icon--focus':''}`}/>
            <input 
                id='filter_name'
                name='name'
                type='text' 
                value={this.state.name}
                onChange={this.handleChange('name')}
                className='InputSearch__Input'
                autoComplete='off'
                placeholder='Buscar productos por nombre'
            />
        </div>   
        <div className='SearchPanel__Filters'>
          <FormControl>
            <InputLabel shrink htmlFor='type'>Tipo</InputLabel>
            <Select
              id='filter_type'
              name= 'type'
              onChange={this.handleChange('type')}
              className='SearchPanel__Type'
              value={this.state.type}
              displayEmpty
            >
              <MenuItem key='all' value='all'><Chip size='small' label='all' className='Ad__Tag Ad__Tag--small'/></MenuItem>
              <MenuItem key='buy' value='buy'><Chip size='small' label='buy' className='Ad__Tag Ad__Tag--small Ad__Tag--buy'/></MenuItem>
              <MenuItem key='sell' value='sell'><Chip size='small' label='sell' className='Ad__Tag Ad__Tag--small Ad__Tag--sell'/></MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel shrink htmlFor='tag'>Tag</InputLabel>
            <Select
              id='filter_tag'
              name='tag'
              value={this.state.tag}
              onChange={this.handleChange('tag')}
              displayEmpty
            >
              <MenuItem key='all' value='all'>
                <Chip key='todos'
                      size='small'
                      label='todos'
                      className='Ad__Tag Ad__Tag--small'
                />
              </MenuItem>
              {
                this.props.tags && 
                this.props.tags.map((value, key) => {
                  return  <MenuItem key={key} value={value}>
                            <Chip key={key}
                                  size='small'
                                  label={value}
                                  className={`Ad__Tag Ad__Tag--small Ad__Tag--${value}`}
                            />
                          </MenuItem>
                })
              }
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='priceFrom'>Precio desde</InputLabel>
            <Input
              id='filter_priceFrom'
              name='priceFrom'
              value={parseInt(this.state.priceFrom) || ''}
              onChange={this.handleChange('priceFrom')}
              endAdornment={<InputAdornment position='start'>€</InputAdornment>}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor='priceTo'>Precio hasta</InputLabel>
            <Input
              id='filter_priceTo'
              name='priceTo'
              value={parseInt(this.state.priceTo) || ''}
              onChange={this.handleChange('priceTo')}
              endAdornment={<InputAdornment position='start'>€</InputAdornment>}
            />
          </FormControl>
        </div> 
        <div className='SearchPanel__Footer'>
          <Button className='button' type='submit' variant='contained' color='primary'> Search </Button>
          <Button className='button' variant='contained' color='secondary' onClick={this.handleReset}> Reset </Button>
        </div>       
      </form>
    );
  }

  /**
   * Cambio en alguno de los campo del formulario
   */
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    }, () => {
      // Los campos numérico NO quiero que lancen busqueda automática (salvo que estén en blanco).
      // Para el resto de campos la búsqueda se activa en cuanto el usuario modifica el formulario (mejor UX)
      if  ( !name.startsWith('price') || (name.startsWith('price') && this.state[name] === '') ) {
        this.props.handleSearch(this.state);
      }
    });
  }

  /**
   * Reseteo el estado a los valores originales de búsqueda
   */
  handleReset = () => {
    this.setState({
      type: 'all',
      tag: 'all',
      priceFrom: null,
      priceTo: null,
    }, () => {
      // Llamo a realizar la busqueda
      this.props.handleSearch(this.state);
    });
  }
  
  /**
   * Reseteo el estado a los valores originales de búsqueda
   */
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.handleSearch(this.state);
  }
}