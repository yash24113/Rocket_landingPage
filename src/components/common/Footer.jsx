'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import EditText from '../ui/EditText';
import Image from 'next/image';
import MultiStepContactModal from './MultiStepContactModal';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  // Get values from environment variables
  const phone1 = process.env.NEXT_PUBLIC_COMPANY_PHONE1 || '+91 9824003484';
  const phone2 = process.env.NEXT_PUBLIC_COMPANY_PHONE2 || '+91 9925155141';
  const address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '404,4th Floor, Safal Prelude,Behind YMCA Club,Corporate Road, Prahlad Nagar, Ahmedabad - 380015, Gujarat, India';
  const facebookUrl = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || '#';
  const whatsappUrl = process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP || '#';
  const xUrl = process.env.NEXT_PUBLIC_SOCIAL_X || '#';
  const linkedinUrl = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || '#';
  const youtubeUrl = process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || '#';

  const handleNewsletterSubmit = () => {
    setModalEmail(email);
    setModalOpen(true);
  };

  // const handleBusinessInquiry = () => {
  //   console.log('Business inquiry clicked');
  // };

  return (
    <footer className="bg-[#0a6563] w-full mt-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 lg:py-12">
          
          {/* Company Info Section */}
          <div className="w-full lg:w-1/3 relative">
            <div className="bg-white rounded-lg p-6 relative">
              {/* Scroll to Top Button */}
              {/* <button 
                className="absolute -top-4 right-4 w-10 h-10 bg-[#01e675] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
              >
                <img src="/images/img_component_14.svg" alt="" className="w-5 h-5" />
              </button> */}

              <div className="space-y-6">
                {/* Logo */}
                <Image 
                  src="/images/age_logo.avif"
                  alt="Amrita Global Enterprises Logo"
                  width={250}
                  height={60}
                  className="w-[200px] sm:w-[220px] lg:w-[250px] h-auto"
                  priority
                />

                {/* Company Description */}
                <p className="text-sm font-inter text-[#0a0a0b] leading-relaxed">
                  Amrita Global Enterprises Limited is the leading and highly reputed name in
                  manufacturing and supplying a vast range of product, including sarees,
                  embroidery fabric, lace, and lehengas. We are also well-known as the best online
                  store where you can easily shop for all these products.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img src="/images/img_vector_cyan_900.svg" alt="" className="w-4 h-4" />
                    <span className="text-sm font-semibold font-inter text-[#0a0a0b]">{phone1}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/img_vector_cyan_900.svg" alt="" className="w-4 h-4" />
                    <span className="text-sm font-semibold font-inter text-[#0a0a0b]">{phone2}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <img src="/images/img_component_2.svg" alt="" className="w-4 h-4 mt-1" />
                    <span className="text-sm font-inter text-[#0a0a0b] leading-relaxed">
                      {address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Inquiry Button */}
            {/* <button 
              onClick={handleBusinessInquiry}
              className="mt-4 bg-gradient-to-b from-white/15 to-white/0 rounded-full px-4 py-2 flex items-center gap-3 text-white font-montserrat text-sm hover:from-white/20 transition-all shadow-md"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src="/images/img_background_cyan_900.svg" alt="" className="w-5 h-5" />
              </div>
              Business Enquiry
            </button> */}
          </div>

          {/* Links and Newsletter Section */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-montserrat text-[#f9fefd] capitalize">Links</h3>
                <ul className="space-y-2" role="list">
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Home</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">About Us</button></li>
                  {/* <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Our Gallery</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Blogs</button></li> */}
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Contact Us</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Products</button></li>
                 {/*  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Market Area</button></li> */}
                </ul>
              </div>

              {/* Product Links */}
              <div className="space-y-6">
                <h3 className="text-lg font-montserrat text-[#f9fefd] capitalize">Our Products</h3>
                <ul className="space-y-2" role="list">
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Fabric</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Denim</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Turf</button></li>
                  {/* <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Fancy Sarees</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Bollywood Theme Saree</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Pure Fabric</button></li>
                  <li><button className="text-sm font-inter text-[#fafafa] hover:text-white transition-colors text-left">Suits</button></li> */}
                </ul>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-montserrat text-[#f9fefd] capitalize">You can Follow us at</h3>
              <div className="flex items-center gap-2">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center">
                  <img src="/images/img_facebook.avif" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center">
                  <Image src="/images/img_link.avif" alt="WhatsApp" width={25} height={35} />
                </a>
                <a href={xUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center">
                  <img src="/images/img_twitter.avif" alt="X" className="w-6 h-6" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center">
                  <img src="/images/img_linkedin.avif" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center">
                  <img src="/images/img_youtube.avif" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter and Payment Section */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-lg font-montserrat text-[#f9fefd] capitalize">Join Our Newsletter</h3>
              <div className="flex">
                <EditText
                  placeholder="Your Email..."
                  value={email}
                  onChange={setEmail}
                  className="flex-1 rounded-r-none border-r-0"
                />
                <Button 
                  onClick={handleNewsletterSubmit}
                  variant="secondary"
                  size="md"
                  className="rounded-l-none border-l-0"
                >
                  Submit
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-montserrat text-[#f9fefd] capitalize">We Accept</h3>
              <div className="flex items-center">
                  <Image src="/images/img_card.avif" alt="Payment Methods" width={186} height={24} className="w-full max-w-[186px] h-6" />
                </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <span className="text-sm font-inter text-white">© 2025 Amrita Global Enterprises All Rights Reserved. Crafted with</span>
            <img src="/images/img_component_2_white_a700.svg" alt="" className="w-4 h-4" />
            <span className="text-sm font-inter text-white">by AGE -</span>
            <span className="text-sm font-inter text-white">Web Designing,</span>
            <span className="text-sm font-inter text-white">Digital Marketing &</span>
            <span className="text-sm font-inter text-white">Branding Company</span>
          </div>
        </div>
      </div>
      <MultiStepContactModal open={modalOpen} onClose={() => setModalOpen(false)} initialEmail={modalEmail} />
    </footer>
  );
};

export default Footer;