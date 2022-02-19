import React from "react";
import Header from './header.js';
import Footer from './footer.js'
import './commentBox_index.css';

function Comment(){
    return(
        <>
        <Header />
        <div classname="comments">
        <h1> enter comment</h1>
        <textarea className="commentSection" placeholder="enter your comment here"></textarea>
        <button className='submitButton'> Submit</button>
        </div>
        <Footer />
        </>
    )

 }

 export default Comment;