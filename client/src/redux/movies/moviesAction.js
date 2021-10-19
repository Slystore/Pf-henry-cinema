import axios from "axios";
export const GET_ALL = "GET_ALL";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_MOVIES_SORTED = "GET_MOVIES_SORTED";
export const MOVIE_AVAILABILITY = "MOVIE_AVAILABILITY";
export const GET_MOVIE_NAME = "GET_MOVIE_NAME";
export const ADD_MOVIE = "ADD_MOVIE";
export const PUT_MOVIE = "PUT_MOVIE";
export const FILTER_BY_GENRE = " FILTER_BY_GENRE";
export const DELTE_MOVIE = "DELETE_MOVIE";

const awsPort = process.env.REACT_APP_API_KEY;

export function getAll() {
  return async (dispatch) => {
    // const movies = await axios.get(`http://18.216.130.223:3001/api/movies`);
    const movies = await axios.get('http://localhost:3001/api/movies')
    const genres = await axios.get(`http://18.216.130.223:3001/api/genres`);
    const users = await axios.get(`http://18.216.130.223:3001/api/users`);
    const cinemas = await axios.get(`https://cinemapp-store.herokuapp.com/api/cinemas`);
    const cinemaRooms = await axios.get(`https://cinemapp-store.herokuapp.com/api/cinemaRooms`);
    const screenings = await axios.get(`https://cinemapp-store.herokuapp.com/api/screenings`);
    return await dispatch({
      type: GET_ALL,
      movies: movies.data,
      genres: genres.data,
      users: users.data,
      cinemas: cinemas.data,
      cinemaRooms : cinemaRooms.data,
      screenings: screenings.data
    });
  };
}

export function putMovie(dataMovie) {
  console.log("este es el payload de la action ", dataMovie);
  return async function (dispatch) {
    try {
      const data = await axios.put(
        `http://localhost:3001/api/movies/editMovie/${dataMovie.id}`,
        dataMovie
      );
      console.log("accion despachada");
      return await dispatch({
        type: PUT_MOVIE,
        payload: data.data,
      });
    } catch (err) {
      console.log("yo rompo en la action", err);
    }
  };
}
export async function deleteMovie(id) {
  try {
    const x = await axios.delete(
      `http://localhost:3001/api/movies/deleteMovie/${id}`
    );
    return x;
  } catch (err) {
    console.log("rompo en la action movie", err);
  }
}

export function getMovies() {
  return async (dispatch) => {
    const { data } = await axios.get(`http://18.216.130.223:3001/api/movies`);
    return await dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  };
}

export function getMovieDetails(id) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`${awsPort}/api/movies/${id}`);
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
  image:
    "no tengo imagen pero puedo ver si mando un texto mas largo, uy, ya lo hice, que genio. :')",
  runTime: "1.45.56",
  genre: "Action",
  cinema: "Kaia",
  sala: "sala_uno",
  funcion: 12,
};

export const postMovie = async (payload) => {
  const token = localStorage.getItem("token");
  console.log("this", payload);
  // const config = { headers: { Authorization: `Bearer ${token1}` }   };

  // const bodyParameters = { key: prueba };
  try {
    const res = await axios.post(
      `http://localhost:3001/api/movies/createMovie`,
      { prueba },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("post movie action despachada!");
    return res;
  } catch (err) {
    console.log("yo rompo action", err);
  }
  // const back = axios.post( 'http://localhost:3001/api/movies/createMovie', prueba)
};

export function getMovieName(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `http://18.216.130.223:3001/api/movies?title=` + payload
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
  return async function (dispatch) {
    return await axios.get(`${awsPort}` + type).then((moviesSorted) => {
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
