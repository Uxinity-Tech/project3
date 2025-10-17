import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const Slider = ({ slides = [], autoplay = true, showThumbs = true }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!slides.length) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
        <span className="text-gray-500">No slides available</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, Pagination]}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={autoplay ? {
            delay: 4000,
            disableOnInteraction: false,
          } : false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => (
              `<span class="${className} bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-2 h-2"></span>`
            ),
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          speed={600}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ "--swiper-pagination-bullet-color": "#ec4899" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id || index}>
              <div className="relative h-96 md:h-[500px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                {slide.title && (
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="inline-block bg-black/50 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {slide.category || "Featured"}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
                      {slide.title}
                    </h2>
                    <p className="text-xl mb-6 opacity-90 animate-fadeInUp animation-delay-200">
                      {slide.description}
                    </p>
                    {slide.cta && (
                      <a
                        href={slide.cta.link}
                        className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-xl font-semibold text-white hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl"
                      >
                        {slide.cta.text}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-pink-500 transition-all duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-pink-500 transition-all duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 animate-slide w-full" />
        </div>
      </div>

      {/* Thumbnail Slider */}
      {showThumbs && slides.length > 1 && (
        <div className="mt-6">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Navigation]}
            slidesPerView={4}
            spaceBetween={10}
            navigation={{
              nextEl: '.thumbs-next',
              prevEl: '.thumbs-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="thumbs-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id || index} className="!w-20">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-20 object-cover rounded-lg cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Thumbs Navigation */}
          <button className="thumbs-prev absolute -top-10 right-12 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-pink-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="thumbs-next absolute -top-10 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-pink-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;