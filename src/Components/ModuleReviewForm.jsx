import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx'
import './review_index.css';

function ModuleReviewForm(){

    return(
        <>
        <Header />
        <h1> Review page</h1>
        <div className='review_form'>
            <label className='reviewQ'>General description of your experience with the module</label>
            <input type="text" className='TLDR' placeholder='General description'></input>
            <label className='reviewQ'>What do you think of the lecturers teaching</label>
            <input type="text" className='TLDR' placeholder='Did they teach well or not'></input>
            <label className='reviewQ'>How were the module contents taught?</label>
            <input type="text" className='TLDR' placeholder='how was the module taught to you?'></input>
            <label className='reviewQ'>How did you feel about the assessments</label>
            <input type="text" className='TLDR' placeholder='what did you think of the tests, quizes and assignments etc.'></input>
            <label className='reviewQ'>How could teaching be improved</label>
            <input type="text" className='TLDR' placeholder='Give tips on teaching methods'></input>
            <label className='reviewQ'>How could assessments be  improved</label>
            <input type="text" className='TLDR' placeholder='describe how assessments could be delivered in a better way'></input>
            <label className='reviewQ'>what did you think of the workload of this module</label>
            <input type="text" className='TLDR' placeholder='was the workload hard or easy to manage?'></input>
            <button className='submitButton'> Submit</button>

        </div>
        <Footer />
        </>
    )

}

export default ModuleReviewForm;