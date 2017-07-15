import React from 'react';
import PropTypes from 'prop-types';
 
/**
 * Favorite button: clicking on it add a movie in your favorites list or remove from it
 */
class FavoriteButton extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         active: this.props.active
      };
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      let currentState = this.state.active;
      let newState = !currentState;

      if (this.props.onClick) {
         this.setState(
            { active: newState },
            this.props.onClick(newState)
         );
      } else {
         this.setState({ 
            active: newState
         });
      }
   }

   getClassName() {
      return this.state.active ? "btn-danger" : "btn-default";
   }
 
   render() {
      return (
         <button className={"btn " + this.getClassName()} role="button" onClick={this.handleClick}>
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