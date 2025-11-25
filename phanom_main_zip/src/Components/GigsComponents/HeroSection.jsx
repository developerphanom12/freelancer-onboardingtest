import React, { useState } from 'react';
import Slider from "react-slick";
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import Images from '../../assets/Images';
import { CiClock2 } from 'react-icons/ci';
import { BiRevision } from 'react-icons/bi';

// import img1 from '../assets/posters/poster1.png';
// import img2 from '../assets/posters/poster2.png';
// import img3 from '../assets/posters/poster3.png';
// import img4 from '../assets/posters/poster4.png';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const images = ["https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg", "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg", "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg", "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg","https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",];

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

      {/* Main Layout */}
      <div className='flex w-[100%] lg:pr-10 mx-auto flex-col lg:flex-row gap-10'>
        {/* Left: Carousel */}
        <div className='w-full '>
          {/* Profile Info */}
          <div className='flex items-center gap-4 mb-4'>
            <img
              //   src={avatarImg}
              src={"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg"}
              alt="Ranjani Singh"
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='flex justify-center items-center gap-5'>
              <div>
                <h2 className='font-semibold text-lg'>Ranjani Singh</h2>
                <div className='flex items-center text-sm text-gray-600'>
                  <span>Website Developer</span>
                </div>
              </div>

              <span className='flex items-center ml-2 text-black'>
                <FaStar className='text- mr-1' />
                4.9 (1k+)
              </span>
              <div className='flex items-center gap-2'>
                <img src={Images.PhanomBadge} alt="badge" />
                <span className='text-xl bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4] bg-clip-text text-transparent font-semibold'>Phanom Verified</span>
              </div>
            </div>
          </div>

          {/* Main Carousel */}
          <div className='relative rounded-xl overflow-hidden'>
            <Slider
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              arrows={false}
              className='rounded-xl overflow-hidden '
            >
              {images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i}`}
                    className='w-full h-[450px] object-cover rounded-xl'
                  />
                </div>
              ))}
            </Slider>

            {/* Left Arrow */}
            <button
              onClick={() => nav1?.slickPrev()}
              className='absolute top-1/2 left-0 -translate-y-1/2 bg-violet-600 text-white shadow p-2 rounded-full z-10 hover:bg-gray-100'
            >
              <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => nav1?.slickNext()}
              className='absolute top-1/2 right-0 -translate-y-1/2 bg-violet-600 text-white shadow p-2 rounded-full z-10 hover:bg-gray-100'
            >
              <FaChevronRight />
            </button>
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
                <div key={i} className='px-1'>
                  <img
                    src={img}
                    alt={`Thumb ${i}`}
                    className='w-full h-[80px] object-cover border border-gray-300 rounded-md'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Right: Plan */}
        <div className=' block lg:hidden'>
          <div className="border border-gray-300 rounded-xl p-3 lg:p-6 shadow-xl bg-white">
            {/* Tabs */}
            <div className='flex mb-4 text-lg'>
              {["basic", "standard", "premium"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 border-b-2  font-semibold ${activeTab === tab
                    ? "border-purple-500 text-purple-600"
                    : "border-transparent text-gray-500"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className='flex'>
              <h2 className='text-xl font-bold mb-1'>{currentPlan.title}</h2>
              <p className='text-2xl font-semibold mb-4'>{currentPlan.price}</p>
            </div>

            <div>
            <p className='text-gray-600 mb-2'><CiClock2/>{currentPlan.delivery} <BiRevision/> {currentPlan.revisions}</p>

            </div>

            <ul className='list-disc list-inside space-y-1 text-gray-700 mb-4'>
              {currentPlan.items.map((item, i) => (
                <div className='flex gap-2'>< MdOutlineDone /> <ul key={i}>{item}</ul></div>

              ))}
            </ul>

            <button className='w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition'>Contact me</button>
            <p className='text-sm text-center mt-4 text-gray-600'>
              Need flexibility when hiring? <span className='text-purple-600 cursor-pointer underline'>Request an hourly offer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
