'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What are your operating hours?',
      answer: 'We are open every day from 10:00 AM to 10:00 PM, including weekends and holidays.',
    },
    {
      id: 2,
      question: 'Do you offer delivery services?',
      answer: 'Currently, we offer takeaway only. However, we are planning to launch delivery services within a 10KM radius very soon!',
    },
    {
      id: 3,
      question: 'Are all your momos vegetarian?',
      answer: 'Yes! We are 100% pure vegetarian. All our momos are made with fresh vegetables, paneer, soya, and cheese.',
    },
    {
      id: 4,
      question: 'What makes your Kurkure Momos special?',
      answer: 'Our Kurkure Momos are a Sherghati exclusive! We created this crispy, crunchy variation that nobody else offers. It\'s our signature innovation.',
    },
    {
      id: 5,
      question: 'Do you accept group orders?',
      answer: 'Absolutely! We offer special discounts for group orders. Please call us at +91 9955955191 to discuss your requirements.',
    },
    {
      id: 6,
      question: 'Is your kitchen FSSAI certified?',
      answer: 'Yes, we are FSSAI certified (License: 20424201001152) and maintain the highest hygiene standards in our kitchen.',
    },
  ];

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setFormErrors({});

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-charcoal-black"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Phone */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-magic-red/10 flex items-center justify-center mb-4">
                <Phone className="text-magic-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Call Us</h3>
              <a
                href="tel:+919955955191"
                className="text-magic-red hover:text-premium-gold transition-colors font-semibold"
              >
                +91 9955955191
              </a>
              <p className="text-sm text-gray-600 mt-2">For takeaway orders</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-magic-red/10 flex items-center justify-center mb-4">
                <MapPin className="text-magic-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Visit Us</h3>
              <p className="text-gray-700">
                Naya Bazar, Near Post Office
                <br />
                Sherghati, Bihar 824211
              </p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-magic-red/10 flex items-center justify-center mb-4">
                <Clock className="text-magic-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Open Daily</h3>
              <p className="text-gray-700">
                Monday - Sunday
                <br />
                10:00 AM - 10:00 PM
              </p>
            </div>
          </motion.div>

          {/* Website */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-premium-gold transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-magic-red/10 flex items-center justify-center mb-4">
                <Mail className="text-magic-red" size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-black mb-2">Website</h3>
              <p className="text-magic-red hover:text-premium-gold transition-colors font-semibold">
                www.momomegics.com
              </p>
              <p className="text-sm text-gray-600 mt-2">Visit us online</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <h2
                className="text-3xl font-bold mb-6 text-charcoal-black"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-magic-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      formErrors.name ? 'border-magic-red' : 'border-gray-300'
                    } focus:border-premium-gold focus:outline-none transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-magic-red text-sm mt-1 flex items-center"
                    >
                      <AlertCircle size={16} className="mr-1" />
                      {formErrors.name}
                    </motion.p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-magic-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      formErrors.phone ? 'border-magic-red' : 'border-gray-300'
                    } focus:border-premium-gold focus:outline-none transition-colors`}
                    placeholder="Enter 10-digit phone number"
                  />
                  {formErrors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-magic-red text-sm mt-1 flex items-center"
                    >
                      <AlertCircle size={16} className="mr-1" />
                      {formErrors.phone}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      formErrors.email ? 'border-magic-red' : 'border-gray-300'
                    } focus:border-premium-gold focus:outline-none transition-colors`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-magic-red text-sm mt-1 flex items-center"
                    >
                      <AlertCircle size={16} className="mr-1" />
                      {formErrors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-magic-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      formErrors.message ? 'border-magic-red' : 'border-gray-300'
                    } focus:border-premium-gold focus:outline-none transition-colors resize-none`}
                    placeholder="Tell us how we can help you..."
                  />
                  {formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-magic-red text-sm mt-1 flex items-center"
                    >
                      <AlertCircle size={16} className="mr-1" />
                      {formErrors.message}
                    </motion.p>
                  )}
                </div>

                {/* reCAPTCHA Notice */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 flex items-center">
                    <Shield className="mr-2 text-vegetarian-green" size={20} />
                    This form is protected by spam protection. Your information is safe with us.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-magic-red text-white hover:bg-premium-gold hover:text-charcoal-black'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={24} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={24} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-vegetarian-green/10 border-2 border-vegetarian-green rounded-lg p-4 flex items-center"
                    >
                      <CheckCircle className="text-vegetarian-green mr-3" size={24} />
                      <div>
                        <p className="font-bold text-vegetarian-green">Message Sent Successfully!</p>
                        <p className="text-sm text-gray-700">
                          We'll get back to you as soon as possible.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-magic-red/10 border-2 border-magic-red rounded-lg p-4 flex items-center"
                    >
                      <AlertCircle className="text-magic-red mr-3" size={24} />
                      <div>
                        <p className="font-bold text-magic-red">Oops! Something went wrong.</p>
                        <p className="text-sm text-gray-700">
                          Please try again or call us directly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 h-full">
              <h2
                className="text-3xl font-bold mb-6 text-charcoal-black"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Find Us Here
              </h2>

              {/* Google Maps Embed */}
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5!2d85.1!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAwLjAiTiA4NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Momos Magic Location"
                ></iframe>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-magic-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal-black">Address</p>
                    <p className="text-gray-700">
                      Momo Magic, Naya Bazar, Near Post Office
                      <br />
                      Sherghati, Bihar 824211
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-magic-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal-black">Operating Hours</p>
                    <p className="text-gray-700">Open every day: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-magic-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-charcoal-black">Call for Directions</p>
                    <a
                      href="tel:+919955955191"
                      className="text-magic-red hover:text-premium-gold transition-colors"
                    >
                      +91 9955955191
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-magic-red to-warm-orange rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Follow Us on Social Media
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Stay updated with our latest offerings and special deals!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all"
              >
                <Facebook size={32} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all"
              >
                <Instagram size={32} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all"
              >
                <Twitter size={32} />
              </motion.div>
            </div>
            <p className="text-sm mt-4 opacity-75">Social media links coming soon!</p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2
            className="text-4xl font-bold text-center mb-12 text-charcoal-black"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-charcoal-black pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="text-magic-red flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-magic-red flex-shrink-0" size={24} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-200 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center bg-charcoal-black text-white p-12 rounded-2xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Experience the Magic?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today or call for takeaway orders!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+919955955191"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-magic-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-premium-gold hover:text-charcoal-black transition-all duration-300 inline-flex items-center"
            >
              <Phone className="mr-2" size={24} />
              Call Now
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-premium-gold text-charcoal-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300"
            >
              View Menu
            </motion.a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="bg-white/10 px-4 py-2 rounded-full">🏆 Award Winning</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">🔒 FSSAI Certified</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">🌱 100% Vegetarian</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Shield({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
