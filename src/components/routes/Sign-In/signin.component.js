import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    // response is users-credential i got from google authentication
    // i destructured user {} from users-credential (response)
    const response = await signInWithGooglePopup();
    const {user} = response
    const userDocRef = await createUserDocumentFromAuth(user)
  };
// the commented codes were just to show how to implement signInWithGoogleRedirect auth
  // useEffect( () =>  async () =>{
  //   const response = await getRedirectResult(auth);
  //   const {user} = response
  //   if(user){
  //     const userDocRef = await createUserDocumentFromAuth(user)
  //   }
  //   console.log(user)
  // }
    
  // , [])
  
  return (
    <div>
      <h1> Login Here</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    </div>
  );
};

export default SignIn;
