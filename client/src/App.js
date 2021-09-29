import * as React from 'react';
import { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './assets/Logo.png';
import Shadow from './assets/shadow.png';

import './App.css';
import SearchBar from './components/SearchBar';
// import Announcer from './components/SearchBar';

const posts = [
  { id: '1', name: 'After Almas Perdidas' },
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

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  function fillInput(e){

  }
  // className={
//     c === currentPage
//       ? "current-paginate-button"
//       : "paginate-button"
//   }

  return (
    <div className="Container">

      <div className="NavBar">
        <div className="Logo">
        <NavLink to='/' exact ><img src={Logo} alt="Logo App"/></NavLink>
        </div>
        <div className="SearchBar">
          {/* <Announcer
            message={`${filteredPosts.length} posts`}
          /> */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <ul className={searchQuery === '' ? 'listInvisible' : 'listVisible'}>
            {filteredPosts.map((post) => (
                <li key={post.id} className="" onClick={(e) =>fillInput(e)}> {post.name} </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="SliderPrincipal">

      </div>

      <div className="Title">ESTRENOS</div>
      <div className="SliderSecondary">
        
        <div className="Movie">
          <div className="MovieTitle">Nombre de la película</div>
          <div className="Shadow"><img src={Shadow} alt="Sombra del Poster" /></div>
        </div>
       
        
      </div>

      <div className="Title">PRÓXIMAMENTE</div>
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
        
      </div>
      
      <div className="Footer"></div>
      
    </div>
  );
}

export default App;
