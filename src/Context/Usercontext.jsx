import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Auth/Firebase.config";
export const AuthContext = createContext();
const Usercontext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const unSubscribe = () =>
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
    }, []);

  unSubscribe();

  const authValue = { user, loading, signIn, createAccount, logOut };
  return (
    <div>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Usercontext;
