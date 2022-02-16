import React ,{useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import './App.css';
import {db} from './firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import Header from '.../Components/header/header.js';
import Footer from '.../Components/footer/footer.js';
import Account from '.../Components/account/account.js';
import Comment from '.../Components/footer/footer.js';
import HomePage from '.../Components/homePage/homePage.js';
import Logout from '.../Components/logout/logout.js';
import ModuleReviewForm from '.../Components/Reviews/ModuleReviewForm.js';
import SearchPage from '.../Components/searchPage/searchPage.js';
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

const updateUser = async (id, name) =>{

}

  useEffect(() => {

    const getUsers = async () =>{
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
  }, []);

  let navigate = useNavigate();


  //onchange events hook the input made by the user and passes it to the use state
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
            //the following code displays the user details from the firebase dataabase
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