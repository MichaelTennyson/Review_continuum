import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './searchPage_index.css';
import {Button} from "react-bootstrap";

function SearchPage(){
    let navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    // the following use effect uses the fetch API that gets the details
    useEffect(() =>{
        if(search.length > 0){
            fetch('https://review-continuum-default-rtdb.europe-west1.firebasedatabase.app/modules.json').then(
                response => response.json
            ).then(responseData => {
                //search query set to lowercase
                setResult([]);
                let searchQuery = search.toLowerCase();
                //loops across the data in the JSON file
                for(const key in responseData){
                    //module variables is assigned the key and modoule name in lowercase
                    let module = responseData[key].module_name.toLowerCase();
                    if(module.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
                        setResult(prevResult => {
                            return[...prevResult, responseData[key].module_name]
                        })
                    }
                }
                //error checking
            }).catch(error =>{
                console.log(error);
            })
        }else{
            //if the value of the search result is not greater than 0
            setResult([]);
        }

    }, [search ])

    // html strucuture for the search page
    return(
        <>
            <Header />
            <div className='searchpagewrap'>
                <h1 className='searchHeader'> Module search page</h1>
                <input input type="text" className='pagesearchbar' placeholder='search for a module' onChange={(event) => {
                            setSearch(event.target.value); } }
                            />
                <div className='searchBack'>
                    {result.map((result, index) => (
                        <a href="/review" key={index} >
                           <div className='searchEntry' onClick={navigate('/modulePage')}>
                               {result}
                            </div> 

                        </a>
                    ))}
                </div>
                <Button className='searchButton'>search</Button>   
            </div>
            
       <Footer />
       </>

    );

} 

export default SearchPage;