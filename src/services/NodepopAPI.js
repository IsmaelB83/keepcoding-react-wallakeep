/* NPM modules */
import axios from 'axios';
/* Material UI */
/* Own modules */
import Advert from '../models/Advert';
/* Assets */
/* CSS */

/**
 * Objeto API
 */
export default class NodepopAPI {

  /**
   * Constructor
   */
  constructor() {
    this.API_URL = 'http://localhost:3001/apiv1';
  }
  
  /**
   * Obtener todos los anuncios
   */
  getAdverts = () => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios`;
    // Call endpoint and return
    return axios.get(baseURL).then(res => {
      if (res.status === 200) {
        return res.data.results.map(advert => new Advert(advert));
      } else {
        return null;
      }
    });
  }

  /**
   * Obtener un anuncio por ID
   */
  getAdvert =  (advertId) => {
      // Endpoint
      let baseURL = `${this.API_URL}/anuncios/${advertId}`;
      // Call endpoint and return
      return axios.get(baseURL).then(res => {
        return new Advert(res.results);
      });
  }

  /**
   * Buscar por query generica
   */
  searchAdvert = (query) => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios?${query}`;
    // Call endpoint and return
    return axios.get(baseURL).then(res => {
      return res.results.map(advert => new Advert(advert));
    });
  }
}