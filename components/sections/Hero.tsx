'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Award, CheckCircle, Star, Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const badges = [
    { icon: Award, text: 'Best Quality Food in City', color: 'text-premium-gold' },
    { icon: CheckCircle, text: 'FSSAI Certified', color: 'text-vegetarian-green' },
    { icon: Utensils, text: '100% Vegetarian', color: 'text-premium-gold' },
    { icon: Star, text: '4.9/5 (2000+ Customers)', color: 'text-premium-gold' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-fallback.jpg"
          >
            <source src="/videos/momos-preparation.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-fallback.jpg')" }}
          />
        )}
      </div>

      {/* Gradient Overlay - Black Background */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />

      {/* Gold Particles Animation */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
          const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-premium-gold rounded-full opacity-30"
              initial={{
                x: Math.random() * windowWidth,
                y: Math.random() * windowHeight,
              }}
              animate={{
                y: [null, Math.random() * windowHeight],
                x: [null, Math.random() * windowWidth],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>

      {/* Floating Momos */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[
          { delay: 0, duration: 15, startX: '10%', endX: '90%', startY: '20%', endY: '80%' },
          { delay: 2, duration: 18, startX: '80%', endX: '20%', startY: '30%', endY: '70%' },
          { delay: 4, duration: 20, startX: '50%', endX: '60%', startY: '10%', endY: '90%' },
        ].map((momo, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-20"
            initial={{ x: momo.startX, y: momo.startY, rotate: 0 }}
            animate={{
              x: [momo.startX, momo.endX, momo.startX],
              y: [momo.startY, momo.endY, momo.startY],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: momo.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: momo.delay,
            }}
          >
            🥟
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          From Humble Stall to{' '}
          <span className="text-premium-gold">Culinary Legend</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl mb-12 text-cream-white drop-shadow-lg max-w-4xl mx-auto"
        >
          Experience the Magic That Transformed Sherghati's Street Food Scene
        </motion.p>

        {/* Animated Badges Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-premium-gold/30 hover:bg-white/20 hover:border-premium-gold transition-all duration-300"
              >
                <Icon className={badge.color} size={24} />
                <span className="text-sm md:text-base text-white font-medium">
                  {badge.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons with Enhanced Hover Effects - Orange Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('menu')}
            className="group relative px-6 py-3 bg-premium-gold text-black rounded-lg font-semibold text-base overflow-hidden transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Taste the Magic → Order Now</span>
            <motion.div
              className="absolute inset-0 border-3 border-foreground rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 0 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('story')}
            className="group relative px-6 py-3 bg-transparent text-white rounded-lg font-semibold text-base border-2 border-premium-gold overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Discover Our Story
            </span>
            <motion.div
              className="absolute inset-0 bg-premium-gold"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 0 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-premium-gold text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
