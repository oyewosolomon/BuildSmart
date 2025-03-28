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
        <svg width="45px" height="45px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>building_2_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Building" transform="translate(-288.000000, -48.000000)" fill-rule="nonzero"> <g id="building_2_fill" transform="translate(288.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3,19 L4,19 L4,6.3602 C4,5.71455 4.41315,5.14135 5.02566,4.93717 L13.0257,2.27051 C13.997,1.94674 15,2.6697 15,3.69353 L15,19 L16,19 L16,9.99027 C16,9.67475 16.2887,9.4381 16.5981,9.49998 L18.7941,9.9392 C19.4953,10.0794 19.9999,10.695 19.9999,11.4101 L19.9999,19 L21,19 C21.5523,19 22,19.4477 22,20 C22,20.5523 21.5523,21 21,21 L3,21 C2.44772,21 2,20.5523 2,20 C2,19.4477 2.44772,19 3,19 Z" id="路径" fill="#125eca"> </path> </g> </g> </g> </g></svg>
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