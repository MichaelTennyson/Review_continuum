import React from "react";
import './chat_style.css';
import ChatBox from './chatBox.js';
import { auth } from '../firebase-config.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function Chat() {
  const [user] = useAuthState(auth)
  return (
    <>
      <ChatBox />
    </>
  );
}

export default Chat;
