import * as React from 'react';
import {useEffect}from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ControlPanel from "./components/Admin/controlPanel";
import MovieDetail from './components/MovieDetail/MovieDetail';
import FormGenre from './components/Forms/FormGenre';
import FormMovie from './components/Forms/FormMovie';
import HomeView from './views/HomeView';

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
          <Route exact path="/movie/:id" component={MovieDetail} />
          
          <Route exact path="/admin" component={ControlPanel} />
          <Route path= "/admin/createMovie" component={FormMovie} /> 
          <Route path= "/admin/createGenre" component={FormGenre} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;