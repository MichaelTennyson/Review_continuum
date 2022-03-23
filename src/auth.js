import React, {useState, useEffect} from 'react';
import { app } from '../firebase-config';

export const Authcontext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);

    }, [])

    return(
        <Authcontext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </Authcontext.Provider>
    );
};