import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './searchPage_index.css';
import {Button} from "react-bootstrap";

function SearchPage(){
    return(
        <>
        <Header />
        <div className='searchpagewrap'>
        <h1 className='searchHeader'> Module search page</h1>
        <input input type="text" className='pagesearchbar' placeholder='search for a module'/>
        <Button className='searchButton'>search</Button>
        </div>
        <Footer />
        </>

    )

}

export default SearchPage;