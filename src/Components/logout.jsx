import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx'
import './logout_index.css';

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