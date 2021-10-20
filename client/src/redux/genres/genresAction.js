import axios from 'axios';
const { AWS_PORT } = process.env;

export const GET_GENRES = 'GET_GENRES';

export function getGenres() {
    return async (dispatch) => {
        const { data } = await axios.get(`${AWS_PORT}/genres`)
        return await dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}
// -- --------agregue esto ----------------------//

export function postGenres(payload) {
    return async () => {
        const json = await axios.post(`http://localhost:3001/api/genres/create`, payload)
        return json
    }
}

export function deletGenres(id) {
    return async () => {
        const json = await axios.post(`http://localhost:3001/api/genres/delete/${id}`)
        return json
    }
}


// -- --------agregue esto ----------------------//


