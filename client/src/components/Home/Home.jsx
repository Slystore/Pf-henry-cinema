import React from 'react';
import { Link } from 'react-router-dom';

import Movie from '../Movie/Movie'

// import { moviesMockUp } from '../../../../api/src/utils/mockups/movies';
import Shadow from '../../assets/shadow.png';


import './Home.css'


const posts = [
    { 
        id: '1', 
        name: 'After Almas Perdidas',
        sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
        rating: 5,
        availability: true,
        image: '../../assets/moviesPosters/after_almas_perdidas.jpg'
     },
    { 
        id: '2', 
        name: 'Cry Macho',
        sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
        image: '../../assets/moviesPosters/cry_macho.jpg'
     },
    { 
        id: '3', 
        name: 'Amenaza bajo el agua',
        sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
        image: '../../assets/moviesPosters/amenaza_bajo_el_agua.jpg' 
        
    },
    { 
        id: '4', 
        name: 'Sin tiempo para morir',
        sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
        image: '../../assets/moviesPosters/sin_tiempo_para_morir.jpg'
     },
    { 
        id: '5', 
        name: 'El imperio de los sentidos',
        sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
        image: '../../assets/moviesPosters/el_imperio_de_los_sentidos.jpg'
     },
    { 
        id: '6', 
        name: 'La casa oscura',
        sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
        image: '../../assets/moviesPosters/la_casa_oscura.jpg'
     },
    // { 
    //     id: '7', 
    //     title: 'El prófugo',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/el_profugo.jpg'
    //  },
    // { 
    //     id: '8', 
    //     title: 'Infidelidad mortal',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/infidelidad_mortal.jpg'
    //  },
    // { 
    //     id: '9', 
    //     title: 'Los santos de la mafia',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/los_santos_de_la_mafia.jpg'
    //  },
    // { 
    //     id: '10', 
    //     title: 'Undine',
    //     sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    //     img: '../assets/moviesPosters/undine.jpg'
    //  },
  ];

export default function Home() {
    return (
        <div className="MoviesContainer">
            {
                posts.map((movie) => {
                    // let URL = movie.img
                    // console.log(URL)
                    return ( 
                    <Link to={'/' + movie.id}>
                        <div className="Movie" >
                        <Movie key={movie.id} image={movie.image} name={movie.name}
                                    availability={movie.availability}
                                    rating={movie.rating}

                                    // genre={movie.genre.map(el => {
                                    //         return (<div>{el}</div>)
                                    //     })} 
                                        />
                        </div>
                    </Link>
                    )
                })
            }
        </div>
    )
}

{/* <div className="Movie" key={movie.id}>
<div><img src={require(`{'${URL}'}`)} alt={movie.title} /></div>
<div><img src={require(`${URL}`)} alt={movie.title} /></div>
<div><img src={require('../../assets/moviesPosters/la_casa_oscura.jpg')} alt={movie.title} /></div>

    <div><img src={movie.img} alt={movie.title} /></div>
 <div>
    <div className="MovieTitle">{movie.title}</div>
   
</div>
<div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
</div> */}

