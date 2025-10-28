'use client';

import React, { useState, useEffect } from 'react';
import { PageBuilder, PageSection } from '@/components/cms/PageBuilder';
import { ButtonEditor, ButtonStyle } from '@/components/cms/ButtonEditor';
import { BackgroundMediaControl, BackgroundMedia } from '@/components/cms/BackgroundMediaControl';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const DEFAULT_SECTIONS: PageSection[] = [
  {
    id: 'hero',
    name: 'Hero Section',
    visible: true,
    order: 0,
    layout: {
      columns: 1,
      spacing: 48,
      container: 'full',
    },
    styles: {
      background: '#0A0A0A',
      textColor: '#FFFFFF',
      fontFamily: 'Inter',
      fontSize: 16,
    },
  },
  {
    id: 'features',
    name: 'Features Section',
    visible: true,
    order: 1,
    layout: {
      columns: 3,
      spacing: 24,
      container: 'boxed',
    },
    styles: {
      background: '#1A1A1A',
      textColor: '#E5E5E5',
      fontFamily: 'Inter',
      fontSize: 16,
    },
  },
  {
    id: 'menu',
    name: 'Menu Section',
    visible: true,
    order: 2,
    layout: {
      columns: 4,
      spacing: 16,
      container: 'boxed',
    },
    styles: {
      background: '#0A0A0A',
      textColor: '#FFFFFF',
      fontFamily: 'Inter',
      fontSize: 14,
    },
  },
  {
    id: 'testimonials',
    name: 'Testimonials Section',
    visible: true,
    order: 3,
    layout: {
      columns: 2,
      spacing: 32,
      container: 'boxed',
    },
    styles: {
      background: '#1A1A1A',
      textColor: '#E5E5E5',
      fontFamily: 'Inter',
      fontSize: 16,
    },
  },
  {
    id: 'cta',
    name: 'Call to Action',
    visible: true,
    order: 4,
    layout: {
      columns: 1,
      spacing: 48,
      container: 'boxed',
    },
    styles: {
      background: '#FF6B35',
      textColor: '#0A0A0A',
      fontFamily: 'Poppins',
      fontSize: 18,
    },
  },
];

export default function VisualPageBuilderPage() {
  const [selectedPage, setSelectedPage] = useState('homepage');
  const [sections, setSections] = useState<PageSection[]>(DEFAULT_SECTIONS);
  const [isLoading, setIsLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [showAdvancedControls, setShowAdvancedControls] = useState(false);

  const [heroButtonStyle, setHeroButtonStyle] = useState<ButtonStyle>({
    text: 'Order Now',
    backgroundColor: '#FF6B35',
    textColor: '#0A0A0A',
    borderWidth: 0,
    borderColor: '#FFD700',
    borderRadius: 8,
    hoverEffect: 'lift',
  });

  const [heroBackgroundMedia, setHeroBackgroundMedia] = useState<BackgroundMedia>({
    type: 'image',
    url: '/images/hero-bg.jpg',
    overlayColor: '#000000',
    overlayOpacity: 0.5,
    parallax: true,
  });

  useEffect(() => {
    loadPageConfiguration();
  }, [selectedPage]);

  const loadPageConfiguration = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/cms/page-builder?page=${selectedPage}`);
      if (response.ok) {
        const data = await response.json();
        if (data.sections && data.sections.length > 0) {
          setSections(data.sections);
        } else {
          setSections(DEFAULT_SECTIONS);
        }
      }
    } catch (error) {
      console.error('Error loading page configuration:', error);
      setSections(DEFAULT_SECTIONS);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    setSaveMessage('');

    try {
      const response = await fetch('/api/cms/page-builder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageName: selectedPage,
          sections,
        }),
      });

      if (response.ok) {
        setSaveMessage('✅ Page configuration saved successfully!');
      } else {
        setSaveMessage('❌ Failed to save page configuration');
      }
    } catch (error) {
      setSaveMessage('❌ Error saving changes');
    } finally {
      setIsLoading(false);
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const pages = [
    { value: 'homepage', label: '🏠 Homepage' },
    { value: 'menu', label: '🍽️ Menu' },
    { value: 'about', label: '📖 About' },
    { value: 'contact', label: '📞 Contact' },
    { value: 'gallery', label: '📸 Gallery' },
    { value: 'combos', label: '🎁 Combos' },
    { value: 'catering', label: '🎉 Catering' },
    { value: 'franchise', label: '🤝 Franchise' },
    { value: 'download-app', label: '📱 Download App' },
    { value: 'legal-pages', label: '📄 Legal Pages' },
    { value: 'careers', label: '💼 Careers' },
  ];

  return (
    <div className="min-h-screen bg-pitch-black">
      {/* Header */}
      <div className="bg-deep-space border-b border-charcoal p-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold text-premium-orange mb-2">
                🎨 Visual Page Builder
              </h1>
              <p className="text-foreground/70">
                Complete visual control over all 11 pages - drag, drop, style, and customize
              </p>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="px-4 py-3 bg-pitch-black border border-charcoal rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors"
              >
                {pages.map((page) => (
                  <option key={page.value} value={page.value}>
                    {page.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {saveMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg ${
                saveMessage.includes('✅')
                  ? 'bg-vegetarian-green/20 border border-vegetarian-green'
                  : 'bg-warm-orange/20 border border-warm-orange'
              }`}
            >
              <p className="text-foreground">{saveMessage}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Main Content */}
      {isLoading ? (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="text-6xl mb-4">⏳</div>
            <p className="text-foreground/60">Loading page configuration...</p>
          </div>
        </div>
      ) : (
        <>
          <PageBuilder
            pageName={selectedPage}
            sections={sections}
            onSectionsChange={setSections}
            onSave={handleSave}
          />

          {/* Advanced Controls Toggle */}
          <div className="max-w-7xl mx-auto px-6 py-6">
            <button
              onClick={() => setShowAdvancedControls(!showAdvancedControls)}
              className="w-full px-6 py-4 bg-deep-space border border-charcoal rounded-lg text-left hover:border-golden-glow transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-golden-glow">
                    🎛️ Advanced Component Controls
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    Button styles, background media, and more
                  </p>
                </div>
                <div className="text-2xl">
                  {showAdvancedControls ? '▼' : '▶'}
                </div>
              </div>
            </button>

            {showAdvancedControls && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {/* Button Editor */}
                <ButtonEditor
                  buttonStyle={heroButtonStyle}
                  onUpdate={setHeroButtonStyle}
                  label="Hero CTA Button"
                />

                {/* Background Media Control */}
                <BackgroundMediaControl
                  media={heroBackgroundMedia}
                  onUpdate={setHeroBackgroundMedia}
                  label="Hero Background"
                />
              </motion.div>
            )}
          </div>

          {/* Feature Highlights */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-golden-glow mb-6">
                ✨ What You Can Control
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-pitch-black rounded-lg border border-charcoal">
                  <div className="text-3xl mb-3">🎨</div>
                  <h3 className="font-bold text-foreground mb-2">Visual Styles</h3>
                  <p className="text-sm text-foreground/60">
                    Colors, fonts, sizes - complete design control
                  </p>
                </div>

                <div className="p-4 bg-pitch-black rounded-lg border border-charcoal">
                  <div className="text-3xl mb-3">📐</div>
                  <h3 className="font-bold text-foreground mb-2">Layout Control</h3>
                  <p className="text-sm text-foreground/60">
                    Grid columns, spacing, container width
                  </p>
                </div>

                <div className="p-4 bg-pitch-black rounded-lg border border-charcoal">
                  <div className="text-3xl mb-3">🔘</div>
                  <h3 className="font-bold text-foreground mb-2">Button Styles</h3>
                  <p className="text-sm text-foreground/60">
                    Text, colors, borders, hover effects
                  </p>
                </div>

                <div className="p-4 bg-pitch-black rounded-lg border border-charcoal">
                  <div className="text-3xl mb-3">🖼️</div>
                  <h3 className="font-bold text-foreground mb-2">Background Media</h3>
                  <p className="text-sm text-foreground/60">
                    Images, videos, overlays, parallax
                  </p>
                </div>

                <div className="p-4 bg-pitch-black rounded-lg border border-charcoal">
                  <div className="text-3xl mb-3">👁️</div>
                  <h3 className="font-bold text-foreground mb-2">Visibility Toggle</h3>
                  <p className="text-sm text-foreground/60">
                    Show/hide any section instantly
                  </p>
                </div>

                <div className="p-4 bg-pitch-black rounded-lg border border-charcoal">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="font-bold text-foreground mb-2">Drag & Drop</h3>
                  <p className="text-sm text-foreground/60">
                    Reorder sections with drag and drop
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
