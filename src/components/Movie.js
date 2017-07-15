import React from 'react';
import PropTypes from 'prop-types';

import FavoriteButton from './FavoriteButton';
 
/**
 * Movie component: display a single movie item
 */
class Movie extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         liked: this.props.info.liked
      };
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(likedValue) {
      if (this.props.onChange) {
         this.setState(
            { liked: likedValue },
            this.props.onChange(this.props.id, likedValue)
         );
      } else {
         this.setState({
            liked: likedValue
         });
      }
   }
 
   render() {
      return (
         <div className="col-sm-4 col-md-4">
            <div className="thumbnail movie">
               <img alt={this.props.info.title} src={this.props.info.image} />
               <div className="caption">
                  <h3>{this.props.info.title}</h3>
                  <h5>{this.props.info.director}</h5>
                  <p>{this.props.info.synopsis}</p>
                  <p>
                     <FavoriteButton active={this.state.liked} onClick={this.handleClick} />
                  </p>
               </div>
            </div>
         </div>
      );
   }
}

Movie.defaultProps = {
   info: {}
}

Movie.propTypes = {
   info: PropTypes.object.isRequired,
   onChange: PropTypes.func
}

export default Movie;