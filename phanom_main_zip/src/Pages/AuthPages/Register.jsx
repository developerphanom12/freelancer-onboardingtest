import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import JoinImage from '../../Assets/joinImage.png';
import HomeScreenshot from '../../Assets/HomeScreenshot.png';
import { FiUpload } from 'react-icons/fi';

const Register = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden max-w-[1500px] mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105 z-0"
        style={{ backgroundImage: `url(${HomeScreenshot})` }}
      ></div>

      {/* Content Box */}
      <div className="relative z-10 w-full sm:max-w-[60vw] md:h-[90vh] max-w-[90vw] bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden p-3">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={JoinImage}
            alt="Rocket"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side Signup Form */}
        <div className="w-full lg:w-1/2 sm:px-6 sm:py-10 py-4">
          <div className="max-w-md mx-auto flex flex-col justify-center h-full">
            <h6 className="sm:text-2xl text-lg text-center mb-2 font-medium">
              Sign Up Account
            </h6>
            <p className="text-sm text-center mb-4 text-gray-500">
              Enter your personal data to create your account.
            </p>

            <Formik
              initialValues={{
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Signup Data:', values);
              }}
            >
              {() => (
                <Form className="space-y-4 w-full overflow-y-scroll hide-scrollbar">
                  {/* Upload Image */}
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Upload Image
                    </label>
                    <div className="w-full px-3 py-2 border border-gray-300 rounded flex items-center justify-between cursor-pointer bg-white">
                      <span className="text-gray-500">Upload image</span>
                      <FiUpload className="text-gray-500" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      placeholder="Enter your number"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage name="phone" component="div" className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                      Create Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Enter your confirm password"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-sm text-red-500 mt-1" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition-all"
                  >
                    Register Now.
                  </button>

                  {/* Bottom Links */}
                  <div className="text-center text-sm mt-4">
                    Already a Phanom account?{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                      Log in
                    </a>
                  </div>
                  <div className="text-center text-sm">
                    Already onboard?{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                      Log in and fly higher
                    </a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
