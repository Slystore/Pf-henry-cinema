const { AWS_PORT } = process.env;

export const GET_GENRES = 'GET_GENRES';

export function getGenres() {
    return async(dispatch) => {
        const { data } = await axios.get(`${AWS_PORT}/genres`)
        return await dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}