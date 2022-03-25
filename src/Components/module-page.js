import React from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import Comment from './commentBox.js';
import {db} from '../firebase-config';

function ModulePage(){

    return(
        <>
        <Header />
        <div>
            
        </div>
        <Comment />
        <Footer />
        </>
    )

}

export default ModulePage;