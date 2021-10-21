import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Movie from "../Movie/Movie";
// import initialState from '../../reducer/shoping.js'
// import shopingReducer from '../../reducer/shoping.js'
import {
  filterGenre,
  movieAvailability,
} from "../../redux/movies/moviesAction";
import { addToCart, storage } from "../../redux/carts/cartsActions";
import "./Home.css";

function Home() {
  
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);
  const { genres } = useSelector((state) => state.moviesReducer);
  

  function handleAvailability(e) {
    e.preventDefault();
    dispatch(movieAvailability(e.target.value));
  }

  function handleFilterGenre(e) {
    e.preventDefault();
    dispatch(filterGenre(e.target.value));
  }
  
  const handleAddCart = (id) => {
    console.log("console home",id)
    dispatch (addToCart(id))
    dispatch(storage(id));
}

  return (
    <div>
      <div className="SelectGroup">
        <h3>Filtrar por </h3>
        <div className="ContainerSelect">
          <select className="Select" onChange={(el) => handleAvailability(el)}>
            <option value="default">Disponibilidad</option>
            <option value="true">En Cartelera</option>
            <option value="false">Proximamente</option>
          </select>
        </div>

        <div className="ContainerSelect">
          <select className="Select" onChange={(e) => handleFilterGenre(e)}>
            <option value="All">Géneros</option>
            {genres &&
              genres.map((genre) => {
                return (
                  <option key={genre.id} value={genre.name}>
                    {genre.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <div className="ContainerHome">
        <div className="MoviesContainer">
          {movies && movies.map((movie, index) => {
            return (
              <div className="Movie" key={index}>
                <Movie
                  id={movie.id}
                  image={movie.image}
                  name={movie.title}
                  actors={movie.actors.map((act) =>act)}
                  availability={movie.availability}
                  genres={movie.genres.map((gen) =>gen)}
                  rating={movie.rating}
                  description={movie.description}
                  trailer={movie.trailer}
                  runTime={movie.runTime.split('.')}
                  director={movie.director}
                  classification= {movie.classification}
                  usersRating={movie.usersRating}
                  addToCart = {handleAddCart}  
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;


