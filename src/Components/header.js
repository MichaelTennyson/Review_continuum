import React from 'react';
import { NavLink } from "react-router-dom";
import './header_style.css';
import { LinkTab, Tabs} from "react-bootstrap";

function Header()
    {
     
        return(
            <>
            
            <div className="headerTitle">
                <h1>Review continuum. A module review web application</h1>
             </div>
            <div className='Headerdiv'>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="Page One" href="/homePage" />
                <LinkTab label="Page Two" href="/account" />
                <LinkTab label="Page Three" href="/ModuleReviewForm"/>
                <LinkTab label="Page One" href="/searchPage" />
                <LinkTab label="Page Two" href="/modulePage" />
                <LinkTab label="Page Three" href="/chat" />
            </Tabs>
            </div></>
        )
    }

export default Header;