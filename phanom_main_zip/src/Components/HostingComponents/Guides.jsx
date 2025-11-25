import React from "react";
import Images from "../../assets/Images";

const Guides = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-12">
        <div className="w-[60%]">
          <h2 className="text-xl mb-2">Ecommerce-ready hosting.</h2>
          <h3 className="text-2xl md:text-3xl font-bold">
            Or, focus solely on your business and have us manage your VPS Hosting.
          </h3>
        </div>
        <div className="bg-[#6C5FD4] text-center py-2 px-4 text-white rounded-sm cursor-pointer hover:bg-[#5b4fc4] transition">
          Learn More
        </div>
      </div>

      {/* Gradient Section */}
    </div>
      <div className=" overflow-hidden bg-gradient-to-r from-[#ECB0F6]  to-[#BDDCF5] flex flex-col md:flex-row items-center md:items-start">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex md:flex-row flex-col justify-center  md:justify-end ">
          <div className="m-10">
            <h4 className="text-4xl font-semibold">Adarsh</h4>
            <p className="text-lg">Phanom Guide</p>
          </div>
          <img
            src={Images.AdarshSir}
            alt="Adarsh - Phanom Guide"
            className=" h-[500px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-white p-6 my-auto">
          <h4 className="flex items-center text-2xl md:text-3xl text-black gap-2  font-semibold mb-2">
            {/* Icon */}
            <span className="p-2 rounded-full"><img src={Images.PhanomLogo} alt="logo" /></span> Guides
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            We love to help. <br /> Seriously.
          </h2>
          <p className="text-sm md:text-base text-black mb-6 w-full sm:w-[80%]">
            With a dedicated account manager and technical team always on standby, 
            we ensure a seamless experience from day one. We’re not just service providers; 
            we're your technology partners.
          </p>
          <button className="bg-[#6C5FD4] hover:bg-[#5b4fc4] text-white py-4 px-8 rounded-md transition">
            Get Help
          </button>
        </div>
      </div>
    
    </>
  );
};

export default Guides;
