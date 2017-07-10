import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

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
            <Header brand="UX-TV" />

            <main className="container-fluid">
               <Switch>
                  <Route exact path='/home' component={
                     () => (<MovieList movies={this.state.movies} />)
                  } />
                  <Route exact path='/my-favorite-movies' component={
                     () => (<MovieList movies={this.state.movies} display="liked" />)
                  } />
               </Switch>
            </main>
           
            <Footer brand="UX-TV" />
         </div>
      );
   }
}

export default App;