import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Images from '../../assets/Images';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await fetch('https://admin.phanomprofessionals.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('token', data.token);
        // Redirect to coming-soon page
        navigate('/coming-soon');
      } else {
        // Handle validation errors from API
        if (data.errors) {
          Object.keys(data.errors).forEach((key) => {
            setFieldError(key, data.errors[key][0]);
          });
        } else if (data.message) {
          alert(data.message); // general error
        }
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden max-w-[1500px] mx-auto">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105 z-0"
        style={{ backgroundImage: `url(${Images.HomeScreenshot})` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full sm:max-w-[80%] lg:max-w-[60%]  max-w-[90%] bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden p-3">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 h-auto lg:h-auto">
          <img
            src={Images.LoginBg}
            alt="Rocket"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 sm:px-6 sm:py-10 py-4 ">
          <div className="max-w-md mx-auto flex flex-col justify-center items-center h-full ">
            <h6 className="sm:text-2xl text-lg text-center mb-4 font-normal">
              Log In Your Account
            </h6>
            <p className="text-sm text-center mb-8 text-gray-500">
              Enter your Email Id & Password to login your account.
            </p>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4 w-[90%]">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="eg. phanom@gmail.com"
                      className="w-full px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500 mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Logging in...' : 'Login Now'}
                  </button>

                  <div className="text-center text-sm mt-4">
                    Not a Phanom Account?{' '}
                    <a
                      href="/indianTalent"
                      className="text-blue-500 hover:underline"
                    >
                      Register Now.
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

export default Login;
