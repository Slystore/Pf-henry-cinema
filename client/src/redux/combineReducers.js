import { combineReducers } from 'redux';
import genresReducer from './genres/genresReducer';
import moviesReducer from './movies/moviesReducer';
import usersReducer from './users/usersReducer';
import cartReducer from './carts/cartReducer';
import cinemasReducer from './cinemas/cinemasReducer';

export const reducers = combineReducers({
    moviesReducer,
    genresReducer,
    usersReducer,
    cartReducer,
    cinemasReducer,
});

export default reducers;