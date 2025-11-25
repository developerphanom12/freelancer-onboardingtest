import React, { useState } from "react";
import Images from "../../assets/Images"; // <-- apne Images file ka path sahi karo
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-20  ">
      {/* Page Section */}
      <div className="bg-white w-full text-center">
        <h1 className="text-2xl sm:text-5xl mb-4">Your Score</h1>
        <img
          src={Images.YourScorePass}
          alt="Payment Approved"
          className="mx-auto mb-6 w-[200px]"
        />
        <p className="text-[#00A859] mb-2 text-2xl">You scored 83%</p>
        <p className="text-gray-800 font-medium mb-6">
         <span className="text-[#00A859] "> Great job!</span> Your score qualifies you for the next round – the Technician Round. <br />
        </p>
        <button
          onClick={() => setShowPopup(true)}
          className="w-[400px] bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Proceed to Technical Round
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full relative">
            <h2 className="text-lg text-[#8E59E2] font-bold mb-4 text-center">
              What's Next
            </h2>
            <img
              src={Images.WhatsNextPopup}
              alt="Instructions"
              className="mx-auto mb-4 w-40"
            />
            <ul className="text-gray-700 text-sm space-y-2 mb-6">
              <p>Next step is a practical technical task. You’ll have to submit your work via GitHub.</p>
            </ul>
            <button
              onClick={() => navigate("/technicalround")}
              className="bg-[#8E59E2] hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg w-full transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
