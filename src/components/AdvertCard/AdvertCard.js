/* NPM modules */
import React, { Component } from 'react';
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
import './AdvertCard.css';

/**
 * Main App
 */
export default class AdvertCard extends Component {
  /**
   * Render
   */
  render() {
    return (
        <div className='AdvertCard'>
            <div className='AdvertCard__Header'>
                <img src={`${this.props.type==='buy'?imageBuy:imageSell}`} alt='avatar' />
                <div className='AdvertCard__HeaderTitle'>
                    <Link to={`/advert/display/${this.props.id}`} className='AdvertCard__Link'><h2>{this.props.name}</h2></Link>
                    <Moment className='AdvertCard__Date' fromNow>{this.props.createdAt}</Moment>
                </div>
            </div>
            <div className='AdvertCard__Media'>
                <img src={this.props.photo} alt='caption'/>
                <p className='AdvertCard__Price'>
                    {this.props.price} 
                    <span className='AdvertCard__Currency'>€</span>
                </p>
            </div>
            <div className='AdvertCard__Footer'>
                <div className='AdvertCard__FooterActions'>
                    <Link to={`/advert/display/${this.props.id}`} className='AdvertCard__Link'><VisibilityIcon/></Link>
                    <Link to={`/advert/edit/${this.props.id}`} className='AdvertCard__Link'><EditIcon/></Link>
                </div>
                <div className='Ad__Tags'>
                    {   this.props.tags && 
                        this.props.tags.map((value,i) => {
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
        </div>
     );
  }
}