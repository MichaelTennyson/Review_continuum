import React, {useState, useEffect} from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './searchPage_index.css';
import {Button} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db, query, where, getDocs } from '../firebase-config';

function SearchPage(){
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    if(!user){
        navigate("/");
    }

    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    // the following use effect uses the fetch API that gets the details
    useEffect(() =>{
        const q = query(collection(db, "Modules"), where("module_name", "==", search));
        const querySnapshot = await getDocs(q);
        return querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            return snapshot.docs.map(doc => doc.data());
        });

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
                            <Button className='searchButton'>search</Button>   
                <div className='searchBack'>
                    {result.map((result, index) => (
                        <a href="/review" key={index} >
                           <div className='searchEntry' onClick={navigate('/modulePage')}>
                               {result}
                            </div> 

                        </a>
                    ))}
                </div>
                
            </div>
            
       <Footer />
       </>

    );

} 

export default SearchPage;