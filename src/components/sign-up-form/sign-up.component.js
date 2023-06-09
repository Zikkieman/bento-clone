import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Button } from "@mui/material";
// import Button from "../button/button.component";
import { IconButton } from "@mui/material";
// import CountrySelector from "./country-list.component";
// import PhoneInput from "react-phone-number-input";

const defaultFormValues = {
  companyName: "",
  displayName: "",
  country: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);
  function handlePassword() {
    setShowPassword(!showPassword);
  }

  function handleAgreement(event) {
    setAgreement(event.target.checked);
  }
  // const { value, options, changeHandler, number, changeNumber } = props;
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
  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  // const options = useMemo(() => countryList().getData(), []);
  // console.log(options);

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
      const { user } = response;
      console.log(response);
      const userDocRef = createUserDocumentFromAuth(user, { displayName });
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
         <Link to="/accttype"><button className="signup-lesser-than">&#60;</button></Link> 
          <div>
            <h2>Create a company account</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label>Company Name</label>
              <FormInput
                className="signup-field"
                type="text"
                required
                onChange={handleChange}
                name="companyName"
                value={companyName}
              />
              {companyName.length <= 0 && (
                <span className="warning">This field is required</span>
              )}
              <label>Country</label>
              <FormInput
                className="signup-field"
                // options={options}
                required
                onChange={handleChange}
                name="country"
                value={country}
              />
              {country.length <= 0 && (
                <span className="warning">This field is required</span>
              )}

              <label>Full Name</label>
              <FormInput
                className="signup-field"
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />
              {displayName.length <= 0 && (
                <span className="warning">This field is required</span>
              )}

              <label>Email Address</label>
              <FormInput
                className="signup-field"
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={email}
              />
              {email.length <= 0 && (
                <span className="warning">This field is required</span>
              )}

              <label>Phone Number</label>
              <FormInput
                className="signup-field"
                type="number"
                required
                onChange={handleChange}
                name="number"
                value={number}
              />
              {number.length <= 0 && (
                <span className="warning">This field is required</span>
              )}

              <label>Password</label>
              <FormInput
                className="signup-field"
                label="Password"
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChange}
                name="password"
                value={password}
              />
              {password.length <= 0 ? (
                <span className="warning">Password is required</span>
              ) : (
                <VisibilityOffIcon
                  sx={{ margin: "0px" }}
                  className="visible"
                  onClick={handlePassword}
                />
              )}

              <label className="signup-last-label">Confirm Password</label>
              <FormInput
                className="signup-field"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
              />
              {confirmPassword.length <= 0 ? (
                <span className="warning">Password is required</span>
              ) : (
                <VisibilityOffIcon
                  sx={{ margin: "0px" }}
                  className="visible"
                  onClick={handlePassword}
                />
              )}
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
