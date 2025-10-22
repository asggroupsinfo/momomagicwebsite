'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, RefreshCw, AlertCircle, CheckCircle, Edit2 } from 'lucide-react';
import type { MenuItem } from '@/lib/cms/content';

export const MenuCMS: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const response = await fetch('/api/cms/menu');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Failed to load menu items:', error);
      setMessage({ type: 'error', text: 'Failed to load menu items' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/cms/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Menu items updated successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update menu items' });
      }
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save changes' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this menu item?')) return;

    try {
      const response = await fetch(`/api/cms/menu?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        setItems(data.items);
        setMessage({ type: 'success', text: 'Menu item deleted successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to delete item' });
      }
    } catch (error) {
      console.error('Delete error:', error);
      setMessage({ type: 'error', text: 'Failed to delete item' });
    }
  };

  const handleAddNew = () => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: 'New Menu Item',
      category: 'steamed',
      description: 'Description here',
      price: { half: 25, full: 50 },
      image: '/menu/placeholder.jpg',
      isPopular: false,
      spiceLevel: 'mild'
    };
    setItems([...items, newItem]);
    setEditingId(newItem.id);
  };

  const updateItem = (id: string, field: keyof MenuItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const updatePrice = (id: string, type: 'half' | 'full', value: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, price: { ...item.price, [type]: value } } : item
    ));
  };

  const filteredItems = filterCategory === 'all' 
    ? items 
    : items.filter(item => item.category === filterCategory);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw size={32} className="animate-spin text-premium-gold" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Menu Management
          </h2>
          <p className="text-gray-600 mt-1">Add, edit, or delete menu items</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddNew}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={18} />
            <span>Add New Item</span>
          </button>
          <button
            onClick={loadItems}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw size={18} />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center space-x-2 px-6 py-2 bg-premium-gold text-black font-semibold rounded-lg hover:bg-charcoal-black hover:text-white transition-all disabled:opacity-50"
          >
            <Save size={18} />
            <span>{isSaving ? 'Saving...' : 'Save All Changes'}</span>
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

      {/* Filter */}
      <div className="flex space-x-2">
        {['all', 'steamed', 'fried', 'kurkure', 'pizza'].map(category => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-4 py-2 rounded-lg capitalize transition-all ${
              filterCategory === category
                ? 'bg-premium-gold text-black font-semibold'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total Items</p>
          <p className="text-2xl font-bold text-blue-900">{items.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Popular Items</p>
          <p className="text-2xl font-bold text-green-900">{items.filter(i => i.isPopular).length}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-sm text-orange-600">Steamed</p>
          <p className="text-2xl font-bold text-orange-900">{items.filter(i => i.category === 'steamed').length}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Signature</p>
          <p className="text-2xl font-bold text-purple-900">{items.filter(i => i.category === 'kurkure').length}</p>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <motion.div
            key={item.id}
            layout
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-lg font-semibold"
                  />
                ) : (
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                )}
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.category === 'steamed' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'fried' ? 'bg-orange-100 text-orange-800' :
                    item.category === 'kurkure' ? 'bg-purple-100 text-purple-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.category}
                  </span>
                  {item.isPopular && (
                    <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">
                      ⭐ Popular
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {editingId === item.id ? (
              <div className="space-y-3">
                <textarea
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  placeholder="Item description"
                />
                
                <div>
                  <label className="text-xs text-gray-600 flex items-center justify-between">
                    <span>Menu Item Image</span>
                    <span className="text-premium-gold font-semibold">📐 600×400px</span>
                  </label>
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => updateItem(item.id, 'image', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="/images/menu/item-name.jpg or URL"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    💡 Use JPG/WebP format, 3:2 ratio
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-600">Half Price (₹)</label>
                    <input
                      type="number"
                      value={item.price.half}
                      onChange={(e) => updatePrice(item.id, 'half', parseInt(e.target.value))}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Full Price (₹)</label>
                    <input
                      type="number"
                      value={item.price.full}
                      onChange={(e) => updatePrice(item.id, 'full', parseInt(e.target.value))}
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={item.category}
                    onChange={(e) => updateItem(item.id, 'category', e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                  >
                    <option value="steamed">Steamed</option>
                    <option value="fried">Fried</option>
                    <option value="kurkure">Kurkure</option>
                    <option value="pizza">Pizza</option>
                  </select>
                  <select
                    value={item.spiceLevel}
                    onChange={(e) => updateItem(item.id, 'spiceLevel', e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                  >
                    <option value="mild">Mild</option>
                    <option value="medium">Medium</option>
                    <option value="hot">Hot</option>
                  </select>
                </div>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={item.isPopular}
                    onChange={(e) => updateItem(item.id, 'isPopular', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Mark as Popular</span>
                </label>
              </div>
            ) : (
              <div>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold text-premium-gold">₹{item.price.half}</span> (5pc) / 
                    <span className="font-semibold text-premium-gold"> ₹{item.price.full}</span> (10pc)
                  </div>
                  <span className="text-xs text-gray-500 capitalize">🌶️ {item.spiceLevel}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No items found in this category
        </div>
      )}
    </div>
  );
};
