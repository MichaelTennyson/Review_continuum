import React from 'react';
import Footer from './footer.js'
import './logout_index.css';
import { useNavigate} from "react-router-dom";

function Logout(){
    let navigate = useNavigate();
    return(
        <>
        <h1 className="logoutText"> You are now logged out!</h1>
        <Button onClick={() => {navigate('/login')}} >return to login page </Button>
        <Footer />
        </>
    )
}

export default Logout;