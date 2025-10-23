'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const services = [
  {
    icon: '🏪',
    title: 'Dine-In',
    description: 'Enjoy fresh momos at our premium stall',
    color: 'premium-orange',
  },
  {
    icon: '📦',
    title: 'Takeaway',
    description: 'Quick pickup for on-the-go cravings',
    color: 'golden-glow',
  },
  {
    icon: '🚚',
    title: 'Home Delivery',
    description: 'Hot momos delivered to your doorstep',
    color: 'warm-orange',
  },
  {
    icon: '🎉',
    title: 'Bulk Orders',
    description: 'Perfect for parties and events',
    color: 'vegetarian-green',
  },
];

export const LocationServices: React.FC = () => {
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
            Visit Us & Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Find us in the heart of Sherghati · Open Every Day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-golden-glow mb-4">
                📍 Our Location
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-premium-orange text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-foreground/70">
                      Naya Bazar, Near Post Office<br />
                      Sherghati, Bihar 824211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-premium-orange text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-foreground/70">+91 9955955191</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-premium-orange text-xl">⏰</span>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-foreground/70">
                      10:00 AM - 10:00 PM<br />
                      Open Every Day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-premium-orange text-xl">🌐</span>
                  <div>
                    <p className="font-semibold text-foreground">Website</p>
                    <p className="text-foreground/70">www.momomegics.com</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="bg-charcoal rounded-lg overflow-hidden border border-golden-glow/30">
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-golden-glow text-4xl mb-2">🗺️</p>
                    <p className="text-foreground/70">Google Maps</p>
                    <p className="text-sm text-foreground/50">
                      Naya Bazar, Sherghati
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Naya+Bazar+Sherghati+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center px-6 py-3 bg-premium-orange text-pitch-black font-semibold rounded-lg hover:bg-burnt-orange transition-colors duration-300"
              >
                Get Directions on Google Maps →
              </a>
            </Card>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-golden-glow mb-6">
              Our Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="text-5xl mb-3">{service.icon}</div>
                    <h4 className={`text-lg font-semibold text-${service.color} mb-2`}>
                      {service.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-deep-space to-charcoal border-2 border-golden-glow">
              <h4 className="text-xl font-bold text-golden-glow mb-4">
                🎊 Special Offers
              </h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-premium-orange">✓</span>
                  <span>Bulk orders for parties & events (50+ pieces)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-premium-orange">✓</span>
                  <span>Free delivery on orders above ₹500</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-premium-orange">✓</span>
                  <span>Special combo deals available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-premium-orange">✓</span>
                  <span>Student discounts on weekdays</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
