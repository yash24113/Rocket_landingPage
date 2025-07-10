'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-white w-full" role="banner">
      {/* Top Header Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 lg:py-0 gap-4 lg:gap-0">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <picture>
              <source srcSet="/images/img_header_logo.avif" type="image/avif" />
              <img 
                src="/images/img_header_logo.png" 
                alt="Dhiranandv Creations Logo" 
                className="w-[200px] sm:w-[220px] lg:w-[250px] h-auto"
              />
            </picture>
          </div>

          {/* Search and Contact Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Search Bar */}
            <div className="flex w-full sm:w-auto">
              <div className="flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-[280px] px-3 py-2 text-sm font-poppins text-[#757575] bg-white border border-[#0a6563] border-r-0 rounded-l focus:outline-none focus:ring-2 focus:ring-[#0a6563]/50"
                />
              </div>
              <Button 
                onClick={handleSearch}
                variant="primary"
                size="md"
                className="rounded-l-none border-l-0"
              >
                Search
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-[38px] h-[38px] bg-[#0a6563] rounded-full flex items-center justify-center">
                <img 
                  src="/images/img_background.svg" 
                  alt="Contact" 
                  className="w-5 h-5"
                />
              </div>
              <div className="text-center sm:text-right">
                <p className="text-sm font-medium text-[#7c7c7c] font-poppins">Customer Support</p>
                <p className="text-sm font-semibold text-[#0a0a0b] font-poppins">+91-9913140434</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-t border-gray-200" role="navigation">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden w-full py-4 flex items-center justify-between text-[#1f1f1f] font-opensans"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span>Menu</span>
            <svg 
              className={`w-5 h-5 transform transition-transform ${menuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menu Items */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-0 lg:gap-6 py-4 lg:py-0" role="menubar">
              <li role="none">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Home
                </button>
              </li>
              <li role="none">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  About Us
                </button>
              </li>
              <li role="none" className="relative group">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors flex items-center gap-2"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Saree
                  <img src="/images/img_vector.svg" alt="" className="w-3 h-3" />
                </button>
                <ul className="hidden lg:group-hover:block absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50" role="menu">
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Embroidered Sarees</button>
                  </li>
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Designer Sarees</button>
                  </li>
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Fancy Sarees</button>
                  </li>
                </ul>
              </li>
              <li role="none" className="relative group">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors flex items-center gap-2"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pure Fabric
                  <img src="/images/img_vector.svg" alt="" className="w-3 h-3" />
                </button>
                <ul className="hidden lg:group-hover:block absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50" role="menu">
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Cotton Silk</button>
                  </li>
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Bandhani Silk</button>
                  </li>
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Banarasi Silk</button>
                  </li>
                </ul>
              </li>
              <li role="none" className="relative group">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors flex items-center gap-2"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Suits
                  <img src="/images/img_vector.svg" alt="" className="w-3 h-3" />
                </button>
                <ul className="hidden lg:group-hover:block absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50" role="menu">
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Designer Suits</button>
                  </li>
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Traditional Suits</button>
                  </li>
                </ul>
              </li>
              <li role="none" className="relative group">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors flex items-center gap-2"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lehenga
                  <img src="/images/img_vector.svg" alt="" className="w-3 h-3" />
                </button>
                <ul className="hidden lg:group-hover:block absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50" role="menu">
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Wedding Lehenga</button>
                  </li>
                  <li role="menuitem">
                    <button className="w-full text-left px-4 py-2 text-sm font-opensans text-[#1f1f1f] hover:bg-gray-100">Party Lehenga</button>
                  </li>
                </ul>
              </li>
              <li role="none">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Our Gallery
                </button>
              </li>
              <li role="none">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Blogs
                </button>
              </li>
              <li role="none">
                <button 
                  className="w-full lg:w-auto text-left lg:text-center py-3 lg:py-4 px-0 lg:px-4 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;