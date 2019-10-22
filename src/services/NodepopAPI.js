/* NPM modules */
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
    this.API_URL = 'https://api.themoviedb.org/3';
  }
  
  getRequest = (url) => {
    return fetch(url,
      { method: 'GET' },
      { Accept: 'application/json, text/plain, */*' }
    ).then(res => res.json());
  }

  checkApìKey = () => {
    try {
      return this.getRequest(`${this.API_URL}/discover/movie?api_key=${this.API_KEY}`)
      .then(res => {
        return res.status_code !== 7;
      });
    } catch (error) {
      return false;
    }
  }

  discoverMovies = (year) => {
    let baseURL = `${this.API_URL}/discover/movie?api_key=${this.API_KEY}`;
    if (year)  { 
      baseURL = `${baseURL}&primary_release_year=${year}`; 
    }
    return this.getRequest(baseURL)
    .then(res => res.results.map(mov => new Advert(mov)))
  }

  getMovie =  (movieID) => {
      return this.getRequest(`${this.API_URL}/movie/${movieID}?api_key=${this.API_KEY}`)
      .then(res => {
        return new Advert(res)
      });
  }

  searchMovies = (query, year) => {
    let baseURL = `${this.API_URL}/search/movie?api_key=${this.API_KEY}&query=${query}&page=1`;
    if (year)  { 
      baseURL = `${baseURL}&primary_release_year=${year}`; 
    }
    return this.getRequest(baseURL)
    .then(res => res.results.map(mov => new Advert(mov)));
  }
}