//** IMPORTS */
import React from 'react'

//** FORM */
import { Formik } from "formik";
import * as yup from "yup";

//** LOGIN SCHEMA VALIDATION */
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email!")
    .required("Please enter your Email!"),
  password: yup.string().min(5).required("Please enter your password"),
});

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login