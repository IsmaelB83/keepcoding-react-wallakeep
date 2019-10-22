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
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
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
        <Card>
            <CardHeader
                avatar={<img src={`${this.props.type==='buy'?imageBuy:imageSell}`} className='card-icon' alt='icon' /> }
                title={this.props.name}
                subheader={<Moment format="LLLL">{this.props.createdAt}</Moment>}
            />
            <CardMedia>
                <img src='https://media.wired.com/photos/5a99f809b4bf6c3e4d405abc/2:1/w_2500,c_limit/PS4-Pro-SOURCE-Sony.jpg' alt='image'/>
            </CardMedia>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.description}
                    <span className='price'>{this.props.price} €</span>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
     );
  }
}

{
    /* 
        {   this.props.tags && this.props.tags.map((value, key) => {
                return <span className={`badge badge-${value}`}>{value}</span>
            })
        }
    */
}