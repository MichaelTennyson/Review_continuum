import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './homePage_index.css';


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