import React from "react";
import Header from './header.js';
import Footer from './footer.js'
import './account_index.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase-config';
function Account(){
    const [user] = useAuthState(auth);
    return(
            <>
            <Header />
            <div className="account">
             <h1 className="accountUsername">{user?.email}</h1>
             <span>Student</span>
             <div className="module_reviews_done">
                  <p clasname="user_modules_completed_names"> Modules you have reviewed</p>
                   <div className="module1"> DevOps</div>
                   <div className="module2"> Databases 2</div>
             </div>
            </div>
            <Footer />
        </>
         
    )
}

export default Account;