'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface EditableButtonProps {
  text: string;
  link: string;
  onSave: (text: string, link: string) => Promise<void>;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  editMode?: boolean;
  onClick?: () => void;
}

export const EditableButton: React.FC<EditableButtonProps> = ({
  text,
  link,
  onSave,
  variant = 'primary',
  size = 'md',
  className = '',
  editMode = false,
  onClick,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState(text);
  const [buttonLink, setButtonLink] = useState(link);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(buttonText, buttonLink);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save button:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setButtonText(text);
    setButtonLink(link);
    setIsEditing(false);
  };

  if (!editMode) {
    return (
      <Button variant={variant} size={size} className={className} onClick={onClick}>
        {text}
      </Button>
    );
  }

  return (
    <div className="relative">
      {isEditing ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-charcoal border-2 border-premium-orange rounded-lg p-4 shadow-xl"
        >
          <h4 className="text-white font-bold mb-3">Edit Button</h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Button Text</label>
              <input
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                className="w-full bg-pitch-black border border-premium-orange/30 rounded-lg px-3 py-2 text-white focus:border-premium-orange focus:outline-none"
                placeholder="Enter button text"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm mb-1">Link URL</label>
              <input
                type="text"
                value={buttonLink}
                onChange={(e) => setButtonLink(e.target.value)}
                className="w-full bg-pitch-black border border-premium-orange/30 rounded-lg px-3 py-2 text-white focus:border-premium-orange focus:outline-none"
                placeholder="/menu or https://..."
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 bg-premium-orange text-pitch-black px-4 py-2 rounded-lg font-bold hover:bg-golden-glow transition-all disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save'}
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg border border-gray-600 text-gray-400 hover:border-gray-400 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="relative group">
          <Button 
            variant={variant} 
            size={size} 
            className={`${className} cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
            }}
          >
            {text}
          </Button>
          
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-premium-orange text-pitch-black px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ✏️ Click to edit button
            </motion.div>
          </AnimatePresence>
        </div>
      )}
      
      {/* Success Message */}
      <AnimatePresence>
        {showSaved && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-vegetarian-green text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg whitespace-nowrap"
          >
            <span>✓</span> Button updated!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
