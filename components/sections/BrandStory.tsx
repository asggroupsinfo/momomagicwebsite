'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineEvent {
  date: string;
  event: string;
  description: string;
}

export const BrandStory: React.FC = () => {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.3 });

  const timelineEvents: TimelineEvent[] = [
    {
      date: 'Sep 2023',
      event: 'Humble Beginnings',
      description: 'Started with a small stall in Naya Bazar, Sherghati',
    },
    {
      date: 'Nov 2023',
      event: 'The Transformation',
      description: 'Pivoted from Pita to Momos - understanding customer needs',
    },
    {
      date: 'Jan 2024',
      event: 'Innovation Launch',
      description: 'Introduced exclusive Kurkure Momos - first in Sherghati',
    },
    {
      date: 'Jun 2024',
      event: 'Recognition',
      description: '"Best Quality Food in City" award from District Magistrate',
    },
    {
      date: 'Dec 2024',
      event: 'Premium Upgrade',
      description: 'Complete stall redesign with premium branding',
    },
    {
      date: 'Mar 2025',
      event: 'Fusion Innovation',
      description: 'Launched Pizza Momos - unique fusion creation',
    },
  ];

  return (
    <section id="story" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          The Magic Began With a Dream, Not a Recipe
        </motion.h2>

        {/* Split Screen Layout */}
        <div
          ref={storyRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              In September 2023, a young entrepreneur named{' '}
              <span className="font-semibold text-magic-red">Dhruv Gupta</span>{' '}
              decided he'd rather build his own empire than work in someone
              else's. Tired of the 9-to-5 rat race, he believed in the
              philosophy:{' '}
              <span className="italic">
                "Why be an employee when you can be an employer?"
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Starting with traditional Bihari{' '}
              <span className="font-semibold">'Pita'</span> - a delicacy made
              from rice and lentils - he quickly learned that success requires
              understanding what people truly crave. For two months, customers
              passed by, unaware of this hidden gem.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              The pivot to momos wasn't just a business decision - it was a
              revelation. Dhruv infused them with the same passion and quality
              standards he maintained for his traditional recipes. The small
              stall began attracting attention, and soon{' '}
              <span className="font-bold text-magic-red">"Momos Magic"</span>{' '}
              became the talk of Sherghati.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Today, Momos Magic isn't just a food stall; it's a symbol of
              entrepreneurial spirit and culinary innovation. From introducing
              Sherghati's first{' '}
              <span className="font-semibold text-warm-orange">
                Kurkure Momos
              </span>{' '}
              to creating unique{' '}
              <span className="font-semibold text-warm-orange">
                Pizza Momos
              </span>
              , Dhruv continues to push boundaries and delight customers.
            </motion.p>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder Image with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-magic-red via-warm-orange to-premium-gold flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-8xl mb-4">🥟</div>
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Dhruv Gupta
                  </p>
                  <p className="text-lg">Founder & Head Innovator</p>
                  <p className="text-sm mt-4 italic">
                    "From Humble Stall to Culinary Legend"
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-premium-gold rounded-lg pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        {/* Founder Philosophy Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 py-12 px-6 bg-white rounded-lg shadow-lg border-2 border-premium-gold"
        >
          <p
            className="text-3xl md:text-4xl font-bold text-magic-red mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Quantity bhi Mast, Taste bhi Zabardast"
          </p>
          <p className="text-lg text-gray-600">
            Because every customer deserves the best of both worlds
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Journey Timeline
        </motion.h3>

        {/* Desktop Timeline (Vertical) */}
        <div className="hidden md:block relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-premium-gold"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Horizontal Scroll) */}
        <div className="md:hidden overflow-x-auto pb-8">
          <div className="flex space-x-6 min-w-max px-4">
            {timelineEvents.map((event, index) => (
              <MobileTimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isLeft }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex ${isLeft ? 'justify-end' : 'justify-start'} items-center`}
    >
      <div className={`w-5/12 ${isLeft ? 'text-right pr-12' : 'pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-lg shadow-lg border-2 border-premium-gold cursor-pointer bg-white"
        >
          <p className="text-sm font-semibold text-premium-gold mb-2">
            {event.date}
          </p>
          <h4
            className="text-xl font-bold text-foreground mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {event.event}
          </h4>
          <p className="text-gray-600">{event.description}</p>
        </motion.div>
      </div>

      {/* Center Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-premium-gold rounded-full border-4 border-white shadow-lg z-10"
      ></motion.div>
    </motion.div>
  );
};

interface MobileTimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const MobileTimelineItem: React.FC<MobileTimelineItemProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-72"
    >
      <div className="p-6 rounded-lg shadow-lg border-2 border-premium-gold h-full bg-white">
        <p className="text-sm font-semibold text-premium-gold mb-2">
          {event.date}
        </p>
        <h4
          className="text-xl font-bold text-foreground mb-2"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {event.event}
        </h4>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </motion.div>
  );
};
