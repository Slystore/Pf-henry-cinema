import * as React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
// import FormGenre from "./components/Forms/FormGenre.jsx";
import FormMovie from "./components/Forms/FormMovie.jsx";
import PageNotFound from './components/404/PageNotFound.jsx';
import HomeView from "./views/HomeView.js";
import FormSingIn from "./components/Forms/FormSingIn.jsx";
// import { getAll } from "./redux/movies/moviesAction";
import {FormSingUp} from "./components/Forms/FormsSingUp/FormSingUp.jsx";
import FormEditMovie from "./components/Forms/FormEditMovie.jsx";
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import UserProfile from "./components/User-proflile/User-profile.jsx";
import CheckoutPage from './components/Order/CheckoutPage'
import PrevCheckoutPage from './components/Order/PrevCheckoutPage'

// import admin from "./components/Admin/admin.js";
import Users from "./components/Admin/pages/Users.js";
// import { getUsers } from "./redux/users/usersAction.js";
import userEdit from "./components/Admin/pages/userEdit.js";
import createGenre from "./components/Admin/pages/createGenre.js";
import Dashboard from "./components/Admin/pages/Dashboard.js";


function App() {
  // const estado = useSelector( state => state.moviesReducer)

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAll());
  //   // dispatch(getMovies())
  //   // dispatch(getAllUsers())
  // }, [dispatch]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          {/* <Route exact path="/admin" component={ControlPanel} /> */}
          <Route exact path= "/login" component = {FormSingIn}/>
          <Route exact path = '/login/singUp' component = {FormSingUp}/>
          <Route path="/admin/createMovie" component={FormMovie} />
          <Route exact path = '/admin/editMovie' component = {FormEditMovie}/>
          <Route exact path= "/shoppingCart" component={ShoppingCart} /> 
          <Route exact path= "/prevCheckoutPage" component={PrevCheckoutPage} /> 
          <Route exact path= "/checkoutPage" component={CheckoutPage} /> 
          <Route exact path = '/perfil' component={UserProfile}/>
          <Route exact path = '/admin/editMovie' component = {FormEditMovie}/>
          {/* <Route path="/admin/createGenre" component={FormGenre} /> */}
          <Route exact path= "*" component={PageNotFound} />
          {/* ------- aqui------- */}
          <Route exact path="/admin/panel" component={Dashboard} />
          <Route exact path="/admin/createMovie" component={FormMovie} />
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/users/update" component={userEdit} />
          <Route exact path="/admin/createGenre" component={createGenre} />
          {/* ---------aqui------------ */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;