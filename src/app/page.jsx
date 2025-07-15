'use client';
/**
 * A/B Testing Implementation:
 * - Variants A and B are randomly assigned (50/50 split)
 * - Variant assignment is stored in localStorage for consistency
 * - Different content variations for headings, descriptions, and CTAs
 * - Analytics tracking for variant assignment and user interactions
 * - Test name: 'content_variation'
 */
import React from 'react';
import Link from 'next/link';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const SwiperBundle = dynamic(() => import('../components/common/SwiperBundle'), { ssr: false });
import { useRouter } from 'next/navigation';
import MultiStepContactModal from '../components/common/MultiStepContactModal';
import StickyIcons from '../components/common/StickyIcons';
import { useState } from 'react';

// Static data for better performance
const productCategories = [
  {
    id: 1,
    title: "Embroidered Sarees",
    description: "Amrita Global Enterprises offers you the fine...",
    image: "/images/img_embroidered_sarees.avif"
  },
  {
    id: 2,
    title: "Designer Sarees",
    description: "Focusing on Designer Sarees, Dhananjay Creations Privat...",
    image: "/images/img_designer_sarees.avif"
  },
  {
    id: 3,
    title: "Fancy Sarees",
    description: "Amrita Global Enterprises creates ornate fanc...",
    image: "/images/img_fancy_sarees_manufacturers.avif"
  },
  {
    id: 4,
    title: "Bollywood Theme Saree",
    description: "Amrita Global Enterprises is a name to reckon...",
    image: "/images/img_bollywood_theme.avif"
  },
  {
    id: 5,
    title: "Wedding Sarees",
    description: "Amrita Global Enterprises offers a wide array...",
    image: "/images/img_wedding_sarees_manufacturers.avif"
  },
  {
    id: 6,
    title: "Sequin Sarees",
    description: "Amrita Global Enterprises produces really bea...",
    image: "/images/img_sequin_sarees_manufacturers.avif"
  },
  {
    id: 7,
    title: "Traditional Sarees",
    description: "Amrita Global Enterprises is one of the promi...",
    image: "/images/img_traditional_sarees.avif"
  },
  {
    id: 8,
    title: "Cotton Silk Sarees",
    description: "Amrita Global Enterprises is a known name in ...",
    image: "/images/img_cotton_silk_sarees.avif"
  },
  {
    id: 9,
    title: "Bandhani Silk Sarees",
    description: "Amrita Global Enterprises has carved a niche ...",
    image: "/images/img_bandhani_silk_sarees.avif"
  },
  {
    id: 10,
    title: "Banarasi Silk Saree",
    description: "Amrita Global Enterprises is a premier ethnic...",
    image: "/images/img_banarasi_silk_saree.avif"
  },
  {
    id: 11,
    title: "Kanchipuram Silk Sarees",
    description: "Amrita Global Enterprises is a known name in ...",
    image: "/images/img_kanchipuram_silk.avif"
  },
  {
    id: 12,
    title: "Lehenga Style Sarees",
    description: "Amrita Global Enterprises is a premier ethnic...",
    image: "/images/img_lehenga_style_sarees.avif"
  },
  {
    id: 13,
    title: "Half and Half Sarees",
    description: "Amrita Global Enterprises has the proud momen...",
    image: "/images/img_half_and_half_sarees.avif"
  },
  {
    id: 14,
    title: "Printed Silk Sarees",
    description: "Amrita Global Enterprises is the finest desti...",
    image: "/images/img_printed_silk_sarees.avif"
  },
  {
    id: 15,
    title: "Net Sarees",
    description: "Amrita Global Enterprises is a widely known n...",
    image: "/images/img_net_sarees_manufacturers.avif"
  }
];

function ClientSelectedProduct({ slug = '', productSlug = '' }) {
  const [selectedProduct, setSelectedProduct] = React.useState({ name: 'Fabric', description: 'Premium Fabric in Ahedabad' });
  const [products, setProducts] = React.useState([]);
  const [locationName, setLocationName] = React.useState('Surat');
  const [productName, setProductName] = React.useState('Fabric');
  const router = useRouter();
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // To use a custom API base URL, create a .env file in the project root with:
  // NEXT_PUBLIC_API_BASE_URL=http://age-backend-landing.45.93.137.179.sslip.io

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  const [variant, setVariant] = useState("A");

  // Function to track A/B test interactions
  const trackABInteraction = (action, element) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_interaction', {
        'variant': variant,
        'test_name': 'content_variation',
        'action': action,
        'element': element
      });
    }
  };

  // Function to track section views
  const trackSectionView = (sectionName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'section_view', {
        'variant': variant,
        'test_name': 'content_variation',
        'section': sectionName
      });
    }
  };

  // Assign variant on every page load (and update localStorage)
  React.useEffect(() => {
    const selectedVariant = Math.random() < 0.5 ? "A" : "B";
    setVariant(selectedVariant);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ab-variant', selectedVariant);
      if (window.gtag) {
        window.gtag('event', 'ab_test_assigned', {
          'variant': selectedVariant,
          'test_name': 'content_variation'
        });
      }
    }
    // Set up intersection observer for section tracking
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName) {
              trackSectionView(sectionName);
            }
          }
        });
      }, { threshold: 0.3 });
      // Observe sections
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => observer.observe(section));
      return () => observer.disconnect();
    }
  }, []);

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = Array.isArray(data)
          ? data.map(item => ({
            _id: item._id || item.id,
            name: item.name || item.title,
            ...item
          }))
          : [];
        setProducts(mapped);
        // Set product name based on productSlug
        if (productSlug) {
          const foundProduct = mapped.find(p => p.slug === productSlug);
          if (foundProduct && foundProduct.name) {
            setProductName(foundProduct.name);
          } else {
            setProductName('Fabric');
          }
        } else {
          setProductName('Fabric');
        }
      })
      .catch(() => setProducts([]));
  }, [productSlug]);

  React.useEffect(() => {
    let usedSlug = slug;
    if (!usedSlug && typeof window !== 'undefined') {
      const path = window.location.pathname;
      usedSlug = path.split('/')[1] || '';
    }
    if (!usedSlug) return;
    fetch(`${API_BASE_URL}/api/locations`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const found = data.find(loc => loc.slug === usedSlug);
          if (found && found.name) {
            setLocationName(found.name);
          }
        }
      })
      .catch(() => {});
  }, [slug]);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onProductSelect={setSelectedProduct} products={products} />
      {!isContactOpen && <StickyIcons onBusinessClick={() => {
        trackABInteraction('sticky_icon_click', 'contact_icon');
        setIsContactOpen(true);
      }} />}
      <MultiStepContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <MultiStepContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Main Content with top padding to account for fixed header */}
      <main className="pt-[64px] sm:pt-[72px] lg:pt-[80px]">

        {/* Hero Section */}
        <section className="relative w-full h-[220px] md:h-[350px] lg:h-[400px] overflow-hidden">
          <Image
            src="/images/hero123.avif"
            alt="Saree Manufacturers Hero Background"
            width={1335}
            height={417}
            priority
            className="object-cover"
            sizes="(max-width: 1335px) 100vw, 1335px"
          />
          <div className="absolute inset-0 bg-[#0a0a0bcc]"></div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1250px] mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-playfair text-white mb-2 leading-tight drop-shadow-lg">
                  {selectedProduct.name}
                </h1>
                <div className="text-base sm:text-lg md:text-xl font-inter text-white mb-4">
                  {selectedProduct.description}
                </div>
                <nav className="flex items-center gap-2 sm:gap-3" aria-label="Breadcrumb">
                  <Link
                    href="/"
                    className="text-sm sm:text-base font-semibold font-inter text-white hover:text-gray-200 transition-colors"
                  >
                    Home
                  </Link>
                  <Image
                    src="/images/img_arrow_right.svg"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                    priority
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="text-sm sm:text-base font-semibold font-inter text-white">
                    {selectedProduct.name}
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary py-12"
          aria-labelledby="premium-products-heading"
          data-section="premium-products"
        >
          <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4">
            {/* Text Section */}
            <div>
              <h2
                id="premium-products-heading"
                className="text-xl sm :text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6 text-center md:text-start leading-snug"
              >
                {variant === "A" 
                  ? `Get Premium ${productName} Directly from ${locationName}`
                  : `Premium ${productName} Manufacturers in ${locationName} - Direct Source`
                }
              </h2>
              <hr className="w-16 border-t-2 border-primary mx-auto md:mx-0 mb-4" />

              <p className="mb-4 text-sm sm:text-base md:text-lg font-normal font-inter text-secondary leading-relaxed text-start">
                {variant === "A" 
                  ? `Discover high-quality georgette fabric straight from trusted manufacturers in ${locationName}, crafted with precision to meet international standards. Our premium textiles are known for their softness, durability, and luxurious drape — perfect for everything from designer wear to export-grade garments.`
                  : `Experience premium georgette fabric sourced directly from ${locationName}'s finest manufacturers. Our textiles meet international quality standards with exceptional softness, durability, and elegant drape — ideal for designer collections and export-quality garments.`
                }
              </p>

              <p className="text-secondary font-inter text-sm sm:text-base md:text-lg font-normal leading-relaxed text-start">
                {variant === "A" 
                  ? `Whether you&apos;re sourcing for retail, wholesale, or custom production, we provide versatile solutions tailored to your needs. Backed by years of expertise and cutting-edge techniques, our georgette fabrics bring elegance and comfort together in every weave.`
                  : `We offer comprehensive solutions for retail, wholesale, and custom production needs. With decades of expertise and modern manufacturing techniques, our georgette fabrics combine timeless elegance with contemporary comfort in every piece.`
                }
              </p>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-white rounded-xl shadow-lg p-1 w-full max-w-md flex flex-col justify-between h-full">
                <figure className="w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={variant === "A" ? "/images/img_lehenga_style_sarees.avif" : "/images/img_banarasi_silk_saree.avif"}
                    alt={variant === "A" ? "Premium Surat Georgette Fabric with fine weave and elegant drape" : "Banarasi Silk Saree - Premium Quality"}
                    width={360}
                    height={480}
                    className="object-contain object-center rounded-lg"
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                  />
                  <figcaption className="sr-only">
                    {variant === "A" ? "Premium Surat Georgette Fabric" : "Banarasi Silk Saree"}
                  </figcaption>
                </figure>
                <div
                  className="mt-2 px-6 py-2 border-2 border-[#0a6563] text-[#0a6563] rounded-md bg-white hover:bg-[#0a6563] hover:text-white transition text-center cursor-pointer font-semibold w-full max-w-xs mx-auto"
                  aria-label="Request a quote"
                  onClick={() => {
                    trackABInteraction('cta_click', 'hero_quote_button');
                    setModalOpen(true);
                  }}
                >
                  {variant === "A" ? "Get Quote" : "Request Pricing"}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50">
          <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Get Premium Products Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                {variant === "A" 
                  ? `Get Premium Products Directly from Saree Manufacturers in ${locationName}`
                  : `Premium Saree Manufacturers in ${locationName} - Direct Source`
                }
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
                {/* <p>

                  Our processes ensure that every saree meets the client's expectations. Our skilled artists use advanced techniques to create sarees that stand out in the market. Whether it's a casual outing or a festive celebration, our sarees ensure that every
                </p> */}
                 <p>
      {variant === "A" ? (
        <>
          Our processes ensure that every saree meets the client's expectations.
          Our skilled artists use advanced techniques to create sarees that stand out in the market.
          Whether it's a casual outing or a festive celebration, our sarees ensure that every
        </>
      ) : (
        <>
          Our manufacturing processes guarantee that every saree exceeds client expectations.
          Our expert artisans employ cutting-edge techniques to create distinctive sarees that dominate the market.
          From casual wear to festive celebrations, our sarees ensure that every
        </>
      )}
    </p>
                <p>
                  <span>woman has a perfect wardrobe. As one of the leading </span>
                  <span className="font-bold">{`Saree Manufacturers in ${locationName}`}</span>
                  <span>, we take pride in maintaining quality and innovation in our production process. We look at giving our customers products that offer traditional aesthetics</span>
                </p>
                <p>
                  blended with modern trends, which makes us one of the preferred choices in the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section - Card View, Compact, No Extra Space */}
        <section id="product" className="bg-primary py-4" data-section="products">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-primary mb-2">
                {variant === "A" ? "Our Products" : "Premium Collection"}
              </h2>
              <p className="text-secondary text-base pop">
                {variant === "A" 
                  ? "Premium georgette fabrics you'll love."
                  : "Exquisite fabrics crafted for discerning customers."
                }
              </p>
            </div>
            <SwiperBundle productCategories={productCategories} />
          </div>
        </section>

        {/* Featured Products Section */}

        {/* <section className="py-4">
          <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-[#0a0a0b] mb-4 sm:mb-6">
                Featured Products
              </h2>
              <div className="w-12 sm:w-16 md:w-20 h-[1px] bg-[#7c7c7c] mx-auto mb-4 sm:mb-6"></div>
              <div className="max-w-4xl mx-auto space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base md:text-lg font-medium font-inter text-[#222] leading-relaxed">
                  Showcasing our finest pieces, each product is a testament to exceptional craftsmanship and timeless elegance. Meticulously
                </p>
                <p className="text-sm sm:text-base md:text-lg font-medium font-inter text-[#222] leading-relaxed">
                  designed to enhance any wardrobe, these creations exude sophistication and charm.
                </p>
              </div>
            </div>

         
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {productCategories.map((product, index) => (
                <article
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
       
                  <div className="relative w-full aspect-[3/4] overflow-hidden flex justify-center items-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="group-hover:scale-110 transition-transform duration-300 object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      loading="lazy"
                    />
                  </div>

              
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold font-roboto text-[#0a0a0b] mb-2 sm:mb-3 line-clamp-2 hover:text-[#0a6563] transition-colors cursor-pointer">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base font-normal font-lato text-[#636363] leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* Content Sections */}
        <section className="py-4 bg-gray-50">
          <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Saree in Surat Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                {variant === "A" 
                  ? `Saree in ${locationName}`
                  : `Premium Sarees in ${locationName}`
                }
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
                <p>
                  {variant === "A" ? (
                    <>
                      <span>Amrita Global Enterprises is a banner of exquisite sarees truly portraying the richness of India's cultural heritage. Elegance and tradition have culminated in our collection of </span>
                      <span className="font-bold">{`Saree in ${locationName}`}</span>
                      <span>, thus with years of traditional techniques</span>
                    </>
                  ) : (
                    <>
                      <span>Amrita Global Enterprises represents the pinnacle of saree craftsmanship, showcasing India's rich cultural heritage. Our collection of </span>
                      <span className="font-bold">{`Premium Sarees in ${locationName}`}</span>
                      <span> combines decades of traditional expertise</span>
                    </>
                  )}
                </p>
                <p>
                  {variant === "A" ? (
                    <>
                      combined with a harmony of modern designs producing pieces aesthetically beautiful and durable. To accommodate a wide range of preferences and events, sarees are available in a wide variety of fabrics, colors, and designs. Each piece is
                    </>
                  ) : (
                    <>
                      with contemporary design innovation, creating pieces that are both beautiful and enduring. Our diverse collection caters to various preferences and occasions, offering sarees in multiple fabrics, colors, and designs. Every piece is
                    </>
                  )}
                </p>
                <p>
                  {variant === "A" ? (
                    <>
                      crafted with utmost care so that it speaks of the skill of craftsmanship as well as tradition.
                    </>
                  ) : (
                    <>
                      meticulously crafted to showcase exceptional artistry while honoring traditional values.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Get Premium Products Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                {variant === "A" 
                  ? `Get Premium Products Directly from Saree Manufacturers in ${locationName}`
                  : `Premium Saree Manufacturers in ${locationName} - Direct Source`
                }
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
                <p>
                  {variant === "A" 
                    ? "Our processes ensure that every saree meets the client's expectations. Our skilled artists use advanced techniques to create sarees that stand out in the market. Whether it's a casual outing or a festive celebration, our sarees ensure that every"
                    : "Our manufacturing processes guarantee that every saree exceeds client expectations. Our expert artisans employ cutting-edge techniques to create distinctive sarees that dominate the market. From casual wear to festive celebrations, our sarees ensure that every"
                  }
                </p>
                <p>
                  <span>woman has a perfect wardrobe. As one of the leading </span>
                  <span className="font-bold">{`Saree Manufacturers in ${locationName}`}</span>
                  <span>, we take pride in maintaining quality and innovation in our production process. We look at giving our customers products that offer traditional aesthetics</span>
                </p>
                <p>
                  blended with modern trends, which makes us one of the preferred choices in the industry.
                </p>
              </div>
            </div>

            {/* Party Wear Saree Suppliers Section */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                {variant === "A" 
                  ? "Looking for Party Wear Saree Suppliers in Gujarat"
                  : "Premium Party Wear Saree Suppliers in Gujarat"
                }
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
                <p>
                  {variant === "A" ? (
                    <>
                      <span>Our collection offers sarees with perfection for any celebration or event. We have set ourselves as one of the most reliable </span>
                      <span className="font-bold">Party Wear Saree Suppliers in Gujarat</span>
                      <span>, in the vast fashion market of Gujarat. All of them are so carefully designed that</span>
                    </>
                  ) : (
                    <>
                      <span>Our exclusive collection delivers perfection for every celebration and special occasion. We have established ourselves as the most trusted </span>
                      <span className="font-bold">Premium Party Wear Saree Suppliers in Gujarat</span>
                      <span>, dominating the fashion landscape of Gujarat. Each piece is meticulously crafted so that</span>
                    </>
                  )}
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                {variant === "A" 
                  ? "Most Trusted Party Wear Saree Exporters in Gujarat"
                  : "Leading Party Wear Saree Exporters in Gujarat"
                }
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
                <p>
                  {variant === "A" ? (
                    <>
                      We cater to global audiences and make sure that our exquisite sarees reach fashion enthusiasts all over the world. A streamlined export operation of international standards gives our clients products that are pleasingly beautiful as well as up
                    </>
                  ) : (
                    <>
                      We serve international markets, ensuring our premium sarees reach fashion connoisseurs worldwide. Our streamlined export operations meet international standards, delivering products that are both stunning and up
                    </>
                  )}
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

        {/* FAQ Section */}
        <section
          id="faq"
          class="section bg-primary py-4"
          data-section="faq"
        >
          <div class="max-w-8xl mx-auto px-4">
            <h2 class="text-xl font-[400] san text-center mb-4 text-primary">
              {variant === "A" ? "Frequently Asked Questions" : "Common Questions"}
            </h2>

            <div class="space-y-2">
              {/* FAQ 1 */}
              <details class="bg-white rounded-lg shadow-md p-4 mb-2">
                <summary class="text-gray-800 font-[400] san md:text-base cursor-pointer">
                  What is georgette fabric?
                </summary>
                <p class="mt-2 text-gray-600 pop text-[14px]">
                  {variant === "A" 
                    ? "Georgette is a lightweight, sheer fabric with a slightly crinkled texture."
                    : "Georgette is a lightweight, semi-transparent fabric featuring a distinctive crinkled surface texture."
                  }
                </p>
              </details>

              {/* FAQ 2 */}
              <details class="bg-white rounded-lg shadow-md p-4 mb-2">
                <summary class="text-gray-800 font-[400] san md:text-base cursor-pointer">
                  Do you offer bulk discounts?
                </summary>
                <p class="mt-2 text-gray-600 pop text-[14px]">
                  {variant === "A" 
                    ? "Yes, we offer special pricing for bulk and wholesale orders."
                    : "Absolutely! We provide competitive pricing for bulk and wholesale purchases."
                  }
                </p>
              </details>

              {/* FAQ 3 */}
              <details class="bg-white san rounded-lg shadow-md p-4 mb-2">
                <summary class="text-gray-800 font-[400] md:text-base cursor-pointer">
                  How long does shipping take?
                </summary>
                <p class="mt-2 text-gray-600 pop text-[14px]">
                  {variant === "A" 
                    ? "Usually 3–7 business days depending on location."
                    : "Typically 3–7 business days, varying by destination."
                  }
                </p>
              </details>

              {/* FAQ 4 */}
              <details class="bg-white san rounded-lg shadow-md p-4 mb-2">
                <summary class="text-gray-800 font-[400] san md:text-base cursor-pointer">
                  Can I request fabric samples?
                </summary>
                <p class="mt-2 pop text-gray-600 text-[14px]">
                  {variant === "A" 
                    ? "Absolutely! Use our contact form to request free samples."
                    : "Of course! Contact us through our form to get complimentary samples."
                  }
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ClientSelectedProduct;
