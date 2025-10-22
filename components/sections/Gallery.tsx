'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export const Gallery: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: '/images/gallery/kurkure-momos.jpg',
      alt: 'Kurkure Momos - Our Signature Dish',
      category: 'food'
    },
    {
      id: 2,
      url: '/images/gallery/pizza-momos.jpg',
      alt: 'Pizza Momos - Fusion Innovation',
      category: 'food'
    },
    {
      id: 3,
      url: '/images/gallery/stall-front.jpg',
      alt: 'Momos Magic Stall - Naya Bazar',
      category: 'stall'
    },
    {
      id: 4,
      url: '/images/gallery/steamed-momos.jpg',
      alt: 'Fresh Steamed Momos',
      category: 'food'
    },
    {
      id: 5,
      url: '/images/gallery/award-ceremony.jpg',
      alt: 'Best Quality Food Award',
      category: 'awards'
    },
    {
      id: 6,
      url: '/images/gallery/kitchen.jpg',
      alt: 'Our Hygienic Kitchen',
      category: 'stall'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream-white to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our <span className="text-premium-gold">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A visual journey through our culinary creations and memorable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full bg-gray-200">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-premium-gold text-black text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
