import axios from 'axios';
export const GET_ALL = 'GET_ALL';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_MOVIES_SORTED = 'GET_MOVIES_SORTED';
export const MOVIE_AVAILABILITY = 'MOVIE_AVAILABILITY';
export const GET_MOVIE_NAME = 'GET_MOVIE_NAME';
export const ADD_MOVIE = 'ADD_MOVIE';
export const FILTER_BY_GENRE = ' FILTER_BY_GENRE';

const awsPort = process.env.REACT_APP_API_KEY;

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
        })
    }
}

export function getMovies() {
    return async(dispatch) => {
        const { data } = await axios.get(`http://18.216.130.223:3001/api/movies`)
        return await dispatch({
            type: GET_MOVIES,
            payload: data
        })
    }
}

export function getMovieDetails(id) {
    return async(dispatch) => {
        try {
            const json = await axios.get(`${awsPort}/api/movies/${id}`)
            return dispatch({
                type: GET_MOVIE_DETAILS,
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function cleanDetail(payload) {
    return {
        type: CLEAN_DETAIL,
        payload
    }
}

//---------------------------------------------------------
 let prueba = {
    title : "Hola4",
    rating : 7.5,
    description : "una prueba del post, si me sale bien, me voy a dormir",
    actors : ["Hola2", "Chau2"],
    director : "Gabriel Villarroel",
    usersRating : 5.0,
    votes : 1392,
    availability : true,
    price : "99.99",
    image : "no tengo imagen pero puedo ver si mando un texto mas largo, uy, ya lo hice, que genio. :')",
    runTime : "1.45.56",
    genre : "Action",
    cinema: "Kaia",
    sala: "sala_uno",
    funcion: 12
    }
    const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJUeXBlIjoidXNlciIsImlkIjo1MSwibmFtZSI6Ikdlcm1hbiIsInN1cm5hbWUiOiJDYW1wb2RvbmljbyIsIm1haWwiOiJnZXJtaWFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDZZMkFFWGhHZ2s4Yk1WbG5oZmFScy41czUxOUZ4UHV4S0IuVDFhZGFPeFJDRjdtcHRTU3FDIiwidXBkYXRlZEF0IjoiMjAyMS0xMC0xNFQwMTo1OTo0OS45MjhaIiwiY3JlYXRlZEF0IjoiMjAyMS0xMC0xNFQwMTo1OTo0OS45MjhaIiwic2hvcHBpbmdDYXJ0IjpudWxsfSwiaWF0IjoxNjM0MTc2Nzg5LCJleHAiOjE2MzQzNDk1ODl9.BlcKiR1L26AsaQTvRs8E-ejqk4dgiB-pYLdxq8UliAQ'
// export function postMovie() {
//     return async function(dispatch) {
//         const response = await axios.post(`http://localhost:3001/api/movies/createMovie`, prueba)
//         console.log('post movie action despachada!')
//         return await dispatch({
//             type: ADD_MOVIE,
//             response
//         })
//     }
// }
export function postMovie(){
    
        
        return async function(dispatch) {
            // const token = localStorage.getItem("token")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token1}` 
            // const config = { headers: { Authorization: `Bearer ${token1}` }   };
            
            // const bodyParameters = { key: prueba };
            const back = axios.post( 'http://localhost:3001/api/movies/createMovie', prueba)
            // const back = axios.post( 'http://localhost:3001/api/movies/createMovie', prueba)
            console.log('post movie action despachada!')
            return await dispatch({
                type: ADD_MOVIE,
                back
            })
        }
    }



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
            let response = await axios.get(`http://18.216.130.223:3001/api/movies?title=` + payload);

            return dispatch({
                type: GET_MOVIE_NAME,
                payload: response.data
            })
        } catch (error) { alert('Película no encontrada') }
    }
}

export function getMoviesSorted(type) {
    return function(dispatch) {
        return axios.get(`${awsPort}` + type)
            .then(moviesSorted => {
                dispatch({
                    type: GET_MOVIES_SORTED,
                    payload: moviesSorted.data
                })
            })
    }
}
export function filterGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
}
export function movieAvailability(payload) {
    return {
        type: MOVIE_AVAILABILITY,
        payload
    }
}