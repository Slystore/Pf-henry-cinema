import React from 'react';
// import './Movie.css'

export default function Movie({ name, image, availability, rating, genre }) {
    return (
        <div className="">
            
            <div className=""> <div>
            <img src={image} alt="imagen no encontrada" width="200px" height="250px" /></div>
            <div className=""><h3> {name}</h3> </div> 
            <div className=""><h5>  {genre}</h5> </div> 
            <div className=""><h5>  {availability? <p>Horarios: </p>: <p>No hay Disponibilidad </p>}</h5> </div> 
            <div className=""><h5>  {rating}</h5> </div>
                </div>
        </div>
    )}