import {
    GET_USERS,
} from './usersAction.js';


const initialState = {
    genres: [],
};


function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            {
                return {
                    ...state,
                    users: action.payload
                }
            }
        default:
            return state

    }
};

export default usersReducer;