import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-8 text-white flex justify-center mt-2 mb-3 py-10"
      style={{
        backgroundImage:
          "url(/placeholder.svg?height=400&width=800&query=purple+abstract+newsletter+background)",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-brandBlue" />

      {/* Main flex container */}
      <div className="relative flex justify-around items-center gap-8 z-10 w-[85%]">
        {/* Left Illustration */}
        <div className="flex-shrink-0">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 rounded-full bg-teal-400 opacity-80" />
            <div className="absolute left-4 top-4 h-16 w-16 rounded-full bg-orange-400" />
            <div className="absolute right-2 top-8 h-12 w-8 rounded bg-white opacity-90" />
            <div className="absolute right-3 top-9 h-2 w-6 bg-orange-400" />
            <div className="absolute right-3 top-12 h-1 w-4 bg-gray-400" />
            <div className="absolute right-3 top-14 h-1 w-5 bg-gray-400" />
            <div className="absolute right-3 top-16 h-1 w-3 bg-gray-400" />

            {/* Floating elements */}
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-yellow-400" />
            <div className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-pink-400" />
            <div className="absolute -bottom-2 left-8 h-2 w-2 rounded-full bg-green-400" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center flex-col">
          <div className="mb-2 text-xl font-medium uppercase tracking-wider opacity-90">
            SUBSCRIBE OUR NEWSLETTER
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight">
            Stay updated with our bi-monthly stories.
          </h2>

          <form onSubmit={handleSubmit} className="flex items-center gap-0 bg-white rounded-xl overflow-hidden w-full max-w-md shadow p-2">
  <input
    type="email"
    placeholder="Your email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
    required
  />
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-medium rounded-xl"
  >
    Subscribe
  </button>
</form>

        </div>
      </div>

      {/* Decorative mail icon */}
      <div className="absolute bottom-8 right-16 opacity-30 z-10">
        <svg
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6L20 18L38 6V4C38 2.89543 37.1046 2 36 2H4C2.89543 2 2 2.89543 2 4V6Z" />
          <path d="M2 8V28C2 29.1046 2.89543 30 4 30H36C37.1046 30 38 29.1046 38 28V8L20 20L2 8Z" />
        </svg>
      </div>
    </div>
  );
}
