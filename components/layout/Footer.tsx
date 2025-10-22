'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="Momos Magic Logo" 
                width={100} 
                height={33}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              From Humble Stall to Culinary Legend
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-vegetarian-green text-white px-3 py-1 rounded-full">
                100% Vegetarian
              </span>
              <span className="bg-premium-gold text-black px-3 py-1 rounded-full font-semibold">
                FSSAI Certified
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-premium-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-premium-gold transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-premium-gold transition-colors">Menu</Link></li>
              <li><Link href="/about" className="hover:text-premium-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-premium-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-premium-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="text-premium-gold mt-1" />
                <p className="text-sm">Momo Magic, Naya Bazar, Near Post Office<br />Sherghati, Bihar 824211</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-premium-gold" />
                <p className="text-sm">+91 9955955191</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-premium-gold" />
                <p className="text-sm">Mon-Sun: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 relative">
          <p>&copy; {new Date().getFullYear()} Momos Magic. All rights reserved.</p>
          <p className="mt-2">Crafted with ❤️ by Dhruv Gupta</p>
          
          {/* Admin Login Button - Bottom Right */}
          <button
            className="absolute bottom-0 right-4 flex items-center space-x-2 text-xs text-gray-500 hover:text-premium-gold transition-colors duration-300 group"
            onClick={() => alert('Admin dashboard coming soon!')}
          >
            <Lock size={14} className="group-hover:scale-110 transition-transform" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
