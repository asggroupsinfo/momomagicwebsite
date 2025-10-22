'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  MousePointerClick, 
  DollarSign, 
  MapPin, 
  Clock,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

interface VisitorData {
  id: string;
  location: string;
  country: string;
  city: string;
  page: string;
  timestamp: Date;
  device: string;
  browser: string;
}

interface PageAnalytics {
  page: string;
  views: number;
  uniqueVisitors: number;
  avgTimeOnPage: string;
  bounceRate: number;
}

interface ConversionData {
  type: string;
  count: number;
  rate: number;
  trend: number;
}

interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
}

export const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [realtimeVisitors, setRealtimeVisitors] = useState<VisitorData[]>([]);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const newVisitor: VisitorData = {
        id: Math.random().toString(36).substr(2, 9),
        location: ['Sherghati', 'Gaya', 'Patna', 'Delhi', 'Mumbai'][Math.floor(Math.random() * 5)],
        country: 'India',
        city: ['Sherghati', 'Gaya', 'Patna', 'Delhi', 'Mumbai'][Math.floor(Math.random() * 5)],
        page: ['/', '/menu', '/about', '/contact', '/gallery'][Math.floor(Math.random() * 5)],
        timestamp: new Date(),
        device: ['Desktop', 'Mobile', 'Tablet'][Math.floor(Math.random() * 3)],
        browser: ['Chrome', 'Safari', 'Firefox', 'Edge'][Math.floor(Math.random() * 4)]
      };

      setRealtimeVisitors(prev => [newVisitor, ...prev].slice(0, 10));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const stats = {
    totalVisitors: 12847,
    visitorsTrend: 23.5,
    pageViews: 45632,
    pageViewsTrend: 18.2,
    avgSessionDuration: '3m 42s',
    sessionTrend: 12.8,
    bounceRate: 32.4,
    bounceTrend: -8.3
  };

  const topPages: PageAnalytics[] = [
    { page: '/menu', views: 15234, uniqueVisitors: 8921, avgTimeOnPage: '4m 23s', bounceRate: 28.5 },
    { page: '/', views: 12847, uniqueVisitors: 7654, avgTimeOnPage: '3m 12s', bounceRate: 32.1 },
    { page: '/about', views: 8932, uniqueVisitors: 5432, avgTimeOnPage: '2m 45s', bounceRate: 35.8 },
    { page: '/contact', views: 5621, uniqueVisitors: 3421, avgTimeOnPage: '1m 58s', bounceRate: 42.3 },
    { page: '/gallery', views: 3245, uniqueVisitors: 2134, avgTimeOnPage: '5m 12s', bounceRate: 25.6 }
  ];

  const conversions: ConversionData[] = [
    { type: 'Phone Calls', count: 342, rate: 2.66, trend: 15.3 },
    { type: 'Contact Form', count: 189, rate: 1.47, trend: 8.7 },
    { type: 'Menu Views', count: 8921, rate: 69.4, trend: 23.1 },
    { type: 'Social Clicks', count: 567, rate: 4.41, trend: -3.2 }
  ];

  const revenueData: RevenueData[] = [
    { date: '2025-10-15', revenue: 12500, orders: 87 },
    { date: '2025-10-16', revenue: 15300, orders: 102 },
    { date: '2025-10-17', revenue: 18700, orders: 125 },
    { date: '2025-10-18', revenue: 14200, orders: 95 },
    { date: '2025-10-19', revenue: 21500, orders: 143 },
    { date: '2025-10-20', revenue: 19800, orders: 132 },
    { date: '2025-10-21', revenue: 23400, orders: 156 }
  ];

  const totalRevenue = revenueData.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = revenueData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;

  const locationData = [
    { location: 'Sherghati', visitors: 4532, percentage: 35.3 },
    { location: 'Gaya', visitors: 2847, percentage: 22.2 },
    { location: 'Patna', visitors: 2134, percentage: 16.6 },
    { location: 'Delhi', visitors: 1876, percentage: 14.6 },
    { location: 'Mumbai', visitors: 1458, percentage: 11.3 }
  ];

  const handleExport = (format: 'csv' | 'pdf') => {
    alert(`Exporting analytics data as ${format.toUpperCase()}...`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Advanced Analytics Dashboard
          </h2>
          <p className="text-gray-600 mt-1">Real-time insights and performance metrics</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button
            onClick={() => handleExport('csv')}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="flex items-center space-x-2 px-4 py-2 bg-premium-gold text-black font-semibold rounded-lg hover:bg-charcoal-black hover:text-white transition-all"
          >
            <Download size={18} />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-2 border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users size={24} className="text-blue-600" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-semibold ${
              stats.visitorsTrend > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stats.visitorsTrend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{Math.abs(stats.visitorsTrend)}%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold">{stats.totalVisitors.toLocaleString()}</h3>
          <p className="text-sm text-gray-600">Total Visitors</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border-2 border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Eye size={24} className="text-purple-600" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-semibold ${
              stats.pageViewsTrend > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stats.pageViewsTrend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{Math.abs(stats.pageViewsTrend)}%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold">{stats.pageViews.toLocaleString()}</h3>
          <p className="text-sm text-gray-600">Page Views</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-2 border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock size={24} className="text-green-600" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-semibold ${
              stats.sessionTrend > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stats.sessionTrend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{Math.abs(stats.sessionTrend)}%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold">{stats.avgSessionDuration}</h3>
          <p className="text-sm text-gray-600">Avg. Session Duration</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-2 border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Activity size={24} className="text-orange-600" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-semibold ${
              stats.bounceTrend < 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stats.bounceTrend < 0 ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
              <span>{Math.abs(stats.bounceTrend)}%</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold">{stats.bounceRate}%</h3>
          <p className="text-sm text-gray-600">Bounce Rate</p>
        </motion.div>
      </div>

      {/* Real-time Visitors */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold">Real-time Visitors</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-sm text-gray-600">{isLive ? 'Live' : 'Paused'}</span>
            </div>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            {isLive ? 'Pause' : 'Resume'}
          </button>
        </div>

        <div className="space-y-2">
          {realtimeVisitors.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Waiting for visitors...</p>
          ) : (
            realtimeVisitors.map((visitor) => (
              <motion.div
                key={visitor.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <MapPin size={16} className="text-premium-gold" />
                  <div>
                    <p className="text-sm font-medium">{visitor.city}, {visitor.country}</p>
                    <p className="text-xs text-gray-500">
                      {visitor.page} • {visitor.device} • {visitor.browser}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">
                  {visitor.timestamp.toLocaleTimeString()}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Top Pages & Conversions */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 size={20} className="text-premium-gold" />
            <h3 className="text-lg font-semibold">Top Pages</h3>
          </div>

          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div key={page.page} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                    <span className="text-sm font-medium">{page.page}</span>
                  </div>
                  <span className="text-sm font-bold">{page.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{page.uniqueVisitors.toLocaleString()} unique</span>
                  <span>{page.avgTimeOnPage}</span>
                  <span>{page.bounceRate}% bounce</span>
                </div>
                {index < topPages.length - 1 && <div className="border-b border-gray-200 mt-2" />}
              </div>
            ))}
          </div>
        </div>

        {/* Conversions */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <MousePointerClick size={20} className="text-premium-gold" />
            <h3 className="text-lg font-semibold">Conversion Tracking</h3>
          </div>

          <div className="space-y-4">
            {conversions.map((conversion) => (
              <div key={conversion.type} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{conversion.type}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold">{conversion.count}</span>
                    <div className={`flex items-center space-x-1 text-xs font-semibold ${
                      conversion.trend > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {conversion.trend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      <span>{Math.abs(conversion.trend)}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Conversion Rate: {conversion.rate}%</span>
                  <div className="w-32 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-premium-gold h-1.5 rounded-full"
                      style={{ width: `${conversion.rate * 10}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Analytics */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign size={20} className="text-premium-gold" />
          <h3 className="text-lg font-semibold">Revenue Analytics</h3>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-green-900">₹{totalRevenue.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">+18.5% from last period</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-blue-900">{totalOrders}</p>
            <p className="text-xs text-blue-600 mt-1">+12.3% from last period</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Avg. Order Value</p>
            <p className="text-2xl font-bold text-purple-900">₹{Math.round(avgOrderValue)}</p>
            <p className="text-xs text-purple-600 mt-1">+5.2% from last period</p>
          </div>
        </div>

        <div className="space-y-2">
          {revenueData.map((day, index) => (
            <div key={day.date} className="flex items-center space-x-4">
              <span className="text-xs text-gray-500 w-24">
                {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(day.revenue / 25000) * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-premium-gold to-orange-500 h-full rounded-full flex items-center justify-end pr-3"
                >
                  <span className="text-xs font-semibold text-white">
                    ₹{day.revenue.toLocaleString()}
                  </span>
                </motion.div>
              </div>
              <span className="text-xs text-gray-600 w-16">{day.orders} orders</span>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin size={20} className="text-premium-gold" />
          <h3 className="text-lg font-semibold">Geographic Distribution</h3>
        </div>

        <div className="space-y-3">
          {locationData.map((location) => (
            <div key={location.location} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{location.location}</span>
                <span className="text-sm font-bold">{location.visitors.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-premium-gold h-2 rounded-full"
                    style={{ width: `${location.percentage}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-12">{location.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
