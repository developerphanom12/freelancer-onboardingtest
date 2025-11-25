import React from "react";

const articles = [
  {
    title: "15 Steps to Mobile App Redesign for Market Domination",
    description:
      "App redesign is no joke. If you run a mobile-powered business then you are virtually on...",
    author: "Pooja Chawla",
    category: "Mobile App Design",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonhjKzqrdOWF7WpahaKIl5igXpsqI7f9zIA&s",
  },
  {
    title: "Top 10 Trends in Mobile App Development 2025",
    description:
      "From AI-powered apps to blockchain integrations, here’s what you need to know...",
    author: "Rohit Sharma",
    category: "App Development",
    image:
      "https://cdn.dribbble.com/userupload/4666194/file/original-ec734f2e6505ee4e3f6abd473fbecbdc.jpg?resize=400x0",
  },
  {
    title: "The Future of Mobile App Monetization",
    description:
      "Monetization strategies are evolving rapidly. Learn the best ways to stay ahead...",
    author: "Anjali Verma",
    category: "App Monetization",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
  },
];

export default function ThreeCardSection() {
  return (

<div>
  {/* Section Heading */}
  <div className="">
    <h1 className="text-4xl font-bold text-[#6C5FD4] text-left">Read More Guides</h1>
  </div>

  {/* Card Section */}
  <div className=" mx-auto py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden"
        >
          {/* Image */}
          <div className="w-full rounded-xl h-60 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 pl-0 text-left">
            <div className="text-xs font-medium text-gray-500 mb-2">
              {article.category}
            </div>
            <h3 className="text-xl font-bold text-black mb-3 leading-tight">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{article.description}</p>
            <div className="text-sm text-gray-700">{article.author}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


            
  );
}
