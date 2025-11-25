import React, { useState } from 'react';
import Images from '../../../assets/Images';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl">
      {/* Header Image */}
      <div className="relative h-48">
        <img
          src={Images.TwoBusinessman}
          alt="Business handshake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Get your custome app!</h2>
        <p className="text-gray-300 mb-6">Discover mobile app Development costs now!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
          </div>

          {/* Phone Field */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Write Message"
              rows="2"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
            />
          </div>

          {/* CAPTCHA */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">CAPTCHA</label>
            <div className="flex items-center space-x-3">
              <div className="bg-gray-700 px-3 py-2 rounded text-sm font-mono">
                5 + 3 = ?
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                className="flex-1  bg-transparent border-b border-gray-600 py-2 px-0 text-white placeholder-gray-400 w-[145px] focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 mt-6"
          >
            Book your Appointment
          </button>
        </form>
      </div>
    </div>
  );
}