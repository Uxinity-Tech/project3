import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../Context/AuthContext"; // Adjust path as needed

const Header = ({ toggleCart, cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const wishlistCount = 2;

  const handleLogout = () => {
    setIsLoggingOut(true);
    setShowLogoutMessage(true);
    setTimeout(() => {
      logout();
      setProfileOpen(false);
      setMobileMenuOpen(false);
      setIsLoggingOut(false);
      setShowLogoutMessage(false);
      navigate("/");
    }, 1500); // Increased duration for animation + message
  };

  const logoutVariants = {
    initial: { opacity: 1, scale: 1, y: 0 },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const messageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  return (
    <>
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ===== Logo ===== */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MyShop</h1>
                <span className="text-xs text-gray-500 block">Premium Collection</span>
              </div>
            </Link>

            {/* ===== Desktop Nav ===== */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/deals" className="nav-link flex items-center">
                <svg className="w-5 h-5 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7 9a8.819 8.819 0 01.9 4.9 8.211 8.211 0 01-1.4 5.6 8.211 8.211 0 01-5.6 1.4A8.819 8.819 0 013 18s1-1 1-1a8.819 8.819 0 014.9-.9 8.211 8.211 0 015.6 1.4 8.211 8.211 0 011.4 5.6 8.819 8.819 0 004.9.9s1 1 1 1z" />
                </svg>
                Deals
              </Link>
              <Link to="/brands" className="nav-link flex items-center">
                <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Brands
              </Link>
              <Link to="/categories" className="nav-link">Categories</Link>
            </nav>

            {/* ===== Desktop Actions ===== */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative group">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.input
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      type="text"
                      placeholder="Search 10,000+ products..."
                      className="absolute top-full right-0 mt-2 w-80 p-3 pl-10 bg-white border-2 border-pink-200 rounded-xl shadow-lg outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      autoFocus
                      onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Profile / Auth */}
              <div className="relative">
                <AnimatePresence>
                  {!isLoggingOut && isAuthenticated && user ? (
                    <motion.div
                      variants={logoutVariants}
                      initial="initial"
                      exit="exit"
                      key="authenticated"
                    >
                      <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                      >
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                        <span className="hidden sm:block text-sm font-medium">
                          {user.name || user.email || 'User'}
                        </span>
                      </button>

                      {profileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1"
                        >
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Profile
                          </Link>
                          <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Orders
                          </Link>
                          <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Settings
                          </Link>
                          <hr className="my-1 border-gray-100" />
                          <button 
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sign Out
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={logoutVariants}
                      initial="initial"
                      exit="exit"
                      key="unauthenticated"
                    >
                      <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center space-x-2 p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="hidden sm:block text-sm font-medium">Account</span>
                      </button>

                      {profileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-1"
                        >
                          <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Login
                          </Link>
                          <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            Sign Up
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5a1 1 0 001 1h12a1 1 0 001-1L17 13m0 0l-1.5-7.5" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* ===== Mobile Menu Button ===== */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ===== Logout Success Message ===== */}
      <AnimatePresence>
        {showLogoutMessage && (
          <motion.div
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Logged out successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Mobile Menu Overlay ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* ===== Mobile Menu Drawer ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 md:hidden overflow-y-auto"
          >
            <div className="h-full flex flex-col">
              {/* ===== Mobile Menu Header ===== */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-gray-100">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-900">MyShop</h1>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ===== Mobile Nav Links ===== */}
              <nav className="flex-1 p-4 space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <Link
                    to="/"
                    className="block nav-link-mobile flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="block nav-link-mobile flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Products
                  </Link>
                  <Link
                    to="/deals"
                    className="block nav-link-mobile flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7 9a8.819 8.819 0 01.9 4.9 8.211 8.211 0 01-1.4 5.6 8.211 8.211 0 01-5.6 1.4A8.819 8.819 0 013 18s1-1 1-1a8.819 8.819 0 014.9-.9 8.211 8.211 0 015.6 1.4 8.211 8.211 0 011.4 5.6 8.819 8.819 0 004.9.9s1 1 1 1z" />
                    </svg>
                    Deals
                  </Link>
                  <Link
                    to="/brands"
                    className="block nav-link-mobile flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Brands
                  </Link>
                  <Link
                    to="/categories"
                    className="block nav-link-mobile flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Categories
                  </Link>
                </motion.div>
              </nav>

              {/* ===== Mobile Actions ===== */}
              <div className="p-4 border-t border-gray-100 space-y-3 bg-gray-50">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <Link
                    to="/wishlist"
                    className="flex items-center space-x-3 nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="relative p-2 bg-red-50 rounded-xl">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {wishlistCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          {wishlistCount}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-900">Wishlist</span>
                      <p className="text-xs text-gray-500">{wishlistCount} items</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      toggleCart();
                    }}
                    className="flex items-center space-x-3 w-full text-left nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                  >
                    <div className="relative p-2 bg-pink-50 rounded-xl">
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5a1 1 0 001 1h12a1 1 0 001-1L17 13m0 0l-1.5-7.5" />
                      </svg>
                      {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                          {cartCount}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-900">Cart</span>
                      <p className="text-xs text-gray-500">{cartCount} items</p>
                    </div>
                  </button>
                  <AnimatePresence>
                    {!isLoggingOut && isAuthenticated && user ? (
                      <motion.div
                        variants={logoutVariants}
                        initial="initial"
                        exit="exit"
                        key="mobile-authenticated"
                      >
                        <Link
                          to="/profile"
                          className="flex items-center space-x-3 nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-gray-50 rounded-xl">
                            {user.avatar ? (
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">
                              {user.name || user.email || 'Profile'}
                            </span>
                            <p className="text-xs text-gray-500">View account</p>
                          </div>
                        </Link>
                        <Link
                          to="/orders"
                          className="flex items-center space-x-3 nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-gray-50 rounded-xl">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">Orders</span>
                            <p className="text-xs text-gray-500">View your orders</p>
                          </div>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center space-x-3 nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-gray-50 rounded-xl">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">Settings</span>
                            <p className="text-xs text-gray-500">Manage your account</p>
                          </div>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center space-x-3 w-full text-left nav-link-mobile p-3 rounded-xl hover:bg-red-50 transition-all"
                        >
                          <div className="p-2 bg-red-50 rounded-xl">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-red-600">Sign Out</span>
                            <p className="text-xs text-gray-500">Leave your account</p>
                          </div>
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        variants={logoutVariants}
                        initial="initial"
                        exit="exit"
                        key="mobile-unauthenticated"
                      >
                        <Link
                          to="/login"
                          className="flex items-center space-x-3 nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-blue-50 rounded-xl">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">Login</span>
                            <p className="text-xs text-gray-500">Access your account</p>
                          </div>
                        </Link>
                        <Link
                          to="/register"
                          className="flex items-center space-x-3 nav-link-mobile p-3 rounded-xl hover:bg-white transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="p-2 bg-green-50 rounded-xl">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gray-900">Sign Up</span>
                            <p className="text-xs text-gray-500">Create new account</p>
                          </div>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;