'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const reviews = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    date: 'Dec 2024',
    text: 'Best momos in Sherghati! The Kurkure momos are absolutely amazing. Never tasted anything like this before.',
    avatar: '👨',
  },
  {
    name: 'Priya Singh',
    rating: 5,
    date: 'Nov 2024',
    text: 'Hygienic, tasty, and affordable. The Pizza momos are a must-try! Dhruv bhaiya maintains excellent quality.',
    avatar: '👩',
  },
  {
    name: 'Amit Sharma',
    rating: 5,
    date: 'Oct 2024',
    text: 'Award-winning quality! The steamed momos are soft and juicy. FSSAI certified gives me confidence.',
    avatar: '👨',
  },
  {
    name: 'Neha Gupta',
    rating: 5,
    date: 'Sep 2024',
    text: 'My go-to place for evening snacks. The cheese corn momos are heavenly. Highly recommended!',
    avatar: '👩',
  },
];

export const GoogleReviews: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-golden-glow mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-6">
            2000+ Happy Customers · 4.9/5 Rating on Google
          </p>
          <div className="flex items-center justify-center gap-2 text-3xl">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-golden-glow">⭐</span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-foreground/60">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-golden-glow">⭐</span>
                  ))}
                </div>

                <p className="text-foreground/80 text-sm flex-grow">
                  "{review.text}"
                </p>

                <div className="mt-4 pt-4 border-t border-charcoal">
                  <p className="text-xs text-foreground/50 flex items-center gap-1">
                    <span className="text-premium-orange">G</span> Google Review
                  </p>
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
          <a
            href="https://www.google.com/maps/place/Momos+Magic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-premium-orange text-pitch-black font-semibold rounded-lg hover:bg-burnt-orange transition-colors duration-300"
          >
            <span className="text-xl">G</span>
            Read All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};
