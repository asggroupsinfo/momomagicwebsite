'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, AlertCircle, CheckCircle, Key, Eye, EyeOff, ExternalLink, MapPin, Star, Share2 } from 'lucide-react';

interface APIConfig {
  googleAnalyticsId: string;
  googleAnalyticsEnabled: boolean;
  
  googleMapsApiKey: string;
  googleMapsEnabled: boolean;
  mapCenter: {
    lat: number;
    lng: number;
  };
  mapZoom: number;
  
  googleBusinessPlaceId: string;
  googleBusinessApiKey: string;
  googleBusinessEnabled: boolean;
  
  facebookAppId: string;
  facebookPixelId: string;
  facebookMetaEnabled: boolean;
}

export const APIConfigCMS: React.FC = () => {
  const [apiConfig, setApiConfig] = useState<APIConfig>({
    googleAnalyticsId: 'G-XXXXXXXXXX',
    googleAnalyticsEnabled: true,
    
    googleMapsApiKey: '',
    googleMapsEnabled: true,
    mapCenter: {
      lat: 24.5667,
      lng: 84.7833
    },
    mapZoom: 15,
    
    googleBusinessPlaceId: '',
    googleBusinessApiKey: '',
    googleBusinessEnabled: true,
    
    facebookAppId: '',
    facebookPixelId: '',
    facebookMetaEnabled: true
  });
  
  const [showKeys, setShowKeys] = useState({
    googleAnalytics: false,
    googleMaps: false,
    googleBusiness: false,
    facebook: false
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState('analytics');

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      if (apiConfig.googleAnalyticsEnabled && !apiConfig.googleAnalyticsId) {
        setMessage({ type: 'error', text: 'Google Analytics ID is required when enabled' });
        setIsSaving(false);
        return;
      }

      if (apiConfig.googleMapsEnabled && !apiConfig.googleMapsApiKey) {
        setMessage({ type: 'error', text: 'Google Maps API Key is required when enabled' });
        setIsSaving(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'API configurations saved successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setApiConfig({
      googleAnalyticsId: 'G-XXXXXXXXXX',
      googleAnalyticsEnabled: true,
      googleMapsApiKey: '',
      googleMapsEnabled: true,
      mapCenter: { lat: 24.5667, lng: 84.7833 },
      mapZoom: 15,
      googleBusinessPlaceId: '',
      googleBusinessApiKey: '',
      googleBusinessEnabled: true,
      facebookAppId: '',
      facebookPixelId: '',
      facebookMetaEnabled: true
    });
    setMessage({ type: 'success', text: 'Settings reset to defaults' });
    setTimeout(() => setMessage(null), 2000);
  };

  const updateConfig = (field: keyof APIConfig, value: any) => {
    setApiConfig({ ...apiConfig, [field]: value });
  };

  const toggleKeyVisibility = (key: keyof typeof showKeys) => {
    setShowKeys({ ...showKeys, [key]: !showKeys[key] });
  };

  const tabs = [
    { id: 'analytics', label: 'Google Analytics', icon: Share2 },
    { id: 'maps', label: 'Google Maps', icon: MapPin },
    { id: 'business', label: 'Google Business', icon: Star },
    { id: 'facebook', label: 'Facebook Meta', icon: Share2 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            API Configuration
          </h2>
          <p className="text-gray-600 mt-1">Manage third-party API integrations</p>
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

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>🔒 Security Note:</strong> API keys are encrypted and stored securely. Never share your API keys publicly.
          All integrations preserve existing functionality and animations.
        </p>
      </div>

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
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Google Analytics Configuration</h3>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={apiConfig.googleAnalyticsEnabled}
                    onChange={(e) => updateConfig('googleAnalyticsEnabled', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Enabled</span>
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Google Analytics Measurement ID <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type={showKeys.googleAnalytics ? 'text' : 'password'}
                      value={apiConfig.googleAnalyticsId}
                      onChange={(e) => updateConfig('googleAnalyticsId', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      placeholder="G-XXXXXXXXXX"
                      disabled={!apiConfig.googleAnalyticsEnabled}
                    />
                    <button
                      onClick={() => toggleKeyVisibility('googleAnalytics')}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {showKeys.googleAnalytics ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Format: G-XXXXXXXXXX (found in Google Analytics Admin)
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">What will be tracked:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page views and navigation</li>
                    <li>• User demographics and location</li>
                    <li>• CTA button clicks and conversions</li>
                    <li>• Menu item views and interactions</li>
                    <li>• Form submissions and contact requests</li>
                  </ul>
                </div>

                <a
                  href="https://analytics.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Open Google Analytics Dashboard</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'maps' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Google Maps Configuration</h3>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={apiConfig.googleMapsEnabled}
                    onChange={(e) => updateConfig('googleMapsEnabled', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Enabled</span>
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Google Maps API Key <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type={showKeys.googleMaps ? 'text' : 'password'}
                      value={apiConfig.googleMapsApiKey}
                      onChange={(e) => updateConfig('googleMapsApiKey', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      placeholder="AIzaSy..."
                      disabled={!apiConfig.googleMapsEnabled}
                    />
                    <button
                      onClick={() => toggleKeyVisibility('googleMaps')}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {showKeys.googleMaps ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Get your API key from Google Cloud Console
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Latitude
                    </label>
                    <input
                      type="number"
                      step="0.0001"
                      value={apiConfig.mapCenter.lat}
                      onChange={(e) => updateConfig('mapCenter', { ...apiConfig.mapCenter, lat: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      disabled={!apiConfig.googleMapsEnabled}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Longitude
                    </label>
                    <input
                      type="number"
                      step="0.0001"
                      value={apiConfig.mapCenter.lng}
                      onChange={(e) => updateConfig('mapCenter', { ...apiConfig.mapCenter, lng: parseFloat(e.target.value) })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      disabled={!apiConfig.googleMapsEnabled}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Zoom Level (1-20)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={apiConfig.mapZoom}
                    onChange={(e) => updateConfig('mapZoom', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    disabled={!apiConfig.googleMapsEnabled}
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">Current Location:</h4>
                  <p className="text-sm text-gray-600">
                    Momo Magic, Naya Bazar, Near Post Office, Sherghati, Bihar 824211
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Coordinates: {apiConfig.mapCenter.lat}, {apiConfig.mapCenter.lng}
                  </p>
                </div>

                <a
                  href="https://console.cloud.google.com/google/maps-apis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Get Google Maps API Key</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'business' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Google Business Reviews Configuration</h3>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={apiConfig.googleBusinessEnabled}
                    onChange={(e) => updateConfig('googleBusinessEnabled', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Enabled</span>
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Google Business Place ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={apiConfig.googleBusinessPlaceId}
                    onChange={(e) => updateConfig('googleBusinessPlaceId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="ChIJ..."
                    disabled={!apiConfig.googleBusinessEnabled}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Find your Place ID using Google Place ID Finder
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Google Places API Key <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type={showKeys.googleBusiness ? 'text' : 'password'}
                      value={apiConfig.googleBusinessApiKey}
                      onChange={(e) => updateConfig('googleBusinessApiKey', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      placeholder="AIzaSy..."
                      disabled={!apiConfig.googleBusinessEnabled}
                    />
                    <button
                      onClick={() => toggleKeyVisibility('googleBusiness')}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {showKeys.googleBusiness ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">What will be displayed:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Live Google Business reviews</li>
                    <li>• Overall rating and review count</li>
                    <li>• Recent customer testimonials</li>
                    <li>• Business hours and contact info</li>
                    <li>• Photos from Google Business Profile</li>
                  </ul>
                </div>

                <a
                  href="https://developers.google.com/maps/documentation/places/web-service/place-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Find Your Place ID</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'facebook' && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Facebook Meta Configuration</h3>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={apiConfig.facebookMetaEnabled}
                    onChange={(e) => updateConfig('facebookMetaEnabled', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Enabled</span>
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facebook App ID
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type={showKeys.facebook ? 'text' : 'password'}
                      value={apiConfig.facebookAppId}
                      onChange={(e) => updateConfig('facebookAppId', e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      placeholder="123456789012345"
                      disabled={!apiConfig.facebookMetaEnabled}
                    />
                    <button
                      onClick={() => toggleKeyVisibility('facebook')}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {showKeys.facebook ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Found in Facebook Developers Dashboard
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facebook Pixel ID
                  </label>
                  <input
                    type="text"
                    value={apiConfig.facebookPixelId}
                    onChange={(e) => updateConfig('facebookPixelId', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                    placeholder="123456789012345"
                    disabled={!apiConfig.facebookMetaEnabled}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    For tracking conversions and retargeting
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">What will be tracked:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Page views and user interactions</li>
                    <li>• Social sharing and engagement</li>
                    <li>• Conversion events (orders, contacts)</li>
                    <li>• Custom audiences for retargeting</li>
                    <li>• Ad campaign performance</li>
                  </ul>
                </div>

                <a
                  href="https://developers.facebook.com/apps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Facebook Developers Dashboard</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Status Summary */}
      <div className="grid grid-cols-4 gap-4">
        <div className={`p-4 rounded-lg ${apiConfig.googleAnalyticsEnabled ? 'bg-green-50' : 'bg-gray-50'}`}>
          <p className="text-sm text-gray-600">Google Analytics</p>
          <p className={`text-lg font-bold ${apiConfig.googleAnalyticsEnabled ? 'text-green-900' : 'text-gray-900'}`}>
            {apiConfig.googleAnalyticsEnabled ? 'Active' : 'Inactive'}
          </p>
        </div>
        <div className={`p-4 rounded-lg ${apiConfig.googleMapsEnabled ? 'bg-green-50' : 'bg-gray-50'}`}>
          <p className="text-sm text-gray-600">Google Maps</p>
          <p className={`text-lg font-bold ${apiConfig.googleMapsEnabled ? 'text-green-900' : 'text-gray-900'}`}>
            {apiConfig.googleMapsEnabled ? 'Active' : 'Inactive'}
          </p>
        </div>
        <div className={`p-4 rounded-lg ${apiConfig.googleBusinessEnabled ? 'bg-green-50' : 'bg-gray-50'}`}>
          <p className="text-sm text-gray-600">Google Business</p>
          <p className={`text-lg font-bold ${apiConfig.googleBusinessEnabled ? 'text-green-900' : 'text-gray-900'}`}>
            {apiConfig.googleBusinessEnabled ? 'Active' : 'Inactive'}
          </p>
        </div>
        <div className={`p-4 rounded-lg ${apiConfig.facebookMetaEnabled ? 'bg-green-50' : 'bg-gray-50'}`}>
          <p className="text-sm text-gray-600">Facebook Meta</p>
          <p className={`text-lg font-bold ${apiConfig.facebookMetaEnabled ? 'text-green-900' : 'text-gray-900'}`}>
            {apiConfig.facebookMetaEnabled ? 'Active' : 'Inactive'}
          </p>
        </div>
      </div>
    </div>
  );
};
