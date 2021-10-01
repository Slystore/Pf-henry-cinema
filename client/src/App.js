import * as React from 'react';
import {useEffect}from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import FormMovie from './components/Forms/FormMovie';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';

import { getMovies } from './actions';

import { ThemeProvider } from '@material-ui/core';
import Logo from './assets/Logo.png';
import './App.css';
import formGenre from './components/Forms/FormGenre';


const posts = [
  { id: '1', 
    name: 'After Almas Perdidas',
    sinopsis: 'Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia, y también sobre la de Hardin, ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a desmoronarse, nada es como ella creía que sería. Nunca ha sentido algo así por nadie, pero empieza a cuestionarse si vale la pena. Antes el amor bastaba para mantenerlos juntos, pero ahora ya no está claro lo que dictan sus corazones... Con más de mil millones de impactos, After se ha convertido en el mayor fenómeno de la historia de la plataforma Wattpad.',
    img: './assets/moviesPosters/after_almas_perdidas.jpg'
   },
  { id: '2', name: 'Cry Macho' },
  { id: '3', name: 'Amenaza bajo el agua' },
  { id: '4', name: 'Sin tiempo para morir' },
  { id: '5', name: 'El imperio de los sentidos' },
  { id: '6', name: 'La casa oscura' },
  { id: '7', name: 'El prófugo' },
  { id: '8', name: 'Infidelidad mortal' },
  { id: '9', name: 'Los santos de la mafia' },
];

function filterPosts(posts, query){
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};


function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getMovies())
// }, [dispatch])

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  function fillInput(e){

  }
 

  return (
    <div className="Container">

      <div className="NavBar">

        <div className="Logo">
          <NavLink to='/' exact ><img src={Logo} alt="Logo App"/></NavLink>
        </div>
        <div> <NavLink to='/admin/createMovie' >
        Prueba Admin crear Movie</NavLink>
        <NavLink to="/admin/createGenre" >
            Prueba Admin crear Genre</NavLink></div>
        <div className="SearchBar">

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ul className={searchQuery === '' ? 'listInvisible' : 'listVisible'}>
            {filteredPosts.map((post) => (
                <li key={post.id} className="" onClick={(e) =>fillInput(e)}> {post.name} </li>
            ))}
          </ul>
          
        </div>

      </div>

      <div className="SliderPrincipal">
          <Slider />
      </div>

      <div className="Title">TODAS LAS PELICULAS</div>
      <div className="SliderSecondary">

      <ThemeProvider > 
        <div className="">
            
          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/:id" component={MovieDetail} />
          
          </Switch>
        
 
        </div>
      </ThemeProvider>
       <Switch>
     
       <Route exact path="/" component={Home} />
       <Route exact path="/:id" component={MovieDetail} />
      <Route path= "/admin/createMovie" component={FormMovie} /> 
      <Route path= "/admin/createGenre" component={formGenre} />
       </Switch>
    
     </div>
     </ThemeProvider>

       
      </div>

      {/* <div className="Title">PRÓXIMAMENTE</div>
      <div className="SliderSecondary">

        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        
      </div>

      <div className="Title">CINE EN CASA</div>
      <div className="SliderSecondary">
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
        
      </div> */}
      
      <div className="Footer">

        <Footer />

      </div>
      
    </div>
  );
}

export default App;
