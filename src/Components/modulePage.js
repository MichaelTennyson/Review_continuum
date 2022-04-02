import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { render } from '@testing-library/react';
import { useNavigate} from "react-router-dom";

function ModulePage(){
    const dbRef = ref(getDatabase());
    let navigate = useNavigate();
    get(child(dbRef, `modules`)).then((snapshot) => {
        if (snapshot.exists()) {
            render();{
            return(
                <>
                <Header />
                <h1>Welcome to the module page</h1>
                <p> on this page, yopu will see the modules that you can currently upload reviews on</p>
                <Card className="module_card">
                    {snapshot.val().module_name}
                    {snapshot.val().module_code}
                    {snapshot.val().ECTS}
                    {snapshot.val().module_length}
                    {snapshot.val().module_description}
                    {snapshot.val().module_school}
                    {snapshot.val().module_subject}
                    <Button className="moduleselection" onClick={navigate("/ModuleReviewForm")}> </Button>
                </Card>
                <div className="moduleselection"></div>
        
                <Footer />
                </>
            );
            }  
        } else {
        console.log("No data available");
         }
    }).catch((error) => {
        console.error(error);
    });

}

export default ModulePage;