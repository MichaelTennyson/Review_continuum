import React, {useState} from 'react';
import './login_index.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import { Form, Button, Card} from "react-bootstrap";
import { auth } from '../firebase-config';
import { Alert } from 'bootstrap';

function Login() {
  let navigate = useNavigate();

   //use states that pass data to firestore database
  const [newPassword, setPassword] = useState("");
  const [newEmail, setEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [user, setUser] = useState({});
  
  //on auth state change method that sets the user to the current user logged in
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  //register user method
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        newEmail,
        newPassword
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
      navigate("/homePage")
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
    <body>
    <Card className='login_card'>
          <Card.Body className='body'>
              <Form className="Login">
              <h1 className='title'>Review Continuum</h1>
                  <div className='registration'>
                      <h1>Registration</h1>
                      <input
                        placeholder="enter your Email address e.g C12345678@mytudublin.ie"
                        type="email"
                        className='nameUserInput'
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />
                        <input
                        placeholder=" enter your Password."
                        type="password"
                        className='nameUserInput'
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        />
                      <Button onClick={register} className='Createuserbutton'>register</Button>
                  </div>

                  <div className="login">
                      <h1>Login</h1>
                      <input className='nameUserInput' placeholder=" enter your email" onChange={(event) => {
                          setloginEmail(event.target.value);
                      } } />

                      <input type="password" className='nameUserInput' placeholder="enter your password" onChange={(event) => {
                          setloginPassword(event.target.value);
                      } } />
                  
                      <Button onClick={login} className='Createuserbutton'  >Login </Button>
                    
                  </div>
              </Form>
          </Card.Body>
      </Card>
      </body>
      </>
  
    
  );

}

export default Login;