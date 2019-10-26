/* NPM modules */
import Axios from 'axios';
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
    return Axios.get(baseURL)
      .then(res => res.data.results);
  }


  /**
   * Obtener todos los anuncios
   */
  getAdverts = () => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios`;
    // Call endpoint and return
    return Axios.get(baseURL)
      .then(res => res.data.results.map(advert => new Advert(advert)));
  }

  /**
   * Obtener un anuncio por ID
   */
  getAdvert = (advertId) => {
    // Endpoint
    let baseURL = `${this.API_URL}/anuncios/${advertId}`;
    // Call endpoint and return
    return Axios.get(baseURL)
      .then(res => new Advert(res.data.result));
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
    return Axios.get(baseURL)
      .then(res => res.data.results.map(advert => new Advert(advert)));
  }

  /**
   * Llama a la API para crear un nuevo anuncio
   * @param {Advert} advert 
   */
  postAdvert = (advert) => {
    // Endpoint
    const baseURL = `${this.API_URL}/anuncios`;
    // Call endpoint and return
    return Axios.post(baseURL, null, { data: advert })
      .then(res => res.data.results.map(advert => new Advert(advert)));
  }

  /**
   * Llama a la API para editar un anuncio
   * @param {Advert} advert 
   */
  editAdvert = (advert) => {
    // Endpoint
    const baseURL = `${this.API_URL}/anuncios/${advert._id}`;
    // Call endpoint and return
    return Axios.put(baseURL, null, { data: advert })
      .then(res => new Advert(res.data.result));
  }
}