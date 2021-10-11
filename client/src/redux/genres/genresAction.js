import axios from 'axios';

export const GET_GENRES = 'GET_GENRES';

export function getGenres() {
    return async(dispatch) => {
        const { data } = await axios.get(`http://18.216.130.223:3001/api/genres/`)
        return await dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}