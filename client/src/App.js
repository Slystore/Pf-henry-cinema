import * as React from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import ControlPanel from "./components/Admin/controlPanel.jsx";
import MovieDetail from './components/MovieDetail/MovieDetail.jsx';
import FormGenre from './components/Forms/FormGenre.jsx';
import FormMovie from './components/Forms/FormMovie.jsx';
import PageNotFound from './components/404/PageNotFound.jsx';
import HomeView from './views/HomeView.js';

import { getAll } from './actions/index.js';

function App() {

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch(getAll())  
  }, [dispatch])

  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          
          <Route exact path="/admin" component={ControlPanel} />
          <Route exact path= "/admin/createMovie" component={FormMovie} /> 
          <Route exact path= "/admin/createGenre" component={FormGenre} />
          <Route exact path= "/404" component={PageNotFound} />
        </Switch> 
      </Router>
    </div>
    );
  }
  
  export default App;