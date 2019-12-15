// NPM Modules
// Material UI
// Own modules
// Assets
// CSS

/**
 * Modelo de anuncio en nodepop
 */
export default class Session {
    /**
     * Constructor
     * @param {Object} Session 
     */    
    constructor(email = null, name = null, surname = null, maxAdverts = 8) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.maxAdverts = maxAdverts;
    }
}