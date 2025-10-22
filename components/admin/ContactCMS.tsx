'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, Plus, Trash2, AlertCircle, CheckCircle } from 'lucide-react';
import type { ContactContent } from '@/lib/cms/content';

export const ContactCMS: React.FC = () => {
  const [content, setContent] = useState<ContactContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/cms/contact');
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
      const response = await fetch('/api/cms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Contact content updated successfully!' });
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

  const updateService = (index: number, value: string) => {
    if (!content) return;
    const newServices = [...content.services];
    newServices[index] = value;
    setContent({ ...content, services: newServices });
  };

  const addService = () => {
    if (!content) return;
    setContent({ ...content, services: [...content.services, 'New service'] });
  };

  const removeService = (index: number) => {
    if (!content) return;
    setContent({ ...content, services: content.services.filter((_, i) => i !== index) });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw size={32} className="animate-spin text-premium-gold" />
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
            Contact Information CMS
          </h2>
          <p className="text-gray-600 mt-1">Update contact details and services</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={loadContent}
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
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{message.text}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Contact Details */}
        <div className="space-y-6">
          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={content.address.line1}
                onChange={(e) =>
                  setContent({
                    ...content,
                    address: { ...content.address, line1: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                placeholder="Address line 1"
              />
              <input
                type="text"
                value={content.address.line2}
                onChange={(e) =>
                  setContent({
                    ...content,
                    address: { ...content.address, line2: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                placeholder="Address line 2"
              />
              <input
                type="text"
                value={content.address.line3}
                onChange={(e) =>
                  setContent({
                    ...content,
                    address: { ...content.address, line3: e.target.value },
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                placeholder="Address line 3"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              value={content.phone}
              onChange={(e) => setContent({ ...content, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={content.email}
              onChange={(e) => setContent({ ...content, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
              placeholder="info@example.com"
            />
          </div>

          {/* Business Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Hours
            </label>
            <input
              type="text"
              value={content.hours}
              onChange={(e) => setContent({ ...content, hours: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
              placeholder="Monday-Sunday: 10:00 AM - 10:00 PM"
            />
          </div>

          {/* Map URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Google Maps URL
            </label>
            <input
              type="text"
              value={content.mapUrl}
              onChange={(e) => setContent({ ...content, mapUrl: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
              placeholder="https://maps.google.com/..."
            />
          </div>
        </div>

        {/* Right Column - Services */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Services Offered
            </label>
            <button
              onClick={addService}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Plus size={16} />
              <span>Add Service</span>
            </button>
          </div>
          <div className="space-y-3">
            {content.services.map((service, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => updateService(index, e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                  placeholder={`Service ${index + 1}`}
                />
                <button
                  onClick={() => removeService(index)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Preview Card */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Address:</p>
                <p className="text-gray-600">
                  {content.address.line1}<br />
                  {content.address.line2}<br />
                  {content.address.line3}
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Phone:</p>
                <p className="text-gray-600">{content.phone}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-600">{content.email}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Hours:</p>
                <p className="text-gray-600">{content.hours}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Services:</p>
                <ul className="list-disc list-inside text-gray-600">
                  {content.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
