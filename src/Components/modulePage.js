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

    }).catch((error) => {
    console.error(error);
    });


   
}

export default ModulePage;