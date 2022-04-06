import React from "react";
import './chat_style.css';
import ChatBox from './chatBox.js';
import Header from './header.js';
import Footer from './footer.js';

function Chat() {
  return (
    <>
    <Header />
      <ChatBox />
    <Footer />
    </>
  );
}

export default Chat;
