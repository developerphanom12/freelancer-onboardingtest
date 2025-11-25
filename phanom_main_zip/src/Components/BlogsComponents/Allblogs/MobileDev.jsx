import { useState } from "react"
import Images from "../../../assets/Images";

const tabs = ["Android", "iOS", "React Native", "Flutter", "App Design"]

const featuredArticle = {
  title: "15 Steps to Mobile App Redesign for Market Domination",
  description: "App redesign is no joke. If you run a mobile-powered business then you are virtually on...",
  author: "Pooja Chawla",
  category: "Mobile App Design",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",

}

const articles = [
  {
    title: "How Much Does Android App Development Cost?",
    author: "Avinash",
    category: "Android Development",
    image:  "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",
  },
  {
    title: "10 Tips to Hire Android App Developers",
    author: "Sourabh",
    category: "Android Development",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",
  },
  {
    title: "Enterprise Android App Development: Why you need it?",
    author: "Sourabh",
    category: "Enterprise",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",
  },
  {
    title: "Cross Platform vs Native Apps – Which is Better?",
    author: "Nakul",
    category: "Cross Platform",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",
  },
  {
    title: "How to Scale Your iOS App for Millions of Users",
    author: "Anjali",
    category: "iOS",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",
  },
  {
    title: "Flutter App Development Trends in 2024",
    author: "Ravi",
    category: "Flutter",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg",
  },
]

export default function MobileAppDevelopment() {
  const [activeTab, setActiveTab] = useState("Android")
  const [visibleCount, setVisibleCount] = useState(3)

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + 3) // show 3 more each click
  }

  return (
  <section className="w-full mx-auto pb-0">
    <div className="mb-2">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Mobile App Development
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Article (Sticky on large screens) */}
        <div>
          <div className="md:sticky md:top-4">
            <div className="text-white overflow-hidden h-auto rounded-xl">
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={
                    featuredArticle.image ||
                    "/placeholder.svg?height=320&width=600&query=mobile app screens 3d purple background"
                  }
                  alt="Mobile app screens"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="p-6 pl-0">
                <div className="text-xs font-medium text-black/90 mb-2">
                  {featuredArticle.category}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3 leading-tight max-w-md">
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
        </div>

        {/* Side Articles (Scrollable) */}
        <div className="space-y-4">
          {articles.slice(0, visibleCount).map((article, index) => (
            <div key={index} className="bg-white rounded-lg">
              <div className="p-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={article.image || "/placeholder.svg?height=80&width=120"}
                    alt={article.title}
                    className="w-full sm:w-60 h-[200px] sm:h-[140px] object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-black mb-1">
                      {article.category}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-xl sm:text-2xl leading-tight mb-2">
                      {article.title}
                    </h4>
                    <div className="text-xs text-gray-500">{article.author}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View All Button */}
          {visibleCount < articles.length && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleViewAll}
                className="px-4 py-2 text-sm border border-gray-300 text-gray-600 rounded-md bg-white hover:bg-gray-50 transition"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

}
