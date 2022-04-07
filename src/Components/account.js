import React from "react";
import Header from './header.js';
import Footer from './footer.js'
import './account_index.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase-config';
import { useNavigate} from "react-router-dom";

function Account(){
    //variable that takes in the current user
    const [user] = useAuthState(auth);
    let navigate = useNavigate();
    //user validation if statement
    if(!user){
        navigate("/");
      }
      //return method
    return(
            <>
            <Header />
            <div class="container mt-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7">
                        <div class="card p-3 py-4">
                            <div class="text-center">  </div>
                            <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">User account</span>
                                <h5 class="mt-2 mb-0">{user?.email}</h5> <span>Student</span>
                                <div class="px-4 mt-1">
                                    <p class="fonts"> Fourth Year computer science student </p>
                                </div>
                                <ul class="social-list">
                                    <li><i class="fa fa-facebook"> Facebook</i></li>
                                    <li><i class="fa fa-dribbble"></i> Dribble</li>
                                    <li><i class="fa fa-instagram"> Instagram</i></li>
                                    <li><i class="fa fa-linkedin"> LinkedIn</i></li>
                                    <li><i class="fa fa-google"> Google</i></li>
                                </ul>
                                <div class="buttons"> <button class="btn btn-outline-primary px-4">Message</button> <button class="btn btn-primary px-4 ms-3">Contact</button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
         
    )
}

export default Account;