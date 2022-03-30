import React from 'react';
import { NavLink } from "react-router-dom";
import './header_style.css';

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
                        <NavLink className="nav-link" to="/searchPage">
                            Search page
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/modulePage">
                            Module page
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/chat">
                           Chat
                        </NavLink>
                    </li>

                </ul>
            </div></>
        )
    }

export default Header;