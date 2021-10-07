import * as React from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import ControlPanel from "./components/Admin/controlPanel.jsx";
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import FormGenre from './components/Forms/FormGenre.jsx';
import FormMovie from './components/Forms/FormMovie.jsx';
import HomeView from './views/HomeView.js';

import { getAll } from './redux/movies/moviesAction';

// import NavBar from './components/NavBar/NavBar.jsx';
// import Slider from './components/Slider/Slider.jsx';
// import Movie from './components/Movie/Movie.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(getAll())  
  }, [dispatch])

  return (
    <div >
    
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          
          <Route exact path="/admin" component={ControlPanel} />
          <Route path= "/admin/createMovie" component={FormMovie} /> 
          <Route path= "/admin/createGenre" component={FormGenre} />
        </Switch> 
      
    </div>
    );
  }
  
  export default App;
  
  // <div className="Container">
  //   <NavBar />
  //   <div className="RenderContainer">

  //     <Slider />

  //     <div className="Movies">
  //       <Movie />
  //     </div>

  //   </div>

  //   <div className="Footer">
  //     <Footer />
  //   </div>
   
  // </div>