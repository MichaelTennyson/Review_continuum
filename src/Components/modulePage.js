import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import { Card, Button } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, onValue} from "firebase/database";
import { useNavigate} from "react-router-dom";
import { app} from '../firebase-config';

function ModulePage(){
    const navigate = useNavigate();
    app.database().ref('modules').once('value', function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
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
                            {ChildSnapshot.val().module_name}
                            {ChildSnapshot.val().module_code}
                            {ChildSnapshot.val().ECTS}
                            {ChildSnapshot.val().module_length}
                            {snapshot.val().module_description}
                            {snapshot.val().module_school}
                            {snapshot.val().module_subject}
                            <Button className="moduleselection" onClick={navigate("/ModuleReviewForm")}> </Button>
                        </Card>
                    </Card>
                    <div className="moduleselection"></div>
            
                    <Footer />
                    </>
                );
            }
        );
    });


   
}

export default ModulePage;