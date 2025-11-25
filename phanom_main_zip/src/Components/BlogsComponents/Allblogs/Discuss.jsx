import { useNavigate } from "react-router-dom";
import Images from "../../../assets/Images";


export default function DiscussPage() {
  const navigate = useNavigate()
  return (
    <main className=" bg-gray-50 flex items-center ">
      <div className="relative overflow-hidden bg-[#8E59E2] px-6 sm:px-8 lg:px-12 py-3 w-full rounded-xl">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white text-center lg:text-center">
              <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold leading-tight">
                We build digital products that help you unlock opportunities and embrace innovation.
              </h1>
              <div className="mt-8">
                <button
                onClick={() => navigate("/book-appointment")}
                  className="bg-white text-[#8E59E2] hover:bg-gray-100 font-medium px-8 py-3 rounded-lg text-lg"
                >
                  Let&apos;s discuss your project
                </button>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img src={Images.discuss} alt="Discuss" className="h-full w-full object-cover scale-110" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
