export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ALL_ONE_CART = 'REMOVE_ALL_ONE_CART'
export const REMOVE_ALL_FROM_CART= 'REMOVE_ALL_FROM_CART'
export const CLEAR_CART= ' CLEAR_CART'

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