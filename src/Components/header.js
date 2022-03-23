import React from 'react';
import { NavLink } from "react-router-dom";
import './header_style.css';
import { Button } from "react-bootstrap";
import { app } from '../firebase-config';
function Header()
    {
     
        return(
            <>
            <div className="headerTitle">
                <h1>Review continuum. A module review web application</h1>
             </div>
            <div className='Headerdiv'>
                <ul className='Header'>
                    <li className='headerItem'>
                        <NavLink className="nav-link" to="/homePage">
                            Home Page
                            <span className="sr-only"></span>
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/account">
                            Account Page
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/ModuleReviewForm">
                            Review Form
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <Button className="nav-link" onClick={() => app.auth().signOut()}>
                            Logout
                        </Button>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/searchPage">
                            Search page
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/review">
                            Review
                        </NavLink>
                    </li>

                </ul>
            </div></>
        )
    }

export default Header;