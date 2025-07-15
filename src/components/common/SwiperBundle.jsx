import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const SwiperBundle = ({ productCategories }) => (
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
          <h3 className="text-lg mb-1 text-primary text-center font-semibold">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm text-center mb-2">
            {product.description.length > 80 
              ? product.description.substring(0, 80) + "..."
              : product.description
            }
          </p>
        </article>
      </SwiperSlide>
    ))}
    <div className="swiper-button-prev !flex !items-center !justify-center !text-primary !border !border-primary hover:!bg-primary hover:!text-white transition absolute z-10 left-2 top-1/2 -translate-y-1/2 cursor-pointer">
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
    </div>
    <div className="swiper-button-next !flex !items-center !justify-center !text-primary !border !border-primary hover:!bg-primary hover:!text-white transition absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer">
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
    </div>
  </Swiper>
);

export default SwiperBundle; 