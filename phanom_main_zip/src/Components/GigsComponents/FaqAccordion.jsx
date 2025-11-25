// components/FaqAccordion.jsx
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'What mobile app development services do you offer?',
    answer:
      'We offer iOS, Android, and cross-platform app development, including UI/UX, deployment, and ongoing support.',
  },
  {
    question: 'What mobile app development services do you offer?',
    answer:
      'We offer iOS, Android, and cross-platform app development, including UI/UX, deployment, and ongoing support.',
  },
  {
    question: 'What mobile app development services do you offer?',
    answer:
      'We offer iOS, Android, and cross-platform app development, including UI/UX, deployment, and ongoing support.',
  },
  {
    question: 'What mobile app development services do you offer?',
    answer:
      'We offer iOS, Android, and cross-platform app development, including UI/UX, deployment, and ongoing support.',
  },
  {
    question: 'What mobile app development services do you offer?',
    answer:
      'We offer iOS, Android, and cross-platform app development, including UI/UX, deployment, and ongoing support.',
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" ">
      <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 drop-shadow-2xl rounded-xl p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{faq.question}</p>
              <FiChevronDown
                className={`text-2xl transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
