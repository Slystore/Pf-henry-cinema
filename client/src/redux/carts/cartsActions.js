import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART= ' CLEAR_CART'
export const CINEMAS = 'CINEMAS'
export const SCREENING = 'SCREENING'
export const SEATS = 'SEATS'
export const GET_ALL = 'GET_ALL';
export const INCREMENT_CART='INCREMENT_CART';
export const DECREMENT_CART='DECREMENT_CART';
export const POST_FILL_CART= 'POST_FILL_CART'
// export function addToCart() {
//     return function(dispatch) {
//       return axios.get("http://localhost:3001/countries")
//         .then(countries => {
//             dispatch({ 
//                 type: ADD_TO_CART, 
//                 payload: countries.data
//             })
//         })
//     }
//   }
export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

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
export function cinemaSelect(payload) {
    return {
        type: CINEMAS,
        payload
    }
}
export function screeningSelect(payload) {
    return {
        type: SCREENING,
        payload
    }
}
export function seatSelect(payload) {
    return {
        type: SEATS,
        payload
    }
}
export function incrementCart(id) {
    return {
        type: INCREMENT_CART,
        payload: id
    }
}
export function decrementCart(id) {
    return {
        type: DECREMENT_CART,
        payload: id
    }
}
export function clearCart(id) {
    return {
        type: CLEAR_CART,
        payload: id
    }
}
export function postCartFill(id) {
    return {
        type: POST_FILL_CART,
        payload: id
    }
}