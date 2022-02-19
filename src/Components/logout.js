import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js'
import './index.css';

function Logout(){
    return(
        <>
        <Header />
        <h1 className="logoutText"> You are now logged out!</h1>
        <Footer />
        </>
    )
}

export default Logout;