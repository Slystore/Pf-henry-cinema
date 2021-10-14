//Components & styles
import App from './App';
import './index.css';
//React & Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
//Miscelaneous
import reportWebVitals from './reportWebVitals';
// enviroments variables and axios imports
import axios from 'axios';
import dotenv from 'dotenv';
const {REACT_APP_AWS_PORT} = process.env;

dotenv.config();
axios.defaults.baseURL = REACT_APP_AWS_PORT || "http://18.216.130.223:3001";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
