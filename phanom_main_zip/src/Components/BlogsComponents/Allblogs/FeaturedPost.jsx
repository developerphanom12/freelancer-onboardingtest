export default function FeaturedPost() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Left side - Video Thumbnail */}
        <div className="relative w-full h-full">
          <div className="aspect-video bg-gradient-to-br from-orange-400 via-orange-500 to-blue-400 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/90 to-blue-400/90" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-2xl sm:text-3xl ml-1">▶</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4">
              <div className="bg-white/10 backdrop-blur-sm rounded p-1 sm:p-2">
                <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded">
                  <div className="w-1/3 h-full bg-white rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="h-full flex flex-col justify-between mt-6 lg:mt-0 space-y-4">
          {/* Category */}
          <span className="inline-block px-2 sm:px-3 pl-0 text-sm text-gray-700 rounded">
            Guides
          </span>

          {/* Title & Description */}
          <div>
            <h1 className="text-2xl sm:text-3xl  font-bold text-gray-900 mb-3 sm:mb-5 leading-snug">
              Mobile App Development Explained:{" "}
              <span className="block sm:inline text-3xl sm:text-4xl bg-gradient-to-r from-[#4899E1] via-[#984EE8] to-[#D019E4] bg-clip-text text-transparent font-semibold">
                The Ultimate Step-by-Step Guide
              </span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              What began as a small collection of utilities and games has now
              become a cornerstone of digital life, powering everything from
              entertainment and social interaction...
            </p>
          </div>

          {/* Author */}
          <p className="text-xs sm:text-sm text-gray-500">Sourabh Singh</p>
        </div>
      </div>
    </div>
  );
}
