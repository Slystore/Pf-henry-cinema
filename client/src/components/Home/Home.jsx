import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie'
import { useSelector } from 'react-redux';
// import { moviesMockUp } from '../../../../api/src/utils/mockups/movies';


import './Home.css'


export default function Home() {
    const allMovies = useSelector(state => state.movies);
    return (
        <div className="MoviesContainer">
          {
                allMovies && allMovies.map((movie) => {
                    // let URL = movie.img
                    // console.log(URL)
                    return ( 
                    <Link to={'/movie/' + movie.id}>
                        <div className="Movie" >
                        <Movie key={movie.id} image={movie.image} name={movie.title}
                                    availability={movie.availability}
                                    genre={movie.genres}
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

</div> */}

