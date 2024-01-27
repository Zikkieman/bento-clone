import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { basicSchema } from "../../Yup-schema";
import ButtonLoader from "../loader/spinner";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState(false);
  const [secVisibilityIcon, setSecVisibilityIcon] = useState(false);

  function handlePassword() {
    setShowPassword(!showPassword);
  }

  function handleConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleAgreement(event) {
    setAgreement(event.target.checked);
  }

  const onSubmit = async (values, actions) => {
    const signupInfo = {
      companyName: values.companyName,
      country: values.country,
      number: values.number,
      displayName: values.displayName,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    if (password === !confirmPassword) {
      alert("passwords do not match");
      return;
    }
    setSpinner(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/newUser`,
        {
          method: "POST",
          body: JSON.stringify(signupInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const newUserInfo = await response.json();
        if (newUserInfo.message === "Successfully Registered") {
          navigate("/sign-in");
          toast("You can now sign in");
          actions.resetForm();
          setSpinner(false);
        } else {
          toast(newUserInfo.message);
          setSpinner(false);
        }
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Cannot create user, email already in use");
      } else {
        toast("user creation encountered an error", error);
      }
      setSpinner(false);
    }
  };

  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
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
    <div >
      <div className="accttype-main-div">
        <div
          className="acctype-nav"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link
            to="/"
            className="type-link"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h4 style={{ fontSize: "25px" }}>Bento</h4>
          </Link>
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <p style={{ display: "inline-block", marginRight: "10px" }}>
              Already have an account?
            </p>
            <Link to="/sign-in">
              <button>Sign In</button>
            </Link>
          </div>
        </div>

        <div
          className="signup-main-div"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="form-wrapper">
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
                    height: "50px",
                    border:
                      errors.country && touched.country && "1px solid #d4112c",
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="country"
                  // className="signup-field"
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
                    border:
                      errors.email && touched.email && "1px solid #d4112c",
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label>Password</label>
                  <div
                    onClick={() => setVisibilityIcon(!visibilityIcon)}
                    className="visible"
                  >
                    {visibilityIcon ? (
                      <>
                        {password.length > 0 && (
                          <MdOutlineVisibilityOff
                            size={20}
                            sx={{ margin: "0px" }}
                            onClick={handlePassword}
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {password.length > 0 && (
                          <MdOutlineVisibility
                            size={20}
                            sx={{ margin: "0px" }}
                            onClick={handlePassword}
                          />
                        )}
                      </>
                    )}
                  </div>

                  <FormInput
                    className={`errors.companyName && "input-error"  signup-field`}
                    label="Password"
                    style={{
                      border:
                        errors.password &&
                        touched.password &&
                        "1px solid #d4112c",
                    }}
                    type={showPassword ? "text" : "password"}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    value={password}
                  />
                </div>
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label className="signup-last-label">Confirm Password</label>
                  <div
                    onClick={() => setSecVisibilityIcon(!secVisibilityIcon)}
                    className="visible"
                  >
                    {secVisibilityIcon ? (
                      <>
                        {confirmPassword.length > 0 && (
                          <MdOutlineVisibility
                            size={20}
                            sx={{ margin: "0px" }}
                            onClick={handlePassword}
                          />
                        )}
                      </>
                    ) : (
                      <>
                        {confirmPassword.length > 0 && (
                          <MdOutlineVisibilityOff
                            size={20}
                            sx={{ margin: "0px" }}
                            onClick={handlePassword}
                          />
                        )}
                      </>
                    )}
                  </div>
                  <FormInput
                    className="signup-field"
                    label="Confirm Password"
                    style={{
                      border:
                        errors.confirmPassword &&
                        touched.confirmPassword &&
                        "1px solid #d4112c",
                    }}
                    type={secVisibilityIcon ? "text" : "password"}
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="confirmPassword"
                    value={confirmPassword}
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}

                <div
                  className="signup-term-condition"
                  style={{ display: "flex" }}
                >
                  <input
                    type="checkbox"
                    name="agreement"
                    onChange={handleAgreement}
                  />
                  <p className="agree-terms">
                    I have read and agree to Bento’s <span>Terms of Use</span>{" "}
                    and <span>Privacy policy.</span>
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="form-button"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {spinner ? <ButtonLoader /> : "Sign up"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
