import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React, {useEffect, initialize} from 'react';
import { useNavigate} from "react-router-dom";
import {realtimeDB, auth } from '../firebase-config';
import { getDatabase, ref, onValue } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import { render } from '@testing-library/react';


function ModulePage(){
    let navigate = useNavigate();
    //if statement that checks if the page is being accessed by the user
    const [user] = useAuthState(auth);
    if(!user){
        navigate("/");
    }
   //function to get the data
  const getData = () => {
    const data = ref(realtimeDB, 'Modules') 
    onValue(data, (snapshot) => {
        return(
            <>
            <Header />
            <h1>Welcome to the module page</h1>
            <p> on this page, yopu will see the modules that you can currently upload reviews on</p>
            <Card className="module_card">
                <h2>Module list</h2>
                <p>{snapshot.val()}</p>
                <Button className="moduleselection" onClick={navigate("/ModuleReviewForm")}> </Button>
            </Card>
            <div className="moduleselection"></div>
    
            <Footer />
            </>
        );
    })
  }
  initialize = true
  useEffect(() => {
    getData();
  }, [initialize])

    

}
export default ModulePage;