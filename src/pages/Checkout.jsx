import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserIcon, 
  MailIcon, 
  MapIcon, 
  PhoneIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ArrowRightIcon
} from "@heroicons/react/solid";
import { CartContext } from "../Context/CartContext";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearCart();
      navigate("/orders");
    } catch (err) {
      setError("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!cartItems?.length) {
    return (
      <div className="pt-24 text-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <ShoppingCartIcon className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No items in cart</h2>
          <p className="text-gray-600 mb-6">Your cart is empty. Add some items to checkout!</p>
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      </div>
    );
  }

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
    <div className="pt-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* ✨ Animated Background */}
      <Particles />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
          >
            Checkout
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Complete your purchase securely
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* 📋 Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl p-6 shadow-2xl space-y-4"
          >
            <h2 className="text-xl font-bold flex items-center space-x-2">
              <ShoppingCartIcon className="w-5 h-5 text-pink-500" />
              <span>Order Summary</span>
            </h2>
            
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div key={item.id} className="flex items-center space-x-3 p-2 rounded-xl bg-white/50">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                  <span className="text-sm font-semibold">x{item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping:</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-pink-500">${totalPrice().toFixed(2)}</span>
              </div>
            </div>
          </motion.div>

          {/* 📝 Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl p-6 shadow-2xl space-y-6">
              {/* Shipping Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold flex items-center space-x-2">
                  <MapIcon className="w-5 h-5 text-pink-500" />
                  <span>Shipping Information</span>
                </h3>
                
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-2xl 
                      backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                      peer placeholder-transparent
                      ${form.name ? 'border-pink-500' : 'border-gray-200'}
                    `}
                    placeholder=" "
                  />
                  <label 
                    className={`
                      absolute left-4 top-4 text-gray-500 transition-all duration-300
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                      ${form.name ? '-top-6 text-xs text-pink-600' : 'top-4 text-base'}
                    `}
                  >
                    <UserIcon className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-2xl 
                      backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                      peer placeholder-transparent
                      ${form.email ? 'border-pink-500' : 'border-gray-200'}
                    `}
                    placeholder=" "
                  />
                  <label 
                    className={`
                      absolute left-4 top-4 text-gray-500 transition-all duration-300
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                      ${form.email ? '-top-6 text-xs text-pink-600' : 'top-4 text-base'}
                    `}
                  >
                    <MailIcon className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                </div>

                {/* Address Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-2xl 
                      backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                      peer placeholder-transparent
                      ${form.address ? 'border-pink-500' : 'border-gray-200'}
                    `}
                    placeholder=" "
                  />
                  <label 
                    className={`
                      absolute left-4 top-4 text-gray-500 transition-all duration-300
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                      ${form.address ? '-top-6 text-xs text-pink-600' : 'top-4 text-base'}
                    `}
                  >
                    <MapIcon className="w-4 h-4 inline mr-2" />
                    Address
                  </label>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className={`
                      w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-2xl 
                      backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                      peer placeholder-transparent
                      ${form.phone ? 'border-pink-500' : 'border-gray-200'}
                    `}
                    placeholder=" "
                  />
                  <label 
                    className={`
                      absolute left-4 top-4 text-gray-500 transition-all duration-300
                      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                      ${form.phone ? '-top-6 text-xs text-pink-600' : 'top-4 text-base'}
                    `}
                  >
                    <PhoneIcon className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                </div>
              </div>

              {/* ❌ Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
                    </svg>
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* 🚀 Place Order Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <CreditCardIcon className="w-5 h-5" />
                    <span>Place Order</span>
                    <span className="text-sm">(${totalPrice().toFixed(2)})</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
                {/* ✨ Shine Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;