import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Header,
    Account,
    HomePage,
    ModuleReviewForm, 
    Logout,
    SearchPage,
  } from "./Components";
  
function HeaderLinks(){
  return(
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

}

export default HeaderLinks;
  