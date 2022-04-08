import './commentBox_index.css';
import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { Card } from "react-bootstrap";

function CommentCard(){
    const [viewedComment, setViewedComment] = useState([]);
    const commentCollectionRef = collection(db, "comment");

    useEffect(() => {
        const getComment= async () =>{
            const data = await getDocs(commentCollectionRef);
            setViewedComment(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getComment();
    }, 
    []); 

    return viewedComment && viewedComment.map((viewedComment) => {    
        //comment return html
        return(
        <>
            <Card className="comment_card">
                    <li>{viewedComment.comment}</li>
            </Card>
        </>
        );
    });

}

export default CommentCard;