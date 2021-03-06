import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {realtimeDB, auth, db} from '../firebase-config';
import {  ref, onValue } from 'firebase/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import 'firebase/database';
import { collection, getDocs, query, where  } from "firebase/firestore"; 

function ModuleDate(){

    //if statement that checks if the page is being accessed by the user
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    if(!user){
        navigate("/");
    }

    const Review = async () => {
      navigate("/ModuleReviewForm");
    };

   const [modules, setModules] = useState([]);
   const moduleCollectionRef = collection(db, "Modules");

   useEffect(() => {

    const getModule = async () =>{
        const data = await getDocs(moduleCollectionRef);
        setModules(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getModule();
  }, 
  []);

  return modules && modules.map((modules) => {    
    return(
      <>
          <div className="data_div" >
            <p>Module information</p>
            <label className='reviewQ'>module code</label>
            <p>{modules.module_code}</p>
            <label className='reviewQ'>module Name</label>
            <p>{modules.module_name}</p>
            <label className='reviewQ'>description</label>
            <p>{modules.module_description}</p>
            <label className='reviewQ'>ECTS credits</label>
            <p>{modules.ECTS}</p>
            <label className='reviewQ'>Duration of the module</label>
            <p>{modules.duration}</p>
            <label className='reviewQ'>Course the module is in</label>
            <p>{modules.course}</p>
            <Button className='review_button' onClick={Review} >review module</Button>
            <Button className='review_button' onClick={Query} >view reviews done on module</Button>
          </div>
      
      </>
    );

  });

}

export default ModuleDate;