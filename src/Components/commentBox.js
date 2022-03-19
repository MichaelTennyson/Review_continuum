import React from "react";
import Header from './header.js';
import Footer from './footer.js'
import './commentBox_index.css';
import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

function Comment(){
    const [comment, setComment] = useState("");
    const commentCollectionRef = collection(db, "review");

    const uploadComment= async () => {
        await addDoc(commentCollectionRef, {cooment:comment});
      };

    useEffect(() => {
        const getComment= async () =>{
            const data = await getDocs(commentCollectionRef);
            setComment(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getComment();
    }, 
    []); 


    return(
        <>
        <div classname="comments">
        <h1> enter comment</h1>
        <textarea className="commentSection" placeholder="enter your comment here"  onChange={(event) => {
                            setComment(event.target.value); } }></textarea>

        <button className='submitButton' onClick={uploadComment}> Submit</button>
        </div>
        </>
    )

 }

 export default Comment;