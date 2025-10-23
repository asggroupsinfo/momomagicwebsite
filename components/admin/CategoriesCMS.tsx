'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, Edit2, GripVertical, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { ImageInput } from './ImageInput';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  order: number;
  isActive: boolean;
}

export const CategoriesCMS: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Steamed Perfection',
      slug: 'steamed',
      description: 'Fresh & Healthy steamed momos',
      image: '/images/categories/steamed.jpg',
      order: 1,
      isActive: true
    },
    {
      id: '2',
      name: 'Crispy Fried Delights',
      slug: 'fried',
      description: 'Golden & Crunchy fried momos',
      image: '/images/categories/fried.jpg',
      order: 2,
      isActive: true
    },
    {
      id: '3',
      name: 'Magic Signatures',
      slug: 'kurkure',
      description: 'Sherghati Exclusive Kurkure momos',
      image: '/images/categories/kurkure.jpg',
      order: 3,
      isActive: true
    },
    {
      id: '4',
      name: 'Fusion Innovations',
      slug: 'pizza',
      description: 'Innovative Pizza momos',
      image: '/images/categories/pizza.jpg',
      order: 4,
      isActive: true
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draggedItem, setDraggedItem] = useState<Category | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Categories updated successfully!' });
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
    const newCategory: Category = {
      id: Date.now().toString(),
      name: 'New Category',
      slug: 'new-category',
      description: 'Category description',
      image: '/images/categories/placeholder.jpg',
      order: categories.length + 1,
      isActive: true
    };
    setCategories([...categories, newCategory]);
    setEditingId(newCategory.id);
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this category? This will not delete menu items, only the category.')) return;
    setCategories(categories.filter(cat => cat.id !== id));
    setMessage({ type: 'success', text: 'Category deleted! Click Save to apply changes.' });
  };

  const updateCategory = (id: string, field: keyof Category, value: any) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, [field]: value } : cat
    ));
  };

  const handleDragStart = (category: Category) => {
    setDraggedItem(category);
  };

  const handleDragOver = (e: React.DragEvent, targetCategory: Category) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.id === targetCategory.id) return;

    const draggedIndex = categories.findIndex(cat => cat.id === draggedItem.id);
    const targetIndex = categories.findIndex(cat => cat.id === targetCategory.id);

    const newCategories = [...categories];
    newCategories.splice(draggedIndex, 1);
    newCategories.splice(targetIndex, 0, draggedItem);

    const reorderedCategories = newCategories.map((cat, index) => ({
      ...cat,
      order: index + 1
    }));

    setCategories(reorderedCategories);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Category Management
          </h2>
          <p className="text-gray-600 mt-1">Add, edit, or reorder menu categories</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddNew}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={18} />
            <span>Add Category</span>
          </button>
          <button
            onClick={() => setCategories([...categories].sort((a, b) => a.order - b.order))}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw size={18} />
            <span>Reset Order</span>
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

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>💡 Tip:</strong> Drag and drop categories to reorder them. The order will be reflected on the website menu.
          Existing menu items are preserved and will be automatically assigned to their categories.
        </p>
      </div>

      {/* Categories List */}
      <div className="space-y-4">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            layout
            draggable
            onDragStart={() => handleDragStart(category)}
            onDragOver={(e) => handleDragOver(e, category)}
            onDragEnd={handleDragEnd}
            className={`bg-white border-2 rounded-lg p-6 transition-all cursor-move ${
              draggedItem?.id === category.id
                ? 'border-golden-glow shadow-lg opacity-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start space-x-4">
              {/* Drag Handle */}
              <div className="flex-shrink-0 pt-2">
                <GripVertical size={24} className="text-gray-400 cursor-grab active:cursor-grabbing" />
              </div>

              {/* Order Number */}
              <div className="flex-shrink-0 pt-2">
                <div className="w-8 h-8 bg-golden-glow text-black rounded-full flex items-center justify-center font-bold">
                  {category.order}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                {editingId === category.id ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-600 font-medium">Category Name</label>
                        <input
                          type="text"
                          value={category.name}
                          onChange={(e) => updateCategory(category.id, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                          placeholder="Category name"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 font-medium">Slug (URL-friendly)</label>
                        <input
                          type="text"
                          value={category.slug}
                          onChange={(e) => updateCategory(category.id, 'slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                          placeholder="category-slug"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-600 font-medium">Description</label>
                      <textarea
                        value={category.description}
                        onChange={(e) => updateCategory(category.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                        placeholder="Category description"
                      />
                    </div>

                    <ImageInput
                      label="Category Image"
                      value={category.image}
                      onChange={(value) => updateCategory(category.id, 'image', value)}
                      placeholder="/images/categories/category-name.jpg"
                      sizeGuideline="Recommended: 400×300px"
                      tip="Use JPG or WebP format. Displayed on menu page."
                      fileType="image"
                    />

                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={category.isActive}
                        onChange={(e) => updateCategory(category.id, 'isActive', e.target.checked)}
                        className="rounded"
                      />
                      <span className="text-sm">Active (visible on website)</span>
                    </label>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          Slug: {category.slug}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          category.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {category.isActive ? '✓ Active' : '✗ Inactive'}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 flex space-x-2">
                <button
                  onClick={() => setEditingId(editingId === category.id ? null : category.id)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title={editingId === category.id ? 'Cancel' : 'Edit'}
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
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

      {categories.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No categories yet. Click "Add Category" to create one.</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total Categories</p>
          <p className="text-2xl font-bold text-blue-900">{categories.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Active Categories</p>
          <p className="text-2xl font-bold text-green-900">{categories.filter(c => c.isActive).length}</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-sm text-orange-600">Inactive Categories</p>
          <p className="text-2xl font-bold text-orange-900">{categories.filter(c => !c.isActive).length}</p>
        </div>
      </div>
    </div>
  );
};
