import React from 'react';

import Movie from './MovieComponent';
import NoResult from './NoResultComponent';

/**
 * Home page
 */
class MoviesListComponent extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         movies: this.props.movies
      };

      this.getMoviesList = this.getMoviesList.bind(this, props.display);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(key, event) {
      var movies = this.state.movies;
      var movie = this.state.movies[key];

      movie.liked = !movie.liked;
      movies[key] = movie;

      this.setState({
         movies: movies
      });
   }

   getMoviesList(display) {
      var self = this;

      var movies = [];
      this.state.movies.map(function (value, key) {
         var shouldBeDisplayed = (display === 'liked' && value.liked) || display === 'all';
         
         if (shouldBeDisplayed) {
            movies.push(
               <Movie
                  ref={key}
                  key={'movie-' + key}
                  info={value}
                  onChange={self.handleChange.bind(this, key)} />
            );            
         }
      });
      return movies;
   }
 
   render() {
      var movies = this.getMoviesList();

      if (movies.length > 0) {
         return (
            <div className="row">
               {movies}
            </div>
         );
      } else {
         return <NoResult />;
      }
   }
}

MoviesListComponent.defaultProps = {
   movies: [],
   display: "all",
}

MoviesListComponent.propTypes = {
   movies: React.PropTypes.array.isRequired,
   display: React.PropTypes.string,
}

export default MoviesListComponent;