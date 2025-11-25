import React from "react";

const BenefitsSection = () => {
  return (
    <section className="sm:max-w-[90%] mx-auto px-5 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Benefits of{" "}
          <span className="bg-gradient-to-r from-[#4C95E0] to-[#CB1BE7] bg-clip-text text-transparent">Phanom VPS Hosting!</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card Item */}
        <div>
          <h3 className="font-semibold text-lg">Peace of Mind!</h3>
          <p className=" text-sm md:text-base">
            Knowing your servers are in expert hands.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Improved Performance</h3>
          <p className=" text-sm md:text-base">
            Optimized configurations for faster load times.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Cost-Effective Solutions</h3>
          <p className=" text-sm md:text-base">
            Save money with our bundled services.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Time Savings</h3>
          <p className=" text-sm md:text-base">
            Spend less time on technical issues and more on growing your business.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Enhanced Security</h3>
          <p className=" text-sm md:text-base">
            Regular audits and advanced threat protection.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Reliable Scalability</h3>
          <p className=" text-sm md:text-base">
            Easily adjust resources as your business demands grow.
          </p>
        </div>
      </div>

      {/* Another Heading */}
      <div className="text-center my-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          What We <span className="text-blue-500">Offer!</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg">Managed VPS Hosting</h3>
          <p className=" text-sm md:text-base">
            Fully managed virtual private servers for reliability and performance.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Custom Server Solutions</h3>
          <p className=" text-sm md:text-base">
            Dedicated servers tailored to your business needs.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Automatic Updates</h3>
          <p className=" text-sm md:text-base">
            Keep your systems updated with the latest software and patches.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Proactive Monitoring</h3>
          <p className=" text-sm md:text-base">
            Early issue detection to avoid costly downtime.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Data Migration</h3>
          <p className=" text-sm md:text-base">
            Seamlessly move your data to our servers without any hassle.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Disaster Recovery Solutions</h3>
          <p className=" text-sm md:text-base">
            Ensure business continuity with robust backup and recovery plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
