'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, Video, File, Search, Upload } from 'lucide-react';

interface MediaFile {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
  size: string;
  uploadedAt: string;
}

interface MediaLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
  fileType?: 'all' | 'image' | 'video' | 'document';
}

export const MediaLibraryModal: React.FC<MediaLibraryModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  fileType = 'all'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video' | 'document'>(fileType);

  const mediaFiles: MediaFile[] = [
    {
      id: '1',
      name: 'hero-video.mp4',
      type: 'video',
      url: '/hero-video.mp4',
      size: '15.2 MB',
      uploadedAt: '2025-03-15'
    },
    {
      id: '2',
      name: 'logo.png',
      type: 'image',
      url: '/logo.png',
      size: '45 KB',
      uploadedAt: '2025-03-10'
    },
    {
      id: '3',
      name: 'veg-momos.jpg',
      type: 'image',
      url: '/menu/veg-momos.jpg',
      size: '120 KB',
      uploadedAt: '2025-03-12'
    },
    {
      id: '4',
      name: 'kurkure-momos.jpg',
      type: 'image',
      url: '/menu/kurkure-momos.jpg',
      size: '135 KB',
      uploadedAt: '2025-03-12'
    },
    {
      id: '5',
      name: 'founder.jpg',
      type: 'image',
      url: '/founder.jpg',
      size: '200 KB',
      uploadedAt: '2025-03-08'
    },
    {
      id: '6',
      name: 'gallery-1.jpg',
      type: 'image',
      url: '/images/gallery/gallery-1.jpg',
      size: '180 KB',
      uploadedAt: '2025-03-14'
    },
    {
      id: '7',
      name: 'gallery-2.jpg',
      type: 'image',
      url: '/images/gallery/gallery-2.jpg',
      size: '195 KB',
      uploadedAt: '2025-03-14'
    },
    {
      id: '8',
      name: 'hero-bg.jpg',
      type: 'image',
      url: '/images/hero-bg.jpg',
      size: '450 KB',
      uploadedAt: '2025-03-10'
    }
  ];

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || file.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleSelect = (url: string) => {
    onSelect(url);
    onClose();
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <ImageIcon size={24} className="text-blue-500" />;
      case 'video':
        return <Video size={24} className="text-purple-500" />;
      default:
        return <File size={24} className="text-gray-500" />;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black bg-opacity-50"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Media Library
              </h3>
              <p className="text-sm text-gray-600 mt-1">Select an image from your library</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search and Filter */}
          <div className="p-6 border-b border-gray-200 space-y-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search files..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'image', 'video', 'document'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type as any)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all ${
                    filterType === type
                      ? 'bg-golden-glow text-black font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* File Grid */}
          <div className="p-6 overflow-y-auto max-h-[50vh]">
            {filteredFiles.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredFiles.map(file => (
                  <motion.div
                    key={file.id}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleSelect(file.url)}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-golden-glow hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      {file.type === 'image' ? (
                        <div className="w-full h-32 mb-3 bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="mb-3">
                          {getFileIcon(file.type)}
                        </div>
                      )}
                      <p className="text-sm font-semibold text-center mb-1 truncate w-full">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <ImageIcon size={48} className="mx-auto mb-4 text-gray-300" />
                <p>No files found matching your search</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {filteredFiles.length} file{filteredFiles.length !== 1 ? 's' : ''} available
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert('Upload functionality will be implemented')}
                  className="flex items-center space-x-2 px-4 py-2 bg-golden-glow text-black font-semibold rounded-lg hover:bg-pitch-black hover:text-white transition-all"
                >
                  <Upload size={16} />
                  <span>Upload New</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
