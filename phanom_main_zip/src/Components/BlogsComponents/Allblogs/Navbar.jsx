import { ChevronDown } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 pl-0 flex items-center justify-between h-16">
        {/* Left - Logo */}
      <div className="h-10 w-auto">
      <img
        src={Logo}
        alt="Phanom Logo"
        className="h-full w-full object-contain"
      />
    </div>

        {/* Middle - Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 text-sm">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Services
          </a>
          <a href="#" className="hover:text-blue-600 flex items-center">
            More <ChevronDown className="ml-1 h-4 w-4" />
          </a>
        </nav>

        {/* Right - CTA Button */}
        <button className="px-4 py-2 text-white rounded-lg transition 
  bg-gradient-to-r from-[#459CE1] to-[#D11AE7] hover:opacity-90">
          Hire Indian Talent
        </button>
      </div>
    </header>
  );
}
