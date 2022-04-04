import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Card } from "react-bootstrap";

function PastReviews(){
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
      {review.map((review) => {
        //the following code displays the past reviews details from the firebase dataabase
        return(
            <><Header /><Card>
                {""}
                <label className='reviewQ'>General description of your experience with the module</label>
                

                <label className='reviewQ'>What do you think of the lecturers teaching</label>
                

                <label className='reviewQ'>How were the module contents taught?</label>
                

                <label className='reviewQ'>How did you feel about the assessments</label>
                

                <label className='reviewQ'>How could teaching be improved</label>
              

                <label className='reviewQ'>How could assessments be  improved</label>
                

                <label className='reviewQ'>what did you think of the workload of this module</label>
           

                <label className='reviewQ'>give some extra feedback</label>

                <p>{review.q1}</p>
                <p>{review.q2}</p>
                <p>{review.q3}</p>
                <p>{review.q4}</p>
                <p>{review.q5}</p>
                <p>{review.q6}</p>
                <p>{review.q7}</p>
                <p>{review.q8}</p>
            </Card><Footer /></>
        ); 
    })}
}


export default PastReviews;