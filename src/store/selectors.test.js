// Node imports
// Own imports
import * as selectors from './selectors';

describe('SELECTOR TESTS', () => {
    
    it('filter by name in getVisibleAdverts', () => {   
        const filters = { name: 'PS4Pro' };
        expect(selectors.getVisibleAdverts(adverts, filters)).toHaveLength(1);
    });
    it('filter by type in getVisibleAdverts', () => {   
        const filters = { type: 'buy' };
        expect(selectors.getVisibleAdverts(adverts, filters)).toHaveLength(3);
    });
    it('filter by tag in getVisibleAdverts', () => {   
        const filters = { tag: 'work' };
        expect(selectors.getVisibleAdverts(adverts, filters)).toHaveLength(1);
    });   
    it('filter by combining filter/tag/name in getVisibleAdverts', () => {   
        const filters = { 
            name: 'Gaming',
            tag: 'lifestyle',
            type: 'sell'
        };  
        expect(selectors.getVisibleAdverts(adverts, filters)).toHaveLength(1);
    });   
    it('filter by combining filter/tag/name in getVisibleAdverts', () => {   
        const filters = { 
            name: 'Gaming',
            tag: 'lifestyle',
        };  
        expect(selectors.getVisibleAdverts(adverts, filters)).toHaveLength(2);
    });   
    it('filter by combining filter/tag/name in getVisibleAdverts', () => {   
        const filters = { 
            name: 'Gaming',
            tag: 'lifestyle',
            minPrice: 40
        };  
        expect(selectors.getVisibleAdverts(adverts, filters)).toHaveLength(1);
    });  
});

const adverts = [
    {  
        name: "PS4Pro",
        description:  "Compro PS4 Pro con menos de 1 año de uso",
        price: 200.99,
        type: "buy",
        tags: [ "lifestyle" ]
    },
    {  
        name: "XBOX OneX",
        price: 170.05,
        description:  "Vendo XBOX One X como nueva. No tengo tiempo para jugar.",
        type: "buy",
        tags: [ "lifestyle" ]
    },
    {  
        name: "Raton Gaming Razer Mamba",
        price: 35.50,
        description:  "El mejor ratón gamer del mercado. Como nuevo (1 año)",
        type: "sell",
        tags: [ "lifestyle", "work", "mobile"]
    },
    {  
        name: "Teclado Gaming Razer Chroma",
        price: 70.00,
        description:  "Busco teclado razer en buen estado.",
        type: "buy",
        tags: [ "lifestyle", "mobile" ]
    }
]