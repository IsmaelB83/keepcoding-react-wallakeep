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
                    <Grid container spacing={3}>
                        <Grid xs={12} sm={6} lg={5} className="Footer-item mt-3 mt-lg-0">
                            <h2 className="title">Contactar</h2>
                            <p>Puede ponerse en contacto con Nodepop a través de los siguientes medios:</p>
                            <div className="Footer-contact-block">
                                <BusinessIcon />
                                <p><span>Dirección: </span>742 Evergreen Terrace</p>
                            </div>
                            <div className="Footer-contact-block">
                                <MailOutlineIcon />
                                <p><span>E-Mail: </span><a href="mailto: homer_js@springfield.com">homer_js@springfield.com</a></p>
                            </div>
                            <div className="Footer-contact-block">
                                <PhoneIcon />
                                <p><span>Teléfono: </span><a href="tel:+(1)636555444333">(636) 555 444 333</a></p>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={6} lg={3} className="Footer-item links mt-3 mt-lg-0">
                            <h2 className="title">Links</h2>
                            <a className="Footer-link" href='/'>Menu 1</a>
                            <a className="Footer-link" href='/'>Menu 2</a>
                            <a className="Footer-link" href='/'>Menu 3</a>
                            <a className="Footer-link" href='/'>Menu 4</a>
                        </Grid>
                        <Grid xs={12} sm={12} lg={4} className="Footer-item mt-3 mt-lg-0">
                            <h2 className="title">Coches recientes</h2>
                        </Grid>

                        <Grid xs={12}>
                            <p>Página web desarrollada por Ismael Bernal <a href="mailto:ismaelbernal83@gmail.com">ismaelbernal83@gmail.com</a></p>
                        </Grid>
                        <Grid xs={12}>
                            <SocialLinks />
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        );
    }
}