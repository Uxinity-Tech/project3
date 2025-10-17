import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../Context/CartContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

// 🔥 EXACT 169 PRODUCTS WITH PERFECT COUNTS!
// Sneakers (45) + Clothing (89) + Accessories (23) + Electronics (12)
const mockProducts = [
  // 🔥 SNEAKERS = EXACTLY 45
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Nike Air Max ${['90', '97', '270', '1', 'Plus'][i % 5]} Premium`,
    category: "sneakers",
    brand: "nike",
    price: [89.99, 129.99, 149.99, 179.99, 199.99][i % 5],
    image: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300`,
    rating: [4.8, 4.5, 4.9, 4.7, 4.6][i % 5],
    discount: [20, null, 30, null, null][i % 5],
    description: "Premium running shoes with Air cushioning technology.",
    inStock: true
  })),
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 16,
    name: `Adidas Ultraboost ${['20', '21', '22', 'Light', 'X'][i % 5]}`,
    category: "sneakers",
    brand: "adidas",
    price: [99.99, 139.99, 159.99, 189.99, 219.99][i % 5],
    image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300`,
    rating: [4.7, 4.9, 4.6, 4.8, 4.5][i % 5],
    discount: i % 4 === 0 ? 15 : null,
    description: "Lightweight running shoes with Boost technology.",
    inStock: true
  })),
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 31,
    name: `Puma ${['RS-X', 'Future', 'Clyde'][i % 3]} Rider ${i + 1}`,
    category: "sneakers",
    brand: "puma",
    price: [79.99, 99.99, 119.99][i % 3],
    image: `https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=300`,
    rating: [4.6, 4.8, 4.7][i % 3],
    discount: i % 3 === 0 ? 25 : null,
    description: "Retro-style sneakers with modern comfort.",
    inStock: true
  })),

  // 👕 CLOTHING = EXACTLY 89
  ...Array.from({ length: 25 }, (_, i) => ({
    id: i + 46,
    name: `Nike ${['Dri-FIT', 'Pro', 'Sportswear'][i % 3]} T-Shirt ${i + 1}`,
    category: "clothing",
    brand: "nike",
    price: [24.99, 29.99, 34.99, 39.99][i % 4],
    image: `https://images.unsplash.com/photo-1445205170230-053b83016050?w=300`,
    rating: [4.6, 4.8, 4.7, 4.9][i % 4],
    discount: i % 3 === 0 ? 10 : null,
    description: "Breathable cotton t-shirt for everyday wear.",
    inStock: true
  })),
  ...Array.from({ length: 22 }, (_, i) => ({
    id: i + 71,
    name: `Adidas ${['Essentials', 'Originals', 'Performance'][i % 3]} Hoodie`,
    category: "clothing",
    brand: "adidas",
    price: [49.99, 59.99, 69.99, 79.99][i % 4],
    image: `https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300`,
    rating: [4.8, 4.7, 4.9, 4.6][i % 4],
    discount: i % 5 === 0 ? 25 : null,
    description: "Cozy fleece hoodie with iconic 3 stripes.",
    inStock: true
  })),
  ...Array.from({ length: 22 }, (_, i) => ({
    id: i + 93,
    name: `Gucci ${['Cotton', 'Silk', 'Cashmere'][i % 3]} Polo Shirt`,
    category: "clothing",
    brand: "gucci",
    price: [89.99, 129.99, 179.99, 249.99][i % 4],
    image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300`,
    rating: [4.9, 4.8, 4.7, 4.9][i % 4],
    discount: null,
    description: "Luxury polo shirt with signature GG logo.",
    inStock: i % 2 === 0
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 115,
    name: `Zara ${['Slim Fit', 'Regular', 'Oversize'][i % 3]} Jeans ${i + 1}`,
    category: "clothing",
    brand: "zara",
    price: [39.99, 49.99, 59.99][i % 3],
    image: `https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300`,
    rating: [4.7, 4.8, 4.6][i % 3],
    discount: i % 4 === 0 ? 20 : null,
    description: "Comfortable denim jeans for all occasions.",
    inStock: true
  })),

  // 💍 ACCESSORIES = EXACTLY 23
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 135,
    name: `Gucci ${['Leather', 'Canvas'][i % 2]} Crossbody Bag`,
    category: "accessories",
    brand: "gucci",
    price: [299.99, 399.99, 499.99][i % 3],
    image: `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300`,
    rating: [4.9, 4.8, 4.7][i % 3],
    discount: i % 3 === 0 ? 15 : null,
    description: "Designer crossbody bag with gold hardware.",
    inStock: true
  })),
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 143,
    name: `Apple AirPods ${['2nd Gen', '3rd Gen', 'Pro'][i % 3]}`,
    category: "accessories",
    brand: "apple",
    price: [129.99, 179.99, 249.99][i % 3],
    image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300`,
    rating: [4.8, 4.9, 4.7][i % 3],
    discount: null,
    description: "Wireless earbuds with noise cancellation.",
    inStock: true
  })),
  ...Array.from({ length: 7 }, (_, i) => ({
    id: i + 151,
    name: `Nike ${['Adjustable', 'Snapback'][i % 2]} Cap`,
    category: "accessories",
    brand: "nike",
    price: [24.99, 29.99, 34.99][i % 3],
    image: `https://images.unsplash.com/photo-1572121544584-f7a98b4b8921?w=300`,
    rating: [4.7, 4.6, 4.8][i % 3],
    discount: i % 2 === 0 ? 20 : null,
    description: "Breathable cap with Nike swoosh.",
    inStock: true
  })),

  // 💻 ELECTRONICS = EXACTLY 12
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 158,
    name: `Apple ${['iPhone 14', 'iPhone 15', 'iPhone 15 Pro'][i % 3]} ${i % 2 ? '128GB' : '256GB'}`,
    category: "electronics",
    brand: "apple",
    price: [799.99, 899.99, 1099.99][i % 3],
    image: `https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300`,
    rating: [4.9, 4.8, 4.9][i % 3],
    discount: i === 2 ? 100 : null,
    description: "Latest iPhone with A16 Bionic chip.",
    inStock: true
  })),
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 164,
    name: `Apple Watch Series ${['8', '9', 'Ultra'][i % 3]}`,
    category: "electronics",
    brand: "apple",
    price: [399.99, 449.99, 799.99][i % 3],
    image: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300`,
    rating: [4.8, 4.9, 4.7][i % 3],
    discount: i % 3 === 0 ? 50 : null,
    description: "Smartwatch with health monitoring features.",
    inStock: true
  })),
];

const Products = ({ products = mockProducts, loading = false }) => {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 500]);

  if (loading) return <Loader />;

  // ✅ EXACT COUNTS FROM DATA
  const categories = [
    { id: "all", name: "All Categories", count: 169 },
    { id: "sneakers", name: "Sneakers", count: 45 },
    { id: "clothing", name: "Clothing", count: 89 },
    { id: "accessories", name: "Accessories", count: 23 },
    { id: "electronics", name: "Electronics", count: 12 },
  ];

  const brands = [
    { id: "all", name: "All Brands", count: 169 },
    { id: "nike", name: "Nike", count: 47 },
    { id: "adidas", name: "Adidas", count: 37 },
    { id: "gucci", name: "Gucci", count: 30 },
    { id: "apple", name: "Apple", count: 20 },
    { id: "puma", name: "Puma", count: 15 },
    { id: "zara", name: "Zara", count: 20 },
  ];

  // ✅ SAFE FILTER: Defensive copy
  let filteredProducts = [...products].filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || p.category === category) &&
    (brand === "all" || p.brand === brand) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  // ✅ SAFE SORT: Defensive copy
  switch (sort) {
    case "price-low":
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      break;
    case "name":
      filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "featured":
    default:
      filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
  }

  // Pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="mt-5 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            All Products
          </h1>
          <p className="text-xl text-gray-600">
            Discover {filteredProducts.length} amazing products
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Search */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">Search Products</h3>
              <input
                type="text"
                placeholder="Search 169 products..."
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* Categories - EXACT COUNTS */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg mb-2 transition-all ${
                    category === cat.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>

            {/* Brands - EXACT COUNTS */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">Brands</h3>
              {brands.map(b => (
                <button
                  key={b.id}
                  onClick={() => setBrand(b.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg mb-2 transition-all ${
                    brand === b.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {b.name} ({b.count})
                </button>
              ))}
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">Price Range</h3>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={e => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* View Toggle */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">View</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    view === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-lg transition-all ${
                    view === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            {/* Sort Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Sort by:</span>
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
              <div className="text-gray-700">
                Showing {paginatedProducts.length} of {filteredProducts.length} products
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`grid gap-6 ${
              view === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}>
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {view === "list" ? (
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex space-x-4">
                      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                        <p className="text-pink-500 font-bold text-xl mb-2">${product.price}</p>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ) : (
                    <ProductCard
                      product={product}
                      onAddToCart={() => addToCart(product)}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 mt-8 flex items-center justify-center space-x-2"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                  ← Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      currentPage === i + 1
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                  Next →
                </button>
              </motion.div>
            )}

            {/* No Results */}
            {!paginatedProducts.length && filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters</p>
                <button 
                  onClick={() => { setSearch(""); setCategory("all"); setBrand("all"); setSort("featured"); }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;