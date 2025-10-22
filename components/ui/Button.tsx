import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-xl';
  
  const variantStyles = {
    primary: 'bg-magic-red text-white hover:border-premium-gold border-2 border-magic-red hover:shadow-premium-gold/50',
    secondary: 'border-2 border-premium-gold bg-transparent text-magic-red hover:bg-magic-red hover:text-white hover:shadow-magic-red/50',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const hoverAnimation = {
    scale: 1.05,
    y: -2,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  const tapAnimation = {
    scale: 0.95,
    y: 0
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  );
};
