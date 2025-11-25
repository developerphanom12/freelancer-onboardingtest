import React from 'react';

const caseStudies = [
  {
    title: 'Specialize in transforming businesses?',
    description: 'Go-driven strategies that boost visibility, drive growth, and deliver measurable results.',
    date: '30 May 2025',
    views: '2k',
    image: 'https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'Empower businesses to make smarter decisions?',
    description: 'Through expertly crafted and optimized content that drives engagement and results.',
    date: '30 May 2025',
    views: '2k',
    image: 'https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'Empower Businesses to thrive?',
    description: 'We empower businesses to thrive with expertly crafted strategies that boost engagement & deliver results.',
    date: '30 May 2025',
    views: '2k',
    image: 'https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?semt=ais_hybrid&w=740',
  },
];

const HireCaseStudy = () => {
  return (
    <div className="w-full px-4 sm:px-10 py-10">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">Case Study</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-[90%] mx-auto px-10">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="border border-gray-300 2xl:mx-10 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between gap-2 flex-1">
              <div>
                <h2 className="text-[16px] sm:text-[28px] font-semibold">{study.title}</h2>
                <p className="text-sm text-gray-600">{study.description}</p>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span>{study.date}</span>
                <span>{study.views}</span>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default HireCaseStudy;
