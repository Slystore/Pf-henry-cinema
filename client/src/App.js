import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ControlPanel from "./components/Admin/controlPanel.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import FormGenre from "./components/Forms/FormGenre.jsx";
import FormMovie from "./components/Forms/FormMovie.jsx";
import HomeView from "./views/HomeView.js";

import { getAll } from "./actions/index.js";
import FormSingUp from "./components/Forms/FormSingUp.jsx";
import FormSingIn from "./components/Forms/FormSingIn.jsx";
import { getAllUsers } from "./actions/Users/users-actions.js";

// import NavBar from './components/NavBar/NavBar.jsx';
// import Slider from './components/Slider/Slider.jsx';
// import Movie from './components/Movie/Movie.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllUsers())
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route exact path="/admin" component={ControlPanel} />
          <Route exact path= "/login" component = {FormSingIn}/>
          <Route exact path = '/login/singUp' component = {FormSingUp}/>
          <Route path="/admin/createMovie" component={FormMovie} />
          <Route path="/admin/createGenre" component={FormGenre} />
        </Switch>
      </Router>
    </div>  
  );
}

export default App;
