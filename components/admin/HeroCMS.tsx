'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, Eye, AlertCircle, CheckCircle } from 'lucide-react';
import type { HeroContent } from '@/lib/cms/content';
import { ImageInput } from './ImageInput';

export const HeroCMS: React.FC = () => {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/cms/hero');
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
      setMessage({ type: 'error', text: 'Failed to load content' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!content) return;

    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/cms/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Hero content updated successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update content' });
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    loadContent();
    setMessage({ type: 'success', text: 'Content reset to saved version' });
    setTimeout(() => setMessage(null), 2000);
  };

  const updateBadge = (index: number, value: string) => {
    if (!content) return;
    const newBadges = [...content.badges];
    newBadges[index] = value;
    setContent({ ...content, badges: newBadges });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw size={32} className="animate-spin text-golden-glow" />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-center py-12">
        <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
        <p className="text-gray-600">Failed to load content</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hero Section CMS
          </h2>
          <p className="text-gray-600 mt-1">Edit your homepage hero section content</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye size={18} />
            <span>{showPreview ? 'Hide' : 'Show'} Preview</span>
          </button>
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

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Main Content */}
        <div className="space-y-6">
          {/* Headline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Headline
            </label>
            <input
              type="text"
              value={content.headline}
              onChange={(e) => setContent({ ...content, headline: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
              placeholder="Enter main headline"
            />
          </div>

          {/* Subheadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subheadline
            </label>
            <textarea
              value={content.subheadline}
              onChange={(e) => setContent({ ...content, subheadline: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
              placeholder="Enter subheadline"
            />
          </div>

          {/* Video URL - Enhanced with Media Library */}
          <ImageInput
            label="Background Video URL"
            value={content.videoUrl}
            onChange={(value) => setContent({ ...content, videoUrl: value })}
            placeholder="/hero-video.mp4 or https://example.com/video.mp4"
            sizeGuideline="Recommended: 1920×1080px (Full HD)"
            tip="Use MP4 format for best compatibility. Keep file size under 10MB for fast loading."
            fileType="video"
          />

          {/* Fallback Image - Enhanced with Media Library */}
          <ImageInput
            label="Fallback Image URL"
            value={content.fallbackImage}
            onChange={(value) => setContent({ ...content, fallbackImage: value })}
            placeholder="/hero-bg.jpg or https://example.com/image.jpg"
            sizeGuideline="Recommended: 1920×1080px (Full HD)"
            tip="Use JPG or WebP format. Shows on mobile devices and when video fails to load."
            fileType="image"
          />
        </div>

        {/* Right Column - Badges & CTAs */}
        <div className="space-y-6">
          {/* Badges */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Achievement Badges
            </label>
            <div className="space-y-3">
              {content.badges.map((badge, index) => (
                <input
                  key={index}
                  type="text"
                  value={badge}
                  onChange={(e) => updateBadge(index, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                  placeholder={`Badge ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Button
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={content.primaryCTA.text}
                onChange={(e) =>
                  setContent({
                    ...content,
                    primaryCTA: { ...content.primaryCTA, text: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                placeholder="Button text"
              />
              <input
                type="text"
                value={content.primaryCTA.link}
                onChange={(e) =>
                  setContent({
                    ...content,
                    primaryCTA: { ...content.primaryCTA, link: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                placeholder="Button link"
              />
            </div>
          </div>

          {/* Secondary CTA */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Button
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={content.secondaryCTA.text}
                onChange={(e) =>
                  setContent({
                    ...content,
                    secondaryCTA: { ...content.secondaryCTA, text: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                placeholder="Button text"
              />
              <input
                type="text"
                value={content.secondaryCTA.link}
                onChange={(e) =>
                  setContent({
                    ...content,
                    secondaryCTA: { ...content.secondaryCTA, link: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                placeholder="Button link"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t pt-6 mt-6"
        >
          <h3 className="text-lg font-semibold mb-4">Preview</h3>
          <div className="bg-black text-white p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-golden-glow mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {content.headline}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{content.subheadline}</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {content.badges.map((badge, index) => (
                <div key={index} className="bg-white/10 px-3 py-2 rounded text-sm">
                  {badge}
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <button className="bg-golden-glow text-black px-6 py-3 rounded-lg font-semibold">
                {content.primaryCTA.text}
              </button>
              <button className="border border-golden-glow text-golden-glow px-6 py-3 rounded-lg font-semibold">
                {content.secondaryCTA.text}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
