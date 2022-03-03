import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './homePage_index.css';
import { Redirect } from 'react-router-dom'


function HomePage({authorized}){ 
    if(!authorized){
        return <Redirect to="/login" />;
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