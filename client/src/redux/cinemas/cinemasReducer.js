import {
    GET_CINEMAS,
    ADD_CINEMA,
} from './cinemasAction.js';

const initialState = {
    cinemas: [],
}


function cinemasReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CINEMAS:{
                return {
                    ...state,
                    cinemas: action.payload
                }
        }

        case ADD_CINEMA: {
                return {
                    ...state,
                    cinemas: action.payload
                }
            }

        default:
            return state

    }
};

export default cinemasReducer;