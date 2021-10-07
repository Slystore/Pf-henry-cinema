import { createStore, applyMiddleware, compose } from "redux";
import combineReducer from "./combineReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;