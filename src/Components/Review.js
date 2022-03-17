import React from 'react';
import Header from './header.js';
import Footer from './footer.js'
import './review_index.css';
import Comment from './commentBox.js';

function Review(){

    return(
        <>
        <Header />
        <h1> Review page</h1>
        <div className='review'>
            <label className='reviewQ'>General description of your experience with the module</label>
            <p>It was great</p>

            <label className='reviewQ'>What do you think of the lecturers teaching</label>
            <p>It was great</p>

            <label className='reviewQ'>How were the module contents taught?</label>
            <p>It was great</p>

            <label className='reviewQ'>How did you feel about the assessments</label>
            <p>It was great</p>

            <label className='reviewQ'>How could teaching be improved</label>
            <p>It was great</p>

            <label className='reviewQ'>How could assessments be  improved</label>
            <p>It was great</p>

            <label className='reviewQ'>what did you think of the workload of this module</label>
            <p>It was great</p>
            <Comment />

        </div>
        <Footer />
        </>
    )

}

export default Review;