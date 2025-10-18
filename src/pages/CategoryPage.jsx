import React,{useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data - In a real app, fetch from Shopify API or context/store
const categories = [
  {
    id: 1,
    name: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1606813902499-0b3c7e5b51d8?auto=format&fit=crop&w=800&q=80',
    count: 18,
  },
  {
    id: 2,
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80',
    count: 25,
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    count: 14,
  },
  {
    id: 4,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    count: 10,
  },
];

const products = [
  // 👟 Sneakers
  {
    id: 1,
    name: 'AirFlex Running Shoes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1606813902499-0b3c7e5b51d8?auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
  },
  {
    id: 2,
    name: 'StreetWalk High Tops',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1519744346363-dc6f31e6b6ae?auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
  },
  {
    id: 3,
    name: 'TrailMaster Hiker',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1606813902663-57657cda67ef?auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Urban Glide Sneakers',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80',
    categoryId: 1,
  },

  // 👕 Clothing
  {
    id: 5,
    name: 'Classic White T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
  },
  {
    id: 6,
    name: 'Slim Fit Jeans',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
  },
  {
    id: 7,
    name: 'Cotton Hoodie',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1580713897330-1a9d91e3d88b?auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
  },
  {
    id: 8,
    name: 'Casual Jacket',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
    categoryId: 2,
  },

  // 🕶️ Accessories
  {
    id: 9,
    name: 'Leather Wallet',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1612817159949-6e48a5d7f6e9?auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
  },
  {
    id: 10,
    name: 'Sunglasses',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
  },
  {
    id: 11,
    name: 'Wrist Watch',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
  },
  {
    id: 12,
    name: 'Cap',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1528701800489-20beab3d9b36?auto=format&fit=crop&w=600&q=80',
    categoryId: 3,
  },

  // ⚡ Electronics
  {
    id: 13,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1580894894513-541a1a6b8434?auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
  },
  {
    id: 14,
    name: 'Smartwatch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
  },
  {
    id: 15,
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1616627986785-1848eaa2293b?auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
  },
  {
    id: 16,
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80',
    categoryId: 4,
  },
];


const CategoryPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []);
  const { id } = useParams();
  const categoryId = parseInt(id, 10);
  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(product => product.categoryId === categoryId);

  if (!category) {
    return (
      <section className="py-16 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-block mb-4 text-pink-500 hover:text-pink-600 text-sm font-medium">
            ← Back to Categories
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            {category.name}
          </h1>
          <p className="text-gray-600">{category.count} items available</p>
        </motion.div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => (
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
                    <div className="absolute top-2 right-2 badge badge-success">
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No products found in this category.</h3>
            <Link to="/" className="btn-primary">Browse All Categories</Link>
          </motion.div>
        )}

        {/* Pagination - Mock for now */}
        {categoryProducts.length > 4 && (
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

export default CategoryPage;