import dotenv from 'dotenv';
import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_CART = ' CLEAR_CART'
export const CINEMAS = 'CINEMAS'
export const SCREENING = 'SCREENING'
export const SEATS = 'SEATS';
export const CLEAR_SEAT= 'CLEAR_SEAT';
export const GET_ALL = 'GET_ALL';
export const INCREMENT_CART='INCREMENT_CART';
export const INCREMENT_CART_STORAGE='INCREMENT_CART_STORAGE';
export const DECREMENT_CART_STORAGE='DECREMENT_CART_STORAGE';
export const DECREMENT_CART='DECREMENT_CART';
export const POST_FILL_CART= 'POST_FILL_CART';
export const POST_PURCHASE_CART = 'POST_PURCHASE_CART';
export const FILL_TEXT= 'FILL_TEXT';
export const STORAGE= 'STORAGE';
export const RECOVERY_CART= 'RECOVERY_CART'

dotenv.config();
// const { REACT_APP_AWS_PORT } = process.env;
// const awsPort = REACT_APP_AWS_PORT;

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}
export function storage(payload) {
    return {
        type: STORAGE,
        payload
    }
}
export function fillText(payload) {
    return {
        type: FILL_TEXT,
        payload
    }
}
export function getAll() {
    return async(dispatch) => {
        const movies = await axios.get(`/movies`);
        const genres = await axios.get(`/genres`);
        const users = await axios.get(`/users`);
        return await dispatch({
            type: GET_ALL,
            movies: movies.data,
            genres: genres.data,
            users: users.data,
        })
    }
}
export function cinemaSelectAction(payload) {
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
export function clearSeat(payload) {
    return {
        type: CLEAR_SEAT,
        payload
    }
}
export function incrementCart(id) {
    return {
        type: INCREMENT_CART,
        payload: id
    }
}
export function incrementCartStorage(id) {
    return {
        type: INCREMENT_CART_STORAGE,
        payload: id
    }
}
export function decrementCart(id) {
    return {
        type: DECREMENT_CART,
        payload: id
    }
}
export function decrementCartStorage(id) {
    return {
        type: DECREMENT_CART_STORAGE,
        payload: id
    }
}
export function clearCart(id) {
    return {
        type: CLEAR_CART,
        payload: id
    }
}
export function postCartFill(cart) {
    return async (dispatch) => {
        console.log('accion despachada de carrito', cart)
        // const id = cart[0].userId
        console.log(typeof id)
        const creacion = await axios.post('http://localhost:3001/api/users/cart/'+20, cart)
        return await dispatch({
            type: 'POST_FILL_CART',
            creacion
        })
    }
}

export function postPurchaseCart() {
    return async (dispatch) => {
        
        const creacion = await axios.post(`http://localhost:3001/api/purchases/`+20+`/create`)
        return await dispatch({
            type: POST_PURCHASE_CART
        })
    }
}
export function recoveryCart(payload) {
    return {
        type: RECOVERY_CART,
        payload
    }
}