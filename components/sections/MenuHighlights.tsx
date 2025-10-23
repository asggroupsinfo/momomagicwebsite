'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const categories = [
  {
    name: 'Steamed Perfection',
    highlight: 'Fresh & Healthy',
    icon: '🥟',
    color: 'vegetarian-green',
    items: ['Veg Momos', 'Paneer Momos', 'Soya Momos', 'Cheese Corn'],
    description: 'Soft, juicy, and perfectly steamed momos with fresh ingredients',
  },
  {
    name: 'Crispy Fried Delights',
    highlight: 'Golden & Crunchy',
    icon: '🔥',
    color: 'warm-orange',
    items: ['Veg Fried', 'Paneer Fried', 'Soya Fried', 'Cheese Corn Fried'],
    description: 'Golden-fried momos with a perfect crispy exterior',
  },
  {
    name: 'Magic Signatures',
    highlight: 'Sherghati Exclusive',
    icon: '✨',
    color: 'golden-glow',
    items: ['Kurkure Veg', 'Kurkure Paneer', 'Kurkure Cheese'],
    description: 'Our exclusive Kurkure momos - crispy, crunchy, and magical',
  },
  {
    name: 'Fusion Innovations',
    highlight: 'Innovative Fusion',
    icon: '🍕',
    color: 'premium-orange',
    items: ['Veg Pizza', 'Paneer Pizza', 'Soya Pizza', 'Cheese Corn Pizza'],
    description: 'Revolutionary Pizza Momos - a fusion like never before',
  },
];

export const MenuHighlights: React.FC = () => {
  return (
    <section className="py-20 bg-pitch-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-orange mb-4">
            Explore Our Menu
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From traditional steamed to innovative fusion - discover flavors that define Momos Magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-golden-glow mb-2">
                    {category.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${category.color}/20 text-${category.color}`}>
                    {category.highlight}
                  </span>
                </div>

                <p className="text-foreground/70 text-center mb-4 flex-grow">
                  {category.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-premium-orange mb-2">
                    {category.items.length} Items Available:
                  </p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-golden-glow">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/menu">
            <Button variant="primary" size="lg" className="transform hover:scale-105">
              View Full Menu →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
