import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="/logo.png" 
            alt="BuildSmart Technologies Logo"
            className="h-10"
          /> */}
          <span className="ml-2 text-xl font-bold text-blue-600">
            BuildSmart
          </span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            Contact
          </a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Request Demo
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#home"
            className="block px-6 py-2 text-gray-800 hover:bg-blue-50"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-6 py-2 text-gray-800 hover:bg-blue-50"
          >
            About
          </a>
          <a
            href="#features"
            className="block px-6 py-2 text-gray-800 hover:bg-blue-50"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="block px-6 py-2 text-gray-800 hover:bg-blue-50"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-6 py-2 text-gray-800 hover:bg-blue-50"
          >
            Contact
          </a>
          <button className="block w-full text-left px-6 py-2 bg-blue-600 text-white hover:bg-blue-700">
            Request Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;