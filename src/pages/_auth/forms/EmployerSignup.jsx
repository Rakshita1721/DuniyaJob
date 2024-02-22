// import React from 'react';
// import Navbar from '../../../components/Navbar';
// import { Typography } from '@mui/material';
// import { Link } from "react-router-dom";

// const EmployerSignup = () => {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <section className="flex flex-col md:flex-row justify-center items-center flex-grow bg-transparent">
//           <div className="md:w-1/2 flex mt-3 justify-center">
//             <img
//               src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//               alt="Sample img"
//               className="w-full md:max-w-lg"
//             />
//           </div>

//           <div className="md:w-1/2 p-8">
//             <Typography variant="h4" className="text-white text-center md:text-left mb-8">Employer Signup</Typography>
//             <div className="bg-white rounded-lg shadow-md p-5">
//               <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl" type="string" placeholder="Name" />
//               <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="string" placeholder="Company Name" />
//               <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="number" placeholder="Phone Number" />
//               <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="email" placeholder="Email Address" />
//               <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mt-2">
//                 <input className="mr-1" type="checkbox" />
//                 <span className=' text-black'>Remember Me</span>
//               </label>
//               <div className="text-center md:text-left mt-4">
//                 <Link to="/employer-verification-otp">
//                   <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Get OTP</button>
//                 </Link>
//               </div>
//               <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//                 <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
//               </div>
//               <div className="text-center md:text-left">
//                 <label className="mr-1 text-black">Sign in with :</label>
//                 <button
//                   type="button"
//                   className="mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto h-3.5 w-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                 </button>
//                 <button
//                   type="button"
//                   className="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="mx-auto h-3.5 w-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                 </button>
//                 <button
//                   type="button"
//                   data-te-ripple-init
//                   data-te-ripple-color="light"
//                   class="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">

//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="mx-auto h-3.5 w-3.5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24">
//                     <path
//                       d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default EmployerSignup;

// // import React, { useState } from 'react';
// // import Navbar from '../../../components/Navbar';
// // import { Typography } from '@mui/material';
// // import { Link } from "react-router-dom";
// // import { useFormik } from 'formik';
// // import * as yup from 'yup';

// // const EmployerSignup = () => {
// //   const validationSchema = yup.object({
// //     name: yup.string().required('Name is required'),
// //     companyName: yup.string().required('Company Name is required'),
// //     phoneNumber: yup.string().required('Phone Number is required').matches(/^\d+$/, 'Phone number must contain only digits'),
// //     email: yup.string().email('Invalid email address').required('Email is required'),
// //   });

// //   const formik = useFormik({
// //     initialValues: {
// //       name: '',
// //       companyName: '',
// //       phoneNumber: '',
// //       email: '',
// //     },
// //     validationSchema: validationSchema,
// //     onSubmit: (values) => {
// //       console.log(values);
// //       // Handle form submission
// //     },
// //   });

// //   return (
// //     <>
// //       <div className="min-h-screen flex flex-col">
// //         <Navbar />
// //         <section className="flex flex-col md:flex-row justify-center items-center flex-grow bg-transparent">
// //           <div className="md:w-1/2 flex mt-3 justify-center">
// //             <img
// //               src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
// //               alt="Sample img"
// //               className="w-full md:max-w-lg"
// //             />
// //           </div>

// //           <div className="md:w-1/2 p-8">
// //             <Typography variant="h4" className="text-white text-center md:text-left mb-8">Employer Signup</Typography>
// //             <form onSubmit={formik.handleSubmit}>
// //               <div className="bg-white rounded-lg shadow-md p-5">
// //                 <input
// //                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl"
// //                   type="text"
// //                   placeholder="Name"
// //                   name="name"
// //                   value={formik.values.name}
// //                   onChange={formik.handleChange}
// //                   onBlur={formik.handleBlur}
// //                 />
// //                 {formik.touched.name && formik.errors.name ? (
// //                   <div className="text-red-500 text-sm">{formik.errors.name}</div>
// //                 ) : null}
// //                 <input
// //                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5"
// //                   type="text"
// //                   placeholder="Company Name"
// //                   name="companyName"
// //                   value={formik.values.companyName}
// //                   onChange={formik.handleChange}
// //                   onBlur={formik.handleBlur}
// //                 />
// //                 {formik.touched.companyName && formik.errors.companyName ? (
// //                   <div className="text-red-500 text-sm">{formik.errors.companyName}</div>
// //                 ) : null}
// //                 <input
// //                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5"
// //                   type="text"
// //                   placeholder="Phone Number"
// //                   name="phoneNumber"
// //                   value={formik.values.phoneNumber}
// //                   onChange={formik.handleChange}
// //                   onBlur={formik.handleBlur}
// //                 />
// //                 {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
// //                   <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
// //                 ) : null}
// //                 <input
// //                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5"
// //                   type="email"
// //                   placeholder="Email Address"
// //                   name="email"
// //                   value={formik.values.email}
// //                   onChange={formik.handleChange}
// //                   onBlur={formik.handleBlur}
// //                 />
// //                 {formik.touched.email && formik.errors.email ? (
// //                   <div className="text-red-500 text-sm">{formik.errors.email}</div>
// //                 ) : null}
// //                 <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mt-2">
// //                   <input className="mr-1" type="checkbox" />
// //                   <span className=' text-black'>Remember Me</span>
// //                 </label>
// //                 <div className="text-center md:text-left mt-4">
// //                   <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Get OTP</button>
// //                 </div>
// //                 <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
// //                   <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
// //                 </div>
// //                 <div className="text-center md:text-left">
// //                   <label className="mr-1 text-black">Sign in with :</label>
// //                   {/* Social media buttons */}
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // }

// // export default EmployerSignup;

// import React from 'react';
// import Navbar from '../../../components/Navbar';
// import { Typography } from '@mui/material';
// import { Link } from "react-router-dom";
// import { useFormik } from 'formik';
// import * as yup from 'yup';

// const EmployerSignup = () => {
//   const validationSchema = yup.object({
//     name: yup.string().required('Name is required'),
//     companyName: yup.string().required('Company Name is required'),
//     phoneNumber: yup.string().required('Phone Number is required').matches(/^\d+$/, 'Phone number must contain only digits'),
//     email: yup.string().email('Invalid email address').required('Email is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       companyName: '',
//       phoneNumber: '',
//       email: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       // Handle form submission
//     },
//   });

//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <section className="flex flex-col md:flex-row justify-center items-center flex-grow bg-transparent">
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//               alt="Sample img"
//               className="w-full md:max-w-lg"
//             />
//           </div>

//           <div className="md:w-1/2 p-8">
//             <Typography variant="h4" className="text-white text-center md:text-left mb-8">Employer Signup</Typography>
//             <form onSubmit={formik.handleSubmit}>
//               <div className="bg-white rounded-lg shadow-md p-5">
//                 <input
//                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   value={formik.values.name}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.name && formik.errors.name ? (
//                   <div className="text-red-500 text-xs mb-3">{formik.errors.name}</div>
//                 ) : null}
//                 <input
//                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
//                   type="text"
//                   placeholder="Company Name"
//                   name="companyName"
//                   value={formik.values.companyName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.companyName && formik.errors.companyName ? (
//                   <div className="text-red-500 text-xs mb-3">{formik.errors.companyName}</div>
//                 ) : null}
//                 <input
//                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
//                   type="text"
//                   placeholder="Phone Number"
//                   name="phoneNumber"
//                   value={formik.values.phoneNumber}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
//                   <div className="text-red-500 text-xs mb-3">{formik.errors.phoneNumber}</div>
//                 ) : null}
//                 <input
//                   className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
//                   type="email"
//                   placeholder="Email Address"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <div className="text-red-500 text-xs mb-3">{formik.errors.email}</div>
//                 ) : null}
//                 <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mb-3">
//                   <input className="mr-1" type="checkbox" />
//                   <span className='text-black'>Remember Me</span>
//                 </label>
//                 <div className="text-center md:text-left mb-3">
//                   <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Get OTP</button>
//                 </div>
//                 <div className="my-3 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//                   <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
//                 </div>
//                 <div className="text-center md:text-left">
//                   <label className="mr-1 text-black">Sign in with :</label>
//                   {/* Social media buttons */}
//                   <div className="flex justify-center md:justify-start">
//                     <button
//                       type="button"
//                       className="mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="mx-auto h-3.5 w-3.5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24">
//                         <path
//                           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                       </svg>
//                     </button>
//                     <button
//                       type="button"
//                       className="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="mx-auto h-3.5 w-3.5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24">
//                         <path
//                           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                       </svg>
//                     </button>
//                     <button
//                       type="button"
//                       data-te-ripple-init
//                       data-te-ripple-color="light"
//                       className="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">

//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="mx-auto h-3.5 w-3.5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24">
//                         <path
//                           d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default EmployerSignup;

import React from 'react';
import Navbar from '../../../components/Navbar';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

const EmployerSignup = () => {
  const validationSchema = yup.object({
    name: yup.string().matches(/^[a-zA-Z\s]+$/, 'Name must contain only letters').required('Name is required'),
    companyName: yup.string().matches(/^[a-zA-Z\s]+$/, 'Company Name must contain only letters').required('Company Name is required'),
    phoneNumber: yup.string().required('Phone Number is required').matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits'),
    email: yup.string().email('Invalid email address').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      companyName: '',
      phoneNumber: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <section className="flex flex-col md:flex-row justify-center items-center flex-grow bg-transparent">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt="Sample img"
              className="w-full md:max-w-lg"
            />
          </div>

          <div className="md:w-1/2 p-8">
            <Typography variant="h4" className="text-white text-center md:text-left mb-8">Employer Signup</Typography>
            <form onSubmit={formik.handleSubmit}>
              <div className="bg-white rounded-lg shadow-md p-5">
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-xs mb-3">{formik.errors.name}</div>
                ) : null}
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className="text-red-500 text-xs mb-3">{formik.errors.companyName}</div>
                ) : null}
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-500 text-xs mb-3">{formik.errors.phoneNumber}</div>
                ) : null}
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs mb-3">{formik.errors.email}</div>
                ) : null}
                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mb-3">
                  <input className="mr-1" type="checkbox" />
                  <span className='text-black'>Remember Me</span>
                </label>
                <div className="text-center md:text-left mb-3">
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Get OTP</button>
                </div>
                <div className="my-3 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
                </div>
                <div className="text-center md:text-left">
                  <label className="mr-1 text-black">Sign in with :</label>
                  {/* Social media buttons */}
                  <div className="flex justify-center md:justify-start">
                    <button
                      type="button"
                      className="mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inlne-block mx-1 h-9 w-9 rounded-full ml-2 bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default EmployerSignup;

