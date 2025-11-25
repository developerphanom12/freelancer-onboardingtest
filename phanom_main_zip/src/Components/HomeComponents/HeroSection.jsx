import React, { useState } from 'react'
import Images from '../../assets/Images.js';
import { FaStar } from "react-icons/fa6";
import CounterBox from '../../GlobalComponents/CounterBox.jsx';
import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Link, useNavigate } from "react-router-dom";

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


const HeroSection = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const sliderRef = useRef(null);
  gsap.registerPlugin(TextPlugin);
  // const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Add handlers for modal
  // const handleOpenModal = () => {
  //   setShowAppointmentModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowAppointmentModal(false);
  // };

    const phrases = [
    {
      animated: "Amplify Growth",
      build: "With Tech-Driven",
      sell: "Marketing",
      para: "Precision campaigns fueling engagement and conversion",
    },
    {
      animated: "Transform ideas",
      build: "Into Powerful",
      sell: "Software",
      para: "Expert development solutions fueling growth at any scale",
    },
    {
      animated: ` ${" "}Elevate System`,
      build: "With next-Gen",
      sell: "devops",
      para: "Automated, scalable infrastructure for uninterrupted performance",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let index = 0;

    const type = () => {
      gsap.to(textRef.current, {
        duration: 1,
        text: phrases[index].animated,
        ease: "none",
        onComplete: () => {
          gsap.to(textRef.current, {
            delay: 2,
            duration: 1,
            text: "\u00A0",
            ease: "none",
            onComplete: () => {
              index = (index + 1) % phrases.length;
              setCurrentIndex(index); // Update text parts
              type(); // loop again
            },
          });
        },
      });
    };

    type();
  }, []);

    useEffect(() => {
    gsap.to(sliderRef.current, {
      x: "-400%",
      duration: 120,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 80, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1,
      }
    );
  }, []);


  return (
     <section className="bg-gradient-to-b from-[#F2E7FE] via-[#EEE7FE] to-[#FFFFFF] w-[100%] overflow-hidden">
            <div className="w-[100%] h-[83%]">
              {/* Navbar */}
              {/* <div className="relative z-50 ">
                            <Navbar />
                        </div> */}
    
              {/* Heading */}
              <div className="flex justify-center items-center pt-10">
                <div className="flex flex-col gap-1 w-[80%] mt-10 justify-center items-center text-black">
                  <div className="sm:text-[48px] text-[30px] font-bold w-[80%] text-center relative leading-tight">
                    <span className="relative inline-block min-w-[380px]">
                      <span className="invisible absolute my-2 sm:m-0 h-20">
                        Transform ideas
                      </span>
                      {/* Animated text span */}
                      <span
                        ref={textRef}
                        className="absolute left-9 -top-10 sm:static sm:left-auto sm:top-auto sm:text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#469AE2] to-[#CE1AE8]"
                      ></span>
                    </span>{" "}
                    - {phrases[currentIndex].build}
                    <br />
                    <span className="sm:text-[48px] text-[30px]">
                      {phrases[currentIndex].sell}
                    </span>
                  </div>
                  <h1
                    
                    className="text-[14px] mt-2 text-center"
                  >
                    {phrases[currentIndex].para}
                  </h1>
                  <div className="flex my-10 justify-center items-center gap-5">
                    <h1
                      
                      className="text-[20px] font-bold "
                    >
                      Backed By
                    </h1>
                    <img src={Images.hero1} alt="" />
                    <img src={Images.hero2} alt="" />
                  </div>
                  <Link
                    to="/book-appointment"
                    className="bg-[#8E59E2] relative z-50 w-fit text-white text-[18px] rounded-full sm:px-7 sm:py-2 px-5 py-2 items-center justify-center text-2xl font-bold mb-5 sm:mb-0 cursor-pointer hover:bg-[#7d4ecc] transition-colors"
                  >
                    Book an Appointment
                  </Link>
    
                </div>
              </div>
    
              {/* Cards */}
              <div className="relative sm:mx-20 mx-4 mt-20 border border-white grid grid-cols-2 sm:grid-cols-4 gap-5 pt-10 p-4 rounded-3xl ">
                {/* Left Top Image */}
                <img
                  src={Images.Abstract}
                  alt="Decoration Left"
                  className="absolute -top-68 sm:left-26 -left-6 w-36 h-68 "
                />
    
                {/* Right Top Image (rotated) */}
                <img
                  src={Images.Abstract}
                  alt="Decoration Right"
                  className="absolute -top-68 sm:right-26 -right-6 w-36 h-68 scale-x-[-1] "
                />
                <div className="absolute -top-6 left-1/2 -translate-x-1/2  px-4 py-1 rounded-full flex items-center gap-2">
                  <img src={Images.container} alt="Create Own" className="w-62 h-10" />
                  {/* <span className="text-sm font-semibold text-[#353535]">623+ Happy Customers</span> */}
                </div>
                <CounterBox target={300} label="Projects completed" />
                <CounterBox target={16} label="Award Received" />
                <CounterBox target={12} label="Years Of Experience" />
                <CounterBox target={34} label="Team Members" />
              </div>
    
              {/* Trusted By */}
              <div className="flex flex-col justify-center items-center sm:my-10 my-0">
                <h1
                  
                  className="text-[#4D4D4D] text-[18px] mb-6 sm:mt-5 w-[80%] font-medium text-center"
                >
                  Trusted by 5,000+ businesses for innovative design and growth.
                </h1>
    
                {/* Blur container */}
                <div className="relative w-[1000px] overflow-hidden mx-auto">
                  {/* Left Blur */}
                  {/* Left Blur */}
                  {/* <div className='absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#F2E7FE] to-transparent pointer-events-none z-10'></div> */}
    
                  {/* Right Blur */}
                  {/* <div className='absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#F2E7FE] to-transparent pointer-events-none z-10'></div> */}
    
                  {/* Scrollable Content */}
                  <div className="flex whitespace-nowrap" ref={sliderRef}>
                    {/* Duplicated logos for smooth loop */}
    
                    {companyLogos?.map((item, i) => (
                      <div
                        key={i + Math.random()}
                        className="flex items-center justify-center gap-4 w-[200px] shrink-0 px-4 py-2 scale-75"
                      >
                        <img
                          src={item.img}
                          alt={`Company ${i + 1}`}
                          className="w-14 h-14 object-cover rounded-full"
                        />
    
                        {/* <div>
                                                 <img
                                                src={item.img}
                                                alt={`Company ${i + 1}`}
                                                className="w-full h-auto object-contain rounded-full"
                                            />
                                            </div> */}
    
                        {/* <div className="w-14 h-14 rounded-full overflow-hidden">
                          <img
                            src={item.img}
                            alt={`Company ${i + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div> */}
    
                        <p
                          
                          className="text-xl font-semibold text-black my-auto"
                        >
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
    
                <hr className="sm:w-[50%] w-[80%] text-[#EDEFF3] sm:my-10 my-5" />
    
                <div className="flex gap-6 mx-4 mb-7 mt-3 sm:my-0">
                  <div className="flex gap-3  ">
                    <img
                      className="p-1 sm:p-3 w-14 h-14 bg-white border border-[#EDEFF3] rounded-2xl "
                      src={Images.trustPilot}
                      alt=""
                    />
                    <div className="">
                      <div className="bg-[#EDEFF3] rounded-full flex p-0.5 w-[70%] sm:w-[60%] items-center">
                        <div className="bg-white rounded-l-full rounded-r-sm w-[60%] flex justify-center items-center gap-1">
                          <FaStar className="text-yellow-300" /> 4.6
                        </div>
                        <h1
                          
                          className="text-[#666666] px-2 text-[16px] text-center"
                        >
                          127
                        </h1>
                      </div>
    
                      <p className="text-[#4C4C4C]">Rating by Trusted users</p>
                    </div>
                  </div>
                  <div className="flex gap-3 ">
                    <img
                      className="p-2 sm:p-3 w-14 h-14 bg-white border border-[#EDEFF3] rounded-2xl"
                      src={Images.google}
                      alt=""
                    />
                    <div className="">
                      <div className="bg-[#EDEFF3] rounded-full flex p-0.5 w-[70%]  sm:w-[70%] items-center">
                        <div className="bg-white rounded-l-full  w-[60%] flex justify-center items-center gap-1 px-1">
                          <FaStar className="text-yellow-300 " /> 4.8
                        </div>
                        <h1
                          
                          className="text-[#666666] px-2 text-[16px] text-center"
                        >
                          932
                        </h1>
                      </div>
                      <p className="text-[#4C4C4C]">on Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default HeroSection
