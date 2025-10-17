import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-xl mb-2">MyShop</h2>
          <p className="text-gray-400 mb-4">Your favorite e-commerce shop with premium products. Discover high-quality essentials from top brands with free shipping on orders over $50.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">📘 Facebook</a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">🐦 Twitter</a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">📷 Instagram</a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">💼 LinkedIn</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link className="hover:text-pink-500 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/products">Products</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/deals">Deals</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/brands">Brands</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/about">About</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Categories</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link className="hover:text-pink-500 transition" to="/sneakers">Sneakers</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/electronics">Electronics</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/clothing">Clothing</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/accessories">Accessories</Link></li>
            <li><Link className="hover:text-pink-500 transition" to="/beauty">Beauty</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">Subscribe for exclusive deals and updates.</p>
          <div className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email"
              className="px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white py-2 rounded font-semibold hover:bg-pink-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <p>Email: support@shop.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Hours: Mon-Sun 9AM-9PM</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p>123, Market Street</p>
            <p>City, State 12345</p>
          </div>
        </div>
        <div className="text-center py-4 border-t border-gray-700">
          &copy; 2025 ShopName. All rights reserved. | <Link className="hover:text-pink-500 transition" to="/privacy">Privacy Policy</Link> | <Link className="hover:text-pink-500 transition" to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;