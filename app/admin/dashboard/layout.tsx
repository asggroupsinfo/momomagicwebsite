'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', href: '/admin/dashboard' },
  { id: 'hero', label: 'Hero CMS', icon: '🎬', href: '/admin/dashboard/hero' },
  { id: 'menu', label: 'Menu Management', icon: '🥟', href: '/admin/dashboard/menu' },
  { id: 'categories', label: 'Categories', icon: '📁', href: '/admin/dashboard/categories' },
  { id: 'about', label: 'About Us CMS', icon: '📖', href: '/admin/dashboard/about' },
  { id: 'contact', label: 'Contact CMS', icon: '📧', href: '/admin/dashboard/contact' },
  { id: 'gallery', label: 'Gallery CMS', icon: '🖼️', href: '/admin/dashboard/gallery' },
  { id: 'testimonials', label: 'Testimonials', icon: '⭐', href: '/admin/dashboard/testimonials' },
  { id: 'combos', label: 'Combo Deals', icon: '🎁', href: '/admin/dashboard/combos' },
  { id: 'branding', label: 'Logo & Branding', icon: '🎨', href: '/admin/dashboard/branding' },
  { id: 'social', label: 'Social Media', icon: '📱', href: '/admin/dashboard/social' },
  { id: 'api', label: 'API Configuration', icon: '🔌', href: '/admin/dashboard/api' },
  { id: 'cta', label: 'CTA Management', icon: '🎯', href: '/admin/dashboard/cta' },
  { id: 'media', label: 'Media Library', icon: '📚', href: '/admin/dashboard/media' },
  { id: 'seo', label: 'SEO Management', icon: '🔍', href: '/admin/dashboard/seo' },
  { id: 'i18n', label: 'Multi-language', icon: '🌍', href: '/admin/dashboard/i18n' },
  { id: 'backup', label: 'Backup & Recovery', icon: '💾', href: '/admin/dashboard/backup' },
  { id: 'users', label: 'User Management', icon: '👥', href: '/admin/dashboard/users' },
  { id: 'security', label: 'Security Settings', icon: '🔒', href: '/admin/dashboard/security' },
  { id: 'settings', label: 'System Settings', icon: '⚙️', href: '/admin/dashboard/settings' },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      
      if (!response.ok) {
        router.push('/admin/login');
        return;
      }

      const data = await response.json();
      setUser(data.user);
      setIsLoading(false);
    } catch (error) {
      router.push('/admin/login');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pitch-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🥟</div>
          <p className="text-golden-glow">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pitch-black flex">
      {/* Sidebar */}
      <motion.aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-deep-space border-r border-charcoal transition-all duration-300 flex flex-col`}
        initial={false}
      >
        {/* Header */}
        <div className="p-4 border-b border-charcoal">
          <div className="flex items-center justify-between">
            {isSidebarOpen && (
              <h2 className="text-xl font-bold text-premium-orange">Admin Panel</h2>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-golden-glow hover:text-premium-orange transition-colors"
            >
              {isSidebarOpen ? '◀' : '▶'}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground/70 hover:bg-charcoal hover:text-premium-orange transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                {isSidebarOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            ))}
          </div>
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-charcoal">
          {isSidebarOpen ? (
            <div className="mb-3">
              <p className="text-sm font-semibold text-foreground">{user?.username}</p>
              <p className="text-xs text-foreground/60">{user?.email}</p>
            </div>
          ) : (
            <div className="text-center mb-3">
              <div className="text-2xl">👤</div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 bg-warm-orange text-pitch-black rounded-lg hover:bg-burnt-orange transition-colors text-sm font-semibold"
          >
            {isSidebarOpen ? 'Logout' : '🚪'}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
