const { AWS_PORT } = process.env;

export const GET_USERS = 'GET_USERS';

export function getUsers() {
    return async(dispatch) => {
        const { data } = await axios.get(`${AWS_PORT}/movies`)
        return await dispatch({
            type: GET_USERS,
            payload: data
        })
    }
}