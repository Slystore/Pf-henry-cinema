import { GET_USERS,LOGIN,GET_TOKEN,CREATE_USER } from "./usersAction.js";

const userState = {
  users: [],
  userData: [],
  userError:[]
};

function usersReducer(state = userState, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case CREATE_USER:
        console.log('esto llega al reducer de users',action.payload)
        if(action.payload.msg){
            console.log(action.payload.msg)
            return{
                ...state,
                userError:action.payload
            }
        }else if(action.payload.user){
           return{
               ...state,
               userData:action.payload
           }
        }
    case LOGIN:
      return {};
   
   
   
   
      default:
      return state;


  }
}

export default usersReducer;
