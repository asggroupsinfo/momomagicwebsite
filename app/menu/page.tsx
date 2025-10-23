'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Flame, Sparkles, TrendingUp } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  category: 'steamed' | 'fried' | 'kurkure' | 'pizza';
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra-magic';
  price5: number;
  price10: number;
  description: string;
  isPopular: boolean;
  isNew: boolean;
  image?: string;
  preparationTime: number; // in minutes
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Veg Momos',
      category: 'steamed',
      spiceLevel: 'mild',
      price5: 25,
      price10: 50,
      description: 'Classic steamed momos with fresh vegetables and aromatic spices',
      isPopular: true,
      isNew: false,
      preparationTime: 10,
    },
    {
      id: 2,
      name: 'Paneer Momos',
      category: 'steamed',
      spiceLevel: 'medium',
      price5: 35,
      price10: 70,
      description: 'Soft paneer filling with special herbs and spices',
      isPopular: true,
      isNew: false,
      preparationTime: 12,
    },
    {
      id: 3,
      name: 'Soya Momos',
      category: 'steamed',
      spiceLevel: 'medium',
      price5: 30,
      price10: 60,
      description: 'Protein-rich soya chunks with flavorful seasonings',
      isPopular: false,
      isNew: false,
      preparationTime: 10,
    },
    {
      id: 4,
      name: 'Cheese Corn Momos',
      category: 'steamed',
      spiceLevel: 'mild',
      price5: 50,
      price10: 100,
      description: 'Creamy cheese and sweet corn combination',
      isPopular: true,
      isNew: false,
      preparationTime: 12,
    },
    {
      id: 5,
      name: 'Veg Fried Momos',
      category: 'fried',
      spiceLevel: 'medium',
      price5: 30,
      price10: 60,
      description: 'Crispy golden fried momos with crunchy exterior',
      isPopular: true,
      isNew: false,
      preparationTime: 15,
    },
    {
      id: 6,
      name: 'Paneer Fried Momos',
      category: 'fried',
      spiceLevel: 'hot',
      price5: 46,
      price10: 80,
      description: 'Fried paneer momos with extra spicy kick',
      isPopular: false,
      isNew: false,
      preparationTime: 15,
    },
    {
      id: 7,
      name: 'Soya Fried Momos',
      category: 'fried',
      spiceLevel: 'medium',
      price5: 35,
      price10: 70,
      description: 'Crispy fried soya momos with perfect crunch',
      isPopular: false,
      isNew: false,
      preparationTime: 15,
    },
    {
      id: 8,
      name: 'Cheese Corn Fried Momos',
      category: 'fried',
      spiceLevel: 'mild',
      price5: 55,
      price10: 119,
      description: 'Golden fried momos with cheese corn filling',
      isPopular: true,
      isNew: false,
      preparationTime: 15,
    },
    {
      id: 9,
      name: 'Kurkure Veg Momos',
      category: 'kurkure',
      spiceLevel: 'hot',
      price5: 50,
      price10: 100,
      description: 'Our signature crispy kurkure coating with veg filling - Sherghati exclusive!',
      isPopular: true,
      isNew: false,
      preparationTime: 18,
    },
    {
      id: 10,
      name: 'Paneer Kurkure Momos',
      category: 'kurkure',
      spiceLevel: 'extra-magic',
      price5: 60,
      price10: 120,
      description: 'Extra crunchy kurkure momos with paneer and magic spices',
      isPopular: true,
      isNew: false,
      preparationTime: 18,
    },
    {
      id: 11,
      name: 'Cheese Kurkure Momos',
      category: 'kurkure',
      spiceLevel: 'medium',
      price5: 60,
      price10: 120,
      description: 'Cheesy goodness wrapped in crispy kurkure coating',
      isPopular: true,
      isNew: false,
      preparationTime: 18,
    },
    {
      id: 12,
      name: 'Veg Pizza Momos',
      category: 'pizza',
      spiceLevel: 'mild',
      price5: 80,
      price10: 160,
      description: 'Fusion innovation - Pizza flavors in momo form with Italian herbs',
      isPopular: true,
      isNew: true,
      preparationTime: 20,
    },
    {
      id: 13,
      name: 'Paneer Pizza Momos',
      category: 'pizza',
      spiceLevel: 'medium',
      price5: 100,
      price10: 200,
      description: 'Premium paneer with pizza sauce and mozzarella cheese',
      isPopular: true,
      isNew: true,
      preparationTime: 20,
    },
    {
      id: 14,
      name: 'Soya Pizza Momos',
      category: 'pizza',
      spiceLevel: 'medium',
      price5: 90,
      price10: 180,
      description: 'Protein-packed soya with pizza seasonings',
      isPopular: false,
      isNew: true,
      preparationTime: 20,
    },
    {
      id: 15,
      name: 'Cheese Corn Pizza Momos',
      category: 'pizza',
      spiceLevel: 'mild',
      price5: 120,
      price10: 240,
      description: 'Ultimate fusion - Cheese corn with pizza flavors and extra cheese',
      isPopular: true,
      isNew: true,
      preparationTime: 20,
    },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (selectedSpiceLevel !== 'all' && item.spiceLevel !== selectedSpiceLevel) {
        return false;
      }

      if (item.price10 < priceRange[0] || item.price10 > priceRange[1]) {
        return false;
      }

      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, selectedSpiceLevel, priceRange, searchQuery]);

  const categories = [
    { value: 'all', label: 'All Items', icon: '🥟' },
    { value: 'steamed', label: 'Steamed', icon: '♨️' },
    { value: 'fried', label: 'Fried', icon: '🔥' },
    { value: 'kurkure', label: 'Kurkure', icon: '✨' },
    { value: 'pizza', label: 'Pizza', icon: '🍕' },
  ];

  const spiceLevels = [
    { value: 'all', label: 'All Spice Levels', icon: '🌶️' },
    { value: 'mild', label: 'Mild', icon: '🟢' },
    { value: 'medium', label: 'Medium', icon: '🟡' },
    { value: 'hot', label: 'Hot', icon: '🟠' },
    { value: 'extra-magic', label: 'Extra Magic', icon: '🔴' },
  ];

  const getSpiceLevelDisplay = (level: string) => {
    const displays = {
      mild: { icon: '🟢', label: 'Mild' },
      medium: { icon: '🟡', label: 'Medium' },
      hot: { icon: '🟠', label: 'Hot' },
      'extra-magic': { icon: '🔴', label: 'Extra Magic' },
    };
    return displays[level as keyof typeof displays] || displays.mild;
  };

  const getCategoryDisplay = (category: string) => {
    const displays = {
      steamed: { label: 'Steamed', color: 'bg-vegetarian-green' },
      fried: { label: 'Fried', color: 'bg-warm-orange' },
      kurkure: { label: 'Kurkure', color: 'bg-golden-glow' },
      pizza: { label: 'Pizza', color: 'bg-premium-orange' },
    };
    return displays[category as keyof typeof displays] || displays.steamed;
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSpiceLevel('all');
    setPriceRange([0, 250]);
    setSearchQuery('');
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pitch-black mb-4 font-heading">
            Our Complete Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our magical collection of momos - from classic steamed to innovative fusion
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for your favorite momos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-golden-glow focus:outline-none text-pitch-black placeholder-gray-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-premium-orange transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter Toggle Button (Mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:hidden mb-6 text-center"
        >
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center space-x-2 bg-pitch-black text-white px-6 py-3 rounded-full hover:bg-pitch-black/90 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-12 ${showFilters ? 'block' : 'hidden lg:block'}`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
            {/* Category Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pitch-black mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-golden-glow" />
                Category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      selectedCategory === category.value
                        ? 'bg-golden-glow text-pitch-black shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Spice Level Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pitch-black mb-4 flex items-center">
                <Flame className="w-5 h-5 mr-2 text-warm-orange" />
                Spice Level
              </h3>
              <div className="flex flex-wrap gap-3">
                {spiceLevels.map((level) => (
                  <motion.button
                    key={level.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSpiceLevel(level.value)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      selectedSpiceLevel === level.value
                        ? 'bg-golden-glow text-black shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{level.icon}</span>
                    {level.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pitch-black mb-4">
                Price Range (10 pieces)
              </h3>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="250"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-golden-glow"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹0</span>
                  <span className="font-bold text-golden-glow">₹{priceRange[1]}</span>
                  <span>₹250</span>
                </div>
              </div>
            </div>

            {/* Reset Filters */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Showing <span className="font-bold text-golden-glow">{filteredItems.length}</span> of{' '}
                <span className="font-bold">{menuItems.length}</span> items
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetFilters}
                className="text-premium-orange hover:text-premium-orange/80 font-semibold text-sm transition-colors"
              >
                Reset All Filters
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key="menu-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-golden-glow transition-all duration-300"
                >
                  {/* Item Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-premium-orange via-warm-orange to-golden-glow flex items-center justify-center">
                    <span className="text-6xl">🥟</span>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                      {item.isPopular && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                          className="bg-golden-glow text-pitch-black px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1"
                        >
                          <TrendingUp className="w-3 h-3" />
                          <span>Popular</span>
                        </motion.div>
                      )}
                      {item.isNew && (
                        <motion.div
                          initial={{ scale: 0, rotate: 45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
                          className="bg-premium-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>New</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`${
                          getCategoryDisplay(item.category).color
                        } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                      >
                        {getCategoryDisplay(item.category).label}
                      </span>
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="p-5">
                    {/* Name and Spice Level */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-pitch-black flex-1">
                        {item.name}
                      </h3>
                      <span className="text-xl ml-2" title={getSpiceLevelDisplay(item.spiceLevel).label}>
                        {getSpiceLevelDisplay(item.spiceLevel).icon}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Preparation Time */}
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <span className="mr-1">⏱️</span>
                      <span>{item.preparationTime} mins</span>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">5 pieces</span>
                        <span className="text-lg font-bold text-golden-glow">₹{item.price5}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">10 pieces</span>
                        <span className="text-lg font-bold text-golden-glow">₹{item.price10}</span>
                      </div>
                    </div>

                    {/* Order Button */}
                    <motion.a
                      href="tel:+919955955191"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full bg-premium-orange text-white text-center py-3 rounded-lg font-semibold hover:bg-premium-orange/90 transition-colors"
                    >
                      Order Now
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">😢</div>
              <h3 className="text-2xl font-bold text-pitch-black mb-2">No items found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetFilters}
                className="bg-golden-glow text-pitch-black px-8 py-3 rounded-full font-bold hover:bg-golden-glow/90 transition-colors"
              >
                Reset All Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-vegetarian-green to-vegetarian-green/80 text-white px-8 py-4 rounded-2xl inline-block shadow-lg">
            <p className="font-bold text-lg">
              🌱 100% Pure Vegetarian | 🔒 FSSAI Certified: 20424201001152
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
