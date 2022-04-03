import './chat_style.css';
import { auth } from '../firebase_config.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function Chat() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat />: <SignIn/>}
    </>
  );
}

export default Chat;
