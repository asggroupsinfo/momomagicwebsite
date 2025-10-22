'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Award, Shield, Leaf, Star, Trophy, CheckCircle } from 'lucide-react';

interface TrustFactor {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  value?: number;
  suffix?: string;
}

interface Achievement {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  highlight: boolean;
}

export const TrustAchievements: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const trustFactors: TrustFactor[] = [
    {
      id: 1,
      icon: <Trophy className="w-12 h-12" />,
      title: 'Award Winning',
      description: 'Best Quality Food in City - District Magistrate Office',
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12" />,
      title: 'FSSAI Certified',
      description: 'License: 20424201001152 - Highest Hygiene Standards',
    },
    {
      id: 3,
      icon: <Leaf className="w-12 h-12" />,
      title: '100% Vegetarian',
      description: 'Pure Veg Kitchen - No Compromise on Quality',
    },
    {
      id: 4,
      icon: <Star className="w-12 h-12" />,
      title: 'Rated',
      description: '2000+ Happy Customers - Consistent Quality',
      value: 4.9,
      suffix: '/5',
    },
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      icon: <Award className="w-8 h-8" />,
      title: 'Best Quality Food Award',
      description: 'Awarded by District Magistrate Office for exceptional food quality and hygiene standards',
      date: 'June 2024',
      highlight: true,
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: 'FSSAI Certification',
      description: 'License No: 20424201001152 - Certified for highest food safety and hygiene standards',
      date: 'January 2024',
      highlight: true,
    },
    {
      id: 3,
      icon: <CheckCircle className="w-8 h-8" />,
      title: '100% Pure Vegetarian',
      description: 'Committed to serving only pure vegetarian food with no compromise on quality',
      date: 'Since 2023',
      highlight: false,
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8" />,
      title: '2000+ Happy Customers',
      description: 'Consistently rated 4.9/5 by our loyal customers across Sherghati',
      date: 'March 2025',
      highlight: false,
    },
  ];

  const CountUp: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countRef = useRef<HTMLSpanElement>(null);
    const isCountInView = useInView(countRef, { once: true });

    useEffect(() => {
      if (isCountInView && !hasAnimated) {
        setHasAnimated(true);
        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);

          const currentCount = startValue + (end - startValue) * progress;
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isCountInView, hasAnimated, end, duration]);

    return (
      <span ref={countRef} className="text-5xl font-bold text-premium-gold">
        {count.toFixed(1)}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream-white mb-4 font-heading">
            Why Customers Trust Our Magic
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Certified quality, award-winning taste, and unwavering commitment to excellence
          </p>
        </motion.div>

        {/* Trust Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-premium-gold/20 hover:border-premium-gold transition-all duration-300 text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-premium-gold/10 text-premium-gold mb-6"
              >
                {factor.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-cream-white mb-3 font-heading">
                {factor.title}
              </h3>

              {/* Count-up for rating */}
              {factor.value && (
                <div className="mb-3">
                  <CountUp end={factor.value} duration={2000} />
                  <span className="text-3xl font-bold text-premium-gold">{factor.suffix}</span>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-cream-white mb-12 font-heading">
            Our Achievements & Certifications
          </h3>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 ${
                  achievement.highlight
                    ? 'border-premium-gold hover:border-premium-gold/80 hover:shadow-2xl hover:shadow-premium-gold/20'
                    : 'border-white/10 hover:border-premium-gold/50'
                }`}
              >
                {/* Highlight Badge */}
                {achievement.highlight && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                    className="absolute -top-3 -right-3 bg-premium-gold text-foreground px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    ⭐ CERTIFIED
                  </motion.div>
                )}

                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      achievement.highlight
                        ? 'bg-premium-gold text-foreground'
                        : 'bg-white/10 text-premium-gold'
                    }`}
                  >
                    {achievement.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-cream-white">{achievement.title}</h4>
                      <span className="text-sm text-premium-gold font-semibold whitespace-nowrap ml-4">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-magic-red to-warm-orange rounded-2xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-white mb-3 font-heading">
              Experience the Certified Magic
            </h4>
            <p className="text-white/90 mb-6 max-w-xl">
              Join 2000+ satisfied customers who trust our award-winning quality and taste
            </p>
            <motion.a
              href="tel:+919955955191"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-premium-gold text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-premium-gold/90 transition-colors shadow-lg"
            >
              Order Now: +91 9955955191
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
