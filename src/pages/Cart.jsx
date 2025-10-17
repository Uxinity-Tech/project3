import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Toast from "../components/Toast";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart, toast } = useContext(CartContext);

  if (!cartItems?.length) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <Toast toast={toast} />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto w-48 h-48 mb-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center"
          >
            <svg className="w-24 h-24 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5a1 1 0 001 1h12a1 1 0 001-1L17 13m0 0l-1.5-7.5" />
            </svg>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Your Cart is Empty
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Looks like you haven't added anything yet!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Link 
              to="/products" 
              className="block w-full max-w-md mx-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all"
            >
              Start Shopping →
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <Toast toast={toast} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5a1 1 0 001 1h12a1 1 0 001-1L17 13m0 0l-1.5-7.5" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
              <p className="text-gray-600">{cartItems.length} items</p>
            </div>
          </div>
          <Link to="/products" className="text-pink-500 hover:text-pink-600 font-semibold">
            Continue Shopping →
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6 flex items-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-xl shadow-lg"
                    />
                    {item.discount && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        -{item.discount}%
                      </div>
                    )}
                  </motion.div>

                  <div className="flex-1 ml-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-pink-500 font-bold text-xl mb-2">${item.price}</p>
                    {item.discount && (
                      <p className="text-gray-500 line-through text-sm mb-3">${(item.price * 1.2).toFixed(2)}</p>
                    )}
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 disabled:opacity-50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      
                      <span className="w-12 text-center text-lg font-semibold bg-gray-100 py-2 rounded-lg">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-right ml-6">
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 bg-red-50 hover:bg-red-100 rounded-full flex items-center justify-center text-red-500 hover:text-red-600 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Items ({cartItems.length}):</span>
                  <span>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping:</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax:</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mb-6"></div>

              <div className="mb-6">
                <div className="flex justify-between text-2xl font-bold text-gray-900">
                  <span>Total:</span>
                  <span>${totalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  to="/checkout"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all block text-center"
                >
                  Proceed to Checkout → (${totalPrice().toFixed(2)})
                </Link>
                <Link 
                  to="/products"
                  className="w-full border-2 border-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all block text-center"
                >
                  Continue Shopping
                </Link>
                {cartItems.length > 1 && (
                  <button 
                    onClick={clearCart}
                    className="w-full bg-red-100 text-red-600 py-3 px-6 rounded-xl font-semibold hover:bg-red-200 transition-all"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;