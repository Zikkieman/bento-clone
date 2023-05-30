import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    // response is users-credential i got from google authentication
    // i destructured user {} from users-credential (response)
    const response = await signInWithGooglePopup();
    const {user} = response
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <div>
      <h1> Login Here</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
