import React, { useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBanner from "../components/HeroBanner";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../Context/CartContext";
import Loader from "../components/Loader";

// 🔥 SAME MOCK PRODUCTS AS PRODUCTS/CATEGORY PAGES FOR CONSISTENCY
// (First 24 for display, but counts reflect full 169)
const products = [
  // 🔥 SNEAKERS = First 8 for display (full 45)
  {
    id: 1,
    name: "Nike Air Max 90 Premium",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "sneakers",
    brand: "nike",
    rating: 4.8,
    discount: 20,
    description: "Premium running shoes with Air cushioning technology.",
    inStock: true
  },
    {
    id: 2,
    name: "Adidas Ultraboost 20",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "sneakers",
    brand: "adidas",
    rating: 4.7,
    discount: 15,
    description: "Lightweight running shoes with Boost technology.",
    inStock: true
  },  
  {
    id: 3,
    name: "Nike Air Max 97 Premium",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "sneakers",
    brand: "nike",
    rating: 4.5,
    description: "Premium running shoes with Air cushioning technology.",
    inStock: true
  },
  {
    id: 4,
    name: "Adidas Ultraboost 21",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    category: "sneakers",
    brand: "adidas",
    rating: 4.9,
    description: "Lightweight running shoes with Boost technology.",
    inStock: true
  },
  {
    id: 5,
    name: "Puma RS-X Rider 1",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400",
    category: "sneakers",
    brand: "puma",
    rating: 4.6,
    discount: 25,
    description: "Retro-style sneakers with modern comfort.",
    inStock: true
  },
  {
    id: 6,
    name: "Puma Future Rider 2",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400",
    category: "sneakers",
    brand: "puma",
    rating: 4.8,
    description: "Retro-style sneakers with modern comfort.",
    inStock: true
  },
  {
    id: 7,
    name: "Puma Clyde Rider 3",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400",
    category: "sneakers",
    brand: "puma",
    rating: 4.7,
    description: "Retro-style sneakers with modern comfort.",
    inStock: true
  },
  {
    id: 8,
    name: "Nike Air Max 270 Premium",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "sneakers",
    brand: "nike",
    rating: 4.9,
    discount: 30,
    description: "Premium running shoes with Air cushioning technology.",
    inStock: true
  },
  // 👕 CLOTHING = Next 6 for display (full 89)
  {
    id: 9,
    name: "Nike Dri-FIT T-Shirt 1",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    category: "clothing",
    brand: "nike",
    rating: 4.6,
    discount: 10,
    description: "Breathable cotton t-shirt for everyday wear.",
    inStock: true
  },
  {
    id: 10,
    name: "Nike Pro T-Shirt 2",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    category: "clothing",
    brand: "nike",
    rating: 4.8,
    description: "Breathable cotton t-shirt for everyday wear.",
    inStock: true
  },
  {
    id: 11,
    name: "Adidas Essentials Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "clothing",
    brand: "adidas",
    rating: 4.8,
    description: "Cozy fleece hoodie with iconic 3 stripes.",
    inStock: true
  },
  {
    id: 12,
    name: "Adidas Originals Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    category: "clothing",
    brand: "adidas",
    rating: 4.7,
    description: "Cozy fleece hoodie with iconic 3 stripes.",
    inStock: true
  },
  {
    id: 13,
    name: "Gucci Cotton Polo Shirt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    category: "clothing",
    brand: "gucci",
    rating: 4.9,
    description: "Luxury polo shirt with signature GG logo.",
    inStock: true
  },
  {
    id: 14,
    name: "Zara Slim Fit Jeans 1",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
    category: "clothing",
    brand: "zara",
    rating: 4.7,
    description: "Comfortable denim jeans for all occasions.",
    inStock: true
  },
  // 💍 ACCESSORIES = Next 5 for display (full 23)
  {
    id: 15,
    name: "Gucci Leather Crossbody Bag",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    category: "accessories",
    brand: "gucci",
    rating: 4.9,
    discount: 15,
    description: "Designer crossbody bag with gold hardware.",
    inStock: true
  },
  {
    id: 16,
    name: "Apple AirPods 2nd Gen",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "accessories",
    brand: "apple",
    rating: 4.8,
    description: "Wireless earbuds with noise cancellation.",
    inStock: true
  },
  {
    id: 17,
    name: "Apple AirPods 3rd Gen",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "accessories",
    brand: "apple",
    rating: 4.9,
    description: "Wireless earbuds with noise cancellation.",
    inStock: true
  },
  {
    id: 18,
    name: "Nike Adjustable Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1572121544584-f7a98b4b8921?w=400",
    category: "accessories",
    brand: "nike",
    rating: 4.7,
    discount: 20,
    description: "Breathable cap with Nike swoosh.",
    inStock: true
  },
  {
    id: 19,
    name: "Nike Snapback Cap",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1572121544584-f7a98b4b8921?w=400",
    category: "accessories",
    brand: "nike",
    rating: 4.6,
    description: "Breathable cap with Nike swoosh.",
    inStock: true
  },
  // 💻 ELECTRONICS = Next 5 for display (full 12)
  {
    id: 20,
    name: "Apple iPhone 14 128GB",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    category: "electronics",
    brand: "apple",
    rating: 4.9,
    description: "Latest iPhone with A16 Bionic chip.",
    inStock: true
  },
  {
    id: 21,
    name: "Apple iPhone 15 256GB",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    category: "electronics",
    brand: "apple",
    rating: 4.8,
    description: "Latest iPhone with A16 Bionic chip.",
    inStock: true
  },
  {
    id: 22,
    name: "Apple Watch Series 8",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "electronics",
    brand: "apple",
    rating: 4.8,
    discount: 50,
    description: "Smartwatch with health monitoring features.",
    inStock: true
  },
  {
    id: 23,
    name: "Apple Watch Series 9",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "electronics",
    brand: "apple",
    rating: 4.9,
    description: "Smartwatch with health monitoring features.",
    inStock: true
  },
  {
    id: 24,
    name: "Apple Watch Ultra",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "electronics",
    brand: "apple",
    rating: 4.7,
    description: "Smartwatch with health monitoring features.",
    inStock: true
  }
];

const Home = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, []); 
  const { addToCart } = useContext(CartContext);

  // 🖼️ 8 FEATURED SLIDER IMAGES
  const featuredImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
      title: "Air Max Collection",
      subtitle: "Up to 30% OFF",
      buttonText: "Shop Now",
      link: "/category/1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
      title: "Adidas Summer Sale",
      subtitle: "Best Sellers",
      buttonText: "Explore",
      link: "/brand/2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1592899677979-1acd915f91e7?w=1200",
      title: "iPhone 14 Pro Max",
      subtitle: "Starting at $999",
      buttonText: "Buy Now",
      link: "/product/20"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200",
      title: "Luxury Accessories",
      subtitle: "Gucci & More",
      buttonText: "Shop Luxury",
      link: "/category/3"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1520962923254-8f748bb3cd41?w=1200",
      title: "Air Force 1",
      subtitle: "Classic White",
      buttonText: "Add to Cart",
      link: "/product/1"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200",
      title: "Clothing Essentials",
      subtitle: "Comfort & Style",
      buttonText: "Shop Now",
      link: "/category/2"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200",
      title: "MacBook Air M2",
      subtitle: "Starting at $1199",
      buttonText: "Learn More",
      link: "/product/20"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1606107557195-0ca7e3b6a8e5?w=1200",
      title: "Apple Watch Ultra",
      subtitle: "Adventure Ready",
      buttonText: "Shop Now",
      link: "/product/24"
    }
  ];

  // 🏷️ CATEGORIES (Updated counts to match full mock)
  const categories = [
    { id: 1, name: "Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300", count: 45 },
    { id: 2, name: "Clothing", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300", count: 89 },
    { id: 3, name: "Accessories", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300", count: 23 },
    { id: 4, name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7789180a6d7e?w=300", count: 12 },
  ];

  // 🏪 BRANDS (Updated counts to match full mock)
  const brands = [
    { id: 1, name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80", products: 47 },
    { id: 2, name: "Adidas", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80", products: 37 },
    { id: 3, name: "Gucci", logo: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=80", products: 30 },
    { id: 4, name: "Apple", logo: "https://images.unsplash.com/photo-1498049794561-7789180a6d7e?w=80", products: 20 },
  ];

  // 📊 STATS (already had)
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Products Sold" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Authentic" },
  ];

  // Featured products (first 8)
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="pt-0 bg-gray-50 ">
      {/* 🎨 Hero Banner */}
      <HeroBanner />

      {/* 📊 Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🏷️ Categories Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Shop by Category
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/category/${category.id}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-48 bg-gradient-to-br from-gray-50 to-white">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.count} items</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* 🏪 BRANDS Section */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900">Top Brands</h2>
          </div>
          <Link to="/brands" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center">
            View All <span className="ml-1">→</span>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.slice(0, 4).map((brand, index) => ( // Show only top 4 on home
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
      </div>
    </section>

      {/* 🔥 Featured Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Featured Collection
            </h2>
            <Link to="/products" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center">
              View All <span className="ml-1">→</span>
            </Link>
          </motion.div>
          
          <Slider slides={featuredImages} autoplay={true} showThumbs={true} />
        </div>
      </section>

      {/* ⭐ Best Sellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 7 9a8.819 8.819 0 01.9 4.9 8.211 8.211 0 01-1.4 5.6 8.211 8.211 0 01-5.6 1.4A8.819 8.819 0 013 18s1-1 1-1a8.819 8.819 0 014.9-.9 8.211 8.211 0 015.6 1.4 8.211 8.211 0 011.4 5.6 8.819 8.819 0 004.9.9s1 1 1 1z" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
            </div>
            <Link to="/deals" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center">
              See More <span className="ml-1">→</span>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={() => addToCart(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚚 Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            Why Shop With Us?
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
                title: "Free Shipping", desc: "Orders over $50" 
              },
              { 
                icon: <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, 
                title: "Secure Payment", desc: "SSL Protected" 
              },
              { 
                icon: <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>, 
                title: "7-Day Return", desc: "Easy returns" 
              },
              { 
                icon: <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, 
                title: "24/7 Support", desc: "Live chat" 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center space-y-4 p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-pink-500">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📦 All Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
            <Link to="/products" className="text-pink-500 hover:text-pink-600 font-semibold flex items-center">
              Browse Collection <span className="ml-1">→</span>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProductCard
                  product={product}
                  onAddToCart={() => addToCart(product)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;