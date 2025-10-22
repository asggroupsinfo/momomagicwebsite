
export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'hi', 'bn'], // English, Hindi, Bengali
  localeNames: {
    en: 'English',
    hi: 'हिंदी',
    bn: 'বাংলা'
  },
  rtlLocales: [], // None of these languages are RTL
  fallbackLocale: 'en'
};

export type Locale = typeof i18nConfig.locales[number];

export const getLocaleDirection = (locale: Locale): 'ltr' | 'rtl' => {
  return i18nConfig.rtlLocales.includes(locale) ? 'rtl' : 'ltr';
};

export const getLocaleName = (locale: Locale): string => {
  return i18nConfig.localeNames[locale] || locale;
};
