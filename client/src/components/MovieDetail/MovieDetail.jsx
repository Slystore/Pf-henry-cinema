import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieDetails, cleanDetail } from "../../actions/index";
import { NavLink } from "react-router-dom";
// import loading from "../assets/Loading.jpeg";
import './MovieDetail.css'

export default function MovieDetail(props) {
  const { id } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(id));
    return () => dispatch(cleanDetail(id))
  }, [dispatch, id]);
  const movieDetail = useSelector((state) => state.moviesDetails);

  return (
    <div className="">
      <h1>Detalle</h1>
      {movieDetail.length ? (
        <div>
          <img
            src={movieDetail[0].image}
            alt="not found"
            width="200px"
            height="250px"
          />
          <h1 className=""> {movieDetail[0].title.toUpperCase()} </h1>

          {/* <h2 className="">
            {" "}
            Género:{" "}
            {movieDetail[0].genre.map((el) => {
              return <div>{el}</div>;
            })}
          </h2> */}
          <h3>Sinopsis: {movieDetail[0].description}</h3>
          <h4>Duración: {movieDetail[0].runTime}</h4>
        </div>
      ) : (
        <div>
          {/* <img src={loading} alt="Not found" width="300px" height="300px" /> */}
          <p className="">Loading...</p>
        </div>
      )}
      <NavLink to="/">
        <button className="">Volver</button>
      </NavLink>
    </div>
  );
}