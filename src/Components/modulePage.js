import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, get } from "firebase/database";

function ModulePage(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `modules/`)).then((snapshot) => {
        if (snapshot.exists()) {
             console.log(snapshot.val());
             return(
                <>
                <Header />

                <Card>
                    {snapshot.val().module_name}
                    {snapshot.val().module_code}
                    {snapshot.val().ECTS}
                    {snapshot.val().module_length}
                    {snapshot.val().module_description}
                    {snapshot.val().module_school}
                    {snapshot.val().module_subject}
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