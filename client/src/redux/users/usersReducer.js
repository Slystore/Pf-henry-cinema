import { GET_ALL_USERS, LOGIN, GET_TOKEN } from './usersAction.js'


const initialState = {
    users: [],
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            {
                return {
                    ...state,
                    users: action.payload,
                };
            }
        case LOGIN:
            return {
                ...state,
            };
        case GET_TOKEN:
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default usersReducer;