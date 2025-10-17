import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
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

// Mock deals data (shared across components) with added images array for different angles/views
const deals = [
  {
    id: 1,
    title: "Air Max 270 React",
    originalPrice: 199.99,
    discountPrice: 149.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
    ],
    category: "Sneakers",
    description: "Experience ultimate comfort with Nike Air Max 270 React. Featuring revolutionary React foam for responsive cushioning and a bold Max Air unit for explosive energy return. Perfect for all-day wear and intense workouts.",
    sizeOptions: ["7", "8", "9", "10", "11", "12"],
    colorOptions: ["White/Black", "Pure Platinum", "Triple Black"],
    reviewsCount: 128,
    averageRating: 4.8,
    stock: 50,
    freeShipping: true,
    warranty: "2 Years",
    deliveryTime: "2-3 days"
  },
  {
    id: 2,
    title: "Ultraboost 22",
    originalPrice: 220.00,
    discountPrice: 189.99,
    discount: 14,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600"
    ],
    category: "Sneakers",
    description: "Adidas Ultraboost 22 delivers premium energy return with Boost technology and a breathable Primeknit upper. Ideal for runners seeking superior performance and style.",
    sizeOptions: ["7", "8", "9", "10", "11", "12"],
    colorOptions: ["Core Black", "Cloud White", "Legend Ink"],
    reviewsCount: 95,
    averageRating: 4.7,
    stock: 35,
    freeShipping: true,
    warranty: "1 Year",
    deliveryTime: "3-5 days"
  },
  {
    id: 3,
    title: "iPhone 14 Pro",
    originalPrice: 1099.99,
    discountPrice: 999.99,
    discount: 9,
    image: "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=600",
    images: [
      "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=600",
      "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1664478546384-8399a1b472e5?w=600"
    ],
    category: "Electronics",
    description: "Apple iPhone 14 Pro with Dynamic Island and Always-On display. Powered by A16 Bionic chip for unparalleled performance. Capture stunning photos with the advanced Pro camera system.",
    sizeOptions: ["128GB", "256GB", "512GB"],
    colorOptions: ["Space Black", "Silver", "Gold", "Deep Purple"],
    reviewsCount: 456,
    averageRating: 4.9,
    stock: 20,
    freeShipping: true,
    warranty: "1 Year",
    deliveryTime: "1-2 days"
  },
  {
    id: 4,
    title: "Gucci Belt",
    originalPrice: 500.00,
    discountPrice: 450.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
    ],
    category: "Accessories",
    description: "Luxurious Gucci leather belt with signature GG buckle. Timeless design perfect for elevating any outfit.",
    sizeOptions: ["32", "34", "36", "38", "40"],
    colorOptions: ["Black", "Brown"],
    reviewsCount: 67,
    averageRating: 4.6,
    stock: 15,
    freeShipping: true,
    warranty: "Lifetime",
    deliveryTime: "4-7 days"
  },
  {
    id: 5,
    title: "Hoodie Essential",
    originalPrice: 79.99,
    discountPrice: 59.99,
    discount: 25,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600"
    ],
    category: "Clothing",
    description: "Comfortable essential hoodie made from soft cotton blend. Perfect for casual wear and layering.",
    sizeOptions: ["S", "M", "L", "XL", "XXL"],
    colorOptions: ["Grey", "Black", "Navy"],
    reviewsCount: 234,
    averageRating: 4.5,
    stock: 100,
    freeShipping: false,
    warranty: "N/A",
    deliveryTime: "2-4 days"
  },
  {
    id: 6,
    title: "AirPods Pro 2",
    originalPrice: 279.99,
    discountPrice: 249.99,
    discount: 11,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600"
    ],
    category: "Electronics",
    description: "Apple AirPods Pro 2 with active noise cancellation and adaptive transparency. Up to 30 hours of battery life in the case.",
    sizeOptions: ["One Size"],
    colorOptions: ["White"],
    reviewsCount: 312,
    averageRating: 4.8,
    stock: 45,
    freeShipping: true,
    warranty: "1 Year",
    deliveryTime: "1-3 days"
  },
  {
    id: 7,
    title: "MacBook Pro M2",
    originalPrice: 1999.99,
    discountPrice: 1799.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
    ],
    category: "Electronics",
    description: "Apple MacBook Pro with M2 chip, Liquid Retina XDR display, and up to 22 hours of battery life. Professional-grade performance.",
    sizeOptions: ["512GB", "1TB", "2TB"],
    colorOptions: ["Space Gray", "Silver"],
    reviewsCount: 189,
    averageRating: 4.9,
    stock: 8,
    freeShipping: true,
    warranty: "1 Year",
    deliveryTime: "2-5 days"
  },
  {
    id: 8,
    title: "Rolex Submariner",
    originalPrice: 9500.00,
    discountPrice: 8500.00,
    discount: 11,
    image: "https://images.unsplash.com/photo-1524592094714-0f0652e6d1f3?w=600",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0652e6d1f3?w=600",
      "https://images.unsplash.com/photo-1524592094714-0f0652e6d1f3?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1524592094714-0f0652e6d1f3?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
    ],
    category: "Accessories",
    description: "Iconic Rolex Submariner dive watch with 300m water resistance and automatic movement. Timeless luxury.",
    sizeOptions: ["40mm"],
    colorOptions: ["Black Dial", "Green Dial"],
    reviewsCount: 23,
    averageRating: 5.0,
    stock: 2,
    freeShipping: true,
    warranty: "5 Years",
    deliveryTime: "7-10 days"
  },
  {
    id: 9,
    title: "Levi's 501 Jeans",
    originalPrice: 89.99,
    discountPrice: 69.99,
    discount: 22,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
    images: [
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    ],
    category: "Clothing",
    description: "Classic Levi's 501 original fit jeans. Durable denim with iconic straight leg design.",
    sizeOptions: ["28", "30", "32", "34", "36"],
    colorOptions: ["Medium Wash", "Dark Wash", "Black"],
    reviewsCount: 156,
    averageRating: 4.7,
    stock: 75,
    freeShipping: false,
    warranty: "N/A",
    deliveryTime: "3-6 days"
  },
  {
    id: 10,
    title: "Sony WH-1000XM5",
    originalPrice: 399.99,
    discountPrice: 349.99,
    discount: 13,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1613338710792-2c3a52b30487?w=600"
    ],
    category: "Electronics",
    description: "Sony WH-1000XM5 wireless noise-canceling headphones with 30-hour battery and premium sound quality.",
    sizeOptions: ["One Size"],
    colorOptions: ["Black", "Silver"],
    reviewsCount: 278,
    averageRating: 4.8,
    stock: 60,
    freeShipping: true,
    warranty: "1 Year",
    deliveryTime: "2-4 days"
  },
  {
    id: 11,
    title: "North Face Backpack",
    originalPrice: 129.99,
    discountPrice: 99.99,
    discount: 23,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1466986472721-409b120c4c3a?w=600"
    ],
    category: "Accessories",
    description: "Durable North Face Borealis backpack with 28L capacity and multiple compartments for everyday carry.",
    sizeOptions: ["One Size"],
    colorOptions: ["Asphalt Grey", "TNF Black"],
    reviewsCount: 89,
    averageRating: 4.6,
    stock: 40,
    freeShipping: true,
    warranty: "Lifetime",
    deliveryTime: "3-5 days"
  },
  {
    id: 12,
    title: "Chanel No.5 Perfume",
    originalPrice: 145.00,
    discountPrice: 129.00,
    discount: 11,
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600",
    images: [
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600",
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1514364108016-020fc04b985f?w=600"
    ],
    category: "Beauty",
    description: "Timeless Chanel No.5 Eau de Parfum. Iconic floral aldehyde fragrance for women.",
    sizeOptions: ["50ml", "100ml"],
    colorOptions: ["Classic"],
    reviewsCount: 112,
    averageRating: 4.9,
    stock: 25,
    freeShipping: true,
    warranty: "N/A",
    deliveryTime: "4-7 days"
  }
];

// Mock reviews data (generic, can be extended per product if needed)
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

const ProductDetails = () => {
  const { id } = useParams();
  const product = deals.find(deal => deal.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/deals" className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-2 px-4 rounded-xl">
            Back to Deals
          </Link>
        </div>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(product.sizeOptions[0]);
  const [selectedColor, setSelectedColor] = useState(product.colorOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use product's images array for different angles/views
  const productImages = product.images || [product.image];

  const handleAddToCart = () => {
    // Mock add to cart logic
    alert(`Added ${quantity} ${product.title} to cart!`);
  };

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, product.stock || 10));
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-orange-50 py-8">
      {/* Animated Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Back Button & Breadcrumb */}
        <motion.div 
          className="flex items-center mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/deals" className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors mr-4">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to Deals</span>
          </Link>
          <div className="text-sm text-gray-500">
            Home / Deals / {product.category} / {product.title}
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
            <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={productImages[currentImageIndex]} 
                alt={product.title}
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
                  <img src={img} alt={`${product.title} - View ${index + 1}`} className="w-full h-full object-cover" />
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600 text-lg">{product.category}</p>
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
                <span className="text-3xl font-bold text-pink-500">${product.discountPrice}</span>
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}%
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Size Selector */}
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

            {/* Color Selector */}
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
              onClick={handleAddToCart}
              className="group relative w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
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

            {/* Features Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: TruckIcon, text: product.freeShipping ? "Free Shipping" : "Standard Shipping", color: "from-green-500 to-green-600" },
                { icon: ShieldCheckIcon, text: `${product.warranty} Warranty`, color: "from-blue-500 to-blue-600" },
                { icon: CalendarIcon, text: `${product.deliveryTime} Delivery`, color: "from-purple-500 to-purple-600" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white/50 backdrop-blur-sm rounded-xl"
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
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30"
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
          <div className="flex justify-center space-x-4">
            {deals.filter(d => d.id !== product.id).slice(0, 3).map((relatedDeal) => (
              <motion.div
                key={relatedDeal.id}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-4 w-32 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link to={`/product/${relatedDeal.id}`}>
                  <img 
                    src={relatedDeal.image} 
                    alt={relatedDeal.title}
                    className="w-full h-24 object-cover rounded-lg mb-2 cursor-pointer"
                  />
                  <p className="text-sm font-medium text-gray-900 truncate hover:text-pink-500 transition-colors">{relatedDeal.title}</p>
                  <p className="text-xs text-pink-500 font-bold">${relatedDeal.discountPrice}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-3 px-8 rounded-xl font-semibold hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/deals">View More Deals</Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;