/* NPM modules */
/* Material UI */
/* Own modules */
import Config from '../config/Config';
/* Assets */
/* CSS */

/**
 * Modelo de anuncio en nodepop
 */
export default class Session {
    /**
     * Constructor
     * @param {Object} Session 
     */    
    constructor(name = null, surname = null, tag = null, apiUrl = Config.API_URL, maxAdverts = Config.MAX_ADVERTS_GRID) {
        this.name = name;
        this.surname = surname;
        this.tag = tag;
        this.apiUrl = apiUrl;
        this.maxAdverts = maxAdverts;
    }
}