import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './homePage_index.css';
import { Navigate } from 'react-router-dom'


function HomePage({authorized}){ 
    if(!authorized){
        return <Navigate to="/login" />;
    }

    return(
        <>
        <Header />
        <div className="HomePage">
            <h1 className='Heading'>Welcome to Review Continuum!!</h1>
        </div>
        <Footer />
        </>
    )

}

export default HomePage;