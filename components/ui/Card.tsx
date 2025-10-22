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
  const baseStyles = 'bg-white rounded-lg shadow-md border border-gray-200 p-6';
  const hoverStyles = hover ? 'hover:border-premium-gold hover:shadow-lg' : '';
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
};
