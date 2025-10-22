'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Heart,
  Sparkles,
  TrendingUp,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Leaf,
  Clock,
  Shield,
} from 'lucide-react';

interface TimelineEvent {
  date: string;
  event: string;
  description: string;
  icon: React.ReactNode;
}

interface GalleryImage {
  id: number;
  category: 'stall' | 'food' | 'awards';
  title: string;
  description: string;
}

interface QualityStandard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<string>('all');

  const timeline: TimelineEvent[] = [
    {
      date: 'Sep 2023',
      event: 'Humble Beginnings',
      description: 'Started with a small stall in Naya Bazar with dreams bigger than pocket',
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      date: 'Nov 2023',
      event: 'Pita to Momos Transformation',
      description: 'Pivoted from traditional Pita to universally loved momos',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      date: 'Jan 2024',
      event: 'Kurkure Momos Innovation',
      description: 'Introduced exclusive Kurkure Momos - Sherghati\'s first crispy innovation',
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      date: 'Jun 2024',
      event: 'Best Quality Food Award',
      description: 'Awarded by District Magistrate Office for exceptional quality',
      icon: <Award className="w-5 h-5" />,
    },
    {
      date: 'Dec 2024',
      event: 'Premium Stall Redesign',
      description: 'Transformed from basic stall to premium branded experience',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      date: 'Mar 2025',
      event: 'Pizza Momos Launch',
      description: 'Fusion innovation combining pizza flavors with momo perfection',
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  const qualityCommitments = [
    {
      id: 1,
      icon: <Leaf className="w-8 h-8" />,
      title: 'Daily Fresh Ingredients',
      description: 'We source fresh vegetables and ingredients from local markets every morning',
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Secret Magic Masala',
      description: 'Our special spice blend is created in-house using family recipes',
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8" />,
      title: 'Hygiene-First Kitchen',
      description: 'FSSAI certified kitchen with highest food safety standards',
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every momo is handcrafted with passion and attention to detail',
    },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      category: 'stall',
      title: 'Our Premium Stall',
      description: 'Modern branded stall in Naya Bazar, Sherghati',
    },
    {
      id: 2,
      category: 'stall',
      title: 'Kitchen Setup',
      description: 'FSSAI certified hygienic kitchen with modern equipment',
    },
    {
      id: 3,
      category: 'stall',
      title: 'Customer Area',
      description: 'Welcoming space for our valued customers',
    },
    {
      id: 4,
      category: 'food',
      title: 'Kurkure Momos',
      description: 'Our signature crispy kurkure momos - Sherghati exclusive',
    },
    {
      id: 5,
      category: 'food',
      title: 'Pizza Momos',
      description: 'Fusion innovation with Italian flavors',
    },
    {
      id: 6,
      category: 'food',
      title: 'Steamed Collection',
      description: 'Fresh and healthy steamed momos',
    },
    {
      id: 7,
      category: 'food',
      title: 'Fried Delights',
      description: 'Golden crispy fried momos',
    },
    {
      id: 8,
      category: 'awards',
      title: 'Best Quality Food Award',
      description: 'Awarded by District Magistrate Office, June 2024',
    },
    {
      id: 9,
      category: 'awards',
      title: 'FSSAI Certification',
      description: 'License No: 20424201001152',
    },
  ];

  const qualityStandards: QualityStandard[] = [
    {
      id: 1,
      icon: <Shield className="w-12 h-12" />,
      title: 'Hygiene Excellence',
      description:
        'FSSAI certified kitchen with regular health inspections. All staff trained in food safety protocols.',
      color: 'bg-vegetarian-green',
    },
    {
      id: 2,
      icon: <Leaf className="w-12 h-12" />,
      title: 'Freshness Guarantee',
      description:
        'Ingredients sourced daily from trusted local suppliers. No preservatives or artificial flavors.',
      color: 'bg-premium-gold',
    },
    {
      id: 3,
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Innovation First',
      description:
        'Constantly experimenting with new flavors and techniques. First to introduce Kurkure and Pizza Momos in Sherghati.',
      color: 'bg-magic-red',
    },
  ];

  const filteredGallery =
    galleryFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === galleryFilter);

  const galleryCategories = [
    { value: 'all', label: 'All Photos', icon: '📸' },
    { value: 'stall', label: 'Our Stall', icon: '🏪' },
    { value: 'food', label: 'Food', icon: '🥟' },
    { value: 'awards', label: 'Awards', icon: '🏆' },
  ];

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredGallery.findIndex((img) => img.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
      setSelectedImage(filteredGallery[prevIndex].id);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredGallery.findIndex((img) => img.id === selectedImage);
      const nextIndex = currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredGallery[nextIndex].id);
    }
  };

  return (
    <div className="bg-cream-white min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-charcoal-black mb-4 font-heading">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From Pita to Perfection: The Momos Magic Journey
          </p>
        </motion.div>

        {/* Founder's Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-magic-red via-warm-orange to-premium-gold flex items-center justify-center shadow-2xl border-4 border-premium-gold">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">👨‍🍳</div>
                  <h3 className="text-3xl font-bold mb-2">Dhruv Gupta</h3>
                  <p className="text-xl">Founder & Head Innovator</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 bg-premium-gold text-charcoal-black px-6 py-3 rounded-full font-bold shadow-lg">
                Since 2023
              </div>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black font-heading">
                The Dream Begins
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dhruv Gupta, a young entrepreneur from Sherghati, Bihar, refused to settle for the
                ordinary. Tired of the 9-to-5 rat race, he believed in the philosophy:{' '}
                <span className="font-bold text-magic-red">
                  "Why be an employee when you can be an employer?"
                </span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In September 2023, with dreams bigger than his pocket, he started with a small stall
                in Naya Bazar. His first venture featured "Pita" - a traditional Bihari delicacy.
                While the dish held cultural significance, the market response was lukewarm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Undeterred by initial setbacks, Dhruv pivoted to momos - a universally loved street
                food. But these weren't ordinary momos. He infused them with the same passion and
                quality standards he maintained for his traditional recipes. The small stall began
                attracting attention, and soon{' '}
                <span className="font-bold text-premium-gold">"Momos Magic"</span> became the talk
                of Sherghati.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Philosophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-r from-magic-red to-warm-orange rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <div className="text-6xl mb-6">🥟</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Our Philosophy
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              "Quantity bhi Mast, Taste bhi Zabardast"
            </p>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Because every customer deserves the best of both worlds - generous portions without
              compromising on taste
            </p>
          </div>
        </motion.div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-black mb-12 font-heading">
            Our Quality Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-all duration-300 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: 'spring' }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-premium-gold/10 text-premium-gold mb-4"
                >
                  {commitment.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-charcoal-black mb-2">
                  {commitment.title}
                </h3>
                <p className="text-sm text-gray-600">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-black mb-12 font-heading">
            Our Journey Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-premium-gold"></div>

            {/* Timeline Events */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1, type: 'spring' }}
                    className="absolute left-6 top-2 w-5 h-5 rounded-full bg-premium-gold border-4 border-cream-white shadow-lg"
                  ></motion.div>

                  {/* Event Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-colors">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-premium-gold">{item.icon}</div>
                      <span className="text-sm font-bold text-premium-gold">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal-black mb-2">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-black mb-8 font-heading">
            Our Gallery
          </h2>

          {/* Gallery Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {galleryCategories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setGalleryFilter(category.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  galleryFilter === category.value
                    ? 'bg-premium-gold text-charcoal-black shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image.id)}
                className="relative aspect-square rounded-2xl bg-gradient-to-br from-magic-red via-warm-orange to-premium-gold cursor-pointer overflow-hidden shadow-lg group"
              >
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">
                    {image.category === 'stall' && '🏪'}
                    {image.category === 'food' && '🥟'}
                    {image.category === 'awards' && '🏆'}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-black mb-12 font-heading">
            Our Quality Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${standard.color} text-white mb-6`}
                >
                  {standard.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-charcoal-black mb-4">{standard.title}</h3>
                <p className="text-gray-600 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal-black mb-8 font-heading">
            Our Team
          </h2>
          <div className="bg-gradient-to-r from-magic-red/10 to-warm-orange/10 rounded-2xl p-12 text-center border-2 border-dashed border-premium-gold">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-charcoal-black mb-4">
              Meet Our Amazing Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of food enthusiasts works tirelessly to bring you the best momos
              in Sherghati. Team member profiles coming soon!
            </p>
          </div>
        </motion.div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-charcoal-black text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <div className="text-6xl mb-6">💭</div>
            <p className="text-2xl md:text-3xl font-bold mb-6 font-heading">
              "Better to be a small owner than someone else's employee"
            </p>
            <p className="text-xl text-white/80">- Dhruv Gupta, Founder</p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-charcoal-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 bg-white text-charcoal-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 bg-white text-charcoal-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              {(() => {
                const image = galleryImages.find((img) => img.id === selectedImage);
                if (!image) return null;

                return (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-magic-red via-warm-orange to-premium-gold flex items-center justify-center">
                      <span className="text-9xl">
                        {image.category === 'stall' && '🏪'}
                        {image.category === 'food' && '🥟'}
                        {image.category === 'awards' && '🏆'}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-charcoal-black mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-600">{image.description}</p>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
