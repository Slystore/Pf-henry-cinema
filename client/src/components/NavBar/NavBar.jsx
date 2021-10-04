import React from "react";
import { NavLink } from "react-router-dom";
import Slider from '../Slider/Slider';
import SearchBar2 from '../SearchBar/SearcBar2';
import Logo from '../../assets/Logo.png';
function NavBar() {
  return (
    <nav className="Container">
        <div className="NavBar">
        <div><NavLink to="/admin" >
          Administrador</NavLink></div>
  <div className="Logo">
    <NavLink to='/' exact ><img src={Logo} alt="Logo App"/></NavLink>
    </div>
    <div className="SearchBar">
 <SearchBar2 />
 </div>
  </div>
      <div className="SliderPrincipal">
          <Slider /> </div>
  <div className="Title">TODAS LAS PELICULAS</div>
  <div className="SliderSecondary"></div>
  
    </nav>
  );
}

export default NavBar;