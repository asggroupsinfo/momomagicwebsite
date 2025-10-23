'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { menuItems, categories } from '@/data/menu';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showPopularOnly, setShowPopularOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (selectedType !== 'all' && item.type !== selectedType) return false;
    if (showPopularOnly && !item.popular) return false;
    if (showNewOnly && !item.new) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-pitch-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-premium-orange mb-4">
            Our Complete Menu
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore our full range of delicious momos - from traditional to innovative fusion
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-golden-glow mb-4">Filter Menu</h3>

            {/* Category Filter */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground/80 mb-3">Category</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-premium-orange text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-premium-orange text-pitch-black'
                        : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground/80 mb-3">Filling Type</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedType('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === 'all'
                      ? 'bg-golden-glow text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  All Types
                </button>
                <button
                  onClick={() => setSelectedType('veg')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === 'veg'
                      ? 'bg-golden-glow text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  🌱 Veg
                </button>
                <button
                  onClick={() => setSelectedType('paneer')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === 'paneer'
                      ? 'bg-golden-glow text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  🧀 Paneer
                </button>
                <button
                  onClick={() => setSelectedType('soya')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === 'soya'
                      ? 'bg-golden-glow text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  💪 Soya
                </button>
                <button
                  onClick={() => setSelectedType('cheese-corn')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === 'cheese-corn'
                      ? 'bg-golden-glow text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  🌽 Cheese Corn
                </button>
              </div>
            </div>

            {/* Special Filters */}
            <div>
              <p className="text-sm font-semibold text-foreground/80 mb-3">Special</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setShowPopularOnly(!showPopularOnly);
                    setShowNewOnly(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    showPopularOnly
                      ? 'bg-warm-orange text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  ⭐ Popular Only
                </button>
                <button
                  onClick={() => {
                    setShowNewOnly(!showNewOnly);
                    setShowPopularOnly(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    showNewOnly
                      ? 'bg-vegetarian-green text-pitch-black'
                      : 'bg-deep-space text-foreground/70 hover:bg-charcoal'
                  }`}
                >
                  ✨ New Items
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-charcoal">
              <p className="text-sm text-foreground/60">
                Showing {filteredItems.length} of {menuItems.length} items
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="bg-charcoal rounded-lg mb-4 aspect-video flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">🥟</div>
                </div>

                {/* Badges */}
                <div className="flex gap-2 mb-3">
                  {item.popular && (
                    <span className="px-2 py-1 bg-warm-orange/20 text-warm-orange text-xs font-semibold rounded">
                      ⭐ Popular
                    </span>
                  )}
                  {item.new && (
                    <span className="px-2 py-1 bg-vegetarian-green/20 text-vegetarian-green text-xs font-semibold rounded">
                      ✨ New
                    </span>
                  )}
                  {item.spicy && (
                    <span className="px-2 py-1 bg-premium-orange/20 text-premium-orange text-xs font-semibold rounded">
                      🌶️ Spicy
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-golden-glow mb-2">{item.name}</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">{item.description}</p>

                {/* Price & Order */}
                <div className="flex items-center justify-between pt-4 border-t border-charcoal">
                  <div>
                    <p className="text-2xl font-bold text-premium-orange">₹{item.price}</p>
                    <p className="text-xs text-foreground/50">per plate (6 pcs)</p>
                  </div>
                  <Button variant="primary" size="sm">
                    Order Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-6xl mb-4">🔍</p>
            <h3 className="text-2xl font-bold text-golden-glow mb-2">No items found</h3>
            <p className="text-foreground/70 mb-6">Try adjusting your filters</p>
            <Button
              variant="primary"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('all');
                setShowPopularOnly(false);
                setShowNewOnly(false);
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
