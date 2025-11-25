
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ConnectWithUs = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    contact: Yup.string().required('Contact is required'),
    countryCode: Yup.string().required('Country code is required'),
    meeting: Yup.string().required('Meeting schedule is required'),
    service: Yup.string().required('Service selection is required'),
    projectDetails: Yup.string().required('Project details are required')
  });

  const initialValues = {
    name: '',
    email: '',
    contact: '',
    countryCode: '+91',
    meeting: '',
    service: '',
    projectDetails: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted:', values);
    // Handle form submission here
    setSubmitting(false);
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-8 lg:py-16 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Explore a rewarding career in the Phenom Professional Industry. Fill out the form to get started.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl  font-bold text-gray-900 leading-tight mb-6">
            Put On Ice To Preserve Your Viewers With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E59E1] to-[#D01AE5]">
              Your Potential!
            </span>
          </h1>

          <div className="space-y-4 text-gray-700 mb-8">
            <p>
              Preserve your audience's attention and captivate them by showcasing your true potential. In today's fast-paced world, making a lasting impression is crucial. We help you create unforgettable experiences that resonate with your viewers, keeping them engaged and coming back for more.
            </p>
            
            <p>
              With our innovative strategies, we ensure that your content stands out,{' '}
              <span className="text-[#8E59E1] font-medium">maintaining its relevance and impact</span>.
            </p>

            <p>
              Whether it's through dynamic visuals, compelling storytelling, or cutting-edge design, we work to enhance your message and maximize your reach,{' '}
              <span className="text-[#8E59E1] font-medium">turning potential into lasting success</span>.
            </p>
          </div>

          <button onClick={() => navigate("/book-appointment")} className="bg-[#8E59E2] text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit hover:shadow-lg transition-all duration-300">
            Connect with us <FaArrowRight />
          </button>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-2xl backdrop-blur-2xl p-6 sm:py-4 sm:px-4">
            <div className="mb-2">
              <h2 className="text-2xl bg-gradient-to-r from-[#4C96E0] via-[#9851E2] to-[#CD1BE7] font-bold bg-clip-text text-transparent ">
                Book Your Appointment
              </h2>
              <p className="text-gray-600 text-sm">
                Where innovation meets unstoppable growth.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-2">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Titu Kumar"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="titukumar@gmail.com"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Contact Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact
                    </label>
                    <div className="flex">
                      <Field
                        as="select"
                        name="countryCode"
                        className="w-1/3 px-3 py-1.5 border border-gray-300 rounded-l-lg border-r-0 focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all"
                      >
                        <option value="+91">IND (+91)</option>
                        <option value="+1">USA (+1)</option>
                        <option value="+44">UK (+44)</option>
                        <option value="+61">AUS (+61)</option>
                      </Field>
                      <Field
                        type="tel"
                        name="contact"
                        placeholder="9999 999999"
                        className="w-2/3 px-3 py-1.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <ErrorMessage name="contact" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Schedule Meeting */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Schedule your Meeting
                    </label>
                    <Field
                      as="select"
                      name="meeting"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </Field>
                    <ErrorMessage name="meeting" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Select Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Service
                    </label>
                    <Field
                      as="select"
                      name="service"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select</option>
                      <option value="development">Development</option>
                      <option value="marketing">Marketing</option>
                      <option value="devops">DevOps</option>
                      <option value="server-management">Server Management</option>
                    </Field>
                    <ErrorMessage name="service" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Write Project Details
                    </label>
                    <Field
                      as="textarea"
                      name="projectDetails"
                      rows="3"
                      placeholder="Write Project Details"
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8E59E1] focus:border-transparent outline-none transition-all resize-none"
                    />
                    <ErrorMessage name="projectDetails" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 w-full text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-[50%] bg-[#8E59E2] text-white py-3 px-6 rounded-full font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;

