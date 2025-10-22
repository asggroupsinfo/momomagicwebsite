'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

export default function MenuPage() {
  const menuCategories = [
    {
      name: 'Steamed Perfection Collection',
      description: 'Fresh & Healthy',
      items: [
        { name: 'Veg Momos', price5: 25, price10: 50 },
        { name: 'Paneer Momos', price5: 35, price10: 70 },
        { name: 'Soya Momos', price5: 30, price10: 60 },
        { name: 'Cheese Corn', price5: 50, price10: 100 },
      ],
    },
    {
      name: 'Crispy Fried Delights',
      description: 'Golden & Crunchy',
      items: [
        { name: 'Veg Fried', price5: 30, price10: 60 },
        { name: 'Paneer Fried', price5: 46, price10: 80 },
        { name: 'Soya Fried', price5: 35, price10: 70 },
        { name: 'Cheese Corn Fried', price5: 55, price10: 119 },
      ],
    },
    {
      name: 'Magic Signatures',
      description: 'Sherghati Exclusives',
      items: [
        { name: 'Kurkure Momos', price5: 50, price10: 100, special: true },
        { name: 'Paneer Kurkure', price5: 60, price10: 120 },
        { name: 'Cheese Kurkure', price5: 60, price10: 120 },
      ],
    },
    {
      name: 'Fusion Innovations',
      description: 'Innovative Fusion',
      items: [
        { name: 'Veg Pizza Momos', price5: 80, price10: 160 },
        { name: 'Paneer Pizza', price5: 100, price10: 200 },
        { name: 'Soya Pizza', price5: 90, price10: 180 },
        { name: 'Cheese Corn Pizza', price5: 120, price10: 240 },
      ],
    },
  ];

  return (
    <div className="bg-cream-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-charcoal-black" style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Complete Menu
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore our magical collection of momos
        </p>

        <div className="space-y-12">
          {menuCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-2 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
                {category.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card key={itemIdx}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-charcoal-black">
                        {item.name}
                        {item.special && <span className="ml-2 text-premium-gold">⭐</span>}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">5 pieces</span>
                        <span className="font-bold text-premium-gold">₹{item.price5}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">10 pieces</span>
                        <span className="font-bold text-premium-gold">₹{item.price10}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-vegetarian-green text-white px-6 py-3 rounded-lg inline-block">
            <p className="font-semibold">100% Pure Vegetarian | FSSAI Certified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
