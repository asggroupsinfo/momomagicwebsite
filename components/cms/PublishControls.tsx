'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface PublishControlsProps {
  pageName: string;
  onSave: () => Promise<void>;
  onPreview?: () => void;
}

export function PublishControls({ pageName, onSave, onPreview }: PublishControlsProps) {
  const [publishStatus, setPublishStatus] = useState<'published' | 'unpublished_changes' | 'never_published'>('never_published');
  const [isPublishing, setIsPublishing] = useState(false);
  const [isUndoing, setIsUndoing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showHistoryDialog, setShowHistoryDialog] = useState(false);
  const [publishHistory, setPublishHistory] = useState<any[]>([]);
  const [backups, setBackups] = useState<any[]>([]);

  useEffect(() => {
    loadPublishStatus();
  }, [pageName]);

  const loadPublishStatus = async () => {
    try {
      const response = await fetch(`/api/publish/${pageName}`);
      if (response.ok) {
        const data = await response.json();
        setPublishStatus(data.status);
      }
    } catch (error) {
      console.error('Error loading publish status:', error);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      await onSave();
      setMessage('✅ Changes saved to draft');
      await loadPublishStatus();
    } catch (error) {
      setMessage('❌ Failed to save changes');
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handlePublish = async () => {
    setShowConfirmDialog(false);
    setIsPublishing(true);
    setMessage('');

    try {
      const response = await fetch(`/api/publish/${pageName}`, {
        method: 'POST'
      });

      if (response.ok) {
        setMessage('✅ Published to live website!');
        await loadPublishStatus();
      } else {
        setMessage('❌ Failed to publish');
      }
    } catch (error) {
      setMessage('❌ Error publishing content');
    } finally {
      setIsPublishing(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleUndo = async () => {
    setIsUndoing(true);
    setMessage('');

    try {
      const response = await fetch(`/api/undo/${pageName}`, {
        method: 'POST'
      });

      if (response.ok) {
        setMessage('✅ Changes undone successfully!');
        await loadPublishStatus();
        window.location.reload();
      } else {
        setMessage('❌ Failed to undo changes');
      }
    } catch (error) {
      setMessage('❌ Error undoing changes');
    } finally {
      setIsUndoing(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const loadHistory = async () => {
    try {
      const response = await fetch(`/api/history/${pageName}`);
      if (response.ok) {
        const data = await response.json();
        setPublishHistory(data.history || []);
        setBackups(data.backups || []);
        setShowHistoryDialog(true);
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const getStatusIndicator = () => {
    switch (publishStatus) {
      case 'published':
        return <span className="text-green-500">🟢 Published</span>;
      case 'unpublished_changes':
        return <span className="text-yellow-500">🟡 Unpublished Changes</span>;
      case 'never_published':
        return <span className="text-gray-500">⚪ Never Published</span>;
      default:
        return <span className="text-gray-500">⚪ Unknown</span>;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-background border border-border rounded-lg shadow-lg p-4 space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-medium">{getStatusIndicator()}</div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isSaving ? '⏳ Saving...' : '💾 Save'}
        </Button>

        {onPreview && (
          <Button
            onClick={onPreview}
            className="bg-purple-600 hover:bg-purple-700"
          >
            👁️ Preview
          </Button>
        )}

        <Button
          onClick={() => setShowConfirmDialog(true)}
          disabled={isPublishing || publishStatus === 'published'}
          className="bg-green-600 hover:bg-green-700"
        >
          {isPublishing ? '⏳ Publishing...' : '🚀 Publish to Live'}
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleUndo}
          disabled={isUndoing}
          className="bg-orange-600 hover:bg-orange-700 text-sm"
        >
          {isUndoing ? '⏳ Undoing...' : '↩️ Undo Last Change'}
        </Button>

        <Button
          onClick={loadHistory}
          className="bg-gray-600 hover:bg-gray-700 text-sm"
        >
          📅 History
        </Button>
      </div>

      {message && (
        <div className="text-sm font-medium text-center">
          {message}
        </div>
      )}

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border border-border rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-bold mb-4">Confirm Publish</h3>
            <p className="mb-6">Are you sure you want to publish these changes to the live website? This will make the changes visible to all users.</p>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setShowConfirmDialog(false)}
                className="bg-gray-600 hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePublish}
                className="bg-green-600 hover:bg-green-700"
              >
                Yes, Publish
              </Button>
            </div>
          </div>
        </div>
      )}

      {showHistoryDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border border-border rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">📅 Version History (Last 7 Days)</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Recent Actions:</h4>
              {publishHistory.length > 0 ? (
                <div className="space-y-2">
                  {publishHistory.map((item) => (
                    <div key={item.id} className="text-sm border-l-2 border-blue-500 pl-3 py-1">
                      <div className="font-medium">{item.action} - {item.status}</div>
                      <div className="text-foreground/60">{item.message}</div>
                      <div className="text-xs text-foreground/40">
                        {new Date(item.created_at).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-foreground/60">No history available</p>
              )}
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Backups:</h4>
              {backups.length > 0 ? (
                <div className="space-y-2">
                  {backups.map((backup) => (
                    <div key={backup.id} className="text-sm border-l-2 border-green-500 pl-3 py-1">
                      <div className="font-medium">{backup.backup_type} backup</div>
                      {backup.backup_name && <div className="text-foreground/60">{backup.backup_name}</div>}
                      <div className="text-xs text-foreground/40">
                        {new Date(backup.created_at).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-foreground/60">No backups available</p>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setShowHistoryDialog(false)}
                className="bg-gray-600 hover:bg-gray-700"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
