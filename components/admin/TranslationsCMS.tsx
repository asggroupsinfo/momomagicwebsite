'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, AlertCircle, CheckCircle, Globe, Plus, Trash2, Edit2 } from 'lucide-react';
import { i18nConfig, Locale } from '@/lib/i18n/config';

interface TranslationKey {
  key: string;
  en: string;
  hi: string;
  bn: string;
  category: string;
}

export const TranslationsCMS: React.FC = () => {
  const [activeLocale, setActiveLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<TranslationKey[]>([
    { key: 'common.home', en: 'Home', hi: 'होम', bn: 'হোম', category: 'common' },
    { key: 'common.menu', en: 'Menu', hi: 'मेनू', bn: 'মেনু', category: 'common' },
    { key: 'common.about', en: 'About Us', hi: 'हमारे बारे में', bn: 'আমাদের সম্পর্কে', category: 'common' },
    { key: 'common.contact', en: 'Contact', hi: 'संपर्क करें', bn: 'যোগাযোগ', category: 'common' },
    { key: 'common.orderNow', en: 'Order Now', hi: 'अभी ऑर्डर करें', bn: 'এখনই অর্ডার করুন', category: 'common' },
    
    { key: 'hero.headline', en: 'From Humble Stall to Culinary Legend', hi: 'छोटे स्टॉल से कुलिनरी लीजेंड तक', bn: 'ছোট স্টল থেকে রন্ধনশিল্পের কিংবদন্তি', category: 'hero' },
    { key: 'hero.primaryCTA', en: 'Taste the Magic → Order Now', hi: 'जादू का स्वाद लें → अभी ऑर्डर करें', bn: 'জাদুর স্বাদ নিন → এখনই অর্ডার করুন', category: 'hero' },
    
    { key: 'menu.title', en: 'Our Magical Creations', hi: 'हमारी जादुई रचनाएं', bn: 'আমাদের জাদুকরী সৃষ্টি', category: 'menu' },
    { key: 'menu.categories.steamed', en: 'Steamed Perfection', hi: 'स्टीम्ड परफेक्शन', bn: 'স্টিমড পারফেকশন', category: 'menu' },
    { key: 'menu.categories.fried', en: 'Crispy Fried Delights', hi: 'क्रिस्पी फ्राइड डिलाइट्स', bn: 'ক্রিস্পি ফ্রাইড ডিলাইটস', category: 'menu' }
  ]);
  
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(translations.map(t => t.category)))];

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const emptyTranslations = translations.filter(t => 
        !t.en || !t.hi || !t.bn
      );

      if (emptyTranslations.length > 0) {
        setMessage({ 
          type: 'error', 
          text: `${emptyTranslations.length} translation(s) have empty values` 
        });
        setIsSaving(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Translations updated successfully!' });
      setEditingKey(null);
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddNew = () => {
    const newKey: TranslationKey = {
      key: 'new.key',
      en: '',
      hi: '',
      bn: '',
      category: 'custom'
    };
    setTranslations([...translations, newKey]);
    setEditingKey(newKey.key);
  };

  const handleDelete = (key: string) => {
    if (!confirm('Are you sure you want to delete this translation?')) return;
    setTranslations(translations.filter(t => t.key !== key));
    setMessage({ type: 'success', text: 'Translation deleted! Click Save to apply changes.' });
  };

  const updateTranslation = (key: string, field: keyof TranslationKey, value: string) => {
    setTranslations(translations.map(t =>
      t.key === key ? { ...t, [field]: value } : t
    ));
  };

  const filteredTranslations = translations.filter(t => {
    const matchesSearch = searchQuery === '' || 
      t.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.hi.includes(searchQuery) ||
      t.bn.includes(searchQuery);
    
    const matchesCategory = filterCategory === 'all' || t.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCompletionPercentage = () => {
    const totalFields = translations.length * 3; // 3 languages
    const filledFields = translations.reduce((count, t) => {
      return count + (t.en ? 1 : 0) + (t.hi ? 1 : 0) + (t.bn ? 1 : 0);
    }, 0);
    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Translation Management
          </h2>
          <p className="text-gray-600 mt-1">Manage multi-language translations</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
            <Globe size={18} className="text-premium-gold" />
            <span className="text-sm font-medium">Completion:</span>
            <span className="text-lg font-bold text-green-600">{getCompletionPercentage()}%</span>
          </div>
          <button
            onClick={handleAddNew}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={18} />
            <span>Add Translation</span>
          </button>
          <button
            onClick={() => setTranslations([...translations])}
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

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search translations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
          />
        </div>
        <div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Language Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {i18nConfig.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocale(loc)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeLocale === loc
                  ? 'border-premium-gold text-premium-gold'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Globe size={16} />
              <span>{i18nConfig.localeNames[loc]}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Translations Table */}
      <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Key
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  English
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  हिंदी
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  বাংলা
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTranslations.map((translation) => (
                <tr key={translation.key} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingKey === translation.key ? (
                      <input
                        type="text"
                        value={translation.key}
                        onChange={(e) => updateTranslation(translation.key, 'key', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      />
                    ) : (
                      <code className="text-xs text-gray-900 bg-gray-100 px-2 py-1 rounded">
                        {translation.key}
                      </code>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingKey === translation.key ? (
                      <input
                        type="text"
                        value={translation.category}
                        onChange={(e) => updateTranslation(translation.key, 'category', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      />
                    ) : (
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                        {translation.category}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingKey === translation.key ? (
                      <input
                        type="text"
                        value={translation.en}
                        onChange={(e) => updateTranslation(translation.key, 'en', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">{translation.en}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingKey === translation.key ? (
                      <input
                        type="text"
                        value={translation.hi}
                        onChange={(e) => updateTranslation(translation.key, 'hi', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">{translation.hi}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {editingKey === translation.key ? (
                      <input
                        type="text"
                        value={translation.bn}
                        onChange={(e) => updateTranslation(translation.key, 'bn', e.target.value)}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none"
                      />
                    ) : (
                      <span className="text-sm text-gray-900">{translation.bn}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => setEditingKey(editingKey === translation.key ? null : translation.key)}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title={editingKey === translation.key ? 'Cancel' : 'Edit'}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(translation.key)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredTranslations.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No translations found matching your search.</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total Keys</p>
          <p className="text-2xl font-bold text-blue-900">{translations.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Languages</p>
          <p className="text-2xl font-bold text-green-900">{i18nConfig.locales.length}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-sm text-orange-600">Categories</p>
          <p className="text-2xl font-bold text-orange-900">{categories.length - 1}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Completion</p>
          <p className="text-2xl font-bold text-purple-900">{getCompletionPercentage()}%</p>
        </div>
      </div>
    </div>
  );
};
