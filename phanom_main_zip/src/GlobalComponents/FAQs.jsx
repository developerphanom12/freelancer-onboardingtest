import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp, FaChevronUp } from 'react-icons/fa6';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const faqs = [
  {
    question: 'What was the main goal of this project?',
    answer: 'The primary goal was to enhance the user experience by improving usability, engagement, and conversion rates through data-driven UI/UX design.',
  },
  {
    question: 'What research methods were used?',
    answer: 'User interviews, heatmaps, A/B testing, and usability testing were the main research methods used.',
  },
  {
    question: 'How did the redesign impact users?',
    answer: 'Users reported faster task completion, increased satisfaction, and reduced drop-off rates.',
  },
  {
    question: 'What were the biggest challenges?',
    answer: 'Aligning business goals with user needs while maintaining brand consistency posed key challenges.',
  },
  {
    question: 'What tools were used?',
    answer: 'Figma, Google Analytics, Hotjar, and Maze were heavily used during the process.',
  },
];

const FAQs = () => {
  // Split data into 2 columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0); // even indices
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0); // odd indices

  const [leftOpen, setLeftOpen] = useState(null);
  const [rightOpen, setRightOpen] = useState(null);

  const toggleLeft = (index) => {
    setLeftOpen(leftOpen === index ? null : index);
  };

  const toggleRight = (index) => {
    setRightOpen(rightOpen === index ? null : index);
  };

  return (
    <div className="px-5 py-10 mx-auto space-y-6">
      <h2 className=" text-[36px] text-left font-sauce font-bold text-[#8E59E2] w-[90%] mb-10">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm ">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleLeft(index)}
              >
                <p className="font-medium ">{faq.question}</p>
                <span className="text-lg font-bold">
                  {leftOpen === index ? <GoChevronUp/> : <GoChevronDown />}
                </span>
              </div>
              {leftOpen === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightFaqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm ">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleRight(index)}
              >
                <p className="font-medium ">{faq.question}</p>
                <span className="text-lg font-bold">
                  {rightOpen === index ? <GoChevronUp/> : <GoChevronDown />}
                </span>
              </div>
              {rightOpen === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
