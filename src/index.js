import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/login.js";
import Account from "./Components/account.js";
import Logout from "./Components/logout.js";
import SearchPage from "./Components/searchPage.js";
import ModuleReviewForm from "./Components/ModuleReviewForm.js";
import CommentBox from "./Components/commentBox.js";
import HomePage from "./Components/homePage.js";


ReactDOM.render(
  <>
  <Router>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/ModuleReviewForm' element={<ModuleReviewForm />} />
      <Route exact path='/commentBox' element={<CommentBox />} />
      <Route exact path='/homePage' element={<HomePage />} />
      <Route exact path='/logout' element={<Logout />} />
      <Route exact path='/account' element={<Account />} />
      <Route exact path='/searchPage' element={<SearchPage />} />
    </Routes>
  </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();