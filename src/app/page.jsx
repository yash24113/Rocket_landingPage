'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import OptimizedImage from '../components/ui/OptimizedImage';

// Static data for better performance
const productCategories = [
  {
    id: 1,
    title: "Embroidered Sarees",
    description: "Dhananjay Creations Private Limited offers you the fine...",
    image: "/images/img_embroidered_sarees.png"
  },
  {
    id: 2,
    title: "Designer Sarees", 
    description: "Focusing on Designer Sarees, Dhananjay Creations Privat...",
    image: "/images/img_designer_sarees.png"
  },
  {
    id: 3,
    title: "Fancy Sarees",
    description: "Dhananjay Creations Private Limited creates ornate fanc...",
    image: "/images/img_fancy_sarees_manufacturers.png"
  },
  {
    id: 4,
    title: "Bollywood Theme Saree",
    description: "Dhananjay Creations Private Limited is a name to reckon...",
    image: "/images/img_bollywood_theme.png"
  },
  {
    id: 5,
    title: "Wedding Sarees",
    description: "Dhananjay Creations Private Limited offers a wide array...",
    image: "/images/img_wedding_sarees_manufacturers.png"
  },
  {
    id: 6,
    title: "Sequin Sarees",
    description: "Dhananjay Creations Private Limited produces really bea...",
    image: "/images/img_sequin_sarees_manufacturers.png"
  },
  {
    id: 7,
    title: "Traditional Sarees",
    description: "Dhananjay Creations Private Limited is one of the promi...",
    image: "/images/img_traditional_sarees.png"
  },
  {
    id: 8,
    title: "Cotton Silk Sarees",
    description: "Dhananjay Creations Private Limited is a known name in ...",
    image: "/images/img_cotton_silk_sarees.png"
  },
  {
    id: 9,
    title: "Bandhani Silk Sarees",
    description: "Dhananjay Creations Private Limited has carved a niche ...",
    image: "/images/img_bandhani_silk_sarees.png"
  },
  {
    id: 10,
    title: "Banarasi Silk Saree",
    description: "Dhananjay Creations Private Limited is a premier ethnic...",
    image: "/images/img_banarasi_silk_saree.png"
  },
  {
    id: 11,
    title: "Kanchipuram Silk Sarees",
    description: "Dhananjay Creations Private Limited is a known name in ...",
    image: "/images/img_kanchipuram_silk.png"
  },
  {
    id: 12,
    title: "Lehenga Style Sarees",
    description: "Dhananjay Creations Private Limited is a premier ethnic...",
    image: "/images/img_lehenga_style_sarees.png"
  },
  {
    id: 13,
    title: "Half and Half Sarees",
    description: "Dhananjay Creations Private Limited has the proud momen...",
    image: "/images/img_half_and_half_sarees.png"
  },
  {
    id: 14,
    title: "Printed Silk Sarees",
    description: "Dhananjay Creations Private Limited is the finest desti...",
    image: "/images/img_printed_silk_sarees.png"
  },
  {
    id: 15,
    title: "Net Sarees",
    description: "Dhananjay Creations Private Limited is a widely known n...",
    image: "/images/img_net_sarees_manufacturers.png"
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <OptimizedImage
          src="/images/img_hero_background.jpg"
          alt="Saree Manufacturers Hero Background"
          fill={true}
          priority={true}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0b66]"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1250px] mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold font-opensans text-white mb-4 sm:mb-6 leading-tight">
                Saree Manufacturers
              </h1>
              <nav className="flex items-center gap-2 sm:gap-3" aria-label="Breadcrumb">
                <Link 
                  href="/" 
                  className="text-sm sm:text-base font-semibold font-opensans text-white hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
                <OptimizedImage
                  src="/images/img_arrow_right.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-sm sm:text-base font-semibold font-opensans text-white">
                  Saree
                </span>
              </nav>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins text-[#0a0a0b] mb-4 sm:mb-6">
              Featured Products
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-[1px] bg-[#7c7c7c] mx-auto mb-4 sm:mb-6"></div>
            <div className="max-w-4xl mx-auto space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base md:text-lg font-medium font-poppins text-[#7c7c7c] leading-relaxed">
                Showcasing our finest pieces, each product is a testament to exceptional craftsmanship and timeless elegance. Meticulously
              </p>
              <p className="text-sm sm:text-base md:text-lg font-medium font-poppins text-[#7c7c7c] leading-relaxed">
                designed to enhance any wardrobe, these creations exude sophistication and charm.
              </p>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {productCategories.map((product, index) => (
              <article 
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={product.title}
                    fill={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="group-hover:scale-110 transition-transform duration-300"
                    priority={index < 4} // Prioritize first 4 images
                  />
                </div>
                
                {/* Product Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold font-poppins text-[#0a0a0b] mb-2 sm:mb-3 line-clamp-2 hover:text-[#0a6563] transition-colors cursor-pointer">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal font-poppins text-[#636363] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Saree in Surat Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-opensans text-[#0a0a0b] mb-4 sm:mb-6">
              Saree in Surat
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-poppins text-[#0a0a0b] leading-relaxed">
              <p>
                <span>Dhananjay Creations Private Limited is a banner of exquisite sarees truly portraying the richness of India's cultural heritage. Elegance and tradition have culminated in our collection of </span>
                <span className="font-bold">Saree in Surat</span>
                <span>, thus with years of traditional techniques</span>
              </p>
              <p>
                combined with a harmony of modern designs producing pieces aesthetically beautiful and durable. To accommodate a wide range of preferences and events, sarees are available in a wide variety of fabrics, colors, and designs. Each piece is
              </p>
              <p>
                crafted with utmost care so that it speaks of the skill of craftsmanship as well as tradition.
              </p>
            </div>
          </div>
          
          {/* Get Premium Products Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-opensans text-[#0a0a0b] mb-4 sm:mb-6">
              Get Premium Products Directly from Saree Manufacturers in Surat
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-poppins text-[#0a0a0b] leading-relaxed">
              <p>
                Our processes ensure that every saree meets the client's expectations. Our skilled artists use advanced techniques to create sarees that stand out in the market. Whether it's a casual outing or a festive celebration, our sarees ensure that every
              </p>
              <p>
                <span>woman has a perfect wardrobe. As one of the leading </span>
                <span className="font-bold">Saree Manufacturers in Surat</span>
                <span>, we take pride in maintaining quality and innovation in our production process. We look at giving our customers products that offer traditional aesthetics</span>
              </p>
              <p>
                blended with modern trends, which makes us one of the preferred choices in the industry.
              </p>
            </div>
          </div>
          
          {/* Party Wear Saree Suppliers Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-opensans text-[#0a0a0b] mb-4 sm:mb-6">
              Looking for Party Wear Saree Suppliers in Gujarat
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-poppins text-[#0a0a0b] leading-relaxed">
              <p>
                <span>Our collection offers sarees with perfection for any celebration or event. We have set ourselves as one of the most reliable </span>
                <span className="font-bold">Party Wear Saree Suppliers in Gujarat</span>
                <span>, in the vast fashion market of Gujarat. All of them are so carefully designed that</span>
              </p>
              <p>
                each one of them enhances the beauty and comfort of the wearer. Because we are aware of how essential it is to achieve a stunning appearance when attending events, our exclusive collection gives every lady the impression that the entire
              </p>
              <p>
                world is centered on her. When talking about premium materials and intricate detailing, then our party wear sarees are sophisticated and full of grace in any festive celebration.
              </p>
            </div>
          </div>
          
          {/* Most Trusted Party Wear Saree Exporters Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-opensans text-[#0a0a0b] mb-4 sm:mb-6">
              Most Trusted Party Wear Saree Exporters in Gujarat
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-poppins text-[#0a0a0b] leading-relaxed">
              <p>
                We cater to global audiences and make sure that our exquisite sarees reach fashion enthusiasts all over the world. A streamlined export operation of international standards gives our clients products that are pleasingly beautiful as well as up
              </p>
              <p>
                <span>to the mark of the world market. We are also renowned as one of the premier </span>
                <span className="font-bold">Party Wear Saree Exporters in Gujarat</span>
                <span>. Because we are aware that our customers from other countries have a wide range of preferences, we have included in our</span>
              </p>
              <p>
                collection styles that are suitable for a wide variety of preferences and sensibilities. The act of exporting our sarees is analogous to bringing a portion of Indian culture to the entire world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;