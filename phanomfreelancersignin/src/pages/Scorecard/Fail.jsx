import React, { useState } from "react";
import Images from "../../assets/Images"; // <-- apne Images file ka path sahi karo
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-20  ">
      {/* Page Section */}
      <div className="bg-white w-full text-center">
        <h1 className="text-2xl sm:text-5xl mb-4">Your Score</h1>
        <img
          src={Images.YourScoreFail}
          alt="Payment Approved"
          className="mx-auto mb-6 w-[300px]"
        />
        <p className="text-[#DA0E04] mb-2 text-2xl">You scored 33%</p>
        <p className="text-gray-800 font-medium mb-6">
         <span className="text-[#DA0E04] "> Oops! </span>didn’t score well, take time to improve your skills and try again for better performance. <br />
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-[400px] bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Welcome;
