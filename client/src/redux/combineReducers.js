import {combineReducers} from 'redux';
import genresReducer from './genres/genresReducer';
import moviesReducer from './movies/moviesReducer';
import usersReducer from './users/usersReducer';

export const reducers = combineReducers({
    moviesReducer,
    genresReducer,
    usersReducer
});

export default reducers;