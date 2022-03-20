import React from 'react';

import './logout_index.css';
import Login from './login.js';

function Logout(){
    return(
        <>
        <h1 className="logoutText"> You are now logged out!, log back in to review a module !</h1>
        <Login />
        </>
    )
}

export default Logout;