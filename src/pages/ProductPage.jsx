// ProductPage.jsx - Product Detail Page
import React,{useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data - Extend from previous products array
const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/500x500?text=Headphones', description: 'High-quality wireless headphones with noise cancellation.', categoryId: 1, stock: 50 },
  { id: 2, name: 'Smartphone', price: 699.99, image: 'https://via.placeholder.com/500x500?text=Phone', description: 'Latest model smartphone with advanced features.', categoryId: 1, stock: 25 },
  { id: 3, name: 'T-Shirt', price: 19.99, image: 'https://via.placeholder.com/500x500?text=T-Shirt', description: 'Comfortable cotton t-shirt in various sizes.', categoryId: 2, stock: 100 },
  { id: 4, name: 'Jeans', price: 49.99, image: 'https://via.placeholder.com/500x500?text=Jeans', description: 'Slim-fit jeans for everyday wear.', categoryId: 2, stock: 75 },
  { id: 5, name: 'Fiction Novel', price: 14.99, image: 'https://via.placeholder.com/500x500?text=Book', description: 'Bestselling fiction novel full of adventure.', categoryId: 3, stock: 200 },
  { id: 6, name: 'Tech Guide', price: 24.99, image: 'https://via.placeholder.com/500x500?text=Tech+Book', description: 'Comprehensive guide to modern technologies.', categoryId: 3, stock: 150 },
  { id: 7, name: 'Plant Pot', price: 12.99, image: 'https://via.placeholder.com/500x500?text=Pot', description: 'Ceramic plant pot for indoor gardening.', categoryId: 4, stock: 30 },
  { id: 8, name: 'Lamp', price: 39.99, image: 'https://via.placeholder.com/500x500?text=Lamp', description: 'Stylish desk lamp with adjustable brightness.', categoryId: 4, stock: 40 },
];

const categories = [
  { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/400x300?text=Electronics', count: 12 },
  { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/400x300?text=Clothing', count: 20 },
  { id: 3, name: 'Books', image: 'https://via.placeholder.com/400x300?text=Books', count: 15 },
  { id: 4, name: 'Home & Garden', image: 'https://via.placeholder.com/400x300?text=Home', count: 8 },
];

const ProductPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find(prod => prod.id === productId);

  if (!product) {
    return (
      <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </section>
    );
  }

  // Find category for breadcrumb
  const category = categories.find(cat => cat.id === product.categoryId);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-8">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/category/${category.id}`} className="breadcrumb-link">{category.name}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="text-gray-500">{product.name}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Product Image */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl shadow-xl object-cover h-96 lg:h-[500px]"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-4xl font-semibold text-pink-500 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`badge ${product.stock > 0 ? 'badge-success' : 'badge-danger'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.stock > 0 && (
                  <span className="text-sm text-gray-600">({product.stock} available)</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {product.stock > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <div className="counter">
                    <button className="counter-btn">-</button>
                    <span className="counter-value">1</span>
                    <button className="counter-btn">+</button>
                  </div>
                </div>
                <button className="w-full btn-primary">Add to Cart</button>
                <button className="w-full btn-secondary">Buy Now</button>
              </div>
            )}

            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Category</h3>
              <Link
                to={`/category/${category.id}`}
                className="inline-block text-pink-500 hover:text-pink-600 text-sm font-medium"
              >
                {category.name}
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Products - Mock 3 more from same category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.categoryId === product.categoryId && p.id !== productId)
              .slice(0, 3)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer card"
                >
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="relative overflow-hidden rounded-t-2xl h-48">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 badge badge-success">
                        ${relatedProduct.price.toFixed(2)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 text-sm">In stock</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPage;