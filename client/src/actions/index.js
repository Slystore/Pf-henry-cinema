import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const ADD_MOVIE = 'ADD_MOVIE'
export const GET_MOVIES_SORTED = 'GET_MOVIES_SORTED'
export const CLEAN_DETAIL= 'CLEAN_DETAIL'


export function getMovies() {
    return function(dispatch) {
      return axios.get("http://18.216.130.223:3001/")
        .then(movies => {
            dispatch({ 
                type: GET_MOVIES, 
                payload: movies.data
            })
        })
    }
  }
  
export function getMovieDetails(id) {
    return async function(dispatch) {
        try{
            var json = await axios.get("http://18.216.130.223:3001/?id=" + id)
            return dispatch({ 
                type: GET_MOVIE_DETAILS,
                payload: json.data
            })
        } catch(err){
            console.log(err)
        }
    }
}

export function postMovie(payload){
    return async function(dispatch){
        const response = await axios.post("http://18.216.130.223:3001/",payload)
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
