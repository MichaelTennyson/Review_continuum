import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Components/login.jsx";
import HomePage from "./Components/homePage.jsx"


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={Login}/>
                <Route exact path="/homePage" element={() => <HomePage authorized={false} />}/>
            </Routes>
        </Router>
    );

}

export default App;