'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const achievements = [
  {
    icon: '🏆',
    title: 'DM Award 2024',
    description: 'Best Quality Food in City',
    color: 'golden-glow',
  },
  {
    icon: '🔒',
    title: 'FSSAI Certified',
    description: 'License: 20424201001152',
    color: 'vegetarian-green',
  },
  {
    icon: '⭐',
    title: '4.9/5 Rating',
    description: '2000+ Google Reviews',
    color: 'premium-orange',
  },
  {
    icon: '🌱',
    title: '100% Vegetarian',
    description: 'Pure Veg Kitchen',
    color: 'vegetarian-green',
  },
  {
    icon: '✨',
    title: 'First in Bihar',
    description: 'Kurkure Momos Innovation',
    color: 'golden-glow',
  },
  {
    icon: '🎯',
    title: '2000+ Customers',
    description: 'Served with Love',
    color: 'warm-orange',
  },
];

const stats = [
  { number: '2000+', label: 'Happy Customers', icon: '😊' },
  { number: '16+', label: 'Menu Items', icon: '🥟' },
  { number: '4.9/5', label: 'Google Rating', icon: '⭐' },
  { number: '100%', label: 'Vegetarian', icon: '🌱' },
];

export const TrustAchievements: React.FC = () => {
  return (
    <section className="py-20 bg-deep-space">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-premium-orange mb-4">
            Trust & Achievements
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Building trust through quality, hygiene, and innovation
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-golden-glow mb-2">
                {stat.number}
              </div>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-6xl mb-4">{achievement.icon}</div>
                <h3 className={`text-xl font-bold text-${achievement.color} mb-2`}>
                  {achievement.title}
                </h3>
                <p className="text-foreground/70">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="bg-gradient-to-r from-pitch-black via-deep-space to-pitch-black border-2 border-golden-glow rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-golden-glow mb-8">
            Why Choose Momos Magic?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧼</div>
              <h4 className="font-semibold text-premium-orange mb-2">Hygienic</h4>
              <p className="text-sm text-foreground/70">
                Maintained with highest hygiene standards
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">👨‍🍳</div>
              <h4 className="font-semibold text-premium-orange mb-2">Expert Chef</h4>
              <p className="text-sm text-foreground/70">
                Trained in authentic momo preparation
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🥬</div>
              <h4 className="font-semibold text-premium-orange mb-2">Fresh Ingredients</h4>
              <p className="text-sm text-foreground/70">
                Daily fresh vegetables and quality ingredients
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-semibold text-premium-orange mb-2">Affordable</h4>
              <p className="text-sm text-foreground/70">
                Premium quality at reasonable prices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
