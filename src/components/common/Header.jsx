'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef(null);

  useEffect(() => {
    fetch('https://langingpage-production-f27f.up.railway.app/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!productDropdownOpen) return;
    function handleClickOutside(event) {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
        setProductDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [productDropdownOpen]);

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 border-b border-black" role="banner">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-2 lg:py-0 gap-4 lg:gap-0">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Image 
              src="/images/age_logo.avif"
              alt="Amrita Global Enterprises Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <span className="text-xl lg:text-2xl font-bold font-montserrat text-[#0a6563] whitespace-nowrap">Amrita Global Enterprises</span>
          </div>

          {/* Navigation Menu - Desktop Only */}
          <nav className="hidden lg:block flex-1" role="navigation">
            <ul className="flex justify-center items-center gap-8" role="menubar">
              <li role="none">
                <button 
                  className="text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Home
                </button>
              </li>
              <li role="none">
                <button 
                  className="text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  About Us
                </button>
              </li>
              <li role="none" className="relative group" ref={productDropdownRef}>
                <button 
                  className="text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors flex items-center gap-2"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={productDropdownOpen}
                  onClick={() => setProductDropdownOpen((open) => !open)}
                >
                  Product
                  <img src="/images/img_vector.svg" alt="" className="w-3 h-3" />
                </button>
                <ul
                  className={`hidden lg:group-hover:block absolute top-full left-0 bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50 ${productDropdownOpen ? '!block' : 'hidden'} lg:group-hover:block`}
                  role="menu"
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  {products.length > 0 ? (
                    products.map((product) => (
                      <li role="menuitem" key={product._id}>
                        <button className="w-full text-left px-4 py-2 text-sm font-inter text-[#1f1f1f] hover:bg-gray-100" onClick={() => setProductDropdownOpen(false)}>
                          {product.name}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li role="menuitem">
                      <span className="w-full text-left px-4 py-2 text-sm font-inter text-[#757575]">Loading...</span>
                    </li>
                  )}
                </ul>
              </li>
              <li role="none">
                <button 
                  className="text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>

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
              <p className="text-sm font-medium text-[#222] font-inter">Customer Support</p>
              <p className="text-sm font-semibold text-[#0a0a0b] font-inter">+91-9913140434</p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          {/* Mobile Menu Button */}
          <button 
            className="w-full py-4 flex items-center justify-between text-[#1f1f1f] font-montserrat"
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
          {/* Mobile Menu Items */}
          <div className={`${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col gap-0 py-4" role="menubar">
              <li role="none">
                <button 
                  className="w-full text-left py-3 px-0 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Home
                </button>
              </li>
              <li role="none">
                <button 
                  className="w-full text-left py-3 px-0 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  About Us
                </button>
              </li>
              <li role="none" className="relative group" ref={productDropdownRef}>
                <button 
                  className="w-full text-left py-3 px-0 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors flex items-center gap-2"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={productDropdownOpen}
                  onClick={() => setProductDropdownOpen((open) => !open)}
                >
                  Product
                  <img src="/images/img_vector.svg" alt="" className="w-3 h-3" />
                </button>
                <ul
                  className={`bg-white shadow-lg border rounded-md py-2 min-w-[200px] z-50 ${productDropdownOpen ? 'block' : 'hidden'}`}
                  role="menu"
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  {products.length > 0 ? (
                    products.map((product) => (
                      <li role="menuitem" key={product._id}>
                        <button className="w-full text-left px-4 py-2 text-sm font-inter text-[#1f1f1f] hover:bg-gray-100" onClick={() => setProductDropdownOpen(false)}>
                          {product.name}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li role="menuitem">
                      <span className="w-full text-left px-4 py-2 text-sm font-inter text-[#757575]">Loading...</span>
                    </li>
                  )}
                </ul>
              </li>
              <li role="none">
                <button 
                  className="w-full text-left py-3 px-0 text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors"
                  role="menuitem"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;