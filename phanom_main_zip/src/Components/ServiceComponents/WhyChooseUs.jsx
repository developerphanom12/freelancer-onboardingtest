import React from "react";
import TextWithBorder from "../../GlobalComponents/TextWithBorder";

const WhyChooseUs = () => {
  const cards = [
    {
      id: "01",
      title: "Info Gathering",
      desc: "We have established strong relationships with the leading solar and cable companies in the region",
      bg: "bg-[#6C5FD4] text-white border-transparent",
      numberStyle: "text-3xl font-bold",
      titleStyle: "text-lg font-semibold",
      descStyle: "text-sm leading-relaxed",
    },
    {
      id: "02",
      title: "Design",
      desc: "We help explore design through expert ideas and creative programming, enhancing your brand's success.",
    },
    {
      id: "03",
      title: "Development",
      desc: "We track smart trends, showcase our expertise, and keep your brand updated with frequent web trends.",
    },
    {
      id: "04",
      title: "Testing",
      desc: "Ensuring fluent application and software performance is our priority, refining everything before launching the page.",
    },
    {
      id: "05",
      title: "Performance Reporting",
      desc: "We monitor progress through graphs, ensuring smooth launches and optimal web performance.",
    },
  ];

  return (
    <section className="px-5 sm:px-6 md:px-8 lg:px-20 xl:px-24 py-10">
      <div className="flex flex-wrap gap-5">
        {/* Left Intro Box */}
        <div className="w-full sm:w-[48%] lg:w-[31%] flex flex-col gap-5 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:flex-col gap-2 text-center lg:text-left">
            {/* <span className="text-lg font-semibold border-b-2 border-black inline-block">Why</span>
            <span className="text-lg font-semibold border-b-2 border-black inline-block">Choose</span>
            <span className="text-lg font-semibold border-b-2 border-black inline-block">US?</span> */}
          </div>
            <TextWithBorder words={["Why", "Choose", "US?"]} />

          <p className="text-gray-600 text-sm leading-relaxed">
            We launch apps for streamlined software development, empowering growth with expert web solutions to expand your business and reach new clients effectively.
          </p>
        </div>

        {/* Cards using map */}
        {cards.map((card, i) => (
          <div
            key={i}
            className={`w-full sm:w-[48%] lg:w-[31%] flex flex-col gap-3 p-5 rounded-lg border border-black ${
              card.bg || ""
            }`}
          >
            <h2
              className={`text-3xl font-bold ${
                i !== 0 ? "text-purple-600" : ""
              }`}
            >
              {card.id}
            </h2>
            <h3
              className={`text-2xl font-semibold ${
                i !== 0 ? "text-black" : "text-white"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                i !== 0 ? "text-gray-600" : "text-white"
              }`}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs