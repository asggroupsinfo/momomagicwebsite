
export const i18nConfig = {
  defaultLocale: 'en' as const,
  locales: ['en', 'hi', 'bn'] as const, // English, Hindi, Bengali
  localeNames: {
    en: 'English',
    hi: 'हिंदी',
    bn: 'বাংলা'
  },
  rtlLocales: [] as const, // None of these languages are RTL
  fallbackLocale: 'en' as const
};

export type Locale = typeof i18nConfig.locales[number];

export const getLocaleDirection = (locale: Locale): 'ltr' | 'rtl' => {
  return (i18nConfig.rtlLocales as readonly Locale[]).includes(locale) ? 'rtl' : 'ltr';
};

export const getLocaleName = (locale: Locale): string => {
  return i18nConfig.localeNames[locale] || locale;
};
