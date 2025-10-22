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
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Momos Magic Logo" 
              width={120} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation - Center (Desktop) */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-premium-gold transition-colors duration-300 font-medium border-b-2 border-transparent hover:border-premium-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Order Now Button - Right Side (Desktop) */}
          <Link 
            href="/menu" 
            className="hidden md:block bg-premium-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-charcoal-black hover:text-white transition-all duration-300 text-sm"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-white hover:text-premium-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/menu"
                className="block mt-4 bg-premium-gold text-black px-4 py-2 rounded-lg font-semibold text-center hover:bg-charcoal-black hover:text-white transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
