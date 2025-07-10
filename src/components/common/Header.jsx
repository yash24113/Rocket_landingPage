'use client';
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

const Header = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 border-b border-black" role="banner">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between py-2 lg:py-0 gap-4 lg:gap-0">
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
        {/* Product Dropdown (move here) */}
        <div className="my-2 lg:my-0">
          <select
            className="text-lg font-bold font-playfair text-[#0a0a0b] rounded px-3 py-2 bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#0a6563] border-2 border-[#0a6563]"
            value={selectedProductId}
            onChange={e => setSelectedProductId(e.target.value)}
            style={{ minWidth: 200 }}
          >
            <option value="">Fabric</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>{product.name}</option>
            ))}
          </select>
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
            <p className="text-sm font-medium text-[#222] font-inter">Customer Support</p>
            <a href="tel:+91-9925155141" className="text-sm font-semibold text-[#0a0a0b] font-inter hover:underline">+91-9925155141</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;