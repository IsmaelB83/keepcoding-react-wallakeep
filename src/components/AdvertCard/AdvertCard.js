/* NPM modules */
import React, { Component } from 'react';
import Moment from 'react-moment';
/* Material UI */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
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
        <Card className='AdvertCard'>
            <CardHeader 
                className='AdvertCard__Header'
                avatar={<img src={`${this.props.type==='buy'?imageBuy:imageSell}`} alt='avatar' />}
                title={<h2>{this.props.name}</h2>}
                subheader={<Moment className='AdvertCard__Date' fromNow>{this.props.createdAt}</Moment>}
            />
            <CardMedia className='AdvertCard__Media'>
                <img src={this.props.photo} alt='caption'/>
                <p className='AdvertCard__Price'>
                    {this.props.price} 
                    <span className='AdvertCard__Currency'>€</span>
                </p>
            </CardMedia>
            <CardContent className='AdvertCard__Content'>
                {this.props.description}
                <div className='AdvertCard__Tags'>
                    {   this.props.tags && 
                        this.props.tags.map((value,i) => {
                            return  <Chip
                                        key={i}
                                        size="small"
                                        label={value}
                                        className={`AdvertCard__Tag AdvertCard__Tag--${value}`}
                                    />
                        })
                    }
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon color='secondary'/>
                </IconButton>
                <IconButton aria-label='share'>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
     );
  }
}