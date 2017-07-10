import React from 'react';
 
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
   message: React.PropTypes.string
}

export default NoResultMessage;