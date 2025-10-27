'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface EditableImageProps {
  src: string;
  alt: string;
  onSave: (file: File) => Promise<string>;
  className?: string;
  width?: number;
  height?: number;
  editMode?: boolean;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  src,
  alt,
  onSave,
  className = '',
  width,
  height,
  editMode = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    try {
      await onSave(file);
      setUploadProgress(100);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to upload image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      clearInterval(progressInterval);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (editMode && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  if (!editMode) {
    return width && height ? (
      <Image src={src} alt={alt} width={width} height={height} className={className} />
    ) : (
      <img src={src} alt={alt} className={className} />
    );
  }

  return (
    <div className="relative group">
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative cursor-pointer transition-all duration-300 ${
          isHovered || isDragging
            ? 'ring-4 ring-premium-orange ring-opacity-50'
            : ''
        }`}
      >
        {width && height ? (
          <Image src={src} alt={alt} width={width} height={height} className={className} />
        ) : (
          <img src={src} alt={alt} className={className} />
        )}

        {/* Overlay */}
        <AnimatePresence>
          {(isHovered || isDragging) && !isUploading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-pitch-black/70 flex flex-col items-center justify-center rounded-lg"
            >
              <div className="text-premium-orange text-4xl mb-2">
                {isDragging ? '📥' : '🖼️'}
              </div>
              <p className="text-white font-bold text-sm">
                {isDragging ? 'Drop image here' : 'Click or drag to replace'}
              </p>
              <p className="text-gray-400 text-xs mt-1">Max 5MB • JPG, PNG, WebP</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload Progress */}
        <AnimatePresence>
          {isUploading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-pitch-black/90 flex flex-col items-center justify-center rounded-lg"
            >
              <div className="w-3/4 bg-charcoal rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-premium-orange to-golden-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${uploadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-white font-bold mt-3">{uploadProgress}%</p>
              <p className="text-gray-400 text-sm">Uploading & optimizing...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 bg-vegetarian-green text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg"
            >
              <span>✓</span> Image updated!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Edit Indicator */}
        <AnimatePresence>
          {isHovered && !isUploading && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-premium-orange text-pitch-black px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap"
            >
              ✏️ Click or drag to replace
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
};
