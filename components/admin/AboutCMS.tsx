'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, Plus, Trash2, AlertCircle, CheckCircle } from 'lucide-react';
import type { AboutContent } from '@/lib/cms/content';

export const AboutCMS: React.FC = () => {
  const [content, setContent] = useState<AboutContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/cms/about');
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
      const response = await fetch('/api/cms/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'About content updated successfully!' });
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

  const updateStoryParagraph = (index: number, value: string) => {
    if (!content) return;
    const newStory = [...content.story];
    newStory[index] = value;
    setContent({ ...content, story: newStory });
  };

  const addStoryParagraph = () => {
    if (!content) return;
    setContent({ ...content, story: [...content.story, 'New paragraph...'] });
  };

  const removeStoryParagraph = (index: number) => {
    if (!content) return;
    setContent({ ...content, story: content.story.filter((_, i) => i !== index) });
  };

  const updateTimeline = (index: number, field: 'date' | 'event', value: string) => {
    if (!content) return;
    const newTimeline = [...content.timeline];
    newTimeline[index] = { ...newTimeline[index], [field]: value };
    setContent({ ...content, timeline: newTimeline });
  };

  const addTimelineItem = () => {
    if (!content) return;
    setContent({
      ...content,
      timeline: [...content.timeline, { date: 'Month Year', event: 'New milestone' }]
    });
  };

  const removeTimelineItem = (index: number) => {
    if (!content) return;
    setContent({ ...content, timeline: content.timeline.filter((_, i) => i !== index) });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw size={32} className="animate-spin text-golden-glow" />
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
            About Us CMS
          </h2>
          <p className="text-gray-600 mt-1">Edit your brand story and timeline</p>
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
          {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{message.text}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Story & Founder */}
        <div className="space-y-6">
          {/* Brand Story */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Brand Story Paragraphs
              </label>
              <button
                onClick={addStoryParagraph}
                className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus size={16} />
                <span>Add Paragraph</span>
              </button>
            </div>
            <div className="space-y-3">
              {content.story.map((paragraph, index) => (
                <div key={index} className="relative">
                  <textarea
                    value={paragraph}
                    onChange={(e) => updateStoryParagraph(index, e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
                    placeholder={`Paragraph ${index + 1}`}
                  />
                  {content.story.length > 1 && (
                    <button
                      onClick={() => removeStoryParagraph(index)}
                      className="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand Philosophy
            </label>
            <input
              type="text"
              value={content.philosophy}
              onChange={(e) => setContent({ ...content, philosophy: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
              placeholder="Your brand philosophy"
            />
          </div>

          {/* Founder Info */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Founder Information
            </label>
            <input
              type="text"
              value={content.founderName}
              onChange={(e) => setContent({ ...content, founderName: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
              placeholder="Founder name"
            />
            <input
              type="text"
              value={content.founderTitle}
              onChange={(e) => setContent({ ...content, founderTitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
              placeholder="Founder title"
            />
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Journey Timeline
            </label>
            <button
              onClick={addTimelineItem}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
            >
              <Plus size={16} />
              <span>Add Milestone</span>
            </button>
          </div>
          <div className="space-y-3">
            {content.timeline.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg relative">
                <button
                  onClick={() => removeTimelineItem(index)}
                  className="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-100 rounded"
                >
                  <Trash2 size={16} />
                </button>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={item.date}
                    onChange={(e) => updateTimeline(index, 'date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm font-semibold"
                    placeholder="Date"
                  />
                  <textarea
                    value={item.event}
                    onChange={(e) => updateTimeline(index, 'event', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none text-sm"
                    placeholder="Event description"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
