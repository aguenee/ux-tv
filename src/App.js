import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import MoviesList from './components/MoviesListComponent';

import MovieData from './data/MovieData';


/**
 * App container
 */
class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         movies: MovieData
      }
   }

   render() {
      return (
         <div>
            <Header />

            <main className="container-fluid">
               <Switch>
                  <Route exact path='/home' component={
                     () => (<MoviesList movies={this.state.movies} />)
                  } />
                  <Route exact path='/my-favorite-movies' component={
                     () => (<MoviesList movies={this.state.movies} display="liked" />)
                  } />
               </Switch>
            </main>
           
            <Footer />
         </div>
      );
   }
}

export default App;