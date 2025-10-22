'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, AlertCircle, CheckCircle, Search, Globe, FileText, Settings, Eye, ExternalLink } from 'lucide-react';

interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
  author: string;
  
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  
  robotsTxt: string;
  sitemapEnabled: boolean;
  canonicalUrl: string;
  
  businessName: string;
  businessAddress: string;
  businessPhone: string;
  businessHours: string;
  businessType: string;
}

export const SEOCMS: React.FC = () => {
  const [seoSettings, setSeoSettings] = useState<SEOSettings>({
    title: 'Momos Magic - Best Momos in Sherghati | Award-Winning Quality',
    description: 'Experience the magic of our exclusive Kurkure and Pizza Momos in Sherghati. Award-winning quality, 100% vegetarian, FSSAI certified. Order now!',
    keywords: 'momos, kurkure momos, pizza momos, sherghati food, bihar momos, best momos, vegetarian food, street food',
    author: 'Momos Magic',
    
    ogTitle: 'Momos Magic - Best Momos in Sherghati',
    ogDescription: 'Experience the magic of our exclusive Kurkure and Pizza Momos. Award-winning quality, unbeatable taste!',
    ogImage: '/images/og-image.jpg',
    ogType: 'website',
    
    twitterCard: 'summary_large_image',
    twitterSite: '@MomosMagic',
    twitterCreator: '@MomosMagic',
    
    robotsTxt: `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://www.momomegics.com/sitemap.xml`,
    sitemapEnabled: true,
    canonicalUrl: 'https://www.momomegics.com',
    
    businessName: 'Momos Magic',
    businessAddress: 'Naya Bazar, Near Post Office, Sherghati, Bihar 824211',
    businessPhone: '+91 9955955191',
    businessHours: 'Monday-Sunday: 10:00 AM - 10:00 PM',
    businessType: 'Restaurant'
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [seoScore, setSeoScore] = useState(85);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const requiredFields = ['title', 'description', 'ogTitle', 'ogDescription'];
      const missingFields = requiredFields.filter(field => !seoSettings[field as keyof SEOSettings]);
      
      if (missingFields.length > 0) {
        setMessage({ 
          type: 'error', 
          text: `Missing required fields: ${missingFields.join(', ')}` 
        });
        setIsSaving(false);
        return;
      }

      if (seoSettings.title.length > 60) {
        setMessage({ type: 'error', text: 'Title should be under 60 characters for optimal SEO' });
        setIsSaving(false);
        return;
      }

      if (seoSettings.description.length > 160) {
        setMessage({ type: 'error', text: 'Description should be under 160 characters for optimal SEO' });
        setIsSaving(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'SEO settings updated successfully!' });
      
      calculateSEOScore();
      
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const calculateSEOScore = () => {
    let score = 0;
    
    if (seoSettings.title && seoSettings.title.length <= 60) score += 15;
    if (seoSettings.description && seoSettings.description.length <= 160) score += 15;
    if (seoSettings.keywords) score += 10;
    
    if (seoSettings.ogTitle) score += 15;
    if (seoSettings.ogDescription) score += 15;
    if (seoSettings.ogImage) score += 10;
    
    if (seoSettings.robotsTxt) score += 10;
    if (seoSettings.sitemapEnabled) score += 10;
    
    setSeoScore(score);
  };

  const updateSetting = (field: keyof SEOSettings, value: any) => {
    setSeoSettings({ ...seoSettings, [field]: value });
  };

  const tabs = [
    { id: 'basic', label: 'Basic SEO', icon: Search },
    { id: 'social', label: 'Social Media', icon: Globe },
    { id: 'technical', label: 'Technical', icon: Settings },
    { id: 'local', label: 'Local SEO', icon: FileText }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            SEO Management
          </h2>
          <p className="text-gray-600 mt-1">Optimize your website for search engines</p>
        </div>
        <div className="flex items-center space-x-3">
          {/* SEO Score */}
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
            <Search size={18} className="text-premium-gold" />
            <span className="text-sm font-medium">SEO Score:</span>
            <span className={`text-lg font-bold ${
              seoScore >= 80 ? 'text-green-600' : 
              seoScore >= 60 ? 'text-orange-600' : 'text-red-600'
            }`}>
              {seoScore}%
            </span>
          </div>
          <button
            onClick={() => calculateSEOScore()}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw size={18} />
            <span>Recalculate</span>
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center space-x-2 px-6 py-2 bg-premium-gold text-black font-semibold rounded-lg hover:bg-charcoal-black hover:text-white transition-all disabled:opacity-50"
          >
            <Save size={18} />
            <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {/* Message */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center space-x-2 p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{message.text}</span>
        </motion.div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-premium-gold text-premium-gold'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'basic' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={seoSettings.title}
                    onChange={(e) => updateSetting('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Enter page title"
                  />
                  <p className={`text-xs mt-1 ${
                    seoSettings.title.length > 60 ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {seoSettings.title.length}/60 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={seoSettings.description}
                    onChange={(e) => updateSetting('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Enter meta description"
                  />
                  <p className={`text-xs mt-1 ${
                    seoSettings.description.length > 160 ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {seoSettings.description.length}/160 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords
                  </label>
                  <input
                    type="text"
                    value={seoSettings.keywords}
                    onChange={(e) => updateSetting('keywords', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={seoSettings.author}
                    onChange={(e) => updateSetting('author', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Author name"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Eye size={20} className="mr-2 text-premium-gold" />
                  Search Preview
                </h3>
                <div className="bg-white p-4 rounded border">
                  <h4 className="text-blue-600 text-lg hover:underline cursor-pointer">
                    {seoSettings.title || 'Page Title'}
                  </h4>
                  <p className="text-green-700 text-sm">
                    {seoSettings.canonicalUrl || 'https://www.momomegics.com'}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    {seoSettings.description || 'Meta description will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Open Graph (Facebook)</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={seoSettings.ogTitle}
                    onChange={(e) => updateSetting('ogTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Open Graph title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={seoSettings.ogDescription}
                    onChange={(e) => updateSetting('ogDescription', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Open Graph description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Image URL
                  </label>
                  <input
                    type="text"
                    value={seoSettings.ogImage}
                    onChange={(e) => updateSetting('ogImage', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="/images/og-image.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Recommended: 1200×630px</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OG Type
                  </label>
                  <select
                    value={seoSettings.ogType}
                    onChange={(e) => updateSetting('ogType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                  >
                    <option value="website">Website</option>
                    <option value="article">Article</option>
                    <option value="business.business">Business</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Twitter Card</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Type
                  </label>
                  <select
                    value={seoSettings.twitterCard}
                    onChange={(e) => updateSetting('twitterCard', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                  >
                    <option value="summary">Summary</option>
                    <option value="summary_large_image">Summary Large Image</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Twitter Site
                  </label>
                  <input
                    type="text"
                    value={seoSettings.twitterSite}
                    onChange={(e) => updateSetting('twitterSite', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="@MomosMagic"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Twitter Creator
                  </label>
                  <input
                    type="text"
                    value={seoSettings.twitterCreator}
                    onChange={(e) => updateSetting('twitterCreator', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="@MomosMagic"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Canonical URL
                  </label>
                  <input
                    type="text"
                    value={seoSettings.canonicalUrl}
                    onChange={(e) => updateSetting('canonicalUrl', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="https://www.momomegics.com"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={seoSettings.sitemapEnabled}
                      onChange={(e) => updateSetting('sitemapEnabled', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm font-medium">Enable XML Sitemap</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">Automatically generates sitemap.xml</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Robots.txt Content
                  </label>
                  <textarea
                    value={seoSettings.robotsTxt}
                    onChange={(e) => updateSetting('robotsTxt', e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none font-mono text-sm"
                    placeholder="User-agent: *&#10;Allow: /"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'local' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={seoSettings.businessName}
                    onChange={(e) => updateSetting('businessName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Momos Magic"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Address
                  </label>
                  <textarea
                    value={seoSettings.businessAddress}
                    onChange={(e) => updateSetting('businessAddress', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Full business address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Phone
                  </label>
                  <input
                    type="text"
                    value={seoSettings.businessPhone}
                    onChange={(e) => updateSetting('businessPhone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="+91 9955955191"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Hours
                  </label>
                  <input
                    type="text"
                    value={seoSettings.businessHours}
                    onChange={(e) => updateSetting('businessHours', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="Monday-Sunday: 10:00 AM - 10:00 PM"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    value={seoSettings.businessType}
                    onChange={(e) => updateSetting('businessType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                  >
                    <option value="Restaurant">Restaurant</option>
                    <option value="Food">Food</option>
                    <option value="LocalBusiness">Local Business</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* SEO Checklist */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">SEO Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className={`flex items-center space-x-2 ${
              seoSettings.title && seoSettings.title.length <= 60 ? 'text-green-600' : 'text-red-600'
            }`}>
              <CheckCircle size={16} />
              <span className="text-sm">Title tag optimized (≤60 chars)</span>
            </div>
            <div className={`flex items-center space-x-2 ${
              seoSettings.description && seoSettings.description.length <= 160 ? 'text-green-600' : 'text-red-600'
            }`}>
              <CheckCircle size={16} />
              <span className="text-sm">Meta description optimized (≤160 chars)</span>
            </div>
            <div className={`flex items-center space-x-2 ${
              seoSettings.keywords ? 'text-green-600' : 'text-red-600'
            }`}>
              <CheckCircle size={16} />
              <span className="text-sm">Keywords defined</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className={`flex items-center space-x-2 ${
              seoSettings.ogTitle && seoSettings.ogDescription ? 'text-green-600' : 'text-red-600'
            }`}>
              <CheckCircle size={16} />
              <span className="text-sm">Open Graph tags configured</span>
            </div>
            <div className={`flex items-center space-x-2 ${
              seoSettings.robotsTxt ? 'text-green-600' : 'text-red-600'
            }`}>
              <CheckCircle size={16} />
              <span className="text-sm">Robots.txt configured</span>
            </div>
            <div className={`flex items-center space-x-2 ${
              seoSettings.sitemapEnabled ? 'text-green-600' : 'text-red-600'
            }`}>
              <CheckCircle size={16} />
              <span className="text-sm">XML Sitemap enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
