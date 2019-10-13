/* Import node modules */
import React, { Component } from 'react';
//import GitHubIcon from '@material-ui/icons/GitHub'; // Bug - https://github.com/mui-org/material-ui/issues/17792
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
/* Import own modules */
/* CSS Import */
import './SocialLinks.css';

/**
 * Social Links del footer
 */
export default class SocialLinks extends Component {
    /**
     * Render
     */
    render() {
        return (
            <div className='social-icons-panel'>
                <a class='social-icon' href='https://laestanciaazul.com'>
                    <AccountCircleIcon />
                </a>
                <a class='social-icon' href='https://github.com/IsmaelB83'>
                    <TwitterIcon />
                </a>
                <a class='social-icon' href='https://www.linkedin.com/in/ismael-bernal-10497a51/'>
                    <LinkedInIcon />
                </a>
                <a class='social-icon' href='https://www.instagram.com/isma83_/'>
                    <InstagramIcon />
                </a>
                <a class='social-icon' href='https://twitter.com/Ismab83'>
                    <TwitterIcon />
                </a>
            </div>
        );
    }
}