'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorPicker } from './design/ColorPicker';
import { TypographyControls } from './design/TypographyControls';
import { LayoutControls } from './design/LayoutControls';

interface DesignSystemManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'colors' | 'typography' | 'layout';

export const DesignSystemManager: React.FC<DesignSystemManagerProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('colors');
  const [viewMode, setViewMode] = useState<'simple' | 'advanced'>('simple');

  if (!isOpen) return null;

  const tabs = [
    { id: 'colors' as TabType, label: 'Colors', icon: '🎨' },
    { id: 'typography' as TabType, label: 'Typography', icon: '🔤' },
    { id: 'layout' as TabType, label: 'Layout', icon: '📐' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-pitch-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="absolute right-0 top-0 h-full w-full md:w-[800px] bg-charcoal shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-deep-space border-b border-premium-orange/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-premium-orange flex items-center gap-2">
                🎨 Design Controls
              </h2>
              <div className="flex items-center gap-3">
                {/* View Mode Toggle */}
                <div className="flex bg-pitch-black rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('simple')}
                    className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
                      viewMode === 'simple'
                        ? 'bg-premium-orange text-pitch-black'
                        : 'text-gray-400'
                    }`}
                  >
                    Simple
                  </button>
                  <button
                    onClick={() => setViewMode('advanced')}
                    className={`px-3 py-1 rounded text-sm font-semibold transition-all ${
                      viewMode === 'advanced'
                        ? 'bg-premium-orange text-pitch-black'
                        : 'text-gray-400'
                    }`}
                  >
                    Advanced
                  </button>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-premium-orange text-pitch-black'
                      : 'bg-pitch-black text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'colors' && (
                <motion.div
                  key="colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <ColorPicker viewMode={viewMode} />
                </motion.div>
              )}
              
              {activeTab === 'typography' && (
                <motion.div
                  key="typography"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <TypographyControls viewMode={viewMode} />
                </motion.div>
              )}
              
              {activeTab === 'layout' && (
                <motion.div
                  key="layout"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <LayoutControls viewMode={viewMode} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="bg-deep-space border-t border-premium-orange/20 p-4">
            <div className="flex gap-3">
              <button className="flex-1 bg-premium-orange text-pitch-black py-3 rounded-lg font-bold hover:bg-golden-glow transition-all">
                💾 Save Changes
              </button>
              <button className="px-6 py-3 rounded-lg border-2 border-premium-orange text-premium-orange hover:bg-premium-orange hover:text-pitch-black transition-all font-bold">
                👁️ Preview
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-3 rounded-lg border-2 border-gray-600 text-gray-400 hover:border-gray-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
