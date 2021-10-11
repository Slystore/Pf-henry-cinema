import {
    ADD_TO_CART,
    CLEAR_CART,
    GET_ALL,
    CINEMAS,
    SCREENING,
    SEATS,
    INCREMENT_CART,
    DECREMENT_CART,
    POST_FILL_CART
} from './cartsActions';

export const initialState = {
    cart: [],
    movies: [],
    cinemas: [{
            name: "Kaia",
            id: 2,
            location: "32105 Lulu Ways"
        },
        {
            name: "Leta",
            location: "05061 Greenholt Underpass"
        },
        {
            name: "Clark",
            id: 3,
            location: "0352 Upton Estates"
        },
    ],
    cinemaSelect: [],
    screening: [{
            time: 20,
            id: 1
        },
        {
            time: 22
        },
        {
            time: 24
        }
    ],
    screeningSelect: [],
    seats: [{
            row: "A",
            number: 2,
            id: 2
        },
        {
            row: "A",
            number: 3
        },
        {
            row: "A",
            number: 4
        },
    ],
    seatsSelect: [],
    postCart: []
};

function cartReducer(state = initialState, action) {



    switch (action.type) {
        case GET_ALL:
            {
                return {
                    ...state,
                    movies: action.movies,

                }
            }

        case ADD_TO_CART:

            let newItem = state.movies.find((movie) => movie.id == action.payload);
            let iteminCart = state.cart.find((item) => item.id == newItem.id)
            let movieId = newItem.id
            return iteminCart ? {
                    ...state,
                    cart: state.cart.map((item) => item.id == newItem.id ? {...item, quantity: item.quantity + 1 } : item),
                    postCart: [...state.postCart, { movieId }]
                } :
                {
                    ...state,
                    cart: [{...newItem, quantity: 1 }],
                    postCart: [{ movieId }]
                }
        case POST_FILL_CART:
            return {
                ...state
            }

        case CLEAR_CART:
            {
                return {
                    ...state,
                    cart: []
                }
            }
        case CINEMAS:
            {
                let cinePrueba = state.postCart.length === 1 ? {...state.postCart[0], cinemaId: action.payload } : state.postCart.map(item => item.cinemaId ? { item } : {...item, cinemaId: action.payload })
                return {
                    ...state,
                    cinemaSelect: action.payload,
                    postCart: cinePrueba
                }
            }
        case SCREENING:
            {
                return {
                    ...state,
                    screeningSelect: action.payload
                }
            }
        case SEATS:
            {
                let seatSelect = state.postCart.map(item => item.seat ? {...item } : {...item, seat: action.payload })
                return {
                    ...state,
                    seatsSelect: [...state.seatsSelect, action.payload],
                    postCart: seatSelect
                }
            }
        case INCREMENT_CART:
            {
                let result = state.cart.map(item => item ? {...item, quantity: item.quantity + 1 } :
                    item)
                return {
                    ...state,
                    cart: result
                }
            }
        case DECREMENT_CART:
            {
                let result = state.cart.map(item => item ? {...item, quantity: item.quantity - 1 } :
                    item)
                return {
                    ...state,
                    cart: result
                }
            }
        default:
            return state

    }

}

export default cartReducer;