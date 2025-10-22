'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description?: string;
}

interface GoogleReviewsResponse {
  result?: {
    reviews?: Review[];
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
}

const FALLBACK_REVIEWS: Review[] = [
  {
    id: '1',
    author_name: 'Rohan Kumar',
    rating: 5,
    text: 'The Kurkure Momos are revolutionary! Nobody in Bihar makes them like Momos Magic. Dhruv bhaiya\'s innovation changed street food forever!',
    time: Date.now() - 86400000 * 7, // 7 days ago
    relative_time_description: 'a week ago',
  },
  {
    id: '2',
    author_name: 'Priya Singh',
    rating: 5,
    text: 'Awarded "Best Quality Food" for a reason! The hygiene, taste, and innovation combination is unmatched in Sherghati.',
    time: Date.now() - 86400000 * 14, // 14 days ago
    relative_time_description: '2 weeks ago',
  },
  {
    id: '3',
    author_name: 'Amit Sharma',
    rating: 5,
    text: 'From watching them start with a small stall to becoming the most premium food spot - what a journey! The Pizza Momos are genius!',
    time: Date.now() - 86400000 * 21, // 21 days ago
    relative_time_description: '3 weeks ago',
  },
  {
    id: '4',
    author_name: 'Neha Gupta',
    rating: 5,
    text: 'Best momos in Bihar! The quality is consistent and the taste is amazing. Love the variety they offer!',
    time: Date.now() - 86400000 * 30, // 30 days ago
    relative_time_description: 'a month ago',
  },
  {
    id: '5',
    author_name: 'Rajesh Verma',
    rating: 5,
    text: 'FSSAI certified and it shows! The hygiene standards are top-notch. My family loves ordering from here.',
    time: Date.now() - 86400000 * 45, // 45 days ago
    relative_time_description: 'a month ago',
  },
  {
    id: '6',
    author_name: 'Sonia Patel',
    rating: 5,
    text: 'The steamed momos are so fresh and delicious! And the prices are very reasonable. Highly recommend!',
    time: Date.now() - 86400000 * 60, // 60 days ago
    relative_time_description: '2 months ago',
  },
];

export const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isApiError, setIsApiError] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

        if (!apiKey || !placeId) {
          console.warn('Google Places API credentials not configured. Using fallback reviews.');
          setIsApiError(true);
          setIsLoading(false);
          return;
        }

        const response = await fetch(
          `/api/google-reviews?placeId=${placeId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data: GoogleReviewsResponse = await response.json();

        if (data.status === 'OK' && data.result?.reviews) {
          const sortedReviews = data.result.reviews
            .sort((a, b) => {
              if (b.rating !== a.rating) {
                return b.rating - a.rating;
              }
              return b.time - a.time;
            })
            .slice(0, 6); // Take top 6 reviews

          setReviews(sortedReviews);
          setIsApiError(false);
        } else {
          throw new Error('Invalid API response');
        }
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
        console.log('Using fallback static reviews');
        setIsApiError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'fill-premium-gold text-premium-gold'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-premium-gold border-t-transparent"></div>
            <p className="mt-4 text-cream-white">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream-white mb-4 font-heading">
            Join 2000+ Happy Customers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Who Found Their Magic
          </p>

          {/* API Status Badge */}
          {isApiError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-warm-orange/20 border border-warm-orange rounded-full"
            >
              <span className="text-sm text-warm-orange">
                Showing featured reviews
              </span>
            </motion.div>
          )}

          {!isApiError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-vegetarian-green/20 border border-vegetarian-green rounded-full"
            >
              <span className="text-sm text-vegetarian-green">
                ✓ Live reviews from Google
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Reviews Carousel */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="rounded-2xl shadow-2xl p-8 md:p-12 h-full flex flex-col justify-between bg-white border-2 border-premium-gold">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-16 h-16 text-premium-gold" />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    {/* Star Rating */}
                    <div className="mb-6">{renderStars(reviews[currentIndex].rating)}</div>

                    {/* Review Text */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-body">
                      "{reviews[currentIndex].text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t-2 border-premium-gold/20">
                    {reviews[currentIndex].profile_photo_url ? (
                      <img
                        src={reviews[currentIndex].profile_photo_url}
                        alt={reviews[currentIndex].author_name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-premium-gold flex items-center justify-center">
                        <span className="text-xl font-bold text-foreground">
                          {reviews[currentIndex].author_name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">
                        {reviews[currentIndex].author_name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {reviews[currentIndex].relative_time_description ||
                          new Date(reviews[currentIndex].time).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="pointer-events-auto bg-premium-gold text-foreground p-3 rounded-full shadow-lg hover:bg-premium-gold/90 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="pointer-events-auto bg-premium-gold text-foreground p-3 rounded-full shadow-lg hover:bg-premium-gold/90 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-premium-gold w-8'
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Momo+Magic+Sherghati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-premium-gold hover:text-premium-gold/80 transition-colors font-semibold"
          >
            <span>See all reviews on Google</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
