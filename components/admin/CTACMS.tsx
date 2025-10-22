'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, Edit2, RefreshCw, AlertCircle, CheckCircle, ExternalLink, Eye } from 'lucide-react';

interface CTA {
  id: string;
  label: string;
  text: string;
  url: string;
  style: 'primary' | 'secondary' | 'outline';
  location: string;
  isActive: boolean;
  order: number;
}

export const CTACMS: React.FC = () => {
  const [ctas, setCtas] = useState<CTA[]>([
    {
      id: '1',
      label: 'Hero Primary CTA',
      text: 'Taste the Magic → Order Now',
      url: '#menu',
      style: 'primary',
      location: 'Hero Section',
      isActive: true,
      order: 1
    },
    {
      id: '2',
      label: 'Hero Secondary CTA',
      text: 'Discover Our Story',
      url: '#story',
      style: 'secondary',
      location: 'Hero Section',
      isActive: true,
      order: 2
    },
    {
      id: '3',
      label: 'Menu View All',
      text: 'View Full Menu',
      url: '/menu',
      style: 'primary',
      location: 'Menu Section',
      isActive: true,
      order: 3
    },
    {
      id: '4',
      label: 'Contact Us Button',
      text: 'Get in Touch',
      url: '/contact',
      style: 'outline',
      location: 'Footer',
      isActive: true,
      order: 4
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const invalidCtas = ctas.filter(cta => {
        if (!cta.url) return true;
        if (cta.url.startsWith('#') || cta.url.startsWith('/')) return false;
        try {
          new URL(cta.url);
          return false;
        } catch {
          return true;
        }
      });

      if (invalidCtas.length > 0) {
        setMessage({ 
          type: 'error', 
          text: `Invalid URLs found in: ${invalidCtas.map(c => c.label).join(', ')}` 
        });
        setIsSaving(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'CTAs updated successfully!' });
      setEditingId(null);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddNew = () => {
    const newCTA: CTA = {
      id: Date.now().toString(),
      label: 'New CTA',
      text: 'Click Here',
      url: '#',
      style: 'primary',
      location: 'Custom',
      isActive: true,
      order: ctas.length + 1
    };
    setCtas([...ctas, newCTA]);
    setEditingId(newCTA.id);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this CTA?')) return;
    setCtas(ctas.filter(cta => cta.id !== id));
    setMessage({ type: 'success', text: 'CTA deleted! Click Save to apply changes.' });
  };

  const updateCTA = (id: string, field: keyof CTA, value: any) => {
    setCtas(ctas.map(cta =>
      cta.id === id ? { ...cta, [field]: value } : cta
    ));
  };

  const getStylePreview = (style: string) => {
    switch (style) {
      case 'primary':
        return 'bg-premium-gold text-black font-semibold';
      case 'secondary':
        return 'bg-charcoal-black text-white border-2 border-premium-gold';
      case 'outline':
        return 'bg-transparent text-premium-gold border-2 border-premium-gold';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            CTA Management
          </h2>
          <p className="text-gray-600 mt-1">Manage call-to-action buttons across the website</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddNew}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={18} />
            <span>Add CTA</span>
          </button>
          <button
            onClick={() => setCtas([...ctas].sort((a, b) => a.order - b.order))}
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
          <strong>💡 URL Guidelines:</strong> Use <code className="bg-blue-100 px-1 rounded">#section</code> for anchor links, 
          <code className="bg-blue-100 px-1 rounded">/page</code> for internal pages, or full URLs for external links.
          All URLs are validated before saving.
        </p>
      </div>

      {/* CTAs List */}
      <div className="space-y-4">
        {ctas.map((cta) => (
          <motion.div
            key={cta.id}
            layout
            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all"
          >
            <div className="flex items-start space-x-4">
              {/* Order Number */}
              <div className="flex-shrink-0 pt-2">
                <div className="w-8 h-8 bg-premium-gold text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {cta.order}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                {editingId === cta.id ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-600 font-medium">Label (Internal Use)</label>
                        <input
                          type="text"
                          value={cta.label}
                          onChange={(e) => updateCTA(cta.id, 'label', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                          placeholder="e.g., Hero Primary CTA"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 font-medium">Location</label>
                        <input
                          type="text"
                          value={cta.location}
                          onChange={(e) => updateCTA(cta.id, 'location', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                          placeholder="e.g., Hero Section"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 font-medium">Button Text (Visible to Users)</label>
                      <input
                        type="text"
                        value={cta.text}
                        onChange={(e) => updateCTA(cta.id, 'text', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                        placeholder="e.g., Order Now"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 font-medium">URL / Link</label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={cta.url}
                          onChange={(e) => updateCTA(cta.id, 'url', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                          placeholder="#menu, /contact, or https://example.com"
                        />
                        {cta.url && !cta.url.startsWith('#') && (
                          <a
                            href={cta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            title="Test link"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 font-medium">Button Style</label>
                      <select
                        value={cta.style}
                        onChange={(e) => updateCTA(cta.id, 'style', e.target.value as 'primary' | 'secondary' | 'outline')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      >
                        <option value="primary">Primary (Gold Background)</option>
                        <option value="secondary">Secondary (Black Background)</option>
                        <option value="outline">Outline (Transparent)</option>
                      </select>
                    </div>

                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={cta.isActive}
                          onChange={(e) => updateCTA(cta.id, 'isActive', e.target.checked)}
                          className="rounded"
                        />
                        <span className="text-sm">Active (visible on website)</span>
                      </label>

                      <div className="flex-1 flex items-center space-x-2">
                        <Eye size={16} className="text-gray-500" />
                        <span className="text-xs text-gray-500">Preview:</span>
                        <button
                          className={`px-4 py-2 rounded-lg transition-all ${getStylePreview(cta.style)}`}
                        >
                          {cta.text}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{cta.label}</h3>
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {cta.location}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          cta.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {cta.isActive ? '✓ Active' : '✗ Inactive'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          className={`px-4 py-2 rounded-lg transition-all ${getStylePreview(cta.style)}`}
                        >
                          {cta.text}
                        </button>
                        <span className="text-sm text-gray-600">→</span>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">{cta.url}</code>
                        {cta.url && !cta.url.startsWith('#') && (
                          <a
                            href={cta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                            title="Test link"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 flex space-x-2">
                <button
                  onClick={() => setEditingId(editingId === cta.id ? null : cta.id)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title={editingId === cta.id ? 'Cancel' : 'Edit'}
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(cta.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {ctas.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No CTAs yet. Click "Add CTA" to create one.</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total CTAs</p>
          <p className="text-2xl font-bold text-blue-900">{ctas.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Active CTAs</p>
          <p className="text-2xl font-bold text-green-900">{ctas.filter(c => c.isActive).length}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-sm text-orange-600">Inactive CTAs</p>
          <p className="text-2xl font-bold text-orange-900">{ctas.filter(c => !c.isActive).length}</p>
        </div>
      </div>
    </div>
  );
};
