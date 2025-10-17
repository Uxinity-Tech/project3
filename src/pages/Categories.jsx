import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingBagIcon,
  ArrowRightIcon,
  StarIcon,
  HeartIcon
} from "@heroicons/react/solid";

const Categories = () => {
  // Expanded Category data with more categories
  const categories = [
    { 
      id: 1, 
      name: "Sneakers", 
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", 
      count: 45,
      description: "Step into style with our premium sneaker collection featuring Nike, Adidas, and more.",
      color: "from-pink-500 to-purple-600",
      featuredProduct: {
        name: "Air Max 270",
        price: "$149.99",
        rating: 4.8
      }
    },
    { 
      id: 2, 
      name: "Clothing", 
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500", 
      count: 89,
      description: "Elevate your wardrobe with fashion-forward apparel from casual tees to luxury hoodies.",
      color: "from-blue-500 to-indigo-600",
      featuredProduct: {
        name: "Essential Hoodie",
        price: "$59.99",
        rating: 4.5
      }
    },
    { 
      id: 3, 
      name: "Accessories", 
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", 
      count: 23,
      description: "Complete your look with luxurious accessories like belts, bags, and sunglasses.",
      color: "from-green-500 to-emerald-600",
      featuredProduct: {
        name: "Gucci Belt",
        price: "$450.00",
        rating: 4.7
      }
    },
    { 
      id: 4, 
      name: "Electronics", 
      image: "https://images.unsplash.com/photo-1498049794561-7789180a6d7e?w=500", 
      count: 12,
      description: "Discover cutting-edge gadgets and tech essentials from Apple and Samsung.",
      color: "from-orange-500 to-red-600",
      featuredProduct: {
        name: "iPhone 14 Pro",
        price: "$999.99",
        rating: 4.9
      }
    },
    { 
      id: 5, 
      name: "Handbags", 
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", 
      count: 18,
      description: "Timeless handbags and purses for every occasion from classic to trendy designs.",
      color: "from-rose-500 to-pink-600",
      featuredProduct: {
        name: "Designer Tote",
        price: "$299.99",
        rating: 4.6
      }
    },
    { 
      id: 6, 
      name: "Watches", 
      image: "https://images.unsplash.com/photo-1524592094714-0f25c5025c32?w=500", 
      count: 15,
      description: "Elegant timepieces from luxury brands like Rolex and smartwatches for modern lifestyles.",
      color: "from-yellow-500 to-amber-600",
      featuredProduct: {
        name: "Rolex Submariner",
        price: "$8,500.00",
        rating: 4.9
      }
    },
    { 
      id: 7, 
      name: "Jewelry", 
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500", 
      count: 32,
      description: "Sparkling jewelry collections including necklaces, earrings, and bracelets.",
      color: "from-indigo-500 to-violet-600",
      featuredProduct: {
        name: "Chanel Earrings",
        price: "$1,250.00",
        rating: 4.8
      }
    },
    { 
      id: 8, 
      name: "Footwear", 
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500", 
      count: 28,
      description: "Beyond sneakers: boots, sandals, and formal shoes for all seasons.",
      color: "from-teal-500 to-cyan-600",
      featuredProduct: {
        name: "Leather Boots",
        price: "$179.99",
        rating: 4.4
      }
    }
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
    <div className="mt-5 min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* ✨ Animated Background */}
      <Particles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
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
            Shop by Categories
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Discover a world of fashion and tech with our curated collections. From stylish sneakers to elegant jewelry, find everything you need to elevate your lifestyle.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All <ArrowRightIcon className="w-5 h-5 inline ml-2" />
          </motion.button>
        </motion.div>

        {/* 🏷️ Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Link to={`/category/${category.id}`}>
                <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-2xl overflow-hidden h-full">
                  {/* Category Image */}
                  <div className="relative overflow-hidden rounded-xl mb-4 h-48">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {/* Category Color Overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-${category.color} to-transparent`} />
                  </div>

                  {/* Category Details */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-gray-900">{category.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
                    <p className="text-pink-500 font-semibold">{category.count} items</p>
                  </div>

                  {/* Featured Product Teaser */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Featured:</span>
                      <span className="font-medium">{category.featuredProduct.name}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-pink-500 font-semibold text-xs">{category.featuredProduct.price}</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className={`w-3 h-3 ${i < Math.floor(category.featuredProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Indicator */}
                  <motion.div
                    className="flex items-center space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: 20 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm text-gray-500">Explore Collection</span>
                    <ArrowRightIcon className="w-4 h-4 text-pink-500" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 Featured Products Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Trending Across Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our top picks from various categories that are flying off the shelves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Air Max 270 React",
                price: "$149.99",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
                category: "Sneakers"
              },
              {
                name: "Designer Tote Bag",
                price: "$299.99",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
                category: "Handbags"
              },
              {
                name: "Rolex Submariner",
                price: "$8,500.00",
                image: "https://images.unsplash.com/photo-1524592094714-0f25c5025c32?w=300",
                category: "Watches"
              },
              {
                name: "iPhone 14 Pro",
                price: "$999.99",
                image: "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=300",
                category: "Electronics"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${index + 1}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg overflow-hidden">
                    <div className="relative h-48 mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <button className="absolute top-2 right-2 p-1 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <HeartIcon className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="text-pink-500 font-semibold">{product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 💬 Testimonials Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied shoppers who've discovered their perfect items across our diverse categories.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                text: "Found the perfect sneakers for my runs! The variety is amazing.",
                rating: 5
              },
              {
                name: "Mike R.",
                text: "Luxury watches at unbeatable prices. Delivery was super fast!",
                rating: 5
              },
              {
                name: "Emily T.",
                text: "Love the clothing selection – trendy and affordable!",
                rating: 4.8
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 📈 Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: "169+", label: "Total Products" },
            { number: "8", label: "Categories" },
            { number: "24/7", label: "Support" },
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

export default Categories;