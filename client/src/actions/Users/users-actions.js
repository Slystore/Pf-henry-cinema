import axios from "axios";
import jwt from "jsonwebtoken";
export const GET_ALL_USERS = "GET_ALL_USERS";

export function getAllUsers() {
  return async function (dispatch) {
    const users = await axios.get("http://localhost:3001/api/users");
    console.log("esto me llega de data en getAll Users", users.data);
    return await dispatch({
      type: GET_ALL_USERS,
      payload: users.data,
    });
  };
}


