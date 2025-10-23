'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rohan Kumar',
      role: 'Regular Customer',
      content: 'The Kurkure Momos are revolutionary! Nobody in Bihar makes them like Momos Magic. Dhruv bhaiya\'s innovation changed street food forever!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Local Foodie',
      content: 'From watching them start with a small stall to becoming the most premium food spot - what a journey! The Pizza Momos are genius!',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Sharma',
      role: 'Food Blogger',
      content: 'Awarded "Best Quality Food" for a reason! The hygiene, taste, and innovation combination is unmatched in Sherghati.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our <span className="text-golden-glow">Customers Say</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join 2000+ happy customers who found their magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-golden-glow/20" size={48} />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-golden-glow fill-golden-glow" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-golden-glow rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=momos+magic+sherghati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-300 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #ffc241 0%, #e6ac2b 100%)' }}
          >
            See All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};
