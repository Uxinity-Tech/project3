import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MailIcon, 
  LockClosedIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  UserIcon
} from "@heroicons/react/solid";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      onLogin(form);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animated Particles
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden">
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
    <div className="pt-12 sm:pt-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* ✨ Animated Background */}
      <Particles />
      
      <motion.div 
        className="relative z-10 w-full max-w-md mx-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🎨 Glass Morphism Card */}
        <motion.div
          className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* 🔐 Header */}
          <motion.div 
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <LockClosedIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
            >
              Welcome Back
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sign in to your account
            </motion.p>
          </motion.div>

          {/* 📝 Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`
                  w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/50 border-2 border-gray-200 rounded-xl sm:rounded-2xl 
                  backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                  peer placeholder-transparent text-sm sm:text-base
                  ${form.email ? 'border-pink-500' : 'border-gray-200'}
                `}
                placeholder=" "
              />
              <label 
                className={`
                  absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 text-xs sm:text-base
                  peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                  ${form.email ? '-top-6 sm:-top-6 text-xs text-pink-600' : 'top-3 sm:top-4 text-sm sm:text-base'}
                `}
              >
                <MailIcon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Email Address
              </label>
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className={`
                  w-full px-3 sm:px-4 py-3 sm:py-4 bg-white/50 border-2 border-gray-200 rounded-xl sm:rounded-2xl 
                  backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                  peer placeholder-transparent text-sm sm:text-base
                  ${form.password ? 'border-pink-500' : 'border-gray-200'}
                `}
                placeholder=" "
              />
              <label 
                className={`
                  absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 transition-all duration-300 text-xs sm:text-base
                  peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                  ${form.password ? '-top-6 sm:-top-6 text-xs text-pink-600' : 'top-3 sm:top-4 text-sm sm:text-base'}
                `}
              >
                <LockClosedIcon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showPassword ? "M15 12a3 3 0 11-6 0 3 3 0 016 0z" : "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"} />
                </svg>
              </button>
            </motion.div>

            {/* ❌ Error Message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-xs sm:text-sm flex items-center"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
                  </svg>
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* 🚀 Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm sm:text-base">Signing In...</span>
                </div>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-sm sm:text-base">Sign In</span>
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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

          {/* ✅ Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />, text: "Secure" },
              { icon: <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />, text: "Magic Link" }
            ].map((item, i) => (
              <motion.div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600" whileHover={{ scale: 1.05 }}>
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 🔗 Footer Links */}
        <motion.div 
          className="text-center mt-6 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.p className="text-gray-600 text-sm sm:text-base">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate("/register")}
              className="text-pink-600 hover:text-pink-700 font-semibold transition-colors"
            >
              Sign Up
            </button>
          </motion.p>
          <motion.div 
            className="flex items-center justify-center space-x-4 text-xs text-gray-500"
            whileHover={{ scale: 1.02 }}
          >
            <button type="button" className="flex items-center space-x-2 hover:text-pink-600 transition-colors">
              <UserIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Continue as Guest</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;