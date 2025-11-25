import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Images from '../assets/Images';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5); // initial countdown

  useEffect(() => {
    if (seconds <= 0) {
      navigate('/');
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [seconds, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8E59E2] text-white text-center relative overflow-hidden px-4">
      {/* Decorative shapes */}
      <img
        src={Images.DoubleElipse}
        alt="Decorative"
        className="absolute top-0 -left-[10%] sm:w-[25vw] w-[20vh] rotate-180"
      />
      <img
        src={Images.DoubleElipse}
        alt="Decorative"
        className="absolute -bottom-[10%] -right-10 sm:w-[25vw] w-[20vh]"
      />
      <img
        src={Images.AppointmentLogo}
        alt="Decorative"
        className="absolute top-0 right-0 sm:w-[25vw] rotate-270 w-[23vh]"
      />
      <img
        src={Images.AppointmentLogo}
        alt="Decorative"
        className="absolute bottom-0 left-0 sm:w-[25vw] rotate-90 w-[23vh]"
      />

      {/* Content */}
      <div className="z-10 max-w-xl">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Thank you!
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-6">
          We’ll contact you via call shortly.
        </p>

        {/* Countdown message */}
        <p className="text-md md:text-lg text-white/70">
          Redirecting back to home screen in <span className="font-bold">{seconds}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
