import { useState } from "react";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      {/* Top Navigation */}
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <img
          src="/public/cogentLogo.png"
          alt="Cogent Solutions Logo"
          className="h-12"
        />

        {/* Hamburger Icon - mobile only */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X color="white" /> : <Menu color="white" />}
          </button>
        </div>

        {/* Navigation Links - desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#overview" className="text-white font-bold">
            Event Overview
          </a>
          <a href="#agenda" className="text-white  font-bold">
            Agenda
          </a>
          <a
            href="#registration"
            className="ml-4 px-5 py-2  border-2 font-bold border-white rounded-full  hover:bg-blue-800 hover:text-white transition text-white"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 text-sm">
          <a href="#overview" className="text-white font-bold">
            Event Overview
          </a>
          <a href="#agenda" className="text-white font-bold">
            Agenda
          </a>
          <a
            href="#registration"
            className="ml-4 px-5 py-2  border-2 font-bold border-white rounded-full  hover:bg-blue-800 hover:text-white transition text-white"
          >
            Register Now
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
