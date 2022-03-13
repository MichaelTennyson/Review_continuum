import React from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './logout_index.css';

function Logout(){
    return(
        <>
        <h1 className="logoutText"> You are now logged out!</h1>
        
        <Footer />
        </>
    )
}

export default Logout;