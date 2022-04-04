import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useNavigate} from "react-router-dom";


function ModulePage(){
    const navigate = useNavigate();
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Modules/")).then((snapshot) => {
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

    }).catch((error) => {
    console.error(error);
    });


   
}

export default ModulePage;