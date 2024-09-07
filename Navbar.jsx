import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import image from '../assets/logo.png';

const Navbar = ({ image }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <img src={image} alt="logo" className="h-12" />

       
        <nav className="hidden sm:flex flex-1 items-center justify-center space-x-8">
          <button className="flex items-center text-lg font-semibold hover:text-blue-300 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon="fa-solid fa-house" className="mr-2" />
            Home
          </button>
          <button className="flex items-center text-lg font-semibold hover:text-blue-300 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon="fa-solid fa-brain" className="mr-2" />
            Mental Wellness
          </button>
          <button className="flex items-center text-lg font-semibold hover:text-blue-300 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon="fa-solid fa-book" className="mr-2" />
            Resources
          </button>
        </nav>

       
        <button
          onClick={toggleMenu}
          className="sm:hidden text-2xl hover:text-blue-300 transition duration-300 ease-in-out"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

       
        <div
          className={`absolute top-full right-0 w-64 bg-gray-800 text-white shadow-lg mt-2 rounded-lg transition-transform duration-300 ease-in-out ${
            menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full text-left px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
          >
            <FontAwesomeIcon icon="fa-solid fa-house" className="mr-2" />
            Home
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full text-left px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
          >
            <FontAwesomeIcon icon="fa-solid fa-brain" className="mr-2" />
            Mental Wellness
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full text-left px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
          >
            <FontAwesomeIcon icon="fa-solid fa-book" className="mr-2" />
            Resources
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
