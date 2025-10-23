'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, AlertCircle, CheckCircle, ExternalLink, Facebook, Instagram, Twitter, MessageCircle, Youtube, Linkedin } from 'lucide-react';

interface SocialMedia {
  platform: string;
  username: string;
  url: string;
  isActive: boolean;
  icon: any;
  color: string;
}

export const SocialMediaCMS: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([
    {
      platform: 'Facebook',
      username: '@MomosMagicSherghati',
      url: 'https://facebook.com/momomagic',
      isActive: true,
      icon: Facebook,
      color: '#1877F2'
    },
    {
      platform: 'Instagram',
      username: '@momomagic_sherghati',
      url: 'https://instagram.com/momomagic',
      isActive: true,
      icon: Instagram,
      color: '#E4405F'
    },
    {
      platform: 'Twitter / X',
      username: '@MomosMagic',
      url: 'https://twitter.com/momomagic',
      isActive: false,
      icon: Twitter,
      color: '#000000'
    },
    {
      platform: 'WhatsApp',
      username: '+91 9955955191',
      url: 'https://wa.me/919955955191',
      isActive: true,
      icon: MessageCircle,
      color: '#25D366'
    },
    {
      platform: 'YouTube',
      username: '@MomosMagicOfficial',
      url: 'https://youtube.com/@momomagic',
      isActive: false,
      icon: Youtube,
      color: '#FF0000'
    },
    {
      platform: 'LinkedIn',
      username: 'Momos Magic',
      url: 'https://linkedin.com/company/momomagic',
      isActive: false,
      icon: Linkedin,
      color: '#0A66C2'
    }
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [shareSettings, setShareSettings] = useState({
    enableSharing: true,
    shareTitle: 'Check out Momos Magic - Best Momos in Sherghati!',
    shareDescription: 'Experience the magic of our exclusive Kurkure and Pizza Momos. Award-winning quality, unbeatable taste!',
    shareImage: '/images/share-image.jpg'
  });

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const invalidUrls = socialMedia.filter(sm => {
        if (!sm.url || !sm.isActive) return false;
        try {
          new URL(sm.url);
          return false;
        } catch {
          return true;
        }
      });

      if (invalidUrls.length > 0) {
        setMessage({ 
          type: 'error', 
          text: `Invalid URLs found for: ${invalidUrls.map(s => s.platform).join(', ')}` 
        });
        setIsSaving(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Social media settings updated successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setSocialMedia([
      {
        platform: 'Facebook',
        username: '@MomosMagicSherghati',
        url: 'https://facebook.com/momomagic',
        isActive: true,
        icon: Facebook,
        color: '#1877F2'
      },
      {
        platform: 'Instagram',
        username: '@momomagic_sherghati',
        url: 'https://instagram.com/momomagic',
        isActive: true,
        icon: Instagram,
        color: '#E4405F'
      },
      {
        platform: 'Twitter / X',
        username: '@MomosMagic',
        url: 'https://twitter.com/momomagic',
        isActive: false,
        icon: Twitter,
        color: '#000000'
      },
      {
        platform: 'WhatsApp',
        username: '+91 9955955191',
        url: 'https://wa.me/919955955191',
        isActive: true,
        icon: MessageCircle,
        color: '#25D366'
      },
      {
        platform: 'YouTube',
        username: '@MomosMagicOfficial',
        url: 'https://youtube.com/@momomagic',
        isActive: false,
        icon: Youtube,
        color: '#FF0000'
      },
      {
        platform: 'LinkedIn',
        username: 'Momos Magic',
        url: 'https://linkedin.com/company/momomagic',
        isActive: false,
        icon: Linkedin,
        color: '#0A66C2'
      }
    ]);
    setMessage({ type: 'success', text: 'Settings reset to defaults' });
    setTimeout(() => setMessage(null), 2000);
  };

  const updateSocialMedia = (platform: string, field: keyof SocialMedia, value: any) => {
    setSocialMedia(socialMedia.map(sm =>
      sm.platform === platform ? { ...sm, [field]: value } : sm
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Social Media Integration
          </h2>
          <p className="text-gray-600 mt-1">Manage social media links and sharing settings</p>
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
            className="flex items-center space-x-2 px-6 py-2 bg-golden-glow text-black font-semibold rounded-lg hover:bg-pitch-black hover:text-white transition-all disabled:opacity-50"
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

      {/* Social Media Platforms */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Social Media Platforms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialMedia.map((sm) => {
            const Icon = sm.icon;
            return (
              <motion.div
                key={sm.platform}
                layout
                className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-all"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${sm.color}15` }}
                    >
                      <Icon size={24} style={{ color: sm.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{sm.platform}</h4>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={sm.isActive}
                          onChange={(e) => updateSocialMedia(sm.platform, 'isActive', e.target.checked)}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-600">Active</span>
                      </label>
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 font-medium">Username / Handle</label>
                      <input
                        type="text"
                        value={sm.username}
                        onChange={(e) => updateSocialMedia(sm.platform, 'username', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                        placeholder="@username"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 font-medium">Profile URL</label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={sm.url}
                          onChange={(e) => updateSocialMedia(sm.platform, 'url', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                          placeholder="https://..."
                        />
                        {sm.url && (
                          <a
                            href={sm.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            title="Test link"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Social Sharing Settings */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Social Sharing Settings</h3>
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={shareSettings.enableSharing}
              onChange={(e) => setShareSettings({ ...shareSettings, enableSharing: e.target.checked })}
              className="rounded"
            />
            <span className="text-sm font-medium">Enable social sharing buttons on website</span>
          </label>

          {shareSettings.enableSharing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4 pl-6 border-l-2 border-golden-glow"
            >
              <div>
                <label className="text-sm text-gray-600 font-medium">Share Title</label>
                <input
                  type="text"
                  value={shareSettings.shareTitle}
                  onChange={(e) => setShareSettings({ ...shareSettings, shareTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                  placeholder="Title shown when sharing"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 font-medium">Share Description</label>
                <textarea
                  value={shareSettings.shareDescription}
                  onChange={(e) => setShareSettings({ ...shareSettings, shareDescription: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                  placeholder="Description shown when sharing"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 font-medium">Share Image URL</label>
                <input
                  type="text"
                  value={shareSettings.shareImage}
                  onChange={(e) => setShareSettings({ ...shareSettings, shareImage: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                  placeholder="/images/share-image.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">Recommended: 1200×630px (Facebook/Twitter optimal size)</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total Platforms</p>
          <p className="text-2xl font-bold text-blue-900">{socialMedia.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Active Platforms</p>
          <p className="text-2xl font-bold text-green-900">{socialMedia.filter(s => s.isActive).length}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-sm text-orange-600">Sharing Enabled</p>
          <p className="text-2xl font-bold text-orange-900">{shareSettings.enableSharing ? 'Yes' : 'No'}</p>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Social Icons Preview</h3>
        <div className="flex items-center space-x-4">
          {socialMedia.filter(sm => sm.isActive).map((sm) => {
            const Icon = sm.icon;
            return (
              <a
                key={sm.platform}
                href={sm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: sm.color }}
                title={sm.platform}
              >
                <Icon size={24} className="text-white" />
              </a>
            );
          })}
        </div>
        {socialMedia.filter(sm => sm.isActive).length === 0 && (
          <p className="text-gray-500 text-sm">No active social media platforms</p>
        )}
      </div>
    </div>
  );
};
