import './commentBox_index.css';
import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Card } from "react-bootstrap";
import CommentCard from './commentCard';

function Comment(){
    const [comment, setComment] = useState("");
    const [viewedComment, setViewedComment] = useState([]);
    const commentCollectionRef = collection(db, "comment");

    const uploadComment= async () => {
        await addDoc(commentCollectionRef, {comment:comment});
      };

    useEffect(() => {
        const getComment= async () =>{
            const data = await getDocs(commentCollectionRef);
            setViewedComment(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getComment();
    }, 
    []); 
        //comment return html
        return(
        <>
            <div classname="comments">
            <h1> enter comment</h1>
            <input type="text" className="commentSection" placeholder="enter your comment here"  onChange={(event) => {
                                setComment(event.target.value); } }></input>

            <button className='submitButton' onClick={uploadComment}> Submit</button>
            </div>
            <CommentCard />
        </>
        );

 }

 export default Comment;