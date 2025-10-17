import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "../Context/CartContext";
import { AuthProvider } from "../Context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import Toast from "../components/Toast";

const Layout = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { 
    items: cartItems,        // ✅ FIXED: items, not cartItems
    removeFromCart, 
    updateQuantity, 
    totalPrice,              // ✅ FIXED: totalPrice, not getTotalPrice()
    toast 
  } = useContext(CartContext);

  // ✅ SAFETY: Prevent crash
  const safeCartItems = cartItems || [];
  const cartCount = safeCartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header toggleCart={() => setCartOpen(!cartOpen)} cartCount={cartCount} />

        {/* Main Content */}
        <main className="flex-1 pt-24 relative">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />

        {/* 🛒 Sticky Cart Sidebar - ENHANCED! */}
        <AnimatePresence>
          {cartOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b bg-gradient-to-r from-pink-50 to-purple-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5a1 1 0 001 1h12a1 1 0 001-1L17 13m0 0l-1.5-7.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
                </div>
                <motion.button 
                  onClick={() => setCartOpen(false)} 
                  whileHover={{ scale: 1.1 }}
                  className="text-pink-500 hover:text-pink-600 font-bold text-lg"
                >
                  ×
                </motion.button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {safeCartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5a1 1 0 001 1h12a1 1 0 001-1L17 13m0 0l-1.5-7.5" />
                    </svg>
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  safeCartItems.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between mb-6 pb-4 border-b last:border-b-0"
                    >
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shadow-lg" />
                      
                      <div className="flex-1 mx-4">
                        <p className="font-semibold text-gray-900 line-clamp-2">{item.name}</p>
                        <p className="text-pink-500 font-bold">
                          ${(item.price * (item.discount ? (1 - item.discount / 100) : 1)).toFixed(2)}
                        </p>
                        
                        <div className="flex items-center space-x-3 mt-2 bg-gray-50 px-3 py-2 rounded-lg">
                          <motion.button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            −
                          </motion.button>
                          
                          <span className="font-semibold min-w-[24px] text-center">{item.quantity}</span>
                          
                          <motion.button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-pink-600"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold text-lg mb-2">
                          ${(item.price * item.quantity * (item.discount ? (1 - item.discount / 100) : 1)).toFixed(2)}
                        </p>
                        <motion.button 
                          onClick={() => removeFromCart(item.id)}
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-500 hover:bg-red-100"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Total & Checkout */}
              <div className="p-6 border-t bg-gray-50">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total ({cartCount} items):</span>
                    <span className="text-pink-500">${totalPrice}</span>
                  </div>
                </div>
                
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <button 
                    onClick={() => { setCartOpen(false); window.location.href = '/checkout'; }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all"
                  >
                    Proceed to Checkout → ${totalPrice}
                  </button>
                  
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Backdrop */}
          {cartOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
          )}
        </AnimatePresence>

        {/* Toast Notification */}
        <Toast message={toast?.message} show={toast?.show} />
      </div>
    </AuthProvider>
  );
};

export default Layout;