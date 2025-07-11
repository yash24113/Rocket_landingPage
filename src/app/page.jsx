'use client';
import React from 'react';
import Link from 'next/link';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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

function ClientSelectedProduct() {
  const [selectedProduct, setSelectedProduct] = React.useState({ name: 'Fabric', description: 'Premium Fabric in Ahedabad' });
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch('https://langingpage-production-f27f.up.railway.app/api/products')
      .then((res) => res.json())
      .then((data) => {
        // Map to expected structure for Header dropdown
        const mapped = Array.isArray(data)
          ? data.map(item => ({
            _id: item._id || item.id,
            name: item.name || item.title,
            ...item
          }))
          : [];
        setProducts(mapped);
      })
      .catch(() => setProducts([]));
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header onProductSelect={setSelectedProduct} products={products} />

      {/* Main Content with top padding to account for fixed header */}
      <main className="pt-[64px] sm:pt-[72px] lg:pt-[80px]">

        {/* Hero Section */}
        <section className="relative w-full aspect-[4/5] sm:aspect-[1906/488] min-h-[320px] sm:min-h-0">
          <Image
            src="/images/hero123.avif"
            alt="Saree Manufacturers Hero Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a0a0b66]"></div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1250px] mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-playfair text-white mb-2 leading-tight">
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
        >
          <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4">
            {/* Text Section */}
            <div>
              <h2
                id="premium-products-heading"
                className="text-xl font-[400] san text-center md:text-start mb-2 text-primary leading-snug"
              >
                Get Premium Products Directly from Surat
              </h2>
              <hr className="w-16 border-t-2 border-primary mx-auto md:mx-0 mb-4" />

              <p className="mb-4 text-[14px] pop text-secondary leading-relaxed text-start">
                Discover high-quality georgette fabric straight from trusted manufacturers in Surat,
                crafted with precision to meet international standards. Our premium textiles are known
                for their softness, durability, and luxurious drape — perfect for everything from
                designer wear to export-grade garments.
              </p>

              <p className="text-secondary pop text-[14px] leading-relaxed text-start">
                Whether you&apos;re sourcing for retail, wholesale, or custom production, we provide
                versatile solutions tailored to your needs. Backed by years of expertise and
                cutting-edge techniques, our georgette fabrics bring elegance and comfort together in
                every weave.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-white rounded-xl shadow-lg p-1 w-full max-w-md flex flex-col justify-between h-full">
                <figure className="w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/img_lehenga_style_sarees.avif"
                    alt="Premium Surat Georgette Fabric with fine weave and elegant drape"
                    width={360}
                    height={480}
                    className="object-contain object-center rounded-lg"
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority
                  />
                  <figcaption className="sr-only">Premium Surat Georgette Fabric</figcaption>
                </figure>
                <div
                  className="mt-2 px-6 py-2 border-2 border-[#0a6563] text-[#0a6563] rounded-md bg-white hover:bg-[#0a6563] hover:text-white transition text-center cursor-pointer font-semibold w-full max-w-xs mx-auto"
                  aria-label="Request a quote"
                >
                  Get Quote
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Get Premium Products Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                Get Premium Products Directly from Saree Manufacturers in Surat
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
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
          </div>
        </section>

        {/* Our Products Section - Card View, Compact, No Extra Space */}
        <section id="product" className="bg-primary py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-primary mb-2">Our Products</h2>
              <p className="text-secondary text-base pop">Premium georgette fabrics you'll love.</p>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-4"
            >
              {productCategories.map((product) => (
                <SwiperSlide key={product.id}>
                  <article className="bg-white rounded-lg shadow-md flex flex-col items-center p-4">
                    <figure className="w-full bg-gray-100 rounded mb-2 overflow-hidden flex items-center justify-center" style={{height:'300px'}}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="object-contain rounded w-full h-full"
                        sizes="(max-width: 1024px) 100vw, 400px"
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="text-lg mb-1 text-primary text-center font-semibold">{product.title}</h3>
                    <p className="text-gray-600 text-sm text-center mb-2">{product.description}</p>
                  </article>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev !w-7 !h-7 !bg-white !rounded-full !shadow !flex !items-center !justify-center !text-primary !border !border-primary hover:!bg-primary hover:!text-white transition absolute z-10 left-2 top-1/2 -translate-y-1/2 cursor-pointer">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </div>
              <div className="swiper-button-next !w-7 !h-7 !bg-white !rounded-full !shadow !flex !items-center !justify-center !text-primary !border !border-primary hover:!bg-primary hover:!text-white transition absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </Swiper>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {productCategories.map((product, index) => (
                <article
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden flex justify-center items-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={180}
                      height={270}
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="group-hover:scale-110 transition-transform duration-300 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Content */}
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
        </section>

        {/* Content Sections */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Saree in Surat Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                Saree in Surat
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
                <p>
                  <span>Amrita Global Enterprises is a banner of exquisite sarees truly portraying the richness of India's cultural heritage. Elegance and tradition have culminated in our collection of </span>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                Get Premium Products Directly from Saree Manufacturers in Surat
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                Looking for Party Wear Saree Suppliers in Gujarat
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-[#0a0a0b] mb-4 sm:mb-6">
                Most Trusted Party Wear Saree Exporters in Gujarat
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg font-normal font-inter text-[#0a0a0b] leading-relaxed">
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

        {/* FAQ Section */}
        <section
          id="faq"
          class="section bg-primary py-12"
        >
          <div class="max-w-8xl mx-auto px-4">
            <h2 class="text-xl font-[400] san text-center mb-10 text-primary">
              Frequently Asked Questions
            </h2>

            <div class="space-y-3">
              {/* FAQ 1 */}
              <details class="bg-white rounded-lg shadow-md p-4">
                <summary class="text-gray-800 font-[400] san md:text-base cursor-pointer">
                  What is georgette fabric?
                </summary>
                <p class="mt-2 text-gray-600 pop text-[14px]">
                  Georgette is a lightweight, sheer fabric with a slightly crinkled texture.
                </p>
              </details>

              {/* FAQ 2 */}
              <details class="bg-white rounded-lg shadow-md p-4">
                <summary class="text-gray-800 font-[400] san md:text-base cursor-pointer">
                  Do you offer bulk discounts?
                </summary>
                <p class="mt-2 text-gray-600 pop text-[14px]">
                  Yes, we offer special pricing for bulk and wholesale orders.
                </p>
              </details>

              {/* FAQ 3 */}
              <details class="bg-white san rounded-lg shadow-md p-4">
                <summary class="text-gray-800 font-[400] md:text-base cursor-pointer">
                  How long does shipping take?
                </summary>
                <p class="mt-2 text-gray-600 pop text-[14px]">
                  Usually 3–7 business days depending on location.
                </p>
              </details>

              {/* FAQ 4 */}
              <details class="bg-white san rounded-lg shadow-md p-4">
                <summary class="text-gray-800 font-[400] san md:text-base cursor-pointer">
                  Can I request fabric samples?
                </summary>
                <p class="mt-2 pop text-gray-600 text-[14px]">
                  Absolutely! Use our contact form to request free samples.
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

