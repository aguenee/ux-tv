import React from 'react';

import { NavLink } from 'react-router-dom';

/**
 * Page footer
 */
class FooterComponent extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <footer className="footer">
            <div className="container-fluid">
              <p className="text-muted text-center">© UX-TV &middot; 2017</p>
              <p className="text-center"><NavLink to='/home'>Retour à l'accueil</NavLink></p>
            </div>
         </footer>
      );
   }
}

export default FooterComponent;