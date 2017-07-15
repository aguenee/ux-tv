import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
 
/**
 * Page header
 */
class Header extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <header>
            <nav className="navbar navbar-default">
               <div className="container-fluid">
                  <div className="navbar-header">
                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                     </button>
                     <NavLink to='/home' className="navbar-brand">{this.props.brand}</NavLink>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                     <ul className="nav navbar-nav navbar-right">
                        <li>
                           <NavLink to='/home' activeStyle={{ backgroundColor: '#e7e7e7' }}>
                              <span className="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Tous les films
                           </NavLink>
                        </li>
                        <li>
                           <NavLink to='/my-favorite-movies' activeStyle={{ backgroundColor: '#e7e7e7' }}>
                              <span className="glyphicon glyphicon-heart"></span>&nbsp;&nbsp;Mes favoris
                           </NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
      );
   }
}

Header.defaultProps = {
  brand: ""
}

Header.propTypes = {
  brand: PropTypes.string.isRequired
}

export default Header;