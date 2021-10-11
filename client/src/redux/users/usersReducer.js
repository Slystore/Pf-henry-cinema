import { GET_USERS, LOGIN, GET_TOKEN, CREATE_USER } from "./usersAction.js";

const userState = {
    users: [],
    userData: [],
    userError: [],
};

function usersReducer(state = userState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
            /* falls through */
        case CREATE_USER:
            console.log("esto llega al reducer de users", action.payload);
            if (action.payload.msg) {
                console.log(action.payload.msg);
                return {
                    ...state,
                    userError: action.payload,
                };
            } else if (action.payload.user) {
                return {
                    ...state,
                    userData: action.payload,
                };
            }
            /* falls through */
        case LOGIN:
            return {};
            /* falls through */
        case GET_TOKEN:
            return {
                ...state,
            };
            /* falls through */
        default:
            return state;
    }
}

export default usersReducer;