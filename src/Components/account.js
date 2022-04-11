import React from "react";
import Header from './header.js';
import Footer from './footer.js'
import './account_index.css';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase-config';
import { useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
import {
    signOut
  } from "firebase/auth";


function Account(){
    //variable that takes in the current user
    const [user] = useAuthState(auth);
    let navigate = useNavigate();
    //user validation if statement
    if(!user){
        navigate("/");
      }
      //logout method
    const logout = async () => {
        await signOut(auth);
    };
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
                                    <li><a class="fa fa-facebook" href="https://www.facebook.com/"> Facebook</a></li>
                                    <li><a class="fa fa-dribbble" href="https://www.twitter.com/"></a> Twitter</li>
                                    <li><a class="fa fa-instagram" href="https://www.instagram.com/"> Instagram</a></li>
                                    <li><a class="fa fa-linkedin" href="https://www.linkedin.com/"> LinkedIn</a></li>
                                    <li><a class="fa fa-google" href="https://www.google.com/"> Google</a></li>
                                </ul>
                                <div class="buttons">  <Button className="button" onClick={logout}> Sign Out </Button> <Button className="button">Message</Button> <Button className="button">Contact</Button> </div>
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