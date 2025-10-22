'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Upload, Trash2, Edit2, Save, X, Plus } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export const GalleryCMS: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newImage, setNewImage] = useState<Partial<GalleryImage>>({
    url: '',
    alt: '',
    category: 'food'
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch('/api/cms/gallery');
      const data = await response.json();
      if (data.success) {
        setImages(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch gallery:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/cms/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Gallery updated successfully!' });
        setEditingId(null);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to update gallery' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while saving' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddImage = () => {
    if (!newImage.url || !newImage.alt) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    const newId = Math.max(...images.map(img => img.id), 0) + 1;
    setImages([...images, { ...newImage, id: newId } as GalleryImage]);
    setNewImage({ url: '', alt: '', category: 'food' });
    setShowAddForm(false);
    setMessage({ type: 'success', text: 'Image added! Click Save to apply changes.' });
  };

  const handleDeleteImage = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
      setMessage({ type: 'success', text: 'Image removed! Click Save to apply changes.' });
    }
  };

  const handleUpdateImage = (id: number, field: keyof GalleryImage, value: string) => {
    setImages(images.map(img => 
      img.id === id ? { ...img, [field]: value } : img
    ));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-premium-gold"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Gallery Management
          </h2>
          <p className="text-gray-600 mt-1">Manage your gallery images with SEO tags</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center space-x-2 bg-premium-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-charcoal-black hover:text-white transition-all duration-300"
        >
          <Plus size={20} />
          <span>Add Image</span>
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
          className="bg-white border-2 border-premium-gold rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Add New Image</h3>
            <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="text"
                value={newImage.url || ''}
                onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
                placeholder="/images/gallery/your-image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alt Text (SEO)
              </label>
              <input
                type="text"
                value={newImage.alt || ''}
                onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
                placeholder="Descriptive alt text for SEO"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={newImage.category || 'food'}
                onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
              >
                <option value="food">Food</option>
                <option value="stall">Stall</option>
                <option value="awards">Awards</option>
                <option value="events">Events</option>
              </select>
            </div>
            <button
              onClick={handleAddImage}
              className="w-full bg-premium-gold text-black py-2 rounded-lg font-semibold hover:bg-charcoal-black hover:text-white transition-all duration-300"
            >
              Add Image
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="relative h-48 bg-gray-200">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="p-4 space-y-3">
              {editingId === image.id ? (
                <>
                  <input
                    type="text"
                    value={image.url}
                    onChange={(e) => handleUpdateImage(image.id, 'url', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                    placeholder="Image URL"
                  />
                  <input
                    type="text"
                    value={image.alt}
                    onChange={(e) => handleUpdateImage(image.id, 'alt', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                    placeholder="Alt text"
                  />
                  <select
                    value={image.category}
                    onChange={(e) => handleUpdateImage(image.id, 'category', e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                  >
                    <option value="food">Food</option>
                    <option value="stall">Stall</option>
                    <option value="awards">Awards</option>
                    <option value="events">Events</option>
                  </select>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-700 font-medium line-clamp-2">{image.alt}</p>
                  <span className="inline-block px-2 py-1 bg-premium-gold/20 text-premium-gold text-xs font-medium rounded">
                    {image.category}
                  </span>
                </>
              )}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => setEditingId(editingId === image.id ? null : image.id)}
                  className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                >
                  {editingId === image.id ? <X size={16} /> : <Edit2 size={16} />}
                  <span>{editingId === image.id ? 'Cancel' : 'Edit'}</span>
                </button>
                <button
                  onClick={() => handleDeleteImage(image.id)}
                  className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">No images in gallery. Click "Add Image" to get started.</p>
        </div>
      )}

      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center space-x-2 bg-premium-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-charcoal-black hover:text-white transition-all duration-300 disabled:opacity-50"
        >
          <Save size={20} />
          <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
        </button>
      </div>
    </div>
  );
};
