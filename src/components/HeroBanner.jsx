import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import fpage from "../assets/images/fpage.jpg";

const HeroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const start = 0;
      const increment = end / (duration * 1000 / 16); // Assuming 60fps
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          return next >= end ? end : Math.floor(next);
        });
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <span className="font-bold text-white">{count.toLocaleString()}</span>;
  };

  return (
    <section className="relative h-screen min-h-[600px] sm:h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src={fpage} 
          alt="Luxury Products"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Overlay - Adjust opacity for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent sm:from-black/50 sm:via-black/30" />
      </motion.div>

      {/* Floating Elegance Elements - Smaller on mobile */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center text-white w-full max-w-6xl mx-auto px-4 py-8 sm:py-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Premium Badge - Smaller on mobile */}
        <motion.div 
          className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-medium uppercase tracking-wide"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-white to-gray-200 rounded-full mr-2"></span>
          Exclusive Collection
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-4 sm:mb-6"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Elevate Your Style
          <br className="hidden sm:block" />
          <span className="block sm:inline font-semibold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            With Timeless Elegance
          </span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover our exclusive collection of premium products crafted for the discerning individual. 
          Quality, sophistication, and unparalleled service await.
        </motion.p>

        {/* CTA Buttons - Full width on mobile */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/products"
            className="inline-block w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 uppercase tracking-wide text-center"
          >
            Explore Collection
          </Link>
          <Link
            to="/about"
            className="inline-block w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wide text-center"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Trust Indicators - Smaller gap and text on mobile */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { icon: "🔒", text: "Secure Checkout", delay: 0.9 },
            { icon: "🚚", text: "Free Shipping Over $100", delay: 1.0 },
            { icon: "↩️", text: "30-Day Returns", delay: 1.1 },
            { icon: "⭐", text: "Premium Quality", delay: 1.2 }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="flex items-center space-x-1.5 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-base sm:text-lg">{item.icon}</span>
              <span className="truncate">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section - Stack on mobile, smaller space */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 sm:space-x-12 mb-6 sm:mb-8 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {[
            { label: "Products", end: 500 },
            { label: "|", end: null },
            { label: "Happy Customers", end: 10000 },
            { label: "|", end: null },
            { label: "Years Experience", end: 10 }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="flex items-center space-x-1 sm:space-x-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            >
              {stat.end ? (
                <>
                  <AnimatedCounter end={stat.end} />
                  <span className="text-gray-300">+</span>
                  <span className="text-gray-400">{stat.label}</span>
                </>
              ) : (
                <span className="text-gray-400">{stat.label}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator - Adjust position for mobile */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">Scroll to Explore</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default HeroBanner;