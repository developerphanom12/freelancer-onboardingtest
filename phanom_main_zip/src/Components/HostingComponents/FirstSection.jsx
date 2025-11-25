import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import Images from '../../assets/Images'
import { FaAngleRight, FaArrowRight, FaStar } from 'react-icons/fa6';
import { MdOutlineDesignServices, MdWeb } from 'react-icons/md';
import { SiGooglechrome } from 'react-icons/si';
import CounterBoxSmall from '../../GlobalComponents/CounterBoxSmall';

 const companyLogos = [
  { img: Images.company0, name: "Square" },
  { img: Images.company27, name: "Red Redission" },
  { img: Images.company26, name: "Vinod Stainless Steel" },
  { img: Images.company25, name: "Indiabulls" },
  { img: Images.company24, name: "MTC Toys" },
  { img: Images.company23, name: "Milk Bar" },
  { img: Images.company22, name: "Laird Super Food" },
  { img: Images.company21, name: "Ben & Jerry’s" },
  { img: Images.company20, name: "Magic Spoon" },
  { img: Images.company19, name: "Busy Bucket" },
  { img: Images.company18, name: "Kabby" },
  { img: Images.company17, name: "Ellementry" },
  { img: Images.company16, name: "Simple" },
  { img: Images.company15, name: "Tatcha" },
  { img: Images.company14, name: "Ashley" },
  { img: Images.company13, name: "Craft Maestros" },
  { img: Images.company12, name: "Floweraura" },
  { img: Images.company11, name: "Theskinstore.in" },
  { img: Images.company10, name: "Style Dotty" },
  { img: Images.company9, name: "Furniture Walla" },
  { img: Images.company8, name: "The Label Life" },
  { img: Images.company7, name: "Young Fashion" },
  { img: Images.company6, name: "Star Furniture" },
  { img: Images.company5, name: "Blue Dot" },
  { img: Images.company4, name: "Whispering Homes" },
  { img: Images.company3, name: "Styched" },
  { img: Images.company2, name: "AVRO" },
  { img: Images.company1, name: "Stories Furniture" },
  { img: Images.company28, name: "Furniture X" }
];

const FirstSection = () => {
    const sliderRef = useRef(null);
    
          useEffect(() => {
            gsap.to(sliderRef.current, {
                x: '-400%',
                duration: 120,
                repeat: -1,
                ease: 'linear',
            });
        }, []);
  return (
    <div>
      {/* Gradient Header */}
                  <div className='flex justify-between bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] py-3 px-5 md:px-16'>
                      <h1 className='text-white font-bold text-2xl md:text-3xl'>Hosting</h1>
                      <div className='lg:flex gap-4 text-white my-auto hidden '>
                          <h4>All Hosting Options </h4>
                          <h4>Web Hosting </h4>
                          <h4>WordPress Hosting</h4>
                          <h4>Virtual Private Server</h4>
                      </div>
                  </div>
      
                  {/* Breadcrumbs */}
                  {/* <div className='w-full  py-4 px-5 md:px-16 flex flex-wrap gap-2 items-center text-gray-600 text-sm md:text-base'>
                      <span className='hover:underline cursor-pointer'>Home</span>
                      <FaAngleRight />
                      <span className='hover:underline cursor-pointer'>Service</span>
                      <FaAngleRight />
                      <span className='text-purple-600 font-medium'>Development</span>
                  </div> */}
      
              {/* Section 2 */}
              <div className="w-full px-4 py-12 bg-white">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start  justify-start  gap-10 ">
                      {/* Left - Image/Video */}
                      <div className="w-full lg:w-1/2 backdrop-blur-md">
                          <img
                              src="https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
                              alt="dev"
                              className="rounded-[10px] w-full object-cover shadow-lg"
                          />
                      </div>
      
      
                      {/* Right - Content */}
                      <div className="w-full lg:w-1/2">
                          <p className="text-sm text-gray-500 font-medium mb-2">Virtual Private Server</p>
                          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
                              Flexible , private and affordable <br />
                              VPS Hosting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#459CE1] to-[#D11AE7]">Here We Are</span>
                          </h2>
      
                          <ul className="space-y-3 text-gray-700 mb-6">
                              <li className="flex items-center gap-2">
                                  <MdWeb className="text-lg text-[#6F42C1]" />
                                  Expand major projects with hardware strategy design options.
                              </li>
                              <li className="flex items-center gap-2">
                                  <MdOutlineDesignServices className="text-lg text-[#6F42C1]" />
                                  Pick Your Dream OS.
                              </li>
                              <li className="flex items-center gap-2">
                                  <SiGooglechrome className="text-lg text-[#6F42C1]" />
                                  Maintain Sites and Applications uptime of 99.9%.*
                              </li>
                          </ul>
      
                          {/* Buttons */}
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                              <button className="bg-[#6C5FD4] text-white px-5 py-2 rounded-sm flex items-center gap-2">
                                  Get Plans and Pricing<FaArrowRight />
                              </button>
                              <button className="text-gray-700 ">
                                  Buy Fully Managed VPS
                              </button>
                          </div>
      
                          {/* Star Rating */}
                          <div className="flex items-center justify-start gap-2 text-gray-700 text-sm">
                              <div className="flex text-yellow-400 text-base">
                                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
                              </div>
                              <h7 className="flex items-center ml-2">4.6 out of 5 stars based on 110,937 reviews</h7>
                              <span className="font-semibold text-black ml-2 cursor-pointer hover:underline">View All</span>
                          </div>
      
                      </div>
                  </div>
      
      
                  {/* <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto mt-10 ">
                      <div className='flex items-center gap-4 sm:gap-8 mb-4 flex-1'>
                          <h1 style={{ fontFamily: 'Open Sauce One' }} className='text-[18px] sm:text-[20px] font-bold'>
                              Backed By
                          </h1>
                          <img src={Images.hero1} alt="hero1" className='w-[60px] sm:w-[80px]' />
                          <img src={Images.hero2} alt="hero2" className='w-[60px] sm:w-[80px]' />
                      </div>
      
                      <div className="flex gap-3 flex-1 justify-end ">
                          <CounterBoxSmall target={300} label="Projects completed" />
                          <CounterBoxSmall target={16} label="Award Received" />
                          <CounterBoxSmall target={12} label="Years Of Experience" />
                          <CounterBoxSmall target={34} label="Team Members" />
                      </div>
      
                  </div> */}
      
                  {/* Backed By Section */}
                  {/* <div className='mt-10 px-4 flex flex-col justify-center items-center'>
      
                      <h1
                          style={{ fontFamily: 'Open Sauce One' }}
                          className='text-[#4D4D4D] text-[16px] sm:text-[18px] mb-6 w-[90%] sm:w-[70%] text-center font-medium'
                      >
                          Trusted by 5,000+ businesses for innovative design and growth.
                      </h1>
      
                     
                      <div className='relative w-full max-w-[1000px] overflow-hidden'>
                          <div className='flex whitespace-nowrap' ref={sliderRef}>
                              {companyLogos?.map((item, i) => (
                                  <div
                                      key={i + Math.random()}
                                      className='flex items-center justify-center gap-4 w-[180px] sm:w-[200px] shrink-0 px-2 sm:px-4 py-2 scale-75'
                                  >
                                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
                                          <img
                                              src={item.img}
                                              alt={`Company ${i + 1}`}
                                              className="w-full h-full object-contain"
                                          />
                                      </div>
                                      <p style={{ fontFamily: 'Open Sauce One' }} className='text-base sm:text-xl font-semibold text-black'>
                                          {item.name}
                                      </p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div> */}
              </div>
      
    </div>
  )
}

export default FirstSection
