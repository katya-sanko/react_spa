import { combineReducers } from 'redux';
import { movies, moviesHasErrored, moviesIsLoading, sortBy, filterBy } from './movies';

export default combineReducers({
    movies,
    moviesHasErrored,
    moviesIsLoading,
    sortBy,
    filterBy
});
