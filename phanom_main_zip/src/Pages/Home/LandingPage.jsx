import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useNavigate } from "react-router-dom";
import Images from "../../assets/Images.js";
import VideoSection from "../../Components/HomeComponents/VideoSection.jsx";
import WhyChooseUs from "../../Components/HomeComponents/WhyChooseUs.jsx";
import ExploreServices from "../../Components/HomeComponents/ExploreServices.jsx";
import HeroSection from "../../Components/HomeComponents/HeroSection.jsx";
import WhyTrustUs from "../../Components/HomeComponents/WhyTrustUs.jsx";
import HowItWorks from "../../Components/HomeComponents/HowItWorks.jsx";
import ConnectWithUs from "../../Components/HomeComponents/ConnectWithUs.jsx";
// import { Appointment } from "../Components/Appointment/Appointment";
// import ProofAndResults from "../../Components/HomeComponents/ProofAndResults.jsx";

const NewLandingPage = () => {

  const navigate = useNavigate();

// Add state for modal
// const [showAppointmentModal, setShowAppointmentModal] = useState(false);

// Add handlers for modal
//   const handleOpenModal = () => {
//     setShowAppointmentModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowAppointmentModal(false);
//   };


  return (
    <div>
      {/* Add the Appointment modal component */}
      {/* <Appointment show={showAppointmentModal} handleClose={handleCloseModal} /> */}

      <div className="2xl:w-[1500px] w-full h-[100%] absolute top-0 justify-between z-0">
        <img
          className="w-[40%] h-[800px] absolute left-0 z-0"
          src={Images.leftAbstract}
          alt=""
        />
        <img
          className="w-[40%] h-[800px] absolute right-0 z-0"
          src={Images.RightAbstract}
          alt=""
        />
      </div>

      {/* Hero Section */}
     <HeroSection />

      {/* Services */}
      <ExploreServices />

      {/* Why Clients Trust Us */}
      <WhyTrustUs />

      {/* How it Works */}
      <HowItWorks />
      

      {/* Proof and Results Section */}
       {/* <ProofAndResults /> */}

      {/* <BlogsSection /> */}
      {/* Video Testi */}

      <VideoSection bg={false} />

      <WhyChooseUs />

      {/* Connect With us */}
      <ConnectWithUs />

     
    </div>
  );
};

export default NewLandingPage;
