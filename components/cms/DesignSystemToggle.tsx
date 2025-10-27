'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DesignSystemManager } from './DesignSystemManager';

export const DesignSystemToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-premium-orange text-pitch-black p-4 rounded-full shadow-2xl hover:bg-golden-glow transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎨</span>
          <span className="hidden group-hover:inline-block font-bold text-sm whitespace-nowrap">
            Design Controls
          </span>
        </div>
      </motion.button>

      {/* Design System Manager Modal */}
      <DesignSystemManager isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
