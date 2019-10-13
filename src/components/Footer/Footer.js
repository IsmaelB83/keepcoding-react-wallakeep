/* Import node modules */
import React, { Component } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
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
                <div>
                    <div xs="12" sm="6" lg="5" className="footer-item mt-3 mt-lg-0">
                        <h2 className="title">Contactar</h2>
                        <p>Puede ponerse en contacto con Nodepop a través de los siguientes medios:</p>
                        <div className="footer-contact-block">
                            <BusinessIcon />
                            <p><span>Dirección: </span>742 Evergreen Terrace</p>
                        </div>
                        <div className="footer-contact-block">
                            <MailOutlineIcon />
                            <p><span>E-Mail: </span><a href="mailto: homer_js@springfield.com">homer_js@springfield.com</a></p>
                        </div>
                        <div className="footer-contact-block">
                            <PhoneIcon />
                            <p><span>Teléfono: </span><a href="tel:+(1)636555444333">(636) 555 444 333</a></p>
                        </div>
                    </div>
                    <div xs="12" sm="6" lg="3" className="footer-item links mt-3 mt-lg-0">
                        <h2 className="title">Links</h2>
                        <a className="footer-link" href='/'>Menu 1</a>
                        <a className="footer-link" href='/'>Menu 2</a>
                        <a className="footer-link" href='/'>Menu 3</a>
                        <a className="footer-link" href='/'>Menu 4</a>
                    </div>
                    { /* !this.props.loading && 
                        <div xs="12" sm="12" lg="4" className="footer-item mt-3 mt-lg-0">
                            <h2 className="title">Coches recientes</h2>
                            <CustomCardSm 
                                url={this.props.cars[0].url}
                                image={this.props.cars[0].image}
                                name={this.props.cars[0].name}
                                published={this.props.cars[0].published}
                                price={this.props.cars[0].price}
                            />
                            <CustomCardSm
                                url={this.props.cars[1].url}
                                image={this.props.cars[1].image}
                                name={this.props.cars[1].name}
                                published={this.props.cars[1].published}
                                price={this.props.cars[1].price}
                            />
                            <CustomCardSm
                                url={this.props.cars[2].url}
                                image={this.props.cars[2].image}
                                name={this.props.cars[2].name}
                                published={this.props.cars[2].published}
                                price={this.props.cars[2].price}
                            />
                        </div> */
                    }
                    { /* this.props.loading &&
                        <div xs="12" sm="12" xl="4" className="footer-item mt-3 mt-md-0 text-center">
                            <h2 className="title">Coches recientes</h2>
                            <img className="spinner" src={logo} alt="loading..." />
                            <h3>Loading data...</h3>
                        </div> */
                    }
                </div>
                <div className="footer-last mt-4">
                    <div xs="12">
                        <p>Página web desarrollada por Ismael Bernal <a href="mailto:ismaelbernal83@gmail.com">ismaelbernal83@gmail.com</a></p>
                    </div>
                    <div xs="12">
                        <SocialLinks />
                    </div>
                </div>
            </footer>
        );
    }
}