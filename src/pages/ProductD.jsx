import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeftIcon,
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  CalendarIcon,
  CreditCardIcon
} from "@heroicons/react/solid";

// Mock products data (same as in Products component for consistency)
const mockProducts = [
  // 🔥 SNEAKERS = EXACTLY 45
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Nike Air Max ${['90', '97', '270', '1', 'Plus'][i % 5]} Premium`,
    category: "sneakers",
    brand: "nike",
    price: [89.99, 129.99, 149.99, 179.99, 199.99][i % 5],
    image: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600`,
    images: [
      `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600`,
      `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&fit=crop&crop=face`,
      `https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&fit=crop&crop=entropy`,
      `https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600`
    ],
    rating: [4.8, 4.5, 4.9, 4.7, 4.6][i % 5],
    discount: [20, null, 30, null, null][i % 5],
    description: "Premium running shoes with Air cushioning technology. Experience ultimate comfort and style with this iconic design.",
    sizeOptions: ["7", "8", "9", "10", "11", "12"],
    colorOptions: ["White/Black", "Pure Platinum", "Triple Black"],
    reviewsCount: 128 + i * 2,
    averageRating: [4.8, 4.5, 4.9, 4.7, 4.6][i % 5],
    stock: 50 - i,
    freeShipping: true,
    warranty: "1 Year",
    deliveryTime: "2-3 days"
  })),
  // ... (Include all 169 products similarly; truncated for brevity. In full code, expand with all arrays from Products component)
  // For demo, we'll use the first few and assume the rest follow similar patterns.
  // In practice, pass mockProducts as prop or use context.
];

// Mock reviews data
const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    rating: 5,
    text: "This product is incredibly comfortable! Worth every penny, especially at this discount.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40",
    date: "Oct 15, 2025"
  },
  {
    id: 2,
    name: "Jordan Lee",
    rating: 4,
    text: "Great style and fit. Delivery was super fast. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40",
    date: "Oct 14, 2025"
  },
  {
    id: 3,
    name: "Taylor Kim",
    rating: 5,
    text: "Best purchase ever! Lightweight, breathable, and the discount made it a steal.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40",
    date: "Oct 13, 2025"
  }
];

const ProductDetailss = ({ products = mockProducts }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedSize(foundProduct.sizeOptions?.[0] || "");
      setSelectedColor(foundProduct.colorOptions?.[0] || "");
    }
    setLoading(false);
  }, [id, products]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading product...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Product not found</p>
          </div>
        </div>
      </section>
    );
  }

  const originalPrice = product.discount ? product.price * (1 - product.discount / 100) : null;
  const displayPrice = originalPrice || product.price;
  const addToCart = (product) => {
    // Your add to cart logic here
    console.log('Added to cart:', product);
  };

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, product.stock || 10));
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  const productImages = product.images || [product.image];

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button & Breadcrumb */}
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/products" className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors mr-4">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Products</span>
          </Link>
          <div className="text-sm text-gray-500">
            Home / Products / {product.category} / {product.name}
          </div>
        </motion.div>

        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={productImages[currentImageIndex]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 overflow-x-auto">
              {productImages.map((img, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 h-20 rounded-xl overflow-hidden border-2 ${currentImageIndex === index ? 'border-pink-500' : 'border-gray-200'} transition-colors`}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={img} alt={`${product.name} - View ${index + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.brand} • {product.category}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              {[...Array(Math.floor(product.averageRating))].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
              {product.averageRating % 1 !== 0 && (
                <div className="w-5 h-5 text-yellow-500">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}
              <span className="text-gray-600 ml-2">({product.reviewsCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-pink-500">${displayPrice.toFixed(2)}</span>
                {originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
                )}
                {product.discount && (
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Size Selector */}
            {product.sizeOptions && (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Size</label>
                <div className="flex flex-wrap gap-2">
                  {product.sizeOptions.map(size => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                        selectedSize === size 
                          ? 'bg-pink-500 text-white border-pink-500' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colorOptions && (
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">Color</label>
                <div className="flex space-x-3">
                  {product.colorOptions.map(color => (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                        selectedColor === color 
                          ? 'border-pink-500 text-pink-500' 
                          : 'border-gray-300 text-gray-600 hover:border-pink-300'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {color.charAt(0)}
                    </motion.button>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{selectedColor}</p>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-semibold text-gray-700">Quantity</label>
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={decrementQuantity}
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 0.95 }}
                >
                  -
                </motion.button>
                <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                <motion.button
                  onClick={incrementQuantity}
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 0.95 }}
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={() => addToCart(product)}
              className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCartIcon className="w-6 h-6" />
              <span>Add to Cart</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* Stock Status */}
            {!product.inStock && (
              <div className="text-center py-3 bg-red-100 text-red-700 rounded-xl text-sm font-semibold">
                Out of Stock
              </div>
            )}

            {/* Features Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: TruckIcon, text: product.freeShipping ? "Free Shipping" : "Standard Shipping", color: "from-green-500 to-green-600" },
                { icon: ShieldCheckIcon, text: `${product.warranty} Warranty`, color: "from-blue-500 to-blue-600" },
                { icon: CalendarIcon, text: `${product.deliveryTime} Delivery`, color: "from-purple-500 to-purple-600" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <feature.icon className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-gray-600">({product.reviewsCount} reviews • {product.averageRating} stars)</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
              >
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <CalendarIcon className="w-3 h-3" />
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Products Teaser */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="block">
                  <motion.div
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm font-medium text-gray-900 truncate">{relatedProduct.name}</p>
                    <p className="text-xs text-pink-500 font-bold">${relatedProduct.price.toFixed(2)}</p>
                  </motion.div>
                </Link>
              ))}
          </div>
          <motion.button
            className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/products">View More Products</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetailss;