'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { BrandStory } from '@/components/sections/BrandStory';
import { MenuHighlights } from '@/components/sections/MenuHighlights';
import { Reviews } from '@/components/sections/Reviews';

export default function Home() {
  return (
    <div className="bg-cream-white">
      <Hero />
      <BrandStory />
      <MenuHighlights />
      <Reviews />

      <section className="py-16 px-4 bg-charcoal-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-premium-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Customers Trust Our Magic
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-premium-gold">Award Winning</h3>
              <p className="text-gray-300">Best Quality Food in City - District Magistrate Office</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-premium-gold">FSSAI Certified</h3>
              <p className="text-gray-300">License: 20424201001152 - Highest Hygiene Standards</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2 text-premium-gold">100% Vegetarian</h3>
              <p className="text-gray-300">Pure Veg Kitchen - No Compromise on Quality</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2 text-premium-gold">Rated 4.9/5</h3>
              <p className="text-gray-300">2000+ Happy Customers - Consistent Quality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
