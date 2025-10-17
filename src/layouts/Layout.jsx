import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { CartContext } from "../Context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Toast from "../components/Toast";
// import Wishlist from "../components/Wishlist";

const Layout = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, totalPrice, toast } = useContext(CartContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleCart={() => setCartOpen(!cartOpen)} cartCount={cartItems.length} />

      <main className="flex-1 pt-24 relative">
        <Outlet />
      </main>
      {/* <Wishlist /> */}
      <Footer />

      {/* Sticky Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold">Cart</h2>
              <button onClick={() => setCartOpen(false)} className="text-pink-500 font-bold">Close</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <p className="text-center mt-4">Cart is empty.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between mb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 mx-2">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-pink-500">${item.price}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold">X</button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t">
              <p className="font-bold mb-2">Total: ${totalPrice()}</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 rounded-lg font-semibold">Checkout</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <Toast message={toast.message} show={toast.show} />
    </div>
  );
};

export default Layout;
