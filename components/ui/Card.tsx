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
  const baseStyles = 'bg-charcoal border-2 border-transparent rounded-xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-premium-orange hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,194,65,0.2)]' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
