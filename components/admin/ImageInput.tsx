'use client';

import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { MediaLibraryModal } from './MediaLibraryModal';

interface ImageInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  sizeGuideline?: string;
  tip?: string;
  fileType?: 'all' | 'image' | 'video' | 'document';
}

export const ImageInput: React.FC<ImageInputProps> = ({
  label,
  value,
  onChange,
  placeholder = '/images/your-image.jpg or URL',
  sizeGuideline,
  tip,
  fileType = 'image'
}) => {
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);

  const handleMediaSelect = (url: string) => {
    onChange(url);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {sizeGuideline && (
          <span className="ml-2 text-xs text-golden-glow font-semibold">
            📐 {sizeGuideline}
          </span>
        )}
      </label>
      
      <div className="flex space-x-2">
        {/* Existing path input - PRESERVED */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
          placeholder={placeholder}
        />
        
        {/* NEW: Choose from Media Library button */}
        <button
          type="button"
          onClick={() => setIsMediaLibraryOpen(true)}
          className="px-4 py-3 bg-golden-glow text-black font-semibold rounded-lg hover:bg-pitch-black hover:text-white transition-all flex items-center space-x-2 whitespace-nowrap"
          title="Choose from Media Library"
        >
          <ImageIcon size={18} />
          <span className="hidden sm:inline">Choose from Library</span>
        </button>
      </div>
      
      {tip && (
        <p className="text-xs text-gray-500 mt-1">
          💡 Tip: {tip}
        </p>
      )}

      {/* Media Library Modal */}
      <MediaLibraryModal
        isOpen={isMediaLibraryOpen}
        onClose={() => setIsMediaLibraryOpen(false)}
        onSelect={handleMediaSelect}
        fileType={fileType}
      />
    </div>
  );
};
