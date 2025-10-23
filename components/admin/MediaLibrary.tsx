'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Video, File, Trash2, Download, Search } from 'lucide-react';

interface MediaFile {
  id: string;
  name: string;
  type: 'image' | 'video' | 'document';
  url: string;
  size: string;
  uploadedAt: string;
}

export const MediaLibrary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video' | 'document'>('all');

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
    }
  ];

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || file.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleUpload = () => {
    alert('File upload functionality will be implemented with drag-drop support');
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      alert('Delete functionality will be implemented');
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <ImageIcon size={40} className="text-blue-500" />;
      case 'video':
        return <Video size={40} className="text-purple-500" />;
      default:
        return <File size={40} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Media Library
          </h2>
          <p className="text-gray-600 mt-1">Manage your images, videos, and documents</p>
        </div>
        <button
          onClick={handleUpload}
          className="flex items-center space-x-2 px-6 py-3 bg-golden-glow text-black font-semibold rounded-lg hover:bg-pitch-black hover:text-white transition-all"
        >
          <Upload size={18} />
          <span>Upload Files</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600">Total Files</p>
          <p className="text-2xl font-bold text-blue-900">{mediaFiles.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600">Images</p>
          <p className="text-2xl font-bold text-green-900">
            {mediaFiles.filter(f => f.type === 'image').length}
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">Videos</p>
          <p className="text-2xl font-bold text-purple-900">
            {mediaFiles.filter(f => f.type === 'video').length}
          </p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-sm text-orange-600">Storage Used</p>
          <p className="text-2xl font-bold text-orange-900">15.7 MB</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
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

      {/* Upload Zone */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-golden-glow transition-colors cursor-pointer">
        <Upload size={48} className="mx-auto text-gray-400 mb-4" />
        <p className="text-lg font-semibold text-gray-700 mb-2">Drag & Drop files here</p>
        <p className="text-sm text-gray-500 mb-4">or click to browse</p>
        <button
          onClick={handleUpload}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Select Files
        </button>
        <p className="text-xs text-gray-400 mt-4">
          Supported formats: JPG, PNG, GIF, MP4, MOV, PDF (Max 50MB)
        </p>
      </div>

      {/* File Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFiles.map(file => (
          <motion.div
            key={file.id}
            layout
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center">
              <div className="mb-3">
                {getFileIcon(file.type)}
              </div>
              <p className="text-sm font-semibold text-center mb-1 truncate w-full">
                {file.name}
              </p>
              <p className="text-xs text-gray-500 mb-2">{file.size}</p>
              <p className="text-xs text-gray-400 mb-3">{file.uploadedAt}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => window.open(file.url, '_blank')}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title="View"
                >
                  <Download size={16} />
                </button>
                <button
                  onClick={() => handleDelete(file.id, file.name)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredFiles.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No files found matching your search
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This is a demo media library. In production, this will support:
          <br />• Drag & drop file upload
          <br />• Image optimization and resizing
          <br />• Video transcoding
          <br />• CDN integration for fast delivery
          <br />• Automatic backup to cloud storage
        </p>
      </div>
    </div>
  );
};
