/* Import node modules */
import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'; // Bug - https://github.com/mui-org/material-ui/issues/17792
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
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
            <div className='SocialLinks'>
                <a class='SocialLinks__link SocialLinks__link--facebook' href='https://laestanciaazul.com'>
                    <HomeIcon />
                </a>
                <a class='SocialLinks__link SocialLinks__link--github' href='https://github.com/IsmaelB83'>
                    <GitHubIcon />
                </a>
                <a class='SocialLinks__link SocialLinks__link--linkedin' href='https://www.linkedin.com/in/ismael-bernal-10497a51/'>
                    <LinkedInIcon />
                </a>
                <a class='SocialLinks__link SocialLinks__link--instagram' href='https://www.instagram.com/isma83_/'>
                    <InstagramIcon />
                </a>
                <a class='SocialLinks__link SocialLinks__link--twitter' href='https://twitter.com/Ismab83'>
                    <TwitterIcon />
                </a>
            </div>
        );
    }
}