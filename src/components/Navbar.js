// Navbar.js
import React from 'react';
import logo from "../logo.png";
import search from "../icon/search.png";
import profile from "../icon/profile.png";

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" className="text-base mr-5 hover:text-gray-900">Home</a>
        <a href="/" className="text-base mr-5 hover:text-gray-900">Story</a>
        <a href="/" className="text-base mr-5 hover:text-gray-900">Gallery</a>
        <a href="/" className="text-base mr-5 hover:text-gray-900">Contact Us</a>
        <a href="/CharteredAccountantForm" className="text-base mr-5 hover:text-gray-900">Chartered Accountant Details</a> {/* Add this link */}
      </nav>
      <div className='flex mt-4 md:mt-0'>
        <img alt='icon' className='pr-4' src={search} />
        <img alt='icon' src={profile} />
      </div>
    </div>
  );
};

export default Navbar;
