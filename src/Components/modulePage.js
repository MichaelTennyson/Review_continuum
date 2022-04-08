import Header from './header.js';
import Footer from './footer.js'
import ModuleData from './moduleData.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {realtimeDB, auth, db} from '../firebase-config';
import {  ref, onValue } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'firebase/database';
import { collection, getDocs } from "firebase/firestore"; 




function ModulePage(){
    let navigate = useNavigate();
    //if statement that checks if the page is being accessed by the user
    const [user] = useAuthState(auth);
    if(!user){
        navigate("/");
    }
   //use effect hook used to get data  
    return(
      <>
      <Header />
      <h1>Welcome to the module page</h1>
      <p> on this page, you will see the modules that you can currently upload reviews on</p>

      <Card className="module_card">
          <ModuleData />
      </Card>
      <div className="moduleselection"></div>
      <Footer />
      </>
    );
    

}
export default ModulePage;

