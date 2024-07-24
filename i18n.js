import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ni18nConfig } from './ni18n.config'

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    ...ni18nConfig,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;

