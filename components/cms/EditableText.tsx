'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditableTextProps {
  content: string;
  onSave: (newContent: string) => Promise<void>;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  placeholder?: string;
  multiline?: boolean;
  editMode?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  content,
  onSave,
  className = '',
  as: Component = 'p',
  placeholder = 'Click to edit...',
  multiline = false,
  editMode = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(content);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setValue(content);
  }, [content]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current instanceof HTMLInputElement || inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  useEffect(() => {
    if (value !== content && !isSaving) {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      
      saveTimeoutRef.current = setTimeout(() => {
        handleSave();
      }, 2000);
    }

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [value]);

  const handleSave = async () => {
    if (value === content) return;
    
    setIsSaving(true);
    try {
      await onSave(value);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
    } catch (error) {
      console.error('Failed to save:', error);
      setValue(content); // Revert on error
    } finally {
      setIsSaving(false);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (value !== content) {
      handleSave();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setValue(content);
      setIsEditing(false);
    }
  };

  if (!editMode) {
    return <Component className={className}>{content}</Component>;
  }

  return (
    <div className="relative group">
      {isEditing ? (
        <div className="relative">
          {multiline ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={`${className} w-full bg-pitch-black/50 border-2 border-premium-orange rounded-lg p-2 focus:outline-none focus:border-golden-glow transition-all`}
              placeholder={placeholder}
              rows={4}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className={`${className} w-full bg-pitch-black/50 border-2 border-premium-orange rounded-lg p-2 focus:outline-none focus:border-golden-glow transition-all`}
              placeholder={placeholder}
            />
          )}
          
          {/* Saving Indicator */}
          <AnimatePresence>
            {isSaving && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-8 right-0 bg-premium-orange text-pitch-black px-3 py-1 rounded-lg text-sm font-bold"
              >
                Saving...
              </motion.div>
            )}
            {showSaved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute -top-8 right-0 bg-vegetarian-green text-white px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-1"
              >
                <span>✓</span> Saved
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`cursor-pointer transition-all duration-300 ${
            isHovered
              ? 'border-2 border-dashed border-premium-orange bg-premium-orange/10 rounded-lg p-2'
              : 'border-2 border-transparent p-2'
          }`}
        >
          <Component className={className}>{content || placeholder}</Component>
          
          {/* Edit Indicator */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-8 right-0 bg-premium-orange text-pitch-black px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1"
              >
                <span>✏️</span> Click to edit
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
