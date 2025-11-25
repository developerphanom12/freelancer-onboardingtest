import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Images from '../assets/Images';

// hot-toast
import toast, { Toaster } from 'react-hot-toast';

// If you don't have .env, the fallback keeps working locally.
const API_BASE = import.meta.env?.VITE_API_BASE || 'https://admin.phanomprofessionals.com';

const BookAppointmentForm = () => {
  const navigate = useNavigate();

  // ------- Contact Info (from API) -------
  const [contact, setContact] = useState({
    phone: '',
    email: '',
    address: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    discord: '',
  });

  useEffect(() => {
    let abort = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/contact-info`);
        const data = await res.json();
        if (!abort && data) {
          setContact({
            phone: data.phone || '',
            email: data.email || '',
            address: data.address || '',
            twitter: data.twitter || '',
            instagram: data.instagram || '',
            linkedin: data.linkedin || '',
            discord: data.discord || '',
          });
        }
      } catch {
        // Silently ignore; keep defaults
      }
    })();
    return () => { abort = true; };
  }, []);

  // ------- Form validation -------
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    service: Yup.string().required('Please select a service'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    service: '',
    message: ''
  };

  // ------- Submit handler -------
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch(`${API_BASE}/api/booking-appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));
      // Your controller returns { ok: true, id, message }
      if (res.ok && (data?.ok === true)) {
        toast.success(data?.message || "Appointment booked successfully!");
        resetForm();
        navigate("/thankyou");
      } else {
        // Show server validation error if available
        const firstError =
          (data?.errors && Object.values(data.errors)[0]?.[0]) ||
          data?.message ||
          "Failed to submit booking";
        toast.error(firstError);
      }
    } catch (err) {
      toast.error("Failed to submit booking");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen p-3 pt-20">
        {/* Left Section - Contact Information */}
        <div className="w-full md:w-2/5 bg-[#8E59E2] text-white p-8 md:p-12 relative overflow-hidden rounded-3xl">
          <img src={Images.AppointmentLogo} alt="" className="w-[50%] absolute right-0 bottom-0 z-0" />
          <img src={Images.DoubleElipse} alt="" className="w-[50%] absolute -left-[23%] rotate-180 -top-[5%] z-0" />

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Contact Information</h2>
              <p className="mb-10 text-gray-300 text-xl">Say something to start a live chat!</p>
            </div>

            <div className="space-y-6">
              {(contact.phone || contact.email || contact.address) ? (
                <>
                  {contact.phone ? (
                    <div className="flex items-start gap-3">
                      <FaPhoneAlt size={20} className="mt-1.5" />
                      <p className="text-lg text-[#ffffff]">{contact.phone}</p>
                    </div>
                  ) : null}

                  {contact.email ? (
                    <div className="flex items-start gap-3">
                      <IoMail size={20} className="mt-1.5" />
                      <p className="text-lg text-[#ffffff]">{contact.email}</p>
                    </div>
                  ) : null}

                  {contact.address ? (
                    <div className="flex items-start gap-3">
                      <FaLocationDot size={30} className="mt-1.5" />
                      <p className="text-lg text-[#ffffff]">{contact.address}</p>
                    </div>
                  ) : null}
                </>
              ) : (
                // Fallback (until API responds)
                <>
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt size={20} className="mt-1.5" />
                    <p className="text-lg text-[#ffffff]">+91 6293360882</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <IoMail size={20} className="mt-1.5" />
                    <p className="text-lg text-[#ffffff]">demo@gmail.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaLocationDot size={30} className="mt-1.5" />
                    <p className="text-lg text-[#ffffff]">
                      E-193, Third Floor, TOS Tower, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Social Media Icons (only show if link exists) */}
            <div className="flex space-x-4 mt-6">
              {contact.twitter ? (
                <a
                  href={contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-black bg-white hover:text-[#8E59E2] transition-colors"
                >
                  <FaTwitter />
                </a>
              ) : null}

              {contact.instagram ? (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-black bg-white hover:text-[#8E59E2] transition-colors"
                >
                  <FaInstagram />
                </a>
              ) : null}

              {contact.discord ? (
                <a
                  href={contact.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-black bg-white hover:text-[#8E59E2] transition-colors"
                >
                  <FaDiscord />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-3/5 bg-white p-8 md:p-12 max-h-screen md:space-y-4">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:border-[#8E59E2]"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:border-[#8E59E2]"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:border-[#8E59E2]"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:border-[#8E59E2]"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Service?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Field type="radio" name="service" value="fullstack" className="form-radio text-[#8E59E2] h-4 w-4" />
                      <span className="text-sm">Full Stack Development</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Field type="radio" name="service" value="design" className="form-radio text-[#8E59E2] h-4 w-4" />
                      <span className="text-sm">Design and Animation</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Field type="radio" name="service" value="ecommerce" className="form-radio text-[#8E59E2] h-4 w-4" />
                      <span className="text-sm">E-Commerce Solutions</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Field type="radio" name="service" value="marketing" className="form-radio text-[#8E59E2] h-4 w-4" />
                      <span className="text-sm">Digital Marketing</span>
                    </label>
                  </div>
                  <ErrorMessage name="service" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full px-3 py-1 border-b border-gray-300 focus:outline-none focus:border-[#8E59E2] resize-none"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#8E59E2] text-white py-3 px-10 rounded-xl font-medium hover:bg-[#7d4ecc] transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Backed By Section */}
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center">
            <div className="flex my-10 justify-center items-center gap-5">
              <h1 style={{ fontFamily: 'Open Sauce One' }} className="text-[20px] font-bold">Backed By</h1>
              <img src={Images.hero1} alt="" />
              <img src={Images.hero2} alt="" />
            </div>
            <img src={Images.Logo} className="h-12" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentForm;
