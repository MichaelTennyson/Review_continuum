import React ,{useState, useEffect} from 'react';
import './App.css';
import { Link  } from "react-router-dom";
import { Form, Button, Card} from "react-bootstrap";
import {db} from './firebase-config';

import { collection, addDoc, getDocs } from "firebase/firestore"; 

//use states that pass data to firestore database
  const [newFirstName, setFirstName] = useState("");
  const [newSurName, setSurName] = useState("");
  const [newUserName, setUserName] = useState("");
  const [newPassword, setPassword] = useState("");
  const [newEmail, setEmail] = useState("");
  const [Users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Users");

  // function to pass user details 
  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newFirstName, surname: newSurName, username: newUserName, password: newPassword, email: newEmail});
  };

  useEffect(() => {

    const getUsers = async () =>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
  }, []);


function App() {
 
  //onchange events hook the input made by the user and passes it to the use state
  return (
    <Card>
      <Card.Body>
        <Form className="App">
          <div className='registration'>
              <h1>Registration</h1>
              <input className='nameUserInput' placeholder="firstname" onChange={(event) => {
                setFirstName(event.target.value)}}/>

              <input className='nameUserInput' placeholder="surname" onChange={(event) => {
                setSurName(event.target.value)}}/>

              <input className='nameUserInput' placeholder="username" onChange={(event) => {
                setUserName(event.target.value)}}/>

              <input className='nameUserInput' placeholder="email" onChange={(event) => {
                setEmail(event.target.value)}}/>


              <input type="password" className='nameUserInput' placeholder="password" onChange={(event) => {
                setPassword(event.target.value)}}/>

              <Button onClick={createUser} className='Createuserbutton'>register</Button>
            </div>
              
          
            <div className="login">
              <h1>Login</h1>
              <input className='nameUserInput' placeholder="username" onChange={(event) => {
                setUserName(event.target.value)}}/>

              <input type="password" className='nameUserInput' placeholder="password" onChange={(event) => {
                setPassword(event.target.value)}}/>
              <Button onClick={createUser} className='Createuserbutton'>Login</Button>
              <Link to="./Components/homePage">Sign Up</Link>
            </div> 


          {Users.map((Users) => {
                    //the following code displays the user details from the firebase dataabase
                    return(
                      <div>
                          {""}
                          <p> firstname:{Users.firstname}</p>
                          <p> surname:{Users.surname}</p> 
                          <p>username:{Users.username}</p> 
                          <p>Email:{Users.Email}</p> 
                          <p> password: {Users.password}</p> 
                      </div>
                    ); 
                })}
        </Form>
      </Card.Body>  
    </Card>
  
    
  );

}

  export default App;