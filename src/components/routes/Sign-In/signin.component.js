import { useState, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import "./signin.style.scss";
import FormInput from "../../form-input/form-input.component";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { signInSchema } from "../../../Yup-schema";
import ButtonLoader from "../../loader/spinner";

const SignIn = () => {
  const [spinner, setSpinner] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { getUserInfo } = userContext;

  const onSubmit = async (values, actions) => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    const signInInfo = {
      email: values.email,
      password: values.password,
    };
    setSpinner(true);
    try {
      const response = await fetch(`https://bento-clone-backend.vercel.app/api/loginUser`, {
        method: "POST",
        body: JSON.stringify(signInInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const newUserInfo = await response.json();
        if (newUserInfo.message === "Authenticated Successfully") {
          await getUserInfo(newUserInfo.message1);
          navigate("/dashboard");
          toast(`Welcome!!!`);
          setSpinner(false);
        } else {
          toast(newUserInfo.message);
          setSpinner(false);
        }
      }
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
      setSpinner(false);
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

  const [showPassword, setShowPassword] = useState(false);

  function handlePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="main-signin-div">
      <div
        className="signin-nav"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/">
          <h4 style={{ fontSize: "25px" }}> Bento </h4>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Don't have an account?</span>
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            <button>Sign Up </button>
          </Link>
        </div>
      </div>
      <div
        className="signin-div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 0,
        }}
      >
        <div>
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
            <div
              className=""
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
                {!visibilityIcon ? (
                  <>
                    {password.length > 0 && (
                      <MdOutlineVisibility
                        size={20}
                        sx={{ margin: "0px" }}
                        onClick={handlePassword}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {password.length > 0 && (
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
            </div>
            <div>
              <button
                type="submit"
                className="first-signin-button"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {spinner ? <ButtonLoader /> : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
