import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {Header} from 'header.js';
import  {Account} from 'account.js';
import  {HomePage} from 'homePage.js';
import  {ModuleReviewForm} from 'ModuleReviewForm.js';
import  {Logout} from 'accountlogout.js';
import  {SearchPage} from 'searchPage.js';
   
  ReactDOM.render(
    <Router>
      <Header />
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ModuleReviewForm" element={<Logout />} />
        <Route path="/logout" element={<ModuleReviewForm />} />
        <Route path="/searchpage" element={<SearchPage />}></Route>
      </Routes>
    </Router>
  );


  