/* NPM modules */
/* Material UI */
/* Own modules */
/* Assets */
/* CSS */

/**
 * Modelo de anuncio en nodepop
 */
export default class Advert {
    /**
     * Constructor
     * @param {Object} Advert 
     */    
    constructor(ad) {
        this.id = ad._id;
        this.createdAt = ad.createdAt;
        this.name = ad.name;
        this.description = ad.description;
        this.price = ad.price;
        this.type = ad.type;
        this.photo = ad.photo;
        this.tags = ad.tags;
    }
}