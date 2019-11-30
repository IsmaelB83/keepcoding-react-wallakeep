/* NPM modules */
/* Material UI */
/* Own modules */
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
    constructor(email = null, name = null, surname = null, tag = null, maxAdverts = process.env.REACT_APP_MAX_ADVERTS_GRID) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.tag = tag;
        this.maxAdverts = maxAdverts;
    }
}