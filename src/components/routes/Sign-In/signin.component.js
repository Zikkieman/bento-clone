import { useState, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import "./signin.style.scss";
import FormInput from "../../form-input/form-input.component";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../../utils/firebase/firebase.utils";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const googleSignIn = async () => {
    // response is users-credential i got from google authentication
    // i destructured user {} from users-credential (response)
    const response = await signInWithGooglePopup();
    // const { user } = response;
    // setCurrentUser(user)
    // await createUserDocumentFromAuth(user);
  };

  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const [showPassword, setShowPassword] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const { setCurrentUser } = useContext(UserContext);

  const { currentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      if (location.state?.from) {
        navigate(location.state.from);
      }
      resetFormFields();
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

  function handlePassword() {
    setShowPassword(!showPassword);
  }

  const handleSignOutUser = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <div className="main-signin-div">
      <div className="signin-nav">
        <Link to="/">
          <h4> Bento </h4>
        </Link>
        <div className="spacer"></div>
        <span>Don't have an account?</span>

        <Link to="/sign-up" style={{textDecoration: "none"}}>
          {" "}
          <button>Sign Up </button>
        </Link>
      </div>
      <div className="signin-div">
        <p>Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          {email.length <= 0 && <span className="warning">&#42;</span>}
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

          <label>Password</label>
          {password.length <= 0 ? (
            <span className="warning">&#42;</span>
          ) : (
            <VisibilityOffIcon className="visible" onClick={handlePassword} sx={{color: "#d4112c"}} />
          )}
          <FormInput
            className="signin-input-field"
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <div>
            <button type="submit" className="first-signin-button">
              Sign In
            </button>
            <button type="button" onClick={googleSignIn}>
              Google Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
