import React from 'react';
 
/**
 * Favorite button: clicking on it add a movie in your favorites list
 */
class FavoriteButton extends React.Component {
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

FavoriteButton.defaultProps = {
   active: false
}

FavoriteButton.propTypes = {
   active: React.PropTypes.bool,
   onClick: React.PropTypes.func.isRequired
}

export default FavoriteButton;