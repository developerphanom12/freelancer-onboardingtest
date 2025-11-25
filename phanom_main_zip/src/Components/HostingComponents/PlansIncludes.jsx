import React from "react";
import { FaServer, FaLock, FaDatabase, FaKey } from "react-icons/fa"; // example icons

const PlansIncludes = () => {
  const features = [
    {
      icon: <FaDatabase size={28} />,
      title: "NVMe SSDs.",
      desc: "Take advantage of 3X speed and unlimited traffic. Upgrade your plan to KVM virtualization level to have full control and enhanced RAM, CPU and storage.",
    },
    {
      icon: <FaLock size={28} />,
      title: "SSL + 100% Security",
      desc: "Get 24/7 Monitoring, + free SSL certificate (for 1st year) with a dedicated IP.",
    },
    {
      icon: <FaServer size={28} />,
      title: "Unlimited Hosting.",
      desc: "Unlimited hosting with cPanel, WHM, Installatron, flexible, reliable solutions.",
    },
    {
      icon: <FaKey size={28} />,
      title: "Root access.",
      desc: "Full root access and set your server the way you prefer (up to the operating system level).",
    },
  ];

  return (
    <section className="sm:max-w-[90%] mx-auto px-5 py-12 flex md:flex-row flex-col">
        <div className="md:w-[45%]">

      {/* Gradient Badge */}
      <div className="mb-4">
        <span className="bg-gradient-to-r from-[#439CE0] via-[#9057E5] to-[#CE1BE6] text-white text-lg sm:text-xl font-semibold px-4 py-2 rounded-md">
          STANDARD PERFORMANCE
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-8">
        Every VPS Hosting plan Includes:
      </h2>
        </div>

      {/* Grid of features */}
      <div className=" md:w-[55%] grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col  gap-4">
            {/* Icon */}
            <div className="text-gray-800">{feature.icon}</div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-gray- text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansIncludes;
