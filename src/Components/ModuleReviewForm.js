import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Form, Button} from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase-config';
import { useNavigate} from "react-router-dom";

function ModuleReviewForm(){
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  if(!user){
    navigate("/");
  }

    const [q1, setq1] = useState("");
    const [q2, setq2] = useState("");
    const [q3, setq3] = useState("");
    const [q4, setq4] = useState("");
    const [q5, setq5] = useState("");
    const [q6, setq6] = useState("");
    const [q7, setq7] = useState("");
    const [q8, setq8] = useState("");
    const [review, setReview] = useState([]);
    const reviewCollectionRef = collection(db, "review");

    // function to pass user details 
  const uploadReview = async () => {
    await addDoc(reviewCollectionRef, {q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7,q8: q8});
  };

  //use effect hooks
  useEffect(() => {

    const getReview = async () =>{
        const data = await getDocs(reviewCollectionRef);
        setReview(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getReview();
  }, 
  []);

    return(
        <>
        <Header />
        <h1> Review page</h1>
        <Form>
            <div className='review_form'>
                <label className='reviewQ' >General description of your experience with the module</label>
                <input type="text" className='TLDR' placeholder='General description' onChange={(event) => {
                            setq1(event.target.value);
                        } }></input>

                <label className='reviewQ'>What do you think of the lecturers teaching</label>
                <input type="text" className='TLDR' placeholder='Did they teach well or not' onChange={(event) => {
                            setq2(event.target.value);
                        } }></input>

                <label className='reviewQ'>How were the module contents taught?</label>
                <input type="text" className='TLDR' placeholder='how was the module taught to you?' onChange={(event) => {
                            setq3(event.target.value);
                        } }></input>

                <label className='reviewQ'>How did you feel about the assessments</label>
                <input type="text" className='TLDR' placeholder='what did you think of the tests, quizes and assignments etc.' onChange={(event) => {
                            setq4(event.target.value);
                        } }></input>

                <label className='reviewQ'>How could teaching be improved</label>
                <input type="text" className='TLDR' placeholder='Give tips on teaching methods' onChange={(event) => {
                            setq5(event.target.value);
                        } }></input>
                <label className='reviewQ'>How could assessments be  improved</label>
                <input type="text" className='TLDR' placeholder='describe how assessments could be delivered in a better way' onChange={(event) => {
                            setq6(event.target.value);
                        } }></input>

                <label className='reviewQ'>what did you think of the workload of this module</label>
                <input type="text" className='TLDR' placeholder='was the workload hard or easy to manage?' onChange={(event) => {
                            setq7(event.target.value);
                        } }></input>

                <label className='reviewQ'>give some extra feedback</label>
                <input type="text" className='TLDR' placeholder='write about other things that you experienced in the module' onChange={(event) => {
                            setq8(event.target.value);
                        } }></input>
                < Button onClick={uploadReview}  className='submitButton'> Submit Review</Button>

            </div>
        </Form>
        <Footer />
        </>
    )

}

export default ModuleReviewForm;