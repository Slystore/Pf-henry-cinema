import { 
    GET_ALL,
    GET_MOVIES,
    GET_USERS,
    GET_GENRES,
    GET_MOVIE_DETAILS, 
    ADD_MOVIE,
    GET_MOVIES_SORTED,
    CLEAN_DETAIL,
    MOVIE_AVAILABILITY,
    FILTER_BY_GENRE
 } from '../actions/index.js';


const initialState = {
    movies: [],
    filtrados: [],
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
                filtrados: action.movies,
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
        case MOVIE_AVAILABILITY:
            let moviesAvail = state.filtrados;
            return{
                ...state,
                movies: action.payload === 'true' ? moviesAvail.filter(el => el.availability) : moviesAvail.filter(el => !el.availability)
            }
            case FILTER_BY_GENRE:
                let moviesByGenre = state.filtrados;
    
                let filterGenre = action.payload === 'All' ? moviesByGenre : moviesByGenre.filter(el =>  el.genres.map(el => el.name).includes(action.payload))
    
                return {
                    ...state,
                    movies: filterGenre
                }
       
        default:
            return state
            
        }
    };
    
    export default rootReducer;