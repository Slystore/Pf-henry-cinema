import React from 'react';
import Shadow from '../../assets/shadow.png';
import './Movie.css'

export default function Movie({ title, image, availability, rating, genres }) {
    return (
        <div className="Movie">

            <div className="Poster"><img src={image} alt="imagen no encontrada" width="200px" height="250px" /></div>
            <div className="MovieTitle"> {title} </div>
            <div className="Genre">{genres}</div>
            <div className="Availability">{availability ? <p>Horarios: </p>: <p>No hay Disponibilidad </p>} </div>
            <div className="Hour">{} </div>
            <div className=""><h5>  {rating}</h5> </div>
            {/* <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>  */}
            
{/*             
                <div className=""><h5>  </h5> </div> 
                <div className=""><h5>  {availability? <p>Horarios: </p>: <p>No hay Disponibilidad </p>}</h5> </div> 
                <div className=""><h5>  {rating}</h5> </div> */}
            
        </div>
    )}