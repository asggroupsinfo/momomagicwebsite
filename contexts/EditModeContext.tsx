'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface EditModeContextType {
  editMode: boolean;
  toggleEditMode: () => void;
  setEditMode: (mode: boolean) => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export const EditModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [editMode, setEditModeState] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const savedEditMode = localStorage.getItem('editMode') === 'true';
          setEditModeState(savedEditMode);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };
    
    checkAuth();
  }, []);

  const toggleEditMode = () => {
    const newMode = !editMode;
    setEditModeState(newMode);
    localStorage.setItem('editMode', String(newMode));
  };

  const setEditMode = (mode: boolean) => {
    setEditModeState(mode);
    localStorage.setItem('editMode', String(mode));
  };

  return (
    <EditModeContext.Provider value={{ editMode, toggleEditMode, setEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
};
