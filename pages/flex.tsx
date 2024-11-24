// pages/flex.tsx
import React, { useState } from 'react';

const FlexPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id="navbar" className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-lg font-bold">Logo</div>
        <div className="hidden md:flex space-x-4" id="nav-links">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="md:hidden" onClick={toggleMenu} id="hamburger-menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </nav>
      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-800" id="nav-links-sm">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero-section" className="relative h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white hero-title">Welcome to Our Website</h1>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hero-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default FlexPage;
