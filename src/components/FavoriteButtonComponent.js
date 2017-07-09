import React from 'react';
 
/**
 * Favorite button
 */
class FavoriteButtonComponent extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      var className = this.props.active ? "btn-danger" : "btn-default";

      return (
         <button className={"btn " + className} role="button" onClick={this.props.onClick}>
            <span className="glyphicon glyphicon-heart"></span>
         </button>
      );
   }
}

export default FavoriteButtonComponent;