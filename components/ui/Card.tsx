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
  const baseStyles = 'bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-golden-glow hover:shadow-2xl' : '';
  const combinedStyles = `${baseStyles} ${hoverStyles} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedStyles}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{ 
          scale: 1.03, 
          y: -8,
          boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={combinedStyles}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
