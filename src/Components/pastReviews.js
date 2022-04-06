import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import {db, auth} from '../firebase-config';
import { collection, getDocs } from "firebase/firestore"; 
import { Card } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate} from "react-router-dom";

function PastReviews(){
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    if(!user){
        navigate("/");
    }
    const [review, setReview] = useState([]);
    const reviewCollectionRef = collection(db, "review");
    //this useEffect hooks contains an asynchronous function what fetches the dtata from firestore
    useEffect(() => {

        const getReview = async () =>{
            const data = await getDocs(reviewCollectionRef);
            setReview(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getReview();
    }, 
    []);

     //the following code displays the past reviews details from the firebase dataabase
     return review && review.map((review) => {    
    
     return(
     <>
     
     <Card className="Review_card">
     {""}
     <label className='reviewQ'>General description of your experience with the module</label>
     <p>{review.q1}</p>

     <label className='reviewQ'>What do you think of the lecturers teaching</label>
     <p>{review.q2}</p>

     <label className='reviewQ'>How were the module contents taught?</label>
     <p>{review.q3}</p>

     <label className='reviewQ'>How did you feel about the assessments</label>
     <p>{review.q4}</p>

     <label className='reviewQ'>How could teaching be improved</label>
     <p>{review.q5}</p>

     <label className='reviewQ'>How could assessments be  improved</label>
     <p>{review.q6}</p>

     <label className='reviewQ'>what did you think of the workload of this module</label>
     <p>{review.q7}</p>

     <label className='reviewQ'>give some extra feedback</label>
     <p>{review.q8}</p>
    </Card>
    
    </>
     );

});
    
        
}


export default PastReviews;