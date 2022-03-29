import React from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { getDatabase, ref, child, get } from "firebase/database";

function ModulePage(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `modules/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return(
                <>
                <Header />
                <h1>module page</h1>
                <p> here is a list of the modules that you can review</p>
                <Card className="moduleCard">
                    {snapshot.val()}
                </Card>
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