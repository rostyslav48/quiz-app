import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import enNs1 from './locales/en/ns1.json';
import deNs1 from './locales/de/ns1.json';
import frNs1 from './locales/fr/ns1.json';
import esNs1 from './locales/es/ns1.json';
import uaNs1 from './locales/ua/ns1.json';

export const defaultNS = 'ns1';
export const resources = {
  en: {
    ns1: enNs1,
  },
  de: {
    ns1: deNs1,
  },
  fr: {
    ns1: frNs1,
  },
  es: {
    ns1: esNs1,
  },
  ua: {
    ns1: uaNs1,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({ lng: 'en', ns: ['ns1'], defaultNS, resources });

export default i18n;
