import React from 'react'
import Images from '../../assets/Images.js';

const howItWorks = [
    { img: Images.lead, title: "Project Understanding" },
    { img: Images.praposal, title: "Proposal and Wireframe" },
    { img: Images.pen, title: "Designing & Development" },
    { img: Images.digital, title: "Development + Server Setup" },
    { img: Images.vector, title: "Lead Generation Campaigns" },
  ];

const HowItWorks = () => {
  return (
   <section className="pb-16 px-8 sm:px-20 bg-gradient-to-b from-[#FFFFFF] via-[#EEE7FE] to-[#F8F6FE] ">
        <h2
          
          className="sm:text-[48px] text-[36px] text-[#8E59E2]  font-sauce font-bold  text-left mb-5 sm:mb-10 capitalize"
        >
          How It Works
        </h2>

        <div className="relative sm:flex-row flex-col flex items-start justify-between w-[100%] mx-auto sm:py-16 sm:px-10 px-9 py-8 bg-white shadow-md rounded-2xl ">
          
          {/* Line */}
          <div className="absolute sm:top-[42%] sm:left-[10%] sm:w-[75%] 2xl:w-[78%] top-20 ml-6 sm:h-1 w-1 h-[73%] bg-gray-300 z-0" />
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col flex-row items-center my-5 sm:my-0 z-10 sm:w-[190px]"
              // style={{
              //   flexDirection: window.innerWidth >= 640 ? "column" : "row",
              // }}
            >
              <div className="bg-[#8E59E2] sm:w-16 sm:h-16 w-12 h-12 rounded-full flex items-center justify-center sm:mb-2">
                <img
                  src={item.img}
                  alt={`Step ${index + 1}`}
                  className="sm:w-8 sm:h-8 w-6 items-center"
                />
              </div>

              <p
                
                className="sm:text-sm font-semibold text-[15px] text-center ml-2 sm:ml-0 text-[#8E59E2]"
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default HowItWorks
