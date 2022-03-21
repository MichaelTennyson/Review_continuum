import React, {useState, useEffect} from 'react';
import './login_index.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { Form, Button, Card} from "react-bootstrap";
import {db, auth} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

function Login() 
{
    let navigate = useNavigate();

   //use states that pass data to firestore database
  const [newPassword, setPassword] = useState("");
  const [newEmail, setEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [user, setUser] = useState({});
  const usersCollectionRef = collection(db, "Users");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //register user method
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  //login method
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  //logout method
  const logout = async () => {
    await signOut(auth);
  };

 
  //onchange events hook the input made by the user and passes it to the use state
  return (
    <>
    <Card className='login_card'>
          <Card.Body>
              <h1 className='title'>Review Continuum</h1>
              <Form className="App">
                  <div className='registration'>
                      <h1>Registration</h1>
                      <input
                        placeholder="enter your Email address"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />
                        <input
                        placeholder=" enter your Password."
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        />

                      <Button onClick={createUser} className='Createuserbutton'>register</Button>
                  </div>


                  <div className="login">
                      <h1>Login</h1>
                      <input className='nameUserInput' placeholder="username" onChange={(event) => {
                          setUserName(event.target.value);
                      } } />

                      <input type="password" className='nameUserInput' placeholder="password" onChange={(event) => {
                          setPassword(event.target.value);
                      } } />
                  
                      <Button onClick={() => {navigate('/homePage')}} className='Createuserbutton'  >Login </Button>
                    
                  </div>
              </Form>
          </Card.Body>
      </Card>
      </>
  
    
  );

}

export default Login;