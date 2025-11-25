import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Images from '../../assets/Images';

const ForgotPassword = () => {
    const [showOtpForm, setShowOtpForm] = useState(false);
    const otpRefs = useRef([]);

    const emailSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const otpSchema = Yup.object().shape({
        otp: Yup.array().of(Yup.string().required('Required')).min(6, 'All fields required'),
    });

    const handleOtpChange = (index, value, setFieldValue, values) => {
        if (value.length <= 1) {
            const newOtp = [...(values.otp || Array(6).fill(''))];
            newOtp[index] = value;
            setFieldValue('otp', newOtp);

            // Auto focus next input
            if (value && index < 5) {
                otpRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleOtpKeyDown = (index, e, setFieldValue, values) => {
        // Handle backspace
        if (e.key === 'Backspace' && !(values.otp && values.otp[index]) && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden max-w-[1500px] mx-auto">
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm scale-105 z-0"
                style={{ backgroundImage: `url(${Images.HomeScreenshot})` }}
            ></div>

            <div className="relative z-10 w-full sm:max-w-[80%] lg:max-w-[60%]  max-w-[90%] bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden p-3">
                <div className="w-full lg:w-1/2 h-auto lg:h-auto">
                    <img src={Images.LoginBg} alt="Rocket" className="w-full h-full object-cover" />
                </div>

                <div className="w-full lg:w-1/2 sm:px-6 sm:py-10 py-4">
                    <div className="max-w-md mx-auto flex flex-col justify-center items-center h-full">
                        {!showOtpForm ? (
                            <>
                                <h6 className="sm:text-2xl text-lg text-center mb-4 font-normal">
                                    Forgot Password
                                </h6>
                                <p className="text-sm text-center mb-8 text-gray-500">
                                    Confirm your registered email to reset your password.
                                </p>

                                <Formik
                                    initialValues={{ email: '' }}
                                    validationSchema={emailSchema}
                                    onSubmit={(values) => {
                                        console.log('Email submitted:', values);
                                        setShowOtpForm(true);
                                    }}
                                >
                                    <Form className="space-y-4 w-[90%]">
                                        <div>
                                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
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

                                        <button
                                            type="submit"
                                            className="w-full py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition-all"
                                        >
                                            Confirm
                                        </button>

                                        <div className="text-center text-sm mt-4">
                                            Already a Phanom account?{' '}
                                            <a href="/login" className="text-blue-500 hover:underline">
                                                Log in
                                            </a>
                                        </div>
                                    </Form>
                                </Formik>
                            </>
                        ) : (
                            <>
                                <h6 className="sm:text-2xl text-lg text-center mb-4 font-normal">
                                    Forgot Your Password
                                </h6>
                                <p className="text-sm text-center mb-8 text-gray-500">
                                    Please check your inbox and enter the OTP below to continue.
                                </p>

                                <Formik
                                    initialValues={{ otp: Array(6).fill('') }}
                                    validationSchema={otpSchema}
                                    onSubmit={(values) => {
                                        console.log('OTP:', values.otp.join(''));
                                    }}
                                >
                                    {({ values, setFieldValue }) => (
                                        <Form className="space-y-6 w-[90%]">
                                            <div>
                                                <label className="block mb-3 text-sm font-medium text-gray-700 text-left">
                                                    Enter OTP
                                                </label>
                                                <div className="flex justify-center gap-2 sm:gap-3">
                                                    {Array(6).fill('').map((_, i) => (
                                                        <input
                                                            key={i}
                                                            ref={(el) => (otpRefs.current[i] = el)}
                                                            type="text"
                                                            maxLength="1"
                                                            value={(values.otp && values.otp[i]) || ''}
                                                            onChange={(e) => handleOtpChange(i, e.target.value, setFieldValue, values)}
                                                            onKeyDown={(e) => handleOtpKeyDown(i, e, setFieldValue, values)}
                                                            className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full py-2 rounded bg-purple-500 text-white hover:bg-purple-600 transition-all"
                                            >
                                                Verify
                                            </button>

                                            <div className="text-center text-sm mt-4">
                                                Already a Phanom account?{' '}
                                                <a href="/login" className="text-blue-500 hover:underline">
                                                    Log in
                                                </a>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
