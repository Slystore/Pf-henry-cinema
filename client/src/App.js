import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import ControlPanel from "./components/Admin/controlPanel.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
// import FormGenre from "./components/Forms/FormGenre.jsx";
import FormMovie from "./components/Forms/FormMovie.jsx";
import PageNotFound from './components/404/PageNotFound.jsx';
import HomeView from "./views/HomeView.js";

import { getAll } from "./actions/index.js";
import FormSingUp from "./components/Forms/FormsSingUp/FormSingUp.jsx";
import ShoppingCart from './components/ShoppingCart/ShoppingCart'



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    // dispatch(getMovies())
    // dispatch(getAllUsers())
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
          <Route exact path= "/shoppingCart" component={ShoppingCart} /> 
          {/* <Route path="/admin/createGenre" component={FormGenre} /> */}
          <Route exact path= "/404" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
    );
  }
  
  export default App;