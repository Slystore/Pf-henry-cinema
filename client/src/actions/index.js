import axios from 'axios';
export const GET_ALL = 'GET_ALL'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_GENRES = 'GET_GENRES'
export const GET_USERS = 'GET_USERS'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const ADD_MOVIE = 'ADD_MOVIE'
export const GET_MOVIES_SORTED = 'GET_MOVIES_SORTED'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const ADD_GENRE = 'ADD_GENRE'
export const DELETE_GENRE = 'DELETE_GENRE'
export const GET_GENRES = 'GET_GENRES'
export const GET_GENRE_ID = 'GET_GENRE_ID'
export const GET_MOVIE_NAME = 'GET_MOVIE_NAME'
export const MOVIE_AVAILABILITY = 'MOVIE_AVAILABILITY'
export const FILTER_BY_GENRE = ' FILTER_BY_GENRE'

export function getAll() {
    return async(dispatch) => {
        //   return axios.get("http://18.216.130.223:3001/")
        const movies = await axios.get("http://18.216.130.223:3001/api/movies")
        const genres = await axios.get("http://18.216.130.223:3001/api/genres")
        const users = await axios.get("http://18.216.130.223:3001/api/users")
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
        //   return axios.get("http://18.216.130.223:3001/")
        const { data } = await axios.get("http://18.216.130.223:3001/api/movies")
        return await dispatch({
            type: GET_MOVIES,
            payload: data
        })
    }
}

export function getGenres() {
    return async(dispatch) => {
        //   return axios.get("http://18.216.130.223:3001/")
        const { data } = await axios.get("http://18.216.130.223:3001/api/genres")
        return await dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}

export function getUsers() {
    return async(dispatch) => {
        //   return axios.get("http://18.216.130.223:3001/")
        const { data } = await axios.get("http://18.216.130.223:3001/api/movies")
        return await dispatch({
            type: GET_USERS,
            payload: data
        })
    }
}

export function getMovieDetails(id) {
    return async(dispatch) => {
        try {
            const json = await axios.get(`http://18.216.130.223:3001/api/movies/${id}`)
                // console.log('esto es lo que trae la accion de details', json.data)
            return dispatch({
                type: GET_MOVIE_DETAILS,
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function postMovie(payload) {
    return async function(dispatch) {
        const response = await axios.post("http://18.216.130.223:3001/", payload)
        return response
    }
}

export function getMoviesSorted(type) {
    return function(dispatch) {
        return axios.get("http://18.216.130.223:3001/" + type)
            .then(moviesSorted => {
                dispatch({
                    type: GET_MOVIES_SORTED,
                    payload: moviesSorted.data
                })
            })
    }
}

export function cleanDetail(payload) {
    return {
        type: CLEAN_DETAIL,
        payload
    }
}
export function movieAvailability(payload) {
    return {
        type: MOVIE_AVAILABILITY,
        payload
    }
}
//Actions Genres
export function getGenres() {
    return function(dispatch) {
        return axios.get("http://18.216.130.223:3001/api/genres")
            .then(movies => {
                dispatch({
                    type: GET_GENRES,
                    payload: movies.data
                })
            })
    }
}
export function postGenre(payload) {
    return async function(dispatch) {
        const response = await axios.post("http://18.216.130.223:3001/api/genres/create", payload)
        return response
    }
}
export function deleteGenre(payload) {
    return async function(dispatch) {
        try {
            const { data } = await axios.delete(`http://18.216.130.223:3001/genres/delete/${payload}`);
            dispatch({ type: DELETE_GENRE, payload: data });
        } catch (err) { console.log(err) }
    }
}
export function getGenreId(payload) {
    return async function(dispatch) {
        try {
            var json = await axios.get("http://18.216.130.223:3001/genres" + payload)
            return dispatch({
                type: GET_GENRE_ID,
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export function filterGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}