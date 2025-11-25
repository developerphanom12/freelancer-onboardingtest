import { useState } from "react"
import Images from "../../../assets/Images";

// Tabs
const tabs = ["Data Science And Analytics", "Digital Transformation", "Bussiness Transformation", "AI-ML", "App Design"]

// Featured Article
const featuredArticle = {
  title: "15 Steps to Mobile App Redesign for Market Domination",
  description: "App redesign is no joke. If you run a mobile-powered business then you are virtually on...",
  author: "Pooja Chawla",
  category: "Mobile App Design",
  image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}

// All Side Articles
const allArticles = [
  {
    title: "How Much Does Android App Development Cost?",
    author: "Avinash",
    category: "Android Development",
    image: Images.Enterprise1,
  },
  {
    title: "10 Tips to Hire Android App Developers",
    author: "Sourabh",
    category: "Android Development",
    image: Images.Enterprise2,
  },
  {
    title: "Enterprise Android App Development: Why you need it?",
    author: "Sourabh",
    category: "Enterprise",
    image: Images.Enterprise3,
  },
  {
    title: "Top Enterprise Tech Trends 2025",
    author: "Nakul",
    category: "Enterprise",
    image: Images.Enterprise1,
  },
  {
    title: "Scaling Apps with Cloud Native",
    author: "Ritika",
    category: "Cloud",
    image: Images.Enterprise2,
  },
  {
    title: "AI-Powered Business Workflows",
    author: "Rajesh",
    category: "AI/ML",
    image: Images.Enterprise3,
  },
]

export default function EnterpriseDevelopment() {
  const [activeTab, setActiveTab] = useState("Android")
  const [visibleCount, setVisibleCount] = useState(3) // show 3 by default

  // Slice the articles to show based on visibleCount
  const visibleArticles = allArticles.slice(0, visibleCount)

 return (
  <section className="w-full mx-auto ">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
        Enterprise Software Development
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-8 border-b border-gray-200 justify-center md:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Featured Article */}
        <div className="lg:col-span-2 lg:sticky lg:top-4 h-fit">
          <div className="text-white overflow-hidden rounded-xl">
            {/* Image on top */}
            <div className="w-full h-60 sm:h-72 md:h-80 overflow-hidden">
              <img
                src={featuredArticle.image}
                alt="Mobile app screens"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text content below */}
            <div className="p-6 pl-0">
              <div className="text-xs font-medium text-black/90 mb-2">
                {featuredArticle.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 leading-tight max-w-md">
                {featuredArticle.title}
              </h3>
              <p className="text-sm text-black/90 mb-4 max-w-md">
                {featuredArticle.description}
              </p>
              <div className="text-sm text-black/80">
                {featuredArticle.author}
              </div>
            </div>
          </div>
        </div>

        {/* Side Articles */}
        <div className="lg:col-span-2 space-y-4">
          {visibleArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg">
              <div className="p-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full sm:w-60 h-[200px] sm:h-[140px] object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-black mb-1">
                      {article.category}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-lg sm:text-2xl leading-tight mb-2">
                      {article.title}
                    </h4>
                    <div className="text-xs text-gray-500">{article.author}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View All Button */}
          {visibleCount < allArticles.length && (
            <div className="flex justify-center md:justify-end pt-2">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-4 py-2 text-sm border border-gray-300 text-gray-600 rounded-md bg-white hover:bg-gray-50 transition"
              >
                View all
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
)


}
