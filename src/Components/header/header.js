import React from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

function Header(){
     
    return(
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
        </div>
    )
}

export default Header;