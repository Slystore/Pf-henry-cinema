import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/Movie'
import { useSelector, useDispatch } from 'react-redux';
// import { moviesMockUp } from '../../../../api/src/utils/mockups/movies';
import { filterGenre, getGenres, movieAvailability } from '../../actions';
import './Home.css'
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function Home() {
    const dispatch = useDispatch();
    const allMovies = useSelector(state => state.movies);
    const allGenres = useSelector(state => state.genres)
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);
    function handleAvailability(e) {
        e.preventDefault()
        dispatch(movieAvailability(e.target.value))
    }
    function handleFilterGenre(e) {
        e.preventDefault()
        dispatch(filterGenre(e.target.value))
    }
 
   return(
   <div>
        <NavBar />
     <div>
           <select onChange={el => handleAvailability(el)} className="" >
    <option value='default'>Disponibilidad</option>
    <option value='true'>En Cartelera</option>
    <option value='false'>Proximamente</option>
    </select>
      <select onChange={e => handleFilterGenre(e)} className="">
      <option value='All'>Géneros</option>
      {allGenres && allGenres.map((genre) => {

          return <option key={genre.id} value={genre.name}>{genre.name}</option>
      })}
  </select>
  </div>
        <div className="MoviesContainer">
          {
                allMovies && allMovies.map((movie) => {
                    return ( 
                    <Link to={'/movie/' + movie.id}>
                        <div className="Movie" >
                        <Movie key={movie.id} image={movie.image} name={movie.title}
                                    availability={movie.availability}
                                    genre={movie.genres}
                                    rating={movie.rating}  />
                        </div>
                    </Link>
                    )
                })
            }

        </div>
        <div className="Footer">

<Footer />

</div>
        </div>
    )
}




