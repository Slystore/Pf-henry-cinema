import axios from 'axios';
export const GET_ALL = 'GET_ALL';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_MOVIES_SORTED = 'GET_MOVIES_SORTED';
export const MOVIE_AVAILABILITY = 'MOVIE_AVAILABILITY';
export const GET_MOVIE_NAME = 'GET_MOVIE_NAME';
export const ADD_MOVIE = 'ADD_MOVIE';
export const FILTER_BY_GENRE = ' FILTER_BY_GENRE';


export function getAll() {
    return async(dispatch) => {
        const movies = await axios.get(`http://18.216.130.223:3001/api/movies`);
        const genres = await axios.get(`http://18.216.130.223:3001/api/genres`);
        const users = await axios.get(`http://18.216.130.223:3001/api/users`);
        return await dispatch({
            type: GET_ALL,
            movies: movies.data,
            genres: genres.data,
            users: users.data,
        })
    }
}

export function getMovies() {
    return async(dispatch) => {
        const { data } = await axios.get(`http://18.216.130.223:3001/api/movies`)
        return await dispatch({
            type: GET_MOVIES,
            payload: data
        })
    }
}

export function getMovieDetails(id) {
    return async(dispatch) => {
        try {
            const json = await axios.get(`http://18.216.130.223:3001/api/movies/${id}`)
            return dispatch({
                type: GET_MOVIE_DETAILS,
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function cleanDetail(payload) {
    return {
        type: CLEAN_DETAIL,
        payload
    }
}

export function postMovie(payload) {
    return async function(dispatch) {
        const response = await axios.post(`http://18.216.130.223:3001/`, payload)
        return response
    }
}

export function getMovieName(payload) {
    return async function(dispatch) {
        try {
            let response = await axios.get(`http://18.216.130.223:3001/api/movies?title=` + payload);
            return dispatch({
                type: GET_MOVIE_NAME,
                payload: response.data
            })
        } catch (error) { alert('Película no encontrada') }
    }
}

export function getMoviesSorted(type) {
    return function(dispatch) {
        return axios.get(`http://18.216.130.223:3001` + type)
            .then(moviesSorted => {
                dispatch({
                    type: GET_MOVIES_SORTED,
                    payload: moviesSorted.data
                })
            })
    }
}
export function filterGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}
export function movieAvailability(payload) {
    return {
        type: MOVIE_AVAILABILITY,
        payload
    }
}