import axios from "axios";

export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const LOGIN = "LOGIN";
export const GET_TOKEN = "GET_TOKEN";

export function getUsers() {
    return async(dispatch) => {
        const { data } = await axios.get(`/api/movies`);
        return await dispatch({
            type: GET_USERS,
            payload: data,
        });
    };
}

export async function googleLog(payload) {
    let { data } = await axios.post(
        `http://localhost:3001/api/googleLogin`,
        payload
    );
    console.log("data de google", payload);
    if (data) {
        return data;
    }
}

export async function createUser(payload) {
    try {
        let data = await axios.post(`/api/singUp`, payload);

        if (data.data.user) {
            return data.data;
        } else if (data.data.msg) {
            let errores = data.data;
            return errores;
        }
    } catch (err) {
        console.log(err);
    }
}

export async function login(payload) {
    let data = await axios.post(`/api/singIn`, payload);
    if (data.data.token) {
        localStorage.setItem("token", data.data.token);
    } else if (!data.data.token) {
        let error = data.data.msg;
        return error;
    }

    return data;
}

export function getToken() {
    let token = localStorage.getItem("token");
    if (!token) {
        let error = {};
        error.msg = "No se ha encontrado ningun token";
        return error;
    }
    return token;
}