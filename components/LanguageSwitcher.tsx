'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { Locale } from '@/lib/i18n/config';

export const LanguageSwitcher: React.FC = () => {
  const { locale, changeLocale, availableLocales, localeNames } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Change language"
      >
        <Globe size={20} className="text-premium-gold" />
        <span className="text-sm font-medium text-white">
          {localeNames[locale]}
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
            >
              {availableLocales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${
                    locale === loc ? 'bg-premium-gold/10' : ''
                  }`}
                >
                  <span className={`text-sm font-medium ${
                    locale === loc ? 'text-premium-gold' : 'text-gray-700'
                  }`}>
                    {localeNames[loc]}
                  </span>
                  {locale === loc && (
                    <Check size={16} className="text-premium-gold" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
