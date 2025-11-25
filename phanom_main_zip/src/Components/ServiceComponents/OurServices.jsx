import React from "react";
import Images from "../../assets/Images";
import TextWithBorder from "../../GlobalComponents/TextWithBorder";

const OurServices = () => {
  const tools = [
    { img: Images.DevOps, title: "DevOps" },
    { img: Images.Github, title: "Github" },
    { img: Images.Reactjs, title: "React" },
    { img: Images.Bootstrap, title: "Bootstrap" },
    { img: Images.Figma, title: "Figma" },
    { img: Images.VsCode, title: "Vs Code" },
    { img: Images.Postman, title: "Postman" },
    { img: Images.Chrome, title: "Chrome" },
  ];
  // const tools = [
  //   {  title: "DevOps" },
  //   {  title: "Github" },
  //   {  title: "React" },
  //   {  title: "Bootstrap" },
  //   {  title: "Figma" },
  //   {  title: "Vs Code" },
  //   {  title: "Postman" },
  //   {  title: "Chrome" },
  // ];

  return (
    <section className="px-5 sm:px-10 lg:px-20 xl:px-24 py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6 text-center  lg:text-left">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <TextWithBorder words={["Our Web" , "Development", "Services"]} />
          </div>

         <p className="text-[#525252] text-lg">

            We create custom, user-friendly websites to elevate your brand and deliver exceptional experiences. From e-commerce to responsive apps, our expert team uses cutting-edge technology for outstanding results.
         </p>
          

          {/* Tools Grid */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center bg-[#6C5FD4] rounded-lg px-6 py-5 gap-2 w-36 "
              >
                <img src={tool.img} alt={tool.title} className="h-10 w-auto" />
                <h5 className="text-white font-medium">{tool.title}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <img src={Images.WebDev} alt="Web Development" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default OurServices