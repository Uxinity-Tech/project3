import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCartIcon, 
  SearchIcon, 
  UserIcon, 
  HeartIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon
} from "@heroicons/react/outline";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const cartCount = 3;
  const wishlistCount = 1;

  // Animated Particles for subtle background
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-white/30 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Particles />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Shopify</span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/brands", label: "Brands" },
                { to: "/categories", label: "Categories" },
                { to: "/deals", label: "Deals" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.to} 
                    className="text-gray-700 hover:text-pink-500 font-medium text-sm transition-all duration-300 relative group"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Actions */}
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Search */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-gray-500 hover:text-pink-500 transition-all duration-300 relative"
                >
                  <SearchIcon className="w-6 h-6" />
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.input
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      type="text"
                      placeholder="Search products..."
                      className="absolute right-0 top-full mt-2 w-80 p-3 bg-white/95 backdrop-blur-sm border border-gray-300 rounded-xl shadow-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 z-50"
                      autoFocus
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Wishlist */}
              <motion.div
                className="relative p-2 text-gray-500 hover:text-pink-500 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/wishlist">
                  <HeartIcon className="w-6 h-6" />
                  {wishlistCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {wishlistCount}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              {/* Cart */}
              <motion.div
                className="relative p-2 text-gray-500 hover:text-pink-500 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to="/cart">
                  <ShoppingCartIcon className="w-6 h-6" />
                  {cartCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              {/* User Menu */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <UserIcon className="w-6 h-6" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl py-2 border border-white/30 z-50"
                    >
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors flex items-center space-x-2">
                        <UserIcon className="w-4 h-4" /> Profile
                      </Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors flex items-center space-x-2">
                        <ShoppingCartIcon className="w-4 h-4" /> Orders
                      </Link>
                      <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </Link>
                      <hr className="my-1 border-gray-200" />
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50/50 transition-colors flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign Out
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 relative z-10"
              whileTap={{ scale: 0.95 }}
            >
              {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/30 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-pink-500 font-medium text-base transition-all duration-300 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="block text-gray-700 hover:text-pink-500 font-medium text-base transition-all duration-300 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className="block text-gray-700 hover:text-pink-500 font-medium text-base transition-all duration-300 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/deals" 
                className="block text-gray-700 hover:text-pink-500 font-medium text-base transition-all duration-300 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Deals
              </Link>
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link 
                  to="/whishlist" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 py-2 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <HeartIcon className="w-5 h-5" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
                <Link 
                  to="/cart" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 py-2 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span>Cart ({cartCount})</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;