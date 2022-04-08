import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {realtimeDB, auth, app} from '../firebase-config';
import {  ref, onValue } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'firebase/database';




function ModulePage(){
    let navigate = useNavigate();
    //if statement that checks if the page is being accessed by the user
    const [user] = useAuthState(auth);
    if(!user){
        navigate("/");
    }
   //function to get the data
   const [moduleList, setModuleList] = useState();

  useEffect(() => {
    const moduleRef = app.database().ref("/Modules");
    moduleRef.on('value', (snapshot) => {
      const modules = snapshot.val();
      const moduleList= [];
      for (let id in modules) {
        moduleList.push({ id, ...modules[id] });
      }
      setModuleList(moduleList);
    });
  }, []);
  return(
    <>
    <Header />
    <h1>Welcome to the module page</h1>
    <p> on this page, you will see the modules that you can currently upload reviews on</p>

    <Card className="module_card">
        <h2>Module list</h2>
        <div>
          {moduleList? moduleList.map((modules, index) => <p modules={modules} key={index} />): ''}
        </div>
    </Card>
    <div className="moduleselection"></div>
    <Footer />
    </>
);

    

}
export default ModulePage;

