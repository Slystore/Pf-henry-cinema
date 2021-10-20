import dotenv from 'dotenv';
import axios from "axios";

export const GET_ALL = "GET_ALL";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_MOVIES_SORTED = "GET_MOVIES_SORTED";
export const MOVIE_AVAILABILITY = "MOVIE_AVAILABILITY";
export const GET_MOVIE_NAME = "GET_MOVIE_NAME";
export const ADD_MOVIE = "ADD_MOVIE";
export const FILTER_BY_GENRE = " FILTER_BY_GENRE";

dotenv.config();
// const { REACT_APP_AWS_PORT } = process.env;
// const awsPort = REACT_APP_AWS_PORT;

export function getAll() {
    return async(dispatch) => {
        const movies = await axios.get(`http://localhost:3001/api/movies`);
        const genres = await axios.get(`http://localhost:3001/api/genres`);
        const users = await axios.get(`http://localhost:3001/api/users`);
        return await dispatch({
            type: GET_ALL,
            movies: movies.data,
            genres: genres.data,
            users: users.data,
        });
    };
}

export function getMovies() {
    return async(dispatch) => {
        const { data } = await axios.get(`/api/movies`);
        return await dispatch({
            type: GET_MOVIES,
            payload: data,
        });
    };
}

export function getMovieDetails(id) {
    return async(dispatch) => {
        try {
            const json = await axios.get(`/api/movies/${id}`);
            return dispatch({
                type: GET_MOVIE_DETAILS,
                payload: json.data,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function cleanDetail(payload) {
    return {
        type: CLEAN_DETAIL,
        payload,
    };
}
let prueba = {
    title: "Hola4",
    rating: 7.5,
    description: "una prueba del post, si me sale bien, me voy a dormir",
    actors: ["Hola2", "Chau2"],
    director: "Gabriel Villarroel",
    usersRating: 5.0,
    votes: 1392,
    availability: true,
    price: "99.99",
    image: "no tengo imagen pero puedo ver si mando un texto mas largo, uy, ya lo hice, que genio. :')",
    runTime: "1.45.56",
    genre: "Action",
    cinema: "Kaia",
    sala: "sala_uno",
    funcion: 12,
};

export const postMovie = async(payload) => {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.post(
            `/api/movies/createMovie`, { prueba }, {
                headers: {
                    authorization: token,
                }
            }
        );
        console.log("post movie action despachada!");
        return res;
    } catch (err) {
        console.log("yo rompo action", err);
    }
};



// export function postMovie() {
//     // const token = localStorage.getItem("token")
//     // console.log(token)
//     const authAxios = axios.create({
//         // baseURL:"http://localhost:3001/api",
//         headers:{
//             Authorization: `Bearer ${token1}`
//         }
//     })
//     console.log('post movie action despachada!')
//     return async function(dispatch) {
//         const response = await authAxios.post('http://localhost:3001/api/movies/createMovie', prueba)
//         return response
//     }
// }


//-------------------------------------------------------------------------------------------
export function getMovieName(payload) {
    return async function(dispatch) {
        try {
            let response = await axios.get(
                `/api/movies?title=` + payload
            );
            return dispatch({
                type: GET_MOVIE_NAME,
                payload: response.data,
            });
        } catch (error) {
            alert("Película no encontrada");
        }
    };
}

export function getMoviesSorted(type) {
    return async function(dispatch) {
        return await axios.get(`api/movies` + type).then((moviesSorted) => {
            dispatch({
                type: GET_MOVIES_SORTED,
                payload: moviesSorted.data,
            });
        });
    };
}
export function filterGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload,
    };
}
export function movieAvailability(payload) {
    return {
        type: MOVIE_AVAILABILITY,
        payload,
    };
}