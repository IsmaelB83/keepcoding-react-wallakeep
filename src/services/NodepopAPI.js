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
        res.data.results.map(advert => new Advert(advert, true))
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
          new Advert(res.data.result, true)
        );
  }

  /**
   * Buscar por query generica
   */
  searchAdvert = (filters) => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios?`;
    if (filters.name) baseURL =`${baseURL}name=${filters.name}&`;
    if (filters.type && filters.type !== 'all') baseURL =`${baseURL}venta=${filters.type==='sell'?true:false}&`;
    if (filters.tag && filters.tag !== 'all') baseURL =`${baseURL}tag=${filters.tag}&`;
    const priceFrom = parseInt(filters.priceFrom);
    const priceTo = parseInt(filters.priceTo);
    if (priceFrom && !priceTo) {
      baseURL =`${baseURL}price=${priceFrom}-`;
    } else if (!priceFrom && priceTo) {
      baseURL =`${baseURL}price=-${priceTo}&`;
    } else if (priceFrom && priceTo) {
      baseURL =`${baseURL}price=${priceFrom}-${priceTo}&`;
    }
    // Call endpoint and return
    return axios.get(baseURL).then(res => {
      return res.data.results.map(advert => new Advert(advert, true));
    });
  }
}