"use client"
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi'; // Import the dropdown icon
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="text-gray-900 py-4">
      <div className="container mx-auto px-6 flex items-center justify-around">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={80} height={60} />
        </div>

        <div className="hidden md:flex space-x-8">
          <div className="relative">
            <a
              href="#"
              onClick={toggleDropdown}
              className="hover:text-gray-400 cursor-pointer flex items-center space-x-1"
            >
              <span>Shop</span>
              <FiChevronDown
                className={`transform transition-all ${
                  isDropdownVisible ? 'rotate-180' : ''
                }`}
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
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            className="px-4 py-2 rounded-full w-96 bg-[#F0F0F0] text-black placeholder-gray-400 focus:outline-none  focus:none"
            placeholder="Search..."
          />
        </div>
        <div className="relative">
         <Image src="/images/cartIcon.png" alt="images"width={90}height={90}/>     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

