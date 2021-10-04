import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png';

import SearchBar from './SearchBar/SearchBar';
import filterPosts from "../utils/filterPosts";
import fillInput from "../utils/fillInput";


const { search } = window.location;
const query = new URLSearchParams(search).get('s');

const NavBar = () => {
    
    const {movies} = useSelector(state => state)
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(movies, searchQuery);

    return(
        <div className="NavBar">

            <div className="Logo">
            <NavLink to='/' exact ><img src={Logo} alt="Logo App"/></NavLink>
            </div>
            
            <div> 
            <NavLink to='/admin/createMovie'> Prueba Admin crear Movie </NavLink>
            <NavLink to="/admin/createGenre" > Prueba Admin crear Genre</NavLink>
            </div>
            
            <div className="SearchBar">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ul className={searchQuery === '' ? 'listInvisible' : 'listVisible'}>
                {filteredPosts.map((post) => (
                    <li key={post.id} className="" onClick={(e) =>fillInput(e)}> {post.name} </li>
                ))}
            </ul>
            </div>

      </div>
)}

export default NavBar

