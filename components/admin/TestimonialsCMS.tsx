'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Save, Edit2, Trash2, Plus, X, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TestimonialsCMS: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState<Partial<Testimonial>>({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/cms/testimonials');
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/cms/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testimonials }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Testimonials updated successfully!' });
        setEditingId(null);
      } else {
        setMessage({ type: 'error', text: data.message || 'Failed to update testimonials' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while saving' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.content) {
      setMessage({ type: 'error', text: 'Please fill in all required fields' });
      return;
    }

    const newId = Math.max(...testimonials.map(t => t.id), 0) + 1;
    setTestimonials([...testimonials, { ...newTestimonial, id: newId } as Testimonial]);
    setNewTestimonial({ name: '', role: '', content: '', rating: 5 });
    setShowAddForm(false);
    setMessage({ type: 'success', text: 'Testimonial added! Click Save to apply changes.' });
  };

  const handleDeleteTestimonial = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
      setMessage({ type: 'success', text: 'Testimonial removed! Click Save to apply changes.' });
    }
  };

  const handleUpdateTestimonial = (id: number, field: keyof Testimonial, value: string | number) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, [field]: value } : t
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
            Testimonials Management
          </h2>
          <p className="text-gray-600 mt-1">Manage customer reviews and testimonials</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center space-x-2 bg-premium-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-charcoal-black hover:text-white transition-all duration-300"
        >
          <Plus size={20} />
          <span>Add Testimonial</span>
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
            <h3 className="text-lg font-semibold">Add New Testimonial</h3>
            <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={newTestimonial.name || ''}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role/Title
                </label>
                <input
                  type="text"
                  value={newTestimonial.role || ''}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
                  placeholder="Regular Customer"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial Content *
              </label>
              <textarea
                value={newTestimonial.content || ''}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
                placeholder="Write the customer's testimonial here..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating (1-5 stars)
              </label>
              <select
                value={newTestimonial.rating || 5}
                onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent"
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>
            </div>
            <button
              onClick={handleAddTestimonial}
              className="w-full bg-premium-gold text-black py-2 rounded-lg font-semibold hover:bg-charcoal-black hover:text-white transition-all duration-300"
            >
              Add Testimonial
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 relative"
          >
            <Quote className="absolute top-4 right-4 text-premium-gold/20" size={32} />
            
            {editingId === testimonial.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => handleUpdateTestimonial(testimonial.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                  placeholder="Name"
                />
                <input
                  type="text"
                  value={testimonial.role}
                  onChange={(e) => handleUpdateTestimonial(testimonial.id, 'role', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                  placeholder="Role"
                />
                <textarea
                  value={testimonial.content}
                  onChange={(e) => handleUpdateTestimonial(testimonial.id, 'content', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                  placeholder="Content"
                />
                <select
                  value={testimonial.rating}
                  onChange={(e) => handleUpdateTestimonial(testimonial.id, 'rating', parseInt(e.target.value))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-premium-gold"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
            ) : (
              <>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-premium-gold fill-premium-gold" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => setEditingId(editingId === testimonial.id ? null : testimonial.id)}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
              >
                {editingId === testimonial.id ? <X size={16} /> : <Edit2 size={16} />}
                <span>{editingId === testimonial.id ? 'Cancel' : 'Edit'}</span>
              </button>
              <button
                onClick={() => handleDeleteTestimonial(testimonial.id)}
                className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Quote size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">No testimonials yet. Click "Add Testimonial" to get started.</p>
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
