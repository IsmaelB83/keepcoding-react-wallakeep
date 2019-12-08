/* NPM modules */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
/* Material UI */
import Container from '@material-ui/core/Container';
/* Components */
import SearchPanel from '../SearchPanel';
import AdvertCard from '../AdvertCard';
import Paginator from '../Paginator';
import Loading from '../Loading';
import Footer from '../Footer/';
import NavBar from '../NavBar';
import Error from '../Error';
/* Own modules */
/* Assets */
/* CSS */
import './styles.css';

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
      currentPage: 0,
    }
  }

  /**
   * Render
   */
  render() {   
    // Variables para el UI
    const { isFetchingAdverts, error } = this.props.ui;
    // Variables para el paginado
    const { currentPage } = this.state;
    const numPages = Math.ceil(this.props.adverts.length/this.props.session.maxAdverts);
    const minAdvert = this.state.currentPage * this.props.session.maxAdverts;
    const maxAdvert = this.state.currentPage * parseInt(this.props.session.maxAdverts) + parseInt(this.props.session.maxAdverts)

    // Render
    return (
      <React.Fragment>
        <NavBar/>
        <Container className='Container__Fill'>
          <main className='Main__Section'>
            <div className='Home__Results'>
              <SearchPanel tags={this.props.tags} tag={this.props.session.tag} handleAPISearch={this.handleSearch}/>
              <Paginator numPages={numPages} currentPage={currentPage} handleMovePaginator={this.handleMovePaginator}/>
              <p className='Home__Count'>
                {this.props.adverts.length} resultados cumplen el filtro.
              </p>
              <p className='Home__Count'>
                Last API call <Moment fromNow>{this.props.ui.lastAdvertsUpdated}</Moment> returned {this.props.ui.totalAdvertsReturned} results
              </p>
              <section className='Home__Grid'>
                { this.props.adverts.length > 0 &&
                  this.props.adverts.slice(minAdvert, maxAdvert).map((advert, index) => 
                    <AdvertCard key={advert._id} 
                                id={advert._id} 
                                name={advert.name} 
                                description={advert.description}
                                price={advert.price}
                                type={advert.type} 
                                photo={advert.photo} 
                                tags={advert.tags} 
                                createdAt={advert.createdAt}
                    />
                  )
                }
                { this.props.adverts.length === 0 &&
                  <h2 className='Home__Subtitle'>No hay anuncios que cumplan con los criterios de búsqueda</h2>
                }
              </section>
              <Paginator numPages={numPages} currentPage={currentPage} handleMovePaginator={this.handleMovePaginator}/>
            </div>
            { isFetchingAdverts && <Loading/> }
            { error &&  <Error error={error}/> }
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
    this.props.loadTags();
    if (this.props.session.tag) {
      this.handleSearch({tag: this.props.session.tag})
    } else {
      this.props.loadAdverts();
    }
  }

  /**
   * Gestiona el evento de búsqueda de anuncios
   */
  handleSearch = (filters) => {
    if (filters)
      return this.props.searchAdverts(filters);
    this.props.loadAdverts();
  }

  /**
   * Retrocede una página
   */
  handleMovePaginator = increment => {
    // Actualizo la pagina actual
    let { currentPage } = this.state;
    const numPages = Math.ceil(this.props.adverts.length/this.props.session.maxAdverts);
    currentPage += increment;
    // Actualizo el state sólo si sigue dentro de los limites (realmente este chequeo también lo hace el componete paginator)
    if (increment !== 0 && currentPage >= 0 && currentPage < numPages) {
        this.setState({
          currentPage: currentPage
        });   
    }
  }
}


Home.propTypes = {
  session: PropTypes.object.isRequired,
  adverts: PropTypes.array.isRequired,
}