import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './homePage_index.css';
import { Card, Button } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase-config';
import { useNavigate} from "react-router-dom";

import {
    signOut
  } from "firebase/auth";

function HomePage(){ 
  let navigate = useNavigate();
  const [user] = useAuthState(auth);

  if(!user){
    navigate("/");
  }

  //logout method
  const logout = async () => {
    await signOut(auth);
  };
    

    return(
        <>
        <Header />
        <Card className='homeCard'>
        <div className="HomePage">
            <h1 className='Heading'>Welcome to Review Continuum!!</h1>
            <p>{user?.email}</p>
            <p className='paragraph1'> on this website, you can search for modules, review modules, view reviews comment under modules and also chat with others on the modules</p>
            <p>there is a logout button below that you can press yo logout.</p>
            <Button className="button" onClick={logout}> Sign Out </Button>
            <p>Here are some recent reviews.</p>
            

        </div>
        </Card>
        <Footer />
        </>
    )

}

export default HomePage;