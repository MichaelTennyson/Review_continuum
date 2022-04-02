import React, { useRef, useState } from 'react';
import './chat_style.css';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import Header from './header.js';
import Footer from './footer.js';


import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db, app  } from '../firebase-config';


function Chat() {

  return (
    <div className="Chat">

      <section>
        <Header />
        <ChatRoom />
        <Footer />
      </section>

    </div>
  );
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = db('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: app.db.FieldValue.serverTimestamp(),
      uid
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  </>)
}


export default Chat;
