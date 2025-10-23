'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Edit2, Trash2, Plus, X, Package, Calendar, Tag } from 'lucide-react';

interface ComboDeal {
  id: number;
  name: string;
  description: string;
  items: string[];
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  expiryDate: string;
  isActive: boolean;
  image?: string;
}

export const ComboDealsCMS: React.FC = () => {
  const [deals, setDeals] = useState<ComboDeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDeal, setNewDeal] = useState<Partial<ComboDeal>>({
    name: '',
    description: '',
    items: [],
    originalPrice: 0,
    discountedPrice: 0,
    discountPercent: 0,
    expiryDate: '',
    isActive: true
  });
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchDeals();
  }, []);

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/cms/combo-deals');
      const data = await response.json();
      if (data.success) {
        setDeals(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch combo deals:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/cms/combo-deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deals }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Combo deals updated successfully!' });
        setEditingId(null);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to update combo deals' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while saving' });
    } finally {
      setIsSaving(false);
    }
  };

  const calculateDiscount = (original: number, discounted: number) => {
    if (original > 0) {
      return Math.round(((original - discounted) / original) * 100);
    }
    return 0;
  };

  const handleAddDeal = () => {
    if (!newDeal.name || !newDeal.items || newDeal.items.length === 0) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    const discount = calculateDiscount(newDeal.originalPrice || 0, newDeal.discountedPrice || 0);
    const newId = Math.max(...deals.map(d => d.id), 0) + 1;
    setDeals([...deals, { ...newDeal, id: newId, discountPercent: discount } as ComboDeal]);
    setNewDeal({ name: '', description: '', items: [], originalPrice: 0, discountedPrice: 0, discountPercent: 0, expiryDate: '', isActive: true });
    setShowAddForm(false);
    setMessage({ type: 'success', text: 'Combo deal added! Click Save to apply changes.' });
  };

  const handleDeleteDeal = (id: number) => {
    if (confirm('Are you sure you want to delete this combo deal?')) {
      setDeals(deals.filter(d => d.id !== id));
      setMessage({ type: 'success', text: 'Combo deal removed! Click Save to apply changes.' });
    }
  };

  const handleUpdateDeal = (id: number, field: keyof ComboDeal, value: any) => {
    setDeals(deals.map(d => {
      if (d.id === id) {
        const updated = { ...d, [field]: value };
        if (field === 'originalPrice' || field === 'discountedPrice') {
          updated.discountPercent = calculateDiscount(
            field === 'originalPrice' ? value : updated.originalPrice,
            field === 'discountedPrice' ? value : updated.discountedPrice
          );
        }
        return updated;
      }
      return d;
    }));
  };

  const addItemToNewDeal = () => {
    if (newItem.trim()) {
      setNewDeal({ ...newDeal, items: [...(newDeal.items || []), newItem.trim()] });
      setNewItem('');
    }
  };

  const removeItemFromNewDeal = (index: number) => {
    setNewDeal({ ...newDeal, items: newDeal.items?.filter((_, i) => i !== index) || [] });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-golden-glow"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Combo Deals Management
          </h2>
          <p className="text-gray-600 mt-1">Create and manage special combo offers with expiry dates</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center space-x-2 bg-golden-glow text-black px-4 py-2 rounded-lg font-semibold hover:bg-pitch-black hover:text-white transition-all duration-300"
        >
          <Plus size={20} />
          <span>Add Combo Deal</span>
        </button>
      </div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </motion.div>
      )}

      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-white border-2 border-golden-glow rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Add New Combo Deal</h3>
            <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Combo Name *
                </label>
                <input
                  type="text"
                  value={newDeal.name || ''}
                  onChange={(e) => setNewDeal({ ...newDeal, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent"
                  placeholder="Family Feast"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="date"
                  value={newDeal.expiryDate || ''}
                  onChange={(e) => setNewDeal({ ...newDeal, expiryDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={newDeal.description || ''}
                onChange={(e) => setNewDeal({ ...newDeal, description: e.target.value })}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent"
                placeholder="Perfect for family gatherings..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Items Included *
              </label>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItemToNewDeal())}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent"
                  placeholder="e.g., 2 Full Plates Kurkure Momos"
                />
                <button
                  onClick={addItemToNewDeal}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
              <div className="space-y-1">
                {newDeal.items?.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                    <span className="text-sm">{item}</span>
                    <button
                      onClick={() => removeItemFromNewDeal(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Original Price (₹)
                </label>
                <input
                  type="number"
                  value={newDeal.originalPrice || ''}
                  onChange={(e) => setNewDeal({ ...newDeal, originalPrice: parseFloat(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent"
                  placeholder="300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discounted Price (₹)
                </label>
                <input
                  type="number"
                  value={newDeal.discountedPrice || ''}
                  onChange={(e) => setNewDeal({ ...newDeal, discountedPrice: parseFloat(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent"
                  placeholder="250"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount
                </label>
                <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-800 font-semibold text-center">
                  {calculateDiscount(newDeal.originalPrice || 0, newDeal.discountedPrice || 0)}% OFF
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isActive"
                checked={newDeal.isActive}
                onChange={(e) => setNewDeal({ ...newDeal, isActive: e.target.checked })}
                className="w-4 h-4 text-golden-glow focus:ring-golden-glow border-gray-300 rounded"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                Active (visible on website)
              </label>
            </div>
            <button
              onClick={handleAddDeal}
              className="w-full bg-golden-glow text-black py-2 rounded-lg font-semibold hover:bg-pitch-black hover:text-white transition-all duration-300"
            >
              Add Combo Deal
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deals.map((deal) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`bg-white rounded-lg shadow-lg p-6 border-2 ${deal.isActive ? 'border-green-500' : 'border-gray-300'}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Package className="text-golden-glow" size={24} />
                  <h3 className="text-xl font-bold">{deal.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{deal.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${deal.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {deal.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Items Included:</p>
                <ul className="space-y-1">
                  {deal.items.map((item, index) => (
                    <li key={index} className="text-sm flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-golden-glow rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-500">Original Price</p>
                  <p className="text-lg font-semibold line-through text-gray-400">₹{deal.originalPrice}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Discounted Price</p>
                  <p className="text-2xl font-bold text-golden-glow">₹{deal.discountedPrice}</p>
                </div>
                <div className="bg-red-500 text-white px-3 py-2 rounded-lg">
                  <p className="text-xs">Save</p>
                  <p className="text-lg font-bold">{deal.discountPercent}%</p>
                </div>
              </div>

              {deal.expiryDate && (
                <div className="flex items-center space-x-2 text-sm text-gray-600 bg-yellow-50 px-3 py-2 rounded">
                  <Calendar size={16} />
                  <span>Expires: {new Date(deal.expiryDate).toLocaleDateString()}</span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => setEditingId(editingId === deal.id ? null : deal.id)}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
              >
                <Edit2 size={16} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDeleteDeal(deal.id)}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {deals.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Package size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">No combo deals yet. Click "Add Combo Deal" to get started.</p>
        </div>
      )}

      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center space-x-2 bg-golden-glow text-black px-6 py-3 rounded-lg font-semibold hover:bg-pitch-black hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <Save size={20} />
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>
    </div>
  );
};
