import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const LOGIN = "LOGN";
export const GET_TOKEN = "GET_TOKEN";
export const CREATE_USER = "CREATE_USER";

export async function getAllUsers() {
    return async function(dispatch) {
        const users = await axios.get("http://localhost:3001/api/users");
        return await dispatch({
            type: GET_ALL_USERS,
            payload: users.data,
        });
    };
}

export function createUser(payload) {
    return async function(dispatch) {
        try {
            let data = await axios.post("http://localhost:3001/api/singUp", payload);
            return await dispatch({
                type: CREATE_USER,
                payload: data.data
            })
        } catch (err) {
            console.log(err);
        }
    };
}

export async function login(payload) {
    let data = await axios.post("http://localhost:3001/api/singIn", payload);

    if (data.data.token) {
        localStorage.setItem("token", data.data.token);
    } else if (!data.data.token) {
        let error = data.data.msg;
        return error;
    }

    return data;
}

export async function getToken() {
    let token = localStorage.getItem("token");
    if (!token) {
        return 'No se ha encontrado ningun token'
    }
    return token;
}