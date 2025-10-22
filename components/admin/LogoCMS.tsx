'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, AlertCircle, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { ImageInput } from './ImageInput';

interface LogoContent {
  headerLogo: string;
  footerLogo: string;
  favicon: string;
  appleTouchIcon: string;
}

export const LogoCMS: React.FC = () => {
  const [content, setContent] = useState<LogoContent>({
    headerLogo: '/images/logo.png',
    footerLogo: '/images/logo.png',
    favicon: '/favicon.png',
    appleTouchIcon: '/apple-touch-icon.png',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Logo settings updated successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setContent({
      headerLogo: '/images/logo.png',
      footerLogo: '/images/logo.png',
      favicon: '/favicon.png',
      appleTouchIcon: '/apple-touch-icon.png',
    });
    setMessage({ type: 'success', text: 'Reset to default values' });
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Logo & Branding Management
          </h2>
          <p className="text-gray-600 mt-1">Manage your website logos and branding assets</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw size={18} />
            <span>Reset</span>
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

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Header Logo */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <ImageIcon size={24} className="text-premium-gold" />
            <h3 className="text-lg font-semibold">Header Logo</h3>
          </div>
          <div className="space-y-4">
            {/* Header Logo - Enhanced with Media Library */}
            <ImageInput
              label="Logo URL"
              value={content.headerLogo}
              onChange={(value) => setContent({ ...content, headerLogo: value })}
              placeholder="/images/logo.png or https://example.com/logo.png"
              sizeGuideline="Recommended: 200×60px"
              tip="Use PNG with transparent background. Appears in website header."
              fileType="image"
            />
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
              {content.headerLogo ? (
                <img 
                  src={content.headerLogo} 
                  alt="Header Logo Preview" 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="60"%3E%3Crect fill="%23ddd" width="200" height="60"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ELogo Preview%3C/text%3E%3C/svg%3E';
                  }}
                />
              ) : (
                <p className="text-gray-400 text-sm">Logo preview will appear here</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <ImageIcon size={24} className="text-premium-gold" />
            <h3 className="text-lg font-semibold">Footer Logo</h3>
          </div>
          <div className="space-y-4">
            {/* Footer Logo - Enhanced with Media Library */}
            <ImageInput
              label="Logo URL"
              value={content.footerLogo}
              onChange={(value) => setContent({ ...content, footerLogo: value })}
              placeholder="/images/logo.png or https://example.com/logo.png"
              sizeGuideline="Recommended: 200×60px"
              tip="Can be same as header logo or a different variant for dark backgrounds."
              fileType="image"
            />
            <div className="bg-black rounded-lg p-4 flex items-center justify-center h-24">
              {content.footerLogo ? (
                <img 
                  src={content.footerLogo} 
                  alt="Footer Logo Preview" 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="60"%3E%3Crect fill="%23333" width="200" height="60"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ELogo Preview%3C/text%3E%3C/svg%3E';
                  }}
                />
              ) : (
                <p className="text-gray-400 text-sm">Logo preview will appear here</p>
              )}
            </div>
          </div>
        </div>

        {/* Favicon */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <ImageIcon size={24} className="text-premium-gold" />
            <h3 className="text-lg font-semibold">Favicon</h3>
          </div>
          <div className="space-y-4">
            {/* Favicon - Enhanced with Media Library */}
            <ImageInput
              label="Favicon URL"
              value={content.favicon}
              onChange={(value) => setContent({ ...content, favicon: value })}
              placeholder="/favicon.png or /favicon.ico"
              sizeGuideline="Required: 32×32px"
              tip="Use PNG or ICO format. Appears in browser tab."
              fileType="image"
            />
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
              {content.favicon ? (
                <img 
                  src={content.favicon} 
                  alt="Favicon Preview" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"%3E%3Crect fill="%23ddd" width="32" height="32"/%3E%3C/svg%3E';
                  }}
                />
              ) : (
                <p className="text-gray-400 text-sm">Favicon preview (32×32)</p>
              )}
            </div>
          </div>
        </div>

        {/* Apple Touch Icon */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <ImageIcon size={24} className="text-premium-gold" />
            <h3 className="text-lg font-semibold">Apple Touch Icon</h3>
          </div>
          <div className="space-y-4">
            {/* Apple Touch Icon - Enhanced with Media Library */}
            <ImageInput
              label="Icon URL"
              value={content.appleTouchIcon}
              onChange={(value) => setContent({ ...content, appleTouchIcon: value })}
              placeholder="/apple-touch-icon.png"
              sizeGuideline="Required: 180×180px"
              tip="Use PNG format. Appears when users save website to iOS home screen."
              fileType="image"
            />
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
              {content.appleTouchIcon ? (
                <img 
                  src={content.appleTouchIcon} 
                  alt="Apple Touch Icon Preview" 
                  className="w-16 h-16 object-contain rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="180" height="180"%3E%3Crect fill="%23ddd" width="180" height="180"/%3E%3C/svg%3E';
                  }}
                />
              ) : (
                <p className="text-gray-400 text-sm">Icon preview (180×180)</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Image Size Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <p className="font-semibold">Header/Footer Logo:</p>
            <p>• Size: 200×60px (width × height)</p>
            <p>• Format: PNG with transparent background</p>
            <p>• Max file size: 100KB</p>
          </div>
          <div>
            <p className="font-semibold">Favicon:</p>
            <p>• Size: 32×32px (square)</p>
            <p>• Format: PNG or ICO</p>
            <p>• Max file size: 50KB</p>
          </div>
          <div>
            <p className="font-semibold">Apple Touch Icon:</p>
            <p>• Size: 180×180px (square)</p>
            <p>• Format: PNG</p>
            <p>• Max file size: 100KB</p>
          </div>
          <div>
            <p className="font-semibold">Tips:</p>
            <p>• Use high-quality images</p>
            <p>• Optimize for web (compress)</p>
            <p>• Test on different devices</p>
          </div>
        </div>
      </div>
    </div>
  );
};
