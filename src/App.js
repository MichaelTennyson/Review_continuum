import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './App.css';

function App() {
  const [firstnameReg, setFirstNameReg] = useState('');
  const [surnameReg, setSurNameReg] = useState('');
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState("");

  let navigate = useNavigate();


  const register = () => {
    Axios.post('http://localhost:5000/register', {FirstName: firstnameReg, SurName: surnameReg,  Username: usernameReg, Password: passwordReg}).then((response) => {
        if(response.data.message){
          setLoginStatus(response.data.message);
        }else{
          setLoginStatus(response.data[0].username);
        }
    });
  };

  const login = () => {
    Axios.post("http://localhost:5000/login", {Username: username, Password: password}).then((response) => {
        console.log(response.data);
    });
  };


  return (
    <>
      <h1>Review Continuum</h1>
      <div className='App'>
        <div className='registration'>
          <h1>Registration</h1>

          <div className="name-wrap">
            <label className='Heading'>First name:</label>
            <input type="text" className='Fname' placeholder='Name e.g. John' onChange={(e) => { setFirstNameReg(e.target.value); } }></input>
            <label className='Heading'>Surname:</label>
            <input type="text" className='Sname' placeholder='SurName e.g. Doe' onChange={(e) => { setSurNameReg(e.target.value); } }></input>
          </div>

          <div className="user-wrap">
            <label className='Heading'>Username:</label>
            <input type="text" className='username' placeholder='Username eg. C12345678' onChange={(e) => { setUsernameReg(e.target.value); } }>
            </input>
            <label className='Heading'>Password:</label>
            <input type="password" className='password' placeholder='password e.g. dhVP109..' onChange={(e) => { setPasswordReg(e.target.value); } } />
            <button className='button1' onClick={register}>Register</button>
          </div>
          
        </div>

        <div className='login'>
          <h1>Login</h1>
          <input type="text" className='loginUsername' placeholder='Username..' onChange={(e) => { setUsername(e.target.value); } } />
          <input type="password" className='loginPassword' placeholder='Password..' onChange={(e) => { setPassword(e.target.value); } } />
            <button className='button2' onClick={login}>Login</button> 
            <button className='TestButton' onClick={() => {
              navigate("/HomePage")
            }}> TEST BUTTON</button>
        </div>
          <h1>{loginStatus}</h1>
      </div>
    </>
  ); 
}

export default App;
