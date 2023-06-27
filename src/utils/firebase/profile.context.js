import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import App from "../../App";



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

//  export const getUserInfo = async (user) => {
//   console.log(user)
//   const docRef = doc(db, "users", user.uid);
//   const profile = await getDoc(docRef);
//   const UserData = profile.data();
//    return UserData 
// };

// getCategoriesAndDocuments()





// export const ProfileContext = createContext({
  
//   userProfile: null,
//   setUserProfile: ()=> null
// });

// export const ProfileProvider = ({ children }) => {
// const {currentUser} = useContext(UserContext)
// console.log(currentUser)

//   const [userProfile, setUserProfile] = useState(null);

//  console.log("Okay")
 

//   useEffect(() => {
//     const getUserProfile = async () => {
//       const currentUserProfile = await getUserInfo();
//       setUserProfile(currentUserProfile);
//     };

//     getUserProfile();
//   }, );


//   const value = { userProfile};

//   console.log(value)
//   return (
//     <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
//   );
// };
