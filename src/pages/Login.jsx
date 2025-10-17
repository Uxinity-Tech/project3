import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MailIcon, 
  LockClosedIcon, 
  ArrowRightIcon,
  ShieldCheckIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  ExclamationCircleIcon
} from "@heroicons/react/solid";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  // Email validation regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    // Clear error on form change
    if (error) setError("");
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsSubmitting(true);
    setError("");
    
    try {
      // Simulate API call with better error simulation
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (form.email === "demo@example.com" && form.password === "password123") {
            resolve();
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 2000);
      });
      onLogin(form);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
    // Simulate forgot password logic
    setTimeout(() => {
      alert("Password reset link sent to your email!"); // Replace with actual API
      setShowForgotPassword(false);
    }, 500);
  };

  // Enhanced Animated Particles with more variety
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 4 + 1;
        const isBubble = Math.random() > 0.7;
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isBubble ? 'bg-gradient-to-b from-pink-400/30 to-purple-400/30' : 'bg-white/20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, (Math.random() - 0.5) * 100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: isBubble ? [1, 1.5, 1] : [1, 1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );

  // Floating Elements for Extra Flair
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[
        { icon: MailIcon, color: "from-blue-400 to-cyan-400", top: "10%", left: "10%" },
        { icon: LockClosedIcon, color: "from-purple-400 to-pink-400", top: "70%", right: "10%" },
        { icon: ShieldCheckIcon, color: "from-green-400 to-emerald-400", top: "40%", left: "80%" },
      ].map((el, i) => (
        <motion.div
          key={i}
          className={`absolute text-white/20`}
          style={{ top: el.top, left: el.left }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <el.icon className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="pt-12 sm:pt-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* ✨ Enhanced Animated Background */}
      <Particles />
      <FloatingElements />
      
      <motion.div 
        className="relative z-10 w-full max-w-md mx-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 🎨 Enhanced Glass Morphism Card with Subtle Glow */}
        <motion.div
          className="backdrop-blur-xl bg-white/90 border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          whileHover={{ y: -5, scale: 1.005 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Subtle Glow Border */}
          <motion.div 
            className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 -z-10"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* 🔐 Enhanced Header with Gradient Text Animation */}
          <motion.div 
            className="text-center mb-6 sm:mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
            >
              <LockClosedIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-md" />
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Welcome Back
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Sign in to continue your journey
            </motion.p>
          </motion.div>

          {/* 📝 Enhanced Form with Better Validation Styling */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10">
            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <MailIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`
                  w-full pl-10 pr-4 py-3 sm:py-4 bg-white/60 border-2 rounded-xl sm:rounded-2xl 
                  backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                  text-sm sm:text-base placeholder-gray-500
                  ${error ? 'border-red-500' : form.email ? 'border-pink-500' : 'border-gray-200'}
                `}
                placeholder="Enter your email"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className={`
                  w-full pl-10 pr-12 py-3 sm:py-4 bg-white/60 border-2 rounded-xl sm:rounded-2xl 
                  backdrop-blur-sm focus:border-pink-500 focus:outline-none transition-all duration-300
                  text-sm sm:text-base placeholder-gray-500
                  ${error ? 'border-red-500' : form.password ? 'border-pink-500' : 'border-gray-200'}
                `}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-pink-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-right"
            >
              <button
                onClick={handleForgotPassword}
                disabled={isSubmitting || showForgotPassword}
                className="text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors disabled:opacity-50"
              >
                {showForgotPassword ? "Sending..." : "Forgot Password?"}
              </button>
            </motion.div>

            {/* ❌ Enhanced Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center text-red-700 text-sm"
                >
                  <ExclamationCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🚀 Enhanced Submit Button with Progress */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm sm:text-base">Signing In...</span>
                </div>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <span className="text-sm sm:text-base">Sign In</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              )}
              {/* ✨ Enhanced Shine Effect with Gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.button>
          </form>

          {/* ✅ Enhanced Trust Indicators with Tooltips */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/50 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              { icon: ShieldCheckIcon, color: "text-green-500", text: "End-to-End Encrypted", tooltip: "Your data is protected" },
              { icon: MailIcon, color: "text-blue-500", text: "Passwordless Option", tooltip: "Use magic links for login" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className={`flex items-center space-x-2 text-xs sm:text-sm ${item.color} cursor-help relative group`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>{item.text}</span>
                {/* Simple Tooltip */}
                <motion.div 
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible whitespace-nowrap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 🔗 Enhanced Footer Links with Social Options */}
        <motion.div 
          className="text-center mt-6 space-y-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.p className="text-gray-600 text-sm sm:text-base">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate("/register")}
              className="text-pink-600 hover:text-pink-700 font-semibold transition-colors underline decoration-2 underline-offset-2"
            >
              Create one now
            </button>
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs text-gray-500"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <button 
              type="button" 
              className="flex items-center space-x-2 hover:text-pink-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              onClick={() => navigate("/guest")}
            >
              <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Continue as Guest</span>
            </button>
            {/* Social Login Teaser */}
            <div className="flex items-center space-x-1 text-gray-400 text-xs">
              <span>Or sign in with</span>
              <div className="flex space-x-2 ml-1">
                <motion.div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <span className="text-white text-xs">G</span>
                </motion.div>
                <motion.div className="w-6 h-6 bg-black rounded-full flex items-center justify-center" whileHover={{ scale: 1.1 }}>
                  <span className="text-white text-xs">X</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;