import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieDetails, cleanDetail } from "../../actions/index";
import { NavLink } from "react-router-dom";
// import loading from "../assets/Loading.jpeg";
import './MovieDetail.css'
// import axios from "axios";
import { IoPeopleCircleSharp } from "react-icons/io5";

export default function MovieDetail(props) {

  const defIm = 'https://es.web.img3.acsta.net/c_310_420/pictures/21/06/14/11/47/2960546.jpg'

  const { id } = props.match.params;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch( getMovieDetails(id) );
    return () => dispatch(cleanDetail(id))
  }, [dispatch, id]);

  const pelis = useSelector(state => state.moviesDetails);


  return (
    <div className="">
    
      {pelis ? (
        <div>
          <img
            src={pelis.image ? IoPeopleCircleSharp.image : defIm}
            alt="not found"
            width="200px"
            height="250px"
          />
          <h1 className=""> { pelis.title } </h1> 
          <h3>Sinopsis: {pelis.description}</h3>
          <h4>Duración: {pelis.runTime}</h4>
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
