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
    primary: 'text-black hover:border-golden-glow border-2 border-transparent hover:shadow-golden-glow/50',
    secondary: 'border-2 border-golden-glow bg-transparent text-premium-orange hover:bg-burnt-orange hover:text-black hover:shadow-burnt-orange/50',
  };

  const primaryGradient = 'linear-gradient(135deg, #ffc241 0%, #e6ac00 100%)';

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const hoverAnimation = {
    scale: 1.05,
    y: -2,
    transition: { type: 'spring' as const, stiffness: 400, damping: 10 }
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
        style={variant === 'primary' ? { background: primaryGradient } : undefined}
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
      style={variant === 'primary' ? { background: primaryGradient } : undefined}
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
