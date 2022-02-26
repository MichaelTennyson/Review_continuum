import React from 'react';
import { NavLink } from "react-router-dom";
import './header_style.css';
import headerIndex from './header_index';
function Header()
    {
     
        return(
            <><headerIndex />
            <div className='Headerdiv'>
                <ul className='Header'>
                    <li className='headerItem'>
                        <NavLink className="nav-link" to="/homePage">
                            Home
                            <span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/account">
                            Account
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/ModuleReviewForm">
                            make a review
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/logout">
                            logout
                        </NavLink>
                    </li>
                    <li className="headerItem">
                        <NavLink className="nav-link" to="/searchPage">
                            search page
                        </NavLink>
                    </li>

                </ul>
            </div></>
        )
    }

export default Header;