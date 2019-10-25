/* NPM modules */
import React, { Component } from 'react';
import 'date-fns';
/* Material UI */
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
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
      type: 'buy',
      tag: '',
      createdFrom: new Date('01/01/1900'),
      createdTo: Date.now(),
      priceFrom: 0,
      priceTo: 999999999,
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <div className='SearchPanel'>
        <h2>Criterios de búsqueda</h2>
        <div className='SearchPanel__Filters'>
          <FormControl>
            <InputLabel shrink htmlFor="type">Tipo</InputLabel>
            <Select
              id='type'
              name= 'type'
              onChange={this.handleChange('')}
              className='SearchPanel__Type'
              value={this.state.type}
              displayEmpty
            >
              <MenuItem key='buy' value='buy' default>Compra</MenuItem>
              <MenuItem key='sell' value='sell'>Venta</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel shrink htmlFor="tag">Tag</InputLabel>
            <Select
              id='tag'
              name='tag'
              value={this.state.tag}
              onChange={this.handleChange('')}
              displayEmpty
            >
              <MenuItem value='' disabled>Tag</MenuItem>
              {
                this.props.tags && 
                this.props.tags.map((value, key) => {
                  return <MenuItem key={key} value={key}>{value}</MenuItem>
                })
              }
            </Select>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              id="createdFrom"
              name="createdFrom"
              label="Creado desde"
              format="MM/dd/yyyy"
              value={this.state.createdFrom}
              onChange={this.handleChange('')}
            />
            <KeyboardDatePicker
              id="createdTo"
              name="createdTo"
              label="Creado hasta"
              format="MM/dd/yyyy"
              value={this.state.createdTo}
              onChange={this.handleChange('')}
            />
          </MuiPickersUtilsProvider>
          <FormControl>
            <InputLabel htmlFor="priceFrom">Precio desde</InputLabel>
            <Input
              id="priceFrom"
              name="priceFrom"
              value={parseInt(this.state.priceFrom)}
              onChange={this.handleChange('')}
              endAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="priceTo">Precio hasta</InputLabel>
            <Input
              id="priceTo"
              name="priceTo"
              value={parseInt(this.state.priceTo)}
              onChange={this.handleChange('priceTo')}
              endAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
          </FormControl>
        </div>        
      </div>
    );
  }

  handleChange = (field) => (valor) => {
    debugger;
    this.setState({
      [field]: valor
    });
  }
}