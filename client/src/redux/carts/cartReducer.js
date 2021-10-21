import {
    ADD_TO_CART,
    CLEAR_CART,
    GET_ALL,
    CINEMAS,
    SCREENING,
    SEATS,
    INCREMENT_CART,
    INCREMENT_CART_STORAGE,
    DECREMENT_CART_STORAGE,
    DECREMENT_CART,
    POST_FILL_CART,
    STORAGE,
    FILL_TEXT,
    CLEAR_SEAT
} from './cartsActions';

export const initialState = {
    cart: [],
    movies: [],
    storage: [],
    cinemas: [{
            name: "Kaia",
            id: 1,
            location: "32105 Lulu Ways"
        },
        {
            name: "Leta",
            id: 2,
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
            time: 22,
            id: 2
        },
        {
            time: 24,
            id: 3
        }
    ],
    screeningSelect: [],
    seats: [{
            row: "A",
            number: 1,
            id: 1,
        },
        {
            row: "A",
            number: 2,
            id: 2,
        },
        {
            row: "A",
            number: 3,
            id: 3,
        },
    ],
    seatsSelect: {},
    clearSeat: {},
    textFill: [],
    postCart: [],
    postCartStorage: []
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

            let newItem = state.movies.find((movie) => movie.id === action.payload);
            let iteminCart = state.cart.find((item) => item.id === newItem.id)
            let movieId = newItem.id
            return iteminCart ? {
                ...state,
                cart: state.cart.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1 } : item),
                postCartStorage: [...state.postCartStorage, { movieId }]
            } : {
                ...state,
                cart: [{...newItem, quantity: 1 }],
                postCartStorage: [{ movieId }]
            }
        case STORAGE:
            let estado = state.cart
            window.localStorage.setItem("id", JSON.stringify(estado))
            let store2 = JSON.parse(window.localStorage.getItem("id"))
            return {
                ...state,
                storage: store2
            }

        case FILL_TEXT:
            let movieId2 = action.payload ? action.payload[0].id : null
            return {
                ...state,
                textFill: action.payload !== null ? action.payload : [],
                // postCartStorage: movieId2 ? [...state.postCartStorage, { movieId2 }] : [{ movieId2 }]
            }
        case POST_FILL_CART:
            return {
                ...state
            }

        case CLEAR_CART:
            {
                return {
                    ...state,
                    cart: [],
                    textFill: []
                }
            }
        case CINEMAS:
            {
                let cinePrueba = state.postCartStorage.length === 1 ? [{...state.postCartStorage[0], cinemaId: action.payload }] : state.postCartStorage.map(item => item.cinemaId ? { item } : {...item, cinemaId: action.payload })
                return {
                    ...state,
                    cinemaSelect: action.payload,
                    postCart: cinePrueba,
                    postCartStorage: cinePrueba
                }
            }
        case SCREENING:
            {
                let screeningPrueba = state.postCartStorage.length === 1 ? [{...state.postCartStorage[0], screeningId: action.payload }] : state.postCartStorage.map(item => item.screeningId ? {...item } : {...item, screeningId: action.payload })
                return {
                    ...state,
                    screeningSelect: action.payload,
                    postCart: screeningPrueba,
                    postCartStorage: screeningPrueba
                }
            }
        case SEATS:
            {
                let rowSeat = action.payload.slice(0, 1)
                let numberSeat = Number(action.payload.slice(1))
                var flag = true;
                let seatSelect = state.postCartStorage.map(item => {

                    while (flag && !item.seat) {
                        item.seat = action.payload;
                        flag = false
                    }
                    return item
                })
                return {
                    ...state,
                    seatsSelect: {...state.seatsSelect, row: rowSeat, number: numberSeat, isAvailable: false },
                    postCartStorage: seatSelect
                }
            }
        case CLEAR_SEAT:
            let rowSeat = action.payload.slice(0, 1)
            let numberSeat = Number(action.payload.slice(1))
            let seatCleared = state.postCartStorage.map(item => {
                return item.seat === action.payload ? {...item, seat: undefined } : item
            })
            return {

                ...state,
                clearSeat: {...state.clearSeat, row: rowSeat, number: numberSeat, isAvailable: true },
                postCartStorage: seatCleared
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
        case INCREMENT_CART_STORAGE:
            {
                let result2 = state.textFill.map(item => item.quantity ?
                    {...item, quantity: item.quantity + 1 } :
                    item)
                let array = state.postCartStorage
                return {
                    ...state,
                    textFill: result2,
                    postCartStorage: array ? array.concat(array[0]) : []
                }
            }
        case DECREMENT_CART_STORAGE:
            {
                let result2 = state.textFill.map(item => item.quantity ?
                        {...item, quantity: item.quantity - 1 } :
                        item)
                    // eslint-disable-next-line no-unused-vars
                let array = state.postCartStorage.pop()
                return {
                    ...state,
                    textFill: result2,
                    postCartStorage: (state.textFill)[0].quantity !== 0 ? state.postCartStorage : []
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