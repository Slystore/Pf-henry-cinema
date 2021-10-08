import {
    GET_GENRES,
} from './genresAction.js';

const initialState = {
    genres: [],
};

function genresReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GENRES:
            {
                return {
                    ...state,
                    genres: action.payload
                }
            }
        default:
            return state

    }
};

export default genresReducer;