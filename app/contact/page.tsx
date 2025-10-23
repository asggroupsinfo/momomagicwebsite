'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-pitch-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-premium-orange mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have questions? Want to place a bulk order? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-golden-glow mb-6">Send Us a Message</h2>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-vegetarian-green/20 border border-vegetarian-green rounded-lg"
                >
                  <p className="text-vegetarian-green font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-deep-space border ${
                      errors.name ? 'border-warm-orange' : 'border-charcoal'
                    } rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-warm-orange">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-deep-space border ${
                      errors.email ? 'border-warm-orange' : 'border-charcoal'
                    } rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-warm-orange">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground/80 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-deep-space border ${
                      errors.phone ? 'border-warm-orange' : 'border-charcoal'
                    } rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors`}
                    placeholder="9955955191"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-warm-orange">{errors.phone}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground/80 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-deep-space border ${
                      errors.subject ? 'border-warm-orange' : 'border-charcoal'
                    } rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors`}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-warm-orange">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-deep-space border ${
                      errors.message ? 'border-warm-orange' : 'border-charcoal'
                    } rounded-lg text-foreground focus:outline-none focus:border-golden-glow transition-colors resize-none`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-warm-orange">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-golden-glow mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-premium-orange mb-1">Address</h3>
                    <p className="text-foreground/70">
                      Naya Bazar, Near Post Office<br />
                      Sherghati, Bihar 824211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-premium-orange mb-1">Phone</h3>
                    <p className="text-foreground/70">
                      <a href="tel:+919955955191" className="hover:text-golden-glow transition-colors">
                        +91 9955955191
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="font-semibold text-premium-orange mb-1">Website</h3>
                    <p className="text-foreground/70">www.momomegics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="font-semibold text-premium-orange mb-1">Business Hours</h3>
                    <p className="text-foreground/70">
                      10:00 AM - 10:00 PM<br />
                      Open Every Day
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-deep-space to-charcoal border-2 border-golden-glow">
              <h3 className="text-xl font-bold text-golden-glow mb-4">Quick Contact</h3>
              <p className="text-foreground/80 mb-6">
                For immediate assistance or bulk orders, call us directly:
              </p>
              <a
                href="tel:+919955955191"
                className="block text-center px-6 py-4 bg-premium-orange text-pitch-black font-bold text-xl rounded-lg hover:bg-burnt-orange transition-colors duration-300"
              >
                📞 +91 9955955191
              </a>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-golden-glow mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-deep-space border border-charcoal rounded-lg hover:border-golden-glow transition-colors text-2xl"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-deep-space border border-charcoal rounded-lg hover:border-golden-glow transition-colors text-2xl"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-deep-space border border-charcoal rounded-lg hover:border-golden-glow transition-colors text-2xl"
                >
                  🐦
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
