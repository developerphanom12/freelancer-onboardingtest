import React, { useState, useEffect } from 'react';
import Images from '../../assets/Images.js';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const API_BASE = "https://admin.phanomprofessionals.com"; // your Laravel

const ConnectWithUs = () => {
  const navigate = useNavigate();

  const [showPicker, setShowPicker] = useState(false);
  const [timezone, setTimezone] = useState("");
  const [dateTime, setDateTime] = useState("");

  // form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail]     = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone]     = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleConfirm = () => setShowPicker(false);
  const handleOpenModal = () => setShowPicker(true);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone: `${countryCode} ${phone}`,
          timezone: timezone || null,
          meeting_at: dateTime || null,
          service_key: service || null,
          message: message || null,
          source: "website", // optional tag
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const err = data?.message || "Submission failed";
        throw new Error(err);
      }

      // success
      toast.success("Thanks! We’ve received your request. Our team will reach out soon.");
      // reset minimal
      setFullName(""); setEmail(""); setPhone("");
      setService(""); setMessage(""); setTimezone(""); setDateTime("");
      setShowPicker(false);
    } catch (err) {
      alert(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full flex sm:flex-row flex-col bg-[#8E59E1]  sm:px-[40px] sm:pb-[80px] px-8 py-[46px] pt-[12%] sm:pt-[1%]">
      {/* Left Side */}
      <div className="sm:w-[55%] flex flex-col items-start justify-between rounded-xl scale-90">
        <div className="relative sm:h-[90%] w-auto">
          <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-xl bg-gradient-to-t from-white/60 to-transparent backdrop-blur-[4px] pointer-events-none z-0"></div>
          <img
            src={Images.AdarshSir}
            alt="Contact Illustration"
            className="h-full w-auto object-contain relative z-10"
          />
        </div>

        <div onClick={() => navigate('/book-appointment')} className="bg-white w-fit text-black text-[18px] rounded-full px-7 py-3 items-center justify-center text-2xl font-bold flex gap-3 my-6 sm:my-0 cursor-pointer">
          Connect With Us <FaArrowRight />
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="sm:w-[45%] justify-center flex item-center ">
        <div className=" sm:w-[90%]  flex flex-col justify-center h-fit py-5 items-center  rounded-xl bg-gradient-to-br from-[#F2E7FE] via-[#EEE7FE] to-[#FFFFFF]">
          <div className="w-[90%]">
            <h2 className="sm:text-[23px] text-[15px] font-bold text-[#8E59E2] ">
              Ready to Grow 3X in 90 Days
            </h2>
            <p className="text-[#CACACA] sm:text-[13px] my-1">
              We’ll automate your business, bring leads, and close sales.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#353535]">Name</label>
                <input
                  type="text"
                  id="name"
                  className=" text-[#353535] border border-[#CACACA] text-sm rounded-lg bg-white block w-full p-2.5"
                  placeholder="full name"
                  required
                  value={fullName}
                  onChange={(e)=>setFullName(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#353535]">Email</label>
                <input
                  type="email"
                  id="email"
                  className=" text-[#353535] border border-[#CACACA]  text-sm rounded-lg bg-white block w-full p-2.5 "
                  placeholder="example@gmail.com"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium  text-[#353535]">Contact</label>
                <div className="flex">
                  <select
                    id="country-code"
                    name="country-code"
                    className="w-3/10 text-[#353535] border border-[#CACACA]  text-sm rounded-l-lg bg-white p-2.5 border-r-0"
                    value={countryCode}
                    onChange={(e)=>setCountryCode(e.target.value)}
                  >
                    <option value="+91">IND (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">AUS (+61)</option>
                  </select>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-4/5 text-[#353535] text-sm rounded-r-lg bg-white p-2.5 border border-[#CACACA] "
                    placeholder="Enter your number"
                    required
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative mb-2 w-full">
                <label htmlFor="meeting" className="block mb-2 text-sm font-medium text-[#353535]">
                  Schedule Your Meeting
                </label>

                <input
                  type="text"
                  id="meeting"
                  name="meeting"
                  value={timezone && dateTime ? `${timezone} - ${dateTime}` : ""}
                  onFocus={() => setShowPicker(true)}
                  readOnly
                  className="text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border border-[#CACACA] cursor-pointer"
                  placeholder="Select "
                />

                {showPicker && (
                  <div className="absolute top-[100%] left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md w-full p-3 mt-2 space-y-2">
                    <select
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full p-2 border rounded text-sm text-[#353535] bg-white"
                      value={timezone}
                    >
                      <option value="">Select Time Zone</option>
                      <option value="IST (UTC+5:30)">IST (UTC+5:30)</option>
                      <option value="UTC (UTC+0)">UTC (UTC+0)</option>
                      <option value="EST (UTC-5)">EST (UTC-5)</option>
                      <option value="PST (UTC-8)">PST (UTC-8)</option>
                    </select>

                    <input
                      type="datetime-local"
                      onChange={(e) => setDateTime(e.target.value)}
                      className="w-full p-2 border rounded text-sm text-[#353535] bg-white"
                      value={dateTime}
                    />

                    <button
                      type="button"
                      onClick={handleConfirm}
                      className="mt-2 px-4 py-1 bg-[#8E59E1] text-white text-sm rounded hover:bg-[#7347be]"
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-[#353535]">
                  Select Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border border-[#CACACA] "
                  required
                  value={service}
                  onChange={(e)=>setService(e.target.value)}
                >
                  <option value="" disabled>-- Select Service --</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="devops">DevOps</option>
                  <option value="server-management">Server Management</option>
                </select>
              </div>

              <div className="mb-2">
                <textarea
                  rows={3}
                  placeholder="Write Project Details"
                  className=" text-[#353535] text-sm rounded-lg bg-white block w-full p-2.5 border border-[#CACACA] resize-none "
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="text-white bg-[#8E59E2] font-medium rounded-full text-sm px-10 py-2.5 text-center hover:bg-[#7d4ecc] transition-colors disabled:opacity-60"
                >
                  {submitting ? "Booking..." : "Book Strategy Call Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectWithUs;
