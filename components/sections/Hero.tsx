'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pitch-black/70 via-pitch-black/50 to-pitch-black z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Floating Momos Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute text-6xl"
          initial={{ x: '10%', y: '20%', rotate: 0 }}
          animate={{
            x: ['10%', '15%', '10%'],
            y: ['20%', '30%', '20%'],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🥟
        </motion.div>

        <motion.div
          className="absolute text-6xl"
          initial={{ x: '80%', y: '60%', rotate: 0 }}
          animate={{
            x: ['80%', '75%', '80%'],
            y: ['60%', '50%', '60%'],
            rotate: [0, -360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🥟
        </motion.div>

        <motion.div
          className="absolute text-6xl"
          initial={{ x: '50%', y: '80%', rotate: 0 }}
          animate={{
            x: ['50%', '55%', '50%'],
            y: ['80%', '70%', '80%'],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🥟
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From Humble Stall to{' '}
          <span className="text-premium-orange">Culinary Legend</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the Magic That Transformed Sherghati's Street Food Scene
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" size="lg" className="transform hover:scale-105">
            Taste the Magic → Order Now
          </Button>
          <Button variant="outline" size="lg" className="transform hover:scale-105">
            Discover Our Story
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-deep-space/80 backdrop-blur-sm border border-golden-glow/30 rounded-lg p-4 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <p className="text-sm text-foreground/90 text-left">
              Awarded 'Best Quality Food in City' by District Magistrate
            </p>
          </div>

          <div className="bg-deep-space/80 backdrop-blur-sm border border-vegetarian-green/30 rounded-lg p-4 flex items-center gap-3">
            <span className="text-3xl">🔒</span>
            <p className="text-sm text-foreground/90 text-left">
              FSSAI Certified: 20424201001152
            </p>
          </div>

          <div className="bg-deep-space/80 backdrop-blur-sm border border-vegetarian-green/30 rounded-lg p-4 flex items-center gap-3">
            <span className="text-3xl">🌱</span>
            <p className="text-sm text-foreground/90 text-left">
              100% Pure Vegetarian · Since 2023
            </p>
          </div>

          <div className="bg-deep-space/80 backdrop-blur-sm border border-warm-orange/30 rounded-lg p-4 flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            <p className="text-sm text-foreground/90 text-left">
              4.9/5 (2000+ Happy Customers)
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div className="text-premium-orange text-4xl">↓</div>
        </motion.div>
      </div>
    </section>
  );
};
