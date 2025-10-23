'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, 
  Type, Palette, Eye, Code, RotateCcw 
} from 'lucide-react';

interface RichTextEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  showPreview?: boolean;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Enter text...',
  rows = 4,
  showPreview = true
}) => {
  const [mode, setMode] = useState<'plain' | 'rich'>('plain');
  const [showPreviewPanel, setShowPreviewPanel] = useState(false);
  const [fontSize, setFontSize] = useState('16');
  const [fontFamily, setFontFamily] = useState('Inter');
  const [textColor, setTextColor] = useState('#000000');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right'>('left');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyFormatting = (format: string, value?: string) => {
    if (mode === 'plain') return;

    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let formattedText = '';
    
    switch (format) {
      case 'bold':
        formattedText = `<strong>${selectedText}</strong>`;
        setIsBold(!isBold);
        break;
      case 'italic':
        formattedText = `<em>${selectedText}</em>`;
        setIsItalic(!isItalic);
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        setIsUnderline(!isUnderline);
        break;
      case 'color':
        formattedText = `<span style="color: ${value}">${selectedText}</span>`;
        break;
      case 'fontSize':
        formattedText = `<span style="font-size: ${value}px">${selectedText}</span>`;
        break;
      case 'fontFamily':
        formattedText = `<span style="font-family: ${value}">${selectedText}</span>`;
        break;
      default:
        return;
    }

    const newValue = 
      textarea.value.substring(0, start) + 
      formattedText + 
      textarea.value.substring(end);
    
    onChange(newValue);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + formattedText.length, start + formattedText.length);
    }, 0);
  };

  const applyAlignment = (align: 'left' | 'center' | 'right') => {
    setTextAlign(align);
    if (mode === 'rich') {
      const textarea = textareaRef.current;
      if (!textarea) return;
      
      const wrappedText = `<div style="text-align: ${align}">${textarea.value}</div>`;
      onChange(wrappedText);
    }
  };

  const resetFormatting = () => {
    const plainText = value.replace(/<[^>]*>/g, '');
    onChange(plainText);
    setIsBold(false);
    setIsItalic(false);
    setIsUnderline(false);
    setFontSize('16');
    setFontFamily('Inter');
    setTextColor('#000000');
    setTextAlign('left');
  };

  const getPreviewStyle = () => {
    return {
      fontSize: `${fontSize}px`,
      fontFamily: fontFamily,
      color: textColor,
      textAlign: textAlign,
      fontWeight: isBold ? 'bold' : 'normal',
      fontStyle: isItalic ? 'italic' : 'normal',
      textDecoration: isUnderline ? 'underline' : 'none',
    };
  };

  return (
    <div className="space-y-3">
      {/* Label and Mode Toggle */}
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setMode('plain')}
            className={`px-3 py-1 text-xs rounded-lg transition-all ${
              mode === 'plain'
                ? 'bg-golden-glow text-black font-semibold'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Code size={14} className="inline mr-1" />
            Plain Text
          </button>
          <button
            type="button"
            onClick={() => setMode('rich')}
            className={`px-3 py-1 text-xs rounded-lg transition-all ${
              mode === 'rich'
                ? 'bg-golden-glow text-black font-semibold'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Type size={14} className="inline mr-1" />
            Rich Text
          </button>
        </div>
      </div>

      {/* Rich Text Toolbar */}
      {mode === 'rich' && (
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 space-y-3">
          {/* Row 1: Text Formatting */}
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyFormatting('bold')}
              className={`p-2 rounded hover:bg-gray-200 transition-colors ${
                isBold ? 'bg-golden-glow text-black' : 'bg-white'
              }`}
              title="Bold"
            >
              <Bold size={16} />
            </button>
            <button
              type="button"
              onClick={() => applyFormatting('italic')}
              className={`p-2 rounded hover:bg-gray-200 transition-colors ${
                isItalic ? 'bg-golden-glow text-black' : 'bg-white'
              }`}
              title="Italic"
            >
              <Italic size={16} />
            </button>
            <button
              type="button"
              onClick={() => applyFormatting('underline')}
              className={`p-2 rounded hover:bg-gray-200 transition-colors ${
                isUnderline ? 'bg-golden-glow text-black' : 'bg-white'
              }`}
              title="Underline"
            >
              <Underline size={16} />
            </button>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <button
              type="button"
              onClick={() => applyAlignment('left')}
              className={`p-2 rounded hover:bg-gray-200 transition-colors ${
                textAlign === 'left' ? 'bg-golden-glow text-black' : 'bg-white'
              }`}
              title="Align Left"
            >
              <AlignLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => applyAlignment('center')}
              className={`p-2 rounded hover:bg-gray-200 transition-colors ${
                textAlign === 'center' ? 'bg-golden-glow text-black' : 'bg-white'
              }`}
              title="Align Center"
            >
              <AlignCenter size={16} />
            </button>
            <button
              type="button"
              onClick={() => applyAlignment('right')}
              className={`p-2 rounded hover:bg-gray-200 transition-colors ${
                textAlign === 'right' ? 'bg-golden-glow text-black' : 'bg-white'
              }`}
              title="Align Right"
            >
              <AlignRight size={16} />
            </button>
          </div>

          {/* Row 2: Font Controls */}
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <select
              value={fontFamily}
              onChange={(e) => {
                setFontFamily(e.target.value);
                applyFormatting('fontFamily', e.target.value);
              }}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
            >
              <option value="Inter">Inter</option>
              <option value="Playfair Display">Playfair Display</option>
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
            </select>

            <select
              value={fontSize}
              onChange={(e) => {
                setFontSize(e.target.value);
                applyFormatting('fontSize', e.target.value);
              }}
              className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none"
            >
              <option value="12">12px</option>
              <option value="14">14px</option>
              <option value="16">16px</option>
              <option value="18">18px</option>
              <option value="20">20px</option>
              <option value="24">24px</option>
              <option value="32">32px</option>
              <option value="48">48px</option>
            </select>

            <div className="flex items-center space-x-2">
              <Palette size={16} className="text-gray-600" />
              <input
                type="color"
                value={textColor}
                onChange={(e) => {
                  setTextColor(e.target.value);
                  applyFormatting('color', e.target.value);
                }}
                className="w-10 h-8 border border-gray-300 rounded cursor-pointer"
                title="Text Color"
              />
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            <button
              type="button"
              onClick={resetFormatting}
              className="flex items-center space-x-1 px-3 py-1.5 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              title="Reset Formatting"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>

            {showPreview && (
              <button
                type="button"
                onClick={() => setShowPreviewPanel(!showPreviewPanel)}
                className="flex items-center space-x-1 px-3 py-1.5 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                title="Toggle Preview"
              >
                <Eye size={14} />
                <span>{showPreviewPanel ? 'Hide' : 'Show'} Preview</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden-glow focus:border-transparent outline-none resize-y"
        placeholder={placeholder}
        style={mode === 'plain' ? {} : getPreviewStyle()}
      />

      {/* Live Preview Panel */}
      {mode === 'rich' && showPreview && showPreviewPanel && (
        <div className="border-2 border-golden-glow rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-700">Live Preview</h4>
            <span className="text-xs text-gray-500">How it will appear on the website</span>
          </div>
          <div 
            className="prose max-w-none"
            style={getPreviewStyle()}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
      )}

      {/* Tips */}
      <p className="text-xs text-gray-500">
        💡 Tip: {mode === 'plain' 
          ? 'Switch to Rich Text mode to add formatting, colors, and styles.' 
          : 'Select text and use the toolbar to apply formatting. Click "Plain Text" to switch back to simple text.'}
      </p>
    </div>
  );
};
