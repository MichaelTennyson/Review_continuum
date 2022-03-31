import React from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { getDatabase, ref, child, get } from "firebase/database";
import { Card, Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";

function ModulePage(){
    const UID ="6AIOqmVrlhgR1RIP5eqVSF1VL372"
    const navigate = useNavigate();
    const dbRef = ref(getDatabase());
    get(child(dbRef, `modules/${UID}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return(
                <>
                <Header />
                <h1 className="modulePageTitle">module page</h1>
                <p> here is a list of the modules that you can review</p>
                <Card className="moduleCard">
                    {snapshot.val()}
                </Card>
                <Button onClick={navigate("/ModuleReviewForm")}>review this module</Button>
                <Footer />
                </>
            );
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });

}

export default ModulePage;