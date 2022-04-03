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
    get(child(dbRef, "modules/")).then((snapshot) => {
        return(
            <>
            <Header />
            <h1>Welcome to the module page</h1>
            <p> on this page, yopu will see the modules that you can currently upload reviews on</p>
            <Card>
                <div className="module_table_titles">
                    <p>Module name</p>
                    <p>Module code</p>
                    <p>module credits</p>
                    <p>module lengths</p>
                    <p>module decription</p>
                    <p>module school</p>
                    <p>module subject</p>
                </div>
                <Card className="module_card">
                    <p>{snapshot.val().module_name}</p>
                    <p>{snapshot.val().module_code}</p>
                    <p>{snapshot.val().ECTS}</p>
                    <p>{snapshot.val().module_length}</p>
                    <p>{snapshot.val().module_description}</p>
                    <p>{snapshot.val().module_school}</p>
                    <p>{snapshot.val().module_subject}</p>
                    <Button className="moduleselection" onClick={navigate("/ModuleReviewForm")}> </Button>
                </Card>
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