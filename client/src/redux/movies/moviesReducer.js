import {
    GET_ALL,
    GET_MOVIES,
    GET_MOVIE_DETAILS,
    CLEAN_DETAIL,
    GET_MOVIES_SORTED,
    MOVIE_AVAILABILITY,
    GET_MOVIE_NAME,
    ADD_MOVIE,
    FILTER_BY_GENRE,
    PUT_MOVIE
} from './moviesAction.js';

const initialState = {
    movies: [],
    filtradors: [],
    moviesDetails: [],
    moviesSorted: [],
    genres:[],
    users:[]
}


function moviesReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL:
            {
                return {
                    ...state,
                    movies: action.movies,
                    filtrados: action.movies,
                    genres: action.genres,
                    users: action.users
                }
            }
        case GET_MOVIES:
            {
                return {
                    ...state,
                    movies: action.payload
                }
            }

        case GET_MOVIE_DETAILS:
            {
                return {
                    ...state,
                    moviesDetails: action.payload
                }
            }

        case ADD_MOVIE:
            {
                return {
                    ...state,
                    movies: action.payload
                }
            }
        case PUT_MOVIE:
            console.log('estas es la data que llega al reducer',action.payload)
            return
            
        case GET_MOVIE_NAME:
            return {
                ...state,
                movies: action.payload
            }

        case GET_MOVIES_SORTED:
            {
                return {
                    ...state,
                    moviesSorted: action.payload
                }
            }

        case CLEAN_DETAIL:
            {
                return {
                    ...state,
                    moviesDetails: []
                }
            }
        case MOVIE_AVAILABILITY:
            let moviesAvail = state.filtrados;
            return {
                ...state,
                movies: action.payload === 'true' ? moviesAvail.filter(el => el.availability) : moviesAvail.filter(el => !el.availability)
            }

        case FILTER_BY_GENRE:
            let moviesByGenre = state.filtrados;

            let filterGenre = action.payload === 'All' ? moviesByGenre : moviesByGenre.filter(el => el.genres.map(el => el.name).includes(action.payload))

            return {
                ...state,
                movies: filterGenre
            }

        default:
            return state

    }
};

export default moviesReducer;