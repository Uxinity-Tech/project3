// BrandsPage.jsx - Full Brands Listing Page
import React,{useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data - Shared with Home, extend as needed
const brands = [
  { id: 1, name: 'Apple', logo: 'https://via.placeholder.com/64x64?text=Apple', products: 15, description: 'Innovative tech products from Apple.' },
  { id: 2, name: 'Nike', logo: 'https://via.placeholder.com/64x64?text=Nike', products: 25, description: 'Premium sportswear and footwear.' },
  { id: 3, name: 'Penguin Books', logo: 'https://via.placeholder.com/64x64?text=Penguin', products: 18, description: 'Classic and modern literature.' },
  { id: 4, name: 'IKEA', logo: 'https://via.placeholder.com/64x64?text=IKEA', products: 12, description: 'Affordable home furnishings.' },
  // Add more brands if needed
];

// Updated products with brandId (extend previous mock)
const products = [
  // Apple products
  { id: 1, name: 'iPhone 15', price: 799.99, image: 'https://via.placeholder.com/300x300?text=iPhone', categoryId: 1, brandId: 1, stock: 50 },
  { id: 2, name: 'MacBook Pro', price: 1999.99, image: 'https://via.placeholder.com/300x300?text=MacBook', categoryId: 1, brandId: 1, stock: 20 },
  // Nike
  { id: 3, name: 'Air Max Shoes', price: 129.99, image: 'https://via.placeholder.com/300x300?text=Air+Max', categoryId: 2, brandId: 2, stock: 100 },
  { id: 4, name: 'Running T-Shirt', price: 29.99, image: 'https://via.placeholder.com/300x300?text=T-Shirt', categoryId: 2, brandId: 2, stock: 150 },
  // Penguin Books
  { id: 5, name: '1984 Novel', price: 9.99, image: 'https://via.placeholder.com/300x300?text=1984', categoryId: 3, brandId: 3, stock: 200 },
  { id: 6, name: 'Pride and Prejudice', price: 12.99, image: 'https://via.placeholder.com/300x300?text=Pride', categoryId: 3, brandId: 3, stock: 180 },
  // IKEA
  { id: 7, name: 'Billy Bookshelf', price: 79.99, image: 'https://via.placeholder.com/300x300?text=Bookshelf', categoryId: 4, brandId: 4, stock: 30 },
  { id: 8, name: 'Lack Table', price: 19.99, image: 'https://via.placeholder.com/300x300?text=Table', categoryId: 4, brandId: 4, stock: 60 },
  // More products for fuller demo
  { id: 9, name: 'AirPods Pro', price: 249.99, image: 'https://via.placeholder.com/300x300?text=AirPods', categoryId: 1, brandId: 1, stock: 40 },
  { id: 10, name: 'Hoodie', price: 59.99, image: 'https://via.placeholder.com/300x300?text=Hoodie', categoryId: 2, brandId: 2, stock: 80 },
];

const BrandsPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-block mb-4 text-pink-500 hover:text-pink-600 text-sm font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            All Brands
          </h1>
          <p className="text-gray-600">Discover our top brands and their collections</p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer text-center"
            >
              <Link to={`/brand/${brand.id}`}>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-16 h-16 mx-auto mb-4 rounded-lg object-contain group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-bold text-lg text-gray-900">{brand.name}</h3>
                  <p className="text-gray-500 text-sm">{brand.products} products</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination - Mock if many brands */}
        {brands.length > 8 && (
          <div className="pagination mt-12">
            <button className="pagination-button">Previous</button>
            <button className="pagination-button active">1</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-button">3</button>
            <button className="pagination-button">Next</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsPage;