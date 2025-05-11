// //** IMPORTS */
// import React from 'react'
// //** FROM */
// import { Formik } from "formik";
// import * as yup from "yup";
// //** MUI */
// import { Box } from '@mui/system';

// //** FORM VALUES */
// const initialValues = {
//   email: "",
//   password: "",
//   userName: "",
//   confirmPassword: "",
// };


// //** REGISTER SCHEMA */
// const registerSchema = yup.object({
//   userName: yup
//     .string()
//     .required("User Name is Required!")
//     .matches(/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/, "invalid user name")
//     .test("unique-userName", "UserName already Exists!", async (checkName) => {
//       const data = await getName(checkName);
//       return !data;
//     }),
//   email: yup
//     .string()
//     .email("Invalid Email!")
//     .required("Please enter your Email!")
//     .test("unique-email", "Email already Exists!", async (checkEmail) => {
//       const data = await getEmail(checkEmail);
//       return !data;
//     }),
//   password: yup.string().min(5).required("Please enter your password"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Confirm password is required"),
// });

// const Register = () => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={registerSchema}
//       onSubmit={handleFormSubmit}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//         setFieldValue,
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <Box>
//             <TextField
//               label="Name"
//               name="userName"
//               onBlur={handleBlur}
//               onChange={(e) => {
//                 setFieldValue("userName", e.target.value);
//               }}
//               value={values.userName}
//               error={Boolean(touched.userName) && Boolean(errors.userName)}
//               helperText={touched.userName && errors.userName}
//               sx={{ gridColumn: "span 4" }}
//             />
//           </Box>
//         </form>
//       )}
//     </Formik>
//   );
// }

// export default Register