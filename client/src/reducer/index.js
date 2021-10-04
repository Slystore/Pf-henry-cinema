import {
    GET_ALL,
    GET_MOVIES,
    GET_USERS,
    GET_GENRES,
    GET_MOVIE_DETAILS,
    ADD_MOVIE,
    GET_MOVIES_SORTED,
    CLEAN_DETAIL,
    ADD_GENRE,
    DELETE_GENRE,
    GET_GENRE_ID,
    GET_MOVIE_NAME,
    MOVIE_AVAILABILITY,
    FILTER_BY_GENRE
} from '../actions/index.js';


const initialState = {
    movies: [],
    filtrados: [],
    moviesDetails: [],
    moviesSorted: [],
    genres: [],
    genreSelect: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_ALL:
            {
                return {
                    ...state,
                    movies: action.movies,
                    genres: action.genres,
                    users: action.users
                }
            }
        case GET_MOVIES:
            {
                return {
                    ...state,
                    movies: action.payload,
                    filtrados: action.payload
                }
            }
        case GET_MOVIE_NAME:
            return {
                ...state,
                movies: action.payload
            }

        case GET_USERS:
            {
                return {
                    ...state,
                    users: action.payload
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
            {
                let moviesAll = state.filtrados;
                return {
                    ...state,
                    movies: action.payload === 'true' ? moviesAll.filter(el => el.availability) : moviesAll.filter(el => !el.availability)
                }
            }
        case FILTER_BY_GENRE:
            let moviesAll = state.filtrados;

            let filterGenre = action.payload === 'All' ? moviesAll : moviesAll.filter(el => el.genres.map(el => el.name).includes(action.payload))

            return {
                ...state,
                movies: filterGenre
            }
            //cases genres
        case GET_GENRES:
            {
                return {
                    ...state,
                    genres: action.payload
                }
            }
        case ADD_GENRE:
            {
                return {
                    ...state,
                    genres: action.payload
                }
            }
        case GET_GENRE_ID:
            return {
                ...state,
                genreSelect: action.payload
            }
        case DELETE_GENRE:
            {
                return {
                    ...state,
                    genres: state.genres.filter(el => action.payload !== el.id)
                }
            }
        default:
            return state

    }
};

export default rootReducer;