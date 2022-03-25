import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './homePage_index.css';
import { Card } from "react-bootstrap";
import { getDatabase, ref, onValue} from "firebase/database";


function HomePage(){ 
    

    return(
        <>
        <Header />
        <Card className='homeCard'>
        <div className="HomePage">
            <h1 className='Heading'>Welcome to Review Continuum!!</h1>
            <p className='paragraph1'> on this website, you can search for modules, review modules, comment under modules and also chat with others on the modules</p>
            <p>there is a logout button below that you can press</p>
        </div>
        </Card>
        <Footer />
        </>
    )

}

export default HomePage;