import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserIcon, 
  MailIcon, 
  PencilIcon,
  ShieldCheckIcon,
  CameraIcon
} from "@heroicons/react/solid";

const Profile = ({ user }) => {
  const [form, setForm] = useState(user || { name: "", email: "" });
  const [showPassword, setShowPassword] = useState(false);
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
      alert("Profile updated successfully!");
    } catch (err) {
      setError("Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* ✨ Animated Background */}
      <Particles />
      
      <motion.div 
        className="relative z-10 w-full max-w-2xl mx-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🎨 Glass Morphism Card */}
        <motion.div
          className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl p-8 shadow-2xl"
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* 👤 Profile Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <UserIcon className="w-12 h-12 text-white" />
              <motion.button
                className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CameraIcon className="w-4 h-4 text-gray-600" />
              </motion.button>
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
            >
              My Profile
            </motion.h1>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Update your personal information
            </motion.p>
          </motion.div>

          {/* 📝 Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
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
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
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
            </motion.div>

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

            {/* 🚀 Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Updating...</span>
                </div>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <PencilIcon className="w-5 h-5" />
                  <span>Update Profile</span>
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
            className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <ShieldCheckIcon className="w-5 h-5 text-green-500" />, text: "Secure" },
              { icon: <MailIcon className="w-5 h-5 text-blue-500" />, text: "Verified Email" }
            ].map((item, i) => (
              <motion.div key={i} className="flex items-center space-x-2 text-sm text-gray-600" whileHover={{ scale: 1.05 }}>
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;