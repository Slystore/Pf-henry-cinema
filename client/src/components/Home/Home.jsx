import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Movie from "../Movie/Movie";
import {
  filterGenre,
  movieAvailability,
} from "../../redux/movies/moviesAction";
import { useEffect } from "react";
import "./Home.css";
import { getGenres } from "../../redux/genres/genresAction";

function Home() {


    const dispatch = useDispatch();
    const { movies } = useSelector(state => state)
    const { genres } = useSelector(state => state)
    const defIm = 'https://i.postimg.cc/pr96t201/bac-nord.jpg'

    function handleAvailability(e) {
        e.preventDefault()
        dispatch(movieAvailability(e.target.value))
    }
        
    function handleFilterGenre(e) {
        e.preventDefault()
        dispatch(filterGenre(e.target.value))
    }

    return (<div>
            <div className="SelectGroup">

                <h3>Filtrar por </h3>
                <div className="ContainerSelect">
                    <select className="Select" onChange={el => handleAvailability(el)}  >
                        <option value='default'>Disponibilidad</option>
                        <option value='true'>En Cartelera</option>
                        <option value='false'>Proximamente</option>
                    </select>
                </div>

                <div className="ContainerSelect">
                    <select className="Select" onChange={e => handleFilterGenre(e)} >
                        <option value='All'>Géneros</option>
                        {genres && genres.map((genre) => {
                            return <option key={genre.id} value={genre.name}>{genre.name}</option>
                        })}
                    </select>
                </div>

            </div>
        <div className="ContainerHome">
            <div className="MoviesContainer">

                {
                    movies.map((movie) => {
                    // console.log(movie.image)
                    // console.log('este es el id que llega', movie.id)
                    // let URL = movie.img
                    // console.log(URL)
                        return ( 
                            //<Link to={'/movie/' + movie.id} style={{textDecoration:'none'}}>
                                <div className="Movie" >
                                    <Movie 
                                        key={movie.id} 
                                        image={movie.image} 
                                        // altImage={defIm} 
                                        name={movie.title}
                                        availability={movie.availability}
                                        genres={movie.genres}
                                        rating={movie.rating}
                                        description={movie.description}
                                    />
                                </div>
                           // </Link>
                        )
                    })
                }

            </div>
         </div></div>
    )

}

export default Home;
