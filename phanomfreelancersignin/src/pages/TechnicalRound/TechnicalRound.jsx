import React, { useState } from "react";
import Images from "../../assets/Images"; // <-- apne Images file ka path sahi karo
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab , setActiveTab] = useState("welcome")
  const [endingPopup, setEndingPopup] = useState(false);
  const navigate = useNavigate();

  const handleLastStep = ()=>{
    setActiveTab("last")
    setShowPopup(false)
  }

  return (
    <div className="flex flex-col items-center justify-center  ">
      {/* Page Section */}
       
        {/* ========== STEP 1: WELCOME SCREEN ========== */}
      { activeTab === "welcome" && (
        <div className="bg-white w-full text-center pt-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-5xl mb-4">Welcome to Technical Round</h1>
        <img
          src={Images.WelcomeToTechnical}
          alt="Payment Approved"
          className="mx-auto w-[400px]"
        />
        <div className="border border-gray-300 w-fit rounded-2xl px-12 py-4 drop-shadow-sm text-[#00A859] my-6">
              <div className="">Time Left</div>
               <div>17:88:00</div>
        </div>
        <button
          onClick={() => setActiveTab("form")}
          className="w-[400px] bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Start Technical Round
        </button>
      </div>)}

      
      {/* ========== STEP 2: FORM SCREEN ========== */}
      {activeTab === "form" && (
        <div className="bg-white  rounded-xl p-8 w-full max-w-xl text-center">
          <h1 className="text-2xl sm:text-5xl mb-4">Technical Round</h1>

          {/* Timer */}
          <div className="drop-shadow-sm bg-red-50 text-red-400 font-semibold py-2 px-6 rounded-lg inline-block mb-6">
            <div>Timer Left:</div>
            <div> 01:59:59</div>
          </div>

          <p className=" mb-8">
            This is your moment to shine. Complete the task carefully and showcase what makes you extraordinary.
          </p>

          {/* Input Fields */}
          <div className="space-y-4 mb-6 text-left">
            <label className="" >Github Link</label>
            <input
              type="text"
              placeholder="GitHub Link *"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <label className="" >Website Live link</label>
            <input
              type="text"
              placeholder="Website Live Link"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Submit My Task
          </button>
        </div>
      )}


       {/* ========== STEP 3: POPUP ========== */}
       { activeTab === "last" && (
        <div className="bg-white w-full text-center pt-10">
        <h1 className="text-2xl sm:text-5xl mb-4">You’re Just One Step Away!</h1>
        <img
          src={Images.LastStep}
          alt="Payment Approved"
          className="mx-auto mb-6 w-[400px]"
        />
         <div className="font-semibold py-2 px-6 rounded-lg  mb-6">
            <div>Our Phanom experts are reviewing your work with eagle eyes.</div>
            <div>Next stop → Video Interview Round. We’ll notify you as soon as it’s ready.</div>
          </div>
        <button
          onClick={() => setEndingPopup(true)}
          className="w-[400px] bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </button>
      </div>)}

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full relative">
            <h2 className="text-lg text-[#8E59E2] font-bold mb-4 text-center">
              Woohoo! Your Task is in Safe Hands
            </h2>
            <img
              src={Images.SafeHands}
              alt="Instructions"
              className="mx-auto mb-4 w-40"
            />
            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              <li>• We’ve successfully received your submission. Now, grab a coffee while we review your masterpiece.</li>
            </ul>
            <button
              onClick={() => handleLastStep() }
              className="bg-[#8E59E2] hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg w-full transition"
            >
             Got it!
            </button>
          </div>
        </div>
      )}

      {endingPopup && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full relative">
            <h2 className="text-lg text-[#8E59E2] font-bold mb-4 text-center">
              Woohoo! Your Task is in Safe Hands
            </h2>
            <img
              src={Images.Aeroplane}
              alt="Instructions"
              className="mx-auto mb-4 w-40"
            />
            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              <li>• We’ve successfully received your submission. Now, grab a coffee while we review your masterpiece.</li>
            </ul>
            <button
              onClick={() => navigate("/")}
              className="bg-[#8E59E2] hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg w-full transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
