/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import Container from '@material-ui/core/Container';
/* Own modules */
import AdvertCard from '../AdvertCard/AdvertCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NodepopAPI from '../../services/NodepopAPI';
/* Assets */
/* CSS */
import './Home.css';

/**
 * Main App
 */
export default class Home extends Component {
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      api: new NodepopAPI()
    }
  }

  /**
   * Render
   */
  render() {   
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch}/>
        <Container>
          <main className='Home'>
            <h1>Listado de anuncios</h1>
            <section className='Home__Grid'>
              {
                this.state.adverts && 
                this.state.adverts.map((advert, index) => 
                  <AdvertCard key={advert.id} 
                              id={advert.id} 
                              name={advert.name} 
                              description={advert.description}
                              price={advert.price}
                              type={advert.type} 
                              photo={advert.photo} 
                              tags={advert.tags} 
                  />
                )
              }
            </section>
          </main>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    this.state.api.getAdverts()
    .then( res => {
      this.setState({adverts: res})
    });
  }

  /**
   * Ejecuta la busqueda
   */
  handleSearch = () => {
    this.props.enqueueSnackbar('Realizando búsqueda');
  }
}