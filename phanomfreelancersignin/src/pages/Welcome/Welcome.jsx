import React, { useState } from "react";
import Images from "../../assets/Images"; // <-- apne Images file ka path sahi karo
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
   const userName = sessionStorage.getItem("userName");
  const userEmail = sessionStorage.getItem("userEmail");
  const userId = sessionStorage.getItem("userId");
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 ">
      {/* Page Section */}
      <div className="bg-white w-full text-center pt-10">
        <h1 className="text-2xl sm:text-5xl mb-4">Welcome {sessionStorage.getItem("userName")}!</h1>
        {/* <div className="mt-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl mx-12 p-5 shadow-sm border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Your Account Details
          </h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>
              <span className="font-medium text-gray-900">Email:</span>{" "}
              <span className="text-gray-800">{userEmail || "N/A"}</span>
            </p>
            <p>
              <span className="font-medium text-gray-900">User ID:</span>{" "}
              <span className="text-gray-800">{userId || "N/A"}</span>
            </p>
          </div>
        </div> */}
        <img
          src={Images.PaymentApproved}
          alt="Payment Approved"
          className="mx-auto mb-6 w-[400px]"
        />
        <p className="text-gray-600 mb-2">Payment successful.</p>
        <p className="text-gray-800 font-medium mb-6">
          You’re now ready for the First Round MCQ Test. <br /> Good luck!
        </p>
        <button
          onClick={() => setShowPopup(true)}
          className="w-[400px] bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Start Test
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full relative">
            <h2 className="text-lg font-bold mb-4 text-center">
              First Round Test Instructions
            </h2>
            <img
              src={Images.FirstRoundTest}
              alt="Instructions"
              className="mx-auto mb-4 w-40"
            />
            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              <li>• Do not switch tabs or screens</li>
              <li>• Complete within given time</li>
              <li>• Passing Score: 80%</li>
            </ul>
            <button
              onClick={() => navigate("/first-round-test")}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg w-full transition"
            >
              Start Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
