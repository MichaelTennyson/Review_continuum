import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate} from "react-router-dom";
import {db} from '../firebase-config';
import {  collection, query, getDocs } from "firebase/firestore";


function ModulePage(){
    const q = query(collection(db, "Modules"));
    const navigate = useNavigate();
     const fetchData = async () =>{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console log to test if data if being fetched
            
        });
    fetchData();
        return(
            <>
            <Header />
            <h1>Welcome to the module page</h1>
            <p> on this page, yopu will see the modules that you can currently upload reviews on</p>
            <Card className="module_card">
                <h2>Module list</h2>
                <p>{querySnapshot.val()}</p>
                <Button className="moduleselection" onClick={navigate("/ModuleReviewForm")}> </Button>
            </Card>
            <div className="moduleselection"></div>
    
            <Footer />
            </>
        );
    }

      


}

export default ModulePage;