'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  const timeline = [
    { date: 'Sep 2023', event: 'Humble beginnings with small stall' },
    { date: 'Nov 2023', event: 'Pita to Momos transformation' },
    { date: 'Jan 2024', event: 'Exclusive Kurkure Momos introduced' },
    { date: 'Jun 2024', event: '"Best Quality Food" award from DM Office' },
    { date: 'Dec 2024', event: 'Premium stall redesign' },
    { date: 'Mar 2025', event: 'Pizza Momos innovation launched' },
  ];

  return (
    <div className="bg-cream-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-charcoal-black" style={{ fontFamily: 'Playfair Display, serif' }}>
          Our Story
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          From Pita to Perfection: The Momos Magic Journey
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card>
            <h2 className="text-3xl font-bold mb-4 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Dream Begins
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Dhruv Gupta, a young entrepreneur from Sherghati, Bihar, refused to settle for the ordinary. Tired of the 9-to-5 rat race, he believed in the philosophy: "Why be an employee when you can be an employer?" In September 2023, with dreams bigger than his pocket, he started with a small stall in Naya Bazar.
            </p>
          </Card>

          <Card>
            <h2 className="text-3xl font-bold mb-4 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Pita Experiment
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              His first venture featured "Pita" - a traditional Bihari delicacy made from rice and lentils, fried to perfection. While the dish held cultural significance, the market response was lukewarm. For two months, Dhruv watched as customers passed by, unaware of this hidden gem. It became clear - sometimes the best recipes need the right audience.
            </p>
          </Card>

          <Card>
            <h2 className="text-3xl font-bold mb-4 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Magic Transformation
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Undeterred by initial setbacks, Dhruv pivoted to momos - a universally loved street food. But these weren't ordinary momos. He infused them with the same passion and quality standards he maintained for his traditional recipes. The small stall began attracting attention, and soon "Momos Magic" became the talk of Sherghati.
            </p>
          </Card>

          <Card>
            <h2 className="text-3xl font-bold mb-4 text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              Innovation & Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              As demand skyrocketed, Dhruv introduced innovations that set Momos Magic apart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Kurkure Momos:</strong> A crispy, crunchy variation nobody else offered</li>
              <li><strong>Pizza Momos:</strong> Fusion creativity that became an instant hit</li>
              <li><strong>Premium Stall Design:</strong> Transforming from basic to branded excellence</li>
            </ul>
          </Card>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Journey Timeline
            </h2>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-24 font-bold text-premium-gold">
                    {item.date}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-magic-red text-white p-8 rounded-lg">
            <p className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Better to be a small owner than someone else's employee"
            </p>
            <p className="text-lg">- Dhruv Gupta, Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
