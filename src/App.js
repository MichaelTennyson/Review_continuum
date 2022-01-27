import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';
import './index.css';

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState("");


  const register = () => {
    Axios.post('http://localhost3001/register', {Username: usernameReg, Password: passwordReg}).then((response) => {
        if(response.data.message){
          setLoginStatus(response.data.message);
        }else{
          setLoginStatus(response.data[0].username);
        }
    });
  };

  const login = () => {
    Axios.post('http://localhost3001/login', {Username: username, Password: password}).then((response) => {
        console.log(response.data);
    });
  };


  return (
    <><div className='App'>
        <div className='registration'>
          <h1>Registration</h1>
          <label>Username:</label>
          <input type="text" className='username' onChange={(e) => { setUsernameReg(e.target.value); } }>
          </input>
          <label>Password:</label>
          <input type="text" className='password' onChange={(e) => { setPasswordReg(e.target.value); } } />
          <button className='button1' onClick={register}>Register</button>
        </div>

      <div className='login'>
        <h1>Login</h1>
        <input type="text" className='loginUsername' placeholder='Username..' onChange={(e) => { setUsername(e.target.value); } } />
        <input type="password" className='loginPassword' placeholder='Password..' onChange={(e) => { setPassword(e.target.value); } } />
          <button className='button2' onClick={login}>Login</button> 
      </div>
        <h1>{loginStatus}</h1>
    </div>
    </>
  ); 
}

export default App;
