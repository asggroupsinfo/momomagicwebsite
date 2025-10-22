'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface MenuItem {
  id: number;
  name: string;
  category: 'Steamed' | 'Fried' | 'Kurkure' | 'Pizza';
  description: string;
  price5pc: number;
  price10pc: number;
  isSpecial?: boolean;
  image?: string;
}

export const MenuHighlights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Veg Momos',
      category: 'Steamed',
      description: 'Fresh vegetables wrapped in soft dough, steamed to perfection',
      price5pc: 25,
      price10pc: 50,
    },
    {
      id: 2,
      name: 'Paneer Momos',
      category: 'Steamed',
      description: 'Premium cottage cheese filling with aromatic spices',
      price5pc: 35,
      price10pc: 70,
    },
    {
      id: 3,
      name: 'Cheese Corn Momos',
      category: 'Steamed',
      description: 'Sweet corn and cheese blend for a creamy delight',
      price5pc: 50,
      price10pc: 100,
    },
    {
      id: 4,
      name: 'Veg Fried Momos',
      category: 'Fried',
      description: 'Crispy golden fried momos with crunchy exterior',
      price5pc: 30,
      price10pc: 60,
    },
    {
      id: 5,
      name: 'Paneer Fried Momos',
      category: 'Fried',
      description: 'Fried to perfection with rich paneer filling',
      price5pc: 40,
      price10pc: 80,
    },
    {
      id: 6,
      name: 'Cheese Corn Fried',
      category: 'Fried',
      description: 'Crispy fried momos with gooey cheese corn filling',
      price5pc: 55,
      price10pc: 110,
    },
    {
      id: 7,
      name: 'Kurkure Momos',
      category: 'Kurkure',
      description: 'Sherghati Exclusive! Crispy kurkure coating with veg filling',
      price5pc: 50,
      price10pc: 100,
      isSpecial: true,
    },
    {
      id: 8,
      name: 'Paneer Kurkure',
      category: 'Kurkure',
      description: 'Premium paneer in our signature kurkure style',
      price5pc: 60,
      price10pc: 120,
      isSpecial: true,
    },
    {
      id: 9,
      name: 'Cheese Kurkure',
      category: 'Kurkure',
      description: 'Extra cheesy with crunchy kurkure coating',
      price5pc: 60,
      price10pc: 120,
      isSpecial: true,
    },
    {
      id: 10,
      name: 'Veg Pizza Momos',
      category: 'Pizza',
      description: 'Fusion innovation! Pizza flavors in momo form',
      price5pc: 80,
      price10pc: 160,
      isSpecial: true,
    },
    {
      id: 11,
      name: 'Paneer Pizza Momos',
      category: 'Pizza',
      description: 'Paneer and pizza sauce fusion creation',
      price5pc: 100,
      price10pc: 200,
      isSpecial: true,
    },
    {
      id: 12,
      name: 'Cheese Corn Pizza',
      category: 'Pizza',
      description: 'Ultimate cheese corn with pizza twist',
      price5pc: 120,
      price10pc: 240,
      isSpecial: true,
    },
  ];

  const categories = ['All', 'Steamed', 'Fried', 'Kurkure', 'Pizza'];

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleImageLoad = (id: number) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="menu" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-premium-gold"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Magical Creations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          From traditional steamed momos to our exclusive Kurkure and Pizza
          innovations - every bite is crafted with love and quality
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-magic-red text-white border-2 border-premium-gold shadow-lg'
                  : 'bg-white text-premium-gold border-2 border-gray-300 hover:border-premium-gold'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {filteredItems.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                index={index}
                imageLoaded={imageLoaded[item.id]}
                onImageLoad={() => handleImageLoad(item.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="primary" href="/menu">
            View Full Menu →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface MenuCardProps {
  item: MenuItem;
  index: number;
  imageLoaded?: boolean;
  onImageLoad: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index, imageLoaded, onImageLoad }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-lg shadow-lg border-2 border-premium-gold hover:border-premium-gold overflow-hidden cursor-pointer transition-all duration-300 bg-white"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-premium-gold overflow-hidden">
        {/* Loading State */}
        {!imageLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-6xl">🥟</div>
          </motion.div>
        )}

        {/* Special Badge */}
        {item.isSpecial && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="absolute top-4 right-4 bg-premium-gold text-premium-gold px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          >
            ⭐ EXCLUSIVE
          </motion.div>
        )}

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-magic-red">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 text-premium-gold"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {item.name}
        </h3>

        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Price Display */}
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex items-baseline space-x-2">
              <span className="text-xs text-gray-500">5 pcs</span>
              <span
                className="text-lg font-bold text-premium-gold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                ₹{item.price5pc}
              </span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xs text-gray-500">10 pcs</span>
              <span
                className="text-lg font-bold text-premium-gold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                ₹{item.price10pc}
              </span>
            </div>
          </div>

          {/* Order Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-magic-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-premium-gold hover:text-premium-gold transition-colors duration-300"
          >
            Order
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
