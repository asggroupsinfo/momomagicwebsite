'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEditMode } from '@/contexts/EditModeContext';

export const EditModeToggle: React.FC = () => {
  const { editMode, toggleEditMode } = useEditMode();

  return (
    <motion.button
      onClick={toggleEditMode}
      className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 flex items-center gap-2 ${
        editMode
          ? 'bg-premium-orange text-pitch-black'
          : 'bg-charcoal text-gray-300 border-2 border-premium-orange/30'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-xl">{editMode ? '✏️' : '👁️'}</span>
      <span>{editMode ? 'Edit Mode ON' : 'View Mode'}</span>
      
      {editMode && (
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-vegetarian-green rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}
    </motion.button>
  );
};
