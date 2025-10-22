'use client';

export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    const { name, value, id } = metric;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${name}:`, value);
    }
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: id,
        non_interaction: true,
      });
    }
  }
};

export const prefetchImages = (urls: string[]) => {
  if (typeof window !== 'undefined') {
    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

export const preloadCriticalAssets = () => {
  if (typeof window !== 'undefined') {
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.png',
    ];
    
    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};
