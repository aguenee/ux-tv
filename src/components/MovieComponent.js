import React from 'react';

import FavoriteButton from './FavoriteButtonComponent';
 
/**
 * Movie item
 */
class MovieComponent extends React.Component {
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

export default MovieComponent;