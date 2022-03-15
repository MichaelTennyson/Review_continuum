import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './searchPage_index.css';
import {Button} from "react-bootstrap";

function SearchPage(){

    const [search, setSearch] = useState("");
    // the following use effect uses the fetch API that gets the details
    useEffect(() =>{
        if(value.length > 0){
            fetch('https://review-continuum-default-rtdb.europe-west1.firebasedatabase.app/modules.json').then(
                response => response.json
            ).then(responseData => {
                //search query set to lowercase
                let searchQuery = value.toLowerCase();
            })
        }

    }, [value] )

    // html strucuture for the search page
    return(
        <>
            <Header />
            <div className='searchpagewrap'>
                <h1 className='searchHeader'> Module search page</h1>
                <input input type="text" className='pagesearchbar' placeholder='search for a module' onChange={(event) => {
                            setSearch(event.target.value); } }
                            value={search}
                            />
                <div className='searchBack'>
                    <div className='searchEntry'>
                        This is a static placeholder
                    </div>
                    <div className='searchEntry'>
                        This is a static placeholder
                   </div>
                </div>   
            </div>
            <Button className='searchButton'>search</Button>
       <Footer />
       </>

    );

}

export default SearchPage;