/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BusinessIcon from '@material-ui/icons/Business';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
/* Own modules */
/* Assets */
/* CSS */
import './Footer.css';


/**
 * Component para el footer
 */
export default class Footer extends Component {
    /**
     * Render
     */
    render() {
        return (
            <footer className='Footer'>
                <Container>
                    <Grid container spacing={3} className='Footer__row'>
                        <Grid item xs={12} sm={6} lg={4} className='Footer-item mt-3 mt-lg-0'>
                           <FooterAddress/> 
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} className='Footer-item links mt-3 mt-lg-0'>
                            <FooterLinks/>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4} className='Footer-item mt-3 mt-lg-0'>
                            <FooterRecentProducts/>
                        </Grid>
                    </Grid>
                    <Grid container justify='center' className='Footer__row'>
                        <Grid item>
                            <p>Página web desarrollada por Ismael Bernal <a href='mailto:ismaelbernal83@gmail.com'>ismaelbernal83@gmail.com</a></p>
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item>
                            <SocialLinks />
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        );
    }
}

/**
 * Sección de dirección del footer
 */
function FooterAddress() {
    return (
        <div className='Footer__section'>
            <h2 className='Footer__title'>Contactar</h2>
            <div className='Footer__content'>
                <p>Puede ponerse en contacto con Nodepop a través de los siguientes medios:</p>
                <div className='Footer__block'>
                    <BusinessIcon className='mr-1'/>
                    <span>Dirección: </span>742 Evergreen Terrace
                </div>
                <div className='Footer__block'>
                    <MailOutlineIcon className='mr-1'/>
                    <span>E-Mail: </span><a href='mailto: homer_js@springfield.com'>homer_js@springfield.com</a>
                </div>
                <div className='Footer__block'>
                    <PhoneIcon className='mr-1'/>
                    <span>Teléfono: </span><a href='tel:+(1)636555444333'>(636) 555 444 333</a>
                </div>
            </div>
        </div>
    );
}

/**
 * Sección de links del footer
 */
function FooterLinks() {
    return (
        <div className='Footer__section'>
            <h2 className='Footer__title'>Links</h2>
            <div className='Footer__content Footer__content--center'>
                <a className='Footer__link' href='/register'>Register</a>
                <a className='Footer__link' href='/'>Home</a>
                <a className='Footer__link' href='/advert/create'>Crear anuncio</a>
                <a className='Footer__link' href='https://www.laestanciaazul.com/'>La Estancia Azul</a>
                <a className='Footer__link' href='https://github.com/IsmaelB83/'>GitHub Ismael</a>
                <a className='Footer__link' href='https://keepcoding.io/es/nuestros-bootcamps/full-stack-web-bootcamp/'>Keepcoding Fullstack Bootcamp</a>
            </div>
        </div>
    );
}

/**
 * Sección de links del footer
 */
function FooterRecentProducts() {
    return (
        <div className='Footer__section'>
            <h2 className='Footer__title'>Anuncios recientes</h2>
            <div className='Footer__content'>
            </div>
        </div>
    );
}

/**
 * Social Links del footer
 */
function SocialLinks () {
    return (
        <div className='SocialLinks'>
            <a className='SocialLinks__link SocialLinks__link--facebook' href='https://laestanciaazul.com'>
                <HomeIcon />
            </a>
            <a className='SocialLinks__link SocialLinks__link--github' href='https://github.com/IsmaelB83'>
                <GitHubIcon />
            </a>
            <a className='SocialLinks__link SocialLinks__link--linkedin' href='https://www.linkedin.com/in/ismael-bernal-10497a51/'>
                <LinkedInIcon />
            </a>
            <a className='SocialLinks__link SocialLinks__link--instagram' href='https://www.instagram.com/isma83_/'>
                <InstagramIcon />
            </a>
            <a className='SocialLinks__link SocialLinks__link--twitter' href='https://twitter.com/Ismab83'>
                <TwitterIcon />
            </a>
        </div>
    );
}
