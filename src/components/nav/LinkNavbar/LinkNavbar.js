/* Import node modules */
import React, { Component } from 'react';

/* Import own modules */
/* Import assets */
/* Import css */
import './LinkNavbar.css';

/**
 * Component para el navbar
 */
export default class LinkNavbar extends Component {
    /**
     * Render
     */
    render() {
        return (
            <a href='/' className={`LinkNavbar LinkNavbar--${this.props.active?'active':'inactive'}`}>
                {this.props.icon}
                <span className='LinkNavbar__span'>{this.props.label}</span>
            </a>
        );
    }
}