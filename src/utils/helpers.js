// Format price to currency
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// Calculate discounted price
export const calculateDiscount = (price, discountPercent) => {
  if (!discountPercent) return price;
  return price - price * (discountPercent / 100);
};

// Get total quantity in cart
export const getCartQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Get total price of cart
export const getCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Filter products by category
export const filterByCategory = (products, category) => {
  if (!category || category === "all") return products;
  return products.filter((product) => product.category === category);
};

// Sort products
export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "price-asc":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...products].sort((a, b) => b.price - a.price);
    case "name-asc":
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    default:
      return products;
  }
};
