import dotenv from 'dotenv';
import axios from 'axios';

export const GET_GENRES = 'GET_GENRES';
export const POST_GENRES = 'POST_GENRES';

dotenv.config();
const { REACT_APP_AWS_PORT } = process.env;
const awsPort = REACT_APP_AWS_PORT;

export function getGenres() {
    return async(dispatch) => {
        const { data } = await axios.get(`/api/genres`)
        return await dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}

export function createGenres(payload) {
    return async(dispatch) => {
        const response = await axios.post(`/api/genres/create`, payload)
        return response
    }
}