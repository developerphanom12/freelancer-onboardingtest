import React from "react";
import framneww from "../../assets/media/framneww.png";
import Images from "../../assets/Images";

const Process = () => {
  const cards = [
    {
      img: Images.GroupOne,
      alt: "Design",
      title: "Design",
      desc: "We make sure as much as possible that the sophisticated aesthetics of the web pages capture our customers’ attention. Our designers ensure that your website is at par with modern concepts and it reflects your brand's persona, allowing your site to gain more traffic.",
    },
    {
      img: Images.GroupTwo,
      alt: "Development",
      title: "Development",
      desc: "Your concern will be a great advantage to the rest of us. Upgrading is the essence of our development approach. We employ state of the art technologies and smart formats for building user friendly and highly responsive websites that ensure unparalleled user experience, thus strengthening your position as a market leader.",
    },
    {
      img: Images.GroupThree,
      alt: "Testing",
      title: "Testing",
      desc: "Testing is an indispensable aspect of our work. Prior to going live there is a considerable amount of activities with respect to your site or application e.g. debugging functions and streamlining flow which need to be perfected for the greatest outcome.",
    },
    {
      img: Images.GroupFour,
      alt: "Launch & Maintenance",
      title: "Launch & Maintenance",
      desc: "Our work does not stop after the initial launch of your site. We actively monitor all metrics concerning the site’s performance. Our personnel handles updating and regularly checking graphs and other data to ensure your site continues to meet its goals long into the future.",
    },
  ];

  return (
    <section className="px-5 sm:px-10 lg:px-24 py-10">
      <div className="relative flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl  font-bold relative z-10 max-w-[450px]">
          We Entrust To-Provide You On Your <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-semibold mt-2 relative z-10">
Mark Performance With :
          </span>
        </h2>
      

        <img src={Images.FrameBg} alt="bg" className="absolute z-0 top-0 -left-7 w-full" />
        <div
          className="relative w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center bg-no-repeat bg-cover mt-8 "
          
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative z-40 flex flex-col items-center text-center gap-3 flex-1 p-6 sm:p-5"
            >
              <img src={card.img} alt={card.alt} className="w-20 h-20" />
              <h4 className="text-lg font-semibold text-purple-600">
                {card.title}
              </h4>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
