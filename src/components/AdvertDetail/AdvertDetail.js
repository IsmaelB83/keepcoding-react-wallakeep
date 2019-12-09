// NPM Modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// Material UI
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
// Components
import NavBar from '../NavBar';
import Footer from '../Footer';
/* Own modules */
import { AdvertServices } from '../../services';
// Assets
import imageSpinner from '../../assets/images/spinner.gif';
// CSS
import './styles.css';

/**
 * Main App
 */
export default class AdvertDetail extends Component {
  
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      advert: null
    }
  }
  
  /**
   * Component did mount
   */
  componentDidMount() {
    // Call API to get advert detail
    const id = this.props.match.params.id;
    AdvertServices.getAdvert(id)
      .then( res => {
        this.setState({
          advert: res,
          loading: false
        });
      })
  }

  
  /**
   * Render
   */
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Container>
          <main className='Main__Section'>
            <div className='Section__Title'>
              <h2>Detalle del anuncio</h2>
            </div>
            { !this.state.loading && 
              <article className='AdvertDetail'>
                <div className='AdvertDetail__Main'>
                  <header className='AdvertDetail__Header'>
                    <Link to='/' className='AdvertDetail__Back'>
                      <KeyboardBackspaceIcon/>
                    </Link>
                    <h1>{this.state.advert.name}</h1>
                    <img className='Caption' src={this.state.advert.photo} alt='caption'/>
                  </header>
                  <div className='AdvertDetail__Content'>
                    <h3 className='AdvertDetail__Type'>{this.state.advert.type==='buy'?'Compro':'Vendo'}</h3>
                    <div className='AdvertDetail__Description'>
                      <p>{this.state.advert.description}</p>
                    </div>
                    <div className='AdvertDetail__Tags'>
                    {   this.state.advert.tags && 
                        this.state.advert.tags.map((value,i) => {
                            return  <Chip
                                        key={i}
                                        size="small"
                                        label={value}
                                        className={`Ad__Tag Ad__Tag--${value}`}
                                    />
                        })
                    }
                    </div>
                    <div className='AdvertDetail__Actions'>
                      <Link to={`/advert/edit/${this.state.advert._id}`}>
                        <Button type='button' variant='contained' color='secondary' startIcon={<EditIcon />} onClick={this.handleReset} className='ButtonWallakeep ButtonWallakeep__Green'>Editar</Button>
                      </Link>
                    </div>
                    
                  </div>
                </div>
                <div className='AdvertDetail__Footer'>
                  <div className='AdvertDetail__Price'>
                    <p className='Text'>Precio</p>
                    <p className='Price'>{this.state.advert.price} <span>€</span></p>
                  </div>
                  <Moment className='AdvertDetail__Date' fromNow>{this.state.advert.createdAt}</Moment>
                </div>
              </article>
            }
            {
              this.state.loading &&
              <div className='Home__Loading'>
                <img src={imageSpinner} className='Home__Spinner' alt='spinner'/>
                <h2>Fetching data from API</h2>
              </div>
            }
          </main>
        </Container>
        <Footer/>
      </React.Fragment>
    );
  }
}