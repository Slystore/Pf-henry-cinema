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
  const movieDetail1 = useSelector((state) => state.detail);
const movieDetail= [ { 
  id: '1', 
  name: 'After Almas Perdidas',
  sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
  rating: 5,
  availability: true,
  image: '../../assets/moviesPosters/after_almas_perdidas.jpg'
}]
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
          <h1 className=""> {movieDetail[0].name.toUpperCase()} </h1>

          {/* <h2 className="">
            {" "}
            Género:{" "}
            {movieDetail[0].genre.map((el) => {
              return <div>{el}</div>;
            })}
          </h2> */}
          <h3>Sinopsis: {movieDetail[0].summary}</h3>
          <h4>Duración: {movieDetail[0].runtime}</h4>
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