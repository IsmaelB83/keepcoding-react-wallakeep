/* NPM modules */
import React from 'react';
import { Link } from "react-router-dom";
import Moment from 'react-moment';
/* Material UI */
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';
/* Own modules */
/* Assets */
import imageBuy from '../../assets/images/buy.png';
import imageSell from '../../assets/images/sell.png';
/* CSS */
import './styles.css';

/**
 * Main App
 */
export default function AdvertCard (props) {
    return(
        <article className='AdvertCard'>
            <header className='AdvertCard__Header'>
                <img src={`${props.type==='buy'?imageBuy:imageSell}`} alt='avatar' />
                <div className='AdvertCard__HeaderTitle'>
                    <Link to={`/advert/display/${props.id}`} className='AdvertCard__Link'><h2>{props.name}</h2></Link>
                    <Moment className='AdvertCard__Date' fromNow>{props.createdAt}</Moment>
                </div>
            </header>
            <div className='AdvertCard__Media'>
                <img src={props.photo} alt='caption'/>
                <p className='AdvertCard__Price'>
                    {props.price} 
                    <span className='AdvertCard__Currency'>€</span>
                </p>
            </div>
            <div className='AdvertCard__Footer'>
                <div className='AdvertCard__FooterActions'>
                    <Link to={`/advert/display/${props.id}`} className='AdvertCard__Link'><VisibilityIcon/></Link>
                    <Link to={`/advert/edit/${props.id}`} className='AdvertCard__Link'><EditIcon/></Link>
                </div>
                <div className='Ad__Tags'>
                    {   props.tags && 
                        props.tags.map((value,i) => {
                            return  <Chip
                                        key={i}
                                        size="small"
                                        label={value}
                                        className={`Ad__Tag Ad__Tag--${value}`}
                                    />
                        })
                    }
                </div>
            </div>
        </article>
    );
}