import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBagIcon,
  ArrowRightIcon
} from "@heroicons/react/solid";

const Brand = () => {
  const brands = [
    { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", products: 47, color: "from-orange-500 to-red-600" },
    { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", products: 37, color: "from-blue-500 to-indigo-600" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", products: 20, color: "from-gray-500 to-gray-700" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", products: 15, color: "from-blue-600 to-cyan-600" },
    { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Puma_AG.svg", products: 15, color: "from-pink-500 to-purple-600" },
  ];

  // Animated Particles
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="mt-5 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50">
      {/* ✨ Animated Background */}
      <Particles />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* 🎨 Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <ShoppingBagIcon className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
          >
            Our Top Brands
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover the world's leading brands we partner with to bring you the best quality and style 🏷️
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Brands <ArrowRightIcon className="w-5 h-5 inline ml-2" />
          </motion.button>
        </motion.div>

        {/* 🏪 Brands Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-2xl overflow-hidden h-full text-center">
                {/* Brand Logo */}
                <motion.div
                  className="relative mb-4 h-20 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-16 h-16 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>

                {/* Brand Name */}
                <h2 className="text-lg font-bold text-gray-900 mb-2">{brand.name}</h2>
                
                {/* Products Count */}
                <p className="text-sm text-gray-600 mb-4">{brand.products} products</p>

                {/* Action Indicator */}
                <motion.div
                  className="flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 20 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm text-gray-500">Explore</span>
                  <ArrowRightIcon className="w-4 h-4 text-pink-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 📈 Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: "5+", label: "Premium Brands" },
            { number: "169+", label: "Total Products" },
            { number: "100%", label: "Authentic" },
            { number: "Free", label: "Shipping" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brand;