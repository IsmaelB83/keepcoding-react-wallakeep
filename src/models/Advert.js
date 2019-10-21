/**
 * Modelo de anuncio en nodepop
 */
export default class Advert {
    /**
     * Constructor
     * @param {Object} Advert 
     */    
    constructor(ad) {
        this.adult = ad.adult;
        this.backdrop_path = ad.backdrop_path;
        this.genre_ids = ad.genre_ids;
        this.id = ad.id;
        this.original_language = ad.original_language;
        this.original_title = ad.original_title;
        this.overview = ad.overview;
        this.popularity = ad.popularity;
        this.poster_path = ad.poster_path;
        this.release_date = ad.release_date;
        this.title = ad.title;
        this.video = ad.video;
        this.vote_average = ad.vote_average;
        this.vote_count = ad.vote_count;
    }
    
    /**
     */
    isImportant() {
        return this.vote_count > 25;
    }
}