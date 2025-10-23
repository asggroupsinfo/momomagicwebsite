'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

interface AnalyticsData {
  pageViews: {
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
  popularPages: Array<{
    page: string;
    views: number;
  }>;
  popularMenuItems: Array<{
    name: string;
    views: number;
  }>;
  deviceStats: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('week');

  useEffect(() => {
    loadAnalytics();
  }, [timeRange]);

  const loadAnalytics = async () => {
    try {
      const response = await fetch(`/api/cms/analytics?range=${timeRange}`);
      if (response.ok) {
        const analyticsData = await response.json();
        setData(analyticsData);
      }
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">📈</div>
          <p className="text-golden-glow">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="text-center py-12">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-2xl font-bold text-golden-glow mb-2">
            No Analytics Data
          </h3>
          <p className="text-foreground/70">
            Analytics data will appear once your website receives traffic
          </p>
        </Card>
      </div>
    );
  }

  const totalDevices = data.deviceStats.mobile + data.deviceStats.desktop + data.deviceStats.tablet;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-premium-orange mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-foreground/70">
              Track your website performance and visitor insights
            </p>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2 bg-deep-space p-1 rounded-lg">
            {(['today', 'week', 'month'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  timeRange === range
                    ? 'bg-premium-orange text-pitch-black'
                    : 'text-foreground/70 hover:text-premium-orange'
                }`}
              >
                {range === 'today' ? 'Today' : range === 'week' ? 'This Week' : 'This Month'}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">👁️</span>
                <span className="text-xs text-foreground/60 uppercase">Total Views</span>
              </div>
              <div className="text-3xl font-bold text-premium-orange mb-1">
                {data.pageViews.total.toLocaleString()}
              </div>
              <p className="text-sm text-foreground/60">All time page views</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">📅</span>
                <span className="text-xs text-foreground/60 uppercase">Today</span>
              </div>
              <div className="text-3xl font-bold text-golden-glow mb-1">
                {data.pageViews.today.toLocaleString()}
              </div>
              <p className="text-sm text-foreground/60">Views today</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">📊</span>
                <span className="text-xs text-foreground/60 uppercase">This Week</span>
              </div>
              <div className="text-3xl font-bold text-warm-orange mb-1">
                {data.pageViews.thisWeek.toLocaleString()}
              </div>
              <p className="text-sm text-foreground/60">Views this week</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">📈</span>
                <span className="text-xs text-foreground/60 uppercase">This Month</span>
              </div>
              <div className="text-3xl font-bold text-vegetarian-green mb-1">
                {data.pageViews.thisMonth.toLocaleString()}
              </div>
              <p className="text-sm text-foreground/60">Views this month</p>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <h2 className="text-2xl font-bold text-golden-glow mb-6">
                📄 Popular Pages
              </h2>
              <div className="space-y-4">
                {data.popularPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-premium-orange">
                        #{index + 1}
                      </span>
                      <span className="text-foreground">{page.page}</span>
                    </div>
                    <span className="text-golden-glow font-bold">
                      {page.views.toLocaleString()} views
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Popular Menu Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <h2 className="text-2xl font-bold text-golden-glow mb-6">
                🥟 Popular Menu Items
              </h2>
              <div className="space-y-4">
                {data.popularMenuItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-premium-orange">
                        #{index + 1}
                      </span>
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className="text-golden-glow font-bold">
                      {item.views.toLocaleString()} views
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Device Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">
              📱 Device Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-3">📱</div>
                <div className="text-3xl font-bold text-premium-orange mb-2">
                  {((data.deviceStats.mobile / totalDevices) * 100).toFixed(1)}%
                </div>
                <p className="text-sm text-foreground/70">Mobile</p>
                <p className="text-xs text-foreground/60 mt-1">
                  {data.deviceStats.mobile.toLocaleString()} visits
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">💻</div>
                <div className="text-3xl font-bold text-golden-glow mb-2">
                  {((data.deviceStats.desktop / totalDevices) * 100).toFixed(1)}%
                </div>
                <p className="text-sm text-foreground/70">Desktop</p>
                <p className="text-xs text-foreground/60 mt-1">
                  {data.deviceStats.desktop.toLocaleString()} visits
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">📲</div>
                <div className="text-3xl font-bold text-warm-orange mb-2">
                  {((data.deviceStats.tablet / totalDevices) * 100).toFixed(1)}%
                </div>
                <p className="text-sm text-foreground/70">Tablet</p>
                <p className="text-xs text-foreground/60 mt-1">
                  {data.deviceStats.tablet.toLocaleString()} visits
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
