import * as React from 'react';
import {useEffect}from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import MovieDetail from './components/MovieDetail/MovieDetail';
import GenreForm from './views/GenreForm';
import MovieForm from './views/MovieForm';
import HomeView from './views/HomeView';
import ControlPanel from "./components/Admin/controlPanel";

import { getAll } from './actions';

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
          <Route exact path="/:id" component={MovieDetail} />
          <Route path= "/admin/createMovie" component={MovieForm} /> 
          <Route path= "/admin/createGenre" component={GenreForm} />
          <Route exact path="/admin" component={ControlPanel} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;