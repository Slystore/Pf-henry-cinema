import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import { useSelector, useDispatch } from "react-redux";
// import { moviesMockUp } from '../../../../api/src/utils/mockups/movies';
import { filterGenre, getGenres, movieAvailability } from "../../actions";
import "./Home.css";

import { useEffect } from "react";
import Footer from "../Footer/Footer";

export default function Home() {
  const defIm =
    "https://es.web.img3.acsta.net/c_310_420/pictures/21/06/14/11/47/2960546.jpg";
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movies);
  const allGenres = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  function handleAvailability(e) {
    e.preventDefault();
    dispatch(movieAvailability(e.target.value));
  }
  function handleFilterGenre(e) {
    e.preventDefault();
    dispatch(filterGenre(e.target.value));
  }

  return (
    <div>
      <div>
        <select onChange={(el) => handleAvailability(el)} className="">
          <option value="default">Disponibilidad</option>
          <option value="true">En Cartelera</option>
          <option value="false">Proximamente</option>
        </select>

        <select onChange={(e) => handleFilterGenre(e)} className="">
          <option value="All">Géneros</option>
          {allGenres &&
            allGenres.map((genre) => {
              return (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              );
            })}
        </select>
      </div>

      <div className="MoviesContainer">
        {allMovies &&
          allMovies.map((movie) => {
            return (
              <Link to={"/movie/" + movie.id}>
                <div className="Movie">
                  <Movie
                    key={movie.id}
                    image={movie.image}
                    altImage={defIm}
                    name={movie.title}
                    availability={movie.availability}
                    genre={movie.genres}
                    rating={movie.rating}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
