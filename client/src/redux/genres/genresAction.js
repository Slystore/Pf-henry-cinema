import axios from 'axios';
const { AWS_PORT } = process.env;

export const GET_GENRES = 'GET_GENRES';
export const POST_GENRES = 'POST_GENRES';

export function getGenres() {
    return async(dispatch) => {
        const { data } = await axios.get(`http://18.216.130.223:3001/api/genres`)
        return await dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}
export function createGenres(payload) {
    return async(dispatch) => {
        const response = await axios.post(`http://18.216.130.223:3001/api/genres/create`, payload)
        return response
    }
}