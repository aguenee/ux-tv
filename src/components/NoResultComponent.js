import React from 'react';
 
/**
 * Page header
 */
class NoResultComponent extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <div className="alert alert-info" role="alert">
            <strong>Oh non !</strong> Il n'y a aucun film dans cette liste. :(
         </div>
      );
   }
}

export default NoResultComponent;