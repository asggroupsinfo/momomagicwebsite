'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContentAnalytics } from '@/components/cms/ContentAnalytics';

interface ContactData {
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
  };
  phone: string;
  website: string;
  businessHours: {
    weekdays: string;
    weekends: string;
    note: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  mapEmbedUrl: string;
}

export default function ContactCMSPage() {
  const [contactData, setContactData] = useState<ContactData>({
    address: {
      line1: 'Naya Bazar, Near Post Office',
      line2: '',
      city: 'Sherghati',
      state: 'Bihar',
      pincode: '824211',
    },
    phone: '+91 9955955191',
    website: 'www.momomegics.com',
    businessHours: {
      weekdays: '10:00 AM - 10:00 PM',
      weekends: '10:00 AM - 10:00 PM',
      note: 'Open Every Day',
    },
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
    },
    mapEmbedUrl: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadContactData();
  }, []);

  const loadContactData = async () => {
    try {
      const response = await fetch('/api/cms/contact');
      if (response.ok) {
        const data = await response.json();
        setContactData(data);
      }
    } catch (error) {
      console.error('Error loading contact data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveContactData = async () => {
    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/cms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setMessage('✅ Contact information saved successfully!');
      } else {
        setMessage('❌ Failed to save contact information');
      }
    } catch (error) {
      setMessage('❌ Error saving contact information');
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">📞</div>
          <p className="text-golden-glow">Loading contact information...</p>
        </div>
      </div>
    );
  }

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
              Contact Information CMS
            </h1>
            <p className="text-foreground/70">
              Manage your business contact details
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={saveContactData}
            disabled={isSaving}
          >
            {isSaving ? '⏳ Saving...' : '💾 Save Changes'}
          </Button>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg ${
              message.includes('✅')
                ? 'bg-vegetarian-green/20 border border-vegetarian-green'
                : 'bg-warm-orange/20 border border-warm-orange'
            }`}
          >
            <p className="text-foreground">{message}</p>
          </motion.div>
        )}

        <div className="space-y-6">
          {/* Address Section */}
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">📍 Address</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Address Line 1
                </label>
                <input
                  type="text"
                  value={contactData.address.line1}
                  onChange={(e) => setContactData({
                    ...contactData,
                    address: { ...contactData.address, line1: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="Naya Bazar, Near Post Office"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Address Line 2 (Optional)
                </label>
                <input
                  type="text"
                  value={contactData.address.line2}
                  onChange={(e) => setContactData({
                    ...contactData,
                    address: { ...contactData.address, line2: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="Additional address details"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={contactData.address.city}
                    onChange={(e) => setContactData({
                      ...contactData,
                      address: { ...contactData.address, city: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={contactData.address.state}
                    onChange={(e) => setContactData({
                      ...contactData,
                      address: { ...contactData.address, state: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={contactData.address.pincode}
                    onChange={(e) => setContactData({
                      ...contactData,
                      address: { ...contactData.address, pincode: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Details */}
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">📞 Contact Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={contactData.phone}
                  onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="+91 9955955191"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Website
                </label>
                <input
                  type="text"
                  value={contactData.website}
                  onChange={(e) => setContactData({ ...contactData, website: e.target.value })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="www.momomegics.com"
                />
              </div>
            </div>
          </Card>

          {/* Business Hours */}
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">⏰ Business Hours</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Weekdays
                </label>
                <input
                  type="text"
                  value={contactData.businessHours.weekdays}
                  onChange={(e) => setContactData({
                    ...contactData,
                    businessHours: { ...contactData.businessHours, weekdays: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="10:00 AM - 10:00 PM"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Weekends
                </label>
                <input
                  type="text"
                  value={contactData.businessHours.weekends}
                  onChange={(e) => setContactData({
                    ...contactData,
                    businessHours: { ...contactData.businessHours, weekends: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="10:00 AM - 10:00 PM"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Note
                </label>
                <input
                  type="text"
                  value={contactData.businessHours.note}
                  onChange={(e) => setContactData({
                    ...contactData,
                    businessHours: { ...contactData.businessHours, note: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="Open Every Day"
                />
              </div>
            </div>
          </Card>

          {/* Social Media */}
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">📱 Social Media</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Facebook URL
                </label>
                <input
                  type="text"
                  value={contactData.socialMedia.facebook}
                  onChange={(e) => setContactData({
                    ...contactData,
                    socialMedia: { ...contactData.socialMedia, facebook: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="https://facebook.com/momomagic"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Instagram URL
                </label>
                <input
                  type="text"
                  value={contactData.socialMedia.instagram}
                  onChange={(e) => setContactData({
                    ...contactData,
                    socialMedia: { ...contactData.socialMedia, instagram: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="https://instagram.com/momomagic"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Twitter URL
                </label>
                <input
                  type="text"
                  value={contactData.socialMedia.twitter}
                  onChange={(e) => setContactData({
                    ...contactData,
                    socialMedia: { ...contactData.socialMedia, twitter: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="https://twitter.com/momomagic"
                />
              </div>
            </div>
          </Card>

          {/* Map Embed */}
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">🗺️ Google Maps Embed</h2>
            
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">
                Google Maps Embed URL
              </label>
              <textarea
                value={contactData.mapEmbedUrl}
                onChange={(e) => setContactData({ ...contactData, mapEmbedUrl: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                placeholder="https://www.google.com/maps/embed?pb=..."
              />
              <p className="mt-2 text-xs text-foreground/60">
                Get the embed URL from Google Maps → Share → Embed a map
              </p>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
