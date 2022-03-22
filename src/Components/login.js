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

function Login() 
{
    let navigate = useNavigate();

   //use states that pass data to firestore database
  const [newPassword, setPassword] = useState("");
  const [newEmail, setEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [user, setUser] = useState({});
  
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
          <Card.Body className='body'>
              <h1 className='title'>Review Continuum</h1>
              <Form className="App">
                  <div className='registration'>
                      <h1>Registration</h1>
                      <input
                        placeholder="enter your Email address"
                        className='nameUserInput'
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />
                        <input
                        placeholder=" enter your Password."
                        className='nameUserInput'
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        />
                      <Button onClick={register} className='Createuserbutton'>register</Button>
                  </div>

                  <div className="login">
                      <h1>Login</h1>
                      <input className='nameUserInput' placeholder="email" onChange={(event) => {
                          setloginEmail(event.target.value);
                      } } />

                      <input type="password" className='nameUserInput' placeholder="password" onChange={(event) => {
                          setloginPassword(event.target.value);
                      } } />
                  
                      <Button onClick={login} className='Createuserbutton'  >Login </Button>
                    
                  </div>

                  <h4> User Logged In: </h4>
                    {user?.email}

                  <button onClick={logout}> Sign Out </button>
              </Form>
          </Card.Body>
      </Card>
      </>
  
    
  );

}

export default Login;