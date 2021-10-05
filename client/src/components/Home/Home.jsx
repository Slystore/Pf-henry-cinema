import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie'
import {filterGenre, movieAvailability} from '../../actions'
// import { moviesMockUp } from '../../../../api/src/utils/mockups/movies';


import './Home.css'




export default function Home() {
    const dispatch = useDispatch();
    const { movies } = useSelector(state => state)
    const {genres} = useSelector(state => state)
    const defIm = 'https://es.web.img3.acsta.net/c_310_420/pictures/21/06/14/11/47/2960546.jpg'
    // console.log(movies[0])
    function handleAvailability(e) {
        e.preventDefault()
        dispatch(movieAvailability(e.target.value))
    }
    function handleFilterGenre(e) {
        e.preventDefault()
        dispatch(filterGenre(e.target.value))
    }
    return (
        <div >
            <div>
           <select onChange={el => handleAvailability(el)} className="" >
             <option value='default'>Disponibilidad</option>
            <option value='true'>En Cartelera</option>
             <option value='false'>Proximamente</option>
             </select>
      <select onChange={e => handleFilterGenre(e)} className="">
              <option value='All'>Géneros</option>
             {genres && genres.map((genre) => {

              return <option key={genre.id} value={genre.name}>{genre.name}</option>
      })}
    </select>
             </div>
             <div className="MoviesContainer">
          {
                movies.map((movie) => {
                    // console.log(movie.image)
                    // console.log('este es el id que llega', movie.id)
                    // let URL = movie.img
                    // console.log(URL)
                    return ( 
                    <Link to={'/movie/' + movie.id}>
                        <div className="Movie" >
                        <Movie key={movie.id} image={movie.image} altImage={defIm} name={movie.title}
                                    availability={movie.availability}
                                    genre={movie.genre}
                                    rating={movie.rating}

                                        />
                        </div>
                    </Link>
                    )
                })
            }
    </div>
        </div>
    )
}

