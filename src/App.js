import React ,{useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
import {db} from './firebase-config';
import { collection, getDocs, addDoc} from "firebase/firestore";

function App() {
  const [newFirstName, setFirstName] = useState("");
  const [newSurName, setSurName] = useState("");
  const [newUserName, setUserName] = useState("");
  const [newPassword, setPassword] = useState("");
  const [Users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Users");

// function to pass user details 
const createUser = async () => {
  await addDoc(usersCollectionRef, {name: newFirstName, surname: newSurName, username: newUserName, password: newPassword});
};

  useEffect(() => {

    const getUsers = async () =>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
  }, []);

  let navigate = useNavigate();



  return (
   <div className="App">
     <input className='nameUserInput' placeholder="firstname" onChange={(event) => {
       setFirstName(event.target.value)}}/>

     <input className='nameUserInput' placeholder="surname" onChange={(event) => {
       setSurName(event.target.value)}}/>

     <input className='nameUserInput' placeholder="username" onChange={(event) => {
       setUserName(event.target.value)}}/>

     <input type="password" className='nameUserInput' placeholder="password" onChange={(event) => {
       setPassword(event.target.value)}}/>

     <button onClick={createUser} className='Createuserbutton'>register</button>
        {Users.map((user) => {
            return(
              <div>
                  {""}
                  <h1>firstname: {Users.firstname}</h1>
                  <h1>surname: {Users.surname}</h1> 
                  <h1>username: {Users.username}</h1> 
                  <h1>password: {Users.password}</h1> 
              </div>
            ); 
        })}
    </div>
    
  );


    
  }

  export default App;