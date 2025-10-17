import React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  variant = "default",
  size = "md",
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  showClose = true,
  loading = false,
  className = "",
  overlayClassName = "",
  ...props
}) => {
  if (!isOpen) return null;

  // Animation classes
  const animation = "animate-modalSlideIn";

  // Sizes
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "w-full max-w-none",
  };

  // Variants
  const variants = {
    default: "bg-white shadow-2xl",
    success: "bg-green-50 border-2 border-green-200",
    error: "bg-red-50 border-2 border-red-200",
    warning: "bg-yellow-50 border-2 border-yellow-200",
    info: "bg-blue-50 border-2 border-blue-200",
    glass: "bg-white/80 backdrop-blur-xl border border-white/20",
    dark: "bg-gray-800 text-white border border-gray-700",
  };

  // Header component
  const Header = () => (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {description && (
          <p className="text-gray-600 mt-1">{description}</p>
        )}
      </div>
      {showClose && (
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );

  // Footer component for confirm/cancel
  const Footer = () => (
    <div className="flex gap-3 pt-6 border-t border-gray-200">
      <button
        onClick={onClose}
        disabled={loading}
        className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        {cancelText}
      </button>
      <button
        onClick={onConfirm}
        disabled={loading}
        className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50"
      >
        {loading ? (
          <svg className="animate-spin mx-auto h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : (
          confirmText
        )}
      </button>
    </div>
  );

  const classes = `
    ${sizes[size]} ${variants[variant]} ${animation} ${className}
    mx-4 rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto
  `;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${overlayClassName}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div className={classes} {...props}>
        {title && <Header />}
        <div className="space-y-4">{children}</div>
        {(onConfirm || cancelText) && <Footer />}
      </div>
    </div>
  );
};

export default Modal;