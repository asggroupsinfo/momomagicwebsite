'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg border-b border-premium-gold/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/logo.png" 
              alt="Momos Magic Logo" 
              width={140} 
              height={45}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation - Center (Desktop) */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-premium-gold transition-all duration-300 font-medium text-base border-b-2 border-transparent hover:border-premium-gold pb-1 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Order Now Button - Right Side (Desktop) */}
          <Link 
            href="/menu" 
            className="hidden md:flex items-center bg-premium-gold text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-charcoal-black hover:text-premium-gold hover:border-premium-gold border-2 border-transparent transition-all duration-300 text-sm shadow-lg hover:shadow-premium-gold/50"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-premium-gold transition-colors p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-premium-gold/20 pt-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-white hover:text-premium-gold hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/menu"
                  className="block mt-4 bg-premium-gold text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-charcoal-black hover:text-premium-gold border-2 border-transparent hover:border-premium-gold transition-all duration-300 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Now
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
