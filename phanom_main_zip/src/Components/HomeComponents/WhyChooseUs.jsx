import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Project Delivered" },
  { value: 60, suffix: "+", label: "India's Fastest Growing Tech Marketing Agency" },
  { value: 100, suffix: "%", label: "Money-Back Lead Guarantee" },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 90%", // when 10% of section is visible
        onEnter: () => {
          countersRef.current.forEach((el, index) => {
            const endValue = stats[index].value;
            gsap.fromTo(
              el,
              { innerText: 0 },
              {
                innerText: endValue,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 },
                onUpdate: () => {
                  el.innerText = Math.floor(el.innerText) + stats[index].suffix;
                },
              }
            );
          });
        },
        once: true, // run only once
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" bg-[#8E59E1]  text-white sm:flex sm:flex-col sm:gap-10 px-8 sm:px-20 pt-16 pb-24"
    >
      <h2 className="sm:text-[48px]  text-white leading-10 text-[36px] sm:leading-none font-['Open_Sauce_One'] text-left mb-10 capitalize">
        Why Choose Us
      </h2>

      <div className="flex sm:flex-row  sm:pb-0 flex-col pb-8 gap-7 text-white justify-between">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`${
              i === 0
                ? "pr-5 sm:w-[25%] sm:border-none border-b pb-8 border-white"
                : i === 1
                ? "pr-2 sm:pl-10 sm:pb-0 sm:border-l border-b sm:border-b-0 pb-8 border-white sm:w-[25%]"
                : i === 2
                ? "sm:pl-8 sm:border-l sm:pb-0 border-b sm:border-b-0 pb-8 border-white sm:w-[25%]"
                : "sm:pl-9 sm:border-l sm:border-white sm:w-[25%]"
            }`}
          >
            <h1
              ref={(el) => (countersRef.current[i] = el)}
              className="text-[50px] font-bold leading-none mb-3 text-white"
            >
              0{stat.suffix}
            </h1>
            <p className="text-[22px] font-medium m-0 text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
