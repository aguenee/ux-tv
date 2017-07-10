import React from 'react';

import FavoriteButton from './FavoriteButton';
 
/**
 * Movie component: display a single movie item
 */
class Movie extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
               <img alt={this.props.info.title} src={this.props.info.image} />
               <div className="caption">
                  <h3>{this.props.info.title}</h3>
                  <h5>{this.props.info.director}</h5>
                  <p>{this.props.info.synopsis}</p>
                  <p>
                     <FavoriteButton active={this.props.info.liked} onClick={this.props.onChange} />
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
   info: React.PropTypes.object.isRequired,
   onChange: React.PropTypes.func.isRequired
}

export default Movie;