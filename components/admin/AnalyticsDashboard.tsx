'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, ShoppingCart, Star, Clock } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const stats = {
    totalViews: 12543,
    uniqueVisitors: 8234,
    avgSessionTime: '3:45',
    bounceRate: '32%',
    popularItems: [
      { name: 'Kurkure Veg Momos', views: 1234, orders: 456 },
      { name: 'Paneer Pizza Momos', views: 1089, orders: 389 },
      { name: 'Cheese Corn Momos', views: 987, orders: 345 },
      { name: 'Veg Fried Momos', views: 876, orders: 298 },
      { name: 'Paneer Kurkure Momos', views: 765, orders: 267 }
    ],
    pageViews: [
      { page: 'Home', views: 5432 },
      { page: 'Menu', views: 3456 },
      { page: 'About', views: 1234 },
      { page: 'Contact', views: 987 }
    ],
    recentActivity: [
      { time: '2 minutes ago', action: 'New visitor from Sherghati' },
      { time: '5 minutes ago', action: 'Menu page viewed' },
      { time: '12 minutes ago', action: 'Contact form submitted' },
      { time: '18 minutes ago', action: 'New visitor from Gaya' },
      { time: '25 minutes ago', action: 'Menu item clicked: Kurkure Momos' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
          Analytics Dashboard
        </h2>
        <p className="text-gray-600 mt-1">Track your website performance and visitor insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Eye size={32} className="opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">+12%</span>
          </div>
          <p className="text-sm opacity-90">Total Views</p>
          <p className="text-3xl font-bold mt-2">{stats.totalViews.toLocaleString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Users size={32} className="opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">+8%</span>
          </div>
          <p className="text-sm opacity-90">Unique Visitors</p>
          <p className="text-3xl font-bold mt-2">{stats.uniqueVisitors.toLocaleString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Clock size={32} className="opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">+5%</span>
          </div>
          <p className="text-sm opacity-90">Avg. Session Time</p>
          <p className="text-3xl font-bold mt-2">{stats.avgSessionTime}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <TrendingUp size={32} className="opacity-80" />
            <span className="text-sm bg-white/20 px-2 py-1 rounded">-3%</span>
          </div>
          <p className="text-sm opacity-90">Bounce Rate</p>
          <p className="text-3xl font-bold mt-2">{stats.bounceRate}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Menu Items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Popular Menu Items</h3>
            <Star size={20} className="text-yellow-500" />
          </div>
          <div className="space-y-4">
            {stats.popularItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">
                      <Eye size={12} className="inline mr-1" />
                      {item.views} views
                    </span>
                    <span className="text-xs text-gray-500">
                      <ShoppingCart size={12} className="inline mr-1" />
                      {item.orders} orders
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-premium-gold">#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Views */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Page Views</h3>
            <Eye size={20} className="text-blue-500" />
          </div>
          <div className="space-y-4">
            {stats.pageViews.map((page, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{page.page}</span>
                  <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(page.views / stats.pageViews[0].views) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {stats.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-sm text-gray-700">{activity.action}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This is a demo analytics dashboard. In production, this will integrate with:
          <br />• Google Analytics 4 for detailed visitor tracking
          <br />• Real-time visitor monitoring
          <br />• Conversion tracking and funnel analysis
          <br />• Custom event tracking for menu item clicks
          <br />• Geographic distribution of visitors
          <br />• Device and browser statistics
        </p>
      </div>
    </div>
  );
};
