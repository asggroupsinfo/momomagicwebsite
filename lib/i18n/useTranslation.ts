import { useState, useEffect } from 'react';
import { Locale, i18nConfig } from './config';

type TranslationObject = Record<string, any>;

const loadTranslation = async (locale: Locale): Promise<TranslationObject> => {
  try {
    const translation = await import(`./translations/${locale}.json`);
    return translation.default;
  } catch (error) {
    console.error(`Failed to load translation for locale: ${locale}`, error);
    const fallback = await import(`./translations/${i18nConfig.fallbackLocale}.json`);
    return fallback.default;
  }
};

const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split('.');
  let value = obj;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Return key if not found
    }
  }
  
  return typeof value === 'string' ? value : path;
};

export const useTranslation = () => {
  const [locale, setLocale] = useState<Locale>((): Locale => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      const validLocale: Locale = savedLocale && (i18nConfig.locales as readonly string[]).includes(savedLocale) 
        ? (savedLocale as Locale)
        : i18nConfig.defaultLocale;
      return validLocale;
    }
    return i18nConfig.defaultLocale;
  });
  
  const [translations, setTranslations] = useState<TranslationObject>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      const trans = await loadTranslation(locale);
      setTranslations(trans);
      setIsLoading(false);
    };

    loadTranslations();
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const t = (key: string, params?: Record<string, string>): string => {
    let value = getNestedValue(translations, key);
    
    if (params) {
      Object.keys(params).forEach(paramKey => {
        value = value.replace(`{{${paramKey}}}`, params[paramKey]);
      });
    }
    
    return value;
  };

  const changeLocale = (newLocale: Locale) => {
    if ((i18nConfig.locales as readonly string[]).includes(newLocale)) {
      setLocale(newLocale);
    }
  };

  return {
    t,
    locale,
    changeLocale,
    isLoading,
    availableLocales: i18nConfig.locales,
    localeNames: i18nConfig.localeNames
  };
};
