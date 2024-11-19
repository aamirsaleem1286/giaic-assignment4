"use client"
import Image from 'next/image';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'; // Import the hamburger and close icons
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false); // State to handle mobile menu visibility

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible); // Toggle the mobile menu visibility
  };

  return (
    <nav className="text-gray-900 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={80} height={60} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <a
              href="#"
              onClick={toggleDropdown}
              className="hover:text-gray-400 cursor-pointer flex items-center space-x-1"
            >
              <span>Shop</span>
              <FiChevronDown
                className={`transform transition-all ${isDropdownVisible ? 'rotate-180' : ''}`}
              />
            </a>
            {isDropdownVisible && (
              <div className="absolute bg-gray-800 text-white rounded-md mt-2 shadow-lg">
                <ul className="py-2">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Men
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                      Women
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-400">
            On Sale
          </a>
          <a href="#" className="hover:text-gray-400">
            New Arrivals
          </a>
          <a href="#" className="hover:text-gray-400">
            Brands
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            className="px-4 py-2 rounded-full w-96 bg-[#F0F0F0] text-black placeholder-gray-400 focus:outline-none"
            placeholder="Search..."
          />
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <Image src="/images/cartIcon.png" alt="Cart" width={90} height={90} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-900">
            {isMobileMenuVisible ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuVisible && (
        <div className="md:hidden bg-gray-800 text-white">
          <ul className="space-y-4 py-4">
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Shop
              </a>
              <div className="ml-4">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Men
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Women
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Brands
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Search
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-2 hover:bg-gray-700">
                Cart
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
