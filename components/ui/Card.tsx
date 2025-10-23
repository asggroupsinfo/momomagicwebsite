import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const baseStyles = 'bg-deep-space border border-charcoal rounded-lg p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-golden-glow hover:shadow-lg hover:scale-105' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
