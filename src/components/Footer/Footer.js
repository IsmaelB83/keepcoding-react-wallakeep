/* Import node modules */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import Container from '@material-ui/core/Container';
import BusinessIcon from '@material-ui/icons/Business';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
/* Import own modules */
import SocialLinks from '../links/SocialLinks/SocialLinks';
/* Import assets */
/* Import css */
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
                        <Grid item xs={12} sm={4} lg={4} className='Footer-item mt-3 mt-lg-0'>
                           <FooterAddress/> 
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4} className='Footer-item links mt-3 mt-lg-0'>
                            <FooterLinks/>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4} className='Footer-item mt-3 mt-lg-0'>
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
                <a className='Footer__link' href='/'>Menu 1</a>
                <a className='Footer__link' href='/'>Menu 2</a>
                <a className='Footer__link' href='/'>Menu 3</a>
                <a className='Footer__link' href='/'>Menu 4</a>
                <a className='Footer__link' href='/'>Menu 4</a>
                <a className='Footer__link' href='/'>Menu 4</a>
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
