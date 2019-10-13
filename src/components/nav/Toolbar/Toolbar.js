/* Import node modules */
import React, { Component } from 'react';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
/* Import own modules */
import ButtonFill from '../../buttons/ButtonFill/ButtonFill';
import LinkNavbar from '../LinkNavbar/LinkNavbar';
/* Import assets */
/* Import css */
import './Toolbar.css';

/**
 * Component para el navbar
 */
export default class Toolbar extends Component {
    /**
     * Render
     */
    render() {
        return (
            <div className='Toolbar'>
                <LinkNavbar className='normal' active={true} icon={<LocalAtmIcon className='LinkNavbar__icon'/>} label={'0€ saldo'}/>
                <LinkNavbar className='normal' icon={<ChatBubbleOutlineIcon className='LinkNavbar__icon'/>} label={'Mensajes'}/>
                <LinkNavbar className='normal' icon={<AccountCircleIcon className='LinkNavbar__icon'/>} label={'Mi zona'}/>
                <ButtonFill/>
                <MenuIcon/>
            </div>
        );
    }
}