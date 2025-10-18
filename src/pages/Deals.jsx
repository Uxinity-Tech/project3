import React,{useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FireIcon, 
  TagIcon,
  ShoppingCartIcon,
  ArrowRightIcon,
  StarIcon,
  CalendarIcon
} from "@heroicons/react/solid";

// Mock deals data
const deals = [
  {
    id: 1,
    title: "Air Max 270 React",
    originalPrice: 199.99,
    discountPrice: 149.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "Sneakers"
  },
  {
    id: 2,
    title: "Ultraboost 22",
    originalPrice: 220.00,
    discountPrice: 189.99,
    discount: 14,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "Sneakers"
  },
  {
    id: 3,
    title: "iPhone 14 Pro",
    originalPrice: 1099.99,
    discountPrice: 999.99,
    discount: 9,
    image: "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=400",
    category: "Electronics"
  },
  {
    id: 4,
    title: "Gucci Belt",
    originalPrice: 500.00,
    discountPrice: 450.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "Accessories"
  },
  {
    id: 5,
    title: "Hoodie Essential",
    originalPrice: 79.99,
    discountPrice: 59.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    category: "Clothing"
  },
  {
    id: 6,
    title: "AirPods Pro 2",
    originalPrice: 279.99,
    discountPrice: 249.99,
    discount: 11,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Electronics"
  },
  {
    id: 7,
    title: "MacBook Pro M2",
    originalPrice: 1999.99,
    discountPrice: 1799.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "Electronics"
  },
  {
    id: 8,
    title: "Rolex Submariner",
    originalPrice: 9500.00,
    discountPrice: 8500.00,
    discount: 11,
    image: "https://images.unsplash.com/photo-1524592094714-0f0652e6d1f3?w=400",
    category: "Accessories"
  },
  {
    id: 9,
    title: "Levi's 501 Jeans",
    originalPrice: 89.99,
    discountPrice: 69.99,
    discount: 22,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
    category: "Clothing"
  },
  {
    id: 10,
    title: "Sony WH-1000XM5",
    originalPrice: 399.99,
    discountPrice: 349.99,
    discount: 13,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "Electronics"
  },
  {
    id: 11,
    title: "North Face Backpack",
    originalPrice: 129.99,
    discountPrice: 99.99,
    discount: 23,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "Accessories"
  },
  {
    id: 12,
    title: "Chanel No.5 Perfume",
    originalPrice: 145.00,
    discountPrice: 129.00,
    discount: 11,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400",
    category: "Beauty"
  }
];

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Amazing deals! Saved over $200 on my new sneakers. Super fast shipping too!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50",
    date: "Oct 10, 2025"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    text: "The iPhone deal was unbeatable. Quality products at unbeatable prices. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50",
    date: "Oct 15, 2025"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    text: "Love the clothing section. Got a hoodie and jeans for half price. Will shop again!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50",
    date: "Oct 12, 2025"
  }
];

const Deals = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  // Animated Particles
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300/30 rounded-full"
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
    <div className=" min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 mt-5">
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
            className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FireIcon className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4"
          >
            Exclusive Deals
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Grab exciting offers before they're gone! 🔥
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 px-8 rounded-xl font-semibold shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop All Deals <ArrowRightIcon className="w-5 h-5 inline ml-2" />
          </motion.button>
        </motion.div>

        {/* 📦 Deals Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, staggerChildren: 0.1 }}
        >
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-2xl overflow-hidden group"
            >
              {/* Product Image - Link Wrapper */}
              <Link to={`/product/${deal.id}`} className="block">
                <motion.div
                  className="relative overflow-hidden rounded-xl mb-4 h-48"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  <motion.div
                    className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    -{deal.discount}%
                  </motion.div>
                </motion.div>
              </Link>

              {/* Product Details */}
              <div className="space-y-2">
                <Link to={`/product/${deal.id}`} className="block">
                  <h3 className="font-bold text-lg text-gray-900 hover:text-pink-500 transition-colors">{deal.title}</h3>
                </Link>
                <p className="text-gray-600 text-sm">{deal.category}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-pink-500">${deal.discountPrice}</span>
                  <span className="text-gray-400 line-through text-sm">${deal.originalPrice}</span>
                </div>
              </div>

              {/* Action Button - Link */}
              <Link to={`/product/${deal.id}`}>
                <motion.button
                  className="group relative w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <TagIcon className="w-5 h-5" />
                  <span>Grab Deal</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  {/* ✨ Shine Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>
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
            { number: "500+", label: "Active Deals" },
            { number: "24h", label: "Limited Time" },
            { number: "100%", label: "Satisfaction" },
            { number: "Free", label: "Shipping" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 💬 Testimonials Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-700"
            >
              Join thousands of happy shoppers who've scored amazing deals!
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 📧 Newsletter Signup */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Deals!</h3>
          <p className="text-yellow-100 mb-6">Subscribe to get notified about flash sales and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 rounded-xl text-gray-900 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe <ArrowRightIcon className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Deals;