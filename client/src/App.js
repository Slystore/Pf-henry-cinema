import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Logo from './assets/Logo.png';
import Shadow from './assets/shadow.png';

import './App.css';

function App() {
  return (
    <div className="Container">

      <div className="NavBar">
        <div className="Logo">
        <NavLink to='/' exact ><img src={Logo} alt="Logo App"/></NavLink>
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
