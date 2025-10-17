import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ 
  id, 
  message, 
  type = "success", 
  duration = 4000, 
  onDismiss, 
  position = "bottom-right" 
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, visible]);

  const variants = {
    success: {
      bg: "bg-green-500",
      icon: "✅",
      border: "border-green-400"
    },
    error: {
      bg: "bg-red-500",
      icon: "❌",
      border: "border-red-400"
    },
    warning: {
      bg: "bg-yellow-500",
      icon: "⚠️",
      border: "border-yellow-400"
    },
    info: {
      bg: "bg-blue-500",
      icon: "ℹ️",
      border: "border-blue-400"
    },
    default: {
      bg: "bg-gray-500",
      icon: "",
      border: "border-gray-400"
    }
  };

  const typeStyles = variants[type] || variants.default;

  const positions = {
    "top-left": "top-5 left-5",
    "top-right": "top-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "bottom-right": "bottom-5 right-5"
  };

  const animation = {
    initial: { opacity: 0, x: position.includes("right") ? 50 : -50, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: position.includes("right") ? 50 : -50, scale: 0.95 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const handleDismiss = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      setTimeout(() => onDismiss(id), 300);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      key={id}
      {...animation}
      className={`
        fixed max-w-sm w-full ${positions[position]} z-50
        ${typeStyles.bg} text-white rounded-xl shadow-xl border-l-4 ${typeStyles.border}
        flex items-center space-x-4 p-4 backdrop-blur-sm
      `}
    >
      {/* Icon */}
      <span className="text-lg font-bold">{typeStyles.icon}</span>
      
      {/* Message */}
      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{message}</p>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          transition={{ duration: duration / 1000, ease: "linear" }}
          className="h-full bg-white/50"
        />
      </div>
      
      {/* Close Button */}
      <button
        onClick={handleDismiss}
        className="ml-2 p-1 text-white/70 hover:text-white hover:bg-white/20 rounded-full transition-colors"
        aria-label="Dismiss toast"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

// Toast Container & Manager
const ToastContainer = ({ toasts = [], position = "bottom-right" }) => (
  <AnimatePresence>
    {toasts.map((toast) => (
      <Toast
        key={toast.id}
        {...toast}
        position={position}
        onDismiss={(id) => {
          // Remove toast from array
          const filtered = toasts.filter(t => t.id !== id);
          toast.onDismiss?.(filtered);
        }}
      />
    ))}
  </AnimatePresence>
);

// Hook to use toasts
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, options = {}) => {
    const id = Date.now() + Math.random();
    const toast = { id, message, ...options };
    
    setToasts(prev => [...prev, toast]);
    
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toastVariants = {
    success: (msg) => addToast(msg, { type: "success", duration: 3000 }),
    error: (msg) => addToast(msg, { type: "error", duration: 5000 }),
    warning: (msg) => addToast(msg, { type: "warning", duration: 4000 }),
    info: (msg) => addToast(msg, { type: "info", duration: 4000 }),
  };

  return {
    toasts,
    addToast,
    removeToast,
    ...toastVariants
  };
};

export { ToastContainer, Toast };

export default ToastContainer;