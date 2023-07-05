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
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { signInSchema } from "../../../Yup-schema";


const SignIn = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const googleSignIn = async () => {
    // response is users-credential i got from google authentication
    // i destructured user {} from users-credential (response)
    const response = await signInWithGooglePopup();
    // const { user } = response;
    // setCurrentUser(user)
    // await createUserDocumentFromAuth(user);
  };

  const onSubmit = async ({ email, password }, actions) => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password,
        toast.promise(
          resolveAfter3Sec,
          {
            pending: "Please Wait...",
          },
          {
            type: "info",
          }
        )
      ).then(() => {
        navigation("/dashboard");

        toast("Successfully logged in", {
          position: "bottom-center",
          type: "success",
          theme: "dark",
        });
      });
      const { user } = response;
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast("Wrong Password", {
            position: "top-right",
            type: "error",
            theme: "light",
          });
          break;
        case "auth/user-not-found":
          toast("Kindly input correct email", {
            position: "top-right",
            type: "error",
            theme: "light",
          });
          break;
        default:
          console.log(error);
      }
    }

    actions.resetForm();
  };

  const { handleBlur, handleChange, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signInSchema,
      onSubmit,
    });

  const { email, password } = values;

  console.log(errors);

  const [showPassword, setShowPassword] = useState(false);

  function handlePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="main-signin-div">
      <div className="signin-nav">
        <Link to="/">
          <h4> Bento </h4>
        </Link>
        <div className="spacer"></div>
        <span>Don't have an account?</span>

        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          {" "}
          <button>Sign Up </button>
        </Link>
      </div>
      <div className="signin-div">
        <p>Sign in to your account</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <label>Email</label>
          <FormInput
            className="signin-input-field"
            style={{
              border: errors.email && touched.email && "1px solid #d4112c",
            }}
            label="Email"
            type="email"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            value={email}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          <label>Password</label>
          {password.length > 0 && (
            <VisibilityOffIcon
              className="visible"
              onClick={handlePassword}
              sx={{ color: "#d4112c" }}
            />
          )}
          <FormInput
            className="signin-input-field"
            style={{
              border: errors.email && email.touched && "1px solid #d4112c",
            }}
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            onChange={handleChange}
            onBlur={handleBlur}
            name="password"
            value={password}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
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
