import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj0oqjgxQG44Q-VXyLNG1E0c1_WQhO4Mo",
  authDomain: "bento-portfolio-db.firebaseapp.com",
  projectId: "bento-portfolio-db",
  storageBucket: "bento-portfolio-db.appspot.com",
  messagingSenderId: "848196973829",
  appId: "1:848196973829:web:52719713c44f444976b36c",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

const getInitialState = () => {
  const userProfile = localStorage.getItem("userInfo");
  return userProfile ? JSON.parse(userProfile) : [];
};

const getUserDetails = () => {
  const userDetails = localStorage.getItem("userDetails");
  return userDetails ? JSON.parse(userDetails) : [];
};

export const UserContext = createContext({
  currentUser: [],
  setCurrentUser: () => null,
  userProfile: [],
  setUserProfile: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserDetails);
  const [userProfile, setUserProfile] = useState(getInitialState);

  const getUserInfo = async (userInfo) => {
      // localStorage.setItem("userDetails", JSON.stringify(currentUser));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
       setUserProfile(userInfo);
    };

  const value = { currentUser, setCurrentUser, userProfile, getUserInfo };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
