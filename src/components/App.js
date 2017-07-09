import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; 

import HomePage from './HomePage';
import FavoriteMoviesPage from './FavoriteMoviesPage';
 
/**
 * App container
 */
class App extends React.Component {
   constructor(props) {
      super(props);
   }
 
   render() {
      return (
         <div>
            <header>
               <h1>UX-TV</h1>
               <nav>
                  <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/my-favorite-movies'>Favoris</Link></li>
                  </ul>
               </nav>
            </header>

            <main>
               <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/my-favorite-movies' component={FavoriteMoviesPage} />
               </Switch>
            </main>
           
            <footer>
               <small>© UX-TV - 2017</small>
            </footer>
         </div>
      );
   }
}

export default App;