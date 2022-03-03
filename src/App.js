import './App,css';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Components/login";
import HomePage from "./Components/homePage"


function App(){
    return(
        <Router>
            <Switch>
                <Router exact path="/login" component={Login}/>
                <Router exact path="/homePage" component={() => <HomePage authorized={false} />}/>
            </Switch>
        </Router>
    );

}

export default App;