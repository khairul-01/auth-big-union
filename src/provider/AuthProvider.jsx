import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)
   // Create user account
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   }
   // signin user account
   const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   // signin with google
   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   // signout user account
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }
   // observe auth state change
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false);
         console.log('observing current user inside useEffect of AuthProvider', currentUser);
      })
      return () => {
         unSubscribe();
      }
   }, [])

   const authInfo = {
      user,
      createUser,
      signInUser,
      logOut,
      loading,
      signInWithGoogle
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;

AuthProvider.propTypes = {
   children: PropTypes.node,
}