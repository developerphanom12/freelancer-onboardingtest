import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaAngleRight } from "react-icons/fa6";
import Images from '../../assets/Images.js';

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
    <div className="relative overflow-hidden pt-20 ">
      {/* Navigation Bar */}
      {/* <div className='bg-gradient-to-r py-3 px-4 md:px-20 from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] flex flex-col md:flex-row justify-between items-center relative z-10'>
        <h1 className='text-white font-bold text-2xl mb-2 md:mb-0'>Development</h1>

        <div className='flex flex-wrap items-center gap-4 text-white text-sm md:text-base'>
          <ul>Service</ul>
          <ul>Key Feature</ul>
          <ul>Related Service</ul>
          <ul>Contact Us</ul>
        </div>
      </div> */}


      {/* Breadcrumbs */}
      <div className='max-w-[90%] mx-auto mmb-10 mmt-6 my-4 flex flex-wrap gap-2 text-gray-600 items-center px-5 py-6 relative z-10 text-sm md:text-base'>
        <div>Home</div>
        <FaAngleRight />
        <div>Service</div>
        <FaAngleRight />
        <div>Hire Indian Talent</div>
      </div>

      {/* Card Section */}
      <div className='relative z-[1] w-[92%] sm:w-[90%] border border-gray-300 mx-auto text-left p-4 sm:p-8 rounded-xl overflow-hidden bg-white'>
        <h4 className='text-[24px] sm:text-[32px] font-semibold '>
          <span className='bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] bg-clip-text text-transparent'>
            All-in-One IT Solutions
          </span> – For <br className="hidden sm:block" /> Modern Brands
        </h4>
        <h5 className='text-[16px] sm:text-[18px] font-medium mt-2'>
          Hosting • Digital Growth • Creative Design • Development • Animation • E-Commerce
        </h5>
        <img src={Images.BlueCircle1} alt="circle" className='absolute top-10  rotate-180 right-0 z-10 w-[150px] sm:w-[300px]' />
      </div>


      {/* Backed By Section */}
      <div className='my-10 px-4 flex flex-col justify-center items-center'>
        <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-4'>
          <h1 style={{ fontFamily: 'Open Sauce One' }} className='text-[18px] sm:text-[20px] font-bold'>
            Backed By
          </h1>
          <img src={Images.hero1} alt="hero1" className='w-[60px] sm:w-[80px]' />
          <img src={Images.hero2} alt="hero2" className='w-[60px] sm:w-[80px]' />
        </div>

        <h1
          style={{ fontFamily: 'Open Sauce One' }}
          className='text-[#4D4D4D] text-[16px] sm:text-[18px] mb-6 w-[90%] sm:w-[70%] text-center font-medium'
        >
          Trusted by 5,000+ businesses for innovative design and growth.
        </h1>

        {/* Logo Slider */}
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
      </div>

      {/* Background Union Image */}
      <img
        src={Images.Union}
        className='absolute top-32 right-0 w-[50%] sm:w-[20%] z-[-10] pointer-events-none'
        alt="union-bg"
      />
    </div>
  )
}

export default HeroSection
