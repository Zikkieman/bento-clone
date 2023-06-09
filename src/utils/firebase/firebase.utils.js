import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj0oqjgxQG44Q-VXyLNG1E0c1_WQhO4Mo",
  authDomain: "bento-portfolio-db.firebaseapp.com",
  projectId: "bento-portfolio-db",
  storageBucket: "bento-portfolio-db.appspot.com",
  messagingSenderId: "848196973829",
  appId: "1:848196973829:web:52719713c44f444976b36c",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);


export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  console.log(userSnapshot.exists());
  //   creating userDocRef is just to check if there is a similar doc created already in the database
  // if a similar doc exists then just return otherwise create a new user

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });

    } catch (error) {
      console.log("error creating the user in the db", error.message);
    }
  } else {
    // console.log("It is right in the db")
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};