import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  shape = "rounded",
  loading = false,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  className = "",
  ...props
}) => {
  // Base classes
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variants
  const variants = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl focus:ring-pink-500",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 focus:ring-gray-500",
    outline: "border-2 border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white focus:ring-pink-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:ring-gray-300",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
    success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  // Shapes
  const shapes = {
    rounded: "rounded-lg",
    pill: "rounded-full",
    square: "rounded-md",
  };

  // Loading spinner
  const Spinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  const classes = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${shapes[shape]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={classes}
      {...props}
    >
      {loading && <Spinner />}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      <span className={loading ? "opacity-0" : ""}>{children}</span>
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;