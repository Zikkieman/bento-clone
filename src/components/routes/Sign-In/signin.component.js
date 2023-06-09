import SignUpForm from "../../sign-up-form/sign-up.component";
import { useState } from "react";
import "./signin.style.scss";
import FormInput from "../../form-input/form-input.component";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
// } from "../../utils/firebase/firebase.utils";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";

import Button from "../../button/button.component";
import { Link } from "react-router-dom";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const googleSignIn = async () => {
    // response is users-credential i got from google authentication
    // i destructured user {} from users-credential (response)
    const response = await signInWithGooglePopup();
    const { user } = response;
    await createUserDocumentFromAuth(user);
  };

  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;
  console.log(formFields);

  const [showPassword, setShowPassword] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password!");
          break;
        case "auth/user-not-found":
          alert("Kindly input the correct email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  function handlePassword () {
      setShowPassword(!showPassword)
  }

  // function handleWarning() {
  //   if (email.length === 0) {
  //     setWarning("Okay")
  //   } else if (email.length !== 0) {
  //     setWarning("")
  //   }
  // }

  return (
    <div className="main-signin-div">
      <div className="signin-nav">
        <Link to="/"><h4> Bento </h4></Link> 
        <div className="spacer"></div>
        <span>Don't have an account?</span>
        <Link to="/sign-up"><button>Sign up</button></Link> 
      </div>
      <div className="signin-div">
        <p>Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <FormInput
            className="signin-input-field"
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            // onClick={handleWarning}
          />
          {email.length <= 0 && (
            <span className="warning">This field is required</span>
          )}

          <label>Password</label>

          <FormInput
            className="signin-input-field"
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          {password.length <= 0 ? 
            <span className="warning">Password is required</span> : <span className="visible-span" onClick ={handlePassword} >
            < VisibilityOffIcon className="visible"  />
          </span>
          }
          <div>
          <button type="submit" className="first-signin-button">Sign In</button>
          <button type="button" onClick={googleSignIn}>
            Google Sign In
          </button>
          </div>
        </form>
      </div>

      {/* <SignUpForm /> */}
    </div>
  );
};

export default SignIn;
