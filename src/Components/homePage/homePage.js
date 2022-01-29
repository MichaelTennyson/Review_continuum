import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import './index.css';


function HomePage(){ 
    return(
        <>
        <Header />
        <div className="HomePage">
            <h1 className='Heading'>Welcome to Review Continuum!!</h1>
            <div>
                <button className='button'> click this button to view reviews</button>
            </div>
        </div>
        <Footer />
        </>
    )

}

export default HomePage;