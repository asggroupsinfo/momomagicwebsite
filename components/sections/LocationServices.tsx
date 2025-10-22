'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  Truck,
  Smartphone,
  Users,
  UtensilsCrossed,
  Calendar,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'available' | 'coming-soon';
}

export const LocationServices: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime] = useState(new Date());

  const businessInfo = {
    name: 'Momo Magic',
    address: {
      line1: 'Momo Magic, Naya Bazar',
      line2: 'Near Post Office, Sherghati',
      line3: 'Bihar 824211',
      full: 'Momo Magic, Naya Bazar, Near Post Office, Sherghati, Bihar 824211',
    },
    phone: '+91 9955955191',
    hours: {
      open: '10:00',
      close: '22:00',
      days: 'Monday-Sunday',
    },
    coordinates: {
      lat: 24.5667,
      lng: 84.7833,
    },
  };

  const services: Service[] = [
    {
      id: 1,
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Takeaway Only',
      description: 'Currently Available - Quick pickup service',
      status: 'available',
    },
    {
      id: 2,
      icon: <Truck className="w-8 h-8" />,
      title: '10KM Delivery Radius',
      description: 'Coming Soon - Fast delivery to your doorstep',
      status: 'coming-soon',
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Online Ordering',
      description: 'Available via Momo Magic App',
      status: 'available',
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: 'Group Order Discounts',
      description: 'Special pricing for bulk orders',
      status: 'available',
    },
    {
      id: 5,
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: 'Catering Service',
      description: 'Booking available in app for events',
      status: 'available',
    },
    {
      id: 6,
      icon: <Calendar className="w-8 h-8" />,
      title: 'Table Booking',
      description: 'Coming Soon in App - Reserve your spot',
      status: 'coming-soon',
    },
  ];

  const isOpen = () => {
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;

    const [openHour, openMinute] = businessInfo.hours.open.split(':').map(Number);
    const [closeHour, closeMinute] = businessInfo.hours.close.split(':').map(Number);

    const openTimeInMinutes = openHour * 60 + openMinute;
    const closeTimeInMinutes = closeHour * 60 + closeMinute;

    return currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(businessInfo.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const openDirections = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      businessInfo.address.full
    )}`;
    window.open(mapsUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'
  }&q=${encodeURIComponent(businessInfo.address.full)}&zoom=15&maptype=roadmap`;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #DC2626 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Visit Our Magic Kitchen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us, call us, or order online - we're here to serve you the best momos in Bihar
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Google Maps Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-premium-gold">
              <div className="aspect-[4/3] bg-gray-200">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Map Overlay - Click to Open Directions */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openDirections}
                className="absolute bottom-4 right-4 bg-premium-gold text-foreground px-6 py-3 rounded-full shadow-lg font-semibold flex items-center space-x-2 hover:bg-premium-gold/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Get Directions</span>
              </motion.button>
            </div>

            {/* Address Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl shadow-lg p-6 border-2 border-premium-gold hover:border-premium-gold transition-colors bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-magic-red/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-magic-red" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-1">{businessInfo.address.line1}</p>
                  <p className="text-gray-600 mb-1">{businessInfo.address.line2}</p>
                  <p className="text-gray-600 mb-3">{businessInfo.address.line3}</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={copyAddress}
                    className="flex items-center space-x-2 text-premium-gold hover:text-premium-gold/80 transition-colors font-semibold"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact & Hours Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl shadow-lg p-6 border-2 border-premium-gold hover:border-premium-gold transition-colors bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-vegetarian-green/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-vegetarian-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Call for Orders</h3>
                  <p className="text-gray-600 mb-3">Quick takeaway orders via phone</p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCall}
                    className="bg-vegetarian-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-vegetarian-green/90 transition-colors flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{businessInfo.phone}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-xl shadow-lg p-6 border-2 border-premium-gold hover:border-premium-gold transition-colors bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-warm-orange/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-warm-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">Service Hours</h3>
                  <p className="text-gray-600 mb-3">{businessInfo.hours.days}</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        {businessInfo.hours.open} - {businessInfo.hours.close}
                      </p>
                    </div>
                    <div>
                      {isOpen() ? (
                        <span className="bg-vegetarian-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Open Now
                        </span>
                      ) : (
                        <span className="bg-magic-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Closed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-magic-red to-warm-orange rounded-xl shadow-lg p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-2">🥟 Quick Tip</h3>
              <p className="text-white/90">
                Call ahead for faster pickup! Our Kurkure and Pizza Momos are best enjoyed fresh and
                hot.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center font-heading">
            Our Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`rounded-xl shadow-lg p-6 border-2 transition-all duration-300 bg-white ${
                  service.status === 'available'
                    ? 'border-premium-gold hover:border-premium-gold'
                    : 'border-premium-gold hover:border-warm-orange'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-full ${
                      service.status === 'available'
                        ? 'bg-premium-gold/10 text-premium-gold'
                        : 'bg-warm-orange/10 text-warm-orange'
                    }`}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-foreground">{service.title}</h4>
                      {service.status === 'coming-soon' && (
                        <span className="bg-warm-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
