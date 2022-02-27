import React from 'react';
import { NavLink } from "react-router-dom";
import './header_style.css';
function Header()
    {
     
        return(
            <>
            <div className='Headerdiv'>
                <ul className='Header'>
                    <li className='headerItem'>
                        <NavLink className="nav-link" to="/homePage">
                            Home Page
                            <span className="sr-only">(current)</span>
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
                        <NavLink className="nav-link" to="/logout">
                            Logout
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/searchPage">
                            Search page
                        </NavLink>
                    </li>

                </ul>
            </div></>
        )
    }

export default Header;