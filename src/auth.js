import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "./firebase-config";

const userAuthContext = createContext();


//user auth context provider establishes suthentication across the application
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  //returns the universal
  return (
    <userAuthContext.Provider
      value={{ user, login, register, logout }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
