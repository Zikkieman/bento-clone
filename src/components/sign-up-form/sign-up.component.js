import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { Button } from "@mui/material";

const defaultFormValues = {
  companyName: "",
  displayName: "",
  country: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);
  function handlePassword() {
    setShowPassword(!showPassword);
  }

  function handleConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleAgreement(event) {
    setAgreement(event.target.checked);
  }
  const [formFields, setFormFields] = useState(defaultFormValues);
  const {
    companyName,
    country,
    number,
    displayName,
    email,
    password,
    confirmPassword,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  // const {setCurrentUser} = useContext(UserContext);
  const { currentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password == !confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // if(location.state?.from){
      //   navigate(location.state.from)
      // }
      const { user } = response;
      // setCurrentUser(user);
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
        country,
        companyName,
      }).then(() => {
        navigate("/sign-in")
      })

      console.log("good");
      resetFormFields();

      //   console.log(userDocRef);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        alert("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <div className="accttype-main-div">
        <div className="acctype-nav">
          <Link to="/" className="type-link">
            <h4>Bento</h4>
          </Link>
          <span>Already have an account?</span>
          <Link to="/sign-in">
            <button>Sign In</button>
          </Link>
        </div>

        <div className="signup-main-div">
          <Link to="/accttype">
            <button className="signup-lesser-than">&#60;</button>
          </Link>
          <div>
            <h2>Create a company account</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Company Name</label>
              {companyName.length <= 0 && (
                <span className="warning">&#42;</span>
              )}
              <FormInput
                className="signup-field"
                type="text"
                required
                onChange={handleChange}
                name="companyName"
                value={companyName}
              />

              <label>Country</label>
              {country.length <= 0 && <span className="warning">&#42;</span>}
              <select
                required
                onChange={handleChange}
                name="country"
                value={country}
              >
               <option value="" disabled selected hidden className="first-option">Select your country</option>
                <option value="Rwanda" >Rwanda</option>
                <option value="Ghana">Ghana</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Kenya">Kenya</option>
              </select>

              <label>Display Name</label>
              {displayName.length <= 0 && (
                <span className="warning">&#42;</span>
              )}
              <FormInput
                className="signup-field"
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />

              <label>Email Address</label>
              {email.length <= 0 && <span className="warning">&#42;</span>}
              <FormInput
                className="signup-field"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
              />

              <label>Phone Number</label>
              {number.length <= 0 && <span className="warning">&#42;</span>}
              <FormInput
                className="signup-field"
                type="number"
                required
                onChange={handleChange}
                name="number"
                value={number}
              />

              <label>Password</label>
              {password.length <= 0 ? (
                <span className="warning">&#42;</span>
              ) : (
                <VisibilityOffIcon
                  sx={{ margin: "0px" }}
                  className="visible"
                  onClick={handlePassword}
                />
              )}
              <FormInput
                className="signup-field"
                label="Password"
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChange}
                name="password"
                value={password}
              />

              <label className="signup-last-label">Confirm Password</label>
              {confirmPassword.length <= 0 ? (
                <span className="warning">&#42;</span>
              ) : (
                <VisibilityOffIcon
                  sx={{ margin: "0px" }}
                  className="visible-sec"
                  onClick={handleConfirmPassword}
                />
              )}
              <FormInput
                className="signup-field"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
              />

              <div className="signup-term-condition">
                <input
                  type="checkbox"
                  name="agreement"
                  onChange={handleAgreement}
                />
                <p>
                  I have read and agree to Bento’s <span>Terms of Use</span> and{" "}
                  <span>Privacy policy.</span>
                </p>
              </div>
              <Button
                className="signup-button"
                type="submit"
                disabled={!agreement}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
