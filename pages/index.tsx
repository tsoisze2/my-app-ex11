// pages/index.tsx
import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-4" id="nav-links">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Authors</a>
          <a href="#" className="hover:text-gray-300">Stores</a>
          <a href="#" className="hover:text-gray-300">Books</a>
        </div>
        <div className="md:hidden" onClick={toggleMenu} id="hamburger-menu">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </header>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-gray-800" id="nav-links-sm">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Authors</a>
          <a href="#" className="text-white hover:text-gray-300">Stores</a>
          <a href="#" className="text-white hover:text-gray-300">Books</a>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="p-6">
        {/* Authors Section */}
        <section className="mb-8" id="authors_sec">
          <h2 className="text-2xl font-semibold mb-4">Authors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="authors">
            {/* Replace these with dynamic content as needed */}
            <div className="bg-gray-100 p-4 rounded shadow-md">Author 1</div>
            <div className="bg-gray-100 p-4 rounded shadow-md">Author 2</div>
            <div className="bg-gray-100 p-4 rounded shadow-md">Author 3</div>
          </div>
        </section>

        {/* Stores Section */}
        <section className="mb-8" id="stores_sec">
          <h2 className="text-2xl font-semibold mb-4">Stores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="stores">
            {/* Replace these with dynamic content as needed */}
            <div className="bg-gray-100 p-4 rounded shadow-md w-full sm:w-1/2 lg:w-1/3">Store 1</div>
            <div className="bg-gray-100 p-4 rounded shadow-md w-full sm:w-1/2 lg:w-1/3">Store 2</div>
            <div className="bg-gray-100 p-4 rounded shadow-md w-full sm:w-1/2 lg:w-1/3">Store 3</div>
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-8" id="books_sec">
          <h2 className="text-2xl font-semibold mb-4">Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="books">
            {/* Replace these with dynamic content as needed */}
            <div className="bg-gray-100 p-4 rounded shadow-md">Book 1</div>
            <div className="bg-gray-100 p-4 rounded shadow-md">Book 2</div>
            <div className="bg-gray-100 p-4 rounded shadow-md">Book 3</div>
            <div className="bg-gray-100 p-4 rounded shadow-md">Book 4</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="contact-info mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="social-media-links flex space-x-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
