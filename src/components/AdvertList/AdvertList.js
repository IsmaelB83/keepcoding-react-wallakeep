// NPM Modules
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
// Components
import AdvertCard from '../AdvertCard';
// Own modules
// Models
import Advert from '../../models/Advert';
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

AdvertCard.propTypes = {
    adverts: PropTypes.arrayOf(Advert),
}