import React from "react";
import Images from "../../assets/Images";

const HostingDetails = () => {
    return (
        <section className="sm:max-w-[90%] mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-2 gap-30 items-start">

            {/* Left Column */}
            <div className="space-y-10">
                <div className="space-y-5">

                <p className="text-sm text-gray-600">Self Managed VPS</p>

                <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                    Server Management with{" "}
                    <span className="text-gray-900">VPS</span>{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        & Hosting Services.
                    </span>
                </h2>

                <p className="text-gray-600 text-sm md:text-base">
                    Managing your servers has never been this seamless! At Phanom we take
                    pride in providing top-tier server management solutions tailored to
                    meet your unique needs. Whether you're an individual, startup, or
                    established business, we've got you covered.
                </p>
                </div>

                <img
                    src={Images.ServerManagement}
                    alt="Server Management"
                    className="rounded-xl shadow-lg h-[700px] w-full object-cover sm:mt-30"
                />

                <div className="text-left space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Tailored
                        </span>
                        <span className="text-gray-900">Solutions</span>{" "}
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                            Fully customization plans that adapt to your business size and requirements.
                        </li>
                        <li>
                            Scalable options to grow with your business.
                        </li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                        <span className="bg-gradient-to-r from-blue-500  to-blue-500 bg-clip-text text-transparent">
                            24/7
                        </span>
                        <span className="text-gray-900">Support</span>{" "}
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                            Fully customization plans that adapt to your business size and requirements.
                        </li>
                        <li>
                            Scalable options to grow with your business.
                        </li>
                    </ul>
                </div>

                 <img
                    src={Images.ServerManagement}
                    alt="Server Management"
                    className="rounded-xl shadow-lg h-[700px] w-full object-cover "
                />
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center space-y-10">
                <img
                    src={Images.ServerManagement}
                    alt="Server Management"
                    className="rounded-xl shadow-lg h-[700px] w-full object-cover"
                />

                <div className="text-left space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                        <span className="text-gray-900">Why</span>{" "}
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Choose Us
                        </span>
                    </h2>
                    <div>
                        <h4 className="font-semibold">Expertise You Can Trust!</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                            Decades of combined experience in server management, hosting, and VPS solutions.
                        </li>
                        <li>
                            Certified professionals equipped with the latest technologies.
                        </li>
                        </ul>
                        
                    </div>
                </div>

                 <img
                    src={Images.ServerManagement}
                    alt="Server Management"
                    className="rounded-xl shadow-lg h-[700px] w-full object-cover "
                />

                <div className="text-left space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Affordable
                        </span>
                        <span className="text-gray-900">Pricing</span>{" "}
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                            Competitive rates without compromising on quality.
                        </li>
                        <li>
                            Transparent pricing models—no hidden fees, just excellent service.
                        </li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                       <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            End-to-end
                        </span>
                        <span className="text-gray-900">Management</span>{" "}
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>
                            From server setup and optimization to security and updates, we handle it all.
                        </li>
                        <li>
                            Focus on your core business while we manage your infrastructure.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HostingDetails;
