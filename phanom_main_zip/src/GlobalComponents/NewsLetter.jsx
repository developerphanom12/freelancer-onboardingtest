import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxCross1 } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { SiComma } from 'react-icons/si';
import CounterBoxSmall from '../NewComponents/CounterBoxSmall';
import hero1 from "../Assets/heroLogo1.png";
import hero2 from "../Assets/heroLogo2.png";


// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Neeraj Tiwari",
    role: "Director - Digital Engineering",
    company: "Americana Group (Kuwait Food Co.)",
    message:
      "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience .",
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "CTO - Software Enigineering",
    company: "Startup Co. ",
    message:
      "The team delivered our app on time and their support was excellent throughout the journey. Highly recommended. The team delivered our app on time and their support was excellent throughout the journey. Highly recommended.",
    image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];



function CustomPrevArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className="absolute left-3 z-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#eee] rounded-full flex items-center justify-center shadow cursor-pointer"
    >
      <FaChevronLeft />
    </div>
  );
}

function CustomNextArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className="absolute right-3 z-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#eee] rounded-full flex items-center justify-center shadow cursor-pointer"
    >
      <FaChevronRight />
    </div>
  );
}

const NewsLetter = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    captcha: Yup.string().required('Required')
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  if (!show) return null;

  return (
  <div className="fixed inset-0 z-[1000] bg-black bg-opacity-50 flex items-center justify-center px-4">
  <div className=" w-full md:w-[90%] lg:w-[75%] max-h-[90vh] shadow-xl flex flex-col   overflow-hidden relative">

    {/* Modal Body - Carousel + Form (Split + Scrollable) */}
    <div className="flex flex-col md:flex-row divide-x overflow-hidden rounded-lg">

      {/* Left: Carousel (Scroll inside) */}
      <div className="md:w-1/2 bg-[#ECF2FE] px-4 py-4 ">
        <h3 className="text-xl font-bold text-[#2A62EA] mb-2">Leaving already?</h3>
        <p className="text-sm text-gray-600 mb-4">Hear from our clients and why 3000+ businesses trust us</p>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 py-4">
              <div className="relative flex justify-center">
                {/* Main White Card */}
                <div className="bg-white rounded-xl p-4 shadow text-center relative z-10 w-full">
                  <div className="w-16 h-16 rounded-full mx-auto overflow-hidden -mt-12 border-4 border-white shadow-md bg-white">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-base mt-3">{testimonial.name}</h4>
                  <div className='border border-gray-400 rounded-full w-fit px-2 py-1 mx-auto'>
                    <p className="text-xs text-gray-600 m-0">{testimonial.role}</p>
                    <p className="text-[10px] text-gray-500 italic m-0">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-600 flex justify-center items-center mt-1 text-lg"><SiComma /><SiComma /></div>
                  <p className="text-sm text-gray-700 m-0">{testimonial.message}</p>
                </div>

                {/* Background Cards */}
                <div className="absolute -bottom-2 w-[95%] h-full bg-[#ECECEC] rounded-xl z-[2]"></div>
                <div className="absolute -bottom-4 w-[90%] h-full bg-[#DADADA] rounded-xl z-0"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right: Form (Scroll inside) */}
      <div className="md:w-1/2 p-4 bg-white relative overflow-y-auto">
        <button onClick={handleClose} className="absolute top-3 right-4 text-gray-300 hover:text-gray-700">
          <RxCross1 size={20} />
        </button>
        <h4 className="text-sm font-semibold text-gray-800 text-center mb-3">
          Tell us what you need and we'll get back with a cost and timeline estimate
        </h4>

        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
            phone: '',
            captcha: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert('Form submitted successfully');
            console.log(values);
            setShow(false);
          }}
        >
          <Form className="flex flex-col gap-2 text-sm">
            <Field name="name" placeholder="Full Name" className="w-full p-2 border-b-2 rounded-md" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />

            <Field name="email" placeholder="E-Mail ID*" type="email" className="w-full p-2 border-b-2 rounded-md" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

            <Field name="message" as="textarea" placeholder="Describe Your Project/Idea" className="w-full p-2 border-b-2 rounded-md resize-none" />
            <ErrorMessage name="message" component="div" className="text-red-500 text-xs" />

            <Field name="phone" placeholder="Contact Number*" className="w-full p-2 border-b-2 rounded-md" />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />

            <label className="text-xs mt-2 mb-1">2 + 4 =</label>
            <Field name="captcha" placeholder="Enter CAPTCHA" className="w-full p-2 border-b-2 rounded-md" />
            <ErrorMessage name="captcha" component="div" className="text-red-500 text-xs" />

            <button type="submit" className="bg-[#8E59E2] text-white py-2 rounded-md mt-3">
              Schedule Free Consultation
            </button>
          </Form>
        </Formik>
      </div>
    </div>

    {/* Trusted Section */}
    <div className="bg-white  mt-2 rounded-xl">
      <h1 className="text-[#4D4D4D] text-sm sm:text-base text-center font-medium my-2">
        Trusted by 5,000+ businesses for innovative design and growth.
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 max-w-6xl mx-auto scale-50">
        <div className='flex items-center gap-3 flex-wrap justify-center sm:justify-start'>
          <h1 className='text-sm font-bold'>Backed By</h1>
          <img src={hero1} alt="hero1" className='w-[40px] sm:w-[50px]' />
          <img src={hero2} alt="hero2" className='w-[40px] sm:w-[50px]' />
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end gap-3 text-xs">
          <CounterBoxSmall target={300} label="Projects completed" />
          <CounterBoxSmall target={16} label="Award Received" />
          <CounterBoxSmall target={12} label="Years Of Experience" />
          <CounterBoxSmall target={34} label="Team Members" />
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default NewsLetter;
