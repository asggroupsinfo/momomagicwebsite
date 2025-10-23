'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-pitch-black border-b border-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Side */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Momos Magic Logo" 
              width={180} 
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation - Center (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-premium-orange hover:text-golden-glow transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Order Now Button - Right Side (Desktop) */}
          <Link 
            href="/menu" 
            className="hidden md:block bg-premium-orange text-pitch-black px-6 py-2 rounded-lg text-sm font-bold hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,194,65,0.3)] transition-all duration-300"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-premium-orange"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-charcoal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-premium-orange hover:text-golden-glow transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="block mt-4 bg-premium-orange text-pitch-black px-6 py-2 rounded-lg text-sm font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
