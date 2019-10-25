/* NPM modules */
import axios from 'axios';
/* Material UI */
/* Own modules */
import Config from '../config';
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
    this.API_URL = Config.API_URL;
  }

  /**
   * Obtener todos los tags
   */
  getTags = () => {
    // Endpoint
    let baseURL = `${this.API_URL}/tags`;
    // Call endpoint and return
    return axios.get(baseURL)
      .then(res => res.data.results )
  }


  /**
   * Obtener todos los anuncios
   */
  getAdverts = () => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios`;
    // Call endpoint and return
    return axios.get(baseURL)
      .then(res => 
        res.data.results.map(advert => new Advert(advert))
      );
  }

  /**
   * Obtener un anuncio por ID
   */
  getAdvert = (advertId) => {
      // Endpoint
      let baseURL = `${this.API_URL}/anuncios/${advertId}`;
      // Call endpoint and return
      return axios.get(baseURL)
        .then(res => 
          new Advert(res.data.result)
        );
  }

  /**
   * Buscar por query generica
   */
  searchAdvert = (query) => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios?${query}`;
    // Call endpoint and return
    return axios.get(baseURL).then(res => {
      return res.data.results.map(advert => new Advert(advert));
    });
  }
}