// NPM Modules
import React from 'react';
// Material UI
// Components
import AdvertCard from '../AdvertCard';
// Own modules
// Models
// Assets
// CSS
import './styles.css';

/**
 * Functional component to render an advert card
 */
export default function AdvertList (props) {
    
    return(
        <section className='AdvertList'>        
        { props.adverts.map((advert, index) => 
            <AdvertCard key={advert._id} 
                        id={advert._id} 
                        name={advert.name} 
                        description={advert.description}
                        price={advert.price}
                        type={advert.type} 
                        photo={advert.photo} 
                        tags={advert.tags} 
                        createdAt={advert.createdAt}
            />
        )}
        </section>
    );
}