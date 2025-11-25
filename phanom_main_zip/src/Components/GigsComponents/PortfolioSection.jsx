import React, { useState } from 'react';
import Slider from "react-slick";
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

// import img1 from '../assets/posters/poster1.png';
// import img2 from '../assets/posters/poster2.png';
// import img3 from '../assets/posters/poster3.png';
// import img4 from '../assets/posters/poster4.png';

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [nav1, setNav1] = useState(null);
     const [nav2, setNav2] = useState(null);

  const images = ["https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg", "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg", "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",];

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const plans = {
    basic: {
      title: '"Silver" basic Woocommerce store',
      price: '₹7,208',
      delivery: '4-day delivery',
      revisions: '2 Revisions',
      items: [
        "Functional website",
        "2 pages",
        "Responsive design",
        "Content upload",
        "4 plugins/extensions",
        "E-commerce functionality",
        "5 products"
      ]
    },
    standard: {
      title: 'Gold Standard Plan',
      price: '₹14,999',
      delivery: '5-day delivery',
      revisions: '3 Revisions',
      items: [
        "Functional website",
        "5 pages",
        "Responsive design",
        "Content upload",
        "10 plugins/extensions",
        "Payment gateway setup"
      ]
    },
    premium: {
      title: 'Platinum Premium Plan',
      price: '₹25,000',
      delivery: '7-day delivery',
      revisions: 'Unlimited Revisions',
      items: [
        "Everything in Standard",
        "10+ pages",
        "Custom animations",
        "SEO optimization",
        "Premium plugins",
        "Dedicated support"
      ]
    }
  };

  const currentPlan = plans[activeTab];

  return (
    <div>

        {/* Heading */}
        <h5 className='text-2xl font-semibold mb-3 ml-2'>My Portfolio</h5>
      
      {/* Main Layout */}
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Left: Carousel */}
        <div className='lg:w-[50%] '>
      

      {/* Main Carousel */}
      <div className='relative rounded-xl '>
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          arrows={false}
          className='rounded-xl '
        >
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Slide ${i}`}
                className='w-full h-[250px] object-cover rounded-xl'
              />
            </div>
          ))}
        </Slider>

        {/* Left Arrow */}
        {/* <button
          onClick={() => nav1?.slickPrev()}
          className='absolute top-1/2 left-0 -translate-y-1/2 bg-violet-600 text-white shadow p-2 rounded-full z-10 hover:bg-gray-100'
        >
          <FaChevronLeft />
        </button> */}

        {/* Right Arrow */}
        {/* <button
          onClick={() => nav1?.slickNext()}
          className='absolute top-1/2 right-0 -translate-y-1/2 bg-violet-600 text-white shadow p-2 rounded-full z-10 hover:bg-gray-100'
        >
          <FaChevronRight />
        </button> */}
      </div>

      {/* Thumbnail Carousel */}
      <div className='mt-3 '>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {images.map((img, i) => (
            <div key={i} className=''>
              <img
                src={img}
                alt={`Thumb ${i}`}
                className='w-full h-[50px] object-cover border border-gray-300 rounded-md'
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>

      {/* Right - Project Info */}
        <div className='lg:w-[50%]'>    
        <p className="text-sm text-gray-500">From: March 2025</p>
        <h2 className="text-xl font-semibold">
          Multi cuisine Food Delivery App Development
        </h2>
        <p className="">
          Creative and detail-oriented UI/UX designer passionate about crafting
          user-friendly and visually stunning digital experiences.
        </p>

        <div className="flex gap-2">
          <span className="px-3 py-1 border rounded-full">JSX</span>
          <span className="px-3 py-1 border rounded-full">APIs</span>
          <span className="px-3 py-1 border rounded-full">+4</span>
        </div>

        <div className="flex justify-between gap-6 mt-4">
          <div>
            <p className="text-sm text-gray-500">Project cost</p>
            <p className="font-semibold">₹4000 – ₹5000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Project duration</p>
            <p className="font-semibold">1–3 months</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
