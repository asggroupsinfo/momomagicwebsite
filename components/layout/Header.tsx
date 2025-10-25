'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/combo-deals', label: 'Combo Deals' },
    { href: '/catering', label: 'Catering' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/franchise', label: 'Franchise' },
    { href: '/download-app', label: 'Download App' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-pitch-black/98 backdrop-blur-md border-b border-charcoal shadow-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo - Left Side with Premium Spacing */}
          <Link href="/" className="flex items-center pl-2 lg:pl-4">
            <Image 
              src="/logo.png" 
              alt="Momos Magic Logo" 
              width={200} 
              height={60}
              className="h-14 lg:h-16 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation - Center (Desktop) with Smooth Transitions */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-premium-orange hover:text-golden-glow transition-all duration-300 font-medium text-sm xl:text-base group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden-glow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Order Now Button - Right Side with Elegant Spacing */}
          <Link 
            href="/menu" 
            className="hidden lg:block bg-premium-orange text-pitch-black px-8 py-3 rounded-lg text-base font-bold hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,194,65,0.4)] transition-all duration-300 mr-2 lg:mr-4"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button - Optimized */}
          <button
            className="lg:hidden text-premium-orange p-2 hover:bg-deep-space rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Enhanced with Smooth Animations */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-charcoal bg-deep-space/50 backdrop-blur-sm animate-fade-in">
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 px-4 text-premium-orange hover:text-golden-glow hover:bg-deep-space/80 transition-all duration-200 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/menu"
              className="block mt-6 mx-4 bg-premium-orange text-pitch-black px-6 py-3 rounded-lg text-base font-bold text-center hover:shadow-[0_8px_20px_rgba(255,194,65,0.3)] transition-all duration-300"
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
