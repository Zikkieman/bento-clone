import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { Button } from "@mui/material";
import CountrySelector from "./country-list.component";
import { useFormik } from "formik";
import { basicSchema } from "../../Yup-schema";

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

  // Usage of formik started here
  const onSubmit = async (
    {
      companyName,
      country,
      number,
      displayName,
      email,
      password,
      confirmPassword,
    },
    actions
  ) => {
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
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
        country,
        companyName,
      }).then(() => {
        navigate("/sign-in");
        toast("You can now sign in");
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Cannot create user, email already in use");
      } else {
        toast("user creation encountered an error", error);
      }
    }

    console.log("Submitted");
    actions.resetForm();
  };

  const {
    values,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      companyName: "",
      displayName: "",
      country: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // console.log(errors);

  const {
    companyName,
    country,
    number,
    displayName,
    email,
    password,
    confirmPassword,
  } = values;

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
            <form onSubmit={handleSubmit} autoComplete="off">
              <label>Company Name</label>

              <FormInput
                id="companyName"
                style={{
                  border:
                    errors.companyName &&
                    touched.companyName &&
                    "1px solid #d4112c",
                }}
                className="signup-field"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={companyName}
              />
              {errors.companyName && touched.companyName && (
                <p className="error">{errors.companyName}</p>
              )}

              <label>Country</label>
              <select
                required
                style={{
                  border:
                    errors.country && touched.country && "1px solid #d4112c",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                id="country"
                value={country}
              >
                <option
                  value=""
                  disabled
                  selected
                  hidden
                  className="first-option"
                >
                  Select your country
                </option>
                <option value="Rwanda">Rwanda</option>
                <option value="Ghana">Ghana</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Kenya">Kenya</option>
              </select>
              {errors.country && touched.country && (
                <p className="error">{errors.country}</p>
              )}

              <label>Display Name</label>

              <FormInput
                className="signup-field"
                type="text"
                style={{
                  border:
                    errors.displayName &&
                    touched.displayName &&
                    "1px solid #d4112c",
                }}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                id="displayName"
                value={displayName}
              />
              {errors.displayName && touched.displayName && (
                <p className="error">{errors.displayName}</p>
              )}

              <label>Email Address</label>
              <FormInput
                className="signup-field"
                type="email"
                style={{
                  border: errors.email && touched.email && "1px solid #d4112c",
                }}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                value={email}
              />

              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}

              <label>Phone Number</label>
              <FormInput
                className="signup-field number"
                type="number"
                style={{
                  border:
                    errors.number && touched.number && "1px solid #d4112c",
                }}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                id="number"
                value={number}
              />
              {errors.number && touched.number && (
                <p className="error">{errors.number}</p>
              )}

              <label>Password</label>
              {password.length > 0 && (
                <VisibilityOffIcon
                  sx={{ margin: "0px" }}
                  className="visible"
                  onClick={handlePassword}
                />
              )}
              <FormInput
                className={`errors.companyName && "input-error"  signup-field`}
                label="Password"
                style={{
                  border:
                    errors.password && touched.password && "1px solid #d4112c",
                }}
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                value={password}
              />
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
              <label className="signup-last-label">Confirm Password</label>
              {confirmPassword.length > 0 && (
                <VisibilityOffIcon
                  sx={{ margin: "0px" }}
                  className="visible-sec"
                  onClick={handleConfirmPassword}
                />
              )}
              <FormInput
                className="signup-field"
                label="Confirm Password"
                style={{
                  border:
                    errors.confirmPassword &&
                    touched.confirmPassword &&
                    "1px solid #d4112c",
                }}
                type={showConfirmPassword ? "text" : "password"}
                required
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword"
                value={confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
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
                // disabled={isSubmitting}
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
