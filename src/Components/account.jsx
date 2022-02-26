import React from "react";
import Header from './header.jsx';
import Footer from './footer.jsx'
import './account_index.css';

function Account(){
    return(
            <>
            <Header />
            <div className="account">
             <h1 className="accountUsername">C18302166</h1>
             <span>Student</span>
             <div className="module_reviews_done">
                  <h2 clasname="user_modules_completed_names"> Modules you have reviewed</h2>
                   <div className="module1"> DevOps</div>
                   <div className="module2"> Databases 2</div>
             </div>
            </div>
        <Footer />
        </>
    )
}

export default Account;