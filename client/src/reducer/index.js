import { 
    GET_MOVIES,
    GET_MOVIE_DETAILS, 
    ADD_MOVIE,
    GET_MOVIES_SORTED,
    CLEAN_DETAIL,
    ADD_GENRE,
    GET_GENRES,
    DELETE_GENRE,
    GET_GENRE_ID
 } from '../actions/index.js';


const initialState = {
    movies: [],
    moviesDetails: [],
    moviesSorted: [],
    genres:[],
    genreSelect:[]
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

        case CLEAN_DETAIL:{
            return{
                ...state,
                moviesDetails: []
            }
        }
        //cases genres
        case GET_GENRES:{
            return{
                ...state,
                genres: action.payload
            }
        }
        case ADD_GENRE:{
            return{
                ...state,
                genres: action.payload
            }
        }
        case GET_GENRE_ID:
            return {
                ...state,
                genreSelect: action.payload
            }
        case DELETE_GENRE:{
             return{
                ...state,
                genres: state.genres.filter(el => action.payload !== el.id)
             }
        }
        default:
            return state
            
        }
    };
    
    export default rootReducer;