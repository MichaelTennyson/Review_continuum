import React, { useRef, useState } from 'react';
import './chat_style.css';
import { auth, db, analytics, app } from '../firebase-config';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Header from './header.js';
import Footer from './footer.js';

function Chat() {
  const dummy = useRef();
  //referencing the message collection
  const messagesRef = db.collection('messages');
  //query limited at 25 seconds
  const query = messagesRef.orderBy('createdAt').limit(25);

  //variable takes in the message
  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: app.db.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <Header />
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>send</button>

    </form>
    <Footer />
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default Chat;
