'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="bg-cream-white">
      <Hero />

      <section id="story" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Magic Began With a Dream, Not a Recipe
          </h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">
              In September 2023, a young entrepreneur named Dhruv Gupta decided he'd rather build his own empire than work in someone else's. Starting with traditional Bihari 'Pita', he quickly learned that success requires understanding what people truly crave.
            </p>
            <p className="text-lg text-gray-700">
              The pivot to momos wasn't just a business decision - it was a revelation. Today, Momos Magic isn't just a food stall; it's a symbol of entrepreneurial spirit and culinary innovation.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-2xl font-semibold text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Quantity bhi Mast, Taste bhi Zabardast"
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Magical Creations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-2 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
                Steamed Perfection
              </h3>
              <p className="text-gray-600 mb-4">Fresh & Healthy</p>
              <ul className="space-y-2 text-sm">
                <li>• Veg Momos</li>
                <li>• Paneer Momos</li>
                <li>• Soya Momos</li>
                <li>• Cheese Corn</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-2 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
                Crispy Fried Delights
              </h3>
              <p className="text-gray-600 mb-4">Golden & Crunchy</p>
              <ul className="space-y-2 text-sm">
                <li>• Veg Fried</li>
                <li>• Paneer Fried</li>
                <li>• Soya Fried</li>
                <li>• Cheese Corn Fried</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-2 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
                Magic Signatures
              </h3>
              <p className="text-gray-600 mb-4">Sherghati Exclusive</p>
              <ul className="space-y-2 text-sm">
                <li>• Kurkure Momos ⭐</li>
                <li>• Paneer Kurkure</li>
                <li>• Cheese Kurkure</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-2 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
                Fusion Innovations
              </h3>
              <p className="text-gray-600 mb-4">Innovative Fusion</p>
              <ul className="space-y-2 text-sm">
                <li>• Veg Pizza Momos</li>
                <li>• Paneer Pizza</li>
                <li>• Soya Pizza</li>
                <li>• Cheese Corn Pizza</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="primary" href="/menu">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

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
