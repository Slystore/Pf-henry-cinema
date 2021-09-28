import { 
    GET_MOVIES,
    GET_MOVIE_DETAILS, 
    ADD_MOVIE,
    GET_MOVIES_SORTED
 } from '../actions/index.js';


const initialState = {
    movies: [],
    moviesDetails: [],
    moviesSorted: [],
  };

function rootReducer(state = initialState, action) {    
    switch (action.type) {

        case GET_MOVIES:{
            return{
                ...state,
                movies: action.payload
            }
        }

        case GET_MOVIE_DETAILS:{
            return{
                ...state,
                moviesDetails: action.payload
            }
        }
        
        case ADD_MOVIE:{
            return{
                ...state,
                movies: action.payload
            }
        }
        
        case GET_MOVIES_SORTED:{
            return{
                ...state,
                moviesSorted: action.payload
            }
        }
       
        default:
            return state
            
        }
    };
    
    export default rootReducer;