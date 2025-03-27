import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BuildSmart Technologies</h3>
            <p className="text-gray-200">
              Revolutionizing construction management with innovative solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-200">
              <li>Home</li>
              <li>About Us</li>
              <li>Solutions</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200">Email: info@bs-technology.net</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-200">© 2023 BuildSmart Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;