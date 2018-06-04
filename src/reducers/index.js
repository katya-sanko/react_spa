import { combineReducers } from 'redux';
import { movies, moviesHasErrored, moviesIsLoading, movie, movieHasErrored } from './movies';

export default combineReducers({
    movies,
    moviesHasErrored,
    moviesIsLoading,
    movie,
    movieHasErrored
});
