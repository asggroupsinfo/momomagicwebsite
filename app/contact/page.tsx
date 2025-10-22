'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-cream-white py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-charcoal-black" style={{ fontFamily: 'Playfair Display, serif' }}>
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Get in touch with Momos Magic
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-start space-x-4">
              <MapPin className="text-magic-red flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-black">Location</h3>
                <p className="text-gray-700">
                  Momo Magic, Naya Bazar<br />
                  Near Post Office<br />
                  Sherghati, Bihar 824211
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <Phone className="text-magic-red flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-black">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+919955955191" className="hover:text-magic-red transition-colors">
                    +91 9955955191
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">Call for takeaway orders</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <Clock className="text-magic-red flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-black">Hours</h3>
                <p className="text-gray-700">
                  Monday - Sunday<br />
                  10:00 AM - 10:00 PM
                </p>
                <p className="text-sm text-gray-600 mt-2">Open every day</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start space-x-4">
              <Mail className="text-magic-red flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-black">Website</h3>
                <p className="text-gray-700">
                  www.momomegics.com
                </p>
                <p className="text-sm text-gray-600 mt-2">Visit us online</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <h2 className="text-2xl font-bold mb-6 text-center text-magic-red" style={{ fontFamily: 'Playfair Display, serif' }}>
              Service Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-vegetarian-green">✓</span>
                <span>Takeaway Only (Currently Available)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-warm-orange">⏳</span>
                <span>10KM Delivery Radius (Coming Soon)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-vegetarian-green">✓</span>
                <span>Online Ordering Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-vegetarian-green">✓</span>
                <span>Group Order Special Discounts</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-warm-orange">⏳</span>
                <span>Catering Service (Coming Soon)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-warm-orange">⏳</span>
                <span>Table Booking (Coming Soon)</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center bg-magic-red text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit Us Today!
          </h2>
          <p className="text-lg mb-4">
            Experience the magic of Sherghati's finest momos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full">Award Winning</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">FSSAI Certified</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">100% Vegetarian</span>
          </div>
        </div>
      </div>
    </div>
  );
}
