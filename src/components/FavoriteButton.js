import React from 'react';
import PropTypes from 'prop-types';
 
/**
 * Favorite button: clicking on it add a movie in your favorites list
 */
class FavoriteButton extends React.Component {
   constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      if (!this.props.onClick) {
         return false;
      }

      this.props.onClick();
   }
 
   render() {
      var className = this.props.active ? "btn-danger" : "btn-default";

      return (
         <button className={"btn " + className} role="button" onClick={this.handleClick}>
            <span className="glyphicon glyphicon-heart"></span>
         </button>
      );
   }
}

FavoriteButton.defaultProps = {
   active: false
}

FavoriteButton.propTypes = {
   active: PropTypes.bool,
   onClick: PropTypes.func
}

export default FavoriteButton;