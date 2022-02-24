import {React} from 'react';
import  {BrowserRouter as Router, Route, Routes}  from "react-router-dom";
import ReactDOM from "react-dom";
import Header from './header.jsx';
import  Account from './account.jsx';
import  HomePage from './homePage.jsx';
import  ModuleReviewForm from './ModuleReviewForm.jsx';
import  Logout from './logout.jsx';
import  SearchPage from './searchPage.jsx';
  


ReactDOM.render(
    <Router>
      <Header/>
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ModuleReviewForm" element={<Logout />} />
        <Route path="/logout" element={<ModuleReviewForm />} />
        <Route path="/searchpage" element={<SearchPage />}></Route>
      </Routes>
    </Router>
);


  