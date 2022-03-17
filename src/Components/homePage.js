import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './homePage_index.css';


function HomePage(){ 
    return(
        <>
        <Header />
        <div className="HomePage">
            <h1 className='Heading'>Welcome to Review Continuum!!</h1>
            <p className='paragraph1'> on this website, you can search for modules, review modules, comment under modules and also chat with others on the modules</p>
        </div>
        <Footer />
        </>
    )

}

export default HomePage;