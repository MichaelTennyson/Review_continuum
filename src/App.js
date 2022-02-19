import React ,{useState, useEffect} from 'react';
import './App.css';
import {db, auth} from './firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


function App() {
  //use states for authentication
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  

  //asynchrnois functions to pass data
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  const logout = async () => {
    await signOut(auth);
  };

  //onchange events hook the input made by the user and passes it to the use state
  return (
    <div className="App">
      <div className='registration'>
        <h3> Register User </h3>
        <input
          className='nameUserInput'
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          } } />
        <input
          className='nameUserInput'
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          } } />

        <button onClick={register}> Create User</button>
      </div>
      
      <div className='login'>
          <h3> Login </h3>
          <input
            className='nameUserInput'
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            } } />
          <input
            className='nameUserInput'
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            } } />

          <button onClick={login}> Login</button>
      </div>
        
        <h4> User Logged In: </h4>
        {user?.email}

        <button onClick={logout}> Sign Out </button>     
    </div>
  );

}

  export default App;