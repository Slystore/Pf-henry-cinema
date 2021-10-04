import React from 'react';
import Shadow from '../../assets/shadow.png';
import './Movie.css'

export default function Movie({altImage, image, name, availability, genre, rating}) {
    
    return (
        <div className="Movie">
            <div className="Poster">
                <img src={image? image : altImage} alt="imagen no encontrada" width="200px" height="250px" />
            </div>
            <div className="MovieTitle"> {name} </div>
            <div className="Genre">{genre}</div>
            <div className="Availability">{availability ? <p>Horarios: </p>: <p>No hay Disponibilidad </p>} </div>
            <div className="Hour">{} </div>
            {/* <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>  */}
            
{/*             
                <div className=""><h5>  </h5> </div> 
                <div className=""><h5>  {availability? <p>Horarios: </p>: <p>No hay Disponibilidad </p>}</h5> </div> 
                <div className=""><h5>  {rating}</h5> </div> */}
            
        </div>
    )}