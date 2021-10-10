import axios from "axios";

export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const LOGIN = "LOGIN";
export const GET_TOKEN = "GET_TOKEN";

export function getUsers() {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/api/movies`);
    return await dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
}
export async function createUser(payload) {
  // let data = await axios.post("http://18.216.130.223:3001/api/singUp", payload);
  try {
    let data = await axios.post("http://localhost:3001/api/singUp", payload);
    console.log("payload de la action", payload);
    console.log("esta es la data que me llega ", data);
    if (data.data.user) {
      console.log("estoy entranxdo aca ");
      return data.data;
    } else if (data.data.msg) {
      console.log("estoy entranxdo aca ");
      let errores = data.data;
      return errores;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function login(payload) {
  let data = await axios.post("http://localhost:3001/api/singIn", payload);

  if (data.data.token) {
    localStorage.setItem("token", data.data.token);
  } else if (!data.data.token) {
    let error = data.data.msg;
    console.log("entre y este es el error", error);
    return error;
  }

  return data;
}

export function getToken() {
  let token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    let error = {}
    error.msg = "No se ha encontrado ningun token"
    return error
  }
  return token;
}

