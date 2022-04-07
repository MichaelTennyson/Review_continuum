import './commentBox_index.css';
import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Card } from "react-bootstrap";

function Comment(){
    const [comment, setComment] = useState("");
    const commentCollectionRef = collection(db, "comment");

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


    return comment && comment.map((comment) => {    
        //comment return html
        <>
        <div classname="comments">
        <h1> enter comment</h1>
        <textarea className="commentSection" placeholder="enter your comment here"  onChange={(event) => {
                            setComment(event.target.value); } }></textarea>

        <button className='submitButton' onClick={uploadComment}> Submit</button>
        </div>
        </>
        return(
            <Card className="comment_card">
                    <p>{comment.Comment}</p>
            </Card>
        );
    });

 }

 export default Comment;