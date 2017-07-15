import React from 'react';
import PropTypes from 'prop-types';
 
/**
 * No result message: displayed when no movie has been found
 */
class NoResultMessage extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <div className="alert alert-info" role="alert">
            {this.props.message}
         </div>
      );
   }
}

NoResultMessage.defaultProps = {
   message: "Pas film dans cette liste..."
}

NoResultMessage.propTypes = {
   message: PropTypes.string
}

export default NoResultMessage;