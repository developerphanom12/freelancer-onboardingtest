import { useNavigate } from "react-router-dom"

export default function BlogGrid() {
  const navigate = useNavigate()
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Post 1 */}
      <div
      onClick={()=> navigate("/blogs/blog-details")} className="post1">

        <div className="post_title text-black p-3 pl-0">Guide</div>
        <div className="bg-white overflow-hidden transition-shadow">
          {/* Image/gradient block */}
          <div className="aspect-video bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-400 relative rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/80 via-purple-500/80 to-pink-400/80 rounded-lg" />
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 pl-0">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              How Much Does It Cost to Develop an App in 2025: Detailed Guide
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              When it comes to mobile app development, a million-dollar question
              (sometimes literally) keeps...
            </p>
            <p className="text-xs text-gray-500">Sourabh Singh</p>
          </div>
        </div>

      </div>


      {/* Post 2 */}
      <div className="post2">

        <div className="post_title text-black p-3 pl-0">App Development</div>
        <div className="bg-white overflow-hidden transition-shadow">
          {/* Image block */}
          <div className="aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative rounded-lg">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 rounded-lg" />
          </div>

          {/* Content */}
          <div className="p-6 pl-0">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              How to Build a Minimal Viable Product (MVP) and Raise Funding in 2025
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Facebook, TikTok, Threads, Uber, Instagram, Zoom, Spotify — today, all these big players are making...
            </p>
            <p className="text-xs text-gray-500">Prashant Sharma</p>
          </div>
        </div>

      </div>


      {/* Post 3 */}
      <div className="post3">

        <div className="post_title text-black p-3 pl-0">App Development</div>
        <div className="bg-white overflow-hidden transition-shadow">
          {/* Image block */}
          <div className="aspect-video bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 relative rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <div className="w-24 h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-16 h-20 bg-white/20 rounded border border-white/30" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pl-0">
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              How Long Does It Take to Develop a Mobile App?
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Once you have an app idea, a lot of many thoughts occupy your mind - various questions begin to...
            </p>
            <p className="text-xs text-gray-500">Prashant Sharma</p>
          </div>
        </div>

      </div>

    </div>
  )
}
