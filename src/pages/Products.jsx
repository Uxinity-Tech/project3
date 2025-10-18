// // import React, { useState, useContext } from "react";
// // import { Link } from "react-router-dom";
// // import ProductCard from "../components/ProductCard";
// // import { CartContext } from "../Context/CartContext";
// // import Loader from "../components/Loader";
// // import { motion } from "framer-motion";

// // // 🔥 EXACT 169 PRODUCTS WITH PERFECT COUNTS!
// // // Sneakers (45) + Clothing (89) + Accessories (23) + Electronics (12)
// // const mockProducts = [
// //   // 🔥 SNEAKERS = EXACTLY 45
// //   ...Array.from({ length: 15 }, (_, i) => ({
// //     id: i + 1,
// //     name: `Nike Air Max ${['90', '97', '270', '1', 'Plus'][i % 5]} Premium`,
// //     category: "sneakers",
// //     brand: "nike",
// //     price: [89.99, 129.99, 149.99, 179.99, 199.99][i % 5],
// //     image: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300`,
// //     rating: [4.8, 4.5, 4.9, 4.7, 4.6][i % 5],
// //     discount: [20, null, 30, null, null][i % 5],
// //     description: "Premium running shoes with Air cushioning technology.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 15 }, (_, i) => ({
// //     id: i + 16,
// //     name: `Adidas Ultraboost ${['20', '21', '22', 'Light', 'X'][i % 5]}`,
// //     category: "sneakers",
// //     brand: "adidas",
// //     price: [99.99, 139.99, 159.99, 189.99, 219.99][i % 5],
// //     image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300`,
// //     rating: [4.7, 4.9, 4.6, 4.8, 4.5][i % 5],
// //     discount: i % 4 === 0 ? 15 : null,
// //     description: "Lightweight running shoes with Boost technology.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 15 }, (_, i) => ({
// //     id: i + 31,
// //     name: `Puma ${['RS-X', 'Future', 'Clyde'][i % 3]} Rider ${i + 1}`,
// //     category: "sneakers",
// //     brand: "puma",
// //     price: [79.99, 99.99, 119.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=300`,
// //     rating: [4.6, 4.8, 4.7][i % 3],
// //     discount: i % 3 === 0 ? 25 : null,
// //     description: "Retro-style sneakers with modern comfort.",
// //     inStock: true
// //   })),

// //   // 👕 CLOTHING = EXACTLY 89
// //   ...Array.from({ length: 25 }, (_, i) => ({
// //     id: i + 46,
// //     name: `Nike ${['Dri-FIT', 'Pro', 'Sportswear'][i % 3]} T-Shirt ${i + 1}`,
// //     category: "clothing",
// //     brand: "nike",
// //     price: [24.99, 29.99, 34.99, 39.99][i % 4],
// //     image: `https://images.unsplash.com/photo-1445205170230-053b83016050?w=300`,
// //     rating: [4.6, 4.8, 4.7, 4.9][i % 4],
// //     discount: i % 3 === 0 ? 10 : null,
// //     description: "Breathable cotton t-shirt for everyday wear.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 22 }, (_, i) => ({
// //     id: i + 71,
// //     name: `Adidas ${['Essentials', 'Originals', 'Performance'][i % 3]} Hoodie`,
// //     category: "clothing",
// //     brand: "adidas",
// //     price: [49.99, 59.99, 69.99, 79.99][i % 4],
// //     image: `https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300`,
// //     rating: [4.8, 4.7, 4.9, 4.6][i % 4],
// //     discount: i % 5 === 0 ? 25 : null,
// //     description: "Cozy fleece hoodie with iconic 3 stripes.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 22 }, (_, i) => ({
// //     id: i + 93,
// //     name: `Gucci ${['Cotton', 'Silk', 'Cashmere'][i % 3]} Polo Shirt`,
// //     category: "clothing",
// //     brand: "gucci",
// //     price: [89.99, 129.99, 179.99, 249.99][i % 4],
// //     image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300`,
// //     rating: [4.9, 4.8, 4.7, 4.9][i % 4],
// //     discount: null,
// //     description: "Luxury polo shirt with signature GG logo.",
// //     inStock: i % 2 === 0
// //   })),
// //   ...Array.from({ length: 20 }, (_, i) => ({
// //     id: i + 115,
// //     name: `Zara ${['Slim Fit', 'Regular', 'Oversize'][i % 3]} Jeans ${i + 1}`,
// //     category: "clothing",
// //     brand: "zara",
// //     price: [39.99, 49.99, 59.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300`,
// //     rating: [4.7, 4.8, 4.6][i % 3],
// //     discount: i % 4 === 0 ? 20 : null,
// //     description: "Comfortable denim jeans for all occasions.",
// //     inStock: true
// //   })),

// //   // 💍 ACCESSORIES = EXACTLY 23
// //   ...Array.from({ length: 8 }, (_, i) => ({
// //     id: i + 135,
// //     name: `Gucci ${['Leather', 'Canvas'][i % 2]} Crossbody Bag`,
// //     category: "accessories",
// //     brand: "gucci",
// //     price: [299.99, 399.99, 499.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300`,
// //     rating: [4.9, 4.8, 4.7][i % 3],
// //     discount: i % 3 === 0 ? 15 : null,
// //     description: "Designer crossbody bag with gold hardware.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 8 }, (_, i) => ({
// //     id: i + 143,
// //     name: `Apple AirPods ${['2nd Gen', '3rd Gen', 'Pro'][i % 3]}`,
// //     category: "accessories",
// //     brand: "apple",
// //     price: [129.99, 179.99, 249.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300`,
// //     rating: [4.8, 4.9, 4.7][i % 3],
// //     discount: null,
// //     description: "Wireless earbuds with noise cancellation.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 7 }, (_, i) => ({
// //     id: i + 151,
// //     name: `Nike ${['Adjustable', 'Snapback'][i % 2]} Cap`,
// //     category: "accessories",
// //     brand: "nike",
// //     price: [24.99, 29.99, 34.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1572121544584-f7a98b4b8921?w=300`,
// //     rating: [4.7, 4.6, 4.8][i % 3],
// //     discount: i % 2 === 0 ? 20 : null,
// //     description: "Breathable cap with Nike swoosh.",
// //     inStock: true
// //   })),

// //   // 💻 ELECTRONICS = EXACTLY 12
// //   ...Array.from({ length: 6 }, (_, i) => ({
// //     id: i + 158,
// //     name: `Apple ${['iPhone 14', 'iPhone 15', 'iPhone 15 Pro'][i % 3]} ${i % 2 ? '128GB' : '256GB'}`,
// //     category: "electronics",
// //     brand: "apple",
// //     price: [799.99, 899.99, 1099.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300`,
// //     rating: [4.9, 4.8, 4.9][i % 3],
// //     discount: i === 2 ? 100 : null,
// //     description: "Latest iPhone with A16 Bionic chip.",
// //     inStock: true
// //   })),
// //   ...Array.from({ length: 6 }, (_, i) => ({
// //     id: i + 164,
// //     name: `Apple Watch Series ${['8', '9', 'Ultra'][i % 3]}`,
// //     category: "electronics",
// //     brand: "apple",
// //     price: [399.99, 449.99, 799.99][i % 3],
// //     image: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300`,
// //     rating: [4.8, 4.9, 4.7][i % 3],
// //     discount: i % 3 === 0 ? 50 : null,
// //     description: "Smartwatch with health monitoring features.",
// //     inStock: true
// //   })),
// // ];

// // const Products = ({ products = mockProducts, loading = false }) => {
// //   const { addToCart } = useContext(CartContext);
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("all");
// //   const [brand, setBrand] = useState("all");
// //   const [sort, setSort] = useState("featured");
// //   const [view, setView] = useState("grid");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [priceRange, setPriceRange] = useState([0, 500]);

// //   if (loading) return <Loader />;

// //   // ✅ EXACT COUNTS FROM DATA
// //   const categories = [
// //     { id: "all", name: "All Categories", count: 169 },
// //     { id: "sneakers", name: "Sneakers", count: 45 },
// //     { id: "clothing", name: "Clothing", count: 89 },
// //     { id: "accessories", name: "Accessories", count: 23 },
// //     { id: "electronics", name: "Electronics", count: 12 },
// //   ];

// //   const brands = [
// //     { id: "all", name: "All Brands", count: 169 },
// //     { id: "nike", name: "Nike", count: 47 },
// //     { id: "adidas", name: "Adidas", count: 37 },
// //     { id: "gucci", name: "Gucci", count: 30 },
// //     { id: "apple", name: "Apple", count: 20 },
// //     { id: "puma", name: "Puma", count: 15 },
// //     { id: "zara", name: "Zara", count: 20 },
// //   ];

// //   // ✅ SAFE FILTER: Defensive copy
// //   let filteredProducts = [...products].filter(p => 
// //     p.name.toLowerCase().includes(search.toLowerCase()) &&
// //     (category === "all" || p.category === category) &&
// //     (brand === "all" || p.brand === brand) &&
// //     p.price >= priceRange[0] && p.price <= priceRange[1]
// //   );

// //   // ✅ SAFE SORT: Defensive copy
// //   switch (sort) {
// //     case "price-low":
// //       filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
// //       break;
// //     case "price-high":
// //       filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
// //       break;
// //     case "name":
// //       filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
// //       break;
// //     case "featured":
// //     default:
// //       filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));
// //       break;
// //   }

// //   // Pagination
// //   const itemsPerPage = 12;
// //   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
// //   const paginatedProducts = filteredProducts.slice(
// //     (currentPage - 1) * itemsPerPage,
// //     currentPage * itemsPerPage
// //   );

// //   const handlePageChange = (page) => setCurrentPage(page);

// //   return (
// //     <div className="mt-5 bg-gray-50 min-h-screen">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// //         {/* Header */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-center mb-8 sm:mb-12"
// //         >
// //           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4">
// //             All Products
// //           </h1>
// //           <p className="text-lg sm:text-xl text-gray-600">
// //             Discover {filteredProducts.length} amazing products
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
// //           {/* Sidebar Filters */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             className="lg:col-span-1 space-y-4 sm:space-y-6 order-1 lg:order-1"
// //           >
// //             {/* Search */}
// //             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
// //               <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Search Products</h3>
// //               <input
// //                 type="text"
// //                 placeholder="Search 169 products..."
// //                 className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm"
// //                 value={search}
// //                 onChange={e => setSearch(e.target.value)}
// //               />
// //             </div>

// //             {/* Categories - EXACT COUNTS */}
// //             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
// //               <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Categories</h3>
// //               <div className="space-y-2">
// //                 {categories.map(cat => (
// //                   <button
// //                     key={cat.id}
// //                     onClick={() => setCategory(cat.id)}
// //                     className={`w-full text-left py-2 px-3 rounded-lg transition-all text-sm ${
// //                       category === cat.id
// //                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
// //                         : "text-gray-700 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     {cat.name} ({cat.count})
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Brands - EXACT COUNTS */}
// //             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
// //               <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Brands</h3>
// //               <div className="space-y-2">
// //                 {brands.map(b => (
// //                   <button
// //                     key={b.id}
// //                     onClick={() => setBrand(b.id)}
// //                     className={`w-full text-left py-2 px-3 rounded-lg transition-all text-sm ${
// //                       brand === b.id
// //                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
// //                         : "text-gray-700 hover:bg-gray-100"
// //                     }`}
// //                   >
// //                     {b.name} ({b.count})
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Price Range */}
// //             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
// //               <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Price Range</h3>
// //               <input
// //                 type="range"
// //                 min="0"
// //                 max="500"
// //                 value={priceRange[1]}
// //                 onChange={e => setPriceRange([0, parseInt(e.target.value)])}
// //                 className="w-full mb-2"
// //               />
// //               <div className="flex justify-between text-xs sm:text-sm text-gray-600">
// //                 <span>$0</span>
// //                 <span>${priceRange[1]}</span>
// //               </div>
// //             </div>

// //             {/* View Toggle */}
// //             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
// //               <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">View</h3>
// //               <div className="flex space-x-2">
// //                 <button
// //                   onClick={() => setView("grid")}
// //                   className={`p-2 rounded-lg transition-all flex-1 sm:flex-none ${
// //                     view === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"
// //                   }`}
// //                 >
// //                   <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
// //                   </svg>
// //                 </button>
// //                 <button
// //                   onClick={() => setView("list")}
// //                   className={`p-2 rounded-lg transition-all flex-1 sm:flex-none ${
// //                     view === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"
// //                   }`}
// //                 >
// //                   <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Main Content */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             className="lg:col-span-3 order-2 lg:order-2"
// //           >
// //             {/* Sort Bar */}
// //             <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-2 sm:gap-0">
// //               <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
// //                 <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">Sort by:</span>
// //                 <select
// //                   value={sort}
// //                   onChange={e => setSort(e.target.value)}
// //                   className="border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-2 focus:ring-2 focus:ring-pink-500 text-sm flex-1 sm:flex-none"
// //                 >
// //                   <option value="featured">Featured</option>
// //                   <option value="price-low">Price: Low to High</option>
// //                   <option value="price-high">Price: High to Low</option>
// //                   <option value="name">Name A-Z</option>
// //                 </select>
// //               </div>
// //               <div className="text-gray-700 text-sm sm:text-base">
// //                 Showing {paginatedProducts.length} of {filteredProducts.length} products
// //               </div>
// //             </div>

// //             {/* Products Grid/List */}
// //             <div className={`grid gap-4 sm:gap-6 ${
// //               view === "grid" 
// //                 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
// //                 : "grid-cols-1"
// //             }`}>
// //               {paginatedProducts.map((product, index) => (
// //                 <motion.div
// //                   key={product.id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.05 }}
// //                 >
// //                   {view === "list" ? (
// //                     <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
// //                       <img src={product.image} alt={product.name} className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-xl flex-shrink-0" />
// //                       <div className="flex-1 space-y-2 sm:space-y-0">
// //                         <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
// //                         <p className="text-pink-500 font-bold text-lg sm:text-xl mb-1 sm:mb-2">${product.price}</p>
// //                         <p className="text-gray-600 text-sm line-clamp-2 sm:mb-4">{product.description}</p>
// //                         <button
// //                           onClick={() => addToCart(product)}
// //                           className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all"
// //                         >
// //                           Add to Cart
// //                         </button>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <ProductCard
// //                       product={product}
// //                       onAddToCart={() => addToCart(product)}
// //                     />
// //                   )}
// //                 </motion.div>
// //               ))}
// //             </div>

// //             {/* Pagination */}
// //             {totalPages > 1 && (
// //               <motion.div 
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-6 sm:mt-8 flex flex-wrap items-center justify-center space-x-1 sm:space-x-2 gap-1 sm:gap-2"
// //               >
// //                 <button
// //                   onClick={() => handlePageChange(currentPage - 1)}
// //                   disabled={currentPage === 1}
// //                   className="px-3 sm:px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 text-sm whitespace-nowrap"
// //                 >
// //                   ← Prev
// //                 </button>
// //                 {[...Array(totalPages)].map((_, i) => (
// //                   <button
// //                     key={i + 1}
// //                     onClick={() => handlePageChange(i + 1)}
// //                     className={`px-3 sm:px-4 py-2 rounded-lg transition-all text-sm ${
// //                       currentPage === i + 1
// //                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
// //                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                     }`}
// //                   >
// //                     {i + 1}
// //                   </button>
// //                 ))}
// //                 <button
// //                   onClick={() => handlePageChange(currentPage + 1)}
// //                   disabled={currentPage === totalPages}
// //                   className="px-3 sm:px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 text-sm whitespace-nowrap"
// //                 >
// //                   Next →
// //                 </button>
// //               </motion.div>
// //             )}

// //             {/* No Results */}
// //             {!paginatedProducts.length && filteredProducts.length === 0 && (
// //               <motion.div 
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 className="text-center py-12 sm:py-16"
// //               >
// //                 <svg className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //                 </svg>
// //                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No products found</h3>
// //                 <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Try adjusting your filters</p>
// //                 <button 
// //                   onClick={() => { setSearch(""); setCategory("all"); setBrand("all"); setSort("featured"); }}
// //                   className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-xl font-semibold text-sm sm:text-base"
// //                 >
// //                   Clear Filters
// //                 </button>
// //               </motion.div>
// //             )}
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;

// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { CartContext } from "../Context/CartContext";
// import Loader from "../components/Loader";
// import { motion } from "framer-motion";

// // 🔥 EXACT 169 PRODUCTS WITH PERFECT COUNTS!
// const mockProducts = [
//   // 🔥 SNEAKERS = EXACTLY 45
//   ...Array.from({ length: 15 }, (_, i) => ({
//     id: i + 1,
//     name: `Nike Air Max ${['90', '97', '270', '1', 'Plus'][i % 5]} Premium`,
//     category: "sneakers",
//     brand: "nike",
//     price: [89.99, 129.99, 149.99, 179.99, 199.99][i % 5],
//     image: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300`,
//     rating: [4.8, 4.5, 4.9, 4.7, 4.6][i % 5],
//     discount: [20, null, 30, null, null][i % 5],
//     description: "Premium running shoes with Air cushioning technology.",
//     inStock: true
//   })),
//   ...Array.from({ length: 15 }, (_, i) => ({
//     id: i + 16,
//     name: `Adidas Ultraboost ${['20', '21', '22', 'Light', 'X'][i % 5]}`,
//     category: "sneakers",
//     brand: "adidas",
//     price: [99.99, 139.99, 159.99, 189.99, 219.99][i % 5],
//     image: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300`,
//     rating: [4.7, 4.9, 4.6, 4.8, 4.5][i % 5],
//     discount: i % 4 === 0 ? 15 : null,
//     description: "Lightweight running shoes with Boost technology.",
//     inStock: true
//   })),
//   ...Array.from({ length: 15 }, (_, i) => ({
//     id: i + 31,
//     name: `Puma ${['RS-X', 'Future', 'Clyde'][i % 3]} Rider ${i + 1}`,
//     category: "sneakers",
//     brand: "puma",
//     price: [79.99, 99.99, 119.99][i % 3],
//     image: `https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=300`,
//     rating: [4.6, 4.8, 4.7][i % 3],
//     discount: i % 3 === 0 ? 25 : null,
//     description: "Retro-style sneakers with modern comfort.",
//     inStock: true
//   })),

//   // 👕 CLOTHING = EXACTLY 89
//   ...Array.from({ length: 25 }, (_, i) => ({
//     id: i + 46,
//     name: `Nike ${['Dri-FIT', 'Pro', 'Sportswear'][i % 3]} T-Shirt ${i + 1}`,
//     category: "clothing",
//     brand: "nike",
//     price: [24.99, 29.99, 34.99, 39.99][i % 4],
//     image: `https://images.unsplash.com/photo-1445205170230-053b83016050?w=300`,
//     rating: [4.6, 4.8, 4.7, 4.9][i % 4],
//     discount: i % 3 === 0 ? 10 : null,
//     description: "Breathable cotton t-shirt for everyday wear.",
//     inStock: true
//   })),
//   ...Array.from({ length: 22 }, (_, i) => ({
//     id: i + 71,
//     name: `Adidas ${['Essentials', 'Originals', 'Performance'][i % 3]} Hoodie`,
//     category: "clothing",
//     brand: "adidas",
//     price: [49.99, 59.99, 69.99, 79.99][i % 4],
//     image: `https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300`,
//     rating: [4.8, 4.7, 4.9, 4.6][i % 4],
//     discount: i % 5 === 0 ? 25 : null,
//     description: "Cozy fleece hoodie with iconic 3 stripes.",
//     inStock: true
//   })),
//   ...Array.from({ length: 22 }, (_, i) => ({
//     id: i + 93,
//     name: `Gucci ${['Cotton', 'Silk', 'Cashmere'][i % 3]} Polo Shirt`,
//     category: "clothing",
//     brand: "gucci",
//     price: [89.99, 129.99, 179.99, 249.99][i % 4],
//     image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300`,
//     rating: [4.9, 4.8, 4.7, 4.9][i % 4],
//     discount: null,
//     description: "Luxury polo shirt with signature GG logo.",
//     inStock: i % 2 === 0
//   })),
//   ...Array.from({ length: 20 }, (_, i) => ({
//     id: i + 115,
//     name: `Zara ${['Slim Fit', 'Regular', 'Oversize'][i % 3]} Jeans ${i + 1}`,
//     category: "clothing",
//     brand: "zara",
//     price: [39.99, 49.99, 59.99][i % 3],
//     image: `https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300`,
//     rating: [4.7, 4.8, 4.6][i % 3],
//     discount: i % 4 === 0 ? 20 : null,
//     description: "Comfortable denim jeans for all occasions.",
//     inStock: true
//   })),

//   // 💍 ACCESSORIES = EXACTLY 23
//   ...Array.from({ length: 8 }, (_, i) => ({
//     id: i + 135,
//     name: `Gucci ${['Leather', 'Canvas'][i % 2]} Crossbody Bag`,
//     category: "accessories",
//     brand: "gucci",
//     price: [299.99, 399.99, 499.99][i % 3],
//     image: `https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300`,
//     rating: [4.9, 4.8, 4.7][i % 3],
//     discount: i % 3 === 0 ? 15 : null,
//     description: "Designer crossbody bag with gold hardware.",
//     inStock: true
//   })),
//   ...Array.from({ length: 8 }, (_, i) => ({
//     id: i + 143,
//     name: `Apple AirPods ${['2nd Gen', '3rd Gen', 'Pro'][i % 3]}`,
//     category: "accessories",
//     brand: "apple",
//     price: [129.99, 179.99, 249.99][i % 3],
//     image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300`,
//     rating: [4.8, 4.9, 4.7][i % 3],
//     discount: null,
//     description: "Wireless earbuds with noise cancellation.",
//     inStock: true
//   })),
//   ...Array.from({ length: 7 }, (_, i) => ({
//     id: i + 151,
//     name: `Nike ${['Adjustable', 'Snapback'][i % 2]} Cap`,
//     category: "accessories",
//     brand: "nike",
//     price: [24.99, 29.99, 34.99][i % 3],
//     image: `https://images.unsplash.com/photo-1572121544584-f7a98b4b8921?w=300`,
//     rating: [4.7, 4.6, 4.8][i % 3],
//     discount: i % 2 === 0 ? 20 : null,
//     description: "Breathable cap with Nike swoosh.",
//     inStock: true
//   })),

//   // 💻 ELECTRONICS = EXACTLY 12
//   ...Array.from({ length: 6 }, (_, i) => ({
//     id: i + 158,
//     name: `Apple ${['iPhone 14', 'iPhone 15', 'iPhone 15 Pro'][i % 3]} ${i % 2 ? '128GB' : '256GB'}`,
//     category: "electronics",
//     brand: "apple",
//     price: [799.99, 899.99, 1099.99][i % 3],
//     image: `https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300`,
//     rating: [4.9, 4.8, 4.9][i % 3],
//     discount: i === 2 ? 100 : null,
//     description: "Latest iPhone with A16 Bionic chip.",
//     inStock: true
//   })),
//   ...Array.from({ length: 6 }, (_, i) => ({
//     id: i + 164,
//     name: `Apple Watch Series ${['8', '9', 'Ultra'][i % 3]}`,
//     category: "electronics",
//     brand: "apple",
//     price: [399.99, 449.99, 799.99][i % 3],
//     image: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300`,
//     rating: [4.8, 4.9, 4.7][i % 3],
//     discount: i % 3 === 0 ? 50 : null,
//     description: "Smartwatch with health monitoring features.",
//     inStock: true
//   })),
// ];

// const Products = ({ products = mockProducts, loading = false }) => {
//   const { addToCart } = useContext(CartContext);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [brand, setBrand] = useState("all");
//   const [sort, setSort] = useState("featured");
//   const [view, setView] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [priceRange, setPriceRange] = useState([0, 500]);
//   const [showMobileSidebar, setShowMobileSidebar] = useState(false); // 🔥 MOBILE SIDEBAR

//   if (loading) return <Loader />;

//   const categories = [
//     { id: "all", name: "All Categories", count: 169 },
//     { id: "sneakers", name: "Sneakers", count: 45 },
//     { id: "clothing", name: "Clothing", count: 89 },
//     { id: "accessories", name: "Accessories", count: 23 },
//     { id: "electronics", name: "Electronics", count: 12 },
//   ];

//   const brands = [
//     { id: "all", name: "All Brands", count: 169 },
//     { id: "nike", name: "Nike", count: 47 },
//     { id: "adidas", name: "Adidas", count: 37 },
//     { id: "gucci", name: "Gucci", count: 30 },
//     { id: "apple", name: "Apple", count: 20 },
//     { id: "puma", name: "Puma", count: 15 },
//     { id: "zara", name: "Zara", count: 20 },
//   ];

//   let filteredProducts = [...products].filter(p => 
//     p.name.toLowerCase().includes(search.toLowerCase()) &&
//     (category === "all" || p.category === category) &&
//     (brand === "all" || p.brand === brand) &&
//     p.price >= priceRange[0] && p.price <= priceRange[1]
//   );

//   switch (sort) {
//     case "price-low":
//       filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
//       break;
//     case "price-high":
//       filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
//       break;
//     case "name":
//       filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
//       break;
//     case "featured":
//     default:
//       filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));
//       break;
//   }

//   const itemsPerPage = 12;
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="mt-3 bg-gray-50 min-h-screen"> {/* 🔥 REDUCED mt-5 → mt-3 */}
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6"> {/* 🔥 REDUCED PADDING */}
        
//         {/* 🔥 MOBILE FILTER BUTTON */}
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="lg:hidden mb-3" // 🔥 MOBILE ONLY
//         >
//           <button
//             onClick={() => setShowMobileSidebar(!showMobileSidebar)}
//             className="flex items-center space-x-2 bg-white rounded-xl px-4 py-2 shadow-md text-sm font-medium text-gray-700"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//             </svg>
//             <span>Filters ({filteredProducts.length})</span>
//           </button>
//         </motion.div>

//         {/* Header - REDUCED SPACING */}
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-4 sm:mb-6" // 🔥 REDUCED mb-8 → mb-4
//         >
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2"> {/* 🔥 REDUCED SIZE */}
//             All Products
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600"> {/* 🔥 REDUCED SIZE */}
//             Discover {filteredProducts.length} amazing products
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"> {/* 🔥 REDUCED GAPS */}
          
//           {/* 🔥 MOBILE SIDEBAR - COLLAPSIBLE */}
//           <motion.div 
//             initial={{ x: -300 }}
//             animate={{ x: showMobileSidebar ? 0 : -300 }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl overflow-y-auto transform"
//           >
//             <div className="p-4 pt-16">
//               <button
//                 onClick={() => setShowMobileSidebar(false)}
//                 className="mb-4 text-gray-500 hover:text-gray-700"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
              
//               {/* Mobile Filters - COMPACT */}
//               <div className="space-y-3"> {/* 🔥 REDUCED space-y-4 → space-y-3 */}
//                 {/* Search */}
//                 <div className="bg-gray-50 rounded-xl p-3">
//                   <h3 className="font-semibold text-sm mb-2">Search</h3>
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     className="w-full p-2 border rounded-lg text-sm focus:ring-1 focus:ring-pink-500"
//                     value={search}
//                     onChange={e => setSearch(e.target.value)}
//                   />
//                 </div>

//                 {/* Categories */}
//                 <div className="bg-gray-50 rounded-xl p-3">
//                   <h3 className="font-semibold text-sm mb-2">Categories</h3>
//                   <div className="space-y-1.5"> {/* 🔥 REDUCED */}
//                     {categories.map(cat => (
//                       <button
//                         key={cat.id}
//                         onClick={() => { setCategory(cat.id); setShowMobileSidebar(false); }}
//                         className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
//                           category === cat.id
//                             ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
//                             : "text-gray-700 hover:bg-gray-100"
//                         }`}
//                       >
//                         {cat.name} ({cat.count})
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Brands */}
//                 <div className="bg-gray-50 rounded-xl p-3">
//                   <h3 className="font-semibold text-sm mb-2">Brands</h3>
//                   <div className="space-y-1.5">
//                     {brands.map(b => (
//                       <button
//                         key={b.id}
//                         onClick={() => { setBrand(b.id); setShowMobileSidebar(false); }}
//                         className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
//                           brand === b.id
//                             ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
//                             : "text-gray-700 hover:bg-gray-100"
//                         }`}
//                       >
//                         {b.name} ({b.count})
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Price Range */}
//                 <div className="bg-gray-50 rounded-xl p-3">
//                   <h3 className="font-semibold text-sm mb-2">Price</h3>
//                   <input
//                     type="range"
//                     min="0" max="500"
//                     value={priceRange[1]}
//                     onChange={e => setPriceRange([0, parseInt(e.target.value)])}
//                     className="w-full mb-1"
//                   />
//                   <div className="flex justify-between text-xs">
//                     <span>$0</span>
//                     <span>${priceRange[1]}</span>
//                   </div>
//                 </div>

//                 {/* View Toggle */}
//                 <div className="bg-gray-50 rounded-xl p-3">
//                   <h3 className="font-semibold text-sm mb-2">View</h3>
//                   <div className="flex space-x-2">
//                     <button onClick={() => { setView("grid"); setShowMobileSidebar(false); }} className={`p-2 rounded-lg flex-1 ${view === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600"}`}>
//                       <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
//                     </button>
//                     <button onClick={() => { setView("list"); setShowMobileSidebar(false); }} className={`p-2 rounded-lg flex-1 ${view === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600"}`}>
//                       <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* OVERLAY - MOBILE ONLY */}
//           {showMobileSidebar && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
//               onClick={() => setShowMobileSidebar(false)}
//             />
//           )}

//           {/* DESKTOP SIDEBAR */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="hidden lg:block lg:col-span-1 space-y-3" // 🔥 REDUCED space-y-4 → space-y-3
//           >
//             <div className="bg-white rounded-xl shadow-sm p-3"> {/* 🔥 REDUCED p-4 → p-3 */}
//               <h3 className="font-semibold text-sm mb-2">Search</h3>
//               <input
//                 type="text"
//                 placeholder="Search 169 products..."
//                 className="w-full p-2 border rounded-lg text-sm focus:ring-1 focus:ring-pink-500"
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//               />
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3">
//               <h3 className="font-semibold text-sm mb-2">Categories</h3>
//               <div className="space-y-1.5">
//                 {categories.map(cat => (
//                   <button
//                     key={cat.id}
//                     onClick={() => setCategory(cat.id)}
//                     className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
//                       category === cat.id
//                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     {cat.name} ({cat.count})
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3">
//               <h3 className="font-semibold text-sm mb-2">Brands</h3>
//               <div className="space-y-1.5">
//                 {brands.map(b => (
//                   <button
//                     key={b.id}
//                     onClick={() => setBrand(b.id)}
//                     className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
//                       brand === b.id
//                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     {b.name} ({b.count})
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3">
//               <h3 className="font-semibold text-sm mb-2">Price</h3>
//               <input
//                 type="range"
//                 min="0" max="500"
//                 value={priceRange[1]}
//                 onChange={e => setPriceRange([0, parseInt(e.target.value)])}
//                 className="w-full mb-1"
//               />
//               <div className="flex justify-between text-xs">
//                 <span>$0</span>
//                 <span>${priceRange[1]}</span>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3">
//               <h3 className="font-semibold text-sm mb-2">View</h3>
//               <div className="flex space-x-2">
//                 <button onClick={() => setView("grid")} className={`p-2 rounded-lg flex-1 ${view === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
//                   <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
//                 </button>
//                 <button onClick={() => setView("list")} className={`p-2 rounded-lg flex-1 ${view === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
//                   <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
//                 </button>
//               </div>
//             </div>
//           </motion.div>

//           {/* Main Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="lg:col-span-3"
//           >
//             {/* Sort Bar - COMPACT */}
//             <div className="bg-white rounded-xl shadow-sm p-2 sm:p-3 mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"> {/* 🔥 REDUCED */}
//               <div className="flex items-center space-x-2 w-full sm:w-auto">
//                 <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">Sort:</span>
//                 <select
//                   value={sort}
//                   onChange={e => setSort(e.target.value)}
//                   className="border rounded-lg px-2 py-1.5 text-sm focus:ring-1 focus:ring-pink-500"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low-High</option>
//                   <option value="price-high">Price: High-Low</option>
//                   <option value="name">Name A-Z</option>
//                 </select>
//               </div>
//               <div className="text-gray-700 text-xs sm:text-sm">
//                 {paginatedProducts.length} of {filteredProducts.length} products
//               </div>
//             </div>

//             {/* Products Grid - REDUCED GAPS */}
//             <div className={`grid gap-3 sm:gap-4 ${ // 🔥 REDUCED gap-4 → gap-3
//               view === "grid" 
//                 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
//                 : "grid-cols-1"
//             }`}>
//               {paginatedProducts.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.03 }} // 🔥 FASTER ANIMATION
//                 >
//                   {view === "list" ? (
//                     <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"> {/* 🔥 REDUCED */}
//                       <img src={product.image} alt={product.name} className="w-full sm:w-20 h-40 sm:h-20 object-cover rounded-lg flex-shrink-0" />
//                       <div className="flex-1 space-y-1">
//                         <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
//                         <p className="text-pink-500 font-bold text-base">${product.price}</p>
//                         <p className="text-gray-600 text-xs line-clamp-2">{product.description}</p>
//                         <button
//                           onClick={() => addToCart(product)}
//                           className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <ProductCard product={product} onAddToCart={() => addToCart(product)} />
//                   )}
//                 </motion.div>
//               ))}
//             </div>

//             {/* Pagination - COMPACT */}
//             {totalPages > 1 && (
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-xl shadow-sm p-3 mt-4 flex flex-wrap items-center justify-center space-x-1 gap-1" // 🔥 REDUCED
//               >
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="px-2 py-1.5 bg-gray-200 rounded text-xs disabled:opacity-50"
//                 >
//                   ←
//                 </button>
//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => handlePageChange(i + 1)}
//                     className={`px-2 py-1.5 rounded text-xs ${
//                       currentPage === i + 1
//                         ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="px-2 py-1.5 bg-gray-200 rounded text-xs disabled:opacity-50"
//                 >
//                   →
//                 </button>
//               </motion.div>
//             )}

//             {/* No Results - COMPACT */}
//             {!paginatedProducts.length && filteredProducts.length === 0 && (
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-8"
//               >
//                 <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
//                 <p className="text-gray-600 mb-3 text-sm">Try adjusting your filters</p>
//                 <button 
//                   onClick={() => { setSearch(""); setCategory("all"); setBrand("all"); setSort("featured"); }}
//                   className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-lg text-sm font-medium"
//                 >
//                   Clear Filters
//                 </button>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../Context/CartContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

// 🔥 EXACT 169 PRODUCTS (ALL YOUR ORIGINAL)
const mockProducts = [
  // 🔥 SNEAKERS = 45
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
  
  // 👕 CLOTHING = 89 (ALL YOUR ORIGINAL)
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
  
  // 💍 ACCESSORIES = 23 (ALL ORIGINAL)
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
  
  // 💻 ELECTRONICS = 12 (ALL ORIGINAL)
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
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  if (loading) return <Loader />;

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

  let filteredProducts = [...products].filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || p.category === category) &&
    (brand === "all" || p.brand === brand) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

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

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);
  const closeMobileSidebar = () => setShowMobileSidebar(false);
  const handleOkayButton = () => {
    setCurrentPage(1);
    closeMobileSidebar();
  };

  return (
    <div className="mt-3 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6">
        
        {/* 🔥 MOBILE FILTER BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mb-3"
        >
          <button
            onClick={() => setShowMobileSidebar(true)}
            className="flex items-center space-x-2 bg-white rounded-xl px-4 py-2 shadow-md text-sm font-medium text-gray-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filters ({filteredProducts.length})</span>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 sm:mb-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
            All Products
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Discover {filteredProducts.length} amazing products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          
          {/* 🔥 MOBILE SIDEBAR - WITH OKAY BUTTON */}
          <motion.div 
            initial={false}
            animate={{ x: showMobileSidebar ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-4 flex-shrink-0 bg-white border-b flex justify-between items-center">
                <h2 className="font-semibold text-lg">Filters</h2>
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  onClick={closeMobileSidebar}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                <div className="bg-gray-50 rounded-xl p-3">
                  <h3 className="font-semibold text-sm mb-2">Search</h3>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full p-2 border rounded-lg text-sm focus:ring-1 focus:ring-pink-500"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <h3 className="font-semibold text-sm mb-2">Categories</h3>
                  <div className="space-y-1.5">
                    {categories.map(cat => (
                      <motion.button
                        key={cat.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCategory(cat.id)}
                        className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
                          category === cat.id
                            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <h3 className="font-semibold text-sm mb-2">Brands</h3>
                  <div className="space-y-1.5">
                    {brands.map(b => (
                      <motion.button
                        key={b.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setBrand(b.id)}
                        className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
                          brand === b.id
                            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {b.name} ({b.count})
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <h3 className="font-semibold text-sm mb-2">Price</h3>
                  <input
                    type="range"
                    min="0" max="500"
                    value={priceRange[1]}
                    onChange={e => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full mb-1"
                  />
                  <div className="flex justify-between text-xs">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <h3 className="font-semibold text-sm mb-2">View</h3>
                  <div className="flex space-x-2">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setView("grid")} 
                      className={`p-2 rounded-lg flex-1 ${view === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600"}`}
                    >
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </motion.button>
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setView("list")} 
                      className={`p-2 rounded-lg flex-1 ${view === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600"}`}
                    >
                      <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-shrink-0 bg-gray-50 border-t">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOkayButton}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  ✅ OKAY
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* OVERLAY */}
          {showMobileSidebar && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={closeMobileSidebar}
            />
          )}

          {/* 🔥 DESKTOP SIDEBAR - FULLY RESTORED! */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block lg:col-span-1 space-y-3 sticky top-6"
          >
            {/* 🔥 SEARCH - FULL */}
            <div className="bg-white rounded-xl shadow-sm p-3">
              <h3 className="font-semibold text-sm mb-2">Search</h3>
              <input
                type="text"
                placeholder="Search 169 products..."
                className="w-full p-2 border rounded-lg text-sm focus:ring-1 focus:ring-pink-500"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* 🔥 CATEGORIES - FULL */}
            <div className="bg-white rounded-xl shadow-sm p-3">
              <h3 className="font-semibold text-sm mb-2">Categories</h3>
              <div className="space-y-1.5">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
                      category === cat.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* 🔥 BRANDS - FULL */}
            <div className="bg-white rounded-xl shadow-sm p-3">
              <h3 className="font-semibold text-sm mb-2">Brands</h3>
              <div className="space-y-1.5">
                {brands.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBrand(b.id)}
                    className={`w-full text-left py-1.5 px-2 rounded-lg text-sm ${
                      brand === b.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {b.name} ({b.count})
                  </button>
                ))}
              </div>
            </div>

            {/* 🔥 PRICE - FULL */}
            <div className="bg-white rounded-xl shadow-sm p-3">
              <h3 className="font-semibold text-sm mb-2">Price</h3>
              <input
                type="range"
                min="0" max="500"
                value={priceRange[1]}
                onChange={e => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full mb-1"
              />
              <div className="flex justify-between text-xs">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* 🔥 VIEW - FULL */}
            <div className="bg-white rounded-xl shadow-sm p-3">
              <h3 className="font-semibold text-sm mb-2">View</h3>
              <div className="flex space-x-2">
                <button onClick={() => setView("grid")} className={`p-2 rounded-lg flex-1 ${view === "grid" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
                  <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                </button>
                <button onClick={() => setView("list")} className={`p-2 rounded-lg flex-1 ${view === "list" ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
                  <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
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
            <div className="bg-white rounded-xl shadow-sm p-2 sm:p-3 mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-gray-700 text-xs sm:text-sm whitespace-nowrap">Sort:</span>
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="border rounded-lg px-2 py-1.5 text-sm focus:ring-1 focus:ring-pink-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low-High</option>
                  <option value="price-high">Price: High-Low</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
              <div className="text-gray-700 text-xs sm:text-sm">
                {paginatedProducts.length} of {filteredProducts.length} products
              </div>
            </div>

            <div className={`grid gap-3 sm:gap-4 ${
              view === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}>
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {view === "list" ? (
                    <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <img src={product.image} alt={product.name} className="w-full sm:w-20 h-40 sm:h-20 object-cover rounded-lg flex-shrink-0" />
                      <div className="flex-1 space-y-1">
                        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
                        <p className="text-pink-500 font-bold text-base">${product.price}</p>
                        <p className="text-gray-600 text-xs line-clamp-2">{product.description}</p>
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ) : (
                    <ProductCard product={product} onAddToCart={() => addToCart(product)} />
                  )}
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-3 mt-4 flex flex-wrap items-center justify-center space-x-1 gap-1"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-2 py-1.5 bg-gray-200 rounded text-xs disabled:opacity-50"
                >
                  ←
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-2 py-1.5 rounded text-xs ${
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
                  className="px-2 py-1.5 bg-gray-200 rounded text-xs disabled:opacity-50"
                >
                  →
                </button>
              </motion.div>
            )}

            {!paginatedProducts.length && filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-3 text-sm">Try adjusting your filters</p>
                <button 
                  onClick={() => { setSearch(""); setCategory("all"); setBrand("all"); setSort("featured"); }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-lg text-sm font-medium"
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