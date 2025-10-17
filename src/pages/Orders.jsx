import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBagIcon, 
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  EyeIcon,
} from "@heroicons/react/solid";

const Orders = ({ orders = [] }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search orders
  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'all' || order.status === filter;
    const matchesSearch = order.id.toString().includes(searchTerm) || searchTerm === '';
    return matchesFilter && matchesSearch;
  });

  // Compute stats
  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + parseFloat(order.total), 0);
  const avgOrderValue = totalOrders > 0 ? (totalSpent / totalOrders).toFixed(2) : 0;

  // Status icons mapping
  const statusIcons = {
    delivered: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
    pending: <ClockIcon className="w-5 h-5 text-yellow-500" />,
    cancelled: <XCircleIcon className="w-5 h-5 text-red-500" />
  };

  // Animated Particles
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* ✨ Animated Background */}
      <Particles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 🏷️ Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ShoppingBagIcon className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1 
              className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2"
            >
              My Orders
            </motion.h1>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Track your recent purchases and manage your shopping history
            </motion.p>
          </motion.div>

          {/* 📊 Order Stats */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-1">{totalOrders}</div>
              <p className="text-gray-600 text-sm">Total Orders</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">${totalSpent.toFixed(2)}</div>
              <p className="text-gray-600 text-sm">Total Spent</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-1">${avgOrderValue}</div>
              <p className="text-gray-600 text-sm">Avg Order Value</p>
            </div>
          </motion.div>

          {/* 🔍 Search & Filter */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search orders by ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/80"
              />
            </div>
            <div className="relative">
              <FunnelIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/80 appearance-none"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </motion.div>

          {/* 📦 Orders List or Empty State */}
          <AnimatePresence mode="wait">
            {!filteredOrders.length ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <motion.div
                  className="w-24 h-24 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ShoppingBagIcon className="w-12 h-12 text-gray-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter to see your orders.</p>
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold shadow-xl hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Products
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="orders"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {filteredOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-6 shadow-2xl"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <ShoppingBagIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-500">Placed on {order.date || 'Recent'}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm font-medium text-gray-600">Status:</span>
                            {statusIcons[order.status] || <ClockIcon className="w-5 h-5 text-gray-500" />}
                            <span className="text-sm font-medium capitalize text-gray-700">{order.status}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-pink-500">${order.total}</p>
                    </div>
                    {/* Order Items Preview */}
                    <div className="space-y-2 mb-4">
                      {order.items?.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-sm text-gray-600">
                          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            {item.image ? <img src={item.image} alt={item.name} className="w-full h-full rounded object-cover" /> : '📦'}
                          </div>
                          <span>{item.name} × {item.quantity}</span>
                        </div>
                      ))}
                      {order.items && order.items.length > 2 && (
                        <p className="text-xs text-gray-500">+ {order.items.length - 2} more items</p>
                      )}
                    </div>
                    <motion.button
                      className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <EyeIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>View Details</span>
                      {/* ✨ Shine Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 💬 Quick Tips Section */}
          <motion.div 
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Track Delivery</h3>
              <p className="text-gray-600">Real-time updates on your package location.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <ClockIcon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free returns within 30 days.</p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <ShoppingBagIcon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reorder</h3>
              <p className="text-gray-600">Quickly repurchase your favorites.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Orders;