import React from 'react';
import dynamic from 'next/dynamic';

const DefaultLoading = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-golden-glow rounded-full animate-spin" />
  </div>
);

export const lazyLoadComponent = (
  importFunc: () => Promise<any>,
  options?: {
    loading?: () => React.ReactNode;
    ssr?: boolean;
  }
) => {
  return dynamic(importFunc, {
    loading: options?.loading || DefaultLoading,
    ssr: options?.ssr ?? true,
  });
};

export const lazyLoadWithoutSSR = (importFunc: () => Promise<any>) => {
  return dynamic(importFunc, {
    ssr: false,
    loading: DefaultLoading,
  });
};
