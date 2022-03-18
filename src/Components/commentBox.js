import React from "react";
import Header from './header.js';
import Footer from './footer.js'
import './commentBox_index.css';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

function Comment(){
    return(
        <>
        <div classname="comments">
        <h1> enter comment</h1>
        <textarea className="commentSection" placeholder="enter your comment here"></textarea>
        <button className='submitButton'> Submit</button>
        </div>
        </>
    )

 }

 export default Comment;