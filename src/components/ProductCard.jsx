import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HeartIcon, 
  ShoppingCartIcon,
  EyeIcon,
  StarIcon
} from "@heroicons/react/solid";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  // Sample data (replace with your product data)
  const ratings = Array.from({ length: 5 }, (_, i) => (
    <StarIcon 
      key={i} 
      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
    />
  ));

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </Link>

        {/* Sale Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}

        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}

        {/* Quick Actions - Hover Overlay */}
        {hovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <HeartIcon className="w-6 h-6 text-gray-900" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setQuickViewOpen(true); }}
              className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <EyeIcon className="w-6 h-6 text-gray-900" />
            </button>
            <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all">
              <ShoppingCartIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Name */}
        <Link to={`/product/${product.id}`} className="block">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-pink-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Ratings */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1 mr-2">{ratings}</div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
          <span className={`text-xl font-bold ${
            product.discount ? 'text-pink-600' : 'text-gray-900'
          }`}>
            ${product.price}
          </span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
          Add to Cart
        </button>
      </div>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <QuickViewModal 
          product={product} 
          onClose={() => setQuickViewOpen(false)} 
        />
      )}
    </div>
  );
};

// Quick View Modal Component
const QuickViewModal = ({ product, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <img src={product.image} alt={product.name} className="rounded-xl w-full h-64 object-cover" />
          <div>
            <div className="flex items-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-gray-600">({product.reviews})</span>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-600">{product.description}</p>
              <div className="flex items-center space-x-4">
                {product.originalPrice && <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>}
                <span className="text-2xl font-bold text-pink-600">${product.price}</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;