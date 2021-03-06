import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase-config.js'
import Message from './message.js'
import Header from './header.js';
import Footer from './footer.js';
import {  collection, query } from "firebase/firestore";

function ChatBox() {
    const scroll = useRef()
    const q = query(collection(db, "messages"));
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
       <>
       <Header />
       <div>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Message scroll={scroll} />
            <div ref={scroll}></div>
        </div>
        <Footer />
        </> 
    )
}

export default ChatBox;