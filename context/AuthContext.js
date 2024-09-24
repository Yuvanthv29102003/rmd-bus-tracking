import React, { useState, useEffect, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userDetailsCompleted, setUserDetailsCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserDetailsCompleted(userData.userDetailsCompleted || false);
        } else {
          setUserDetailsCompleted(false);
        }
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUserDetailsCompleted(false); // Reset on logout
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const completeUserDetails = () => {
    setUserDetailsCompleted(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, userDetailsCompleted, completeUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
