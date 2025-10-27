'use client';

import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';

interface LayoutControlsProps {
  viewMode: 'simple' | 'advanced';
}

interface Section {
  id: string;
  title: string;
  visible: boolean;
  order: number;
  icon: string;
}

interface LayoutSettings {
  sections: Section[];
  containerWidth: string;
  sectionSpacing: number;
  gridColumns: number;
}

const defaultSections: Section[] = [
  { id: 'hero', title: 'Hero Section', visible: true, order: 1, icon: '🎯' },
  { id: 'story', title: 'Brand Story', visible: true, order: 2, icon: '📖' },
  { id: 'menu', title: 'Featured Menu', visible: true, order: 3, icon: '🥟' },
  { id: 'testimonials', title: 'Customer Reviews', visible: true, order: 4, icon: '⭐' },
  { id: 'location', title: 'Location & Contact', visible: true, order: 5, icon: '📍' },
  { id: 'newsletter', title: 'Newsletter Signup', visible: true, order: 6, icon: '📧' },
];

const containerWidthOptions = [
  { name: 'Full Width', value: '100%', class: 'container-full' },
  { name: 'Boxed Large', value: '1280px', class: 'container-xl' },
  { name: 'Boxed Medium', value: '1024px', class: 'container-lg' },
  { name: 'Boxed Small', value: '768px', class: 'container-md' },
];

export const LayoutControls: React.FC<LayoutControlsProps> = ({ viewMode }) => {
  const [sections, setSections] = useState<Section[]>(defaultSections);
  const [containerWidth, setContainerWidth] = useState('1280px');
  const [sectionSpacing, setSectionSpacing] = useState(80);
  const [gridColumns, setGridColumns] = useState(3);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadLayoutSettings();
  }, []);

  const loadLayoutSettings = async () => {
    try {
      const response = await fetch('/api/cms/design/layout');
      if (response.ok) {
        const data = await response.json();
        if (data.settings) {
          setSections(data.settings.sections || defaultSections);
          setContainerWidth(data.settings.containerWidth || '1280px');
          setSectionSpacing(data.settings.sectionSpacing || 80);
          setGridColumns(data.settings.gridColumns || 3);
        }
      }
    } catch (error) {
      console.error('Failed to load layout settings:', error);
    }
  };

  const toggleSectionVisibility = (id: string) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, visible: !section.visible } : section
    ));
  };

  const updateSectionOrder = (newOrder: Section[]) => {
    const updatedSections = newOrder.map((section, index) => ({
      ...section,
      order: index + 1,
    }));
    setSections(updatedSections);
  };

  const updateContainerWidth = (width: string) => {
    setContainerWidth(width);
    const root = document.documentElement;
    root.style.setProperty('--container-width', width);
  };

  const updateSectionSpacing = (spacing: number) => {
    setSectionSpacing(spacing);
    const root = document.documentElement;
    root.style.setProperty('--section-spacing', `${spacing}px`);
  };

  const updateGridColumns = (columns: number) => {
    setGridColumns(columns);
    const root = document.documentElement;
    root.style.setProperty('--grid-columns', columns.toString());
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      await fetch('/api/cms/design/layout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          settings: {
            sections,
            containerWidth,
            sectionSpacing,
            gridColumns,
          },
        }),
      });
      setTimeout(() => setIsSaving(false), 1000);
    } catch (error) {
      console.error('Failed to save layout settings:', error);
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Visibility & Reordering */}
      <div>
        <h3 className="text-white font-bold mb-3">Section Manager</h3>
        <p className="text-gray-400 text-sm mb-4">
          Drag to reorder sections, toggle visibility with the switch
        </p>
        
        <Reorder.Group
          axis="y"
          values={sections}
          onReorder={updateSectionOrder}
          className="space-y-2"
        >
          {sections.map((section) => (
            <Reorder.Item
              key={section.id}
              value={section}
              className="bg-pitch-black rounded-lg border border-premium-orange/20 cursor-grab active:cursor-grabbing"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Drag Handle */}
                  <div className="text-gray-400 hover:text-premium-orange transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
                    </svg>
                  </div>
                  
                  {/* Section Info */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{section.icon}</span>
                    <div>
                      <p className="text-white font-semibold">{section.title}</p>
                      <p className="text-xs text-gray-400">Order: {section.order}</p>
                    </div>
                  </div>
                </div>

                {/* Visibility Toggle */}
                <button
                  onClick={() => toggleSectionVisibility(section.id)}
                  className={`relative w-12 h-6 rounded-full transition-all ${
                    section.visible ? 'bg-premium-orange' : 'bg-gray-600'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                    animate={{ left: section.visible ? '28px' : '4px' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      {/* Container Width */}
      <div>
        <h3 className="text-white font-bold mb-3">Container Width</h3>
        <div className="grid grid-cols-2 gap-2">
          {containerWidthOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateContainerWidth(option.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                containerWidth === option.value
                  ? 'border-premium-orange bg-premium-orange/10 text-white'
                  : 'border-premium-orange/20 bg-pitch-black text-gray-400 hover:text-white'
              }`}
            >
              <div className="font-semibold text-sm">{option.name}</div>
              <div className="text-xs opacity-70">{option.value}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Section Spacing */}
      <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
        <div className="flex items-center justify-between mb-2">
          <label className="text-white font-semibold text-sm">
            Section Spacing
          </label>
          <span className="text-premium-orange font-bold">{sectionSpacing}px</span>
        </div>
        <input
          type="range"
          min="40"
          max="160"
          step="10"
          value={sectionSpacing}
          onChange={(e) => updateSectionSpacing(parseInt(e.target.value))}
          className="w-full accent-premium-orange"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Tight (40px)</span>
          <span>Loose (160px)</span>
        </div>
      </div>

      {/* Grid Columns */}
      <div>
        <h3 className="text-white font-bold mb-3">Grid Layout (Menu Items)</h3>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((cols) => (
            <button
              key={cols}
              onClick={() => updateGridColumns(cols)}
              className={`p-4 rounded-lg border-2 transition-all ${
                gridColumns === cols
                  ? 'border-premium-orange bg-premium-orange/10 text-white'
                  : 'border-premium-orange/20 bg-pitch-black text-gray-400 hover:text-white'
              }`}
            >
              <div className="font-bold text-2xl mb-1">{cols}</div>
              <div className="text-xs">Column{cols > 1 ? 's' : ''}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Preview */}
      <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
        <h3 className="text-white font-bold mb-3">Layout Preview</h3>
        <div className="space-y-2">
          {sections
            .filter(s => s.visible)
            .sort((a, b) => a.order - b.order)
            .map((section) => (
              <div
                key={section.id}
                className="bg-charcoal rounded p-3 flex items-center gap-2"
                style={{ marginBottom: `${sectionSpacing / 10}px` }}
              >
                <span>{section.icon}</span>
                <span className="text-white text-sm">{section.title}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setSections(sections.map(s => ({ ...s, visible: true })))}
          className="py-2 px-4 rounded-lg border-2 border-premium-orange text-premium-orange hover:bg-premium-orange hover:text-pitch-black transition-all font-semibold"
        >
          Show All
        </button>
        <button
          onClick={() => setSections(defaultSections)}
          className="py-2 px-4 rounded-lg border-2 border-gray-600 text-gray-400 hover:border-gray-400 transition-all font-semibold"
        >
          Reset Order
        </button>
      </div>

      {/* Save Button */}
      <button
        onClick={saveSettings}
        disabled={isSaving}
        className="w-full bg-premium-orange text-pitch-black py-3 rounded-lg font-bold hover:bg-golden-glow transition-all disabled:opacity-50"
      >
        {isSaving ? 'Saving...' : '💾 Save Layout Settings'}
      </button>
    </div>
  );
};
