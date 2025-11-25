import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdComputer } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { FaMobileScreen } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { TbDatabaseCog } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import ServicesImages from '../../assets/media/ExploreSectionLogos/ServicesImages'; // your image object
import { useNavigate } from 'react-router-dom';


const ExploreServices = () => {
  const navigate = useNavigate();
  const services = [
    { key: 'frontend', title: 'Frontend Programming Languages', icon: <MdComputer /> },
    { key: 'backend', title: 'Backend Programming Languages', icon: <TbApi /> },
    { key: 'mobile', title: 'Mobile', icon: <FaMobileScreen /> },
    { key: 'bigData', title: 'Big Data', icon: <FaDatabase /> },
    { key: 'databases', title: 'Databases / Data Storages', icon: <TbDatabaseCog /> },
    { key: 'cloud', title: 'Cloud DB, Warehouses And Storage', icon: <FaCloud /> },
    { key: 'devops', title: 'DevOps', icon: <MdOutlineDeveloperMode /> },
    { key: 'ai', title: 'Artificial Intelligence', icon: <MdOutlineDeveloperMode /> },
  ];

  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const renderTechnologies = () => {
    const category = ServicesImages[selectedCategory];
    return Object.entries(category).map(([name, logo]) => (
      <div
        key={name}
        className="bg-[#F7F7F7] h-24 flex gap-7 items-center justify-start sm:ml-4 rounded-lg px-4 py-3 shadow-sm hover:-translate-y-1 transition-transform hide-scrollbar"
      >
        <img src={logo} alt={name} className="w-10 h-10 mb-2" />
        <span className="text-[14px] text-gray-800 font-semibold capitalize">{name}</span>
      </div>
    ));
  };

  return (
    <section className="sm:px-[80px] p-8 py-[40px] mx-auto">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center items-start ">
          <h1  className="sm:text-[48px] text-[36px] text-[#8E59E2] font-bold leading-snug">
            Explore Our Services
          </h1>
          <p className="text-[18px] text-gray-800 mb-3 text-left">
            Explore our service and discover solutions designed to meet your unique needs.
            With a focus on quality and innovation, we turn your vision into reality.
          </p>
        </div>

        {/* Main Panel */}
        <div className="flex-1 flex sm:max-h-[70vh] flex-col sm:flex-row bg-white rounded-[20px] overflow-hidden shadow-lg">
          {/* Services Panel */}
          <div className="sm:w-[50%] bg-gradient-to-br from-[#8E59E2] to-[#392C9E] text-white p-5 flex flex-col gap-3 overflow-y-scroll hide-scrollbar">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(service.key)}
                className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  selectedCategory === service.key ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <span className="text-[18px] mr-4">{service.icon}</span>
                <span className="flex-1 text-[18px]">{service.title}</span>
                <span className="opacity-70"><FaArrowRight /></span>
              </div>
            ))}
          </div>

          {/* Logos Panel */}
          <div className="sm:w-[50%] bg-[#f8f9fa] p-5 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto hide-scrollbar">
            {renderTechnologies()}
          </div>
        </div>

        <button onClick={() => navigate('/book-appointment')} className="bg-[#8E59E2] text-white rounded-full px-6 py-3 text-[16px] transition-colors hover:bg-[#7d4ecc] max-w-fit">
          Book an appointment
        </button>
      </div>
    </section>
  );
};

export default ExploreServices;
