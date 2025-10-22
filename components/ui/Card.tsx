import React from 'react';
import { motion } from 'framer-motion';

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
  const baseStyles = 'bg-white rounded-xl shadow-xl border-2 border-gray-200 p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-premium-gold hover:shadow-2xl hover:-translate-y-1' : '';
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedStyles}
        whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(255, 194, 65, 0.3)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
};
