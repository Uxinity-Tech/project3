// BrandPage.jsx - Individual Brand Detail Page
import React,{useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const brands = [
  { id: 1, name: 'Nike', logo: 'https://via.placeholder.com/64x64?text=Apple', products: 15, description: 'Innovative tech products from Apple.' },
  { id: 2, name: 'Adidas', logo: 'https://via.placeholder.com/64x64?text=Nike', products: 25, description: 'Premium sportswear and footwear.' },
  { id: 3, name: 'Gucci', logo: 'https://via.placeholder.com/64x64?text=Penguin', products: 18, description: 'Classic and modern literature.' },
  { id: 4, name: 'Apple', logo: 'https://via.placeholder.com/64x64?text=IKEA', products: 12, description: 'Affordable home furnishings.' },
];

const products = [
  { id: 1, name: 'iPhone 15', price: 799.99, image: 'https://via.placeholder.com/300x300?text=iPhone', categoryId: 1, brandId: 1, stock: 50 },
  { id: 2, name: 'MacBook Pro', price: 1999.99, image: 'https://via.placeholder.com/300x300?text=MacBook', categoryId: 1, brandId: 1, stock: 20 },
  { id: 9, name: 'AirPods Pro', price: 249.99, image: 'https://via.placeholder.com/300x300?text=AirPods', categoryId: 1, brandId: 1, stock: 40 },
  { id: 3, name: 'Air Max Shoes', price: 129.99, image: 'https://via.placeholder.com/300x300?text=Air+Max', categoryId: 2, brandId: 2, stock: 100 },
  { id: 4, name: 'Running T-Shirt', price: 29.99, image: 'https://via.placeholder.com/300x300?text=T-Shirt', categoryId: 2, brandId: 2, stock: 150 },
  { id: 10, name: 'Hoodie', price: 59.99, image: 'https://via.placeholder.com/300x300?text=Hoodie', categoryId: 2, brandId: 2, stock: 80 },
  { id: 5, name: '1984 Novel', price: 9.99, image: 'https://via.placeholder.com/300x300?text=1984', categoryId: 3, brandId: 3, stock: 200 },
  { id: 6, name: 'Pride and Prejudice', price: 12.99, image: 'https://via.placeholder.com/300x300?text=Pride', categoryId: 3, brandId: 3, stock: 180 },
  { id: 7, name: 'Billy Bookshelf', price: 79.99, image: 'https://via.placeholder.com/300x300?text=Bookshelf', categoryId: 4, brandId: 4, stock: 30 },
  { id: 8, name: 'Lack Table', price: 19.99, image: 'https://via.placeholder.com/300x300?text=Table', categoryId: 4, brandId: 4, stock: 60 },
];

const BrandPage = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const { id } = useParams();
  const brandId = parseInt(id, 10);
  const brand = brands.find(b => b.id === brandId);
  const brandProducts = products.filter(p => p.brandId === brandId);

  if (!brand) {
    return (
      <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Brand Not Found</h2>
          <Link to="/brands" className="btn-primary">Back to Brands</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Brand Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/brands" className="inline-block mb-4 text-pink-500 hover:text-pink-600 text-sm font-medium">
            ← Back to All Brands
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <img src={brand.logo} alt={brand.name} className="w-20 h-20 rounded-lg object-contain" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{brand.name}</h1>
              <p className="text-gray-600">{brand.description}</p>
            </div>
          </div>
          <p className="text-gray-600">{brand.products} products available</p>
        </motion.div>

        {/* Products Grid */}
        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer card"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden rounded-t-2xl h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 badge badge-primary">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">In stock</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No products found for this brand.</h3>
            <Link to="/brands" className="btn-primary">Browse All Brands</Link>
          </motion.div>
        )}

        {/* Pagination - Mock */}
        {brandProducts.length > 4 && (
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

export default BrandPage;