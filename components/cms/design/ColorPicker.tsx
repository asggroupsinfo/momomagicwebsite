'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ColorPickerProps {
  viewMode: 'simple' | 'advanced';
}

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

interface ColorPreset {
  name: string;
  colors: ColorPalette;
}

const defaultPalette: ColorPalette = {
  primary: '#000000',
  secondary: '#ffc241',
  accent: '#ffd700',
  background: '#0a0a0a',
  text: '#ffffff',
};

const colorPresets: ColorPreset[] = [
  {
    name: 'Original',
    colors: {
      primary: '#000000',
      secondary: '#ffc241',
      accent: '#ffd700',
      background: '#0a0a0a',
      text: '#ffffff',
    },
  },
  {
    name: 'Premium',
    colors: {
      primary: '#1a1a1a',
      secondary: '#ff6b35',
      accent: '#ffd166',
      background: '#0f0f0f',
      text: '#f5f5f5',
    },
  },
  {
    name: 'Modern',
    colors: {
      primary: '#2d3047',
      secondary: '#ff9a71',
      accent: '#fffd82',
      background: '#1a1d2e',
      text: '#f0f0f0',
    },
  },
  {
    name: 'Ocean',
    colors: {
      primary: '#0d1b2a',
      secondary: '#1b98e0',
      accent: '#13c2c2',
      background: '#0a1128',
      text: '#e0fbfc',
    },
  },
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ viewMode }) => {
  const [palette, setPalette] = useState<ColorPalette>(defaultPalette);
  const [selectedColor, setSelectedColor] = useState<keyof ColorPalette>('primary');
  const [darkMode, setDarkMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadCurrentPalette();
  }, []);

  const loadCurrentPalette = async () => {
    try {
      const response = await fetch('/api/cms/design/colors');
      if (response.ok) {
        const data = await response.json();
        if (data.palette) {
          setPalette(data.palette);
        }
      }
    } catch (error) {
      console.error('Failed to load color palette:', error);
    }
  };

  const updateColor = (key: keyof ColorPalette, value: string) => {
    const newPalette = { ...palette, [key]: value };
    setPalette(newPalette);
    applyColorsToDOM(newPalette);
  };

  const applyColorsToDOM = (colors: ColorPalette) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-text', colors.text);
  };

  const loadPreset = (preset: ColorPreset) => {
    setPalette(preset.colors);
    applyColorsToDOM(preset.colors);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      const darkPalette = {
        ...palette,
        background: '#0a0a0a',
        text: '#ffffff',
      };
      setPalette(darkPalette);
      applyColorsToDOM(darkPalette);
    } else {
      const lightPalette = {
        ...palette,
        background: '#ffffff',
        text: '#000000',
      };
      setPalette(lightPalette);
      applyColorsToDOM(lightPalette);
    }
  };

  const saveColors = async () => {
    setIsSaving(true);
    try {
      await fetch('/api/cms/design/colors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ palette, darkMode }),
      });
      setTimeout(() => setIsSaving(false), 1000);
    } catch (error) {
      console.error('Failed to save colors:', error);
      setIsSaving(false);
    }
  };

  const colorLabels: Record<keyof ColorPalette, string> = {
    primary: 'Primary (Headings, Borders)',
    secondary: 'Secondary (Buttons, Links)',
    accent: 'Accent (Highlights)',
    background: 'Background',
    text: 'Text Color',
  };

  return (
    <div className="space-y-6">
      {/* Dark/Light Mode Toggle */}
      <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold mb-1">Theme Mode</h3>
            <p className="text-gray-400 text-sm">Switch between dark and light themes</p>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`relative w-16 h-8 rounded-full transition-all ${
              darkMode ? 'bg-premium-orange' : 'bg-gray-600'
            }`}
          >
            <motion.div
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
              animate={{ left: darkMode ? '36px' : '4px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <span className="text-xs">{darkMode ? '🌙' : '☀️'}</span>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Color Presets */}
      <div>
        <h3 className="text-white font-bold mb-3">Color Presets</h3>
        <div className="grid grid-cols-2 gap-3">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => loadPreset(preset)}
              className="bg-pitch-black rounded-lg p-3 border border-premium-orange/20 hover:border-premium-orange transition-all group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-semibold text-sm">{preset.name}</span>
              </div>
              <div className="flex gap-1">
                {Object.values(preset.colors).slice(0, 5).map((color, i) => (
                  <div
                    key={i}
                    className="flex-1 h-8 rounded"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Controls */}
      <div>
        <h3 className="text-white font-bold mb-3">Brand Colors</h3>
        <div className="space-y-3">
          {(Object.keys(palette) as Array<keyof ColorPalette>).map((key) => (
            <div
              key={key}
              className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20"
            >
              <div className="flex items-center justify-between mb-2">
                <label className="text-white font-semibold text-sm">
                  {colorLabels[key]}
                </label>
                <span className="text-gray-400 text-xs font-mono">
                  {palette[key]}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Color Preview */}
                <div
                  className="w-12 h-12 rounded-lg border-2 border-white/20 shadow-lg cursor-pointer"
                  style={{ backgroundColor: palette[key] }}
                  onClick={() => setSelectedColor(key)}
                />
                
                {/* Color Input */}
                <input
                  type="color"
                  value={palette[key]}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="flex-1 h-12 rounded-lg cursor-pointer"
                />
                
                {/* Hex Input */}
                <input
                  type="text"
                  value={palette[key]}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="w-24 bg-charcoal border border-premium-orange/30 rounded-lg px-3 py-2 text-white text-sm font-mono focus:border-premium-orange focus:outline-none"
                  placeholder="#000000"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview */}
      <div className="bg-pitch-black rounded-lg p-4 border border-premium-orange/20">
        <h3 className="text-white font-bold mb-3">Live Preview</h3>
        <div
          className="rounded-lg p-6 space-y-4"
          style={{
            backgroundColor: palette.background,
            color: palette.text,
          }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ color: palette.primary }}
          >
            Sample Heading
          </h2>
          <p style={{ color: palette.text }}>
            This is sample body text to show how your colors look together.
          </p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded-lg font-bold"
              style={{
                backgroundColor: palette.secondary,
                color: palette.primary,
              }}
            >
              Primary Button
            </button>
            <button
              className="px-4 py-2 rounded-lg font-bold border-2"
              style={{
                borderColor: palette.secondary,
                color: palette.secondary,
              }}
            >
              Secondary Button
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={saveColors}
        disabled={isSaving}
        className="w-full bg-premium-orange text-pitch-black py-3 rounded-lg font-bold hover:bg-golden-glow transition-all disabled:opacity-50"
      >
        {isSaving ? 'Saving...' : '💾 Save Color Scheme'}
      </button>
    </div>
  );
};
