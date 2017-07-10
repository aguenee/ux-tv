import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Page footer
 */
class Footer extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <footer className="footer">
            <div className="container-fluid">
              <p className="text-muted text-center">© {this.props.brand} &middot; {this.props.year}</p>
            </div>
         </footer>
      );
   }
}

Footer.defaultProps = {
  brand: "",
  year: new Date().getFullYear()
}

Footer.propTypes = {
  brand: React.PropTypes.string.isRequired,
  year: React.PropTypes.number
}

export default Footer;