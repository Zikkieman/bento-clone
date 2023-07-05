import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  companyName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  displayName: yup.string().required("Required"),
  country: yup.string().required("Required"),
  number: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Password must contain 1 upper case letter, 1 lower case letter, 1 numeric digit, 1 special character.",
    })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .required("Required"),
});

// companyName: "",
//       displayName: "",
//       country: "",
//       number: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
