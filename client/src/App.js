import * as React from "react";
import { useEffect, useSelector } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, NavLink, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import FormMovie from "./components/Forms/FormMovie";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./components/Home/Home";
import Slider from "./components/Slider/Slider";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import SearchBar2 from "./components/SearchBar/SearcBar2";
import { getMovies } from "./actions";

import { ThemeProvider } from "@material-ui/core";
import Logo from "./assets/Logo.png";
import "./App.css";
import formGenre from "./components/Forms/FormGenre";
import theme from "./Utils/theme";
import ControlPanel from "./components/Admin/controlPanel";
import NavBar from "./components/NavBar/NavBar";

// function filterPosts(posts, query){
//   if (!query) {
//       return posts;
//   }

//   return posts.filter((post) => {
//       const postName = post.name.toLowerCase();
//       return postName.includes(query);
//   });
// };

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  // const user = useSelector(state => state.user);para ruta admin estado user
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('s');
  // const [searchQuery, setSearchQuery] = useState(query || '');
  // const filteredPosts = filterPosts(posts, searchQuery);

  // function fillInput(e){

  // }

  return (
    // <div className="Container">

    //   <div className="NavBar">

    //     <div className="Logo">
    //       <NavLink to='/' exact ><img src={Logo} alt="Logo App"/></NavLink>
    //     </div>

    /* <div className="SearchBar">

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ul className={searchQuery === '' ? 'listInvisible' : 'listVisible'}>
            {filteredPosts.map((post) => (
                <li key={post.id} className="" onClick={(e) =>fillInput(e)}> {post.name} </li>
            ))}
          </ul>
          
        </div>  */

    //  </div>
    //  <SearchBar2 />
    //  <div><NavLink to="/admin" >
    //           Administrador</NavLink></div>

    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route path="/admin/createMovie" component={FormMovie} />

          <Route path="/admin/createGenre" component={formGenre} />

          <Route exact path="/admin" component={ControlPanel} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
