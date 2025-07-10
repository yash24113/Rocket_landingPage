'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

const Header = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [desktopProductOpen, setDesktopProductOpen] = useState(false);
  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    fetch('https://langingpage-production-f27f.up.railway.app/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    if (!selectedProductId) {
      onProductSelect && onProductSelect({ name: 'Fabric', description: 'Premium Fabric in Ahedabad' });
      return;
    }
    setLoading(true);
    fetch(`https://langingpage-production-f27f.up.railway.app/api/products/${selectedProductId}`)
      .then((res) => res.json())
      .then((data) => {
        onProductSelect && onProductSelect(data);
        setLoading(false);
      })
      .catch(() => {
        onProductSelect && onProductSelect({ name: 'Unknown', description: 'No description available.' });
        setLoading(false);
      });
  }, [selectedProductId, onProductSelect]);

  useEffect(() => {
    if (!desktopProductOpen) return;
    function handleClickOutside(event) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setDesktopProductOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [desktopProductOpen]);

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 border-b border-black" role="banner">
      {/* Mobile Header */}
      <div className="flex items-center justify-between w-full lg:hidden py-2 px-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/age_logo.avif"
            alt="AGE Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            priority
          />
          <span className="text-xl font-bold font-montserrat text-[#0a6563]">AGE</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Phone Icon - right side, clickable, use image */}
          <a href="tel:+919925155141" className="flex items-center justify-center" aria-label="Call +91-9925155141">
            <span className="w-8 h-8 bg-[#0a6563] rounded-full flex items-center justify-center">
              <img src="/images/img_background.svg" alt="Call" className="w-5 h-5" />
            </span>
          </a>
          {/* Hamburger Menu Icon */}
          <button className="p-2" aria-label="Open menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-7 h-7 text-[#0a6563]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 lg:hidden">
          <ul className="flex flex-col py-2">
            <li>
              <button className="w-full text-left px-6 py-2 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] font-bold" onClick={() => setMobileMenuOpen(false)}>Home</button>
            </li>
            <li>
              <button className="w-full text-left px-6 py-2 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] font-bold" onClick={() => setMobileMenuOpen(false)}>About Us</button>
            </li>
            <li>
              <button className="w-full text-left px-6 py-2 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] font-bold flex items-center justify-between" onClick={() => setMobileProductOpen(!mobileProductOpen)}>
                Product
                <svg className={`w-4 h-4 ml-2 transition-transform ${mobileProductOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {mobileProductOpen && (
                <ul className="pl-8">
                  {products.map((product) => (
                    <li key={product._id}>
                      <button className="w-full text-left px-2 py-1 text-base text-[#1f1f1f] hover:text-[#0a6563]" onClick={() => { setSelectedProductId(product._id); setMobileMenuOpen(false); setMobileProductOpen(false); }}>{product.name}</button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button className="w-full text-left px-6 py-2 text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] font-bold" onClick={() => setMobileMenuOpen(false)}>Contact Us</button>
            </li>
          </ul>
        </div>
      )}
      {/* Desktop Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex-col lg:flex-row lg:items-center lg:justify-between py-2 lg:py-0 gap-4 lg:gap-0 hidden lg:flex">
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
          <span className="text-xl lg:text-2xl font-bold font-montserrat text-[#0a6563] whitespace-nowrap block lg:hidden">AGE</span>
          <span className="text-xl lg:text-2xl font-bold font-montserrat text-[#0a6563] whitespace-nowrap hidden lg:block">Amrita Global Enterprises</span>
        </div>
        {/* Navigation Menu - Desktop Only */}
        <nav className="flex-1" role="navigation">
          <ul className="flex justify-center items-center gap-8" role="menubar">
            <li role="none">
              <button 
                className="text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors font-bold bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer"
                role="menuitem"
              >
                Home
              </button>
            </li>
            <li role="none">
              <button 
                className="text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors font-bold bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer"
                role="menuitem"
              >
                About Us
              </button>
            </li>
            {/* Product Dropdown */}
            <li role="none" className="relative" ref={desktopDropdownRef}>
              <button
                className={`text-base font-montserrat text-[#1f1f1f] hover:text-[#0a6563] transition-colors font-bold bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer flex items-center ${desktopProductOpen ? 'text-[#0a6563]' : ''}`}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={desktopProductOpen}
                onClick={() => setDesktopProductOpen((open) => !open)}
              >
                Product
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {desktopProductOpen && (
                <ul className="absolute left-0 mt-2 min-w-[160px] bg-white border border-gray-200 shadow-lg rounded z-50">
                  {products.map((product) => (
                    <li key={product._id}>
                      <button
                        className="w-full text-left px-4 py-2 text-base text-[#1f1f1f] hover:text-[#0a6563] hover:bg-gray-100"
                        onClick={() => {
                          setSelectedProductId(product._id);
                          setDesktopProductOpen(false);
                        }}
                      >
                        {product.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li role="none">
              <button 
                className="text-base font-opensans text-[#1f1f1f] hover:text-[#0a6563] transition-colors font-bold bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer"
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
            <a href="tel:+91-9925155141" className="text-sm font-semibold text-[#0a0a0b] font-inter hover:underline">+91-9925155141</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;