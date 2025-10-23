'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const galleryImages = [
  { id: 1, title: 'Our Premium Stall', category: 'stall' },
  { id: 2, title: 'Kurkure Momos', category: 'food' },
  { id: 3, title: 'Pizza Momos', category: 'food' },
  { id: 4, title: 'Steamed Momos', category: 'food' },
  { id: 5, title: 'Kitchen Setup', category: 'stall' },
  { id: 6, title: 'Award Ceremony', category: 'awards' },
  { id: 7, title: 'Happy Customers', category: 'customers' },
  { id: 8, title: 'Team at Work', category: 'stall' },
];

const faqs = [
  {
    question: 'What makes Momos Magic special?',
    answer: 'We are the first in Bihar to introduce Kurkure Momos. Our commitment to quality, hygiene, and innovation sets us apart. We have received the "Best Quality Food in City" award from the District Magistrate and maintain FSSAI certification.',
  },
  {
    question: 'Are all items 100% vegetarian?',
    answer: 'Yes! We are a 100% pure vegetarian kitchen. All our momos are made with fresh vegetables, paneer, soya, and cheese. We maintain strict vegetarian standards.',
  },
  {
    question: 'What are Kurkure Momos?',
    answer: 'Kurkure Momos are our signature innovation - momos with a crispy, crunchy coating that gives them an extra layer of texture and flavor. This unique preparation method was first introduced by us in Bihar.',
  },
  {
    question: 'Do you offer home delivery?',
    answer: 'Yes, we offer home delivery services. Free delivery is available on orders above ₹500. You can also opt for takeaway or dine-in at our stall.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'We are open every day from 10:00 AM to 10:00 PM. Visit us at Naya Bazar, Near Post Office, Sherghati.',
  },
  {
    question: 'Do you take bulk orders for events?',
    answer: 'Absolutely! We specialize in bulk orders for parties, events, and celebrations. Orders of 50+ pieces get special pricing. Contact us at +91 9955955191 to place your order.',
  },
  {
    question: 'What is the price range?',
    answer: 'Our momos are priced between ₹40-₹85 per plate (6 pieces). Steamed momos start at ₹40, while our premium Pizza Momos are ₹85. We offer great value for premium quality.',
  },
  {
    question: 'Is your kitchen FSSAI certified?',
    answer: 'Yes, we are FSSAI certified (License: 20424201001152). We maintain the highest standards of food safety and hygiene in our kitchen.',
  },
];

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredGallery = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-pitch-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-premium-orange mb-4">
            About Momos Magic
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            The story of passion, perseverance, and the magic of momos
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-golden-glow mb-6">
                  Meet Dhruv Gupta - The Visionary Behind Momos Magic
                </h2>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    In September 2023, Dhruv Gupta, a young entrepreneur from Sherghati, started 
                    his journey with a simple yet powerful philosophy: <span className="text-premium-orange font-semibold">
                    "Better to be a small owner than someone else's employee."</span>
                  </p>
                  <p>
                    What began as a small experiment with Pita quickly transformed into something 
                    magical. Dhruv listened to his customers, understood the market, and pivoted 
                    to momos - a decision that would change everything.
                  </p>
                  <p>
                    The breakthrough came with the introduction of <span className="text-golden-glow font-semibold">
                    Kurkure Momos</span> - an innovation nobody in Bihar had attempted before. 
                    This bold move put Sherghati on the food map and earned Momos Magic recognition 
                    from the District Magistrate's office.
                  </p>
                  <p>
                    Today, Momos Magic serves 2000+ happy customers with the same passion and 
                    commitment to quality that started it all. The journey continues with new 
                    innovations like Pizza Momos, always staying true to the core values of 
                    quality, hygiene, and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-charcoal rounded-lg p-8 text-center border-2 border-golden-glow">
                  <div className="text-8xl mb-4">👨‍🍳</div>
                  <h3 className="text-2xl font-bold text-premium-orange mb-2">Dhruv Gupta</h3>
                  <p className="text-foreground/70 mb-4">Founder & Chef</p>
                  <div className="space-y-2 text-sm text-foreground/60">
                    <p>📍 Sherghati, Bihar</p>
                    <p>🎯 Established: September 2023</p>
                    <p>🏆 Award Winner 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-golden-glow mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💎', title: 'Quality First', desc: 'Premium ingredients, no compromises' },
              { icon: '🧼', title: 'Hygiene', desc: 'FSSAI certified, spotless kitchen' },
              { icon: '💡', title: 'Innovation', desc: 'First to introduce Kurkure Momos in Bihar' },
              { icon: '❤️', title: 'Customer Love', desc: '2000+ happy customers, 4.9/5 rating' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-premium-orange mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-golden-glow mb-8">
            Gallery
          </h2>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['all', 'food', 'stall', 'awards', 'customers'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-premium-orange text-pitch-black'
                    : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="bg-charcoal rounded-lg aspect-square flex items-center justify-center overflow-hidden border border-golden-glow/30 hover:border-golden-glow transition-colors duration-300 cursor-pointer">
                  <div className="text-center">
                    <p className="text-4xl mb-2">📸</p>
                    <p className="text-xs text-foreground/70 px-2">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-golden-glow mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="cursor-pointer" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-premium-orange pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-golden-glow text-2xl">
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                  </div>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-charcoal"
                    >
                      <p className="text-foreground/80">{faq.answer}</p>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
