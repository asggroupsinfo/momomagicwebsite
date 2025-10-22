'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Menu, 
  Info, 
  Phone, 
  Upload, 
  BarChart3, 
  LogOut,
  Loader2
} from 'lucide-react';
import { HeroCMS } from '@/components/admin/HeroCMS';
import { MenuCMS } from '@/components/admin/MenuCMS';
import { AboutCMS } from '@/components/admin/AboutCMS';
import { ContactCMS } from '@/components/admin/ContactCMS';

interface AdminUser {
  username: string;
  role: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify');
      const data = await response.json();

      if (data.success) {
        setUser(data.user);
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={48} className="animate-spin text-premium-gold mx-auto mb-4" />
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'hero', label: 'Hero Section', icon: ImageIcon },
    { id: 'menu', label: 'Menu', icon: Menu },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'media', label: 'Media Library', icon: Upload },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-premium-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Momos Magic Admin
              </h1>
              <p className="text-sm text-gray-300">Welcome back, {user.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-premium-gold text-black font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Dashboard Overview
                  </h2>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm opacity-90">Total Views</p>
                          <p className="text-3xl font-bold mt-2">12,543</p>
                        </div>
                        <BarChart3 size={40} className="opacity-50" />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm opacity-90">Menu Items</p>
                          <p className="text-3xl font-bold mt-2">24</p>
                        </div>
                        <Menu size={40} className="opacity-50" />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm opacity-90">Media Files</p>
                          <p className="text-3xl font-bold mt-2">48</p>
                        </div>
                        <Upload size={40} className="opacity-50" />
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        onClick={() => setActiveTab('hero')}
                        className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-premium-gold hover:bg-gray-50 transition-all"
                      >
                        <ImageIcon size={24} className="text-premium-gold" />
                        <div className="text-left">
                          <p className="font-semibold">Edit Hero Section</p>
                          <p className="text-sm text-gray-600">Update headlines and CTAs</p>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveTab('menu')}
                        className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-premium-gold hover:bg-gray-50 transition-all"
                      >
                        <Menu size={24} className="text-premium-gold" />
                        <div className="text-left">
                          <p className="font-semibold">Manage Menu</p>
                          <p className="text-sm text-gray-600">Add or edit menu items</p>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveTab('media')}
                        className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-premium-gold hover:bg-gray-50 transition-all"
                      >
                        <Upload size={24} className="text-premium-gold" />
                        <div className="text-left">
                          <p className="font-semibold">Upload Media</p>
                          <p className="text-sm text-gray-600">Add images and videos</p>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveTab('analytics')}
                        className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-premium-gold hover:bg-gray-50 transition-all"
                      >
                        <BarChart3 size={24} className="text-premium-gold" />
                        <div className="text-left">
                          <p className="font-semibold">View Analytics</p>
                          <p className="text-sm text-gray-600">Check site performance</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hero' && <HeroCMS />}

              {activeTab === 'menu' && <MenuCMS />}

              {activeTab === 'about' && <AboutCMS />}

              {activeTab === 'contact' && <ContactCMS />}

              {activeTab === 'media' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Media Library
                  </h2>
                  <p className="text-gray-600">Media library coming soon...</p>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Analytics Dashboard
                  </h2>
                  <p className="text-gray-600">Analytics coming soon...</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
