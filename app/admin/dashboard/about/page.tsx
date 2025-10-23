'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface TimelineItem {
  date: string;
  event: string;
  icon: string;
}

interface QualityCommitment {
  icon: string;
  title: string;
  description: string;
}

interface AboutData {
  founderStory: {
    name: string;
    title: string;
    location: string;
    established: string;
    paragraphs: string[];
  };
  philosophy: {
    title: string;
    subtitle: string;
    description: string;
  };
  timeline: TimelineItem[];
  qualityCommitments: QualityCommitment[];
}

export default function AboutCMSPage() {
  const [aboutData, setAboutData] = useState<AboutData>({
    founderStory: {
      name: 'Dhruv Gupta',
      title: 'Founder & Chef',
      location: 'Sherghati, Bihar',
      established: 'September 2023',
      paragraphs: [],
    },
    philosophy: {
      title: 'Quantity bhi Mast, Taste bhi Zabardast',
      subtitle: 'Our Philosophy',
      description: '',
    },
    timeline: [],
    qualityCommitments: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'founder' | 'philosophy' | 'timeline' | 'quality'>('founder');

  useEffect(() => {
    loadAboutData();
  }, []);

  const loadAboutData = async () => {
    try {
      const response = await fetch('/api/cms/about');
      if (response.ok) {
        const data = await response.json();
        setAboutData(data);
      }
    } catch (error) {
      console.error('Error loading about data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveAboutData = async () => {
    setIsSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/cms/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aboutData),
      });

      if (response.ok) {
        setMessage('✅ About content saved successfully!');
      } else {
        setMessage('❌ Failed to save about content');
      }
    } catch (error) {
      setMessage('❌ Error saving about content');
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const addTimelineItem = () => {
    setAboutData({
      ...aboutData,
      timeline: [
        ...aboutData.timeline,
        { date: '', event: '', icon: '✨' },
      ],
    });
  };

  const updateTimelineItem = (index: number, field: keyof TimelineItem, value: string) => {
    const newTimeline = [...aboutData.timeline];
    newTimeline[index] = { ...newTimeline[index], [field]: value };
    setAboutData({ ...aboutData, timeline: newTimeline });
  };

  const removeTimelineItem = (index: number) => {
    setAboutData({
      ...aboutData,
      timeline: aboutData.timeline.filter((_, i) => i !== index),
    });
  };

  const addQualityCommitment = () => {
    setAboutData({
      ...aboutData,
      qualityCommitments: [
        ...aboutData.qualityCommitments,
        { icon: '🌱', title: '', description: '' },
      ],
    });
  };

  const updateQualityCommitment = (index: number, field: keyof QualityCommitment, value: string) => {
    const newCommitments = [...aboutData.qualityCommitments];
    newCommitments[index] = { ...newCommitments[index], [field]: value };
    setAboutData({ ...aboutData, qualityCommitments: newCommitments });
  };

  const removeQualityCommitment = (index: number) => {
    setAboutData({
      ...aboutData,
      qualityCommitments: aboutData.qualityCommitments.filter((_, i) => i !== index),
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <p className="text-golden-glow">Loading about content...</p>
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
              About Us CMS
            </h1>
            <p className="text-foreground/70">
              Manage your brand story and company information
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={saveAboutData}
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

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: 'founder', label: '👨‍🍳 Founder Story', icon: '👨‍🍳' },
            { id: 'philosophy', label: '💭 Philosophy', icon: '💭' },
            { id: 'timeline', label: '📅 Timeline', icon: '📅' },
            { id: 'quality', label: '✨ Quality', icon: '✨' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-premium-orange text-pitch-black'
                  : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Founder Story Tab */}
        {activeTab === 'founder' && (
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">Founder Story</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    Founder Name
                  </label>
                  <input
                    type="text"
                    value={aboutData.founderStory.name}
                    onChange={(e) => setAboutData({
                      ...aboutData,
                      founderStory: { ...aboutData.founderStory, name: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={aboutData.founderStory.title}
                    onChange={(e) => setAboutData({
                      ...aboutData,
                      founderStory: { ...aboutData.founderStory, title: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={aboutData.founderStory.location}
                    onChange={(e) => setAboutData({
                      ...aboutData,
                      founderStory: { ...aboutData.founderStory, location: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground/80 mb-2">
                    Established
                  </label>
                  <input
                    type="text"
                    value={aboutData.founderStory.established}
                    onChange={(e) => setAboutData({
                      ...aboutData,
                      founderStory: { ...aboutData.founderStory, established: e.target.value }
                    })}
                    className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Story Paragraphs (one per line)
                </label>
                <textarea
                  value={aboutData.founderStory.paragraphs.join('\n\n')}
                  onChange={(e) => setAboutData({
                    ...aboutData,
                    founderStory: {
                      ...aboutData.founderStory,
                      paragraphs: e.target.value.split('\n\n').filter(p => p.trim())
                    }
                  })}
                  rows={10}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                  placeholder="Enter each paragraph separated by double line breaks..."
                />
              </div>
            </div>
          </Card>
        )}

        {/* Philosophy Tab */}
        {activeTab === 'philosophy' && (
          <Card>
            <h2 className="text-2xl font-bold text-golden-glow mb-6">Brand Philosophy</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={aboutData.philosophy.subtitle}
                  onChange={(e) => setAboutData({
                    ...aboutData,
                    philosophy: { ...aboutData.philosophy, subtitle: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Main Title
                </label>
                <input
                  type="text"
                  value={aboutData.philosophy.title}
                  onChange={(e) => setAboutData({
                    ...aboutData,
                    philosophy: { ...aboutData.philosophy, title: e.target.value }
                  })}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Description
                </label>
                <textarea
                  value={aboutData.philosophy.description}
                  onChange={(e) => setAboutData({
                    ...aboutData,
                    philosophy: { ...aboutData.philosophy, description: e.target.value }
                  })}
                  rows={4}
                  className="w-full px-4 py-3 bg-deep-space border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-golden-glow">Journey Timeline</h2>
              <Button variant="secondary" size="sm" onClick={addTimelineItem}>
                ➕ Add Event
              </Button>
            </div>

            <div className="space-y-4">
              {aboutData.timeline.map((item, index) => (
                <div key={index} className="p-4 bg-deep-space rounded-lg border border-charcoal">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/60 mb-2">
                        Date
                      </label>
                      <input
                        type="text"
                        value={item.date}
                        onChange={(e) => updateTimelineItem(index, 'date', e.target.value)}
                        className="w-full px-3 py-2 bg-pitch-black border border-charcoal rounded text-foreground focus:outline-none focus:border-golden-glow"
                        placeholder="Sep 2023"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground/60 mb-2">
                        Icon (emoji)
                      </label>
                      <input
                        type="text"
                        value={item.icon}
                        onChange={(e) => updateTimelineItem(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 bg-pitch-black border border-charcoal rounded text-foreground focus:outline-none focus:border-golden-glow"
                        placeholder="🏪"
                      />
                    </div>

                    <div className="flex items-end">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => removeTimelineItem(index)}
                        className="w-full"
                      >
                        🗑️ Remove
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-foreground/60 mb-2">
                      Event Description
                    </label>
                    <input
                      type="text"
                      value={item.event}
                      onChange={(e) => updateTimelineItem(index, 'event', e.target.value)}
                      className="w-full px-3 py-2 bg-pitch-black border border-charcoal rounded text-foreground focus:outline-none focus:border-golden-glow"
                      placeholder="Humble beginnings with small stall"
                    />
                  </div>
                </div>
              ))}

              {aboutData.timeline.length === 0 && (
                <div className="text-center py-12 text-foreground/50">
                  No timeline events yet. Click "Add Event" to create one.
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Quality Commitments Tab */}
        {activeTab === 'quality' && (
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-golden-glow">Quality Commitments</h2>
              <Button variant="secondary" size="sm" onClick={addQualityCommitment}>
                ➕ Add Commitment
              </Button>
            </div>

            <div className="space-y-4">
              {aboutData.qualityCommitments.map((commitment, index) => (
                <div key={index} className="p-4 bg-deep-space rounded-lg border border-charcoal">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground/60 mb-2">
                        Icon (emoji)
                      </label>
                      <input
                        type="text"
                        value={commitment.icon}
                        onChange={(e) => updateQualityCommitment(index, 'icon', e.target.value)}
                        className="w-full px-3 py-2 bg-pitch-black border border-charcoal rounded text-foreground focus:outline-none focus:border-golden-glow"
                        placeholder="🌱"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-foreground/60 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={commitment.title}
                        onChange={(e) => updateQualityCommitment(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 bg-pitch-black border border-charcoal rounded text-foreground focus:outline-none focus:border-golden-glow"
                        placeholder="Daily Fresh Ingredients"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-foreground/60 mb-2">
                      Description
                    </label>
                    <textarea
                      value={commitment.description}
                      onChange={(e) => updateQualityCommitment(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 bg-pitch-black border border-charcoal rounded text-foreground focus:outline-none focus:border-golden-glow"
                      placeholder="We source fresh vegetables and ingredients from local markets every morning..."
                    />
                  </div>

                  <div className="mt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeQualityCommitment(index)}
                    >
                      🗑️ Remove
                    </Button>
                  </div>
                </div>
              ))}

              {aboutData.qualityCommitments.length === 0 && (
                <div className="text-center py-12 text-foreground/50">
                  No quality commitments yet. Click "Add Commitment" to create one.
                </div>
              )}
            </div>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
