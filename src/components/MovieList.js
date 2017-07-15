import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';

/**
 * Movie list component: list all movies
 */
class MovieList extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         movies: this.props.movies
      };

      this.getMoviesList = this.getMoviesList.bind(this, props.display);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(movieId, likedValue) {
      let movies = this.state.movies;
      let movie = this.state.movies[movieId];

      movie.liked = likedValue;
      movies[movieId] = movie;

      this.setState({
         movies: movies
      });
   }

   getMoviesList(display) {
      let self = this;

      let movies = [];
      this.state.movies.map(function (value, key) {
         let shouldBeDisplayed = (display === 'liked' && value.liked) || display === 'all';
         
         if (shouldBeDisplayed) {
            movies.push(
               <Movie
                  id={key}
                  ref={key}
                  key={'movie-' + key}
                  info={value}
                  onChange={self.handleChange} />
            );            
         }
      });

      return movies;
   }
 
   render() {
      let movies = this.getMoviesList();

      if (movies.length > 0) {
         return (
            <div className="row">
               {movies}
            </div>
         );
      } else {
         return (
            <div className="alert alert-info" role="alert">
               <strong>Dommage !</strong> Il n'y a aucun film dans cette liste...
            </div>
         );
      }
   }
}

MovieList.defaultProps = {
   movies: [],
   display: "all",
}

MovieList.propTypes = {
   movies: PropTypes.array.isRequired,
   display: PropTypes.string,
}

export default MovieList;