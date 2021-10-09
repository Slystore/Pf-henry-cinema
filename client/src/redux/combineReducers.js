import { combineReducers } from 'redux';
import genresReducer from './genres/genresReducer';
import moviesReducer from './movies/moviesReducer';
import usersReducer from './users/usersReducer';
import cartReducer from './carts/cartReducer';
export const reducers = combineReducers({
    moviesReducer,
    genresReducer,
    usersReducer,
    cartReducer
});

export default reducers;