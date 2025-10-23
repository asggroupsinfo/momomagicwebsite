'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: 'Sep 2023',
    title: 'Humble Beginnings',
    description: 'Started with a small stall in Naya Bazar, Sherghati',
  },
  {
    date: 'Nov 2023',
    title: 'Pita to Momos Transformation',
    description: 'Pivoted from Pita to Momos after understanding market demand',
  },
  {
    date: 'Jan 2024',
    title: 'Kurkure Momos Introduced',
    description: 'Launched exclusive Kurkure Momos - first in Bihar',
  },
  {
    date: 'Jun 2024',
    title: 'Award from DM Office',
    description: 'Received "Best Quality Food in City" award',
  },
  {
    date: 'Dec 2024',
    title: 'Premium Stall Redesign',
    description: 'Upgraded to premium stall with modern setup',
  },
  {
    date: 'Mar 2025',
    title: 'Pizza Momos Launched',
    description: 'Introduced innovative Pizza Momos fusion',
  },
];

export const BrandStory: React.FC = () => {
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
            The Magic Began With a Dream, Not a Recipe
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From a young entrepreneur's vision to Sherghati's most loved food destination
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              In September 2023, <span className="text-premium-orange font-semibold">Dhruv Gupta</span>, 
              a young entrepreneur with a dream, started his journey with a simple philosophy: 
              "Better to be a small owner than someone else's employee."
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Initially experimenting with Pita, Dhruv quickly learned from the market. The pivot 
              to momos wasn't just a business decision—it was listening to what people truly wanted. 
              This adaptability became the foundation of Momos Magic.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The breakthrough came with <span className="text-golden-glow font-semibold">Kurkure Momos</span>—an 
              innovation nobody in Bihar had attempted. The crispy, crunchy coating combined with 
              perfectly steamed filling created a sensation that put Sherghati on the food map.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Today, Momos Magic stands as a testament to quality, innovation, and the magic that 
              happens when passion meets perseverance. With the District Magistrate's award for 
              "Best Quality Food" and 2000+ happy customers, the journey continues.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-pitch-black border-2 border-golden-glow rounded-lg p-8 text-center">
              <p className="text-3xl md:text-4xl font-serif italic text-premium-orange mb-4">
                "Quantity bhi Mast,<br />Taste bhi Zabardast"
              </p>
              <p className="text-foreground/70">— Momos Magic Philosophy</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-premium-orange mb-12">
            Our Journey
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-golden-glow/30 hidden lg:block" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-deep-space border border-charcoal rounded-lg p-6 hover:border-golden-glow transition-colors duration-300">
                      <p className="text-premium-orange font-semibold mb-2">{event.date}</p>
                      <h4 className="text-xl font-bold text-golden-glow mb-2">{event.title}</h4>
                      <p className="text-foreground/70">{event.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-golden-glow border-4 border-pitch-black"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
