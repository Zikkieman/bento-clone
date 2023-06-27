import { createContext, useState, useEffect } from "react";
// import { useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../../context/user.context";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  // getCategoriesAndDocuments,
  signOutUser,
} from "../utils/firebase/firebase.utils";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query } from "firebase/firestore";
// import { createContext, useContext, useEffect, useState } from "react";
// import { UserContext } from "../../context/user.context";



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

// export const getCategoriesAndDocuments = async (user) => {
//     const docRef = doc(db, "users", user.uid);
//   const profile = await getDoc(docRef);
//   const UserData = profile.data();
//   console.log(UserData)
//    return UserData
  
// };

 const getInitialState = () => {
  const userProfile = localStorage.getItem("userInfo")
  return userProfile ? JSON.parse(userProfile) : []
 }

 const getUserDetails = () => {
  const userDetails = localStorage.getItem("userDetails")
  return userDetails ? JSON.parse(userDetails) : []
 }


export const UserContext = createContext({
  currentUser: [],
  setCurrentUser: () => null,
  userProfile: []
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserDetails);
  const [userProfile, setUserProfile] = useState(getInitialState)
  console.log(userProfile)

  
  const getUserInfo = async () => {
    localStorage.setItem("userDetails", JSON.stringify(currentUser))
    const docRef = doc(db, "users", currentUser.uid);
    const profile = await getDoc(docRef);
    const UserData = profile.data();
     return UserData 
  };

  useEffect(()=>{
  const getUserProfile = async () => {
    const UserProfile = await getUserInfo()
    console.log(UserProfile)
    localStorage.setItem("userInfo", JSON.stringify(UserProfile))
    console.log("run")
    setUserProfile(UserProfile)
    }

    getUserProfile()
  }, [currentUser])
 


  const value = { currentUser, setCurrentUser, userProfile };

  // console.log(value.userProfile)

  
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
