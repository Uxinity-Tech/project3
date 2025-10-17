import React, { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  const showToast = useCallback((message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "info" }), 3000);
  }, []);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      showToast("Failed to load cart. Starting fresh.", "error");
      setCartItems([]);
    }
  }, [showToast]);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    if (!product?.id || !product?.price || !product?.name) {
      showToast("Invalid product data.", "error");
      return;
    }

    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Optional: Check stock if available
        // if (exists.quantity + 1 > (product.stock || Infinity)) {
        //   showToast("Out of stock!", "error");
        //   return prev;
        // }
        showToast(`${product.name} quantity updated!`, "success");
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`${product.name} added to cart!`, "success");
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }, [showToast]);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => {
      const removed = prev.find((item) => item.id === productId);
      if (removed) {
        showToast(`${removed.name} removed from cart!`, "info");
      }
      return prev.filter((item) => item.id !== productId);
    });
  }, [showToast]);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    showToast("Cart cleared!", "info");
  }, [showToast]);

  const totalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
  }, [cartItems]);

  const totalItems = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  }, [cartItems]);

  const isInCart = useCallback((productId) => {
    return cartItems.some((item) => item.id === productId);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems,
        isInCart,
        toast,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};