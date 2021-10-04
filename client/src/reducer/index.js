import { 
    GET_ALL,
    GET_MOVIES,
    GET_USERS,
    GET_GENRES,
    GET_MOVIE_DETAILS, 
    ADD_MOVIE,
    GET_MOVIES_SORTED,
    CLEAN_DETAIL
 } from '../actions/index.js';


const initialState = {
    movies: [],
    genres: [],
    users: [],
    moviesDetails: [],
    moviesSorted: [],
  };

function rootReducer(state = initialState, action) {    
    switch (action.type) {

        case GET_ALL:{
            return{
                ...state,
                movies: action.movies,
                genres: action.genres,
                users: action.users
            }
        }
        case GET_MOVIES:{
            return{
                ...state,
                movies: action.payload
            }
        }

        case GET_GENRES:{
            return{
                ...state,
                genres: action.payload
            }
        }

        case GET_USERS:{
            return{
                ...state,
                users: action.payload
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

        case CLEAN_DETAIL:{
            return{
                ...state,
                moviesDetails: []
            }
        }
       
        default:
            return state
            
        }
    };
    
    export default rootReducer;