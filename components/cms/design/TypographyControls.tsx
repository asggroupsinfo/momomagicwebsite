'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypographyControlsProps {
  viewMode: 'simple' | 'advanced';
}

interface TypographySettings {
  headingFont: string;
  bodyFont: string;
  h1Size: number;
  h2Size: number;
  h3Size: number;
  bodySize: number;
  headingWeight: number;
  bodyWeight: number;
  lineHeight: number;
}

const fontOptions = [
  { name: 'Poppins', value: 'Poppins, sans-serif' },
  { name: 'Inter', value: 'Inter, sans-serif' },
  { name: 'Montserrat', value: 'Montserrat, sans-serif' },
  { name: 'Roboto', value: 'Roboto, sans-serif' },
  { name: 'Open Sans', value: '"Open Sans", sans-serif' },
  { name: 'Lato', value: 'Lato, sans-serif' },
  { name: 'Raleway', value: 'Raleway, sans-serif' },
  { name: 'Playfair Display', value: '"Playfair Display", serif' },
];

const defaultSettings: TypographySettings = {
  headingFont: 'Poppins, sans-serif',
  bodyFont: 'Inter, sans-serif',
  h1Size: 48,
  h2Size: 32,
  h3Size: 24,
  bodySize: 16,
  headingWeight: 700,
  bodyWeight: 400,
  lineHeight: 1.5,
};

export const TypographyControls: React.FC<TypographyControlsProps> = ({ viewMode }) => {
  const [settings, setSettings] = useState<TypographySettings>(defaultSettings);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadTypographySettings();
  }, []);

  const loadTypographySettings = async () => {
    try {
      const response = await fetch('/api/cms/design/typography');
      if (response.ok) {
        const data = await response.json();
        if (data.settings) {
          setSettings(data.settings);
          applyTypographyToDOM(data.settings);
        }
      }
    } catch (error) {
      console.error('Failed to load typography settings:', error);
    }
  };

  const updateSetting = <K extends keyof TypographySettings>(
    key: K,
    value: TypographySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyTypographyToDOM(newSettings);
  };

  const applyTypographyToDOM = (typo: TypographySettings) => {
    const root = document.documentElement;
    root.style.setProperty('--font-heading', typo.headingFont);
    root.style.setProperty('--font-body', typo.bodyFont);
    root.style.setProperty('--text-h1', `${typo.h1Size}px`);
    root.style.setProperty('--text-h2', `${typo.h2Size}px`);
    root.style.setProperty('--text-h3', `${typo.h3Size}px`);
    root.style.setProperty('--text-body', `${typo.bodySize}px`);
    root.style.setProperty('--font-weight-heading', typo.headingWeight.toString());
    root.style.setProperty('--font-weight-body', typo.bodyWeight.toString());
    root.style.setProperty('--line-height', typo.lineHeight.toString());
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      await fetch('/api/cms/design/typography', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings }),
      });
      setTimeout(() => setIsSaving(false), 1000);
    } catch (error) {
      console.error('Failed to save typography settings:', error);
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Font Family Selectors */}
      <div>
        <h3 className="text-white font-bold mb-3">Font Families</h3>
        
        {/* Heading Font */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20 mb-3">
          <label className="text-white font-semibold text-sm mb-2 block">
            Heading Font
          </label>
          <select
            value={settings.headingFont}
            onChange={(e) => updateSetting('headingFont', e.target.value)}
            className="w-full bg-charcoal border border-premium-orange/30 rounded-lg px-4 py-3 text-white focus:border-premium-orange focus:outline-none"
            style={{ fontFamily: settings.headingFont }}
          >
            {fontOptions.map((font) => (
              <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                {font.name}
              </option>
            ))}
          </select>
        </div>

        {/* Body Font */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
          <label className="text-white font-semibold text-sm mb-2 block">
            Body Font
          </label>
          <select
            value={settings.bodyFont}
            onChange={(e) => updateSetting('bodyFont', e.target.value)}
            className="w-full bg-charcoal border border-premium-orange/30 rounded-lg px-4 py-3 text-white focus:border-premium-orange focus:outline-none"
            style={{ fontFamily: settings.bodyFont }}
          >
            {fontOptions.map((font) => (
              <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                {font.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Font Sizes */}
      <div>
        <h3 className="text-white font-bold mb-3">Font Sizes</h3>
        
        {/* H1 Size */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20 mb-3">
          <div className="flex items-center justify-between mb-2">
            <label className="text-white font-semibold text-sm">
              Heading 1 (H1)
            </label>
            <span className="text-premium-orange font-bold">{settings.h1Size}px</span>
          </div>
          <input
            type="range"
            min="32"
            max="64"
            value={settings.h1Size}
            onChange={(e) => updateSetting('h1Size', parseInt(e.target.value))}
            className="w-full accent-premium-orange"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>32px</span>
            <span>64px</span>
          </div>
        </div>

        {/* H2 Size */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20 mb-3">
          <div className="flex items-center justify-between mb-2">
            <label className="text-white font-semibold text-sm">
              Heading 2 (H2)
            </label>
            <span className="text-premium-orange font-bold">{settings.h2Size}px</span>
          </div>
          <input
            type="range"
            min="24"
            max="48"
            value={settings.h2Size}
            onChange={(e) => updateSetting('h2Size', parseInt(e.target.value))}
            className="w-full accent-premium-orange"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>24px</span>
            <span>48px</span>
          </div>
        </div>

        {/* H3 Size */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20 mb-3">
          <div className="flex items-center justify-between mb-2">
            <label className="text-white font-semibold text-sm">
              Heading 3 (H3)
            </label>
            <span className="text-premium-orange font-bold">{settings.h3Size}px</span>
          </div>
          <input
            type="range"
            min="20"
            max="36"
            value={settings.h3Size}
            onChange={(e) => updateSetting('h3Size', parseInt(e.target.value))}
            className="w-full accent-premium-orange"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>20px</span>
            <span>36px</span>
          </div>
        </div>

        {/* Body Size */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
          <div className="flex items-center justify-between mb-2">
            <label className="text-white font-semibold text-sm">
              Body Text
            </label>
            <span className="text-premium-orange font-bold">{settings.bodySize}px</span>
          </div>
          <input
            type="range"
            min="14"
            max="20"
            value={settings.bodySize}
            onChange={(e) => updateSetting('bodySize', parseInt(e.target.value))}
            className="w-full accent-premium-orange"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>14px</span>
            <span>20px</span>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div>
        <h3 className="text-white font-bold mb-3">Font Weights</h3>
        
        {/* Heading Weight */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20 mb-3">
          <label className="text-white font-semibold text-sm mb-3 block">
            Heading Weight
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[400, 500, 600, 700].map((weight) => (
              <button
                key={weight}
                onClick={() => updateSetting('headingWeight', weight)}
                className={`py-2 rounded-lg font-bold transition-all ${
                  settings.headingWeight === weight
                    ? 'bg-premium-orange text-pitch-black'
                    : 'bg-charcoal text-gray-400 hover:text-white'
                }`}
                style={{ fontWeight: weight }}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>

        {/* Body Weight */}
        <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
          <label className="text-white font-semibold text-sm mb-3 block">
            Body Weight
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[300, 400, 500, 600].map((weight) => (
              <button
                key={weight}
                onClick={() => updateSetting('bodyWeight', weight)}
                className={`py-2 rounded-lg font-bold transition-all ${
                  settings.bodyWeight === weight
                    ? 'bg-premium-orange text-pitch-black'
                    : 'bg-charcoal text-gray-400 hover:text-white'
                }`}
                style={{ fontWeight: weight }}
              >
                {weight}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Line Height */}
      <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
        <div className="flex items-center justify-between mb-2">
          <label className="text-white font-semibold text-sm">
            Line Height
          </label>
          <span className="text-premium-orange font-bold">{settings.lineHeight}</span>
        </div>
        <input
          type="range"
          min="1.2"
          max="2.0"
          step="0.1"
          value={settings.lineHeight}
          onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
          className="w-full accent-premium-orange"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Tight (1.2)</span>
          <span>Loose (2.0)</span>
        </div>
      </div>

      {/* Live Preview */}
      <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
        <h3 className="text-white font-bold mb-3">Live Preview</h3>
        <div className="space-y-4">
          <h1
            style={{
              fontFamily: settings.headingFont,
              fontSize: `${settings.h1Size}px`,
              fontWeight: settings.headingWeight,
              lineHeight: settings.lineHeight,
            }}
            className="text-white"
          >
            Heading 1 Sample
          </h1>
          <h2
            style={{
              fontFamily: settings.headingFont,
              fontSize: `${settings.h2Size}px`,
              fontWeight: settings.headingWeight,
              lineHeight: settings.lineHeight,
            }}
            className="text-white"
          >
            Heading 2 Sample
          </h2>
          <h3
            style={{
              fontFamily: settings.headingFont,
              fontSize: `${settings.h3Size}px`,
              fontWeight: settings.headingWeight,
              lineHeight: settings.lineHeight,
            }}
            className="text-white"
          >
            Heading 3 Sample
          </h3>
          <p
            style={{
              fontFamily: settings.bodyFont,
              fontSize: `${settings.bodySize}px`,
              fontWeight: settings.bodyWeight,
              lineHeight: settings.lineHeight,
            }}
            className="text-gray-300"
          >
            This is sample body text to demonstrate how your typography settings look. 
            The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={saveSettings}
        disabled={isSaving}
        className="w-full bg-premium-orange text-pitch-black py-3 rounded-lg font-bold hover:bg-golden-glow transition-all disabled:opacity-50"
      >
        {isSaving ? 'Saving...' : '💾 Save Typography Settings'}
      </button>
    </div>
  );
};
